import{r as t,h as e,g as i}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as s}from"./p-f3fbe684.js";import{C as r}from"./p-f49df5a7.js";class o{constructor(t){this._element=t}receive(t,e,i){"function"==typeof e&&(i=e,e=null),t&&0!==t.trim().length&&i&&"function"==typeof i&&this._element&&this._element.addEventListener&&(e?e.addEventListener(t,i):this._element.addEventListener(t,i))}send(t,e,i){if(!(t&&0!==t.trim().length&&this._element&&this._element&&this._element.dispatchEvent))return;let s=new CustomEvent(t,{bubbles:!0,cancelable:!0,composed:!0,detail:e});i?i.dispatchEvent(s):this._element.dispatchEvent(s)}executeScript(t,e){return t&&"string"==typeof e&&e.trim().length>0&&new Function("controller",e)(t),null}}const n="@event:";class l{static _prepareRoutesTree(t,e){let i=function(t){let s={};return t.forEach(t=>{let r=t.name.replace(/(\s+|-)/g,"").toLowerCase();if(!s[r]){let i=t.path;switch(e){case"browser":case"query":i=t.path;break;case"hash":i="/#"+t.path}s[r]={path:i}}if("object"==typeof t.children&&Array.isArray(t.children.items))s[r].children={type:"known",items:i(t.children.items)};else if("string"==typeof t.children&&0===t.children.indexOf(n)){let e=t.children.substring(n.length);s[r].children={type:"event",event:e}}}),s};return i(t)}static _prepareConfiguration(t,e){let i={};i.baseUrl=e;let s=e+t.basePagesUrl;if(!t.menu||!t.menu.defaultMenuConfig)throw new Error("Default menu configuration is missing");let r=t.menu.defaultMenuConfig;t.profile&&(i.profile=t.profile);let o=function(t){for(let e=0;e<t.length;e++)t[e].children&&t[e].children.items?o(t[e].children.items):void 0!==t[e].indexed&&"false"===t[e].indexed.toString()&&t.splice(e,1);return t},a=function(t,e){return t.forEach(t=>{if(!t.path){let e=t.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");e=e.replace(/[:\/]/g,""),t.path=e}if(e?t.path=e+"/"+t.path:0!==t.path.indexOf("/")&&(t.path="/"+t.path),t.children)t.type="abstract",t.icon||(t.icon=r.icon);else{for(let e in r)t.hasOwnProperty(e)||(t[e]=r[e]);if("psk-page-loader"===t.component)if(t.componentProps||(t.componentProps={}),t.pageSrc)t.componentProps.pageUrl=t.pageSrc.startsWith("http")?t.pageSrc:s+t.pageSrc;else{let i=t.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase(),r="";e&&(r=e.replace(/^\//,"")),t.componentProps.pageUrl=s+r+"/"+i+".html"}}if("object"==typeof t.children&&Array.isArray(t.children))t.children={type:"known",items:JSON.parse(JSON.stringify(t.children))},a(t.children.items,t.path);else if("string"==typeof t.children&&0==t.children.indexOf(n)){let e=t.children.substring(n.length);t.children={type:"event",event:e},t.component="psk-ssapp-loader"}}),t};i.routes=a(t.menu.pages),i.historyType="browser";let c=t.menu.defaultMenuConfig.historyType;if("hash"!==c&&"query"!==c||(i.historyType=c),"query"===c){let e="?";t.menu.defaultMenuConfig.pagePrefix&&(e=t.menu.defaultMenuConfig.pagePrefix);let s=function(t){t.forEach(t=>{let i=t.path;0===i.indexOf("/")&&(i=i.substr(1)),t.path=`${e}${i}`,t.children&&s(t.children.items)})};s(i.routes)}let p=JSON.parse(JSON.stringify(i.routes));return i.menu=o(p),i.pagesHierarchy=l._prepareRoutesTree(i.routes,c),i}}const a="/app-config.json";class c extends o{constructor(t){super(t),this.configIsLoaded=!1,this.pendingRequests=[],this._getAppConfiguration(a,(t,e)=>{let i;for(i=window&&window.location&&window.location.origin?window.location.origin:e.baseUrl,this.configuration=l._prepareConfiguration(e,i),this.configIsLoaded=!0;this.pendingRequests.length;){let t=this.pendingRequests.pop();if(!this.configuration[t.configName])throw new Error(`Config ${t.configName} was not provided`);t.callback(null,this.configuration[t.configName])}}),t.addEventListener("needRoutes",this._provideConfig("routes")),t.addEventListener("needMenuItems",this._provideConfig("menu")),t.addEventListener("getUserInfo",this._provideConfig("profile")),t.addEventListener("getHistoryType",this._provideConfig("historyType")),t.addEventListener("validateUrl",t=>{t.stopImmediatePropagation();let{sourceUrl:e,callback:i}=t.detail;i&&"function"==typeof i?this._parseSourceUrl(e,i):console.error("Callback was not properly provided!")})}_provideConfig(t){return e=>{e.stopImmediatePropagation();let i=e.detail;if(i&&"function"==typeof i)if(this.configIsLoaded){if(!this.configuration[t])throw new Error(`Config ${t} was not provided`);i(null,this.configuration[t])}else this.pendingRequests.push({configName:t,callback:i})}}_parseSourceUrl(t,e){let i=(t=t.replace(/(\s+|-)/g,"").toLowerCase()).split("/"),s=this.configuration.pagesHierarchy;for(let r=0;r<i.length;r++){if(!s[i[r]]){e(`${t} is not a valid path in the application!`);break}const o=s[i[r]].children;"object"!=typeof o||"object"!=typeof o.items||r===i.length?e(null,s[i[r]].path):s=o.items}}_getAppConfiguration(t,e){let i=new XMLHttpRequest;i.open("GET",t),i.onload=()=>{if(200!=i.status)e(new Error(i.status.code));else{let t=JSON.parse(i.responseText);e(null,t)}},i.onerror=()=>{e(new Error("An error occurred"))},i.send()}}const p=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let t="";for(let i=1;i<=12;i++)t+=`<div class="sk-circle${i} sk-circle"></div>`;let e=document.createElement("div");return e.className="app-loader",e.innerHTML=`<div class='sk-fading-circle'>${t}</div>`,e}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let t=this.host.innerHTML;if((t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((t,e)=>{r.getController(this.controller).then(e=>{if(this.disconnected)return t();new e(this.host),t()}).catch(e)});new c(this.host)}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return e(this.hasSlot?"slot":"psk-default-renderer",null)}get host(){return i(this)}};!function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);o>3&&n&&Object.defineProperty(e,i,n)}([s({isMandatory:!0,description:["This property is a string that will permit the developer to choose his own controller.","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],p.prototype,"controller",void 0);export{p as psk_app_root};