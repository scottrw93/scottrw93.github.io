(this["webpackJsonphome-wall"]=this["webpackJsonphome-wall"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),o=n.n(r),c=n(10),s=n.n(c),i=(n(94),n(95),n(38)),l=n(25),d=n(26),h=n(17),u=n(31),j=n(29),b=n(39),p=n(56),m="https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall",f=n.p+"static/media/wall.ecca603c.jpg",x=function(e,t){return e.x===t.x&&e.y===t.y},O=function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!x(e[n],t[n]))return!1;return!0},v=window.matchMedia&&window.matchMedia("screen and (max-width: 900px)").matches?2*window.devicePixelRatio:window.devicePixelRatio,g=window.matchMedia?window.matchMedia("screen and (max-width: 600px)").matches?2.1:window.matchMedia("screen and (max-width: 900px)").matches?1.5:1:1,y=function(e){return e/g*v},w=function(e,t){e.forEach((function(e){t.beginPath();var n=e[0],a=n.x,r=n.y;t.moveTo(y(a),y(r)),e.forEach((function(e){var n=e.x,a=e.y;return t.lineTo(y(n),y(a))})),t.lineTo(y(a),y(r)),t.stroke(),t.closePath()}))},k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).canvasRef=o.a.createRef(),a.state={img:new Image},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.state.img,t=this.props.holds,n=this.canvasRef.current,a=n.getContext("2d");e.src=f,this.setState({img:e}),e.onload=function(){var r=Math.floor(e.height/(e.width/600)/g),o=Math.floor(600/g);n.width=o*v,n.height=r*v,n.style.width="".concat(o,"px"),n.style.height="".concat(r,"px"),a.drawImage(e,0,0,n.width,n.height),a.lineWidth=1*v,a.strokeStyle="#FFFFFF",w(t,a)}}},{key:"componentDidUpdate",value:function(e){var t=this.props.holds,n=e.holds,a=this.state.img;if(n!==t){var r=this.canvasRef.current,o=r.getContext("2d");!function(e,t){if(t.length>e.length)return!1;for(var n=0;n<t.length;n++)if(!O(e[n],t[n]))return!1;return!0}(t,n)?(o.clearRect(0,0,r.width,r.height),o.drawImage(a,0,0,r.width,r.height),w(t,o)):w(t.slice(n.length),o)}}},{key:"render",value:function(){var e=this,t=this.props.onClick;return Object(a.jsx)("canvas",{ref:this.canvasRef,onMouseDown:function(n){var a=n.clientX,r=n.clientY;if(t){var o=e.canvasRef.current.getBoundingClientRect(),c=a-o.left,s=r-o.top;t({x:c*g,y:s*g})}}})}}]),n}(o.a.PureComponent),C=n(145),P=n(156),N=n(167),H=n(153),S=n(169),W=n(163),M=n(155),D=n(150),B=n(148),R=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),T=function(e){var t=e.selectedHolds,n=e.clickHold,r=e.saveProblem,c=R(),s=o.a.useState("6B"),i=Object(b.a)(s,2),l=i[0],d=i[1],h=o.a.useState(null),u=Object(b.a)(h,2),j=u[0],p=u[1],m=o.a.useState("Scott Williams"),f=Object(b.a)(m,2),x=f[0],O=f[1],v=t.length<3||!j||!x||!l;return Object(a.jsxs)("div",{className:c.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsxs)(D.a,{maxWidth:"sm",children:[Object(a.jsx)(k,{onClick:n,holds:t}),Object(a.jsxs)("div",{children:[Object(a.jsx)(N.a,{className:c.formControl,label:"Problem Name",variant:"outlined",onChange:function(e){var t=e.target.value;return p(t)}}),Object(a.jsx)(N.a,{className:c.formControl,label:"Author",defaultValue:x,variant:"outlined",onChange:function(e){var t=e.target.value;return O(t)}}),Object(a.jsxs)(H.a,{variant:"outlined",className:c.formControl,children:[Object(a.jsx)(S.a,{children:"Grade"}),Object(a.jsxs)(W.a,{value:l,onChange:function(e){var t=e.target.value;return d(t)},label:"Grade",children:[Object(a.jsx)(M.a,{value:"None",children:"None"}),Object(a.jsx)(M.a,{value:"6B",children:"6B"}),Object(a.jsx)(M.a,{value:"7A",children:"7A"}),Object(a.jsx)(M.a,{value:"8A",children:"8A"})]})]})]}),Object(a.jsx)(P.a,{className:c.formControl,variant:"contained",color:"primary",onClick:function(){return r({name:j,grade:l,author:x,holds:t})},disabled:v,children:"Save problem"})]})]})},E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selectedHolds:[]},a.clickHold=a.clickHold.bind(Object(h.a)(a)),a.saveProblem=a.saveProblem.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"clickHold",value:function(e){var t=this,n=e.x,a=e.y,r=this.props.allHolds,o=this.state.selectedHolds;r.forEach((function(e){(function(e,t){for(var n=e.x,a=e.y,r=!1,o=0,c=t.length-1;o<t.length;c=o++){var s=t[o].x,i=t[o].y,l=t[c].x,d=t[c].y;i>a!==d>a&&n<(l-s)*(a-i)/(d-i)+s&&(r=!r)}return r})({x:n,y:a},e)&&t.setState({selectedHolds:-1===o.indexOf(e)?[].concat(Object(i.a)(o),[e]):o.filter((function(t){return!O(t,e)}))})}))}},{key:"saveProblem",value:function(e){(0,this.props.createProblem)(e),this.setState({selectedHolds:[]})}},{key:"render",value:function(){var e=this.state.selectedHolds;return Object(a.jsx)(T,{selectedHolds:e,clickHold:this.clickHold,saveProblem:this.saveProblem})}}]),n}(o.a.PureComponent),A=n(57),F=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},card:{position:"relative",marginBottom:"50px",display:"inline-block",backgroundColor:"black"},overlay:{position:"absolute",bottom:"0",left:"0",width:"100%",color:"white",backgroundColor:"black",opacity:.6},description:{padding:"10px 10px 10px 10px"}}})),K=function(e){var t=e.problems,n=F();return 0===t.length?Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsx)(D.a,{maxWidth:"sm",children:Object(a.jsx)("div",{className:n.root,children:"No problems created yet"})})]}):Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsx)(D.a,{maxWidth:"sm",children:t.map((function(e){var t=e.holds,r=e.name,o=e.grade,c=e.author;return Object(a.jsxs)("div",{className:n.card,children:[Object(a.jsx)(k,{holds:t}),Object(a.jsx)("div",{className:n.overlay,children:Object(a.jsxs)("div",{className:n.description,children:[Object(a.jsx)(A.a,{variant:"h5",children:"".concat(r," ").concat(o)}),Object(a.jsx)(A.a,{variant:"body1",children:"by: ".concat(c)})]})})]},r)}))})]})},I=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),J=function(e){var t=e.holds,n=e.handleClick,r=e.saveBoard,o=I();return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsxs)(D.a,{maxWidth:"sm",children:[Object(a.jsx)("div",{className:"home-wall",children:Object(a.jsx)(k,{onClick:n,holds:t})}),Object(a.jsx)(P.a,{className:o.formControl,variant:"contained",color:"primary",onClick:r,children:"Save board"})]})]})},G=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={points:[],holds:[]},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.createHold=a.createHold.bind(Object(h.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.metaKey,n=e.keyCode,a=this.state.holds;t&&90===n&&a.length>0?this.setState({holds:a.slice(0,a.length-1)}):13===n&&this.createHold()}},{key:"handleClick",value:function(e){var t=e.x,n=e.y;this.setState({points:[].concat(Object(i.a)(this.state.points),[{x:t,y:n}])})}},{key:"createHold",value:function(){var e=this.state.points;e.length<3||this.setState({holds:[].concat(Object(i.a)(this.state.holds),[e]),points:[]})}},{key:"render",value:function(){var e=this,t=this.props.updateHolds;return Object(a.jsx)(J,{holds:this.state.holds,handleClick:this.handleClick,saveBoard:function(){return t(e.state.holds)}})}}]),n}(o.a.PureComponent),U=n(78),L=n.n(U),V=n(160),X=n(157),Y=n(166),q=n(165),z=n(162),Q=n(79),Z=n.n(Q),$=n(154),_=n(107),ee=n(158),te=n(159),ne=n(80),ae=n.n(ne),re=n(161),oe=n(12),ce=240,se=Object(C.a)((function(e){return{root:{display:"flex"},drawer:Object(p.a)({},e.breakpoints.up("sm"),{width:ce,flexShrink:0}),appBar:Object(p.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(ce,"px)"),marginLeft:ce}),menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:ce},content:{flexGrow:1,padding:e.spacing(3)}}})),ie=function(e){var t=e.page,n=e.setPage,r=se();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:r.toolbar}),Object(a.jsx)(X.a,{}),Object(a.jsxs)($.a,{children:[Object(a.jsxs)(_.a,{button:!0,onClick:function(){return n("create")},selected:"create"===t,children:[Object(a.jsx)(ee.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(te.a,{primary:"Create problem"})]}),Object(a.jsxs)(_.a,{button:!0,onClick:function(){return n("list")},selected:"list"===t,children:[Object(a.jsx)(ee.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(te.a,{primary:"Existing problems"})]})]})]})},le=function(e){var t=e.fullWidth,n=void 0!==t&&t,r=e.handleDrawerToggle,o=se();return Object(a.jsx)("div",{children:Object(a.jsx)(V.a,{position:"fixed",className:n?null:o.appBar,children:Object(a.jsxs)(re.a,{children:[Object(a.jsx)(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:r,className:o.menuButton,children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)(A.a,{variant:"h6",noWrap:!0,children:"Home Wall"})]})})})},de=function(e){var t=e.problems,n=e.holds,r=e.createProblem,c=e.loading,s=e.updateHolds,i=se(),l=Object(oe.a)(),d=o.a.useState(!1),h=Object(b.a)(d,2),u=h[0],j=h[1],p=o.a.useState("list"),m=Object(b.a)(p,2),f=m[0],x=m[1],O=function(){j(!u)};return 0===n.length?Object(a.jsxs)("div",{className:i.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsx)(le,{handleDrawerToggle:O,fullWidth:!0}),Object(a.jsxs)("main",{className:i.content,children:[Object(a.jsx)("div",{className:i.toolbar}),!c&&Object(a.jsx)(G,{updateHolds:s})]})]}):Object(a.jsxs)("div",{className:i.root,children:[Object(a.jsx)(B.a,{}),Object(a.jsx)(le,{handleDrawerToggle:O}),Object(a.jsxs)("nav",{className:i.drawer,"aria-label":"mailbox folders",children:[Object(a.jsx)(q.a,{smUp:!0,implementation:"css",children:Object(a.jsx)(Y.a,{variant:"temporary",anchor:"rtl"===l.direction?"right":"left",open:u,onClose:O,classes:{paper:i.drawerPaper},ModalProps:{keepMounted:!0},children:Object(a.jsx)(ie,{setPage:function(e){x(e),j(!1)}})})}),Object(a.jsx)(q.a,{xsDown:!0,implementation:"css",children:Object(a.jsx)(Y.a,{classes:{paper:i.drawerPaper},variant:"permanent",open:!0,children:Object(a.jsx)(ie,{page:f,setPage:x})})})]}),Object(a.jsxs)("main",{className:i.content,children:[Object(a.jsx)("div",{className:i.toolbar}),"list"===f&&Object(a.jsx)(K,{problems:t}),"create"===f&&Object(a.jsx)(E,{allHolds:n,createProblem:r})]})]})},he=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={loading:!0,holds:[],problems:[]},a.updateHolds=a.updateHolds.bind(Object(h.a)(a)),a.createProblem=a.createProblem.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/problems")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(t){fetch("".concat(m,"/holds")).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})})).then((function(n){return e.setState({problems:t,holds:n,loading:!1})}))}))}},{key:"createProblem",value:function(e){var t=this;(function(e){return fetch("".concat(m,"/problems"),{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))})(e).then((function(e){return t.setState({problems:[e].concat(Object(i.a)(t.state.problems))})}))}},{key:"updateHolds",value:function(e){var t=this;(function(e){return fetch("".concat(m,"/holds"),{method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error({error:e})}))})(e).then((function(e){return t.setState({holds:e})}))}},{key:"render",value:function(){return Object(a.jsx)(de,{problems:this.state.problems,holds:this.state.holds,createProblem:this.createProblem,updateHolds:this.updateHolds,loading:this.state.loading})}}]),n}(o.a.PureComponent);var ue=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(he,{})})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ue,{})}),document.getElementById("root"))},94:function(e,t,n){},95:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.5b58fe92.chunk.js.map