import{d as C,a1 as N,a0 as E,c as m,U as B,Z as I,_ as $,S as e,l as t,E as n,$ as i,u as c}from"./vue-3a608123.js";import{X as A,Y as R,B as S,Z as F,$ as T,s as V,d as X,a5 as w}from"./ant-56e13b24.js";const G=i("a",null,"421421",-1),M={style:{height:"300px"}},U=i("p",null,"路由参数联动 分页器 组件",-1),O=C({__name:"dynamic-match",setup(Z){const l=N(),u=E(),a=m(()=>Number.parseInt(l.params.id,10)),d=m(()=>{const o=a.value*20;return o>=Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:o}),f=()=>{u.push({name:"dynamic-match",params:{id:a.value+1}})},h=()=>{u.push({name:"dynamic-match",params:{id:a.value>1?a.value-1:1}})},g=o=>{u.push({name:"dynamic-match",params:{id:o}})};return(o,z)=>{const s=A,y=R,_=S,v=F,p=T,r=V,b=X,x=w,k=B("page-container");return I(),$(k,{title:`${c(l).meta.title} ${c(l).params.id}`},{content:e(()=>[t(y,{size:"small",column:2},{default:e(()=>[t(s,{label:"创建人"},{default:e(()=>[n(" 张三 ")]),_:1}),t(s,{label:"联系方式"},{default:e(()=>[G]),_:1}),t(s,{label:"创建时间"},{default:e(()=>[n(" 2017-01-10 ")]),_:1}),t(s,{label:"更新时间"},{default:e(()=>[n(" 2017-10-10 ")]),_:1}),t(s,{label:"备注"},{default:e(()=>[n(" 中国浙江省杭州市西湖区古翠路 ")]),_:1})]),_:1})]),extra:e(()=>[t(_,{key:"3"},{default:e(()=>[n(" 操作 ")]),_:1}),t(_,{key:"2"},{default:e(()=>[n(" 操作 ")]),_:1}),t(_,{key:"1",type:"primary"},{default:e(()=>[n(" 主操作 ")]),_:1})]),extraContent:e(()=>[t(r,null,{default:e(()=>[t(p,{title:"Feedback",value:1128},{prefix:e(()=>[t(v)]),_:1}),t(p,{title:"Unmerged",value:93,suffix:"/ 100"})]),_:1})]),default:e(()=>[i("div",M,[U,t(r,null,{default:e(()=>[t(_,{type:"dashed",onClick:h},{default:e(()=>[n(" 跳转上一页 ")]),_:1}),t(_,{type:"dashed",onClick:f},{default:e(()=>[n(" 跳转下一页 ")]),_:1})]),_:1}),t(b),t(x,{current:c(a),total:c(d),"show-less-items":"",onChange:g},null,8,["current","total"])])]),_:1},8,["title"])}}});export{O as default};
