import{_ as e,h as a,m as s,s as l,r,c as o,w as t,i,o as n,a as u,e as d,t as c,p as g,f as m,I as p,g as f}from"./index-D1fYrqfv.js";import{g as h,c as w,q as V,w as _,b as y,s as C,d as k}from"./index.esm2017.lKehs31r.js";const b=e({data:()=>({email:"",password:"",username:"",cedula:"",errorMessage:null}),methods:{async isEmailAlreadyRegistered(){const e=h(),a=w(e,"users"),s=V(a,_("email","==",this.email));return!(await y(s)).empty},async signUp(){const e=a(),o=h();try{if(await this.isEmailAlreadyRegistered())return void(this.errorMessage="El correo electrónico ya está registrado.");const a=(await s(e,this.email,this.password)).user;await C(k(o,"users",a.uid),{uid:a.uid,name:this.username,email:this.email,cedula:this.cedula,points:0}),await l(a),this.errorMessage="Cuenta creada. Se ha enviado un correo electrónico de verificación.",r({url:"/pages/login/login"})}catch(t){this.errorMessage="Error durante el registro: "+t.message}},goToLogin(){r({url:"/pages/login/login"})},redirectToForgotPassword(){r({url:"/pages/forgotPassword/forgotPassword"})}}},[["render",function(e,a,s,l,r,h){const w=m,V=i,_=p,y=f;return n(),o(V,{class:"signup-page"},{default:t((()=>[u(V,{class:"back-button",onClick:h.goToLogin},{default:t((()=>[u(w,null,{default:t((()=>[d("← Volver al inicio de sesión")])),_:1})])),_:1},8,["onClick"]),u(V,{class:"overlay-container"},{default:t((()=>[u(V,{class:"uni-container"},{default:t((()=>[u(w,{class:"uni-title"},{default:t((()=>[d("Crear una Cuenta")])),_:1}),u(_,{class:"input",modelValue:r.username,"onUpdate:modelValue":a[0]||(a[0]=e=>r.username=e),placeholder:"Ingrese su nombre de usuario"},null,8,["modelValue"]),u(_,{class:"input",modelValue:r.email,"onUpdate:modelValue":a[1]||(a[1]=e=>r.email=e),placeholder:"Ingrese su correo electrónico"},null,8,["modelValue"]),u(_,{class:"input",modelValue:r.password,"onUpdate:modelValue":a[2]||(a[2]=e=>r.password=e),type:"password",placeholder:"Ingrese su contraseña"},null,8,["modelValue"]),u(_,{class:"input",modelValue:r.cedula,"onUpdate:modelValue":a[3]||(a[3]=e=>r.cedula=e),placeholder:"Ingrese su número de cédula"},null,8,["modelValue"]),u(y,{class:"uni-button signup-button",onClick:h.signUp},{default:t((()=>[d("Registrarse")])),_:1},8,["onClick"]),r.errorMessage?(n(),o(V,{key:0,class:"error-message"},{default:t((()=>[d(c(r.errorMessage),1)])),_:1})):g("",!0),u(V,{class:"forgot-password",onClick:h.redirectToForgotPassword},{default:t((()=>[u(w,null,{default:t((()=>[d("¿Olvidaste tu contraseña?")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-abfcf13e"]]);export{b as default};
