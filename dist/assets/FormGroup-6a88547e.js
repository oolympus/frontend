import{ab as p,ac as f,s as w,_ as e,r as x,ad as F,m as d,ae as G,af as C,j as y,ag as R,ah as g}from"./index-3a7c6a81.js";function h(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const j=["className","row"],M=o=>{const{classes:r,row:t,error:s}=o;return g({root:["root",t&&"row",s&&"error"]},h,r)},S=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),U=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:c=!1}=s,l=d(s,j),u=G(),i=C({props:s,muiFormControl:u,states:["error"]}),n=e({},s,{row:c,error:i.error}),m=M(n);return y.jsx(S,e({className:R(m.root,a),ownerState:n,ref:t},l))}),v=U;export{v as F};
