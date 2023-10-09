import{n as xe,j as p,c as J}from"./index.d9411726.js";import{r as o,m as w}from"./index.bdf0bb5c.js";import{c as Oe,d as O,C as pe,r as Be,g as Z,v as ye}from"./global.a01218b9.js";import{s as H,e as De,o as P,D as G,y as A,T as He,c as Ae,d as Ne,l as oe,X as K,S as ue,u as L,I as ae,a as Je,b as ee,j as te,t as Me}from"./keyboard.722baef6.js";import{t as Ge,h as qe,T as ze,c as ie,p as ce,a as $e,O as re,M as Y,N as we,f as je}from"./use-is-mounted.6bfee776.js";import{r as Ze}from"./index.1c0c2c01.js";function de(){let e=[],t={addEventListener(r,l,d,a){return r.addEventListener(l,d,a),t.add(()=>r.removeEventListener(l,d,a))},requestAnimationFrame(...r){let l=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(l))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let l=setTimeout(...r);return t.add(()=>clearTimeout(l))},microTask(...r){let l={current:!0};return Ge(()=>{l.current&&r[0]()}),t.add(()=>{l.current=!1})},style(r,l,d){let a=r.style.getPropertyValue(l);return Object.assign(r.style,{[l]:d}),this.add(()=>{Object.assign(r.style,{[l]:a})})},group(r){let l=de();return r(l),this.add(()=>l.dispose())},add(r){return e.push(r),()=>{let l=e.indexOf(r);if(l>=0)for(let d of e.splice(l,1))d()}},dispose(){for(let r of e.splice(0))r()}};return t}function Ke(){let[e]=o.useState(de);return o.useEffect(()=>()=>e.dispose(),[e]),e}function fe(e,t,r){let l=H(t);o.useEffect(()=>{function d(a){l.current(a)}return document.addEventListener(e,d,r),()=>document.removeEventListener(e,d,r)},[e,r])}function Ue(e,t,r){let l=H(t);o.useEffect(()=>{function d(a){l.current(a)}return window.addEventListener(e,d,r),()=>window.removeEventListener(e,d,r)},[e,r])}function et(e,t,r=!0){let l=o.useRef(!1);o.useEffect(()=>{requestAnimationFrame(()=>{l.current=r})},[r]);function d(n,s){if(!l.current||n.defaultPrevented)return;let u=s(n);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let i=function c(v){return typeof v=="function"?c(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e);for(let c of i){if(c===null)continue;let v=c instanceof HTMLElement?c:c.current;if(v!=null&&v.contains(u)||n.composed&&n.composedPath().includes(v))return}return!qe(u,ze.Loose)&&u.tabIndex!==-1&&n.preventDefault(),t(n,u)}let a=o.useRef(null);fe("pointerdown",n=>{var s,u;l.current&&(a.current=((u=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:u[0])||n.target)},!0),fe("mousedown",n=>{var s,u;l.current&&(a.current=((u=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:u[0])||n.target)},!0),fe("click",n=>{a.current&&(d(n,()=>a.current),a.current=null)},!0),fe("touchend",n=>d(n,()=>n.target instanceof HTMLElement?n.target:null),!0),Ue("blur",n=>d(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function se(...e){return o.useMemo(()=>De(...e),[...e])}var z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(z||{});function _e(){let e=o.useRef(0);return Ue("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function tt(e,t,r,l){let d=H(r);o.useEffect(()=>{e=e??window;function a(n){d.current(n)}return e.addEventListener(t,a,l),()=>e.removeEventListener(t,a,l)},[e,t,l])}function rt(e){let t=P(e),r=o.useRef(!1);o.useEffect(()=>(r.current=!1,()=>{r.current=!0,Ge(()=>{r.current&&t()})}),[t])}let nt=o.createContext(!1);function lt(){return o.useContext(nt)}function at(e){let t=lt(),r=o.useContext(We),l=se(e),[d,a]=o.useState(()=>{if(!t&&r!==null||Ae.isServer)return null;let n=l?.getElementById("headlessui-portal-root");if(n)return n;if(l===null)return null;let s=l.createElement("div");return s.setAttribute("id","headlessui-portal-root"),l.body.appendChild(s)});return o.useEffect(()=>{d!==null&&(l!=null&&l.body.contains(d)||l==null||l.body.appendChild(d))},[d,l]),o.useEffect(()=>{t||r!==null&&a(r.current)},[r,a,t]),d}let ot=o.Fragment;function st(e,t){let r=e,l=o.useRef(null),d=A(He(c=>{l.current=c}),t),a=se(l),n=at(l),[s]=o.useState(()=>{var c;return Ae.isServer?null:(c=a?.createElement("div"))!=null?c:null}),u=o.useContext(Se),i=Ne();return oe(()=>{!n||!s||n.contains(s)||(s.setAttribute("data-headlessui-portal",""),n.appendChild(s))},[n,s]),oe(()=>{if(s&&u)return u.register(s)},[u,s]),rt(()=>{var c;!n||!s||(s instanceof Node&&n.contains(s)&&n.removeChild(s),n.childNodes.length<=0&&((c=n.parentElement)==null||c.removeChild(n)))}),i?!n||!s?null:Ze.createPortal(K({ourProps:{ref:d},theirProps:r,defaultTag:ot,name:"Portal"}),s):null}let ut=o.Fragment,We=o.createContext(null);function it(e,t){let{target:r,...l}=e,d={ref:A(t)};return w.createElement(We.Provider,{value:r},K({ourProps:d,theirProps:l,defaultTag:ut,name:"Popover.Group"}))}let Se=o.createContext(null);function ct(){let e=o.useContext(Se),t=o.useRef([]),r=P(a=>(t.current.push(a),e&&e.register(a),()=>l(a))),l=P(a=>{let n=t.current.indexOf(a);n!==-1&&t.current.splice(n,1),e&&e.unregister(a)}),d=o.useMemo(()=>({register:r,unregister:l,portals:t}),[r,l,t]);return[t,o.useMemo(()=>function({children:a}){return w.createElement(Se.Provider,{value:d},a)},[d])]}let dt=G(st),ft=G(it);Object.assign(dt,{Group:ft});function pt({defaultContainers:e=[],portals:t,mainTreeNodeRef:r}={}){var l;let d=o.useRef((l=r?.current)!=null?l:null),a=se(d),n=P(()=>{var s;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"current"in i&&i.current instanceof HTMLElement&&u.push(i.current));if(t!=null&&t.current)for(let i of t.current)u.push(i);for(let i of(s=a?.querySelectorAll("html > *, body > *"))!=null?s:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(d.current)||u.some(c=>i.contains(c))||u.push(i));return u});return{resolveContainers:n,contains:P(s=>n().some(u=>u.contains(s))),mainTreeNodeRef:d,MainTreeNode:o.useMemo(()=>function(){return r!=null?null:w.createElement(ie,{features:ce.Hidden,ref:d})},[d,r])}}function mt(){let e=o.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:o.useMemo(()=>function(){return w.createElement(ie,{features:ce.Hidden,ref:e})},[e])}}var vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vt||{}),ht=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(ht||{});let gt={0:e=>{let t={...e,popoverState:L(e.popoverState,{0:1,1:0})};return t.popoverState===0&&(t.__demoMode=!1),t},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Ce=o.createContext(null);Ce.displayName="PopoverContext";function me(e){let t=o.useContext(Ce);if(t===null){let r=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,me),r}return t}let Fe=o.createContext(null);Fe.displayName="PopoverAPIContext";function Ie(e){let t=o.useContext(Fe);if(t===null){let r=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ie),r}return t}let ke=o.createContext(null);ke.displayName="PopoverGroupContext";function Ve(){return o.useContext(ke)}let ve=o.createContext(null);ve.displayName="PopoverPanelContext";function bt(){return o.useContext(ve)}function xt(e,t){return L(t.type,gt,e,t)}let yt="div";function Et(e,t){var r;let{__demoMode:l=!1,...d}=e,a=o.useRef(null),n=A(t,He(E=>{a.current=E})),s=o.useRef([]),u=o.useReducer(xt,{__demoMode:l,popoverState:l?0:1,buttons:s,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:o.createRef(),afterPanelSentinel:o.createRef()}),[{popoverState:i,button:c,buttonId:v,panel:m,panelId:x,beforePanelSentinel:g,afterPanelSentinel:b},f]=u,S=se((r=a.current)!=null?r:c),C=o.useMemo(()=>{if(!c||!m)return!1;for(let le of document.querySelectorAll("body > *"))if(Number(le?.contains(c))^Number(le?.contains(m)))return!0;let E=$e(),k=E.indexOf(c),ne=(k+E.length-1)%E.length,X=(k+1)%E.length,q=E[ne],U=E[X];return!m.contains(q)&&!m.contains(U)},[c,m]),T=H(v),F=H(x),B=o.useMemo(()=>({buttonId:T,panelId:F,close:()=>f({type:1})}),[T,F,f]),I=Ve(),y=I?.registerPopover,M=P(()=>{var E;return(E=I?.isFocusWithinPopoverGroup())!=null?E:S?.activeElement&&(c?.contains(S.activeElement)||m?.contains(S.activeElement))});o.useEffect(()=>y?.(B),[y,B]);let[N,R]=ct(),h=pt({mainTreeNodeRef:I?.mainTreeNodeRef,portals:N,defaultContainers:[c,m]});tt(S?.defaultView,"focus",E=>{var k,ne,X,q;E.target!==window&&E.target instanceof HTMLElement&&i===0&&(M()||c&&m&&(h.contains(E.target)||(ne=(k=g.current)==null?void 0:k.contains)!=null&&ne.call(k,E.target)||(q=(X=b.current)==null?void 0:X.contains)!=null&&q.call(X,E.target)||f({type:1})))},!0),et(h.resolveContainers,(E,k)=>{f({type:1}),qe(k,ze.Loose)||(E.preventDefault(),c?.focus())},i===0);let $=P(E=>{f({type:1});let k=(()=>E?E instanceof HTMLElement?E:"current"in E&&E.current instanceof HTMLElement?E.current:c:c)();k?.focus()}),j=o.useMemo(()=>({close:$,isPortalled:C}),[$,C]),D=o.useMemo(()=>({open:i===0,close:$}),[i,$]),Q={ref:n};return w.createElement(ve.Provider,{value:null},w.createElement(Ce.Provider,{value:u},w.createElement(Fe.Provider,{value:j},w.createElement(Oe,{value:L(i,{0:O.Open,1:O.Closed})},w.createElement(R,null,K({ourProps:Q,theirProps:d,slot:D,defaultTag:yt,name:"Popover"}),w.createElement(h.MainTreeNode,null))))))}let Pt="button";function wt(e,t){let r=ae(),{id:l=`headlessui-popover-button-${r}`,...d}=e,[a,n]=me("Popover.Button"),{isPortalled:s}=Ie("Popover.Button"),u=o.useRef(null),i=`headlessui-focus-sentinel-${ae()}`,c=Ve(),v=c?.closeOthers,m=bt()!==null;o.useEffect(()=>{if(!m)return n({type:3,buttonId:l}),()=>{n({type:3,buttonId:null})}},[m,l,n]);let[x]=o.useState(()=>Symbol()),g=A(u,t,m?null:h=>{if(h)a.buttons.current.push(x);else{let $=a.buttons.current.indexOf(x);$!==-1&&a.buttons.current.splice($,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),h&&n({type:2,button:h})}),b=A(u,t),f=se(u),S=P(h=>{var $,j,D;if(m){if(a.popoverState===1)return;switch(h.key){case ee.Space:case ee.Enter:h.preventDefault(),(j=($=h.target).click)==null||j.call($),n({type:1}),(D=a.button)==null||D.focus();break}}else switch(h.key){case ee.Space:case ee.Enter:h.preventDefault(),h.stopPropagation(),a.popoverState===1&&v?.(a.buttonId),n({type:0});break;case ee.Escape:if(a.popoverState!==0)return v?.(a.buttonId);if(!u.current||f!=null&&f.activeElement&&!u.current.contains(f.activeElement))return;h.preventDefault(),h.stopPropagation(),n({type:1});break}}),C=P(h=>{m||h.key===ee.Space&&h.preventDefault()}),T=P(h=>{var $,j;Be(h.currentTarget)||e.disabled||(m?(n({type:1}),($=a.button)==null||$.focus()):(h.preventDefault(),h.stopPropagation(),a.popoverState===1&&v?.(a.buttonId),n({type:0}),(j=a.button)==null||j.focus()))}),F=P(h=>{h.preventDefault(),h.stopPropagation()}),B=a.popoverState===0,I=o.useMemo(()=>({open:B}),[B]),y=Je(e,u),M=m?{ref:b,type:y,onKeyDown:S,onClick:T}:{ref:g,id:a.buttonId,type:y,"aria-expanded":a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:S,onKeyUp:C,onClick:T,onMouseDown:F},N=_e(),R=P(()=>{let h=a.panel;if(!h)return;function $(){L(N.current,{[z.Forwards]:()=>re(h,Y.First),[z.Backwards]:()=>re(h,Y.Last)})===we.Error&&re($e().filter(j=>j.dataset.headlessuiFocusGuard!=="true"),L(N.current,{[z.Forwards]:Y.Next,[z.Backwards]:Y.Previous}),{relativeTo:a.button})}$()});return w.createElement(w.Fragment,null,K({ourProps:M,theirProps:d,slot:I,defaultTag:Pt,name:"Popover.Button"}),B&&!m&&s&&w.createElement(ie,{id:i,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:R}))}let St="div",Tt=ue.RenderStrategy|ue.Static;function Nt(e,t){let r=ae(),{id:l=`headlessui-popover-overlay-${r}`,...d}=e,[{popoverState:a},n]=me("Popover.Overlay"),s=A(t),u=pe(),i=(()=>u!==null?(u&O.Open)===O.Open:a===0)(),c=P(m=>{if(Be(m.currentTarget))return m.preventDefault();n({type:1})}),v=o.useMemo(()=>({open:a===0}),[a]);return K({ourProps:{ref:s,id:l,"aria-hidden":!0,onClick:c},theirProps:d,slot:v,defaultTag:St,features:Tt,visible:i,name:"Popover.Overlay"})}let $t="div",jt=ue.RenderStrategy|ue.Static;function Ct(e,t){let r=ae(),{id:l=`headlessui-popover-panel-${r}`,focus:d=!1,...a}=e,[n,s]=me("Popover.Panel"),{close:u,isPortalled:i}=Ie("Popover.Panel"),c=`headlessui-focus-sentinel-before-${ae()}`,v=`headlessui-focus-sentinel-after-${ae()}`,m=o.useRef(null),x=A(m,t,y=>{s({type:4,panel:y})}),g=se(m);oe(()=>(s({type:5,panelId:l}),()=>{s({type:5,panelId:null})}),[l,s]);let b=pe(),f=(()=>b!==null?(b&O.Open)===O.Open:n.popoverState===0)(),S=P(y=>{var M;switch(y.key){case ee.Escape:if(n.popoverState!==0||!m.current||g!=null&&g.activeElement&&!m.current.contains(g.activeElement))return;y.preventDefault(),y.stopPropagation(),s({type:1}),(M=n.button)==null||M.focus();break}});o.useEffect(()=>{var y;e.static||n.popoverState===1&&((y=e.unmount)==null||y)&&s({type:4,panel:null})},[n.popoverState,e.unmount,e.static,s]),o.useEffect(()=>{if(n.__demoMode||!d||n.popoverState!==0||!m.current)return;let y=g?.activeElement;m.current.contains(y)||re(m.current,Y.First)},[n.__demoMode,d,m,n.popoverState]);let C=o.useMemo(()=>({open:n.popoverState===0,close:u}),[n,u]),T={ref:x,id:l,onKeyDown:S,onBlur:d&&n.popoverState===0?y=>{var M,N,R,h,$;let j=y.relatedTarget;j&&m.current&&((M=m.current)!=null&&M.contains(j)||(s({type:1}),((R=(N=n.beforePanelSentinel.current)==null?void 0:N.contains)!=null&&R.call(N,j)||($=(h=n.afterPanelSentinel.current)==null?void 0:h.contains)!=null&&$.call(h,j))&&j.focus({preventScroll:!0})))}:void 0,tabIndex:-1},F=_e(),B=P(()=>{let y=m.current;if(!y)return;function M(){L(F.current,{[z.Forwards]:()=>{var N;re(y,Y.First)===we.Error&&((N=n.afterPanelSentinel.current)==null||N.focus())},[z.Backwards]:()=>{var N;(N=n.button)==null||N.focus({preventScroll:!0})}})}M()}),I=P(()=>{let y=m.current;if(!y)return;function M(){L(F.current,{[z.Forwards]:()=>{var N;if(!n.button)return;let R=$e(),h=R.indexOf(n.button),$=R.slice(0,h+1),j=[...R.slice(h+1),...$];for(let D of j.slice())if(D.dataset.headlessuiFocusGuard==="true"||(N=n.panel)!=null&&N.contains(D)){let Q=j.indexOf(D);Q!==-1&&j.splice(Q,1)}re(j,Y.First,{sorted:!1})},[z.Backwards]:()=>{var N;re(y,Y.Previous)===we.Error&&((N=n.button)==null||N.focus())}})}M()});return w.createElement(ve.Provider,{value:l},f&&i&&w.createElement(ie,{id:c,ref:n.beforePanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),K({ourProps:T,theirProps:a,slot:C,defaultTag:$t,features:jt,visible:f,name:"Popover.Panel"}),f&&i&&w.createElement(ie,{id:v,ref:n.afterPanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I}))}let Ft="div";function It(e,t){let r=o.useRef(null),l=A(r,t),[d,a]=o.useState([]),n=mt(),s=P(b=>{a(f=>{let S=f.indexOf(b);if(S!==-1){let C=f.slice();return C.splice(S,1),C}return f})}),u=P(b=>(a(f=>[...f,b]),()=>s(b))),i=P(()=>{var b;let f=De(r);if(!f)return!1;let S=f.activeElement;return(b=r.current)!=null&&b.contains(S)?!0:d.some(C=>{var T,F;return((T=f.getElementById(C.buttonId.current))==null?void 0:T.contains(S))||((F=f.getElementById(C.panelId.current))==null?void 0:F.contains(S))})}),c=P(b=>{for(let f of d)f.buttonId.current!==b&&f.close()}),v=o.useMemo(()=>({registerPopover:u,unregisterPopover:s,isFocusWithinPopoverGroup:i,closeOthers:c,mainTreeNodeRef:n.mainTreeNodeRef}),[u,s,i,c,n.mainTreeNodeRef]),m=o.useMemo(()=>({}),[]),x=e,g={ref:l};return w.createElement(ke.Provider,{value:v},K({ourProps:g,theirProps:x,slot:m,defaultTag:Ft,name:"Popover.Group"}),w.createElement(n.MainTreeNode,null))}let kt=G(Et),Mt=G(wt),Rt=G(Nt),Lt=G(Ct),Ot=G(It),W=Object.assign(kt,{Button:Mt,Overlay:Rt,Panel:Lt,Group:Ot});function Bt(e=0){let[t,r]=o.useState(e),l=je(),d=o.useCallback(u=>{l.current&&r(i=>i|u)},[t,l]),a=o.useCallback(u=>!!(t&u),[t]),n=o.useCallback(u=>{l.current&&r(i=>i&~u)},[r,l]),s=o.useCallback(u=>{l.current&&r(i=>i^u)},[r]);return{flags:t,addFlag:d,hasFlag:a,removeFlag:n,toggleFlag:s}}function Dt(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function Pe(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ht(e,t){let r=de();if(!e)return r.dispose;let{transitionDuration:l,transitionDelay:d}=getComputedStyle(e),[a,n]=[l,d].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,v)=>v-c);return i}),s=a+n;if(s!==0){r.group(i=>{i.setTimeout(()=>{t(),i.dispose()},s),i.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&i.dispose()})});let u=r.addEventListener(e,"transitionend",i=>{i.target===i.currentTarget&&(t(),u())})}else t();return r.add(()=>t()),r.dispose}function At(e,t,r,l){let d=r?"enter":"leave",a=de(),n=l!==void 0?Dt(l):()=>{};d==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=L(d,{enter:()=>t.enter,leave:()=>t.leave}),u=L(d,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),i=L(d,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Pe(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Ee(e,...t.base,...s,...i),a.nextFrame(()=>{Pe(e,...t.base,...s,...i),Ee(e,...t.base,...s,...u),Ht(e,()=>(Pe(e,...t.base,...s),Ee(e,...t.base,...t.entered),n()))}),a.dispose}function Gt({immediate:e,container:t,direction:r,classes:l,onStart:d,onStop:a}){let n=je(),s=Ke(),u=H(r);oe(()=>{e&&(u.current="enter")},[e]),oe(()=>{let i=de();s.add(i.dispose);let c=t.current;if(c&&u.current!=="idle"&&n.current)return i.dispose(),d.current(u.current),i.add(At(c,l.current,u.current==="enter",()=>{i.dispose(),a.current(u.current)})),i.dispose},[r])}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let he=o.createContext(null);he.displayName="TransitionContext";var qt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(qt||{});function zt(){let e=o.useContext(he);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Kt(){let e=o.useContext(ge);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ge=o.createContext(null);ge.displayName="NestingContext";function be(e){return"children"in e?be(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ye(e,t){let r=H(e),l=o.useRef([]),d=je(),a=Ke(),n=P((x,g=te.Hidden)=>{let b=l.current.findIndex(({el:f})=>f===x);b!==-1&&(L(g,{[te.Unmount](){l.current.splice(b,1)},[te.Hidden](){l.current[b].state="hidden"}}),a.microTask(()=>{var f;!be(l)&&d.current&&((f=r.current)==null||f.call(r))}))}),s=P(x=>{let g=l.current.find(({el:b})=>b===x);return g?g.state!=="visible"&&(g.state="visible"):l.current.push({el:x,state:"visible"}),()=>n(x,te.Unmount)}),u=o.useRef([]),i=o.useRef(Promise.resolve()),c=o.useRef({enter:[],leave:[],idle:[]}),v=P((x,g,b)=>{u.current.splice(0),t&&(t.chains.current[g]=t.chains.current[g].filter(([f])=>f!==x)),t?.chains.current[g].push([x,new Promise(f=>{u.current.push(f)})]),t?.chains.current[g].push([x,new Promise(f=>{Promise.all(c.current[g].map(([S,C])=>C)).then(()=>f())})]),g==="enter"?i.current=i.current.then(()=>t?.wait.current).then(()=>b(g)):b(g)}),m=P((x,g,b)=>{Promise.all(c.current[g].splice(0).map(([f,S])=>S)).then(()=>{var f;(f=u.current.shift())==null||f()}).then(()=>b(g))});return o.useMemo(()=>({children:l,register:s,unregister:n,onStart:v,onStop:m,wait:i,chains:c}),[s,n,l,v,m,c,i])}function Ut(){}let _t=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Re(e){var t;let r={};for(let l of _t)r[l]=(t=e[l])!=null?t:Ut;return r}function Wt(e){let t=o.useRef(Re(e));return o.useEffect(()=>{t.current=Re(e)},[e]),t}let Vt="div",Qe=ue.RenderStrategy;function Yt(e,t){var r,l;let{beforeEnter:d,afterEnter:a,beforeLeave:n,afterLeave:s,enter:u,enterFrom:i,enterTo:c,entered:v,leave:m,leaveFrom:x,leaveTo:g,...b}=e,f=o.useRef(null),S=A(f,t),C=(r=b.unmount)==null||r?te.Unmount:te.Hidden,{show:T,appear:F,initial:B}=zt(),[I,y]=o.useState(T?"visible":"hidden"),M=Kt(),{register:N,unregister:R}=M;o.useEffect(()=>N(f),[N,f]),o.useEffect(()=>{if(C===te.Hidden&&f.current){if(T&&I!=="visible"){y("visible");return}return L(I,{hidden:()=>R(f),visible:()=>N(f)})}},[I,f,N,R,T,C]);let h=H({base:V(b.className),enter:V(u),enterFrom:V(i),enterTo:V(c),entered:V(v),leave:V(m),leaveFrom:V(x),leaveTo:V(g)}),$=Wt({beforeEnter:d,afterEnter:a,beforeLeave:n,afterLeave:s}),j=Ne();o.useEffect(()=>{if(j&&I==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,I,j]);let D=B&&!F,Q=F&&T&&B,E=(()=>!j||D?"idle":T?"enter":"leave")(),k=Bt(0),ne=P(_=>L(_,{enter:()=>{k.addFlag(O.Opening),$.current.beforeEnter()},leave:()=>{k.addFlag(O.Closing),$.current.beforeLeave()},idle:()=>{}})),X=P(_=>L(_,{enter:()=>{k.removeFlag(O.Opening),$.current.afterEnter()},leave:()=>{k.removeFlag(O.Closing),$.current.afterLeave()},idle:()=>{}})),q=Ye(()=>{y("hidden"),R(f)},M);Gt({immediate:Q,container:f,classes:h,direction:E,onStart:H(_=>{q.onStart(f,_,ne)}),onStop:H(_=>{q.onStop(f,_,X),_==="leave"&&!be(q)&&(y("hidden"),R(f))})});let U=b,le={ref:S};return Q?U={...U,className:Me(b.className,...h.current.enter,...h.current.enterFrom)}:(U.className=Me(b.className,(l=f.current)==null?void 0:l.className),U.className===""&&delete U.className),w.createElement(ge.Provider,{value:q},w.createElement(Oe,{value:L(I,{visible:O.Open,hidden:O.Closed})|k.flags},K({ourProps:le,theirProps:U,defaultTag:Vt,features:Qe,visible:I==="visible",name:"Transition.Child"})))}function Qt(e,t){let{show:r,appear:l=!1,unmount:d=!0,...a}=e,n=o.useRef(null),s=A(n,t);Ne();let u=pe();if(r===void 0&&u!==null&&(r=(u&O.Open)===O.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[i,c]=o.useState(r?"visible":"hidden"),v=Ye(()=>{c("hidden")}),[m,x]=o.useState(!0),g=o.useRef([r]);oe(()=>{m!==!1&&g.current[g.current.length-1]!==r&&(g.current.push(r),x(!1))},[g,r]);let b=o.useMemo(()=>({show:r,appear:l,initial:m}),[r,l,m]);o.useEffect(()=>{if(r)c("visible");else if(!be(v))c("hidden");else{let T=n.current;if(!T)return;let F=T.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&c("hidden")}},[r,v]);let f={unmount:d},S=P(()=>{var T;m&&x(!1),(T=e.beforeEnter)==null||T.call(e)}),C=P(()=>{var T;m&&x(!1),(T=e.beforeLeave)==null||T.call(e)});return w.createElement(ge.Provider,{value:v},w.createElement(he.Provider,{value:b},K({ourProps:{...f,as:o.Fragment,children:w.createElement(Xe,{ref:s,...f,...a,beforeEnter:S,beforeLeave:C})},theirProps:{},defaultTag:o.Fragment,features:Qe,visible:i==="visible",name:"Transition"})))}function Xt(e,t){let r=o.useContext(he)!==null,l=pe()!==null;return w.createElement(w.Fragment,null,!r&&l?w.createElement(Te,{ref:t,...e}):w.createElement(Xe,{ref:t,...e}))}let Te=G(Qt),Xe=G(Yt),Jt=G(Xt),Le=Object.assign(Te,{Child:Jt,Root:Te});const ar=()=>{const e=xe(Z?.attributes?.header?.companyLogo),[t,r]=o.useState(100);o.useEffect(()=>{typeof window>"u"||window.addEventListener("scroll",()=>{window.scrollY>100?r(90):r(100)})});const l=o.useMemo(()=>Z?.attributes?.header?.headerMenuList?.map(()=>o.createRef())??[],[Z?.attributes?.header?.headerMenuList]);function d(a){l.filter(s=>s.current?.getAttribute("data-id")!==a).forEach(s=>{s.current?.getAttribute("data-open")==="true"&&s.current?.click()})}return p.jsx("div",{children:p.jsxs(W,{className:J("bg-[#191919] sticky top-0 z-40 shadow-lg backdrop-blur-md",t===90&&"opacity-90",t===100&&"opacity-100"),style:{boxShadow:"0px 100px 100px rgba(0, 0, 0, 0.08)"},children:[p.jsx("div",{className:"mx-auto container px-5 lg:px-10",children:p.jsxs("div",{className:"flex items-center justify-between py-6 lg:justify-start lg:space-x-10",children:[p.jsx("div",{className:"flex justify-start flex-1",children:p.jsx("a",{href:"/",children:p.jsx("img",{className:"h-5 lg:h-8 w-auto",src:e?.url,alt:e?.alternativeText})})}),p.jsx("div",{className:"-my-2 -mr-2 lg:hidden ",children:p.jsx(W.Button,{className:"flex"})}),p.jsx(W.Group,{as:"nav",className:"hidden space-x-10 lg:flex",children:Z?.attributes?.header?.headerMenuList?.map((a,n)=>p.jsx(W,{className:"relative",children:({open:s,close:u})=>p.jsxs(p.Fragment,{children:[p.jsx(W.Button,{className:J(s?"text-brand text-[#C29340]":"text-white","font-normal text-base outline-none tracking-[0.02em] uppercase flex items-center"),children:p.jsx("span",{children:a?.heading})}),p.jsx(Le,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:p.jsx(W.Panel,{className:J("absolute z-40 -ml-4 mt-3 w-screen  transform px-2 lg:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-[90%]",a?.headerMenuItem?.length===2&&" max-w-[597px]",a?.headerMenuItem?.length===1&&" max-w-md"),children:p.jsx("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:p.jsx("div",{className:J("relative lg:bg-white bg-[#191919]",a?.headerMenuItem?.length===2&&"grid grid-cols-2",a?.headerMenuItem?.length===1&&"grid grid-cols-1"),children:a?.headerMenuItem?.map((i,c)=>p.jsxs("div",{className:"grid gap-6 px-5 py-6 lg:gap-8 lg:p-8 content-start",children:[i?.subHeading!==null&&p.jsx("p",{className:"text-base font-semibold lg:text-darkGray text-lighterGray tracking-[0.02em]",children:i?.subHeading}),i?.links?.map((v,m)=>{const x=v?.linkImage?.data?xe(v?.linkImage):null;return p.jsxs("a",{href:v?.href,target:v?.target||"_blank",className:"-m-3 flex items-start rounded-lg p-3 hover:bg-light cursor-pointer",onClick:()=>{u()},children:[p.jsx("img",{src:x?.url,alt:x?.alternativeText,className:"h-6 w-6 flex-shrink-0","aria-hidden":"true"}),p.jsx("div",{className:"ml-4",children:p.jsx("p",{className:"text-base font-medium lg:text-darkGray text-white tracking-[0.02em] uppercase",children:v?.label})})]},m)})]},c))})})})})]})},n))}),p.jsx("div",{className:"ml-10 space-x-4 lg:block hidden",children:Z?.attributes?.header?.authButton?.map((a,n)=>p.jsx("a",{href:a?.isExternal?a?.href:`${a?.href}`,target:a?.target||"_self",className:J("uppercase font-normal border-none",a?.theme==="primary"&&"Button",a?.theme==="secondary"&&"OutlineButton"),children:a?.label},n))})]})}),p.jsx(Le,{as:o.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:p.jsx(W.Panel,{focus:!0,className:"absolute inset-x-0 top-0 origin-top-right transform transition lg:hidden min-h-screen bg-[#191919] z-40",children:({close:a})=>p.jsxs("div",{className:"min-h-screen flex flex-col pb-16 pt-6 px-5 space-y-5",children:[p.jsxs("div",{className:"flex-grow",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("a",{href:"/",children:p.jsx("img",{className:"h-5 lg:h-8 w-auto",src:e?.url,alt:e?.alternativeText})}),p.jsx(W.Button,{className:"Button bg-[#191919] text-white border border-white flex p-2",children:"cross"})]}),p.jsx("div",{className:"mt-6",children:p.jsx("div",{className:"grid gap-y-8",children:Z?.attributes?.header?.headerMenuList?.map((n,s)=>p.jsx(ye,{as:"div",children:({open:u,close:i})=>p.jsxs(p.Fragment,{children:[p.jsx(ye.Button,{className:J(u?"text-brand":"text-white","font-normal text-base tracking-[0.02em] uppercase flex items-center justify-between w-full"),ref:l[s],"data-id":s,"data-open":u,onClick:()=>d(s),children:p.jsx("span",{children:n?.heading})}),p.jsx(ye.Panel,{className:"pt-4 pb-2 text-sm text-gray-500",children:p.jsx("div",{className:"relative grid gap-6 bg-[#191919] lg:gap-8 ",children:n?.headerMenuItem?.map(c=>p.jsxs(p.Fragment,{children:[c?.subHeading!==null&&p.jsx("p",{className:"text-base font-semibold text-lighterGray",children:c?.subHeading}),c?.links?.map((v,m)=>{const x=v?.linkImage?.data?xe(v?.linkImage):null;return p.jsxs("a",{target:v?.target||"_self",href:v?.href,className:"-m-3 flex items-start rounded-lg p-3 hover:bg-lightGray cursor-pointer",onClick:()=>{a(),i()},children:[p.jsx("img",{src:x?.url,alt:x?.alternativeText,className:"h-6 w-6 flex-shrink-0","aria-hidden":"true"}),p.jsx("div",{className:"ml-4",children:p.jsx("p",{className:"text-base font-medium text-white",children:v?.label})})]},m)})]}))})})]})},s))})})]}),p.jsx("div",{className:"lg:hidden flex items-center justify-between gap-5",children:Z?.attributes?.header?.authButton?.map((n,s)=>p.jsx("a",{href:n?.isExternal?n?.href:`${n?.href}`,target:n?.target,className:J("uppercase font-normal border-none w-full text-center",n?.theme==="primary"&&"Button",n?.theme==="secondary"&&"OutlineButton"),children:n?.label},s))})]})})})]})})};export{ar as default};