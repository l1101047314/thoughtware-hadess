(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1100:function(e,t,n){"use strict";n(692)},1105:function(e,t,n){"use strict";n(441);var a=n(435),r=(n(398),n(397)),i=(n(464),n(462)),l=(n(261),n(181)),c=(n(126),n(66)),o=(n(180),n(64)),u=n(0),s=n.n(u),m=n(9),f=n(414),d=n(70),p=n(259),v=n(166),b=function(e){var t=e.firstItem,n=e.secondItem,a=e.onClick,r=e.children;return s.a.createElement("div",{className:"licence-breadcrumb"},s.a.createElement(c.default,null,s.a.createElement("span",{className:a?"licence-breadcrumb-first":"",onClick:a},a&&s.a.createElement(v.default,{style:{marginRight:8}}),s.a.createElement("span",{className:n?"licence-breadcrumb-span":""},t)),n&&s.a.createElement("span",null," /   ",n)),s.a.createElement("div",null,r))},y=n(176),E=n(394),h=n(88),g=(n(260),n(178)),O=n(129),N=n(101),w=function(e){var t=e.currentPage,n=e.changPage,a=e.page,r=a.totalPage,i=void 0===r?1:r,l=a.totalRecord,c=void 0===l?1:l;return i>1&&s.a.createElement("div",{className:"licence-page"},s.a.createElement("div",{className:"".concat(1===t?"licence-page-ban":"licence-page-allow"),onClick:function(){return 1===t?null:n(t-1)}},s.a.createElement(v.default,null)),s.a.createElement("div",{className:"licence-page-current"},t),s.a.createElement("div",{className:"licence-page-line"}," / "),s.a.createElement("div",null,i),s.a.createElement("div",{className:"".concat(t===i?"licence-page-ban":"licence-page-allow"),onClick:function(){return t===i?null:n(t+1)}},s.a.createElement(N.default,null)),s.a.createElement("div",{className:"licence-page-record"},"  共",c,"条 "))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==S(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===S(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i,l,c=[],o=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw r}}return c}}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var _=function(e){var t=e.visible,n=e.handleOk,a=e.handleCancel,i=e.allSelectIds,l=e.selectedRowKeys,o=e.setSelectedRowKeys,f=e.userDir,d=P(Object(u.useState)([]),2),v=d[0],b=d[1],y=P(Object(u.useState)({pageSize:6,currentPage:1}),1)[0],h=P(Object(u.useState)(1),2),N=h[0],S=h[1],A=P(Object(u.useState)({}),2),x=A[0],I=A[1],C=P(Object(u.useState)({pageParam:y}),2),_=C[0],Y=C[1],T=P(Object(u.useState)([]),2),D=T[0],U=T[1];Object(u.useEffect)((function(){f?U(f):m.Axios.post("/user/userdir/findAllList").then((function(e){e.code||U(e.data)}))}),[f]),Object(u.useEffect)((function(){M(k({},_))}),[_]);var M=function(e){m.Axios.post("/user/user/findUserPage",e).then((function(e){e.code||(I({totalRecord:e.data.totalRecord,totalPage:e.data.totalPage}),b(e.data.dataList))}))},R=function(e){return i&&i.some((function(t){return t===e.id}))},H={selectedRowKeys:l,onSelectAll:function(e,t,n){var a=n.map((function(e){return e&&e.id})).filter((function(e){return void 0!==e}));if(e){var r=Array.from(new Set([].concat(j(a),j(l))));o(r)}else{var i=l.filter((function(e){return!a.includes(e)}));o(i)}},onSelect:function(e){return L(e)},getCheckboxProps:function(e){return{disabled:R(e)}}},L=function(e){R(e)||(l.indexOf(e.id)>=0?l.splice(l.indexOf(e.id),1):l.push(e.id),o(j(l)))},z=[{title:"账号",dataIndex:"nickname",key:"nickname",width:"30%",ellipsis:!0,render:function(e,t){return s.a.createElement(c.default,null,s.a.createElement(p.a,{userInfo:t}),e)}},{title:"手机号",dataIndex:"phone",key:"phone",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"邮箱",dataIndex:"email",key:"email",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"用户目录",dataIndex:"dirId",key:"dirId",width:"15%",ellipsis:!0,render:function(e){var t=D.findIndex((function(t){return t.id===e}));return t>-1?D[t].name:"--"}}];return s.a.createElement(E.a,{title:"选择用户",visible:t,onCancel:a,onOk:n,width:800,destroyOnClose:!0},s.a.createElement("div",{style:{padding:"15px"}},s.a.createElement(g.default,{placeholder:"搜索账号、手机号、邮箱",style:{width:240},onPressEnter:function(e){return function(e){var t=k(k({},_),{},{nickname:e.target.value,pageParam:y});Y(t)}(e)},prefix:s.a.createElement(O.default,{style:{fontSize:"var(--tiklab-icon-size-16)"}})}),s.a.createElement("div",{style:{width:"100%"}},s.a.createElement(r.default,{columns:z,dataSource:v,rowSelection:H,onRow:function(e){return{onClick:function(){return L(e)}}},rowKey:function(e){return e.id},pagination:!1}),s.a.createElement(w,{currentPage:N,changPage:function(e){S(e);var t=k(k({},_),{},{pageParam:{pageSize:6,currentPage:e}});Y(t)},page:x}))))};function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i,l,c=[],o=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var D=function(e){var t=e.visible,n=e.setVisible,a=e.authUser,r=e.findProductAuthUserAll,i=Y(Object(u.useState)([]),2),l=i[0],c=i[1],o=Y(Object(u.useState)([]),2),f=o[0],d=o[1];Object(u.useEffect)((function(){t&&(d(a&&a.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))),c(a&&a.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))))}),[t]);var p=function(){n(!1),c([]),d([])};return s.a.createElement(_,{visible:t,allSelectIds:f,selectedRowKeys:l,setSelectedRowKeys:c,handleOk:function(){var e=l.filter((function(e){return!f.includes(e)})),t=e&&e.map((function(e){return m.Axios.post("/appAuthorization/createProductAuthUser",{user:{id:e}})}));Promise.all(t).then((function(e){r(),p()}))},handleCancel:p})},U=n(395),M=n.n(U);n(692);function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i,l,c=[],o=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw r}}return c}}(e,t)||z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var K=function(e){var t=e.bgroup,n=void 0===t?"eas":t,v=e.children,g=L(Object(u.useState)(null),2),O=g[0],N=g[1],w=L(Object(u.useState)(null),2),S=w[0],j=w[1],A=L(Object(u.useState)([]),2),k=A[0],x=A[1],P=L(Object(u.useState)({}),2),I=P[0],C=P[1],_=L(Object(u.useState)([]),2),Y=_[0],T=_[1],U=L(Object(u.useState)(!1),2),z=U[0],F=U[1],K=L(Object(u.useState)(!1),2),V=K[0],J=K[1],$=L(Object(u.useState)(!1),2),B=$[0],G=$[1],q=L(Object(u.useState)(!1),2),Q=q[0],W=(q[1],L(Object(u.useState)("authUser"),2)),X=W[0],Z=W[1],ee=window.location.origin;Object(u.useEffect)((function(){te(),ne()}),[]);var te=function(){m.Axios.post("/version/getVersion").then((function(e){0===e.code&&(C(e.data),localStorage.setItem(m.LOCALSTORAGE_KEY.VERSION_INFO,JSON.stringify(e.data)),e.data.expired||(ae(),re()))}))},ne=function(){m.Axios.post("/appAuthorization/findAllProductAuth").then((function(e){0===e.code&&T(e.data)}))},ae=function(){m.Axios.post("/licence/findUseLicence").then((function(e){0===e.code&&e.data&&j(e.data),6e3===e.code&&o.default.error(e.msg)}))},re=function(){m.Axios.post("/licence/findAllLicence").then((function(e){0===e.code&&N(e.data)}))},ie={name:"file",action:ee+("/"===ee.substring(ee.length-1,ee.length)?"licence/import":"/licence/import"),onChange:function(e){var t=H(e.fileList);if(t=(t=t.slice(-1)).map((function(e){return e.response&&(e.url=e.response.url),e})),x(t),"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status){var n=e.file;return 0===n.response.code?(setTimeout((function(){x([]),te(),ne()}),1e3),o.default.success("licence导入成功")):o.default.error("licence导入失败：".concat(n.response.msg))}if("error"===e.file.status)return o.default.error("licence导入失败，请重新上传")}},le=function(){var e=1===I.release?"ce":"ee";window.open("http:///tiklab.net/download/product/productDetail?code=".concat(n,"&type=").concat(e))},ce=function(){window.open("http://tiklab.net/info/gatherInfo?code=".concat(n))},oe=function(){window.open("http://tiklab.net/account/subscribe")},ue=function(){return I.expired?null!=S&&S.tryApply?s.a.createElement("span",{className:"state-red"},"试用已过期"):s.a.createElement("span",{className:"state-red"},"订阅已过期"):null!=S&&S.tryApply?s.a.createElement("span",{className:"state-blue"},"试用中"):s.a.createElement("span",{className:"state-blue"},"订阅中")},se=[{title:"昵称",dataIndex:["user","nickname"],key:["user","nickname"],width:"30%",ellipsis:!0,render:function(e,t){return s.a.createElement(c.default,null,s.a.createElement(p.a,{userInfo:t})," ",e)}},{title:"过期时间",dataIndex:"expiresTime",key:"expiresTime",width:"30%",ellipsis:!0,render:function(e){return e?M()(e).format("YYYY-MM-DD HH:mm:ss"):"不限"}},{title:"状态",dataIndex:"state",key:"state",width:"25%",ellipsis:!0,render:function(e){return 1===e?s.a.createElement("span",{style:{color:"var(--tiklab-blue)"}},"已激活"):s.a.createElement("span",{style:{color:"#ff0000"}},"未激活")}},{title:"操作",render:function(e,t){if(1===t.type)return null;var n=t.id,a=t.user;return s.a.createElement(s.a.Fragment,null,2===t.state&&s.a.createElement(f.PrivilegeButton,{code:"version_open"},s.a.createElement("span",{className:"tailab_productauth-action",onClick:function(){return e=a.id,void m.Axios.post("/appAuthorization/createProductAuthUser",{user:{id:e}}).then((function(e){0===e.code?ne():o.default.info("失败")}));var e}},"激活")),s.a.createElement(f.PrivilegeButton,{code:"version_delete"},s.a.createElement(l.default,{placement:"topRight",title:"你确定移除吗",onConfirm:function(){return a.id,e=n,(t=new FormData).append("id",e),void m.Axios.post("/appAuthorization/deleteProductAuthUser",t).then((function(e){0===e.code?ne():o.default.error(e.msg)}));var e,t},okText:"确定",cancelText:"取消"},s.a.createElement("span",{className:"tailab_productauth-action"},"移除"))))}}];return s.a.createElement(a.a,{spinning:Q,tip:"导入licence中..."},s.a.createElement("div",{className:"tailab_version"},s.a.createElement("div",{className:"tailab_version_container"},s.a.createElement(b,{firstItem:"版本与许可证"},s.a.createElement("div",{className:"tailab_version_up_btn"},2===(null==I?void 0:I.release)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,R({},ie,{fileList:k}),s.a.createElement(y.a,{isMar:!I.expired},"导入licence")),!I.expired&&s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{onClick:function(){return G(!0)}},"历史"),s.a.createElement(E.a,{visible:B,footer:null,onCancel:function(){return G(!1)},destroyOnClose:!0,width:800,title:s.a.createElement("div",{className:"info-item-title-te-modal-title"},s.a.createElement("div",null,"更多详情"),s.a.createElement("div",{onClick:function(){return G(!1)}},s.a.createElement(d.default,null)))},s.a.createElement("div",{className:"info-item-title-te-modal-info info-item-title-te-modal"},s.a.createElement("div",{className:"te-modal-info-item"},s.a.createElement("div",null,"生效时间"),s.a.createElement("div",null,"过期时间"),s.a.createElement("div",null,"用户数"),s.a.createElement("div",null,"状态")),O&&O.length>0?O.map((function(e,t){return s.a.createElement("div",{key:t,className:"te-modal-info-item"},s.a.createElement("div",null,M()(e.expiryTime).format("YYYY-MM-DD HH:mm:ss")),s.a.createElement("div",null,M()(e.issuedTime).format("YYYY-MM-DD HH:mm:ss")),s.a.createElement("div",null,e.userNum>0?e.userNum:"无限制"),s.a.createElement("div",null,1===e.state&&"已失效",2===e.state&&s.a.createElement("span",{className:"te-modal-info-item-blue"},"生效中"),3===e.state&&"未生效"))})):s.a.createElement("div",{className:"te-modal-info-item-empty"},"暂无历史"))))))),s.a.createElement("div",{className:"tailab_version_up"},s.a.createElement("div",{className:"tailab_version_tabs"},s.a.createElement("div",{className:"".concat("version"===X?"tabs-active":""),onClick:function(){return Z("version")}},"版本信息"),s.a.createElement("div",{className:"".concat("authUser"===X?"tabs-active":""),onClick:function(){return Z("authUser")}},"授权人员")),"authUser"===X&&s.a.createElement("div",null,s.a.createElement(y.a,{title:"添加用户",type:"primary",onClick:function(){return F(!0)}}),s.a.createElement(D,{visible:z,setVisible:F,authUser:Y,findProductAuthUserAll:ne}))),"version"===X?s.a.createElement("div",{className:"tailab_version-info"},s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"应用名称："),h.b[n]),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"版本类型："),1===(null==I?void 0:I.release)?"社区版":"企业版","（",s.a.createElement("span",{className:"info-item-title-te",onClick:function(){return J(!0)}},"企业版特性"),"）",s.a.createElement(E.a,{visible:V,footer:null,onCancel:function(){return J(!1)},destroyOnClose:!0,width:800,title:s.a.createElement("div",{className:"info-item-title-te-modal-title"},s.a.createElement("div",null,"企业版特性"),s.a.createElement("div",{onClick:function(){return J(!1)}},s.a.createElement(d.default,null)))},s.a.createElement("div",{className:"info-item-title-te-modal"},v))),1===I.release?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"用户数："),"无限制"),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"升级企业版："),s.a.createElement("span",{className:"info-item-title-te",onClick:le},"升级"))):I.expired?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"用户数："),"无限制"),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"状态："),"未订阅 （",s.a.createElement("span",{className:"info-item-title-te info-item-title-try",onClick:ce},"免费试用"),s.a.createElement("span",{className:"info-item-title-te",onClick:oe},"订阅"),"）")):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"状态："),ue()),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"用户数："),(null==S?void 0:S.userNum)>0?S.userNum+"人":"无限制")),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"生效时间："),null!=S&&S.expiryTime?M()(null==S?void 0:S.expiryTime).format("YYYY-MM-DD HH:mm:ss"):"--"),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"过期时间："),null!=S&&S.issuedTime?M()(null==S?void 0:S.issuedTime).format("YYYY-MM-DD HH:mm:ss"):"--"),s.a.createElement("div",{className:"tailab_version-info-item"},s.a.createElement("span",{className:"info-item-title"},"授权人数："),s.a.createElement("span",{onClick:function(){return Z("authUser")},className:"info-item-title-te"},Y.length||0))):s.a.createElement("div",{className:"tailab_productauth"},s.a.createElement(r.default,{dataSource:Y,columns:se,pagination:!1,rowKey:function(e){return e.id}})))))};t.a=K},692:function(e,t,n){}}]);