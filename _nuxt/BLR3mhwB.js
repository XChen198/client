import{g as T,G as q,H as F,I as B,J as z,K as X,L as Z,k as M,r as V,N as D,O as k,P as ee,Q as re,U as w,x as $,D as G,A as d,R as b,T as K,B as te,S as ne,m as ae,z as oe}from"./DbqO2zOW.js";var S=Object.create,se=function(){function e(){}return function(r){if(!T(r))return{};if(S)return S(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function ie(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function ce(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}function y(e,r,t,a){var l=!t;t||(t={});for(var s=-1,o=r.length;++s<o;){var c=r[s],i=void 0;i===void 0&&(i=e[c]),l?q(t,c,i):F(t,c,i)}return t}function fe(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ue=Object.prototype,ge=ue.hasOwnProperty;function le(e){if(!T(e))return fe(e);var r=B(e),t=[];for(var a in e)a=="constructor"&&(r||!ge.call(e,a))||t.push(a);return t}function j(e){return z(e)?X(e,!0):le(e)}var N=Z(Object.getPrototypeOf,Object);function be(e,r){return e&&y(r,M(r),e)}function ye(e,r){return e&&y(r,j(r),e)}var _=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=_&&typeof module=="object"&&module&&!module.nodeType&&module,pe=x&&x.exports===_,I=pe?V.Buffer:void 0,P=I?I.allocUnsafe:void 0;function Te(e,r){if(r)return e.slice();var t=e.length,a=P?P(t):new e.constructor(t);return e.copy(a),a}function de(e,r){return y(e,D(e),r)}var je=Object.getOwnPropertySymbols,R=je?function(e){for(var r=[];e;)ee(r,D(e)),e=N(e);return r}:k;function Ae(e,r){return y(e,R(e),r)}function he(e){return re(e,j,R)}var me=Object.prototype,ve=me.hasOwnProperty;function Oe(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&ve.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function A(e){var r=new e.constructor(e.byteLength);return new w(r).set(new w(e)),r}function we(e,r){var t=r?A(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var $e=/\w*$/;function Se(e){var r=new e.constructor(e.source,$e.exec(e));return r.lastIndex=e.lastIndex,r}var C=$?$.prototype:void 0,E=C?C.valueOf:void 0;function xe(e){return E?Object(E.call(e)):{}}function Ie(e,r){var t=r?A(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Pe="[object Boolean]",Ce="[object Date]",Ee="[object Map]",Le="[object Number]",Ue="[object RegExp]",Fe="[object Set]",Be="[object String]",Me="[object Symbol]",De="[object ArrayBuffer]",Ge="[object DataView]",Ke="[object Float32Array]",Ne="[object Float64Array]",_e="[object Int8Array]",Re="[object Int16Array]",He="[object Int32Array]",Je="[object Uint8Array]",Qe="[object Uint8ClampedArray]",We="[object Uint16Array]",Ye="[object Uint32Array]";function qe(e,r,t){var a=e.constructor;switch(r){case De:return A(e);case Pe:case Ce:return new a(+e);case Ge:return we(e,t);case Ke:case Ne:case _e:case Re:case He:case Je:case Qe:case We:case Ye:return Ie(e,t);case Ee:return new a;case Le:case Be:return new a(e);case Ue:return Se(e);case Fe:return new a;case Me:return xe(e)}}function ze(e){return typeof e.constructor=="function"&&!B(e)?se(N(e)):{}}var Xe="[object Map]";function Ze(e){return G(e)&&d(e)==Xe}var L=b&&b.isMap,Ve=L?K(L):Ze,ke="[object Set]";function er(e){return G(e)&&d(e)==ke}var U=b&&b.isSet,rr=U?K(U):er,tr=1,nr=2,ar=4,H="[object Arguments]",or="[object Array]",sr="[object Boolean]",ir="[object Date]",cr="[object Error]",J="[object Function]",fr="[object GeneratorFunction]",ur="[object Map]",gr="[object Number]",Q="[object Object]",lr="[object RegExp]",br="[object Set]",yr="[object String]",pr="[object Symbol]",Tr="[object WeakMap]",dr="[object ArrayBuffer]",jr="[object DataView]",Ar="[object Float32Array]",hr="[object Float64Array]",mr="[object Int8Array]",vr="[object Int16Array]",Or="[object Int32Array]",wr="[object Uint8Array]",$r="[object Uint8ClampedArray]",Sr="[object Uint16Array]",xr="[object Uint32Array]",n={};n[H]=n[or]=n[dr]=n[jr]=n[sr]=n[ir]=n[Ar]=n[hr]=n[mr]=n[vr]=n[Or]=n[ur]=n[gr]=n[Q]=n[lr]=n[br]=n[yr]=n[pr]=n[wr]=n[$r]=n[Sr]=n[xr]=!0;n[cr]=n[J]=n[Tr]=!1;function p(e,r,t,a,l,s){var o,c=r&tr,i=r&nr,W=r&ar;if(o!==void 0)return o;if(!T(e))return e;var h=ae(e);if(h){if(o=Oe(e),!c)return ie(e,o)}else{var g=d(e),m=g==J||g==fr;if(te(e))return Te(e,c);if(g==Q||g==H||m&&!l){if(o=i||m?{}:ze(e),!c)return i?Ae(e,ye(o,e)):de(e,be(o,e))}else{if(!n[g])return l?e:{};o=qe(e,g,c)}}s=new ne;var v=s.get(e);if(v)return v;s.set(e,o),rr(e)?e.forEach(function(f){o.add(p(f,r,t,f,e,s))}):Ve(e)&&e.forEach(function(f,u){o.set(u,p(f,r,t,u,e,s))});var Y=W?i?he:oe:i?j:M,O=h?void 0:Y(e);return ce(O||e,function(f,u){O&&(u=f,f=e[u]),F(o,u,p(f,r,t,u,e,s))}),o}export{p as b};
