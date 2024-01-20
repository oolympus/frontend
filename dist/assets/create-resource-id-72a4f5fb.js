const o=()=>{const r=new Uint8Array(12);return window.crypto.getRandomValues(r),Array.from(r,t=>t.toString(16).padStart(2,"0")).join("")};export{o as c};
