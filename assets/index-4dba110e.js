import{E,F as V,G as z,m as R,H as D,I as G,J as H,K as J,L as K,N as M,O,B as Q,s as T}from"./ant-27a745bc.js";import{d as k,c as Z,Z as l,a3 as i,$ as s,l as e,S as o,F as j,a4 as W,u as f,a2 as S,f as L,a0 as X,ae as Y,r as ee,E as v,a5 as F,a6 as B}from"./vue-86083649.js";import{_ as $,u as se}from"./index-baaa604f.js";const I="/vue-simple-admin-starter/assets/login-banner-426fb77f.png",oe={class:"banner"},ne={class:"banner-inner"},te={class:"custom-slick-arrow",style:{left:"10px"}},ae={class:"custom-slick-arrow",style:{right:"10px"}},ce={class:"carousel-title"},_e={class:"carousel-sub-title"},re=["src"],le=k({__name:"banner",setup(n){const a=Z(()=>[{slogan:"开箱即用的模板",subSlogan:"丰富的的页面模板，覆盖大多数典型业务场景",image:I},{slogan:"内置了常见问题的解决方案",subSlogan:"路由配置，状态管理应有尽有",image:I}]);return(d,m)=>{const r=V,h=z,_=E;return l(),i("div",oe,[s("div",ne,[e(_,{class:"carousel","animation-name":"fade",arrows:"",autoplay:""},{prevArrow:o(()=>[s("div",te,[e(r)])]),nextArrow:o(()=>[s("div",ae,[e(h)])]),default:o(()=>[(l(!0),i(j,null,W(f(a),t=>(l(),i("div",{key:t.slogan},[(l(),i("div",{key:t.slogan,class:"carousel-item",style:{height:"100vh"}},[s("div",ce,S(t.slogan),1),s("div",_e,S(t.subSlogan),1),s("img",{class:"carousel-image",src:t.image},null,8,re)]))]))),128))]),_:1})])])}}});const ie=$(le,[["__scopeId","data-v-ec77220e"]]);function de(n=!1){const a=L(n);return{loading:a,setLoading:r=>{a.value=r},toggle:()=>{a.value=!a.value}}}const A=n=>(F("data-v-3219dcfa"),n=n(),B(),n),ue={class:"login-form-wrapper"},me=A(()=>s("div",{class:"login-form-title"}," 登录 Simple Admin ",-1)),pe=A(()=>s("div",{class:"login-form-sub-title"}," 登录 Simple Admin ",-1)),ge={class:"login-form-error-msg"},ve={class:"login-form-password-actions"},fe=k({__name:"login-form",setup(n){const a=X(),d=L(""),{loading:m,setLoading:r}=de(),h=se(),_=Y("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),t=ee({username:_.value.username,password:_.value.password}),q=async b=>{if(!m.value){r(!0);try{await h.login(b);const{redirect:c,...y}=a.currentRoute.value.query;a.push({name:c||"welcome",query:{...y}}),R.success("欢迎使用");const{rememberPassword:p}=_.value,{username:g,password:w}=b;_.value.username=p?g:"",_.value.password=p?w:""}catch(c){d.value=c.message}finally{r(!1)}}};return(b,c)=>{const y=G,p=H,g=J,w=K,C=M,N=O,x=Q,P=T,U=D;return l(),i("div",ue,[me,pe,s("div",ge,S(d.value),1),e(U,{model:t,name:"login",class:"login-form",autocomplete:"off",onFinish:q},{default:o(()=>[e(g,{name:"username",rules:[{required:!0,message:"用户名不能为空"}],"validate-trigger":["change","blur"],"hide-label":""},{default:o(()=>[e(p,{value:t.username,"onUpdate:value":c[0]||(c[0]=u=>t.username=u),placeholder:"用户名：admin"},{prefix:o(()=>[e(y,{type:"user"})]),_:1},8,["value"])]),_:1}),e(g,{name:"password",rules:[{required:!0,message:"密码不能为空"}],"validate-trigger":["change","blur"],"hide-label":""},{default:o(()=>[e(C,{value:t.password,"onUpdate:value":c[1]||(c[1]=u=>t.password=u),placeholder:"密码：admin","allow-clear":""},{prefix:o(()=>[e(w)]),_:1},8,["value"])]),_:1}),e(P,{size:16,direction:"vertical",style:{width:"100%"}},{default:o(()=>[s("div",ve,[e(N,{checked:f(_).rememberPassword,"onUpdate:checked":c[2]||(c[2]=u=>f(_).rememberPassword=u)},{default:o(()=>[v(" 记住密码 ")]),_:1},8,["checked"]),e(x,{type:"link",size:"small"},{default:o(()=>[v(" 忘记密码 ")]),_:1})]),e(x,{type:"primary",block:"",loading:f(m),"html-type":"submit"},{default:o(()=>[v(" 登录 ")]),_:1},8,["loading"]),e(x,{type:"text",block:"",class:"login-form-register-btn"},{default:o(()=>[v(" 注册 ")]),_:1})]),_:1})]),_:1},8,["model"])])}}});const he=$(fe,[["__scopeId","data-v-3219dcfa"]]),be=n=>(F("data-v-bcd7bd2b"),n=n(),B(),n),ye={class:"container"},we=be(()=>s("div",{class:"logo"},[s("img",{src:"https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg"}),s("div",{class:"logo-text"}," Simple Admin ")],-1)),xe={class:"content"},Se={class:"content-inner"},ke=k({__name:"index",setup(n){return(a,d)=>(l(),i("div",ye,[we,e(ie),s("div",xe,[s("div",Se,[e(he)])])]))}});const Fe=$(ke,[["__scopeId","data-v-bcd7bd2b"]]);export{Fe as default};
