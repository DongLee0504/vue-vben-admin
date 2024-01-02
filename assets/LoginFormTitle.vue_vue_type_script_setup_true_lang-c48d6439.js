var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,s,o)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,f=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&h(e,o,s[o]);if(y)for(var o of y(s))w.call(s,o)&&h(e,o,s[o]);return e};var R=(e,s,o)=>new Promise((t,r)=>{var u=l=>{try{d(o.next(l))}catch(n){r(n)}},F=l=>{try{d(o.throw(l))}catch(n){r(n)}},d=l=>l.done?t(l.value):Promise.resolve(l.value).then(u,F);d((o=o.apply(e,s)).next())});import{h as v}from"./entry/index-0aad84ba-1704197984296.js";import{f as S,c,u as i,d as b,Z as x,_ as E,a0 as B}from"./vue-d56f5f31.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const p=S(0);function G(){function e(t){p.value=t}const s=c(()=>p.value);function o(){e(0)}return{setLoginState:e,getLoginState:s,handleBackLogin:o}}function M(e){const s=c(()=>{var r;const t=i(e);return(r=t==null?void 0:t.validate)!=null?r:u=>Promise.resolve()});function o(){return R(this,null,function*(){const t=i(e);return t?yield t.validate():void 0})}return{validate:s,validForm:o}}function k(e){const{t:s}=v(),o=c(()=>_(s("sys.login.accountPlaceholder"))),t=c(()=>_(s("sys.login.passwordPlaceholder"))),r=c(()=>_(s("sys.login.smsPlaceholder"))),u=c(()=>_(s("sys.login.mobilePlaceholder"))),F=(n,m)=>R(this,null,function*(){return m?Promise.resolve():Promise.reject(s("sys.login.policyPlaceholder"))}),d=n=>(m,g)=>R(this,null,function*(){return g?g!==n?Promise.reject(s("sys.login.diffPwd")):Promise.resolve():Promise.reject(s("sys.login.passwordPlaceholder"))});return{getFormRules:c(()=>{const n=i(o),m=i(t),g=i(r),O=i(u),P={sms:g,mobile:O};switch(i(p)){case 1:return f({account:n,password:m,confirmPassword:[{validator:d(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:F,trigger:"change"}]},P);case 2:return f({account:n},P);case 3:return P;default:return{account:n,password:m}}})}}function _(e){return[{required:!0,message:e,trigger:"change"}]}const j={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},D=b({__name:"LoginFormTitle",setup(e){const{t:s}=v(),{getLoginState:o}=G(),t=c(()=>({[a.RESET_PASSWORD]:s("sys.login.forgetFormTitle"),[a.LOGIN]:s("sys.login.signInFormTitle"),[a.REGISTER]:s("sys.login.signUpFormTitle"),[a.MOBILE]:s("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:s("sys.login.qrSignInFormTitle")})[i(o)]);return(r,u)=>(x(),E("h2",j,B(t.value),1))}});export{a as L,D as _,k as a,M as b,G as u};
