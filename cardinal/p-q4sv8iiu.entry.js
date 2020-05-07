import{r as e,h as t}from"./p-2eb42df6.js";import{C as i}from"./p-8feff39d.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as s}from"./p-43fec8b7.js";import{B as r}from"./p-79d5f422.js";var o=function(e,t,i,s){var r,o=arguments.length,p=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(p=(o<3?r(p):o>3?r(t,i,p):r(t,i))||p);return o>3&&p&&Object.defineProperty(t,i,p),p};const p=class{constructor(t){e(this,t)}render(){let e={src:this.src,alt:this.title};return this.height&&(e.height=this.height),this.width&&(e.width=this.width),t("div",{class:"image_container"},t("div",{class:"image_wrapper"},t("img",Object.assign({},e))),this.title?t("div",{class:"image_description"},this.title):null)}};o([i(),r(),s({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],p.prototype,"src",void 0),o([s({description:"This property is setting the width of the image. The value should be an integer specifying the units in pixels",isMandatory:!1,propertyType:"string"})],p.prototype,"width",void 0),o([s({description:"This property is setting the height of the image. The value should be an integer specifying the units in pixels",isMandatory:!1,propertyType:"string"})],p.prototype,"height",void 0),o([s({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],p.prototype,"title",void 0);export{p as psk_img};