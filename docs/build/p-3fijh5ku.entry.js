import{r as e,h as s}from"./p-2972acc2.js";const a=class{constructor(s){e(this,s)}componentWillLoad(){this.stepProperties||(this.stepProperties={csbName:"",stepPhase:"csb-name"},this.onPropertiesChange(this.stepProperties))}handleInputChange(e){this.stepProperties.csbName=e.target.value,this.onPropertiesChange(this.stepProperties)}render(){return s("div",{class:"content clearfix"},s("section",{role:"tabpanel",class:"body"},s("div",{class:"inner"},s("div",{class:"wizard-header"},s("h3",{class:"heading"},"Enter your Cloud safe box name")),s("div",{class:"form-row"},s("div",{class:"form-holder form-holder-2"},s("label",{htmlFor:"csb-name"},"Enter CSB Name"),s("input",{type:"text",name:"csb-name",id:"csb-name",class:"form-control",placeholder:"Enter a name for your cloud safe box",value:this.stepProperties.csbName,onKeyUp:this.handleInputChange.bind(this),required:!0}))))))}};export{a as enter_csb_name};