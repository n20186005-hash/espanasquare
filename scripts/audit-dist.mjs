import fs from 'node:fs'; import path from 'node:path';
const root='dist'; if(!fs.existsSync(root)){console.error('dist/ no existe');process.exit(1)}
const forbidden=['example.com','localhost','chrome-extension://']; let bad=[];
function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else if(/\.(html|js|json|xml|txt|css)$/.test(e.name)){const t=fs.readFileSync(f,'utf8');for(const x of forbidden)if(t.includes(x))bad.push(`${f}: ${x}`)}}}
walk(root); if(bad.length){console.error(bad.join('\n'));process.exit(1)} console.log('Audit OK: no forbidden placeholders found.');
