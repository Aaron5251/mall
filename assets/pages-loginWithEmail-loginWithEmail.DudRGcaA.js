import{_ as a,h as s,P as e,r as o,n as r,c as t,w as l,i as n,o as i,a as c,e as u,t as d,p as g,k as p,f,I as m,g as h}from"./index-BiZ4IPCE.js";import{_}from"./back-arrow.CkhzZLPy.js";const k=a({data:()=>({email:"",password:"",errorMessage:""}),methods:{async loginWithEmail(){const a=s();if(this.email&&this.password)try{await e(a,this.email,this.password),this.errorMessage="",o({url:"/pages/home/home"})}catch(r){"auth/user-not-found"===r.code?this.errorMessage="No se encontró ninguna cuenta con este correo.":"auth/wrong-password"===r.code?this.errorMessage="Contraseña incorrecta. Inténtalo de nuevo.":this.errorMessage="Fallo al iniciar sesión. Inténtalo de nuevo."}else this.errorMessage="Por favor, ingresa tu correo electrónico y contraseña."},goBackToLoginOptions(){r({url:"/pages/loginOptions/loginOptions"})},goToForgotPassword(){r({url:"/pages/forgotPassword/forgotPassword"})},goToSignup(){r({url:"/pages/signup/signup"})}}},[["render",function(a,s,e,o,r,k){const w=p,C=f,b=n,M=m,v=h;return i(),t(b,{class:"login-page"},{default:l((()=>[c(b,{class:"back-button",onClick:k.goBackToLoginOptions},{default:l((()=>[c(w,{class:"back-icon",src:_}),c(C,{class:"back-text"},{default:l((()=>[u("Volver")])),_:1})])),_:1},8,["onClick"]),c(b,{class:"overlay-container"},{default:l((()=>[c(b,{class:"form-container"},{default:l((()=>[c(C,{class:"form-title"},{default:l((()=>[u("Iniciar sesión")])),_:1}),c(C,{class:"form-subtitle"},{default:l((()=>[u("Accede a tu cuenta")])),_:1}),c(M,{class:"input-field",type:"email",modelValue:r.email,"onUpdate:modelValue":s[0]||(s[0]=a=>r.email=a),placeholder:"Correo electrónico"},null,8,["modelValue"]),c(M,{class:"input-field",type:"password",modelValue:r.password,"onUpdate:modelValue":s[1]||(s[1]=a=>r.password=a),placeholder:"Contraseña"},null,8,["modelValue"]),c(v,{class:"form-button",onClick:k.loginWithEmail},{default:l((()=>[u("Iniciar sesión")])),_:1},8,["onClick"]),c(C,{class:"forgot-password",onClick:k.goToForgotPassword},{default:l((()=>[u("¿Olvidaste tu contraseña?")])),_:1},8,["onClick"]),c(b,{class:"signup-link"},{default:l((()=>[c(C,null,{default:l((()=>[u("¿No tienes una cuenta?")])),_:1}),c(C,{class:"signup-text",onClick:k.goToSignup},{default:l((()=>[u("Regístrate")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),r.errorMessage?(i(),t(b,{key:0,class:"error-message"},{default:l((()=>[c(C,null,{default:l((()=>[u(d(r.errorMessage),1)])),_:1})])),_:1})):g("",!0)])),_:1})}],["__scopeId","data-v-c8657e0b"]]);export{k as default};
