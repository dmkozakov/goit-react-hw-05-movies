"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[704],{5704:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(5861),i=e(9439),a=e(4687),c=e.n(a),o=e(2791),u=e(7689),l=e(4697);function s(n){return n.slice(0,10).map((function(n){return{profile_path:n.profile_path,name:n.name,character:n.character}}))}var f=e(184);function p(n){var t=n.cast,e=t.profile_path,r=t.name,i=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w45".concat(e),alt:r}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{children:r}),(0,f.jsx)("p",{children:i})]})]})}var d=e(4139);function h(){var n=(0,u.UO)().id,t=(0,o.useState)([]),e=(0,i.Z)(t,2),a=e[0],h=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.zv(n);case 3:e=t.sent,r=s(e.data.cast),h(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,f.jsx)(d.Rl,{children:a.map((function(n){return(0,f.jsx)(p,{cast:n},n.character)}))})}},4139:function(n,t,e){e.d(t,{Rl:function(){return x},e0:function(){return f},eN:function(){return p},iR:function(){return d},mn:function(){return h}});var r,i,a,c,o,u=e(168),l=e(5706),s=e(3313),f=(0,l.Z)(s.Ao2)(r||(r=(0,u.Z)(["\n  margin-right: 12px;\n  width: 24px;\n  height: 16px;\n"]))),p=l.Z.div(i||(i=(0,u.Z)(["\n  margin-bottom: 16px;\n  font-size: 20px;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),d=l.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 24px;\n\n  font-size: 18px;\n"]))),h=l.Z.div(c||(c=(0,u.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n  font-size: 18px;\n  font-weight: bold;\n\n  color: orangered;\n  text-decoration: underline;\n"]))),x=l.Z.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  li {\n    align-items: start;\n    display: flex;\n    gap: 12px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n"])))},4697:function(n,t,e){e.d(t,{Df:function(){return a},TP:function(){return o},tx:function(){return l},z1:function(){return c},zv:function(){return u}});var r=e(1243),i=new AbortController;function a(){return r.Z.get("trending/movie/day",{signal:i.signal})}function c(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("search/movie?query=".concat(n,"&page=").concat(t))}function o(n){return r.Z.get("movie/".concat(n))}function u(n){return r.Z.get("movie/".concat(n,"/credits"))}function l(n){return r.Z.get("movie/".concat(n,"/reviews"))}r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDllNDQ3NzZkODk4M2I4MjUxZGIyM2UwYTBkMDc2NCIsInN1YiI6IjY0OTk0ZWIxNmY0M2VjMDEzOTliMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfMWjVI_xe7Qrg38kb3t2TBDdyF9nQKUMfvJwYSbESc",r.Z.defaults.params={language:"en-US",sort_by:"popularity.desc",include_adult:!1}}}]);
//# sourceMappingURL=704.cc36d2ca.chunk.js.map