import{g as t}from"./p-83ba3037.js";import{c as e,d as n,e as s,f as i}from"./p-fbc9d3b2.js";import{c as o}from"./p-d0e91fb1.js";function r(r){return function(c,f){const{connectedCallback:l,componentWillLoad:a,componentDidLoad:d,render:b}=c;let u="psk-send-events",p=s,m=e,h="definedEvents";c.componentWillLoad=function(){let s=t(this);if(!s.hasAttribute(e)&&!s.hasAttribute(n))return a&&a.call(this)},c.componentDidLoad=function(){let s=t(this);if(!s.hasAttribute(e)&&!s.hasAttribute(n))return d&&d.call(this)},c.connectedCallback=function(){let e=this,s=t(e);if(r.controllerInteraction&&(m=n,h="definedControllers",p=i,u="psk-send-controllers"),s.hasAttribute(m)){if(!e.componentDefinitions)return e.componentDefinitions={},e.componentDefinitions[h]=[Object.assign(Object.assign({},r),{eventName:String(f)})],l&&l.call(e);let t=e.componentDefinitions;const n=Object.assign(Object.assign({},r),{eventName:String(f)});if(t&&t.hasOwnProperty(p)){let e=[...t[p]];e.push(n),t[p]=[...e]}else t[p]=[n];e.componentDefinitions=Object.assign({},t)}return l&&l.call(e)},c.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[p])return b&&b.call(this);let t=this.componentDefinitions[p];t&&(t=t.reverse()),o(u,{composed:!0,bubbles:!0,cancelable:!0,detail:t},!0)}}}export{r as T}