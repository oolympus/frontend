import{i as B,r as d,a8 as j,p as m,j as e,c as t,G as s,T as i,e as o,B as v,l as k,M as S,a as g,C as w,L as p,R as b}from"./index-3a7c6a81.js";import{B as T,a as P}from"./breadcrumbs-separator-34d9d9a2.js";import{S as F}from"./seo-63bf6bf4.js";import{u as W}from"./use-page-view-df8e2160.js";import{c as E,a as l,d as L,e as C,u as R}from"./formik.esm-8125591d.js";import{Q as V}from"./quill-editor-3a1cf2e5.js";import{C as h}from"./Card-43e5e905.js";import{C as x}from"./CardContent-28139d3c.js";const $=[{label:"Category 1",value:"Category 1"},{label:"Category 2",value:"Category 2"},{label:"Category 3",value:"Category 3"}],D={barcode:"925487986526",category:"",description:"",images:[],name:"",newPrice:0,oldPrice:0,sku:"IYV-8745",submit:null},G=E({barcode:l().max(255),category:l().max(255),description:l().max(5e3),images:L(),name:l().max(255).required(),newPrice:C().min(0).required(),oldPrice:C().min(0),sku:l().max(255)}),I=y=>{const f=B(),[q,u]=d.useState([]),r=R({initialValues:D,validationSchema:G,onSubmit:async(a,n)=>{try{j.success(" Transaction created"),f.push(m.dashboard.transactions.index)}catch(c){console.error(c),j.error("Something went wrong!"),n.setStatus({success:!1}),n.setErrors({submit:c.message}),n.setSubmitting(!1)}}});return d.useCallback(a=>{u(n=>[...n,...a])},[]),d.useCallback(a=>{u(n=>n.filter(c=>c.path!==a.path))},[]),d.useCallback(()=>{u([])},[]),e.jsx("form",{onSubmit:r.handleSubmit,...y,children:e.jsxs(t,{spacing:4,children:[e.jsx(h,{children:e.jsx(x,{children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{xs:12,md:4,children:e.jsx(i,{variant:"h6",children:"Basic details"})}),e.jsx(s,{xs:12,md:8,children:e.jsxs(t,{spacing:3,children:[e.jsx(o,{error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,label:" Transaction Name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),e.jsxs("div",{children:[e.jsx(i,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",children:"Description"}),e.jsx(V,{onChange:a=>{r.setFieldValue("description",a)},placeholder:"Write something",sx:{height:200},value:r.values.description}),!!(r.touched.description&&r.errors.description)&&e.jsx(v,{sx:{mt:2},children:e.jsx(k,{error:!0,children:r.errors.description})})]})]})})]})})}),e.jsx(h,{children:e.jsx(x,{children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{xs:12,md:4,children:e.jsx(i,{variant:"h6",children:"Loan amount"})}),e.jsx(s,{xs:12,md:8,children:e.jsx(t,{spacing:3,children:e.jsx(o,{error:!!(r.touched.newPrice&&r.errors.newPrice),fullWidth:!0,label:"amount",name:"amount",onBlur:r.handleBlur,onChange:r.handleChange,type:"number",value:r.values.newPrice})})})]})})}),e.jsx(h,{children:e.jsx(x,{children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{xs:12,md:4,children:e.jsx(i,{variant:"h6",children:"Category"})}),e.jsx(s,{xs:12,md:8,children:e.jsxs(t,{spacing:3,children:[e.jsx(o,{error:!!(r.touched.category&&r.errors.category),fullWidth:!0,label:"Category",name:"category",onBlur:r.handleBlur,onChange:r.handleChange,select:!0,value:r.values.category,children:$.map(a=>e.jsx(S,{value:a.value,children:a.label},a.value))}),e.jsx(o,{disabled:!0,error:!!(r.touched.barcode&&r.errors.barcode),fullWidth:!0,label:"Barcode",name:"barcode",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.barcode}),e.jsx(o,{disabled:!0,error:!!(r.touched.sku&&r.errors.sku),fullWidth:!0,label:"SKU",name:"sku",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.sku})]})})]})})}),e.jsxs(t,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:1,children:[e.jsx(g,{color:"inherit",children:"Cancel"}),e.jsx(g,{type:"submit",variant:"contained",children:"Create"})]})]})})},_=()=>(W(),e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Dashboard:  Transaction Create"}),e.jsx(v,{component:"main",sx:{flexGrow:1,py:8},children:e.jsx(w,{maxWidth:"xl",children:e.jsxs(t,{spacing:3,children:[e.jsxs(t,{spacing:1,children:[e.jsx(i,{variant:"h4",children:"Create a new transaction"}),e.jsxs(T,{separator:e.jsx(P,{}),children:[e.jsx(p,{color:"text.primary",component:b,href:m.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e.jsx(p,{color:"text.primary",component:b,href:m.dashboard.transactions.index,variant:"subtitle2",children:"Transactions"}),e.jsx(i,{color:"text.secondary",variant:"subtitle2",children:"Create"})]})]}),e.jsx(I,{})]})})})]}));export{_ as default};
