import{g as e}from"./p-986eab93.js";import{c as t}from"./p-5ace585b.js";import{b as n,c as s,d as i,e as o}from"./p-66bf9afb.js";function r(r){return function(c,l){const{connectedCallback:a,componentWillLoad:f,componentDidLoad:b,render:d}=c;let u="psk-send-events",p=i,m=n,j="definedEvents";c.componentWillLoad=function(){let t=e(this);if(!t.hasAttribute(n)&&!t.hasAttribute(s))return f&&f.call(this)},c.componentDidLoad=function(){let t=e(this);if(!t.hasAttribute(n)&&!t.hasAttribute(s))return b&&b.call(this)},c.connectedCallback=function(){let t=this,n=e(t);if(r.controllerInteraction&&(m=s,j="definedControllers",p=o,u="psk-send-controllers"),n.hasAttribute(m)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[j]=[Object.assign(Object.assign({},r),{eventName:String(l)})],a&&a.call(t);let e=t.componentDefinitions;const n=Object.assign(Object.assign({},r),{eventName:String(l)});if(e&&e.hasOwnProperty(p)){let t=[...e[p]];t.push(n),e[p]=[...t]}else e[p]=[n];t.componentDefinitions=Object.assign({},e)}return a&&a.call(t)},c.render=function(){let e=this;if(!e.componentDefinitions||!e.componentDefinitions||!e.componentDefinitions[p])return d&&d.call(e);let n=e.componentDefinitions[p];n&&(n=n.reverse()),t(u,{composed:!0,bubbles:!0,cancelable:!0,detail:n},!0)}}}export{r as T}