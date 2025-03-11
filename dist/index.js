"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(w,u){
var k=require('@stdlib/stats-base-dnanvariancetk/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a,f){return p(k(e,r,t,a,f))}u.exports=x
});var d=n(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=i();function l(e,r,t,a){return m(e,r,t,a,j(e,a))}v.exports=l
});var c=n(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=i();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,y=O(E(__dirname,"./native.js"));b(y)?s=g:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
