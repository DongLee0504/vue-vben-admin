import{e as d}from"./formItemPropsConfig-a9135b8e.js";import C from"./RuleProps-408949ac.js";import{u as y}from"./useFormDesignState-0e07fca3.js";import{aF as _,A as I,a1 as P,Y as F,aw as b,a2 as h,V as k,ax as v,bl as g}from"./antd-090f1744.js";import{d as w,a7 as m,Z as r,_ as n,a8 as s,a9 as p,F as E,aa as A,ah as S,ac as $,ab as a}from"./vue-d56f5f31.js";import{c as B}from"./entry/index-0aad84ba-1704197984296.js";import"./formItemConfig-101e0b53.js";import"./componentMap-89047599.js";import"./useFormItem-8d47235f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b02fcd2d.js";import"./index-bb85fcdb.js";import"./useWindowSizeFn-3229f07e.js";import"./uuid-31b8b5a4.js";import"./useSortable-0d7a8331.js";import"./download-414b45a8.js";import"./base64Conver-39fc0d26.js";import"./index-4881972e.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-7def83b8.js";import"./copyTextToClipboard-0869443b.js";import"./index-63682c98.js";import"./index-112331d5.js";import"./index-e9d0e7df.js";const D=w({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:I,Form:P,FormItem:F,Switch:b,Checkbox:h,Select:k,Slider:v},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&g(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},V={key:0,class:"properties-body"};function L(o,c,t,N,R,Y){const i=m("Empty"),l=m("FormItem"),u=m("Form");return r(),n("div",U,[o.formConfig.currentItem?(r(),n("div",V,[o.formConfig.currentItem.key?(r(),s(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(r(!0),n(E,null,A(o.baseItemColumnProps,e=>(r(),n("div",{key:e.name},[o.showProps(e.exclude)?(r(),s(l,{key:0,label:e.label},{default:p(()=>[o.formConfig.currentItem.colProps&&e.component?(r(),s(S(e.component),$({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(r(),s(i,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const ao=B(D,[["render",L]]);export{ao as default};
