// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,d="set"in r,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),d&&i&&i.call(e,t,r.set),e};function c(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(e,t,r,n){var o,a,i,u,l,f,c;if(e<=0)return NaN;if(1===e||0===n)return(l=r[0])==l&&e-t>0?0:NaN;for(a=n<0?(1-e)*n:0,o=0,u=0,f=0,c=0;c<e;c++)(l=r[a])==l&&(o+=l*l,u+=l,f+=1),a+=n;return(i=f-t)<=0?NaN:(o-u/f*u)/i}function d(e,t,r,n,o){var a,i,u,l,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=r[o])==f&&e-t>0?0:NaN;for(i=o,a=0,l=0,c=0,_=0;_<e;_++)(f=r[i])==f&&(a+=f*f,l+=f,c+=1),i+=n;return(u=c-t)<=0?NaN:(a-l/c*l)/u}c(_,"ndarray",d);var p=Math.sqrt;function s(e,t,r,n){return p(_(e,t,r,n))}function y(e,t,r,n,o){return p(d(e,t,r,n,o))}c(s,"ndarray",y),e.default=s,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dnanstdevtk={});
//# sourceMappingURL=browser.js.map