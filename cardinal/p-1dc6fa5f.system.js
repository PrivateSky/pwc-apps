System.register(["./p-e1460616.system.js","./p-ca300ef6.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.g},function(e){n=e.d;r=e.a}],execute:function(){e("B",c);var i="attr";var a="prop";function o(e){if(e===null||typeof e!=="string"){return false}if(!e.startsWith("@")){return false}return e.length>=2}function u(e,t,r){if(!o(t)){return false}if(typeof r[e]!=="undefined"){return false}if(typeof n(t)!=="undefined"){return false}return e!=="view-model"}function f(e,t){switch(e){case i:return function(e,n){this.setAttribute(e,t.getChainValue(n))};default:return function(e,n){this[e]=t.getChainValue(n)}}}function s(e,t){this.createBoundedModel=function(n,i){i=r(i);t.onChange(i,(function(){e(n,i)}));e(n,i);return{updateModel:function(e){t.setChainValue(i,e)}}}}function l(e,t,n){var o=this;var u=t.properties,l=t.hasViewModel,c=t.instanceName;var v=function(t,v){if(t){console.error(t)}if(l){var d=e.getAttribute("view-model");d=r(d);var h=v.getChainValue(d);for(var p in h){if(!u[p]){u[p]={value:d+"."+p,type:a}}}}var g={};for(var p in u){var m=u[p].type===i?e:o;var y=f.call(m,u[p].type,v);var b=new s(y.bind(m),v);g[p]=b.createBoundedModel(p,u[p].value)}if(typeof o[c]!=="undefined"){throw new Error("BindModel decorator received a wrong argument as instance name: ["+c+"]")}else{o[c]={updateModel:function(e,t){if(u[e]){g[e].updateModel(t)}}}}n()};e.dispatchEvent(new CustomEvent("getModelEvent",{bubbles:true,composed:true,detail:{callback:v}}))}function c(){return function(e,n){var r=e.componentWillLoad;e.componentWillLoad=function(){var e=this.__proto__;var f=this;var s=t(f);var c=function(e){if(!e){e=Promise.resolve()}e.then((function(){return r&&r.call(f)}));return e};if(s.isConnected){var v=Object.keys(e);var d=s.getAttributeNames();var h={};for(var p=0;p<v.length;p++){var g=v[p];if(o(this[g])){h[g]={value:this[g],type:a}}}for(var p=0;p<d.length;p++){var m=d[p];var y=s.getAttribute(m);if(u(m,y,h)){h[m]={value:y,type:i}}}var b=s.hasAttribute("view-model");if(Object.keys(h).length>0||b){return c(new Promise((function(e){var t={properties:h,hasViewModel:b,instanceName:n};l.call(f,s,t,e)})))}}return c()}}}}}}));