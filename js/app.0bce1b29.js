(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0121":function(t,e,s){t.exports=s.p+"img/csharp.81d33ab9.jpg"},"03cd":function(t,e,s){},"10b6":function(t,e,s){},"13a1":function(t,e,s){t.exports=s.p+"img/laptop.5f072b3d.svg"},"13e1":function(t,e,s){"use strict";s("03cd")},1773:function(t,e,s){var n={"./Henrik Enström.png":"abe8","./Maria Bryl.png":"89b4","./Robin Kamo.png":"b754"};function r(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="1773"},"19a1":function(t,e,s){"use strict";s("dbd9")},"1f69":function(t,e,s){"use strict";s("2e14")},"26bc":function(t,e,s){"use strict";s("e59a")},"27e4":function(t,e,s){t.exports=s.p+"img/arrow.f975639a.svg"},"284a":function(t,e,s){},"2a0c":function(t,e,s){},"2b3e":function(t,e,s){"use strict";s("443f")},"2e14":function(t,e,s){},3783:function(t,e,s){"use strict";s("b331")},"3c4c":function(t,e,s){"use strict";s("dfde")},"3dbe":function(t,e,s){"use strict";s("c8fa")},"3de5":function(t,e,s){},"42d1":function(t,e,s){"use strict";s("284a")},"443f":function(t,e,s){},"4a2a":function(t,e,s){"use strict";s("df15")},"4fc8":function(t,e,s){t.exports=s.p+"img/Codic-logo.5a22a964.svg"},"52ed":function(t,e,s){"use strict";s("cad8")},5305:function(t,e,s){},"566c":function(t,e,s){t.exports=s.p+"img/playing.aa3cff0b.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},a=[],i=(s("5c0b"),s("2877")),o={},c=Object(i["a"])(o,r,a,!1,null,null,null),l=c.exports,u=s("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d,m,p=s("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("disk-nav"),n("mobile-navbar"),n("main",[n("section",{staticClass:"main-view"},[t._m(0),n("p",{staticClass:"meeting-p"},[t._v(" Söker du kompetenta lärare till en yrkesutbildning, "),n("br"),t._v(" kodstuga eller gästföreläsning i Göteborg? "),n("br"),n("router-link",{attrs:{to:"/"}},[t._v("Hur bokar jag ett möte")])],1),n("img",{staticClass:"laptop",attrs:{src:s("13a1"),alt:""}}),n("section",{staticClass:"buttons"},[n("button",{staticClass:"cta",on:{click:t.navToCourses}},[t._v("våra kurser")]),n("button",{staticClass:"ghost",on:{click:t.navToContact}},[t._v("kontakta oss")])]),t._m(1)]),n("section",{staticClass:"courses-view"},[t._m(2),n("div",{staticClass:"pop-courses"},[n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}}),n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}}),n("pop-course",{attrs:{title:"C# master class",description:"Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "}})],1),t._m(3),n("p",{staticClass:"desc desktop-only"},[t._v(" som är experterpå programmering. Backend, frontend, app- och webbutveckling ")]),n("p",{staticClass:"desc desktop-only"},[t._v("är några av våra specialistområden.")]),t._m(4),n("p",{staticClass:"desc mobile-only"},[t._v(" Backend, frontend, app- och webbutveckling ")]),n("p",{staticClass:"desc mobile-only"},[t._v(" är några av våra specialistområden. ")]),n("button",{staticClass:"cta",on:{click:t.navToCourses}},[n("p",[t._v("alla kurser")]),n("img",{attrs:{src:s("27e4"),alt:""}})])])]),n("Footer")],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[t._v(" vi utbildar "),s("span",[t._v("Göteborg")]),t._v(" inom IT och programmering ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"scroll"},[n("p",[t._v("scrolla")]),n("img",{attrs:{src:s("e24a"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("h3",[t._v("populära kurser")]),s("p",[t._v("här hittar du de mest populära kurser hos oss")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"desc desktop-only"},[t._v(" Hos "),s("span",[t._v("Codic")]),t._v(" finner du ett gäng trevliga IT-konsulter ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"desc mobile-only"},[t._v(" Hos "),s("span",[t._v("Codic")]),t._v(" finner du ett gäng trevliga IT-konsulter som är experterpå programmering. ")])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("section",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[t._v("startSidan")]),n("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")]),n("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")]),n("router-link",{attrs:{to:"/about"}},[t._v("om oss")])],1),n("section",{staticClass:"reg"},[n("button",{staticClass:"logout",on:{click:t.logout}},[t._v("logga ut")]),n("router-link",{staticClass:"signup",attrs:{to:"/profile"}},[t._v("mina sidor")])],1)])},h=[],b={methods:{logout:function(){this.$store.dispatch("logout")},navToHome:function(){this.$router.push("/")}}},_=b,k=(s("b6f4"),Object(i["a"])(_,g,h,!1,null,"965d1f9c",null)),C=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("img",{staticClass:"menu-btn",attrs:{src:s("e029"),alt:""},on:{click:t.showMenu}}),t.menuShown?n("mobile-menu",{on:{hideMenu:t.hideMenuListener}}):t._e()],1)},y=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"mobile-menu"},[n("button",{staticClass:"closeBtn"},[n("img",{attrs:{src:s("c19d"),alt:""},on:{click:t.hideMenu}})]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("startsidan")])],1),n("li",[n("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("om oss")])],1)]),n("section",{staticClass:"buttons"},[n("button",{staticClass:"cta",on:{click:t.navToProfile}},[t._v("mina sidor")]),n("button",{staticClass:"ghost",on:{click:t.logout}},[t._v("logga ut")])])])])},$=[],x={methods:{hideMenu:function(){this.$emit("hideMenu")},navToProfile:function(){this.$router.push("/profile")},logout:function(){this.$store.dispatch("logout")}}},j=x,N=(s("cb18"),Object(i["a"])(j,E,$,!1,null,"65142b79",null)),O=N.exports,P={data:function(){return{menuShown:!1}},components:{MobileMenu:O},methods:{navToHome:function(){this.$router.push("/")},hideMenuListener:function(){this.menuShown=!1},showMenu:function(){this.menuShown=!0}}},S=P,U=(s("8101"),Object(i["a"])(S,w,y,!1,null,"ed165404",null)),T=U.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[t._m(0),s("section",{staticClass:"fotlinks"},[s("router-link",{attrs:{to:"/contact"}},[t._v("kontakta oss")]),s("router-link",{attrs:{to:"/courses"}},[t._v("våra kurser")]),s("router-link",{attrs:{to:"/"}},[t._v("startsidan")])],1),t._m(1),t._m(2),s("p",{staticClass:"adress"},[t._v(" Codic Consulting 13 Stora Nygatan, Göteborg, Västra Götalands län, 411 08, Sverige ")])])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("span",[t._v("codic")]),t._v(" education")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"socials"},[n("img",{attrs:{src:s("5938"),alt:""}}),n("img",{attrs:{src:s("d91d"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"fotContactInfo"},[s("p",{staticClass:"info"},[t._v("Codic Consulting: +46-765-519-733")]),s("p",{staticClass:"info"},[t._v("Codic Education: +46-768-990-065")]),s("p",{staticClass:"info"},[t._v("Email: hi@codic.se")])])}],M={},F=M,I=(s("1f69"),Object(i["a"])(F,V,L,!1,null,"b27fbd76",null)),H=I.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-course"},[t._m(0),s("section",{staticClass:"info"},[s("h4",[t._v(t._s(t.title))]),s("p",[t._v(" "+t._s(t.description)+" ")])]),s("button",{staticClass:"cta"},[t._v("till kursen")])])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"img"},[n("img",{attrs:{src:s("0121"),alt:""}})])}],q={props:{title:String,description:String}},A=q,G=(s("85ef"),Object(i["a"])(A,B,D,!1,null,"624d48b2",null)),R=G.exports,J={name:"Home",components:{DiskNav:C,MobileNavbar:T,Footer:H,PopCourse:R},computed:{user:function(){return this.$store.state.currentUser}},methods:{navToCourses:function(){this.$router.push("/courses")},navToContact:function(){this.$router.push("/contact")}}},K=J,W=(s("bbbe"),Object(i["a"])(K,f,v,!1,null,"4028f5f3",null)),z=W.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"courses"},[s("disk-nav"),s("mobile-navbar"),s("main",[s("div",{staticClass:"courses-view"},[t._m(0),s("courses-list")],1)]),s("Footer")],1)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"txt-cont"},[s("h3",[t._v("våra nya kurser")]),s("p",{staticClass:"desktop-only"},[t._v(" Utveckla dina kunskaper med hjälp av våra kurser ")]),s("p",{staticClass:"desktop-only"},[t._v(" inom områden som Fron-end, Back-end, app- och webutveckling ")]),s("p",{staticClass:"mobile-only"},[t._v(" Utveckla dina kunskaper med hjälp av våra kurser områden som Fron-end, Back-end, app- och webutveckling ")])])}],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"courses-list"},t._l(t.courses,(function(t){return s("course",{key:t.name,attrs:{course:t}})})),1)},Q=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-in-courses"},[t._m(0),s("h3",[t._v(t._s(t.course.fullName))]),s("p",[t._v(" "+t._s(t.course.description)+" ")]),s("p",{staticClass:"lessons"},[t._v("lessons: "+t._s(t.course.lessons))]),s("button",{on:{click:t.openCourse}},[t._v("till kursen")])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:s("0121"),alt:""}})])}],st={props:{course:Object},methods:{openCourse:function(){this.$store.dispatch("saveSelectedCourse",this.course),this.$router.push("/course")}}},nt=st,rt=(s("13e1"),Object(i["a"])(nt,tt,et,!1,null,"dc134b80",null)),at=rt.exports,it={components:{Course:at},computed:{courses:function(){return this.$store.state.courses}}},ot=it,ct=(s("6271"),Object(i["a"])(ot,Z,Q,!1,null,"642cd424",null)),lt=ct.exports,ut={name:"Course",components:{DiskNav:C,Footer:H,CoursesList:lt,MobileNavbar:T},created:function(){this.$store.dispatch("getCourses")}},dt=ut,mt=(s("b7ea"),Object(i["a"])(dt,Y,X,!1,null,"206e378c",null)),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-us"},[s("disk-nav"),s("mobile-navbar"),s("main",[t._m(0),t._m(1),s("form",{staticClass:"form-cont",on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[t._m(2),s("label",{attrs:{for:"email"}},[t._v("e-post")]),s("input",{attrs:{type:"email",name:"email",required:""}}),s("label",{attrs:{for:"txt"}},[t._v("medelande")]),s("textarea",{attrs:{name:"msg",id:"msg",cols:"30",rows:"10",required:""}}),s("button",[t._v("skicka")])])]),s("Footer")],1)},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"txt-cont"},[s("h2",[t._v("kontakta oss")]),s("p",{staticClass:"welcome"},[t._v(" Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten i Göteborg. Kontakta oss här nedan eller hör av dig direkt till någon av våra medarbetare. Vi återkommer så fort vi kan. ")]),s("article",[s("p",{staticClass:"cont-info"},[t._v("Codic Consulting: +46-765-519-733")]),s("p",{staticClass:"cont-info"},[t._v("Codic Education: +46-768-990-065")]),s("p",{staticClass:"cont-info"},[t._v("hi@codic.se")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"location"},[s("h2",[t._v("Här finns vi")]),s("p",[t._v("Drottninggatan 38, Göteborg")]),s("iframe",{attrs:{width:"520",height:"400",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",id:"gmap_canvas",src:"https://maps.google.com/maps?width=520&height=400&hl=en&q=drottninggatan%2038%20g%C3%B6teborg+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-name"},[s("article",{staticClass:"name-cont"},[s("label",{attrs:{for:"firstName"}},[t._v("förnamn")]),s("input",{attrs:{type:"text",name:"firstName",required:""}})]),s("article",{staticClass:"name-cont"},[s("label",{attrs:{for:"lastName"}},[t._v("efternamn")]),s("input",{attrs:{type:"text",name:"lastName",required:""}})])])}],gt={name:"ContactUs",components:{DiskNav:C,MobileNavbar:T,Footer:H}},ht=gt,bt=(s("c23d"),Object(i["a"])(ht,ft,vt,!1,null,"f4667238",null)),_t=bt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("reg-header"),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7711"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],attrs:{type:"email",placeholder:"E-post ",required:""},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPass,expression:"loginPass"}],attrs:{type:"password",placeholder:"Lösenord",required:""},domProps:{value:t.loginPass},on:{input:function(e){e.target.composing||(t.loginPass=e.target.value)}}})]),n("button",[t._v("log in")])]),n("footer",[n("p",[t._v("skapa ett konto "),n("router-link",{attrs:{to:"/signup"}},[t._v("här")])],1)])],1)},Ct=[],wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("h1",[t._v("välkommen till "),s("span",[t._v("codic")]),t._v(" Education")]),s("p",[t._v(" Hos oss får du möjligheten att utveckla dina kunskaper inom programmering gratis! ")])])}],Et={},$t=Et,xt=(s("e6c2"),Object(i["a"])($t,wt,yt,!1,null,"1dd968fa",null)),jt=xt.exports,Nt={data:function(){return{loginEmail:"",loginPass:""}},components:{RegHeader:jt},methods:{login:function(){var t={email:this.loginEmail,password:this.loginPass};this.$store.dispatch("login",t)}}},Ot=Nt,Pt=(s("4a2a"),Object(i["a"])(Ot,kt,Ct,!1,null,"6103fb88",null)),St=Pt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signup"},[n("reg-header"),n("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7ced"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"Användarnamn",required:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("7711"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],attrs:{type:"email",placeholder:"E-post ",required:""},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userPass,expression:"userPass"}],attrs:{type:"password",placeholder:"Lösenord",required:""},domProps:{value:t.userPass},on:{input:function(e){e.target.composing||(t.userPass=e.target.value)}}})]),n("article",{staticClass:"inputField"},[n("img",{attrs:{src:s("e296"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passConfermation,expression:"passConfermation"}],attrs:{type:"password",placeholder:"Bekräfta ditt lösenord",required:""},domProps:{value:t.passConfermation},on:{input:function(e){e.target.composing||(t.passConfermation=e.target.value)}}})]),n("button",[t._v("skicka")])]),n("footer",[n("p",[t._v(" har du redan ett konto "),n("router-link",{attrs:{to:"/login"}},[t._v("logga in")])],1)])],1)},Tt=[],Vt=(s("96cf"),s("1da1")),Lt={components:{RegHeader:jt},data:function(){return{userName:"",userEmail:"",userPass:"",passConfermation:""}},computed:{},watch:{},methods:{signin:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""===this.userPass?alert("Password cannot be empty"):this.userPass!=this.passConfermation||""===this.passConfermation?alert("Make sure your password matches the passwprd confermation"):(this.sendUserToDB(),this.$router.push("/"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendUserToDB:function(){var t={name:this.userName,email:this.userEmail,password:this.userPass};console.log(t),this.$store.dispatch("signUser",t)},loginUser:function(){alert("Your account has been registerd successfully!"),this.$router.push("/")}}},Mt=Lt,Ft=(s("3783"),Object(i["a"])(Mt,Ut,Tt,!1,null,"835cda40",null)),It=Ft.exports,Ht={},Bt=Object(i["a"])(Ht,d,m,!1,null,null,null),Dt=Bt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course-full-view"},[n("nav",[n("img",{staticClass:"logo",attrs:{src:s("4fc8"),alt:""},on:{click:t.navToHome}}),n("div",{staticClass:"back",on:{click:t.navToCourses}},[n("img",{attrs:{src:s("a9a4"),alt:""}}),n("p",[t._v("tillbaka")])])]),n("main",[n("section",{staticClass:"video-player"},[n("div",{staticClass:"video"},[n("iframe",{attrs:{width:"100%",height:"100%",src:t.currentVideoLink,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),n("section",{staticClass:"list"},[n("playlist")],1)]),n("Footer")],1)},At=[],Gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},t._l(t.playlist,(function(t,e){return s("list-item",{key:t.id,attrs:{item:t,index:e}})})),1)},Rt=[],Jt=(s("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-item",on:{click:t.selectItem}},[n("p",[t._v("-")]),n("p",{staticClass:"video-name"},[t._v(t._s(t.item.vidName))]),n("article",[n("img",{attrs:{src:s("9e15"),alt:""}}),n("p",{staticClass:"length"},[t._v(t._s(t.item.vidLength))])])])}),Kt=[],Wt=(s("4160"),s("a9e3"),s("159b"),{data:function(){return{playing:!0}},props:{item:Object,index:Number},methods:{selectItem:function(){var t=document.getElementsByClassName("list-item"),e=this.index;t.forEach((function(t){t.classList.remove("white")})),t[e].classList.add("white"),this.saveVideo(),this.saveVideoForUser()},saveVideo:function(){this.$store.dispatch("saveCurrentVid",this.item.vidLink)},saveVideoForUser:function(){var t=this.$store.state.uid,e={vid:this.item,uid:t};this.$store.dispatch("saveVideoUser",e)}}}),zt=Wt,Yt=(s("3dbe"),Object(i["a"])(zt,Jt,Kt,!1,null,"df2e17fc",null)),Xt=Yt.exports,Zt={components:{ListItem:Xt},computed:{playlist:function(){return this.$store.state.CourseVideos}},created:function(){var t=this.$store.state.courseSlected;t||(t=JSON.parse(localStorage.getItem("courseSelected"))),this.$store.dispatch("getCourse",t.name)}},Qt=Zt,te=(s("ba70"),Object(i["a"])(Qt,Gt,Rt,!1,null,"1912c382",null)),ee=te.exports,se={components:{Playlist:ee,Footer:H},computed:{currentVideoLink:function(){return this.$store.state.currentVideoLink}},methods:{navToCourses:function(){this.$router.push("/courses")},navToHome:function(){this.$router.push("/")}}},ne=se,re=(s("884e"),Object(i["a"])(ne,qt,At,!1,null,"2414831b",null)),ae=re.exports,ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("disk-nav"),s("mobile-navbar"),s("main",[s("section",{staticClass:"user-info"},[t._m(0),s("h1",[t._v(t._s(t.user.name))]),s("p",[t._v(" "+t._s(t.user.email)+" ")])]),s("section",{staticClass:"list"},[s("user-list")],1)]),s("Footer")],1)},oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:s("e326"),alt:""}})])}],ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},[t._m(0),t._l(t.playlist,(function(t){return s("user-list-item",{key:t.id,attrs:{item:t}})}))],2)},le=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"list-title"},[s("h3",[t._v("recently played")])])}],ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-item"},[n("p",{staticClass:"video-name"},[t._v(t._s(t.item.vidName))]),n("article",[n("p",{staticClass:"length"},[t._v(t._s(t.item.vidLength))]),n("button",{on:{click:t.navToCourse}},[n("img",{attrs:{src:s("566c"),alt:""}})])])])},de=[],me={data:function(){return{playing:!0}},methods:{navToCourse:function(){this.$router.push("/course"),this.$store.dispatch("playUservid",this.item.vidLink)}},props:{item:Object}},pe=me,fe=(s("42d1"),Object(i["a"])(pe,ue,de,!1,null,"f239a0f0",null)),ve=fe.exports,ge={components:{UserListItem:ve},created:function(){this.$store.dispatch("getUserPlaylist",this.$store.state.uid)},computed:{playlist:function(){return this.$store.state.playedVideos}}},he=ge,be=(s("19a1"),Object(i["a"])(he,ce,le,!1,null,"66f204c7",null)),_e=be.exports,ke={name:"profile",components:{DiskNav:C,Footer:H,UserList:_e,MobileNavbar:T},computed:{uid:function(){return this.$store.state.uid},user:function(){return this.$store.state.user}},created:function(){this.$store.dispatch("getUser",this.uid)}},Ce=ke,we=(s("52ed"),Object(i["a"])(Ce,ie,oe,!1,null,"031a26b0",null)),ye=we.exports,Ee=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("disk-nav"),s("mobile-navbar"),s("main",[t._m(0),t._m(1),t._m(2),s("section",{staticClass:"contact"},[s("h2",[t._v("kontakta oss")]),t._m(3),s("div",{staticClass:"cards"},t._l(t.contactPersons,(function(t){return s("contact-cards",{key:t.name,attrs:{fullName:t.fullName,email:t.email,number:t.number,title:t.title}})})),1)]),s("section",{staticClass:"reviews"},[s("h2",[t._v("Vad tycker eleverna?")]),s("p",[t._v(" Våra IT-lärare arbetar för att förmedla komplexa ämnen på ett så pedagogiskt, engagerande och tydligt sätt som möjligt. På YH-utbildningar runtom i Göteborg har de blivit uppskattade av både utbildningsledare och elever för väl utförda och strukturerade kurser och utbildningar. Här nedan kan du läsa den respons som våra IT-lärare har mottagit från sina elever. ")]),s("div",{staticClass:"rev-section"},t._l(t.reviews,(function(t){return s("review-cards",{key:t.review,attrs:{review:t.review,reviewer:t.reviewer}})})),1)])]),s("Footer")],1)},$e=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"head"},[s("blockquote",[t._v("välkommen!")]),s("p",[t._v(" Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller gästföreläsning i Göteborg? IT-sektorn är under ständig förändring och det är viktigt att tillhandahålla den senaste kompetensen till framtidens utvecklare. Genom Codic Education får du tillgång till pedagogisk och kompetent personal som passar just din utbildningsmodell. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about-us"},[s("h2",[t._v("Vem är vi?")]),s("p",[s("span",[t._v("Codic Education")]),t._v(" har knoppats av från Codic Consulting och besitter samma tekniska kompetens och rekryteringsexpertis som moderbolaget. I förberedande syfte går våra utbildare en intern utbildning om yrkeshögskolans struktur samt vägleds av en forskare inom pedagogik. Därmed ser vi till att undervisningen är relevant för era elever och tar ansvar för utbildningens röda tråd. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"offer"},[s("h2",[t._v("Det här erbjuder vi")]),s("ul",[s("li",[s("p",[t._v("Utbildning inom IT")])]),s("li",[s("p",[t._v("Deltagande i ledningsgrupper")])]),s("li",[s("p",[t._v("Kodstugor")])]),s("li",[s("p",[t._v("Hela utbildningspaket eller enstaka kurser")])]),s("li",[s("p",[t._v("Gästföreläsningar")])]),s("li",[s("p",[t._v("Framtagning av kursmaterial och kursplaner")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Hör av dig direkt till någon av våra medarbetare. "),s("br"),t._v(" Vi återkommer så fort vi kan. ")])}],xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("img",{staticClass:"contactImg",attrs:{src:s("1773")("./"+t.fullName+".png"),alt:""}}),n("section",{staticClass:"contact-info"},[n("h3",[t._v(t._s(t.fullName))]),n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("p",{staticClass:"email"},[t._v(t._s(t.email))]),n("p",{staticClass:"number"},[t._v(t._s(t.number))])])])},je=[],Ne={props:{fullName:String,email:String,number:String,title:String},mounted:function(){console.log(document.getElementsByClassName("contactImg"))},data:function(){return{name:"MariaBryl"}}},Oe=Ne,Pe=(s("2b3e"),Object(i["a"])(Oe,xe,je,!1,null,"0a990dd3",null)),Se=Pe.exports,Ue=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rev-card"},[s("p",{staticClass:"rev-txt"},[t._v(" "+t._s(t.review)+" ")]),s("p",{staticClass:"rev-info"},[t._v(t._s(t.reviewer))])])},Te=[],Ve={props:{review:String,reviewer:String}},Le=Ve,Me=(s("26bc"),Object(i["a"])(Le,Ue,Te,!1,null,"4495ab33",null)),Fe=Me.exports,Ie={components:{DiskNav:C,MobileNavbar:T,ContactCards:Se,ReviewCards:Fe,Footer:H},computed:{contactPersons:function(){return this.$store.state.contactPersons},reviews:function(){return this.$store.state.reviews}}},He=Ie,Be=(s("3c4c"),Object(i["a"])(He,Ee,$e,!1,null,"3a8822cc",null)),De=Be.exports;n["a"].use(p["a"]);var qe=[{path:"/",name:"Home",component:z},{path:"/login",name:"Login",component:St},{path:"/signup",name:"Signup",component:It},{path:"/courses",name:"Courses",component:pt},{path:"/contact",name:"Contact",component:_t},{path:"/menu",name:"menu",component:Dt},{path:"/course",name:"Course",component:ae},{path:"/profile",name:"Profile",component:ye},{path:"/about",name:"About",component:De}],Ae=new p["a"]({mode:"history",base:"/",routes:qe}),Ge=Ae,Re=(s("45fc"),s("2f62")),Je=s("260b");s("ea7b"),s("e71f");n["a"].use(Re["a"]);var Ke=new Re["a"].Store({state:{uid:"",user:"",courseSlected:"",playedVideos:[],CourseVideos:[],courses:[],currentVideoLink:"",contactPersons:[{fullName:"Robin Kamo",title:"Affärsutvecklare & linjechef, Codic Education",email:"robin.kamo@codic.se",number:"+46-768-990-065"},{fullName:"Maria Bryl",title:"Utbildningsansvarig, Codic Education",email:"maria.bryl@codic.se",number:"+46-730-436-480"},{fullName:"Henrik Enström",title:"Grundare & VD",email:"henrik.enstrom@codic.se",number:"+46-739-803-313"}],reviews:[{reviewer:"— Elev på .NET-utvecklare distans, Campus Mölndal",review:"“ Ville tacka för chansen att studera hos er! Jag var med på lektionen idag och har gått med ett stort leende hela dagen. Vilken underbart pedagogisk människa – den absolut bästa läraren jag någonsin träffat. Och allt är strukturerat. Det här kommer bli två riktigt bra år. Tusen tack! ”"},{reviewer:"— Samlad feedback C#-kurs, EC Utbildning",review:"“ Kursupplägget är tydligt och på en nivå som passar alla i klassen. Läraren är ödmjuk och flexibel i sin planering och sprider ut uppgifter och information under veckan, vilket har varit mycket uppskattat, så klassen känner att de hela tiden har saker att göra. ”"},{reviewer:"— Elev på C#-kurs, EC Utbildning",review:"“ Jag är nära att ge upp ett par gånger per vecka, men läraren lyckas hela tiden få mig att testa lite till och vilja våga. Jag har till och med tackat nej till två anställningar de senaste veckorna tack vare det. Tack för det. ”"},{reviewer:"— Elev på .NET-utvecklare distans, Campus Mölndal",review:"“ Tack för fantastiskt material, och en otroligt väl uppstyrd utbildning. Vår lärare är pedagogisk, otroligt hjälpsam och trevlig. Han skapar ett lugn hos mig, som ny elev. ”"}]},mutations:{saveUid:function(t,e){t.uid=e},resetUid:function(t){t.uid=null},saveUser:function(t,e){t.user=e},saveCourses:function(t,e){t.courses=e},saveCourse:function(t,e){t.courseSlected=e},saveCourseVids:function(t,e){t.CourseVideos=e},saveLink:function(t,e){t.currentVideoLink=e},saveVideosWatched:function(t,e){t.playedVideos=e}},actions:{signUser:function(t,e){Je["a"].auth().createUserWithEmailAndPassword(e.email,e.password).then((function(s){console.log(s.user.uid),t.commit("saveUid",s.user.uid),Je["a"].firestore().collection("users").doc(s.user.uid).set({name:e.name,email:e.email,videosWatched:[]})}))},login:function(t,e){Je["a"].auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){t.commit("saveUid",e.user.uid)}))},logout:function(t){Je["a"].auth().signOut().then((function(){console.log("Current user has been logged out"),t.commit("resetUid")}))},saveUid:function(t,e){t.commit("saveUid",e)},getUser:function(t,e){Je["a"].firestore().collection("users").doc(e).get().then((function(e){t.commit("saveUser",e.data())}))},getCourses:function(t){var e=[];Je["a"].firestore().collection("courses").get().then((function(t){t.docs.forEach((function(t){e.push(t.data())}))})),t.commit("saveCourses",e)},saveSelectedCourse:function(t,e){localStorage.setItem("courseSelected",JSON.stringify(e)),t.commit("saveCourse",e)},getCourse:function(t,e){var s=[];Je["a"].firestore().collection(e).get().then((function(t){t.docs.forEach((function(t){return s.push(t.data())}))})),t.commit("saveCourseVids",s)},saveCurrentVid:function(t,e){t.commit("saveLink",e)},saveVideoUser:function(t,e){var s=[];Je["a"].firestore().collection("users").doc(e.uid).get().then((function(t){s=t.data().videosWatched,s.some((function(t){return t.vidName===e.vid.vidName}))||(s.push(e.vid),Je["a"].firestore().collection("users").doc(e.uid).update({videosWatched:s}))}))},getUserPlaylist:function(t,e){Je["a"].firestore().collection("users").doc(e).get().then((function(e){t.commit("saveVideosWatched",e.data().videosWatched)}))},playUservid:function(t,e){t.commit("saveLink",e)}},modules:{}}),We={apiKey:"AIzaSyAlJAmR-tOK-2BFHu3IHvGdez39XUNvfMY",authDomain:"codic-83234.firebaseapp.com",projectId:"codic-83234",storageBucket:"codic-83234.appspot.com",messagingSenderId:"468243388891",appId:"1:468243388891:web:c96f6c4ba2edff3030effe",measurementId:"G-VVSL1TZEED",datanaseURL:"https://codic.firebaseio.com"};Je["a"].initializeApp(We),Je["a"].auth().onAuthStateChanged((function(t){t?(Ke.dispatch("saveUid",t.uid),Ge.push("/")):Ge.push("/signup")})),n["a"].config.productionTip=!1,new n["a"]({router:Ge,store:Ke,render:function(t){return t(l)}}).$mount("#app")},5938:function(t,e,s){t.exports=s.p+"img/linkedIn.6b1081a7.svg"},"59b0":function(t,e,s){},"5c0b":function(t,e,s){"use strict";s("9c0c")},6271:function(t,e,s){"use strict";s("e27f")},6725:function(t,e,s){},7711:function(t,e,s){t.exports=s.p+"img/email.570540fd.svg"},"7ced":function(t,e,s){t.exports=s.p+"img/userName.982e0406.svg"},8101:function(t,e,s){"use strict";s("5305")},"85ef":function(t,e,s){"use strict";s("9148")},"884e":function(t,e,s){"use strict";s("2a0c")},"89b4":function(t,e,s){t.exports=s.p+"img/Maria Bryl.42146f5f.png"},9148:function(t,e,s){},"9c0c":function(t,e,s){},"9e15":function(t,e,s){t.exports=s.p+"img/duration.e288a628.svg"},a9a4:function(t,e,s){t.exports=s.p+"img/small-arrow.ab0020bc.svg"},abe8:function(t,e,s){t.exports=s.p+"img/Henrik Enström.f2d098ca.png"},b331:function(t,e,s){},b6b2:function(t,e,s){},b6f4:function(t,e,s){"use strict";s("fb3b")},b754:function(t,e,s){t.exports=s.p+"img/Robin Kamo.6026135a.png"},b7ea:function(t,e,s){"use strict";s("3de5")},ba70:function(t,e,s){"use strict";s("6725")},bbbe:function(t,e,s){"use strict";s("59b0")},c19d:function(t,e,s){t.exports=s.p+"img/closeBtn.bf737f5c.svg"},c23d:function(t,e,s){"use strict";s("d2f4")},c8fa:function(t,e,s){},cad8:function(t,e,s){},cb18:function(t,e,s){"use strict";s("10b6")},d2f4:function(t,e,s){},d91d:function(t,e,s){t.exports=s.p+"img/instagram.19a78820.svg"},dbd9:function(t,e,s){},df15:function(t,e,s){},dfde:function(t,e,s){},e029:function(t,e,s){t.exports=s.p+"img/menuBtn.f56b1a78.svg"},e24a:function(t,e,s){t.exports=s.p+"img/scroll.9c2e5f9f.svg"},e27f:function(t,e,s){},e296:function(t,e,s){t.exports=s.p+"img/password.91a6238f.svg"},e326:function(t,e,s){t.exports=s.p+"img/profileImg.8b873469.svg"},e59a:function(t,e,s){},e6c2:function(t,e,s){"use strict";s("b6b2")},fb3b:function(t,e,s){}});
//# sourceMappingURL=app.0bce1b29.js.map