import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-6223c772.js";import{_ as l}from"./TableImg.vue_vue_type_style_index_0_lang-76d5f007.js";import"./componentMap-89047599.js";import{u as h}from"./useTable-c58f3e65.js";import{d as k}from"./table-853c8ac5.js";import{O as n,a0 as y}from"./antd-090f1744.js";import{d as f,l as p,E as s,m as x,Z as e,_ as g,a9 as o,F as I,a0 as m,a8 as i,u as t,ab as v}from"./vue-d56f5f31.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ad13508d.js";import"./FormItem.vue_vue_type_script_lang-04cbdf54.js";import"./entry/index-0aad84ba-1704197984296.js";import"./helper-ccaa9baf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3094acb3.js";import"./index-bb85fcdb.js";import"./useWindowSizeFn-3229f07e.js";import"./useForm-98c946ee.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b02fcd2d.js";import"./useFormItem-8d47235f.js";import"./onMountedOrActivated-60a5193f.js";import"./useSortable-0d7a8331.js";import"./download-414b45a8.js";import"./base64Conver-39fc0d26.js";import"./index-4881972e.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-7def83b8.js";import"./copyTextToClipboard-0869443b.js";import"./index-63682c98.js";import"./index-112331d5.js";const w={class:"p-4"},te=f({__name:"CustomerCell",setup(b){const u=[{title:"ID",dataIndex:"id",helpMessage:p("div",null,[s("这个是tsx渲染出来的helpMessage")])},{title:"头像",dataIndex:"avatar",width:100,helpMessage:x("div","这是vue h函数渲染出来的helpMessage")},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"姓名",dataIndex:"name",width:120},{title:"图片列表1",dataIndex:"imgArr",helpMessage:["这是简单模式的图片列表","只会显示一张在表格中","但点击可预览多张图片"],width:140},{title:"照片列表2",dataIndex:"imgs",width:160},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no"},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}],[c]=h({title:"自定义列内容",titleHelpMessage:"表格中所有头像、图片均为mock生成，仅用于演示图片占位",api:k,columns:u,bordered:!0,showTableSetting:!0});return(T,A)=>(e(),g("div",w,[p(t(_),{onRegister:t(c)},{bodyCell:o(({column:a,record:r,text:d})=>[a.key==="id"?(e(),g(I,{key:0},[s(" ID: "+m(r.id),1)],64)):a.key==="no"?(e(),i(t(n),{key:1,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):a.key==="avatar"?(e(),i(t(y),{key:2,size:60,src:r.avatar},null,8,["src"])):a.key==="imgArr"?(e(),i(t(l),{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):a.key==="imgs"?(e(),i(t(l),{key:4,size:60,imgList:d},null,8,["imgList"])):a.key==="category"?(e(),i(t(n),{key:5,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):v("",!0)]),_:1},8,["onRegister"])]))}});export{te as default};
