import{P as m,j as e,B as i,T as s,a as d,x as T,_ as I,c as o,D as P,d as c,y as p,R as x,p as h,L as S,e as j,z as D,w as F,C as f,G as a}from"./index-345a54fd.js";import{A as y}from"./ArrowRight-2bc513d7.js";import{S as W}from"./seo-ea61f518.js";import{u as L}from"./use-page-view-43790c32.js";import{C as A}from"./chart-0794a0c8.js";import{C as l}from"./Card-15cadf45.js";import{C as u}from"./CardContent-ad559ce1.js";import{U as z}from"./UserPlus02-ce810f4b.js";import{C as B}from"./Clock-d570c011.js";import{C as G}from"./CardMedia-87337673.js";import{L as M}from"./LinearProgress-95a71366.js";import{D as g}from"./DatePicker-fdfbef50.js";import"./useMobilePicker-ef6fd5d4.js";import"./Grid-e1062293.js";import"./ListItem-1cf25ad9.js";import"./MobileDatePicker-af25a2ba.js";import"./useDesktopPicker-4daff393.js";const O=t=>{const r=T();return{chart:{background:"transparent",redrawOnParentResize:!1,redrawOnWindowResize:!1},colors:[r.palette.primary.main],fill:{opacity:1,type:"solid"},grid:{padding:{bottom:0,left:0,right:0,top:0}},labels:["Time left"],plotOptions:{radialBar:{dataLabels:{name:{offsetY:-20,show:!0},value:{fontSize:"14px",fontWeight:500,formatter(){return t+"min"},offsetY:-16}},endAngle:90,hollow:{size:"60%"},startAngle:-90,track:{background:r.palette.mode==="dark"?r.palette.primary.dark:r.palette.primary.light,strokeWidth:"100%"}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{lineCap:"round"},theme:{mode:r.palette.mode}}},v=t=>{const{timeCurrent:r,timeGoal:n}=t,b=n-r,w=r*100/n,k=O(b),R=[w];return e.jsx(l,{children:e.jsxs(u,{children:[e.jsx(i,{sx:{mx:-4,my:-6},children:e.jsx(A,{width:260,height:260,options:k,series:R,type:"radialBar"})}),e.jsxs(s,{variant:"h6",children:["Today’s progress of your ",n,"-minutes goal"]}),e.jsx(s,{color:"text.secondary",variant:"body2",children:"You have used 80% of your available spots. Upgrade plan to create more projects."}),e.jsx(i,{sx:{mt:2},children:e.jsx(d,{variant:"contained",children:"Continue: React and Redux Tutorial"})})]})})};v.propTypes={timeCurrent:m.number.isRequired,timeGoal:m.number.isRequired};var q=function(r){return e.jsx("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},r,{children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.4 10.65V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C16.3482 3 15.5921 3 14.08 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21h2.88m1.8-9.9H7.6m1.8 3.6H7.6m7.2-7.2H7.6m9 12.6v-5.4m-2.7 2.7h5.4"})}))};const H=()=>e.jsx(l,{variant:"outlined",children:e.jsx(u,{children:e.jsxs(o,{divider:e.jsx(P,{}),spacing:2,children:[e.jsxs(o,{alignItems:"flex-start",direction:"row",spacing:2,children:[e.jsx(c,{children:e.jsx(q,{})}),e.jsxs("div",{children:[e.jsx(s,{variant:"subtitle1",children:"Find courses"}),e.jsx(s,{color:"text.secondary",variant:"body2",children:"Browse through the directory"}),e.jsx(i,{sx:{mt:2},children:e.jsx(d,{endIcon:e.jsx(p,{}),size:"small",variant:"contained",children:"Find Courses"})})]})]}),e.jsxs(o,{alignItems:"flex-start",direction:"row",spacing:2,children:[e.jsx(c,{children:e.jsx(z,{})}),e.jsxs("div",{children:[e.jsx(s,{variant:"subtitle1",children:"Find tutors"}),e.jsx(s,{color:"text.secondary",variant:"body2",children:"Browse the latest written articles"}),e.jsx(i,{sx:{mt:2},children:e.jsx(d,{color:"info",endIcon:e.jsx(p,{}),size:"small",variant:"contained",children:"Find Tutors"})})]})]})]})})}),C=t=>{const{course:r}=t;return e.jsxs(l,{variant:"outlined",children:[e.jsx(G,{component:x,href:h.dashboard.academy.courseDetails,image:r.media,sx:{height:180}}),e.jsxs(u,{children:[e.jsx(S,{color:"text.primary",component:x,href:h.dashboard.academy.courseDetails,underline:"none",variant:"subtitle1",children:r.title}),e.jsx(s,{color:"text.secondary",sx:{mt:1},variant:"body2",children:r.description}),e.jsxs(o,{alignItems:"center",direction:"row",spacing:1,sx:{mt:1},children:[e.jsx(c,{children:e.jsx(B,{})}),e.jsx(s,{color:"text.secondary",variant:"caption",children:r.duration})]})]}),e.jsx(M,{value:r.progress,variant:"determinate"}),e.jsx(i,{sx:{display:"flex",justifyContent:"flex-end",p:1},children:e.jsx(d,{color:"inherit",component:x,endIcon:e.jsx(c,{children:e.jsx(y,{})}),href:h.dashboard.academy.courseDetails,children:"Continue"})})]})};C.propTypes={course:m.object.isRequired};const V=["Web","Node.js","Python","C#"],U=()=>e.jsx(l,{children:e.jsxs(o,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:3,sx:{p:3},children:[e.jsx(i,{sx:{flexGrow:1},children:e.jsx(j,{defaultValue:"",fullWidth:!0,label:"Search",name:"query",placeholder:"Title or description"})}),e.jsx(i,{sx:{flexGrow:1},children:e.jsx(j,{defaultValue:"web",fullWidth:!0,label:"Platform",name:"platform",select:!0,SelectProps:{native:!0},children:V.map(t=>e.jsx("option",{value:t,children:t},t))})}),e.jsx("div",{children:e.jsx(g,{format:"dd/MM/yyyy",label:"From",onChange:()=>{},value:new Date})}),e.jsx("div",{children:e.jsx(g,{format:"dd/MM/yyyy",label:"To",onChange:()=>{},value:new Date})}),e.jsx(d,{size:"large",startIcon:e.jsx(c,{children:e.jsx(D,{})}),variant:"contained",children:"Search"})]})}),Y=()=>[{id:"c3a2b7331eef8329e2a87c79",description:"Introductory course for design and framework basics",duration:"78 hours",media:"/assets/courses/course-1.png",progress:23,title:"React and Redux Tutorial"},{id:"3f02f696f869ecd1c68e95a3",description:"Introductory course for design and framework basics",duration:"14 hours",media:"/assets/courses/course-2.png",progress:52,title:"React and Express Tutorial"},{id:"f6e76a6474038384cd9e032b",description:"Introductory course for design and framework basics",duration:"21 hours",media:"/assets/courses/course-3.png",progress:90,title:"React Crash Course: Beginner"}],de=()=>{const t=F(),r=Y();return L(),e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Dashboard: Academy Dashboard"}),e.jsxs(i,{component:"main",sx:{flexGrow:1},children:[e.jsx(i,{sx:{backgroundColor:"primary.darkest",color:"primary.contrastText",py:"120px"},children:e.jsxs(f,{maxWidth:"xl",children:[e.jsx(s,{color:"inherit",variant:"h5",children:"Find unparalleled knowledge"}),e.jsx(s,{color:"inherit",sx:{mt:1,mb:6},children:"Learn from the top-tier creatives and leading experts in AI"}),e.jsx(U,{})]})}),e.jsx(i,{sx:{py:"64px"},children:e.jsx(f,{maxWidth:t.stretch?!1:"xl",children:e.jsxs(a,{container:!0,spacing:{xs:3,lg:4},children:[e.jsxs(a,{xs:12,children:[e.jsx(s,{variant:"h6",children:"Welcome back, Anika"}),e.jsx(s,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Nice progress so far, keep it up!"})]}),e.jsx(a,{xs:12,md:9,children:e.jsx(v,{timeCurrent:20,timeGoal:35})}),e.jsx(a,{xs:12,md:3,children:e.jsx(H,{})}),e.jsx(a,{xs:12,children:e.jsxs(o,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[e.jsx(s,{variant:"h6",children:"My Courses"}),e.jsx(d,{color:"inherit",endIcon:e.jsx(c,{children:e.jsx(y,{})}),children:"See all"})]})}),r.map(n=>e.jsx(a,{xs:12,md:4,children:e.jsx(C,{course:n})},n.id))]})})})]})]})};export{de as default};
