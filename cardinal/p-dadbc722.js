import{g as t}from"./p-6c966499.js";import{b as e,c as n,d as s,e as i}from"./p-d980b6c7.js";import{c as o}from"./p-5ad7ea78.js";function r(r){return function(c,l){const{connectedCallback:a,componentWillLoad:f,componentDidLoad:d,render:u}=c;let b="psk-send-events",p=s,m=e,h="definedEvents";c.componentWillLoad=function(){let s=t(this);if(!s.hasAttribute(e)&&!s.hasAttribute(n))return f&&f.call(this)},c.componentDidLoad=function(){let s=t(this);if(!s.hasAttribute(e)&&!s.hasAttribute(n))return d&&d.call(this)},c.connectedCallback=function(){let e=this,s=t(e);if(r.controllerInteraction&&(m=n,h="definedControllers",p=i,b="psk-send-controllers"),s.hasAttribute(m)){if(!e.componentDefinitions)return e.componentDefinitions={},e.componentDefinitions[h]=[Object.assign(Object.assign({},r),{eventName:String(l)})],a&&a.call(e);let t=e.componentDefinitions;const n=Object.assign(Object.assign({},r),{eventName:String(l)});if(t&&t.hasOwnProperty(p)){let e=[...t[p]];e.push(n),t[p]=[...e]}else t[p]=[n];e.componentDefinitions=Object.assign({},t)}return a&&a.call(e)},c.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[p])return u&&u.call(this);let t=this.componentDefinitions[p];t&&(t=t.reverse()),o(b,{composed:!0,bubbles:!0,cancelable:!0,detail:t},!0)}}}export{r as T}