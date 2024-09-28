import{L as t,k as e,C as n,l as s,m as r,n as i,p as o,q as a,s as u,u as c,v as h,x as l,y as d,z as f,_ as g,A as p,B as m,D as y,r as v,c as w,w as _,i as T,o as E,a as b,e as I,t as S,E as C,f as A,I as k,g as N}from"./index-Soms85zh.js";var D,R,x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;o=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^i&(n^r))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^i)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~i))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(r^(n|~i))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=i+((o=r+(e^(i|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}function s(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=0|t[r];s&&i==e||(n[r]=i,s=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var s=e-this.blockSize,r=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=s;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){n(this,r),i=0;break}}this.h=i,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var r={};function i(t){return-128<=t&&128>t?function(t,e){var n=r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new s([0|t],0>t?-1:0)})):new s([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new s(e,0)}var a=i(0),u=i(1),c=i(16777216);function h(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new s(n,~t.h).add(u)}function f(t,e){return t.add(d(e))}function g(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function p(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new p(a,a);if(l(t))return e=m(d(t),e),new p(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new p(d(e.g),e.h);if(30<t.g.length){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=u,s=e;0>=s.l(t);)n=y(n),s=y(s);var r=v(n,1),i=v(s,1);for(s=v(s,2),n=v(n,2);!h(s);){var c=i.add(s);0>=c.l(t)&&(r=r.add(n),i=c),s=v(s,1),n=v(n,1)}return e=f(t,r.j(e)),new p(r,e)}for(r=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),c=(i=o(n)).j(e);l(c)||0<c.l(t);)c=(i=o(n-=s)).j(e);h(i)&&(i=u),r=r.add(i),t=f(t,c)}return new p(r,t)}function y(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new s(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new s(i,t.h)}(t=s.prototype).m=function(){if(l(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.i(n);t+=(0<=s?s:4294967296+s)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,s="";;){var r=m(n,e).g,i=((0<(n=f(n,r.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(h(n=r))return i+s;for(;6>i.length;)i="0"+i;s=i+s}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.i(i))+(65535&t.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new s(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(0>this.l(c)&&0>t.l(c))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var u=this.i(r)>>>16,f=65535&this.i(r),p=t.i(i)>>>16,m=65535&t.i(i);n[2*r+2*i]+=f*m,g(n,2*r+2*i),n[2*r+2*i+1]+=u*m,g(n,2*r+2*i+1),n[2*r+2*i+1]+=f*p,g(n,2*r+2*i+1),n[2*r+2*i+2]+=u*p,g(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new s(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new s(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new s(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new s(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,R=e,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=o,s.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=o(Math.pow(n,8)),r=a,i=0;i<e.length;i+=8){var u=Math.min(8,e.length-i),c=parseInt(e.substring(i,i+u),n);8>u?(u=o(Math.pow(n,u)),r=r.j(u).add(o(c))):r=(r=r.j(s)).add(o(c))}return r},D=s}).apply(void 0!==x?x:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var L,M,O,P,V,F,U,q,B,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof j&&j];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,s){if(s)t:{var r=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in r))break t;r=r[o]}(s=s(i=r[t=t[t.length-1]]))!=i&&null!=s&&e(r,t,{configurable:!0,writable:!0,value:s})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,s=!1,r={next:function(){if(!s&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return s=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}(this,(function(t,e){return e}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var s=s||{},r=this||self;function i(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function c(t,e,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:u).apply(null,arguments)}function h(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(i(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function g(t){return/^[\s\xa0]*$/.test(t)}function p(){var t=r.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==p().indexOf("Gecko")||-1!=p().toLowerCase().indexOf("webkit")&&-1==p().indexOf("Edge")||-1!=p().indexOf("Trident")||-1!=p().indexOf("MSIE")||-1!=p().indexOf("Edge"));function v(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<_.length;e++)n=_[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function E(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function b(t){r.setTimeout((()=>{throw t}),0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new C),(t=>t.reset()));class C{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,k=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const t=r.Promise.resolve(void 0);A=()=>{t.then(R)}};var R=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){b(n)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}k=!1};function x(){this.s=this.s,this.C=this.C}function K(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},K.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};r.addEventListener("test",t,e),r.removeEventListener("test",t,e)}catch(n){}return t}();function $(t,e){if(K.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:G[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$.aa.h.call(this)}}l($,K);var G={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),H=0;function W(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++H,this.da=this.fa=!1}function X(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=Array.prototype.indexOf.call(r,e,void 0);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(X(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}Y.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Z(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new W(e,this.src,i,!!s,r)).fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function nt(t,e,n,s,r){if(s&&s.once)return rt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)nt(t,e[i],n,s,r);return null}return n=lt(n),t&&t[Q]?t.K(e,n,o(s)?!!s.capture:!!s,r):st(t,e,n,!1,s,r)}function st(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var a=o(r)?!!r.capture:!!r,u=ct(t);if(u||(t[tt]=u=new Y(t)),(n=u.add(e,n,s,a,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ut;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)z||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(at(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function rt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rt(t,e[i],n,s,r);return null}return n=lt(n),t&&t[Q]?t.L(e,n,o(s)?!!s.capture:!!s,r):st(t,e,n,!0,s,r)}function it(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)it(t,e[i],n,s,r);else s=o(s)?!!s.capture:!!s,n=lt(n),t&&t[Q]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Z(i=t.g[e],n,s,r))&&(X(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,s,r)),(n=-1<t?e[t]:null)&&ot(n))}function ot(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[Q])J(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(at(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ct(e))?(J(n,t),0==n.h&&(n.src=null,e[tt]=null)):X(t)}}}function at(t){return t in et?et[t]:et[t]="on"+t}function ut(t,e){if(t.da)t=!0;else{e=new $(e,this);var n=t.listener,s=t.ha||t.src;t.fa&&ot(t),t=n.call(s,e)}return t}function ct(t){return(t=t[tt])instanceof Y?t:null}var ht="__closure_events_fn_"+(1e9*Math.random()>>>0);function lt(t){return"function"==typeof t?t:(t[ht]||(t[ht]=function(e){return t.handleEvent(e)}),t[ht])}function dt(){x.call(this),this.i=new Y(this),this.M=this,this.F=null}function ft(t,e){var n,s=t.F;if(s)for(n=[];s;s=s.F)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new K(e,t);else if(e instanceof K)e.target=e.target||t;else{var r=e;T(e=new K(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=gt(o,s,!0,e)&&r}if(r=gt(o=e.g=t,s,!0,e)&&r,r=gt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=gt(o=e.g=n[i],s,!1,e)&&r}function gt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&J(t.i,o),r=!1!==a.call(u,s)&&r}}return r&&!s.defaultPrevented}function pt(t,e,n){if("function"==typeof t)n&&(t=c(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return 2147483647<Number(e)?-1:r.setTimeout(t,e||0)}function mt(t){t.g=pt((()=>{t.g=null,t.i&&(t.i=!1,mt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(dt,x),dt.prototype[Q]=!0,dt.prototype.removeEventListener=function(t,e,n,s){it(this,t,e,n,s)},dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)X(n[s]);delete e.g[t],e.h--}}this.F=null},dt.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},dt.prototype.L=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class yt extends x{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(t){x.call(this),this.h=t,this.g={}}l(vt,x);var wt=[];function _t(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ot(t)}),t),t.g={}}vt.prototype.N=function(){vt.aa.N.call(this),_t(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=r.JSON.stringify,Et=r.JSON.parse;function bt(){}function It(t){return t.h||(t.h=t.i())}function St(){}bt.prototype.h=null;var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function At(){K.call(this,"d")}function kt(){K.call(this,"c")}l(At,K),l(kt,K);var Nt={},Dt=null;function Rt(){return Dt=Dt||new dt}function xt(t){K.call(this,Nt.La,t)}function Lt(t){const e=Rt();ft(e,new xt(e))}function Mt(t,e){K.call(this,Nt.STAT_EVENT,t),this.stat=e}function Ot(t){const e=Rt();ft(e,new Mt(e,t))}function Pt(t,e){K.call(this,Nt.Ma,t),this.size=e}function Vt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout((function(){t()}),e)}function Ft(){this.g=!0}function Ut(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Tt(n)}catch(a){return e}}(t,n)+(s?" "+s:"")}))}Nt.La="serverreachability",l(xt,K),Nt.STAT_EVENT="statevent",l(Mt,K),Nt.Ma="timingevent",l(Pt,K),Ft.prototype.xa=function(){this.g=!1},Ft.prototype.info=function(){};var qt,Bt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Kt(){}function zt(t,e,n,s){this.j=t,this.i=e,this.l=n,this.R=s||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $t}function $t(){this.i=null,this.g="",this.h=!1}l(Kt,bt),Kt.prototype.g=function(){return new XMLHttpRequest},Kt.prototype.i=function(){return{}},qt=new Kt;var Gt={},Qt={};function Ht(t,e,n){t.L=1,t.v=we(ge(e)),t.m=n,t.P=!0,Wt(t,null)}function Wt(t,e){t.F=Date.now(),Jt(t),t.A=ge(t.v);var n=t.A,s=t.R;Array.isArray(s)||(s=[String(s)]),xe(n.i,"t",s),t.C=0,n=t.j.J,t.h=new $t,t.g=_n(t.j,n?e:null,!t.m),0<t.O&&(t.M=new yt(c(t.Y,t,t.g),t.O)),e=t.U,n=t.g,s=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(wt[0]=r.toString()),r=wt);for(var i=0;i<r.length;i++){var o=nt(n,r[i],s||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Lt(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Xt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Yt(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Qt:(n=Number(e.substring(n,s)),isNaN(n)?Gt:(s+=1)+n>e.length?Qt:(e=e.slice(s,s+n),t.C=s+n,e))}function Jt(t){t.S=Date.now()+t.I,Zt(t,t.I)}function Zt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Vt(c(t.ba,t),e)}function te(t){t.B&&(r.clearTimeout(t.B),t.B=null)}function ee(t){0==t.j.G||t.J||pn(t.j,t)}function ne(t){te(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,_t(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function se(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||ae(n.h,t)))if(!t.K&&ae(n.h,t)&&3==n.G){try{var s=n.Da.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;gn(n),sn(n)}ln(n),Ot(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Vt(c(n.Za,n),6e3));if(1>=oe(n.h)&&n.ca){try{n.ca()}catch(h){}n.ca=void 0}}else yn(n,11)}else if((t.K||n.g==t)&&gn(n),!g(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=c[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.L=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ue(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.ya=t,ve(s.I,s.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((s=n).qa=wn(s,s.J?s.ia:null,s.W),o.K){ce(s.h,o);var a=o,u=s.L;u&&(a.I=u),a.B&&(te(a),Jt(a)),s.g=o}else hn(s);0<n.i.length&&on(n)}else"stop"!=c[0]&&"close"!=c[0]||yn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?yn(n,7):nn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Lt()}catch(h){}}zt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Je(t)?e.j():this.Y(t)},zt.prototype.Y=function(t){try{if(t==this.g)t:{const d=Je(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Ze(this.g)))){this.J||4!=d||7==e||Lt(),te(this);var n=this.g.Z();this.X=n;e:if(Xt(this)){var s=Ze(this.g);t="";var i=s.length,o=4==Je(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ne(this),ee(this);var a="";break e}this.h.i=new r.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:!(o&&e==i-1)});s.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(u)){var h=u;break e}}h=null}if(!(n=h)){this.o=!1,this.s=3,Ot(12),ne(this),ee(this);break t}Ut(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,se(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=Yt(this,a),t==Qt){4==d&&(this.s=4,Ot(14),n=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}if(t==Gt){this.s=4,Ot(15),Ut(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ut(this.i,this.l,t,null),se(this,t)}if(Xt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Ot(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),dn(l),l.M=!0,Ot(11))}}else Ut(this.i,this.l,a,"[Invalid Chunked Response]"),ne(this),ee(this)}else Ut(this.i,this.l,a,null),se(this,a);4==d&&ne(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,Jt(this)))}else(function(t){const e={};t=(t.g&&2<=Je(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(g(t[s]))continue;var n=E(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),ne(this),ee(this)}}}catch(d){}},zt.prototype.cancel=function(){this.J=!0,ne(this)},zt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Lt(),Ot(17)),ne(this),this.s=2,ee(this)):Zt(this,this.S-t)};function re(t){this.l=t||10,r.PerformanceNavigationTiming?t=0<(t=r.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ie(t){return!!t.h||!!t.g&&t.g.size>=t.j}function oe(t){return t.h?1:t.g?t.g.size:0}function ae(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ue(t,e){t.g?t.g.add(e):t.h=e}function ce(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function he(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(i(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(i(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(i(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,o=0;o<r;o++)e.call(void 0,s[o],n&&n[o],t)}re.prototype.cancel=function(){if(this.i=he(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var de=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof fe){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,me(this,t.s),this.l=t.l;var e=t.i,n=new ke;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ye(this,n),this.m=t.m}else t&&(e=String(t).match(de))?(this.h=!1,pe(this,e[1]||"",!0),this.o=_e(e[2]||""),this.g=_e(e[3]||"",!0),me(this,e[4]),this.l=_e(e[5]||"",!0),ye(this,e[6]||"",!0),this.m=_e(e[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}function ge(t){return new fe(t)}function pe(t,e,n){t.j=n?_e(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function me(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ye(t,e,n){e instanceof ke?(t.i=e,function(t,e){e&&!t.j&&(Ne(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(De(this,e),xe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Te(e,Ce)),t.i=new ke(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function we(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _e(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Te(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ee),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ee(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Te(e,be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Te(e,be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Te(n,"/"==n.charAt(0)?Se:Ie,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Te(n,Ae)),t.join("")};var be=/[#\/\?@]/g,Ie=/[#\?:]/g,Se=/[#\?]/g,Ce=/[#\?@]/g,Ae=/#/g;function ke(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function De(t,e){Ne(t),e=Le(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Re(t,e){return Ne(t),e=Le(t,e),t.g.has(e)}function xe(t,e,n){De(t,e),0<n.length&&(t.i=null,t.g.set(Le(t,e),d(n)),t.h+=n.length)}function Le(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Me(t,e,n,s,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),s(n)}catch(i){}}function Oe(){this.g=new class{stringify(t){return r.JSON.stringify(t,void 0)}parse(t){return r.JSON.parse(t,void 0)}}}function Pe(t,e,n){const s=n||"";try{le(t,(function(t,n){let r=t;o(t)&&(r=Tt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ve(t){this.l=t.Ub||null,this.j=t.eb||!1}function Fe(t,e){dt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ue(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function qe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Be(t)}function Be(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function je(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ke(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=je(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ve(t,e,n))}function ze(t){dt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=ke.prototype).add=function(t,e){Ne(this),this.i=null,t=Le(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ne(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},t.na=function(){Ne(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},t.V=function(t){Ne(this);let e=[];if("string"==typeof t)Re(this,t)&&(e=e.concat(this.g.get(Le(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ne(this),this.i=null,Re(this,t=Le(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.V(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")},l(Ve,bt),Ve.prototype.g=function(){return new Fe(this.l,this.j)},Ve.prototype.i=function(t){return function(){return t}}({}),l(Fe,dt),(t=Fe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Be(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||r).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ue(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qe(this):Be(this),3==this.readyState&&Ue(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,qe(this))},t.Qa=function(t){this.g&&(this.response=t,qe(this))},t.ga=function(){this.g&&qe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(ze,dt);var $e=/^https?$/i,Ge=["POST","PUT"];function Qe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,He(t),Xe(t)}function He(t){t.A||(t.A=!0,ft(t,"complete"),ft(t,"error"))}function We(t){if(t.h&&void 0!==s&&(!t.v[1]||4!=Je(t)||2!=t.Z()))if(t.u&&4==Je(t))pt(t.Ea,0,t);else if(ft(t,"readystatechange"),4==Je(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===s){var o=String(t.D).match(de)[1]||null;!o&&r.self&&r.self.location&&(o=r.self.location.protocol.slice(0,-1)),i=!$e.test(o?o.toLowerCase():"")}n=i}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var a=2<Je(t)?t.g.statusText:""}catch(u){a=""}t.l=a+" ["+t.Z()+"]",He(t)}}finally{Xe(t)}}}function Xe(t,e){if(t.g){Ye(t);const s=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||ft(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function Ye(t){t.I&&(r.clearTimeout(t.I),t.I=null)}function Je(t){return t.g?t.g.readyState:0}function Ze(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function en(t){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tn("baseRetryDelayMs",5e3,t),this.cb=tn("retryDelaySeedMs",1e4,t),this.Wa=tn("forwardChannelMaxRetries",2,t),this.wa=tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new re(t&&t.concurrentRequestLimit),this.Da=new Oe,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function nn(t){if(rn(t),3==t.G){var e=t.U++,n=ge(t.I);if(ve(n,"SID",t.K),ve(n,"RID",e),ve(n,"TYPE","terminate"),un(t,n),(e=new zt(t,t.j,e)).L=2,e.v=we(ge(n)),n=!1,r.navigator&&r.navigator.sendBeacon)try{n=r.navigator.sendBeacon(e.v.toString(),"")}catch(s){}!n&&r.Image&&((new Image).src=e.v,n=!0),n||(e.g=_n(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Jt(e)}vn(t)}function sn(t){t.g&&(dn(t),t.g.cancel(),t.g=null)}function rn(t){sn(t),t.u&&(r.clearTimeout(t.u),t.u=null),gn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&r.clearTimeout(t.s),t.s=null)}function on(t){if(!ie(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||D(),k||(A(),k=!0),N.add(e,t),t.B=0}}function an(t,e){var n;n=e?e.l:t.U++;const s=ge(t.I);ve(s,"SID",t.K),ve(s,"RID",n),ve(s,"AID",t.T),un(t,s),t.m&&t.o&&Ke(s,t.m,t.o),n=new zt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=cn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),ue(t.h,n),Ht(n,s,e)}function un(t,e){t.H&&v(t.H,(function(t,n){ve(e,n,t)})),t.l&&le({},(function(t,n){ve(e,n,t)}))}function cn(t,e,n){n=Math.min(t.i.length,n);var s=t.l?c(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const u=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{Pe(u,t,"req"+n+"_")}catch(i){s&&s(u)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function hn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||D(),k||(A(),k=!0),N.add(e,t),t.v=0}}function ln(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Vt(c(t.Fa,t),mn(t,t.v)),t.v++,!0)}function dn(t){null!=t.A&&(r.clearTimeout(t.A),t.A=null)}function fn(t){t.g=new zt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ge(t.qa);ve(e,"RID","rpc"),ve(e,"SID",t.K),ve(e,"AID",t.T),ve(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ve(e,"TO",t.ja),ve(e,"TYPE","xmlhttp"),un(t,e),t.m&&t.o&&Ke(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=we(ge(e)),n.m=null,n.P=!0,Wt(n,t)}function gn(t){null!=t.C&&(r.clearTimeout(t.C),t.C=null)}function pn(t,e){var n=null;if(t.g==e){gn(t),dn(t),t.g=null;var s=2}else{if(!ae(t.h,e))return;n=e.D,ce(t.h,e),s=1}if(0!=t.G)if(e.o)if(1==s){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;ft(s=Rt(),new Pt(s,n)),on(t)}else hn(t);else if(3==(r=e.s)||0==r&&0<e.X||!(1==s&&function(t,e){return!(oe(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Vt(c(t.Ga,t,e),mn(t,t.B)),t.B++,0)))}(t,e)||2==s&&ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:yn(t,5);break;case 4:yn(t,10);break;case 3:yn(t,6);break;default:yn(t,2)}}function mn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function yn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.fb,t),s=t.Xa;const e=!s;s=new fe(s||"//www.google.com/images/cleardot.gif"),r.location&&"http"==r.location.protocol||pe(s,"https"),we(s),e?function(t,e){const n=new Ft;if(r.Image){const s=new Image;s.onload=h(Me,n,"TestLoadImage: loaded",!0,e,s),s.onerror=h(Me,n,"TestLoadImage: error",!1,e,s),s.onabort=h(Me,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=h(Me,n,"TestLoadImage: timeout",!1,e,s),r.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(s.toString(),n):function(t,e){new Ft;const n=new AbortController,s=setTimeout((()=>{n.abort(),Me(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(s),t.ok?Me(0,0,!0,e):Me(0,0,!1,e)})).catch((()=>{clearTimeout(s),Me(0,0,!1,e)}))}(s.toString(),n)}else Ot(2);t.G=0,t.l&&t.l.sa(e),vn(t),rn(t)}function vn(t){if(t.G=0,t.ka=[],t.l){const e=he(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function wn(t,e,n){var s=n instanceof fe?ge(n):new fe(n);if(""!=s.g)e&&(s.g=e+"."+s.g),me(s,s.s);else{var i=r.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new fe(null);s&&pe(o,s),e&&(o.g=e),i&&me(o,i),n&&(o.l=n),s=o}return n=t.D,e=t.ya,n&&e&&ve(s,n,e),ve(s,"VER",t.la),un(t,s),s}function _n(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new ze(new Ve({eb:n})):new ze(t.pa)).Ha(t.J),e}function Tn(){}function En(){}function bn(t,e){dt.call(this),this.g=new en(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!g(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!g(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Cn(this)}function In(t){At.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Sn(){kt.call(this),this.status=1}function Cn(t){this.g=t}(t=ze.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qt.g(),this.v=this.o?It(this.o):It(qt),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Qe(this,o)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=r.FormData&&t instanceof r.FormData,!(0<=Array.prototype.indexOf.call(Ge,e,void 0))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ye(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Qe(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Xe(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xe(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?We(this):this.bb())},t.bb=function(){We(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Et(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=en.prototype).la=8,t.G=1,t.connect=function(t,e,n,s){Ot(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.I=wn(this,null,this.W),on(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new zt(this,this.j,t);let i=this.o;if(this.S&&(i?(i=w(i),T(i,this.S)):i=this.S),null!==this.m||this.O||(r.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cn(this,r,e),ve(n=ge(this.I),"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),un(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(je(i)))+"&"+e:this.m&&Ke(n,this.m,i)),ue(this.h,r),this.Ua&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),r.T=!0,Ht(r,n,null)):Ht(r,n,e),this.G=2}}else 3==this.G&&(t?an(this,t):0==this.i.length||ie(this.h)||an(this))},t.Fa=function(){if(this.u=null,fn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Vt(c(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),sn(this),fn(this))},t.Za=function(){null!=this.C&&(this.C=null,sn(this),ln(this),Ot(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=Tn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},En.prototype.g=function(t,e){return new bn(t,e)},l(bn,dt),bn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){nn(this.g)},bn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=Tt(t),t=n);e.i.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.Ya++,t)),3==e.G&&on(e)},bn.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,bn.aa.N.call(this)},l(In,At),l(Sn,kt),l(Cn,Tn),Cn.prototype.ua=function(){ft(this.g,"a")},Cn.prototype.ta=function(t){ft(this.g,new In(t))},Cn.prototype.sa=function(t){ft(this.g,new Sn)},Cn.prototype.ra=function(){ft(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,B=function(){return new En},q=function(){return Rt()},U=Nt,F={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bt.NO_ERROR=0,Bt.TIMEOUT=8,Bt.HTTP_ERROR=6,V=Bt,jt.COMPLETE="complete",P=jt,St.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",dt.prototype.listen=dt.prototype.K,O=St,M=Ve,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,L=ze}).apply(void 0!==j?j:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const K="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $="10.13.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new t("@firebase/firestore");function Q(){return G.logLevel}function H(t,...e){if(G.logLevel<=c.DEBUG){const n=e.map(Y);G.debug(`Firestore (${$}): ${t}`,...n)}}function W(t,...e){if(G.logLevel<=c.ERROR){const n=e.map(Y);G.error(`Firestore (${$}): ${t}`,...n)}}function X(t,...e){if(G.logLevel<=c.WARN){const n=e.map(Y);G.warn(`Firestore (${$}): ${t}`,...n)}}function Y(t){if("string"==typeof t)return t;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${$}) INTERNAL ASSERTION FAILED: `+t;throw W(e),new Error(e)}function Z(t,e){t||J()}function tt(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nt extends r{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class it{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(z.UNAUTHENTICATED)))}shutdown(){}}class ot{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class at{constructor(t){this.t=t,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new st;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new st,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new st)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Z("string"==typeof e.accessToken),new rt(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(null===t||"string"==typeof t),new z(t)}}class ut{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ct{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ut(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(z.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ht{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lt{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,H("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Z("string"==typeof t.token),this.R=t.token,new ht(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=dt(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function gt(t,e){return t<e?-1:t>e?1:0}function pt(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new nt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new nt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new nt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new nt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new mt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new yt(t)}static min(){return new yt(new mt(0,0))}static max(){return new yt(new mt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,n){void 0===e?e=0:e>t.length&&J(),void 0===n?n=t.length-e:n>t.length-e&&J(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vt?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class wt extends vt{construct(t,e,n){return new wt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new nt(et.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new wt(e)}static emptyPath(){return new wt([])}}const _t=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends vt{construct(t,e,n){return new Tt(t,e,n)}static isValidIdentifier(t){return _t.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new nt(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new nt(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new nt(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new nt(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.path=t}static fromPath(t){return new Et(wt.fromString(t))}static fromName(t){return new Et(wt.fromString(t).popFirst(5))}static empty(){return new Et(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===wt.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return wt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Et(new wt(t.slice()))}}function bt(t){return new It(t.readTime,t.key,-1)}class It{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new It(yt.min(),Et.empty(),-1)}static max(){return new It(yt.max(),Et.empty(),-1)}}function St(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Et.comparator(t.documentKey,e.documentKey),0!==n?n:gt(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(t){if(t.code!==et.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;H("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new At(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof At?e:At.resolve(e)}catch(e){return At.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):At.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):At.reject(e)}static resolve(t){return new At(((e,n)=>{e(t)}))}static reject(t){return new At(((e,n)=>{n(t)}))}static waitFor(t){return new At(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=At.resolve(!1);for(const n of t)e=e.next((t=>t?At.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new At(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const u=a;e(t[u]).next((t=>{i[u]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new At(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}function kt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function Dt(t){return null==t}function Rt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.oe=-1;class Ot{constructor(t,e){this.comparator=t,this.root=e||Vt.EMPTY}insert(t,e){return new Ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new Ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pt(this.root,t,this.comparator,!0)}}class Pt{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Vt.RED,this.left=null!=s?s:Vt.EMPTY,this.right=null!=r?r:Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Vt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Vt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J();if(this.right.isRed())throw J();const t=this.left.check();if(t!==this.right.check())throw J();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1,Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(t){this.comparator=t,this.data=new Ot(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ut(this.data.getIterator())}getIteratorFrom(t){return new Ut(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ft))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ft(this.comparator);return e.data=t,e}}class Ut{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new qt([])}unionWith(t){let e=new Ft(Tt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pt(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Bt("Invalid base64 string: "+e):e}}(t);return new jt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Kt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(t){if(Z(!!t),"string"==typeof t){let e=0;const n=Kt.exec(t);if(Z(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$t(t.seconds),nanos:$t(t.nanos)}}function $t(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Gt(t){return"string"==typeof t?jt.fromBase64String(t):jt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ht(t){const e=t.mapValue.fields.__previous_value__;return Qt(e)?Ht(e):e}function Wt(t){const e=zt(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,n,s,r,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class Yt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Yt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={fields:{__type__:{stringValue:"__max__"}}};function Zt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qt(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:function(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(t)?10:11:J()}function te(t,e){if(t===e)return!0;const n=Zt(t);if(n!==Zt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wt(t).isEqual(Wt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=zt(t.timestampValue),s=zt(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Gt(t.bytesValue).isEqual(Gt(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $t(t.geoPointValue.latitude)===$t(e.geoPointValue.latitude)&&$t(t.geoPointValue.longitude)===$t(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $t(t.integerValue)===$t(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$t(t.doubleValue),s=$t(e.doubleValue);return n===s?Rt(n)===Rt(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return pt(t.arrayValue.values||[],e.arrayValue.values||[],te);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(xt(n)!==xt(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!te(n[r],s[r])))return!1;return!0}(t,e);default:return J()}var s}function ee(t,e){return void 0!==(t.values||[]).find((t=>te(t,e)))}function ne(t,e){if(t===e)return 0;const n=Zt(t),s=Zt(e);if(n!==s)return gt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return gt(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$t(t.integerValue||t.doubleValue),s=$t(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return se(t.timestampValue,e.timestampValue);case 4:return se(Wt(t),Wt(e));case 5:return gt(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Gt(t),s=Gt(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=gt(n[r],s[r]);if(0!==t)return t}return gt(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=gt($t(t.latitude),$t(e.latitude));return 0!==n?n:gt($t(t.longitude),$t(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return re(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,s,r,i;const o=t.fields||{},a=e.fields||{},u=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(s=a.value)||void 0===s?void 0:s.arrayValue,h=gt((null===(r=null==u?void 0:u.values)||void 0===r?void 0:r.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==h?h:re(u,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Jt&&e===Jt)return 0;if(t===Jt)return 1;if(e===Jt)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=gt(s[o],i[o]);if(0!==t)return t;const e=ne(n[s[o]],r[i[o]]);if(0!==e)return e}return gt(s.length,i.length)}(t.mapValue,e.mapValue);default:throw J()}}function se(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return gt(t,e);const n=zt(t),s=zt(e),r=gt(n.seconds,s.seconds);return 0!==r?r:gt(n.nanos,s.nanos)}function re(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=ne(n[r],s[r]);if(t)return t}return gt(n.length,s.length)}function ie(t){return oe(t)}function oe(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=zt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gt(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Et.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=oe(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${oe(t.fields[r])}`;return n+"}"}(t.mapValue):J()}function ae(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ue(t){return!!t&&"integerValue"in t}function ce(t){return!!t&&"arrayValue"in t}function he(t){return!!t&&"nullValue"in t}function le(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function de(t){return!!t&&"mapValue"in t}function fe(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fe(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fe(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ge{constructor(t){this.value=t}static empty(){return new ge({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!de(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fe(e)}setAll(t){let e=Tt.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=fe(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());de(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return te(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];de(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Lt(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new ge(fe(this.value))}}function pe(t){const e=[];return Lt(t.fields,((t,n)=>{const s=new Tt([t]);if(de(n)){const t=pe(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new qt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class me{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new me(t,0,yt.min(),yt.min(),yt.min(),ge.empty(),0)}static newFoundDocument(t,e,n,s){return new me(t,1,e,yt.min(),n,s,0)}static newNoDocument(t,e){return new me(t,2,e,yt.min(),yt.min(),ge.empty(),0)}static newUnknownDocument(t,e){return new me(t,3,e,yt.min(),yt.min(),ge.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof me&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e){this.position=t,this.inclusive=e}}function ve(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Et.comparator(Et.fromName(o.referenceValue),n.key):ne(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function we(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!te(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e="asc"){this.field=t,this.dir=e}}function Te(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{}class be extends Ee{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new De(t,e,n):"array-contains"===e?new Me(t,n):"in"===e?new Oe(t,n):"not-in"===e?new Pe(t,n):"array-contains-any"===e?new Ve(t,n):new be(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Re(t,n):new xe(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ne(e,this.value)):null!==e&&Zt(this.value)===Zt(e)&&this.matchesComparison(ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends Ee{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ie(t,e)}matches(t){return Se(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Se(t){return"and"===t.op}function Ce(t){return function(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}(t)&&Se(t)}function Ae(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ie(t.value);if(Ce(t))return t.filters.map((t=>Ae(t))).join(",");{const e=t.filters.map((t=>Ae(t))).join(",");return`${t.op}(${e})`}}function ke(t,e){return t instanceof be?(n=t,(s=e)instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&te(n.value,s.value)):t instanceof Ie?function(t,e){return e instanceof Ie&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&ke(n,e.filters[s])),!0)}(t,e):void J();var n,s}function Ne(t){return t instanceof be?`${(e=t).field.canonicalString()} ${e.op} ${ie(e.value)}`:t instanceof Ie?function(t){return t.op.toString()+" {"+t.getFilters().map(Ne).join(" ,")+"}"}(t):"Filter";var e}class De extends be{constructor(t,e,n){super(t,e,n),this.key=Et.fromName(n.referenceValue)}matches(t){const e=Et.comparator(t.key,this.key);return this.matchesComparison(e)}}class Re extends be{constructor(t,e){super(t,"in",e),this.keys=Le("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class xe extends be{constructor(t,e){super(t,"not-in",e),this.keys=Le("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Le(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Et.fromName(t.referenceValue)))}class Me extends be{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ce(e)&&ee(e.arrayValue,this.value)}}class Oe extends be{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ee(this.value.arrayValue,e)}}class Pe extends be{constructor(t,e){super(t,"not-in",e)}matches(t){if(ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ee(this.value.arrayValue,e)}}class Ve extends be{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ce(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ee(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ue=null}}function Ue(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Fe(t,e,n,s,r,i,o)}function qe(t){const e=tt(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ae(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Dt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ie(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ie(t))).join(",")),e.ue=t}return e.ue}function Be(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Te(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ke(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!we(t.startAt,e.startAt)&&we(t.endAt,e.endAt)}function je(t){return Et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ze(t){return new Ke(t)}function $e(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ge(t){return null!==t.collectionGroup}function Qe(t){const e=tt(t);if(null===e.ce){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Ft(Tt.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _e(s,n))})),t.has(Tt.keyField().canonicalString())||e.ce.push(new _e(Tt.keyField(),n))}return e.ce}function He(t){const e=tt(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return Ue(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new _e(t.field,e)}));const n=t.endAt?new ye(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ye(t.startAt.position,t.startAt.inclusive):null;return Ue(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,Qe(t))),e.le}function We(t,e){const n=t.filters.concat([e]);return new Ke(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xe(t,e,n){return new Ke(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ye(t,e){return Be(He(t),He(e))&&t.limitType===e.limitType}function Je(t){return`${qe(He(t))}|lt:${t.limitType}`}function Ze(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ne(t))).join(", ")}]`),Dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ie(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ie(t))).join(",")),`Target(${e})`}(He(t))}; limitType=${t.limitType})`}function tn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Qe(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=ve(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,Qe(n),s)||n.endAt&&!function(t,e,n){const s=ve(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,Qe(n),s)));var n,s}function en(t){return(e,n)=>{let s=!1;for(const r of Qe(t)){const t=nn(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function nn(t,e,n){const s=t.field.isKeyField()?Et.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ne(s,r):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Lt(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Mt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Ot(Et.comparator);function on(){return rn}const an=new Ot(Et.comparator);function un(...t){let e=an;for(const n of t)e=e.insert(n.key,n);return e}function cn(t){let e=an;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function hn(){return dn()}function ln(){return dn()}function dn(){return new sn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const fn=new Ot(Et.comparator),gn=new Ft(Et.comparator);function pn(...t){let e=gn;for(const n of t)e=e.add(n);return e}const mn=new Ft(gt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rt(e)?"-0":e}}function vn(t){return{integerValue:""+t}}function wn(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?vn(e):yn(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this._=void 0}}function Tn(t,e,n){return t instanceof In?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Qt(e)&&(e=Ht(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Sn?Cn(t,e):t instanceof An?kn(t,e):function(t,e){const n=bn(t,e),s=Dn(n)+Dn(t.Pe);return ue(n)&&ue(t.Pe)?vn(s):yn(t.serializer,s)}(t,e)}function En(t,e,n){return t instanceof Sn?Cn(t,e):t instanceof An?kn(t,e):n}function bn(t,e){return t instanceof Nn?ue(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null;var n,s}class In extends _n{}class Sn extends _n{constructor(t){super(),this.elements=t}}function Cn(t,e){const n=Rn(e);for(const s of t.elements)n.some((t=>te(t,s)))||n.push(s);return{arrayValue:{values:n}}}class An extends _n{constructor(t){super(),this.elements=t}}function kn(t,e){let n=Rn(e);for(const s of t.elements)n=n.filter((t=>!te(t,s)));return{arrayValue:{values:n}}}class Nn extends _n{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Dn(t){return $t(t.integerValue||t.doubleValue)}function Rn(t){return ce(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class xn{constructor(t,e){this.version=t,this.transformResults=e}}class Ln{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ln}static exists(t){return new Ln(void 0,t)}static updateTime(t){return new Ln(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class On{}function Pn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Gn(t.key,Ln.none()):new Bn(t.key,t.data,Ln.none());{const n=t.data,s=ge.empty();let r=new Ft(Tt.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new jn(t.key,s,new qt(r.toArray()),Ln.none())}}function Vn(t,e,n){var s;t instanceof Bn?function(t,e,n){const s=t.value.clone(),r=zn(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(t,e,n){if(!Mn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=zn(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Kn(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Fn(t,e,n,s){return t instanceof Bn?function(t,e,n,s){if(!Mn(t.precondition,e))return n;const r=t.value.clone(),i=$n(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof jn?function(t,e,n,s){if(!Mn(t.precondition,e))return n;const r=$n(t.fieldTransforms,s,e),i=e.data;return i.setAll(Kn(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(r=e,i=n,Mn(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function Un(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=bn(s.transform,t||null);null!=r&&(null===n&&(n=ge.empty()),n.set(s.field,r))}return n||null}function qn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&pt(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Sn&&s instanceof Sn||n instanceof An&&s instanceof An?pt(n.elements,s.elements,te):n instanceof Nn&&s instanceof Nn?te(n.Pe,s.Pe):n instanceof In&&s instanceof In);var n,s}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}class Bn extends On{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends On{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Kn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function zn(t,e,n){const s=new Map;Z(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,En(o,a,n[r]))}return s}function $n(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Tn(t,i,e))}return s}class Gn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Vn(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Fn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Fn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ln();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Pn(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(yt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pn())}isEqual(t){return this.batchId===t.batchId&&pt(this.mutations,t.mutations,((t,e)=>qn(t,e)))&&pt(this.baseMutations,t.baseMutations,((t,e)=>qn(t,e)))}}class Wn{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Z(t.mutations.length===n.length);let s=function(){return fn}();const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new Wn(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn,Zn;function ts(t){if(void 0===t)return W("GRPC error has no .code"),et.UNKNOWN;switch(t){case Jn.OK:return et.OK;case Jn.CANCELLED:return et.CANCELLED;case Jn.UNKNOWN:return et.UNKNOWN;case Jn.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case Jn.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case Jn.INTERNAL:return et.INTERNAL;case Jn.UNAVAILABLE:return et.UNAVAILABLE;case Jn.UNAUTHENTICATED:return et.UNAUTHENTICATED;case Jn.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case Jn.NOT_FOUND:return et.NOT_FOUND;case Jn.ALREADY_EXISTS:return et.ALREADY_EXISTS;case Jn.PERMISSION_DENIED:return et.PERMISSION_DENIED;case Jn.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case Jn.ABORTED:return et.ABORTED;case Jn.OUT_OF_RANGE:return et.OUT_OF_RANGE;case Jn.UNIMPLEMENTED:return et.UNIMPLEMENTED;case Jn.DATA_LOSS:return et.DATA_LOSS;default:return J()}}(Zn=Jn||(Jn={}))[Zn.OK=0]="OK",Zn[Zn.CANCELLED=1]="CANCELLED",Zn[Zn.UNKNOWN=2]="UNKNOWN",Zn[Zn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zn[Zn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zn[Zn.NOT_FOUND=5]="NOT_FOUND",Zn[Zn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zn[Zn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zn[Zn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zn[Zn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zn[Zn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zn[Zn.ABORTED=10]="ABORTED",Zn[Zn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zn[Zn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zn[Zn.INTERNAL=13]="INTERNAL",Zn[Zn.UNAVAILABLE=14]="UNAVAILABLE",Zn[Zn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const es=new D([4294967295,4294967295],0);function ns(t){const e=(new TextEncoder).encode(t),n=new R;return n.update(e),new Uint8Array(n.digest())}function ss(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new D([n,s],0),new D([r,i],0)]}class rs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new is(`Invalid padding: ${e}`);if(n<0)throw new is(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new is(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new is(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=D.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(D.fromNumber(n)));return 1===s.compare(es)&&(s=new D([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=ns(t),[n,s]=ss(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,s,r);if(!this.de(t))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),i=new rs(r,s,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Ie)return;const e=ns(t),[n,s]=ss(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,s,r);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,as.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new os(yt.min(),s,new Ot(gt),on(),pn())}}class as{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new as(n,e,pn(),pn(),pn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class cs{constructor(t,e){this.targetId=t,this.me=e}}class hs{constructor(t,e,n=jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ls{constructor(){this.fe=0,this.ge=gs(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=pn(),e=pn(),n=pn();return this.ge.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:J()}})),new as(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=gs()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ds{constructor(t){this.Le=t,this.Be=new Map,this.ke=on(),this.qe=fs(),this.Qe=new Ot(gt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:J()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const r=s.target;if(je(r))if(0===n){const t=new Et(r.path);this.Ue(e,t,me.newNoDocument(t,yt.min()))}else Z(1===n);else{const s=this.Ye(e);if(s!==n){const n=this.Ze(t),r=n?this.Xe(n,t,s):1;if(0!==r){this.je(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:r=0}=e;let i,o;try{i=Gt(n).toUint8Array()}catch(a){if(a instanceof Bt)return X("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new rs(i,s,r)}catch(a){return X(a instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const r=this.Le.tt(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.Ue(e,n,null),s++)})),s}rt(t){const e=new Map;this.Be.forEach(((n,s)=>{const r=this.Je(s);if(r){if(n.current&&je(r.target)){const e=new Et(r.target.path);null!==this.ke.get(e)||this.it(s,e)||this.Ue(s,e,me.newNoDocument(e,t))}n.be&&(e.set(s,n.ve()),n.Ce())}}));let n=pn();this.qe.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const s=new os(t,e,this.Qe,this.ke,n);return this.ke=on(),this.qe=fs(),this.Qe=new Ot(gt),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ls,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ft(gt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||H("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ls),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function fs(){return new Ot(Et.comparator)}function gs(){return new Ot(Et.comparator)}const ps=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ms=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ys=(()=>({and:"AND",or:"OR"}))();class vs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ws(t,e){return t.useProto3Json||Dt(e)?e:{value:e}}function _s(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ts(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Es(t,e){return _s(t,e.toTimestamp())}function bs(t){return Z(!!t),yt.fromTimestamp(function(t){const e=zt(t);return new mt(e.seconds,e.nanos)}(t))}function Is(t,e){return Ss(t,e).canonicalString()}function Ss(t,e){const n=(s=t,new wt(["projects",s.projectId,"databases",s.database])).child("documents");var s;return void 0===e?n:n.child(e)}function Cs(t){const e=wt.fromString(t);return Z(zs(e)),e}function As(t,e){return Is(t.databaseId,e.path)}function ks(t,e){const n=Cs(e);if(n.get(1)!==t.databaseId.projectId)throw new nt(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new nt(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Et(Rs(n))}function Ns(t,e){return Is(t.databaseId,e)}function Ds(t){return new wt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rs(t){return Z(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xs(t,e,n){return{name:As(t,e),fields:n.value.mapValue.fields}}function Ls(t,e){return{documents:[Ns(t,e.path)]}}function Ms(t,e){const n={structuredQuery:{}},s=e.path;let r;null!==e.collectionGroup?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Ns(t,r);const i=function(t){if(0!==t.length)return js(Ie.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:qs((e=t).field),direction:Vs(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ws(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:r};var u}function Os(t){let e=function(t){const e=Cs(t);return 4===e.length?wt.emptyPath():Rs(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Z(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Ps(t);return e instanceof Ie&&Ce(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new _e(Bs((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Dt(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new ye(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new ye(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new Ke(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",u,c)}function Ps(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bs(t.unaryFilter.field);return be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bs(t.unaryFilter.field);return be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(t.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bs(t.unaryFilter.field);return be.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):void 0!==t.fieldFilter?(e=t,be.create(Bs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return Ie.create(t.compositeFilter.filters.map((t=>Ps(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return J()}}(t.compositeFilter.op))}(t):J();var e}function Vs(t){return ps[t]}function Fs(t){return ms[t]}function Us(t){return ys[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Tt.fromServerFormat(t.fieldPath)}function js(t){return t instanceof be?function(t){if("=="===t.op){if(le(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NAN"}};if(he(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(le(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NAN"}};if(he(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(t.field),op:Fs(t.op),value:t.value}}}(t):t instanceof Ie?function(t){const e=t.getFilters().map((t=>js(t)));return 1===e.length?e[0]:{compositeFilter:{op:Us(t.op),filters:e}}}(t):J()}function Ks(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,s,r=yt.min(),i=yt.min(),o=jt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new $s(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this.ct=t}}function Qs(t){const e=Os({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xe(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.un=new Ws}addToCollectionParentIndex(t,e){return this.un.add(e),At.resolve()}getCollectionParents(t,e){return At.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return At.resolve()}deleteFieldIndex(t,e){return At.resolve()}deleteAllFieldIndexes(t){return At.resolve()}createTargetIndexes(t,e){return At.resolve()}getDocumentsMatchingTarget(t,e){return At.resolve(null)}getIndexType(t,e){return At.resolve(0)}getFieldIndexes(t,e){return At.resolve([])}getNextCollectionGroupToUpdate(t){return At.resolve(null)}getMinOffset(t,e){return At.resolve(It.min())}getMinOffsetFromCollectionGroup(t,e){return At.resolve(It.min())}updateCollectionGroup(t,e,n){return At.resolve()}updateIndexEntries(t,e){return At.resolve()}}class Ws{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ft(wt.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ft(wt.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xs(0)}static kn(){return new Xs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Fn(n.mutation,t,qt.empty(),mt.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,pn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=pn()){const s=hn();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=un();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=hn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,pn())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=on();const i=dn(),o=dn();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof jn)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Fn(o.mutation,e,o.mutation.getFieldMask(),mt.now())):i.set(e.key,qt.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ys(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=dn();let s=new Ot(((t,e)=>t-e)),r=pn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||qt.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||pn()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=ln();u.forEach((t=>{if(!r.has(t)){const s=Pn(e.get(t),n.get(t));null!==s&&c.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,c))}return At.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,s){return r=e,Et.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Ge(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s);var r}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):At.resolve(hn());let o=-1,a=r;return i.next((e=>At.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?At.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,pn()))).next((t=>({batchId:o,changes:cn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Et(e)).next((t=>{let e=un();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const r=e.collectionGroup;let i=un();return this.indexManager.getCollectionParents(t,r).next((o=>At.forEach(o,(o=>{const a=(u=e,c=o.child(r),new Ke(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt));var u,c;return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,s)))).next((t=>{r.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,me.newInvalidDocument(s)))}));let n=un();return t.forEach(((t,s)=>{const i=r.get(t);void 0!==i&&Fn(i.mutation,s,qt.empty(),mt.now()),tn(e,s)&&(n=n.insert(t,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return At.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,{id:(n=e).id,version:n.version,createTime:bs(n.createTime)}),At.resolve();var n}getNamedQuery(t,e){return At.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,{name:(n=e).name,query:Qs(n.bundledQuery),readTime:bs(n.readTime)}),At.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.overlays=new Ot(Et.comparator),this.Ir=new Map}getOverlay(t,e){return At.resolve(this.overlays.get(e))}getOverlays(t,e){const n=hn();return At.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),At.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),At.resolve()}getOverlaysForCollection(t,e,n){const s=hn(),r=e.length+1,i=new Et(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return At.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Ot(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=hn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=hn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return At.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Xn(e,n));let r=this.Ir.get(e);void 0===r&&(r=pn(),this.Ir.set(e,r)),this.Ir.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(t){return At.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,At.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.Tr=new Ft(sr.Er),this.dr=new Ft(sr.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new sr(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new sr(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new Et(new wt([])),n=new sr(e,t),s=new sr(e,t+1),r=[];return this.dr.forEachInRange([n,s],(t=>{this.Vr(t),r.push(t.key)})),r}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Et(new wt([])),n=new sr(e,t),s=new sr(e,t+1);let r=pn();return this.dr.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new sr(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sr{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Et.comparator(t.key,e.key)||gt(t.wr,e.wr)}static Ar(t,e){return gt(t.wr,e.wr)||Et.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ft(sr.Er)}checkEmpty(t){return At.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Hn(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.br=this.br.add(new sr(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return At.resolve(i)}lookupMutationBatch(t,e){return At.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),r=s<0?0:s;return At.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return At.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return At.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sr(e,0),s=new sr(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([n,s],(t=>{const e=this.Dr(t.wr);r.push(e)})),At.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ft(gt);return e.forEach((t=>{const e=new sr(t,0),s=new sr(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,s],(t=>{n=n.add(t.wr)}))})),At.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Et.isDocumentKey(r)||(r=r.child(""));const i=new sr(new Et(r),0);let o=new Ft(gt);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.wr)),!0)}),i),At.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Z(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return At.forEach(e.mutations,(s=>{const r=new sr(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new sr(e,0),s=this.br.firstAfterOrEqual(n);return At.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,At.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this.Mr=t,this.docs=new Ot(Et.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return At.resolve(n?n.document.mutableCopy():me.newInvalidDocument(e))}getEntries(t,e){let n=on();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():me.newInvalidDocument(t))})),At.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=on();const i=e.path,o=new Et(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||St(bt(o),n)<=0||(s.has(o.key)||tn(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return At.resolve(r)}getAllFromCollectionGroup(t,e,n,s){J()}Or(t,e){return At.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new or(this)}getSize(t){return At.resolve(this.size)}}class or extends class{constructor(){this.changes=new sn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,me.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?At.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)})),At.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.persistence=t,this.Nr=new sn((t=>qe(t)),Be),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nr,this.targetCount=0,this.kr=Xs.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),At.resolve()}getLastRemoteSnapshotVersion(t){return At.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return At.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),At.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),At.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Xs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,At.resolve()}updateTargetData(t,e){return this.Kn(e),At.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,At.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Nr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),At.waitFor(r).next((()=>s))}getTargetCount(t){return At.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return At.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),At.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),At.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),At.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return At.resolve(n)}containsKey(t,e){return At.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Nt(0),this.Kr=!1,this.Kr=!0,this.$r=new er,this.referenceDelegate=t(this),this.Ur=new ar(this),this.indexManager=new Hs,this.remoteDocumentCache=new ir((t=>this.referenceDelegate.Wr(t))),this.serializer=new Gs(e),this.Gr=new Zs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new rr(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){H("MemoryPersistence","Starting transaction:",t);const s=new cr(this.Qr.next());return this.referenceDelegate.zr(),n(s).next((t=>this.referenceDelegate.jr(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Hr(t,e){return At.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class cr extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class hr{constructor(t){this.persistence=t,this.Jr=new nr,this.Yr=null}static Zr(t){return new hr(t)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),At.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),At.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),At.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return At.forEach(this.Xr,(n=>{const s=Et.fromPath(n);return this.ei(t,s).next((t=>{t||e.removeEntry(s,yt.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return At.or([()=>At.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=pn(),s=pn();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new lr(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=d()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(f())>0?6:4}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const r={result:null};return this.Yi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Zi(t,e,s,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new dr;return this.Xi(t,e,n).next((s=>{if(r.result=s,this.zi)return this.es(t,e,n,s.size)}))})).next((()=>r.result))}es(t,e,n,s){return n.documentReadCount<this.ji?(Q()<=c.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),At.resolve()):(Q()<=c.DEBUG&&H("QueryEngine","Query:",Ze(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Q()<=c.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,He(e))):At.resolve())}Yi(t,e){if($e(e))return At.resolve(null);let n=He(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Xe(e,null,"F"),n=He(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=pn(...s);return this.Ji.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.ts(e,s);return this.ns(e,i,r,n.readTime)?this.Yi(t,Xe(e,null,"F")):this.rs(t,i,e,n)}))))})))))}Zi(t,e,n,s){return $e(e)||s.isEqual(yt.min())?At.resolve(null):this.Ji.getDocuments(t,n).next((r=>{const i=this.ts(e,r);return this.ns(e,i,n,s)?At.resolve(null):(Q()<=c.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ze(e)),this.rs(t,i,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=yt.fromTimestamp(1e9===s?new mt(n+1,0):new mt(n,s));return new It(r,Et.empty(),e)}(s,-1)).next((t=>t)))}))}ts(t,e){let n=new Ft(en(t));return e.forEach(((e,s)=>{tn(t,s)&&(n=n.add(s))})),n}ns(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Xi(t,e,n){return Q()<=c.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ze(e)),this.Ji.getDocumentsMatchingQuery(t,e,It.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Ot(gt),this._s=new sn((t=>qe(t)),Be),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Js(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}async function pr(t,e){const n=tt(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=pn();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function mr(t){const e=tt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function yr(t,e){const n=tt(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const o=[];e.targetChanges.forEach(((i,a)=>{const u=r.get(a);if(!u)return;o.push(n.Ur.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,i.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);var h,l,d;null!==e.targetMismatches.get(a)?c=c.withResumeToken(jt.EMPTY_BYTE_STRING,yt.min()).withLastLimboFreeSnapshotVersion(yt.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,s)),r=r.insert(a,c),l=c,d=i,(0===(h=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(t,c))}));let a=on(),u=pn();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=pn(),r=pn();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=on();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(yt.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):H("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Ps:s,Is:r}}))}(t,i,e.documentUpdates).next((t=>{a=t.Ps,u=t.Is}))),!s.isEqual(yt.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return At.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.os=r,t)))}function vr(t,e){const n=tt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function wr(t,e,n){const s=tt(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(o){if(!kt(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function _r(t,e,n){const s=tt(t);let r=yt.min(),i=pn();return s.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const s=tt(t),r=s._s.get(n);return void 0!==r?At.resolve(s.os.get(r)):s.Ur.getTargetData(e,n)}(s,t,He(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.ss.getDocumentsMatchingQuery(t,e,n?r:yt.min(),n?i:pn()))).next((t=>(function(t,e,n){let s=t.us.get(e)||yt.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.us.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Ts:i})))))}class Tr{constructor(){this.activeTargetIds=mn}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Er{constructor(){this.so=new Tr,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Tr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{_o(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=null;function Cr(){return null===Sr?Sr=268435456+Math.round(2147483648*Math.random()):Sr++,"0x"+Sr.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ar={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="WebChannelConnection";class Dr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${s}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get Fo(){return!1}Mo(t,e,n,s,r){const i=Cr(),o=this.xo(t,e.toUriEncodedString());H("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,s,r),this.No(t,o,a,n).then((e=>(H("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw X("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,s,r,i){return this.Mo(t,e,n,s,r)}Oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+$,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Ar[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const r=Cr();return new Promise(((i,o)=>{const a=new L;a.setWithCredentials(!0),a.listenOnce(P.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case V.NO_ERROR:const e=a.getResponseJson();H(Nr,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),i(e);break;case V.TIMEOUT:H(Nr,`RPC '${t}' ${r} timed out`),o(new nt(et.DEADLINE_EXCEEDED,"Request time out"));break;case V.HTTP_ERROR:const n=a.getStatus();if(H(Nr,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(e)>=0?e:et.UNKNOWN}(e.status);o(new nt(t,e.message))}else o(new nt(et.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new nt(et.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(Nr,`RPC '${t}' ${r} completed.`)}}));const u=JSON.stringify(s);H(Nr,`RPC '${t}' ${r} sending request:`,s),a.send(e,"POST",u,n,15)}))}Bo(t,e,n){const s=Cr(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=B(),o=q(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new M({})),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");H(Nr,`Creating RPC '${t}' stream ${s}: ${c}`,a);const h=i.createWebChannel(c,a);let l=!1,d=!1;const f=new kr({Io:e=>{d?H(Nr,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(H(Nr,`Opening RPC '${t}' stream ${s} transport.`),h.open(),l=!0),H(Nr,`RPC '${t}' stream ${s} sending:`,e),h.send(e))},To:()=>h.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return g(h,O.EventType.OPEN,(()=>{d||(H(Nr,`RPC '${t}' stream ${s} transport opened.`),f.yo())})),g(h,O.EventType.CLOSE,(()=>{d||(d=!0,H(Nr,`RPC '${t}' stream ${s} transport closed`),f.So())})),g(h,O.EventType.ERROR,(e=>{d||(d=!0,X(Nr,`RPC '${t}' stream ${s} transport errored:`,e),f.So(new nt(et.UNAVAILABLE,"The operation could not be completed")))})),g(h,O.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];Z(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){H(Nr,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Jn[t];if(void 0!==e)return ts(e)}(e),r=o.message;void 0===n&&(n=et.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new nt(n,r)),h.close()}else H(Nr,`RPC '${t}' stream ${s} received:`,r),f.bo(r)}})),g(o,U.STAT_EVENT,(e=>{e.stat===F.PROXY?H(Nr,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===F.NOPROXY&&H(Nr,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function Rr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){return new vs(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,n=1e3,s=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,s,r,i,o,a){this.ui=t,this.Ho=n,this.Jo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Lr(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===et.RESOURCE_EXHAUSTED?(W(e.toString()),W("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===et.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new nt(et.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return H("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Or extends Mr{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:J(),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Z(void 0===e||"string"==typeof e),jt.fromBase64String(e||"")):(Z(void 0===e||e instanceof Buffer||e instanceof Uint8Array),jt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?et.UNKNOWN:ts(t.code);return new nt(e,t.message||"")}(a);n=new hs(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ks(t,s.document.name),i=bs(s.document.updateTime),o=s.document.createTime?bs(s.document.createTime):yt.min(),a=new ge({mapValue:{fields:s.document.fields}}),u=me.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new us(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ks(t,s.document),i=s.readTime?bs(s.readTime):yt.min(),o=me.newNoDocument(r,i),a=s.removedTargetIds||[];n=new us([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ks(t,s.document),i=s.removedTargetIds||[];n=new us([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:r}=t,i=new Yn(s,r),o=t.targetId;n=new cs(o,i)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return yt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yt.min():e.readTime?bs(e.readTime):yt.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Ds(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=je(s)?{documents:Ls(t,s)}:{query:Ms(t,s)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ts(t,e.resumeToken);const s=ws(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(yt.min())>0){n.readTime=_s(t,e.snapshotVersion.toTimestamp());const s=ws(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Ds(this.serializer),e.removeTarget=t,this.a_(e)}}class Pr extends Mr{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Z(!!t.streamToken),this.lastStreamToken=t.streamToken,Z(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=function(t,e){return t&&t.length>0?(Z(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?bs(t.updateTime):bs(e);return n.isEqual(yt.min())&&(n=bs(e)),new xn(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=bs(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Ds(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Bn)n={update:xs(t,e.key,e.value)};else if(e instanceof Gn)n={delete:As(t,e.key)};else if(e instanceof jn)n={update:xs(t,e.key,e.data),updateMask:Ks(e.fieldMask)};else{if(!(e instanceof Qn))return J();n={verify:As(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof In)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof An)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Nn)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw J()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:Es(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:J())),n;var s,r}(this.serializer,t)))};this.a_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new nt(et.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Mo(t,Ss(e,n),s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nt(et.UNKNOWN,t.toString())}))}Lo(t,e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Lo(t,Ss(e,n),s,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nt(et.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Fr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(W(e),this.D_=!1):H("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o((t=>{n.enqueueAndForget((async()=>{Hr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=tt(t);e.L_.add(4),await Br(e),e.q_.set("Unknown"),e.L_.delete(4),await qr(e)}(this))}))})),this.q_=new Fr(n,s)}}async function qr(t){if(Hr(t))for(const e of t.B_)await e(!0)}async function Br(t){for(const e of t.B_)await e(!1)}function jr(t,e){const n=tt(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Qr(n)?Gr(n):di(n).r_()&&zr(n,e))}function Kr(t,e){const n=tt(t),s=di(n);n.N_.delete(e),s.r_()&&$r(n,e),0===n.N_.size&&(s.r_()?s.o_():Hr(n)&&n.q_.set("Unknown"))}function zr(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(yt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}di(t).A_(e)}function $r(t,e){t.Q_.xe(e),di(t).R_(e)}function Gr(t){t.Q_=new ds({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.q_.v_()}function Qr(t){return Hr(t)&&!di(t).n_()&&t.N_.size>0}function Hr(t){return 0===tt(t).L_.size}function Wr(t){t.Q_=void 0}async function Xr(t){t.q_.set("Online")}async function Yr(t){t.N_.forEach(((e,n)=>{zr(t,e)}))}async function Jr(t,e){Wr(t),Qr(t)?(t.q_.M_(e),Gr(t)):t.q_.set("Unknown")}async function Zr(t,e,n){if(t.q_.set("Online"),e instanceof hs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.N_.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.N_.delete(s),t.Q_.removeTarget(s))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ti(t,s)}else if(e instanceof us?t.Q_.Ke(e):e instanceof cs?t.Q_.He(e):t.Q_.We(e),!n.isEqual(yt.min()))try{const e=await mr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.N_.get(s);r&&t.N_.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.N_.get(e);if(!s)return;t.N_.set(e,s.withResumeToken(jt.EMPTY_BYTE_STRING,s.snapshotVersion)),$r(t,e);const r=new $s(s.target,e,n,s.sequenceNumber);zr(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ti(t,r)}}async function ti(t,e,n){if(!kt(e))throw e;t.L_.add(1),await Br(t),t.q_.set("Offline"),n||(n=()=>mr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qr(t)}))}function ei(t,e){return e().catch((n=>ti(t,n,e)))}async function ni(t){const e=tt(t),n=fi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;si(e);)try{const t=await vr(e.localStore,s);if(null===t){0===e.O_.length&&n.o_();break}s=t.batchId,ri(e,t)}catch(r){await ti(e,r)}ii(e)&&oi(e)}function si(t){return Hr(t)&&t.O_.length<10}function ri(t,e){t.O_.push(e);const n=fi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ii(t){return Hr(t)&&!fi(t).n_()&&t.O_.length>0}function oi(t){fi(t).start()}async function ai(t){fi(t).p_()}async function ui(t){const e=fi(t);for(const n of t.O_)e.m_(n.mutations)}async function ci(t,e,n){const s=t.O_.shift(),r=Wn.from(s,e,n);await ei(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ni(t)}async function hi(t,e){e&&fi(t).V_&&await async function(t,e){if(function(t){switch(t){default:return J();case et.CANCELLED:case et.UNKNOWN:case et.DEADLINE_EXCEEDED:case et.RESOURCE_EXHAUSTED:case et.INTERNAL:case et.UNAVAILABLE:case et.UNAUTHENTICATED:return!1;case et.INVALID_ARGUMENT:case et.NOT_FOUND:case et.ALREADY_EXISTS:case et.PERMISSION_DENIED:case et.FAILED_PRECONDITION:case et.ABORTED:case et.OUT_OF_RANGE:case et.UNIMPLEMENTED:case et.DATA_LOSS:return!0}}(n=e.code)&&n!==et.ABORTED){const n=t.O_.shift();fi(t).s_(),await ei(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ni(t)}var n}(t,e),ii(t)&&oi(t)}async function li(t,e){const n=tt(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=Hr(n);n.L_.add(3),await Br(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qr(n)}function di(t){return t.K_||(t.K_=function(t,e,n){const s=tt(t);return s.w_(),new Or(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Eo:Xr.bind(null,t),Ro:Yr.bind(null,t),mo:Jr.bind(null,t),d_:Zr.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),Qr(t)?Gr(t):t.q_.set("Unknown")):(await t.K_.stop(),Wr(t))}))),t.K_}function fi(t){return t.U_||(t.U_=function(t,e,n){const s=tt(t);return s.w_(),new Pr(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ai.bind(null,t),mo:hi.bind(null,t),f_:ui.bind(null,t),g_:ci.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await ni(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gi{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new gi(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nt(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pi(t,e){if(W("AsyncQueue",`${e}: ${t}`),kt(t))return new nt(et.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Et.comparator(e.key,n.key):(t,e)=>Et.comparator(t.key,e.key),this.keyedMap=un(),this.sortedSet=new Ot(this.comparator)}static emptySet(t){return new mi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof mi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new mi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.W_=new Ot(Et.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):J():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class vi{constructor(t,e,n,s,r,i,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new vi(t,e,mi.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ye(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class _i{constructor(){this.queries=Ti(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=tt(t),s=n.queries;n.queries=Ti(),s.forEach(((t,n)=>{for(const s of n.j_)s.onError(e)}))}(this,new nt(et.ABORTED,"Firestore shutting down"))}}function Ti(){return new sn((t=>Je(t)),Ye)}function Ei(t,e){const n=tt(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(r)&&(s=!0);e.z_=r}}s&&Ii(n)}function bi(t,e,n){const s=tt(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function Ii(t){t.Y_.forEach((t=>{t.next()}))}var Si,Ci;(Ci=Si||(Si={})).ea="default",Ci.Cache="cache";class Ai{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new vi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=vi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Si.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.key=t}}class Ni{constructor(t){this.key=t}}class Di{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pn(),this.mutatedKeys=pn(),this.Aa=en(t),this.Ra=new mi(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new yi,s=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),h=tn(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ga(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Aa(h,a)>0||u&&this.Aa(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ra:i,fa:n,ns:o,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const i=t.fa.G_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return n(t)-n(e)}(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),s=null!=s&&s;const o=e&&!s?this.ya():[],a=0===this.da.size&&this.current&&!s?1:0,u=a!==this.Ea;return this.Ea=a,0!==i.length||u?{snapshot:new vi(this.query,t.Ra,r,i,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yi,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=pn(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Ni(t))})),this.da.forEach((n=>{t.has(n)||e.push(new ki(n))})),e}ba(t){this.Ta=t.Ts,this.da=pn();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return vi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Ri{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xi{constructor(t){this.key=t,this.va=!1}}class Li{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new sn((t=>Je(t)),Ye),this.Ma=new Map,this.xa=new Set,this.Oa=new Ot(Et.comparator),this.Na=new Map,this.La=new nr,this.Ba={},this.ka=new Map,this.qa=Xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Mi(t,e,n=!0){const s=eo(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await Pi(s,e,n,!0),r}async function Oi(t,e){const n=eo(t);await Pi(n,e,!0,!1)}async function Pi(t,e,n,s){const r=await function(t,e){const n=tt(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ur.getTargetData(t,e).next((r=>r?(s=r,At.resolve(s)):n.Ur.allocateTargetId(t).next((r=>(s=new $s(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.os.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}(t.localStore,He(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await async function(t,e,n,s,r){t.Ka=(e,n,s)=>async function(t,e,n,s){let r=e.view.ma(n);r.ns&&(r=await _r(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=s&&null!=s.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,i,o);return Wi(t,e.targetId,a.wa),a.snapshot}(t,e,n,s);const i=await _r(t.localStore,e,!0),o=new Di(e,i.Ts),a=o.ma(i.documents),u=as.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),c=o.applyChanges(a,t.isPrimaryClient,u);Wi(t,n,c.wa);const h=new Ri(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}(t,e,i,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&jr(t.remoteStore,r),a}async function Vi(t,e,n){const s=tt(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter((t=>!Ye(t,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await wr(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Kr(s.remoteStore,r.targetId),Qi(s,r.targetId)})).catch(Ct)):(Qi(s,r.targetId),await wr(s.localStore,r.targetId,!0))}async function Fi(t,e){const n=tt(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Kr(n.remoteStore,s.targetId))}async function Ui(t,e,n){const s=function(t){const e=tt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ki.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zi.bind(null,e),e}(t);try{const t=await function(t,e){const n=tt(t),s=mt.now(),r=e.reduce(((t,e)=>t.add(e.key)),pn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=on(),u=pn();return n.cs.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Un(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new jn(t.key,e,pe(e.value.mapValue),Ln.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:cn(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Ba[t.currentUser.toKey()];s||(s=new Ot(gt)),s=s.insert(e,n),t.Ba[t.currentUser.toKey()]=s}(s,t.batchId,n),await Ji(s,t.changes),await ni(s.remoteStore)}catch(r){const t=pi(r,"Failed to persist write");n.reject(t)}}async function qi(t,e){const n=tt(t);try{const t=await yr(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Na.get(e);s&&(Z(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.va=!0:t.modifiedDocuments.size>0?Z(s.va):t.removedDocuments.size>0&&(Z(s.va),s.va=!1))})),await Ji(n,t,e)}catch(s){await Ct(s)}}function Bi(t,e,n){const s=tt(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Fa.forEach(((n,s)=>{const r=s.view.Z_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=tt(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.j_)r.Z_(e)&&(s=!0)})),s&&Ii(n)}(s.eventManager,e),t.length&&s.Ca.d_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ji(t,e,n){const s=tt(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let t=new Ot(Et.comparator);t=t.insert(i,me.newNoDocument(i,yt.min()));const n=pn().add(i),r=new os(yt.min(),new Map,new Ot(gt),t,n);await qi(s,r),s.Oa=s.Oa.remove(i),s.Na.delete(e),Yi(s)}else await wr(s.localStore,e,!1).then((()=>Qi(s,e,n))).catch(Ct)}async function Ki(t,e){const n=tt(t),s=e.batch.batchId;try{const t=await function(t,e){const n=tt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=At.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Z(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=pn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Gi(n,s,null),$i(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ji(n,t)}catch(r){await Ct(r)}}async function zi(t,e,n){const s=tt(t);try{const t=await function(t,e){const n=tt(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Z(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Gi(s,e,n),$i(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ji(s,t)}catch(r){await Ct(r)}}function $i(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function Gi(t,e,n){const s=tt(t);let r=s.Ba[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function Qi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||Hi(t,e)}))}function Hi(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(Kr(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yi(t))}function Wi(t,e,n){for(const s of n)s instanceof ki?(t.La.addReference(s.key,e),Xi(t,s)):s instanceof Ni?(H("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||Hi(t,s.key)):J()}function Xi(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(s),Yi(t))}function Yi(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Et(wt.fromString(e)),s=t.qa.next();t.Na.set(s,new xi(n)),t.Oa=t.Oa.insert(n,s),jr(t.remoteStore,new $s(He(ze(n.path)),s,"TargetPurposeLimboResolution",Nt.oe))}}async function Ji(t,e,n){const s=tt(t),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach(((t,a)=>{o.push(s.Ka(a,e,n).then((t=>{var e;if((t||n)&&s.isPrimaryClient){const r=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;s.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);const e=lr.Wi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.Ca.d_(r),await async function(t,e){const n=tt(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>At.forEach(e,(e=>At.forEach(e.$i,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>At.forEach(e.Ui,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(s){if(!kt(s))throw s;H("LocalStore","Failed to update sequence numbers: "+s)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.os.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.os=n.os.insert(t,r)}}}(s.localStore,i))}async function Zi(t,e){const n=tt(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const t=await pr(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).ka.forEach((t=>{t.forEach((t=>{t.reject(new nt(et.CANCELLED,r))}))})),s.ka.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ji(n,t.hs)}var s,r}function to(t,e){const n=tt(t),s=n.Na.get(e);if(s&&s.va)return pn().add(s.key);{let t=pn();const s=n.Ma.get(e);if(!s)return t;for(const e of s){const s=n.Fa.get(e);t=t.unionWith(s.view.Va)}return t}}function eo(t){const e=tt(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=to.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ji.bind(null,e),e.Ca.d_=Ei.bind(null,e.eventManager),e.Ca.$a=bi.bind(null,e.eventManager),e}class no{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new gr(t,e,n,s)}(this.persistence,new fr,t.initialUser,this.serializer)}createPersistence(t){return new ur(hr.Zr,this.serializer)}createSharedClientState(t){return new Er}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class so{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zi.bind(null,this.syncEngine),await async function(t,e){const n=tt(t);e?(n.L_.delete(2),await qr(n)):e||(n.L_.add(2),await Br(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _i}createDatastore(t){const e=xr(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Dr(s));var s;return function(t,e,n,s){return new Vr(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Bi(this.syncEngine,t,0),i=Ir.D()?new Ir:new br,new Ur(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Li(t,e,n,s,r,i);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=tt(t);H("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await Br(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):W("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=z.UNAUTHENTICATED,this.clientId=ft.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{H("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(H("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nt(et.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=pi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function oo(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await pr(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ao(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await oo(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!function(t){return"FirebaseError"===t.name?t.code===et.FAILED_PRECONDITION||t.code===et.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(s))throw s;X("Error using user provided cache. Falling back to memory cache: "+s),await oo(t,new no)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await oo(t,new no);return t._offlineComponents}(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>li(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>li(e.remoteStore,n))),t._onlineComponents=e}async function uo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await ao(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await ao(t,new so))),t._onlineComponents}async function co(t){const e=await uo(t),n=e.eventManager;return n.onListen=Mi.bind(null,e.syncEngine),n.onUnlisten=Vi.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Oi.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Fi.bind(null,e.syncEngine),n}function ho(t,e,n={}){const s=new st;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new ro({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=tt(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const t=i.j_.indexOf(e);t>=0&&(i.j_.splice(t,1),0===i.j_.length?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}(t,o))),n.fromCache&&"server"===s.source?r.reject(new nt(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Ai(n,i,{includeMetadataChanges:!0,_a:!0});return async function(e,n){const s=tt(e);let r=3;const i=n.query;let o=s.queries.get(i);o?!o.H_()&&n.J_()&&(r=2):(o=new wi,r=n.J_()?0:1);try{switch(r){case 0:o.z_=await s.onListen(i,!0);break;case 1:o.z_=await s.onListen(i,!1);break;case 2:await s.onFirstRemoteStoreListen(i)}}catch(t){const s=pi(t,`Initialization of query '${Ze(n.query)}' failed`);return void n.onError(s)}s.queries.set(i,o),o.j_.push(n),n.Z_(s.onlineState),o.z_&&n.X_(o.z_)&&Ii(s)}(t,o)}(await co(t),t.asyncQueue,e,n,s))),s.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function lo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const fo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){if(!n)throw new nt(et.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function po(t){if(!Et.isDocumentKey(t))throw new nt(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mo(t){if(Et.isDocumentKey(t))throw new nt(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":J()}function vo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new nt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yo(t);throw new nt(et.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new nt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new nt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new nt(et.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new nt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new nt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new nt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class _o{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new nt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new it;switch(t.type){case"firstParty":return new ct(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new nt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=fo.get(t);e&&(H("ComponentProvider","Removing Datastore"),fo.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new To(this.firestore,t,this._query)}}class Eo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Eo(this.firestore,t,this._key)}}class bo extends To{constructor(t,e,n){super(t,e,ze(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Eo(this.firestore,null,new Et(t))}withConverter(t){return new bo(this.firestore,t,this._path)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Lr(this,"async_queue_retry"),this.Eu=()=>{const t=Rr();t&&H("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const t=Rr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=Rr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise((()=>{}));const e=new st;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.uu.push(t),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!kt(t))throw t;H("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(t){const e=this.au.then((()=>(this.Pu=!0,t().catch((t=>{this.hu=t,this.Pu=!1;throw W("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Pu=!1,t))))));return this.au=e,e}enqueueAfterDelay(t,e,n){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=gi.createAndSchedule(this,t,e,n,(t=>this.Vu(t)));return this.lu.push(s),s}du(){this.hu&&J()}verifyOperationInProgress(){}async mu(){let t;do{t=this.au,await t}while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then((()=>{this.lu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.lu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.mu()}))}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class So extends _o{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Io,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ko(this),this._firestoreClient.terminate()}}function Co(t,e){const n="object"==typeof t?t:o(),s="string"==typeof t?t:e||"(default)",r=a(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=u("firestore");t&&function(t,e,n,s={}){var r;const i=(t=vo(t,_o))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&X("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=z.MOCK_USER;else{e=h(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new nt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new z(i)}t._authCredentials=new ot(new rt(e,n))}}(r,...t)}return r}function Ao(t){return t._firestoreClient||ko(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ko(t){var e,n,s;const r=t._freezeSettings(),i=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",u=t._persistenceKey,new Xt(o,a,u,(c=r).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,lo(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,u,c;t._firestoreClient=new io(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this._byteString=t}static fromBase64String(t){try{return new No(jt.fromBase64String(t))}catch(e){throw new nt(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new No(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new nt(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new nt(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new nt(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=/^__.*__$/;class Oo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new jn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}function Po(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Vo{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.yu(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new Vo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Du:!1});return s.vu(t),s}Cu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Ho(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(0===t.length)throw this.Mu("Document fields must not be empty");if(Po(this.wu)&&Mo.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class Fo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||xr(t)}Nu(t,e,n,s=!1){return new Vo({wu:t,methodName:e,Ou:n,path:Tt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(t){const e=t._freezeSettings(),n=xr(t._databaseId);return new Fo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qo(t,e,n,s,r,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,r);zo("Data must be an object, but it was:",o,s);const a=jo(s,o);let u,c;if(i.merge)u=new qt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=$o(e,s,n);if(!o.contains(r))throw new nt(et.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Wo(t,r)||t.push(r)}u=new qt(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new Oo(new ge(a),u,c)}function Bo(t,e){if(Ko(t=i(t)))return zo("Unsupported field value:",e,t),jo(t,e);if(t instanceof Ro)return function(t,e){if(!Po(e.wu))throw e.Mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&4!==e.wu)throw e.Mu("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Bo(r,e.Fu(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=i(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return wn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:_s(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_s(e.serializer,n)}}if(t instanceof xo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof No)return{bytesValue:Ts(e.serializer,t._byteString)};if(t instanceof Eo){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Is(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Lo)return n=e,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw n.Mu("VectorValues must only contain numeric values.");return yn(n.serializer,t)}))}}}}};var n;throw e.Mu(`Unsupported field value: ${yo(t)}`)}(t,e)}function jo(t,e){const n={};return Mt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(t,((t,s)=>{const r=Bo(s,e.bu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ko(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof xo||t instanceof No||t instanceof Eo||t instanceof Ro||t instanceof Lo)}function zo(t,e,n){if(!Ko(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=yo(n);throw"an object"===s?e.Mu(t+" a custom object"):e.Mu(t+" "+s)}var s}function $o(t,e,n){if((e=i(e))instanceof Do)return e._internalPath;if("string"==typeof e)return Qo(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const Go=new RegExp("[~\\*/\\[\\]]");function Qo(t,e,n){if(e.search(Go)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Do(...e.split("."))._internalPath}catch(s){throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new nt(et.INVALID_ARGUMENT,a+t+u)}function Wo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Eo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Yo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Jo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Yo extends Xo{data(){return super.data()}}function Jo(t,e){return"string"==typeof e?Qo(t,e):e instanceof Do?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{}class ta extends Zo{}class ea extends ta{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new ea(t,e,n)}_apply(t){const e=this._parse(t);return ia(t._query,e),new To(t.firestore,t.converter,We(t._query,e))}_parse(t){const e=Uo(t.firestore),n=function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new nt(et.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){ra(o,i);const e=[];for(const n of o)e.push(sa(s,t,n));a={arrayValue:{values:e}}}else a=sa(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||ra(o,i),a=function(t,e,n,s=!1){return Bo(n,t.Nu(s?4:3,e))}(n,e,o,"in"===i||"not-in"===i);return be.create(r,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class na extends Zo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new na(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Ie.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const r of s)ia(n,r),n=We(n,r)}(t._query,e),new To(t.firestore,t.converter,We(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function sa(t,e,n){if("string"==typeof(n=i(n))){if(""===n)throw new nt(et.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ge(e)&&-1!==n.indexOf("/"))throw new nt(et.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(wt.fromString(n));if(!Et.isDocumentKey(s))throw new nt(et.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ae(t,new Et(s))}if(n instanceof Eo)return ae(t,n._key);throw new nt(et.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yo(n)}.`)}function ra(t,e){if(!Array.isArray(t)||0===t.length)throw new nt(et.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ia(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new nt(et.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new nt(et.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class aa extends Xo{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Jo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ua extends aa{data(t={}){return super.data(t)}}class ca{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new oa(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ua(this._firestore,this._userDataWriter,n.key,n,new oa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new nt(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new ua(t._firestore,t._userDataWriter,n.doc.key,n.doc,new oa(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new ua(t._firestore,t._userDataWriter,e.doc.key,e.doc,new oa(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:ha(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ha(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class la extends class{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw J()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Lt(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertVectorValue(t){var e,n,s;const r=null===(s=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===s?void 0:s.map((t=>$t(t.doubleValue)));return new Lo(r)}convertGeoPoint(t){return new xo($t(t.latitude),$t(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ht(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wt(t));default:return null}}convertTimestamp(t){const e=zt(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=wt.fromString(t);Z(zs(n));const s=new Yt(n.get(1),n.get(3)),r=new Et(n.popFirst(5));return s.isEqual(e)||W(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new No(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Eo(this.firestore,null,e)}}function da(t){t=vo(t,To);const e=vo(t.firestore,So),n=Ao(e),s=new la(e);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new nt(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),ho(n,t._query).then((n=>new ca(e,s,t,n)))}function fa(t,e,n){t=vo(t,Eo);const s=vo(t.firestore,So),r=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);return function(t,e){return function(t,e){const n=new st;return t.asyncQueue.enqueueAndForget((async()=>Ui(await function(t){return uo(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Ao(t),e)}(s,[qo(Uo(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Ln.none())])}!function(t,r=!0){$=l,e(new n("firestore",((t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),i=new So(new at(t.getProvider("auth-internal")),new lt(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new nt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yt(t.options.projectId,e)}(s,e),s);return n=Object.assign({useFetchStreams:r},n),i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),s(K,"4.7.2",t),s(K,"4.7.2","esm2017")}();const ga=g({data:()=>({email:"",password:"",username:"",cedula:"",errorMessage:null}),methods:{async isEmailAlreadyRegistered(){const t=function(t,e,...n){let s=[];e instanceof Zo&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof na)).length,n=t.filter((t=>t instanceof ea)).length;if(e>1||e>0&&n>0)throw new nt(et.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}(function(t,e,...n){if(t=i(t),go("collection","path",e),t instanceof _o){const s=wt.fromString(e,...n);return mo(s),new bo(t,null,s)}{if(!(t instanceof Eo||t instanceof bo))throw new nt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(wt.fromString(e,...n));return mo(s),new bo(t.firestore,null,s)}}(Co(),"users"),function(t,e,n){const s=e,r=Jo("where",t);return ea._create(r,s,n)}("email","==",this.email));return!(await da(t)).empty},async signUp(){const t=p(),e=Co();try{if(await this.isEmailAlreadyRegistered())return void(this.errorMessage="El correo electrónico ya está registrado.");const n=(await m(t,this.email,this.password)).user;await fa(function(t,e,...n){if(t=i(t),1===arguments.length&&(e=ft.newId()),go("doc","path",e),t instanceof _o){const s=wt.fromString(e,...n);return po(s),new Eo(t,null,new Et(s))}{if(!(t instanceof Eo||t instanceof bo))throw new nt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(wt.fromString(e,...n));return po(s),new Eo(t.firestore,t instanceof bo?t.converter:null,new Et(s))}}(e,"users",n.uid),{uid:n.uid,name:this.username,email:this.email,cedula:this.cedula,points:0}),await y(n),this.errorMessage="Cuenta creada. Se ha enviado un correo electrónico de verificación.",v({url:"/pages/login/login"})}catch(n){this.errorMessage="Error durante el registro: "+n.message}},goToLogin(){v({url:"/pages/login/login"})},redirectToForgotPassword(){v({url:"/pages/forgotPassword/forgotPassword"})}}},[["render",function(t,e,n,s,r,i){const o=A,a=T,u=k,c=N;return E(),w(a,{class:"signup-page"},{default:_((()=>[b(a,{class:"back-button",onClick:i.goToLogin},{default:_((()=>[b(o,null,{default:_((()=>[I("← Volver al inicio de sesión")])),_:1})])),_:1},8,["onClick"]),b(a,{class:"overlay-container"},{default:_((()=>[b(a,{class:"uni-container"},{default:_((()=>[b(o,{class:"uni-title"},{default:_((()=>[I("Crear una Cuenta")])),_:1}),b(u,{class:"input",modelValue:r.username,"onUpdate:modelValue":e[0]||(e[0]=t=>r.username=t),placeholder:"Ingrese su nombre de usuario"},null,8,["modelValue"]),b(u,{class:"input",modelValue:r.email,"onUpdate:modelValue":e[1]||(e[1]=t=>r.email=t),placeholder:"Ingrese su correo electrónico"},null,8,["modelValue"]),b(u,{class:"input",modelValue:r.password,"onUpdate:modelValue":e[2]||(e[2]=t=>r.password=t),type:"password",placeholder:"Ingrese su contraseña"},null,8,["modelValue"]),b(u,{class:"input",modelValue:r.cedula,"onUpdate:modelValue":e[3]||(e[3]=t=>r.cedula=t),placeholder:"Ingrese su número de cédula"},null,8,["modelValue"]),b(c,{class:"uni-button signup-button",onClick:i.signUp},{default:_((()=>[I("Registrarse")])),_:1},8,["onClick"]),r.errorMessage?(E(),w(a,{key:0,class:"error-message"},{default:_((()=>[I(S(r.errorMessage),1)])),_:1})):C("",!0),b(a,{class:"forgot-password",onClick:i.redirectToForgotPassword},{default:_((()=>[b(o,null,{default:_((()=>[I("¿Olvidaste tu contraseña?")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d2c9425a"]]);export{ga as default};
