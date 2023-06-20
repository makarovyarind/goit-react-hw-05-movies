"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[226],{334:function(r,t,e){e.d(t,{z:function(){return a}});var n=e(184);function a(r){var t=r.onClick;return(0,n.jsx)("button",{className:"Button",type:"Button",onClick:t,children:"Load more"})}},582:function(r,t,e){e.d(t,{O:function(){return o}});e(791);var n=e(87),a=e(689),u=e(184);function c(r){var t=r.imageUrl,e=r.title,c=r.id,o=(0,a.TH)();return(0,u.jsx)(n.rU,{to:"/movies/".concat(c),state:{from:o},children:(0,u.jsxs)("li",{className:"MovieListItem",children:[(0,u.jsx)("img",{className:"MovieListItemImage",src:"https://image.tmdb.org/t/p/w500"+t,alt:e}),(0,u.jsx)("p",{className:"MovieListItemTitle",children:e})]})})}function o(r){var t=r.movies;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:"MoviesList",children:t.map((function(r,t){return(0,u.jsx)(c,{imageUrl:r.poster_path,title:r.title,id:r.id},"".concat(r.id,"+").concat(t))}))})})}},226:function(r,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(433),a=e(861),u=e(439),c=e(757),o=e.n(c),s=e(791),i=e(184);function l(r){var t=r.onSubmit,e=(0,s.useState)(""),n=(0,u.Z)(e,2),a=n[0],c=n[1];return(0,i.jsx)("header",{className:"Searchbar",children:(0,i.jsxs)("form",{className:"SearchForm",onSubmit:function(r){r.preventDefault(),""!==a.trim()?(t(a),c("")):alert("Enter the name you are looking for")},children:[(0,i.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(r){c(r.currentTarget.value.toLowerCase())}}),(0,i.jsx)("button",{type:"submit",className:"SearchForm-button",children:"Search"})]})})}var p=e(390),f=e(334),v=e(582),h=e(87);var m=function(){var r=(0,h.lr)(),t=(0,u.Z)(r,2),e=t[0],c=t[1],m=e.get("searchName")||"",d=(0,s.useState)(1),x=(0,u.Z)(d,2),g=x[0],b=x[1],y=(0,s.useState)([]),Z=(0,u.Z)(y,2),w=Z[0],j=Z[1],k=(0,s.useState)(!1),S=(0,u.Z)(k,2),N=S[0],_=S[1],C=(0,s.useState)(null),L=(0,u.Z)(C,2),U=L[0],A=L[1];return(0,s.useEffect)((function(){""===m&&j([]);var r=function(){var r=(0,a.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.CA)(m,g);case 3:(t=r.sent)&&t.results&&j((function(r){return[].concat((0,n.Z)(r),(0,n.Z)(t.results))})),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),A(r.t0),alert(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[m,g]),U&&alert(" An error occurred. Please try again later."),(0,i.jsxs)("div",{children:[(0,i.jsx)(l,{onSubmit:function(r){if(r===m)return alert("".concat(r," already entered"));c({searchName:r}),b(1),j([]),_(!0)}}),(0,i.jsx)(v.O,{movies:w}),N&&w.length-1!==g&&(0,i.jsx)(f.z,{onClick:function(){b((function(r){return r+1}))}})]})}},390:function(r,t,e){e.d(t,{CA:function(){return l},Gc:function(){return h},_L:function(){return s},fh:function(){return f},jP:function(){return d},yA:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"d607859253f419a97e2a864827f40ef4",language:"en-US"};var o="https://image.tmdb.org/t/p/w200";function s(r){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(u().mark((function r(t){var e,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"trending/movie/day",params:{page:t}},r.next=4,(0,c.Z)(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function l(r,t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function r(t,e){var n,a,o;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"search/movie",params:{query:t,page:e}},r.next=4,(0,c.Z)(n);case 4:return a=r.sent,o=a.data,r.abrupt("return",o);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function f(r){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function r(t){var e,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"movie/".concat(t)},r.next=4,(0,c.Z)(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function h(r){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function r(t){var e,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"movie/".concat(t,"/credits")},r.next=4,(0,c.Z)(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function d(r){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"movie/".concat(t,"/reviews")},r.next=4,(0,c.Z)(e);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=226.c9f10088.chunk.js.map