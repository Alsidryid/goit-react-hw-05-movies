"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{713:function(e,t,n){n.d(t,{Ht:function(){return i},M1:function(){return o},Pg:function(){return u},WG:function(){return s},tx:function(){return l}});var r=n(294),c="e57cb6e923888ba47f84eda8bb27c104",a=r.Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){return a.get("/trending/movie/day?api_key=".concat(c))},u=function(e){return a.get("/movie/".concat(e,"?api_key=").concat(c))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.get("/search/movie?query=".concat(e,"}&api_key=").concat(c,"&include_adult=true&page=").concat(t))},o=function(e){return a.get("/movie/".concat(e,"/credits?api_key=").concat(c))},l=function(e){return a.get("/movie/".concat(e,"/reviews?api_key=").concat(c))}},866:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),c=n(439),a=n(757),i=n.n(a),u=n(689),s=n(791),o=n(713),l=n(784),f="Reviews_list__pCzae",p="Reviews_item__G1rz-",v="Reviews_title__jUE7J",h="Reviews_post__ywIbC",d=n(184),_=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],_=(0,s.useState)(!1),m=(0,c.Z)(_,2),x=m[0],g=m[1],k=(0,s.useState)(null),w=(0,c.Z)(k,2),b=w[0],j=w[1],y=(0,u.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,o.tx)(y);case 4:t=e.sent,n=t.data,a(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y]);var Z=n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,d.jsxs)("li",{className:p,children:[(0,d.jsx)("h2",{className:v,children:n}),(0,d.jsx)("p",{className:h,children:r})]},t)})),N=Boolean(n.length);return(0,d.jsxs)(d.Fragment,{children:[b&&(0,d.jsx)("p",{children:b}),x&&(0,d.jsx)("p",{children:(0,d.jsx)(l.Z,{})}),N?(0,d.jsx)("ul",{className:f,children:Z}):(0,d.jsx)("p",{children:"No reviews"})]})}}}]);
//# sourceMappingURL=866.2418902b.chunk.js.map