(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0121":function(t,e,s){t.exports=s.p+"img/csharp.81d33ab9.jpg"},"03cd":function(t,e,s){},"13a1":function(t,e,s){t.exports=s.p+"img/laptop.5f072b3d.svg"},"13e1":function(t,e,s){"use strict";s("03cd")},1592:function(t,e,s){},"19a1":function(t,e,s){"use strict";s("dbd9")},"1f69":function(t,e,s){"use strict";s("2e14")},2059:function(t,e,s){},"27e4":function(t,e,s){t.exports=s.p+"img/arrow.f975639a.svg"},"284a":function(t,e,s){},"2a0c":function(t,e,s){},"2e14":function(t,e,s){},3783:function(t,e,s){"use strict";s("b331")},"3eae":function(t,e,s){"use strict";s("1592")},"42d1":function(t,e,s){},"42d10":function(t,e,s){"use strict";s("284a")},"4a2a":function(t,e,s){"use strict";s("df15")},"4fc8":function(t,e,s){t.exports=s.p+"img/Codic-logo.5a22a964.svg"},"52ed":function(t,e,s){"use strict";s("cad8")},5305:function(t,e,s){},"566c":function(t,e,s){t.exports=s.p+"img/playing.aa3cff0b.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},i=[],a=(s("5c0b"),s("2877")),r={},c=Object(a["a"])(r,o,i,!1,null,null,null),u=c.exports,l=s("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d,m,p=s("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("disk-nav"),n("mobile-navbar"),n("main",[n("section",{staticClass:"main-view"},[t._m(0),n("p",{staticClass:"meeting-p"},[t._v(" Söker du kompetenta lärare till en yrkesutbildning, "),n("br"),t._v(" kodstuga eller gästföreläsning i Göteborg? "),n("br"),n("router-link",{attrs:{to:"/"}},[t._v("Hur bokar jag ett möte")])],1),n("img",{staticClass:"laptop",attrs:{src:s("13a1"),alt:""}}),n("section",{staticClass:"buttons"},[n("button",{staticClass:"cta",on:{click:t.navToCourses}},[t._v("våra kurser")]),n("button",{staticClass:"ghost",on:{click:t.navToContact}},[t._v("kontakta oss")])]),t._m(1)]),n("section",{staticClass:"courses-view"},[t._m(2),n("div",{staticClass:"pop-courses"},[n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}}),n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}}),n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}})],1),t._m(3),n("p",{staticClass:"desc desktop-only"},[t._v(" som är experterpå programmering. Backend, frontend, app- och webbutveckling ")]),n("p",{staticClass:"desc desktop-only"},[t._v("är några av våra specialistområden.")]),t._m(4),n("p",{staticClass:"desc mobile-only"},[t._v(" Backend, frontend, app- och webbutveckling ")]),n("p",{staticClass:"desc mobile-only"},[t._v(" är några av våra specialistområden. ")]),n("button",{staticClass:"cta",on:{click:t.navToCourses}},[n("p",[t._v("alla kurser")]),n("img",{attrs:{src:s("27e4"),alt:""}})])])]),n("Footer")],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[t._v(" vi utbildar "),s("span",[t._v("Göteborg")]),t._v(" inom IT och programmering ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"scroll"},[n("p",[t._v("scrolla")]),n("img",{attrs:{src:s("e24a"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("h3",[t._v("populära kurser")]),s("p",[t._v("här hittar du de mest populära kurser hos oss")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"desc desktop-only"},[t._v(" Hos "),s("span",[t._v("Codic")]),t._v(" finner du ett gäng trevliga IT-konsulter ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"desc mobile-only"},[t._v(" Hos "),s("span",[t._v("Codic")]),t._v(" finner du ett gäng trevliga IT-konsulter som är experterpå programmering. ")])}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("section",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[t._v("startSidan")]),n("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")]),n("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")]),n("router-link",{attrs:{to:"/contact"}},[t._v("om oss")])],1),n("section",{staticClass:"reg"},[n("button",{staticClass:"logout",on:{click:t.logout}},[t._v("logga ut")]),n("router-link",{staticClass:"signup",attrs:{to:"/profile"}},[t._v("mina sidor")])],1)])},g=[],_={methods:{logout:function(){this.$store.dispatch("logout")},navToHome:function(){this.$router.push("/")}}},b=_,C=(s("7b2a"),Object(a["a"])(b,h,g,!1,null,"1229b402",null)),k=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("img",{staticClass:"menu-btn",attrs:{src:s("e029"),alt:""},on:{click:t.showMenu}}),t.menuShown?n("mobile-menu",{on:{hideMenu:t.hideMenuListener}}):t._e()],1)},$=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"mobile-menu"},[n("button",{staticClass:"closeBtn"},[n("img",{attrs:{src:s("c19d"),alt:""},on:{click:t.hideMenu}})]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("startsidan")])],1),n("li",[n("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")])],1)]),n("section",{staticClass:"buttons"},[n("button",{staticClass:"cta",on:{click:t.navToProfile}},[t._v("mina sidor")]),n("button",{staticClass:"ghost",on:{click:t.logout}},[t._v("logga ut")])])])])},E=[],x={methods:{hideMenu:function(){this.$emit("hideMenu")},navToProfile:function(){this.$router.push("/profile")},logout:function(){this.$store.dispatch("logout")}}},j=x,O=(s("3eae"),Object(a["a"])(j,w,E,!1,null,"aa7d8186",null)),N=O.exports,P={data:function(){return{menuShown:!1}},components:{MobileMenu:N},methods:{navToHome:function(){this.$router.push("/")},hideMenuListener:function(){this.menuShown=!1},showMenu:function(){this.menuShown=!0}}},U=P,S=(s("8101"),Object(a["a"])(U,y,$,!1,null,"ed165404",null)),L=S.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[t._m(0),s("section",{staticClass:"fotlinks"},[s("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")]),s("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")]),s("router-link",{attrs:{to:"/"}},[t._v("startsidan")])],1),t._m(1),t._m(2),s("p",{staticClass:"adress"},[t._v(" Codic Consulting 13 Stora Nygatan, Göteborg, Västra Götalands län, 411 08, Sverige ")])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("span",[t._v("codic")]),t._v(" education")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"socials"},[n("img",{attrs:{src:s("5938"),alt:""}}),n("img",{attrs:{src:s("d91d"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"fotContactInfo"},[s("p",{staticClass:"info"},[t._v("Codic Consulting: +46-765-519-733")]),s("p",{staticClass:"info"},[t._v("Codic Education: +46-768-990-065")]),s("p",{staticClass:"info"},[t._v("Email: hi@codic.se")])])}],F={},M=F,I=(s("1f69"),Object(a["a"])(M,V,T,!1,null,"b27fbd76",null)),H=I.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-course"},[t._m(0),s("section",{staticClass:"info"},[s("h4",[t._v(t._s(t.title))]),s("p",[t._v(" "+t._s(t.description)+" ")])]),s("button",{staticClass:"cta"},[t._v("till kursen")])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"img"},[n("img",{attrs:{src:s("0121"),alt:""}})])}],A={props:{title:String,description:String}},D=A,W=(s("85ef"),Object(a["a"])(D,B,q,!1,null,"624d48b2",null)),G=W.exports,R={name:"Home",components:{DiskNav:k,MobileNavbar:L,Footer:H,PopCourse:G},computed:{user:function(){return this.$store.state.currentUser}},methods:{navToCourses:function(){this.$router.push("/courses")},navToContact:function(){this.$router.push("/contact")}}},J=R,z=(s("9cde"),Object(a["a"])(J,f,v,!1,null,"5750c363",null)),K=z.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"courses"},[s("disk-nav"),s("mobile-navbar"),s("main",[s("div",{staticClass:"courses-view"},[t._m(0),s("courses-list")],1)]),s("Footer")],1)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"txt-cont"},[s("h3",[t._v("våra nya kurser")]),s("p",{staticClass:"desktop-only"},[t._v(" Utveckla dina kunskaper med hjälp av våra kurser ")]),s("p",{staticClass:"desktop-only"},[t._v(" inom områden som Fron-end, Back-end, app- och webutveckling ")]),s("p",{staticClass:"mobile-only"},[t._v(" Utveckla dina kunskaper med hjälp av våra kurser områden som Fron-end, Back-end, app- och webutveckling ")])])}],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"courses-list"},t._l(t.courses,(function(t){return s("course",{key:t.name,attrs:{course:t}})})),1)},Q=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-in-courses"},[t._m(0),s("h3",[t._v(t._s(t.course.fullName))]),s("p",[t._v(" "+t._s(t.course.description)+" ")]),s("p",{staticClass:"lessons"},[t._v("lessons: "+t._s(t.course.lessons))]),s("button",{on:{click:t.openCourse}},[t._v("till kursen")])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:s("0121"),alt:""}})])}],st={props:{course:Object},methods:{openCourse:function(){this.$store.dispatch("saveSelectedCourse",this.course),this.$router.push("/course")}}},nt=st,ot=(s("13e1"),Object(a["a"])(nt,tt,et,!1,null,"dc134b80",null)),it=ot.exports,at={components:{Course:it},computed:{courses:function(){return this.$store.state.courses}}},rt=at,ct=(s("6271"),Object(a["a"])(rt,Z,Q,!1,null,"642cd424",null)),ut=ct.exports,lt={name:"Course",components:{DiskNav:k,Footer:H,CoursesList:ut,MobileNavbar:L},created:function(){this.$store.dispatch("getCourses")}},dt=lt,mt=(s("c541"),Object(a["a"])(dt,Y,X,!1,null,"b8321148",null)),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-us"},[s("disk-nav"),s("mobile-navbar"),s("main",[t._m(0),s("form",{staticClass:"form-cont",on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[t._m(1),s("label",{attrs:{for:"email"}},[t._v("e-post")]),s("input",{attrs:{type:"email",name:"email",required:""}}),s("label",{attrs:{for:"txt"}},[t._v("medelande")]),s("textarea",{attrs:{name:"msg",id:"msg",cols:"30",rows:"10",required:""}}),s("button",[t._v("skicka")])])]),s("Footer")],1)},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"txt-cont"},[s("h2",[t._v("kontakta oss")]),s("p",{staticClass:"welcome"},[t._v(" Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten i Göteborg. Kontakta oss här nedan eller hör av dig direkt till någon av våra medarbetare. Vi återkommer så fort vi kan. ")]),s("article",[s("p",{staticClass:"cont-info"},[t._v("Codic Consulting: +46-765-519-733")]),s("p",{staticClass:"cont-info"},[t._v("Codic Education: +46-768-990-065")]),s("p",{staticClass:"cont-info"},[t._v("hi@codic.se")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-name"},[s("article",{staticClass:"name-cont"},[s("label",{attrs:{for:"firstName"}},[t._v("förnamn")]),s("input",{attrs:{type:"text",name:"firstName",required:""}})]),s("article",{staticClass:"name-cont"},[s("label",{attrs:{for:"lastName"}},[t._v("efternamn")]),s("input",{attrs:{type:"text",name:"lastName",required:""}})])])}],ht={name:"ContactUs",components:{DiskNav:k,MobileNavbar:L,Footer:H}},gt=ht,_t=(s("b31b"),Object(a["a"])(gt,ft,vt,!1,null,"17b1aac8",null)),bt=_t.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("reg-header"),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7711"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],attrs:{type:"email",placeholder:"E-post ",required:""},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPass,expression:"loginPass"}],attrs:{type:"password",placeholder:"Lösenord",required:""},domProps:{value:t.loginPass},on:{input:function(e){e.target.composing||(t.loginPass=e.target.value)}}})]),n("button",[t._v("log in")])]),n("footer",[n("p",[t._v("skapa ett konto "),n("router-link",{attrs:{to:"/signup"}},[t._v("här")])],1)])],1)},kt=[],yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("h1",[t._v("välkommen till "),s("span",[t._v("codic")]),t._v(" Education")]),s("p",[t._v(" Hos oss får du möjligheten att utveckla dina kunskaper inom programmering gratis! ")])])}],wt={},Et=wt,xt=(s("e6c2"),Object(a["a"])(Et,yt,$t,!1,null,"1dd968fa",null)),jt=xt.exports,Ot={data:function(){return{loginEmail:"",loginPass:""}},components:{RegHeader:jt},methods:{login:function(){var t={email:this.loginEmail,password:this.loginPass};this.$store.dispatch("login",t)}}},Nt=Ot,Pt=(s("4a2a"),Object(a["a"])(Nt,Ct,kt,!1,null,"6103fb88",null)),Ut=Pt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signup"},[n("reg-header"),n("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7ced"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"Användarnamn",required:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7711"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],attrs:{type:"email",placeholder:"E-post ",required:""},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userPass,expression:"userPass"}],attrs:{type:"password",placeholder:"Lösenord",required:""},domProps:{value:t.userPass},on:{input:function(e){e.target.composing||(t.userPass=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passConfermation,expression:"passConfermation"}],attrs:{type:"password",placeholder:"Bekräfta ditt lösenord",required:""},domProps:{value:t.passConfermation},on:{input:function(e){e.target.composing||(t.passConfermation=e.target.value)}}})]),n("button",[t._v("skicka")])]),n("footer",[n("p",[t._v(" har du redan ett konto "),n("router-link",{attrs:{to:"/login"}},[t._v("logga in")])],1)])],1)},Lt=[],Vt=(s("96cf"),s("1da1")),Tt={components:{RegHeader:jt},data:function(){return{userName:"",userEmail:"",userPass:"",passConfermation:""}},computed:{},watch:{},methods:{signin:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""===this.userPass?alert("Password cannot be empty"):this.userPass!=this.passConfermation||""===this.passConfermation?alert("Make sure your password matches the passwprd confermation"):(this.sendUserToDB(),this.$router.push("/"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendUserToDB:function(){var t={name:this.userName,email:this.userEmail,password:this.userPass};console.log(t),this.$store.dispatch("signUser",t)},loginUser:function(){alert("Your account has been registerd successfully!"),this.$router.push("/")}}},Ft=Tt,Mt=(s("3783"),Object(a["a"])(Ft,St,Lt,!1,null,"835cda40",null)),It=Mt.exports,Ht={},Bt=Object(a["a"])(Ht,d,m,!1,null,null,null),qt=Bt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course-full-view"},[n("nav",[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("div",{staticClass:"back",on:{click:t.navToCourses}},[n("img",{attrs:{src:s("a9a4"),alt:""}}),n("p",[t._v("tillbaka")])])]),n("main",[n("section",{staticClass:"video-player"},[n("div",{staticClass:"video"},[n("iframe",{attrs:{width:"100%",height:"100%",src:t.currentVideoLink,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),n("section",{staticClass:"list"},[n("playlist")],1)]),n("Footer")],1)},Dt=[],Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},t._l(t.playlist,(function(t,e){return s("list-item",{key:t.id,attrs:{item:t,index:e}})})),1)},Gt=[],Rt=(s("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-item",on:{click:t.selectItem}},[n("p",[t._v("-")]),n("p",{staticClass:"video-name"},[t._v(t._s(t.item.vidName))]),n("article",[n("img",{attrs:{src:s("9e15"),alt:""}}),n("p",{staticClass:"length"},[t._v(t._s(t.item.vidLength))])])])}),Jt=[],zt=(s("4160"),s("a9e3"),s("159b"),{data:function(){return{playing:!0}},props:{item:Object,index:Number},methods:{selectItem:function(){var t=document.getElementsByClassName("list-item"),e=this.index;t.forEach((function(t){t.classList.remove("white")})),t[e].classList.add("white"),this.saveVideo(),this.saveVideoForUser()},saveVideo:function(){this.$store.dispatch("saveCurrentVid",this.item.vidLink)},saveVideoForUser:function(){var t=this.$store.state.uid,e={vid:this.item,uid:t};this.$store.dispatch("saveVideoUser",e)}}}),Kt=zt,Yt=(s("6f56"),Object(a["a"])(Kt,Rt,Jt,!1,null,"081f731e",null)),Xt=Yt.exports,Zt={components:{ListItem:Xt},computed:{playlist:function(){return this.$store.state.CourseVideos}},created:function(){var t=this.$store.state.courseSlected;t||(t=JSON.parse(localStorage.getItem("courseSelected"))),this.$store.dispatch("getCourse",t.name)}},Qt=Zt,te=(s("671a"),Object(a["a"])(Qt,Wt,Gt,!1,null,"4cbb923d",null)),ee=te.exports,se={components:{Playlist:ee,Footer:H},computed:{currentVideoLink:function(){return this.$store.state.currentVideoLink}},methods:{navToCourses:function(){this.$router.push("/courses")},navToHome:function(){this.$router.push("/")}}},ne=se,oe=(s("884e"),Object(a["a"])(ne,At,Dt,!1,null,"2414831b",null)),ie=oe.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("disk-nav"),s("mobile-navbar"),s("main",[s("section",{staticClass:"user-info"},[t._m(0),s("h1",[t._v(t._s(t.user.name))]),s("p",[t._v(" "+t._s(t.user.email)+" ")])]),s("section",{staticClass:"list"},[s("user-list")],1)]),s("Footer")],1)},re=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:s("e326"),alt:""}})])}],ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},[t._m(0),t._l(t.playlist,(function(t){return s("user-list-item",{key:t.id,attrs:{item:t}})}))],2)},ue=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"list-title"},[s("h3",[t._v("recently played")])])}],le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-item"},[n("p",{staticClass:"video-name"},[t._v(t._s(t.item.vidName))]),n("article",[n("p",{staticClass:"length"},[t._v(t._s(t.item.vidLength))]),n("button",{on:{click:t.navToCourse}},[n("img",{attrs:{src:s("566c"),alt:""}})])])])},de=[],me={data:function(){return{playing:!0}},methods:{navToCourse:function(){this.$router.push("/course"),this.$store.dispatch("playUservid",this.item.vidLink)}},props:{item:Object}},pe=me,fe=(s("42d10"),Object(a["a"])(pe,le,de,!1,null,"f239a0f0",null)),ve=fe.exports,he={components:{UserListItem:ve},created:function(){this.$store.dispatch("getUserPlaylist",this.$store.state.uid)},computed:{playlist:function(){return this.$store.state.playedVideos}}},ge=he,_e=(s("19a1"),Object(a["a"])(ge,ce,ue,!1,null,"66f204c7",null)),be=_e.exports,Ce={name:"profile",components:{DiskNav:k,Footer:H,UserList:be,MobileNavbar:L},computed:{uid:function(){return this.$store.state.uid},user:function(){return this.$store.state.user}},created:function(){this.$store.dispatch("getUser",this.uid)}},ke=Ce,ye=(s("52ed"),Object(a["a"])(ke,ae,re,!1,null,"031a26b0",null)),$e=ye.exports;n["a"].use(p["a"]);var we=[{path:"/",name:"Home",component:K},{path:"/login",name:"Login",component:Ut},{path:"/signup",name:"Signup",component:It},{path:"/courses",name:"Courses",component:pt},{path:"/contact",name:"Contact",component:bt},{path:"/menu",name:"menu",component:qt},{path:"/course",name:"Course",component:ie},{path:"/profile",name:"Profile",component:$e}],Ee=new p["a"]({mode:"history",base:"/",routes:we}),xe=Ee,je=(s("45fc"),s("2f62")),Oe=s("260b");s("ea7b"),s("e71f");n["a"].use(je["a"]);var Ne=new je["a"].Store({state:{uid:"",user:"",courseSlected:"",playedVideos:[],CourseVideos:[],courses:[],currentVideoLink:""},mutations:{saveUid:function(t,e){t.uid=e},resetUid:function(t){t.uid=null},saveUser:function(t,e){t.user=e},saveCourses:function(t,e){t.courses=e},saveCourse:function(t,e){t.courseSlected=e},saveCourseVids:function(t,e){t.CourseVideos=e},saveLink:function(t,e){t.currentVideoLink=e},saveVideosWatched:function(t,e){t.playedVideos=e}},actions:{signUser:function(t,e){Oe["a"].auth().createUserWithEmailAndPassword(e.email,e.password).then((function(s){console.log(s.user.uid),t.commit("saveUid",s.user.uid),Oe["a"].firestore().collection("users").doc(s.user.uid).set({name:e.name,email:e.email,videosWatched:[]})}))},login:function(t,e){Oe["a"].auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){t.commit("saveUid",e.user.uid)}))},logout:function(t){Oe["a"].auth().signOut().then((function(){console.log("Current user has been logged out"),t.commit("resetUid")}))},saveUid:function(t,e){t.commit("saveUid",e)},getUser:function(t,e){Oe["a"].firestore().collection("users").doc(e).get().then((function(e){t.commit("saveUser",e.data())}))},getCourses:function(t){var e=[];Oe["a"].firestore().collection("courses").get().then((function(t){t.docs.forEach((function(t){e.push(t.data())}))})),t.commit("saveCourses",e)},saveSelectedCourse:function(t,e){localStorage.setItem("courseSelected",JSON.stringify(e)),t.commit("saveCourse",e)},getCourse:function(t,e){var s=[];Oe["a"].firestore().collection(e).get().then((function(t){t.docs.forEach((function(t){return s.push(t.data())}))})),t.commit("saveCourseVids",s)},saveCurrentVid:function(t,e){t.commit("saveLink",e)},saveVideoUser:function(t,e){var s=[];Oe["a"].firestore().collection("users").doc(e.uid).get().then((function(t){s=t.data().videosWatched,s.some((function(t){return t.vidName===e.vid.vidName}))||(s.push(e.vid),Oe["a"].firestore().collection("users").doc(e.uid).update({videosWatched:s}))}))},getUserPlaylist:function(t,e){Oe["a"].firestore().collection("users").doc(e).get().then((function(e){t.commit("saveVideosWatched",e.data().videosWatched)}))},playUservid:function(t,e){t.commit("saveLink",e)}},modules:{}}),Pe={apiKey:"AIzaSyAlJAmR-tOK-2BFHu3IHvGdez39XUNvfMY",authDomain:"codic-83234.firebaseapp.com",projectId:"codic-83234",storageBucket:"codic-83234.appspot.com",messagingSenderId:"468243388891",appId:"1:468243388891:web:c96f6c4ba2edff3030effe",measurementId:"G-VVSL1TZEED",datanaseURL:"https://codic.firebaseio.com"};Oe["a"].initializeApp(Pe),Oe["a"].auth().onAuthStateChanged((function(t){t?(Ne.dispatch("saveUid",t.uid),xe.push("/")):xe.push("/signup")})),n["a"].config.productionTip=!1,new n["a"]({router:xe,store:Ne,render:function(t){return t(u)}}).$mount("#app")},5938:function(t,e,s){t.exports=s.p+"img/linkedIn.6b1081a7.svg"},5962:function(t,e,s){},"5c0b":function(t,e,s){"use strict";s("9c0c")},6271:function(t,e,s){"use strict";s("e27f")},"671a":function(t,e,s){"use strict";s("e5ae")},"6f56":function(t,e,s){"use strict";s("8840")},7711:function(t,e,s){t.exports=s.p+"img/email.570540fd.svg"},"7b2a":function(t,e,s){"use strict";s("5962")},"7ced":function(t,e,s){t.exports=s.p+"img/userName.982e0406.svg"},8101:function(t,e,s){"use strict";s("5305")},"85ef":function(t,e,s){"use strict";s("9148")},8840:function(t,e,s){},"884e":function(t,e,s){"use strict";s("2a0c")},9148:function(t,e,s){},"9c0c":function(t,e,s){},"9cde":function(t,e,s){"use strict";s("c588")},"9e15":function(t,e,s){t.exports=s.p+"img/duration.e288a628.svg"},a9a4:function(t,e,s){t.exports=s.p+"img/small-arrow.ab0020bc.svg"},b31b:function(t,e,s){"use strict";s("2059")},b331:function(t,e,s){},b6b2:function(t,e,s){},c19d:function(t,e,s){t.exports=s.p+"img/closeBtn.bf737f5c.svg"},c541:function(t,e,s){"use strict";s("42d1")},c588:function(t,e,s){},cad8:function(t,e,s){},d91d:function(t,e,s){t.exports=s.p+"img/instagram.19a78820.svg"},dbd9:function(t,e,s){},df15:function(t,e,s){},e029:function(t,e,s){t.exports=s.p+"img/menuBtn.f56b1a78.svg"},e24a:function(t,e,s){t.exports=s.p+"img/scroll.9c2e5f9f.svg"},e27f:function(t,e,s){},e296:function(t,e,s){t.exports=s.p+"img/password.91a6238f.svg"},e326:function(t,e,s){t.exports=s.p+"img/profileImg.8b873469.svg"},e5ae:function(t,e,s){},e6c2:function(t,e,s){"use strict";s("b6b2")}});
//# sourceMappingURL=app.7eb87649.js.map