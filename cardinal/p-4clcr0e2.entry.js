import{r as t,h as o,g as e}from"./p-bd5842d7.js";import"./p-11ec80fb.js";import{i as n}from"./p-c2b42fe0.js";import"./p-4bed3927.js";const s=class{constructor(o){t(this,o),this.routes={}}componentWillLoad(){let t={},o=function(e){return e.forEach(e=>{if(e.children)o(e.children);else{let{path:o,component:n,componentProps:s}=e;t[o]={component:n,componentProps:s}}}),t};this.routes=o(this.pages)}locationChanged(t){this.currentRoute=t}render(){let t=this.currentRoute.search;-1!==t.indexOf("&")&&(t=t.substring(0,t.indexOf("&")));let e=this.routes[t],n="psk-page-not-found",s={urlDestination:this.pages[0].path};return e&&(n=e.component,s=e.componentProps),o("stencil-route",{component:n,componentProps:s})}get el(){return e(this)}static get watchers(){return{location:["locationChanged"]}}};n(s);export{s as query_pages_router};