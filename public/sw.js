const CACHE='espanasquare-static-v2';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('espanasquare-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){event.respondWith(fetch(request).catch(()=>new Response('Sin conexión. Volvé a cargar para consultar información y pronósticos actuales.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})));return;}
 if(/\.(png|jpe?g|webp|svg|css|js|webmanifest)$/i.test(url.pathname))event.respondWith(fetch(request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(request,response.clone()));return response;}).catch(()=>caches.match(request).then(cached=>cached||new Response('No disponible',{status:503}))));
});
