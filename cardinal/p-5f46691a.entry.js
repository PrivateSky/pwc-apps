import{r as t,h as i,g as e}from"./p-6c966499.js";import"./p-d980b6c7.js";import"./p-5ad7ea78.js";import{T as s}from"./p-91eca55c.js";import{C as l}from"./p-7f0c608d.js";var n=function(t,i,e,s){var l,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(r=(n<3?l(r):n>3?l(i,e,r):l(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let r=(()=>{class r{constructor(i){t(this,i),this.fadeSeconds=1,this.visibleSeconds=10}componentWillLoad(){this.images?(this.marginTop=this.element.getBoundingClientRect().y,this.checkLayout(),this.imagesSrcs=this.images.split(","),this.getAnimationCSS()):console.log("No images provided")}checkLayout(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop}renderSlide(t,e){return i("li",{id:"slide-"+e,class:"animation-"+e,style:{backgroundImage:"url("+t+")"}})}getAnimationCSS(){let t=this.fadeSeconds+this.visibleSeconds,i=100/(t*this.imagesSrcs.length),e=`@keyframes fade {\n    0% { opacity: 0; }\n    ${i*this.fadeSeconds}% { opacity: 1; }\n    ${i*t}% { opacity: 1; }\n    ${i*(t+this.fadeSeconds)}% { opacity: 0; }\n    100% { opacity: 0; }\n  }`;for(let i=0;i<this.imagesSrcs.length;i++)e+=`#psk-slider li:nth-child(${i}) {\n        animation-delay: ${t*i}s;\n        }`;e+=`#psk-slider li{animation-duration: ${t*this.imagesSrcs.length}s;}`;let s=document.createElement("style");s.innerHTML=e,this.element.shadowRoot.prepend(s)}render(){let t=[];this.imagesSrcs.forEach((i,e)=>{t.push(this.renderSlide(i,e))});let e=this.title?i("div",{class:"title"},this.title):null,s=this.caption?i("div",{class:"caption"},this.caption):null,l=this.element.children.length>0?i("div",{class:"actions"},i("slot",null)):null,n=null;return(e||s||l)&&(n=i("div",{class:"container"},i("div",{class:"content"},[e,s,l]))),i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},n,i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))}get element(){return e(this)}}return n([l(),s({description:["This property is the images sources separed by ','.","Using this property a new array will be created by spliting this string by ','."],isMandatory:!0,propertyType:"string"})],r.prototype,"images",void 0),n([s({description:["This property is the title of the slideshow that will be rendered.","If this property is given than a new div container will be created with the title as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],r.prototype,"title",void 0),n([s({description:["This property is the caption of the slideshow that will be rendered.","If this property is given than a new div container will be created with the caption as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],r.prototype,"caption",void 0),r})();export{r as psk_slideshow}