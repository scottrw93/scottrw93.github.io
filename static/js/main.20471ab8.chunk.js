(this["webpackJsonphome-wall"]=this["webpackJsonphome-wall"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),r=n.n(o),c=n(10),i=n.n(c),l=(n(109),n(11)),s=(n(110),n(45)),u=n(37),d=n(28),j=n(29),h=n(17),b=n(35),m=n(34),p="https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall",f=n(173),g=n(155),O=n(172),x=n(174),A=n(60),w=n(163),v=n(164),C=n(70),y=n(159),k=n(86),I=n.n(k),P=n(77),B="CREATE_PROBLEM",S="DELETE_PROBLEM",D="SUPER_ADMIN",R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?"scott.rw93@gmail.com"===e||"jules.nikolova@gmail.com"===e||"dbw16d@gmail.com"===e?[D]:[B,S]:[]},W=function(e){return e.scopes.indexOf(D)>-1},E=function(e){return!!W(e)||e.scopes.indexOf("CREATE_WALL")>-1},N=function(e,t){return!!W(e)||e.scopes.indexOf(S)>-1&&e.name===t},H=function(e){return!!W(e)||e.scopes.indexOf(B)>-1},J=r.a.createContext({}),M=n(179),G=n(157),Y=n(67),V=n.n(Y),T="990779024896-jr76oa2j7pj1116qhaa1qnu9offtp4ao.apps.googleusercontent.com",L=Object(g.a)((function(e){return{root:{position:"absolute",width:"100%",maxWidth:"650px",paddingLeft:10,paddingRight:10,left:"50%",transform:"translate(-50%, 0%)"}}})),F=function(e){var t=e.open,n=e.close,o=L();return Object(a.jsx)(G.a,{className:o.root,in:t,children:Object(a.jsx)(M.a,{severity:"error",action:Object(a.jsx)(y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:n,children:Object(a.jsx)(V.a,{fontSize:"inherit"})}),children:"Failed to login"})})},K=function(e){var t=e.onLoginChange,n=Object(o.useContext)(J),c=r.a.useState(!1),i=Object(l.a)(c,2),s=i[0],u=i[1];return n.signedIn?Object(a.jsx)(P.GoogleLogout,{clientId:T,buttonText:"Logout",onLogoutSuccess:function(){return t({signedIn:!1,scopes:R()})}}):Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(F,{open:s,close:function(){return u(!1)}}),Object(a.jsx)(P.GoogleLogin,{clientId:T,buttonText:"Login",cookiePolicy:"none",onSuccess:function(e){var n=e.getBasicProfile();t({signedIn:!0,name:n.getName(),email:n.getEmail(),image:n.getImageUrl(),scopes:R(n.getEmail())})},onFailure:function(){return u(!0)},isSignedIn:!0})]})},Q=n(180),Z=n(160),z=n(162),U=n(120),X=n(161),q=Object(g.a)({list:{width:250}}),_=function(e){var t=e.walls,n=e.open,c=e.close,i=e.setPage,l=e.changeWall,s=q(),u=Object(o.useContext)(J),d=function(){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&c()}};return Object(a.jsx)("div",{children:Object(a.jsx)(Q.a,{anchor:"left",open:n,onClose:c,children:Object(a.jsx)("div",{className:s.list,role:"presentation",onClick:d,onKeyDown:d,children:Object(a.jsxs)(Z.a,{children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"home wall logo"}),t.map((function(e){return Object(a.jsx)(U.a,{button:!0,onClick:function(){return l(e)||i("wall")||c()},children:Object(a.jsx)(X.a,{primary:e.name})},e.name)})),E(u)&&Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(U.a,{button:!0,onClick:function(){return i("create")||c()},children:Object(a.jsx)(X.a,{primary:"Add wall"})})]}),Object(a.jsx)(z.a,{}),Object(a.jsx)(U.a,{button:!0,children:Object(a.jsx)(X.a,{primary:"About"})})]})})})})},$=Object(g.a)((function(e){return{root:{flexGrow:1},narrow:Object(A.a)({},e.breakpoints.up("sm"),{width:"calc(100% - 250px)"}),menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},spacer:{width:"100%",height:"95px"}}})),ee=function(e){var t=e.wall.name,n=e.walls,o=e.changeWall,c=e.onLoginChange,i=e.setPage,s=$(),u=r.a.useState(!1),d=Object(l.a)(u,2),j=d[0],h=d[1];return Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsx)(w.a,{className:j?s.narrow:null,position:"fixed",children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(y.a,{edge:"start",className:s.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return h(!0)},children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(C.a,{variant:"h6",className:s.title,children:t}),Object(a.jsx)(K,{onLoginChange:c})]})}),Object(a.jsx)("div",{className:s.spacer}),Object(a.jsx)(_,{walls:n,open:j,changeWall:o,setPage:i,close:function(){return h(!1)}})]})},te=function(e,t){return e.x===t.x&&e.y===t.y},ne=function(e,t){if(e.points.length!==t.points.length)return!1;for(var n=0;n<e.points.length;n++)if(!te(e.points[n],t.points[n]))return!1;return!0},ae=window.matchMedia&&window.matchMedia("screen and (max-width: 900px)").matches?2*window.devicePixelRatio:window.devicePixelRatio,oe=window.matchMedia?window.matchMedia("screen and (max-width: 600px)").matches?2.1:window.matchMedia("screen and (max-width: 900px)").matches?1.5:1:1,re=function(e){return e/oe*ae},ce=function(e,t){e.forEach((function(e){var n=e.points;t.beginPath();var a=n[0],o=a.x,r=a.y;t.moveTo(re(o),re(r)),n.forEach((function(e){var n=e.x,a=e.y;return t.lineTo(re(n),re(a))})),t.lineTo(re(o),re(r)),t.stroke(),t.closePath()}))},ie=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).canvasRef=r.a.createRef(),a.state={img:null},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.holds,a=t.src,o=this.canvasRef.current,r=o.getContext("2d"),c=new Image;c.src=a,c.onload=function(){var t=Math.floor(c.height/(c.width/600)/oe),a=Math.floor(600/oe);o.width=a*ae,o.height=t*ae,o.style.width="".concat(a,"px"),o.style.height="".concat(t,"px"),r.drawImage(c,0,0,o.width,o.height),r.lineWidth=1*ae,r.strokeStyle="#FFFFFF",ce(n,r),e.setState({img:c})}}},{key:"componentDidUpdate",value:function(e){var t=this.props.holds,n=e.holds,a=this.state.img;if(n!==t){var o=this.canvasRef.current,r=o.getContext("2d");!function(e,t){if(t.length>e.length)return!1;for(var n=0;n<t.length;n++)if(!ne(e[n],t[n]))return!1;return!0}(t,n)?(r.clearRect(0,0,o.width,o.height),r.drawImage(a,0,0,o.width,o.height),ce(t,r)):ce(t.slice(n.length),r)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.src,o=t.onClick,c=this.state.img;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("img",{alt:"board",style:c?{display:"none"}:{},width:600/oe,height:"auto",src:n}),Object(a.jsx)("canvas",{style:c?{}:{display:"none"},ref:this.canvasRef,onMouseDown:function(t){var n=t.clientX,a=t.clientY;if(o){var r=e.canvasRef.current.getBoundingClientRect(),c=n-r.left,i=a-r.top;o({x:c*oe,y:i*oe})}}})]})}}]),n}(r.a.PureComponent),le=n(169),se=n(182),ue=n(167),de=n(184),je=n(177),he=n(168),be={0:"5",1:"5+",2:"6A",3:"6A+",4:"6B",5:"6B+",6:"6C",7:"6C+",8:"7A",9:"7A+",10:"7B"},me=function(e){return be[e]||e},pe=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),fe=function(e){var t=e.selectedHolds,n=e.wall,c=n.image,i=n.uuid,s=e.clickHold,u=e.saveProblem,d=e.cancel,j=pe(),h=r.a.useState(5),b=Object(l.a)(h,2),m=b[0],p=b[1],f=r.a.useState(null),g=Object(l.a)(f,2),O=g[0],x=g[1],A=Object(o.useContext)(J),w=t.length<3||!O||!m;return Object(a.jsxs)("div",{className:j.root,children:[Object(a.jsx)(ie,{src:c,onClick:s,holds:t}),Object(a.jsxs)("div",{children:[Object(a.jsx)(se.a,{className:j.formControl,label:"Problem Name",variant:"outlined",onChange:function(e){var t=e.target.value;return x(t)}}),Object(a.jsxs)(ue.a,{variant:"outlined",className:j.formControl,children:[Object(a.jsx)(de.a,{children:"Grade"}),Object(a.jsx)(je.a,{value:m,onChange:function(e){var t=e.target.value;return p(t)},label:"Grade",children:Object.keys(be).map((function(e){return Object(a.jsx)(he.a,{value:e,children:me(e)},e)}))})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(le.a,{className:j.formControl,variant:"contained",color:"primary",onClick:function(){return u({name:O,grade:m,author:A.name,holds:t,wallUuid:i})},disabled:w,children:"Save problem"}),Object(a.jsx)(le.a,{className:j.formControl,variant:"contained",color:"secondary",onClick:d,children:"Cancel"})]})]})},ge=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={selectedHolds:[]},a.clickHold=a.clickHold.bind(Object(h.a)(a)),a.saveProblem=a.saveProblem.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"clickHold",value:function(e){var t=this,n=e.x,a=e.y,o=this.props.wall.holds,r=this.state.selectedHolds;o.forEach((function(e){(function(e,t){for(var n=e.x,a=e.y,o=!1,r=0,c=t.length-1;r<t.length;c=r++){var i=t[r].x,l=t[r].y,s=t[c].x,u=t[c].y;l>a!==u>a&&n<(s-i)*(a-l)/(u-l)+i&&(o=!o)}return o})({x:n,y:a},e.points)&&t.setState({selectedHolds:-1===r.indexOf(e)?[].concat(Object(u.a)(r),[e]):r.filter((function(t){return!ne(t,e)}))})}))}},{key:"saveProblem",value:function(e){(0,this.props.createProblem)(e),this.setState({selectedHolds:[]})}},{key:"render",value:function(){var e=this.state.selectedHolds;return Object(a.jsx)(fe,Object(s.a)(Object(s.a)({},this.props),{},{selectedHolds:e,clickHold:this.clickHold,saveProblem:this.saveProblem}))}}]),n}(r.a.PureComponent),Oe=n(87),xe=n.n(Oe),Ae=n(170),we=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},actions:{backgroundColor:e.palette.background.paper,"& svg":{margin:e.spacing(1.5)},"& svg:hover":{cursor:"pointer"},"& hr":{margin:e.spacing(0,.5)}},header:{paddingBottom:5}}})),ve=function(e){var t=e.name,n=e.grade,o=e.author,r=e.cancel,c=we();return Object(a.jsx)("div",{className:c.header,children:Object(a.jsxs)(Ae.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsxs)(Ae.a,{item:!0,children:[Object(a.jsx)(C.a,{variant:"h5",component:"h2",children:"".concat(t," ").concat(me(n))}),Object(a.jsx)(C.a,{color:"textSecondary",children:"by ".concat(o)})]}),Object(a.jsx)(Ae.a,{item:!0,children:Object(a.jsx)(y.a,{"aria-label":"back",onClick:r,children:Object(a.jsx)(V.a,{})})})]})})},Ce=function(e){var t=e.wall.image,n=e.problem,r=n.author,c=n.holds,i=n.uuid,l=n.name,s=n.grade,u=e.deleteProblem,d=e.cancel,j=we(),h=Object(o.useContext)(J);return Object(a.jsx)("div",{className:j.root,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(ve,{name:l,grade:s,author:r,cancel:d}),Object(a.jsx)(ie,{src:t,holds:c}),N(h,r)&&Object(a.jsx)(Ae.a,{container:!0,alignItems:"center",direction:"row",justify:"flex-end",className:j.actions,children:Object(a.jsx)(xe.a,{"aria-label":"delete",onClick:function(){return u(i)}})})]})})},ye=n(176),ke=n(171),Ie=n(88),Pe=n.n(Ie),Be=Object(g.a)((function(e){return{appBar:{top:"auto",bottom:0,left:"auto",right:0,position:"fixed",width:"100%",display:"flex",zIndex:1100,boxSizing:"border-box",flexShrink:0,flexDirection:"column"},grow:{flexGrow:1},fabButton:{zIndex:1,top:-15,left:0,right:0,margin:"0 auto"}}})),Se=function(e){var t=e.onCreate,n=Be();return Object(a.jsx)("div",{color:"primary",className:n.appBar,children:Object(a.jsx)(ke.a,{color:"secondary","aria-label":"add",className:n.fabButton,onClick:t,children:Object(a.jsx)(Pe.a,{})})})},De=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},card:{position:"relative",marginBottom:"50px",display:"inline-block",backgroundColor:"black","& div:hover":{cursor:"pointer"}},overlay:{position:"absolute",bottom:"0",left:"0",width:"100%",color:"white",backgroundColor:"black",opacity:.6},description:{padding:"10px 20px 10px 20px"}}})),Re=function(e){var t=e.wall,n=(t.holds,t.image),r=e.problems,c=e.openProblem,i=e.addProblem,l=De(),s=Object(o.useContext)(J);return 0===r.length?Object(a.jsxs)("div",{className:l.root,children:[Object(a.jsx)(C.a,{variant:"h5",children:"No problems created yet"}),H(s)&&Object(a.jsx)(Se,{onCreate:i})]}):Object(a.jsxs)("div",{className:l.root,children:[r.map((function(e){var t=e.uuid,o=e.holds,r=e.name,i=e.grade,s=e.author,u=e.createdAt;return Object(a.jsx)("div",{className:l.card,onClick:function(){return c(t)},children:Object(a.jsxs)("div",{children:[Object(a.jsx)(ie,{src:n,holds:o}),Object(a.jsx)("div",{className:l.overlay,children:Object(a.jsx)("div",{className:l.description,children:Object(a.jsx)(ye.a,{display:"flex",p:1,children:Object(a.jsxs)(ye.a,{p:1,flexGrow:1,children:[Object(a.jsx)(C.a,{variant:"h5",children:"".concat(r," ").concat(me(i))}),Object(a.jsx)(C.a,{variant:"body1",children:"by: ".concat(s,", ").concat(new Date(u).toLocaleDateString())})]})})})})]})},r)})),H(s)&&Object(a.jsx)(Se,{onCreate:i})]})},We=Object(g.a)((function(e){return{root:{}}})),Ee=function(e){var t=e.problems,n=e.wall,r=e.createProblem,c=e.deleteProblem,i=We(),s=Object(o.useState)("list"),u=Object(l.a)(s,2),d=u[0],j=u[1],h=Object(o.useState)(null),b=Object(l.a)(h,2),m=b[0],p=b[1];return Object(a.jsxs)("div",{className:i.root,children:["problem"===d&&Object(a.jsx)(Ce,{wall:n,problem:t.filter((function(e){return e.uuid===m}))[0],deleteProblem:function(e){c(e),j("list")},cancel:function(){return j("list")}}),"create"===d&&Object(a.jsx)(ge,{wall:n,createProblem:function(e){r(e),j("list")},cancel:function(){return j("list")}}),"list"===d&&Object(a.jsx)(Re,{wall:n,problems:t,openProblem:function(e){p(e),j("problem")},addProblem:function(){return j("create")}})]})},Ne=n(89),He=n.n(Ne),Je=n(69),Me=n.n(Je),Ge=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"flex-end"},input:{display:"none"},button:{color:Me.a[900],margin:10}}})),Ye=function(e){var t=e.setImage,n=Ge(),r=Object(o.useState)(!1),c=Object(l.a)(r,2),i=c[0],s=c[1];return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)("input",{accept:"image/*",className:n.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){var n;s(!0),(n=e.target.files[0],fetch("".concat(p,"/images"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log({error:e})}))).then((function(e){var n=e.src;t(n),s(!1)}))}}),Object(a.jsx)("label",{htmlFor:"contained-button-file",children:Object(a.jsx)(ke.a,{component:"span",className:n.button,children:i?Object(a.jsx)(O.a,{}):Object(a.jsx)(He.a,{})})})]})},Ve=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},howTo:{marginTop:e.spacing(5),marginBottom:e.spacing(5)}}})),Te=function(e){var t=e.holds,n=void 0===t?[]:t,r=e.handleClick,c=e.saveBoard,i=Ve(),s=Object(o.useState)(null),u=Object(l.a)(s,2),d=u[0],j=u[1],h=Object(o.useState)(null),b=Object(l.a)(h,2),m=b[0],p=b[1],f=!d||n.length<10;return Object(a.jsx)("div",{className:i.root,children:Object(a.jsxs)(Ae.a,{container:!0,direction:"column",justify:"flex-end",alignItems:"center",children:[Object(a.jsxs)(Ae.a,{item:!0,children:[m&&Object(a.jsx)(ie,{src:m,onClick:r,holds:n}),!m&&Object(a.jsx)(Ye,{setImage:p})]}),Object(a.jsxs)(Ae.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsx)(Ae.a,{item:!0,children:Object(a.jsx)(se.a,{className:i.formControl,label:"Wall Name",variant:"outlined",onChange:function(e){var t=e.target.value;return j(t)}})}),Object(a.jsx)(Ae.a,{item:!0,children:Object(a.jsx)(le.a,{className:i.formControl,variant:"contained",color:"primary",disabled:f,onClick:function(){return c({name:d,holds:n,image:m})},children:"Save wall"})})]}),Object(a.jsx)(Ae.a,{item:!0,children:Object(a.jsx)(C.a,{className:i.howTo,children:"Needs to be done on a computer. To add a hold to the wall, click multiple times around the outline of a hold to create a polygon shape. Once you do this, hit the 'return/enter' key. Do this for all holds. Ctrl-z undoes creation of previous holds. The choose a name for your wall and save."})})]})})},Le=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={points:[],holds:[]},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.createHold=a.createHold.bind(Object(h.a)(a)),a.saveBoard=a.saveBoard.bind(Object(h.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.metaKey,n=e.keyCode,a=this.state.holds;t&&90===n&&a.length>0?this.setState({holds:a.slice(0,a.length-1)}):13===n&&this.createHold()}},{key:"handleClick",value:function(e){var t=e.x,n=e.y,a=this.state.points;this.setState({points:[].concat(Object(u.a)(a),[{x:t,y:n}])})}},{key:"createHold",value:function(){var e=this.state,t=e.points,n=e.holds;t.length<3||this.setState({holds:[].concat(Object(u.a)(n),[{points:t}]),points:[]})}},{key:"saveBoard",value:function(e){var t=e.holds,n=e.name,a=e.image;(0,this.props.createWall)({name:n,image:a,holds:t})}},{key:"render",value:function(){var e=this.state.holds;return Object(a.jsx)(Te,{holds:e,handleClick:this.handleClick,saveBoard:this.saveBoard})}}]),n}(r.a.PureComponent),Fe=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},toolbar:e.mixins.toolbar,content:{flexGrow:1},loading:{display:"flex",justifyContent:"center",backgroundColor:e.palette.background.paper,marginTop:"50%",marginBottom:"50%"}}})),Ke=function(){var e=Fe();return Object(a.jsx)("div",{className:e.loading,children:Object(a.jsx)(O.a,{})})},Qe=function(e){var t=e.problems,n=e.walls,r=e.createProblem,c=e.deleteProblem,i=e.createWall,s=e.loading,u=e.onLoginChange,d=Fe(),j=Object(o.useState)("wall"),h=Object(l.a)(j,2),b=h[0],m=h[1],p=Object(o.useState)(null),g=Object(l.a)(p,2),O=g[0],A=g[1],w=n[0]||{},v=O||w;return Object(a.jsxs)("div",{className:d.root,children:[Object(a.jsx)(f.a,{}),Object(a.jsxs)("main",{className:d.content,children:[Object(a.jsx)(ee,{wall:v,walls:n,changeWall:A,onLoginChange:u,setPage:m}),Object(a.jsx)(x.a,{maxWidth:"sm",children:s?Object(a.jsx)(Ke,{}):Object(a.jsxs)("div",{children:["wall"===b&&Object(a.jsx)(Ee,{createProblem:r,deleteProblem:c,problems:t.filter((function(e){return e.wallUuid===v.uuid})),wall:v}),"create"===b&&Object(a.jsx)(Le,{createWall:function(e){return i(e).then((function(e){A(e),m("wall")}))}})]})})]})]})},Ze=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={loading:!0,walls:[],problems:[]},a.createProblem=a.createProblem.bind(Object(h.a)(a)),a.deleteProblem=a.deleteProblem.bind(Object(h.a)(a)),a.createWall=a.createWall.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;return fetch("".concat(p,"/problems")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(t){return fetch("".concat(p,"/walls")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(n){return e.setState({problems:t,walls:n,loading:!1})}))}))}},{key:"createWall",value:function(e){var t=this;return function(e){return fetch("".concat(p,"/walls"),{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))}(e).then((function(e){return t.setState({walls:[].concat(Object(u.a)(t.state.walls),[e])}),e}))}},{key:"createProblem",value:function(e){var t=this;return function(e){return fetch("".concat(p,"/problems"),{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))}(e).then((function(e){return t.setState({problems:[e].concat(Object(u.a)(t.state.problems))})}))}},{key:"deleteProblem",value:function(e){var t=this,n=this.state.problems;return function(e){return fetch("".concat(p,"/problems/").concat(e),{method:"DELETE"}).then((function(e){return e}),(function(e){console.error({error:e})}))}(e).then((function(){return t.setState({problems:n.filter((function(t){return t.uuid!==e}))})}))}},{key:"render",value:function(){return Object(a.jsx)(Qe,Object(s.a)(Object(s.a)({},this.props),{},{createProblem:this.createProblem,deleteProblem:this.deleteProblem,createWall:this.createWall,problems:this.state.problems,walls:this.state.walls,loading:this.state.loading}))}}]),n}(r.a.PureComponent),ze=n(91),Ue=n(175),Xe=n(90),qe=n.n(Xe),_e=Object(ze.a)({palette:{primary:Me.a,secondary:qe.a}}),$e=function(){var e=r.a.useState({signedIn:!1,scopes:R()}),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.jsx)(J.Provider,{value:n,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(Ue.a,{theme:_e,children:Object(a.jsx)(Ze,{onLoginChange:o})})})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)($e,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.20471ab8.chunk.js.map