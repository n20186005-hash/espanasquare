import test from 'node:test';import assert from 'node:assert/strict';
import {getWeather,computeAdvice} from '../src/lib/weather.ts';
test('native server forecast validates upstream payload, fallback and advice',async()=>{
 const original=globalThis.fetch;let request='';
 try{
 globalThis.fetch=async(url)=>{request=String(url);return Response.json({current:{}})};
 assert.equal(await getWeather(),null);
 globalThis.fetch=async(url)=>{request=String(url);return Response.json({current:{temperature_2m:25,apparent_temperature:25,relative_humidity_2m:30,wind_speed_10m:5,weather_code:0,is_day:1},daily:{time:['2026-10-23'],weather_code:[0],temperature_2m_max:[28],temperature_2m_min:[15],precipitation_probability_max:[0],wind_speed_10m_max:[5],uv_index_max:[3],sunrise:['2026-10-23T06:00'],sunset:['2026-10-23T19:00']}})};
 const data=await getWeather();assert.equal(data.now.tempC,25);assert.equal(data.daily.length,1);assert.ok(request.includes('latitude=-31.4285745'));assert.ok(request.includes('longitude=-64.1848176'));
 const storm={...data,now:{...data.now,code:95},day:{...data.day,popMax:10}};assert.ok(computeAdvice(storm).alerts.length);assert.ok(!computeAdvice(storm).activity.some(text=>text.includes('acuáticos')));
 const heat={...data,day:{...data.day,maxC:44}};assert.ok(!computeAdvice(heat).outfit.some(text=>text.includes('Buen clima')));
 globalThis.fetch=async()=>{throw Error('offline')};assert.equal((await getWeather()).now.tempC,25);
 }finally{globalThis.fetch=original;}
});
