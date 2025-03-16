"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>Z});var L=m(467),l=m(8476),I=m(909),y=m(4920),R=m(4379);m(8438);const P=new WeakMap,T=(e,t,s,o=0,r=!1)=>{P.has(e)!==s&&(s?k(e,t,o,r):G(e,t))},k=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),P.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=P.get(e);s&&(P.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",p=(e,t,s)=>{const o=e[N];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},F=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&p(t,0,s)},{once:!0})};let M=0;const B="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,i,a=!1)=>{const v=n&&(void 0===i||i.mode===R.a.None);let D=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==D?W(e,t,s,o,S.detail.keyboardHeight,v,a,u,!1):D=!0},c=()=>{D=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)},h=function(){var S=(0,L.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(W(e,t,s,o,r,v,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},W=function(){var e=(0,L.A)(function*(t,s,o,r,n,i,a=!1,v=0,D=!0){if(!o&&!r)return;const u=((e,t,s,o)=>{var r;return((e,t,s,o)=>{const r=e.top,n=e.bottom,i=t.top,v=i+15,u=Math.min(t.bottom,o-s)-50-n,f=v-r,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,r-i),A=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,A)),scrollPadding:s,inputSafeY:4-(r-v)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,v);if(o&&Math.abs(u.scrollAmount)<4)return x(s),void(i&&null!==o&&(p(o,M),F(s,o,()=>M=0)));if(T(t,s,!0,u.inputSafeY,a),x(s),(0,y.r)(()=>t.click()),i&&o&&(M=u.scrollPadding,p(o,M)),typeof window<"u"){let f;const c=function(){var S=(0,L.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),o&&(yield(0,I.c)(o,0,u.scrollAmount,u.scrollDuration)),T(t,s,!1,u.inputSafeY),x(s),i&&F(s,o,()=>M=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(o){const S=yield(0,I.g)(o);if(D&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(s,o,r,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,L.A)(function*(t,s){if(void 0===l.d)return;const o="ios"===s,r="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",o),v=t.getBoolean("inputBlurring",!1),D=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var _=(0,L.A)(function*(d){yield new Promise(b=>(0,y.c)(d,b));const K=d.shadowRoot||d,g=K.querySelector("input")||K.querySelector("textarea"),w=(0,I.f)(d),j=w?null:d.closest("ion-footer");if(g){if(w&&a&&!f.has(d)){const b=((e,t,s)=>{if(!s||!t)return()=>{};const o=a=>{(e=>e===e.getRootNode().activeElement)(t)&&T(e,t,a)},r=()=>T(e,t,!1),n=()=>o(!0),i=()=>o(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",i),t.addEventListener("blur",r),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",r)}})(d,g,w);f.set(d,b)}if("date"!==g.type&&"datetime-local"!==g.type&&(w||j)&&i&&!c.has(d)){const b=V(d,g,w,j,n,D,h,r);c.set(d,b)}}});return function(K){return _.apply(this,arguments)}}();v&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const v=i.target;v!==a&&(v.matches(C)||v.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const _ of u)S(_);l.d.addEventListener("ionInputDidLoad",_=>{S(_.detail)}),l.d.addEventListener("ionInputDidUnload",_=>{(_=>{if(a){const d=f.get(_);d&&d(),f.delete(_)}if(i){const d=c.get(_);d&&d(),c.delete(_)}})(_.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);