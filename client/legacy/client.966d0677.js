function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,i=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(n){var e=function(n){var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return R()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=w(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=f(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var s={};function l(){}function p(){}function h(){}var v={};v[i]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==e&&r.call(m,i)&&(v=m);var y=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function b(n,e){var o;this._invoke=function(i,a){function u(){return new e((function(o,u){!function o(i,a,u,c){var s=f(n[i],n,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}(i,a,o,u)}))}return o=o?o.then(u,u):u()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function $(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[u]=p.displayName="GeneratorFunction",n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},n.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},n.AsyncIterator=b,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new b(c(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[u]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function a(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?l(n):e}function h(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,n){for(var e in n)t[e]=n[e];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function E(t,n,e,r){return t[1]&&r?y(e.ctx.slice(),t[1](r(n))):e.ctx}function S(n,e,r,o,i,a,u){var c=function(n,e,r,o){if(n[2]&&o){var i=n[2](o(r));if(void 0===e.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(e.dirty.length,i.length),c=0;c<u;c+=1)a[c]=e.dirty[c]|i[c];return a}return e.dirty|i}return e.dirty}(e,o,i,a);if(c){var f=E(e,r,o,u);n.p(f,c)}}function R(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function L(t){t.parentNode.removeChild(t)}function k(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function N(){return P("")}function q(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function T(t){return""===t?void 0:+t}function D(t){return Array.from(t.childNodes)}function I(t,n,e,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===n){for(var a=0;a<i.attributes.length;){var u=i.attributes[a];e[u.name]?a++:i.removeAttribute(u.name)}return t.splice(o,1)[0]}}return r?j(n):O(n)}function G(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return P(n)}function U(t){return G(t," ")}function F(t,n){n=""+n,t.data!==n&&(t.data=n)}function H(t,n){t.value=null==n?"":n}function B(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}function M(t){o=t}function J(){if(!o)throw new Error("Function called outside component initialization");return o}var Y=[],K=[],V=[],z=[],W=Promise.resolve(),X=!1;function Q(t){V.push(t)}var Z=!1,tt=new Set;function nt(){if(!Z){Z=!0;do{for(var t=0;t<Y.length;t+=1){var n=Y[t];M(n),et(n.$$)}for(Y.length=0;K.length;)K.pop()();for(var e=0;e<V.length;e+=1){var r=V[e];tt.has(r)||(tt.add(r),r())}V.length=0}while(Y.length);for(;z.length;)z.pop()();X=!1,Z=!1,tt.clear()}}function et(t){if(null!==t.fragment){t.update(),w(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}var rt,ot=new Set;function it(){rt={r:0,c:[],p:rt}}function at(){rt.r||w(rt.c),rt=rt.p}function ut(t,n){t&&t.i&&(ot.delete(t),t.i(n))}function ct(t,n,e,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((function(){ot.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function ft(t,n){for(var e={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=n[i];if(u){for(var c in a)c in u||(r[c]=1);for(var f in u)o[f]||(e[f]=u[f],o[f]=1);t[i]=u}else for(var s in a)o[s]=1}for(var l in r)l in e||(e[l]=void 0);return e}function st(n){return"object"===t(n)&&null!==n?n:{}}function lt(t){t&&t.c()}function pt(t,n){t&&t.l(n)}function ht(t,n,e){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,u=r.after_update;o&&o.m(n,e),Q((function(){var n=i.map(g).filter($);a?a.push.apply(a,h(n)):w(n),t.$$.on_mount=[]})),u.forEach(Q)}function vt(t,n){var e=t.$$;null!==e.fragment&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(Y.push(t),X||(X=!0,W.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function mt(t,n,e,r,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=o;M(t);var f=n.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:i,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:u},l=!1;if(s.ctx=e?e(t,f,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return s.ctx&&i(s.ctx[n],s.ctx[n]=r)&&(s.bound[n]&&s.bound[n](r),l&&dt(t,n)),e})):[],s.update(),l=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),n.target){if(n.hydrate){var p=D(n.target);s.fragment&&s.fragment.l(p),p.forEach(L)}else s.fragment&&s.fragment.c();n.intro&&ut(t.$$.fragment),ht(t,n.target,n.anchor),nt()}M(c)}var yt=function(){function t(){v(this,t)}var n,e,r;return n=t,(e=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=m}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(n.prototype,e),r&&d(n,r),t}(),gt=[];function bt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(e){if(x(t,e)&&(t=e,n)){for(var o=!gt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),gt.push(a,t)}if(o){for(var u=0;u<gt.length;u+=2)gt[u][0](gt[u+1]);gt.length=0}}}function i(n){o(n(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,u=[i,a];return r.push(u),1===r.length&&(n=e(o)||m),i(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:i,subscribe:a}}var wt={},$t=function(){return{}};function xt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function Et(t){var n,e,r,o,i;return{c:function(){n=O("header"),e=O("img"),r=A(),o=O("h1"),i=P("La Cuenta"),this.h()},l:function(t){var a=D(n=I(t,"HEADER",{}));e=I(a,"IMG",{src:!0,alt:!0}),r=U(a);var u=D(o=I(a,"H1",{}));i=G(u,"La Cuenta"),u.forEach(L),a.forEach(L),this.h()},h:function(){e.src!=="favicon.ico"&&C(e,"src","favicon.ico"),C(e,"alt","La Cuenta Icon")},m:function(t,a){_(t,n,a),R(n,e),R(n,r),R(n,o),R(o,i)},p:m,i:m,o:m,d:function(t){t&&L(n)}}}var St=function(t){s(e,yt);var n=xt(e);function e(t){var r;return v(this,e),mt(l(r=n.call(this)),t,null,Et,x,{}),r}return e}();function Rt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function _t(t){var n,e,r,o,i,a,u,c,f,s;return{c:function(){n=O("footer"),e=O("h5"),r=O("a"),o=P("GitHub Repo"),i=A(),a=O("h5"),u=P("by "),c=O("strong"),f=O("a"),s=P("agustinl.dev"),this.h()},l:function(t){var l=D(n=I(t,"FOOTER",{})),p=D(e=I(l,"H5",{})),h=D(r=I(p,"A",{href:!0}));o=G(h,"GitHub Repo"),h.forEach(L),p.forEach(L),i=U(l);var v=D(a=I(l,"H5",{}));u=G(v,"by ");var d=D(c=I(v,"STRONG",{})),m=D(f=I(d,"A",{href:!0}));s=G(m,"agustinl.dev"),m.forEach(L),d.forEach(L),v.forEach(L),l.forEach(L),this.h()},h:function(){C(r,"href","https://github.com/agustinl/cuentas-claras"),C(f,"href","https://www.agustinl.dev/")},m:function(t,l){_(t,n,l),R(n,e),R(e,r),R(r,o),R(n,i),R(n,a),R(a,u),R(a,c),R(c,f),R(f,s)},p:m,i:m,o:m,d:function(t){t&&L(n)}}}var Lt=function(t){s(e,yt);var n=Rt(e);function e(t){var r;return v(this,e),mt(l(r=n.call(this)),t,null,_t,x,{}),r}return e}();function kt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function Ot(t){var n,e,o,i,a=new St({}),u=t[1].default,c=function(t,n,e,r){if(t){var o=E(t,n,e,r);return t[0](o)}}(u,t,t[0],null),f=new Lt({});return{c:function(){n=O("main"),lt(a.$$.fragment),e=A(),c&&c.c(),o=A(),lt(f.$$.fragment)},l:function(t){var r=D(n=I(t,"MAIN",{}));pt(a.$$.fragment,r),e=U(r),c&&c.l(r),o=U(r),pt(f.$$.fragment,r),r.forEach(L)},m:function(t,r){_(t,n,r),ht(a,n,null),R(n,e),c&&c.m(n,null),R(n,o),ht(f,n,null),i=!0},p:function(t,n){var e=r(n,1)[0];c&&c.p&&1&e&&S(c,u,t,t[0],e,null,null)},i:function(t){i||(ut(a.$$.fragment,t),ut(c,t),ut(f.$$.fragment,t),i=!0)},o:function(t){ct(a.$$.fragment,t),ct(c,t),ct(f.$$.fragment,t),i=!1},d:function(t){t&&L(n),vt(a),c&&c.d(t),vt(f)}}}function jt(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,i=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,i=t.$$scope)},[i,o]}var Pt=function(t){s(e,yt);var n=kt(e);function e(t){var r;return v(this,e),mt(l(r=n.call(this)),t,jt,Ot,x,{}),r}return e}();function At(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function Nt(t){var n,e,r=t[1].stack+"";return{c:function(){n=O("pre"),e=P(r)},l:function(t){var o=D(n=I(t,"PRE",{}));e=G(o,r),o.forEach(L)},m:function(t,r){_(t,n,r),R(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&F(e,r)},d:function(t){t&&L(n)}}}function qt(t){var n,e,o,i,a,u,c,f,s,l=t[1].message+"";document.title=n=t[0];var p=t[2]&&t[1].stack&&Nt(t);return{c:function(){e=A(),o=O("h1"),i=P(t[0]),a=A(),u=O("p"),c=P(l),f=A(),p&&p.c(),s=N(),this.h()},l:function(n){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),e=U(n);var r=D(o=I(n,"H1",{class:!0}));i=G(r,t[0]),r.forEach(L),a=U(n);var h=D(u=I(n,"P",{class:!0}));c=G(h,l),h.forEach(L),f=U(n),p&&p.l(n),s=N(),this.h()},h:function(){C(o,"class","svelte-8od9u6"),C(u,"class","svelte-8od9u6")},m:function(t,n){_(t,e,n),_(t,o,n),R(o,i),_(t,a,n),_(t,u,n),R(u,c),_(t,f,n),p&&p.m(t,n),_(t,s,n)},p:function(t,e){var o=r(e,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&F(i,t[0]),2&o&&l!==(l=t[1].message+"")&&F(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Nt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(e),t&&L(o),t&&L(a),t&&L(u),t&&L(f),p&&p.d(t),t&&L(s)}}}function Ct(t,n,e){var r=n.status,o=n.error;return t.$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,!1]}var Tt=function(t){s(e,yt);var n=At(e);function e(t){var r;return v(this,e),mt(l(r=n.call(this)),t,Ct,qt,x,{status:0,error:1}),r}return e}();function Dt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function It(t){var n,e,r=[t[4].props],o=t[4].component;function i(t){for(var n={},e=0;e<r.length;e+=1)n=y(n,r[e]);return{props:n}}if(o)var a=new o(i());return{c:function(){a&&lt(a.$$.fragment),n=N()},l:function(t){a&&pt(a.$$.fragment,t),n=N()},m:function(t,r){a&&ht(a,t,r),_(t,n,r),e=!0},p:function(t,e){var u=16&e?ft(r,[st(t[4].props)]):{};if(o!==(o=t[4].component)){if(a){it();var c=a;ct(c.$$.fragment,1,0,(function(){vt(c,1)})),at()}o?(lt((a=new o(i())).$$.fragment),ut(a.$$.fragment,1),ht(a,n.parentNode,n)):a=null}else o&&a.$set(u)},i:function(t){e||(a&&ut(a.$$.fragment,t),e=!0)},o:function(t){a&&ct(a.$$.fragment,t),e=!1},d:function(t){t&&L(n),a&&vt(a,t)}}}function Gt(t){var n,e=new Tt({props:{error:t[0],status:t[1]}});return{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Ut(t){var n,e,r,o,i=[Gt,It],a=[];function u(t,n){return t[0]?0:1}return n=u(t),e=a[n]=i[n](t),{c:function(){e.c(),r=N()},l:function(t){e.l(t),r=N()},m:function(t,e){a[n].m(t,e),_(t,r,e),o=!0},p:function(t,o){var c=n;(n=u(t))===c?a[n].p(t,o):(it(),ct(a[c],1,1,(function(){a[c]=null})),at(),(e=a[n])||(e=a[n]=i[n](t)).c(),ut(e,1),e.m(r.parentNode,r))},i:function(t){o||(ut(e),o=!0)},o:function(t){ct(e),o=!1},d:function(t){a[n].d(t),t&&L(r)}}}function Ft(t){for(var n,e=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Ut]},$$scope:{ctx:t}},i=0;i<e.length;i+=1)o=y(o,e[i]);var a=new Pt({props:o});return{c:function(){lt(a.$$.fragment)},l:function(t){pt(a.$$.fragment,t)},m:function(t,e){ht(a,t,e),n=!0},p:function(t,n){var o=r(n,1)[0],i=12&o?ft(e,[4&o&&{segment:t[2][0]},8&o&&st(t[3].props)]):{};147&o&&(i.$$scope={dirty:o,ctx:t}),a.$set(i)},i:function(t){n||(ut(a.$$.fragment,t),n=!0)},o:function(t){ct(a.$$.fragment,t),n=!1},d:function(t){vt(a,t)}}}function Ht(t,n,e){var r,o,i,a=n.stores,u=n.error,c=n.status,f=n.segments,s=n.level0,l=n.level1,p=void 0===l?null:l,h=n.notify;return r=h,J().$$.after_update.push(r),o=wt,i=a,J().$$.context.set(o,i),t.$set=function(t){"stores"in t&&e(5,a=t.stores),"error"in t&&e(0,u=t.error),"status"in t&&e(1,c=t.status),"segments"in t&&e(2,f=t.segments),"level0"in t&&e(3,s=t.level0),"level1"in t&&e(4,p=t.level1),"notify"in t&&e(6,h=t.notify)},[u,c,f,s,p,a,h]}var Bt=function(t){s(e,yt);var n=Dt(e);function e(t){var r;return v(this,e),mt(l(r=n.call(this)),t,Ht,Ft,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),Mt=[],Jt=[{js:function(){return import("./index.5d0f1a89.js")},css:[]}],Yt=[{pattern:/^\/$/,parts:[{i:0}]}];function Kt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},e=vn(new URL(t,document.baseURI));return e?(ln[n.replaceState?"replaceState":"pushState"]({id:un},"",t),mn(e,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Vt,zt,Wt,Xt,Qt,Zt="undefined"!=typeof __SAPPER__&&__SAPPER__,tn=!1,nn=[],en="{}",rn={page:function(t){var n=bt(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:bt(null),session:bt(Zt&&Zt.session)};rn.session.subscribe(function(){var t=u(i.mark((function t(n){var e,r,o,a,u,c;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Xt=n,tn){t.next=3;break}return t.abrupt("return");case 3:return Qt=!0,e=vn(new URL(location.href)),r=zt={},t.next=8,$n(e);case 8:if(o=t.sent,a=o.redirect,u=o.props,c=o.branch,r===zt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,gn(a,c,u,e.page);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());var on,an=null;var un,cn=1;var fn,sn,ln="undefined"!=typeof history?history:{pushState:function(t,n,e){},replaceState:function(t,n,e){},scrollRestoration:""},pn={};function hn(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),i=o[1],a=o[2],u=void 0===a?"":a;"string"==typeof e[i]&&(e[i]=[e[i]]),"object"===t(e[i])?e[i].push(u):e[i]=u})),e}function vn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt.baseUrl))return null;var n=t.pathname.slice(Zt.baseUrl.length);if(""===n&&(n="/"),!Mt.some((function(t){return t.test(n)})))for(var e=0;e<Yt.length;e+=1){var r=Yt[e],o=r.pattern.exec(n);if(o){var i=hn(t.search),a=r.parts[r.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:n,query:i,params:u};return{href:t.href,route:r,match:o,page:c}}}}function dn(){return{x:pageXOffset,y:pageYOffset}}function mn(t,n,e,r){return yn.apply(this,arguments)}function yn(){return(yn=u(i.mark((function t(n,e,r,o){var a,u,c,f,s,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e?un=e:(a=dn(),pn[un]=a,e=un=++cn,pn[un]=r?a:{x:0,y:0}),un=e,Vt&&rn.preloading.set(!0),u=an&&an.href===n.href?an.promise:$n(n),an=null,c=zt={},t.next=8,u;case 8:if(f=t.sent,s=f.redirect,l=f.props,p=f.branch,c===zt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,gn(s,p,l,n.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=pn[e],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),pn[un]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function gn(t,n,e,r){return bn.apply(this,arguments)}function bn(){return(bn=u(i.mark((function t(n,e,r,o){var a,u;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",Kt(n.location,{replaceState:!0}));case 2:if(rn.page.set(o),rn.preloading.set(!1),!Vt){t.next=8;break}Vt.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:rn.page.subscribe},preloading:{subscribe:rn.preloading.subscribe},session:rn.session},t.next=11,Wt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=rn.page.notify,a=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),a&&u){for(;a.nextSibling!==u;)Rn(a.nextSibling);Rn(a),Rn(u)}Vt=new Bt({target:on,props:r,hydrate:!0});case 18:nn=e,en=JSON.stringify(o.query),tn=!0,Qt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function wn(t,n,e,r){if(r!==en)return!0;var o=nn[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function $n(t){return xn.apply(this,arguments)}function xn(){return(xn=u(i.mark((function t(n){var e,r,o,a,c,f,s,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.route,r=n.page,o=r.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},f={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(a&&(a.statusCode!==t||a.location!==n))throw new Error("Conflicting redirects");a={statusCode:t,location:n}},error:function(t,n){c.error="string"==typeof n?new Error(n):n,c.status=t}},Wt||(Wt=Zt.preloaded[0]||$t.call(f,{host:r.host,path:r.path,query:r.query,params:{}},Xt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=e.pattern.exec(r.path),v=!1,t.next=13,Promise.all(e.parts.map(function(){var t=u(i.mark((function t(e,a){var u,s,d,m,y,g;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],wn(a,u,h,p)&&(v=!0),c.segments[l]=o[a+1],e){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(s=l++,Qt||v||!nn[a]||nn[a].part!==e.i){t.next=8;break}return t.abrupt("return",nn[a]);case 8:return v=!1,t.next=11,Sn(Jt[e.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!tn&&Zt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(f,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(n.match):{}},Xt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Zt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(s)]={component:m,props:g,segment:u,match:h,part:e.i});case 27:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,s=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:s});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function En(t){var n="client/".concat(t);if(!document.querySelector('link[href="'.concat(n,'"]')))return new Promise((function(t,e){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){return t()},r.onerror=e,document.head.appendChild(r)}))}function Sn(t){var n="string"==typeof t.css?[]:t.css.map(En);return n.unshift(t.js()),Promise.all(n).then((function(t){return t[0]}))}function Rn(t){t.parentNode.removeChild(t)}function _n(t){var n=vn(new URL(t,document.baseURI));if(n)return an&&t===an.href||function(t,n){an={href:t,promise:n}}(t,$n(n)),an.promise}function Ln(t){clearTimeout(fn),fn=setTimeout((function(){kn(t)}),20)}function kn(t){var n=jn(t.target);n&&"prefetch"===n.rel&&_n(n.href)}function On(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.defaultPrevented)){var e=jn(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=vn(i);if(a)mn(a,null,e.hasAttribute("sapper-noscroll"),i.hash),n.preventDefault(),ln.pushState({id:un},"",i.href)}}}else location.hash||n.preventDefault()}}}function jn(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Pn(t){if(pn[un]=dn(),t.state){var n=vn(new URL(location.href));n?mn(n,t.state.id):location.href=location.href}else(function(t){un=t})(cn=cn+1),ln.replaceState({id:un},"",location.href)}sn={target:document.querySelector("#sapper")},"scrollRestoration"in ln&&(ln.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ln.scrollRestoration="auto"})),addEventListener("load",(function(){ln.scrollRestoration="manual"})),function(t){on=t}(sn.target),addEventListener("click",On),addEventListener("popstate",Pn),addEventListener("touchstart",kn),addEventListener("mousemove",Ln),Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;ln.replaceState({id:cn},"",e);var r,o,i,a,u,c,f,s,l=new URL(location.href);if(Zt.error)return r=location,o=r.host,i=r.pathname,a=r.search,u=Zt.session,c=Zt.preloaded,f=Zt.status,s=Zt.error,Wt||(Wt=c&&c[0]),void gn(null,[],{error:s,status:f,session:u,level0:{props:Wt},level1:{props:{status:f,error:s},component:Tt},segments:c},{host:o,path:i,query:hn(a),params:{}});var p=vn(l);return p?mn(p,cn,!0,n):void 0}));export{k as A,h as B,yt as S,s as _,c as a,p as b,v as c,l as d,O as e,A as f,j as g,I as h,mt as i,D as j,G as k,L as l,U as m,C as n,_ as o,R as p,H as q,q as r,x as s,P as t,T as u,w as v,F as w,B as x,r as y,m as z};
