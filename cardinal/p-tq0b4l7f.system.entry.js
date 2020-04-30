System.register(["./p-3369a689.system.js"],(function(e){"use strict";var t,r,n,o;return{setters:[function(e){t=e.r;r=e.c;n=e.h;o=e.g}],execute:function(){var i=e("psk_ss_app",function(){function e(e){t(this,e);this.giveMeSeed=r(this,"giveMeSeed",7)}e.prototype.componentDidLoad=function(){var e=this;var t=this.element.querySelector("iframe");window.document.addEventListener(this.digestSeedHex,(function(r){var n=r.detail||{};if(n.query==="seed"){t.contentWindow.document.dispatchEvent(new CustomEvent(e.digestSeedHex,{detail:{seed:e.seed}}));return}if(n.status==="completed"){t.contentWindow.location.reload();return}}),true)};e.prototype.getSWOnMessageHandler=function(){var e=this;if(this.onServiceWorkerMessageHandler){return this.onServiceWorkerMessageHandler}this.onServiceWorkerMessageHandler=function(t){if(!t.data||t.data.query!=="seed"){return}var r=t.data.identity;if(r===e.digestSeedHex){t.source.postMessage({seed:e.seed})}};return this.onServiceWorkerMessageHandler};e.prototype.connectedCallback=function(){navigator.serviceWorker.addEventListener("message",this.getSWOnMessageHandler())};e.prototype.disconnectedCallback=function(){navigator.serviceWorker.removeEventListener("message",this.getSWOnMessageHandler())};e.prototype.componentWillLoad=function(){var e=this;return new Promise((function(t){e.giveMeSeed.emit({appName:e.appName,callback:function(r,n){if(r){throw r}e.seed=n;e.digestSeedHex=e.digestMessage(n);t()}})}))};e.prototype.sendMessageToIframe=function(e,t){var r=function(t){$$.interactions.startSwarmAs(e,"echo","say",t).onReturn((function(e,t){if(!e){console.log("Iframe received: ",t);setTimeout((function(){}),1e4)}else{console.log(e)}}))};r(t)};e.prototype.digestMessage=function(e){var t=require("pskcrypto");var r=t.pskHash(e,"hex");return r};e.prototype.render=function(){var e=window.top.location.href;if(e[e.length-1]!=="/"){e+="/"}var t=e+"iframe/"+this.digestSeedHex;return n("iframe",{sandbox:"allow-scripts allow-same-origin allow-forms",frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:t})};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));