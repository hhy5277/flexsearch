/*
 FlexSearch v0.3.51
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(g,x,d){let m;(m=d.define)&&m.amd?m([],function(){return x}):(m=d.modules)?m[g.toLowerCase()]=x:"object"===typeof exports?module.exports=x:d[g]=x})("FlexSearch",function(){function g(b){B(b)&&(b=G[b]);b||(b=w);this.id=b.id||L++;this.init(b);x(this,"index",function(){return this.b});x(this,"length",function(){return Object.keys(this.b).length})}function x(b,a,c){Object.defineProperty(b,a,{get:c})}function d(b){return new RegExp(b,"g")}function m(b,a){for(let c=0;c<a.length;c+=
2)b=b.replace(a[c],a[c+1]);return b}function A(b,a,c,f,e,d,h){if(a[c])return a[c];e=e?(9-(h||6))*d+(h||6)*e:d;a[c]=e;e>=h&&(b=b[9-(e+.5>>0)],b=b[c]||(b[c]=[]),b[b.length]=f);return e}function E(b,a){if(b){const c=Object.keys(b);for(let f=0,e=c.length;f<e;f++){const e=c[f],h=b[e];if(h)for(let c=0,f=h.length;c<f;c++)if(h[c]===a){1===f?delete b[e]:h.splice(c,1);break}else"object"===typeof h[c]&&E(h[c],a)}}}function F(b){let a="",c="";var f="";for(let e=0;e<b.length;e++){const d=b[e];if(d!==c)if(e&&"h"===
d){if(f="a"===f||"e"===f||"i"===f||"o"===f||"u"===f||"y"===f,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&f||" "===c)a+=d}else a+=d;f=e===b.length-1?"":b[e+1];c=d}return a}function M(b,a){b=b.length-a.length;return 0>b?1:b?-1:0}function N(b,a){b=b.length-a.length;return 0>b?-1:b?1:0}function O(b,a,c){let f=[],e;const d=b.length;if(1<d){b.sort(N);const n=t();let l=b[0],g=l.length,k=0;for(;k<g;)n["@"+l[k++]]=1;let r,p=0,u=0;for(;++u<d;){let v=!1;const q=u===d-1;e=[];l=b[u];g=l.length;for(k=
0;k<g;){r=l[k++];var h="@"+r;if(n[h]){const b=n[h];if(b===u){if(q){if(f[p++]=r,a&&p===a)return f}else n[h]=u+1;v=!0}else c&&(h=e[b]||(e[b]=[]),h[h.length]=r)}}if(!v&&!c)break}if(c&&(p=f.length,(u=e.length)&&(!a||p<a)))for(;u--;)if(r=e[u])for(k=0,g=r.length;k<g;k++)if(f[p++]=r[k],a&&p===a)return f}else d&&(f=b[0],a&&f.length>a&&(f=f.slice(0,a)));return f}function B(b){return"string"===typeof b}function C(b){return"function"===typeof b}function y(b){return"undefined"===typeof b}function H(b){const a=
Array(b);for(let c=0;c<b;c++)a[c]=t();return a}function t(){return Object.create(null)}const w={encode:"icase",a:"forward",l:!1,cache:!1,async:!1,s:!1,threshold:0,depth:0},G={memory:{encode:"extra",a:"strict",threshold:7},speed:{encode:"icase",a:"strict",threshold:7,depth:2},match:{encode:"extra",a:"full"},score:{encode:"extra",a:"strict",threshold:5,depth:4},balance:{encode:"balance",a:"strict",threshold:6,depth:3},fastest:{encode:"icase",a:"strict",threshold:9,depth:1}},D=[];let L=0;const I=d("\\W+"),
J={},K={};g.create=function(b){return new g(b)};g.registerMatcher=function(b){for(const a in b)b.hasOwnProperty(a)&&D.push(d(a),b[a]);return this};g.registerEncoder=function(b,a){z[b]=a.bind(z);return this};g.registerLanguage=function(b,a){J[b]=a.filter;K[b]=a.stemmer;return this};g.encode=function(b,a){return z[b](a)};g.prototype.init=function(b){this.i=[];b||(b=w);var a=b.preset,c=a?G[a]:{};this.a=b.tokenize||c.a||this.a||w.a;this.async="undefined"===typeof Promise||y(a=b.async)?this.async||w.async:
a;this.threshold=y(a=b.threshold)?c.threshold||this.threshold||w.threshold:a;this.depth=y(a=b.depth)?c.depth||this.depth||w.depth:a;this.l=y(a=b.suggest)?this.l||w.l:a;this.j=(a=y(a=b.encode)?c.encode:a)&&z[a]&&z[a].bind(z)||(C(a)?a:this.j||!1);(a=b.matcher)&&this.addMatcher(a);if(a=b.filter){a=J[a]||a;c=this.j;var f=t();if(a)for(var e=0;e<a.length;e++){var n=c?c(a[e]):a[e];f[n]=String.fromCharCode(65E3-a.length+e)}this.filter=a=f}if(a=b.stemmer){var h;c=K[a]||a;f=this.j;e=[];if(c)for(h in c)c.hasOwnProperty(h)&&
(n=f?f(h):h,e.push(d("(?=.{"+(n.length+3)+",})"+n+"$"),f?f(c[h]):c[h]));this.stemmer=h=e}this.c=H(10-(this.threshold||0));this.f=t();this.b=t();this.m=!0;this.h=(this.cache=a=y(a=b.cache)?this.cache||w.cache:a)?new P(a):!1;return this};g.prototype.encode=function(b){b&&D.length&&(b=m(b,D));b&&this.i.length&&(b=m(b,this.i));b&&this.j&&(b=this.j(b));b&&this.stemmer&&(b=m(b,this.stemmer));return b};g.prototype.addMatcher=function(b){const a=this.i;for(const c in b)b.hasOwnProperty(c)&&a.push(d(c),b[c]);
return this};g.prototype.add=function(b,a,c,f,e){if(a&&B(a)&&(b||0===b)){var d="@"+b;if(this.b[d]&&!f)return this.update(b,a);if(!e){if(this.async&&"function"!==typeof importScripts){let e=this;d=new Promise(function(c){setTimeout(function(){e.add(b,a,null,f,!0);e=null;c()})});if(c)d.then(c);else return d;return this}if(c)return this.add(b,a,null,f,!0),c(),this}a=this.encode(a);if(!a.length)return this;c=this.a;e=C(c)?c(a):a.split(I);const n=t();n._ctx=t();const p=this.threshold,u=this.depth,m=this.c,
v=e.length;for(let a=0;a<v;a++){var h=e[a];if(h){var g=h.length,l=(v-a)/v,q="";switch(c){case "reverse":case "both":for(var k=g-1;1<=k;k--)q=h[k]+q,A(m,n,q,b,(g-k)/g,l,p);q="";case "forward":for(k=0;k<g;k++)q+=h[k],A(m,n,q,b,1,l,p);break;case "full":for(k=0;k<g;k++){const a=(g-k)/g;for(let c=g;c>k;c--)q=h.substring(k,c),A(m,n,q,b,a,l,p)}break;default:if(g=A(m,n,h,b,1,l,p),u&&1<v&&g>=p)for(g=n._ctx[h]||(n._ctx[h]=t()),h=this.f[h]||(this.f[h]=H(10-(p||0))),l=a-u,q=a+u+1,0>l&&(l=0),q>v&&(q=v);l<q;l++)l!==
a&&A(h,g,e[l],b,0,10-(l<a?a-l:l-a),p)}}}this.b[d]=1;this.m=!1}return this};g.prototype.update=function(b,a,c){this.b["@"+b]&&B(a)&&(this.remove(b),this.add(b,a,c,!0));return this};g.prototype.remove=function(b,a,c){var f="@"+b;if(this.b[f]){if(!c){if(this.async&&"function"!==typeof importScripts){let c=this;f=new Promise(function(a){setTimeout(function(){c.remove(b,null,!0);c=null;a()})});if(a)f.then(a);else return f;return this}if(a)return this.remove(b,null,!0),a(),this}for(a=0;a<10-(this.threshold||
0);a++)E(this.c[a],b);this.depth&&E(this.f,b);delete this.b[f];this.m=!1}return this};g.prototype.search=function(b,a,c,f){let e=b,d,h=[];"object"===typeof b&&((c=b.callback||a)&&(e.callback=null),a=b.limit,d=b.threshold,b=b.query);d||(d=this.threshold||0);C(a)?(c=a,a=1E3):a||0===a||(a=1E3);if(!f){if(this.async&&"function"!==typeof importScripts){let d=this;b=new Promise(function(b){setTimeout(function(){b(d.search(e,a,null,!0));d=null})});if(c)b.then(c);else return b;return this}if(c)return c(this.search(e,
a,null,!0)),this}if(!b||!B(b))return h;e=b;if(this.cache)if(this.m){if(c=this.h.get(b))return c}else this.h.clear(),this.m=!0;e=this.encode(e);if(!e.length)return h;c=this.a;c=C(c)?c(e):e.split(I);f=c.length;let g=!0;const l=[],m=t();let k;if(1<f)if(this.depth){k=!0;var r=c[0];m[r]=1}else c.sort(M);let p;if(!k||(p=this.f)[r])for(let a=k?1:0;a<f;a++){const b=c[a];if(b){if(!m[b]){const a=[];let c=!1,f=0;if(r=k?p[r]:this.c){let e;for(let h=0;h<10-d;h++)if(e=r[h][b])a[f++]=e,c=!0}if(c)l[l.length]=1<f?
a.concat.apply([],a):a[0];else if(!this.l){g=!1;break}m[b]=1}r=b}}else g=!1;g&&(h=O(l,a,this.l));this.cache&&this.h.set(b,h);return h};g.prototype.info=function(){let b;let a=0,c=0,d=0;for(var e=0;e<10-(this.threshold||0);e++){b=Object.keys(this.c[e]);for(let f=0;f<b.length;f++){var g=this.c[e][b[f]].length;a+=1*g+2*b[f].length+4;c+=g;d+=2*b[f].length}}b=Object.keys(this.b);g=b.length;for(e=0;e<g;e++)a+=2*b[e].length+2;return{id:this.id,memory:a,items:g,sequences:c,chars:d,cache:this.cache&&this.cache.g?
this.cache.g.length:!1,matcher:D.length+(this.i?this.i.length:0),worker:this.s,threshold:this.threshold,depth:this.depth,contextual:this.depth&&"strict"===this.a}};g.prototype.clear=function(){return this.destroy().init()};g.prototype.destroy=function(){this.cache&&(this.h.clear(),this.h=null);this.c=this.f=this.b=null;return this};g.prototype.export=function(){return JSON.stringify([this.c,this.f,this.b])};g.prototype.import=function(b){b=JSON.parse(b);this.c=b[0];this.f=b[1];this.b=b[2]};const z=
{icase:function(b){return b.toLowerCase()},simple:function(){const b=[d("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",d("[\u00e8\u00e9\u00ea\u00eb]"),"e",d("[\u00ec\u00ed\u00ee\u00ef]"),"i",d("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",d("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",d("[\u00fd\u0177\u00ff]"),"y",d("\u00f1"),"n",d("\u00e7"),"c",d("\u00df"),"s",d(" & ")," and ",d("[-/]")," ",d("[^a-z0-9 ]"),"",d("\\s+")," "];return function(a){a=m(a.toLowerCase(),b);return" "===a?"":a}}(),advanced:function(){const b=
[d("ae"),"a",d("ai"),"ei",d("ay"),"ei",d("ey"),"ei",d("oe"),"o",d("ue"),"u",d("ie"),"i",d("sz"),"s",d("zs"),"s",d("sh"),"s",d("ck"),"k",d("cc"),"k",d("dt"),"t",d("ph"),"f",d("pf"),"f",d("ou"),"o",d("uo"),"u"];return function(a,c){if(!a)return a;a=this.simple(a);2<a.length&&(a=m(a,b));c||1<a.length&&(a=F(a));return a}}(),extra:function(){const b=[d("p"),"b",d("z"),"s",d("[cgq]"),"k",d("n"),"m",d("d"),"t",d("[vw]"),"f",d("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=
a.split(" ");for(let c=0;c<a.length;c++){const d=a[c];1<d.length&&(a[c]=d[0]+m(d.substring(1),b))}a=a.join(" ");a=F(a)}return a}}(),balance:function(){const b=[d("[-/]")," ",d("[^a-z0-9 ]"),"",d("\\s+")," "];return function(a){return F(m(a.toLowerCase(),b))}}()},P=function(){function b(a){this.clear();this.o=!0!==a&&a}b.prototype.clear=function(){this.cache=t();this.count=t();this.index=t();this.g=[]};b.prototype.set=function(a,b){if(this.o&&y(this.cache[a])){let c=this.g.length;if(c===this.o){c--;
const a=this.g[c];delete this.cache[a];delete this.count[a];delete this.index[a]}this.index[a]=c;this.g[c]=a;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};b.prototype.get=function(a){const b=this.cache[a];if(this.o&&b){var d=++this.count[a];const b=this.index;let c=b[a];if(0<c){const f=this.g;for(var e=c;this.count[f[--c]]<=d&&-1!==c;);c++;if(c!==e){for(d=e;d>c;d--)e=f[d-1],f[d]=e,b[e]=d;f[c]=a;b[a]=c}}}return b};return b}();return g}(!1),this);