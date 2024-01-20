import{aw as H,j as e,ac as J,ab as Z,s as A,aJ as Q,ay as O,_ as m,r as b,ad as X,m as Y,ag as D,ah as ee,P as d,c as x,T as p,B as j,D as B,x as L,bD as I,d as h,a6 as se,L as te,G as n,a as u,w as re,C as ae}from"./index-345a54fd.js";import{A as y}from"./ArrowRight-2bc513d7.js";import{P as ie}from"./Plus-2c210ce3.js";import{S as oe}from"./seo-ea61f518.js";import{u as ne}from"./use-page-view-43790c32.js";import{C as V}from"./chart-0794a0c8.js";import{C as g}from"./Card-15cadf45.js";import{C as z}from"./CardActions-381c1336.js";import{n as R}from"./numeral-7a89f655.js";import{C as w}from"./CardHeader-06bf02fa.js";import{T as $,a as S,b as i,c as N}from"./TableRow-8f2ec0b0.js";import{T as U}from"./TableHead-fa724656.js";import{C as E}from"./CardContent-ad559ce1.js";import{a as le}from"./apply-sort-95de74ec.js";const ce=H(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function de(s){return Z("MuiTableSortLabel",s)}const he=J("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),T=he,xe=["active","children","className","direction","hideSortIcon","IconComponent"],pe=s=>{const{classes:t,direction:r,active:a}=s,o={root:["root",a&&"active"],icon:["icon",`iconDirection${O(r)}`]};return ee(o,de,t)},ue=A(Q,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.root,r.active&&t.active]}})(({theme:s})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(s.vars||s).palette.text.secondary},"&:hover":{color:(s.vars||s).palette.text.secondary,[`& .${T.icon}`]:{opacity:.5}},[`&.${T.active}`]:{color:(s.vars||s).palette.text.primary,[`& .${T.icon}`]:{opacity:1,color:(s.vars||s).palette.text.secondary}}})),me=A("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.icon,t[`iconDirection${O(r.direction)}`]]}})(({theme:s,ownerState:t})=>m({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:s.transitions.create(["opacity","transform"],{duration:s.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),je=b.forwardRef(function(t,r){const a=X({props:t,name:"MuiTableSortLabel"}),{active:o=!1,children:c,className:l,direction:C="asc",hideSortIcon:f=!1,IconComponent:M=ce}=a,F=Y(a,xe),k=m({},a,{active:o,direction:C,hideSortIcon:f,IconComponent:M}),P=pe(k);return e.jsxs(ue,m({className:D(P.root,l),component:"span",disableRipple:!0,ownerState:k,ref:r},F,{children:[c,f&&!o?null:e.jsx(me,{as:M,className:D(P.icon),ownerState:k})]}))}),ge=je,fe=()=>{const s=L();return{chart:{background:"transparent",toolbar:{show:!1},zoom:{enabled:!1}},colors:[s.palette.primary.main],dataLabels:{enabled:!1},fill:{gradient:{opacityFrom:.5,opacityTo:0,stops:[0,100]},type:"gradient"},grid:{show:!1,padding:{bottom:0,left:0,right:0,top:0}},stroke:{curve:"smooth",width:3},theme:{mode:s.palette.mode},tooltip:{enabled:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{show:!1}}},v=s=>{const{action:t,chartSeries:r,value:a,title:o}=s,c=fe();return e.jsxs(g,{children:[e.jsxs(x,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{px:3,py:2},children:[e.jsxs("div",{children:[e.jsx(p,{color:"text.secondary",variant:"body2",children:o}),e.jsx(p,{sx:{mt:1},variant:"h5",children:a})]}),e.jsx(j,{sx:{width:200},children:e.jsx(V,{height:100,options:c,series:r,type:"area"})})]}),e.jsx(B,{}),e.jsx(z,{children:t})]})};v.propTypes={action:d.any.isRequired,chartSeries:d.array.isRequired,title:d.string.isRequired,value:d.string.isRequired};var q=function(t){return e.jsxs("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"}),e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15.6V12m0-3.6h.009M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"})]}))},be=function(t){return e.jsxs("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M21 9V3h-6"}),e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 9V3m0 0h-6m6 0-8 8m-3-6H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.2798 3 8.1198 3 9.8v6.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h6.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C19 18.7202 19 17.8802 19 16.2V14"})]}))};const W=s=>{const{pages:t}=s;return e.jsxs(g,{children:[e.jsx(w,{title:"Most Visited Pages",action:e.jsx(I,{title:"Refresh rate is 24h",children:e.jsx(h,{color:"action",children:e.jsx(q,{})})})}),e.jsx(se,{children:e.jsxs($,{sx:{minWidth:600},children:[e.jsx(U,{children:e.jsxs(S,{children:[e.jsx(i,{children:"Page Name"}),e.jsx(i,{children:"Visitors"}),e.jsx(i,{children:"Unique page visits"}),e.jsx(i,{children:"Bounce rate"})]})}),e.jsx(N,{children:t.map(r=>{const a=R(r.visitors).format("0,0"),o=R(r.uniqueVisits).format("0,0");return e.jsxs(S,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{children:e.jsx(te,{color:"text.primary",href:"#",children:e.jsxs(x,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(h,{fontSize:"small",children:e.jsx(be,{})}),e.jsx(p,{variant:"body2",children:r.url})]})})}),e.jsx(i,{children:a}),e.jsx(i,{children:o}),e.jsxs(i,{children:[r.bounceRate,"%"]})]},r.url)})})]})})]})};W.propTypes={pages:d.array.isRequired};const ye=s=>{const t=L();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[t.palette.primary.main,t.palette.warning.main,t.palette.info.main],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},labels:s,legend:{show:!1},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:t.palette.mode},tooltip:{fillSeriesColor:!1}}},G=s=>{const{chartSeries:t,labels:r}=s,a=ye(r);return e.jsxs(g,{children:[e.jsx(w,{title:"Social Media Sources",action:e.jsx(I,{title:"Refresh rate is 24h",children:e.jsx(h,{color:"action",children:e.jsx(q,{})})})}),e.jsxs(E,{children:[e.jsx(V,{height:200,options:a,series:t,type:"donut"}),e.jsx(n,{container:!0,spacing:1,children:t.map((o,c)=>e.jsx(n,{xs:12,sm:6,children:e.jsxs(x,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(j,{sx:{backgroundColor:a.colors[c],borderRadius:"50%",height:8,width:8}}),e.jsx(p,{variant:"subtitle2",children:r[c]})]})},c))})]})]})};G.propTypes={chartSeries:d.any.isRequired,labels:d.array.isRequired};const ve=()=>{const s=L();return{chart:{background:"transparent",stacked:!0,toolbar:{show:!1}},colors:[s.palette.primary.main,s.palette.mode==="dark"?s.palette.primary.darkest:s.palette.primary.light],dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:s.palette.divider,padding:{bottom:0,left:0,right:0,top:0},strokeDashArray:2},plotOptions:{bar:{borderRadius:8,columnWidth:"32px",horizontal:!0}},theme:{mode:s.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:["Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{style:{colors:s.palette.text.secondary}}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}}}},K=s=>{const{chartSeries:t}=s,r=ve();return e.jsxs(g,{children:[e.jsx(w,{sx:{pb:0},title:"Traffic Sources"}),e.jsx(E,{sx:{pt:0},children:e.jsx(V,{height:400,options:r,series:t,type:"bar"})})]})};K.propTypes={chartSeries:d.any.isRequired};const Se={ca:"/assets/flags/flag-ca.svg",de:"/assets/flags/flag-de.svg",es:"/assets/flags/flag-es.svg",ru:"/assets/flags/flag-ru.svg",uk:"/assets/flags/flag-uk.svg",us:"/assets/flags/flag-us.svg"},_=s=>{const{visits:t}=s,[r,a]=b.useState("desc"),o=b.useMemo(()=>le(t,"value",r),[t,r]),c=b.useCallback(()=>{a(l=>l==="asc"?"desc":"asc")},[]);return e.jsxs(g,{children:[e.jsx(w,{title:"Visits by Country",action:e.jsx(I,{title:"Refresh rate is 24h",children:e.jsx(h,{color:"action",children:e.jsx(q,{})})})}),e.jsxs($,{children:[e.jsx(U,{children:e.jsxs(S,{children:[e.jsx(i,{children:"Country"}),e.jsx(i,{sortDirection:r,children:e.jsx(ge,{active:!0,direction:r,onClick:c,children:"Value"})}),e.jsx(i,{children:"SEO"})]})}),e.jsx(N,{children:o.map(l=>{const C=R(l.value).format("0,0"),f=Se[l.id];return e.jsxs(S,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{children:e.jsxs(j,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(j,{sx:{height:16,width:16,"& img":{height:16,width:16}},children:e.jsx("img",{alt:l.name,src:f})}),e.jsx(p,{sx:{ml:1},variant:"subtitle2",children:l.name})]})}),e.jsx(i,{children:C}),e.jsxs(i,{children:[l.seoPercentage,"%"]})]},l.id)})})]}),e.jsx(B,{}),e.jsx(z,{children:e.jsx(u,{color:"inherit",endIcon:e.jsx(h,{children:e.jsx(y,{})}),size:"small",children:"See more"})})]})};_.propTypes={visits:d.array.isRequired};const Be=()=>{const s=re();return ne(),e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"Dashboard: Analytics"}),e.jsx(j,{component:"main",sx:{flexGrow:1,py:8},children:e.jsx(ae,{maxWidth:s.stretch?!1:"xl",children:e.jsxs(n,{container:!0,spacing:{xs:3,lg:4},children:[e.jsx(n,{xs:12,children:e.jsxs(x,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(x,{spacing:1,children:e.jsx(p,{variant:"h4",children:"Analytics"})}),e.jsx(x,{alignItems:"center",direction:"row",spacing:2,children:e.jsx(u,{startIcon:e.jsx(h,{children:e.jsx(ie,{})}),variant:"contained",children:"New Dashboard"})})]})}),e.jsx(n,{xs:12,md:4,children:e.jsx(v,{action:e.jsx(u,{color:"inherit",endIcon:e.jsx(h,{children:e.jsx(y,{})}),size:"small",children:"See sources"}),chartSeries:[{data:[0,170,242,98,63,56,85,171,209,163,204,21,264,0]}],title:"Impressions",value:"36,6K"})}),e.jsx(n,{xs:12,md:4,children:e.jsx(v,{action:e.jsx(u,{color:"inherit",endIcon:e.jsx(h,{children:e.jsx(y,{})}),size:"small",children:"See traffic"}),chartSeries:[{data:[0,245,290,187,172,106,15,210,202,19,18,3,212,0]}],title:"Engagements",value:"19K"})}),e.jsx(n,{xs:12,md:4,children:e.jsx(v,{action:e.jsx(u,{color:"inherit",endIcon:e.jsx(h,{children:e.jsx(y,{})}),size:"small",children:"See campaigns"}),chartSeries:[{data:[0,277,191,93,92,85,166,240,63,4,296,144,166,0]}],title:"Spent",value:"$41.2K"})}),e.jsx(n,{xs:12,lg:8,children:e.jsx(K,{chartSeries:[{name:"Organic",data:[45,40,37,41,42,45,42]},{name:"Marketing",data:[19,26,22,19,22,24,28]}]})}),e.jsx(n,{xs:12,lg:4,children:e.jsx(_,{visits:[{id:"us",name:"United States",seoPercentage:40,value:31200},{id:"uk",name:"United Kingdom",seoPercentage:47,value:12700},{id:"ru",name:"Russia",seoPercentage:65,value:10360},{id:"ca",name:"Canada",seoPercentage:23,value:5749},{id:"de",name:"Germany",seoPercentage:45,value:2932},{id:"es",name:"Spain",seoPercentage:56,value:200}]})}),e.jsx(n,{xs:12,lg:8,children:e.jsx(W,{pages:[{bounceRate:16,uniqueVisits:8584,url:"/",visitors:95847},{bounceRate:5,uniqueVisits:648,url:"/auth/login",visitors:7500},{bounceRate:2,uniqueVisits:568,url:"/dashboard",visitors:85406},{bounceRate:12,uniqueVisits:12322,url:"/blog/top-5-react-frameworks",visitors:75050},{bounceRate:10,uniqueVisits:11645,url:"/blog/understand-programming-principles",visitors:68003},{bounceRate:8,uniqueVisits:10259,url:"/blog/design-patterns",visitors:49510}]})}),e.jsx(n,{xs:12,lg:4,children:e.jsx(G,{chartSeries:[10,10,20],labels:["Linkedin","Facebook","Instagram"]})})]})})})]})};export{Be as default};
