"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1227],{1227:(n,r,a)=>{a.r(r),a.d(r,{ShareWeb:()=>t});var s=a(467),_=a(7464);class t extends _.E_{canShare(){return(0,s.A)(function*(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}})()}share(e){var i=this;return(0,s.A)(function*(){if(typeof navigator>"u"||!navigator.share)throw i.unavailable("Share API not available in this browser");return yield navigator.share({title:e.title,text:e.text,url:e.url}),{}})()}}}}]);