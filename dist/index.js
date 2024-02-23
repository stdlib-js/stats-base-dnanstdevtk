"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(w,s){
var y=require('@stdlib/stats-base-dnanvariancetk/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,t){return x(y(e,r,a,t))}s.exports=f
});var d=n(function(z,v){
var j=require('@stdlib/stats-base-dnanvariancetk/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,t,p){return m(j(e,r,a,t,p))}v.exports=l
});var c=n(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),_=d();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),i,k=O(E(__dirname,"./native.js"));b(k)?i=g:i=k;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
