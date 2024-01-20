import{j as e,_ as A,s as X,P as d,r as a,u as z,c as u,T as i,Y as H,d as y,a9 as Y,O as J,a5 as K,z as ee,b as G,B as M,a6 as N,aa as B,G as I,A as S,E as O,R as V,p as E,D as se,a as W,h as ne}from"./index-345a54fd.js";import{P as re}from"./Plus-2c210ce3.js";import{i as te}from"./index-8a6f8ae8.js";import{S as oe}from"./seo-ea61f518.js";import{u as ie}from"./use-page-view-43790c32.js";import{D as q}from"./DatePicker-fdfbef50.js";import{F as ae}from"./FormGroup-02f8bfda.js";import{F as R}from"./FormControlLabel-92a24307.js";import{C as ce}from"./Checkbox-16ad3d4d.js";import{S as Z}from"./Switch-7fbb9aa7.js";import{C as le}from"./Clock-d570c011.js";import{C}from"./Card-15cadf45.js";import{C as T}from"./CardContent-ad559ce1.js";import{n as de}from"./numeral-7a89f655.js";import{A as he}from"./ArrowRight-2bc513d7.js";import{S as pe}from"./severity-pill-ad7a45ee.js";import{g as ue}from"./get-initials-d1c6cec7.js";import{T as U,c as $,a as xe,b as f}from"./TableRow-8f2ec0b0.js";import{T as ge}from"./TablePagination-096da408.js";import"./apply-pagination-03aa54c3.js";import"./deep-copy-ee95be26.js";import"./index-ecc76830.js";import"./index-96e7fc06.js";import"./useMobilePicker-ef6fd5d4.js";import"./Grid-e1062293.js";import"./ListItem-1cf25ad9.js";import"./MobileDatePicker-af25a2ba.js";import"./useDesktopPicker-4daff393.js";import"./SwitchBase-b75720f8.js";import"./KeyboardArrowRight-7b5ddf7b.js";var je=function(s){return e.jsx("svg",A({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s,{children:e.jsx("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C3.684 3 3.936 3 4.44 3h15.12c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934C21 3.684 21 3.936 21 4.44v.6024c0 .242 0 .363-.0296.4754a.9013.9013 0 0 1-.1274.2792c-.0657.096-.1571.1752-.3399.3337l-5.7562 4.9887c-.1828.1584-.2742.2376-.3399.3336a.9015.9015 0 0 0-.1274.2792c-.0296.1125-.0296.2334-.0296.4753v4.705c0 .176 0 .264-.0284.3401a.4503.4503 0 0 1-.119.1758c-.0601.0546-.1418.0873-.3052.1526l-3.06 1.224c-.3308.1324-.4962.1985-.629.1709a.45.45 0 0 1-.2835-.1919c-.0749-.1131-.0749-.2912-.0749-.6475v-5.929c0-.2419 0-.3628-.0296-.4753a.9003.9003 0 0 0-.1274-.2792c-.0657-.096-.157-.1752-.3399-.3336L3.4969 6.1306c-.1828-.1584-.2742-.2376-.3399-.3336a.9001.9001 0 0 1-.1274-.2792C3 5.4053 3 5.2844 3 5.0424V4.44Z"})}))};const me=X("div",{shouldForwardProp:t=>t!=="open"})(({theme:t,open:s})=>({flexGrow:1,overflow:"auto",paddingLeft:t.spacing(3),paddingRight:t.spacing(3),paddingTop:t.spacing(8),paddingBottom:t.spacing(8),zIndex:1,[t.breakpoints.up("lg")]:{marginLeft:-380},transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...s&&{[t.breakpoints.up("lg")]:{marginLeft:0},transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}})),ve=["Blind Spots Inc.","Dispatcher Inc.","ACME SRL","Novelty I.S","Beauty Clinic SRL","Division Inc."],Q=t=>{const{container:s,filters:n={},group:l,onClose:p,onFiltersChange:r,onGroupChange:h,open:j,...m}=t,g=a.useRef(null),v=z(o=>o.breakpoints.up("lg")),x=a.useCallback(o=>{var c;o.preventDefault(),r==null||r({...n,query:((c=g.current)==null?void 0:c.value)||""})},[n,r]),w=a.useCallback(o=>{const c={...n,startDate:o||void 0};c.endDate&&o&&o>c.endDate&&(c.endDate=o),r==null||r(c)},[n,r]),D=a.useCallback(o=>{const c={...n,endDate:o||void 0};c.startDate&&o&&o<c.startDate&&(c.startDate=o),r==null||r(c)},[n,r]),k=a.useCallback(o=>{let c;o.target.checked?c=[...n.customers||[],o.target.value]:c=(n.customers||[]).filter(P=>P!==o.target.value),r==null||r({...n,customers:c})},[n,r]),L=a.useCallback(o=>{r==null||r({...n,status:o.target.checked?"paid":void 0})},[n,r]),b=e.jsxs("div",{children:[e.jsxs(u,{alignItems:"center",justifyContent:"space-between",direction:"row",sx:{p:3},children:[e.jsx(i,{variant:"h5",children:"Filters"}),!v&&e.jsx(H,{onClick:p,children:e.jsx(y,{children:e.jsx(Y,{})})})]}),e.jsxs(u,{spacing:3,sx:{p:3},children:[e.jsx("form",{onSubmit:x,children:e.jsx(J,{defaultValue:"",fullWidth:!0,inputProps:{ref:g},placeholder:"Invoice number",startAdornment:e.jsx(K,{position:"start",children:e.jsx(y,{children:e.jsx(ee,{})})})})}),e.jsxs("div",{children:[e.jsx(G,{sx:{display:"block",mb:2},children:"Issue date"}),e.jsxs(u,{spacing:2,children:[e.jsx(q,{format:"dd/MM/yyyy",label:"From",onChange:w,value:n.startDate||null}),e.jsx(q,{format:"dd/MM/yyyy",label:"To",onChange:D,value:n.endDate||null})]})]}),e.jsxs("div",{children:[e.jsx(G,{sx:{display:"block",mb:2},children:"From customer"}),e.jsx(M,{sx:{backgroundColor:o=>o.palette.mode==="dark"?"neutral.800":"neutral.50",borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1},children:e.jsx(N,{sx:{maxHeight:200},children:e.jsx(ae,{sx:{py:1,px:1.5},children:ve.map(o=>{var P;const c=(P=n.customers)==null?void 0:P.includes(o);return e.jsx(R,{control:e.jsx(ce,{checked:c,onChange:k}),label:o,value:o},o)})})})})]}),e.jsx(R,{control:e.jsx(Z,{checked:n.status==="paid",onChange:L}),label:"Paid only"}),e.jsx(R,{control:e.jsx(Z,{checked:l,onChange:h}),label:"Group by status"})]})]});return v?e.jsx(B,{anchor:"left",open:j,PaperProps:{elevation:16,sx:{border:"none",borderRadius:2.5,overflow:"hidden",position:"relative",width:380}},SlideProps:{container:s},variant:"persistent",sx:{p:3},...m,children:b}):e.jsx(B,{anchor:"left",hideBackdrop:!0,ModalProps:{container:s,sx:{pointerEvents:"none",position:"absolute"}},onClose:p,open:j,PaperProps:{sx:{maxWidth:"100%",width:380,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:s},variant:"temporary",...m,children:b})};Q.propTypes={container:d.any,filters:d.object,group:d.bool,onClose:d.func,onFiltersChange:d.func,onGroupChange:d.func,open:d.bool};var fe=function(s){return e.jsxs("svg",A({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s,{children:[e.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M4 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 3 7.1198 3 8.8 3h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 5.2798 20 6.1198 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8Z"}),e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m9 10.5 2 2L15.5 8M20 21V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C17.7202 3 16.8802 3 15.2 3H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.2798 4 6.1198 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2L20 21Z"})]}))},be=function(s){return e.jsx("svg",A({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s,{children:e.jsx("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 3 7.1198 3 8.8 3h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 5.2798 20 6.1198 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8Z"})}))};const Ce=()=>e.jsx("div",{children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:6,lg:4,children:e.jsx(C,{children:e.jsx(T,{children:e.jsxs(u,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(S,{sx:{height:48,width:48},children:e.jsx(be,{})}),e.jsxs("div",{children:[e.jsx(i,{color:"text.secondary",variant:"body2",children:"Total"}),e.jsx(i,{variant:"h6",children:"$5,300.00"}),e.jsx(i,{color:"text.secondary",variant:"body2",children:"from 12 invoices"})]})]})})})}),e.jsx(I,{xs:12,md:6,lg:4,children:e.jsx(C,{children:e.jsx(T,{children:e.jsxs(u,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(S,{sx:{backgroundColor:"success.lightest",color:"success.main",height:48,width:48},children:e.jsx(fe,{})}),e.jsxs("div",{children:[e.jsx(i,{color:"text.secondary",variant:"body2",children:"Paid"}),e.jsx(i,{variant:"h6",children:"$1,439.60"}),e.jsx(i,{color:"text.secondary",variant:"body2",children:"from 3 invoices"})]})]})})})}),e.jsx(I,{xs:12,md:6,lg:4,children:e.jsx(C,{children:e.jsx(T,{children:e.jsxs(u,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(S,{sx:{backgroundColor:"warning.lightest",color:"warning.main",height:48,width:48},children:e.jsx(le,{})}),e.jsxs("div",{children:[e.jsx(i,{color:"text.secondary",variant:"body2",children:"Pending"}),e.jsx(i,{variant:"h6",children:"$276.87"}),e.jsx(i,{color:"text.secondary",variant:"body2",children:"from 2 invoices"})]})]})})})})]})}),ye=t=>t.reduce((s,n)=>{const{status:l}=n;return{...s,[l]:[...s[l],n]}},{cancelled:[],paid:[],pending:[]}),we={cancelled:"error",paid:"success",pending:"warning"},F=t=>{const{invoice:s,...n}=t,l=we[s.status],p=de(s.totalAmount).format("0,0.00"),r=s.issueDate&&O(s.issueDate,"dd/MM/yyyy"),h=s.dueDate&&O(s.dueDate,"dd/MM/yyyy");return e.jsxs(xe,{sx:{"&:last-child td, &:last-child th":{border:0}},...n,children:[e.jsx(f,{width:"25%",children:e.jsxs(u,{alignItems:"center",direction:"row",spacing:2,component:V,href:E.dashboard.invoices.details,sx:{display:"inline-flex",textDecoration:"none",whiteSpace:"nowrap"},children:[e.jsx(S,{sx:{height:42,width:42},children:ue(s.customer.name)}),e.jsxs("div",{children:[e.jsx(i,{color:"text.primary",variant:"subtitle2",children:s.number}),e.jsx(i,{color:"text.secondary",variant:"body2",children:s.customer.name})]})]})}),e.jsx(f,{children:e.jsxs(i,{variant:"subtitle2",children:[s.currency,p]})}),e.jsxs(f,{children:[e.jsx(i,{variant:"subtitle2",children:"Issued"}),e.jsx(i,{color:"text.secondary",variant:"body2",children:r})]}),e.jsxs(f,{children:[e.jsx(i,{variant:"subtitle2",children:"Due"}),e.jsx(i,{color:"text.secondary",variant:"body2",children:h})]}),e.jsx(f,{align:"right",children:e.jsx(pe,{color:l,children:s.status})}),e.jsx(f,{align:"right",children:e.jsx(H,{component:V,href:E.dashboard.invoices.details,children:e.jsx(y,{children:e.jsx(he,{})})})})]})};F.propTypes={invoice:d.object.isRequired};const _=t=>{const{group:s=!1,items:n=[],count:l=0,onPageChange:p=()=>{},onRowsPerPageChange:r,page:h=0,rowsPerPage:j=0}=t;let m;if(s){const g=ye(n),v=Object.keys(g);m=e.jsx(u,{spacing:6,children:v.map(x=>{const w=x.charAt(0).toUpperCase()+x.slice(1),D=g[x].length,k=g[x],L=k.length>0;return e.jsxs(u,{spacing:2,children:[e.jsxs(i,{color:"text.secondary",variant:"h6",children:[w," (",D,")"]}),L&&e.jsx(C,{children:e.jsx(N,{children:e.jsx(U,{sx:{minWidth:600},children:e.jsx($,{children:k.map(b=>e.jsx(F,{invoice:b},b.id))})})})})]},w)})})}else m=e.jsx(C,{children:e.jsx(U,{children:e.jsx($,{children:n.map(g=>e.jsx(F,{invoice:g},g.id))})})});return e.jsxs(u,{spacing:4,children:[m,e.jsx(ge,{component:"div",count:l,onPageChange:p,onRowsPerPageChange:r,page:h,rowsPerPage:j,rowsPerPageOptions:[5,10,25]})]})};_.propTypes={count:d.number,group:d.bool,items:d.array,onPageChange:d.func,onRowsPerPageChange:d.func,page:d.number,rowsPerPage:d.number};const ke=()=>{const[t,s]=a.useState({filters:{customers:[],endDate:void 0,query:"",startDate:void 0},page:0,rowsPerPage:5}),n=a.useCallback(r=>{s(h=>({...h,filters:r,page:0}))},[]),l=a.useCallback((r,h)=>{s(j=>({...j,page:h}))},[]),p=a.useCallback(r=>{s(h=>({...h,rowsPerPage:parseInt(r.target.value,10)}))},[]);return{handleFiltersChange:n,handlePageChange:l,handleRowsPerPageChange:p,state:t}},Pe=t=>{const s=ne(),[n,l]=a.useState({invoices:[],invoicesCount:0}),p=a.useCallback(async()=>{try{const r=await te.getInvoices(t);s()&&l({invoices:r.data,invoicesCount:r.count})}catch(r){console.error(r)}},[t,s]);return a.useEffect(()=>{p()},[t]),{...n}},ns=()=>{const t=a.useRef(null),s=z(x=>x.breakpoints.up("lg")),n=ke(),l=Pe(n.state),[p,r]=a.useState(!0),[h,j]=a.useState(s);ie();const m=a.useCallback(x=>{r(x.target.checked)},[]),g=a.useCallback(()=>{j(x=>!x)},[]),v=a.useCallback(()=>{j(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"Dashboard: Invoice List"}),e.jsx(se,{}),e.jsx(M,{component:"main",sx:{display:"flex",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:e.jsxs(M,{ref:t,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[e.jsx(Q,{container:t.current,filters:n.state.filters,group:p,onFiltersChange:n.handleFiltersChange,onClose:v,onGroupChange:m,open:h}),e.jsx(me,{open:h,children:e.jsxs(u,{spacing:4,children:[e.jsxs(u,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[e.jsx("div",{children:e.jsx(i,{variant:"h4",children:"Invoices"})}),e.jsxs(u,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(W,{color:"inherit",startIcon:e.jsx(y,{children:e.jsx(je,{})}),onClick:g,children:"Filters"}),e.jsx(W,{startIcon:e.jsx(y,{children:e.jsx(re,{})}),variant:"contained",children:"New"})]})]}),e.jsx(Ce,{}),e.jsx(_,{count:l.invoicesCount,group:p,items:l.invoices,onPageChange:n.handlePageChange,onRowsPerPageChange:n.handleRowsPerPageChange,page:n.state.page,rowsPerPage:n.state.rowsPerPage})]})})]})})]})};export{ns as default};
