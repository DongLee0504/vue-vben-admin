var d=(f,m,o)=>new Promise((u,n)=>{var l=e=>{try{a(o.next(e))}catch(_){n(_)}},p=e=>{try{a(o.throw(e))}catch(_){n(_)}},a=e=>e.done?u(e.value):Promise.resolve(e.value).then(l,p);a((o=o.apply(f,m)).next())});import{_ as b}from"./BasicForm.vue_vue_type_script_setup_true_lang-ad13508d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3094acb3.js";import"./componentMap-89047599.js";import{u as x}from"./useForm-98c946ee.js";import{step2Schemas as h}from"./data-fc21c644.js";import{d as g,Z as v,_ as B,l as s,u as t,a9 as i,E as c}from"./vue-d56f5f31.js";import{ar as F,ab as r,a3 as O}from"./antd-090f1744.js";const w={class:"w-120 m-auto"},E=g({__name:"Step2",emits:["next","prev"],setup(f,{emit:m}){const[o,{validate:u,setProps:n}]=x({labelWidth:80,schemas:h,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:l,submitFunc:p});function l(){return d(this,null,function*(){m("prev")})}function p(){return d(this,null,function*(){try{const a=yield u();n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),m("next",a)},1500)}catch(a){}})}return(a,e)=>(v(),B("div",w,[s(t(F),{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),s(t(r),{column:1,class:"mt-5"},{default:i(()=>[s(t(r).Item,{label:"付款账户"},{default:i(()=>[c(" ant-design@alipay.com ")]),_:1}),s(t(r).Item,{label:"收款账户"},{default:i(()=>[c(" test@example.com ")]),_:1}),s(t(r).Item,{label:"收款人姓名"},{default:i(()=>[c(" Vben ")]),_:1}),s(t(r).Item,{label:"转账金额"},{default:i(()=>[c(" 500元 ")]),_:1})]),_:1}),s(t(O)),s(t(b),{onRegister:t(o)},null,8,["onRegister"])]))}});export{E as _};
