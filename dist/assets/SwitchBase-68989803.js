import{ab as J,ac as W,s as y,aJ as A,_ as d,r as D,m as G,n as H,ae as K,j as x,ag as M,ay as Q,ah as T}from"./index-3a7c6a81.js";function V(e){return J("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:a,checked:i,disabled:l,edge:n}=e,r={root:["root",i&&"checked",l&&"disabled",n&&`edge${Q(n)}`],input:["input"]};return T(r,V,a)},Z=y(A)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=y("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),se=D.forwardRef(function(a,i){const{autoFocus:l,checked:n,checkedIcon:r,className:F,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:I,inputProps:P,inputRef:j,name:z,onBlur:f,onChange:g,onFocus:b,readOnly:E,required:N=!1,tabIndex:U,type:c,value:m}=a,_=G(a,X),[k,q]=H({controlled:n,default:!!h,name:"SwitchBase",state:"checked"}),t=K(),v=s=>{b&&b(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),g&&g(s,C)};let o=w;t&&typeof o>"u"&&(o=t.disabled);const $=c==="checkbox"||c==="radio",u=d({},a,{checked:k,disabled:o,disableFocusRipple:p,edge:S}),B=Y(u);return x.jsxs(Z,d({component:"span",className:M(B.root,F),centerRipple:!0,focusRipple:!p,disabled:o,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},_,{children:[x.jsx(ee,d({autoFocus:l,checked:n,defaultChecked:h,className:B.input,disabled:o,id:$?I:void 0,name:z,onChange:O,readOnly:E,ref:j,required:N,ownerState:u,tabIndex:U,type:c},c==="checkbox"&&m===void 0?{}:{value:m},P)),k?r:R]}))}),ae=se;export{ae as S};
