System.register([],function(e){"use strict";return{execute:function(){e({a:u,b:i,c:n,d:o,e:r,n:a,s:t});function t(e,t){var n=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var r=t.querySelector("#"+n);if(!r){return}r.scrollIntoView();var i=window.location.href;var a="?";if(i.indexOf("chapter=")!==-1){i=window.location.href.split("chapter=")[0];if(i.length>0){a=i[i.length-1];i=i.substring(0,i.length-1)}}else{a=i.indexOf("?")>0?"&":"?"}var o=a+"chapter=";window.history.pushState({},"",""+i+o+n)}function n(e,t,n,r){if(n===void 0){n=false}if(r===void 0){r=null}var i=new CustomEvent(e,t);if(n){if(r){r.dispatchEvent(i)}else{document.dispatchEvent(i)}}}function r(e,t,n){var r=null;while(e){if(e.matches(t)){r=e;break}else if(n&&e.matches(n)){break}e=e.parentElement}return r}function i(e,t,n){if(n===void 0){n=1}var r=null;while(e){if(e.tagName.toLowerCase()===t&&--n===0){r=e;break}e=e.parentElement}return r}function a(e){return e.split("").map(function(e){if(e===e.toLowerCase()){return e}return"-"+e.toLowerCase()}).join("")}function o(e,t,n,r){if(r===void 0){r=null}var i=e.replace(t,n);if(r){return r(i)}return i}function u(e){if(e.startsWith("psk-")){return true}var t=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"].find(function(t){return t===e});return t===e}}}});