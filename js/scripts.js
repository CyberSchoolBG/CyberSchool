/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
new JustValidate('.fcf-form-class', {
    rules: {
        "Name": {
            "required": true,
            "minLength": 1,
            "maxLength": 100
        },
        "Email": {
            "required": true,
            "minLength": 1,
            "maxLength": 100,
            "email": true
        },
        "Message": {
            "required": true,
            "minLength": 1,
            "maxLength": 3000
        }
    },
    colorWrong: '#dc3545',
    focusWrongField: true,
    submitHandler: function (cform, values, ajax) {

        var button_value = getButtonValue('fcf-button');
        disableButton('fcf-button');
        ajax({
            url: cform.getAttribute('action'),
            method: 'POST',
            data: values,
            async: true,
            callback: function (response) {
                var done = false;
                if (response.indexOf('Fail:') == 0) {
                    // configration problem
                    showFailMessage(response);
                    enableButon('fcf-button', button_value);
                    done = true;
                }

                if (response.indexOf('Error:') == 0) {
                    // validation problem
                    showErrorMessage(response);
                    enableButon('fcf-button', button_value);
                    done = true;
                }

                if (response.indexOf('Success') == 0) {
                    showSuccessMessage(response);
                    done = true;
                }

                if (response.indexOf('Debug:') == 0) {
                    showDebugMessage(response);
                    enableButon('fcf-button', button_value);
                    done = true;
                }

                if (done == false) {
                    showErrorMessage('Error:Sorry, an unexpected error occurred. Please try later.');
                    enableButon('fcf-button', button_value);
                }

            }
        });

    },
});

function getButtonValue(id) {
    return document.getElementById(id).innerText;
}

function disableButton(id) {
    document.getElementById(id).innerText = 'Please wait...';
    document.getElementById(id).disabled = true;
}

function enableButon(id, val) {
    document.getElementById(id).innerText = val;
    document.getElementById(id).disabled = false;
}

function showFailMessage(message) {
    var display = '<strong>Unexpected errors. </strong>(form has been misconfigured)<br>';
    display += message.substring(5);
    document.getElementById('fcf-status').innerHTML = display;
}

function showErrorMessage(message) {
    var display = '<strong>Validation problem:</strong><br>';
    display += message.substring(6);
    document.getElementById('fcf-status').innerHTML = display;
}

function showDebugMessage(message) {
    var display = '<strong>Debug details.</strong><br>(Please remember to switch off DEBUG mode when done!)<br>';
    display += message.substring(6);
    document.getElementById('fcf-status').innerHTML = display;
}

// Removing this credit is NOT allowed
// Please purchase a pro license for credit removal rights
var creditcontainer = document.querySelector(".buttons");
var creditdiv = document.createElement('div');
creditdiv.innerHTML = '<div class="field" style="font-size:0.9em;color:#aaa;padding-top:15px;padding-bottom:10px">Free contact form by <a href="https://www.majesticform.com" style="font-size:0.9em;color:#aaa;text-decoration:none" target="_blank">MajesticForm</a>.</div>';
creditcontainer.parentNode.insertAdjacentElement('afterend', creditdiv);


