import{r as t,h as a,g as o}from"./p-87f0c668.js";import"./p-416576da.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{B as s}from"./p-67458612.js";import{C as i}from"./p-954e4ff8.js";import{T as e}from"./p-9a6ac7e0.js";var r=function(t,a,o,s){var i,e=arguments.length,r=e<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,o,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(r=(e<3?i(r):e>3?i(a,o,r):i(a,o))||r);return e>3&&r&&Object.defineProperty(a,o,r),r};const n=class{constructor(a){t(this,a),this.tabData=[],this.tabNavigator=null,this.default=0,this.layout="horizontal",this.navigationDisabled=!1,this.selected=0}componentWillLoad(){const t=this._host.children;for(let a=0;a<t.length;a++)this.tabData.push({index:a,title:t[a].getAttribute("title")});this.default=this.__checkBoundaries("default",this.default);let a=this.default;this.selected&&(this.selected=this.__checkBoundaries("selected",this.selected),a=this.selected),this.tabNavigator=this.__renderTabNavigator(a)}componentDidLoad(){this.__renderActiveTab(this.default)}onTabSelected(t){t.stopImmediatePropagation();const{value:a}=t.data,o=parseInt(a);this.__selectTab(o)}onTabClicked(t){t.stopImmediatePropagation();const a=t.currentTarget,o=[].slice.call(a.parentElement.children).indexOf(a);this.__selectTab(o)}selectedUpdate(){this.selected=this.__checkBoundaries("selected",this.selected),this.__selectTab(this.selected)}__checkBoundaries(t,a){return Number.isInteger(a)?a<0?(console.warn("psk-tab-navigator:",`"${t}" value is not in corresponding range [0, ${this._host.children.length-1}]`),1):a>=this._host.children.length?(console.warn("psk-tab-navigator:",`"${t}" value is not in corresponding range [0, ${this._host.children.length-1}]`),this._host.children.length-1):a:(console.warn("psk-tab-navigator:",`"${t}" value is not an integer`),0)}__selectTab(t){this.tabNavigator=this.__renderTabNavigator(t),this.__renderActiveTab(t)}__renderActiveTab(t){const a=this._host.children;for(let t=0;t<a.length;t++)a[t].setAttribute("hidden","true"),a[t].removeAttribute("slot");a[t].removeAttribute("hidden"),a[t].setAttribute("slot","tab-active")}__renderTabNavigator(t){if("mobile"===this.layout){const o=this.tabData.map(t=>`${t.title}, ${t.index}`).join(" | ");return a("psk-form-row",null,a("psk-select",{value:t,"select-options":o,disabled:this.navigationDisabled,"event-name":"psk-tab-navigator:psk-select:change"}))}return this.tabData.map(o=>a("psk-button",{disabled:this.navigationDisabled,class:{active:o.index===t},onClick:t=>this.onTabClicked(t)},o.title))}render(){return a("div",{class:"tabs"},a("div",{class:"tab-navigator"},this.tabNavigator),a("div",{class:"tab-container"},a("slot",{name:"tab-active"})))}get _host(){return o(this)}static get watchers(){return{selected:["selectedUpdate"]}}};r([s()],n.prototype,"modelHandler",void 0),r([i()],n.prototype,"_host",void 0),r([e({description:["This property actives the tab with specified index.","By default the first tab is selected.","The first tab is indexed with 0. If an invalid index is set, a warning will be thrown and the default value will be selected."],isMandatory:!1,propertyType:"number",defaultValue:"0"})],n.prototype,"default",void 0),r([e({description:['There are four alternatives for this attribute: "horizontal", "vertical", "mobile" and "none" (or any string).',"According to this property, the appearance of the tabs is changing. Also, the tab control mechanism may be different."],isMandatory:!1,propertyType:"string",defaultValue:"horizontal"})],n.prototype,"layout",void 0),n.style={default:":host .tabs{display:grid}:host .tabs .tab-navigator{overflow-x:auto}:host .tabs .tab-container{position:relative}:host .tabs .tab-navigator .btn{margin:0;border:none;border-radius:0}:host([layout='horizontal']) .tabs .tab-navigator{display:grid;grid-auto-flow:column}:host([layout='horizontal']) .tabs .tab-navigator .btn{width:100%}:host([layout='vertical']) .tabs{grid-template-columns:auto 1fr;align-items:start}:host([layout='vertical']) .tabs .tab-navigator{display:grid}:host([layout='vertical']) .tabs .tab-navigator button.btn{width:100%}:host([layout='mobile']) .tabs .tab-navigator psk-select psk-label{display:none}:host([layout='mobile']) .tabs .tab-navigator psk-select .form-group{margin:0}:host .tabs{background-color:#FFFFFF;box-shadow:0 0 10px rgba(0, 0, 0, 0.25)}:host .tabs .tab-navigator,:host .tabs .tab-navigator .btn{background-color:#4C71DD}:host .tabs .tab-navigator psk-button.active button.btn{background-color:#354F9B;border-style:none}:host .tabs .tab-container{padding:1rem}:host([layout='horizontal']) .tabs .tab-container{border-top:3px solid #354F9B}:host([layout='vertical']) .tabs .tab-navigator{min-width:150px}:host([layout='mobile']) .tabs .tab-navigator{padding:1rem;background-color:#4C71DD70;border-bottom:1px solid #354F9B}",layout:":host .tabs{display:grid}:host .tabs .tab-navigator{overflow-x:auto}:host .tabs .tab-container{position:relative}:host .tabs .tab-navigator .btn{margin:0;border:none;border-radius:0}:host([layout='horizontal']) .tabs .tab-navigator{display:grid;grid-auto-flow:column}:host([layout='horizontal']) .tabs .tab-navigator .btn{width:100%}:host([layout='vertical']) .tabs{grid-template-columns:auto 1fr;align-items:start}:host([layout='vertical']) .tabs .tab-navigator{display:grid}:host([layout='vertical']) .tabs .tab-navigator button.btn{width:100%}:host([layout='mobile']) .tabs .tab-navigator psk-select psk-label{display:none}:host([layout='mobile']) .tabs .tab-navigator psk-select .form-group{margin:0}"};export{n as psk_tab_navigator}