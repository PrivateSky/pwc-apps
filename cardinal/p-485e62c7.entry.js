import{r as t,h as e,g as o}from"./p-87f0c668.js";import"./p-012de76a.js";import{i as r}from"./p-7c10a633.js";import"./p-416576da.js";import{C as s}from"./p-8243e225.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{C as i}from"./p-954e4ff8.js";import{T as n}from"./p-9a6ac7e0.js";import{C as l}from"./p-51327a3c.js";var a=function(t,e,o,r){var s,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(i<3?s(n):i>3?s(e,o,n):s(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const p=class{constructor(e){t(this,e),this.promisifyControllerLoad=t=>new Promise((e,o)=>{l.getController(t).then(t=>{e(t)}).catch(o)})}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}render(){return[e("slot",null),this.htmlFilePath&&e("psk-page-loader",{pageUrl:this.htmlFilePath})]}componentWillLoad(){let t;return t="string"==typeof this.controllerName&&this.controllerName.length>0?this.promisifyControllerLoad(this.controllerName):Promise.resolve(s),t.then(t=>{this.disconnected||(this.controller=new t(this._host,this.history),this.__getInnerController.call(this,this._host),this.controllerScript&&this.executeScript(this.controllerScript))}).catch(t=>{console.log(t)}),t}__getInnerController(t){const e=t.children;for(let t=0;t<e.length;t++){const o=e[t];if("script"===o.tagName.toLowerCase())return this.controllerScript=o.innerHTML,void(o.innerHTML="")}}executeScript(t){return"string"==typeof t&&t.trim().length>0&&new Function("controller",t)(this.controller),null}get _host(){return o(this)}};a([i(),n({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],p.prototype,"controllerName",void 0),a([n({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],p.prototype,"htmlFilePath",void 0),r(p);export{p as psk_container}