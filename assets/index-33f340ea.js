import{A as g,g as k}from"./date-62ac0f56.js";import{d as q,r as $,a as x,b as f,c as _,e as v,g as s,k as S,v as D,f as d,w as c,h,t as i,F as T,i as A,j as y,u as p,_ as C,o as F}from"./index-b7a3b536.js";const M=q("NewsStore",()=>({loading:$(!1)})),E=M(),R=async l=>{let n=[];try{const o=l.map(e=>fetch(`${g}/item/${e}.json?print=pretty`));n=(await Promise.all((await Promise.all(o)).map(e=>e.json()))).map(e=>({id:e.id,date:k(e.time),text:e.text,autor:e.by,childIds:e.kids,childs:[]}))}catch(o){console.error("Error:",o)}return n},H=async l=>{let n=null;try{E.loading=!0;const t=await(await fetch(`${g}/item/${l}.json`)).json(),e=await R(t.kids);n={id:t.id,title:t.title,link:t.url,date:k(t.time),autor:t.by,comments:e}}catch(o){console.error("Error:",o)}finally{E.loading=!1}return n},U=async l=>{let n=[];try{const o=l.map(e=>fetch(`${g}/item/${e}.json?print=pretty`));n=(await Promise.all((await Promise.all(o)).map(e=>e.json()))).map(e=>({id:e.id,date:k(e.time),text:e.text,autor:e.by,childIds:e.kids,childs:[]}))}catch(o){console.error("Error:",o)}return n},z={class:"comment"},G={class:"comment__wrapper"},J={class:"comment__header"},K=["innerHTML"],O={class:"comment__footer"},Q={class:"comment__childs"},W=x({__name:"index",props:{comment:{},childs:{}},setup(l){const n=$(!1),o=l,t=async e=>{n.value||(o.comment.childs=await U(e)),n.value=!n.value};return(e,a)=>{var u;const w=f("Button");return _(),v("section",z,[s("div",G,[s("div",J,[s("span",{class:"comment__title",innerHTML:e.comment.text},null,8,K),S(d(w,{onClick:a[0]||(a[0]=m=>t(e.comment.childIds))},{default:c(()=>[h(i(n.value?"close":"open"),1)]),_:1},512),[[D,(u=e.comment.childIds)==null?void 0:u.length]])]),s("div",O,[s("div",null,i(e.comment.date),1),s("span",null,i(e.comment.autor),1)])]),S(s("div",Q,[(_(!0),v(T,null,A(e.comment.childs,m=>(_(),y(p(V),{key:m.id,comment:m},null,8,["comment"]))),128))],512),[[D,n.value]])])}}});const V=C(W,[["__scopeId","data-v-78a06373"]]),X={key:0},Y={class:"news"},Z={class:"news__item"},ee={class:"news__text"},te={class:"news__item"},se={class:"news__text"},ne={class:"news__item"},oe=["href"],ae={class:"news__item"},le={class:"news__text"},ie=x({__name:"index",props:{id:{}},setup(l){const n=M(),o=l,t=$(null);return F(async()=>{t.value=await H(o.id)}),(e,a)=>{var b,B,I,N,j,L;const w=f("Button"),u=f("Header"),m=f("Loader");return t.value?(_(),v("section",X,[d(u,null,{title:c(()=>{var r;return[s("span",null,i((r=t.value)==null?void 0:r.title),1)]}),actions:c(()=>[d(w,{href:"/"},{default:c(()=>a[1]||(a[1]=[h("back")])),_:1})]),_:1}),s("div",Y,[s("div",Z,[a[2]||(a[2]=s("span",{class:"news__title"},"Date:",-1)),s("span",ee,i((b=t.value)==null?void 0:b.date),1)]),s("div",te,[a[3]||(a[3]=s("span",{class:"news__title"},"Title:",-1)),s("span",se,i((B=t.value)==null?void 0:B.title),1)]),s("div",ne,[a[4]||(a[4]=s("span",{class:"news__title"},"Link:",-1)),s("a",{href:(I=t.value)==null?void 0:I.link,target:"_blank"},i((N=t.value)==null?void 0:N.link),9,oe)]),s("div",ae,[a[5]||(a[5]=s("span",{class:"news__title"},"Autor:",-1)),s("span",le,i((j=t.value)==null?void 0:j.autor),1)])]),d(u,null,{title:c(()=>{var r;return[s("span",null,"Comments list ("+i((r=t.value)==null?void 0:r.comments.length)+"):",1)]}),actions:c(()=>[d(w,{color:"blue",onClick:a[0]||(a[0]=r=>{var P;return p(H)((P=t.value)==null?void 0:P.id)})},{default:c(()=>[h(i(p(n).loading?"update...":"update comments"),1)]),_:1})]),_:1}),(_(!0),v(T,null,A((L=t.value)==null?void 0:L.comments,r=>(_(),y(p(V),{key:r.id,comment:r},null,8,["comment"]))),128))])):(_(),y(m,{key:1}))}}});const re=C(ie,[["__scopeId","data-v-906efaf7"]]),_e=x({__name:"index",setup(l){return(n,o)=>(_(),v("section",null,[d(p(re),{id:Number(n.$route.params.id)},null,8,["id"])]))}});const ue=C(_e,[["__scopeId","data-v-d9bf5e8e"]]);export{ue as default};