"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{7039:function(n,t,e){e.d(t,{Rl:function(){return x},e0:function(){return f},eN:function(){return p},iR:function(){return d},mn:function(){return h}});var r,i,a,o,c,u=e(168),s=e(5706),l=e(3313),f=(0,s.Z)(l.Ao2)(r||(r=(0,u.Z)(["\n  margin-right: 12px;\n  width: 24px;\n  height: 16px;\n"]))),p=s.Z.div(i||(i=(0,u.Z)(["\n  margin-bottom: 16px;\n  font-size: 20px;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),d=s.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 24px;\n\n  font-size: 18px;\n"]))),h=s.Z.div(o||(o=(0,u.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n  font-size: 18px;\n  font-weight: bold;\n\n  color: orangered;\n  text-decoration: underline;\n"]))),x=s.Z.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  li {\n    align-items: start;\n    display: flex;\n    gap: 12px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n"])))},6500:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(5861),i=e(9439),a=e(4687),o=e.n(a);function c(n){return n.map((function(n){return{author:n.author,avatar_path:n.author_details.avatar_path,content:n.content}}))}var u=e(2791),s=e(7689),l=e(952),f=e(184);function p(n){var t=n.reviews,e=t.author,r=t.avatar_path,i=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w45".concat(r),alt:e}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{children:e}),(0,f.jsx)("p",{children:i}),"."]})]})}var d=e(7039);function h(){var n=(0,s.UO)().id,t=(0,u.useState)([]),e=(0,i.Z)(t,2),a=e[0],h=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!n){t.next=7;break}return t.next=4,l.tx(n);case 4:e=t.sent,r=c(e.data.results),h(r);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,f.jsx)(d.Rl,{children:a.map((function(n){return(0,f.jsx)(p,{reviews:n},n.content)}))})}},952:function(n,t,e){e.d(t,{Df:function(){return a},TP:function(){return c},tx:function(){return s},z1:function(){return o},zv:function(){return u}});var r=e(1243),i=new AbortController;function a(){return r.Z.get("trending/movie/day",{signal:i.signal})}function o(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("search/movie?query=".concat(n,"&page=").concat(t))}function c(n){return r.Z.get("movie/".concat(n))}function u(n){return r.Z.get("movie/".concat(n,"/credits"))}function s(n){return r.Z.get("movie/".concat(n,"/reviews"))}r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDllNDQ3NzZkODk4M2I4MjUxZGIyM2UwYTBkMDc2NCIsInN1YiI6IjY0OTk0ZWIxNmY0M2VjMDEzOTliMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfMWjVI_xe7Qrg38kb3t2TBDdyF9nQKUMfvJwYSbESc",r.Z.defaults.params={language:"en-US",sort_by:"popularity.desc",include_adult:!1}}}]);
//# sourceMappingURL=500.a86de1e6.chunk.js.map