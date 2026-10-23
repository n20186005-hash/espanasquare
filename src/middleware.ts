import { defineMiddleware } from 'astro:middleware';
const pages=new Set(['/','/privacidad/','/terminos/','/cookies/']);
export const onRequest=defineMiddleware(async(context,next)=>{
 const url=new URL(context.request.url);
 if(url.protocol==='http:'&&!['localhost','127.0.0.1','[::1]'].includes(url.hostname)){url.protocol='https:';return Response.redirect(url.href,301);}
 if(url.pathname==='/index.html'){url.pathname='/';return Response.redirect(url.href,301);}
 if(pages.has(url.pathname+'/')){url.pathname+='/';return Response.redirect(url.href,301);}
 const response=await next(); const headers=new Headers(response.headers);
 if(response.status===404||['/404','/404/','/404.html'].includes(url.pathname)){headers.set('X-Robots-Tag','noindex');return new Response(response.body,{status:404,headers});}
 headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');
 if(headers.get('Content-Type')?.includes('text/html')){headers.set('Cache-Control','no-cache');headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self' https://www.googletagmanager.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com; frame-src https://www.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");}
 return new Response(response.body,{status:response.status,headers});
});
