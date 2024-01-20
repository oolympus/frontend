import{P as t,j as s,c as i,B as a,T as r,D as c,a as l,v as d,d as x,p as h,w as S,r as g,C as G,G as o}from"./index-345a54fd.js";import{S as I}from"./seo-ea61f518.js";import{u as L}from"./use-page-view-43790c32.js";import{A as m}from"./ArrowRight-2bc513d7.js";import{C as j}from"./Card-15cadf45.js";import{C as p}from"./CardActions-381c1336.js";import{a as R}from"./axios-instance-67182a36.js";const y=n=>{const{amount:e}=n;return s.jsxs(j,{children:[s.jsxs(i,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[s.jsx("div",{children:s.jsx("img",{src:"/assets/iconly/iconly-glass-tick.svg",width:48})}),s.jsxs(a,{sx:{flexGrow:1},children:[s.jsx(r,{color:"text.secondary",variant:"body2",children:"Completed Loans"}),s.jsx(r,{color:"text.primary",variant:"h4",children:e})]})]}),s.jsx(c,{}),s.jsx(p,{children:s.jsx(l,{component:d,color:"inherit",endIcon:s.jsx(x,{children:s.jsx(m,{})}),size:"small",to:h.dashboard.loans.index,children:"See all loans"})})]})};y.propTypes={amount:t.number.isRequired};const w=n=>{const{amount:e}=n;return s.jsxs(j,{children:[s.jsxs(i,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[s.jsx("div",{children:s.jsx("img",{src:"/assets/iconly/iconly-glass-info.svg",width:48})}),s.jsxs(a,{sx:{flexGrow:1},children:[s.jsx(r,{color:"text.secondary",variant:"body2",children:"Pending Loans"}),s.jsx(r,{color:"text.primary",variant:"h4",children:e})]})]}),s.jsx(c,{}),s.jsx(p,{children:s.jsx(l,{component:d,color:"inherit",endIcon:s.jsx(x,{children:s.jsx(m,{})}),size:"small",to:h.dashboard.loans.index,children:"See all loans"})})]})};w.propTypes={amount:t.number.isRequired};const b=n=>{const{amount:e}=n;return s.jsxs(j,{children:[s.jsxs(i,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[s.jsx("div",{children:s.jsx("img",{src:"/assets/iconly/iconly-glass-paper.svg",width:48})}),s.jsxs(a,{sx:{flexGrow:1},children:[s.jsx(r,{color:"text.secondary",variant:"body2",children:"Active loans"}),s.jsx(r,{color:"text.primary",variant:"h4",children:e})]})]}),s.jsx(c,{}),s.jsx(p,{children:s.jsx(l,{component:d,color:"inherit",endIcon:s.jsx(x,{children:s.jsx(m,{})}),size:"small",to:h.dashboard.loans.index,children:"See all loans"})})]})};b.propTypes={amount:t.number.isRequired};const f=n=>{const{amount:e}=n;return s.jsxs(j,{children:[s.jsxs(i,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[s.jsx("div",{children:s.jsx("img",{src:"/assets/iconly/iconly-glass-discount.svg",width:48})}),s.jsxs(a,{sx:{flexGrow:1},children:[s.jsx(r,{color:"text.secondary",variant:"body2",children:"Cancelled Loans"}),s.jsx(r,{color:"text.primary",variant:"h4",children:e})]})]}),s.jsx(c,{}),s.jsx(p,{children:s.jsx(l,{component:d,color:"inherit",endIcon:s.jsx(x,{children:s.jsx(m,{})}),size:"small",to:h.dashboard.loans.index,children:"See all loans"})})]})};f.propTypes={amount:t.number.isRequired};const z=()=>{const n=S(),e=g.useRef({pending_loans:0,active_loans:0,completed_loans:0,cancelled_loans:0}),u=R();return g.useCallback(async()=>{var v;const C=await u.get("/dashboard");e.current=(v=C.data)==null?void 0:v.data[0]},[u])(),L(),s.jsxs(s.Fragment,{children:[s.jsx(I,{title:"Dashboard: Overview"}),s.jsx(a,{component:"main",sx:{flexGrow:1,py:8},children:s.jsx(G,{maxWidth:n.stretch?!1:"xl",children:s.jsxs(o,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[s.jsx(o,{xs:12,children:s.jsx(i,{direction:"row",justifyContent:"space-between",spacing:4,children:s.jsx("div",{children:s.jsx(r,{variant:"h4",children:"Overview"})})})}),s.jsx(o,{xs:12,md:3,children:s.jsx(y,{amount:e.current.completed_loans})}),s.jsx(o,{xs:12,md:3,children:s.jsx(w,{amount:e.current.pending_loans})}),s.jsx(o,{xs:12,md:3,children:s.jsx(b,{amount:e.current.active_loans})}),s.jsx(o,{xs:12,md:3,children:s.jsx(f,{amount:e.current.cancelled_loans})})]})})})]})};export{z as default};
