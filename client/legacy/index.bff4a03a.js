import{_ as t,a as n,b as a,c as r,i as o,s as c,d as h,S as u,e as s,f as e,t as i,g as f,h as l,j as v,k as d,l as m,m as p,n as w,o as g,p as E,q as M,r as b,u as y,v as N,w as T,x as R,y as I,z as P,A as S}from"./client.aff029dd.js";function D(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var h=n(this).constructor;o=Reflect.construct(c,arguments,h)}else o=c.apply(this,arguments);return a(this,o)}}function A(t,n,a){var r=t.slice();return r[11]=n[a],r[13]=a,r}function O(t,n,a){var r=t.slice();return r[11]=n[a],r[14]=n,r[13]=a,r}function G(t){var n,a,r,o,c,h,u,N,T;function R(){t[7].call(a,t[11])}function I(){t[8].call(o,t[11])}function P(){for(var n,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t)[9].apply(n,[t[13]].concat(r))}return{c:function(){n=s("div"),a=s("input"),r=e(),o=s("input"),c=e(),h=s("button"),u=i("x"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var s=l(n);a=f(s,"INPUT",{type:!0,placeholder:!0}),r=v(s),o=f(s,"INPUT",{type:!0,min:!0,placeholder:!0}),c=v(s),h=f(s,"BUTTON",{class:!0});var e=l(h);u=d(e,"x"),e.forEach(m),s.forEach(m),this.h()},h:function(){p(a,"type","text"),p(a,"placeholder","¿Quien puso?"),p(o,"type","number"),p(o,"min","1"),p(o,"placeholder","¿Cuanto?"),p(h,"class","btn-delete"),p(n,"class","input-group")},m:function(s,e){w(s,n,e),g(n,a),E(a,t[11].who),g(n,r),g(n,o),E(o,t[11].howMuch),g(n,c),g(n,h),g(h,u),N||(T=[M(a,"input",R),M(o,"input",I),M(o,"keyup",t[6]),M(h,"click",P)],N=!0)},p:function(n,r){t=n,1&r&&a.value!==t[11].who&&E(a,t[11].who),1&r&&b(o.value)!==t[11].howMuch&&E(o,t[11].howMuch)},d:function(t){t&&m(n),N=!1,y(T)}}}function H(t){var n,a,r,o,c,h,u,E,M,b=t[11].who+"",y=t[3].format(Math.round(t[11].howMuch))+"";return{c:function(){n=s("p"),a=s("strong"),r=i(b),o=i(" ya puso"),c=e(),h=s("hr"),u=e(),E=s("p"),M=i(y),this.h()},l:function(t){n=f(t,"P",{class:!0});var s=l(n);a=f(s,"STRONG",{});var e=l(a);r=d(e,b),e.forEach(m),o=d(s," ya puso"),s.forEach(m),c=v(t),h=f(t,"HR",{}),u=v(t),E=f(t,"P",{class:!0});var i=l(E);M=d(i,y),i.forEach(m),this.h()},h:function(){p(n,"class","who"),p(E,"class","how-much without-debt")},m:function(t,s){w(t,n,s),g(n,a),g(a,r),g(n,o),w(t,c,s),w(t,h,s),w(t,u,s),w(t,E,s),g(E,M)},p:function(t,n){1&n&&b!==(b=t[11].who+"")&&N(r,b),1&n&&y!==(y=t[3].format(Math.round(t[11].howMuch))+"")&&N(M,y)},d:function(t){t&&m(n),t&&m(c),t&&m(h),t&&m(u),t&&m(E)}}}function x(t){var n,a,r,o,c,h,u,E,M,b=t[11].who+"",y=t[3].format(Math.round(t[1]/t[2]-t[11].howMuch))+"";return{c:function(){n=s("p"),a=s("strong"),r=i(b),o=i(" debe"),c=e(),h=s("hr"),u=e(),E=s("p"),M=i(y),this.h()},l:function(t){n=f(t,"P",{class:!0});var s=l(n);a=f(s,"STRONG",{});var e=l(a);r=d(e,b),e.forEach(m),o=d(s," debe"),s.forEach(m),c=v(t),h=f(t,"HR",{}),u=v(t),E=f(t,"P",{class:!0});var i=l(E);M=d(i,y),i.forEach(m),this.h()},h:function(){p(n,"class","who"),p(E,"class","how-much debit")},m:function(t,s){w(t,n,s),g(n,a),g(a,r),g(n,o),w(t,c,s),w(t,h,s),w(t,u,s),w(t,E,s),g(E,M)},p:function(t,n){1&n&&b!==(b=t[11].who+"")&&N(r,b),7&n&&y!==(y=t[3].format(Math.round(t[1]/t[2]-t[11].howMuch))+"")&&N(M,y)},d:function(t){t&&m(n),t&&m(c),t&&m(h),t&&m(u),t&&m(E)}}}function V(t){var n,a,r,o,c,h,u,E,M,b,y=t[11].who+"",T=t[3].format(Math.abs(Math.round(t[1]/t[2]-t[11].howMuch)))+"";return{c:function(){n=s("p"),a=i("A "),r=s("strong"),o=i(y),c=i(" le deben"),h=e(),u=s("hr"),E=e(),M=s("p"),b=i(T),this.h()},l:function(t){n=f(t,"P",{class:!0});var s=l(n);a=d(s,"A "),r=f(s,"STRONG",{});var e=l(r);o=d(e,y),e.forEach(m),c=d(s," le deben"),s.forEach(m),h=v(t),u=f(t,"HR",{}),E=v(t),M=f(t,"P",{class:!0});var i=l(M);b=d(i,T),i.forEach(m),this.h()},h:function(){p(n,"class","who"),p(M,"class","how-much receives")},m:function(t,s){w(t,n,s),g(n,a),g(n,r),g(r,o),g(n,c),w(t,h,s),w(t,u,s),w(t,E,s),w(t,M,s),g(M,b)},p:function(t,n){1&n&&y!==(y=t[11].who+"")&&N(o,y),7&n&&T!==(T=t[3].format(Math.abs(Math.round(t[1]/t[2]-t[11].howMuch)))+"")&&N(b,T)},d:function(t){t&&m(n),t&&m(h),t&&m(u),t&&m(E),t&&m(M)}}}function C(t){var n,a,r,o,c,h,u;function i(t,n){return(null==h||7&n)&&(h=!(-1!==Math.sign(t[1]/t[2]-t[11].howMuch))),h?V:((null==u||7&n)&&(u=!(1!==Math.sign(t[1]/t[2]-t[11].howMuch))),u?x:H)}var d=i(t,-1),E=d(t);return{c:function(){n=s("div"),a=s("img"),c=e(),E.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var r=l(n);a=f(r,"IMG",{src:!0,alt:!0}),c=v(r),E.l(r),r.forEach(m),this.h()},h:function(){a.src!==(r="https://avatars.dicebear.com/api/human/"+t[11].who+".svg?r=50&w=30")&&p(a,"src",r),p(a,"alt",o=t[11].who),p(n,"class","someone")},m:function(t,r){w(t,n,r),g(n,a),g(n,c),E.m(n,null)},p:function(t,c){1&c&&a.src!==(r="https://avatars.dicebear.com/api/human/"+t[11].who+".svg?r=50&w=30")&&p(a,"src",r),1&c&&o!==(o=t[11].who)&&p(a,"alt",o),d===(d=i(t,c))&&E?E.p(t,c):(E.d(1),(E=d(t))&&(E.c(),E.m(n,null)))},d:function(t){t&&m(n),E.d()}}}function U(t){var n,a,r,o,c,h,u,E,M,b,y,T,R,I,P,S,D,A,O,G,H,x,V=t[3].format(Math.round(t[1]/t[2]*(t[2]-t[0].length)))+"",C=t[3].format(Math.round(t[1]/t[2]))+"";return{c:function(){n=s("div"),a=s("img"),o=e(),c=s("p"),h=i("El "),u=s("strong"),E=i("resto"),M=i(" debe"),b=e(),y=s("hr"),T=e(),R=s("p"),I=i(V),P=e(),S=s("div"),D=s("p"),A=s("strong"),O=i(C),G=e(),H=s("span"),x=i("c/u"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var r=l(n);a=f(r,"IMG",{src:!0,alt:!0}),o=v(r),c=f(r,"P",{class:!0});var s=l(c);h=d(s,"El "),u=f(s,"STRONG",{});var e=l(u);E=d(e,"resto"),e.forEach(m),M=d(s," debe"),s.forEach(m),b=v(r),y=f(r,"HR",{}),T=v(r),R=f(r,"P",{class:!0});var i=l(R);I=d(i,V),i.forEach(m),r.forEach(m),P=v(t),S=f(t,"DIV",{class:!0});var p=l(S);D=f(p,"P",{});var w=l(D);A=f(w,"STRONG",{});var g=l(A);O=d(g,C),g.forEach(m),G=v(w),H=f(w,"SPAN",{});var N=l(H);x=d(N,"c/u"),N.forEach(m),w.forEach(m),p.forEach(m),this.h()},h:function(){a.src!==(r="https://avatars.dicebear.com/api/human/"+t[0].length+".svg?r=50&w=30")&&p(a,"src",r),p(a,"alt","Someone"),p(c,"class","who"),p(R,"class","how-much"),p(n,"class","someone"),p(S,"class","the-rest")},m:function(t,r){w(t,n,r),g(n,a),g(n,o),g(n,c),g(c,h),g(c,u),g(u,E),g(c,M),g(n,b),g(n,y),g(n,T),g(n,R),g(R,I),w(t,P,r),w(t,S,r),g(S,D),g(D,A),g(A,O),g(D,G),g(D,H),g(H,x)},p:function(t,n){1&n&&a.src!==(r="https://avatars.dicebear.com/api/human/"+t[0].length+".svg?r=50&w=30")&&p(a,"src",r),7&n&&V!==(V=t[3].format(Math.round(t[1]/t[2]*(t[2]-t[0].length)))+"")&&N(I,V),6&n&&C!==(C=t[3].format(Math.round(t[1]/t[2]))+"")&&N(O,C)},d:function(t){t&&m(n),t&&m(P),t&&m(S)}}}function k(t){for(var n,a,r,o,c,h,u,S,D,H,x,V,k,$,j,B,X,q,z,F,Q,_,J,K,L,W=t[3].format(t[1])+"",Y=t[0],Z=[],tt=0;tt<Y.length;tt+=1)Z[tt]=G(O(t,Y,tt));for(var nt=t[0],at=[],rt=0;rt<nt.length;rt+=1)at[rt]=C(A(t,nt,rt));var ot=t[2]>t[0].length&&U(t);return{c:function(){n=s("meta"),a=e(),r=s("section");for(var t=0;t<Z.length;t+=1)Z[t].c();o=e(),c=s("button"),h=i("Agregar otro"),u=e(),S=s("section"),D=s("div"),H=s("h3"),x=i("Total"),V=e(),k=s("h3"),$=i(W),j=e(),B=s("div"),X=s("h3"),q=i("Dividir por"),z=e(),F=s("input"),Q=e(),_=s("section");for(var f=0;f<at.length;f+=1)at[f].c();J=e(),ot&&ot.c(),this.h()},l:function(t){var s=T('[data-svelte="svelte-1l83u0v"]',document.head);n=f(s,"META",{name:!0,content:!0}),s.forEach(m),a=v(t),r=f(t,"SECTION",{});for(var e=l(r),i=0;i<Z.length;i+=1)Z[i].l(e);o=v(e),c=f(e,"BUTTON",{class:!0});var p=l(c);h=d(p,"Agregar otro"),p.forEach(m),e.forEach(m),u=v(t),S=f(t,"SECTION",{id:!0});var w=l(S);D=f(w,"DIV",{class:!0});var g=l(D);H=f(g,"H3",{});var E=l(H);x=d(E,"Total"),E.forEach(m),V=v(g),k=f(g,"H3",{});var M=l(k);$=d(M,W),M.forEach(m),g.forEach(m),j=v(w),B=f(w,"DIV",{class:!0});var b=l(B);X=f(b,"H3",{});var y=l(X);q=d(y,"Dividir por"),y.forEach(m),z=v(b),F=f(b,"INPUT",{type:!0,min:!0}),b.forEach(m),w.forEach(m),Q=v(t),_=f(t,"SECTION",{id:!0});for(var N=l(_),R=0;R<at.length;R+=1)at[R].l(N);J=v(N),ot&&ot.l(N),N.forEach(m),this.h()},h:function(){document.title="Cuentas claras",p(n,"name","description"),p(n,"content","Dividi la cuenta entre amigos familias compañeros varios"),p(c,"class","btn-add"),p(D,"class","total"),p(F,"type","number"),p(F,"min","1"),p(B,"class","divided-by"),p(S,"id","total"),p(_,"id","division-list")},m:function(s,e){g(document.head,n),w(s,a,e),w(s,r,e);for(var i=0;i<Z.length;i+=1)Z[i].m(r,null);g(r,o),g(r,c),g(c,h),w(s,u,e),w(s,S,e),g(S,D),g(D,H),g(H,x),g(D,V),g(D,k),g(k,$),g(S,j),g(S,B),g(B,X),g(X,q),g(B,z),g(B,F),E(F,t[2]),w(s,Q,e),w(s,_,e);for(var f=0;f<at.length;f+=1)at[f].m(_,null);g(_,J),ot&&ot.m(_,null),K||(L=[M(c,"click",t[4]),M(F,"input",t[10])],K=!0)},p:function(t,n){var a=R(n,1)[0];if(97&a){var c;for(Y=t[0],c=0;c<Y.length;c+=1){var h=O(t,Y,c);Z[c]?Z[c].p(h,a):(Z[c]=G(h),Z[c].c(),Z[c].m(r,o))}for(;c<Z.length;c+=1)Z[c].d(1);Z.length=Y.length}if(2&a&&W!==(W=t[3].format(t[1])+"")&&N($,W),4&a&&b(F.value)!==t[2]&&E(F,t[2]),15&a){var u;for(nt=t[0],u=0;u<nt.length;u+=1){var s=A(t,nt,u);at[u]?at[u].p(s,a):(at[u]=C(s),at[u].c(),at[u].m(_,J))}for(;u<at.length;u+=1)at[u].d(1);at.length=nt.length}t[2]>t[0].length?ot?ot.p(t,a):((ot=U(t)).c(),ot.m(_,null)):ot&&(ot.d(1),ot=null)},i:I,o:I,d:function(t){m(n),t&&m(a),t&&m(r),P(Z,t),t&&m(u),t&&m(S),t&&m(Q),t&&m(_),P(at,t),ot&&ot.d(),K=!1,y(L)}}}function $(t,n,a){var r=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});function o(t){1!==h.length&&(h.splice(t,1),a(0,h),c(),a(2,s-=1))}function c(){setTimeout((function(){a(1,u=h.reduce((function(t,n){return Number.isNaN(Number(n.howMuch))?Number(t)+0:Number(t)+Number(n.howMuch)}),0))}))}var h,u,s;return t.$$.update=function(){5&t.$$.dirty&&a(2,s=s||h.length)},a(0,h=[{who:"X",howMuch:0}]),a(1,u=c()),[h,u,s,r,function(){a(0,h=[].concat(S(h),[{who:"X",howMuch:0}])),a(2,s+=1)},o,c,function(t){t.who=this.value,a(0,h)},function(t){t.howMuch=b(this.value),a(0,h)},function(t){return o(t)},function(){s=b(this.value),a(2,s),a(0,h)}]}var j=function(n){t(s,u);var a=D(s);function s(t){var n;return r(this,s),n=a.call(this),o(h(n),t,$,k,c,{}),n}return s}();export default j;
