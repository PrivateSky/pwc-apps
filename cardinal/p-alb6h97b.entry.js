import{r as e,h as r}from"./p-2eb42df6.js";import{C as o}from"./p-9e1e2fb1.js";const t=class{constructor(r){e(this,r),this.mobileLayout=!1}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<960}componentWillLoad(){this.checkLayout()}render(){let e=window.globalConfig.appVersion,o=r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:960}),t=r("div",{class:"nav-footer"},"version ",e),i=[];return i=this.mobileLayout?[r("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),o]:[r("psk-user-profile",null),o,t],r("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},r("aside",null,i),r("section",null,r("psk-app-router",{failRedirectTo:"/home"}),!0===this.mobileLayout?t:null))}};!function(e,r,o,t){var i,s=arguments.length,l=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,o,t);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(s<3?i(l):s>3?i(r,o,l):i(r,o))||l);s>3&&l&&Object.defineProperty(r,o,l)}([o()],t.prototype,"mobileLayout",void 0);export{t as psk_default_renderer};