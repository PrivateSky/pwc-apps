import{r as e,c as t,h as i}from"./p-2eb42df6.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as s}from"./p-43fec8b7.js";import{C as r}from"./p-9e1e2fb1.js";import{T as o}from"./p-acfddbd8.js";var n=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let l;const a=class{constructor(i){e(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=t(this,"validateUrl",7),this.getKeywords=t(this,"getKeywords",7)}getAssignedUrlFromKeyword(e,t){l?t(void 0,l[e]):this.getKeywords.emit((i,s)=>{if(i)return t(i);t(void 0,(l=s)[e])})}componentWillLoad(){if(this.keyword)return new Promise(e=>{this.getAssignedUrlFromKeyword(this.keyword,(t,i)=>{t||!i?this.error=!0:this.destinationUrl=i,e()})});this.validateUrl.emit({sourceUrl:this.page,callback:(e,t)=>{e?this.error=!0:(this.destinationUrl=t,this.error=!1)}})}render(){let e=null;return this.error&&(e=i("div",{class:"tooltip-error"},i("div",null,"Page ",i("b",null,this.page)," does not exists."))),i("div",{class:"psk-link"},this.error?i("div",null,i("a",{class:`btn btn-link ${this.error?"invalid-url":""}`,onClick:e=>{e.preventDefault()}},i("slot",null)),e):i("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},i("slot",null)))}};n([r(),s({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:!0,propertyType:"string"})],a.prototype,"page",void 0),n([s({description:"This property gives the component the unique keyword that will resolve a unique page.",isMandatory:!0,propertyType:"string"})],a.prototype,"keyword",void 0),n([o({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],a.prototype,"validateUrl",void 0);export{a as psk_link};