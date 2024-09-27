import{L as t,l as e,C as n,m as s,n as i,p as r,q as o,t as a,u as h,v as u,x as c,S as l,y as d,z as f,_ as g,g as p,A as m,c as y,w as v,i as w,o as T,d as E,h as _,B as S,e as C,f as b,F as I,D as A,j as k,E as N,k as D,H as R}from"./index-2V7Tzllp.js";var x,L,M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function s(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var s=e-this.blockSize,i=this.B,r=this.h,o=0;o<e;){if(0==r)for(;o<=s;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[r++]=t.charCodeAt(o++),r==this.blockSize){n(this,i),r=0;break}}else for(;o<e;)if(i[r++]=t[o++],r==this.blockSize){n(this,i),r=0;break}}this.h=r,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var i={};function r(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new s([0|t],0>t?-1:0)})):new s([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new s(e,0)}var a=r(0),h=r(1),u=r(16777216);function c(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new s(n,~t.h).add(h)}function f(t,e){return t.add(d(e))}function g(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function p(t,e){this.g=t,this.h=e}function m(t,e){if(c(e))throw Error("division by zero");if(c(t))return new p(a,a);if(l(t))return e=m(d(t),e),new p(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new p(d(e.g),e.h);if(30<t.g.length){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=h,s=e;0>=s.l(t);)n=y(n),s=y(s);var i=v(n,1),r=v(s,1);for(s=v(s,2),n=v(n,2);!c(s);){var u=r.add(s);0>=u.l(t)&&(i=i.add(n),r=u),s=v(s,1),n=v(n,1)}return e=f(t,i.j(e)),new p(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),u=(r=o(n)).j(e);l(u)||0<u.l(t);)u=(r=o(n-=s)).j(e);c(r)&&(r=h),i=i.add(r),t=f(t,u)}return new p(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new s(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],o=0;o<i;o++)r[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new s(r,t.h)}(t=s.prototype).m=function(){if(l(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.i(n);t+=(0<=s?s:4294967296+s)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(c(this))return"0";if(l(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,s="";;){var i=m(n,e).g,r=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(c(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:c(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var o=i+(65535&this.i(r))+(65535&t.i(r)),a=(o>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);i=a>>>16,o&=65535,a&=65535,n[r]=a<<16|o}return new s(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(c(this)||c(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var h=this.i(i)>>>16,f=65535&this.i(i),p=t.i(r)>>>16,m=65535&t.i(r);n[2*i+2*r]+=f*m,g(n,2*i+2*r),n[2*i+2*r+1]+=h*m,g(n,2*i+2*r+1),n[2*i+2*r+1]+=f*p,g(n,2*i+2*r+1),n[2*i+2*r+2]+=h*p,g(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new s(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new s(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new s(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new s(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,L=e,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=o,s.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=o(Math.pow(n,8)),i=a,r=0;r<e.length;r+=8){var h=Math.min(8,e.length-r),u=parseInt(e.substring(r,r+h),n);8>h?(h=o(Math.pow(n,h)),i=i.j(h).add(o(u))):i=(i=i.j(s)).add(o(u))}return i},x=s}).apply(void 0!==M?M:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var P,O,V,F,U,q,j,B,K,z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof z&&z];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,s){if(s)t:{var i=n;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in i))break t;i=i[o]}(s=s(r=i[t=t[t.length-1]]))!=r&&null!=s&&e(i,t,{configurable:!0,writable:!0,value:s})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,s=!1,i={next:function(){if(!s&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return s=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t,e){return e}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var s=s||{},i=this||self;function r(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function h(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:h).apply(null,arguments)}function c(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(r(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let i=0;i<s;i++)t[n+i]=e[i]}else t.push(e)}}function g(t){return/^[\s\xa0]*$/.test(t)}function p(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==p().indexOf("Gecko")||-1!=p().toLowerCase().indexOf("webkit")&&-1==p().indexOf("Edge")||-1!=p().indexOf("Trident")||-1!=p().indexOf("MSIE")||-1!=p().indexOf("Edge"));function v(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<T.length;e++)n=T[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function S(t){i.setTimeout((()=>{throw t}),0)}function C(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var b=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new I),(t=>t.reset()));class I{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,k=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=b.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const t=i.Promise.resolve(void 0);A=()=>{t.then(R)}};var R=()=>{for(var t;t=C();){try{t.h.call(t.g)}catch(n){S(n)}var e=b;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}k=!1};function x(){this.s=this.s,this.C=this.C}function L(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},L.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function $(t,e){if(L.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:G[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$.aa.h.call(this)}}l($,L);var G={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),Q=0;function W(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Q,this.da=this.fa=!1}function X(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Array.prototype.indexOf.call(i,e,void 0);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(X(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.da&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}Y.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Z(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new W(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function nt(t,e,n,s,i){if(s&&s.once)return it(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)nt(t,e[r],n,s,i);return null}return n=lt(n),t&&t[H]?t.K(e,n,o(s)?!!s.capture:!!s,i):st(t,e,n,!1,s,i)}function st(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,h=ut(t);if(h||(t[tt]=h=new Y(t)),(n=h.add(e,n,s,a,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ht;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)M||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(at(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function it(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)it(t,e[r],n,s,i);return null}return n=lt(n),t&&t[H]?t.L(e,n,o(s)?!!s.capture:!!s,i):st(t,e,n,!0,s,i)}function rt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)rt(t,e[r],n,s,i);else s=o(s)?!!s.capture:!!s,n=lt(n),t&&t[H]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Z(r=t.g[e],n,s,i))&&(X(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ut(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,s,i)),(n=-1<t?e[t]:null)&&ot(n))}function ot(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[H])J(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(at(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ut(e))?(J(n,t),0==n.h&&(n.src=null,e[tt]=null)):X(t)}}}function at(t){return t in et?et[t]:et[t]="on"+t}function ht(t,e){if(t.da)t=!0;else{e=new $(e,this);var n=t.listener,s=t.ha||t.src;t.fa&&ot(t),t=n.call(s,e)}return t}function ut(t){return(t=t[tt])instanceof Y?t:null}var ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function lt(t){return"function"==typeof t?t:(t[ct]||(t[ct]=function(e){return t.handleEvent(e)}),t[ct])}function dt(){x.call(this),this.i=new Y(this),this.M=this,this.F=null}function ft(t,e){var n,s=t.F;if(s)for(n=[];s;s=s.F)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new L(e,t);else if(e instanceof L)e.target=e.target||t;else{var i=e;E(e=new L(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=gt(o,s,!0,e)&&i}if(i=gt(o=e.g=t,s,!0,e)&&i,i=gt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=gt(o=e.g=n[r],s,!1,e)&&i}function gt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.da&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.fa&&J(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}function pt(t,e,n){if("function"==typeof t)n&&(t=u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function mt(t){t.g=pt((()=>{t.g=null,t.i&&(t.i=!1,mt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(dt,x),dt.prototype[H]=!0,dt.prototype.removeEventListener=function(t,e,n,s){rt(this,t,e,n,s)},dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)X(n[s]);delete e.g[t],e.h--}}this.F=null},dt.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},dt.prototype.L=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class yt extends x{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(t){x.call(this),this.h=t,this.g={}}l(vt,x);var wt=[];function Tt(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ot(t)}),t),t.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Tt(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Et=i.JSON.stringify,_t=i.JSON.parse;function St(){}function Ct(t){return t.h||(t.h=t.i())}function bt(){}St.prototype.h=null;var It={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function At(){L.call(this,"d")}function kt(){L.call(this,"c")}l(At,L),l(kt,L);var Nt={},Dt=null;function Rt(){return Dt=Dt||new dt}function xt(t){L.call(this,Nt.La,t)}function Lt(t){const e=Rt();ft(e,new xt(e))}function Mt(t,e){L.call(this,Nt.STAT_EVENT,t),this.stat=e}function Pt(t){const e=Rt();ft(e,new Mt(e,t))}function Ot(t,e){L.call(this,Nt.Ma,t),this.size=e}function Vt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){t()}),e)}function Ft(){this.g=!0}function Ut(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Et(n)}catch(a){return e}}(t,n)+(s?" "+s:"")}))}Nt.La="serverreachability",l(xt,L),Nt.STAT_EVENT="statevent",l(Mt,L),Nt.Ma="timingevent",l(Ot,L),Ft.prototype.xa=function(){this.g=!1},Ft.prototype.info=function(){};var qt,jt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Kt(){}function zt(t,e,n,s){this.j=t,this.i=e,this.l=n,this.R=s||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $t}function $t(){this.i=null,this.g="",this.h=!1}l(Kt,St),Kt.prototype.g=function(){return new XMLHttpRequest},Kt.prototype.i=function(){return{}},qt=new Kt;var Gt={},Ht={};function Qt(t,e,n){t.L=1,t.v=we(ge(e)),t.m=n,t.P=!0,Wt(t,null)}function Wt(t,e){t.F=Date.now(),Jt(t),t.A=ge(t.v);var n=t.A,s=t.R;Array.isArray(s)||(s=[String(s)]),xe(n.i,"t",s),t.C=0,n=t.j.J,t.h=new $t,t.g=Tn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new yt(u(t.Y,t,t.g),t.O)),e=t.U,n=t.g,s=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(wt[0]=i.toString()),i=wt);for(var r=0;r<i.length;r++){var o=nt(n,i[r],s||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Lt(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Xt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Yt(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ht:(n=Number(e.substring(n,s)),isNaN(n)?Gt:(s+=1)+n>e.length?Ht:(e=e.slice(s,s+n),t.C=s+n,e))}function Jt(t){t.S=Date.now()+t.I,Zt(t,t.I)}function Zt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Vt(u(t.ba,t),e)}function te(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function ee(t){0==t.j.G||t.J||pn(t.j,t)}function ne(t){te(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Tt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function se(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||ae(n.h,t)))if(!t.K&&ae(n.h,t)&&3==n.G){try{var s=n.Da.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;gn(n),sn(n)}ln(n),Pt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Vt(u(n.Za,n),6e3));if(1>=oe(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else yn(n,11)}else if((t.K||n.g==t)&&gn(n),!g(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(s=1.5*c,n.L=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(he(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.ya=t,ve(s.I,s.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((s=n).qa=wn(s,s.J?s.ia:null,s.W),o.K){ue(s.h,o);var a=o,h=s.L;h&&(a.I=h),a.B&&(te(a),Jt(a)),s.g=o}else cn(s);0<n.i.length&&on(n)}else"stop"!=u[0]&&"close"!=u[0]||yn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?yn(n,7):nn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Lt()}catch(c){}}zt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Je(t)?e.j():this.Y(t)},zt.prototype.Y=function(t){try{if(t==this.g)t:{const d=Je(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Ze(this.g)))){this.J||4!=d||7==e||Lt(),te(this);var n=this.g.Z();this.X=n;e:if(Xt(this)){var s=Ze(this.g);t="";var r=s.length,o=4==Je(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ne(this),ee(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:!(o&&e==r-1)});s.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(h)){var c=h;break e}}c=null}if(!(n=c)){this.o=!1,this.s=3,Pt(12),ne(this),ee(this);break t}Ut(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,se(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=Yt(this,a),t==Ht){4==d&&(this.s=4,Pt(14),n=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}if(t==Gt){this.s=4,Pt(15),Ut(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ut(this.i,this.l,t,null),se(this,t)}if(Xt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Pt(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),dn(l),l.M=!0,Pt(11))}}else Ut(this.i,this.l,a,"[Invalid Chunked Response]"),ne(this),ee(this)}else Ut(this.i,this.l,a,null),se(this,a);4==d&&ne(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,Jt(this)))}else(function(t){const e={};t=(t.g&&2<=Je(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(g(t[s]))continue;var n=_(t[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),ne(this),ee(this)}}}catch(d){}},zt.prototype.cancel=function(){this.J=!0,ne(this)},zt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Lt(),Pt(17)),ne(this),this.s=2,ee(this)):Zt(this,this.S-t)};function ie(t){this.l=t||10,i.PerformanceNavigationTiming?t=0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function re(t){return!!t.h||!!t.g&&t.g.size>=t.j}function oe(t){return t.h?1:t.g?t.g.size:0}function ae(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function he(t,e){t.g?t.g.add(e):t.h=e}function ue(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ce(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(r(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(r(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(r(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,o=0;o<i;o++)e.call(void 0,s[o],n&&n[o],t)}ie.prototype.cancel=function(){if(this.i=ce(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var de=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof fe){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,me(this,t.s),this.l=t.l;var e=t.i,n=new ke;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ye(this,n),this.m=t.m}else t&&(e=String(t).match(de))?(this.h=!1,pe(this,e[1]||"",!0),this.o=Te(e[2]||""),this.g=Te(e[3]||"",!0),me(this,e[4]),this.l=Te(e[5]||"",!0),ye(this,e[6]||"",!0),this.m=Te(e[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}function ge(t){return new fe(t)}function pe(t,e,n){t.j=n?Te(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function me(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ye(t,e,n){e instanceof ke?(t.i=e,function(t,e){e&&!t.j&&(Ne(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(De(this,e),xe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ee(e,Ie)),t.i=new ke(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function we(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Te(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ee(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,_e),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _e(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ee(e,Se,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ee(e,Se,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ee(n,"/"==n.charAt(0)?be:Ce,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ee(n,Ae)),t.join("")};var Se=/[#\/\?@]/g,Ce=/[#\?:]/g,be=/[#\?]/g,Ie=/[#\?@]/g,Ae=/#/g;function ke(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function De(t,e){Ne(t),e=Le(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Re(t,e){return Ne(t),e=Le(t,e),t.g.has(e)}function xe(t,e,n){De(t,e),0<n.length&&(t.i=null,t.g.set(Le(t,e),d(n)),t.h+=n.length)}function Le(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Me(t,e,n,s,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),s(n)}catch(r){}}function Pe(){this.g=new class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}}}function Oe(t,e,n){const s=n||"";try{le(t,(function(t,n){let i=t;o(t)&&(i=Et(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Ve(t){this.l=t.Ub||null,this.j=t.eb||!1}function Fe(t,e){dt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ue(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function qe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,je(t)}function je(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Be(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ke(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Be(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ve(t,e,n))}function ze(t){dt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=ke.prototype).add=function(t,e){Ne(this),this.i=null,t=Le(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ne(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},t.na=function(){Ne(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},t.V=function(t){Ne(this);let e=[];if("string"==typeof t)Re(this,t)&&(e=e.concat(this.g.get(Le(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ne(this),this.i=null,Re(this,t=Le(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.V(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")},l(Ve,St),Ve.prototype.g=function(){return new Fe(this.l,this.j)},Ve.prototype.i=function(t){return function(){return t}}({}),l(Fe,dt),(t=Fe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,je(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ue(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qe(this):je(this),3==this.readyState&&Ue(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,qe(this))},t.Qa=function(t){this.g&&(this.response=t,qe(this))},t.ga=function(){this.g&&qe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(ze,dt);var $e=/^https?$/i,Ge=["POST","PUT"];function He(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Qe(t),Xe(t)}function Qe(t){t.A||(t.A=!0,ft(t,"complete"),ft(t,"error"))}function We(t){if(t.h&&void 0!==s&&(!t.v[1]||4!=Je(t)||2!=t.Z()))if(t.u&&4==Je(t))pt(t.Ea,0,t);else if(ft(t,"readystatechange"),4==Je(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var o=String(t.D).match(de)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),r=!$e.test(o?o.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var a=2<Je(t)?t.g.statusText:""}catch(h){a=""}t.l=a+" ["+t.Z()+"]",Qe(t)}}finally{Xe(t)}}}function Xe(t,e){if(t.g){Ye(t);const s=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||ft(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Ye(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function Je(t){return t.g?t.g.readyState:0}function Ze(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function en(t){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tn("baseRetryDelayMs",5e3,t),this.cb=tn("retryDelaySeedMs",1e4,t),this.Wa=tn("forwardChannelMaxRetries",2,t),this.wa=tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ie(t&&t.concurrentRequestLimit),this.Da=new Pe,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function nn(t){if(rn(t),3==t.G){var e=t.U++,n=ge(t.I);if(ve(n,"SID",t.K),ve(n,"RID",e),ve(n,"TYPE","terminate"),hn(t,n),(e=new zt(t,t.j,e)).L=2,e.v=we(ge(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(s){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Jt(e)}vn(t)}function sn(t){t.g&&(dn(t),t.g.cancel(),t.g=null)}function rn(t){sn(t),t.u&&(i.clearTimeout(t.u),t.u=null),gn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function on(t){if(!re(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||D(),k||(A(),k=!0),N.add(e,t),t.B=0}}function an(t,e){var n;n=e?e.l:t.U++;const s=ge(t.I);ve(s,"SID",t.K),ve(s,"RID",n),ve(s,"AID",t.T),hn(t,s),t.m&&t.o&&Ke(s,t.m,t.o),n=new zt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=un(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),he(t.h,n),Qt(n,s,e)}function hn(t,e){t.H&&v(t.H,(function(t,n){ve(e,n,t)})),t.l&&le({},(function(t,n){ve(e,n,t)}))}function un(t,e,n){n=Math.min(t.i.length,n);var s=t.l?u(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const h=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{Oe(h,t,"req"+n+"_")}catch(r){s&&s(h)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function cn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||D(),k||(A(),k=!0),N.add(e,t),t.v=0}}function ln(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Vt(u(t.Fa,t),mn(t,t.v)),t.v++,!0)}function dn(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function fn(t){t.g=new zt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ge(t.qa);ve(e,"RID","rpc"),ve(e,"SID",t.K),ve(e,"AID",t.T),ve(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ve(e,"TO",t.ja),ve(e,"TYPE","xmlhttp"),hn(t,e),t.m&&t.o&&Ke(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=we(ge(e)),n.m=null,n.P=!0,Wt(n,t)}function gn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function pn(t,e){var n=null;if(t.g==e){gn(t),dn(t),t.g=null;var s=2}else{if(!ae(t.h,e))return;n=e.D,ue(t.h,e),s=1}if(0!=t.G)if(e.o)if(1==s){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;ft(s=Rt(),new Ot(s,n)),on(t)}else cn(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==s&&function(t,e){return!(oe(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Vt(u(t.Ga,t,e),mn(t,t.B)),t.B++,0)))}(t,e)||2==s&&ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:yn(t,5);break;case 4:yn(t,10);break;case 3:yn(t,6);break;default:yn(t,2)}}function mn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function yn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.fb,t),s=t.Xa;const e=!s;s=new fe(s||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||pe(s,"https"),we(s),e?function(t,e){const n=new Ft;if(i.Image){const s=new Image;s.onload=c(Me,n,"TestLoadImage: loaded",!0,e,s),s.onerror=c(Me,n,"TestLoadImage: error",!1,e,s),s.onabort=c(Me,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=c(Me,n,"TestLoadImage: timeout",!1,e,s),i.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(s.toString(),n):function(t,e){new Ft;const n=new AbortController,s=setTimeout((()=>{n.abort(),Me(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(s),t.ok?Me(0,0,!0,e):Me(0,0,!1,e)})).catch((()=>{clearTimeout(s),Me(0,0,!1,e)}))}(s.toString(),n)}else Pt(2);t.G=0,t.l&&t.l.sa(e),vn(t),rn(t)}function vn(t){if(t.G=0,t.ka=[],t.l){const e=ce(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function wn(t,e,n){var s=n instanceof fe?ge(n):new fe(n);if(""!=s.g)e&&(s.g=e+"."+s.g),me(s,s.s);else{var r=i.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new fe(null);s&&pe(o,s),e&&(o.g=e),r&&me(o,r),n&&(o.l=n),s=o}return n=t.D,e=t.ya,n&&e&&ve(s,n,e),ve(s,"VER",t.la),hn(t,s),s}function Tn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new ze(new Ve({eb:n})):new ze(t.pa)).Ha(t.J),e}function En(){}function _n(){}function Sn(t,e){dt.call(this),this.g=new en(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!g(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!g(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new In(this)}function Cn(t){At.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function bn(){kt.call(this),this.status=1}function In(t){this.g=t}(t=ze.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qt.g(),this.v=this.o?Ct(this.o):Ct(qt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void He(this,o)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ge,e,void 0))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ye(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){He(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Xe(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xe(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?We(this):this.bb())},t.bb=function(){We(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_t(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=en.prototype).la=8,t.G=1,t.connect=function(t,e,n,s){Pt(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.I=wn(this,null,this.W),on(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new zt(this,this.j,t);let r=this.o;if(this.S&&(r?(r=w(r),E(r,this.S)):r=this.S),null!==this.m||this.O||(i.H=r,r=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=un(this,i,e),ve(n=ge(this.I),"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),hn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Be(r)))+"&"+e:this.m&&Ke(n,this.m,r)),he(this.h,i),this.Ua&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),i.T=!0,Qt(i,n,null)):Qt(i,n,e),this.G=2}}else 3==this.G&&(t?an(this,t):0==this.i.length||re(this.h)||an(this))},t.Fa=function(){if(this.u=null,fn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Vt(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),sn(this),fn(this))},t.Za=function(){null!=this.C&&(this.C=null,sn(this),ln(this),Pt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=En.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},_n.prototype.g=function(t,e){return new Sn(t,e)},l(Sn,dt),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){nn(this.g)},Sn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=Et(t),t=n);e.i.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.Ya++,t)),3==e.G&&on(e)},Sn.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,Sn.aa.N.call(this)},l(Cn,At),l(bn,kt),l(In,En),In.prototype.ua=function(){ft(this.g,"a")},In.prototype.ta=function(t){ft(this.g,new Cn(t))},In.prototype.sa=function(t){ft(this.g,new bn)},In.prototype.ra=function(){ft(this.g,"b")},_n.prototype.createWebChannel=_n.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,K=function(){return new _n},B=function(){return Rt()},j=Nt,q={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jt.NO_ERROR=0,jt.TIMEOUT=8,jt.HTTP_ERROR=6,U=jt,Bt.COMPLETE="complete",F=Bt,bt.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",dt.prototype.listen=dt.prototype.K,V=bt,O=Ve,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,P=ze}).apply(void 0!==z?z:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const $="@firebase/firestore";
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
 */class G{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");
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
let H="10.13.2";
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
 */const Q=new t("@firebase/firestore");function W(){return Q.logLevel}function X(t,...e){if(Q.logLevel<=h.DEBUG){const n=e.map(Z);Q.debug(`Firestore (${H}): ${t}`,...n)}}function Y(t,...e){if(Q.logLevel<=h.ERROR){const n=e.map(Z);Q.error(`Firestore (${H}): ${t}`,...n)}}function J(t,...e){if(Q.logLevel<=h.WARN){const n=e.map(Z);Q.warn(`Firestore (${H}): ${t}`,...n)}}function Z(t){if("string"==typeof t)return t;try{
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
 */function tt(t="Unexpected state"){const e=`FIRESTORE (${H}) INTERNAL ASSERTION FAILED: `+t;throw Y(e),new Error(e)}function et(t,e){t||tt()}function nt(t,e){return t}
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
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class it extends i{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class rt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ot{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class at{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(G.UNAUTHENTICATED)))}shutdown(){}}class ht{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ut{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rt,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rt)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(et("string"==typeof e.accessToken),new ot(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(null===t||"string"==typeof t),new G(t)}}class ct{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=G.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lt{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ct(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dt{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ft{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,X("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(et("string"==typeof t.token),this.R=t.token,new dt(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */function gt(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */class pt{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=gt(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function mt(t,e){return t<e?-1:t>e?1:0}function yt(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
 */class vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new it(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new it(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new it(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new it(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new vt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?mt(this.nanoseconds,t.nanoseconds):mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class wt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new wt(t)}static min(){return new wt(new vt(0,0))}static max(){return new wt(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&tt(),void 0===n?n=t.length-e:n>t.length-e&&tt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Tt?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Et extends Tt{construct(t,e,n){return new Et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new it(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Et(e)}static emptyPath(){return new Et([])}}const _t=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Tt{construct(t,e,n){return new St(t,e,n)}static isValidIdentifier(t){return _t.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new St(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new it(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new it(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new it(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new it(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new St(e)}static emptyPath(){return new St([])}}
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
 */class Ct{constructor(t){this.path=t}static fromPath(t){return new Ct(Et.fromString(t))}static fromName(t){return new Ct(Et.fromString(t).popFirst(5))}static empty(){return new Ct(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ct(new Et(t.slice()))}}function bt(t){return new It(t.readTime,t.key,-1)}class It{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new It(wt.min(),Ct.empty(),-1)}static max(){return new It(wt.max(),Ct.empty(),-1)}}function At(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ct.comparator(t.documentKey,e.documentKey),0!==n?n:mt(t.largestBatchId,e.largestBatchId))}
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
async function kt(t){if(t.code!==st.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;X("LocalStore","Unexpectedly lost primary lease")}
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
 */class Nt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&tt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Nt(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Nt?e:Nt.resolve(e)}catch(e){return Nt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Nt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Nt.reject(e)}static resolve(t){return new Nt(((e,n)=>{e(t)}))}static reject(t){return new Nt(((e,n)=>{n(t)}))}static waitFor(t){return new Nt(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Nt.resolve(!1);for(const n of t)e=e.next((t=>t?Nt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Nt(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const h=a;e(t[h]).next((t=>{r[h]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Nt(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function Dt(t){return"IndexedDbTransactionError"===t.name}
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
 */class Rt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function xt(t){return null==t}function Lt(t){return 0===t&&1/t==-1/0}
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
 */function Mt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}Rt.oe=-1;
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
class Ot{constructor(t,e){this.comparator=t,this.root=e||Ft.EMPTY}insert(t,e){return new Ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(t){return new Ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vt(this.root,t,this.comparator,!0)}}class Vt{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ft{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ft.RED,this.left=null!=s?s:Ft.EMPTY,this.right=null!=i?i:Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ft(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ft.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw tt();if(this.right.isRed())throw tt();const t=this.left.check();if(t!==this.right.check())throw tt();return t+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1,Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw tt()}get value(){throw tt()}get color(){throw tt()}get left(){throw tt()}get right(){throw tt()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ut{constructor(t){this.comparator=t,this.data=new Ot(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qt(this.data.getIterator())}getIteratorFrom(t){return new qt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ut))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class qt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class jt{constructor(t){this.fields=t,t.sort(St.comparator)}static empty(){return new jt([])}unionWith(t){let e=new Ut(St.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new jt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yt(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Bt("Invalid base64 string: "+e):e}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const zt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(et(!!t),"string"==typeof t){let e=0;const n=zt.exec(t);if(et(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Gt(t.seconds),nanos:Gt(t.nanos)}}function Gt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ht(t){return"string"==typeof t?Kt.fromBase64String(t):Kt.fromUint8Array(t)}
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
 */function Qt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Wt(t){const e=t.mapValue.fields.__previous_value__;return Qt(e)?Wt(e):e}function Xt(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}
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
 */class Yt{constructor(t,e,n,s,i,r,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class Jt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Jt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Jt&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Zt={fields:{__type__:{stringValue:"__max__"}}};function te(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qt(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */(t)?9007199254740991:function(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(t)?10:11:tt()}function ee(t,e){if(t===e)return!0;const n=te(t);if(n!==te(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xt(t).isEqual(Xt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=$t(t.timestampValue),s=$t(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Ht(t.bytesValue).isEqual(Ht(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Gt(t.geoPointValue.latitude)===Gt(e.geoPointValue.latitude)&&Gt(t.geoPointValue.longitude)===Gt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Gt(t.integerValue)===Gt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Gt(t.doubleValue),s=Gt(e.doubleValue);return n===s?Lt(n)===Lt(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return yt(t.arrayValue.values||[],e.arrayValue.values||[],ee);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Mt(n)!==Mt(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!ee(n[i],s[i])))return!1;return!0}(t,e);default:return tt()}var s}function ne(t,e){return void 0!==(t.values||[]).find((t=>ee(t,e)))}function se(t,e){if(t===e)return 0;const n=te(t),s=te(e);if(n!==s)return mt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return mt(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Gt(t.integerValue||t.doubleValue),s=Gt(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ie(t.timestampValue,e.timestampValue);case 4:return ie(Xt(t),Xt(e));case 5:return mt(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ht(t),s=Ht(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=mt(n[i],s[i]);if(0!==t)return t}return mt(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=mt(Gt(t.latitude),Gt(e.latitude));return 0!==n?n:mt(Gt(t.longitude),Gt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return re(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,s,i,r;const o=t.fields||{},a=e.fields||{},h=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(s=a.value)||void 0===s?void 0:s.arrayValue,c=mt((null===(i=null==h?void 0:h.values)||void 0===i?void 0:i.length)||0,(null===(r=null==u?void 0:u.values)||void 0===r?void 0:r.length)||0);return 0!==c?c:re(h,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Zt&&e===Zt)return 0;if(t===Zt)return 1;if(e===Zt)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=mt(s[o],r[o]);if(0!==t)return t;const e=se(n[s[o]],i[r[o]]);if(0!==e)return e}return mt(s.length,r.length)}(t.mapValue,e.mapValue);default:throw tt()}}function ie(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return mt(t,e);const n=$t(t),s=$t(e),i=mt(n.seconds,s.seconds);return 0!==i?i:mt(n.nanos,s.nanos)}function re(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=se(n[i],s[i]);if(t)return t}return mt(n.length,s.length)}function oe(t){return ae(t)}function ae(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=$t(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ht(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Ct.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ae(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${ae(t.fields[i])}`;return n+"}"}(t.mapValue):tt()}function he(t){return!!t&&"integerValue"in t}function ue(t){return!!t&&"arrayValue"in t}function ce(t){return!!t&&"nullValue"in t}function le(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function de(t){return!!t&&"mapValue"in t}function fe(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fe(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fe(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ge{constructor(t){this.value=t}static empty(){return new ge({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!de(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fe(e)}setAll(t){let e=St.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=fe(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());de(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];de(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Pt(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new ge(fe(this.value))}}
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
 */class pe{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new pe(t,0,wt.min(),wt.min(),wt.min(),ge.empty(),0)}static newFoundDocument(t,e,n,s){return new pe(t,1,e,wt.min(),n,s,0)}static newNoDocument(t,e){return new pe(t,2,e,wt.min(),wt.min(),ge.empty(),0)}static newUnknownDocument(t,e){return new pe(t,3,e,wt.min(),wt.min(),ge.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(wt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof pe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class me{constructor(t,e){this.position=t,this.inclusive=e}}function ye(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Ct.comparator(Ct.fromName(o.referenceValue),n.key):se(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function ve(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ee(t.position[n],e.position[n]))return!1;return!0}
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
 */class we{constructor(t,e="asc"){this.field=t,this.dir=e}}function Te(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Ee{}class _e extends Ee{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ne(t,e,n):"array-contains"===e?new Le(t,n):"in"===e?new Me(t,n):"not-in"===e?new Pe(t,n):"array-contains-any"===e?new Oe(t,n):new _e(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new De(t,n):new Re(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(se(e,this.value)):null!==e&&te(this.value)===te(e)&&this.matchesComparison(se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return tt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Se extends Ee{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Se(t,e)}matches(t){return Ce(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ce(t){return"and"===t.op}function be(t){return function(t){for(const e of t.filters)if(e instanceof Se)return!1;return!0}(t)&&Ce(t)}function Ie(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+oe(t.value);if(be(t))return t.filters.map((t=>Ie(t))).join(",");{const e=t.filters.map((t=>Ie(t))).join(",");return`${t.op}(${e})`}}function Ae(t,e){return t instanceof _e?(n=t,(s=e)instanceof _e&&n.op===s.op&&n.field.isEqual(s.field)&&ee(n.value,s.value)):t instanceof Se?function(t,e){return e instanceof Se&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Ae(n,e.filters[s])),!0)}(t,e):void tt();var n,s}function ke(t){return t instanceof _e?`${(e=t).field.canonicalString()} ${e.op} ${oe(e.value)}`:t instanceof Se?function(t){return t.op.toString()+" {"+t.getFilters().map(ke).join(" ,")+"}"}(t):"Filter";var e}class Ne extends _e{constructor(t,e,n){super(t,e,n),this.key=Ct.fromName(n.referenceValue)}matches(t){const e=Ct.comparator(t.key,this.key);return this.matchesComparison(e)}}class De extends _e{constructor(t,e){super(t,"in",e),this.keys=xe("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Re extends _e{constructor(t,e){super(t,"not-in",e),this.keys=xe("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xe(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ct.fromName(t.referenceValue)))}class Le extends _e{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ue(e)&&ne(e.arrayValue,this.value)}}class Me extends _e{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ne(this.value.arrayValue,e)}}class Pe extends _e{constructor(t,e){super(t,"not-in",e)}matches(t){if(ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ne(this.value.arrayValue,e)}}class Oe extends _e{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ue(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ne(this.value.arrayValue,t)))}}
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
 */class Ve{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ue=null}}function Fe(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ve(t,e,n,s,i,r,o)}function Ue(t){const e=nt(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ie(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),xt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>oe(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>oe(t))).join(",")),e.ue=t}return e.ue}function qe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Te(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ae(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ve(t.startAt,e.startAt)&&ve(t.endAt,e.endAt)}function je(t){return Ct.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
 */class Be{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ke(t){return new Be(t)}function ze(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function $e(t){const e=nt(t);if(null===e.ce){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Ut(St.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new we(s,n))})),t.has(St.keyField().canonicalString())||e.ce.push(new we(St.keyField(),n))}return e.ce}function Ge(t){const e=nt(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return Fe(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new we(t.field,e)}));const n=t.endAt?new me(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new me(t.startAt.position,t.startAt.inclusive):null;return Fe(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,$e(t))),e.le}function He(t,e,n){return new Be(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qe(t,e){return qe(Ge(t),Ge(e))&&t.limitType===e.limitType}function We(t){return`${Ue(Ge(t))}|lt:${t.limitType}`}function Xe(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ke(t))).join(", ")}]`),xt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>oe(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>oe(t))).join(",")),`Target(${e})`}(Ge(t))}; limitType=${t.limitType})`}function Ye(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ct.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of $e(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=ye(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,$e(n),s)||n.endAt&&!function(t,e,n){const s=ye(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,$e(n),s)));var n,s}function Je(t){return(e,n)=>{let s=!1;for(const i of $e(t)){const t=Ze(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Ze(t,e,n){const s=t.field.isKeyField()?Ct.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?se(s,i):tt()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return tt()}}
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
 */class tn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pt(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}size(){return this.innerSize}}
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
 */const en=new Ot(Ct.comparator);function nn(){return en}const sn=new Ot(Ct.comparator);function rn(...t){let e=sn;for(const n of t)e=e.insert(n.key,n);return e}function on(t){let e=sn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function an(){return un()}function hn(){return un()}function un(){return new tn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cn=new Ut(Ct.comparator);function ln(...t){let e=cn;for(const n of t)e=e.add(n);return e}const dn=new Ut(mt);
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
 */
class fn{constructor(){this._=void 0}}function gn(t,e,n){return t instanceof mn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Qt(e)&&(e=Wt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof yn?vn(t,e):t instanceof wn?Tn(t,e):function(t,e){const n=function(t,e){return t instanceof En?function(t){return he(t)||!!(e=t)&&"doubleValue"in e;var e}(e)?e:{integerValue:0}:null}(t,e),s=_n(n)+_n(t.Pe);return he(n)&&he(t.Pe)?function(t){return{integerValue:""+t}}(s):
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
function(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lt(e)?"-0":e}}(t.serializer,s)}(t,e)}function pn(t,e,n){return t instanceof yn?vn(t,e):t instanceof wn?Tn(t,e):n}class mn extends fn{}class yn extends fn{constructor(t){super(),this.elements=t}}function vn(t,e){const n=Sn(e);for(const s of t.elements)n.some((t=>ee(t,s)))||n.push(s);return{arrayValue:{values:n}}}class wn extends fn{constructor(t){super(),this.elements=t}}function Tn(t,e){let n=Sn(e);for(const s of t.elements)n=n.filter((t=>!ee(t,s)));return{arrayValue:{values:n}}}class En extends fn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function _n(t){return Gt(t.integerValue||t.doubleValue)}function Sn(t){return ue(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Cn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Cn}static exists(t){return new Cn(void 0,t)}static updateTime(t){return new Cn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class In{}function An(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new On(t.key,Cn.none()):new Rn(t.key,t.data,Cn.none());{const n=t.data,s=ge.empty();let i=new Ut(St.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new xn(t.key,s,new jt(i.toArray()),Cn.none())}}function kn(t,e,n){var s;t instanceof Rn?function(t,e,n){const s=t.value.clone(),i=Mn(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof xn?function(t,e,n){if(!bn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Mn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ln(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Nn(t,e,n,s){return t instanceof Rn?function(t,e,n,s){if(!bn(t.precondition,e))return n;const i=t.value.clone(),r=Pn(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof xn?function(t,e,n,s){if(!bn(t.precondition,e))return n;const i=Pn(t.fieldTransforms,s,e),r=e.data;return r.setAll(Ln(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(i=e,r=n,bn(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):r);var i,r}function Dn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&yt(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof yn&&s instanceof yn||n instanceof wn&&s instanceof wn?yt(n.elements,s.elements,ee):n instanceof En&&s instanceof En?ee(n.Pe,s.Pe):n instanceof mn&&s instanceof mn);var n,s}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}class Rn extends In{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xn extends In{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ln(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Mn(t,e,n){const s=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,pn(o,a,n[i]))}return s}function Pn(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,gn(t,r,e))}return s}class On extends In{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Vn{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&kn(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=hn();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=An(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(wt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ln())}isEqual(t){return this.batchId===t.batchId&&yt(this.mutations,t.mutations,((t,e)=>Dn(t,e)))&&yt(this.baseMutations,t.baseMutations,((t,e)=>Dn(t,e)))}}
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
 */class Fn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Un{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var qn,jn;function Bn(t){if(void 0===t)return Y("GRPC error has no .code"),st.UNKNOWN;switch(t){case qn.OK:return st.OK;case qn.CANCELLED:return st.CANCELLED;case qn.UNKNOWN:return st.UNKNOWN;case qn.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case qn.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case qn.INTERNAL:return st.INTERNAL;case qn.UNAVAILABLE:return st.UNAVAILABLE;case qn.UNAUTHENTICATED:return st.UNAUTHENTICATED;case qn.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case qn.NOT_FOUND:return st.NOT_FOUND;case qn.ALREADY_EXISTS:return st.ALREADY_EXISTS;case qn.PERMISSION_DENIED:return st.PERMISSION_DENIED;case qn.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case qn.ABORTED:return st.ABORTED;case qn.OUT_OF_RANGE:return st.OUT_OF_RANGE;case qn.UNIMPLEMENTED:return st.UNIMPLEMENTED;case qn.DATA_LOSS:return st.DATA_LOSS;default:return tt()}}(jn=qn||(qn={}))[jn.OK=0]="OK",jn[jn.CANCELLED=1]="CANCELLED",jn[jn.UNKNOWN=2]="UNKNOWN",jn[jn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jn[jn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jn[jn.NOT_FOUND=5]="NOT_FOUND",jn[jn.ALREADY_EXISTS=6]="ALREADY_EXISTS",jn[jn.PERMISSION_DENIED=7]="PERMISSION_DENIED",jn[jn.UNAUTHENTICATED=16]="UNAUTHENTICATED",jn[jn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jn[jn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jn[jn.ABORTED=10]="ABORTED",jn[jn.OUT_OF_RANGE=11]="OUT_OF_RANGE",jn[jn.UNIMPLEMENTED=12]="UNIMPLEMENTED",jn[jn.INTERNAL=13]="INTERNAL",jn[jn.UNAVAILABLE=14]="UNAVAILABLE",jn[jn.DATA_LOSS=15]="DATA_LOSS";
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
const Kn=new x([4294967295,4294967295],0);function zn(t){const e=(new TextEncoder).encode(t),n=new L;return n.update(e),new Uint8Array(n.digest())}function $n(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new x([n,s],0),new x([i,r],0)]}class Gn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Hn(`Invalid padding: ${e}`);if(n<0)throw new Hn(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Hn(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=x.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(x.fromNumber(n)));return 1===s.compare(Kn)&&(s=new x([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=zn(t),[n,s]=$n(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,s,i);if(!this.de(t))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new Gn(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.Ie)return;const e=zn(t),[n,s]=$n(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,s,i);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Qn{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Wn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Qn(wt.min(),s,new Ot(mt),nn(),ln())}}class Wn{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Wn(n,e,ln(),ln(),ln())}}
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
 */class Xn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Yn{constructor(t,e){this.targetId=t,this.me=e}}class Jn{constructor(t,e,n=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Zn{constructor(){this.fe=0,this.ge=ns(),this.pe=Kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ln(),e=ln(),n=ln();return this.ge.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:tt()}})),new Wn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=ns()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ts{constructor(t){this.Le=t,this.Be=new Map,this.ke=nn(),this.qe=es(),this.Qe=new Ot(mt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:tt()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(je(i))if(0===n){const t=new Ct(i.path);this.Ue(e,t,pe.newNoDocument(t,wt.min()))}else et(1===n);else{const s=this.Ye(e);if(s!==n){const n=this.Ze(t),i=n?this.Xe(n,t,s):1;if(0!==i){this.je(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let r,o;try{r=Ht(n).toUint8Array()}catch(a){if(a instanceof Bt)return J("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Gn(r,s,i)}catch(a){return J(a instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const i=this.Le.tt(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(r)||(this.Ue(e,n,null),s++)})),s}rt(t){const e=new Map;this.Be.forEach(((n,s)=>{const i=this.Je(s);if(i){if(n.current&&je(i.target)){const e=new Ct(i.target.path);null!==this.ke.get(e)||this.it(s,e)||this.Ue(s,e,pe.newNoDocument(e,t))}n.be&&(e.set(s,n.ve()),n.Ce())}}));let n=ln();this.qe.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const s=new Qn(t,e,this.Qe,this.ke,n);return this.ke=nn(),this.qe=es(),this.Qe=new Ot(mt),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Zn,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ut(mt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||X("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Zn),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function es(){return new Ot(Ct.comparator)}function ns(){return new Ot(Ct.comparator)}const ss=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),is=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rs=(()=>({and:"AND",or:"OR"}))();class os{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function as(t,e){return t.useProto3Json||xt(e)?e:{value:e}}function hs(t){return et(!!t),wt.fromTimestamp(function(t){const e=$t(t);return new vt(e.seconds,e.nanos)}(t))}function us(t,e){const n=(s=t,new Et(["projects",s.projectId,"databases",s.database])).child("documents");var s;return void 0===e?n:n.child(e)}function cs(t){const e=Et.fromString(t);return et(bs(e)),e}function ls(t,e){const n=cs(e);if(n.get(1)!==t.databaseId.projectId)throw new it(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new it(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ct(gs(n))}function ds(t,e){return function(t,e){return us(t,e).canonicalString()}(t.databaseId,e)}function fs(t){return new Et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gs(t){return et(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ps(t,e){return{documents:[ds(t,e.path)]}}function ms(t,e){const n={structuredQuery:{}},s=e.path;let i;null!==e.collectionGroup?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ds(t,i);const r=function(t){if(0!==t.length)return Cs(Se.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:_s((e=t).field),direction:ws(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=as(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(h=e.startAt).inclusive,values:h.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:i};var h}function ys(t){let e=function(t){const e=cs(t);return 4===e.length?Et.emptyPath():gs(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){et(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=vs(t);return e instanceof Se&&be(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new we(Ss((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,xt(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new me(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new me(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new Be(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",h,u)}function vs(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ss(t.unaryFilter.field);return _e.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ss(t.unaryFilter.field);return _e.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(t.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ss(t.unaryFilter.field);return _e.create(i,"!=",{nullValue:"NULL_VALUE"});default:return tt()}}(t):void 0!==t.fieldFilter?(e=t,_e.create(Ss(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tt()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return Se.create(t.compositeFilter.filters.map((t=>vs(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return tt()}}(t.compositeFilter.op))}(t):tt();var e}function ws(t){return ss[t]}function Ts(t){return is[t]}function Es(t){return rs[t]}function _s(t){return{fieldPath:t.canonicalString()}}function Ss(t){return St.fromServerFormat(t.fieldPath)}function Cs(t){return t instanceof _e?function(t){if("=="===t.op){if(le(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NAN"}};if(ce(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(le(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NOT_NAN"}};if(ce(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(t.field),op:Ts(t.op),value:t.value}}}(t):t instanceof Se?function(t){const e=t.getFilters().map((t=>Cs(t)));return 1===e.length?e[0]:{compositeFilter:{op:Es(t.op),filters:e}}}(t):tt()}function bs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Is{constructor(t,e,n,s,i=wt.min(),r=wt.min(),o=Kt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Is(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class As{constructor(t){this.ct=t}}function ks(t){const e=ys({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?He(e,e.limit,"L"):e}
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
 */class Ns{constructor(){this.un=new Ds}addToCollectionParentIndex(t,e){return this.un.add(e),Nt.resolve()}getCollectionParents(t,e){return Nt.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return Nt.resolve()}deleteFieldIndex(t,e){return Nt.resolve()}deleteAllFieldIndexes(t){return Nt.resolve()}createTargetIndexes(t,e){return Nt.resolve()}getDocumentsMatchingTarget(t,e){return Nt.resolve(null)}getIndexType(t,e){return Nt.resolve(0)}getFieldIndexes(t,e){return Nt.resolve([])}getNextCollectionGroupToUpdate(t){return Nt.resolve(null)}getMinOffset(t,e){return Nt.resolve(It.min())}getMinOffsetFromCollectionGroup(t,e){return Nt.resolve(It.min())}updateCollectionGroup(t,e,n){return Nt.resolve()}updateIndexEntries(t,e){return Nt.resolve()}}class Ds{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ut(Et.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ut(Et.comparator)).toArray()}}
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
 */class Rs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Rs(0)}static kn(){return new Rs(-1)}}
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
class xs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Ls{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Nn(n.mutation,t,jt.empty(),vt.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ln()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ln()){const s=an();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=rn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=an();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ln())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=nn();const r=un(),o=un();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof xn)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Nn(o.mutation,e,o.mutation.getFieldMask(),vt.now())):r.set(e.key,jt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new xs(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=un();let s=new Ot(((t,e)=>t-e)),i=ln();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||jt.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ln()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,h=s.value,u=hn();h.forEach((t=>{if(!i.has(t)){const s=An(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Nt.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,s){return i=e,Ct.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s);var i}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Nt.resolve(an());let o=-1,a=i;return r.next((e=>Nt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Nt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ln()))).next((t=>({batchId:o,changes:on(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ct(e)).next((t=>{let e=rn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let r=rn();return this.indexManager.getCollectionParents(t,i).next((o=>Nt.forEach(o,(o=>{const a=(h=e,u=o.child(i),new Be(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt));var h,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((t=>{i.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,pe.newInvalidDocument(s)))}));let n=rn();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&Nn(r.mutation,s,jt.empty(),vt.now()),Ye(e,s)&&(n=n.insert(t,s))})),n}))}}
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
 */class Ms{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return Nt.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,{id:(n=e).id,version:n.version,createTime:hs(n.createTime)}),Nt.resolve();var n}getNamedQuery(t,e){return Nt.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,{name:(n=e).name,query:ks(n.bundledQuery),readTime:hs(n.readTime)}),Nt.resolve();var n}}
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
 */class Ps{constructor(){this.overlays=new Ot(Ct.comparator),this.Ir=new Map}getOverlay(t,e){return Nt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=an();return Nt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),Nt.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),Nt.resolve()}getOverlaysForCollection(t,e,n){const s=an(),i=e.length+1,r=new Ct(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Nt.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Ot(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=an(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=an(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Nt.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fn(e,n));let i=this.Ir.get(e);void 0===i&&(i=ln(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}
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
 */class Os{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(t){return Nt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Nt.resolve()}}
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
 */class Vs{constructor(){this.Tr=new Ut(Fs.Er),this.dr=new Ut(Fs.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new Fs(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new Fs(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new Ct(new Et([])),n=new Fs(e,t),s=new Fs(e,t+1),i=[];return this.dr.forEachInRange([n,s],(t=>{this.Vr(t),i.push(t.key)})),i}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Ct(new Et([])),n=new Fs(e,t),s=new Fs(e,t+1);let i=ln();return this.dr.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Fs(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fs{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Ct.comparator(t.key,e.key)||mt(t.wr,e.wr)}static Ar(t,e){return mt(t.wr,e.wr)||Ct.comparator(t.key,e.key)}}
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
 */class Us{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ut(Fs.Er)}checkEmpty(t){return Nt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Vn(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.br=this.br.add(new Fs(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Nt.resolve(r)}lookupMutationBatch(t,e){return Nt.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),i=s<0?0:s;return Nt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Nt.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return Nt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fs(e,0),s=new Fs(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],(t=>{const e=this.Dr(t.wr);i.push(e)})),Nt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ut(mt);return e.forEach((t=>{const e=new Fs(t,0),s=new Fs(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,s],(t=>{n=n.add(t.wr)}))})),Nt.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Ct.isDocumentKey(i)||(i=i.child(""));const r=new Fs(new Ct(i),0);let o=new Ut(mt);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.wr)),!0)}),r),Nt.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){et(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Nt.forEach(e.mutations,(s=>{const i=new Fs(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new Fs(e,0),s=this.br.firstAfterOrEqual(n);return Nt.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Nt.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class qs{constructor(t){this.Mr=t,this.docs=new Ot(Ct.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Nt.resolve(n?n.document.mutableCopy():pe.newInvalidDocument(e))}getEntries(t,e){let n=nn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():pe.newInvalidDocument(t))})),Nt.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=nn();const r=e.path,o=new Ct(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||At(bt(o),n)<=0||(s.has(o.key)||Ye(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Nt.resolve(i)}getAllFromCollectionGroup(t,e,n,s){tt()}Or(t,e){return Nt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new js(this)}getSize(t){return Nt.resolve(this.size)}}class js extends class{constructor(){this.changes=new tn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Nt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)})),Nt.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
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
 */class Bs{constructor(t){this.persistence=t,this.Nr=new tn((t=>Ue(t)),qe),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vs,this.targetCount=0,this.kr=Rs.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),Nt.resolve()}getLastRemoteSnapshotVersion(t){return Nt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Nt.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Nt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),Nt.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Rs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,Nt.resolve()}updateTargetData(t,e){return this.Kn(e),Nt.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,Nt.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Nr.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Nt.waitFor(i).next((()=>s))}getTargetCount(t){return Nt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return Nt.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),Nt.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Nt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),Nt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return Nt.resolve(n)}containsKey(t,e){return Nt.resolve(this.Br.containsKey(e))}}
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
 */class Ks{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Rt(0),this.Kr=!1,this.Kr=!0,this.$r=new Os,this.referenceDelegate=t(this),this.Ur=new Bs(this),this.indexManager=new Ns,this.remoteDocumentCache=new qs((t=>this.referenceDelegate.Wr(t))),this.serializer=new As(e),this.Gr=new Ms(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ps,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Us(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){X("MemoryPersistence","Starting transaction:",t);const s=new zs(this.Qr.next());return this.referenceDelegate.zr(),n(s).next((t=>this.referenceDelegate.jr(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Hr(t,e){return Nt.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class zs extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class $s{constructor(t){this.persistence=t,this.Jr=new Vs,this.Yr=null}static Zr(t){return new $s(t)}get Xr(){if(this.Yr)return this.Yr;throw tt()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),Nt.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),Nt.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),Nt.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Nt.forEach(this.Xr,(n=>{const s=Ct.fromPath(n);return this.ei(t,s).next((t=>{t||e.removeEntry(s,wt.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return Nt.or([()=>Nt.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
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
 */class Gs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=ln(),s=ln();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gs(t,e.fromCache,n,s)}}
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
 */class Hs{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class Qs{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=d()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(f())>0?6:4}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Yi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Zi(t,e,s,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Hs;return this.Xi(t,e,n).next((s=>{if(i.result=s,this.zi)return this.es(t,e,n,s.size)}))})).next((()=>i.result))}es(t,e,n,s){return n.documentReadCount<this.ji?(W()<=h.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Xe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Nt.resolve()):(W()<=h.DEBUG&&X("QueryEngine","Query:",Xe(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(W()<=h.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Xe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ge(e))):Nt.resolve())}Yi(t,e){if(ze(e))return Nt.resolve(null);let n=Ge(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=He(e,null,"F"),n=Ge(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ln(...s);return this.Ji.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ts(e,s);return this.ns(e,r,i,n.readTime)?this.Yi(t,He(e,null,"F")):this.rs(t,r,e,n)}))))})))))}Zi(t,e,n,s){return ze(e)||s.isEqual(wt.min())?Nt.resolve(null):this.Ji.getDocuments(t,n).next((i=>{const r=this.ts(e,i);return this.ns(e,r,n,s)?Nt.resolve(null):(W()<=h.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xe(e)),this.rs(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=wt.fromTimestamp(1e9===s?new vt(n+1,0):new vt(n,s));return new It(i,Ct.empty(),e)}(s,-1)).next((t=>t)))}))}ts(t,e){let n=new Ut(Je(t));return e.forEach(((e,s)=>{Ye(t,s)&&(n=n.add(s))})),n}ns(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,n){return W()<=h.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Xe(e)),this.Ji.getDocumentsMatchingQuery(t,e,It.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Ws{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Ot(mt),this._s=new tn((t=>Ue(t)),qe),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ls(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}async function Xs(t,e){const n=nt(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ln();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Ys(t){const e=nt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Js(t,e){const n=nt(t),s=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];e.targetChanges.forEach(((r,a)=>{const h=i.get(a);if(!h)return;o.push(n.Ur.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,r.addedDocuments,a))));let u=h.withSequenceNumber(t.currentSequenceNumber);var c,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(Kt.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),l=u,d=r,(0===(c=h).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(t,u))}));let a=nn(),h=ln();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=ln(),i=ln();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=nn();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(wt.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):X("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Ps:s,Is:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.Ps,h=t.Is}))),!s.isEqual(wt.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Nt.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,h))).next((()=>a))})).then((t=>(n.os=i,t)))}async function Zs(t,e,n){const s=nt(t),i=s.os.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!Dt(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function ti(t,e,n){const s=nt(t);let i=wt.min(),r=ln();return s.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const s=nt(t),i=s._s.get(n);return void 0!==i?Nt.resolve(s.os.get(i)):s.Ur.getTargetData(e,n)}(s,t,Ge(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.ss.getDocumentsMatchingQuery(t,e,n?i:wt.min(),n?r:ln()))).next((t=>(function(t,e,n){let s=t.us.get(e)||wt.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.us.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Ts:r})))))}class ei{constructor(){this.activeTargetIds=dn}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ni{constructor(){this.so=new ei,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ei,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class si{_o(t){}shutdown(){}}
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
 */class ii{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let ri=null;function oi(){return null===ri?ri=268435456+Math.round(2147483648*Math.random()):ri++,"0x"+ri.toString(16)
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
 */}const ai={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class hi{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
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
 */const ui="WebChannelConnection";class ci extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${s}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get Fo(){return!1}Mo(t,e,n,s,i){const r=oi(),o=this.xo(t,e.toUriEncodedString());X("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,s,i),this.No(t,o,a,n).then((e=>(X("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw J("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,s,i,r){return this.Mo(t,e,n,s,i)}Oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+H,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=ai[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const i=oi();return new Promise(((r,o)=>{const a=new P;a.setWithCredentials(!0),a.listenOnce(F.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case U.NO_ERROR:const e=a.getResponseJson();X(ui,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case U.TIMEOUT:X(ui,`RPC '${t}' ${i} timed out`),o(new it(st.DEADLINE_EXCEEDED,"Request time out"));break;case U.HTTP_ERROR:const n=a.getStatus();if(X(ui,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(e)>=0?e:st.UNKNOWN}(e.status);o(new it(t,e.message))}else o(new it(st.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new it(st.UNAVAILABLE,"Connection failed."));break;default:tt()}}finally{X(ui,`RPC '${t}' ${i} completed.`)}}));const h=JSON.stringify(s);X(ui,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",h,n,15)}))}Bo(t,e,n){const s=oi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=K(),o=B(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.xmlHttpFactory=new O({})),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");X(ui,`Creating RPC '${t}' stream ${s}: ${u}`,a);const c=r.createWebChannel(u,a);let l=!1,d=!1;const f=new hi({Io:e=>{d?X(ui,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(X(ui,`Opening RPC '${t}' stream ${s} transport.`),c.open(),l=!0),X(ui,`RPC '${t}' stream ${s} sending:`,e),c.send(e))},To:()=>c.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return g(c,V.EventType.OPEN,(()=>{d||(X(ui,`RPC '${t}' stream ${s} transport opened.`),f.yo())})),g(c,V.EventType.CLOSE,(()=>{d||(d=!0,X(ui,`RPC '${t}' stream ${s} transport closed`),f.So())})),g(c,V.EventType.ERROR,(e=>{d||(d=!0,J(ui,`RPC '${t}' stream ${s} transport errored:`,e),f.So(new it(st.UNAVAILABLE,"The operation could not be completed")))})),g(c,V.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];et(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){X(ui,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=qn[t];if(void 0!==e)return Bn(e)}(e),i=o.message;void 0===n&&(n=st.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new it(n,i)),c.close()}else X(ui,`RPC '${t}' stream ${s} received:`,i),f.bo(i)}})),g(o,j.STAT_EVENT,(e=>{e.stat===q.PROXY?X(ui,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===q.NOPROXY&&X(ui,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function li(){return"undefined"!=typeof document?document:null}
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
 */function di(t){return new os(t,!0)}
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
 */class fi{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
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
 */class gi extends class{constructor(t,e,n,s,i,r,o,a){this.ui=t,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fi(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(Y(e.toString()),Y("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===st.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new it(st.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return X("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:tt(),r=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(et(void 0===e||"string"==typeof e),Kt.fromBase64String(e||"")):(et(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Kt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,h=a&&function(t){const e=void 0===t.code?st.UNKNOWN:Bn(t.code);return new it(e,t.message||"")}(a);n=new Jn(i,r,o,h||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ls(t,s.document.name),r=hs(s.document.updateTime),o=s.document.createTime?hs(s.document.createTime):wt.min(),a=new ge({mapValue:{fields:s.document.fields}}),h=pe.newFoundDocument(i,r,o,a),u=s.targetIds||[],c=s.removedTargetIds||[];n=new Xn(u,c,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ls(t,s.document),r=s.readTime?hs(s.readTime):wt.min(),o=pe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Xn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ls(t,s.document),r=s.removedTargetIds||[];n=new Xn([],r,i,null)}else{if(!("filter"in e))return tt();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new Un(s,i),o=t.targetId;n=new Yn(o,r)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return wt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?wt.min():e.readTime?hs(e.readTime):wt.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=fs(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=je(s)?{documents:ps(t,s)}:{query:ms(t,s)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=function(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}(t,e.resumeToken);const s=as(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(wt.min())>0){n.readTime=function(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp());const s=as(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=fs(this.serializer),e.removeTarget=t,this.a_(e)}}
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
 */class pi extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new it(st.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Mo(t,us(e,n),s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new it(st.UNKNOWN,t.toString())}))}Lo(t,e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Lo(t,us(e,n),s,r,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new it(st.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class mi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Y(e),this.D_=!1):X("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
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
 */class yi{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((t=>{n.enqueueAndForget((async()=>{Ii(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=nt(t);e.L_.add(4),await wi(e),e.q_.set("Unknown"),e.L_.delete(4),await vi(e)}(this))}))})),this.q_=new mi(n,s)}}async function vi(t){if(Ii(t))for(const e of t.B_)await e(!0)}async function wi(t){for(const e of t.B_)await e(!1)}function Ti(t,e){const n=nt(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),bi(n)?Ci(n):Mi(n).r_()&&_i(n,e))}function Ei(t,e){const n=nt(t),s=Mi(n);n.N_.delete(e),s.r_()&&Si(n,e),0===n.N_.size&&(s.r_()?s.o_():Ii(n)&&n.q_.set("Unknown"))}function _i(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(wt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).A_(e)}function Si(t,e){t.Q_.xe(e),Mi(t).R_(e)}function Ci(t){t.Q_=new ts({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.q_.v_()}function bi(t){return Ii(t)&&!Mi(t).n_()&&t.N_.size>0}function Ii(t){return 0===nt(t).L_.size}function Ai(t){t.Q_=void 0}async function ki(t){t.q_.set("Online")}async function Ni(t){t.N_.forEach(((e,n)=>{_i(t,e)}))}async function Di(t,e){Ai(t),bi(t)?(t.q_.M_(e),Ci(t)):t.q_.set("Unknown")}async function Ri(t,e,n){if(t.q_.set("Online"),e instanceof Jn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.N_.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.N_.delete(s),t.Q_.removeTarget(s))}(t,e)}catch(s){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xi(t,s)}else if(e instanceof Xn?t.Q_.Ke(e):e instanceof Yn?t.Q_.He(e):t.Q_.We(e),!n.isEqual(wt.min()))try{const e=await Ys(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.N_.get(s);i&&t.N_.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.N_.get(e);if(!s)return;t.N_.set(e,s.withResumeToken(Kt.EMPTY_BYTE_STRING,s.snapshotVersion)),Si(t,e);const i=new Is(s.target,e,n,s.sequenceNumber);_i(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){X("RemoteStore","Failed to raise snapshot:",i),await xi(t,i)}}async function xi(t,e,n){if(!Dt(e))throw e;t.L_.add(1),await wi(t),t.q_.set("Offline"),n||(n=()=>Ys(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vi(t)}))}async function Li(t,e){const n=nt(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const s=Ii(n);n.L_.add(3),await wi(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vi(n)}function Mi(t){return t.K_||(t.K_=function(t,e,n){const s=nt(t);return s.w_(),new gi(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Eo:ki.bind(null,t),Ro:Ni.bind(null,t),mo:Di.bind(null,t),d_:Ri.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),bi(t)?Ci(t):t.q_.set("Unknown")):(await t.K_.stop(),Ai(t))}))),t.K_
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
 */}class Pi{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Pi(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new it(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oi(t,e){if(Y("AsyncQueue",`${e}: ${t}`),Dt(t))return new it(st.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Vi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ct.comparator(e.key,n.key):(t,e)=>Ct.comparator(t.key,e.key),this.keyedMap=rn(),this.sortedSet=new Ot(this.comparator)}static emptySet(t){return new Vi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Fi{constructor(){this.W_=new Ot(Ct.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):tt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ui{constructor(t,e,n,s,i,r,o,a,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Ui(t,e,Vi.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class qi{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class ji{constructor(){this.queries=Bi(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=nt(t),s=n.queries;n.queries=Bi(),s.forEach(((t,n)=>{for(const s of n.j_)s.onError(e)}))}(this,new it(st.ABORTED,"Firestore shutting down"))}}function Bi(){return new tn((t=>We(t)),Qe)}function Ki(t,e){const n=nt(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(i)&&(s=!0);e.z_=i}}s&&$i(n)}function zi(t,e,n){const s=nt(t),i=s.queries.get(e);if(i)for(const r of i.j_)r.onError(n);s.queries.delete(e)}function $i(t){t.Y_.forEach((t=>{t.next()}))}var Gi,Hi;(Hi=Gi||(Gi={})).ea="default",Hi.Cache="cache";class Qi{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ui(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=Ui.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Gi.Cache}}
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
 */class Wi{constructor(t){this.key=t}}class Xi{constructor(t){this.key=t}}class Yi{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ln(),this.mutatedKeys=ln(),this.Aa=Je(t),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Fi,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,h="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),c=Ye(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Aa(c,a)>0||h&&this.Aa(c,h)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||h)&&(o=!0)),f&&(c?(r=r.add(c),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ra:r,fa:n,ns:o,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const r=t.fa.G_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt()}};return n(t)-n(e)}(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),s=null!=s&&s;const o=e&&!s?this.ya():[],a=0===this.da.size&&this.current&&!s?1:0,h=a!==this.Ea;return this.Ea=a,0!==r.length||h?{snapshot:new Ui(this.query,t.Ra,i,r,t.mutatedKeys,0===a,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fi,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=ln(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Xi(t))})),this.da.forEach((n=>{t.has(n)||e.push(new Wi(n))})),e}ba(t){this.Ta=t.Ts,this.da=ln();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ui.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Ji{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zi{constructor(t){this.key=t,this.va=!1}}class tr{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Ca={},this.Fa=new tn((t=>We(t)),Qe),this.Ma=new Map,this.xa=new Set,this.Oa=new Ot(Ct.comparator),this.Na=new Map,this.La=new Vs,this.Ba={},this.ka=new Map,this.qa=Rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function er(t,e,n=!0){const s=yr(t);let i;const r=s.Fa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await sr(s,e,n,!0),i}async function nr(t,e){const n=yr(t);await sr(n,e,!0,!1)}async function sr(t,e,n,s){const i=await function(t,e){const n=nt(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ur.getTargetData(t,e).next((i=>i?(s=i,Nt.resolve(s)):n.Ur.allocateTargetId(t).next((i=>(s=new Is(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.os.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}(t.localStore,Ge(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return s&&(a=await async function(t,e,n,s,i){t.Ka=(e,n,s)=>async function(t,e,n,s){let i=e.view.ma(n);i.ns&&(i=await ti(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=s&&null!=s.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,r,o);return lr(t,e.targetId,a.wa),a.snapshot}(t,e,n,s);const r=await ti(t.localStore,e,!0),o=new Yi(e,r.Ts),a=o.ma(r.documents),h=Wn.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,h);lr(t,n,u.wa);const c=new Ji(e,n,o);return t.Fa.set(e,c),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}(t,e,r,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&Ti(t.remoteStore,i),a}async function ir(t,e,n){const s=nt(t),i=s.Fa.get(e),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter((t=>!Qe(t,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Zs(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Ei(s.remoteStore,i.targetId),ur(s,i.targetId)})).catch(kt)):(ur(s,i.targetId),await Zs(s.localStore,i.targetId,!0))}async function rr(t,e){const n=nt(t),s=n.Fa.get(e),i=n.Ma.get(s.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ei(n.remoteStore,s.targetId))}async function or(t,e){const n=nt(t);try{const t=await Js(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Na.get(e);s&&(et(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.va=!0:t.modifiedDocuments.size>0?et(s.va):t.removedDocuments.size>0&&(et(s.va),s.va=!1))})),await gr(n,t,e)}catch(s){await kt(s)}}function ar(t,e,n){const s=nt(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Fa.forEach(((n,s)=>{const i=s.view.Z_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=nt(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.j_)i.Z_(e)&&(s=!0)})),s&&$i(n)}(s.eventManager,e),t.length&&s.Ca.d_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hr(t,e,n){const s=nt(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Na.get(e),r=i&&i.key;if(r){let t=new Ot(Ct.comparator);t=t.insert(r,pe.newNoDocument(r,wt.min()));const n=ln().add(r),i=new Qn(wt.min(),new Map,new Ot(mt),t,n);await or(s,i),s.Oa=s.Oa.remove(r),s.Na.delete(e),fr(s)}else await Zs(s.localStore,e,!1).then((()=>ur(s,e,n))).catch(kt)}function ur(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||cr(t,e)}))}function cr(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(Ei(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),fr(t))}function lr(t,e,n){for(const s of n)s instanceof Wi?(t.La.addReference(s.key,e),dr(t,s)):s instanceof Xi?(X("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||cr(t,s.key)):tt()}function dr(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(s),fr(t))}function fr(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Ct(Et.fromString(e)),s=t.qa.next();t.Na.set(s,new Zi(n)),t.Oa=t.Oa.insert(n,s),Ti(t.remoteStore,new Is(Ge(Ke(n.path)),s,"TargetPurposeLimboResolution",Rt.oe))}}async function gr(t,e,n){const s=nt(t),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach(((t,a)=>{o.push(s.Ka(a,e,n).then((t=>{var e;if((t||n)&&s.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;s.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=Gs.Wi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Ca.d_(i),await async function(t,e){const n=nt(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Nt.forEach(e,(e=>Nt.forEach(e.$i,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Nt.forEach(e.Ui,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(s){if(!Dt(s))throw s;X("LocalStore","Failed to update sequence numbers: "+s)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.os.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.os=n.os.insert(t,i)}}}(s.localStore,r))}async function pr(t,e){const n=nt(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const t=await Xs(n.localStore,e);n.currentUser=e,i="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).ka.forEach((t=>{t.forEach((t=>{t.reject(new it(st.CANCELLED,i))}))})),s.ka.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gr(n,t.hs)}var s,i}function mr(t,e){const n=nt(t),s=n.Na.get(e);if(s&&s.va)return ln().add(s.key);{let t=ln();const s=n.Ma.get(e);if(!s)return t;for(const e of s){const s=n.Fa.get(e);t=t.unionWith(s.view.Va)}return t}}function yr(t){const e=nt(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=or.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mr.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hr.bind(null,e),e.Ca.d_=Ki.bind(null,e.eventManager),e.Ca.$a=zi.bind(null,e.eventManager),e}class vr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=di(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new Ws(t,e,n,s)}(this.persistence,new Qs,t.initialUser,this.serializer)}createPersistence(t){return new Ks($s.Zr,this.serializer)}createSharedClientState(t){return new ni}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ar(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pr.bind(null,this.syncEngine),await async function(t,e){const n=nt(t);e?(n.L_.delete(2),await vi(n)):e||(n.L_.add(2),await wi(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ji}createDatastore(t){const e=di(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new ci(s));var s;return function(t,e,n,s){return new pi(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>ar(this.syncEngine,t,0),r=ii.D()?new ii:new si,new yi(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new tr(t,e,n,s,i,r);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=nt(t);X("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await wi(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}
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
 */class Tr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):Y("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
 */class Er{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=G.UNAUTHENTICATED,this.clientId=pt.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{X("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(X("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new it(st.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Oi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function _r(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Xs(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Sr(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await _r(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!function(t){return"FirebaseError"===t.name?t.code===st.FAILED_PRECONDITION||t.code===st.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(s))throw s;J("Error using user provided cache. Falling back to memory cache: "+s),await _r(t,new vr)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await _r(t,new vr);return t._offlineComponents}(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Li(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Li(e.remoteStore,n))),t._onlineComponents=e}async function Cr(t){const e=await async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Sr(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Sr(t,new wr))),t._onlineComponents}(t),n=e.eventManager;return n.onListen=er.bind(null,e.syncEngine),n.onUnlisten=ir.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nr.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rr.bind(null,e.syncEngine),n}function br(t,e,n={}){const s=new rt;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Tr({next:r=>{e.enqueueAndForget((()=>async function(t,e){const n=nt(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const t=r.j_.indexOf(e);t>=0&&(r.j_.splice(t,1),0===r.j_.length?i=e.J_()?0:1:!r.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new it(st.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new it(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Qi(Ke(n.path),r,{includeMetadataChanges:!0,_a:!0});return async function(e,n){const s=nt(e);let i=3;const r=n.query;let o=s.queries.get(r);o?!o.H_()&&n.J_()&&(i=2):(o=new qi,i=n.J_()?0:1);try{switch(i){case 0:o.z_=await s.onListen(r,!0);break;case 1:o.z_=await s.onListen(r,!1);break;case 2:await s.onFirstRemoteStoreListen(r)}}catch(t){const s=Oi(t,`Initialization of query '${Xe(n.query)}' failed`);return void n.onError(s)}s.queries.set(r,o),o.j_.push(n),n.Z_(s.onlineState),o.z_&&n.X_(o.z_)&&$i(s)}(t,o)}(await Cr(t),t.asyncQueue,e,n,s))),s.promise
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
 */}function Ir(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const Ar=new Map;
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
 */function kr(t,e,n){if(!n)throw new it(st.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nr(t){if(!Ct.isDocumentKey(t))throw new it(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new it(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":tt()}(t);throw new it(st.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class Rr{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new it(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new it(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new it(st.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ir(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new it(st.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new it(st.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new it(st.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class xr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new it(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new it(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new at;switch(t.type){case"firstParty":return new lt(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new it(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ar.get(t);e&&(X("ComponentProvider","Removing Datastore"),Ar.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Lr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Lr(this.firestore,t,this._query)}}class Mr{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mr(this.firestore,t,this._key)}}class Pr extends Lr{constructor(t,e,n){super(t,e,Ke(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mr(this.firestore,null,new Ct(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}
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
class Or{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new fi(this,"async_queue_retry"),this.Eu=()=>{const t=li();t&&X("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const t=li();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=li();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise((()=>{}));const e=new rt;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.uu.push(t),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Dt(t))throw t;X("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(t){const e=this.au.then((()=>(this.Pu=!0,t().catch((t=>{this.hu=t,this.Pu=!1;throw Y("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Pu=!1,t))))));return this.au=e,e}enqueueAfterDelay(t,e,n){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=Pi.createAndSchedule(this,t,e,n,(t=>this.Vu(t)));return this.lu.push(s),s}du(){this.hu&&tt()}verifyOperationInProgress(){}async mu(){let t;do{t=this.au,await t}while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then((()=>{this.lu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.lu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.mu()}))}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class Vr extends xr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Or,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ur(this),this._firestoreClient.terminate()}}function Fr(t,e){const n="object"==typeof t?t:r(),s="string"==typeof t?t:e||"(default)",i=o(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=a("firestore");t&&function(t,e,n,s={}){var i;const r=(t=Dr(t,xr))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&J("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=G.MOCK_USER;else{e=u(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new it(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new G(r)}t._authCredentials=new ht(new ot(e,n))}}(i,...t)}return i}function Ur(t){var e,n,s;const i=t._freezeSettings(),r=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",h=t._persistenceKey,new Yt(o,a,h,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ir(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,h,u;t._firestoreClient=new Er(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
 */class qr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qr(Kt.fromBase64String(t))}catch(e){throw new it(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qr(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class jr{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new it(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class Br{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new it(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new it(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return mt(this._lat,t._lat)||mt(this._long,t._long)}}
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
 */class Kr{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}const zr=new RegExp("[~\\*/\\[\\]]");function $r(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new it(st.INVALID_ARGUMENT,a+t+h)
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
 */}class Gr{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mr(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qr("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hr extends Gr{data(){return super.data()}}function Qr(t,e){return"string"==typeof e?function(t,e,n){if(e.search(zr)>=0)throw $r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jr(...e.split("."))._internalPath}catch(s){throw $r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof jr?e._internalPath:e._delegate._internalPath}
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
class Wr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xr extends Gr{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Qr("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yr extends Xr{data(t={}){return super.data(t)}}
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
 */function Jr(t){t=Dr(t,Mr);const e=Dr(t.firestore,Vr);return br(function(t){return t._firestoreClient||Ur(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),i=new Zr(t);return new Xr(t,i,e._key,s,new Wr(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class Zr extends class{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw tt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Pt(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertVectorValue(t){var e,n,s;const i=null===(s=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===s?void 0:s.map((t=>Gt(t.doubleValue)));return new Kr(i)}convertGeoPoint(t){return new Br(Gt(t.latitude),Gt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Wt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Xt(t));default:return null}}convertTimestamp(t){const e=$t(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Et.fromString(t);et(bs(n));const s=new Jt(n.get(1),n.get(3)),i=new Ct(n.popFirst(5));return s.isEqual(e)||Y(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new qr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mr(this.firestore,null,e)}}!function(t,i=!0){H=l,e(new n("firestore",((t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),r=new Vr(new ut(t.getProvider("auth-internal")),new ft(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new it(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jt(t.options.projectId,e)}(s,e),s);return n=Object.assign({useFetchStreams:i},n),r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),s($,"4.7.2",t),s($,"4.7.2","esm2017")}();const to=g({data:()=>({userName:"",userPhotoURL:"",userPoints:0,userQRCodeURL:"",imagePaths:["/static/1.jpg","/static/2.jpg","/static/3.jpg"],imagePromotions:{"/static/1.jpg":{title:"$0.99 ONLY!",description:"Pay via the FairPrice Group app. Till 2 Oct. T&Cs apply."},"/static/2.jpg":{title:"Big Sale 50% OFF!",description:"Exclusive in-app promotion. Valid till end of the month."},"/static/3.jpg":{title:"Limited Time Offer",description:"Enjoy huge discounts on selected items. Hurry, while stocks last!"}}}),mounted(){this.fetchUserData()},methods:{async fetchUserData(){const t=p(),e=Fr();m(t,(async t=>{if(t){this.userName=t.displayName,this.userPhotoURL=t.photoURL;const n=function(t,e,...n){if(t=c(t),1===arguments.length&&(e=pt.newId()),kr("doc","path",e),t instanceof xr){const s=Et.fromString(e,...n);return Nr(s),new Mr(t,null,new Ct(s))}{if(!(t instanceof Mr||t instanceof Pr))throw new it(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Et.fromString(e,...n));return Nr(s),new Mr(t.firestore,t instanceof Pr?t.converter:null,new Ct(s))}}(e,"users",t.uid),s=await Jr(n);if(s.exists()){const t=s.data();this.userPoints=t.points,this.userQRCodeURL=t.qrcodeURL}else console.log("No such document!")}else console.log("User not logged in")}))}}},[["render",function(t,e,n,s,i,r){const o=A,a=k,h=w,u=D,c=R,l=N;return T(),y(h,{class:"home-page"},{default:v((()=>[E(h,{class:"top-bar"},{default:v((()=>[E(h,{class:"user-info"},{default:v((()=>[E(o,{class:"user-logo",src:i.userPhotoURL},null,8,["src"]),E(h,{class:"user-details"},{default:v((()=>[E(a,{class:"user-name"},{default:v((()=>[_(S(i.userName),1)])),_:1}),E(a,{class:"user-points"},{default:v((()=>[_("Points: "+S(i.userPoints),1)])),_:1})])),_:1})])),_:1}),E(h,{class:"action-section"},{default:v((()=>[E(h,{class:"qrcode"}),E(h,{class:"scan"},{default:v((()=>[E(o,{class:"qrcode-image",src:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.38%203.88V10.88H19.38V3.88H12.38ZM17.88%209.38H13.88V5.38H17.88V9.38Z'%20fill='%23000000'/%3e%3cpath%20d='M3.88%2010.88H10.88V3.88H3.88V10.88ZM5.38%205.38H9.38V9.38H5.38V5.38Z'%20fill='%23000000'/%3e%3cpath%20d='M3.88%2019.38H10.88V12.38H3.88V19.38ZM5.38%2013.88H9.38V17.88H5.38V13.88Z'%20fill='%23000000'/%3e%3cpath%20d='M14.13%2012.38H12.38V14.13H14.13V12.38Z'%20fill='%23000000'/%3e%3cpath%20d='M17.63%2012.38H15.88V14.13H17.63V12.38Z'%20fill='%23000000'/%3e%3cpath%20d='M15.88%2014.13H14.13V15.88H15.88V14.13Z'%20fill='%23000000'/%3e%3cpath%20d='M19.38%2014.13H17.63V15.88H19.38V14.13Z'%20fill='%23000000'/%3e%3cpath%20d='M14.13%2015.88H12.38V17.63H14.13V15.88Z'%20fill='%23000000'/%3e%3cpath%20d='M17.63%2015.88H15.88V17.63H17.63V15.88Z'%20fill='%23000000'/%3e%3cpath%20d='M15.88%2017.63H14.13V19.38H15.88V17.63Z'%20fill='%23000000'/%3e%3cpath%20d='M19.38%2017.63H17.63V19.38H19.38V17.63Z'%20fill='%23000000'/%3e%3c/svg%3e"}),E(a,{class:"scan-text"},{default:v((()=>[_("Earn")])),_:1})])),_:1})])),_:1})])),_:1}),E(h,{class:"carousel"},{default:v((()=>[E(l,{autoplay:"true",interval:"3000",circular:"true","indicator-dots":"true","indicator-color":"#ddd","indicator-active-color":"#1976d2"},{default:v((()=>[(T(!0),C(I,null,b(i.imagePaths,((t,e)=>(T(),y(c,{key:e},{default:v((()=>[E(h,{class:"carousel-item"},{default:v((()=>[E(o,{class:"carousel-image",src:t},null,8,["src"]),E(h,{class:"carousel-content"},{default:v((()=>[E(h,{class:"carousel-text"},{default:v((()=>[E(a,{class:"promo-text"},{default:v((()=>[_(S(i.imagePromotions[t].title),1)])),_:2},1024),E(a,{class:"promo-subtext"},{default:v((()=>[_(S(i.imagePromotions[t].description),1)])),_:2},1024),E(u,{class:"promo-button"},{default:v((()=>[_("Redeem Now")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),E(h,{class:"section-title"},{default:v((()=>[_("Promotion")])),_:1}),E(h,{class:"promotion"},{default:v((()=>[(T(),C(I,null,b(2,(t=>E(h,{class:"promo-item",key:"promo-"+t},{default:v((()=>[E(o,{class:"promo-image",src:`/static/promo${t}.jpg`},null,8,["src"])])),_:2},1024))),64))])),_:1}),E(h,{class:"section-title"},{default:v((()=>[_("My Voucher")])),_:1}),E(h,{class:"voucher"},{default:v((()=>[(T(),C(I,null,b(2,(t=>E(h,{class:"voucher-item",key:"voucher-"+t},{default:v((()=>[E(o,{class:"voucher-image",src:`/static/voucher${t}.jpg`},null,8,["src"])])),_:2},1024))),64))])),_:1})])),_:1})}],["__scopeId","data-v-7ea718dc"]]);export{to as default};
