"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[964],{964:(O,d,a)=>{a.r(d),a.d(d,{ion_ripple_effect:()=>u});var _=a(467),n=a(4261),b=a(9483);const u=class{constructor(t){(0,n.r)(this,t),this.type="bounded"}addRipple(t,g){var e=this;return(0,_.A)(function*(){return new Promise(k=>{(0,n.e)(()=>{const r=e.el.getBoundingClientRect(),o=r.width,s=r.height,A=Math.sqrt(o*o+s*s),p=Math.max(s,o),M=e.unbounded?p:A+v,c=Math.floor(p*w),E=M/c;let m=t-r.left,f=g-r.top;e.unbounded&&(m=.5*o,f=.5*s);const D=m-.5*c,P=f-.5*c,I=.5*o-m,C=.5*s-f;(0,n.w)(()=>{const l=document.createElement("div");l.classList.add("ripple-effect");const i=l.style;i.top=P+"px",i.left=D+"px",i.width=i.height=c+"px",i.setProperty("--final-scale",`${E}`),i.setProperty("--translate-end",`${I}px, ${C}px`),(e.el.shadowRoot||e.el).appendChild(l),setTimeout(()=>{k(()=>{y(l)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,b.b)(this);return(0,n.h)(n.f,{key:"7ae559bda5d2c1856a45bfa150c2cb4f83373f8e",role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,n.i)(this)}},y=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},v=10,w=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);