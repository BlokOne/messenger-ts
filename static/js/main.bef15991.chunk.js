(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(114),r=n.n(i),s=n(31),o=n(25),l=n(12),j=n(216),d=n(209),b=n(27),u=n(118),m=n(125),O=Object(u.a)({apiKey:"AIzaSyBP9C7xUqfO7L-7JNf6x4XEB3YuVonTN0U",authDomain:"messenger-ts-4b911.firebaseapp.com",projectId:"messenger-ts-4b911",storageBucket:"messenger-ts-4b911.appspot.com",messagingSenderId:"1076265629311",appId:"1:1076265629311:web:da36fc0178be605d73f14a",measurementId:"1076265629311"}),h=Object(b.d)(O),x=(Object(m.a)(O),n(0)),f=n(2),p=n(215),v=n(213),g=n(121),y=n.n(g),N=n(46);function w(){var e=Object(N.c)((function(e){return e.user})),t=e.email,n=e.id;return{isAuth:!!t,email:t,ChatID:e.ChatID,id:n,firstName:e.firstName,secondName:e.secondName,nameFriend:e.nameFriend}}var C=n(85),k=Object(C.b)({name:"user",initialState:{firstName:null,secondName:null,email:null,id:null,ChatID:null,nameFriend:null,tokenPush:null},reducers:{setUser:function(e,t){e.email=t.payload.email,e.id=t.payload.id,e.firstName=t.payload.firstName,e.secondName=t.payload.secondName},SetChatID:function(e,t){e.ChatID=t.payload.ChatID},setFriendName:function(e,t){e.nameFriend=t.payload.nameFriend},setToken:function(e,t){e.tokenPush=t.payload.tokenPush},removeUser:function(e){e.email=null,e.id=null,e.ChatID=null,e.firstName=null,e.secondName=null,e.nameFriend=null,e.tokenPush=null}}}),S=k.actions,I=S.setUser,E=S.removeUser,F=S.SetChatID,A=S.setFriendName,D=k.reducer,L=n(3);var U,P=function(e){var t=e.userId,n=e.secondName,c=e.firstName,i=e.setNavChat,r=w().id,s=Object(a.useState)(null),o=Object(l.a)(s,2),j=o[0],d=o[1],u=Object(N.b)(),m=Object(a.useState)(c),O=Object(l.a)(m,2),g=O[0],C=(O[1],function(){var e=Object(f.a)(Object(x.a)().mark((function e(t,n){var a,c,i,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=[n,t]).sort(),c="".concat(a[0]).concat(a[1]),i=Object(b.b)(h,"Chats","".concat(c)),e.next=6,Object(b.c)(i);case 6:if(!e.sent.exists()){e.next=11;break}d(c),e.next=15;break;case 11:return r=Object(b.b)(h,"".concat(d),"".concat(c)),e.next=14,Object(b.i)(r,{IdChat:"".concat(c)},{merge:!0});case 14:d(c);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){i(!1),j&&(u(F({ChatID:j})),u(A({nameFriend:g})),i(!0))}),[j]),Object(L.jsxs)("div",{className:"users-list__link",children:[Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(L.jsx)(p.a,{style:{height:45,width:45,marginRight:10}}),Object(L.jsxs)("p",{children:[n," ",c]})]}),Object(L.jsx)(v.a,{variant:"text",endIcon:Object(L.jsx)(y.a,{}),style:{color:"white"},onClick:function(){return C(r,t)},children:"Chat"})]})},q=n(87),T=n.n(q);!function(e){e.login="/login",e.registration="/registration",e.chat="/chat",e.home="/messenger-ts",e.userPage="/user",e.userList="/users"}(U||(U={}));var R=Object(b.g)(Object(b.a)(h,"Users"),Object(b.f)("secondName")),B=[];Object(b.e)(R,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),B=[],B=[].concat(t),T.a.isEqual(B,t)||(B=[],B=[].concat(t))}));var M=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=w(),r=i.isAuth,s=i.email,b=Object(a.useState)([]),u=Object(l.a)(b,2),m=u[0],O=u[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),f=x[0],p=x[1];return Object(a.useEffect)((function(){if(""===f)O(B);else{var e=[];B.filter((function(t){(t.firstName+" "+t.secondName).indexOf(f)>-1&&e.push(t),O(e)}))}}),[f]),Object(a.useEffect)((function(){O(B)}),[B]),Object(L.jsx)(L.Fragment,{children:r?n?Object(L.jsx)(o.a,{replace:!0,to:U.chat}):Object(L.jsxs)(j.a,{container:!0,style:{width:"min(100% - 2rem)",marginInline:"auto",height:"100%",marginTop:"70px"},direction:"column",rowGap:"20px",children:[Object(L.jsx)("h1",{style:{margin:"0, auto",textAlign:"center",marginBottom:"25px",marginTop:"25px"},children:"All Users"}),Object(L.jsx)(d.a,{label:"UserName",variant:"outlined",value:f,onChange:function(e){return p(e.target.value)}}),Object(L.jsx)("div",{className:"users-list",children:m.map((function(e){if(s!==e.email)return Object(L.jsx)(P,{firstName:e.firstName,secondName:e.secondName,userId:e.id,setNavChat:c},e.id)}))})]}):Object(L.jsx)(o.a,{replace:!0,to:U.login})})},_=n(217);var G=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=w(),r=i.email,s=i.ChatID,o=function(){if(""!==n.replace(/^\s+/,"").replace(/\s+$/,"")){var e=Object(b.b)(h,"".concat(s),"".concat(Date.now()).concat(r));Object(b.i)(e,{name:"".concat(r),text:n,createAt:Object(b.h)()},{merge:!0}),c("")}};return Object(a.useEffect)((function(){function e(e){n&&"Enter"===e.code&&(e.ctrlKey?c(n+"\r\n"):o())}return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}})),Object(L.jsxs)(j.a,{container:!0,direction:"column",alignItems:"flex-end",style:{width:"100%"},children:[Object(L.jsx)(d.a,{multiline:!0,fullWidth:!0,rows:2,value:n,onChange:function(e){return c(e.target.value)},variant:"outlined"}),Object(L.jsx)(v.a,{onClick:o,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})};var W=function(e){var t=e.value,n=e.time,a="";"number"===typeof n&&(a=new Date(1e3*n).toLocaleString().slice(12,17));var c=t.name,i=w(),r=i.email,s=i.nameFriend,o=i.firstName;return Object(L.jsxs)("div",{style:{maxWidth:"40%",minWidth:"20%",margin:10,marginLeft:r===c?"auto":"10px",backgroundColor:r===c?"#7171ef":"#7d7d8e",width:"fit-content",border:"1px solid grey",borderRadius:"5px",color:"white",padding:5,wordWrap:"break-word"},children:[Object(L.jsxs)(j.a,{container:!0,alignItems:"center",columnGap:"5px",style:{marginBottom:10},children:[Object(L.jsx)(p.a,{style:{height:30,width:30}}),Object(L.jsx)("div",{children:"".concat(r===c?o:s)})]}),Object(L.jsx)("div",{style:{marginBottom:"10px",whiteSpace:"pre-wrap"},children:t.text}),Object(L.jsx)("div",{style:{textAlign:"end",fontSize:"smaller",color:"#00000091"},children:a})]})};var z=function(e){var t=e.messagesList,n=w(),c=n.nameFriend,i=n.email,r=Object(a.useRef)(null),s=Object(a.useState)([]),o=Object(l.a)(s,2),d=o[0],b=o[1],u=Object(a.useState)(!1),m=Object(l.a)(u,2);return m[0],m[1],Object(a.useEffect)((function(){if(T.a.isEqual(t,d))console.log("1");else if(d.length){console.log(d);var e=t[t.length-1],n=e.text;e.name!==i&&(console.log(1),a="New Message from ".concat(c," "),r={body:"".concat(n),dir:"auto"},"Notification"in window?"granted"===Notification.permission?new Notification(a,r):"denied"!==Notification.permission&&Notification.requestPermission((function(e){"granted"===e?new Notification(a,r):alert("\u0412\u044b \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")})):alert("\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 HTML Notifications, \u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c."))}var a,r;b(t)}),[t]),Object(a.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t]),Object(L.jsx)(_.a,{children:Object(L.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(L.jsxs)(j.a,{container:!0,style:{marginTop:"80px"},justifyItems:"center",justifyContent:"space-between",rowGap:"15px",children:[Object(L.jsxs)("h2",{children:["Chat with ",c]}),Object(L.jsxs)("div",{style:{width:"95%",height:"50vh",border:"1px solid gray",overflowY:"auto",overflowX:"hidden",padding:"10px",borderRadius:"5px"},children:[t.map((function(e,t){return Object(L.jsx)(W,{value:e,time:e.createAt?e.createAt.seconds:"Now"},t)})),Object(L.jsx)("div",{ref:r})]}),Object(L.jsx)(G,{})]})})})};var J=function(){var e=w().ChatID,t=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){var t=Object(b.g)(Object(b.a)(h,"".concat(e)),Object(b.f)("createAt"));Object(b.e)(t,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),i(t)}))}),[]),c}(e);return Object(L.jsx)(L.Fragment,{children:e?Object(L.jsx)(z,{messagesList:t}):Object(L.jsx)(o.a,{replace:!0,to:U.userList})})};var V=function(){var e=w().isAuth;return Object(L.jsx)(L.Fragment,{children:e?Object(L.jsx)(o.a,{replace:!0,to:U.userPage}):Object(L.jsx)(o.a,{replace:!0,to:U.login})})},K=n(55),X=n(18),Y=n(226),H=n(127);var $=function(e){var t,n,a,c,i=e.title,r=e.handleClick,s=e.login,o=Object(H.a)({mode:"onChange"}),l=o.register,b=o.formState,u=b.errors,m=b.isValid,O=o.handleSubmit;return o.reset,Object(L.jsx)("div",{children:Object(L.jsx)(j.a,{container:!0,alignItems:"center",justifyContent:"center",direction:"column",rowGap:"10%",children:Object(L.jsxs)("form",{onSubmit:O(r),style:{width:"216px",display:"flex",flexDirection:"column"},children:[s?null:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.a,Object(X.a)(Object(X.a)({},l("firstName",{required:"Required"})),{},{label:"First Name",variant:"standard"})),Object(L.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.firstName)&&Object(L.jsx)("p",{children:(null===u||void 0===u||null===(t=u.firstName)||void 0===t?void 0:t.message)||"Error"})}),Object(L.jsx)(d.a,Object(X.a)(Object(X.a)({},l("secondName",{required:"Required"})),{},{label:"Second Name",variant:"standard"})),Object(L.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.secondName)&&Object(L.jsx)("p",{children:(null===u||void 0===u||null===(n=u.secondName)||void 0===n?void 0:n.message)||"Error"})})]}),Object(L.jsx)(d.a,Object(X.a)(Object(X.a)({},l("email",{required:"Required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}})),{},{label:"Email",variant:"standard"})),Object(L.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.email)&&Object(L.jsx)("p",{children:(null===u||void 0===u||null===(a=u.email)||void 0===a?void 0:a.message)||"Error"})}),Object(L.jsx)(d.a,Object(X.a)(Object(X.a)({},l("password",{required:"Required",minLength:{value:6,message:"Minimum 6 symbols "}})),{},{type:"password",label:"Password",variant:"standard"})),Object(L.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.password)&&Object(L.jsx)("p",{children:(null===u||void 0===u||null===(c=u.password)||void 0===c?void 0:c.message)||"Error"})}),Object(L.jsx)(Y.a,{className:"submit-form",type:"submit",value:i,disableUnderline:!0,disabled:!m})]})})})};function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(f.a)(Object(x.a)().mark((function e(t){var n,a,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(b.b)(h,"Users","".concat(t.email)),e.next=3,Object(b.c)(n);case 3:return a=e.sent,e.next=6,a.data();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(){var e=Object(N.b)(),t=Object(o.g)();return Object(K.b)().onAuthStateChanged((function(n){n&&Q(n).then((function(a){var c=a.firstName,i=a.secondName;e(I({email:n.email,id:n.uid,firstName:c,secondName:i})),t("".concat(U.chat))}))})),Object(L.jsx)($,{title:"Sign in",handleClick:function(n){var a=n.email,c=n.password,i=Object(K.b)();Object(K.c)(i,a,c).then((function(n){var a=n.user;Q(a).then((function(n){var c=n.firstName,i=n.secondName;n.email,n.password;e(I({email:a.email,id:a.uid,firstName:c,secondName:i})),t("".concat(U.chat))}))})).catch(console.log)},login:!0})};var te=function(){return Object(L.jsxs)("div",{className:"page",children:[Object(L.jsx)(ee,{}),Object(L.jsxs)("p",{className:"page__link",children:["No account?   ",Object(L.jsx)("br",{}),Object(L.jsx)(s.b,{to:U.registration,children:"Create it!"})]})]})};var ne=function(){var e=Object(N.b)(),t=Object(o.g)();return Object(L.jsx)($,{title:"Registration",handleClick:function(n){var a=n.firstName,c=n.secondName,i=n.email,r=n.password,s=Object(K.b)();Object(K.a)(s,i,r).then((function(n){var i=n.user;e(I({email:i.email,id:i.uid,firstName:a,secondName:c})),function(e,t,n,a){var c=Object(b.b)(h,"Users","".concat(e));Object(b.i)(c,{firstName:n,secondName:a,id:t,email:e},{merge:!0})}(i.email,i.uid,a,c),t("".concat(U.chat))})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},login:!1})};var ae=function(){return Object(L.jsxs)("div",{className:"page",children:[Object(L.jsx)(ne,{}),Object(L.jsxs)("p",{className:"page__link",children:["Already have an account? ",Object(L.jsx)("br",{}),Object(L.jsx)(s.b,{to:U.login,children:"Sign in"})]})]})};var ce=function(){var e=w().isAuth;return Object(L.jsx)(L.Fragment,{children:e?Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("div",{className:"user-page",children:Object(L.jsx)(j.a,{container:!0,style:{marginTop:"80px",height:"80vh",width:"min(100% - 2rem)",marginInline:"auto"},alignItems:"flex-start",justifyContent:"flex-start"})})}):Object(L.jsx)(o.a,{replace:!0,to:U.login})})},ie=n(223),re=n(219),se=n(221),oe=n(214),le=n(225),je=n(218),de=n(211),be=n(208),ue=n(222),me=n(123),Oe=n.n(me),he=n(224),xe=n(220),fe=Object(a.memo)((function(e){var t=w(),n=t.firstName,c=t.secondName,i=t.ChatID,r=e.window,o=Object(a.useState)(!1),j=Object(l.a)(o,2),d=j[0],b=j[1],u=Object(N.b)(),m=function(){b(!d)};function O(){Object(K.b)().signOut().then((function(){u(E())}),(function(e){console.error("Sign Out Error",e)}))}var h=Object(L.jsxs)(re.a,{onClick:m,sx:{textAlign:"center"},children:[Object(L.jsx)(xe.a,{variant:"h6",sx:{my:2},children:Object(L.jsxs)("p",{style:{textOverflow:"ellipsis"},children:[c," ",n]})}),Object(L.jsx)(se.a,{}),Object(L.jsxs)(je.a,{children:[Object(L.jsx)(s.b,{to:U.userList,children:Object(L.jsx)(de.a,{disablePadding:!0,children:Object(L.jsx)(be.a,{sx:{textAlign:"center"},children:Object(L.jsx)(ue.a,{primary:"Users"})})})}),Object(L.jsx)(s.b,{to:U.chat,children:Object(L.jsx)(de.a,{disablePadding:!0,disabled:!i,children:Object(L.jsx)(be.a,{sx:{textAlign:"center"},children:Object(L.jsx)(ue.a,{primary:"Chat"})})})}),Object(L.jsx)(v.a,{variant:"text",style:{color:"black"},onClick:O,children:"Sing Out"})]})]}),x=void 0!==r?function(){return r().document.body}:void 0;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ie.a,{component:"nav",style:{backgroundColor:"#3318df99"},children:Object(L.jsxs)(he.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(L.jsx)(le.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,sx:{mr:2,display:{sm:"none"}},children:Object(L.jsx)(Oe.a,{})}),Object(L.jsxs)(xe.a,{variant:"h6",sx:{display:{xs:"none",sm:"block"}},style:{display:"flex",alignItems:"center",gap:"10px"},children:[Object(L.jsx)(p.a,{}),Object(L.jsxs)("p",{style:{textOverflow:"ellipsis"},children:[c," ",n]})]}),Object(L.jsxs)(re.a,{sx:{display:{xs:"none",sm:"block"}},children:[Object(L.jsx)(s.b,{to:U.userList,children:Object(L.jsx)(v.a,{sx:{color:"#fff"},children:"Users"})}),Object(L.jsx)(s.b,{to:U.chat,children:Object(L.jsx)(v.a,{sx:{color:"#fff"},disabled:!i,children:"Chat"})})]}),Object(L.jsx)(v.a,{variant:"text",style:{color:"white"},onClick:O,children:"Sing Out"})]})}),Object(L.jsx)(re.a,{component:"nav",children:Object(L.jsx)(oe.a,{container:x,variant:"temporary",open:d,onClose:m,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:h})})]})}));var pe=function(){var e=w(),t=e.isAuth;return e.email,Object(L.jsxs)(L.Fragment,{children:[t?Object(L.jsx)(fe,{}):null,Object(L.jsxs)(o.d,{children:[Object(L.jsx)(o.b,{path:U.home,element:Object(L.jsx)(V,{})}),Object(L.jsx)(o.b,{path:U.login,element:Object(L.jsx)(te,{})}),Object(L.jsx)(o.b,{path:U.registration,element:Object(L.jsx)(ae,{})}),Object(L.jsx)(o.b,{path:U.chat,element:Object(L.jsx)(J,{})}),Object(L.jsx)(o.b,{path:U.userPage,element:Object(L.jsx)(ce,{})}),Object(L.jsx)(o.b,{path:U.userList,element:Object(L.jsx)(M,{})}),Object(L.jsx)(o.b,{path:"*",element:Object(L.jsx)(o.a,{to:U.home,replace:!0})})]})]})},ve=(n(153),Object(C.a)({reducer:{user:D}}));r.a.createRoot(document.getElementById("root")).render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(s.a,{children:Object(L.jsx)(N.a,{store:ve,children:Object(L.jsx)(pe,{})})})}))}},[[154,1,2]]]);
//# sourceMappingURL=main.bef15991.chunk.js.map