System.register(["./p-3369a689.system.js","./p-61ba0e70.system.js"],(function(e){"use strict";var t,r,o;return{setters:[function(e){t=e.r;r=e.h},function(e){o=e.C}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,u;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)if(u=e[l])i=(n<3?u(i):n>3?u(t,r,i):u(t,r))||i;return n>3&&i&&Object.defineProperty(t,r,i),i};var i=960;var u=e("psk_default_renderer",function(){function e(e){t(this,e);this.mobileLayout=false}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<i};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){var e=r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:i});var t=r("div",{class:"nav-footer"},"version 0.1");var o=[];if(this.mobileLayout){o=[r("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]}else{o=[r("psk-user-profile",null),e,t]}return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},r("aside",null,o),r("section",null,r("psk-app-router",{failRedirectTo:"/home"}),this.mobileLayout===true?t:null))};return e}());n([o()],u.prototype,"mobileLayout",void 0)}}}));