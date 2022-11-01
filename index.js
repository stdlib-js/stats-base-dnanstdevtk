// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).dnanstdevtk={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,s,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||c.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t};var l=e;function s(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){var r=function(t){return"/"===t.charAt(0)}(t),e="/"===b(t,-1);return(t=function(t,r){for(var e=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}(y(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&e&&(t+="/"),(r?"/":"")+t}function y(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}var b="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)},d=/./;function v(t){return"boolean"==typeof t}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,m="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(t){var r,e,n,o,u;if(null==t)return g.call(t);e=t[m],u=m,r=null!=(o=t)&&w.call(o,u);try{t[m]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[m]=e:delete t[m],n}:function(t){return g.call(t)};var O=h,E=Boolean.prototype.toString;var S=_();function N(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===O(t)))}function A(t){return v(t)||N(t)}function P(){return new Function("return this;")()}s(A,"isPrimitive",v),s(A,"isObject",N);var T="object"==typeof self?self:null,k="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof B?B:null;var M=function(t){if(arguments.length){if(!v(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(T)return T;if(k)return k;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(t){return"[object Array]"===O(t)};var q=G;function I(t){return null!==t&&"object"==typeof t}var J=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!q(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(I);function R(t){var r,e,n,o;if(("Object"===(e=O(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=L.exec(n.toString()))return r[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(I,"isObjectLikeArray",J);var U="function"==typeof d||"object"==typeof C||"function"==typeof V?function(t){return R(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?R(t).toLowerCase():r};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===O(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H,K=X;function Q(t){return null==t?null:(t=Object(t),K(t))}function W(t,r,e,n){var o,u,i,f,a,c,l;if(t<=0)return NaN;if(1===t||0===n)return(a=e[0])==a&&t-r>0?0:NaN;for(u=n<0?(1-t)*n:0,o=0,f=0,c=0,l=0;l<t;l++)(a=e[u])==a&&(o+=a*a,f+=a,c+=1),u+=n;return(i=c-r)<=0?NaN:(o-f/c*f)/i}s(W,"ndarray",(function(t,r,e,n,o){var u,i,f,a,c,l,s;if(t<=0)return NaN;if(1===t||0===n)return(c=e[o])==c&&t-r>0?0:NaN;for(i=o,u=0,a=0,l=0,s=0;s<t;s++)(c=e[i])==c&&(u+=c*c,a+=c,l+=1),i+=n;return(f=l-r)<=0?NaN:(u-a/l*a)/f}));var Y=function(t){try{return require(t)}catch(t){return function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===O(t))return!0;t=Q(t)}return!1}(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}(function(){var t=Array.prototype.slice.call(arguments,0);return p(y(t,(function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}("/home/runner/work/stats-base-dnanstdevtk/stats-base-dnanstdevtk/node_modules/@stdlib/stats-base-dnanvariancetk/lib","./native.js")),Z=H=Y instanceof Error?W:Y;const{ndarray:$}=H;var tt=Math.sqrt;function rt(t,r,e,n){return tt(Z(t,r,e,n))}function et(t,r,e,n,o){return tt($(t,r,e,n,o))}s(rt,"ndarray",et),t.default=rt,t.ndarray=et,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
