"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(C,p,l)=>{l.d(p,{c:()=>d});var t=l(1308),e=l(7864),g=l(1898);const d=(c,o)=>{let s,n;const i=(m,_,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(m,_);w&&o(w)?w!==s&&(u(),a(w,f)):u()},a=(m,_)=>{s=m,n||(n=s);const f=s;(0,t.c)(()=>f.classList.add("ion-activated")),_()},u=(m=!1)=>{if(!s)return;const _=s;(0,t.c)(()=>_.classList.remove("ion-activated")),m&&n!==s&&s.click(),s=void 0};return(0,g.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:m=>i(m.currentX,m.currentY,e.a),onMove:m=>i(m.currentX,m.currentY,e.b),onEnd:()=>{u(!0),(0,e.h)(),n=void 0}})}},2225:(C,p,l)=>{l.d(p,{g:()=>t});const t=(o,s,n,i,a)=>g(o[1],s[1],n[1],i[1],a).map(u=>e(o[0],s[0],n[0],i[0],u)),e=(o,s,n,i,a)=>a*(3*s*Math.pow(a-1,2)+a*(-3*n*a+3*n+i*a))-o*Math.pow(a-1,3),g=(o,s,n,i,a)=>c((i-=a)-3*(n-=a)+3*(s-=a)-(o-=a),3*n-6*s+3*o,3*s-3*o,o).filter(m=>m>=0&&m<=1),c=(o,s,n,i)=>{if(0===o)return((o,s,n)=>{const i=s*s-4*o*n;return i<0?[]:[(-s+Math.sqrt(i))/(2*o),(-s-Math.sqrt(i))/(2*o)]})(s,n,i);const a=(3*(n/=o)-(s/=o)*s)/3,u=(2*s*s*s-9*s*n+27*(i/=o))/27;if(0===a)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-a),-Math.sqrt(-a)];const m=Math.pow(u/2,2)+Math.pow(a/3,3);if(0===m)return[Math.pow(u/2,.5)-s/3];if(m>0)return[Math.pow(-u/2+Math.sqrt(m),1/3)-Math.pow(u/2+Math.sqrt(m),1/3)-s/3];const _=Math.sqrt(Math.pow(-a/3,3)),f=Math.acos(-u/(2*Math.sqrt(Math.pow(-a/3,3)))),w=2*Math.pow(_,1/3);return[w*Math.cos(f/3)-s/3,w*Math.cos((f+2*Math.PI)/3)-s/3,w*Math.cos((f+4*Math.PI)/3)-s/3]}},5062:(C,p,l)=>{l.d(p,{i:()=>t});const t=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(C,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>d});const t="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=c=>{let o=[],s=!0;const n=c?c.shadowRoot:document,i=c||document.body,a=M=>{o.forEach(h=>h.classList.remove(t)),M.forEach(h=>h.classList.add(t)),o=M},u=()=>{s=!1,a([])},m=M=>{s=g.includes(M.key),s||a([])},_=M=>{if(s&&void 0!==M.composedPath){const h=M.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));a(h)}},f=()=>{n.activeElement===i&&a([])};return n.addEventListener("keydown",m),n.addEventListener("focusin",_),n.addEventListener("focusout",f),n.addEventListener("touchstart",u),n.addEventListener("mousedown",u),{destroy:()=>{n.removeEventListener("keydown",m),n.removeEventListener("focusin",_),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",u),n.removeEventListener("mousedown",u)},setFocus:a}}},7626:(C,p,l)=>{l.d(p,{C:()=>c,a:()=>g,d:()=>d});var t=l(5861),e=l(5730);const g=function(){var o=(0,t.Z)(function*(s,n,i,a,u,m){var _;if(s)return s.attachViewToDom(n,i,u,a);if(!(m||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof i?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(i):i;return a&&a.forEach(w=>f.classList.add(w)),u&&Object.assign(f,u),n.appendChild(f),yield new Promise(w=>(0,e.c)(f,w)),f});return function(n,i,a,u,m,_){return o.apply(this,arguments)}}(),d=(o,s)=>{if(s){if(o)return o.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()},c=()=>{let o,s;return{attachViewToDom:function(){var a=(0,t.Z)(function*(u,m,_={},f=[]){var w,M;if(o=u,m){const v="string"==typeof m?null===(w=o.ownerDocument)||void 0===w?void 0:w.createElement(m):m;f.forEach(r=>v.classList.add(r)),Object.assign(v,_),o.appendChild(v),yield new Promise(r=>(0,e.c)(v,r))}else if(o.children.length>0&&!o.children[0].classList.contains("ion-delegate-host")){const r=null===(M=o.ownerDocument)||void 0===M?void 0:M.createElement("div");r.classList.add("ion-delegate-host"),f.forEach(E=>r.classList.add(E)),r.append(...o.children),o.appendChild(r)}const h=document.querySelector("ion-app")||document.body;return s=document.createComment("ionic teleport"),o.parentNode.insertBefore(s,o),h.appendChild(o),o});return function(m,_){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&s&&(s.parentNode.insertBefore(o,s),s.remove()),Promise.resolve())}}},7864:(C,p,l)=>{l.d(p,{a:()=>d,b:()=>c,c:()=>g,d:()=>s,h:()=>o});const t={getEngine(){var n;const i=window;return i.TapticEngine||(null===(n=i.Capacitor)||void 0===n?void 0:n.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var n;const i=window;return!!this.getEngine()&&("web"!==(null===(n=i.Capacitor)||void 0===n?void 0:n.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(n){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?n.style.toUpperCase():n.style;i.impact({style:a})},notification(n){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?n.style.toUpperCase():n.style;i.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},e=()=>t.available(),g=()=>{e()&&t.selection()},d=()=>{e()&&t.selectionStart()},c=()=>{e()&&t.selectionChanged()},o=()=>{e()&&t.selectionEnd()},s=n=>{e()&&t.impact(n)}},109:(C,p,l)=>{l.d(p,{a:()=>t,b:()=>m,c:()=>s,d:()=>_,e:()=>T,f:()=>o,g:()=>f,h:()=>g,i:()=>e,j:()=>r,k:()=>E,l:()=>n,m:()=>a,n:()=>w,o:()=>i,p:()=>c,q:()=>d,r:()=>v,s:()=>y,t:()=>u,u:()=>M,v:()=>h});const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(C,p,l)=>{l.d(p,{I:()=>c,a:()=>a,b:()=>o,c:()=>_,d:()=>w,f:()=>u,g:()=>i,i:()=>n,p:()=>f,r:()=>M,s:()=>m});var t=l(5861),e=l(5730),g=l(4147);const c="ion-content",o=".ion-content-scroll-host",s=`${c}, ${o}`,n=h=>"ION-CONTENT"===h.tagName,i=function(){var h=(0,t.Z)(function*(v){return n(v)?(yield new Promise(r=>(0,e.c)(v,r)),v.getScrollElement()):v});return function(r){return h.apply(this,arguments)}}(),a=h=>h.querySelector(o)||h.querySelector(s),u=h=>h.closest(s),m=(h,v)=>n(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),_=(h,v,r,E)=>n(h)?h.scrollByPoint(v,r,E):Promise.resolve(h.scrollBy({top:r,left:v,behavior:E>0?"smooth":"auto"})),f=h=>(0,g.a)(h,c),w=h=>{if(n(h)){const r=h.scrollY;return h.scrollY=!1,r}return h.style.setProperty("overflow","hidden"),!0},M=(h,v)=>{n(h)?h.scrollY=v:h.style.removeProperty("overflow")}},5234:(C,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>t,copyVisualViewport:()=>v,keyboardDidClose:()=>f,keyboardDidOpen:()=>m,keyboardDidResize:()=>_,resetKeyboardAssist:()=>s,setKeyboardClose:()=>u,setKeyboardOpen:()=>a,startKeyboardAssist:()=>n,trackViewportChanges:()=>h});const t="ionKeyboardDidShow",e="ionKeyboardDidHide";let d={},c={},o=!1;const s=()=>{d={},c={},o=!1},n=r=>{i(r),r.visualViewport&&(c=v(r.visualViewport),r.visualViewport.onresize=()=>{h(r),m()||_(r)?a(r):f(r)&&u(r)})},i=r=>{r.addEventListener("keyboardDidShow",E=>a(r,E)),r.addEventListener("keyboardDidHide",()=>u(r))},a=(r,E)=>{w(r,E),o=!0},u=r=>{M(r),o=!1},m=()=>!o&&d.width===c.width&&(d.height-c.height)*c.scale>150,_=r=>o&&!f(r),f=r=>o&&c.height===r.innerHeight,w=(r,E)=>{const T=new CustomEvent(t,{detail:{keyboardHeight:E?E.keyboardHeight:r.innerHeight-c.height}});r.dispatchEvent(T)},M=r=>{const E=new CustomEvent(e);r.dispatchEvent(E)},h=r=>{d=Object.assign({},c),c=v(r.visualViewport)},v=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},9852:(C,p,l)=>{l.d(p,{c:()=>e});var t=l(3457);const e=g=>{let d,c,o;const s=()=>{d=()=>{o=!0,g&&g(!0)},c=()=>{o=!1,g&&g(!1)},null==t.w||t.w.addEventListener("keyboardWillShow",d),null==t.w||t.w.addEventListener("keyboardWillHide",c)};return s(),{init:s,destroy:()=>{null==t.w||t.w.removeEventListener("keyboardWillShow",d),null==t.w||t.w.removeEventListener("keyboardWillHide",c),d=c=void 0},isKeyboardVisible:()=>o}}},7741:(C,p,l)=>{l.d(p,{S:()=>e});const e={bubbles:{dur:1e3,circles:9,fn:(g,d,c)=>{const o=g*d/c-g+"ms",s=2*Math.PI*d/c;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(g,d,c)=>{const o=d/c,s=g*o-g+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,d,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":g*d/c-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":g*d/c-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,d,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":g*d/c-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":g*d/c-g+"ms"}})}}},6659:(C,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>c});var t=l(5730),e=l(5062),g=l(1898);l(4349);const c=(o,s,n,i,a)=>{const u=o.ownerDocument.defaultView;let m=(0,e.i)(o);const f=r=>m?-r.deltaX:r.deltaX;return(0,g.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(m=(0,e.i)(o),(r=>{const{startX:y}=r;return m?y>=u.innerWidth-50:y<=50})(r)&&s()),onStart:n,onMove:r=>{const y=f(r)/u.innerWidth;i(y)},onEnd:r=>{const E=f(r),y=u.innerWidth,T=E/y,O=(r=>m?-r.velocityX:r.velocityX)(r),x=O>=0&&(O>.2||E>y/2),D=(x?1-T:T)*y;let b=0;if(D>5){const P=D/Math.abs(O);b=Math.min(P,540)}a(x,T<=0?.01:(0,t.l)(0,T,.9999),b)}})}},1083:(C,p,l)=>{l.d(p,{T:()=>n});var t=l(1571),e=l(5054),g=l(6895);function d(i,a){if(1&i&&(t.TgZ(0,"td",7),t._uU(1),t.qZA()),2&i){const u=t.oxw().$implicit;t.xp6(1),t.Oqu(u.time)}}function c(i,a){1&i&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2,"Gi\u1ea3i lao 15 ph\xfat"),t.qZA()())}function o(i,a){1&i&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2,"Ngh\u1ec9 tr\u01b0a 1 ti\u1ebfng"),t.qZA()())}function s(i,a){if(1&i&&(t.ynx(0),t.TgZ(1,"tr"),t.YNc(2,d,2,1,"td",1),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",2),t._UZ(7,"img",3),t.qZA()(),t.TgZ(8,"td",4),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13," - "),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td",4),t._uU(17),t.qZA(),t.TgZ(18,"td")(19,"div",2),t._UZ(20,"img",5),t.qZA()()(),t.YNc(21,c,3,0,"tr",6),t.YNc(22,o,3,0,"tr",6),t.BQk()),2&i){const u=a.$implicit,m=a.index,_=t.oxw();t.xp6(1),t.ekj("border-bottom",(m+1)%4!=0),t.xp6(1),t.Q6J("ngIf",(m+1)%4==1),t.xp6(2),t.Oqu(u.field),t.xp6(3),t.Q6J("src",_.commonFunctions.getTeamImageStyle(u.teamA,_.displayLogo),t.LSH),t.xp6(2),t.Oqu(u.teamA),t.xp6(2),t.Oqu(u.resultA),t.xp6(4),t.Oqu(u.resultB),t.xp6(2),t.Oqu(u.teamB),t.xp6(3),t.Q6J("src",_.commonFunctions.getTeamImageStyle(u.teamB,_.displayLogo),t.LSH),t.xp6(1),t.Q6J("ngIf",(m+1)%4==0&&m+1!==_.divisions.length),t.xp6(1),t.Q6J("ngIf",m+1===_.divisions.length)}}let n=(()=>{class i{constructor(u){this.commonFunctions=u,this.divisions=[],this.displayLogo=!1,this.message="M\xe0u \xe1o"}ngOnInit(){this.message=this.displayLogo?"Logo":"M\xe0u \xe1o"}}return i.\u0275fac=function(u){return new(u||i)(t.Y36(e.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-round-robin"]],inputs:{divisions:"divisions",displayLogo:"displayLogo"},decls:18,vars:1,consts:[[4,"ngFor","ngForOf"],["rowspan","4",4,"ngIf"],[1,"team-info"],["alt","Team A",1,"team-image",3,"src"],[1,"team-name"],["alt","Team B",1,"team-image",3,"src"],["class","spacer-row",4,"ngIf"],["rowspan","4"],[1,"spacer-row"],["colspan","9"]],template:function(u,m){1&u&&(t.TgZ(0,"table")(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Th\u1eddi gian"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"S\xe2n"),t.qZA(),t._UZ(7,"th"),t.TgZ(8,"th"),t._uU(9,"T\xean \u0111\u1ed9i"),t.qZA(),t._UZ(10,"th")(11,"th")(12,"th"),t.TgZ(13,"th"),t._uU(14,"T\xean \u0111\u1ed9i"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,s,23,12,"ng-container",0),t.qZA()()),2&u&&(t.xp6(17),t.Q6J("ngForOf",m.divisions))},dependencies:[g.sg,g.O5],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px;text-align:center;font-size:13px;border-bottom:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2}td[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]{width:50px;text-align:center;border:none;background-color:#f2f2f2}input[type=number][_ngcontent-%COMP%]:focus{outline:none;background-color:#eaeaea}.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:none;background-color:#adff2f;height:20px;font-weight:700}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.team-info[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:5px}.team-name[_ngcontent-%COMP%]{font-weight:700;margin-left:5px}"]}),i})()},1085:(C,p,l)=>{l.d(p,{H:()=>g});var t=l(1571),e=l(8058);let g=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-toolbar-header"]],decls:4,vars:0,consts:[[1,"title"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),t._uU(3," Montreal Super Cup (C\xfap H\u1ed3 G\u01b0\u01a1m) 2023 "),t.qZA()()())},dependencies:[e.Gu,e.wd,e.sr],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:small;font-weight:700}.logo-avatar[_ngcontent-%COMP%]{width:80px;height:80px}"]}),d})()},5054:(C,p,l)=>{l.d(p,{y:()=>c});var t=l(4973),e=l(5880),g=l(1571),d=l(8058);let c=(()=>{class o{constructor(n){this.menuCtrl=n}getTeamImageStyle(n,i=!1){let a;switch(n){case t.p.Stechco1:a=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.StechcoLogo}`);break;case t.p.ASVMU:a=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.VMULogo}`);break;case t.p.Stechco2:a=`${e.m.ImagesPath}`+(i?`${e.m.RedTeam}`:`${e.m.StechcoLogo}`);break;case t.p.FC3Mien:a=`${e.m.ImagesPath}`+(i?`${e.m.RedTeam}`:`${e.m.FC3MienLogo}`);break;case t.p.U45FC:a=`${e.m.ImagesPath}`+(i?`${e.m.RedTeam}`:`${e.m.U45FCLogo}`);break;case t.p.VMU:a=`${e.m.ImagesPath}`+(i?`${e.m.PinkTeam}`:`${e.m.VMULogo}`);break;case t.p.RBJunior:a=`${e.m.ImagesPath}`+(i?`${e.m.OrangeTeam}`:`${e.m.RBJuniorLogo}`);break;case t.p.BFC:a=`${e.m.ImagesPath}`+(i?`${e.m.YellowTeam}`:`${e.m.BFCLogo}`);break;default:a=`${e.m.ImagesPath}`+(i?`${e.m.WhiteTeam}`:`${e.m.CupLogo}`)}return a}enableMenuSwipe(){this.menuCtrl.swipeGesture(!0,"menu-content"),this.menuCtrl.enable(!0,"menu-content")}}return o.\u0275fac=function(n){return new(n||o)(g.LFG(d._q))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6354:(C,p,l)=>{l.d(p,{I:()=>t});let t=(()=>{class e{}return e.Field1="S\xe2n 1",e.Field2="S\xe2n 2",e.Field3="S\xe2n 3",e.Field4="S\xe2n 4",e})()},5880:(C,p,l)=>{l.d(p,{m:()=>t});let t=(()=>{class e{}return e.ImagesPath="/MontrealSuperCup2023/assets/images/",e.VMULogo="VMU.jpg",e.StechcoLogo="Stechco.png",e.FC3MienLogo="3MienFC.jpg",e.U45FCLogo="U45FC.jpg",e.BFCLogo="BFC.JPG",e.RBJuniorLogo="RBJunior.JPG",e.CupLogo="Logo.png",e.RedTeam="RedTeam.jpg",e.PinkTeam="PinkTeam.jpg",e.OrangeTeam="OrangeTeam.jpg",e.YellowTeam="YellowTeam.jpg",e.WhiteTeam="WhiteTeam.jpg",e.BlueTeam="BlueTeam.jpg",e})()},4973:(C,p,l)=>{l.d(p,{p:()=>t});let t=(()=>{class e{}return e.VMU="VMU",e.ASVMU="AS-VMU",e.Stechco1="Stechco1",e.Stechco2="Stechco2",e.RBJunior="RB Junior",e.BFC="BFC",e.FC3Mien="3 Mien FC",e.U45FC="U45 FC",e})()}}]);