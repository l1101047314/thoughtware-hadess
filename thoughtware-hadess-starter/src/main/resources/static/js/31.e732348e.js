(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1141:function(e,t,r){"use strict";r(708)},1157:function(e,t,r){"use strict";r(423);var n=r(419),a=(r(399),r(400)),i=(r(401),r(402)),o=(r(395),r(394)),u=(r(433),r(425)),c=(r(260),r(182)),l=(r(415),r(416)),f=(r(109),r(57)),s=(r(179),r(58)),p=r(0),d=r.n(p),h=r(346),y=r(437),m=r(255),v=r(1198),b=r(176),g=(r(256),r(177)),w=r(125),E=r(6),A=r(392),O=r(167),S=r(101),j=function(e){var t=e.currentPage,r=e.changPage,n=e.page,a=n.totalPage,i=void 0===a?1:a,o=n.totalRecord,u=void 0===o?1:o;return i>1&&d.a.createElement("div",{className:"licence-page"},d.a.createElement("div",{className:"".concat(1===t?"licence-page-ban":"licence-page-allow"),onClick:function(){return 1===t?null:r(t-1)}},d.a.createElement(O.default,null)),d.a.createElement("div",{className:"licence-page-current"},t),d.a.createElement("div",{className:"licence-page-line"}," / "),d.a.createElement("div",null,i),d.a.createElement("div",{className:"".concat(t===i?"licence-page-ban":"licence-page-allow"),onClick:function(){return t===i?null:r(t+1)}},d.a.createElement(S.default,null)),d.a.createElement("div",{className:"licence-page-record"},"  共",u,"条 "))};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw a}}return u}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U,z,C,R,G,D,F=function(e){var t=e.visible,r=e.handleOk,n=e.handleCancel,a=e.allSelectIds,i=e.selectedRowKeys,u=e.setSelectedRowKeys,c=e.userDir,l=_(Object(p.useState)([]),2),s=l[0],h=l[1],y=_(Object(p.useState)({pageSize:6,currentPage:1}),1)[0],v=_(Object(p.useState)(1),2),b=v[0],O=v[1],S=_(Object(p.useState)({}),2),x=S[0],k=S[1],I=_(Object(p.useState)({pageParam:y}),2),T=I[0],N=I[1],U=_(Object(p.useState)([]),2),z=U[0],C=U[1];Object(p.useEffect)((function(){c?C(c):E.Axios.post("/user/userdir/findAllList").then((function(e){e.code||C(e.data)}))}),[c]),Object(p.useEffect)((function(){R(L({},T))}),[T]);var R=function(e){E.Axios.post("/user/user/findUserPage",e).then((function(e){e.code||(k({totalRecord:e.data.totalRecord,totalPage:e.data.totalPage}),h(e.data.dataList))}))},G=function(e){return a&&a.some((function(t){return t===e.id}))},D={selectedRowKeys:i,onSelectAll:function(e,t,r){var n=r.map((function(e){return e&&e.id})).filter((function(e){return void 0!==e}));if(e){var a=Array.from(new Set([].concat(P(n),P(i))));u(a)}else{var o=i.filter((function(e){return!n.includes(e)}));u(o)}},onSelect:function(e){return F(e)},getCheckboxProps:function(e){return{disabled:G(e)}}},F=function(e){G(e)||(i.indexOf(e.id)>=0?i.splice(i.indexOf(e.id),1):i.push(e.id),u(P(i)))},K=[{title:"姓名",dataIndex:"nickname",key:"nickname",width:"30%",ellipsis:!0,render:function(e,t){return d.a.createElement(f.default,null,d.a.createElement(m.a,{userInfo:t}),e)}},{title:"手机号",dataIndex:"phone",key:"phone",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"邮箱",dataIndex:"email",key:"email",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"用户目录",dataIndex:"dirId",key:"dirId",width:"15%",ellipsis:!0,render:function(e){var t=z.findIndex((function(t){return t.id===e}));return t>-1?z[t].name:"--"}}];return d.a.createElement(A.a,{title:"选择用户",visible:t,onCancel:n,onOk:r,width:800,destroyOnClose:!0},d.a.createElement("div",{className:"licence-user-add-modal"},d.a.createElement(g.default,{placeholder:"搜索用户名、手机号、邮箱",style:{width:240},onPressEnter:function(e){return function(e){var t=L(L({},T),{},{nickname:e.target.value,pageParam:y});N(t)}(e)},prefix:d.a.createElement(w.default,{style:{fontSize:"var(--thoughtware-icon-size-16)"}})}),d.a.createElement("div",{style:{width:"100%"}},d.a.createElement(o.default,{columns:K,dataSource:s,rowSelection:D,onRow:function(e){return{onClick:function(){return F(e)}}},rowKey:function(e){return e.id},pagination:!1}),d.a.createElement(j,{currentPage:b,changPage:function(e){O(e);var t=L(L({},T),{},{pageParam:{pageSize:6,currentPage:e}});N(t)},page:x}))))},K=r(10);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */M=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),u=new L(n||[]);return a(o,"_invoke",{value:j(e,r,u)}),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",d="executing",h="completed",y={};function m(){}function v(){}function b(){}var g={};l(g,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==r&&n.call(E,o)&&(g=E);var A=b.prototype=m.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(a,i,o,u){var c=s(e[a],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==B(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,u)}),(function(e){r("throw",e,o,u)})):t.resolve(f).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}})}function j(t,r,n){var a=p;return function(i,o){if(a===d)throw new Error("Generator is already running");if(a===h){if("throw"===i)throw o;return{value:e,done:!0}}for(n.method=i,n.arg=o;;){var u=n.delegate;if(u){var c=x(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=d;var l=s(t,r,n);if("normal"===l.type){if(a=n.done?h:"suspendedYield",l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=h,n.method="throw",n.arg=l.arg)}}}function x(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=s(a,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(B(t)+" is not iterable")}return v.prototype=b,a(A,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},t.awrap=function(e){return{__await:e}},O(S.prototype),l(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new S(f(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(A),l(A,c,"Generator"),l(A,o,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function V(e,t,r,n,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function $(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){V(i,n,a,o,u,"next",e)}function u(e){V(i,n,a,o,u,"throw",e)}o(void 0)}))}}function J(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,H(n.key),n)}}function q(e,t,r){return t&&Y(e.prototype,t),r&&Y(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===B(t)?t:String(t)}function Q(e,t,r,n,a){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),a&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(a):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var W=new(z=Q((U=q((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),J(this,"findApplyAuth",z,this),J(this,"createUserApplyAuth",C,this),J(this,"deleteUserApplyAuth",R,this),J(this,"updateApplyAuthType",G,this),J(this,"deleteProductAuthUser",D,this)}))).prototype,"findApplyAuth",[K.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return $(M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.Axios.post("/applyAuth/findApplyAuth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}}),C=Q(U.prototype,"createUserApplyAuth",[K.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=$(M().mark((function e(t){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("userId",t),e.next=4,E.Axios.post("/applyAuth/createUserApplyAuth",r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),R=Q(U.prototype,"deleteUserApplyAuth",[K.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=$(M().mark((function e(t){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("userId",t),e.next=4,E.Axios.post("/applyAuth/deleteUserApplyAuth",r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),G=Q(U.prototype,"updateApplyAuthType",[K.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=$(M().mark((function e(t){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.Axios.post("/applyAuthType/updateApplyAuthType",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),D=Q(U.prototype,"deleteProductAuthUser",[K.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=$(M().mark((function e(t){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("id",t),e.next=4,E.Axios.post("/applyAuthUser/deleteProductAuthUser",r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),U);function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ee=function(e){var t=e.visible,r=e.setVisible,n=e.authUser,a=e.findAllProductAuth,i=W.createUserApplyAuth,o=X(Object(p.useState)([]),2),u=o[0],c=o[1],l=X(Object(p.useState)([]),2),f=l[0],s=l[1];Object(p.useEffect)((function(){t&&(s(n&&n.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))),c(n&&n.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))))}),[t]);var h=function(){r(!1),c([]),s([])};return d.a.createElement(F,{visible:t,allSelectIds:f,selectedRowKeys:u,setSelectedRowKeys:c,handleOk:function(){var e=u.filter((function(e){return!f.includes(e)})),t=e&&e.map((function(e){return i(e)}));Promise.all(t).then((function(e){setTimeout((function(){a(),h()}),200)}))},handleCancel:h})};r(393),r(708);function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ne=function(e){var t=W.findApplyAuth,r=W.createUserApplyAuth,g=W.deleteUserApplyAuth,w=W.updateApplyAuthType,E=W.deleteProductAuthUser,A=te(Object(p.useState)(!1),2),O=A[0],S=A[1],j=te(Object(p.useState)({}),2),x=j[0],P=j[1],k=te(Object(p.useState)(!1),2),L=k[0],I=k[1];Object(p.useEffect)((function(){_()}),[]);var _=function(){S(!0),t().then((function(e){S(!1),0===e.code&&P(e.data)}))},T=function(e){var t=e.user.id;"2"===e.state?r(t).then((function(e){0===e.code?_():s.default.info(e.msg)})):g(t).then((function(e){0===e.code?_():s.default.info(e.msg)}))},N=[{title:"姓名",dataIndex:["user","nickname"],key:["user","nickname"],width:"50%",ellipsis:!0,render:function(e,t){return d.a.createElement(f.default,null,d.a.createElement(m.a,{userInfo:t})," ",e)}},{title:"状态",dataIndex:"state",key:"state",width:"30%",ellipsis:!0,render:function(e){return"1"===e?d.a.createElement(l.default,{color:"green"},"已激活"):d.a.createElement(l.default,{color:"red"},"未激活")}},{title:"操作",width:"20%",ellipsis:!0,render:function(e,t){if(1===t.type)return null;var r=t.state;return d.a.createElement(f.default,{size:"middle"},"2"===r?d.a.createElement(y.PrivilegeButton,{code:"version_open"},d.a.createElement("span",{className:"thoughtware_productauth-action-ac",onClick:function(){return T(t)}},"激活")):d.a.createElement(y.PrivilegeButton,{code:"version_open"},d.a.createElement("span",{className:"thoughtware_productauth-action-ac",onClick:function(){return T(t)}},"取消激活")),"2"===(null==x?void 0:x.authType)&&d.a.createElement(y.PrivilegeButton,{code:"version_delete"},d.a.createElement(c.default,{placement:"topRight",title:"你确定移除吗",onConfirm:function(){return function(e){var t=e.id;E(t).then((function(e){0===e.code?_():s.default.info(e.msg)}))}(t)},okText:"确定",cancelText:"取消"},d.a.createElement("span",{className:"thoughtware_productauth-action-bc"},"删除"))))}}];return d.a.createElement(n.a,{spinning:O,tip:"正在查询…"},d.a.createElement(a.default,{className:"thoughtware_productauth"},d.a.createElement(i.default,{sm:{span:24},xs:{span:24},md:{span:24},lg:{span:"18",offset:"3"},xl:{span:"18",offset:"3"},className:"thoughtware_productauth_container"},d.a.createElement(v.a,{firstItem:"应用访问权限"},"2"===(null==x?void 0:x.authType)&&d.a.createElement(b.a,{title:"添加用户",type:"primary",icon:d.a.createElement(h.default,null),onClick:function(){return I(!0)}}),d.a.createElement(ee,{visible:L,setVisible:I,authUser:(null==x?void 0:x.authUserList)||[],findAllProductAuth:_})),d.a.createElement("div",{className:"thoughtware_productauth_type"},d.a.createElement("div",{className:"productauth_type_title"},"授权方式"),d.a.createElement("div",null,d.a.createElement(u.default.Group,{value:null==x?void 0:x.authType,onChange:function(e){S(!0),w({authType:e.target.value,id:x.id}).then((function(e){0===e.code?setTimeout((function(){_()}),200):(S(!1),s.default.info(e.msg))}))}},d.a.createElement(u.default,{value:"1"},"全部人员"),d.a.createElement(u.default,{value:"2"},"指定人员")))),d.a.createElement(o.default,{dataSource:"1"===(null==x?void 0:x.authType)?null==x?void 0:x.authVUserList:null==x?void 0:x.authUserList,columns:N,pagination:!1,rowKey:function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}}))))};t.a=ne},708:function(e,t,r){}}]);