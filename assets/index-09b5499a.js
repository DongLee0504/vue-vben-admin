var _=Object.defineProperty;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))B.call(a,t)&&y(e,t,a[t]);if(m)for(var t of m(a))E.call(a,t)&&y(e,t,a[t]);return e};import{z as g,T as F,w as k}from"./entry/index-0aad84ba-1704197984296.js";import{a9 as z}from"./antd-090f1744.js";import{d as $,f as S,c as D,u as I,h as M,w as P,o as Z,Z as j,_ as q,a0 as A,af as G}from"./vue-d56f5f31.js";const H=$({name:"CountTo",__name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(e){return e>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(e,{expose:a,emit:t}){const n=e,r=S(n.startVal),h=S(!1);let u=g(r);const V=D(()=>N(I(u)));M(()=>{r.value=n.startVal}),P([()=>n.startVal,()=>n.endVal],()=>{n.autoplay&&d()}),Z(()=>{n.autoplay&&d()});function d(){f(),r.value=n.endVal}function b(){r.value=n.startVal,f()}function f(){u=g(r,x({disabled:h,duration:n.duration,onFinished:()=>t("onFinished"),onStarted:()=>t("onStarted")},n.useEasing?{transition:F[n.transition]}:{}))}function N(o){if(!o&&o!==0)return"";const{decimals:c,decimal:v,separator:i,suffix:w,prefix:T}=n;o=Number(o).toFixed(c),o+="";const l=o.split(".");let s=l[0];const C=l.length>1?v+l[1]:"",p=/(\d+)(\d{3})/;if(i&&!z(i))for(;p.test(s);)s=s.replace(p,"$1"+i+"$2");return T+s+C+w}return a({reset:b}),(o,c)=>(j(),q("span",{style:G({color:e.color})},A(V.value),5))}}),Q=k(H);export{Q as C};
