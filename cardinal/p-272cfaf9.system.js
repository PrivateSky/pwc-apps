System.register(["./p-3369a689.system.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.g}],execute:function(){t("C",s);var n=/@import.*?["']([^"']+)["'].*?;/g;var r={};var o={};var u;function i(t,e){if(!o[t]){o[t]=new Promise((function(t,o){if(n.exec(e)){e.replace(n,(function(n,u){if(!r[u]){r[u]=c(u)}r[u].then((function(r){t(e.replace(n,r))})).catch(o)}))}else{t(e)}}))}return o[t]}function c(t){return new Promise((function(e,n){fetch(t).then((function(t){if(t.ok){return e(t.text())}n({url:t.url,status:t.status,statusText:t.statusText})}))}))}function s(){return function(t){var n=t.componentWillLoad;t.getInnerContent=function(t){var n=e(this);if(n[t]){var r=n.querySelector("style");if(r){var o=n[t].replace(r.outerHTML,"");n[t]=r.outerHTML;return o}return n[t]}else{console.error(t+" is not a property")}};t.componentWillLoad=function(){var t=this;var o=e(this);if(!o){return n&&n.call(this)}else{var s=function(e){var u=o.tagName.toLowerCase();return new Promise((function(s){var a="/themes/"+e+"/components/"+u+"/"+u+".css";var f=o.shadowRoot?o.shadowRoot:o;if(!r[a]){r[a]=new Promise((function(t,e){c(a).then((function(e){t(e)})).catch(e)}))}r[a].then((function(t){i(a,t).then((function(t){var e=document.createElement("style");e.innerHTML=t;f.prepend(e)}))})).catch((function(t){console.log("Request on resource "+t.url+" ended with status: "+t.status+" ("+t.statusText+")")})).finally((function(){s(n&&n.call(t))}))}))};if(!u){return new Promise((function(t){var e=new CustomEvent("getThemeConfig",{bubbles:true,cancelable:true,composed:true,detail:function(e,n){if(e){return console.log(e)}u=n;s(u).then((function(){t()}))}});o.dispatchEvent(e)}))}else{return s(u)}}}}}}}}));