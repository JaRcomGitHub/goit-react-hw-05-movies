"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{854:function(t,e,n){n.d(e,{a:function(){return a}});var r=n(243),c=n(184);function a(){return(0,c.jsx)("div",{className:"Loader",children:(0,c.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"orangered",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},736:function(t,e,n){n.r(e);var r=n(885),c=n(791),a=n(689),o=n(854),u=n(390),s=n(184);e.default=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)(!1),n=(0,r.Z)(e,2),i=n[0],p=n[1],h=(0,c.useState)([]),f=(0,r.Z)(h,2),l=f[0],v=f[1];return(0,c.useEffect)((function(){p(!0),(0,u.o4)(t).then((function(t){var e=t.data.results;v(e)})).catch((function(t){console.log(t)})).finally((function(){p(!1)}))}),[t]),(0,s.jsxs)("div",{children:[i&&(0,s.jsx)(o.a,{}),!1===i&&0===l.length&&(0,s.jsx)("p",{children:"We don't have any reviews for this movie."}),l.length>0&&(0,s.jsx)("ul",{children:l.map((function(t,e){var n=t.author,r=t.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:(0,s.jsxs)("b",{children:["Author: ",n]})}),(0,s.jsx)("p",{children:r})]},e)}))})]})}},390:function(t,e,n){n.d(e,{MZ:function(){return l},Rv:function(){return h},Wg:function(){return b},Y4:function(){return d},iE:function(){return p},o4:function(){return x},tL:function(){return m}});var r=n(861),c=n(757),a=n.n(c),o=n(44),u="https://api.themoviedb.org/3/trending/movie/day",s="https://api.themoviedb.org/3/movie/",i="https://api.themoviedb.org/3/search/",p="https://image.tmdb.org/t/p/w200",h="https://image.tmdb.org/t/p/w300",f=new URLSearchParams({api_key:"952628f2e449efc757df6f6ed1cc0d2c",language:"en"});function l(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(u,"?").concat(f),t.prev=1,t.next=4,o.ZP.get(e);case 4:return n=t.sent,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s).concat(e,"?").concat(f),t.prev=1,t.next=4,o.ZP.get(n);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s).concat(e,"/credits?").concat(f),t.prev=1,t.next=4,o.ZP.get(n);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s).concat(e,"/reviews?").concat(f),t.prev=1,t.next=4,o.ZP.get(n);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function b(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie?").concat(f,"&query=").concat(e),t.prev=1,t.next=4,o.ZP.get(n);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=736.7aa240b2.chunk.js.map