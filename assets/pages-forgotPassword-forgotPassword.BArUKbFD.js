import{_ as e,r as a,h as s,q as r,c as o,w as l,i,o as t,a as n,e as c,t as d,p as u,f as g,I as m,g as f}from"./index-BiZ4IPCE.js";const p=e({data:()=>({email:"",errorMessage:null}),methods:{goToLogin(){a({url:"/pages/login/login"})},async resetPassword(){const e=s();if(this.email)try{await r(e,this.email),this.errorMessage="Correo de restablecimiento enviado. Redirigiendo a la página de inicio de sesión...",setTimeout((()=>{this.goToLogin()}),2e3)}catch(a){this.errorMessage="Error al enviar el correo de restablecimiento: "+a.message}else this.errorMessage="Por favor, ingrese su correo electrónico."}}},[["render",function(e,a,s,r,p,_){const h=g,b=i,v=m,k=f;return t(),o(b,{class:"forgot-password-page"},{default:l((()=>[n(b,{class:"back-button",onClick:_.goToLogin},{default:l((()=>[n(h,null,{default:l((()=>[c("← Volver al inicio de sesión")])),_:1})])),_:1},8,["onClick"]),n(b,{class:"overlay-container"},{default:l((()=>[n(b,{class:"uni-container"},{default:l((()=>[n(h,{class:"uni-title"},{default:l((()=>[c("Recuperar Contraseña")])),_:1}),n(h,{class:"uni-text"},{default:l((()=>[c("Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña.")])),_:1}),n(v,{class:"input",modelValue:p.email,"onUpdate:modelValue":a[0]||(a[0]=e=>p.email=e),placeholder:"Ingrese su correo electrónico"},null,8,["modelValue"]),n(k,{class:"uni-button reset-btn",onClick:_.resetPassword},{default:l((()=>[c("Enviar correo de restablecimiento")])),_:1},8,["onClick"]),p.errorMessage?(t(),o(b,{key:0,class:"error-message"},{default:l((()=>[c(d(p.errorMessage),1)])),_:1})):u("",!0)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-42d1b378"]]);export{p as default};
