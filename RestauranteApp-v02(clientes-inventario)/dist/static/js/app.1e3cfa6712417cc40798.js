webpackJsonp([1],{"+rkr":function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),i={name:"UserBalance",data:function(){return{username:"",balance:0}},created:function(){this.username=this.$route.params.username;let e=this;r.a.get("https://cajero-api2.herokuapp.com/user/balance/"+this.username).then(t=>{e.balance=t.data.balance}).catch(e=>{alert("ERROR Servidor")})}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"UserBalance"}},[n("h2",[e._v(e._s(e.username))]),e._v(" "),n("h2",[e._v("Tu saldo es: "),n("span",[e._v("  "+e._s(e.balance)+" COP ")])])])},staticRenderFns:[]};n("VU/8")(i,o,!1,function(e){n("Xq/m")},null,null).exports},"6zmp":function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),i={name:"Cliente",data:function(){return{telefono:0,nombre:"",direccion:"",barrio:"",cedula:0,cumpleanos:"",balance:0}},methods:{init:function(){if("user"!=this.$route.name){let e=input.Phone.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},findCliente:function(){this.telefono=document.getElementById("Phone").value;let e=this;r.a.get("https://restaurante-back-g1.herokuapp.com/cliente/consulta/"+this.telefono).then(t=>{e.telefono=t.data.telefono,e.nombre=t.data.nombre,e.direccion=t.data.direccion,e.barrio=t.data.barrio,e.cedula=t.data.cedula,e.cumpleanos=t.data.cumpleanos,document.getElementById("Phone").value=e.telefono,document.getElementById("name").value=e.nombre,document.getElementById("adress").value=e.direccion,document.getElementById("zone").value=e.barrio,document.getElementById("idCC").value=e.cedula,document.getElementById("birth").value=e.cumpleanos,document.getElementById("11").value="Se encontro usuario"+e.nombre}).catch(e=>{alert("ERROR Servidor")})},makeCliente:function(){this.telefono=document.getElementById("Phone").value,this.nombre=document.getElementById("name").value,this.direccion=document.getElementById("adress").value,this.barrio=document.getElementById("zone").value,this.cedula=document.getElementById("idCC").value,this.cumpleanos=document.getElementById("birth").value;r.a.post("https://restaurante-back-g1.herokuapp.com/cliente/crear/",{telefono:parseInt(this.telefono,10),nombre:this.nombre,direccion:this.direccion,barrio:this.barrio,cedula:this.cedula,cumpleanos:this.cumpleanos}).then(e=>{alert("Cliente Creado")}).catch(e=>{alert("ERROR Servidor")})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Cliente"}},[n("h2",{staticStyle:{"text-align":"center"}},[e._v("REGISTRO DE CLIENTES")]),e._v(" "),n("h2",{attrs:{id:"11",value:""}}),e._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("right",[n("button",{on:{click:e.findCliente}},[e._v("Buscar")]),e._v(" "),n("button",{on:{click:e.makeCliente}},[e._v("Crear")]),e._v(" "),n("button",[e._v("Actualizar")]),e._v(" "),n("button",[e._v("Eliminar")]),n("br"),n("br")])],1),e._v(" "),n("center",[n("form",[n("label",{attrs:{for:"Phone1"}},[e._v("Telefono:")]),e._v(" "),n("input",{attrs:{type:"text",id:"Phone",name:"Phone",value:""}}),e._v(" \n            \n            "),n("label",{attrs:{for:"name"}},[e._v("Nombre:")]),e._v(" "),n("input",{attrs:{type:"text",id:"name",name:"name",value:""}}),n("br"),n("br"),e._v(" "),n("label",{attrs:{for:"adress"}},[e._v("Direccion:")]),e._v(" "),n("input",{attrs:{type:"text",id:"adress",name:"adress",value:""}}),e._v(" \n            \n            "),n("label",{attrs:{for:"zone"}},[e._v("Barrio:")]),e._v(" "),n("input",{attrs:{type:"text",id:"zone",name:"zone",value:""}}),n("br"),n("br"),e._v(" "),n("label",{attrs:{for:"idCC"}},[e._v("Cedula:")]),e._v(" "),n("input",{attrs:{type:"text",id:"idCC",name:"idCC",value:""}}),e._v(" \n            \n            "),n("label",{attrs:{for:"birth"}},[e._v("Cumpleanos:")]),e._v(" "),n("input",{attrs:{type:"text",id:"birth",name:"birth",value:""}}),n("br"),n("br")])])],1)},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(e){n("8gRN")},null,null);t.a=s.exports},"7mWd":function(e,t,n){e.exports=n.p+"static/img/restaurante.f795738.jpg"},"8gRN":function(e,t){},"9YGL":function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Inventario"}},[n("h2",{staticStyle:{"text-align":"center"}},[e._v("MÓDULO DE INVENTARIOS")]),e._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("left",[n("button",{on:{click:e.init}},[e._v(" Crear ")]),e._v(" "),n("button",{on:{click:e.getBalance}},[e._v(" Buscar ")]),e._v(" "),n("button",[e._v(" Actualizar ")]),e._v(" "),n("button",[e._v("Eliminar")])])],1),e._v(" "),n("center",[n("form",[n("label",{attrs:{for:"idprod"}},[e._v("Id producto:")]),e._v(" "),n("input",{attrs:{type:"text",id:"idprod",name:"idprod",value:""}}),e._v(" "),n("label",{attrs:{for:"nomprod"}},[e._v("Nombre:")]),e._v(" "),n("input",{attrs:{type:"text",id:"nomprod",name:"nomprod",value:""}}),n("br"),n("br"),e._v(" "),n("label",{attrs:{for:"precprod"}},[e._v("Precio:")]),e._v(" "),n("input",{attrs:{type:"text",id:"precprod",name:"precprod",value:""}}),e._v(" "),n("label",{attrs:{for:"cantprod"}},[e._v("Cantidad:")]),e._v(" "),n("input",{attrs:{type:"text",id:"cantprod",name:"cantprod",value:""}}),e._v(" "),n("label",{attrs:{for:"catprod"}},[e._v("Categoría:")]),e._v(" "),n("input",{attrs:{type:"text",id:"catprod",name:"catprod",value:""}}),n("br"),n("br"),e._v(" "),n("button",[e._v("Mostrar lista de productos")]),n("br")])]),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",[e._v("Id")]),e._v(" "),n("th",[e._v("Nombre")]),e._v(" "),n("th",[e._v("Precio")]),e._v(" "),n("th",[e._v("Cantidad")]),e._v(" "),n("th",[e._v("Categoría")])]),e._v(" "),n("tr",[n("td",[e._v("CA01")]),e._v(" "),n("td",[e._v("Carne asada")]),e._v(" "),n("td",[e._v("17000")]),e._v(" "),n("td",[e._v("15")]),e._v(" "),n("td",[e._v("Carnes")])]),e._v(" "),n("tr",[n("td"),e._v(" "),n("td"),e._v(" "),n("td")])])}]},r=n("VU/8")(null,a,!1,null,null,null);t.a=r.exports},M93x:function(e,t,n){"use strict";var a={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{init:function(){if("user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getCliente:function(){if("cliente"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"cliente",params:{username:e}})}},getInventario:function(){if("inventario"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"inventario",params:{username:e}})}}},beforeCreate:function(){localStorage.setItem("current_username","Admin"),localStorage.setItem("isAuth",!0),this.$router.push({name:"user",params:{username:"Admin"}})}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("img",{attrs:{src:n("7mWd")}}),e._v(" "),e._m(0),e._v(" "),a("nav",[e.is_auth?a("button",{on:{click:e.init}},[e._v("Inicio")]):e._e(),e._v(" "),e.is_auth?a("button",{on:{click:e.getCliente}},[e._v(" Cliente ")]):e._e(),e._v(" "),a("button",{on:{click:e.getInventario}},[e._v("Inventario")]),e._v(" "),e.is_auth?a("button",[e._v("Ventas")]):e._e(),e._v(" "),e.is_auth?a("button",[e._v("Cerrar Sesión")]):e._e()])]),e._v(" "),a("div",{staticClass:"main-component"},[a("router-view")],1),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Asados "),t("br"),this._v("Carbón de Leña")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",[this._v("Calle 48 # 27-01. Barrancabermeja, Colombia"),t("br"),this._v("\n      Teléfonos: +57 323 590 9805 - 6220238 - 6021901"),t("br"),this._v("\n      E-mail: carbonlena@hotmail.com")])])}]};var i=n("VU/8")(a,r,!1,function(e){n("nVEl")},null,null);t.a=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),i=n("/ocq"),o=n("cHtD");a.a.use(i.a),a.a.config.productionTip=!1,new a.a({router:o.a,el:"#app",components:{App:r.a},template:"<App/>"})},VD42:function(e,t){},"Xq/m":function(e,t){},cHtD:function(e,t,n){"use strict";(function(e){var a=n("/ocq"),r=n("jyJz"),i=(n("+rkr"),n("M93x")),o=n("6zmp"),s=n("9YGL");const u=new a.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:i.a},{path:"/user/:username",name:"user",component:r.a},{path:"/cliente/:username",name:"cliente",component:o.a},{path:"/inventario/:username",name:"inventario",component:s.a}]});t.a=u}).call(t,"/")},jyJz:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"User"}},[t("h2",[this._v("Hola  "),t("span",[this._v(" "+this._s(this.username)+", ")]),this._v("  ¡Bienvenido!")])])},staticRenderFns:[]};var r=n("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(e){n("VD42")},null,null);t.a=r.exports},nVEl:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1e3cfa6712417cc40798.js.map