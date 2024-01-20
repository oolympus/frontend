import{ac as ft,ab as pt,s as L,aJ as Pt,ay as Wt,_ as b,r as d,ad as ht,m as lt,ag as W,j as S,ah as St,aZ as Vt,bt as zt,bu as bt,x as Nt,aB as et,bi as dt,bv as It,bp as Kt,bw as Ot}from"./index-345a54fd.js";import{K as qt,a as Gt}from"./KeyboardArrowRight-7b5ddf7b.js";function Jt(t){return pt("MuiTab",t)}const Zt=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),F=Zt,Qt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],to=t=>{const{classes:o,textColor:r,fullWidth:c,wrapped:n,icon:i,label:p,selected:f,disabled:u}=t,m={root:["root",i&&p&&"labelIcon",`textColor${Wt(r)}`,c&&"fullWidth",n&&"wrapped",f&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return St(m,Jt,o)},oo=L(Pt,{name:"MuiTab",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.label&&r.icon&&o.labelIcon,o[`textColor${Wt(r.textColor)}`],r.fullWidth&&o.fullWidth,r.wrapped&&o.wrapped]}})(({theme:t,ownerState:o})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:o.iconPosition==="top"||o.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${F.iconWrapper}`]:b({},o.iconPosition==="top"&&{marginBottom:6},o.iconPosition==="bottom"&&{marginTop:6},o.iconPosition==="start"&&{marginRight:t.spacing(1)},o.iconPosition==="end"&&{marginLeft:t.spacing(1)})},o.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${F.selected}`]:{opacity:1},[`&.${F.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${F.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${F.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${F.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${F.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})),eo=d.forwardRef(function(o,r){const c=ht({props:o,name:"MuiTab"}),{className:n,disabled:i=!1,disableFocusRipple:p=!1,fullWidth:f,icon:u,iconPosition:m="top",indicator:M,label:w,onChange:g,onClick:x,onFocus:H,selected:y,selectionFollowsFocus:v,textColor:A="inherit",value:I,wrapped:rt=!1}=c,j=lt(c,Qt),_=b({},c,{disabled:i,disableFocusRipple:p,selected:y,icon:!!u,iconPosition:m,label:!!w,fullWidth:f,textColor:A,wrapped:rt}),X=to(_),z=u&&w&&d.isValidElement(u)?d.cloneElement(u,{className:W(X.iconWrapper,u.props.className)}):u,G=E=>{!y&&g&&g(E,I),x&&x(E)},D=E=>{v&&!y&&g&&g(E,I),H&&H(E)};return S.jsxs(oo,b({focusRipple:!p,className:W(X.root,n),ref:r,role:"tab","aria-selected":y,disabled:i,onClick:G,onFocus:D,ownerState:_,tabIndex:y?0:-1},j,{children:[m==="top"||m==="start"?S.jsxs(d.Fragment,{children:[z,w]}):S.jsxs(d.Fragment,{children:[w,z]}),M]}))}),Ro=eo;function lo(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ro(t,o,r,c={},n=()=>{}){const{ease:i=lo,duration:p=300}=c;let f=null;const u=o[t];let m=!1;const M=()=>{m=!0},w=g=>{if(m){n(new Error("Animation cancelled"));return}f===null&&(f=g);const x=Math.min(1,(g-f)/p);if(o[t]=i(x)*(r-u)+u,x>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),M):(requestAnimationFrame(w),M)}const no=["onChange"],so={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ao(t){const{onChange:o}=t,r=lt(t,no),c=d.useRef(),n=d.useRef(null),i=()=>{c.current=n.current.offsetHeight-n.current.clientHeight};return Vt(()=>{const p=bt(()=>{const u=c.current;i(),u!==c.current&&o(c.current)}),f=zt(n.current);return f.addEventListener("resize",p),()=>{p.clear(),f.removeEventListener("resize",p)}},[o]),d.useEffect(()=>{i(),o(c.current)},[o]),S.jsx("div",b({style:so,ref:n},r))}function io(t){return pt("MuiTabScrollButton",t)}const co=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),uo=co,bo=["className","slots","slotProps","direction","orientation","disabled"],fo=t=>{const{classes:o,orientation:r,disabled:c}=t;return St({root:["root",r,c&&"disabled"]},io,o)},po=L(Pt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.orientation&&o[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${uo.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),ho=d.forwardRef(function(o,r){var c,n;const i=ht({props:o,name:"MuiTabScrollButton"}),{className:p,slots:f={},slotProps:u={},direction:m}=i,M=lt(i,bo),g=Nt().direction==="rtl",x=b({isRtl:g},i),H=fo(x),y=(c=f.StartScrollButtonIcon)!=null?c:qt,v=(n=f.EndScrollButtonIcon)!=null?n:Gt,A=et({elementType:y,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),I=et({elementType:v,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return S.jsx(po,b({component:"div",className:W(H.root,p),ref:r,role:null,ownerState:x,tabIndex:null},M,{children:m==="left"?S.jsx(y,b({},A)):S.jsx(v,b({},I))}))}),So=ho;function mo(t){return pt("MuiTabs",t)}const xo=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ut=xo,vo=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Et=(t,o)=>t===o?t.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t.firstChild,Mt=(t,o)=>t===o?t.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t.lastChild,ot=(t,o,r)=>{let c=!1,n=r(t,o);for(;n;){if(n===t.firstChild){if(c)return;c=!0}const i=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||i)n=r(t,n);else{n.focus();return}}},go=t=>{const{vertical:o,fixed:r,hideScrollbar:c,scrollableX:n,scrollableY:i,centered:p,scrollButtonsHideMobile:f,classes:u}=t;return St({root:["root",o&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",o&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},mo,u)},Bo=L("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[{[`& .${ut.scrollButtons}`]:o.scrollButtons},{[`& .${ut.scrollButtons}`]:r.scrollButtonsHideMobile&&o.scrollButtonsHideMobile},o.root,r.vertical&&o.vertical]}})(({ownerState:t,theme:o})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ut.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}})),Co=L("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.scroller,r.fixed&&o.fixed,r.hideScrollbar&&o.hideScrollbar,r.scrollableX&&o.scrollableX,r.scrollableY&&o.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),wo=L("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.flexContainer,r.vertical&&o.flexContainerVertical,r.centered&&o.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),yo=L("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,o)=>o.indicator})(({ownerState:t,theme:o})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(o.vars||o).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),To=L(ao,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},Io=d.forwardRef(function(o,r){const c=ht({props:o,name:"MuiTabs"}),n=Nt(),i=n.direction==="rtl",{"aria-label":p,"aria-labelledby":f,action:u,centered:m=!1,children:M,className:w,component:g="div",allowScrollButtonsMobile:x=!1,indicatorColor:H="primary",onChange:y,orientation:v="horizontal",ScrollButtonComponent:A=So,scrollButtons:I="auto",selectionFollowsFocus:rt,slots:j={},slotProps:_={},TabIndicatorProps:X={},TabScrollButtonProps:z={},textColor:G="primary",value:D,variant:E="standard",visibleScrollbar:nt=!1}=c,$t=lt(c,vo),R=E==="scrollable",B=v==="vertical",V=B?"scrollTop":"scrollLeft",J=B?"top":"left",Z=B?"bottom":"right",st=B?"clientHeight":"clientWidth",K=B?"height":"width",N=b({},c,{component:g,allowScrollButtonsMobile:x,indicatorColor:H,orientation:v,vertical:B,scrollButtons:I,textColor:G,variant:E,visibleScrollbar:nt,fixed:!R,hideScrollbar:R&&!nt,scrollableX:R&&!B,scrollableY:R&&B,centered:m&&!R,scrollButtonsHideMobile:!x}),P=go(N),kt=et({elementType:j.StartScrollButtonIcon,externalSlotProps:_.startScrollButtonIcon,ownerState:N}),Ft=et({elementType:j.EndScrollButtonIcon,externalSlotProps:_.endScrollButtonIcon,ownerState:N}),[mt,Lt]=d.useState(!1),[$,xt]=d.useState(Rt),[Y,Ht]=d.useState({start:!1,end:!1}),[vt,At]=d.useState({overflow:"hidden",scrollbarWidth:0}),gt=new Map,T=d.useRef(null),O=d.useRef(null),Bt=()=>{const e=T.current;let l;if(e){const a=e.getBoundingClientRect();l={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:It(e,n.direction),scrollWidth:e.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(e&&D!==!1){const a=O.current.children;if(a.length>0){const h=a[gt.get(D)];s=h?h.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},q=dt(()=>{const{tabsMeta:e,tabMeta:l}=Bt();let s=0,a;if(B)a="top",l&&e&&(s=l.top-e.top+e.scrollTop);else if(a=i?"right":"left",l&&e){const C=i?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;s=(i?-1:1)*(l[a]-e[a]+C)}const h={[a]:s,[K]:l?l[K]:0};if(isNaN($[a])||isNaN($[K]))xt(h);else{const C=Math.abs($[a]-h[a]),U=Math.abs($[K]-h[K]);(C>=1||U>=1)&&xt(h)}}),at=(e,{animation:l=!0}={})=>{l?ro(V,T.current,e,{duration:n.transitions.duration.standard}):T.current[V]=e},Ct=e=>{let l=T.current[V];B?l+=e:(l+=e*(i?-1:1),l*=i&&Ot()==="reverse"?-1:1),at(l)},wt=()=>{const e=T.current[st];let l=0;const s=Array.from(O.current.children);for(let a=0;a<s.length;a+=1){const h=s[a];if(l+h[st]>e){a===0&&(l=e);break}l+=h[st]}return l},jt=()=>{Ct(-1*wt())},Xt=()=>{Ct(wt())},Dt=d.useCallback(e=>{At({overflow:null,scrollbarWidth:e})},[]),Yt=()=>{const e={};e.scrollbarSizeListener=R?S.jsx(To,{onChange:Dt,className:W(P.scrollableX,P.hideScrollbar)}):null;const l=Y.start||Y.end,s=R&&(I==="auto"&&l||I===!0);return e.scrollButtonStart=s?S.jsx(A,b({slots:{StartScrollButtonIcon:j.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:kt},orientation:v,direction:i?"right":"left",onClick:jt,disabled:!Y.start},z,{className:W(P.scrollButtons,z.className)})):null,e.scrollButtonEnd=s?S.jsx(A,b({slots:{EndScrollButtonIcon:j.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ft},orientation:v,direction:i?"left":"right",onClick:Xt,disabled:!Y.end},z,{className:W(P.scrollButtons,z.className)})):null,e},yt=dt(e=>{const{tabsMeta:l,tabMeta:s}=Bt();if(!(!s||!l)){if(s[J]<l[J]){const a=l[V]+(s[J]-l[J]);at(a,{animation:e})}else if(s[Z]>l[Z]){const a=l[V]+(s[Z]-l[Z]);at(a,{animation:e})}}}),k=dt(()=>{if(R&&I!==!1){const{scrollTop:e,scrollHeight:l,clientHeight:s,scrollWidth:a,clientWidth:h}=T.current;let C,U;if(B)C=e>1,U=e<l-s-1;else{const tt=It(T.current,n.direction);C=i?tt<a-h-1:tt>1,U=i?tt>1:tt<a-h-1}(C!==Y.start||U!==Y.end)&&Ht({start:C,end:U})}});d.useEffect(()=>{const e=bt(()=>{T.current&&(q(),k())}),l=zt(T.current);l.addEventListener("resize",e);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(e),Array.from(O.current.children).forEach(a=>{s.observe(a)})),()=>{e.clear(),l.removeEventListener("resize",e),s&&s.disconnect()}},[q,k]);const it=d.useMemo(()=>bt(()=>{k()}),[k]);d.useEffect(()=>()=>{it.clear()},[it]),d.useEffect(()=>{Lt(!0)},[]),d.useEffect(()=>{q(),k()}),d.useEffect(()=>{yt(Rt!==$)},[yt,$]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:k}),[q,k]);const Tt=S.jsx(yo,b({},X,{className:W(P.indicator,X.className),ownerState:N,style:b({},$,X.style)}));let Q=0;const Ut=d.Children.map(M,e=>{if(!d.isValidElement(e))return null;const l=e.props.value===void 0?Q:e.props.value;gt.set(l,Q);const s=l===D;return Q+=1,d.cloneElement(e,b({fullWidth:E==="fullWidth",indicator:s&&!mt&&Tt,selected:s,selectionFollowsFocus:rt,onChange:y,textColor:G,value:l},Q===1&&D===!1&&!e.props.tabIndex?{tabIndex:0}:{}))}),_t=e=>{const l=O.current,s=Kt(l).activeElement;if(s.getAttribute("role")!=="tab")return;let h=v==="horizontal"?"ArrowLeft":"ArrowUp",C=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&i&&(h="ArrowRight",C="ArrowLeft"),e.key){case h:e.preventDefault(),ot(l,s,Mt);break;case C:e.preventDefault(),ot(l,s,Et);break;case"Home":e.preventDefault(),ot(l,null,Et);break;case"End":e.preventDefault(),ot(l,null,Mt);break}},ct=Yt();return S.jsxs(Bo,b({className:W(P.root,w),ownerState:N,ref:r,as:g},$t,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,S.jsxs(Co,{className:P.scroller,ownerState:N,style:{overflow:vt.overflow,[B?`margin${i?"Left":"Right"}`:"marginBottom"]:nt?void 0:-vt.scrollbarWidth},ref:T,onScroll:it,children:[S.jsx(wo,{"aria-label":p,"aria-labelledby":f,"aria-orientation":v==="vertical"?"vertical":null,className:P.flexContainer,ownerState:N,onKeyDown:_t,ref:O,role:"tablist",children:Ut}),mt&&Tt]}),ct.scrollButtonEnd]}))}),Po=Io;export{Po as T,Ro as a,ut as t};
