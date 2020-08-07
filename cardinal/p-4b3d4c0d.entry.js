import{r as e,h as t,g as i}from"./p-ada53152.js";import"./p-f2139256.js";import"./p-1eba7335.js";import{T as o}from"./p-305c5027.js";import{C as s}from"./p-d327265e.js";import{B as r}from"./p-91fd9199.js";var a=function(e,t,i,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const n=class{constructor(t){e(this,t),this.options=null,this.label=null,this.value=null,this.name=null,this.required=!1,this.invalid=!0}onChangeRadioHandler(e){e.preventDefault(),e.stopImmediatePropagation(),e.detail&&e.detail.value&&this._host.querySelectorAll("psk-radio").forEach(t=>{const i=t.getElementsByTagName("input")[0];i.value===e.detail.value?(this.value=e.detail.value,this.__updateModel.call(this),i.checked=!0):i.checked=!1})}render(){return t("div",{class:"form-group"},t("psk-label",{for:this.name,label:this.label}),t("div",{id:"psk-radio-group",class:"form-group"},this.options&&this.options.map(e=>{const i=e.name?e.name:e.label&&e.label.replace(/\s/g,"").toLowerCase();return t("psk-radio",Object.assign({},e,{name:i}))}),t("slot",null)))}__updateModel(){this.modelHandler.updateModel("value",this.value)}get _host(){return i(this)}};a([s(),r()],n.prototype,"modelHandler",void 0),a([o({description:['By filling out this property, the component will display above the group, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),a([o({description:["Specifies the selected value of a psk-radio component inside the group.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),a([o({description:["Specifies the name of a psk-radio-group component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),a([o({description:["Specifies that a psk-radio inside the group must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0),a([o({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean",specialNote:"For the moment, there is no visual implelentation for this attribute, but it will be in a further iteration."})],n.prototype,"invalid",void 0);export{n as psk_radio_group}