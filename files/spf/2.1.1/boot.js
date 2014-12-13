/*
SPF 21 (v2.1.1)
(c) 2012-2014 Google, Inc.
License: MIT
*/
(function(){function f(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function h(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);document.dispatchEvent(c)}};function l(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function m(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function r(a,b){if(a.filter)return a.filter(b,void 0);var c=[];l(a,function(a,e,n){b.call(void 0,a,e,n)&&c.push(a)});return c}function s(a){return"[object Array]"==Object.prototype.toString.call(a)};var t=window._spf_state||{};window._spf_state=t;function v(a,b){a&&b&&(a in w||(w[a]=[]),w[a].push(b))}function x(a){a in w&&l(w[a],function(a,c,d){d[c]=null;a&&a()})}var w={};"ps-s"in t||(t["ps-s"]=w);w=t["ps-s"];var y={};"config"in t||(t.config=y);y=t.config;function z(a){var b=document.createElement("a");b.href=a;b.href=b.href;return b.href.split("#")[0]};function A(a,b,c){var d=B,e=d==B;a=C(d,a);var n=b||"^"+a,q=D(d,n),p;b&&(p=E(d,b))&&a!=p&&(h(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:b,url:p}),F(d,b,p),v(q,f(G,null,d,b,p)));e=D(d,a);if((e=H[e])&&n!=e){var k=D(d,e);delete I[k];k=D(d,a);delete H[k];(k=D(d,e))&&q&&k in w&&(w[q]=(w[q]||[]).concat(w[k]),delete w[k])}k=D(d,a);H[k]=n;var k=a,g=D(d,n);I[g]=k;v(q,c);c=f(J,null,d);K(d,a)?(e&&n!=e&&(a=L(d,a))&&a.setAttribute("name",b||""),c()):(a=M(d,a,c,void 0,void 0,p))&&b&&a.setAttribute("name",
b)}function N(a){var b=B,c=E(b,a);F(b,a,c);G(b,a,c)}function F(a,b,c){var d=D(a,b);delete I[d];c&&(c=D(a,c),delete H[c]);a=D(a,b);delete w[a]}function G(a,b,c){var d=a==B;c&&(h(d?"spfjsunload":"spfcssunload",{name:b,url:c}),b=C(a,c),(c=L(a,b,void 0))&&c.parentNode&&c.parentNode.removeChild(c),a=D(a,b),delete O[a])}function J(a){var b=D(a,""),c;for(c in w)0==c.indexOf(b)&&m(c.substring(b.length).split("|"),f(P,null,a))&&x(c)}
function M(a,b,c,d,e,n){function q(){K(a,b,e)&&Q(R,a,b,e);p&&g&&g.parentNode&&k==document&&g.parentNode.removeChild(g);c&&setTimeout(c,0);return null}var p=a==B;b=C(a,b);Q(S,a,b,e);var k=d||document,g=k.createElement(p?"script":"link");if(!b)return q();var u=b?String(b).replace(/[^\w]/g,""):"";g.className=D(a,u);"onload"in g?g.onerror=g.onload=q:g.onreadystatechange=function(){/^c|loade/.test(g.readyState)&&q()};u=k.getElementsByTagName("head")[0];p?(g.async=!0,g.src=b,u.insertBefore(g,u.firstChild)):
(g.rel="stylesheet",g.href=b,(d=n&&L(a,n,d))?u.insertBefore(g,d):u.appendChild(g));return g}function L(a,b,c){b=b?String(b).replace(/[^\w]/g,""):"";a=D(a,b);c=c||document;return(c.querySelectorAll?c.querySelectorAll("."+a):[])[0]}
function C(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=t[c]||"";if("[object String]"==Object.prototype.toString.call(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);b=0>b.indexOf("."+a)?b+"."+a:b;b=z(b)}else 0==d&&(b=z(b))}return b}function D(a,b,c){return a+"-"+b+(c?"-"+c:"")}function Q(a,b,c,d){b=D(b,c,d);O[b]=a}function K(a,b,c){a=D(a,b,c);return O[a]}function E(a,b){var c=D(a,b);return I[c]}
function P(a,b){var c=E(a,b),d;if(d=void 0!=c)d=K(a,c),d=""==c||d==R;return d}var O={},H={},I={},S=1,R=2,B="js";"rsrc-s"in t||(t["rsrc-s"]=O);O=t["rsrc-s"];"rsrc-n"in t||(t["rsrc-n"]=H);H=t["rsrc-n"];"rsrc-u"in t||(t["rsrc-u"]=I);I=t["rsrc-u"];function T(a,b,c){a=s(a)?a:[a];a=r(a,function(a){return!!a});var d=[];l(a,function(a){void 0==E(B,a)&&d.push(a)});var e=!d.length;if(b){var n=m(a,f(P,null,B));e&&n?b():(a=D(B,a.sort().join("|")),v(a,b))}c&&!e&&c(d)}function U(a,b){a=s(a)?a:[a];l(a,function(a){if(a){var b=V[a]||a,b=C(B,b),e=E(B,a);e&&b!=e&&W(a)}});T(a,b,X)}function X(a){l(a,function(a){function c(){A(e,a,void 0)}var d=Y[a],e=V[a]||a;d?U(d,c):c()})}
function W(a){a=s(a)?a:[a];l(a,function(a){var c=[],d;for(d in Y){var e=Y[d],e=s(e)?e:[e];l(e,function(e){e==a&&c.push(d)})}l(c,function(a){W(a)});N(a)})}var Y={};"js-d"in t||(t["js-d"]=Y);var Y=t["js-d"],V={};"js-u"in t||(t["js-u"]=V);V=t["js-u"];var Z={script:{load:function(a,b,c){A(a,b,c)},get:function(a,b){M(B,a,b)},ready:T,done:function(a){a=D(B,a);I[a]="";J(B)},require:U,declare:function(a,b){if(a){for(var c in a)Y[c]=a[c];if(b)for(c in b)V[c]=b[c]}},path:function(a){t["rsrc-p-"+B]=a}}},aa=this.spf=this.spf||{},$;for($ in Z)aa[$]=Z[$];})();
