import{r as t,h as e}from"./p-83ba3037.js";import{b as s}from"./p-fbc9d3b2.js";import"./p-d0e91fb1.js";import{T as i}from"./p-7027462d.js";import{C as o}from"./p-c49427b9.js";import{B as a}from"./p-27e12037.js";class r{constructor(t,e){this.dateToken=/dd|mm|yyyy|MM|HH|s{2,3}/g,this.format=e||s.default,this.date=t?new Date(t):new Date;const i=this.date.getDate(),o=this.date.getMonth()+1,a=this.date.getFullYear(),r=this.date.getHours(),d=this.date.getMinutes(),h=this.date.getSeconds(),n=this.date.getMilliseconds();this.dateValues={dd:this._addLeadingZeros(i),mm:this._addLeadingZeros(o),yyyy:this._addLeadingZeros(a,4),HH:this._addLeadingZeros(r),MM:this._addLeadingZeros(d),ss:this._addLeadingZeros(h),sss:this._addLeadingZeros(n)}}applyFormat(t){return(s[t]||t||this.format).replace(this.dateToken,t=>t in this.dateValues?this.dateValues[t]:t.slice(1,t.length-1))}_addLeadingZeros(t,e=2){for(t=String(t);t.length<e;)t="0"+t;return t}}var d=function(t,e,s,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(e,s,r):o(e,s))||r);return a>3&&r&&Object.defineProperty(e,s,r),r};const h=class{constructor(e){t(this,e),this.value=null,this.format="mm dd yyyy",this.hoverFormat=s.default}render(){if(!new Date(this.value).getTime())return null;const t=new r(this.value).applyFormat(this.format),s=new r(this.value).applyFormat(this.hoverFormat);return e("psk-label",{label:t,title:s})}};d([o(),a()],h.prototype,"modelHandler",void 0),d([i({description:["Specifies the value of the date to be formatted.","It can be a string representation of the date, but also can be the timestamp value of the date.","The string representation of the date must comply with the documentation of the Date object available on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"],isMandatory:!0,propertyType:"string | number"})],h.prototype,"value",void 0),d([i({description:["Specifies how to format the displayed date according to the above described available formats."],isMandatory:!1,propertyType:"string",defaultValue:"mm dd yyyy"})],h.prototype,"format",void 0),d([i({description:["This property is used to display a tooltip of the formatted date when hover the displayed date. This is very useful when you want to display a more detailed date for the user."],isMandatory:!1,propertyType:"string",defaultValue:"No default value"})],h.prototype,"hoverFormat",void 0);export{h as psk_date}