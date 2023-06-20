"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[539],{742:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(791),i=t(689),o=t(87),l=t(390),p=t.p+"static/media/no_image.d94858f9ed2950bcb958.jpg",d=t(184);var h=function(){var r=(0,u.useState)(null),e=(0,a.Z)(r,2),t=e[0],s=e[1],h=(0,i.UO)().movieId,f=(0,i.s0)(),v=(0,i.TH)();return(0,u.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,l.fh)(h);case 2:(e=r.sent)&&s(e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[h]),(0,d.jsxs)("div",{className:"movie-details",children:[(0,d.jsx)("button",{onClick:function(){v.state?f(v.state.from.pathname+v.state.from.search):f("/")},children:"Go Back"}),(0,d.jsx)("div",{className:"poster",children:t?(0,d.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):p,alt:t.title,width:"250"}):(0,d.jsx)("div",{children:"Loading..."})}),(0,d.jsx)("div",{className:"movie-info",children:t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:t.title}),(0,d.jsxs)("p",{children:["User Score: ",10*t.vote_average,"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("span",{children:t.overview}),t.genres&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:t.genres.map((function(r){return(0,d.jsx)("li",{children:r.name},r.id)}))})]})]})}),(0,d.jsxs)("div",{className:"additional-info",children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("nav",{children:[(0,d.jsx)(o.OL,{to:"/movies/".concat(h,"/cast"),activeClassName:"active-link",children:"Cast"}),(0,d.jsx)(o.OL,{to:"/movies/".concat(h,"/reviews"),activeClassName:"active-link",children:"Reviews"})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(i.j3,{})})]})]})}},390:function(r,e,t){t.d(e,{CA:function(){return l},Gc:function(){return f},_L:function(){return i},fh:function(){return d},jP:function(){return m},yA:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"d607859253f419a97e2a864827f40ef4",language:"en-US"};var u="https://image.tmdb.org/t/p/w200";function i(r){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function r(e){var t,n,a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t={url:"trending/movie/day",params:{page:e}},r.next=4,(0,c.Z)(t);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function l(r,e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function r(e,t){var n,a,u;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"search/movie",params:{query:e,page:t}},r.next=4,(0,c.Z)(n);case 4:return a=r.sent,u=a.data,r.abrupt("return",u);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function d(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function r(e){var t,n,a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t={url:"movie/".concat(e)},r.next=4,(0,c.Z)(t);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function f(r){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function r(e){var t,n,a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t={url:"movie/".concat(e,"/credits")},r.next=4,(0,c.Z)(t);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function m(r){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function r(e){var t,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t={url:"movie/".concat(e,"/reviews")},r.next=4,(0,c.Z)(t);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=539.cfd1d3e0.chunk.js.map