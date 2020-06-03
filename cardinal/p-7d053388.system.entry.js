System.register(["./p-c99df712.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-fad6c953.system.js","./p-f47b97fd.system.js","./p-ca8d632f.system.js"],(function(e){"use strict";var t,o,i,n,a,s;return{setters:[function(e){t=e.r;o=e.c;i=e.h},function(){},function(){},function(e){n=e.T},function(e){a=e.T},function(e){s=e.C}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,o,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)if(s=e[r])a=(n<3?s(a):n>3?s(t,o,a):s(t,o))||a;return n>3&&a&&Object.defineProperty(t,o,a),a};var l=e("psk_radio",function(){function e(e){t(this,e);this.label=null;this.value=null;this.name=null;this.readOnly=false;this.invalidValue=null;this.checked=false;this.onChangeRadio=o(this,"onChangeRadio",5)}e.prototype.render=function(){var e=this.name?this.name:this.label&&this.label.replace(/\s/g,"").toLowerCase();var t=this.value?this.value:e;console.log(this.name,this.label);return i("div",{class:"form-check form-check-inline"},i("input",{type:"radio",class:"form-check-input",value:t,name:e,readOnly:this.readOnly,checked:this.checked,onChange:this.__handleRadioChange.bind(this)}),i("psk-label",{for:e,label:this.label}))};e.prototype.__handleRadioChange=function(e){e.preventDefault();e.stopImmediatePropagation();this.onChangeRadio.emit({value:e.target.value})};return e}());r([s()],l.prototype,"render",null);r([n({description:['By filling out this property, the component will display near it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],l.prototype,"label",void 0);r([n({description:["Specifies the value of a psk-radio component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],l.prototype,"value",void 0);r([n({description:["Specifies the name of a psk-radio component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],l.prototype,"name",void 0);r([n({description:["\tSpecifies that a psk-radio is read-only and it cannot be changed.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],l.prototype,"readOnly",void 0);r([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],l.prototype,"invalidValue",void 0);r([n({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the radio, in case you need it to be checked."],isMandatory:false,propertyType:"boolean"})],l.prototype,"checked",void 0);r([a({description:["This event is being triggered when a radio button is checked.","The event bubbles to the parent component, psk-radio-group, where the component will handle the selection of the radio."],specialNote:"This event is not composed, it will not bubble outside the form!"})],l.prototype,"onChangeRadio",void 0)}}}));