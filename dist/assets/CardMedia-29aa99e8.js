import{ab as M,ac as f,s as x,_ as d,r as b,ad as h,m as y,j as v,ag as I,ah as N}from"./index-3a7c6a81.js";function E(e){return M("MuiCardMedia",e)}f("MuiCardMedia",["root","media","img"]);const O=["children","className","component","image","src","style"],R=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return N({root:["root",t&&"media",s&&"img"]},E,o)},S=x("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})(({ownerState:e})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),_=["video","audio","picture","iframe","img"],j=["picture","img"],k=b.forwardRef(function(o,t){const s=h({props:o,name:"MuiCardMedia"}),{children:a,className:l,component:i="div",image:n,src:p,style:c}=s,u=y(s,O),r=_.indexOf(i)!==-1,C=!r&&n?d({backgroundImage:`url("${n}")`},c):c,m=d({},s,{component:i,isMediaComponent:r,isImageComponent:j.indexOf(i)!==-1}),g=R(m);return v.jsx(S,d({className:I(g.root,l),as:i,role:!r&&n?"img":void 0,ref:t,style:C,ownerState:m,src:r?n||p:void 0},u,{children:a}))}),w=k;export{w as C};
