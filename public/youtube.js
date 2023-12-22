(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function v(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;ma=qa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=la;
function w(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function sa(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ta(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
sa.prototype.M=function(a){this.h=a};
function ua(a,b){a.i={pc:b,Ac:!0};a.g=a.o||a.u}
sa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function z(a,b,c){a.g=c;return{value:b}}
sa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.pc;a.i=null;return b}
function xa(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.Ac?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new sa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.j;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,ua(a.g,g),Ba(a)}a.g.j=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.Ac)throw b.pc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j["throw"],b,a.g.M):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.hb),reject:g(this.o)}};
b.prototype.hb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.jb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.za(g):this.u(g)}};
b.prototype.za=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.xb(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.ib();this.S()};
b.prototype.ib=function(){var g=this;e(function(){if(g.oa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.jb=function(g){var h=this.j();g.Ab(h.resolve,h.reject)};
b.prototype.xb=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(x){try{l(r(x))}catch(y){m(y)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.Ab(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ab=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).Ab(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(x){return function(y){r[x]=y;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).Ab(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Object.setPrototypeOf",function(a){return a||ra});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Sa;return Ta.apply(null,arguments)}
function Ua(){return Date.now()}
function D(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.le=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){}
function rb(a){return new qb(sb,a)}
var sb={};rb("");var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function Bb(a){this.g=a}
Bb.prototype.toString=function(){return this.g.toString()};
var Cb={},Db=new Bb("about:invalid#zClosurez",Cb);var Eb,Fb=C("CLOSURE_FLAGS"),Gb=Fb&&Fb[610401301];Eb=null!=Gb?Gb:!1;function Hb(){var a=B.navigator;return a&&(a=a.userAgent)?a:""}
var Ib,Jb=B.navigator;Ib=Jb?Jb.userAgentData||null:null;function Kb(a){return Eb?Ib?Ib.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Hb().indexOf(a)}
;function Qb(){return Eb?!!Ib&&0<Ib.brands.length:!1}
function Rb(){return Qb()?!1:E("Trident")||E("MSIE")}
function Sb(){return Qb()?Kb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Qb()?0:E("Edge"))||E("Silk")}
;function Tb(a){this.g=a}
Tb.prototype.toString=function(){return this.g.toString()};function Ub(a){Ab.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;")));return a}
;var Vb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a){var b=a.match(Vb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
var ac=/#|$/;function bc(a,b){var c=a.search(ac);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function cc(a){B.setTimeout(function(){throw a;},0)}
;function dc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=function(){};var fc=Qb()?!1:E("Opera"),gc=Rb(),hc=E("Edge"),ic=E("Gecko")&&!(-1!=Hb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),jc=-1!=Hb().toLowerCase().indexOf("webkit")&&!E("Edge");function kc(){var a=B.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=Hb();if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(gc){var oc=kc();if(null!=oc&&oc>parseFloat(mc)){lc=String(oc);break a}}lc=mc}var pc=lc,qc;if(B.document&&gc){var vc=kc();qc=vc?vc:parseInt(pc,10)||void 0}else qc=void 0;var wc=qc;var xc=dc()||E("iPod"),yc=E("iPad");!E("Android")||Sb();Sb();var zc=E("Safari")&&!(Sb()||(Qb()?0:E("Coast"))||(Qb()?0:E("Opera"))||(Qb()?0:E("Edge"))||(Qb()?Kb("Microsoft Edge"):E("Edg/"))||(Qb()?Kb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(dc()||E("iPad")||E("iPod"));var Ac={},Bc=null;
function Cc(a,b){La(a);void 0===b&&(b=0);if(!Bc){Bc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ac[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Bc[h]&&(Bc[h]=g)}}}b=Ac[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Dc="undefined"!==typeof Uint8Array,Ec=!gc&&"function"===typeof btoa;function Fc(a){return Array.prototype.slice.call(a)}
;var Gc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,v(Object.values({Yd:1,Xd:2,Wd:4,be:8,ae:16,Zd:32,Td:64,ce:128,Vd:256,Ud:512})));var Hc=Gc?function(a,b){a[Gc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ic(a){var b=G(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Fc(a)),Jc(a,b|1))}
var Kc=Gc?function(a,b){a[Gc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)},G=Gc?function(a){return a[Gc]|0}:function(a){return a.ga|0},Lc=Gc?function(a){return a[Gc]}:function(a){return a.ga},Jc=Gc?function(a,b){a[Gc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Mc(a,b){Object.isFrozen(a)&&(a=Fc(a));Jc(a,b);return a}
function Nc(a){Hc(a,1);return a}
function Oc(a,b){Jc(b,(a|0)&-255)}
function Pc(a,b){Jc(b,(a|34)&-221)}
function Qc(a){a=a>>10&1023;return 0===a?536870912:a}
;var Rc={};function Sc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc,Wc=[];Jc(Wc,39);Vc=Object.freeze(Wc);function Xc(a){if(a&2)throw Error();}
;function Yc(a){return a.displayName||a.name||"unknown type name"}
function Zc(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return!!a}
function $c(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function ad(a){if(!$c(a))throw Error("Expected an int64 value encoded as a number or a string but got "+a+" a "+Ka(a));"string"===typeof a?$c(a):$c(a);return a}
function bd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function cd(a){return null==a||"string"===typeof a?a:void 0}
function dd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Yc(b)+" but got "+(a&&Yc(a.constructor)));return a}
function ed(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Zb===Rc)return a;if(d){var e=d=G(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Jc(a,e);return new b(a)}}
;var fd;function H(a,b,c){null==a&&(a=fd);fd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=G(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Sc(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(gd(c,b,g),e=1023);d=d&-1047553|(e&1023)<<10;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(gd(c,g,{}),d|=256,b=1023),d=d&-1047553|(b&1023)<<10)}}Jc(a,d);return a}
function gd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function hd(a,b){return id(b)}
function id(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Dc&&null!=a&&a instanceof Uint8Array){if(Ec){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Cc(a);return a}}return a}
;function md(a,b,c){a=Fc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function nd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&G(a)&1?void 0:f&&G(a)&2?a:od(a,b,c,void 0!==d,e,f);else if(Sc(a)){var g={},h;for(h in a)g[h]=nd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function od(a,b,c,d,e,f){var g=d||c?G(a):0;d=d?!!(g&32):void 0;a=Fc(a);for(var h=0;h<a.length;h++)a[h]=nd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function pd(a){return a.Zb===Rc?a.toJSON():id(a)}
;function qd(a,b,c){c=void 0===c?Pc:c;if(null!=a){if(Dc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);return d&2?a:!b||d&68||!(d&32||0===d)?od(a,qd,d&4?Pc:c,!0,!1,!0):(Jc(a,d|34),a)}a.Zb===Rc&&(b=a.s,c=Lc(b),a=c&2?a:rd(a,b,c,!0));return a}}
function rd(a,b,c,d){a=a.constructor;b=sd(b,c,d);G(b);fd=b;b=new a(b);fd=void 0;return b}
function sd(a,b,c){var d=c||b&2?Pc:Oc,e=!!(b&32);a=md(a,b,function(f){return qd(f,e,d)});
Hc(a,32|(c?2:0));return a}
;function td(a,b){a=a.s;return ud(a,Lc(a),b)}
function ud(a,b,c,d){if(-1===c)return null;if(c>=Qc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function I(a,b,c){var d=a.s,e=Lc(d);Xc(e);vd(d,e,b,c);return a}
function vd(a,b,c,d,e){Sc(d);var f=Qc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Jc(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function wd(a,b,c,d){var e=b&2,f=ud(a,b,c);Array.isArray(f)||(f=Vc);var g=G(f);g&1||Nc(f);if(e)g&2||Hc(f,34),d&1||Object.freeze(f);else{e=!(d&2);var h=g&2;d&1||!h?e&&g&32&&!h&&Kc(f,32):(f=Nc(Fc(f)),vd(a,b,c,f))}return f}
function xd(a,b,c,d){a=a.s;var e=Lc(a);Xc(e);(c=yd(a,e,c))&&c!==b&&null!=d&&vd(a,e,c);vd(a,e,b,d)}
function zd(a,b,c){a=a.s;return yd(a,Lc(a),b)===c?c:-1}
function yd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=ud(a,b,f)&&(0!==d&&vd(a,b,d),d=f)}return d}
function Ad(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Lc(e),g=ud(e,f,c,d);b=ed(g,b,f);b!==g&&null!=b&&vd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Lc(a);if(!(f&2)){g=e;b=g.s;var h=Lc(b);g=h&2?rd(g,b,h,!1):g;g!==e&&(e=g,vd(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?dd(d,b):d=void 0;return I(a,c,d)}
function Bd(a,b,c,d,e){null!=e?dd(e,b):e=void 0;xd(a,c,d,e)}
function Cd(a,b,c,d){a=a.s;var e=Lc(a);Xc(e);var f=!!(e&2),g=wd(a,e,b,1);if(g!==Vc&&G(g)&4){if(f)f=G(g),g=Fc(g),Jc(g,f),vd(a,e,b,g);else{f=Object.isFrozen(g);var h=G(g);var k=h&-35;f&&(g=Fc(g),h=0,vd(a,e,b,g));h!==k&&Jc(g,k)}b=g}else{f=g;h=!!(e&2);k=!!(G(f)&2);g=f;!h&&k&&(f=Fc(f));h=e|(k?2:0);k=k||void 0;for(var l=0,m=0;l<f.length;l++){var n=ed(f[l],c,h);void 0!==n&&(k=k||Lc(n.s)&2,f[m++]=n)}m<l&&(f.length=m);k=!k;h=G(f);l=h|5;k=k?l|8:l&-9;h!=k&&(f=Mc(f,k));g!==f&&vd(a,e,b,f);b=f}c=null!=d?dd(d,c):
new c;b.push(c);G(c.s)&2&&Kc(b,8)}
function Dd(a,b,c){if(null!=c&&"number"!==typeof c)throw Error();I(a,b,c)}
function Ed(a,b,c){I(a,b,null==c?c:ad(c))}
function K(a,b,c){return I(a,b,bd(c))}
function Fd(a,b){var c=void 0===c?"":c;a=cd(td(a,b));return null!=a?a:c}
function Gd(a,b){b=zd(a,Hd,b);return cd(td(a,b))}
;function L(a,b,c){this.s=H(a,b,c)}
L.prototype.toJSON=function(){if(Uc)var a=Id(this,this.s,!1);else a=od(this.s,pd,void 0,void 0,!1,!1),a=Id(this,a,!0);return a};
function Jd(a){Uc=!0;try{return JSON.stringify(a.toJSON(),hd)}finally{Uc=!1}}
L.prototype.clone=function(){var a=this.s;return rd(this,a,Lc(a),!1)};
L.prototype.Zb=Rc;L.prototype.toString=function(){return Id(this,this.s,!1).toString()};
function Id(a,b,c){var d=a.constructor.ma,e=Lc(c?a.s:b),f=Qc(e);e=!1;if(d){if(!c){b=Fc(b);var g;if(b.length&&Sc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Lc(a.s);a=Qc(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Vc:Nc([]):c&&m!==Vc&&Ic(m)}else h||(m=void 0,g.length&&Sc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Vc:Nc([]):c&&m!==Vc&&Ic(m)}d=b.length;if(!d)return b;var n;
if(Sc(h=b[d-1])){a:{var r=h;g={};c=!1;for(var p in r)a=r[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){r=g;break a}r=null}}r!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!n&&!y)return b;var F;e?F=b:F=Array.prototype.slice.call(b,0,d);b=F;e&&(b.length=d);r&&b.push(r);return b}
;var Kd=window;rb("csi.gstatic.com");rb("googleads.g.doubleclick.net");rb("partner.googleadservices.com");rb("pubads.g.doubleclick.net");rb("securepubads.g.doubleclick.net");rb("tpc.googlesyndication.com");function Ld(a,b){this.width=a;this.height=b}
q=Ld.prototype;q.clone=function(){return new Ld(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.Tb=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Md(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Nd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Od(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Pd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Qd[c])c=Qd[c];else{c=String(c);if(!Qd[c]){var f=/function\s+([^\(]+)/m.exec(c);Qd[c]=f?f[1]:"[Anonymous]"}c=Qd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Pd(a,b){b||(b={});b[Rd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Rd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Pd(a,b));return c}
function Rd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Qd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Sd;try{new URL("s://g"),Sd=!0}catch(a){Sd=!1}var Td=Sd;function Ud(){throw Error("unknown trace type");}
;function Vd(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Bb)b instanceof Bb&&b.constructor===Bb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(Td){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Wd(a){this.rd=a}
function Xd(a){return new Wd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Yd=[Xd("data"),Xd("http"),Xd("https"),Xd("mailto"),Xd("ftp"),new Wd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Zd(a,b){b=void 0===b?Yd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Wd&&d.rd(a))return new Bb(a,Cb)}}
function $d(a){var b=void 0===b?Yd:b;return Zd(a,b)||Db}
;function ae(a){var b=be;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ce(){var a=[];ae(function(b){a.push(b)});
return a}
var be={Id:"allow-forms",Jd:"allow-modals",Kd:"allow-orientation-lock",Ld:"allow-pointer-lock",Md:"allow-popups",Nd:"allow-popups-to-escape-sandbox",Od:"allow-presentation",Pd:"allow-same-origin",Qd:"allow-scripts",Rd:"allow-top-navigation",Sd:"allow-top-navigation-by-user-activation"},de=$a(function(){return ce()});
function ee(){var a=fe(),b={};bb(de(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function fe(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var ge=(new Date).getTime();function he(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ie(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],y=e[2],F=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var V=F^x&(y^F);var Q=1518500249}else V=x^y^F,Q=1859775393;else 60>p?(V=x&y|F&(x|y),Q=2400959708):(V=x^y^F,Q=3395469782);V=((n<<5|n>>>27)&4294967295)+V+O+Q+r[p]&4294967295;O=F;F=y;y=(x<<30|x>>>2)&4294967295;x=n;n=V}e[0]=e[0]+n&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,y=n.length;x<y;++x)p.push(n.charCodeAt(x));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var x=24;0<=x;x-=8)n[r++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ad:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function je(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,ke(he(d),a,c||null)].join(" "):null}
function ke(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],bb(d,function(h){e.push(h)}),le(e.join(" "));
var f=[],g=[];bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];bb(d,function(h){e.push(h)});
a=le(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function le(a){var b=ie();b.update(a);return b.ad().toLowerCase()}
;var me={};function ne(a){this.g=a||{cookie:""}}
q=ne.prototype;q.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.Tb())return!0;this.set("TESTCOOKIESENABLED","1",{Wb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.se;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Wb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Wb:0,path:b,domain:c});return d};
q.Tb=function(){return!this.g.cookie};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var oe=new ne("undefined"==typeof document?null:document);function pe(a){return!!me.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function qe(a,b,c,d){(a=B[a])||"undefined"===typeof document||(a=(new ne(document)).get(b));return a?je(a,c,d):null}
function re(a){var b=void 0===b?!1:b;var c=he(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;pe(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new ne(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");pe(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
B.__SAPISID:B.__APISID,e||"undefined"===typeof document||(e=new ne(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?je(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&pe(b)&&((b=qe("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=qe("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var se="undefined"!==typeof TextEncoder?new TextEncoder:null,te=se?function(a){return se.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ue(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ve(){this.Ka=this.Ka;this.oa=this.oa}
ve.prototype.Ka=!1;ve.prototype.dispose=function(){this.Ka||(this.Ka=!0,this.sa())};
ve.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function we(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
we.prototype.stopPropagation=function(){this.i=!0};
we.prototype.preventDefault=function(){this.defaultPrevented=!0};var xe=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
B.addEventListener("test",c,b);B.removeEventListener("test",c,b)}catch(d){}return a}();function ye(a,b){we.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(ye,we);var ze={2:"touch",3:"pen",4:"mouse"};
ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(ic){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ze[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&ye.na.preventDefault.call(this)};
ye.prototype.stopPropagation=function(){ye.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ye.prototype.preventDefault=function(){ye.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1E6*Math.random()|0);var Be=0;function Ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Eb=e;this.key=++Be;this.ub=this.zb=!1}
function De(a){a.ub=!0;a.listener=null;a.proxy=null;a.src=null;a.Eb=null}
;function He(a){this.src=a;this.listeners={};this.g=0}
He.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Ie(a,b,d,e);-1<g?(b=a[g],c||(b.zb=!1)):(b=new Ce(b,this.src,f,!!d,e),b.zb=c,a.push(b));return b};
He.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ie(e,b,c,d);return-1<b?(De(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Je(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(De(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Ie(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ub&&f.listener==b&&f.capture==!!c&&f.Eb==d)return e}return-1}
;var Ke="closure_lm_"+(1E6*Math.random()|0),Le={},Me=0;function Ne(a,b,c,d,e){if(d&&d.once)Oe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ne(a,b[f],c,d,e);else c=Pe(c),a&&a[Ae]?a.Oa(b,c,Ma(d)?!!d.capture:!!d,e):Qe(a,b,c,!1,d,e)}
function Qe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=Re(a);h||(a[Ke]=h=new He(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Se();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Te(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Me++}}
function Se(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ue;return a}
function Oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Oe(a,b[f],c,d,e);else c=Pe(c),a&&a[Ae]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):Qe(a,b,c,!0,d,e)}
function Ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ve(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Pe(c),a&&a[Ae])?a.g.remove(String(b),c,d,e):a&&(a=Re(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ie(b,c,d,e)),(c=-1<a?b[a]:null)&&We(c))}
function We(a){if("number"!==typeof a&&a&&!a.ub){var b=a.src;if(b&&b[Ae])Je(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Te(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Me--;(c=Re(b))?(Je(c,a),0==c.g&&(c.src=null,b[Ke]=null)):De(a)}}}
function Te(a){return a in Le?Le[a]:Le[a]="on"+a}
function Ue(a,b){if(a.ub)a=!0;else{b=new ye(b,this);var c=a.listener,d=a.Eb||a.src;a.zb&&We(a);a=c.call(d,b)}return a}
function Re(a){a=a[Ke];return a instanceof He?a:null}
var Xe="__closure_events_fn_"+(1E9*Math.random()>>>0);function Pe(a){if("function"===typeof a)return a;a[Xe]||(a[Xe]=function(b){return a.handleEvent(b)});
return a[Xe]}
;function Ye(){ve.call(this);this.g=new He(this);this.M=this;this.u=null}
Va(Ye,ve);Ye.prototype[Ae]=!0;Ye.prototype.addEventListener=function(a,b,c,d){Ne(this,a,b,c,d)};
Ye.prototype.removeEventListener=function(a,b,c,d){Ve(this,a,b,c,d)};
function Ze(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new we(b,a):b instanceof we?b.target=b.target||a:(e=b,b=new we(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=$e(g,c,!0,b)&&e}b.i||(g=b.g=a,e=$e(g,c,!0,b)&&e,b.i||(e=$e(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=$e(g,c,!1,b)&&e}
Ye.prototype.sa=function(){Ye.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,De(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Ye.prototype.Oa=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function $e(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ub&&g.capture==c){var h=g.listener,k=g.Eb||g.src;g.zb&&Je(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function af(a){Ye.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return A(function(e){return z(e,bf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||cf(this)}
w(af,Ye);function df(){var a=ef;af.g||(af.g=new af(a));return af.g}
af.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete af.g};
af.prototype.ca=function(){return this.h};
function cf(a){a.H=a.ha.qa(function(){var b;return A(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):z(c,bf(a),3):z(c,bf(a),3);cf(a);c.g=0})},3E4)}
function bf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?Ze(a,"networkstatus-online"):Ze(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function ff(){this.data=[];this.g=-1}
ff.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
ff.prototype.get=function(a){return!!this.data[a]};
function gf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function hf(a){this.s=H(a)}
w(hf,L);function jf(a){this.s=H(a)}
w(jf,L);function kf(a,b){return K(a,2,b)}
function lf(a,b){return K(a,3,b)}
function mf(a,b){return K(a,4,b)}
function nf(a,b){return K(a,5,b)}
function of(a,b){return K(a,9,b)}
function pf(a,b){var c=a.s,d=Lc(c);Xc(d);if(null!=b){for(var e=!!b.length,f=0;f<b.length;f++){var g=b[f];dd(g,hf);e=e&&!(G(g.s)&2)}f=G(b);g=f|1;g=(e?g|8:g&-9)|4;g!=f&&(b=Mc(b,g))}null==b&&(b=void 0);vd(c,d,10,b);return a}
function qf(a,b){return I(a,11,null==b?b:Zc(b))}
function rf(a,b){return K(a,1,b)}
function sf(a,b){return I(a,7,null==b?b:Zc(b))}
jf.ma=[10,6];var tf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function uf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function vf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function wf(){var a=window;if(!vf(a))return null;var b=uf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(tf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function xf(a){var b;return qf(pf(nf(kf(rf(mf(sf(of(lf(new jf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new hf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function yf(){var a,b;return null!=(b=null==(a=wf())?void 0:a.then(function(c){return xf(c)}))?b:null}
;function zf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
zf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Af(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Bf;function Cf(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Md();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.mc;c.mc=null;e()}};
return function(e){d.next={mc:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Df(){this.h=this.g=null}
Df.prototype.add=function(a,b){var c=Ef.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Df.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Ef=new zf(function(){return new Ff},function(a){return a.reset()});
function Ff(){this.next=this.scope=this.g=null}
Ff.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Ff.prototype.reset=function(){this.next=this.scope=this.g=null};var Gf,Hf=!1,If=new Df;function Jf(a,b){Gf||Kf();Hf||(Gf(),Hf=!0);If.add(a,b)}
function Kf(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Gf=function(){a.then(Lf)}}else Gf=function(){var b=Lf;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&(Qb()||!E("Edge"))&&B.Window.prototype.setImmediate==B.setImmediate?(Bf||(Bf=Cf()),Bf(b)):B.setImmediate(b)}}
function Lf(){for(var a;a=If.remove();){try{a.g.call(a.scope)}catch(b){cc(b)}Af(Ef,a)}Hf=!1}
;function Mf(a,b){this.g=a[B.Symbol.iterator]();this.h=b}
Mf.prototype[Symbol.iterator]=function(){return this};
Mf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Nf(a,b){return new Mf(a,b)}
;function Of(){this.blockSize=-1}
;function Pf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va(Pf,Of);Pf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function Qf(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Pf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)Qf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Qf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Qf(this,e);f=0;break}}this.h=f;this.j+=b}};
Pf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Qf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Rf(){}
Rf.prototype.next=function(){return Sf};
var Sf={done:!0,value:void 0};function Tf(a){return{value:a,done:!1}}
Rf.prototype.ia=function(){return this};function Uf(a){if(a instanceof Vf||a instanceof Wf||a instanceof Xf)return a;if("function"==typeof a.next)return new Vf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Vf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new Vf(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function Vf(a){this.h=a}
Vf.prototype.ia=function(){return new Wf(this.h())};
Vf.prototype[Symbol.iterator]=function(){return new Xf(this.h())};
Vf.prototype.g=function(){return new Xf(this.h())};
function Wf(a){this.h=a}
w(Wf,Rf);Wf.prototype.next=function(){return this.h.next()};
Wf.prototype[Symbol.iterator]=function(){return new Xf(this.h)};
Wf.prototype.g=function(){return new Xf(this.h)};
function Xf(a){Vf.call(this,function(){return a});
this.i=a}
w(Xf,Vf);Xf.prototype.next=function(){return this.i.next()};function Yf(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yf)for(c=Zf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Zf(a){$f(a);return a.g.concat()}
q=Yf.prototype;q.has=function(a){return ag(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||bg;$f(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function bg(a,b){return a===b}
q.Tb=function(){return 0==this.size};
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return ag(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&$f(this),!0):!1};
function $f(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];ag(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],ag(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return ag(this.h,a)?this.h[a]:b};
q.set=function(a,b){ag(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Zf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Yf(this)};
q.keys=function(){return Uf(this.ia(!0)).g()};
q.values=function(){return Uf(this.ia(!1)).g()};
q.entries=function(){var a=this;return Nf(this.keys(),function(b){return[b,a.get(b)]})};
q.ia=function(a){$f(this);var b=0,c=this.i,d=this,e=new Rf;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Sf;var f=d.g[b++];return Tf(a?f:d.h[f])};
return e};
function ag(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var cg=B.JSON.stringify;function dg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function eg(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){fg(b,2,c)},function(c){fg(b,3,c)})}catch(c){fg(this,3,c)}}
function gg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
gg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var hg=new zf(function(){return new gg},function(a){a.reset()});
function ig(a,b,c){var d=hg.get();d.i=a;d.h=b;d.context=c;return d}
eg.prototype.then=function(a,b,c){return jg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
eg.prototype.$goog_Thenable=!0;eg.prototype.cancel=function(a){if(0==this.g){var b=new kg(a);Jf(function(){lg(this,b)},this)}};
function lg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?lg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):mg(c),ng(c,e,3,b)))}a.i=null}else fg(a,3,b)}
function og(a,b){a.h||2!=a.g&&3!=a.g||pg(a);a.j?a.j.next=b:a.h=b;a.j=b}
function jg(a,b,c,d){var e=ig(null,null,null);e.g=new eg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof kg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;og(a,e);return e.g}
eg.prototype.S=function(a){this.g=0;fg(this,2,a)};
eg.prototype.oa=function(a){this.g=0;fg(this,3,a)};
function fg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof eg){og(d,ig(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){qg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,pg(a),3!=b||c instanceof kg||rg(a,c))}}
function qg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function pg(a){a.u||(a.u=!0,Jf(a.M,a))}
function mg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
eg.prototype.M=function(){for(var a;a=mg(this);)ng(this,a,this.g,this.H);this.u=!1};
function ng(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,sg(b,c,d);else try{b.j?b.i.call(b.context):sg(b,c,d)}catch(e){tg.call(null,e)}Af(hg,b)}
function sg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function rg(a,b){a.o=!0;Jf(function(){a.o&&tg.call(null,b)})}
var tg=cc;function kg(a){Xa.call(this,a)}
Va(kg,Xa);kg.prototype.name="cancel";function N(a){ve.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(N,ve);q=N.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function ug(a,b,c){var d=vg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.wb(a)}}
q.wb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.fb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];wg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ka;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.wb(c)}}return 0!=e}return!1};
function wg(a,b,c){Jf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.wb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.sa=function(){N.na.sa.call(this);this.clear();this.i.length=0};function xg(a){this.g=a}
xg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,cg(b))};
xg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xg.prototype.remove=function(a){this.g.remove(a)};function yg(a){this.g=a}
Va(yg,xg);function zg(a){this.data=a}
function Ag(a){return void 0===a||a instanceof zg?a:new zg(a)}
yg.prototype.set=function(a,b){yg.na.set.call(this,a,Ag(b))};
yg.prototype.h=function(a){a=yg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bg(a){this.g=a}
Va(Bg,yg);Bg.prototype.set=function(a,b,c){if(b=Ag(b)){if(c){if(c<Ua()){Bg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Bg.na.set.call(this,a,b)};
Bg.prototype.h=function(a){var b=Bg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Bg.prototype.remove.call(this,a);else return b}};function Cg(){}
;function Dg(){}
Va(Dg,Cg);Dg.prototype[Symbol.iterator]=function(){return Uf(this.ia(!0)).g()};
Dg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Eg(a){this.g=a}
Va(Eg,Dg);q=Eg.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ia=function(a){var b=0,c=this.g,d=new Rf;d.next=function(){if(b>=c.length)return Sf;var e=c.key(b++);if(a)return Tf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Tf(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function Fg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Fg,Eg);function Gg(a,b){this.h=a;this.g=null;var c;if(c=gc)c=!(9<=Number(wc));if(c){Hg||(Hg=new Yf);this.g=Hg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Hg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Gg,Dg);var Ig={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hg=null;function Jg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ig[b]})}
q=Gg.prototype;q.set=function(a,b){this.g.setAttribute(Jg(a),b);Kg(this)};
q.get=function(a){a=this.g.getAttribute(Jg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(Jg(a));Kg(this)};
q.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Rf;d.next=function(){if(b>=c.length)return Sf;var e=c[b++];if(a)return Tf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Tf(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kg(this)};
function Kg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Lg(a,b){this.h=a;this.g=b+"::"}
Va(Lg,Dg);Lg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Lg.prototype.get=function(a){return this.h.get(this.g+a)};
Lg.prototype.remove=function(a){this.h.remove(this.g+a)};
Lg.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Rf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Tf(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},Mg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.ec=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ng={Ua:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
qc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Og={Ua:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
qc:function(a){return[].concat.apply([],a)}};
P.Bd=function(){Mg?(P.Ta=Uint8Array,P.pa=Uint16Array,P.Pc=Int32Array,P.assign(P,Ng)):(P.Ta=Array,P.pa=Array,P.Pc=Array,P.assign(P,Og))};
P.Bd();var Pg=!0;try{new Uint8Array(1)}catch(a){Pg=!1}
function Qg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new P.Ta(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Rg={};Rg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Sg={},Tg,Ug=[],Vg=0;256>Vg;Vg++){Tg=Vg;for(var Wg=0;8>Wg;Wg++)Tg=Tg&1?3988292384^Tg>>>1:Tg>>>1;Ug[Vg]=Tg}Sg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ug[(a^b[d])&255];return a^-1};var Xg={};Xg={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Yg(a){for(var b=a.length;0<=--b;)a[b]=0}
var Zg=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],$g=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ah=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],bh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ch=Array(576);Yg(ch);var dh=Array(60);Yg(dh);var eh=Array(512);Yg(eh);var fh=Array(256);Yg(fh);var gh=Array(29);Yg(gh);var hh=Array(30);Yg(hh);function ih(a,b,c,d,e){this.Lc=a;this.ed=b;this.dd=c;this.bd=d;this.vd=e;this.vc=a&&a.length}
var jh,kh,lh;function mh(a,b){this.oc=a;this.bb=0;this.Ea=b}
function nh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function oh(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,nh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function ph(a,b,c){oh(a,c[2*b],c[2*b+1])}
function qh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Mh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=qh(d[e]++,e))}
function Nh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.La[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.gb=0;a.da=a.matches=0}
function Oh(a){8<a.O?nh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function Ph(a,b,c){Oh(a);nh(a,c);nh(a,~c);P.Ua(a.K,a.window,b,c,a.pending);a.pending+=c}
function Qh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Rh(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&Qh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Qh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Sh(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.ob+2*d]<<8|a.K[a.ob+2*d+1];var f=a.K[a.Vb+d];d++;if(0===e)ph(a,f,b);else{var g=fh[f];ph(a,g+256+1,b);var h=Zg[g];0!==h&&(f-=gh[g],oh(a,f,h));e--;g=256>e?eh[e]:eh[256+(e>>>7)];ph(a,g,c);h=$g[g];0!==h&&(e-=hh[g],oh(a,e,h))}}while(d<a.da)}ph(a,256,b)}
function Th(a,b){var c=b.oc,d=b.Ea.Lc,e=b.Ea.vc,f=b.Ea.bd,g,h=-1;a.wa=0;a.Xa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.gb-=d[2*k+1])}b.bb=h;for(g=a.wa>>1;1<=g;g--)Rh(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],Rh(a,c,1),d=a.L[1],a.L[--a.Xa]=g,a.L[--a.Xa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Rh(a,c,1);while(2<=a.wa);a.L[--a.Xa]=
a.L[1];g=b.oc;k=b.bb;d=b.Ea.Lc;e=b.Ea.vc;f=b.Ea.ed;var l=b.Ea.dd,m=b.Ea.vd,n,r=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Xa]+1]=0;for(b=a.Xa+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.xa+=y*(n+x);e&&(a.gb+=y*(d[2*p+1]+x))}}if(0!==r){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Mh(c,h,a.ra)}
function Uh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Vh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do ph(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(ph(a,l,a.R),g--),ph(a,16,a.R),oh(a,g-3,2)):10>=g?(ph(a,17,a.R),oh(a,g-3,3)):(ph(a,18,a.R),oh(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Wh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var Xh=!1;function Yh(a,b,c){a.K[a.ob+2*a.da]=b>>>8&255;a.K[a.ob+2*a.da+1]=b&255;a.K[a.Vb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(fh[c]+256+1)]++,a.La[2*(256>b?eh[b]:eh[256+(b>>>7)])]++);return a.da===a.rb-1}
;function Zh(a,b){a.msg=Xg[b];return b}
function $h(a){for(var b=a.length;0<=--b;)a[b]=0}
function ai(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(P.Ua(a.output,b.K,b.tb,c,a.cb),a.cb+=c,b.tb+=c,a.fc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.tb=0))}
function bi(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Qb&&(a.C.Qb=Wh(a));Th(a,a.Gb);Th(a,a.Cb);Uh(a,a.X,a.Gb.bb);Uh(a,a.La,a.Cb.bb);Th(a,a.kc);for(e=18;3<=e&&0===a.R[2*bh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)oh(a,b?1:0,3),Ph(a,c,d);else if(4===a.strategy||g===f)oh(a,2+(b?1:0),3),Sh(a,ch,dh);else{oh(a,4+(b?1:0),3);c=a.Gb.bb+1;d=a.Cb.bb+1;e+=1;oh(a,c-257,5);oh(a,d-1,5);oh(a,e-4,4);for(f=0;f<e;f++)oh(a,a.R[2*bh[f]+
1],3);Vh(a,a.X,c-1);Vh(a,a.La,d-1);Sh(a,a.X,a.La)}Nh(a);b&&Oh(a);a.Z=a.l;ai(a.C)}
function R(a,b){a.K[a.pending++]=b}
function ci(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function di(a,b){var c=a.Bc,d=a.l,e=a.aa,f=a.Dc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ga,l=a.la,m=a.l+258,n=h[d+e-1],r=h[d+e];a.aa>=a.uc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.ab=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function ei(a){var b=a.T,c;do{var d=a.Nc-a.m-a.l;if(a.l>=b+(b-262)){P.Ua(a.window,a.window,b,b,0);a.ab-=b;a.l-=b;a.Z-=b;var e=c=a.Fb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,P.Ua(c,e.input,e.Ra,g,f),1===e.state.wrap?e.A=Rg(e.A,c,g,f):2===e.state.wrap&&(e.A=Sg(e.A,c,g,f)),e.Ra+=g,e.Sa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ga]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function fi(a,b){for(var c;;){if(262>a.m){ei(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=di(a,c));if(3<=a.G)if(c=Yh(a,a.l-a.ab,a.G-3),a.m-=a.G,a.G<=a.Xb&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=Yh(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(bi(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(bi(a,!0),0===a.C.F?3:4):a.da&&(bi(a,!1),0===a.C.F)?1:2}
function gi(a,b){for(var c,d;;){if(262>a.m){ei(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Gc=a.ab;a.G=2;0!==c&&a.aa<a.Xb&&a.l-c<=a.T-262&&(a.G=di(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.ab)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=Yh(a,a.l-1-a.Gc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Pa=0;a.G=2;a.l++;if(c&&(bi(a,!1),0===a.C.F))return 1}else if(a.Pa){if((c=Yh(a,0,a.window[a.l-1]))&&bi(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Pa=1,a.l++,a.m--}a.Pa&&(Yh(a,0,a.window[a.l-1]),a.Pa=0);a.Y=2>a.l?a.l:2;return 4===b?(bi(a,!0),0===a.C.F?3:4):a.da&&(bi(a,!1),0===a.C.F)?1:2}
function hi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){ei(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=Yh(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=Yh(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(bi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(bi(a,!0),0===a.C.F?3:4):
a.da&&(bi(a,!1),0===a.C.F)?1:2}
function ii(a,b){for(var c;;){if(0===a.m&&(ei(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=Yh(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(bi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(bi(a,!0),0===a.C.F?3:4):a.da&&(bi(a,!1),0===a.C.F)?1:2}
function ji(a,b,c,d,e){this.hd=a;this.ud=b;this.xd=c;this.td=d;this.fd=e}
var ki;ki=[new ji(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){ei(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,bi(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(bi(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return bi(a,!0),0===a.C.F?3:4;a.l>a.Z&&bi(a,!1);return 1}),
new ji(4,4,8,4,fi),new ji(4,5,16,8,fi),new ji(4,6,32,32,fi),new ji(4,4,16,16,gi),new ji(8,16,32,32,gi),new ji(8,16,128,128,gi),new ji(8,32,128,256,gi),new ji(32,128,258,1024,gi),new ji(32,258,258,4096,gi)];
function li(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.tb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ya=-1;this.Ga=this.hc=this.T=0;this.window=null;this.Nc=0;this.head=this.la=null;this.Dc=this.uc=this.strategy=this.level=this.Xb=this.Bc=this.aa=this.m=this.ab=this.l=this.Pa=this.Gc=this.G=this.Z=this.va=this.ta=this.Rb=this.Fb=this.D=0;this.X=new P.pa(1146);this.La=new P.pa(122);this.R=new P.pa(78);$h(this.X);$h(this.La);$h(this.R);this.kc=this.Cb=this.Gb=null;this.ra=
new P.pa(16);this.L=new P.pa(573);$h(this.L);this.Xa=this.wa=0;this.depth=new P.pa(573);$h(this.depth);this.O=this.V=this.Y=this.matches=this.gb=this.xa=this.ob=this.da=this.rb=this.Vb=0}
function mi(a,b){if(!a||!a.state||5<b||0>b)return a?Zh(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return Zh(a,0===a.F?-5:-2);c.C=a;var d=c.Ya;c.Ya=b;if(42===c.status)if(2===c.wrap)a.A=0,R(c,31),R(c,139),R(c,8),c.v?(R(c,(c.v.text?1:0)+(c.v.Ca?2:0)+(c.v.Ba?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),R(c,c.v.time&255),R(c,c.v.time>>8&255),R(c,c.v.time>>16&255),R(c,c.v.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.v.re&255),c.v.Ba&&c.v.Ba.length&&(R(c,
c.v.Ba.length&255),R(c,c.v.Ba.length>>8&255)),c.v.Ca&&(a.A=Sg(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.hc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;ci(c,e+(31-e%31));0!==c.l&&(ci(c,a.A>>>16),ci(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.Ba){for(e=c.pending;c.fa<(c.v.Ba.length&65535)&&(c.pending!==c.ea||(c.v.Ca&&c.pending>
e&&(a.A=Sg(a.A,c.K,c.pending-e,e)),ai(a),e=c.pending,c.pending!==c.ea));)R(c,c.v.Ba[c.fa]&255),c.fa++;c.v.Ca&&c.pending>e&&(a.A=Sg(a.A,c.K,c.pending-e,e));c.fa===c.v.Ba.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=Sg(a.A,c.K,c.pending-e,e)),ai(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;R(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=Sg(a.A,c.K,c.pending-
e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=Sg(a.A,c.K,c.pending-e,e)),ai(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;R(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=Sg(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ca?(c.pending+2>c.ea&&ai(a),c.pending+2<=c.ea&&(R(c,a.A&255),R(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(ai(a),0===a.F)return c.Ya=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Zh(a,-5);if(666===c.status&&0!==a.U)return Zh(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?ii(c,b):3===c.strategy?hi(c,b):ki[c.level].fd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ya=-1),0;if(2===d&&(1===b?(oh(c,2,3),ph(c,256,ch),16===c.O?(nh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.O-=
8)):5!==b&&(oh(c,0,3),Ph(c,0,0),3===b&&($h(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),ai(a),0===a.F))return c.Ya=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.A&255),R(c,a.A>>8&255),R(c,a.A>>16&255),R(c,a.A>>24&255),R(c,a.Sa&255),R(c,a.Sa>>8&255),R(c,a.Sa>>16&255),R(c,a.Sa>>24&255)):(ci(c,a.A>>>16),ci(c,a.A&65535));ai(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ni={};ni=function(){this.input=null;this.Sa=this.U=this.Ra=0;this.output=null;this.fc=this.F=this.cb=0;this.msg="";this.state=null;this.Qb=2;this.A=0};var oi=Object.prototype.toString;
function pi(a){if(!(this instanceof pi))return new pi(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,Ha:15,wd:8,strategy:0,Fa:""},a||{});a.raw&&0<a.Ha?a.Ha=-a.Ha:a.jd&&0<a.Ha&&16>a.Ha&&(a.Ha+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new ni;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ha,f=a.wd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Zh(b,-2);else{8===e&&(e=9);var k=new li;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.hc=e;k.T=1<<k.hc;k.Ga=k.T-1;k.Rb=f+7;k.Fb=1<<k.Rb;k.ta=k.Fb-1;k.va=~~((k.Rb+3-1)/3);k.window=new P.Ta(2*k.T);k.head=new P.pa(k.Fb);k.la=new P.pa(k.T);k.rb=1<<f+6;k.ea=4*k.rb;k.K=new P.Ta(k.ea);k.ob=1*k.rb;k.Vb=3*k.rb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Sa=b.fc=0;b.Qb=2;c=b.state;c.pending=0;c.tb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ya=0;if(!Xh){d=Array(16);for(f=g=0;28>f;f++)for(gh[f]=g,e=0;e<1<<Zg[f];e++)fh[g++]=
f;fh[g-1]=f;for(f=g=0;16>f;f++)for(hh[f]=g,e=0;e<1<<$g[f];e++)eh[g++]=f;for(g>>=7;30>f;f++)for(hh[f]=g<<7,e=0;e<1<<$g[f]-7;e++)eh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)ch[2*e+1]=8,e++,d[8]++;for(;255>=e;)ch[2*e+1]=9,e++,d[9]++;for(;279>=e;)ch[2*e+1]=7,e++,d[7]++;for(;287>=e;)ch[2*e+1]=8,e++,d[8]++;Mh(ch,287,d);for(e=0;30>e;e++)dh[2*e+1]=5,dh[2*e]=qh(e,5);jh=new ih(ch,Zg,257,286,15);kh=new ih(dh,$g,0,30,15);lh=new ih([],ah,0,19,7);Xh=!0}c.Gb=new mh(c.X,jh);c.Cb=new mh(c.La,kh);c.kc=new mh(c.R,
lh);c.V=0;c.O=0;Nh(c);c=0}else c=Zh(b,-2);0===c&&(b=b.state,b.Nc=2*b.T,$h(b.head),b.Xb=ki[b.level].ud,b.uc=ki[b.level].hd,b.Dc=ki[b.level].xd,b.Bc=ki[b.level].td,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Pa=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(Xg[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.pb){var l;"string"===typeof a.pb?l=Qg(a.pb):"[object ArrayBuffer]"===oi.call(a.pb)?l=new Uint8Array(a.pb):l=a.pb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=Rg(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&($h(l.head),l.l=0,l.Z=0,l.Y=0),c=new P.Ta(l.T),P.Ua(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Ra;e=a.input;a.U=g;a.Ra=0;a.input=f;for(ei(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ga]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;ei(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Pa=0;a.Ra=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Xg[b]);this.ie=!0}}
pi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Qg(a):"[object ArrayBuffer]"===oi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ra=0;c.U=c.input.length;do{0===c.F&&(c.output=new P.Ta(d),c.cb=0,c.F=d);a=mi(c,e);if(1!==a&&0!==a)return qi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Fa){var f=P.ec(c.output,c.cb);b=f;f=f.length;if(65537>f&&(b.subarray&&Pg||!b.subarray))b=
String.fromCharCode.apply(null,P.ec(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.ec(c.output,c.cb),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Zh(c,-2):(c.state=null,a=113===d?Zh(c,-3):0)):a=-2,qi(this,a),this.ended=!0,0===a;2===e&&(qi(this,0),c.F=0);return!0};
function qi(a,b){0===b&&(a.result="string"===a.options.Fa?a.chunks.join(""):P.qc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function ri(a){this.name=a}
;var si=new ri("rawColdConfigGroup");var ti=new ri("rawHotConfigGroup");function ui(a){this.s=H(a)}
w(ui,L);ui.prototype.g=function(a){K(this,5,a)};function vi(a){this.s=H(a)}
w(vi,L);function wi(a){this.s=H(a)}
w(wi,L);wi.ma=[2];function xi(a){this.s=H(a)}
w(xi,L);xi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=td(this,36);return null!=b?b:a};
xi.prototype.setHomeGroupInfo=function(a){return J(this,wi,81,a)};
xi.ma=[9,66,32,86,100,101];function yi(a){this.s=H(a)}
w(yi,L);yi.prototype.getKey=function(){return Fd(this,1)};
yi.prototype.ja=function(){return Fd(this,zd(this,zi,2))};
var zi=[2,3,4,5,6];function Ai(a){this.s=H(a)}
w(Ai,L);Ai.ma=[15,26,28];function Bi(a){this.s=H(a)}
w(Bi,L);Bi.ma=[5];function Ci(a){this.s=H(a)}
w(Ci,L);function Di(a){this.s=H(a)}
w(Di,L);Di.prototype.setSafetyMode=function(a){return I(this,5,a)};
Di.ma=[12];function Ei(a){this.s=H(a)}
w(Ei,L);Ei.ma=[12];var Fi={he:"WEB_DISPLAY_MODE_UNKNOWN",de:"WEB_DISPLAY_MODE_BROWSER",fe:"WEB_DISPLAY_MODE_MINIMAL_UI",ge:"WEB_DISPLAY_MODE_STANDALONE",ee:"WEB_DISPLAY_MODE_FULLSCREEN"};function Gi(a){this.s=H(a)}
w(Gi,L);Gi.prototype.getKey=function(){return Fd(this,1)};
Gi.prototype.ja=function(){return Fd(this,2)};function Hi(a){this.s=H(a)}
w(Hi,L);Hi.ma=[4,5];function Ii(a){this.s=H(a)}
w(Ii,L);function Ji(a){this.s=H(a)}
w(Ji,L);var Ki=[2,3,4,5];function Li(a){this.s=H(a)}
w(Li,L);function Mi(a){this.s=H(a)}
w(Mi,L);function Ni(a){this.s=H(a)}
w(Ni,L);function Oi(a){this.s=H(a)}
w(Oi,L);Oi.ma=[10,17];function Pi(a){this.s=H(a)}
w(Pi,L);function Qi(a){this.s=H(a)}
w(Qi,L);function Ri(a){this.s=H(a)}
w(Ri,L);function Si(a){this.s=H(a,482)}
w(Si,L);
var Ti=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481];function Ui(a){this.s=H(a)}
w(Ui,L);function Vi(a){this.s=H(a)}
w(Vi,L);Vi.prototype.getPlaylistId=function(){return Gd(this,2)};
var Hd=[1,2];function Wi(a){this.s=H(a)}
w(Wi,L);Wi.ma=[3];var Xi=B.window,Yi,Zi,$i=(null==Xi?void 0:null==(Yi=Xi.yt)?void 0:Yi.config_)||(null==Xi?void 0:null==(Zi=Xi.ytcfg)?void 0:Zi.data_)||{};D("yt.config_",$i);function aj(){var a=arguments;1<a.length?$i[a[0]]=a[1]:1===a.length&&Object.assign($i,a[0])}
function S(a,b){return a in $i?$i[a]:b}
function bj(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function cj(){var a=$i.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var dj=[];function ej(a){dj.forEach(function(b){return b(a)})}
function fj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gj(b)}}:a}
function gj(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),aj("ERRORS",b));ej(a)}
function hj(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),aj("ERRORS",f))}
;function T(a){a=ij(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=ij(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ij(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function jj(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var kj=0;D("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++kj});var lj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function mj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in lj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
mj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
mj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
mj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=B.ytEventsEventsListeners||{};D("ytEventsEventsListeners",kb);var nj=B.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",nj);
function oj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function pj(a){a&&("string"==typeof a&&(a=[a]),bb(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?qj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var qj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function rj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=oj(a,b,c,d);if(!e){e=++nj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new mj(h);if(!Nd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new mj(h);
h.currentTarget=a;return c.call(a,h)};
g=fj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),qj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d]}}}
;function sj(a,b){"function"===typeof a&&(a=fj(a));return window.setTimeout(a,b)}
function tj(a){"function"===typeof a&&(a=fj(a));return window.setInterval(a,250)}
;var uj=/^[\w.]*$/,vj={q:!0,search_query:!0};function wj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=xj(f[0]||""),h=xj(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(wj);k.args=[{key:l,value:f[1],query:a,method:yj==m?"unchanged":m}];vj.hasOwnProperty(l)||hj(k)}}return c}
var yj=String(wj);function zj(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];bb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Aj(a){"?"==a.charAt(0)&&(a=a.substr(1));return wj(a,"&")}
function Bj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Aj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=$b(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Cj(a){if(!b)var b=window.location.href;var c=a.match(Vb)[1]||null,d=Xb(a);c&&d?(a=a.match(Vb),b=b.match(Vb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Xb(b)==d&&(Number(b.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;return a}
function xj(a){return a&&a.match(uj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Dj(a){var b=Ej;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ge;e.flash="0";a:{try{var f=b.g.top.location.href}catch(da){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Kd:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;var k;e.u_h=null==(k=Kd.screen)?void 0:k.height;var l;e.u_w=null==(l=Kd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Kd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Kd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Kd.screen)?void 0:r.colorDepth}catch(da){}h=b.g;try{var p=h.screenX;var x=h.screenY}catch(da){}try{var y=h.outerWidth;var F=h.outerHeight}catch(da){}try{var O=h.innerWidth;var V=h.innerHeight}catch(da){}try{var Q=h.screenLeft;var Fa=h.screenTop}catch(da){}try{O=h.innerWidth,V=h.innerHeight}catch(da){}try{var Tc=h.screen.availWidth;var Ra=h.screen.availTop}catch(da){}p=[Q,Fa,p,x,Tc,Ra,y,F,O,V];x=b.g.top;try{var Ga=(x||window).document,ea=
"CSS1Compat"==Ga.compatMode?Ga.documentElement:Ga.body;var na=(new Ld(ea.clientWidth,ea.clientHeight)).round()}catch(da){na=new Ld(-12245933,-12245933)}Ga=na;na={};var oa=void 0===oa?B:oa;ea=new ff;"SVGElement"in oa&&"createElementNS"in oa.document&&ea.set(0);x=ee();x["allow-top-navigation-by-user-activation"]&&ea.set(1);x["allow-popups-to-escape-sandbox"]&&ea.set(2);oa.crypto&&oa.crypto.subtle&&ea.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&ea.set(4);oa=gf(ea);na.bc=oa;na.bih=Ga.height;na.biw=
Ga.width;na.brdim=p.join();b=b.h;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Kd.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ej=new function(){var a=window.document;this.g=window;this.h=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return zj(Dj(a))});Ua();var Fj="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Gj(){if(!Fj)return null;var a=Fj();return"open"in a?a:null}
;var Hj="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");v(Hj);var Ij={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Jj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(v(Hj)),Kj=!1;
function Lj(a,b){b=void 0===b?{}:b;var c=Cj(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in Ij){var f=S(Ij[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Xb(a)||d&&void 0!==b[e]||(!T("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}T("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==S("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Xb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Xb(a)||(b["X-YouTube-Ad-Signals"]=zj(Dj()));return b}
function Mj(a){var b=window.location.search,c=Xb(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Cj(a)&&(c=document.location.hostname);var d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Aj(b),f={};bb(Jj,function(g){e[g]&&(f[g]=e[g])});
return Bj(a,f||{},!1)}
function Nj(a,b){var c=b.format||"JSON";a=Oj(a,b);var d=Pj(a,b),e=!1,f=Qj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Rj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=sj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},d)}return f}
function Oj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Bj(a,b||{},!0);return a}
function Pj(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Aj(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):$b(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Kj&&a&&"POST"!=b.method&&(Kj=!0,gj(Error("AJAX request with postData should use POST")));return e}
function Rj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Sj(a):null)e={},bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Tj(g)})}d&&Uj(e);
return e}
function Uj(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===pb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){B.console&&B.console.error(g.message)}pb=e}else pb=e}d=(e=pb)?e.createHTML(d):d;a[c]=new Tb(d)}else Uj(a[b])}}
function Sj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Tj(a){var b="";bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Vj(a,b){b.method="POST";b.postParams||(b.postParams={});return Nj(a,b)}
function Qj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&fj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Gj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Mj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Lj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Wj=[{Yb:function(a){return"Cannot read property '"+a.key+"'"},
Kb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Yb:function(a){return"Cannot call '"+a.key+"'"},
Kb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Yb:function(a){return a.key+" is not defined"},
Kb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Yj={Da:[],Aa:[{nb:Xj,weight:500}]};function Xj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Zj(){this.Aa=[];this.Da=[]}
var ak;function bk(){if(!ak){var a=ak=new Zj;a.Da.length=0;a.Aa.length=0;Yj.Da&&a.Da.push.apply(a.Da,Yj.Da);Yj.Aa&&a.Aa.push.apply(a.Aa,Yj.Aa)}return ak}
;var ck=new N;function dk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ek(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ek(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ek(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ek(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function fk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=gk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=dk(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?gk(e+".ve",f,g,h):0;d+=g;d+=gk(e,a[e],b,c);if(500<d)break}}else c[b]=hk(a),d+=c[b].length;else c[b]=hk(a),d+=c[b].length;return d}
function gk(a,b,c,d){c+="."+a;a=hk(b);d[c]=a;return c.length+a.length}
function hk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ik(){}
;function jk(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function kk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;D("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var lk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},mk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},nk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ok={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function pk(){var a=B.navigator;return a?a.connection:void 0}
;function qk(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(v(b))}
w(qk,Error);function rk(){try{return sk(),!0}catch(a){return!1}}
function sk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new qk("Datasync ID not set","unknown");}
;function tk(){}
function uk(a,b){return ef.Ia(a,0,b)}
tk.prototype.qa=function(a,b){return this.Ia(a,1,b)};
tk.prototype.kb=function(a){var b=C("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var vk=U("web_emulated_idle_callback_delay",300),wk=1E3/60-3,xk=[8,5,4,3,2,1,0];
function yk(a){a=void 0===a?{}:a;ve.call(this);this.h=[];this.i={};this.ib=this.g=0;this.hb=this.o=!1;this.M=[];this.S=this.jb=!1;for(var b=u(xk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Uc=a.timeout||1;this.H=wk;this.u=0;this.xb=this.yd.bind(this);this.Tc=this.Dd.bind(this);this.Qc=this.Vc.bind(this);this.Rc=this.kd.bind(this);this.Sc=this.zd.bind(this);this.ic=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.za=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xb)}
w(yk,ve);q=yk.prototype;q.kb=function(a){var b=Ua();zk(a);a=Ua()-b;this.o||(this.H-=a)};
q.Ia=function(a,b,c){++this.ib;if(10===b)return this.kb(a),this.ib;var d=this.ib;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.hb||this.o||(0!==this.g&&Ak(this)!==this.u&&Bk(this),this.start()));return d};
q.ba=function(a){delete this.i[a]};
function Ck(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Bk(a)}
function Ak(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.za)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.za?3:2:1;return 0}
function Dk(a){var b=C("yt.logging.errors.log");b&&b(a)}
function zk(a){try{a()}catch(b){Dk(b)}}
function Ek(a){for(var b=u(xk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
q.kd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.jb=!0;Fk(this,b);this.jb=!1};
q.Dd=function(){Fk(this)};
q.Vc=function(){Gk(this)};
q.zd=function(a){this.S=!0;var b=Ak(this);4===b&&b!==this.u&&(Bk(this),this.start());Fk(this,void 0,a);this.S=!1};
q.yd=function(){document.hidden||Gk(this);this.g&&(Bk(this),this.start())};
function Gk(a){Bk(a);a.o=!0;for(var b=Ua(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&zk(e)}Hk(a);a.o=!1;Ek(a)&&a.start();b=Ua()-b;a.H-=b}
function Hk(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Fk(a,b,c){a.S&&4===a.u&&a.g||Bk(a);a.o=!0;b=Ua()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Dk(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&zk(e);d=a.jb?0:1;d=a.j>d?a.j:d;if(!(Ua()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&zk(c)}while(c&&Ua()<b)}a.o=!1;Hk(a);a.H=wk;Ek(a)&&a.start()}
q.start=function(){this.hb=!1;if(0===this.g)switch(this.u=Ak(this),this.u){case 1:var a=this.Rc;this.g=this.ic?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,vk);break;case 2:this.g=window.setTimeout(this.Tc,this.Uc);break;case 3:this.g=window.requestAnimationFrame(this.Sc);break;case 4:this.g=window.setTimeout(this.Qc,0)}};
function Bk(a){if(a.g){switch(a.u){case 1:var b=a.g;a.ic?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
q.sa=function(){Ck(this);Bk(this);this.za&&document.removeEventListener("visibilitychange",this.xb);ve.prototype.sa.call(this)};var Ik=C("yt.scheduler.instance.timerIdMap_")||{},Jk=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Kk=0,Lk=0;function Mk(){var a=C("ytglobal.schedulerInstanceInstance_");if(!a||a.Ka)a=new yk(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Nk(){Ok();var a=C("ytglobal.schedulerInstanceInstance_");a&&(ue(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Ok(){Ck(Mk());for(var a in Ik)Ik.hasOwnProperty(a)&&delete Ik[Number(a)]}
function Pk(a,b,c){if(!c)return c=void 0===c,-Mk().Ia(a,b,c);var d=window.setTimeout(function(){var e=Mk().Ia(a,b);Ik[d]=e},c);
return d}
function Qk(a){Mk().kb(a)}
function Rk(a){var b=Mk();if(0>a)b.ba(-a);else{var c=Ik[a];c?(b.ba(c),delete Ik[a]):window.clearTimeout(a)}}
function Sk(){Tk()}
function Tk(){window.clearTimeout(Kk);Mk().start()}
function Uk(){var a=Mk();Bk(a);a.hb=!0;window.clearTimeout(Kk);Kk=window.setTimeout(Sk,Jk)}
function Vk(){window.clearTimeout(Lk);Lk=window.setTimeout(function(){Wk(0)},Jk)}
function Wk(a){Vk();var b=Mk();b.j=a;b.start()}
function Xk(a){Vk();var b=Mk();b.j>a&&(b.j=a,b.start())}
function Yk(){window.clearTimeout(Lk);var a=Mk();a.j=0;a.start()}
;function Zk(){tk.apply(this,arguments)}
w(Zk,tk);function $k(){Zk.g||(Zk.g=new Zk);return Zk.g}
Zk.prototype.Ia=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):sj(a,c||0)};
Zk.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var ef=$k();
T("web_scheduler_auto_init")&&!C("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Nk),D("yt.scheduler.instance.addJob",Pk),D("yt.scheduler.instance.addImmediateJob",Qk),D("yt.scheduler.instance.cancelJob",Rk),D("yt.scheduler.instance.cancelAllJobs",Ok),D("yt.scheduler.instance.start",Tk),D("yt.scheduler.instance.pause",Uk),D("yt.scheduler.instance.setPriorityThreshold",Wk),D("yt.scheduler.instance.enablePriorityThreshold",Xk),D("yt.scheduler.instance.clearPriorityThreshold",Yk),D("yt.scheduler.initialized",
!0));function al(a){var b=new Fg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Lg(b,a):b:null)||(a=new Gg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Bg(a):null;this.h=document.domain||window.location.hostname}
al.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(cg(b))}catch(f){return}else e=escape(b);b=this.h;oe.set(""+a,e,{Wb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
al.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=oe.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
al.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;oe.remove(""+a,"/",void 0===b?"youtube.com":b)};var bl=function(){var a;return function(){a||(a=new al("ytidb"));return a}}();
function cl(){var a;return null==(a=bl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dl=[],el=!1;function fl(a){el||(dl.push({type:"ERROR",payload:a}),10<dl.length&&dl.shift())}
function gl(a,b){el||(dl.push({type:"EVENT",eventType:a,payload:b}),10<dl.length&&dl.shift())}
;function hl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function il(a){return a.substr(0,a.indexOf(":"))||a}
;var jl=xc||yc;var kl={},ll=(kl.AUTH_INVALID="No user identifier specified.",kl.EXPLICIT_ABORT="Transaction was explicitly aborted.",kl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",kl.MISSING_INDEX="Index not created.",kl.MISSING_OBJECT_STORES="Object stores not created.",kl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",kl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",kl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
kl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",kl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",kl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",kl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",kl),ml={},nl=(ml.AUTH_INVALID="ERROR",ml.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ml.EXPLICIT_ABORT="IGNORED",ml.IDB_NOT_SUPPORTED="ERROR",ml.MISSING_INDEX=
"WARNING",ml.MISSING_OBJECT_STORES="ERROR",ml.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ml.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ml.QUOTA_EXCEEDED="WARNING",ml.QUOTA_MAYBE_EXCEEDED="WARNING",ml.UNKNOWN_ABORT="WARNING",ml.INCOMPATIBLE_DB_VERSION="WARNING",ml),ol={},pl=(ol.AUTH_INVALID=!1,ol.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ol.EXPLICIT_ABORT=!1,ol.IDB_NOT_SUPPORTED=!1,ol.MISSING_INDEX=!1,ol.MISSING_OBJECT_STORES=!1,ol.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ol.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ol.QUOTA_EXCEEDED=!1,ol.QUOTA_MAYBE_EXCEEDED=!0,ol.UNKNOWN_ABORT=!0,ol.INCOMPATIBLE_DB_VERSION=!1,ol);function W(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ll[a]:c;d=void 0===d?nl[a]:d;e=void 0===e?pl[a]:e;qk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
w(W,qk);function ql(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ll.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ql.prototype)}
w(ql,W);function rl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,rl.prototype)}
w(rl,Error);var sl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function tl(a,b,c,d){b=il(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new W("QUOTA_EXCEEDED",a);if(zc&&"UnknownError"===e.name)return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof rl)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&sl.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qe:e.name})];e.level="WARNING";return e}
function ul(a,b,c){var d=cl();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function vl(a){if(!a)throw Error();throw a;}
function wl(a){return a}
function xl(a){this.g=a}
function yl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
yl.resolve=function(a){return new yl(new xl(function(b,c){a instanceof yl?a.then(b,c):b(a)}))};
yl.reject=function(a){return new yl(new xl(function(b,c){c(a)}))};
yl.prototype.then=function(a,b){var c=this,d=null!=a?a:wl,e=null!=b?b:vl;return new yl(new xl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){zl(c,c,d,f,g)}),c.h.push(function(){Al(c,c,e,f,g)})):"FULFILLED"===c.state.status?zl(c,c,d,f,g):"REJECTED"===c.state.status&&Al(c,c,e,f,g)}))};
function Bl(a,b){a.then(void 0,b)}
function zl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof yl?Cl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Al(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof yl?Cl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof yl?Cl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Dl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function El(a){return new Promise(function(b,c){Dl(a,b,c)})}
function Fl(a){return new yl(new xl(function(b,c){Dl(a,b,c)}))}
;function Gl(a,b){return new yl(new xl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Hl=window,Y=Hl.ytcsi&&Hl.ytcsi.now?Hl.ytcsi.now:Hl.performance&&Hl.performance.timing&&Hl.performance.now&&Hl.performance.timing.navigationStart?function(){return Hl.performance.timing.navigationStart+Hl.performance.now()}:function(){return(new Date).getTime()};function Il(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
q=Il.prototype;q.add=function(a,b,c){return Jl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Jl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Kl(a,b,c){a=a.g.createObjectStore(b,c);return new Ll(a)}
q.delete=function(a,b){return Jl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Jl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Ml(a,b,c){return Jl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Fl(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Jl(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,x,y;return A(function(F){switch(F.g){case 1:var O={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){F.B(4);break}g++;k=Math.round(Y());va(F,5);l=a.g.transaction(b,e.mode);O=new Nl(l);O=Ol(O,d);return z(F,O,7);case 7:return m=F.h,n=Math.round(Y()),Pl(a,k,n,g,void 0,b.join(),e),F.return(m);case 5:r=wa(F);p=Math.round(Y());x=tl(r,a.g.name,b.join(),a.g.version);
if((y=x instanceof W&&!x.g)||g>=f)Pl(a,k,p,g,x,b.join(),e),h=x;F.B(2);break;case 4:return F.return(Promise.reject(h))}})}
function Pl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&gl("QUOTA_EXCEEDED",{dbName:il(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),gl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Ql(a,!1,d,f,b,g.tag),fl(e)):Ql(a,!0,d,f,b,g.tag)}
function Ql(a,b,c,d,e,f){gl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function Ll(a){this.g=a}
q=Ll.prototype;q.add=function(a,b){return Fl(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Fl(this.g.clear()).then(function(){})};
function Rl(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Sl(a,b){return Tl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Sl(this,a):Fl(this.g.delete(a))};
q.get=function(a){return Fl(this.g.get(a))};
q.index=function(a){try{return new Ul(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new rl(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function Tl(a,b,c){a=a.g.openCursor(b.query,b.direction);return Vl(a).then(function(d){return Gl(d,c)})}
function Nl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Ol(a,b){var c=new Promise(function(d,e){try{Bl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Nl.prototype.abort=function(){this.g.abort();this.h=!0;throw new W("EXPLICIT_ABORT");};
Nl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Ll(a),this.i.set(a,b));return b};
function Ul(a){this.g=a}
q=Ul.prototype;q.delete=function(a){return Wl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Fl(this.g.get(a))};
q.getKey=function(a){return Fl(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function Wl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Vl(a).then(function(d){return Gl(d,c)})}
function Xl(a,b){this.request=a;this.cursor=b}
function Vl(a){return Fl(a).then(function(b){return b?new Xl(a,b):null})}
q=Xl.prototype;q.advance=function(a){this.cursor.advance(a);return Vl(this.request)};
q.continue=function(a){this.cursor.continue(a);return Vl(this.request)};
q.delete=function(){return Fl(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ja=function(){return this.cursor.value};
q.update=function(a){return Fl(this.cursor.update(a))};function Yl(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Il(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Xc,k=c.Yc,l=c.Cd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&gl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:il(a)});var x=f(),y=new Nl(g.transaction);m&&
m(x,function(F){return p.oldVersion<F&&p.newVersion>=F},y);
y.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){gl("IDB_UNEXPECTEDLY_CLOSED",{dbName:il(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Zl(a,b,c){c=void 0===c?{}:c;return Yl(a,b,c)}
function $l(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Xc)&&c.addEventListener("blocked",function(){e()}),z(g,El(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),tl(f,a,"",-1);})}
;function am(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
am.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Zl(a,b,c)};
am.prototype.delete=function(a){a=void 0===a?{}:a;return $l(this.name,a)};
function bm(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function cm(a,b){if(!b)throw ul("openWithToken",il(a.name));return dm(a)}
function dm(a){function b(){var f,g,h,k,l,m,n,r,p,x;return A(function(y){switch(y.g){case 1:return g=null!=(f=Error().stack)?f:"",va(y,2),z(y,a.h(a.name,a.options.version,d),4);case 4:h=y.h;for(var F=a.options,O=[],V=u(Object.keys(F.eb)),Q=V.next();!Q.done;Q=V.next()){Q=Q.value;var Fa=F.eb[Q],Tc=void 0===Fa.Ad?Number.MAX_VALUE:Fa.Ad;!(h.g.version>=Fa.lb)||h.g.version>=Tc||h.g.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){y.B(5);break}l=Object.keys(a.options.eb);m=h.objectStoreNames();
if(a.o<U("ytidb_reopen_db_retries",0))return a.o++,h.close(),fl(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),y.return(b());if(!(a.j<U("ytidb_remake_db_retries",1))){y.B(6);break}a.j++;return z(y,a.delete(),7);case 7:return fl(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),y.return(b());case 6:throw new ql(m,l);case 5:return y.return(h);case 2:n=wa(y);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){y.B(8);break}return z(y,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=y.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,bm(a,p);return y.return(r);case 8:throw c(),n instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),tl(n,a.name,"",null!=(x=a.options.version)?x:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw bm(a);if(a.g)return a.g;var d={Yc:function(f){f.close()},
closed:c,Cd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var em=new am("YtIdbMeta",{eb:{databases:{lb:1}},upgrade:function(a,b){b(1)&&Kl(a,"databases",{keyPath:"actualName"})}});
function fm(a,b){var c;return A(function(d){if(1==d.g)return z(d,cm(em,b),2);c=d.h;return d.return(Jl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Fl(f.g.put(a,void 0)).then(function(){})})}))})}
function gm(a,b){var c;return A(function(d){if(1==d.g)return a?z(d,cm(em,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function hm(a,b){var c,d;return A(function(e){return 1==e.g?(c=[],z(e,cm(em,b),2)):3!=e.g?(d=e.h,z(e,Jl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return Tl(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function im(a){return hm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Tm,Um=new function(){}(new function(){});
function Vm(){var a,b,c,d;return A(function(e){switch(e.g){case 1:a=cl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jl)f=/WebKit\/([0-9]+)/.exec(Hb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Hb()),f=!(f&&602<=parseInt(f[1],10)));if(f||hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,fm(d,Um),4);case 4:return z(e,gm("yt-idb-test-do-not-use",Um),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Wm(){if(void 0!==Tm)return Tm;el=!0;return Tm=Vm().then(function(a){el=!1;var b;if(null!=(b=bl())&&b.g){var c;b={hasSucceededOnce:(null==(c=cl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=bl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Xm(){return C("ytglobal.idbToken_")||void 0}
function Ym(){var a=Xm();return a?Promise.resolve(a):Wm().then(function(b){(b=b?Um:void 0)&&D("ytglobal.idbToken_",b);return b})}
;new dg;function Zm(a){if(!rk())throw a=new W("AUTH_INVALID",{dbName:a}),fl(a),a;var b=sk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $m(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",z(m,Ym(),2);case 2:g=m.h;if(!g)throw h=ul("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),fl(h),h;hl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zm(a);va(m,3);return z(m,fm(k,g),5);case 5:return z(m,Zl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=wa(m),va(m,7),z(m,gm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function an(a,b,c){c=void 0===c?{}:c;return $m(a,b,!1,c)}
function bn(a,b,c){c=void 0===c?{}:c;return $m(a,b,!0,c)}
function cn(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.g)return z(e,Ym(),2);if(3!=e.g){c=e.h;if(!c)return e.return();hl(a);d=Zm(a);return z(e,$l(d.actualName,b),3)}return z(e,gm(d.actualName,c),0)})}
function dn(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.g?z(e,$l(d.actualName,b),2):z(e,gm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function en(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.g)return z(d,Ym(),2);if(3!=d.g){b=d.h;if(!b)return d.return();hl("LogsDatabaseV2");return z(d,im(b),3)}c=d.h;return z(d,dn(c,a,b),0)})}
function fn(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.g)return z(d,Ym(),2);if(3!=d.g){c=d.h;if(!c)return d.return();hl(a);return z(d,$l(a,b),3)}return z(d,gm(a,c),0)})}
;function gn(a,b){am.call(this,a,b);this.options=b;hl(a)}
w(gn,am);function hn(a,b){var c;return function(){c||(c=new gn(a,b));return c}}
gn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Pb?bn:an)(a,b,Object.assign({},c))};
gn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Pb?fn:cn)(this.name,a)};
function jn(a,b){return hn(a,b)}
;var kn={},ln=jn("ytGcfConfig",{eb:(kn.coldConfigStore={lb:1},kn.hotConfigStore={lb:1},kn),Pb:!1,upgrade:function(a,b){b(1)&&(Rl(Kl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Rl(Kl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function mn(a){return cm(ln(),a)}
function nn(a,b,c){var d,e,f;return A(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,mn(c),2);case 2:return e=g.h,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,Ml(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function on(a,b,c,d){var e,f,g;return A(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,mn(d),2);case 2:return f=h.h,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,Ml(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function pn(a){var b,c;return A(function(d){return 1==d.g?z(d,mn(a),2):3!=d.g?(b=d.h,c=void 0,z(d,Jl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return Wl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function qn(a){var b,c;return A(function(d){return 1==d.g?z(d,mn(a),2):3!=d.g?(b=d.h,c=void 0,z(d,Jl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return Wl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function rn(){ve.call(this);this.h=[];this.g=[];var a=C("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(v(a)),this.g=a):(this.g=[],D("yt.gcf.config.hotUpdateCallbacks",this.g))}
w(rn,ve);rn.prototype.sa=function(){for(var a=u(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;ve.prototype.sa.call(this)};function sn(){this.h=0;this.i=new rn}
function tn(a,b,c){var d,e,f;return A(function(g){switch(g.g){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=Xm();if(!d){g.B(3);break}if(c){g.B(4);break}return z(g,qn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return z(g,nn(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function un(a,b,c){var d,e,f,g;return A(function(h){if(1==h.g){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Xm())?c?h.B(4):z(h,pn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return z(h,on(c,b,g,d),0)})}
sn.prototype.g=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function vn(){return"INNERTUBE_API_KEY"in $i&&"INNERTUBE_API_VERSION"in $i}
function wn(){return{ld:S("INNERTUBE_API_KEY"),md:S("INNERTUBE_API_VERSION"),Sb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wc:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),nd:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),xc:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),zc:S("INNERTUBE_CONTEXT_HL"),yc:S("INNERTUBE_CONTEXT_GL"),od:S("INNERTUBE_HOST_OVERRIDE")||"",qd:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pd:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function xn(a){var b={client:{hl:a.zc,gl:a.yc,clientName:a.wc,clientVersion:a.xc,configInfo:a.Sb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=jj();0<c.length&&(b.request={internalExperimentFlags:c});yn(a,void 0,b);zn(void 0,b);An(void 0,b);Bn(a,void 0,b);Cn(void 0,b);T("start_client_gcf")&&Dn(void 0,b);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&
(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Aj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function En(a){var b=new Ei,c=new xi;K(c,1,a.zc);K(c,2,a.yc);I(c,16,a.nd);K(c,17,a.xc);if(a.Sb){var d=a.Sb,e=new ui;d.coldConfigData&&K(e,1,d.coldConfigData);d.appInstallData&&K(e,6,d.appInstallData);d.coldHashData&&K(e,3,d.coldHashData);d.hotHashData&&e.g(d.hotHashData);J(c,ui,62,e)}if((d=B.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);I(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&K(c,54,
d);d=jj();if(0<d.length){e=new Ai;for(var f=0;f<d.length;f++){var g=new yi;K(g,1,d[f].key);xd(g,2,zi,bd(d[f].value));Cd(e,15,yi,g)}J(b,Ai,5,e)}yn(a,c);zn(b);An(c);Bn(a,c);Cn(c);T("start_client_gcf")&&Dn(c);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a=new Di,K(a,3,S("DELEGATED_SESSION_ID")));!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=Ad(b,Di,3)||new Di,a=K(d,18,a),J(b,Di,3,a));a=u(Object.entries(Aj(S("DEVICE",""))));for(d=
a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?K(c,12,e):"cmodel"===d?K(c,13,e):"cbr"===d?K(c,87,e):"cbrver"===d?K(c,88,e):"cos"===d?K(c,18,e):"cosver"===d?K(c,19,e):"cplatform"===d&&I(c,42,kk(e));J(b,xi,1,c);return b}
function yn(a,b,c){a=a.wc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Ad(b,vi,96)||new vi;var d=jk();d=Object.keys(Fi).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,vi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=jk())}
function zn(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=Ad(a,Bi,7)||new Bi,K(b,4,c),J(a,Bi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function An(a,b){var c;if(T("web_log_memory_total_kbytes")&&(null==(c=B.navigator)?0:c.deviceMemory)){var d;c=null==(d=B.navigator)?void 0:d.deviceMemory;a?Ed(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Bn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Ad(b,ui,62))?d:new ui;K(c,6,a.appInstallData);J(b,ui,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Cn(a,b){a:{var c=pk();if(c){var d=lk[c.type||"unknown"]||"CONN_UNKNOWN";c=lk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,mk[d]):b&&(b.client.connectionType=d));T("web_log_effective_connection_type")&&(d=pk(),d=null!=d&&d.effectiveType?ok.hasOwnProperty(d.effectiveType)?ok[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,nk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Fn(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.ke||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().je;else{ik.g||(ik.g=new ik);a={};if(c=re([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in $i||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in $i&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));T("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Dn(a,b){if(!sn.g){var c=new sn;sn.g=c}c=sn.g;var d=Y()-c.h;if(0!==c.h&&d<U("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Ad(a,ui,62))?g:new ui;K(b,1,c);K(b,3,d);b.g(e);J(a,ui,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Gn=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.wb;N.prototype.publish=N.prototype.fb;N.prototype.clear=N.prototype.clear;D("ytPubsub2Pubsub2Instance",Gn);D("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});D("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});D("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});D("ytPubsub2Pubsub2SkipSubKey",null);function Hn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={xe:a,we:b},(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var In=U("max_body_size_to_compress",5E5),Jn=U("min_body_size_to_compress",500),Kn=!0,Ln=0,Mn=0,Nn=U("compression_performance_threshold_lr",250),On=U("slow_compressions_before_abandon_count",4);
function Pn(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Kn)try{try{var g=(new Blob(b.split(""))).size}catch(r){hj(r),g=null}if(null==g||!(g>In||g<Jn)){var h=te(b);var k=k||{};k.jd=!0;var l=new pi(k);l.push(h,!0);if(l.err)throw l.msg||Xg[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;Mn++;T("disable_compression_due_to_performance_degredation")&&n-e>=Nn&&(Ln++,T("abandon_compression_after_N_slow_zips")?Mn===U("compression_disable_point")&&Ln>On&&(Kn=!1):Kn=!1);T("gel_compression_csi_killswitch")||
!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Hn("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){hj(r),d(a,c)}else d(a,c)}
;function Qn(a){a=Object.assign({},a);delete a.Authorization;var b=re();if(b){var c=new Pf;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Cc(c.digest(),3)}return a}
;var Rn;function Sn(){Rn||(Rn=new al("yt.innertube"));return Rn}
function Tn(a,b,c,d){if(d)return null;d=Sn().get("nextId",!0)||1;var e=Sn().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qn(c),requestTime:Math.round(Y())};Sn().set("nextId",d+1,86400,!0);Sn().set("requests",e,86400,!0);return d}
function Un(a){var b=Sn().get("requests",!0)||{};delete b[a];Sn().set("requests",b,86400,!0)}
function Vn(a){var b=Sn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Qn(Fn(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Wn(a,d.method,e,{}));delete b[c]}}Sn().set("requests",b,86400,!0)}}
;function Xn(a){this.yb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Wa=function(){};
this.now=Date.now;this.qb=!1;var b;this.Mc=null!=(b=a.Mc)?b:100;var c;this.Kc=null!=(c=a.Kc)?c:1;var d;this.Ic=null!=(d=a.Ic)?d:2592E6;var e;this.Hc=null!=(e=a.Hc)?e:12E4;var f;this.Jc=null!=(f=a.Jc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Db=!!a.Db;var h;this.Bb=null!=(h=a.Bb)?h:.1;var k;this.Lb=null!=(k=a.Lb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Wa&&(this.Wa=a.Wa);a.qb&&(this.qb=a.qb);a.yb&&(this.yb=a.yb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.ya=a.ya;this.cc=
a.cc;this.ac=a.ac;Yn(this)&&(!this.J||this.J("networkless_logging"))&&Zn(this)}
function Zn(a){Yn(a)&&!a.qb&&(a.g=!0,a.Db&&Math.random()<=a.Bb&&a.N.Zc(a.I),$n(a),a.P.ca()&&a.vb(),a.P.Oa(a.cc,a.vb.bind(a)),a.P.Oa(a.ac,a.lc.bind(a)))}
q=Xn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Yn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&ao(c,d)}).catch(function(e){ao(c,d);
bo(c,e)})}else this.ya(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Yn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.g)return z(k,d.N.set(e,d.I).catch(function(l){bo(d,l)}),2);
f(g,h);k.g=0})}}this.ya(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.ya(a,b,e.skipRetry);
bo(d,g)})}else this.ya(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Yn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Va(d.id,c.I):e=!0;c.P.Qa&&c.J&&c.J("vss_network_hint")&&c.P.Qa(!0);f(g,h)};
this.ya(d.url,d.options);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Va(d.id,c.I)}).catch(function(g){bo(c,g)})}else this.ya(a,b)};
q.vb=function(){var a=this;if(!Yn(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return A(function(c){if(1==c.g)return z(c,a.N.sc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?z(c,ao(a,b),3):(a.lc(),c.return());a.h&&(a.h=0,a.vb());c.g=0})},this.Mc))};
q.lc=function(){this.ha.ba(this.h);this.h=0};
function ao(a,b){var c;return A(function(d){switch(d.g){case 1:if(!Yn(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return z(d,a.N.sd(b.id,a.I),3);case 3:(c=d.h)||a.Wa(Error("The request cannot be found in the database."));case 2:if(co(a,b,a.Ic)){d.B(4);break}a.Wa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return z(d,a.N.Va(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=eo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return z(d,a.N.Va(b.id,a.I),8);case 8:a.ya(b.url,b.options,!!b.skipRetry),d.g=0}})}
function eo(a,b){if(!Yn(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.g){case 1:g=fo(f);(h=go(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Lb)){m.B(2);break}if(!a.P.Ob){m.B(3);break}return z(m,a.P.Ob(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return z(m,a.N.dc(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Lb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Kc?z(m,a.N.dc(b.id,a.I,!0,h?!1:void 0),12):z(m,a.N.Va(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.vb()},a.Jc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):z(h,a.N.Va(b.id,a.I),2);a.P.Qa&&a.J&&a.J("vss_network_hint")&&a.P.Qa(!0);d(e,f);h.g=0})};
return b}
function co(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function $n(a){if(!Yn(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.sc("QUEUED",a.I).then(function(b){b&&!co(a,b,a.Hc)?a.ha.qa(function(){return A(function(c){if(1==c.g)return void 0===b.id?c.B(2):z(c,a.N.dc(b.id,a.I),2);$n(a);c.g=0})}):a.P.ca()&&a.vb()})}
function bo(a,b){a.Oc&&!a.P.ca()?a.Oc(b):a.handleError(b)}
function Yn(a){return!!a.I||a.yb}
function fo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function go(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var ho;
function io(){if(ho)return ho();var a={};ho=jn("LogsDatabaseV2",{eb:(a.LogsRequestsStore={lb:2},a),Pb:!1,upgrade:function(b,c,d){c(2)&&Kl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Rl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return ho()}
;function jo(a){return cm(io(),a)}
function ko(a,b){var c,d,e,f;return A(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,jo(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,Ml(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();lo(c);return g.return(f)})}
function mo(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(l,jo(b),2);if(3!=l.g)return d=l.h,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,z(l,Jl(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return Wl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();lo(c);return l.return(k)})}
function no(a,b){var c;return A(function(d){if(1==d.g)return z(d,jo(b),2);c=d.h;return d.return(Jl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Fl(f.g.put(g,void 0)).then(function(){return g})})}))})}
function oo(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.g)return z(f,jo(b),2);e=f.h;return f.return(Jl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Fl(h.g.put(k,void 0)).then(function(){return k})):yl.resolve(void 0)})}))})}
function po(a,b){var c;return A(function(d){if(1==d.g)return z(d,jo(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function qo(a){var b,c;return A(function(d){if(1==d.g)return z(d,jo(a),2);b=d.h;c=Y()-2592E6;return z(d,Jl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return Tl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ro(){A(function(a){return z(a,en(),0)})}
function lo(a){T("nwl_csi_killswitch")||Hn("networkless_performance",a,{sampleRate:1})}
;var so={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481};var to={},uo=jn("ServiceWorkerLogsDatabase",{eb:(to.SWHealthLog={lb:1},to),Pb:!0,upgrade:function(a,b){b(1)&&Rl(Kl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function vo(a){return cm(uo(),a)}
function wo(a){var b,c;A(function(d){if(1==d.g)return z(d,vo(a),2);b=d.h;c=Y()-2592E6;return z(d,Jl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return Tl(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function xo(a){var b;return A(function(c){if(1==c.g)return z(c,vo(a),2);b=c.h;return z(c,b.clear("SWHealthLog"),0)})}
;var yo={},zo=0;function Ao(a){var b=new Image,c=""+zo++;yo[c]=b;b.onload=b.onerror=function(){delete yo[c]};
b.src=a}
;function Bo(){this.g=new Map;this.h=!1}
function Co(){if(!Bo.g){var a=C("yt.networkRequestMonitor.instance")||new Bo;D("yt.networkRequestMonitor.instance",a);Bo.g=a}return Bo.g}
Bo.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Bo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Bo.prototype.removeParams=function(a){return a.split("?")[0]};
Bo.prototype.removeParams=Bo.prototype.removeParams;Bo.prototype.isEndpointCFR=Bo.prototype.isEndpointCFR;Bo.prototype.requestComplete=Bo.prototype.requestComplete;Bo.getInstance=Co;var Do;function Eo(){Do||(Do=new al("yt.offline"));return Do}
function Fo(a){if(T("offline_error_handling")){var b=Eo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Eo().set("errors",b,2592E3,!0)}}
;function Z(){Ye.call(this);var a=this;this.i=!1;this.h=df();this.h.Oa("networkstatus-online",function(){if(a.i&&T("offline_error_handling")){var b=Eo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new qk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;gj(d)}Eo().set("errors",{},2592E3,!0)}}})}
w(Z,Ye);function Go(){if(!Z.g){var a=C("yt.networkStatusManager.instance")||new Z;D("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
q=Z.prototype;q.ca=function(){return this.h.ca()};
q.Qa=function(a){this.h.h=a};
q.gd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.cd=function(){this.i=!0};
q.Oa=function(a,b){return this.h.Oa(a,b)};
q.Ob=function(a){a=bf(this.h,a);a.then(function(b){T("use_cfr_monitor")&&Co().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ob;Z.prototype.listen=Z.prototype.Oa;Z.prototype.enableErrorFlushing=Z.prototype.cd;Z.prototype.getWindowStatus=Z.prototype.gd;Z.prototype.networkStatusHint=Z.prototype.Qa;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=Go;function Ho(a){a=void 0===a?{}:a;Ye.call(this);var b=this;this.h=this.o=0;this.i=Go();var c=C("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Nb?(this.Nb=a.Nb,c("networkstatus-online",function(){Io(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Io(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ze(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ze(b,"publicytnetworkstatus-offline")})))}
w(Ho,Ye);Ho.prototype.ca=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Ho.prototype.Qa=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Ho.prototype.Ob=function(a){var b=this,c;return A(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return T("skip_network_check_if_cfr")&&Co().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Qa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Io(a,b){a.Nb?a.h?(ef.ba(a.o),a.o=ef.qa(function(){a.j!==b&&(Ze(a,b),a.j=b,a.h=Y())},a.Nb-(Y()-a.h))):(Ze(a,b),a.j=b,a.h=Y()):Ze(a,b)}
;var Jo;function Ko(){var a=Xn.call;Jo||(Jo=new Ho({oe:!0,ne:!0}));a.call(Xn,this,{N:{Zc:qo,Va:po,sc:mo,sd:no,dc:oo,set:ko},P:Jo,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;hj(new qk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else gj(b)},
Wa:hj,ya:Lo,now:Y,Oc:Fo,ha:$k(),cc:"publicytnetworkstatus-online",ac:"publicytnetworkstatus-offline",Db:!0,Bb:.1,Lb:U("potential_esf_error_limit",10),J:T,qb:!(rk()&&"www.youtube-nocookie.com"!==Xb(document.location.toString()))});this.i=new dg;T("networkless_immediately_drop_all_requests")&&ro();fn("LogsDatabaseV2")}
w(Ko,Xn);function Mo(){var a=C("yt.networklessRequestController.instance");a||(a=new Ko,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Ym().then(function(b){a.I=b;Zn(a);a.i.resolve();a.Db&&Math.random()<=a.Bb&&a.I&&wo(a.I);T("networkless_immediately_drop_sw_health_store")&&No(a)}));
return a}
Ko.prototype.writeThenSend=function(a,b){b||(b={});rk()||(this.g=!1);Xn.prototype.writeThenSend.call(this,a,b)};
Ko.prototype.sendThenWrite=function(a,b,c){b||(b={});rk()||(this.g=!1);Xn.prototype.sendThenWrite.call(this,a,b,c)};
Ko.prototype.sendAndWrite=function(a,b){b||(b={});rk()||(this.g=!1);Xn.prototype.sendAndWrite.call(this,a,b)};
Ko.prototype.awaitInitialization=function(){return this.i.promise};
function No(a){var b;A(function(c){if(!a.I)throw b=ul("clearSWHealthLogsDb"),b;return c.return(xo(a.I).catch(function(d){a.handleError(d)}))})}
function Lo(a,b,c){b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Oo(a,b);if(T("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)Qj(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Qj(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new Ya({url:a});if(h.i&&h.h||h.j){var k=Wb(a.match(Vb)[5]||null);var l=!(!k||!k.endsWith("/aclk")||"1"!==bc(a,"ri"));break b}}catch(n){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(n){}m=!1}c=m?!0:!1}else c=!1;c||Ao(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Pn(a,b.postBody,b,Nj)):Pn(a,JSON.stringify(b.postParams),b,Vj):
Nj(a,b)}
function Oo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Co().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Co().requestComplete(a,!0);d(e,f)}}
;var Po=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};D("ytNetworklessLoggingInitializationOptions",Po);function Qo(a){var b=this;this.config_=null;a?this.config_=a:vn()&&(this.config_=wn());uk(function(){Vn(b)},5E3)}
Qo.prototype.isReady=function(){!this.config_&&vn()&&(this.config_=wn());return!!this.config_};
function Wn(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Tn(b,c,l,k)),y)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,Fa){Un(y);F(Q,Fa)};
c.onFetchSuccess=function(Q,Fa){Un(y);O(Q,Fa)}}try{if(x&&d.retry&&!d.Cc.bypassNetworkless)g.method="POST",d.Cc.writeThenSend?Mo().writeThenSend(p,g):Mo().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var V=g.postBody;"string"!==typeof V&&(V=JSON.stringify(g.postBody));Pn(p,V,g,Nj)}else Pn(p,JSON.stringify(g.postParams),g,Vj);else T("web_all_payloads_via_jspb")?Nj(p,g):Vj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)y&&(Un(y),y=0),hj(Error("An extension is blocking network request."));else throw Q;}y&&uk(function(){Vn(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&hj(new qk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new qk("innertube xhrclient not ready",b,c,d);gj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.od)&&(h=f);var k=a.config_.qd||!1,l=Fn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.md+"/"+b,n={alt:"json"},r=a.config_.pd&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.ld);var p=Bj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
Po.isNwlInitialized?Wm().then(function(x){e(x)}):e(!1)}
;function Ro(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var So=B.ytPubsubPubsubInstance||new N,To=B.ytPubsubPubsubSubscribedKeys||{},Uo=B.ytPubsubPubsubTopicToKeys||{},Vo=B.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.wb;N.prototype.publish=N.prototype.fb;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",So);D("ytPubsubPubsubTopicToKeys",Uo);D("ytPubsubPubsubIsSynchronous",Vo);D("ytPubsubPubsubSubscribedKeys",To);var Wo=Symbol("injectionDeps");function Xo(){this.key=sn}
function Yo(){this.h=new Map;this.g=new Map}
Yo.prototype.resolve=function(a){return a instanceof Xo?Zo(this,a.key,[],!0):Zo(this,a,[])};
function Zo(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Gd)var e=d.Gd;else if(d.Fd)e=d[Wo]?$o(a,d[Wo],c):[],e=d.Fd.apply(d,v(e));else if(d.Ed){e=d.Ed;var f=e[Wo]?$o(a,e[Wo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(v(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ue||a.g.set(b,e);return e}
function $o(a,b,c){return b?b.map(function(d){return d instanceof Xo?Zo(a,d.key,c,!0):Zo(a,d,c)}):[]}
;var ap;function bp(){ap||(ap=new Yo);return ap}
;var cp=window;function dp(){var a,b;return"h5vcc"in cp&&(null==(a=cp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=cp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in cp&&cp.performance.mark&&cp.performance.measure?2:0}
function ep(a){switch(dp()){case 1:cp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:cp.performance.mark(a+"-start");break;case 0:break;default:Ud()}}
function fp(a){switch(dp()){case 1:cp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";cp.performance.mark(c);cp.performance.measure(a,b,c);break;case 0:break;default:Ud()}}
;var gp=T("web_enable_lifecycle_monitoring")&&0!==dp(),hp=T("web_enable_lifecycle_monitoring");function ip(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?$k():d;this.j=c;this.h=d;this.i=new dg;this.g=a;for(a={Ma:0};a.Ma<this.g.length;a={sb:a.sb,Ma:a.Ma},a.Ma++)a.sb=this.g[a.Ma],c=function(e){return function(){e.sb.Ub();b.g[e.Ma].Mb=!0;b.g.every(function(f){return!0===f.Mb})&&b.i.resolve()}}(a),d=this.h.Ia(c,jp(this,a.sb)),this.g[a.Ma]=Object.assign({},a.sb,{Ub:c,
jobId:d})}
function kp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return jp(a,a.g[e])-jp(a,a.g[d])});
b=u(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Mb||(a.h.ba(c.jobId),a.h.Ia(c.Ub,10))}
ip.prototype.cancel=function(){for(var a=u(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Mb||this.h.ba(b.jobId),b.Mb=!0;this.i.resolve()};
function jp(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function lp(a){this.state=a;this.i=[];this.o=void 0;this.H={};gp&&ep(this.state)}
lp.prototype.install=function(a){this.i.push(a);return this};
function mp(a){gp&&fp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Fa}):d.from===a.state&&"none"===d.Fa});
if(b){a.h&&(kp(a.h),a.h=void 0);hp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";gp&&ep(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(np(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function np(a,b){var c=b.filter(function(e){return 10===op(a,e)}),d=b.filter(function(e){return 10!==op(a,e)});
return a.H.te?function(){var e=Ea.apply(0,arguments);return A(function(f){if(1==f.g)return z(f,a.oa.apply(a,[c].concat(v(e))),2);a.u.apply(a,[d].concat(v(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.za.apply(a,[c].concat(v(e)));a.u.apply(a,[d].concat(v(e)))}}
lp.prototype.za=function(a){for(var b=Ea.apply(1,arguments),c=$k(),d=u(a),e=d.next(),f={};!e.done;f={Za:f.Za},e=d.next())f.Za=e.value,c.kb(function(g){return function(){pp(g.Za.name);g.Za.nb.apply(g.Za,v(b));qp(g.Za.name)}}(f))};
lp.prototype.oa=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.g&&(c=$k(),d=u(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Na=e.value;f.mb=void 0;g=function(k){return function(){pp(k.Na.name);var l=k.Na.nb.apply(k.Na,v(b));"function"===typeof(null==l?void 0:l.then)?k.mb=l.then(function(){qp(k.Na.name)}):qp(k.Na.name)}}(f);
c.kb(g);return f.mb?z(h,f.mb,3):h.B(3)}f={Na:f.Na,mb:f.mb};e=d.next();return h.B(2)})};
lp.prototype.u=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{Ub:function(){pp(e.name);e.nb.apply(e,v(b));qp(e.name)},
priority:op(c,e)}});
d.length&&(this.h=new ip(d))};
function op(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function pp(a){gp&&a&&ep(a)}
function qp(a){gp&&a&&fp(a)}
fa.Object.defineProperties(lp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function rp(a){lp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Fa:"application_navigating",action:this.M},{from:"application_navigating",Fa:"none",action:this.S},{from:"application_navigating",Fa:"application_navigating",action:function(){}},
{from:"none",Fa:"none",action:function(){}}]}
var sp;w(rp,lp);rp.prototype.M=function(a,b){var c=this;this.g=uk(function(){"application_navigating"===c.j&&mp(c)},5E3);
a(null==b?void 0:b.event)};
rp.prototype.S=function(a,b){this.g&&(ef.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function tp(){sp||(sp=new rp);return sp}
;function up(){this.store={};this.g={}}
up.prototype.storePayload=function(a,b){a=vp(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
up.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=wp(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,v(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,v(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,v(this.smartExtractMatchingEntries(a))));return c};
up.prototype.extractMatchingEntries=function(a){a=wp(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,v(this.store[a[c]])),delete this.store[a[c]]);return b};
up.prototype.getSequenceCount=function(a){a=wp(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function wp(a,b){var c=vp(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&vp(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(xp(b.auth,g[0])){var h=b.isJspb;xp(void 0===h?"undefined":h?"true":"false",g[1])&&xp(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),xp(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function xp(a,b){return void 0===a||"undefined"===a?!0:a===b}
up.prototype.getSequenceCount=up.prototype.getSequenceCount;up.prototype.extractMatchingEntries=up.prototype.extractMatchingEntries;up.prototype.smartExtractMatchingEntries=up.prototype.smartExtractMatchingEntries;up.prototype.storePayload=up.prototype.storePayload;function vp(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var yp=U("initial_gel_batch_timeout",2E3),zp=U("gel_queue_timeout_max_ms",6E4),Ap=Math.pow(2,16)-1,Bp=U("gel_min_batch_size",5),Cp=void 0;function Dp(){this.j=this.g=this.h=0;this.i=!1}
var Ep=new Dp,Fp=new Dp,Gp=new Dp,Hp=new Dp,Ip,Jp=!0,Kp=B.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Kp);var Lp=B.ytLoggingTransportTokensToJspbCttTargetIds_||{};D("ytLoggingTransportTokensToJspbCttTargetIds_",Lp);var Mp={};function Np(){var a=C("yt.logging.ims");a||(a=new up,D("yt.logging.ims",a));return a}
function Op(a,b){if("log_event"===a.endpoint){Pp(a);var c=Qp(a),d=Rp(a.payload)||"",e=Sp(d);400===e?Tp(a,b):(Mp[c]=!0,e={cttAuthInfo:c,isJspb:!1,tier:e},Np().storePayload(e,a.payload),Up(b,c,!1,e,Vp(d)))}}
function Wp(a,b,c){if("log_event"===b.endpoint){Pp(void 0,b);var d=Qp(b,!0),e=Sp(a);400===e?Xp(a,b,c):(Mp[d]=!0,e={cttAuthInfo:d,isJspb:!0,tier:e},Np().storePayload(e,b.payload.toJSON()),Up(c,d,!0,e,Vp(a)))}}
function Up(a,b,c,d,e){function f(){Yp({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Cp=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=Y(),h=Zp(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=Np().getSequenceCount(d));1E3<=e?f():e>=a?Ip||(Ip=$p(function(){f();Ip=void 0},0)):10<=g-k&&(aq(c,d.tier),h.j=g)}
function Tp(a,b){if("log_event"===a.endpoint){Pp(a);var c=Qp(a),d=new Map;d.set(c,[a.payload]);var e=Rp(a.payload)||"";b&&(Cp=new b);return new eg(function(f,g){Cp&&Cp.isReady()?bq(d,Cp,f,g,{bypassNetworkless:!0},!0,Vp(e)):f()})}}
function Xp(a,b,c){if("log_event"===b.endpoint){Pp(void 0,b);var d=Qp(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Cp=new c);return new eg(function(f){Cp&&Cp.isReady()?cq(e,Cp,f,{bypassNetworkless:!0},!0,Vp(a)):f()})}}
function Qp(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Vi;c.videoId?xd(d,1,Hd,bd(c.videoId)):c.playlistId&&xd(d,2,Hd,bd(c.playlistId));Lp[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Kp[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Yp(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new eg(function(e,f){var g=Zp(c,d),h=g.i;g.i=!1;dq(g.h);dq(g.g);g.g=0;Cp&&Cp.isReady()?void 0===d&&T("enable_web_tiered_gel")?eq(e,f,a,b,c,300,h):eq(e,f,a,b,c,d,h):(aq(c,d),e())})}
function eq(a,b,c,d,e,f,g){var h=Cp;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=T("enable_web_tiered_gel")?Np().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Np().extractMatchingEntries(n),k.set(d,b),cq(k,h,a,c,!1,g)):(k=T("enable_web_tiered_gel")?Np().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Np().extractMatchingEntries(n),l.set(d,k),bq(l,h,
a,b,c,!1,g));else if(e){b=u(Object.keys(Mp));for(d=b.next();!d.done;d=b.next())l=d.value,f=T("enable_web_tiered_gel")?Np().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Np().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Mp[l];cq(k,h,a,c,!1,g)}else{k=u(Object.keys(Mp));for(d=k.next();!d.done;d=k.next())m=d.value,n=T("enable_web_tiered_gel")?Np().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Np().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Mp[m];bq(l,h,a,b,c,!1,g)}}
function aq(a,b){function c(){Yp({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Zp(a,b),e=d===Hp||d===Gp?5E3:zp;T("web_gel_timeout_cap")&&!d.g&&(e=$p(function(){c()},e),d.g=e);
dq(d.h);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Jp&&(e=yp);e=$p(function(){0<U("gel_min_batch_size")?Np().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Bp&&c():c()},e);
d.h=e}
function bq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=fq(g);a=u(a);var m=a.next();for(g={};!m.done;g={Hb:g.Hb,Ja:g.Ja,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Jb:g.Jb,Ib:g.Ib},m=a.next()){var n=u(m.value);m=n.next().value;n=n.next().value;g.Ja=mb({context:xn(b.config_||wn())});if(!La(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.Ja.events=n;(n=Kp[m])&&gq(g.Ja,m,n);delete Kp[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;hq(g.Ja,h,g.dangerousLogToVisitorSession);iq(e);g.Jb=function(r){T("start_client_gcf")&&ef.qa(function(){return A(function(p){return z(p,jq(r),0)})});
k--;k||c()};
g.Hb=0;g.Ib=function(r){return function(){r.Hb++;if(e.bypassNetworkless&&1===r.Hb)try{Wn(b,l,r.Ja,kq({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Jb,r.Ib,f)),Jp=!1}catch(p){gj(p),d()}k--;k||c()}}(g);
try{Wn(b,l,g.Ja,kq(e,g.dangerousLogToVisitorSession,g.Jb,g.Ib,f)),Jp=!1}catch(r){gj(r),d()}}}
function cq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h=a.size;f=fq(f);var k=new Map([].concat(v(a)));k=u(k);for(var l=k.next();!l.done;l=k.next()){var m=u(l.value).next().value,n=a.get(m);l=new Wi;var r=En(b.config_||wn());J(l,Ei,1,r);n=n?lq(n):[];n=u(n);for(r=n.next();!r.done;r=n.next())Cd(l,3,Si,r.value);(n=Lp[m])&&mq(l,m,n);delete Lp[m];m="visitorOnlyApprovedKey"===m;nq(l,g,m);iq(d);n={startTime:Y(),ticks:{},infos:{}};l=Jd(l);n.ticks.geljspc=Y();T("log_jspb_serialize_latency")&&Hn("gel_jspb_serialize",
n,{sampleRate:.1});m=kq(d,m,function(p){T("start_client_gcf")&&ef.qa(function(){return A(function(x){return z(x,jq(p),0)})});
h--;h||c()},function(){h--;
h||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;Wn(b,f,"",m);Jp=!1}}
function iq(a){T("always_send_and_write")&&(a.writeThenSend=!1)}
function kq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Cc:a,dangerousLogToVisitorSession:b,me:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};oq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function hq(a,b,c){oq()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=pq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function nq(a,b,c){oq()||Ed(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=pq();var d=new Ui;K(d,1,b);Ed(d,2,c);J(a,Ui,5,d)}}
function pq(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Ap/2));a++;a>Ap&&(a=1);aj("BATCH_CLIENT_COUNTER",a);return a}
function gq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function mq(a,b,c){if(Gd(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Vi,4,c);a=Ad(a,Ei,1)||new Ei;c=Ad(a,Di,3)||new Di;var e=new Ci;K(e,2,b);I(e,1,d);Cd(c,12,Ci,e);J(a,Di,3,c)}
function lq(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Si(a[c]))}catch(d){gj(new qk("Transport failed to deserialize "+String(a[c])))}return b}
function Pp(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}D("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function oq(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function $p(a,b){return T("transport_use_scheduler")?T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?uk(function(){if("none"===tp().j)a();else{var c={};tp().install((c.none={nb:a},c))}},b):uk(a,b):sj(a,b)}
function dq(a){T("transport_use_scheduler")?ef.ba(a):window.clearTimeout(a)}
function jq(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ti.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[si.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=bp().resolve(new Xo))?g?e?z(n,tn(m,g,e),2):z(n,tn(m,g),2):n.B(2):n.return()}return l?h?z(n,un(m,l,h),0):z(n,un(m,l),0):n.B(0)})}
function Zp(a,b){b=void 0===b?200:b;return a?300===b?Hp:Fp:300===b?Gp:Ep}
function Sp(a){if(T("enable_web_tiered_gel")){a=so[a||""];var b,c;if(null==bp().resolve(new Xo))var d=void 0;else{var e=null!=(d=C("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return qq(b[c].tier);return 200}}
function Rp(a){a=Object.keys(a);a=u(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,so[b])return b}
function qq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Vp(a){return"gelDebuggingEvent"===a}
function fq(a){return(void 0===a?0:a)&&T("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var rq=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",rq);
function sq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ro();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:tq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete rq[d.sequenceGroup]);(d.sendIsolatedPayload?Tp:Op)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function uq(a){Yp(void 0,void 0,void 0===a?!1:a)}
function tq(a){rq[a]=a in rq?rq[a]+1:0;return rq[a]}
;var vq=[];function wq(a,b,c){c=void 0===c?{}:c;var d=Qo;S("ytLoggingEventsDefaultDisabled",!1)&&Qo===Qo&&(d=null);T("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Ro(),c.timestamp=Y()),vq.push({Ec:a,payload:b,options:c})):sq(a,b,d,c)}
;var xq=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",xq);function yq(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Qo;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Ed(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Ri;if(c.lact)Ed(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)Ed(e,1,-1);else{var f=Ro();Ed(e,1,isFinite(f)?f:-1)}if(c.sequenceGroup&&!T("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=tq(f),h=new Qi;Ed(h,2,g);K(h,1,f);J(e,Qi,3,h);c.endOfSequence&&delete xq[c.sequenceGroup]}J(b,
Ri,33,e);(c.sendIsolatedPayload?Xp:Wp)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var zq=new Set,Aq=0,Bq=0,Cq=0,Dq=[],Eq=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fq(a){try{zq.add(a.message)}catch(b){}Aq++}
function Gq(){for(var a=u(Eq),b=a.next();!b.done;b=a.next()){var c=Hb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Hq(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=u(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Nj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Iq(){var a;return A(function(b){return(a=yf())?b.return(a.then(function(c){c=Jd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Cc(d,3)})):b.return(Promise.resolve(null))})}
;var Jq={};function Kq(a){return Jq[a]||(Jq[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Lq={},Mq=[],vg=new N,Nq={};function Oq(){for(var a=u(Mq),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Pq(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Kq(b)]:a.getAttribute("data-"+b):null;return c}
function Qq(a){vg.fb.apply(vg,arguments)}
;function Rq(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Sq(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Tq(a,b,c){Uq||(Uq={},Vq=new Set,rj(window,"message",function(d){a:if(Vq.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Uq[e.id];f&&d.origin===f.Wc&&(d=f.Hd,d.H=!0,d.H&&(bb(d.u,d.sendMessage,d),d.u.length=0),d.jc(e))}}));
a=String(Sq(a,"host"));Uq[c]={Hd:b,Wc:a};Vq.add(a)}
var Uq=null,Vq=null;var Wq=window;
function Xq(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Yb(a.src):"https://www.youtube.com"),this.h=new Rq(b),c||(b=Yq(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),Lq[this.g.id]=this,window.postMessage){this.j=
new N;Zq(this);b=Sq(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Nq)Nq.hasOwnProperty(e)&&$q(this,e)}}
q=Xq.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.jc=function(a){ar(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);br(this,a);return this};
function $q(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&br(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Lq[this.g.id]=null);ue(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Uq&&(Uq[this.id]=null);this.h=null;a=this.g;for(var c in kb)kb[c][0]==a&&pj(c);this.o=this.g=null};
q.nc=function(){return{}};
function cr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function ar(a,b,c){a.j.Ka||(c={target:a,data:c},a.j.fb(b,c),Qq(a.M+"."+b,c))}
function Yq(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Sq(a.h,"title"));(b=Sq(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Sq(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.nc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&bb(["debugjs","debugcss"],function(k){var l=bc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Sq(a.h,"host")+("/embed/"+Sq(a.h,"videoId"))+"?"+$b(g);Wq.yt_embedsEnableUaChProbe?Iq().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Zd(l.href).toString();Vd(c,$d(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Wq.yt_embedsEnableIframeSrcWithIntent?(Vd(c,$d(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.Fc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Zq(a){Tq(a.h,a,a.id);a.i=tj(a.Fc.bind(a));rj(a.g,"load",function(){window.clearInterval(a.i);a.i=tj(a.Fc.bind(a))})}
function br(a,b){a.S[b]||(a.S[b]=!0,cr(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Yb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(rc){if(rc.name&&"SyntaxError"===rc.name){if(!(rc.message&&0<rc.message.indexOf("target origin ''"))){var e=void 0,f=rc;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(T("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Aq)){var m=void 0,n=void 0,r=f,p=e,x=Od(r),y=x.message||"Unknown Error",
F=x.name||"UnknownError",O=x.stack||r.h||"Not available";if(O.startsWith(F+": "+y)){var V=O.split("\n");V.shift();O=V.join("\n")}var Q=x.lineNumber||"Not available",Fa=x.fileName||"Not available",Tc=O,Ra=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var Ga=0;Ga<r.args.length&&!(Ra=fk(r.args[Ga],"params."+Ga,p,Ra),500<=Ra);Ga++);else if(r.hasOwnProperty("params")&&r.params){var ea=r.params;if("object"===typeof r.params)for(n in ea){if(ea[n]){var na="params."+n,oa=hk(ea[n]);p[na]=oa;Ra+=
na.length+oa.length;if(500<Ra)break}}else p.params=hk(ea)}if(Dq.length)for(var da=0;da<Dq.length&&!(Ra=fk(Dq[da],"params.context."+da,p,Ra),500<=Ra);da++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var X={message:y,name:F,lineNumber:Q,fileName:Fa,stack:Tc,params:p,sampleWeight:1},jm=Number(r.columnNumber);isNaN(jm)||(X.lineNumber=X.lineNumber+":"+jm);if("IGNORED"===r.level)m=0;else a:{for(var km=bk(),lm=u(km.Da),rh=lm.next();!rh.done;rh=lm.next()){var mm=
rh.value;if(X.message&&X.message.match(mm.pe)){m=mm.weight;break a}}for(var nm=u(km.Aa),sh=nm.next();!sh.done;sh=nm.next()){var om=sh.value;if(om.nb(X)){m=om.weight;break a}}m=1}X.sampleWeight=m;for(var pm=u(Wj),th=pm.next();!th.done;th=pm.next()){var uh=th.value;if(uh.Kb[X.name])for(var qm=u(uh.Kb[X.name]),vh=qm.next();!vh.done;vh=qm.next()){var rm=vh.value,Ee=X.message.match(rm.regexp);if(Ee){X.params["params.error.original"]=Ee[0];for(var wh=rm.groups,sm={},sc=0;sc<wh.length;sc++)sm[wh[sc]]=Ee[sc+
1],X.params["params.error."+wh[sc]]=Ee[sc+1];X.message=uh.Yb(sm);break}}}X.params||(X.params={});var tm=bk();X.params["params.errorServiceSignature"]="msg="+tm.Da.length+"&cb="+tm.Aa.length;X.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(X.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));rb("sample").constructor!==qb&&(X.params["params.fconst"]="true");var jd=X;window.yterr&&"function"===typeof window.yterr&&window.yterr(jd);
if(0!==jd.sampleWeight&&!zq.has(jd.message))if(h&&T("web_enable_error_204")){var um=jd;Hq(void 0===g?"ERROR":g,um);Fq(um)}else{var xh=void 0,yh=void 0,vm=void 0,wm=void 0,zh=void 0,M=jd,Lb=g;Lb=void 0===Lb?"ERROR":Lb;if("ERROR"===Lb){ck.fb("handleError",M);if(T("record_app_crashed_web")&&0===Cq&&1===M.sampleWeight)if(Cq++,T("errors_via_jspb")){var ir=new Pi;zh=I(ir,1,1);if(!T("report_client_error_with_app_crash_ks")){var jr=new Oi,kr=new Ni,lr=new Mi,mr=new Li;var nr=K(mr,1,M.message);var or=J(lr,
Li,3,nr);wm=J(kr,Mi,5,or);vm=J(jr,Ni,9,wm);J(zh,Oi,4,vm)}var xm=T("jspb_sparse_encoded_pivot")?new Si([{}]):new Si;Bd(xm,Pi,20,Ti,zh);yq("appCrashed",xm)}else{var ym={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};T("report_client_error_with_app_crash_ks")||(ym.systemHealth={crashData:{clientError:{logMessage:{message:M.message}}}});wq("appCrashed",ym)}Bq++}else"WARNING"===Lb&&ck.fb("handleWarning",M);if(T("kevlar_gel_error_routing"))a:{var kd=Lb;if(T("errors_via_jspb")){if(Gq())yh=void 0;else{var tc=new Ii;
K(tc,1,M.stack);M.fileName&&K(tc,4,M.fileName);var cb=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];0!==cb.length&&(1!==cb.length||isNaN(Number(cb[0]))?2!==cb.length||isNaN(Number(cb[0]))||isNaN(Number(cb[1]))||(Dd(tc,2,Number(cb[0])),Dd(tc,3,Number(cb[1]))):Dd(tc,2,Number(cb[0])));var Mb=new Li;K(Mb,1,M.message);K(Mb,3,M.name);Dd(Mb,6,M.sampleWeight);"ERROR"===kd?I(Mb,2,2):"WARNING"===kd?I(Mb,2,1):I(Mb,2,0);var Ah=new Ji;I(Ah,1,Zc(!0));Bd(Ah,Ii,3,Ki,tc);var Nb=new Hi;K(Nb,3,window.location.href);
for(var zm=S("FEXP_EXPERIMENTS",[]),Bh=0;Bh<zm.length;Bh++){var pr=ad(zm[Bh]),Am=Nb.s,qr=pr,Bm=Lc(Am);Xc(Bm);wd(Am,Bm,5,2).push(qr)}var Ch=bj();if(!cj()&&Ch)for(var Cm=u(Object.keys(Ch)),Ob=Cm.next();!Ob.done;Ob=Cm.next()){var Dm=Ob.value,Dh=new Gi;K(Dh,1,Dm);K(Dh,2,String(Ch[Dm]));Cd(Nb,4,Gi,Dh)}var Eh=M.params;if(Eh){var Em=u(Object.keys(Eh));for(Ob=Em.next();!Ob.done;Ob=Em.next()){var Fm=Ob.value,Fh=new Gi;K(Fh,1,"client."+Fm);K(Fh,2,String(Eh[Fm]));Cd(Nb,4,Gi,Fh)}}var Gm=S("SERVER_NAME"),Hm=S("SERVER_VERSION");
if(Gm&&Hm){var Gh=new Gi;K(Gh,1,"server.name");K(Gh,2,Gm);Cd(Nb,4,Gi,Gh);var Hh=new Gi;K(Hh,1,"server.version");K(Hh,2,Hm);Cd(Nb,4,Gi,Hh)}var Fe=new Mi;J(Fe,Hi,1,Nb);J(Fe,Ji,2,Ah);J(Fe,Li,3,Mb);yh=Fe}var Im=yh;if(!Im)break a;var Jm=T("jspb_sparse_encoded_pivot")?new Si([{}]):new Si;Bd(Jm,Mi,163,Ti,Im);yq("clientError",Jm)}else{var Ja=void 0;Ja=void 0===Ja?{}:Ja;if(Gq())xh=void 0;else{var ld={stackTrace:M.stack};M.fileName&&(ld.filename=M.fileName);var db=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):
[];0!==db.length&&(1!==db.length||isNaN(Number(db[0]))?2!==db.length||isNaN(Number(db[0]))||isNaN(Number(db[1]))||(ld.lineNumber=Number(db[0]),ld.columnNumber=Number(db[1])):ld.lineNumber=Number(db[0]));var Ih={level:"ERROR_LEVEL_UNKNOWN",message:M.message,errorClassName:M.name,sampleWeight:M.sampleWeight};"ERROR"===kd?Ih.level="ERROR_LEVEL_ERROR":"WARNING"===kd&&(Ih.level="ERROR_LEVEL_WARNNING");var rr={isObfuscated:!0,browserStackInfo:ld};Ja.pageUrl=window.location.href;Ja.kvPairs=[];S("FEXP_EXPERIMENTS")&&
(Ja.experimentIds=S("FEXP_EXPERIMENTS"));var Jh=bj();if(!cj()&&Jh)for(var Km=u(Object.keys(Jh)),Pb=Km.next();!Pb.done;Pb=Km.next()){var Lm=Pb.value;Ja.kvPairs.push({key:Lm,value:String(Jh[Lm])})}var Kh=M.params;if(Kh){var Mm=u(Object.keys(Kh));for(Pb=Mm.next();!Pb.done;Pb=Mm.next()){var Nm=Pb.value;Ja.kvPairs.push({key:"client."+Nm,value:String(Kh[Nm])})}}var Om=S("SERVER_NAME"),Pm=S("SERVER_VERSION");Om&&Pm&&(Ja.kvPairs.push({key:"server.name",value:Om}),Ja.kvPairs.push({key:"server.version",value:Pm}));
xh={errorMetadata:Ja,stackTrace:rr,logMessage:Ih}}var Qm=xh;if(!Qm)break a;wq("clientError",Qm)}if("ERROR"===kd||T("errors_flush_gel_always_killswitch"))b:{if(T("web_fp_via_jspb")){var Ge=!0;Ge=void 0===Ge?!1:Ge;var Rm=vq;vq=[];if(Rm)for(var Sm=u(Rm),Lh=Sm.next();!Lh.done;Lh=Sm.next()){var uc=Lh.value;Ge?sq(uc.Ec,uc.payload,Qo,uc.options):wq(uc.Ec,uc.payload,uc.options)}uq(!0);if(!T("web_fp_via_jspb_and_json"))break b}uq()}}T("suppress_error_204_logging")||Hq(Lb,M);Fq(M)}}}}}else throw rc;}else console&&
console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function dr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function er(a){return 0===a.search("get")||0===a.search("is")}
;function fr(a,b){Xq.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
w(fr,Xq);q=fr.prototype;q.nc=function(){var a=Sq(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Sq(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.jc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":gr(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},hr(this,a.apiInterface),gr(this,a));break;default:ar(this,b,a)}};
function gr(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Sq(a.h,"title"))))}}
function hr(a,b){bb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:dr(c)?this[c]=function(){this.playerInfo={};
this.ka={};cr(this,c,arguments);return this}:er(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){cr(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Sq(this.h,"host")+("/embed/"+Sq(this.h,"videoId")),b=Number(Sq(this.h,"width")),c=Number(Sq(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Ub(a);d=Ub(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function sr(a){if("iframe"!==a.tagName.toLowerCase()){var b=Pq(a,"videoid");b&&(b={videoId:b,width:Pq(a,"width"),height:Pq(a,"height")},new fr(a,b))}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Lq[a]});
D("YT.scan",Oq);D("YT.subscribe",function(a,b,c){vg.subscribe(a,b,c);Nq[a]=!0;for(var d in Lq)Lq.hasOwnProperty(d)&&$q(Lq[d],a)});
D("YT.unsubscribe",function(a,b,c){ug(a,b,c)});
D("YT.Player",fr);Xq.prototype.destroy=Xq.prototype.destroy;Xq.prototype.setSize=Xq.prototype.setSize;Xq.prototype.getIframe=Xq.prototype.getIframe;Xq.prototype.addEventListener=Xq.prototype.addEventListener;fr.prototype.getVideoEmbedCode=fr.prototype.getVideoEmbedCode;fr.prototype.getOptions=fr.prototype.getOptions;fr.prototype.getOption=fr.prototype.getOption;
Mq.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=ab(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);bb(fb(a,b),sr)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Oq();var tr=B.onYTReady;tr&&tr();var ur=B.onYouTubeIframeAPIReady;ur&&ur();var vr=B.onYouTubePlayerAPIReady;vr&&vr();}).call(this);