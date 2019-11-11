var __assign=this&&this.__assign||function(){__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o))e[o]=t[o]}return e};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function s(e){try{c(n["throw"](e))}catch(t){i(t)}}function c(e){e.done?r(e.value):o(e.value).then(a,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n};System.register(["./p-008f8465.system.js","./p-bdea7b23.system.js","./p-f031c137.system.js","./p-6333fe44.system.js","./p-3201df97.system.js","./p-dfd24755.system.js","./p-168ec2c4.system.js","./p-d8121322.system.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,l,u,p,f,h,d,v,m,y,g,b,w,k,P,I,_,T,O;return{setters:[function(e){t=e.r;r=e.c;n=e.h;o=e.g;i=e.d},function(e){a=e.C},function(){},function(){},function(e){s=e.T},function(e){c=e.T},function(e){l=e.m;u=e.a;p=e.s;f=e.b;h=e.c;d=e.d;v=e.e;m=e.f;y=e.g;g=e.h;b=e.i;w=e.j;k=e.k;P=e.l;I=e.n;_=e.o;T=e.p},function(e){O=e.A}],execute:function(){var S=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var x=e("app_menu",function(){function e(e){t(this,e);this.menuItems=null;this.hamburgerMaxWidth=600;this.showHamburgerMenu=false;this.showNavBar=false;this.menuItemClicked=r(this,"menuEvent",7);this.needMenuItemsEvt=r(this,"needMenuItems",7)}e.prototype.checkIfHamburgerIsNeeded=function(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth};e.prototype.componentDidLoad=function(){this.checkIfHamburgerIsNeeded()};e.prototype.handleClick=function(e){e.preventDefault();var t=e.target.value;for(var r=0;r<this.menuItems.length;r++){this.menuItems[r].active=t===this.menuItems[r]}this.menuItemClicked.emit(e.target.value);this.menuItems=__spreadArrays(this.menuItems)};e.prototype.toggleNavBar=function(){this.showNavBar=!this.showNavBar};e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needMenuItemsEvt.emit((function(t,r){if(t){console.log(t);return}e.menuItems=r}))}};e.prototype.renderItem=function(e){var t=this;var r=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer";var o=[];if(e.children){for(var i=0;i<e.children.length;i++){o.push(this.renderItem(e.children[i]))}}return n(r,{onclick:function(e){return t.handleClick(e)},active:e.active?e.active:false,children:o,hamburger:this.showHamburgerMenu,value:e})};e.prototype.render=function(){var e=this;if(!this.menuItems){return}var t=[];for(var r=0;r<this.menuItems.length;r++){var o=this.menuItems[r];t.push(this.renderItem(o))}var i=this.menuItems.find((function(e){return e.active}));if(this.showHamburgerMenu){t=t.map((function(t){return n("li",{onClick:e.toggleNavBar.bind(e),class:"nav-item"},t)}));var a="collapse navbar-collapse "+(""+(this.showNavBar==true?"show":""));return n("nav",{class:"navbar navbar-dark "},n("a",{class:"navbar-brand",href:"#"},i?i.name:"Home"),n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},n("span",{class:"navbar-toggler-icon"})),n("div",{class:a},n("ul",{class:"navbar-nav mr-auto"},t)))}else{return t}};return e}());S([a(),s({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:false,propertyType:"string"})],x.prototype,"itemRenderer",void 0);S([s({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:false,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],x.prototype,"menuItems",void 0);S([s({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:false,propertyType:"number",defaultValue:"600"})],x.prototype,"hamburgerMaxWidth",void 0);S([c({eventName:"menuEvent",controllerInteraction:{required:true},description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],x.prototype,"menuItemClicked",void 0);S([c({eventName:"needMenuItems",controllerInteraction:{required:true},description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],x.prototype,"needMenuItemsEvt",void 0);var L={basePagesUrl:globalConfig.pagesBasePath?globalConfig.pagesBasePath:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/",defaultPageProp:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:true},profile:{username:"PrivateSky",email:"privatesky@axiologic.net",avatar:"https://privatesky.xyz/assets/icon/privatesky.png"}};var E=[{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:true},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:true},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:true},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:true},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:true},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:true},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:true},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:true},{name:"Feedback List",path:"/psk-components/list-feedback",icon:"fa-bars",type:"route",component:"feedback-list-usage",exact:true},{name:"Wizard",path:"/psk-components/wizard",icon:"fa-bars",type:"route",component:"wizard-usage",exact:true}]}];var C=[{stepName:"Name your CSB",stepIndex:0,stepComponent:"enter-csb-name"},{stepName:"Select CSB type(s)",stepIndex:1,stepComponent:"select-csb-type"},{stepName:"Save recovery Phrase",stepIndex:2,stepComponent:"save-recovery-phrase"},{stepName:"Finish",stepIndex:3,stepComponent:"finish-page"}];var M=L.basePagesUrl+"pages-structure.json";var j=function(){function e(e){var t=this;this.element=o(e);this.openFeedbackRequest=null;var r=JSON.parse(JSON.stringify(E));this._fetchPagesStructure(r);this.element.addEventListener("menuEvent",(function(e){e.stopImmediatePropagation();if(e.detail.type==="href"){window.location.href=e.detail.path}var r=e.detail;var n=new CustomEvent("routeChanged",{bubbles:true,cancelable:false,detail:r});t.element.dispatchEvent(n)}));this.element.addEventListener("needMenuItems",(function(e){e.stopImmediatePropagation();var r=e.detail;if(r&&typeof r==="function"){var n=setInterval((function(){if(t.pagesStructure){r(null,t.pagesStructure);o()}}),100);var o=function(){clearInterval(n)}}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("validateUrl",(function(e){e.stopImmediatePropagation();var r=e.detail,n=r.sourceUrl,o=r.callback;if(o&&typeof o==="function"){t._parseSourceUrl(n,o)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("getUserInfo",(function(e){var t=e.detail;if(t&&typeof t==="function"){t(null,L.profile)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("needWizardConfiguration",(function(e){var t=e.detail;if(t&&typeof t==="function"){t(C)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("changeStep",(function(e){var r=e.detail.callback;if(r&&typeof r==="function"){t._handleChangeStep(e.detail)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("openFeedback",(function(e){t.openFeedbackRequest=e.detail}));this.element.addEventListener("showFeedback",(function(e){t.openFeedbackRequest(e.detail.message,e.detail.name,e.detail.type)}));this.element.addEventListener("sendPin",(function(e){var r=e.detail.callback;if(r&&typeof r==="function"){t._handleSendPin(e.detail)}else{console.error("Callback was not properly provided!")}}))}e.prototype._parseSourceUrl=function(e,t){var r="",n=false,o=false,i=JSON.parse(JSON.stringify(this.pagesStructure)),a=e.split("/").map((function(e){return e.replace(/(\s+|:+|\/+)/g,"").toLowerCase()}));a.forEach((function(s,c){if(o)return;if(i.length===0){t(e+" is not a valid path in the application!");o=true;return}r=""+r+s;var l=i.find((function(e){var t=e.path.replace(/(\s+|:+|\/+|-+)/g,"").toLowerCase();var n=e.name.replace(/(\s+|:+|\/+|-+)/g,"").toLowerCase();return s===n||r===t}));if(!l){t(e+" is not a valid path in the application!");o=true;return}if(c===a.length-1&&l.type==="route"){t(null,l.path);n=true;return}i=l.hasOwnProperty("children")?l.children:[]}));if(!n&&!o){t(e+" is not a valid path in the application!")}};e.prototype._handleSendPin=function(e){var t=e.pin,r=e.callback;if(!t||t.trim().length<6){r("Invalid PIN length. Minimum is 6!")}else{console.log(t);r(null)}};e.prototype.__getPropertyValue=function(e,t){if(e.stepProperties&&e.stepProperties.hasOwnProperty(t)){return e.stepProperties[t]}return null};e.prototype._handleChangeStep=function(e){var t=e.stepIndexToDisplay;var r=e.callback;var n=e.wizardSteps;var o=e.activeStep;var i=null;if(t<0||t>=n.length){i="Index has no valid value"}else if(t<=o.stepIndex){n[o.stepIndex]=__assign({},o);o=__assign({},n[t])}else{switch(o.stepProperties.stepPhase){case"csb-name":{var a=this.__getPropertyValue(o,"csbName");if(a===null||a.trim().length===0){i="CSB Name is empty"}else{o.stepCompleted=true;n[o.stepIndex]=__assign({},o);o=__assign({},n[t])}break}case"csb-type":{var s=this.__getPropertyValue(o,"csbType");if(s===null||s.trim().length===0){i="CSB Type is empty"}else{o.stepCompleted=true;n[o.stepIndex]=__assign({},o);o=__assign({},n[t])}break}case"save-recovery-phrase":{var c=this.__getPropertyValue(o,"saveRecoveryPhrase");if(c===null){i="Recovery phase property is not sent"}else{o.stepCompleted=true;n[o.stepIndex]=__assign({},o);o=__assign({},n[t])}break}default:break}}r(i,{activeStep:o,wizardSteps:n})};e.prototype._fetchPagesStructure=function(e){var t=this;var r=new XMLHttpRequest;r.open("GET",M);r.onload=function(){if(r.status!=200){t._prepareNavigationStructure(e)}else{var n=JSON.parse(r.responseText);t._fillOptionalProps(n);var o=e.map((function(e){return e.name}));n.forEach((function(t,r){if(t.parent>-1){var i=o.indexOf(t.parent);if(i){if(!e[i].children){e[i].children=[]}t.path=e[i].path+t.path;e[i].children.push(t);n.splice(r,1)}}}));t._prepareNavigationStructure(n.concat(e))}};r.onerror=function(){t._prepareNavigationStructure(e)};r.send()};e.prototype._prepareNavigationStructure=function(e){this.pagesStructure=JSON.parse(JSON.stringify(e))};e.prototype._fillOptionalProps=function(e,t){var r=this;e.forEach((function(e){if(!e.path){var n=e.name.toLowerCase();var o=n.toLowerCase().replace(/\s+/g,"-");o=o.replace(/[:\/]/g,"");e.path=o}if(t){e.path=t+"/"+e.path}if(e.children){e.type="abstract";if(!e.icon){e.icon=L.defaultPageProp.icon}}else{for(var i in L.defaultPageProp){if(!e[i]){e[i]=L.defaultPageProp[i]}}if(e.component==="psk-page-loader"){if(!e.componentProps){e.componentProps={}}if(e.pageSrc){e.componentProps.pageUrl=L.basePagesUrl+e.pageSrc}else{var a=e.name.replace(/\s(.)/g,(function(e){return e.toUpperCase()})).replace(/\s/g,"");var s=t.replace(/^\//,"");e.componentProps.pageUrl=L.basePagesUrl+s+"/"+a+".html"}}}if(e.children){r._fillOptionalProps(e.children,e.path)}}))};return e}();var R=650;var U=e("app_root",function(){function e(e){t(this,e);this.mobileLayout=false;if(!this.controller){this.controller=new j(this)}this.routeChangedEvent=r(this,"routeChanged",7)}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<R};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){return n("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},n("aside",null,n("psk-user-profile",null),n("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:R}," "),this.mobileLayout===false?n("div",{class:"nav-footer"},"version 0.1"):null),n("section",null,n("psk-app-router",{failRedirectTo:"/home",historyType:"hash"}," "),this.mobileLayout===true?n("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))};Object.defineProperty(e,"style",{get:function(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:320px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}aside::-webkit-scrollbar,section::-webkit-scrollbar{background-color:#fff;width:8px}aside::-webkit-scrollbar-track,section::-webkit-scrollbar-track{background-color:#e5e5e5}aside::-webkit-scrollbar-thumb,section::-webkit-scrollbar-thumb{background-color:#4e73df;border-radius:8px;border:2px solid #fff}aside::-webkit-scrollbar-button{display:none}"},enumerable:true,configurable:true});return e}());var N=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var A=e("psk_app_router",function(){function e(e){t(this,e);this.menuItems=[];this.failRedirectTo="";this.needMenuItemsEvt=r(this,"needMenuItems",7)}e.prototype.componentDidLoad=function(){var e=this;this.needMenuItemsEvt.emit((function(t,r){if(t){console.log(t);return}e.menuItems=r}))};e.prototype.renderItems=function(e){var t=this;var r=e.map((function(e){if(e.children){return t.renderItems(e.children)}else{return n("stencil-route",{url:e.path,exact:e.exact,component:e.component,componentProps:e.componentProps})}}));return r};e.prototype.render=function(){var e=this.renderItems(this.menuItems);if(e.length===0){return n("psk-ui-loader",{shouldBeRendered:true})}return n("div",{class:"app_container"},n("stencil-router",{historyType:this.historyType},n("stencil-route-switch",{scrollTopOffset:0},e,n("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.menuItems[0].path}}))))};return e}());N([s({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:false,propertyType:"Array of MenuItem types(MenuItem[])"})],A.prototype,"menuItems",void 0);N([s({description:"This is the history type that will be passed along to the stencil-router",isMandatory:false,propertyType:"string",defaultValue:"browser"})],A.prototype,"historyType",void 0);N([c({eventName:"needMenuItems",controllerInteraction:{required:true},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],A.prototype,"needMenuItemsEvt",void 0);var B=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var H=e("psk_ui_loader",function(){function e(e){t(this,e);this.shouldBeRendered=false}e.prototype.render=function(){if(this.shouldBeRendered){return n("div",{class:"loader-container"},n("div",{class:"sk-fading-circle"},n("div",{class:"sk-circle1 sk-circle"}),n("div",{class:"sk-circle2 sk-circle"}),n("div",{class:"sk-circle3 sk-circle"}),n("div",{class:"sk-circle4 sk-circle"}),n("div",{class:"sk-circle5 sk-circle"}),n("div",{class:"sk-circle6 sk-circle"}),n("div",{class:"sk-circle7 sk-circle"}),n("div",{class:"sk-circle8 sk-circle"}),n("div",{class:"sk-circle9 sk-circle"}),n("div",{class:"sk-circle10 sk-circle"}),n("div",{class:"sk-circle11 sk-circle"}),n("div",{class:"sk-circle12 sk-circle"})))}};Object.defineProperty(e,"watchers",{get:function(){return{shouldBeRendered:["render"]}},enumerable:true,configurable:true});return e}());B([a(),s({description:"This is the property that gives the state of the loader, if it is displayed or not. The posible values are true or false.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],H.prototype,"shouldBeRendered",void 0);var V=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var q=e("psk_user_profile",function(){function e(e){t(this,e);this.userInfo=null;this.getUserInfoEvent=r(this,"getUserInfo",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.userInfo){this.getUserInfoEvent.emit((function(t,r){if(!t){e.userInfo=r}else{console.error("Error getting user info",t)}}))}};e.prototype.render=function(){var e=this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer";return n(e,{userInfo:this.userInfo})};return e}());V([s({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:false,propertyType:"any",defaultValue:"null"})],q.prototype,"userInfo",void 0);V([s({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:false,propertyType:"any"})],q.prototype,"profileRenderer",void 0);V([c({eventName:"getUserInfo",controllerInteraction:{required:true},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],q.prototype,"getUserInfoEvent",void 0);var D=e("stencil_route",function(){function e(e){t(this,e);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}e.prototype.computeMatch=function(e){var t=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!e||t){return}this.previousMatch=this.match;return this.match=l(e.pathname,{path:this.url,exact:this.exact,strict:true})};e.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e={};if(this.history&&this.history.location.hash){e={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){e={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(e)}else if(this.match&&!u(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(e)}return[2]}))}))};e.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.render=function(){if(!this.match||!this.history){return null}var e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},e,{component:this.component}))}if(this.component){var t=this.component;return n(t,Object.assign({},e))}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return e}());O.injectProps(D,["location","history","historyType","routeViewsUpdated"]);var W=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var F=function(e,t,r){return l(e,{path:t,exact:r,strict:true})};var J=function(e){return e.tagName==="STENCIL-ROUTE"};var z=e("stencil_route_switch",function(){function e(e){t(this,e);this.group=W();this.subscribers=[];this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(o){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(J).map((function(r,n){var o=F(e.pathname,r.url,r.exact);if(o&&t===-1){t=n}return{el:r,match:o}}));if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(e){n.queue.write((function(){n.subscribers.forEach((function(e,t){e.el.componentUpdated=undefined;if(t===n.activeIndex){return e.el.style.display=""}if(n.scrollTopOffset){e.el.scrollTopOffset=n.scrollTopOffset}e.el.group=n.group;e.el.match=null;e.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},e))}};return[2]}))}))};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}());O.injectProps(z,["location","routeViewsUpdated"]);var Y=function(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}if(!e){console.warn.apply(console,t)}};var X=function(){var e;var t=[];var r=function(t){Y(e==null,"A history supports only one prompt at a time");e=t;return function(){if(e===t){e=null}}};var n=function(t,r,n,o){if(e!=null){var i=typeof e==="function"?e(t,r):e;if(typeof i==="string"){if(typeof n==="function"){n(i,o)}else{Y(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(e){var r=true;var n=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}if(r){e.apply(void 0,t)}};t.push(n);return function(){r=false;t=t.filter((function(e){return e!==n}))}};var i=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}t.forEach((function(t){return t.apply(void 0,e)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:o,notifyListeners:i}};var G=function(e,t){if(t===void 0){t="scrollPositions"}var r=new Map;var n=function(t,n){r.set(t,n);if(p(e,"sessionStorage")){var o=[];r.forEach((function(e,t){o.push([t,e])}));e.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(e){return r.get(e)};var i=function(e){return r.has(e)};var a=function(t){n(t,[e.scrollX,e.scrollY])};if(p(e,"sessionStorage")){var s=e.sessionStorage.getItem(t);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in e.history){history.scrollRestoration="manual"}return{set:n,get:o,has:i,capture:a}};var K="popstate";var Q="hashchange";var Z=function(e,t){if(t===void 0){t={}}var r=false;var n=e.history;var o=e.location;var i=e.navigator;var a=f(e);var s=!h(i);var c=G(e);var l=t.forceRefresh!=null?t.forceRefresh:false;var u=t.getUserConfirmation!=null?t.getUserConfirmation:k;var p=t.keyLength!=null?t.keyLength:6;var I=t.basename?d(v(t.basename)):"";var _=function(){try{return e.history.state||{}}catch(t){return{}}};var T=function(e){e=e||{};var t=e.key,r=e.state;var n=o.pathname,i=o.search,a=o.hash;var s=n+i+a;Y(!I||g(s,I),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+I+'".');if(I){s=b(s,I)}return m(s,r,t||y(p))};var O=X();var S=function(e){c.capture(J.location.key);Object.assign(J,e);J.location.scrollPosition=c.get(J.location.key);J.length=n.length;O.notifyListeners(J.location,J.action)};var x=function(e){if(!P(i,e)){E(T(e.state))}};var L=function(){E(T(_()))};var E=function(e){if(r){r=false;S()}else{var t="POP";O.confirmTransitionTo(e,t,u,(function(r){if(r){S({action:t,location:e})}else{C(e)}}))}};var C=function(e){var t=J.location;var n=j.indexOf(t.key);var o=j.indexOf(e.key);if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;H(i)}};var M=T(_());var j=[M.key];var R=0;var U=false;var N=function(e){return I+w(e)};var A=function(e,t){Y(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var i=m(e,t,y(p),J.location);O.confirmTransitionTo(i,r,u,(function(e){if(!e){return}var t=N(i);var s=i.key,c=i.state;if(a){n.pushState({key:s,state:c},"",t);if(l){o.href=t}else{var u=j.indexOf(J.location.key);var p=j.slice(0,u===-1?0:u+1);p.push(i.key);j=p;S({action:r,location:i})}}else{Y(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=t}}))};var B=function(e,t){Y(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var i=m(e,t,y(p),J.location);O.confirmTransitionTo(i,r,u,(function(e){if(!e){return}var t=N(i);var s=i.key,c=i.state;if(a){n.replaceState({key:s,state:c},"",t);if(l){o.replace(t)}else{var u=j.indexOf(J.location.key);if(u!==-1){j[u]=i.key}S({action:r,location:i})}}else{Y(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(t)}}))};var H=function(e){n.go(e)};var V=function(){return H(-1)};var q=function(){return H(1)};var D=function(t){R+=t;if(R===1){e.addEventListener(K,x);if(s){e.addEventListener(Q,L)}}else if(R===0){e.removeEventListener(K,x);if(s){e.removeEventListener(Q,L)}}};var W=function(e){if(e===void 0){e=""}var t=O.setPrompt(e);if(!U){D(1);U=true}return function(){if(U){U=false;D(-1)}return t()}};var F=function(e){var t=O.appendListener(e);D(1);return function(){D(-1);t()}};var J={length:n.length,action:"POP",location:M,createHref:N,push:A,replace:B,go:H,goBack:V,goForward:q,block:W,listen:F,win:e};return J};var $="hashchange";var ee={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+_(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:_,decodePath:v},slash:{encodePath:v,decodePath:v}};var te=function(e,t){if(t===void 0){t={}}var r=false;var n=null;var o=0;var i=false;var a=e.location;var s=e.history;var c=I(e.navigator);var l=t.keyLength!=null?t.keyLength:6;var u=t.getUserConfirmation,p=u===void 0?k:u,f=t.hashType,h=f===void 0?"slash":f;var P=t.basename?d(v(t.basename)):"";var _=ee[h],O=_.encodePath,S=_.decodePath;var x=function(){var e=a.href;var t=e.indexOf("#");return t===-1?"":e.substring(t+1)};var L=function(e){return a.hash=e};var E=function(e){var t=a.href.indexOf("#");a.replace(a.href.slice(0,t>=0?t:0)+"#"+e)};var C=function(){var e=S(x());Y(!P||g(e,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+e+'" to begin with "'+P+'".');if(P){e=b(e,P)}return m(e,undefined,y(l))};var M=X();var j=function(e){Object.assign(Z,e);Z.length=s.length;M.notifyListeners(Z.location,Z.action)};var R=function(){var e=x();var t=O(e);if(e!==t){E(t)}else{var o=C();var i=Z.location;if(!r&&T(i,o)){return}if(n===w(o)){return}n=null;U(o)}};var U=function(e){if(r){r=false;j()}else{var t="POP";M.confirmTransitionTo(e,t,p,(function(r){if(r){j({action:t,location:e})}else{N(e)}}))}};var N=function(e){var t=Z.location;var n=V.lastIndexOf(w(t));var o=V.lastIndexOf(w(e));if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;F(i)}};var A=x();var B=O(A);if(A!==B){E(B)}var H=C();var V=[w(H)];var q=function(e){return"#"+O(P+w(e))};var D=function(e,t){Y(t===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var o=m(e,undefined,y(l),Z.location);M.confirmTransitionTo(o,r,p,(function(e){if(!e){return}var t=w(o);var i=O(P+t);var a=x()!==i;if(a){n=t;L(i);var s=V.lastIndexOf(w(Z.location));var c=V.slice(0,s===-1?0:s+1);c.push(t);V=c;j({action:r,location:o})}else{Y(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");j()}}))};var W=function(e,t){Y(t===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var o=m(e,undefined,y(l),Z.location);M.confirmTransitionTo(o,r,p,(function(e){if(!e){return}var t=w(o);var i=O(P+t);var a=x()!==i;if(a){n=t;E(i)}var s=V.indexOf(w(Z.location));if(s!==-1){V[s]=t}j({action:r,location:o})}))};var F=function(e){Y(c,"Hash history go(n) causes a full page reload in this browser");s.go(e)};var J=function(){return F(-1)};var z=function(){return F(1)};var G=function(e,t){o+=t;if(o===1){e.addEventListener($,R)}else if(o===0){e.removeEventListener($,R)}};var K=function(t){if(t===void 0){t=""}var r=M.setPrompt(t);if(!i){G(e,1);i=true}return function(){if(i){i=false;G(e,-1)}return r()}};var Q=function(t){var r=M.appendListener(t);G(e,1);return function(){G(e,-1);r()}};var Z={length:s.length,action:"POP",location:H,createHref:q,push:D,replace:W,go:F,goBack:J,goForward:z,block:K,listen:Q,win:e};return Z};var re=function(e,t){var r=e.pathname.indexOf(t)==0?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:r})};var ne={browser:Z,hash:te};var oe=e("stencil_router",function(){function e(e){var r=this;t(this,e);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(e){if(e===void 0){e={}}if(r.history&&e.scrollToId&&r.historyType==="browser"){var t=r.history.win.document.getElementById(e.scrollToId);if(t){return t.scrollIntoView()}}r.scrollTo(e.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){var e=this;this.history=ne[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(t){t=re(t,e.root);e.location=t}));this.location=re(this.history.location,this.root)};e.prototype.scrollTo=function(e){var t=this.history;if(e==null||this.isServer||!t){return}if(t.action==="POP"&&Array.isArray(t.location.scrollPosition)){return this.queue.write((function(){if(t&&t.location&&Array.isArray(t.location.scrollPosition)){t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}}))}return this.queue.write((function(){t.win.scrollTo(0,e)}))};e.prototype.render=function(){if(!this.location||!this.history){return}var e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return n(O.Provider,{state:e},n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));