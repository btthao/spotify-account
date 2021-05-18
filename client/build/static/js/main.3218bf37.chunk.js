(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{57:function(e,t,s){},88:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(23),l=s.n(n),r=(s(57),s(3)),i=s(1);var o=function(e){var t=e.link,s=e.text,a=e.blank;return Object(i.jsx)("a",{className:"bg-spotify-green m-auto rounded-full px-4 py-3 font-bold tracking-wider filter hover:brightness-110 duration-150 min-w-max uppercase sm:px-8 sm:py-5 sm:text-xl",href:t,target:a?"_blank":"",rel:"noreferrer",children:s})},d="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("3fc13371e36b4dc0a569cd63066b7490","&response_type=code&redirect_uri=").concat("https://personal-spotify.herokuapp.com/","&scope=").concat(["user-read-recently-played","user-top-read","user-read-email","user-read-private","playlist-read-private","playlist-modify-private","playlist-modify-public"].join("%20"),"&show_dialog=true"),m=s(39);var x=function(e){var t=e.title;return Object(i.jsxs)(m.a,{title:t,htmlAttributes:{lang:"en"},children:[Object(i.jsx)("meta",{name:"description",content:"Spotify stuff"}),Object(i.jsx)("meta",{name:"author",content:"Thao Bui"})]})};var b=function(){return Object(i.jsxs)("div",{className:"w-screen h-screen grid place-items-center ",children:[Object(i.jsx)(x,{title:"Log in"}),Object(i.jsx)(o,{text:"LOGIN TO SPOTIFY",link:d})]})},j=s(19),u=s(5),f=s(42),h=s.n(f),g=s(44),p=s.n(g),O=s(43),v=s.n(O),y=[{id:1,url:"/",name:"Home",icon:Object(i.jsx)(h.a,{})},{id:2,url:"/playlists",name:"Playlists",icon:Object(i.jsx)(v.a,{})},{id:3,url:"/recent",name:"Recent",icon:Object(i.jsx)(p.a,{})}],w=s(7),N=s.n(w),k=s(104),S=Object(a.createContext)(),T=function(e){var t=e.reducer,s=e.initialState,c=e.children;return Object(i.jsx)(S.Provider,{value:Object(a.useReducer)(t,s),children:c})},_=function(){return Object(a.useContext)(S)},E=function(e){return 0===e.lastIndexOf("/")?e:e.substring(0,e.lastIndexOf("/"))};var I=Object(u.g)((function(e){var t,s=e.history,c=e.logout,n=e.headers,l=_(),o=Object(r.a)(l,2),d=(o[0],o[1]),m=Object(a.useState)(E(window.location.pathname)),x=Object(r.a)(m,2),b=x[0],u=x[1],f=Object(a.useState)({}),h=Object(r.a)(f,2),g=h[0],p=h[1];return Object(a.useEffect)((function(){s.listen((function(e){u(E(e.pathname))}))}),[s]),Object(a.useEffect)((function(){N.a.get("https://api.spotify.com/v1/me",{headers:n}).then((function(e){p(e.data),d({type:"SET_USER",payload:e.data.id})})).catch((function(e){console.log(e)}))}),[n]),Object(i.jsxs)("div",{className:" fixed flex bottom-0 left-0 w-full z-70 bg-black bg-opacity-90 lg:top-0 lg:bg-opacity-50 lg:w-52 lg:h-screen lg:flex-col overflow-hidden",children:[Object(i.jsxs)("div",{className:"fixed right-1 top-3 flex border border-s-grey rounded-full bg-s-grey lg:relative lg:w-full lg:grid lg:place-items-center lg:px-1 lg:py-10 lg:gap-3 lg:border-0 lg:top-0 lg:right-0 lg:rounded-none lg:bg-transparent  text-center ",children:[Object(i.jsx)(k.a,{alt:g.display_name,src:"".concat((null===(t=g.images)||void 0===t?void 0:t.length)>0?g.images[0].url:""),className:"user-avatar"}),Object(i.jsx)("h1",{className:"hidden overflow-hidden lg:block font-semibold text-lg  ",children:g.display_name}),Object(i.jsx)("button",{className:" cursor-pointer text-xs rounded-full px-3 lg:py-1 lg:border border-spotify-green lg:hover:bg-spotify-green ",onClick:c,children:"Log Out"})]}),Object(i.jsx)("ul",{className:" flex w-full  border-gray-700 lg:border-b lg:flex-col",children:y.map((function(e){return Object(i.jsx)("li",{className:" w-full lg:border-t border-gray-700 h-16 lg:h-12",children:Object(i.jsxs)(j.b,{to:e.url,className:"group flex h-full ",children:[Object(i.jsx)("div",{className:"hidden lg:block lg:w-1.5 lg:h-full bg-spotify-green  group-hover:opacity-100 \n                  ".concat(b===e.url?"opacity-100":"opacity-0")}),Object(i.jsxs)("div",{className:"flex-1 flex flex-col  items-center justify-center lg:justify-start lg:flex-row group-hover:text-white group-hover:font-bold ".concat(b===e.url?"text-white font-bold":"text-gray-500 font-semibold"),children:[Object(i.jsx)("div",{className:"lg:mx-3",children:e.icon}),Object(i.jsx)("h6",{className:"text-xs sm:text-sm   lg:text-base",children:e.name})]})]})},e.id)}))})]})}));var C=function(e){var t=e.type,s=e.name,a=e.img,c=e.link;return Object(i.jsxs)("div",{className:" mt-24 relative w-full pb-trending-90 bg-white bg-opacity-5 z-0 md:pb-trending-40 md:w-11/12 md:justify-self-start md:mt-16",children:[Object(i.jsx)("small",{className:"absolute min-w-max -top-24 left-1/2 transform -translate-x-1/2  text-xs bg-opacity-40 bg-s-blue2 py-1 px-8 text-center  md:top-2 md:-left-2 md:translate-x-0 md:px-4",children:t}),Object(i.jsxs)("div",{className:" z-20 w-over absolute left-1/2 bottom-3  transform -translate-x-1/2 text-center md:top-12 md:w-4/6 md:-left-4 md:translate-x-0 md:text-left",children:[Object(i.jsx)("h3",{className:"truncate max-w-full bg-s-blue2 px-1 py-2 font-semibold xs:font-bold xs:text-xl md:pl-8",children:s}),Object(i.jsx)("button",{className:"mt-3 tracking-wider text-spotify-green font-bold text-sm md:pl-8",children:Object(i.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:"Play now"})})]}),Object(i.jsx)("div",{className:" absolute z-10 top-0 left-1/2 w-85 h-0 pb-trending-85  transform -translate-x-1/2 -translate-y-12 bg-gray-900 md:w-1/2 md:translate-x-6 md:pb-trending-50 ",children:Object(i.jsx)("img",{src:a,alt:s,className:"w-full h-full absolute top-0 left-0 object-contain "})})]})};var z=function(e){var t=e.artist,s=e.track;return Object(i.jsxs)("div",{className:"grid place-items-center py-14 px-8  md:px-14  ",children:[Object(i.jsx)("h1",{className:"mb-10 text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ",children:"Your listening trends"}),Object(i.jsxs)("div",{className:" grid w-full gap-10  place-items-center  max-w-sm md:max-w-xl xl:grid-cols-2 xl:max-w-7xl xl:gap-14",children:[Object(i.jsx)(C,{type:"Top Artist",name:t.name,img:t.images[0].url,link:t.external_urls.spotify}),Object(i.jsx)(C,{type:"Top Track",name:s.name,img:s.album.images[0].url,link:s.external_urls.spotify})]})]})},L=s(45),P=s.n(L);var A=function(e){var t=e.img,s=e.name;return Object(i.jsx)("div",{className:"w-full pb-item-100 relative overflow-hidden bg-gray-900 shadow-2xl ",children:Object(i.jsx)("img",{src:t,alt:s,className:"  w-full h-full absolute top-0 left-0 object-contain "})})};var R=function(e){var t=e.img,s=e.name,a=e.link,c=e.trackName;return Object(i.jsxs)("div",{className:"w-full group relative",children:[Object(i.jsx)(A,{img:t,name:c||s}),Object(i.jsxs)("div",{className:"w-full flex flex-col items-center justify-center text-center md:absolute top-0 left-0  md:h-full md:opacity-0 md:bg-black md:bg-opacity-80 md:group-hover:opacity-100 md:transition md:duration-100 overflow-hidden ",children:[Object(i.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"hidden md:block",children:Object(i.jsx)(P.a,{className:"play-icon"})}),c&&Object(i.jsx)("p",{className:"truncate max-w-full px-2 mt-1 font-semibold text-xs xs:text-sm xl:text-base",children:c}),Object(i.jsx)("p",{className:"px-2 mt-0.5 font-medium text-xs xs:text-sm xl:text-base  ".concat(c?"text-gray-400":"text-white"," "),children:s.length>40?s.substring(0,40)+" ...":s}),Object(i.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"md:hidden mt-0.5 tracking-wider text-spotify-green font-semibold text-xs sm:text-sm ",children:"Play now"})]})]})};var B=function(e){var t=e.name,s=e.items;return Object(i.jsxs)("div",{className:"grid w-full place-items-center mt-6 py-6  lg:px-8  ",children:[Object(i.jsx)("h1",{className:"mb-6 px-2 text-xl xs:text-3xl lg:text-4xl text-center font-bold",children:t}),Object(i.jsx)("div",{className:"grid w-full gap-5 grid-cols-2 xs:p-5  md:grid-cols-4 max-w-7xl ",children:s.map((function(e){return Object(i.jsx)(R,{trackName:"Top Artists"===t?"":e.name,name:"Top Artists"===t?e.name:e.artists.map((function(e){return e.name})).join(", "),img:"Top Artists"===t?e.images[0].url:e.album.images[0].url,link:e.external_urls.spotify},e.id)}))})]})};var J=function(e){var t=e.headers,s=Object(a.useState)([]),c=Object(r.a)(s,2),n=c[0],l=c[1],o=Object(a.useState)(!0),d=Object(r.a)(o,2),m=d[0],b=d[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),f=u[0],h=u[1],g=Object(a.useState)(!0),p=Object(r.a)(g,2),O=p[0],v=p[1],y=Object(a.useState)(!0),w=Object(r.a)(y,2),k=w[0],S=w[1];return Object(a.useEffect)((function(){N.a.get("https://api.spotify.com/v1/me/top/artists?limit=8&time_range=long_term",{headers:t}).then((function(e){l(e.data.items),b(!1)})).catch((function(e){console.log(e),window.location.reload()})),N.a.get("https://api.spotify.com/v1/me/top/tracks?limit=8&time_range=long_term",{headers:t}).then((function(e){h(e.data.items),v(!1)})).catch((function(e){console.log(e),window.location.reload()}))}),[t]),Object(a.useEffect)((function(){O||m||S(!1)}),[O,m]),Object(i.jsxs)("div",{className:" lg:pl-52  bg-s-blue3 bg-gradient-to-r from-s-blue3 to-s-purple2 pb-20 min-h-screen grid  ",children:[Object(i.jsx)(x,{title:"Home"}),k&&Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"Loading..."}),!k&&(0===n.length&&0===f.length?Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"No data to show..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)(z,{artist:n[0],track:f[0]}),Object(i.jsx)(B,{name:"Top Artists",items:n}),Object(i.jsx)(B,{name:"Top Tracks",items:f})]}))]})};var D=function(e){var t=e.headers,s=Object(a.useState)([]),c=Object(r.a)(s,2),n=c[0],l=c[1],d=Object(a.useState)(!0),m=Object(r.a)(d,2),b=m[0],j=m[1];return Object(a.useEffect)((function(){N.a.get("https://api.spotify.com/v1/me/player/recently-played?limit=6",{headers:t}).then((function(e){l(e.data.items),j(!1)})).catch((function(e){console.log(e),window.location.reload()}))}),[t]),Object(i.jsxs)("div",{className:"lg:pl-52 bg-s-purple1 bg-gradient-to-tr from-s-purple1 via-gray-900 to-s-blue1 pb-20 min-h-screen grid ",children:[Object(i.jsx)(x,{title:"Recent"}),b&&Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"Loading..."}),!b&&(0===n.length?Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"No data to show..."}):Object(i.jsxs)("div",{className:"text-center pt-12",children:[Object(i.jsx)("h1",{className:" mb-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ",children:"Jump Back In"}),Object(i.jsx)(o,{blank:!0,text:"OPEN WEB PLAYER",link:"https://open.spotify.com/"}),Object(i.jsx)("div",{className:" mt-6 grid m-auto w-full gap-5 grid-cols-2 py-5 xs:p-5 md:py-12 md:px-8  md:grid-cols-3 md:w-11/12 lg:w-10/12 max-w-7xl",children:n.map((function(e){var t=e.track;return Object(i.jsx)(R,{trackName:t.name,name:t.artists.map((function(e){return e.name})).join(", "),link:t.external_urls.spotify,img:t.album.images[0].url},t.id)}))})]}))]})};var F=function(e){var t=e.img,s=e.name,a=e.tracks,c=e.id;return Object(i.jsxs)(j.b,{to:"/playlists/".concat(c),className:"w-full group relative",children:[Object(i.jsx)(A,{img:t,name:s}),Object(i.jsxs)("div",{className:"w-full mt-2 flex flex-col items-center justify-center text-center  overflow-hidden ",children:[Object(i.jsx)("h6",{className:" px-2 mt-0.5 font-medium text-xs xs:text-sm xl:text-base group-hover:underline ",children:s.length>70?s.substring(0,70)+" ...":s}),Object(i.jsx)("p",{className:"text-sm text-spotify-green",children:"".concat(a,a>1?" tracks":" track")})]})]})},U=s.p+"static/media/icon.9d20ff57.png";var Y=function(e){var t=e.headers,s=Object(a.useState)([]),c=Object(r.a)(s,2),n=c[0],l=c[1],o=Object(a.useState)(!0),d=Object(r.a)(o,2),m=d[0],b=d[1];return Object(a.useEffect)((function(){N.a.get("https://api.spotify.com/v1/me/playlists",{headers:t}).then((function(e){l(e.data.items),b(!1)})).catch((function(e){console.log(e),window.location.reload()}))}),[t]),Object(i.jsxs)("div",{className:"lg:pl-52  bg-s-blue2 bg-gradient-to-r from-s-purple2 to-s-blue2 pb-20 min-h-screen  grid ",children:[Object(i.jsx)(x,{title:"Playlists"}),m&&Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"Loading..."}),!m&&(0===n.length?Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"You have no playlists."}):Object(i.jsxs)("div",{className:"text-center pt-14",children:[Object(i.jsx)("h1",{className:" mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ",children:"Your Playlists"}),Object(i.jsx)("div",{className:"grid gap-4 m-auto  grid-cols-2 py-5 xs:px-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4 max-w-7xl",children:n.map((function(e){return Object(i.jsx)(F,{img:e.images.length>0?e.images[0].url:U,name:e.name,tracks:e.tracks.total,id:e.id},e.id)}))})]}))]})},H=s(46),M=s.n(H),q=function(e){var t=Math.floor(e/6e4),s=(e%6e4/1e3).toFixed(0);return 60===s?t+1+":00":t+":"+(s<10?"0":"")+s};var G=function(e){var t=e.name,s=e.img,a=e.artist,c=e.album,n=e.duration,l=e.edit,r=e.onClick;return Object(i.jsxs)("div",{className:" flex md:grid md:grid-cols-track md:gap-4 w-full min-w-0  ",children:[Object(i.jsxs)("div",{className:"flex-1 flex items-center min-w-0",children:[l&&Object(i.jsx)(M.a,{className:"delete-icon cursor-pointer border rounded-full mr-3 ",onClick:r}),Object(i.jsx)("div",{className:"w-10 mr-3 sm:w-12 ",children:Object(i.jsx)(A,{name:t,img:s})}),Object(i.jsxs)("div",{className:"min-w-0 w-full mr-3  ",children:[Object(i.jsx)("h3",{className:"font-semibold text-sm md:text-base truncate ",children:t}),Object(i.jsx)("h4",{className:"text-xs truncate text-gray-400",children:a})]})]}),Object(i.jsx)("div",{className:"min-w-0 hidden md:block self-center  ",children:Object(i.jsx)("h3",{className:"truncate text-sm text-gray-400 ",children:c})}),Object(i.jsx)("div",{className:"text-right text-xs sm:text-sm self-center",children:q(n)})]})},W=s(51),K=s.n(W),Q=s(50),V=s.n(Q),X=s(48),Z=s.n(X),$=s(47),ee=s.n($);var te=function(e){var t=e.name,s=e.img,a=e.artist,c=e.onClick;return Object(i.jsxs)("div",{className:" flex w-full min-w-0  ",children:[Object(i.jsxs)("div",{className:"flex-1 flex items-center min-w-0 mr-4",children:[Object(i.jsx)("div",{className:"w-10 mr-3 sm:w-12 ",children:Object(i.jsx)(A,{name:t,img:s})}),Object(i.jsxs)("div",{className:"min-w-0 w-full  ",children:[Object(i.jsx)("h3",{className:"font-semibold max-w-full text-sm md:text-base truncate ",children:t}),Object(i.jsx)("h4",{className:"text-xs truncate text-gray-400",children:a})]})]}),Object(i.jsx)("div",{className:"self-center",children:Object(i.jsx)(ee.a,{className:"add-icon cursor-pointer border rounded-full",onClick:c})})]})},se=s(49),ae=s.n(se);var ce=function(e){var t=e.onClick,s=e.headers,c=e.playlist,n=e.name,l=Object(a.useState)(""),o=Object(r.a)(l,2),d=o[0],m=o[1],x=Object(a.useState)([]),b=Object(r.a)(x,2),j=b[0],u=b[1],f=Object(a.useState)(!1),h=Object(r.a)(f,2),g=h[0],p=h[1],O=Object(a.useState)(""),v=Object(r.a)(O,2),y=v[0],w=v[1];return Object(a.useEffect)((function(){var e=encodeURIComponent(d.trim());e!==y&&w(e)}),[d,y]),Object(a.useEffect)((function(){var e=!0;return y||u([]),s&&y&&N.a.get("https://api.spotify.com/v1/search?q=".concat(y,"&type=track"),{headers:s}).then((function(t){e&&u(t.data.tracks.items)})).catch((function(e){console.log(e)})),function(){e=!1}}),[s,y]),Object(i.jsxs)("div",{className:"fixed z-100 top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90",children:[Object(i.jsxs)("div",{className:"absolute w-1/2 xs:w-1/3 sm:w-1/6 max-w-xs text-center bg-gray-800 bg-opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 rounded-md text-sm z-40 ".concat(g?"block":"hidden"," "),children:["Added to ",n.length>60?n.substring(0,60)+" ...":n]}),Object(i.jsxs)("div",{className:"absolute pb-6 px-4 top-1/2 left-1/2 w-full sm:w-5/6 max-w-lg h-full sm:h-5/6 max-h-120 transform bg-black -translate-x-1/2 -translate-y-1/2 overflow-scroll  ",children:[Object(i.jsxs)("div",{className:" bg-black w-full pt-6 pb-2 z-30 sticky -top-1 flex flex-col ",children:[Object(i.jsx)(Z.a,{className:"cursor-pointer mb-2 self-end ",onClick:t}),Object(i.jsx)("input",{placeholder:"Search tracks",className:"bg-gray-700 rounded-sm w-full p-2 text-sm ",value:d,onChange:function(e){return m(e.target.value)}})]}),Object(i.jsx)("div",{className:"grid pb-4 mt-4 gap-4",children:j.length>0?j.map((function(e,t){return Object(i.jsx)(te,{name:e.name,img:e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]).url,artist:e.artists.map((function(e){return e.name})).join(", "),onClick:function(){var t;t=e.uri,N.a.post("/add-track",{playlist:c,track:[t]}).then((function(){p(!0),setTimeout((function(){return p(!1)}),1e3)})).catch((function(e){console.log(e)}))}},t)})):Object(i.jsx)("div",{className:"grid w-full mt-8 place-items-center",children:Object(i.jsx)(ae.a,{color:"white"})})})]})]})};var ne=function(e){var t=e.headers,s=_(),c=Object(r.a)(s,2),n=c[0].userId,l=(c[1],Object(a.useState)([])),o=Object(r.a)(l,2),d=o[0],m=o[1],b=Object(a.useState)(""),j=Object(r.a)(b,2),f=j[0],h=j[1],g=Object(a.useState)(""),p=Object(r.a)(g,2),O=p[0],v=p[1],y=Object(a.useState)(""),w=Object(r.a)(y,2),k=w[0],S=w[1],T=Object(a.useState)(""),E=Object(r.a)(T,2),I=E[0],C=E[1],z=Object(a.useState)(!0),L=Object(r.a)(z,2),P=L[0],R=L[1],B=Object(a.useState)(""),J=Object(r.a)(B,2),D=J[0],F=J[1],Y=Object(a.useState)(!1),H=Object(r.a)(Y,2),M=H[0],q=H[1],W=Object(a.useState)(""),Q=Object(r.a)(W,2),X=Q[0],Z=Q[1],$=Object(u.f)().id,ee=Object(a.useState)(!1),te=Object(r.a)(ee,2),se=te[0],ae=te[1],ne=Object(a.useCallback)((function(){N.a.get("https://api.spotify.com/v1/playlists/".concat($),{headers:t}).then((function(e){var t=e.data,s=t.external_urls,a=t.images,c=t.name,n=t.owner,l=t.tracks,r=t.snapshot_id;h(c),v(n.display_name),F(n.id),S(s.spotify),m(l.items),Z(r),C(a.length>0?a[0].url:U),R(!1)})).catch((function(e){console.log(e),window.location.reload()}))}),[t,$]);return Object(a.useEffect)((function(){ne()}),[ne]),Object(i.jsxs)("div",{className:"lg:pl-52  bg-gray-900  pb-20 min-h-screen grid  ",children:[Object(i.jsx)(x,{title:f}),se&&Object(i.jsx)(ce,{playlist:$,name:f,headers:t,onClick:function(){return q(!1),ne(),void ae(!1)}}),P&&Object(i.jsx)("h1",{className:"text-center font-bold text-xl sm:text-3xl self-center ",children:"Loading..."}),!P&&Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"w-full flex flex-col items-center pt-12 pb-8 xl:pb-20 px-6 xl:px-10 text-center bg-gradient-to-b from-yellow-400 via-purple-600  to-transparent xl:flex-row relative",children:[Object(i.jsx)("h1",{className:" z-20 mb-2 px-2 font-semibold text-lg xs:text-2xl md:text-4xl xl:hidden xs:px-6 ",children:f.length>120?f.substring(0,120)+" ...":f}),Object(i.jsx)("div",{className:"w-1/3 lg:w-full max-w-xs mb-2 z-20  ",children:Object(i.jsx)(A,{name:f,img:I})}),Object(i.jsxs)("div",{className:"  xl:ml-5 xl:text-left z-20 pb-4",children:[Object(i.jsx)("h1",{className:"hidden mb-2 font-extrabold xl:block ".concat(f.length>60?"text-4xl":"text-6xl"),children:f.length>120?f.substring(0,120)+" ...":f}),Object(i.jsxs)("h3",{className:"text-sm mb-2 xl:text-base",children:["By ",O]}),Object(i.jsxs)("h4",{className:"mb-3 text-sm text-spotify-green font-semibold",children:[d.length>1?"".concat(d.length," tracks"):"".concat(d.length," track"),n===D&&Object(i.jsxs)("span",{className:"cursor-pointer",onClick:function(){return ae(!0)},children:[" ","\u2022 Add songs"]})]}),Object(i.jsx)("a",{className:"border mb-8 text-xs py-1.5 px-4 rounded-full border-spotify-green hover:bg-spotify-green font-semibold",href:k,target:"_blank",rel:"noreferrer",children:"Listen on Spotify"})]}),Object(i.jsx)("div",{className:"absolute bottom-0 h-full w-full left-0 z-0  bg-gray-900 bg-opacity-30",children:Object(i.jsx)("div",{className:"absolute bottom-0 h-1/4 w-full left-0 z-0  bg-gray-900 bg-opacity-20"})})]}),Object(i.jsxs)("div",{className:"w-full  mt-10 px-3 xs:px-5 grid gap-5 xl:px-10 ",children:[n===D&&d.length>0&&Object(i.jsxs)("div",{className:" w-full text-sm flex items-center justify-between ",children:[Object(i.jsxs)("button",{className:" focus:outline-none flex items-center cursor-pointer",onClick:function(){return q(!0)},children:[Object(i.jsx)(V.a,{className:"mr-1"})," Edit playlist"]}),M&&Object(i.jsx)("button",{className:"focus:outline-none cursor-pointer",onClick:function(){return q(!1)},children:"Done"})]}),d.length>0&&Object(i.jsxs)("div",{className:"hidden md:grid font-extralight text-gray-500 grid-cols-track gap-4 text-sm border-b pb-2 mb-3 border-gray-700 uppercase ",children:[Object(i.jsx)("h1",{children:"Title"}),Object(i.jsx)("h1",{children:"Album"}),Object(i.jsx)(K.a,{className:"justify-self-end time-icon "})]}),d.map((function(e,t){var s=e.track;return Object(i.jsx)(G,{name:s.name,img:s.album.images.reduce((function(e,t){return t.height<e.height?t:e}),s.album.images[0]).url,artist:s.artists.map((function(e){return e.name})).join(", "),duration:s.duration_ms,album:s.album.name,edit:M,onClick:function(){return function(e){N.a.post("/delete-track",{playlist:$,track:[e],snapshotId:X}).then((function(e){ne()})).catch((function(e){console.log(e)}))}(t)}},t)}))]})]})]})};var le=function(e){var t=e.logout,s=e.headers;return Object(i.jsxs)(j.a,{children:[Object(i.jsx)(I,{logout:t,headers:s}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(J,{headers:s})}),Object(i.jsx)(u.a,{exact:!0,path:"/recent",children:Object(i.jsx)(D,{headers:s})}),Object(i.jsx)(u.a,{exact:!0,path:"/playlists",children:Object(i.jsx)(Y,{headers:s})}),Object(i.jsx)(u.a,{exact:!0,path:"/playlists/:id",children:Object(i.jsx)(ne,{headers:s})})]})]})},re=s(14);var ie=function(){var e=_(),t=Object(r.a)(e,2),s=t[0].userId,c=(t[1],Object(a.useState)("")),n=Object(r.a)(c,2),l=n[0],i=n[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),m=d[0],x=d[1],b=Object(a.useState)(""),j=Object(r.a)(b,2),u=j[0],f=j[1],h=Object(a.useState)(""),g=Object(r.a)(h,2),p=g[0],O=g[1],v=Object(a.useState)(!0),y=Object(r.a)(v,2),w=y[0],k=y[1];return Object(a.useEffect)((function(){s||(x(""),f(""),O(""))}),[s]),Object(a.useEffect)((function(){var e=localStorage.getItem("spotify-access-detail")?JSON.parse(localStorage.getItem("spotify-access-detail")):{};if(0===Object.keys(e).length){console.log("get code for first time");var t=new URLSearchParams(window.location.search).get("code");t?i(t):k(!1)}else{var s=(Date.now()-e.timestamp)/1e3;s<3500?(console.log("relogin before one hour"),N.a.post("/login",{access_token:e.accessToken,refresh_token:e.refreshToken}).then((function(){x(e.accessToken),f(e.refreshToken),O(3600),k(!1)})).catch((function(e){console.log(e),window.location="/"}))):s<1e6?(console.log("relogin before 10 days"),N.a.post("/refresh",{refresh_token:e.refreshToken}).then((function(t){x(t.data.accessToken),O(t.data.expiresIn),localStorage.setItem("spotify-access-detail",JSON.stringify(Object(re.a)(Object(re.a)({},t.data),{},{refreshToken:e.refreshToken,timestamp:Date.now()}))),k(!1)})).catch((function(e){console.log(e),window.location="/"}))):(console.log("login again"),x(""),k(!1))}return function(){x(""),f(""),O(""),k(!0),i("")}}),[]),Object(a.useEffect)((function(){l&&(console.log("login first time"),N.a.post("/login",{code:l}).then((function(e){localStorage.setItem("spotify-access-detail",JSON.stringify(Object(re.a)(Object(re.a)({},e.data),{},{timestamp:Date.now()}))),x(e.data.accessToken),f(e.data.refreshToken),O(e.data.expiresIn),k(!1),window.history.pushState({},null,"/")})).catch((function(e){console.log(e),window.location="/"})))}),[l]),Object(a.useEffect)((function(){var e=setInterval((function(){console.log("refresh while on the app"),u&&p&&N.a.post("/refresh").then((function(e){x(e.data.accessToken),O(e.data.expiresIn),localStorage.setItem("spotify-access-detail",JSON.stringify(Object(re.a)(Object(re.a)({},e.data),{},{refreshToken:u,timestamp:Date.now()})))})).catch((function(e){console.log(e),window.location="/"}))}),1e3*(p-300));return u||clearInterval(e),function(){return clearInterval(e)}}),[u,p]),{accessToken:m,loading:w}};var oe=function(){var e=_(),t=Object(r.a)(e,2),s=(t[0],t[1]),c=Object(a.useState)(""),n=Object(r.a)(c,2),l=n[0],o=n[1],d=Object(a.useState)({}),m=Object(r.a)(d,2),x=m[0],j=m[1],u=ie(),f=u.accessToken,h=u.loading;return Object(a.useEffect)((function(){f&&(o(f),j({Authorization:"Bearer ".concat(f),"Content-Type":"application/json"}))}),[f]),h?null:l?Object(i.jsx)(le,{headers:x,logout:function(){o(""),localStorage.removeItem("spotify-access-detail"),window.history.pushState({},null,"/"),s({type:"SET_USER",payload:null})}}):Object(i.jsx)(b,{})},de=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,105)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(T,{initialState:{userId:null},reducer:function(e,t){switch(t.type){case"SET_USER":return Object(re.a)(Object(re.a)({},e),{},{userId:t.payload});default:return e}},children:Object(i.jsx)(oe,{})})}),document.getElementById("root")),de()}},[[88,1,2]]]);
//# sourceMappingURL=main.3218bf37.chunk.js.map