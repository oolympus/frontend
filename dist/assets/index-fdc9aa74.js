import"./data-b010c457.js";import{a as y}from"./axios-instance-afdb1c5d.js";import{d as u}from"./deep-copy-ee95be26.js";import{a as m}from"./apply-pagination-03aa54c3.js";import{a as g}from"./apply-sort-95de74ec.js";const w=y(),d=async()=>{var a;return(a=(await w.get("/loans")).data)==null?void 0:a.data};class L{async getLoans(a={}){const{filters:t,page:s,rowsPerPage:o,sortBy:n,sortDir:r}=a,p=await d();let e=u(p),i=e.length;return typeof t<"u"&&(e=e.filter(f=>!(typeof t.query<"u"&&t.query!==""&&!(f.id||"").toLowerCase().includes(t.query.toLowerCase())||typeof t.status<"u"&&!(f.loan_status===t.status))),i=e.length),typeof n<"u"&&typeof r<"u"&&(e=g(e,n,r)),typeof s<"u"&&typeof o<"u"&&(e=m(e,s,o)),Promise.resolve({data:e,count:i})}async getLoan(a){const t=await d();return Promise.resolve(u(t[0]))}}const v=new L;export{v as l};
