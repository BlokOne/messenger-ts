(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(112),i=a.n(r),s=a(31),o=a(24),l=a(12),d=a(212),j=a(205),b=a(26),u=a(116),m=Object(u.a)({apiKey:"AIzaSyBP9C7xUqfO7L-7JNf6x4XEB3YuVonTN0U",authDomain:"messenger-ts-4b911.firebaseapp.com",projectId:"messenger-ts-4b911",storageBucket:"messenger-ts-4b911.appspot.com",messagingSenderId:"1076265629311",appId:"1:1076265629311:web:da36fc0178be605d73f14a",measurementId:"1076265629311"}),h=Object(b.d)(m),O=a(0),x=a(4),f=a(211),p=a(209),v=a(119),g=a.n(v),N=a(35);function y(){var e=Object(N.c)((function(e){return e.user})),t=e.email,a=e.id;return{isAuth:!!t,email:t,ChatID:e.ChatID,id:a,firstName:e.firstName,secondName:e.secondName,nameFriend:e.nameFriend,HeaderChat:e.HeaderChat}}var w=a(84),C=Object(w.b)({name:"user",initialState:{firstName:null,secondName:null,email:null,id:null,ChatID:null,nameFriend:null,HeaderChat:null},reducers:{setUser:function(e,t){e.email=t.payload.email,e.id=t.payload.id,e.firstName=t.payload.firstName,e.secondName=t.payload.secondName},SetChatID:function(e,t){e.ChatID=t.payload.ChatID},setFriendName:function(e,t){e.nameFriend=t.payload.nameFriend},setHeaderChat:function(e,t){e.HeaderChat=t.payload.HeaderChat},removeUser:function(e){e.email=null,e.id=null,e.ChatID=null,e.firstName=null,e.secondName=null,e.nameFriend=null,e.HeaderChat=null}}}),S=C.actions,I=S.setUser,k=S.removeUser,E=S.SetChatID,F=S.setFriendName,A=S.setHeaderChat,_=C.reducer,D=a(2);var U,L=function(e){var t=e.userId,a=e.secondName,c=e.firstName,r=e.setNavChat,i=y().id,s=Object(n.useState)(null),o=Object(l.a)(s,2),d=o[0],j=o[1],u=Object(N.b)(),m=Object(n.useState)(c),v=Object(l.a)(m,1)[0],w=function(){var e=Object(x.a)(Object(O.a)().mark((function e(t,a){var n,c,r,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=[a,t]).sort(),c="".concat(n[0]).concat(n[1]),r=Object(b.b)(h,"Chats","".concat(c)),e.next=6,Object(b.c)(r);case 6:if(!e.sent.exists()){e.next=11;break}j(c),e.next=15;break;case 11:return i=Object(b.b)(h,"".concat(j),"".concat(c)),e.next=14,Object(b.i)(i,{IdChat:"".concat(c)},{merge:!0});case 14:j(c);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r(!1),d&&(u(E({ChatID:d})),u(F({nameFriend:v})),r(!0))}),[d]),Object(D.jsxs)("div",{className:"users-list__link",children:[Object(D.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(D.jsx)(f.a,{style:{height:45,width:45,marginRight:10}}),Object(D.jsxs)("p",{children:[a," ",c]})]}),Object(D.jsx)(p.a,{variant:"text",endIcon:Object(D.jsx)(g.a,{}),style:{color:"white"},onClick:function(){return w(i,t)},children:"Chat"})]})},q=a(86),H=a.n(q);!function(e){e.login="/login",e.registration="/registration",e.chat="/chat",e.home="/messenger-ts",e.userPage="/user",e.userList="/users"}(U||(U={}));var P=Object(b.g)(Object(b.a)(h,"Users"),Object(b.f)("secondName")),R=[];Object(b.e)(P,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),R=[],R=[].concat(t),H.a.isEqual(R,t)||(R=[],R=[].concat(t))}));var T=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=y(),i=r.isAuth,s=r.email,b=Object(n.useState)([]),u=Object(l.a)(b,2),m=u[0],h=u[1],O=Object(n.useState)(""),x=Object(l.a)(O,2),f=x[0],p=x[1],v=Object(N.b)();return Object(n.useEffect)((function(){v(A({HeaderChat:""}))})),Object(n.useEffect)((function(){if(""===f)h(R);else{var e=[];R.forEach((function(t){(t.firstName+" "+t.secondName).indexOf(f)>-1&&e.push(t),h(e)}))}}),[f]),Object(n.useEffect)((function(){h(R)}),[R]),Object(D.jsx)(D.Fragment,{children:i?a?Object(D.jsx)(o.a,{replace:!0,to:U.chat}):Object(D.jsxs)(d.a,{container:!0,style:{width:"min(100% - 2rem)",marginInline:"auto",height:"100%",marginTop:"70px"},direction:"column",rowGap:"20px",children:[Object(D.jsx)("h1",{style:{margin:"0, auto",textAlign:"center",marginBottom:"25px",marginTop:"25px"},children:"All Users"}),Object(D.jsx)(j.a,{label:"UserName",variant:"outlined",value:f,onChange:function(e){return p(e.target.value)}}),Object(D.jsx)("div",{className:"users-list",children:m.map((function(e){return s!==e.email?Object(D.jsx)(L,{firstName:e.firstName,secondName:e.secondName,userId:e.id,setNavChat:c},e.id):null}))})]}):Object(D.jsx)(o.a,{replace:!0,to:U.login})})};var B=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=y(),i=r.email,s=r.ChatID,o=function(){if(""!==a){var e=a.trimStart(),t=Object(b.b)(h,"".concat(s),"".concat(Date.now()).concat(i));Object(b.i)(t,{name:"".concat(i),text:e,createAt:Object(b.h)()},{merge:!0}),c("")}};return Object(n.useEffect)((function(){function e(e){a&&"Enter"===e.code&&(e.ctrlKey?c(a+"\r\n"):o())}return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}})),Object(D.jsx)(d.a,{container:!0,direction:"column",alignItems:"flex-end",style:{width:"100%"},className:"chat__input-area",children:Object(D.jsxs)("div",{className:"chat__input",children:[Object(D.jsx)("div",{style:{width:"100%"},children:Object(D.jsx)(j.a,{multiline:!0,fullWidth:!0,value:a,onChange:function(e){return c(e.target.value)},variant:"standard",maxRows:"3",InputProps:{disableUnderline:!0}})}),Object(D.jsx)(p.a,{variant:"contained",className:"chat__button",onClick:o,style:{height:"100%"},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})};var M=function(e){var t=e.value,a=e.time,n="now";"number"===typeof a&&(n=new Date(1e3*a).toLocaleString().slice(12,17));var c=t.name,r=y(),i=r.email;return r.nameFriend,r.firstName,Object(D.jsxs)("div",{style:{maxWidth:"85%",minWidth:"20%",margin:10,marginLeft:i===c?"auto":"10px",backgroundColor:i===c?"#7171ef":"#7d7d8e",width:"fit-content",border:"1px solid grey",borderRadius:"5px",color:"white",padding:5,wordWrap:"break-word"},children:[Object(D.jsx)("div",{style:{marginBottom:"10px",whiteSpace:"pre-wrap"},children:t.text}),Object(D.jsx)("div",{style:{textAlign:"end",fontSize:"smaller",color:"#00000091"},children:n})]})};var W=function(e){var t=e.messagesList,a=y(),c=a.nameFriend,r=a.email,i=Object(n.useRef)(null),s=Object(n.useState)([]),o=Object(l.a)(s,2),j=o[0],b=o[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),h=m[0],O=m[1];return Object(n.useEffect)((function(){if(!H.a.isEqual(t,j)&&j.length){var e=t[t.length-1],a=e.text;e.name!==r&&(n="New Message from ".concat(c," "),i={body:"".concat(a),dir:"auto"},/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&"Notification"in window&&("granted"===Notification.permission?new Notification(n,i):"denied"!==Notification.permission&&Notification.requestPermission((function(e){"granted"===e?new Notification(n,i):alert("\u0412\u044b \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")})))),O(!h)}var n,i;b(t)}),[t]),Object(n.useEffect)((function(){var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t]),Object(D.jsx)("div",{className:"chat",children:Object(D.jsx)("div",{children:Object(D.jsxs)(d.a,{container:!0,className:"chat__wrapper",children:[Object(D.jsxs)("div",{className:"chat__window",children:[Object(D.jsx)("div",{className:"chat__messages",children:t.map((function(e,t){return Object(D.jsx)(M,{value:e,time:e.createAt?e.createAt.seconds:"Now"},t)}))}),Object(D.jsx)("div",{ref:i})]}),Object(D.jsx)(B,{})]})})})};var z=function(){var e=y(),t=e.ChatID,a=e.nameFriend,c=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=Object(b.g)(Object(b.a)(h,"".concat(e)),Object(b.f)("createAt"));Object(b.e)(t,(function(e){var t=[];e.forEach((function(e){t.push(e.data())})),r(t)}))}),[]),c}(t),r=Object(N.b)();return Object(n.useEffect)((function(){r(A({HeaderChat:a}))}),[t]),Object(D.jsx)(D.Fragment,{children:t?Object(D.jsx)(W,{messagesList:c}):Object(D.jsx)(o.a,{replace:!0,to:U.userList})})};var J=function(){var e=y().isAuth;return Object(D.jsx)(D.Fragment,{children:e?Object(D.jsx)(o.a,{replace:!0,to:U.userPage}):Object(D.jsx)(o.a,{replace:!0,to:U.login})})},V=a(55),G=a(18),K=a(221),X=a(124);var Y=function(e){var t,a,n,c,r=e.title,i=e.handleClick,s=e.login,o=Object(X.a)({mode:"onChange"}),l=o.register,b=o.formState,u=b.errors,m=b.isValid,h=o.handleSubmit;return Object(D.jsx)("div",{children:Object(D.jsx)(d.a,{container:!0,alignItems:"center",justifyContent:"center",direction:"column",rowGap:"10%",children:Object(D.jsxs)("form",{onSubmit:h(i),style:{width:"216px",display:"flex",flexDirection:"column"},children:[s?null:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(j.a,Object(G.a)(Object(G.a)({},l("firstName",{required:"Required"})),{},{label:"First Name",variant:"standard"})),Object(D.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.firstName)&&Object(D.jsx)("p",{children:(null===u||void 0===u||null===(t=u.firstName)||void 0===t?void 0:t.message)||"Error"})}),Object(D.jsx)(j.a,Object(G.a)(Object(G.a)({},l("secondName",{required:"Required"})),{},{label:"Second Name",variant:"standard"})),Object(D.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.secondName)&&Object(D.jsx)("p",{children:(null===u||void 0===u||null===(a=u.secondName)||void 0===a?void 0:a.message)||"Error"})})]}),Object(D.jsx)(j.a,Object(G.a)(Object(G.a)({},l("email",{required:"Required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}})),{},{label:"Email",variant:"standard"})),Object(D.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.email)&&Object(D.jsx)("p",{children:(null===u||void 0===u||null===(n=u.email)||void 0===n?void 0:n.message)||"Error"})}),Object(D.jsx)(j.a,Object(G.a)(Object(G.a)({},l("password",{required:"Required",minLength:{value:6,message:"Minimum 6 symbols "}})),{},{type:"password",label:"Password",variant:"standard"})),Object(D.jsx)("div",{style:{height:"30px",paddingTop:"5px",color:"red"},children:(null===u||void 0===u?void 0:u.password)&&Object(D.jsx)("p",{children:(null===u||void 0===u||null===(c=u.password)||void 0===c?void 0:c.message)||"Error"})}),Object(D.jsx)(K.a,{className:"submit-form",type:"submit",value:r,disableUnderline:!0,disabled:!m})]})})})};function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(x.a)(Object(O.a)().mark((function e(t){var a,n,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(b.b)(h,"Users","".concat(t.email)),e.next=3,Object(b.c)(a);case 3:return n=e.sent,e.next=6,n.data();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(){var e=Object(N.b)(),t=Object(o.g)();return Object(V.b)().onAuthStateChanged((function(a){a&&Q(a).then((function(n){var c=n.firstName,r=n.secondName;e(I({email:a.email,id:a.uid,firstName:c,secondName:r})),t("".concat(U.chat))}))})),Object(D.jsx)(Y,{title:"Sign in",handleClick:function(a){var n=a.email,c=a.password,r=Object(V.b)();Object(V.c)(r,n,c).then((function(a){var n=a.user;Q(n).then((function(a){var c=a.firstName,r=a.secondName;e(I({email:n.email,id:n.uid,firstName:c,secondName:r})),t("".concat(U.chat))}))})).catch(console.log)},login:!0})};var ee=function(){return Object(D.jsxs)("div",{className:"page",children:[Object(D.jsx)($,{}),Object(D.jsxs)("p",{className:"page__link",children:["No account?   ",Object(D.jsx)("br",{}),Object(D.jsx)(s.b,{to:U.registration,children:"Create it!"})]})]})};var te=function(){var e=Object(N.b)(),t=Object(o.g)();return Object(D.jsx)(Y,{title:"Registration",handleClick:function(a){var n=a.firstName,c=a.secondName,r=a.email,i=a.password,s=Object(V.b)();Object(V.a)(s,r,i).then((function(a){var r=a.user;e(I({email:r.email,id:r.uid,firstName:n,secondName:c})),function(e,t,a,n){var c=Object(b.b)(h,"Users","".concat(e));Object(b.i)(c,{firstName:a,secondName:n,id:t,email:e},{merge:!0})}(r.email,r.uid,n,c),t("".concat(U.chat))})).catch((function(e){var t=e.code;console.log(t);var a=e.message;console.log(a)}))},login:!1})};var ae=function(){return Object(D.jsxs)("div",{className:"page",children:[Object(D.jsx)(te,{}),Object(D.jsxs)("p",{className:"page__link",children:["Already have an account? ",Object(D.jsx)("br",{}),Object(D.jsx)(s.b,{to:U.login,children:"Sign in"})]})]})};var ne=function(){var e=y().isAuth;return Object(D.jsx)(D.Fragment,{children:e?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"user-page",children:Object(D.jsx)(d.a,{container:!0,style:{marginTop:"80px",height:"80vh",width:"min(100% - 2rem)",marginInline:"auto"},alignItems:"flex-start",justifyContent:"flex-start"})})}):Object(D.jsx)(o.a,{replace:!0,to:U.login})})},ce=a(218),re=a(214),ie=a(216),se=a(210),oe=a(220),le=a(213),de=a(207),je=a(204),be=a(217),ue=a(121),me=a.n(ue),he=a(219),Oe=a(215),xe=Object(n.memo)((function(e){var t=y(),a=t.firstName,c=t.secondName,r=t.ChatID,i=t.HeaderChat,o=t.nameFriend,d=e.window,j=Object(n.useState)(!1),b=Object(l.a)(j,2),u=b[0],m=b[1],h=Object(n.useState)("".concat(c," ").concat(a)),O=Object(l.a)(h,2),x=O[0],v=O[1],g=Object(N.b)();Object(n.useEffect)((function(){v(""!==i?"Chat with ".concat(o):"".concat(c," ").concat(a))}),[i]);var w=function(){m(!u)};function C(){Object(V.b)().signOut().then((function(){g(k())}),(function(e){console.error("Sign Out Error",e)}))}var S=Object(D.jsxs)(re.a,{onClick:w,sx:{textAlign:"center"},style:{height:"10vh"},children:[Object(D.jsx)(Oe.a,{variant:"h6",sx:{my:2},children:Object(D.jsx)("p",{style:{textOverflow:"ellipsis"},children:x})}),Object(D.jsx)(ie.a,{}),Object(D.jsxs)(le.a,{children:[Object(D.jsx)(s.b,{to:U.userList,children:Object(D.jsx)(de.a,{disablePadding:!0,children:Object(D.jsx)(je.a,{sx:{textAlign:"center"},children:Object(D.jsx)(be.a,{primary:"Users"})})})}),Object(D.jsx)(s.b,{to:U.chat,children:Object(D.jsx)(de.a,{disablePadding:!0,disabled:!r,children:Object(D.jsx)(je.a,{sx:{textAlign:"center"},children:Object(D.jsx)(be.a,{primary:"Chat"})})})}),Object(D.jsx)(p.a,{variant:"text",style:{color:"black"},onClick:C,children:"Sing Out"})]})]}),I=void 0!==d?function(){return d().document.body}:void 0;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ce.a,{component:"nav",style:{backgroundColor:"rgb(101 119 163)"},children:Object(D.jsxs)(he.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(D.jsx)(oe.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,sx:{mr:2,display:{sm:"none"}},children:Object(D.jsx)(me.a,{})}),Object(D.jsxs)(Oe.a,{variant:"h6",sx:{display:{xs:"none",sm:"block"}},style:{display:"flex",alignItems:"center",gap:"10px"},children:[Object(D.jsx)(f.a,{}),Object(D.jsx)("p",{style:{textOverflow:"ellipsis"},children:x})]}),Object(D.jsxs)(re.a,{sx:{display:{xs:"none",sm:"block"}},children:[Object(D.jsx)(s.b,{to:U.userList,children:Object(D.jsx)(p.a,{sx:{color:"#fff"},children:"Users"})}),Object(D.jsx)(s.b,{to:U.chat,children:Object(D.jsx)(p.a,{sx:{color:"#fff"},disabled:!r,children:"Chat"})})]}),Object(D.jsx)(p.a,{variant:"text",style:{color:"white"},onClick:C,children:"Sing Out"})]})}),Object(D.jsx)(re.a,{component:"nav",children:Object(D.jsx)(se.a,{container:I,variant:"temporary",open:u,onClose:w,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:S})})]})}));var fe=function(){var e=y().isAuth;return Object(D.jsxs)(D.Fragment,{children:[e?Object(D.jsx)(xe,{}):null,Object(D.jsxs)(o.d,{children:[Object(D.jsx)(o.b,{path:U.home,element:Object(D.jsx)(J,{})}),Object(D.jsx)(o.b,{path:U.login,element:Object(D.jsx)(ee,{})}),Object(D.jsx)(o.b,{path:U.registration,element:Object(D.jsx)(ae,{})}),Object(D.jsx)(o.b,{path:U.chat,element:Object(D.jsx)(z,{})}),Object(D.jsx)(o.b,{path:U.userPage,element:Object(D.jsx)(ne,{})}),Object(D.jsx)(o.b,{path:U.userList,element:Object(D.jsx)(T,{})}),Object(D.jsx)(o.b,{path:"*",element:Object(D.jsx)(o.a,{to:U.home,replace:!0})})]})]})},pe=(a(151),Object(w.a)({reducer:{user:_}}));i.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(s.a,{children:Object(D.jsx)(N.a,{store:pe,children:Object(D.jsx)(fe,{})})})}))}},[[152,1,2]]]);
//# sourceMappingURL=main.606079fb.chunk.js.map