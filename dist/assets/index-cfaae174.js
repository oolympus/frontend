import{I as A,J as Y,K as b,N as L,Q as f,V as S,X as $}from"./index-345a54fd.js";import{c as H}from"./index-674a8e98.js";var _=1e3*60,u=60*24,x=u*30,E=u*365;function q(d,v,e){var c,m,h;A(2,arguments);var w=$(),n=(c=(m=e==null?void 0:e.locale)!==null&&m!==void 0?m:w.locale)!==null&&c!==void 0?c:Y;if(!n.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var g=b(d,v);if(isNaN(g))throw new RangeError("Invalid time value");var o=L(H(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:g}),l,s;g>0?(l=f(v),s=f(d)):(l=f(d),s=f(v));var M=String((h=e==null?void 0:e.roundingMethod)!==null&&h!==void 0?h:"round"),a;if(M==="floor")a=Math.floor;else if(M==="ceil")a=Math.ceil;else if(M==="round")a=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var N=s.getTime()-l.getTime(),i=N/_,O=S(s)-S(l),t=(N-O)/_,I=e==null?void 0:e.unit,r;if(I?r=String(I):i<1?r="second":i<60?r="minute":i<u?r="hour":t<x?r="day":t<E?r="month":r="year",r==="second"){var T=a(N/1e3);return n.formatDistance("xSeconds",T,o)}else if(r==="minute"){var R=a(i);return n.formatDistance("xMinutes",R,o)}else if(r==="hour"){var z=a(i/60);return n.formatDistance("xHours",z,o)}else if(r==="day"){var U=a(t/u);return n.formatDistance("xDays",U,o)}else if(r==="month"){var D=a(t/x);return D===12&&I!=="month"?n.formatDistance("xYears",1,o):n.formatDistance("xMonths",D,o)}else if(r==="year"){var y=a(t/E);return n.formatDistance("xYears",y,o)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}export{q as f};
