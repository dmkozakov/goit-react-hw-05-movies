"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{7047:function(e,t,n){n.d(t,{Z:function(){return m}});var r,i,a,o,u=n(7689),c=n(168),s=n(5706),l=n(1087),v=s.Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),f=(0,s.Z)(l.rU)(i||(i=(0,c.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),d=s.Z.img(a||(a=(0,c.Z)(["\n  width: 185px;\n"]))),p=s.Z.div(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),h=n(184);function m(e){var t=e.movies,n=(0,u.TH)();return(0,h.jsx)(v,{children:t.map((function(e){var t=e.id,r=e.title,i=e.poster_path,a=e.vote_average,o=e.overview;return(0,h.jsx)("li",{children:(0,h.jsxs)(f,{to:"/movies/".concat(t),state:{from:n},children:[(0,h.jsx)(d,{src:"https://image.tmdb.org/t/p/w154".concat(i),alt:"".concat(r)}),(0,h.jsxs)(p,{children:[(0,h.jsx)("h3",{children:r}),(0,h.jsx)("p",{children:o}),(0,h.jsx)("p",{children:a})]})]})},t)}))})}},9294:function(e,t,n){function r(e){return e.map((function(e){var t=e.id,n=e.poster_path,r=e.title,i=e.tagline,a=e.vote_average;return{id:t,title:r,tagline:i,poster_path:n,overview:e.overview,vote_average:a.toFixed(1)}}))}function i(e){var t=e.id,n=e.poster_path,r=e.title,i=e.tagline,a=e.vote_average,o=e.overview,u=e.genres;return{id:t,title:r,tagline:i,poster_path:n,overview:o,vote_average:a.toFixed(1),genres:u.map((function(e){return e.name}))}}n.d(t,{L:function(){return r},q:function(){return i}})},2431:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),i=n(9439),a=n(4687),o=n.n(a),u=n(7047),c=n(184);function s(e){var t=e.onSubmit;return(0,c.jsxs)("form",{onSubmit:t,children:[(0,c.jsx)("input",{type:"text",name:"search",onChange:function(e){return e.target.value}}),(0,c.jsx)("button",{type:"submit",children:"search"})]})}var l=n(9294),v=n(9256),f=n(2791),d=n(1087),p=n(4697);function h(){var e,t=(0,d.lr)(),n=(0,i.Z)(t,2),a=n[0],h=n[1],m=null!==(e=a.get("query"))&&void 0!==e?e:"",x=(0,f.useState)([]),g=(0,i.Z)(x,2),Z=g[0],j=g[1],y=(0,f.useState)(!1),b=(0,i.Z)(y,2),w=b[0],_=b[1];(0,f.useEffect)((function(){if(m){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.z1)(m);case 3:t=e.sent,n=(0,l.L)(t.data.results),j(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),_(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);return(0,c.jsxs)("main",{children:[(0,c.jsx)("div",{children:"Movies Page"}),(0,c.jsx)(s,{onSubmit:function(e){e.preventDefault();var t=e.target;if(!t.elements.search.value)return alert("Enter a query");h({query:t.elements.search.value.trim()}),t.reset()}}),w&&(0,c.jsx)(v.Z,{}),!w&&m&&(0,c.jsx)(u.Z,{movies:Z}),m&&0===Z.length&&(0,c.jsx)(v.Z,{})]})}},9256:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1087),i=n(184);function a(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.rU,{to:"/",children:"Go back"}),(0,i.jsx)("div",{children:"Not Found"})]})}},4697:function(e,t,n){n.d(t,{Df:function(){return a},TP:function(){return u},tx:function(){return s},z1:function(){return o},zv:function(){return c}});var r=n(1243),i=new AbortController;function a(){return r.Z.get("trending/movie/day",{signal:i.signal})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("search/movie?query=".concat(e,"&page=").concat(t))}function u(e){return r.Z.get("movie/".concat(e))}function c(e){return r.Z.get("movie/".concat(e,"/credits"))}function s(e){return r.Z.get("movie/".concat(e,"/reviews"))}r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDllNDQ3NzZkODk4M2I4MjUxZGIyM2UwYTBkMDc2NCIsInN1YiI6IjY0OTk0ZWIxNmY0M2VjMDEzOTliMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfMWjVI_xe7Qrg38kb3t2TBDdyF9nQKUMfvJwYSbESc",r.Z.defaults.params={language:"en-US",sort_by:"popularity.desc",include_adult:!1}}}]);
//# sourceMappingURL=431.c9d9e2db.chunk.js.map