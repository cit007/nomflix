(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{125:function(n,t,e){"use strict";e.r(t),t.default=e.p+"static/media/noPosterSmall.ea2ad102.png"},126:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(1),i=e.n(a),c=e(37),o=e.n(c),s=e(10),u=e(8),l=e(7),d=e.n(l),p=e(12),b=e(6),j=e(38),x=e.n(j).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03845c404baa3661cbd2fe2a42f026a",language:"en-US"}}),f=function(){return x.get("movie/now_playing")},h=function(){return x.get("movie/upcoming")},g=function(){return x.get("movie/popular")},v=function(n){return x.get("movie/".concat(n),{params:{append_to_response:"videos"}})},m=function(n){return x.get("movie/".concat(n,"/credits"))},O=function(n){return x.get("search/movie",{params:{query:encodeURIComponent(n)}})},w=function(){return x.get("tv/top_rated")},y=function(){return x.get("tv/popular")},k=function(){return x.get("tv/airing_today")},_=function(n){return x.get("tv/".concat(n),{params:{append_to_response:"videos"}})},S=function(n){return x.get("tv/".concat(n,"/credits"))},z=function(n){return x.get("search/tv",{params:{query:encodeURIComponent(n)}})},U=e(39),C=function(){return Object(r.jsx)(U.CircleToBlockLoading,{})},R=e(3),T=e(2);function F(){var n=Object(R.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-auto-rows:auto;\n  grid-gap: 1px;\n"]);return F=function(){return n},n}function N(){var n=Object(R.a)(["\n  margin-left: 10px;\n  padding: 10px;\n  font-size: 25px;\n  font-weight: 200;\n  background-color: black;\n  border:3px solid black;\n  border-radius:10px;\n  opacity: ",";\n  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n\n  &:hover{\n    color:red;\n  }\n"]);return N=function(){return n},n}function E(){var n=Object(R.a)(["\n  :not(:last-child) {\n    margin-top:40px;\n    margin-bottom: 30px;\n  }\n"]);return E=function(){return n},n}var M=T.c.div(E()),V=T.c.span(N(),(function(n){return"Crews"==n.kind?"0":"0.6"})),I=T.c.div(F()),P=function(n){var t=n.title,e=n.children;return Object(r.jsxs)(M,{children:[Object(r.jsx)(V,{kind:t,children:t}),Object(r.jsx)(I,{children:e})]})};function L(){var n=Object(R.a)(["\n"]);return L=function(){return n},n}function H(){var n=Object(R.a)(["\n  font-size: 13px;\n"]);return H=function(){return n},n}function B(){var n=Object(R.a)(["\n  display: block;\n  margin-bottom: 3px;\n  padding: 20px;\n  font-size:15px;\n  font-weight:500;\n  text-align:center;\n"]);return B=function(){return n},n}function D(){var n=Object(R.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.5;\n      transform: scale(1.1);\n    }\n    "," {\n      opacity: 1;\n      visibility:visible;\n      transform: scale(1.1);\n    }\n  }\n"]);return D=function(){return n},n}function q(){var n=Object(R.a)(["\n  position:absolute;\n  top:0;\n  left:0;\n  background: rgba(255,255,255,0.7);\n  border-radius: 4px;\n  color: black;\n  width:150px;\n  height: 230px;\n  visibility: hidden;\n\n  display:flex;\n  flex-flow:column;\n  justify-content:space-around;\n  align-items:center;\n  transition: opacity 1s linear;\n"]);return q=function(){return n},n}function A(){var n=Object(R.a)(["\n  background-image: url(",");\n  height: 230px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center;\n  transition: opacity 1s linear;\n  opacity: 0.8;\n"]);return A=function(){return n},n}function J(){var n=Object(R.a)(["\n  position:relative;\n  font-size: 12px;\n"]);return J=function(){return n},n}var G=T.c.div(J()),K=T.c.div(A(),(function(n){return n.bgUrl})),Q=T.c.div(q()),W=T.c.div(D(),K,Q),X=T.c.span(B()),Y=T.c.span(H()),Z=T.c.span(L()),$=function(n){var t=n.id,e=n.imageUrl,a=n.title,i=n.rating,c=n.year,o=n.isMovie,u=void 0!==o&&o;return console.log("poster info :",e,a,i,c,u),Object(r.jsx)(s.b,{to:u?"/movie/".concat(t):"/tv/".concat(t),children:Object(r.jsx)(G,{children:Object(r.jsxs)(W,{children:[Object(r.jsx)(K,{bgUrl:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://img.icons8.com/windows/2x/no-image.png"}),Object(r.jsxs)(Q,{className:"imgDesc",children:[Object(r.jsx)(X,{children:a}),Object(r.jsxs)(Z,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]}),Object(r.jsx)(Y,{children:c})]})]})})})};function nn(){var n=Object(a.useState)(!0),t=Object(b.a)(n,2),e=t[0],i=t[1],c=Object(a.useState)(""),o=Object(b.a)(c,2),s=(o[0],o[1]),u=Object(a.useState)([]),l=Object(b.a)(u,2),j=l[0],x=l[1],v=Object(a.useState)([]),m=Object(b.a)(v,2),O=m[0],w=m[1],y=Object(a.useState)([]),k=Object(b.a)(y,2),_=k[0],S=k[1],z=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e,r,a,c,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f();case 3:return t=n.sent,e=t.data.results,console.log("fetch data nowPlaying :",e),x(e),n.next=9,h();case 9:return r=n.sent,a=r.data.results,console.log("fetch data upcoming :",a),w(a),n.next=15,g();case 15:c=n.sent,o=c.data.results,console.log("fetch data popular :",o),S(o),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(0),s("fetch data error : movie data");case 24:return n.prev=24,i(!1),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[0,21,24,27]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){z()}),[]),Object(r.jsxs)(r.Fragment,{children:[e?Object(r.jsx)(C,{}):j&&j.length>0&&Object(r.jsx)(P,{title:"Now Playing",children:j.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),e?Object(r.jsx)(C,{}):O&&O.length>0&&Object(r.jsx)(P,{title:"UpComing",children:O.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),e?Object(r.jsx)(C,{}):_&&_.length>0&&Object(r.jsx)(P,{title:"Popular",children:_.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))})]})}function tn(){var n=Object(a.useState)(!0),t=Object(b.a)(n,2),e=t[0],i=t[1],c=Object(a.useState)(""),o=Object(b.a)(c,2),s=(o[0],o[1]),u=Object(a.useState)([]),l=Object(b.a)(u,2),j=l[0],x=l[1],f=Object(a.useState)([]),h=Object(b.a)(f,2),g=h[0],v=h[1],m=Object(a.useState)([]),O=Object(b.a)(m,2),_=O[0],S=O[1],z=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e,r,a,c,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w();case 3:return t=n.sent,e=t.data.results,console.log("fetch data topRated :",e),x(e),n.next=9,y();case 9:return r=n.sent,a=r.data.results,console.log("fetch data popular :",a),v(a),n.next=15,k();case 15:c=n.sent,o=c.data.results,console.log("fetch data airingToday :",o),S(o),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(0),s("fetch data error : tv data");case 24:return n.prev=24,i(!1),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[0,21,24,27]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){z()}),[]),Object(r.jsxs)(r.Fragment,{children:[e?Object(r.jsx)(C,{}):j&&j.length>0&&Object(r.jsx)(P,{title:"Top Rated Shows",children:j.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))}),e?Object(r.jsx)(C,{}):g&&g.length>0&&Object(r.jsx)(P,{title:"Popular",children:g.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))}),e?Object(r.jsx)(C,{}):_&&_.length>0&&Object(r.jsx)(P,{title:"AiringToday",children:_.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))})]})}function en(){var n=Object(R.a)(["\n  font-size:25px;\n  font-weight:100;\n  font-weight:100;\n  margin-bottom: 10px;\n  padding:10px;\n  display:flex;\n  justify-content:flex-start;\n  align-items:center;\n"]);return en=function(){return n},n}function rn(){var n=Object(R.a)(["\n\n"]);return rn=function(){return n},n}function an(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 100%;\n  margin-top: 30px;\n  padding: 20px;\n"]);return an=function(){return n},n}function cn(){var n=Object(R.a)(["\n  background-image: url(",");\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  background-position: center;\n  transition: opacity 0.1s linear;\n  margin-right: 20px;\n  z-index: 0;\n\n  &:hover {\n    filter: brightness(0.8);\n    transform: scale(3);\n  }\n"]);return cn=function(){return n},n}var on=T.c.div(cn(),(function(n){return n.bgUrl})),sn=T.c.div(an()),un=T.c.ul(rn()),ln=T.c.li(en());function dn(n){var t=Object(a.useState)(!0),e=Object(b.a)(t,2),i=e[0],c=e[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),u=(s[0],s[1]),l=Object(a.useState)(null),j=Object(b.a)(l,2),x=j[0],f=j[1];console.log("detail companies props :",n);var h=n.location.pathname,g=n.match.params.id,m=h.includes("/movie/");console.log("detail companies pathname is :",h,m,g);var O=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v(g);case 3:t=n.sent,e=t.data.production_companies,console.log("fetch data detail :",e),f(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),u("fetch data error : nowPlaying");case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("title",{children:"Loading | Nomflix"}),Object(r.jsx)(C,{})]}):Object(r.jsx)(sn,{children:Object(r.jsx)(un,{children:(x&&x.length)>0?x.map((function(n){return Object(r.jsxs)(ln,{children:[Object(r.jsx)(on,{bgUrl:n.logo_path?"https://image.tmdb.org/t/p/w300/".concat(n.logo_path):"https://img.icons8.com/windows/2x/no-image.png"}),n.name]},n.id)})):Object(r.jsx)(ln,{children:'"No Result Found..."'})})})}var pn=e(43);function bn(){var n=Object(R.a)(["\n  padding:10px;\n"]);return bn=function(){return n},n}function jn(){var n=Object(R.a)(["\n  display:flex;\n  flex-flow:column;\n"]);return jn=function(){return n},n}function xn(){var n=Object(R.a)(["\n  margin-bottom: 10px;\n  font-size:25px;\n  font-weight:100;\n"]);return xn=function(){return n},n}function fn(){var n=Object(R.a)(["\n  display:flex;\n  flex-flow:column;\n"]);return fn=function(){return n},n}function hn(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 100%;\n  margin-top: 30px;\n  padding: 20px;\n"]);return hn=function(){return n},n}var gn=T.c.div(hn()),vn=T.c.ul(fn()),mn=T.c.li(xn()),On=T.c.div(jn()),wn=T.c.div(bn());function yn(n){var t=Object(a.useState)(!0),e=Object(b.a)(t,2),i=e[0],c=e[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),u=(s[0],s[1]),l=Object(a.useState)(null),j=Object(b.a)(l,2),x=j[0],f=j[1];console.log("detail videos props :",n);var h=n.location.pathname,g=n.match.params.id,m=h.includes("/movie/"),O={height:"390",width:"640",playerVars:{autoplay:1}};console.log("detail videos pathname is :",h,m,g);var w=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e,r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!m){n.next=10;break}return n.next=4,v(g);case 4:t=n.sent,e=t.data.videos.results,console.log("fetch data movie detail:",e),f(e),n.next=16;break;case 10:return n.next=12,_(g);case 12:r=n.sent,a=r.data.videos.results,console.log("fetch data tv detail:",a),f(a);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),u("fetch data error : nowPlaying");case 21:return n.prev=21,c(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()}),[]),i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("title",{children:"Loading | Nomflix"}),Object(r.jsx)(C,{})]}):Object(r.jsx)(gn,{children:Object(r.jsx)(vn,{children:Object(r.jsx)(On,{children:x&&x.length>0?x.map((function(n){return Object(r.jsxs)(mn,{children:[Object(r.jsxs)(wn,{children:["\u25a0 ",n.site," : ",n.name]}),Object(r.jsx)(pn.a,{videoId:n.key,opts:O})]})})):Object(r.jsx)(mn,{children:'"No Result Found..."'})})})})}function kn(){var n=Object(R.a)(["\n  padding:10px;\n"]);return kn=function(){return n},n}function _n(){var n=Object(R.a)(["\n  display:flex;\n  flex-flow:column;\n  background-color:#2c3e50;\n"]);return _n=function(){return n},n}function Sn(){var n=Object(R.a)(["\n  font-size:25px;\n  font-weight:100;\n  font-weight:100;\n  margin-bottom: 10px;\n  padding:10px;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(R.a)(["\n\n"]);return zn=function(){return n},n}function Un(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 80%;\n  margin-top: 30px;\n  padding: 20px;\n"]);return Un=function(){return n},n}function Cn(){var n=Object(R.a)(["\n  background-image: url(",");\n\n  width: 100%;\n  height: 1000px; \n  background-size: cover;\n  background-position: center;\n  transition: opacity 0.1s linear;\n  margin-right: 20px;\n  opacity:0.5;\n  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n  &:hover{\n    transform: scale(0.98);\n    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n    opacity:1;\n  }\n"]);return Cn=function(){return n},n}var Rn=T.c.div(Cn(),(function(n){return n.bgUrl})),Tn=T.c.div(Un()),Fn=T.c.ul(zn()),Nn=T.c.li(Sn()),En=T.c.div(_n()),Mn=T.c.div(kn());function Vn(n){var t=Object(a.useState)(!0),e=Object(b.a)(t,2),i=e[0],c=e[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),u=(s[0],s[1]),l=Object(a.useState)(null),j=Object(b.a)(l,2),x=j[0],f=j[1];console.log("details seasons props :",n);var h=n.location.pathname,g=n.match.params.id,v=h.includes("/movie/");console.log("details seasons pathname is :",h,v,g);var m=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_(g);case 3:t=n.sent,e=t.data.seasons,console.log("fetch data tv season details :",e),f(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),u("fetch data error : nowPlaying");case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("title",{children:"Loading | Nomflix"}),Object(r.jsx)(C,{})]}):Object(r.jsx)(Tn,{children:Object(r.jsx)(Fn,{children:(x&&x.length)>0?x.map((function(n){return Object(r.jsx)(Nn,{children:Object(r.jsxs)(En,{children:[Object(r.jsxs)(Mn,{children:["\u25a0 ",n.name," : ",n.air_date]}),Object(r.jsx)(Rn,{bgUrl:n&&n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):"https://img.icons8.com/windows/2x/no-image.png"})]})},n.id)})):Object(r.jsx)(Nn,{children:'"No Result Found..."'})})})}function In(){var n=Object(R.a)(["\n"]);return In=function(){return n},n}function Pn(){var n=Object(R.a)(["\n  font-size: 13px;\n"]);return Pn=function(){return n},n}function Ln(){var n=Object(R.a)(["\n  display: block;\n  margin-bottom: 3px;\n  padding: 20px;\n  font-size:15px;\n  font-weight:500;\n  text-align:center;\n"]);return Ln=function(){return n},n}function Hn(){var n=Object(R.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.5;\n      transform: scale(1.1);\n    }\n    "," {\n      opacity: 1;\n      visibility:visible;\n      transform: scale(1.1);\n    }\n  }\n"]);return Hn=function(){return n},n}function Bn(){var n=Object(R.a)(["\n  position:absolute;\n  top:0;\n  left:0;\n  background: rgba(255,255,255,0.7);\n  border-radius: 4px;\n  color: black;\n  width:150px;\n  height: 230px;\n  visibility: hidden;\n\n  display:flex;\n  flex-flow:column;\n  justify-content:space-around;\n  align-items:center;\n  transition: opacity 1s linear;\n"]);return Bn=function(){return n},n}function Dn(){var n=Object(R.a)(["\n  background-image: url(",");\n  height: 230px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center;\n  transition: opacity 1s linear;\n  opacity: 0.8;\n"]);return Dn=function(){return n},n}function qn(){var n=Object(R.a)(["\n  position:relative;\n  font-size: 12px;\n"]);return qn=function(){return n},n}var An=T.c.div(qn()),Jn=T.c.div(Dn(),(function(n){return n.bgUrl})),Gn=T.c.div(Bn()),Kn=T.c.div(Hn(),Jn,Gn),Qn=T.c.span(Ln()),Wn=(T.c.span(Pn()),T.c.span(In())),Xn=function(n){var t=n.id,e=n.imageUrl,a=n.name,i=n.character,c=n.isMovie,o=void 0!==c&&c;return console.log("crew info :",e,a,t,i,o),Object(r.jsx)(An,{children:Object(r.jsxs)(Kn,{children:[Object(r.jsx)(Jn,{bgUrl:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://img.icons8.com/windows/2x/no-image.png"}),Object(r.jsxs)(Gn,{className:"imgDesc",children:[Object(r.jsx)(Qn,{children:a}),Object(r.jsx)(Wn,{children:i})]})]})})};function Yn(){var n=Object(R.a)(["\n  padding:10px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(R.a)(["\n  display:flex;\n  flex-flow:column;\n  background-color:#2c3e50;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(R.a)(["\n  font-size:25px;\n  font-weight:100;\n  font-weight:100;\n  margin-bottom: 10px;\n  padding:10px;\n"]);return $n=function(){return n},n}function nt(){var n=Object(R.a)(["\n\n"]);return nt=function(){return n},n}function tt(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 80%;\n  margin-top: 30px;\n  padding: 20px;\n"]);return tt=function(){return n},n}function et(){var n=Object(R.a)(["\n  background-image: url(",");\n\n  width: 100%;\n  height: 1000px; \n  background-size: cover;\n  background-position: center;\n  transition: opacity 0.1s linear;\n  margin-right: 20px;\n  opacity:0.5;\n  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n  &:hover{\n    transform: scale(0.98);\n    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n    opacity:1;\n  }\n"]);return et=function(){return n},n}T.c.div(et(),(function(n){return n.bgUrl})),T.c.div(tt()),T.c.ul(nt()),T.c.li($n()),T.c.div(Zn()),T.c.div(Yn());function rt(n){var t=Object(a.useState)(!0),e=Object(b.a)(t,2),i=e[0],c=e[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),u=(s[0],s[1]),l=Object(a.useState)(null),j=Object(b.a)(l,2),x=j[0],f=j[1];console.log("crews props :",n);var h=n.location.pathname,g=n.match.params.id,v=h.includes("/movie/");console.log("crews pathname is :",h,v,g);var O=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e,r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!v){n.next=10;break}return n.next=4,m(g);case 4:t=n.sent,e=t.data.cast,console.log("fetch data movie crews :",e),f(e),n.next=16;break;case 10:return n.next=12,S(g);case 12:r=n.sent,a=r.data.cast,console.log("fetch data tv crews :",a),f(a);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),u("fetch data error : crews");case 21:return n.prev=21,c(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(r.jsx)(r.Fragment,{children:i?Object(r.jsx)(C,{}):x&&x.length>0&&Object(r.jsx)(P,{title:"Crews",children:x.map((function(n){return Object(r.jsx)(Xn,{id:n.cast_id,name:n.name,character:n.character,imageUrl:n.profile_path,isMovie:!0},n.cast_id)}))})})}function at(){var n=Object(R.a)(["\n    width:80px;\n    height:40px;\n    padding:5px;\n    color:black;\n\n    padding: 5px;\n    border-radius: 20px;\n    background-color: rgba(233,233,233,0.8);\n\n    display:flex;\n    justify-content:center;\n    align-items:center;\n\n    /* @Can not press link without z-index */\n    z-index:0;\n\n    &:hover {\n        filter: brightness(0.8);\n        background-color: black;\n        transform: scale(1.1);\n        color:white;\n        opacity:0.5;\n    }\n"]);return at=function(){return n},n}function it(){var n=Object(R.a)(["\n    display:flex;\n    justify-content:flex-start;\n    gap:10px;\n    margin-left:20px\n"]);return it=function(){return n},n}function ct(){var n=Object(R.a)(["\n    color:white;\n    width:100%;\n    height:50px;\n    display:flex;\n    align-items:center;\n    border-radius: 20px;\n    border-width: 1px;\n\n    background-color: rgba(20,20,20,0.8);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n    z-index:1;\n"]);return ct=function(){return n},n}function ot(){var n=Object(R.a)(["\n    margin-top: 50px;\n"]);return ot=function(){return n},n}var st=T.c.main(ot()),ut=T.c.div(ct()),lt=T.c.ul(it()),dt=T.c.li(at());var pt=Object(u.g)((function(n){console.log("more detail props :",n);var t=n.location.pathname,e=n.match.params.id,a=t.includes("/movie/");return console.log("moretab (tv or movie)pathname is :",t,a,e),Object(r.jsxs)(st,{children:[Object(r.jsx)(ut,{children:Object(r.jsxs)(lt,{children:[Object(r.jsx)(dt,{children:a?Object(r.jsx)(s.b,{to:"/movie/".concat(e,"/Videos"),children:"Videos"}):Object(r.jsx)(s.b,{to:"/tv/".concat(e,"/Videos"),children:"Videos"})}),Object(r.jsx)(dt,{children:a?Object(r.jsx)(s.b,{to:"/movie/".concat(e,"/Companies"),children:"Companies"}):Object(r.jsx)(s.b,{to:"/tv/".concat(e,"/Companies"),children:"Companies"})}),a?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(dt,{children:Object(r.jsx)(s.b,{to:"/tv/".concat(e,"/Seasons"),children:"Seasons"})}),Object(r.jsx)(dt,{children:a?Object(r.jsx)(s.b,{to:"/movie/".concat(e,"/Crews"),children:"Crew"}):Object(r.jsx)(s.b,{to:"/tv/".concat(e,"/Crews"),children:"Crew"})})]})}),Object(r.jsx)(u.b,{path:"/movie/:id/Companies",component:dn}),Object(r.jsx)(u.b,{path:"/movie/:id/Videos",component:yn}),Object(r.jsx)(u.b,{path:"/movie/:id/Crews",component:rt}),Object(r.jsx)(u.b,{path:"/tv/:id/Companies",component:dn}),Object(r.jsx)(u.b,{path:"/tv/:id/Videos",component:yn}),Object(r.jsx)(u.b,{path:"/tv/:id/Seasons",component:Vn}),Object(r.jsx)(u.b,{path:"/tv/:id/Crews",component:rt})]})}));function bt(){var n=Object(R.a)(["\n  width:110px;\n  padding: 5px;\n  border-radius: 20px;\n  box-shadow: 1px 2px 2px yellow;\n  /* @Can not press link without z-index */\n  z-index:0;\n  \n  &:hover {\n      transform:scale(1.1);\n  }\n"]);return bt=function(){return n},n}function jt(){var n=Object(R.a)(["\n  margin-bottom:20px;\n"]);return jt=function(){return n},n}function xt(){var n=Object(R.a)(["\n  font-size: 20px;\n  font-weight: 100;\n  line-height: 1.5;\n  width: 80%;\n\n  display:flex;\n  flex-flow: column;\n  justify-content: space-evenly;\n"]);return xt=function(){return n},n}function ft(){var n=Object(R.a)(["\n  padding: 5px;\n  border-radius: 20px;\n  box-shadow: 1px 2px 2px white;\n  /* @Can not press link without z-index */\n  z-index:0;\n  \n  &:hover {\n      transform:scale(1.1);\n  }\n"]);return ft=function(){return n},n}function ht(){var n=Object(R.a)(["\n    width:98%;\n    margin-top: 20px;\n"]);return ht=function(){return n},n}function gt(){var n=Object(R.a)(["\n  padding: 5px;\n  border-radius: 20px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n"]);return gt=function(){return n},n}function vt(){var n=Object(R.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap:10px;\n  font-size: 15px;\n  font-weight: 300;\n  padding: 10px;\n\n  border: 1px solid black;\n  border-radius: 20px;\n  border-width: 1px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  \n  margin: 20px 0px;\n"]);return vt=function(){return n},n}function mt(){var n=Object(R.a)(["\n  font-size: 40px;\n  font-weight: 700;\n"]);return mt=function(){return n},n}function Ot(){var n=Object(R.a)(["\n  width: 60%;\n  padding: 20px;\n"]);return Ot=function(){return n},n}function wt(){var n=Object(R.a)(["\n  width: 30%;\n  height: 92%;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  opacity:0.5;\n  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n  &:hover{\n    transform: scale(0.98);\n    box-shadow: 1px 10px 10px blue;\n    opacity:0.8;\n  }\n"]);return wt=function(){return n},n}function yt(){var n=Object(R.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin-top: 30px;\n"]);return yt=function(){return n},n}function kt(){var n=Object(R.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  // @SEE props\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.2;\n"]);return kt=function(){return n},n}function _t(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 100%;\n"]);return _t=function(){return n},n}var St=T.c.div(_t()),zt=T.c.div(kt(),(function(n){return n.bgImage})),Ut=T.c.div(yt()),Ct=T.c.div(wt(),(function(n){return n.bgImage})),Rt=T.c.section(Ot()),Tt=T.c.h3(mt()),Ft=T.c.div(vt()),Nt=T.c.span(gt()),Et=(T.c.hr(ht()),T.c.a(ft())),Mt=T.c.div(xt()),Vt=T.c.p(jt()),It=T.c.a(bt());function Pt(n){var t=Object(a.useState)(!0),i=Object(b.a)(t,2),c=i[0],o=i[1],s=Object(a.useState)(""),u=Object(b.a)(s,2),l=(u[0],u[1]),j=Object(a.useState)(null),x=Object(b.a)(j,2),f=x[0],h=x[1];console.log("detail props :",n);var g=n.location.pathname,m=n.match.params.id,O=g.includes("/movie/");console.log("pathname is :",g,O,m);var w=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e,r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!O){n.next=10;break}return n.next=4,v(m);case 4:t=n.sent,e=t.data,console.log("fetch movie data detail :",e),h(e),n.next=16;break;case 10:return n.next=12,_(m);case 12:r=n.sent,a=r.data,console.log("fetch tv data detail :",a),h(a);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),l("fetch data error : nowPlaying");case 21:return n.prev=21,o(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()}),[]),c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("title",{children:"Loading | Nomflix"}),Object(r.jsx)(C,{})]}):Object(r.jsxs)(St,{children:[Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("title",{children:[O&&f.original_title?f.original_title:f.original_name," ",(!O&&f.original_name,f.original_name)," ","| Nomflix"]})}),Object(r.jsx)(zt,{bgImage:"https://image.tmdb.org/t/p/original".concat(f.backdrop_path)}),Object(r.jsxs)(Ut,{children:[Object(r.jsx)(Ct,{bgImage:f.poster_path?"https://image.tmdb.org/t/p/original".concat(f.poster_path):e(125)}),Object(r.jsxs)(Rt,{children:[Object(r.jsx)(Tt,{children:f.original_title?f.original_title:f.original_name}),Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Nt,{children:f.release_date?f.release_date.substring(0,4):f.first_air_date.substring(0,4)}),Object(r.jsxs)(Nt,{children:[f.runtime||void 0!==f.runtime?f.runtime:f.episode_run_time[0]," min"]}),Object(r.jsx)(Nt,{children:f.genres&&f.genres.map((function(n,t){return t===f.genres.length-1?n.name:"".concat(n.name," | ")}))}),Object(r.jsx)(Et,{href:f.imdb_id||void 0!==f.imdb_id?"https://www.imdb.com/title/".concat(f.imdb_id):"#",target:"_blank",children:"imdb"})]}),Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Vt,{children:"\u25a0 OverView"}),Object(r.jsx)(Vt,{children:f.overview}),Object(r.jsx)(It,{href:f.homepage||void 0!==f.homepage?f.homepage:"#",target:"_blank",children:"HomePage"})]}),Object(r.jsx)(pt,{})]})]})]})}var Lt=e(46),Ht=e(47),Bt=e(50),Dt=e(49);function qt(){var n=Object(R.a)(["\n    font-size:40px;\n    font-weight:100;\n    /* padding:10px; */\n    border:1px solid black;\n    border-radius:10px;\n    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n"]);return qt=function(){return n},n}function At(){var n=Object(R.a)(["\n    font-size:40px;\n    font-weight:100;\n    /* padding: 10px; */\n    border:1px solid black;\n    border-radius:10px;\n    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n"]);return At=function(){return n},n}function Jt(){var n=Object(R.a)(["\n    font-size:40px;\n"]);return Jt=function(){return n},n}function Gt(){var n=Object(R.a)(["\n    margin-top:50px;\n    margin-left:30px;\n"]);return Gt=function(){return n},n}var Kt=T.c.div(Gt()),Qt=T.c.form(Jt()),Wt=T.c.input(At()),Xt=T.c.input(qt()),Yt=function(n){var t=n.movieResults,e=n.tvResults,a=n.searchTerm,i=n.updateTerm,c=n.searchHandle,o=n.loading;n.error;return Object(r.jsxs)(Kt,{children:[Object(r.jsxs)(Qt,{onSubmit:c,children:[Object(r.jsx)(Wt,{type:"text",placeholder:"e.g. terminator",value:a,onChange:i}),Object(r.jsx)(Xt,{type:"submit",value:"Search"})]}),o?Object(r.jsx)(C,{}):t&&t.length>0&&Object(r.jsx)(P,{title:"Movie Results",children:t.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),o?Object(r.jsx)(C,{}):e&&e.length>0&&Object(r.jsx)(P,{title:"TV Show Results",children:e.map((function(n){return Object(r.jsx)($,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))})]})},Zt=function(n){Object(Bt.a)(e,n);var t=Object(Dt.a)(e);function e(){var n;Object(Lt.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.searchHandle=function(t){t.preventDefault();var e=n.state.searchTerm;console.log("search input text is ",e),""!==e&&n.searchByTerm()},n.updateTerm=function(t){var e=t.target.value;console.log(e),n.setState({searchTerm:e})},n.searchByTerm=Object(p.a)(d.a.mark((function t(){var e,r,a,i,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.searchTerm,n.setState({Loading:!0}),t.prev=2,t.next=5,O(e);case 5:return r=t.sent,a=r.data.results,console.log("search movie :",a),t.next=10,z(e);case 10:i=t.sent,c=i.data.results,console.log("search tv :",c),n.setState({movieResults:a,tvResults:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),n.setState({error:"Can't search movies or tv information."});case 19:return t.prev=19,n.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[2,16,19,22]])}))),n}return Object(Ht.a)(e,[{key:"render",value:function(){var n=this.state,t=n.movieResults,e=n.tvResults,a=n.searchTerm,i=n.loading,c=n.error;return Object(r.jsx)(Yt,{movieResults:t,tvResults:e,searchTerm:a,updateTerm:this.updateTerm,searchHandle:this.searchHandle,loading:i,error:c})}}]),e}(i.a.Component);function $t(){var n=Object(R.a)(["\n    width:80px;\n    height:50px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border:1px solid white;\n    border-radius: 5px;\n    background-color:#e74c3c;\n    padding:5px;\n    font-size:23px;\n    font-weight:100;\n    margin-left:10px;\n    opacity:0.8;\n    /* border-bottom: 5px solid ","; */\n    box-shadow: 1px 10px 10px ",";\n    transition: border-bottom .5s ease-in-outset;\n\n    &:hover {\n        transform: scale(1.1);\n        color:black;\n        opacity:1;\n    }\n"]);return $t=function(){return n},n}function ne(){var n=Object(R.a)(["\n    display:flex;\n    margin-left:20px\n"]);return ne=function(){return n},n}function te(){var n=Object(R.a)(["\n    color:white;\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:70px;\n    display:flex;\n    align-items:center;\n\n    background-color: rgba(20,20,20,0.8);\n    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);\n    z-index:1;\n"]);return te=function(){return n},n}var ee=T.c.header(te()),re=T.c.ul(ne()),ae=T.c.li($t(),(function(n){return n.current?"#3498db":"transparent"}),(function(n){return n.current?"#3498db":"transparent"}));var ie=Object(u.g)((function(n){var t=n.location.pathname;return console.log(n,t),Object(r.jsx)(ee,{children:Object(r.jsxs)(re,{children:[Object(r.jsx)(ae,{current:"/"==t,children:Object(r.jsx)(s.b,{to:"/",children:"MOVIE"})}),Object(r.jsx)(ae,{current:"/tv"==t,children:Object(r.jsx)(s.b,{to:"/tv",children:"TV"})}),Object(r.jsx)(ae,{current:"/search"==t,children:Object(r.jsx)(s.b,{to:"/search",children:"Search"})})]})})})),ce=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(ie,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:nn}),Object(r.jsx)(u.b,{path:"/movie/:id",component:Pt}),Object(r.jsx)(u.b,{path:"/tv",exact:!0,component:tn}),Object(r.jsx)(u.b,{path:"/tv/:id",component:Pt}),Object(r.jsx)(u.b,{path:"/tv/test",render:function(){return"test render called"}}),Object(r.jsx)(u.b,{path:"/search",exact:!0,component:Zt}),Object(r.jsx)(u.a,{path:"*",to:"/"})]})]})},oe=e(48);function se(){var n=Object(R.a)(["\n    ",'\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n        font-size:14px;\n        color:white;\n        background-color:gray;\n\n        padding-top:50px\n    }\n']);return se=function(){return n},n}var ue=Object(T.a)(se(),oe.a);var le=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(ce,{}),Object(r.jsx)(ue,{})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(le,{})}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.68eeb583.chunk.js.map