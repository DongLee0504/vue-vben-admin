import{a as p,B as d}from"./index-bb85fcdb.js";import{d as c,a7 as u,Z as _,a8 as m,a9 as t,l as s,u as e,E as r}from"./vue-d56f5f31.js";const g=c({__name:"Modal2",setup(f){const[n,{closeModal:l,setModalProps:i}]=p();return(M,o)=>{const a=u("a-button");return _(),m(e(d),{onRegister:e(n),title:"Modal Title",helpMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:t(()=>[s(a,{type:"primary",onClick:e(l),class:"mr-2"},{default:t(()=>[r(" 从内部关闭弹窗 ")]),_:1},8,["onClick"]),s(a,{type:"primary",onClick:o[0]||(o[0]=k=>e(i)({title:"Modal New Title"}))},{default:t(()=>[r(" 从内部修改title ")]),_:1})]),_:1},8,["onRegister"])}}});export{g as _};
