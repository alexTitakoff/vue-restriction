(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],m=0,f=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"042d":function(t,e,r){"use strict";r("bcfc")},"21bb":function(t,e,r){"use strict";r("2dad")},"2dad":function(t,e,r){},"35de":function(t,e,r){"use strict";r("5fe3")},"56d7":function(t,e,r){"use strict";r.r(e);r("b0c0"),r("96cf");var n=r("1da1"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Nav"),r("div",{staticClass:"container"},[r("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("div",{staticClass:"nav-wrapper"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/09/20/03/12/yang-1681698_960_720.png",width:"30",height:"30",alt:"",loading:"lazy"}}),t._v(" Дзен Ограничения | "+t._s(t.getUserName())+" ")]),t.checkLogin()?r("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[r("i",{staticClass:"material-icons"},[t._v("menu")])]):t._e(),t.checkLogin()?r("ul",{staticClass:"right ",attrs:{id:"nav-mobile"}},[r("li",[r("router-link",{attrs:{to:"/logs"}},[t._v("Журнал")])],1),r("li",[r("a",{on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("Выйти")])])]):t._e(),r("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}},[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),r("li",[r("router-link",{attrs:{to:"/logs"}},[t._v("Журнал")])],1),r("li",[r("a",{on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("Выйти")])])])],1)])},c=[],u={name:"Nav",mounted:function(){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t)},methods:{getUserName:function(){return this.$store.state.user.name},logout:function(){this.$setLog(": юзер "+this.$store.state.user.name+" вышел "),this.$store.commit("logout"),delete localStorage.user,this.$router.push("/login")},checkLogin:function(){return localStorage.getItem("user")}}},l=u,m=(r("35de"),r("2877")),f=Object(m["a"])(l,o,c,!1,null,"29cb7c6a",null),d=f.exports,p={name:"App",components:{Nav:d},mounted:function(){localStorage.getItem("user")?(this.$store.commit("login",JSON.parse(localStorage.getItem("user"))),this.$router.push("/")):"/login"!==this.$router.currentRoute.path&&this.$router.push("/login")}},v=p,h=(r("5c0b"),Object(m["a"])(v,s,i,!1,null,null,null)),g=h.exports,b=r("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col m6 s12"},[r("h5",[t._v("Ограничения "+t._s(t.date))]),r("router-link",{staticClass:"btn-floating btn-medium waves-effect waves-light",attrs:{to:"/new-restriction"}},[r("i",{staticClass:"material-icons"},[t._v("add")])]),r("br"),r("br"),r("RestrictionList"),r("h5",[t._v("Действия "+t._s(t.date))]),r("a",{staticClass:"waves-effect waves-light btn"},[t._v("Добавить")])],1)])])},_=[],y=(r("caad"),r("ac1f"),r("2532"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},[t._l(t.restrictionsObj,(function(e){return t.restrictions.length>0?r("div",{key:e.key,staticClass:"restriction btn waves-effect waves-light"},[r("span",[t._v(t._s(e.name))]),r("span",[t._v(t._s(e.count))]),r("div",{staticClass:"actions"},[r("i",{staticClass:"material-icons large wh",on:{click:function(r){return t.addCount(e.key)}}},[t._v("add_circle")]),r("i",{staticClass:"material-icons large wh",on:{click:function(r){return t.removeCount(e.key)}}},[t._v("remove_circle")]),r("i",{staticClass:"modal-trigger large wh material-icons",attrs:{"data-target":""},on:{click:function(r){return t.setRemoveKey(e.key)}}},[t._v("delete")])])]):t._e()})),null!==t.restrictionsObj?r("div",{staticClass:"modal",attrs:{id:"remove"}},[r("div",{staticClass:"modal-content"},[r("h4",[t._v("Удаление")]),null!==t.removeKey?r("p",[t._v("Точно удалить "+t._s(t.restrictionsObj[t.removeKey].name)+" ?")]):t._e()]),r("div",{staticClass:"modal-footer"},[r("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"},on:{click:function(e){return t.remove(t.removeKey)}}},[t._v("Да")])])]):t._e()],2)}),C=[],$={name:"RestrictionList",data:function(){return{restrictions:[],restrictionsObj:null,removeKey:null}},mounted:function(){console.log("Restr"),this.getData()},methods:{setRemoveKey:function(t){this.removeKey=t},getData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,e.next=3,t.$firebase.ref(t.$dbName+"/restrictions").once("value").then((function(t){var e=[],n=t.val();for(var a in n)e.push(n[a]);r.restrictions=e,r.restrictionsObj=n}));case 3:r.initModals();case 4:case"end":return e.stop()}}),e)})))()},addCount:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.restrictionsObj[t].count+1,e.restrictionsObj[t].count=n,r.next=4,e.$firebase.ref(e.$dbName+"/restrictions/"+t).update({count:n});case 4:case"end":return r.stop()}}),r)})))()},removeCount:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==e.restrictionsObj[t].count){r.next=2;break}return r.abrupt("return");case 2:return n=e.restrictionsObj[t].count-1,e.restrictionsObj[t].count=n,r.next=6,e.$firebase.ref(e.$dbName+"/restrictions/"+t).update({count:n});case 6:case"end":return r.stop()}}),r)})))()},remove:function(t){firebase.database().ref(this.$dbName+"/restrictions/"+t).remove(),this.restrictions=[],this.removeKey=null,this.getData()},initModals:function(){var t=document.querySelectorAll(".modal");M.Modal.init(t)}}},x=$,k=(r("cc2e"),Object(m["a"])(x,y,C,!1,null,"654ad113",null)),O=k.exports,j={name:"Home",components:{RestrictionList:O},data:function(){return{date:null,dict:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]}},mounted:function(){console.log("VUE APP WORK");this.checkLogin(),this.setDateSettings(),this.checkData()},computed:{},methods:{checkLogin:function(){this.$store.state.user.login||this.$router.push("/login")},checkData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,e.next=3,t.$firebase.ref(t.$dbName+"/restrictions").once("value").then((function(t){t.exists()||(console.log("Данных нет на этот месяц"),r.syncData())}));case 3:case"end":return e.stop()}}),e)})))()},syncData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},n=t,e.next=4,t.$firebase.ref("users/"+JSON.parse(localStorage.getItem("user")).name).once("value").then((function(t){var e=t.val(),a="data_0_2020";for(var s in e)s.includes("data")&&parseInt(s.split("_")[1])>parseInt(a.split("_")[1])&&(a=s);var i=e[a].restrictions;for(var o in i)i[o].count=0,r[o]=i[o];console.log(r,"clear"),n.$firebase.ref(n.$dbName+"/restrictions").set(r)}));case 4:case"end":return e.stop()}}),e)})))()},setDateSettings:function(){var t=new Date;this.dateMonthYear=""+t.getMonth()+t.getFullYear(),this.date="/ "+this.dict[t.getMonth()]+" "+t.getFullYear()},restrictionDiff:function(t,e){return t-e}}},S=j,R=(r("21bb"),Object(m["a"])(S,w,_,!1,null,null,null)),N=R.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row "},[r("form",{staticClass:"col m6 s12 offset-m3 ",on:{submit:function(e){return e.preventDefault(),t.login()}}},[r("h3",[t._v("Вход")]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{placeholder:"Никнейм",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{placeholder:"Пароль",type:"password",id:"exampleInputPassword1"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Войти")])])])},I=[],L=(r("d3b7"),r("25f0"),{name:"Login",data:function(){return{user:{name:"",password:""}}},beforeCreate:function(){localStorage.getItem("user")&&this.$router.push("/")},methods:{login:function(){var t=this;this.$firebase.ref("/users/"+this.user.name).once("value").then((function(e){var r=e.val().password;r.toString()===t.user.password.toString()&&t.loginGo()}))},loginGo:function(){this.$store.commit("login",this.user),this.$setLog(": юзер "+this.$store.state.user.name+" зашел "),this.$router.push("/")}}}),P=L,E=Object(m["a"])(P,D,I,!1,null,"92686018",null),z=E.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col m6 s12 offset-m4 "},[r("h5",[t._v("Новое ограничение")]),r("div",{staticClass:"input-field "},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"validate",attrs:{placeholder:"Название",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"input-field "},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.maxCount,expression:"maxCount"}],staticClass:"validate",attrs:{placeholder:"Максимально количество в месяц",type:"number"},domProps:{value:t.maxCount},on:{input:function(e){e.target.composing||(t.maxCount=e.target.value)}}})]),r("a",{staticClass:"waves-effect waves-light btn",on:{click:t.addRestrict}},[t._v("Добавить")]),r("a",{staticClass:"waves-effect red btn"},[t._v("Отменить")])])])},T=[],F=(r("5319"),{name:"Restriction",data:function(){return{name:null,maxCount:null}},methods:{addRestrict:function(){if(!1!==this.validateNewRestr()){var t=this.$firebase.ref(this.$dbName).child("restrictions").push().key,e={};e["/restrictions/"+t]={name:this.name,maxCount:this.maxCount,count:0,key:t},this.$firebase.ref(this.$dbName).update(e),this.$setLog(": юзер "+this.$store.state.user.name+" добавил ограничение "+this.name+" в базу "+this.$dbName),this.$router.push("/")}else M.toast({html:"Поля должные быть заполнены",classes:"red"})},validateNewRestr:function(){return null!=this.name&&null!=this.maxCount},toTranslit:function(t){return t.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,(function(t,e,r,n,a){if(r||n)return r?"-":"";var s=e.charCodeAt(0),i=1025==s||1105==s?0:s>1071?s-1071:s-1039,o=["yo","a","b","v","g","d","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","h","c","ch","sh","shch","","y","","e","yu","ya"];return o[i]}))}}}),A=F,Y=(r("5c6d"),Object(m["a"])(A,K,T,!1,null,"b7aea7c0",null)),J=Y.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h5",[t._v("Журнал")]),t._l(t.logs,(function(e){return r("p",{staticStyle:{display:"block","font-size":"12px","margin-bottom":"0px"}},[t._v(" "+t._s(e)+" ")])}))],2)},H=[],U={name:"Logs",data:function(){return{logs:[]}},mounted:function(){var t=this;this.$firebase.ref("/logs").once("value").then((function(e){var r=[],n=e.val();for(var a in n)r.unshift(n[a]);t.logs=r}))}},V=U,q=(r("042d"),Object(m["a"])(V,G,H,!1,null,"0ba51dfe",null)),W=q.exports;a["a"].use(b["a"]);var B=[{path:"/",name:"Home",component:N},{path:"/login",name:"Login",component:z},{path:"/new-restriction",name:"NewRestriction",component:J},{path:"/Logs",name:"Logs",component:W}],Q=new b["a"]({routes:B}),X=Q,Z=r("2f62");a["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{user:{name:null,password:null,login:!1}},mutations:{login:function(t,e){t.user.name=e.name,t.user.password=e.password,t.user.login=!0,localStorage.setItem("user",JSON.stringify(e))},logout:function(t){t.user.name=null,t.user.password=null,t.user.login=!1},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{},modules:{}}),et={apiKey:"AIzaSyCiHrYTwisX9wniYo8cN7nlc6bWLu0Vc8s",authDomain:"vue-dzen-restriction.firebaseapp.com",databaseURL:"https://vue-dzen-restriction.firebaseio.com",projectId:"vue-dzen-restriction",storageBucket:"vue-dzen-restriction.appspot.com",messagingSenderId:"546683537555",appId:"1:546683537555:web:f17d266c5f7bcc22846566",measurementId:"G-GKRY0MQ9EV"};function rt(){var t=new Date;return t.getMonth()+1+"_"+t.getFullYear()}firebase.initializeApp(et),firebase.analytics(),a["a"].config.productionTip=!1,a["a"].prototype.$firebase=firebase.database(),a["a"].prototype.$dateMonth=rt(),localStorage.getItem("user")&&(a["a"].prototype.$dbName="users/"+JSON.parse(localStorage.getItem("user")).name+"/data_"+rt()),a["a"].prototype.$setLog=function(t){function e(t){var e=new Intl.DateTimeFormat("ru",{year:"numeric"}).format(t),r=new Intl.DateTimeFormat("ru",{month:"2-digit"}).format(t),n=new Intl.DateTimeFormat("ru",{day:"2-digit"}).format(t),a=new Intl.DateTimeFormat("ru",{hour:"2-digit"}).format(t),s=new Intl.DateTimeFormat("ru",{minute:"2-digit"}).format(t),i=new Intl.DateTimeFormat("ru",{second:"2-digit"}).format(t);return n+"."+r+"."+e+" "+a+":"+s+":"+i}function r(t){return a.apply(this,arguments)}function a(){return a=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=firebase.database().ref().child("logs").push().key,n={},n["/logs/"+r]=e,t.next=5,firebase.database().ref().update(n);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}return r(e(new Date)+t)},new a["a"]({router:X,store:tt,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"5c6d":function(t,e,r){"use strict";r("d558")},"5fe3":function(t,e,r){},"6bcf":function(t,e,r){},"9c0c":function(t,e,r){},bcfc:function(t,e,r){},cc2e:function(t,e,r){"use strict";r("6bcf")},d558:function(t,e,r){}});
//# sourceMappingURL=app.770a5378.js.map