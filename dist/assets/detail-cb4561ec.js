import{j as e,_ as b,P as w,u as L,r as x,E as S,D as o,T as a,c as l,e as k,a as j,B as I,C as M,L as P,R as D,p as A,d as m,aQ as E,h as H}from"./index-345a54fd.js";import{A as T}from"./ArrowLeft-2135ffd4.js";import{E as _}from"./Edit02-74dfa7a1.js";import{S as R}from"./seo-ea61f518.js";import{u as B}from"./use-page-view-43790c32.js";import{P as G,a as i}from"./property-list-item-b239a2fb.js";import{a as V}from"./data-ada0f0b8.js";import{C as W}from"./Card-15cadf45.js";import{C as F}from"./CardHeader-06bf02fa.js";import{l as O}from"./index-7ffecf5e.js";import"./ListItem-1cf25ad9.js";import"./axios-instance-67182a36.js";import"./index-96e7fc06.js";import"./index-ecc76830.js";import"./index-71286f46.js";import"./index-078e6bc2.js";import"./deep-copy-ee95be26.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-95de74ec.js";var Q=function(t){return e.jsxs("svg",b({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M3 9.12c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 4.8 5.8078 4.8 7.32 4.8h7.56c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v7.56c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C17.1482 21 16.3921 21 14.88 21H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 18.9482 3 18.1921 3 16.68V9.12Z"}),e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.2 10.2H3M14.7 3v3.6M7.5 3v3.6M7.32 21h7.56c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 21 5.8078 21 7.32 21Z"})]}))};const u=["Canceled","Complete","Rejected"],v=s=>{const{loan:t,...p}=s,h=L(n=>n.breakpoints.up("md")),[c,f]=x.useState(u[0]),g=x.useCallback(n=>{f(n.target.value)},[]),d=V(1)[0],r=h?"horizontal":"vertical",y=S(new Date(t.application_time),"dd/MM/yyyy HH:mm"),C=`${d.first_name} ${d.surname}`;return e.jsxs(W,{...p,children:[e.jsx(F,{title:"Basic info"}),e.jsx(o,{}),e.jsxs(G,{children:[e.jsxs(i,{align:r,label:"Customer",children:[e.jsx(a,{variant:"subtitle2",children:C}),e.jsx(a,{variant:"body1",color:"text.secondary",children:d.email}),e.jsx(a,{variant:"body1",color:"text.secondary",children:d.telephone}),e.jsx(a,{color:"text.secondary",variant:"body2",children:d.address})]}),e.jsx(o,{}),e.jsx(i,{align:r,label:"ID",value:t.id}),e.jsx(o,{}),e.jsx(i,{align:r,label:"Date",value:y}),e.jsx(o,{}),e.jsx(i,{align:r,label:"Principal",value:t.principal}),e.jsx(o,{}),e.jsx(i,{align:r,label:"Total Amount",value:t.amount_payable}),e.jsx(o,{}),e.jsx(i,{align:r,label:"Status",children:e.jsxs(l,{alignItems:{xs:"stretch",sm:"center"},direction:{xs:"column",sm:"row"},spacing:1,children:[e.jsx(k,{label:"Status",margin:"normal",name:"status",onChange:g,select:!0,SelectProps:{native:!0},sx:{flexGrow:1,minWidth:150},value:c,children:u.map(n=>e.jsx("option",{value:n,children:n},n))}),e.jsx(j,{variant:"contained",children:"Save"})]})})]})]})};v.propTypes={loan:w.object.isRequired};const Z=()=>{const s=H(),[t,p]=x.useState(null),h=x.useCallback(async()=>{try{const c=await O.getLoan();s()&&p(c)}catch(c){console.error(c)}},[s]);return x.useEffect(()=>{h()},[]),t},de=()=>{const s=Z();if(B(),!s)return null;const t=new Date(s.application_time).toLocaleString();return e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Dashboard: Loan Details"}),e.jsx(I,{component:"main",sx:{flexGrow:1,py:8},children:e.jsx(M,{maxWidth:"lg",children:e.jsxs(l,{spacing:4,children:[e.jsx("div",{children:e.jsxs(P,{color:"text.primary",component:D,href:A.dashboard.loans.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e.jsx(m,{sx:{mr:1},children:e.jsx(T,{})}),e.jsx(a,{variant:"subtitle2",children:"Loans"})]})}),e.jsx("div",{children:e.jsxs(l,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[e.jsxs(l,{spacing:1,children:[e.jsx(a,{variant:"h4",children:s.id}),e.jsxs(l,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(a,{color:"text.secondary",variant:"body2",children:"Placed on"}),e.jsx(m,{color:"action",children:e.jsx(Q,{})}),e.jsx(a,{variant:"body2",children:t})]})]}),e.jsx("div",{children:e.jsxs(l,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(j,{color:"inherit",endIcon:e.jsx(m,{children:e.jsx(_,{})}),children:"Edit"}),e.jsx(j,{endIcon:e.jsx(m,{children:e.jsx(E,{})}),variant:"contained",children:"Action"})]})})]})}),e.jsx(v,{loan:s})]})})})]})};export{de as default};
