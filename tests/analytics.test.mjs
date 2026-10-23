import test from "node:test";
import assert from "node:assert/strict";
import { choiceStore } from "../src/lib/analytics.ts";
function storage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
        getItem: (key) => values.get(key) ?? null,
        setItem: (key, value) => {
            values.set(key, value);
        },
        removeItem: (key) => {
            values.delete(key);
        },
    };
}
test("denial, confirmed grant, withdrawal and regrant", () => {
    const local = storage(), session = storage();
    const choice = choiceStore(() => local, () => session);
    assert.equal(choice.read(), false);
    assert.equal(choice.save(true).granted, true);
    assert.equal(choice.read(), true);
    assert.equal(choice.save(false).granted, false);
    assert.equal(choice.read(), false);
    assert.equal(choice.save(true).granted, true);
    assert.equal(choiceStore(() => local, () => storage()).read(), true);
    local.removeItem("pe-cookie-consent");
    assert.equal(choice.read(), false);
});
test("read failures and unverifiable writes stay denied, including a fresh tab", () => {
    for (const old of [false, true])
        for (const boundary of [
            "local-read",
            "session-read",
            "local-write",
            "session-clear",
        ]) {
            const local = storage(old ? { "pe-cookie-consent": '{"analytics":true}' } : {}), session = storage({ "pe-analytics-veto": "denied" });
            const shared = {
                ...local,
                ...(boundary === "local-read"
                    ? {
                        getItem() {
                            throw new Error("blocked");
                        },
                    }
                    : {}),
                ...(boundary === "local-write" ? { setItem() { } } : {}),
            };
            const tab = {
                ...session,
                ...(boundary === "session-read"
                    ? {
                        getItem() {
                            throw new Error("blocked");
                        },
                    }
                    : {}),
                ...(boundary === "session-clear" ? { removeItem() { } } : {}),
            };
            const choice = choiceStore(() => shared, () => tab);
            const result = choice.save(true);
            assert.equal(result.granted, false, boundary);
            assert.equal(choice.read(), false);
            if (!result.otherTabsMayRemain)
                assert.equal(choiceStore(() => local, () => storage()).read(), false);
        }
});
test("readback refusal and failed refusal/removal report possible retained permission", () => {
    const local = { getItem: () => '{"analytics":true}', setItem() { }, removeItem() { } };
    const choice = choiceStore(() => local, () => storage());
    const result = choice.save(false);
    assert.equal(result.granted, false);
    assert.equal(result.saved, false);
    assert.equal(result.otherTabsMayRemain, true);
});
test("runtime denial and loaded-library regrant do not duplicate the loader or config", async () => {
    const local = storage(), session = storage();
    const scripts = [];
    const listeners = new Map();
    Object.defineProperty(globalThis, "window", {
        configurable: true,
        value: {
            localStorage: local,
            sessionStorage: session,
            dataLayer: [],
            addEventListener: (name, cb) => listeners.set(name, cb),
            removeEventListener: (name) => listeners.delete(name),
        },
    });
    Object.defineProperty(globalThis, "document", {
        configurable: true,
        value: {
            querySelector: () => scripts[0] ?? null,
            createElement: () => ({ dataset: {} }),
            head: { appendChild: (script) => scripts.push(script) },
        },
    });
    const analytics = await import("../src/lib/analytics.ts");
    const cleanup = analytics.initializeAnalytics();
    assert.equal(scripts.length, 0);
    assert.equal(analytics.saveAnalytics(true).granted, true);
    assert.equal(scripts.length, 1);
    assert.equal(analytics.saveAnalytics(false).granted, false);
    assert.equal(window["ga-disable-G-HXM22WWPKP"], true);
    assert.equal(analytics.saveAnalytics(true).granted, true);
    assert.equal(scripts.length, 1);
    assert.equal(window.dataLayer.filter((entry) => entry[0] === "config").length, 1);
    local.removeItem("pe-cookie-consent");
    listeners.get("storage")({ key: "pe-cookie-consent" });
    assert.equal(window["ga-disable-G-HXM22WWPKP"], true);
    cleanup();
});
test("late read failure rolls back an attempted grant and reports any unverified permission", () => {
    const local = storage();
    let reads = 0;
    const failing = {
        ...local,
        getItem(key) {
            if (++reads >= 3)
                throw new Error("late failure");
            return local.getItem(key);
        },
    };
    const result = choiceStore(() => failing, () => storage()).save(true);
    assert.equal(result.granted, false);
    assert.equal(result.saved, false);
    assert.equal(result.otherTabsMayRemain, true);
});
