(this["webpackJsonpmovie-lister"]=this["webpackJsonpmovie-lister"]||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(66),a=n.n(i),l=n(220),o=n(215),r=n(192),j=n(191),b=Object(j.a)({base:0,xs:"367px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}),d={global:{"html, body":{minWidth:"360px"},"::-webkit-scrollbar":{width:{xs:"6px",lg:"8px"},height:{xs:"6px",lg:"8px"}},"::-webkit-scrollbar-thumb":{bg:"rgba(0, 0, 0, 0.4)",transition:".25s ease-in-out",borderRadius:"10px"},"::-webkit-scrollbar-thumb:hover":{bg:"rgba(0, 0, 0, 0.6)"},"::-webkit-scrollbar-track":{bg:"inherit",borderRadius:"0"},".no-scroll":{overflow:"hidden"}}},u=Object(r.a)({config:{initialColorMode:"dark",useSystemColorMode:!0},breakpoints:b,styles:d}),x=n(5),O=n(214),h=n(200),p=n(126),f=n(13),m=n(19),g=n(221),v=n(132),w=n(194),y=n(195),S=n(193),k=n(196),_=["action","adventure","animation","biography","comedy","crime","documentary","drama","family","fantasy","film-noir","game-show","history","horror","music","musical","mystery","news","reality-tv","romance","sci-fi","sport","talk-show","thriller","war","western"],C=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},z=n(20),L=n(2),E=function(e){var t=e.visibility,n=e.setIsOpen;return Object(L.jsx)(S.a,{h:"100%",w:"100%",pos:"fixed",top:0,left:0,zIndex:"docked",bg:"blackAlpha.400",sx:{backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"},onClick:function(){return n(!1)},onTouchStart:function(){return n(!1)},opacity:"visible"===t?1:0,transition:".25s ease-in-out",visibility:t})},W=function(e){var t=e.isOpen,n=e.toggleSideNav,c=e.setIsOpen;return Object(s.useEffect)((function(){!0===t?document.getElementsByTagName("html")[0].classList.add("no-scroll"):document.getElementsByTagName("html")[0].classList.remove("no-scroll")}),[t]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(E,{visibility:t?"visible":"hidden",setIsOpen:c}),Object(L.jsxs)(g.c,{p:{base:4,md:0},py:6,w:{base:"220px",md:"full"},align:"start",transition:"right 0.5s",boxShadow:{base:"dark-lg",md:"none"},spacing:6,pos:{base:"fixed",md:"relative"},zIndex:"banner",overflowY:"auto",h:"100%",right:{base:t?0:"-100%",md:0},top:0,bg:Object(v.c)("white","gray.800"),children:[Object(L.jsx)(w.a,{py:3,alignSelf:"flex-end",onClick:function(){return n()},display:{base:"flex",md:"none"},icon:Object(L.jsx)(z.h,{})}),Object(L.jsx)(y.a,{textTransform:"uppercase",as:"h4",fontSize:"md",children:"Categories"}),Object(L.jsx)(S.a,{as:"hr",w:"full"}),Object(L.jsxs)(g.c,{spacing:1,align:"start",w:"full",fontSize:"md",fontWeight:"normal",children:[Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/all",children:"All Movies"}),Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/new",children:"New Releases"}),Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/recent",children:"Recently Added"}),Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/rating",children:"Top Rated"}),Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/likes",children:"Top Likes"}),Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/downloads",children:"Top Downloads"})]}),Object(L.jsx)(y.a,{textTransform:"uppercase",as:"h4",fontSize:"md",children:"Genres"}),Object(L.jsx)(S.a,{as:"hr",w:"full"}),Object(L.jsx)(g.c,{spacing:1,align:"start",w:"full",fontSize:"md",fontWeight:"normal",children:_.map((function(e,t){return Object(L.jsx)(k.a,{onClick:function(){return c(!1)},as:f.b,to:"/movies/"+e,children:C(e)},t)}))})]})]})},D=n(197),M=n(198),T=n(89),I=function(){return Object(L.jsxs)(D.a,{spacing:3,w:"full",justify:"space-between",align:"center",mb:6,children:[Object(L.jsxs)(g.c,{children:[Object(L.jsxs)(M.a,{align:"left",children:["Designed & Developed by"," ",Object(L.jsx)(k.a,{fontWeight:"semibold",href:"https://stepanpavlov.com",isExternal:"true",children:"Stepan Pavlov"})]}),Object(L.jsxs)(M.a,{align:"left",w:"full",children:["Movies Source:"," ",Object(L.jsx)(k.a,{fontWeight:"semibold",href:"https://yts.mx/",isExternal:"true",children:"YTS.mx"})]})]}),Object(L.jsxs)(g.a,{as:f.b,to:"/",fontSize:"4xl",children:[Object(L.jsx)(T.a,{}),Object(L.jsx)(y.a,{as:"h2",fontSize:"2xl",children:"MovieLister"})]})]})},R=n(201),N=n(216),A=n(222),F=n(204),B=n(205),U=n(123),G=n(206),P=n(182),q=n(102),Q=n.n(q),V=n(125),J=n(103),Y=n.n(J),H=function(e){var t=Object(s.useState)(null),n=Object(x.a)(t,2),c=n[0],i=n[1],a=Object(s.useState)(null),l=Object(x.a)(a,2),o=l[0],r=l[1];Object(s.useEffect)((function(){var t=Y.a.CancelToken.source();return j(e,t),function(){t.cancel()}}),[e]);var j=function(){var e=Object(V.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){n.cancel("Response timed out")}),2e4),e.next=3,Y.a.get(t,{cancelToken:n.token},{timeout:2e4}).then((function(e){i(e.data)})).catch((function(e){r(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{response:c,error:o}},K=n(58),X=n(69),Z=n(218),$=n(199),ee=function(e){var t=e.ytID,n=Object(s.useState)(!0),c=Object(x.a)(n,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){a(!0)}),[t]),Object(L.jsx)(Z.a,{w:"full",isLoaded:!i,children:Object(L.jsx)($.a,{ratio:16/9,maxW:"full",children:Object(L.jsx)("iframe",{title:t,id:"ytplayer",type:"text/html",onLoad:function(){return a(!1)},src:"https://www.youtube.com/embed/"+t})})})},te=function(e){var t=e.img,n=e.title,c=e.year,i=e.rating,a=e.isLoading,l=e.aspect,o=e.id,r=Object(s.useState)(!0),j=Object(x.a)(r,2),b=j[0],d=j[1],u=Object(m.f)();return Object(s.useEffect)((function(){!0===a&&d(!0)}),[a]),Object(L.jsxs)(g.c,{cursor:"pointer",onClick:function(){return u.push("?movie_id="+o)},align:"start",_hover:{transform:"scale(1.05)"},transition:".25s ease-in-out",maxW:"300px",children:[Object(L.jsx)(Z.a,{rounded:"lg",w:"full",isLoaded:!a&&!b,children:Object(L.jsx)($.a,{ratio:l||2/3,w:"full",objectFit:"cover",children:Object(L.jsx)(A.a,{alt:n,fit:"cover",rounded:"lg",src:t,onLoad:function(){return d(!1)}})})}),Object(L.jsx)(Z.a,{maxW:"full",isLoaded:!a,children:Object(L.jsx)(y.a,{maxW:"full",as:"h3",fontSize:"md",isTruncated:!0,title:n,children:n})}),Object(L.jsx)(Z.a,{width:"min",isLoaded:!a,children:Object(L.jsxs)(g.a,{width:"full",align:"center",children:[c>0&&Object(L.jsx)(M.a,{children:c}),Object(L.jsx)(S.a,{as:X.b,fontSize:"20px",color:Object(v.c)("green.500","green.200")}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:i>0?i.toFixed(1)+" / 10":"No rating"})]})})]})},ne=function(e){var t=e.id,n=H("https://yts.mx/api/v2/movie_suggestions.json?movie_id="+t).response,c=Object(s.useState)(!0),i=Object(x.a)(c,2),a=i[0],l=i[1];return Object(s.useEffect)((function(){l(!n||null===n)}),[n]),Object(s.useEffect)((function(){l(!0)}),[t]),Object(L.jsx)(h.a,{columns:{base:1,xs:2,md:4},w:"full",spacing:3,children:n&&n.data.movies.map((function(e,t){return Object(L.jsx)(p.b,{children:Object(L.jsx)(te,{img:e.medium_cover_image,title:e.title_english,year:e.year,isLoading:a,rating:e.rating,id:e.id})},t)}))})},se=function(){var e=Object(R.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,i=new URLSearchParams(Object(m.g)().search),a=Object(m.f)(),l=i.get("movie_id");Object(s.useEffect)((function(){l&&n()}),[i,l,n]);var o=H("https://yts.mx/api/v2/movie_details.json?movie_id="+l).response,r=Object(v.c)("green.500","green.200"),j=Object(s.useState)(!0),b=Object(x.a)(j,2),d=b[0],u=b[1];return Object(s.useEffect)((function(){u(!o||null===o)}),[o]),Object(s.useEffect)((function(){u(!0)}),[l]),Object(L.jsxs)(N.a,{isOpen:t,onClose:function(){a.replace({search:""}),c()},size:"2xl",children:[Object(L.jsx)(N.f,{}),Object(L.jsxs)(N.d,{mx:6,children:[Object(L.jsx)(N.e,{pb:6}),Object(L.jsx)(N.c,{}),Object(L.jsxs)(N.b,{pb:3,children:[o&&Object(L.jsxs)(g.c,{spacing:6,children:[Object(L.jsxs)(g.b,{direction:{base:"column",sm:"row"},w:"full",align:"start",spacing:6,children:[Object(L.jsx)(A.a,{width:{base:"100%",sm:"200px"},rounded:"md",src:o.data.movie.large_cover_image}),Object(L.jsxs)(g.c,{spacing:3,w:"full",align:"start",children:[Object(L.jsx)(y.a,{as:"h1",align:"left",children:o.data.movie.title_long}),Object(L.jsx)(F.a,{}),Object(L.jsx)(D.a,{spacing:3,wrap:"wrap",justify:"flex-start",w:"full",children:o.data.movie.genres.map((function(e,t){return Object(L.jsx)(B.a,{children:e},t)}))}),Object(L.jsxs)(g.a,{spacing:3,justify:"flex-start",w:"full",children:[Object(L.jsx)(S.a,{as:X.b,fontSize:"20px",color:r}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:o.data.movie.rating>0?o.data.movie.rating.toFixed(1)+" / 10":"No rating"})]}),Object(L.jsxs)(g.a,{spacing:3,justify:"flex-start",w:"full",children:[Object(L.jsx)(S.a,{as:X.a,fontSize:"20px",color:r}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:o.data.movie.like_count>0?o.data.movie.like_count.toLocaleString():"No Likes"})]}),Object(L.jsxs)(g.a,{spacing:3,justify:"flex-start",w:"full",children:[Object(L.jsx)(S.a,{as:z.c,fontSize:"20px",color:r}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:o.data.movie.download_count>0?o.data.movie.download_count.toLocaleString():"No Downloads"})]}),Object(L.jsxs)(g.a,{spacing:3,justify:"flex-start",w:"full",children:[Object(L.jsx)(S.a,{as:z.d,fontSize:"20px",color:r}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:""!==o.data.movie.language?o.data.movie.language.toUpperCase():"Unknown"})]}),Object(L.jsxs)(g.a,{spacing:3,justify:"flex-start",w:"full",children:[Object(L.jsx)(S.a,{as:K.c,fontSize:"20px",color:r}),Object(L.jsx)(M.a,{whiteSpace:"nowrap",display:"flex",dir:"row",fontWeight:"semibold",children:o.data.movie.runtime>0?o.data.movie.runtime+" Minutes":"Unknown"})]})]})]}),""!==o.data.movie.yt_trailer_code&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F.a,{}),Object(L.jsx)(y.a,{as:"h3",fontSize:"lg",align:"left",w:"full",children:"Trailer"}),Object(L.jsx)(ee,{ytID:o.data.movie.yt_trailer_code})]}),o.data.movie.description_full&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F.a,{}),Object(L.jsx)(y.a,{as:"h3",fontSize:"lg",align:"left",w:"full",children:"Description"}),Object(L.jsx)(M.a,{align:"left",w:"full",children:o.data.movie.description_full})]}),Object(L.jsx)(F.a,{}),Object(L.jsx)(y.a,{as:"h3",fontSize:"lg",align:"left",w:"full",children:"Torrents"}),Object(L.jsx)(D.a,{spacing:3,wrap:"wrap",align:"start",w:"full",children:o.data.movie.torrents&&o.data.movie.torrents.map((function(e,t){return Object(L.jsxs)(U.a,{as:"a",href:e.url,colorScheme:"green",leftIcon:Object(L.jsx)(z.c,{}),children:[e.quality,".",e.type," (",e.size,")"]},t)}))}),Object(L.jsx)(F.a,{}),Object(L.jsx)(y.a,{as:"h3",fontSize:"lg",align:"left",w:"full",children:"Suggested Movies"}),Object(L.jsx)(ne,{id:i.get("movie_id")})]}),d&&Object(L.jsx)(G.a,{w:"full",pb:3,children:Object(L.jsx)(P.a,{})})]})]})]})},ce=n(207),ie=n(208),ae=n(209),le=function(){var e=Object(v.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(L.jsx)(w.a,{onClick:n,icon:"light"===t?Object(L.jsx)(z.e,{}):Object(L.jsx)(z.g,{})})},oe=n(211),re=function(e){var t=e.onOpen;return Object(s.useEffect)((function(){document.body.addEventListener("keyup",(function(e){83===e.keyCode&&e.altKey&&t()}))}),[t]),Object(L.jsxs)(ce.a,{maxW:"full",children:[Object(L.jsx)(ie.a,{pointerEvents:"none",children:Object(L.jsx)(K.b,{})}),Object(L.jsx)(ae.a,{as:U.a,justifyContent:"start",fontWeight:400,onClick:t,variant:"filled",children:"Search Movies"}),Object(L.jsx)(ie.b,{mr:6,display:{base:"none",md:"flex"},pointerEvents:"none",children:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(oe.a,{children:"alt"})," + ",Object(L.jsx)(oe.a,{children:"s"})]})})]})},je=n(63),be=function(e){var t=e.toggleSideNav,n=Object(R.a)(),c=n.isOpen,i=n.onOpen,a=n.onClose,l=Object(s.useState)(""),o=Object(x.a)(l,2),r=o[0],j=o[1],b=Object(m.f)(),d=H("https://yts.mx/api/v2/list_movies.json?query_term="+r.toLowerCase()).response;return Object(L.jsxs)(h.a,{as:"header",columns:5,row:1,spacing:3,mt:6,mb:9,children:[Object(L.jsx)(p.b,{colSpan:{base:3,lg:1},children:Object(L.jsxs)(g.a,{as:f.b,to:"/",fontSize:"4xl",maxW:"220px",w:"full",children:[Object(L.jsx)(T.a,{}),Object(L.jsx)(y.a,{as:"h2",fontSize:"2xl",children:"MovieLister"})]})}),Object(L.jsx)(p.b,{colSpan:{base:5,lg:3},children:Object(L.jsx)(re,{onOpen:i})}),Object(L.jsx)(p.b,{colSpan:{base:2,lg:1},colStart:{base:4,lg:5},rowStart:1,children:Object(L.jsxs)(g.a,{justify:"flex-end",children:[Object(L.jsx)(w.a,{display:{base:"flex",sm:"none"},icon:Object(L.jsx)(je.a,{})}),Object(L.jsx)(le,{}),Object(L.jsx)(w.a,{onClick:t,display:{base:"flex",md:"none"},icon:Object(L.jsx)(K.a,{})})]})}),Object(L.jsxs)(N.a,{isOpen:c,onClose:function(){a(),j("")},children:[Object(L.jsx)(N.f,{}),Object(L.jsxs)(N.d,{rounded:"xl",p:3,mx:3,children:[Object(L.jsx)(N.e,{p:0,children:Object(L.jsxs)(ce.a,{children:[Object(L.jsx)(ie.a,{pointerEvents:"none",children:Object(L.jsx)(K.b,{})}),Object(L.jsx)(ae.a,{onChange:function(e){j(e.target.value)},type:"text",placeholder:"Search Movies",variant:"filled"})]})}),Object(L.jsxs)(N.b,{p:0,mt:6,display:""===r?"none":"block",children:[d&&d.data.movies&&Object(L.jsx)(g.c,{w:"full",spacing:3,children:d.data.movies.map((function(e,t){return Object(L.jsxs)(S.a,{w:"full",children:[Object(L.jsx)(F.a,{mb:3}),Object(L.jsxs)(g.a,{cursor:"pointer",onClick:function(){return b.push("?movie_id="+e.id)},spacing:6,children:[Object(L.jsx)($.a,{ratio:2/3,w:"10%",objectFit:"cover",children:Object(L.jsx)(A.a,{alt:e.title,fit:"cover",rounded:"lg",src:e.small_cover_image})}),Object(L.jsx)(y.a,{maxW:"80%",as:"h3",fontSize:"xl",children:e.title_long})]})]},t)}))}),d&&!d.data.movies&&Object(L.jsx)(G.a,{w:"full",children:Object(L.jsx)(P.a,{})})]})]})]})]})},de=n(23),ue=n(203),xe=function(e){var t=e.isOpen,n=e.onClose,c=e.videoID,i=e.title,a=Object(s.useState)(!0),l=Object(x.a)(a,2),o=l[0],r=l[1];return Object(L.jsxs)(N.a,{isOpen:t,onClose:n,size:"2xl",children:[Object(L.jsx)(N.f,{}),Object(L.jsxs)(N.d,{px:3,children:[Object(L.jsx)(N.e,{mb:1,children:i}),Object(L.jsx)(N.c,{}),Object(L.jsx)(N.b,{pb:6,children:Object(L.jsx)(Z.a,{w:"full",isLoaded:!o,rounded:"lg",children:Object(L.jsx)($.a,{ratio:16/9,maxW:"full",children:Object(L.jsx)("iframe",{title:i,id:"ytplayer",type:"text/html",onLoad:function(){return r(!1)},src:"https://www.youtube.com/embed/"+c})})})})]})]})},Oe=function(e){var t=e.show,n=e.title,s=e.img,c=e.id,i=e.youtube,a=Object(m.f)(),l=Object(R.a)(),o=l.isOpen,r=l.onOpen,j=l.onClose;return Object(L.jsxs)(S.a,{as:ue.a,in:t,w:"full",pos:"relative",display:t?"block":"none",color:"white",children:[Object(L.jsx)($.a,{ratio:{base:4/3,sm:16/9},children:Object(L.jsx)(A.a,{rounded:"xl",src:s})}),Object(L.jsxs)(G.a,{as:g.c,spacing:{base:3,sm:6},pos:"absolute",w:"full",h:"full",inset:0,children:[Object(L.jsx)(y.a,{as:"h1",fontSize:{base:"xl",sm:"3xl"},textAlign:"center",textShadow:"dark-lg",children:n}),Object(L.jsx)(U.a,{size:"sm",onClick:function(){return a.push("?movie_id="+c)},colorScheme:"green",boxShadow:"dark-lg",children:"Download Now"}),""!==i&&Object(L.jsx)(U.a,{size:"sm",onClick:function(){return r()},textColor:"white",leftIcon:Object(L.jsx)(z.f,{}),boxShadow:"dark-lg",colorScheme:"green",variant:"outline",children:"Watch Trailer"})]}),""!==i&&Object(L.jsx)(xe,{isOpen:o,onClose:j,videoID:i,title:n})]})},he=n(212),pe=function(){return Object(L.jsxs)(g.a,{spacing:3,w:"full",align:"center",pb:{base:2,md:6},children:[Object(L.jsx)(y.a,{as:"h1",fontSize:"3xl",children:"New Releases"}),Object(L.jsx)(B.a,{rounded:"lg",colorScheme:"green",fontSize:"xl",children:"New"}),Object(L.jsx)(he.a,{}),Object(L.jsx)(U.a,{as:f.b,to:"/movies/new",size:"sm",children:"See All"})]})},fe=function(){var e=H("https://yts.mx/api/v2/list_movies.json?sort_by=year").response,t=Object(s.useState)(!0),n=Object(x.a)(t,2),c=n[0],i=n[1],a=Object(s.useState)(1),l=Object(x.a)(a,2),o=l[0],r=l[1],j=Object(s.useState)([{show:!0},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}]),b=Object(x.a)(j,2),d=b[0],u=b[1],O=function(e){r(1===e?6===o?1:o+1:1===o?6:o-1)};return Object(s.useEffect)((function(){var t=[{show:!0},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}];e&&null!==e?(t.map((function(t,n){return[t.img=e.data.movies[n].background_image_original,t.title=e.data.movies[n].title_long,t.id=e.data.movies[n].id,t.youtube=e.data.movies[n].yt_trailer_code]})),t.map((function(e){return e.show=!1})),t[o-1].show=!0,u(t),i(!1)):i(!0)}),[e,o]),Object(L.jsxs)(g.c,{children:[Object(L.jsx)(pe,{}),Object(L.jsx)(Z.a,{rounded:"xl",isLoaded:!c,w:"full",children:Object(L.jsxs)(G.a,{overflow:"hidden",w:"full",pos:"relative",children:[d.map((function(e,t){return Object(L.jsx)(Oe,{show:e.show,isLoading:c,img:e.img,title:e.title,id:e.id,youtube:e.youtube},t)})),Object(L.jsx)(g.a,{spacing:0,pos:"absolute",bottom:3,color:"white",children:Object(de.a)(Array(6)).map((function(e,t){return Object(L.jsx)(je.b,{opacity:t+1===o?1:.3},t)}))}),Object(L.jsx)(w.a,{pos:"absolute",left:3,bottom:3,onClick:function(){return O(-1)},size:"sm",icon:Object(L.jsx)(z.a,{})}),Object(L.jsx)(w.a,{pos:"absolute",right:3,bottom:3,onClick:function(){return O(1)},size:"sm",icon:Object(L.jsx)(z.b,{})})]})})]})},me=function(){var e=H("https://yts.mx/api/v2/list_movies.json?sort_by=date_added").response,t=Object(s.useState)(!0),n=Object(x.a)(t,2),c=n[0],i=n[1];return Object(s.useEffect)((function(){i(!e||null===e)}),[e]),Object(L.jsxs)(g.c,{spacing:6,align:"start",py:6,children:[Object(L.jsxs)(g.b,{w:"full",spacing:{base:3,lg:6},direction:{base:"row",lg:"column"},align:{base:"center",sm:"start"},children:[Object(L.jsx)(y.a,{whiteSpace:"nowrap",textTransform:{base:"none",lg:"uppercase"},as:"h4",fontSize:{base:"2xl",lg:"md"},children:"Recently Added"}),Object(L.jsx)(S.a,{as:"hr",w:"full"})]}),Object(L.jsx)(h.a,{columns:{base:1,xs:2,sm:3,lg:1},spacing:6,w:"full",children:e&&e.data.movies.slice(0,6).map((function(e,t){return Object(L.jsx)(p.b,{w:"full",children:Object(L.jsx)(te,{img:e.background_image,aspect:16/9,title:e.title_english,year:e.year,isLoading:c,rating:e.rating,id:e.id})},t)}))}),e&&Object(L.jsx)(U.a,{as:f.b,to:"/movies/recent",w:"full",colorScheme:"green",children:"View More"}),c&&Object(L.jsx)(G.a,{w:"full",children:Object(L.jsx)(P.a,{})})]})},ge=function(e){var t=e.setPage,n=e.page,s=e.setIsLoading,c=e.type,i=function(e){s(!0),t(n+e)};return Object(L.jsxs)(g.b,{direction:{base:"column",sm:"row"},w:"full",align:{base:"start",sm:"center"},py:6,spacing:6,children:[Object(L.jsxs)(y.a,{whiteSpace:"nowrap",as:"h2",fontSize:"2xl",children:["Top"," ","rating"===c?"Rated":"like_count"===c?"Likes":"Downloads"]}),Object(L.jsx)(F.a,{w:"full"}),Object(L.jsxs)(g.a,{w:{base:"full",sm:"min"},children:[Object(L.jsx)(g.a,{spacing:0,children:Object(de.a)(Array(6)).map((function(e,t){return Object(L.jsx)(je.b,{opacity:t+1===n?1:.3},t)}))}),Object(L.jsx)(he.a,{display:{base:"block",sm:"none"}}),Object(L.jsx)(w.a,{onClick:function(){return i(-1)},isDisabled:1===n,size:"sm",icon:Object(L.jsx)(z.a,{})}),n<6&&Object(L.jsx)(w.a,{onClick:function(){return i(1)},size:"sm",icon:Object(L.jsx)(z.b,{})}),6===n&&Object(L.jsx)(U.a,{as:f.b,to:"/movies/"+("rating"===c?"rating":"like_count"===c?"likes":"downloads"),size:"sm",rightIcon:Object(L.jsx)(z.b,{}),children:"See all"})]})]})},ve=function(e){var t=e.type,n=Object(s.useState)(1),c=Object(x.a)(n,2),i=c[0],a=c[1],l=H("https://yts.mx/api/v2/list_movies.json?sort_by="+t+"&limit=6&page="+i).response,o=Object(s.useState)(!0),r=Object(x.a)(o,2),j=r[0],b=r[1];return Object(s.useEffect)((function(){b(!l||null===l)}),[l]),Object(L.jsxs)(g.c,{py:6,children:[Object(L.jsx)(ge,{setPage:a,page:i,setIsLoading:b,type:t}),Object(L.jsxs)(h.a,{w:"full",columns:{base:1,xs:2,sm:3},row:2,spacing:6,children:[l&&l.data.movies.map((function(e,t){return Object(L.jsx)(p.b,{children:Object(L.jsx)(te,{img:e.medium_cover_image,title:e.title_english,year:e.year,isLoading:j,rating:e.rating,id:e.id})},t)})),j&&Object(L.jsx)(p.b,{as:G.a,colSpan:3,children:Object(L.jsx)(P.a,{})})]})]})},we=function(){return Object(L.jsxs)(h.a,{columns:4,row:1,spacing:6,pb:{base:0,md:6},children:[Object(L.jsx)(p.b,{colSpan:1,display:{base:"none",lg:"block"},children:Object(L.jsx)(me,{})}),Object(L.jsxs)(p.b,{colSpan:{base:4,lg:3},bg:Object(v.c)("gray.300","gray.700"),p:{base:3,md:6},rounded:"xl",children:[Object(L.jsx)(fe,{}),Object(L.jsx)(S.a,{display:{base:"block",lg:"none"},children:Object(L.jsx)(me,{})}),Object(L.jsx)(ve,{type:"rating"}),Object(L.jsx)(ve,{type:"like_count"}),Object(L.jsx)(ve,{type:"download_count"}),Object(L.jsx)(G.a,{w:"full",children:Object(L.jsx)(U.a,{as:f.b,to:"/movies/all",colorScheme:"green",children:"Discover More Movies"})})]})]})},ye=function(){var e=Object(m.g)(),t="",n="",s=null;return"/movies/new"===e.pathname?(t="New Releases",n="year",s=null):"/movies/rating"===e.pathname?(t="Top Rated",n="rating",s=null):"/movies/likes"===e.pathname?(t="Top Likes",n="like_count",s=null):"/movies/downloads"===e.pathname?(t="Top Downloads",n="download_count",s=null):"/movies/recent"===e.pathname?(t="Recently Added",n="date_added",s=null):"/movies/all"===e.pathname?(t="All Movies",n="all",s=null):(t=C(e.pathname.split("/").pop())+" Movies",s=e.pathname.split("/").pop()),{title:t,type:n,genreFromURL:s}},Se=n(124),ke=function(e){var t=e.setPage,n=e.page,s=e.setIsLoading,c=e.movie_count,i=e.limit,a=Math.ceil(c/i),l=function(e){s(!0),t(n+e)};return Object(L.jsxs)(Se.a,{isAttached:!0,boxShadow:"xs",rounded:"md",children:[Object(L.jsx)(w.a,{onClick:function(){return l(-1)},isDisabled:1===n,size:"sm",icon:Object(L.jsx)(z.a,{})}),1!==n&&Object(L.jsx)(U.a,{size:"sm",onClick:function(){return t(1)},isDisabled:1===n,children:"1"}),n-1>1&&Object(L.jsx)(S.a,{px:3,children:"..."}),Object(L.jsx)(U.a,{size:"sm",colorScheme:"green",isDisabled:!0,children:n}),n+1<a&&Object(L.jsx)(S.a,{px:3,children:"..."}),n!==a&&Object(L.jsx)(U.a,{size:"sm",onClick:function(){return t(a)},isDisabled:n===a,children:a}),Object(L.jsx)(w.a,{onClick:function(){return l(1)},isDisabled:n===a,size:"sm",icon:Object(L.jsx)(z.b,{})})]})},_e=n(213),Ce=n(217),ze=function(e){var t=e.rating,n=e.setQuality,s=e.setGenre,c=e.setOrderBy,i=e.setRating,a=e.displayGenre;return Object(L.jsxs)(g.b,{spacing:3,w:"full",children:[Object(L.jsxs)(g.b,{direction:{base:"column",sm:"row"},spacing:3,children:[Object(L.jsxs)(_e.a,{variant:"filled",placeholder:"Order By",size:"sm",rounded:"lg",onChange:function(e){return c(e.target.value)},children:[Object(L.jsx)("option",{value:"desc",children:"Descending"}),Object(L.jsx)("option",{value:"asc",children:"Ascending"})]}),Object(L.jsxs)(_e.a,{variant:"filled",placeholder:"Quality",size:"sm",rounded:"lg",onChange:function(e){return n(e.target.value)},children:[Object(L.jsx)("option",{value:"720p",children:"720p"}),Object(L.jsx)("option",{value:"1080p",children:"1080p"}),Object(L.jsx)("option",{value:"2160p",children:"2160p"}),Object(L.jsx)("option",{value:"3D",children:"3D"})]}),a&&Object(L.jsx)(_e.a,{variant:"filled",placeholder:"Genre",defaultValue:"all",size:"sm",rounded:"lg",onChange:function(e){return s(e.target.value)},children:_.map((function(e,t){return Object(L.jsx)("option",{value:e,children:C(e)},t)}))})]}),Object(L.jsxs)(g.a,{spacing:6,children:[Object(L.jsx)(M.a,{children:"Rating"}),Object(L.jsxs)(Ce.a,{colorScheme:"green",defaultValue:0,min:0,max:9,step:1,onChangeEnd:function(e){return i(e)},children:[Object(L.jsxs)(Ce.d,{children:[Object(L.jsx)(S.a,{position:"relative",right:10}),Object(L.jsx)(Ce.b,{})]}),Object(L.jsx)(Ce.c,{boxSize:4})]}),Object(L.jsxs)(M.a,{children:[t,"+"]})]})]})},Le=function(){var e=ye(),t=e.title,n=e.type,c=e.genreFromURL,i=Object(s.useState)(1),a=Object(x.a)(i,2),l=a[0],o=a[1],r=Object(s.useState)("all"),j=Object(x.a)(r,2),b=j[0],d=j[1],u=Object(s.useState)("all"),O=Object(x.a)(u,2),m=O[0],w=O[1],S=Object(s.useState)("desc"),k=Object(x.a)(S,2),_=k[0],C=k[1],z=Object(s.useState)(0),E=Object(x.a)(z,2),W=E[0],D=E[1],M=H("https://yts.mx/api/v2/list_movies.json?"+(c?"":"sort_by="+n+"&")+"quality="+b+"&genre="+m+"&minimum_rating="+W+"&order_by="+_+"&page="+l).response,T=Object(s.useState)(!0),I=Object(x.a)(T,2),R=I[0],N=I[1];return Object(s.useEffect)((function(){w(null!==c?c:"all")}),[c]),Object(s.useEffect)((function(){N(!M||null===M)}),[M]),Object(s.useEffect)((function(){N(!0)}),[b,m,_,W,n]),Object(L.jsxs)(g.c,{spacing:6,p:{base:3,md:6},bg:Object(v.c)("gray.300","gray.700"),rounded:"xl",mb:6,children:[Object(L.jsxs)(g.a,{alignSelf:"start",w:"full",children:[Object(L.jsx)(y.a,{as:"h1",fontSize:"3xl",children:t}),Object(L.jsx)(he.a,{}),Object(L.jsx)(U.a,{as:f.b,to:"/",size:"sm",children:"Back to Home"})]}),Object(L.jsx)(F.a,{}),Object(L.jsx)(ze,{displayGenre:!c,rating:W,setQuality:d,setGenre:w,setOrderBy:C,setRating:D}),Object(L.jsxs)(h.a,{w:"full",columns:{base:1,xs:2,sm:3,lg:4},spacing:{base:3,md:6},children:[M&&M.data.movies.map((function(e,t){return Object(L.jsx)(p.b,{children:Object(L.jsx)(te,{img:e.medium_cover_image,title:e.title_english,year:e.year,isLoading:R,rating:e.rating,id:e.id})},t)})),R&&Object(L.jsx)(p.b,{as:G.a,colSpan:{xs:2,sm:3,xl:4},children:Object(L.jsx)(P.a,{})})]}),M&&Object(L.jsx)(ke,{setPage:o,setIsLoading:N,page:l,limit:M.data.limit,movie_count:M.data.movie_count})]})},Ee=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),n=t[0],c=t[1],i=function(){c(!n)};return Object(L.jsx)(O.a,{as:"main",maxW:{xs:"full",md:"720px",lg:"960px",xl:"1140px",xxl:"1320px"},children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(be,{toggleSideNav:i}),Object(L.jsxs)(h.a,{columns:5,row:1,spacing:6,children:[Object(L.jsx)(p.b,{colSpan:{base:5,md:4},children:Object(L.jsxs)(m.c,{children:[Object(L.jsx)(m.a,{exact:!0,path:"/",component:we}),Object(L.jsx)(m.a,{path:"/movies/",component:Le})]})}),Object(L.jsx)(p.b,{children:Object(L.jsx)(W,{isOpen:n,toggleSideNav:i,setIsOpen:c})})]}),Object(L.jsx)(se,{}),Object(L.jsx)(I,{})]})})};a.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsxs)(l.a,{resetCSS:!0,theme:u,children:[Object(L.jsx)(o.a,{initialColorMode:u.config.initialColorMode}),Object(L.jsx)(Ee,{})]})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.1985852c.chunk.js.map