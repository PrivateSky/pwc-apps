System.register(["./p-008f8465.system.js"],(function(e){"use strict";var t,s;return{setters:[function(e){t=e.r;s=e.h}],execute:function(){var r=e("save_recovery_phrase",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){if(!this.stepProperties){this.stepProperties={saveRecoveryPhrase:false,stepPhase:"save-recovery-phrase"};this.onPropertiesChange(this.stepProperties)}};e.prototype.handleInputChange=function(e){this.stepProperties.saveRecoveryPhrase=e.target.checked;this.onPropertiesChange(this.stepProperties)};e.prototype.render=function(){return s("div",{class:"content clearfix"},s("section",{role:"tabpanel",class:"body"},s("div",{class:"inner"},s("div",{class:"wizard-header"},s("h3",{class:"heading"},"Save recovery phrase")),s("div",{class:"form-row"},s("div",{class:"form-holder form-holder-2"},s("div",{class:"content-inner"},s("p",null,"Massa placerat duis ultricies lacus sed turpis tin Elementum sagittis vitae et leo duis ut diam quam nulla. Viverra mauris in aliquam sem fringilla ut. Id leo in vitae turpis massa sed elementum tempus. Aliquet enim tortor at auctor urna nunc id cursus. Nulla aliquet enim tortor at auctor .Consquat nisl vel pretium lectus quam id leo."),s("div",{class:"form-checkbox"},s("label",{class:"container"},s("p",null,"I want to store recovery phrase untill I opt out."),s("input",{type:"checkbox",name:"checkbox",checked:this.stepProperties.saveRecoveryPhrase,onChange:this.handleInputChange.bind(this)}),s("span",{class:"checkmark"})))))))))};return e}())}}}));