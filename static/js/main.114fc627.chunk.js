(this["webpackJsonphome-wall"]=this["webpackJsonphome-wall"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),o=a.n(r),c=a(10),s=a.n(c),i=(a(94),a(95),a(38)),l=a(25),d=a(26),h=a(15),u=a(31),j=a(29),b=a(39),p=a(56),m="https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall",f=a.p+"static/media/wall.ecca603c.jpg",x=function(e,t){return e.x===t.x&&e.y===t.y},v=function(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(!x(e[a],t[a]))return!1;return!0},O=window.matchMedia&&window.matchMedia("screen and (max-width: 900px)").matches?2*window.devicePixelRatio:window.devicePixelRatio,g=window.matchMedia?window.matchMedia("screen and (max-width: 600px)").matches?2.1:window.matchMedia("screen and (max-width: 900px)").matches?1.5:1:1,y=function(e){return e/g*O},w=function(e,t){e.forEach((function(e){t.beginPath();var a=e[0],n=a.x,r=a.y;t.moveTo(y(n),y(r)),e.forEach((function(e){var a=e.x,n=e.y;return t.lineTo(y(a),y(n))})),t.lineTo(y(n),y(r)),t.stroke(),t.closePath()}))},k=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).canvasRef=o.a.createRef(),n.state={img:new Image},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.img,t=this.props.holds,a=this.canvasRef.current,n=a.getContext("2d");e.src=f,this.setState({img:e}),e.onload=function(){var r=Math.floor(e.height/(e.width/600)/g),o=Math.floor(600/g);a.width=o*O,a.height=r*O,a.style.width="".concat(o,"px"),a.style.height="".concat(r,"px"),n.drawImage(e,0,0,a.width,a.height),n.lineWidth=1*O,n.strokeStyle="#FFFFFF",w(t,n)}}},{key:"componentDidUpdate",value:function(e){var t=this.props.holds,a=e.holds,n=this.state.img;if(a!==t){var r=this.canvasRef.current,o=r.getContext("2d");!function(e,t){if(t.length>e.length)return!1;for(var a=0;a<t.length;a++)if(!v(e[a],t[a]))return!1;return!0}(t,a)?(o.clearRect(0,0,r.width,r.height),o.drawImage(n,0,0,r.width,r.height),w(t,o)):w(t.slice(a.length),o)}}},{key:"render",value:function(){var e=this,t=this.props.onClick;return Object(n.jsx)("canvas",{ref:this.canvasRef,onMouseDown:function(a){var n=a.clientX,r=a.clientY;if(t){var o=e.canvasRef.current.getBoundingClientRect(),c=n-o.left,s=r-o.top;t({x:c*g,y:s*g})}}})}}]),a}(o.a.PureComponent),C=a(145),P=a(156),N=a(167),H=a(153),S=a(169),B=a(163),W=a(155),M=a(150),D=a(148),R=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),T=function(e){var t=e.selectedHolds,a=e.clickHold,r=e.saveProblem,c=R(),s=o.a.useState("6B"),i=Object(b.a)(s,2),l=i[0],d=i[1],h=o.a.useState(null),u=Object(b.a)(h,2),j=u[0],p=u[1],m=o.a.useState("Scott Williams"),f=Object(b.a)(m,2),x=f[0],v=f[1],O=t.length<3||!j||!x||!l;return Object(n.jsxs)("div",{className:c.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsxs)(M.a,{maxWidth:"sm",children:[Object(n.jsx)(k,{onClick:a,holds:t}),Object(n.jsxs)("div",{children:[Object(n.jsx)(N.a,{className:c.formControl,label:"Problem Name",variant:"outlined",onChange:function(e){var t=e.target.value;return p(t)}}),Object(n.jsx)(N.a,{className:c.formControl,label:"Author",defaultValue:x,variant:"outlined",onChange:function(e){var t=e.target.value;return v(t)}}),Object(n.jsxs)(H.a,{variant:"outlined",className:c.formControl,children:[Object(n.jsx)(S.a,{children:"Grade"}),Object(n.jsxs)(B.a,{value:l,onChange:function(e){var t=e.target.value;return d(t)},label:"Grade",children:[Object(n.jsx)(W.a,{value:"None",children:"None"}),Object(n.jsx)(W.a,{value:"6B",children:"6B"}),Object(n.jsx)(W.a,{value:"7A",children:"7A"}),Object(n.jsx)(W.a,{value:"8A",children:"8A"})]})]})]}),Object(n.jsx)(P.a,{className:c.formControl,variant:"contained",color:"primary",onClick:function(){return r({name:j,grade:l,author:x,holds:t})},disabled:O,children:"Save problem"})]})]})},E=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selectedHolds:[]},n.clickHold=n.clickHold.bind(Object(h.a)(n)),n.saveProblem=n.saveProblem.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"clickHold",value:function(e){var t=this,a=e.x,n=e.y,r=this.props.allHolds,o=this.state.selectedHolds;r.forEach((function(e){(function(e,t){for(var a=e.x,n=e.y,r=!1,o=0,c=t.length-1;o<t.length;c=o++){var s=t[o].x,i=t[o].y,l=t[c].x,d=t[c].y;i>n!==d>n&&a<(l-s)*(n-i)/(d-i)+s&&(r=!r)}return r})({x:a,y:n},e)&&t.setState({selectedHolds:-1===o.indexOf(e)?[].concat(Object(i.a)(o),[e]):o.filter((function(t){return!v(t,e)}))})}))}},{key:"saveProblem",value:function(e){(0,this.props.createProblem)(e),this.setState({selectedHolds:[]})}},{key:"render",value:function(){var e=this.state.selectedHolds;return Object(n.jsx)(T,{selectedHolds:e,clickHold:this.clickHold,saveProblem:this.saveProblem})}}]),a}(o.a.PureComponent),A=a(57),F=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},card:{position:"relative",marginBottom:"50px",display:"inline-block",backgroundColor:"black"},overlay:{position:"absolute",bottom:"0",left:"0",width:"100%",color:"white",backgroundColor:"black",opacity:.6},description:{padding:"10px 10px 10px 10px"}}})),K=function(e){var t=e.problems,a=F();return 0===t.length?Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(M.a,{maxWidth:"sm",children:Object(n.jsx)("div",{className:a.root,children:"No problems created yet"})})]}):Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(M.a,{maxWidth:"sm",children:t.map((function(e){var t=e.holds,r=e.name,o=e.grade,c=e.author;return Object(n.jsxs)("div",{className:a.card,children:[Object(n.jsx)(k,{holds:t}),Object(n.jsx)("div",{className:a.overlay,children:Object(n.jsxs)("div",{className:a.description,children:[Object(n.jsx)(A.a,{variant:"h5",children:"".concat(r," ").concat(o)}),Object(n.jsx)(A.a,{variant:"body1",children:"by: ".concat(c)})]})})]},r)}))})]})},I=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),J=function(e){var t=e.holds,a=e.handleClick,r=e.saveBoard,o=I();return Object(n.jsxs)("div",{className:o.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsxs)(M.a,{maxWidth:"sm",children:[Object(n.jsx)(k,{onClick:a,holds:t}),Object(n.jsx)(P.a,{className:o.formControl,variant:"contained",color:"primary",onClick:r,children:"Save board"})]})]})},G=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={points:[],holds:[]},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.createHold=n.createHold.bind(Object(h.a)(n)),n.saveBoard=n.saveBoard.bind(Object(h.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.metaKey,a=e.keyCode,n=this.state.holds;t&&90===a&&n.length>0?this.setState({holds:n.slice(0,n.length-1)}):13===a&&this.createHold()}},{key:"handleClick",value:function(e){var t=e.x,a=e.y,n=this.state.points;this.setState({points:[].concat(Object(i.a)(n),[{x:t,y:a}])})}},{key:"createHold",value:function(){var e=this.state,t=e.points,a=e.holds;t.length<3||this.setState({holds:[].concat(Object(i.a)(a),[t]),points:[]})}},{key:"saveBoard",value:function(){(0,this.props.updateHolds)(this.state.holds)}},{key:"render",value:function(){return Object(n.jsx)(J,{holds:this.state.holds,handleClick:this.handleClick,saveBoard:this.saveBoard})}}]),a}(o.a.PureComponent),U=a(78),L=a.n(U),V=a(160),X=a(157),Y=a(166),q=a(165),z=a(162),Q=a(79),Z=a.n(Q),$=a(154),_=a(107),ee=a(158),te=a(159),ae=a(80),ne=a.n(ae),re=a(161),oe=a(12),ce=240,se=Object(C.a)((function(e){return{root:{display:"flex"},drawer:Object(p.a)({},e.breakpoints.up("sm"),{width:ce,flexShrink:0}),appBar:Object(p.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(ce,"px)"),marginLeft:ce}),menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:ce},content:{flexGrow:1,padding:e.spacing(3)}}})),ie=function(e){var t=e.page,a=e.setPage,r=se();return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:r.toolbar}),Object(n.jsx)(X.a,{}),Object(n.jsxs)($.a,{children:[Object(n.jsxs)(_.a,{button:!0,onClick:function(){return a("create")},selected:"create"===t,children:[Object(n.jsx)(ee.a,{children:Object(n.jsx)(L.a,{})}),Object(n.jsx)(te.a,{primary:"Create problem"})]}),Object(n.jsxs)(_.a,{button:!0,onClick:function(){return a("list")},selected:"list"===t,children:[Object(n.jsx)(ee.a,{children:Object(n.jsx)(Z.a,{})}),Object(n.jsx)(te.a,{primary:"Existing problems"})]})]})]})},le=function(e){var t=e.fullWidth,a=void 0!==t&&t,r=e.handleDrawerToggle,o=se();return Object(n.jsx)("div",{children:Object(n.jsx)(V.a,{position:"fixed",className:a?null:o.appBar,children:Object(n.jsxs)(re.a,{children:[Object(n.jsx)(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:r,className:o.menuButton,children:Object(n.jsx)(ne.a,{})}),Object(n.jsx)(A.a,{variant:"h6",noWrap:!0,children:"Home Wall"})]})})})},de=function(e){var t=e.problems,a=e.holds,r=e.createProblem,c=e.loading,s=e.updateHolds,i=se(),l=Object(oe.a)(),d=o.a.useState(!1),h=Object(b.a)(d,2),u=h[0],j=h[1],p=o.a.useState("list"),m=Object(b.a)(p,2),f=m[0],x=m[1],v=function(){j(!u)};return 0===a.length?Object(n.jsxs)("div",{className:i.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(le,{handleDrawerToggle:v,fullWidth:!0}),Object(n.jsxs)("main",{className:i.content,children:[Object(n.jsx)("div",{className:i.toolbar}),!c&&Object(n.jsx)(G,{updateHolds:s})]})]}):Object(n.jsxs)("div",{className:i.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(le,{handleDrawerToggle:v}),Object(n.jsxs)("nav",{className:i.drawer,"aria-label":"mailbox folders",children:[Object(n.jsx)(q.a,{smUp:!0,implementation:"css",children:Object(n.jsx)(Y.a,{variant:"temporary",anchor:"rtl"===l.direction?"right":"left",open:u,onClose:v,classes:{paper:i.drawerPaper},ModalProps:{keepMounted:!0},children:Object(n.jsx)(ie,{setPage:function(e){x(e),j(!1)}})})}),Object(n.jsx)(q.a,{xsDown:!0,implementation:"css",children:Object(n.jsx)(Y.a,{classes:{paper:i.drawerPaper},variant:"permanent",open:!0,children:Object(n.jsx)(ie,{page:f,setPage:x})})})]}),Object(n.jsxs)("main",{className:i.content,children:[Object(n.jsx)("div",{className:i.toolbar}),"list"===f&&Object(n.jsx)(K,{problems:t}),"create"===f&&Object(n.jsx)(E,{allHolds:a,createProblem:r})]})]})},he=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!0,holds:[],problems:[]},n.updateHolds=n.updateHolds.bind(Object(h.a)(n)),n.createProblem=n.createProblem.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/problems")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(t){fetch("".concat(m,"/holds")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(a){return e.setState({problems:t,holds:a,loading:!1})}))}))}},{key:"createProblem",value:function(e){var t=this;(function(e){return fetch("".concat(m,"/problems"),{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))})(e).then((function(e){return t.setState({problems:[e].concat(Object(i.a)(t.state.problems))})}))}},{key:"updateHolds",value:function(e){var t=this;(function(e){return fetch("".concat(m,"/holds"),{method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))})(e).then((function(e){return t.setState({holds:e})}))}},{key:"render",value:function(){return Object(n.jsx)(de,{problems:this.state.problems,holds:this.state.holds,createProblem:this.createProblem,updateHolds:this.updateHolds,loading:this.state.loading})}}]),a}(o.a.PureComponent);var ue=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(he,{})})};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(ue,{})}),document.getElementById("root"))},94:function(e,t,a){},95:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.114fc627.chunk.js.map