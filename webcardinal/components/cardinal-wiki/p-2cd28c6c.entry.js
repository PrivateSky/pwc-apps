import{r as t,h as s,g as e}from"./p-425ef2b7.js";import{e as r}from"./p-7121c3a2.js";const i=class{constructor(s){t(this,s),this.title="",this.decoratorEvents=[]}receivedEventsDescription(t){const s=t.detail;t.stopImmediatePropagation(),s&&s.length>0&&(this.decoratorEvents=JSON.parse(JSON.stringify(s)))}render(){if(!this.htmlElement.isConnected)return null;let t=this.decoratorEvents.map((t=>s("psk-chapter-wrapper",{title:t.eventName},s("p",{class:"subtitle"},s("i",null,t.eventName+": CustomEvent")),s("p",null,t.description),t.specialNote?s("p",null,s("b",null,"Note: ",t.specialNote)):null)));return s("psk-chapter",{title:this.title,id:r(this.title)},t)}get htmlElement(){return e(this)}};export{i as psk_event_descriptor}