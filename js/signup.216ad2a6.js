(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"34c3":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("form",{staticClass:"row d-flex jumbotron shadow-box opacity ml-auto mr-auto mt-5"},[t._m(0),s("div",{staticClass:"col-sm-6 p-3 d-flex flex-column justify-content-center"},[s("div",{staticClass:"form-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSignup.email,expression:"dataSignup.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail"},domProps:{value:t.dataSignup.email},on:{input:function(a){a.target.composing||t.$set(t.dataSignup,"email",a.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSignup.username,expression:"dataSignup.username"}],staticClass:"form-control",attrs:{type:"text",id:"inputUsername"},domProps:{value:t.dataSignup.username},on:{input:function(a){a.target.composing||t.$set(t.dataSignup,"username",a.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSignup.password,expression:"dataSignup.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword"},domProps:{value:t.dataSignup.password},on:{input:function(a){a.target.composing||t.$set(t.dataSignup,"password",a.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-end"},[s("button",{staticClass:"btn btn-primary w-25",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.sendSignup(a)}}},[t._v(" Submit ")])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-6 p-3 d-flex justify-content-center"},[e("figure",[e("img",{staticClass:"w-75",attrs:{src:s("3c57")}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{attrs:{for:"inputEmail"}},[s("p",{staticClass:"m-0"},[t._v("Email Groupomania")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{attrs:{for:"inputUsername"}},[s("p",{staticClass:"m-0"},[t._v("username")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{attrs:{for:"inputPassword"}},[s("p",{staticClass:"m-0"},[t._v("Mot de passe")])])}],i=s("5530"),o=s("2f62"),r=s("7338"),u=s.n(r),l=s("a18c"),p={name:"SignUp",data:function(){return{dataSignup:{username:null,email:null,password:null,isAdmin:!1},msg:""}},computed:Object(i["a"])({},Object(o["b"])(["User"])),methods:{sendSignup:function(){console.log("test N°1 je suis dans sendSignup "+this.dataSignup.email+" "+this.dataSignup.username+" "+this.dataSignup.password);var t="http://localhost:3000/api/auth/signup",a=/\D/,s=/^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g,e=/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;this.dataSignup.email&&this.dataSignup.username&&this.dataSignup.password&&a.test(this.dataSignup.password)&&s.test(this.dataSignup.email)&&e.test(this.dataSignup.username)?u.a.post(t,this.dataSignup).then((function(t){console.log(t),l["a"].push("/Login")})).catch((function(t){409==t.response.status?alert("L'utilisateur existe déjà !"):console.log(t.status+" voici l'erreur : "+t)})):alert("Un problème, lors du renseignement du document")}}},c=p,m=s("2877"),d=Object(m["a"])(c,e,n,!1,null,null,null);a["default"]=d.exports},"3c57":function(t,a,s){t.exports=s.p+"img/icon-above-font.cac178c3.png"}}]);
//# sourceMappingURL=signup.216ad2a6.js.map