"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{7039:function(n,e,t){t.d(e,{Rl:function(){return x},e0:function(){return d},eN:function(){return f},iR:function(){return p},mn:function(){return v}});var r,i,o,a,c,u=t(168),s=t(5706),l=t(3313),d=(0,s.Z)(l.Ao2)(r||(r=(0,u.Z)(["\n  margin-right: 12px;\n  width: 24px;\n  height: 16px;\n"]))),f=s.Z.div(i||(i=(0,u.Z)(["\n  margin-bottom: 16px;\n  font-size: 20px;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),p=s.Z.div(o||(o=(0,u.Z)(["\n  display: flex;\n  gap: 24px;\n\n  font-size: 18px;\n"]))),v=s.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n  font-size: 18px;\n  font-weight: bold;\n\n  color: orangered;\n  text-decoration: underline;\n"]))),x=s.Z.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  li {\n    align-items: start;\n    display: flex;\n    gap: 12px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n"])))},8577:function(n,e,t){function r(n){return n.map((function(n){var e=n.id,t=n.poster_path,r=n.title,i=n.tagline,o=n.vote_average,a=n.overview;return"number"===typeof o?{id:e,title:r,tagline:i,poster_path:t,overview:a,vote_average:o.toFixed(1)}:{id:e,title:r,tagline:i,poster_path:t,overview:a,vote_average:o}}))}function i(n){var e=n.id,t=n.poster_path,r=n.title,i=n.tagline,o=n.vote_average,a=n.overview,c=n.genres,u=void 0===c?[]:c;if("number"===typeof o)return{id:e,title:r,tagline:i,poster_path:t,overview:a,vote_average:o.toFixed(1),genres:u.map((function(n){return"string"!==typeof n?n.name:n}))}}t.d(e,{L:function(){return r},q:function(){return i}})},4835:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(5861),i=t(9439),o=t(4687),a=t.n(o),c=t(2791),u=t(7689),s=t(952),l=t(8577),d=t(2744),f=t(1087),p=t(1847),v=t(7039),x=t(184);function h(n){var e,t,r=n.movie,i=(0,u.TH)(),o=(0,c.useRef)(null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),a=r.poster_path,s=r.title,l=r.tagline,d=r.vote_average,h=r.overview,g=r.genres;return(0,x.jsxs)("div",{children:[(0,x.jsx)(v.eN,{children:(0,x.jsxs)(f.rU,{to:o.current,children:[(0,x.jsx)(v.e0,{}),"Go back"]})}),(0,x.jsxs)(v.iR,{children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(a),alt:"".concat(s)}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:s}),(0,x.jsx)("p",{children:d}),(0,x.jsx)("ul",{children:g&&g.map((function(n){return"string"!==typeof n?(0,x.jsx)("li",{children:n},n.name):(0,x.jsx)("li",{children:n},n)}))}),(0,x.jsx)("p",{children:l}),(0,x.jsx)("p",{children:h})]})]}),(0,x.jsxs)(v.mn,{children:[(0,x.jsx)(f.rU,{to:"cast",children:"Cast"}),(0,x.jsx)(f.rU,{to:"reviews",children:"Reviews"})]}),(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)(p.Z,{}),children:(0,x.jsx)(u.j3,{})})]})}function g(){var n=(0,u.UO)().id,e=(0,c.useState)(null),t=(0,i.Z)(e,2),o=t[0],f=t[1],p=(0,c.useState)(!1),v=(0,i.Z)(p,2),g=v[0],m=v[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,s.TP(n);case 4:t=e.sent,(r=(0,l.q)(t.data))&&f(r);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),m(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsx)("main",{children:g?(0,x.jsx)(d.Z,{}):o&&(0,x.jsx)(h,{movie:o})})}},2744:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(1087),i=t(184);function o(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.rU,{to:"/",children:"Go back"}),(0,i.jsx)("div",{children:"Not Found"})]})}},952:function(n,e,t){t.d(e,{Df:function(){return o},TP:function(){return c},tx:function(){return s},z1:function(){return a},zv:function(){return u}});var r=t(1243),i=new AbortController;function o(){return r.Z.get("trending/movie/day",{signal:i.signal})}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("search/movie?query=".concat(n,"&page=").concat(e))}function c(n){return r.Z.get("movie/".concat(n))}function u(n){return r.Z.get("movie/".concat(n,"/credits"))}function s(n){return r.Z.get("movie/".concat(n,"/reviews"))}r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDllNDQ3NzZkODk4M2I4MjUxZGIyM2UwYTBkMDc2NCIsInN1YiI6IjY0OTk0ZWIxNmY0M2VjMDEzOTliMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfMWjVI_xe7Qrg38kb3t2TBDdyF9nQKUMfvJwYSbESc",r.Z.defaults.params={language:"en-US",sort_by:"popularity.desc",include_adult:!1}}}]);
//# sourceMappingURL=835.74887d37.chunk.js.map