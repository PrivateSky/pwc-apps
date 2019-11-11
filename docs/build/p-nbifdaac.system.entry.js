System.register(["./p-008f8465.system.js","./p-bdea7b23.system.js","./p-f031c137.system.js","./p-6333fe44.system.js","./p-3201df97.system.js"],(function(e){"use strict";var t,n,r,s;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.C},function(){},function(){},function(e){s=e.T}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(a=e[o])i=(s<3?a(i):s>3?a(t,n,i):a(t,n))||i;return s>3&&i&&Object.defineProperty(t,n,i),i};var a=e("psk_menu_item_renderer",function(){function e(e){t(this,e)}e.prototype.renderMenuItem=function(e){var t=this;var r=e.path;var s=[];if(e.children){e.children.forEach((function(e){s.push(t.renderMenuItem(e))}))}var i=e.type==="abstract"?"dropdown-renderer":"stencil-route-link";return n(i,{url:r,activeClass:"active",exact:false,somethingChanged:this.value},n("div",{class:"wrapper_container"},n("div",{class:"item_container"},n("span",{class:"icon fa "+e.icon}),n("a",null,e.children?n("span",{class:"item_name"},e.name,n("span",{class:"fa fa-caret-down"})):n("span",{class:"item_name"},e.name))),e.children?n("div",{class:"children"},s):null))};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());i([r(),s({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:false,propertyType:"MenuItem"})],a.prototype,"value",void 0);i([s({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:false,propertyType:"boolean"})],a.prototype,"active",void 0)}}}));