function showSuccessMessage(message) {
    var message = '<br><br>' + message.substring(8);
    var content = document.getElementById('fcf-thank-you').innerHTML;
    document.getElementById('fcf-thank-you').innerHTML = content + message;
    document.getElementById('fcf-status').innerHTML = '';
    document.getElementById('fcf-form').style.display = 'none';
    document.getElementById('fcf-thank-you').style.display = 'block';
}
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}!function(){for(var e=["DocumentType","Element","CharacterData"],t=function(){null!=this.parentNode&&this.parentNode.removeChild(this)},i=0;i<e.length;i++){var n=e[i];window[n]&&!window[n].prototype.remove&&(window[n].prototype.remove=t)}}(),function(e){var t=setTimeout;function i(){}function n(e){if("object"!==_typeof(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn((function(){var i=1===e._state?t.onFulfilled:t.onRejected;if(null!==i){var n;try{n=i(e._value)}catch(e){return void a(t.promise,e)}s(t.promise,n)}else(1===e._state?s:a)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t)){var i=t.then;if(t instanceof n)return e._state=3,e._value=t,void o(e);if("function"==typeof i)return void u((r=i,s=t,function(){r.apply(s,arguments)}),e)}e._state=1,e._value=t,o(e)}catch(t){a(e,t)}var r,s}function a(e,t){e._state=2,e._value=t,o(e)}function o(e){2===e._state&&0===e._deferreds.length&&n._immediateFn((function(){e._handled||n._unhandledRejectionFn(e._value)}));for(var t=0,i=e._deferreds.length;t<i;t++)r(e,e._deferreds[t]);e._deferreds=null}function l(e,t,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=i}function u(e,t){var i=!1;try{e((function(e){i||(i=!0,s(t,e))}),(function(e){i||(i=!0,a(t,e))}))}catch(e){if(i)return;i=!0,a(t,e)}}n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var n=new this.constructor(i);return r(this,new l(e,t,n)),n},n.all=function(e){var t=Array.prototype.slice.call(e);return new n((function(e,i){if(0===t.length)return e([]);var n=t.length;function r(s,a){try{if(a&&("object"===(void 0===a?"undefined":_typeof(a))||"function"==typeof a)){var o=a.then;if("function"==typeof o)return void o.call(a,(function(e){r(s,e)}),i)}t[s]=a,0==--n&&e(t)}catch(e){i(e)}}for(var s=0;s<t.length;s++)r(s,t[s])}))},n.resolve=function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,i){i(e)}))},n.race=function(e){return new n((function(t,i){for(var n=0,r=e.length;n<r;n++)e[n].then(t,i)}))},n._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},n._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},n._setImmediateFn=function(e){n._immediateFn=e},n._setUnhandledRejectionFn=function(e){n._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(window),function(e){e.Promise||(e.Promise=Promise);var t=function(e){var t=e.url,i=e.method,n=e.data,r=e.debug,s=e.callback,a=e.error;if(r)s("test");else{var o=!1!==e.async,l=new XMLHttpRequest,u=function(e,t){if("string"==typeof e)return e;var i="post"===t.toLowerCase()?"":"?";return Array.isArray(e)?i+e.map((function(e){return e.name+"="+e.value})).join("&"):i+Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")}(n,"get");"post"===i.toLowerCase()&&(u=""),l.open(i,t+u,o),l.onreadystatechange=function(){4===this.readyState&&(200===this.status?s(this.responseText):a&&a(this.responseText))},l.send(n)}},i=function(e,t){this.options=t||{},this.rules=this.options.rules||{},this.messages=this.options.messages||void 0,this.colorWrong=this.options.colorWrong||"#B81111",this.result={},this.elements=[],this.tooltip=this.options.tooltip||{},this.tooltipFadeOutTime=this.tooltip.fadeOutTime||5e3,this.tooltipFadeOutClass=this.tooltip.fadeOutClass||"just-validate-tooltip-hide",this.tooltipSelectorWrap=document.querySelectorAll(this.tooltip.selectorWrap).length?document.querySelectorAll(this.tooltip.selectorWrap):document.querySelectorAll(".just-validate-tooltip-container"),this.bindHandlerKeyup=this.handlerKeyup.bind(this),this.submitHandler=this.options.submitHandler||void 0,this.invalidFormCallback=this.options.invalidFormCallback||void 0,this.promisesRemote=[],this.isValidationSuccess=!1,this.focusWrongField=this.options.focusWrongField||!1,this.REGEXP={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,zip:/^\d{5}(-\d{4})?$/,phone:/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,password:/[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,strengthPass:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/},this.DEFAULT_REMOTE_ERROR="Error",this.state={tooltipsTimer:null},this.setForm(document.querySelector(e))};i.prototype={defaultRules:{email:{required:!0,email:!0},name:{required:!0,minLength:3,maxLength:60},text:{required:!0,minLength:5,maxLength:300,fileTypes:"txt,doc,docx,pdf,xls,xlsx,jpg,jpeg,png,gif,tif,tiff,svg"},password:{required:!0,password:!0,minLength:4,maxLength:8},zip:{required:!0,zip:!0},phone:{phone:!0,minLength:5,maxLength:20}},defaultMessages:{required:"This field is required",email:"Please type a valid email",maxLength:"This field must contain a maximum of :value characters",minLength:"This field must contain a minimum of :value characters",fileTypes:"Please select a valid file type",password:"Password is not valid",remote:"Email already exists",strength:"Password must contents at least one uppercase letter, one lowercase letter and one number",function:"Function returned false"},handlerKeyup:function(e){var t=e.target,i={name:t.getAttribute("data-validate-field"),value:t.value};delete this.result[i.name],this.validateItem({name:i.name,value:i.value,group:[],isKeyupChange:!0}),this.renderErrors()},setterEventListener:function(e,t,i,n){switch("keyup"===t&&(i=this.bindHandlerKeyup),n){case"add":e.addEventListener(t,i);break;case"remove":e.removeEventListener(t,i)}},validationFailed:function(){this.invalidFormCallback&&this.invalidFormCallback(this.result);var e=document.querySelector(".js-validate-error-field");this.focusWrongField&&e&&e.focus&&e.focus()},validationSuccess:function(){if(0===Object.keys(this.result).length){if(this.isValidationSuccess=!1,this.submitHandler){var e=new FormData(this.$form);return void this.submitHandler(this.$form,e,t)}this.$form.submit()}},setForm:function(e){var t=this;this.$form=e,this.$form.setAttribute("novalidate","novalidate"),this.$form.addEventListener("submit",(function(e){e.preventDefault(),t.result=[],t.getElements(),t.promisesRemote.length?Promise.all(t.promisesRemote).then((function(){t.promisesRemote=[],t.isValidationSuccess?t.validationSuccess():t.validationFailed()})):t.isValidationSuccess?t.validationSuccess():t.validationFailed()}))},isEmail:function(e){return this.REGEXP.email.test(e)},isZip:function(e){return this.REGEXP.zip.test(e)},isPhone:function(e){return this.REGEXP.phone.test(e)},isPassword:function(e){return this.REGEXP.password.test(e)},isEmpty:function(e){var t=e;return e.trim&&(t=e.trim()),!t},checkLengthMax:function(e,t){return e.length<=t},checkLengthMin:function(e,t){return e.length>=t},checkFileTypes:function(e,t){var i=!1;return t.split(/\s*,\s*/).forEach((function(t){e.substr(e.length-t.length,t.length).toLowerCase()==t.toLowerCase()&&(i=!0)})),i},checkStrengthPass:function(e){return this.REGEXP.strengthPass.test(e)},getElements:function(){var e=this,t=this.$form.querySelectorAll("[data-validate-field]");this.elements=[];for(var i=function(i,n){var r=t[i],s=r.getAttribute("data-validate-field"),a=r.value,o=!1,l=[];if("select-one"!==r.type&&"select-multiple"!==r.type&&"file"!==r.type||(a=r.value||"",r.addEventListener("change",(function(t){var i=t.target,n={name:i.getAttribute("data-validate-field"),value:i.value};delete e.result[n.name],e.validateItem({name:n.name,value:n.value,group:[]}),e.renderErrors()}))),"radio"===r.type||"checkbox"===r.type){var u=e.elements.filter((function(e){if(e.name===s)return e}))[0];u?(u.group.push(r.checked),o=!0):l.push(r.checked),r.addEventListener("change",(function(t){var i=t.target,n={name:i.getAttribute("data-validate-field"),value:i.checked};delete e.result[n.name],e.validateItem({name:n.name,value:n.value,group:[]}),e.renderErrors()}))}e.setterEventListener(r,"keyup",e.handlerKeyup,"add"),o||e.elements.push({name:s,value:a,group:l})},n=0,r=t.length;n<r;++n)i(n);this.validateElements()},validateRequired:function(e){return!this.isEmpty(e)},validateEmail:function(e){return this.isEmail(e)},validatePhone:function(e){return this.isPhone(e)},validateMinLength:function(e,t){return this.checkLengthMin(e,t)},validateMaxLength:function(e,t){return this.checkLengthMax(e,t)},validateFileTypes:function(e,t){return this.checkFileTypes(e,t)},validateStrengthPass:function(e){return this.checkStrengthPass(e)},validatePassword:function(e){return this.isPassword(e)},validateZip:function(e){return this.isZip(e)},validateRemote:function(e){var i=e.value,n=e.name,r=e.url,s=e.successAnswer,a=e.sendParam,o=e.method;return new Promise((function(e){t({url:r,method:o,data:_defineProperty({},a,i),async:!0,callback:function(t){t.toLowerCase()===s.toLowerCase()&&e("ok"),e({type:"incorrect",name:n})},error:function(){e({type:"error",name:n})}})}))},generateMessage:function(e,t,i){var n=this.messages||this.defaultMessages,r=n[t]&&n[t][e]||this.messages&&"string"==typeof this.messages[t]&&n[t]||this.defaultMessages[e]||this.DEFAULT_REMOTE_ERROR;i&&(r=r.replace(":value",i.toString())),this.result[t]={message:r}},validateElements:function(){var e=this;this.lockForm(),this.elements.forEach((function(t){e.validateItem({name:t.name,value:t.value,group:t.group})})),this.promisesRemote.length?Promise.all(this.promisesRemote).then((function(t){t.forEach((function(t){"ok"!==t?("error"===t.type&&alert("Server error occured. Please try later."),e.generateMessage("remote",t.name),e.renderErrors()):e.renderErrors()}))})):this.renderErrors()},validateItem:function(e){var t=this,i=e.name,n=e.group,r=e.value,s=e.isKeyupChange,a=this.rules[i]||this.defaultRules[i]||!1;if(a)for(var o in a){var l=a[o];if("required"!==o&&"function"!==o&&""==r)return;switch(o){case"function":if("function"!=typeof l)break;if(l(i,r))break;return void this.generateMessage("function",i,l);case"required":if(!l)break;if(n.length){var u=!1;if(n.forEach((function(e){t.validateRequired(e)&&(u=!0)})),u)break}else if(this.validateRequired(r))break;return void this.generateMessage("required",i);case"email":if(!l)break;if(this.validateEmail(r))break;return void this.generateMessage("email",i);case"minLength":if(!l)break;if(this.validateMinLength(r,l))break;return void this.generateMessage("minLength",i,l);case"maxLength":if(!l)break;if(this.validateMaxLength(r,l))break;return void this.generateMessage("maxLength",i,l);case"fileTypes":if(!l)break;if(this.validateFileTypes(r,l))break;return void this.generateMessage("fileTypes",i,l);case"phone":if(!l)break;if(this.validatePhone(r))break;return void this.generateMessage("phone",i);case"password":if(!l)break;if(this.validatePassword(r))break;return void this.generateMessage("password",i);case"strength":if(!l||"object"!==(void 0===l?"undefined":_typeof(l)))break;if(l.default&&this.validateStrengthPass(r))break;if(l.custom){var d=void 0;try{d=new RegExp(l.custom)}catch(e){d=this.REGEXP.strengthPass,console.error("Custom regexp for strength rule is not valid. Default regexp was used.")}if(d.test(r))break}return void this.generateMessage("strength",i);case"zip":if(!l)break;if(this.validateZip(r))break;return void this.generateMessage("zip",i);case"remote":if(s)break;if(!l)break;var c=l.url,h=l.successAnswer,f=l.method,m=l.sendParam,p=this.$form.querySelector('input[data-validate-field="'+i+'"]');return this.setterEventListener(p,"keyup",this.handlerKeyup,"remove"),void this.promisesRemote.push(this.validateRemote({name:i,value:r,url:c,method:f,sendParam:m,successAnswer:h}))}}},clearErrors:function(){for(var e=document.querySelectorAll(".js-validate-error-label"),t=0,i=e.length;t<i;++t)e[t].remove();for(var n=0,r=(e=document.querySelectorAll(".js-validate-error-field")).length;n<r;++n)e[n].classList.remove("js-validate-error-field"),e[n].style.border="",e[n].style.color=""},renderErrors:function(){var e=this;if(this.clearErrors(),this.unlockForm(),this.isValidationSuccess=!1,0!==Object.keys(this.result).length){for(var t in this.result){var i=this.result[t].message,n=this.$form.querySelectorAll('[data-validate-field="'+t+'"]'),r=n[n.length-1];r.classList.add("js-validate-error-field");var s=document.createElement("div");s.innerHTML=i,s.className="js-validate-error-label","file"===r.type||"select-one"===r.type||"select-multiple"===r.type?r.parentNode.parentNode.insertAdjacentElement("afterend",s):"checkbox"===r.type||"radio"===r.type?r.parentNode.parentNode.parentNode.insertAdjacentElement("afterend",s):r.parentNode.insertAdjacentElement("afterend",s)}this.tooltipSelectorWrap.length&&(this.state.tooltipsTimer=setTimeout((function(){e.hideTooltips()}),this.tooltipFadeOutTime))}else this.isValidationSuccess=!0},hideTooltips:function(){var e=this;document.querySelectorAll(".js-validate-error-label").forEach((function(t){t.classList.add(e.tooltipFadeOutClass)})),this.state.tooltipsTimer=null},lockForm:function(){for(var e=this.$form.querySelectorAll("input, textarea, button, select"),t=0,i=e.length;t<i;++t)e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"},unlockForm:function(){for(var e=this.$form.querySelectorAll("input, textarea, button, select"),t=0,i=e.length;t<i;++t)e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webitFilter="",e[t].style.filter=""}},e.JustValidate=i}(window);

