import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-6223c772.js";import"./TableImg.vue_vue_type_style_index_0_lang-76d5f007.js";import"./componentMap-89047599.js";import{getBasicData as h,getBasicColumns as k}from"./tableData-6494580b.js";import{d as B,f as t,a7 as S,Z as z,_ as x,l as e,a9 as o,E as l,a0 as s,u as m}from"./vue-d56f5f31.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ad13508d.js";import"./FormItem.vue_vue_type_script_lang-04cbdf54.js";import"./entry/index-0aad84ba-1704197984296.js";import"./antd-090f1744.js";import"./helper-ccaa9baf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3094acb3.js";import"./index-bb85fcdb.js";import"./useWindowSizeFn-3229f07e.js";import"./useForm-98c946ee.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b02fcd2d.js";import"./useFormItem-8d47235f.js";import"./onMountedOrActivated-60a5193f.js";import"./useSortable-0d7a8331.js";import"./download-414b45a8.js";import"./base64Conver-39fc0d26.js";import"./index-4881972e.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-7def83b8.js";import"./copyTextToClipboard-0869443b.js";import"./index-63682c98.js";import"./index-112331d5.js";import"./select-c2192ffb.js";const R={class:"p-4"},it=B({__name:"Basic",setup(T){const a=t(!1),p=t(!1),i=t(!0),r=t(!0),u=t(!1),c=k(),d=h();function g(){a.value=!a.value}function f(){i.value=!i.value}function _(){p.value=!0,setTimeout(()=>{p.value=!1,u.value={pageSize:20}},3e3)}function v(){r.value=!r.value}function C(y){}return(y,w)=>{const n=S("a-button");return z(),x("div",R,[e(m(b),{title:"基础示例",titleHelpMessage:"温馨提醒",columns:m(c),dataSource:m(d),canResize:a.value,loading:p.value,striped:i.value,bordered:r.value,showTableSetting:"",pagination:u.value,onColumnsChange:C},{toolbar:o(()=>[e(n,{type:"primary",onClick:g},{default:o(()=>[l(s(a.value?"取消自适应":"自适应高度"),1)]),_:1}),e(n,{type:"primary",onClick:v},{default:o(()=>[l(s(r.value?"隐藏边框":"显示边框"),1)]),_:1}),e(n,{type:"primary",onClick:_},{default:o(()=>[l(" 开启loading ")]),_:1}),e(n,{type:"primary",onClick:f},{default:o(()=>[l(s(i.value?"隐藏斑马纹":"显示斑马纹"),1)]),_:1})]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}}});export{it as default};
