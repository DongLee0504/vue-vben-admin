var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&i(e,t,o[t]);if(a)for(var t of a(o))v.call(o,t)&&i(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import N from"./FormNodeOperate-585ef256.js";import{u as S}from"./useFormDesignState-0e07fca3.js";import k from"./index-fac06188.js";import{d as b,r as y,G as V,a7 as c,Z as $,_ as O,$ as f,l,a0 as _,a1 as B,A as D}from"./vue-d56f5f31.js";import{c as w}from"./entry/index-0aad84ba-1704197984296.js";import"./index-e9d0e7df.js";import"./antd-090f1744.js";import"./formItemConfig-101e0b53.js";import"./componentMap-89047599.js";import"./useFormItem-8d47235f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b02fcd2d.js";import"./index-bb85fcdb.js";import"./useWindowSizeFn-3229f07e.js";import"./uuid-31b8b5a4.js";import"./useSortable-0d7a8331.js";import"./download-414b45a8.js";import"./base64Conver-39fc0d26.js";import"./index-4881972e.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-7def83b8.js";import"./copyTextToClipboard-0869443b.js";import"./index-63682c98.js";import"./index-112331d5.js";const M=b({name:"FormNode",components:{VFormItem:k,FormNodeOperate:N},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=S(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(n({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,A){var s;const d=c("VFormItem"),h=c("FormNodeOperate");return $(),O("div",{class:B(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[l(d,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,_(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),l(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const ie=w(M,[["render",z]]);export{ie as default};
