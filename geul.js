!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r;!function(){"use strict";var i,o,s,u,a,c,l=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],f=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ",["ㅗ","ㅏ"],["ㅗ","ㅐ"],["ㅗ","ㅣ"],"ㅛ","ㅜ",["ㅜ","ㅓ"],["ㅜ","ㅔ"],["ㅜ","ㅣ"],"ㅠ","ㅡ",["ㅡ","ㅣ"],"ㅣ"],h=["","ㄱ","ㄲ",["ㄱ","ㅅ"],"ㄴ",["ㄴ","ㅈ"],["ㄴ","ㅎ"],"ㄷ","ㄹ",["ㄹ","ㄱ"],["ㄹ","ㅁ"],["ㄹ","ㅂ"],["ㄹ","ㅅ"],["ㄹ","ㅌ"],["ㄹ","ㅍ"],["ㄹ","ㅎ"],"ㅁ","ㅂ",["ㅂ","ㅅ"],"ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];function d(e){for(var t=e.length,n={0:0},r=0;r<t;r++)e[r]&&(n[e[r].charCodeAt(0)]=r);return n}function p(e){for(var t,n,r=e.length,i={},o=0;o<r;o++)t=e[o][0].charCodeAt(0),n=e[o][1].charCodeAt(0),void 0===i[t]&&(i[t]={}),i[t][n]=e[o][2].charCodeAt(0);return i}function g(e){return void 0!==i[e]}function v(e){return void 0!==o[e]}function m(e){return void 0!==s[e]}function y(e){return void 0!==u[e]}function b(e){return 44032<=e&&e<=55203}function C(e,t){return!(!c[e]||!c[e][t])&&c[e][t]}function _(e,t){return!(!a[e]||!a[e][t])&&a[e][t]}i=d(["ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄸ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅃ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),o=d(["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),s=d(["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"]),u=d(["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),a=p([["ㄱ","ㅅ","ㄳ"],["ㄴ","ㅈ","ㄵ"],["ㄴ","ㅎ","ㄶ"],["ㄹ","ㄱ","ㄺ"],["ㄹ","ㅁ","ㄻ"],["ㄹ","ㅂ","ㄼ"],["ㄹ","ㅅ","ㄽ"],["ㄹ","ㅌ","ㄾ"],["ㄹ","ㅍ","ㄿ"],["ㄹ","ㅎ","ㅀ"],["ㅂ","ㅅ","ㅄ"]]),c=p([["ㅗ","ㅏ","ㅘ"],["ㅗ","ㅐ","ㅙ"],["ㅗ","ㅣ","ㅚ"],["ㅜ","ㅓ","ㅝ"],["ㅜ","ㅔ","ㅞ"],["ㅜ","ㅣ","ㅟ"],["ㅡ","ㅣ","ㅢ"]]);var A=function(e,t){if(null===e)throw new Error("Arguments cannot be null");"object"==typeof e&&(e=e.join(""));for(var n,r,i,a,c,d=[],p=e.length,y=0;y<p;y++){var C=[];b(a=e.charCodeAt(y))?(r=((a-=44032)-(i=a%28))/28%21,n=parseInt((a-i)/28/21),C.push(l[n]),"object"==typeof f[r]?C=C.concat(f[r]):C.push(f[r]),i>0&&("object"==typeof h[i]?C=C.concat(h[i]):C.push(h[i]))):g(a)?"string"==typeof(c=v(a)?l[o[a]]:h[u[a]])?C.push(c):C=C.concat(c):m(a)?"string"==typeof(c=f[s[a]])?C.push(c):C=C.concat(c):C.push(e.charAt(y)),t?d.push(C):d=d.concat(C)}return d},j=function(e){return"string"!=typeof e?"":(e=A(e)).join("")},E=function(e){"string"==typeof e&&(e=A(e));var t,n,r=[],i=e.length,a=0,c=-1,l=!1;function f(t){var n,i,a,f,h=0,d="";if(l=!1,!(c+1>t))for(var p=1;;p++){if(1===p){if(m(n=e[c+p].charCodeAt(0)))return c+p+1<=t&&m(i=e[c+p+1].charCodeAt(0))?(r.push(String.fromCharCode(C(n,i))),void(c=t)):(r.push(e[c+p]),void(c=t));if(!v(n))return r.push(e[c+p]),void(c=t);d=e[c+p]}else if(2===p){if(v(i=e[c+p].charCodeAt(0)))return n=_(n,i),d=String.fromCharCode(n),r.push(d),void(c=t);d=String.fromCharCode(28*(21*o[n]+s[i])+44032)}else 3===p?(C(i,a=e[c+p].charCodeAt(0))?i=C(i,a):h=a,d=String.fromCharCode(28*(21*o[n]+s[i])+u[h]+44032)):4===p?(h=_(h,f=e[c+p].charCodeAt(0))?_(h,f):f,d=String.fromCharCode(28*(21*o[n]+s[i])+u[h]+44032)):5===p&&(h=_(h,f=e[c+p].charCodeAt(0)),d=String.fromCharCode(28*(21*o[n]+s[i])+u[h]+44032));if(c+p>=t)return r.push(d),void(c=t)}}for(var h=0;h<i;h++)v(t=e[h].charCodeAt(0))||m(t)||y(t)?(0===a?v(t)?a=1:m(t)&&(a=4):1==a?m(t)?a=2:_(n,t)?a=5:f(h-1):2==a?y(t)?a=3:m(t)?C(n,t)||(f(h-1),a=4):(f(h-1),a=1):3==a?y(t)?!l&&_(n,t)?l=!0:(f(h-1),a=1):v(t)?(f(h-1),a=1):m(t)&&(f(h-2),a=2):4==a?m(t)?C(n,t)?(f(h),a=0):f(h-1):(f(h-1),a=1):5==a&&(m(t)?(f(h-2),a=2):(f(h-1),a=1)),n=t):(f(h-1),f(h),a=0);return f(h-1),r.join("")};function T(e){this.string=e,this.disassembled=A(e).join("")}T.prototype.search=function(e){return A(e).join("").indexOf(this.disassembled)};var w={disassemble:A,d:A,disassembleToString:j,ds:j,assemble:E,a:E,search:function(e,t){var n=A(e).join(""),r=A(t).join("");return n.indexOf(r)},rangeSearch:function(e,t){var n,r=A(e).join(""),i=A(t).join(""),o=A(e,!0),s=new RegExp(i,"gi"),u=[];if(!t.length)return[];for(;n=s.exec(r);)u.push(n.index);function a(e){for(var t=0,n=0;t<o.length;++t)if(e<(n+=o[t].length))return t}function c(e){for(var t=0,n=0;t<o.length;++t)if(n+=o[t].length,e+i.length<=n)return t}return u.map((function(e){return[a(e),c(e)]}))},Searcher:T,endsWithConsonant:function(e){"object"==typeof e&&(e=e.join(""));var t=e.charCodeAt(e.length-1);if(b(t)){if((t-=44032)%28>0)return!0}else if(g(t))return!0;return!1},endsWith:function(e,t){return A(e).pop()===t},isHangul:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),b(e)},isComplete:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),b(e)},isConsonant:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),g(e)},isVowel:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),m(e)},isCho:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),v(e)},isJong:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),y(e)},isHangulAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!b(e.charCodeAt(t)))return!1;return!0},isCompleteAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!b(e.charCodeAt(t)))return!1;return!0},isConsonantAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!g(e.charCodeAt(t)))return!1;return!0},isVowelAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!m(e.charCodeAt(t)))return!1;return!0},isChoAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!v(e.charCodeAt(t)))return!1;return!0},isJongAll:function(e){if("string"!=typeof e)return!1;for(var t=0;t<e.length;t++)if(!y(e.charCodeAt(t)))return!1;return!0}};void 0===(r=function(){return w}.call(t,n,t,e))||(e.exports=r)}()},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e._speed;if(i(this,e),this.value=t,this.speed=o,this.element=n,this.running=!1,"_g"in n){if(n._g!==this){var s=Error("Element can't have multiple Geul Instance.\nUse Element.getGeulInstancee instead.");return void console.error(s.stack)}}else n._g=this;e._instances.push(this),this.particles=r.a.disassemble(this.value)}var t,n,s;return t=e,(n=[{key:"setValue",value:function(e){if(this.running){var t=Error("Typing is already in progress");console.error(t.stack)}else this.value=e,this.particles=r.a.disassemble(this.value)}},{key:"getValue",value:function(){return this.value}},{key:"setSpeed",value:function(e){this.speed=e}},{key:"getSpeed",value:function(e){return this.speed}},{key:"run",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value;if(""===n)return console.warn("Value for typing can't be empty string!"),!1;var i=new Promise((function(i,o){if(e.running){var s=Error("Typing is already in progress");return console.error(s.stack),void o(s)}if(n!=e.value&&e.setValue(n),e.running=!0,!(e.element instanceof HTMLElement)){var u=Error("Wrong element!");return console.error(u.stack),void o(u)}setTimeout((function(){for(var t in e.particles)(function(e){var t=this;e++,setTimeout((function(){t.element.textContent=r.a.assemble(t.particles.slice(0,e)),e===t.particles.length&&(t.running=!1,i(t.source))}),this.speed*e)}).bind(e)(parseInt(t))}),t)}));return i}},{key:"runFrom",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"==typeof e&&(e=this.value.slice(0,e)),-1===r.a.search(this.value,e)){var i=Error("Can't start typing from ".concat(this.value," to ").concat(e));return console.error(i.stack),void reject(i)}var o=r.a.disassemble(e).length,s=new Promise((function(e,i){if(t.running){var s=Error("Typing is already in progress");return console.error(s.stack),void i(s)}if(t.running=!0,!(t.element instanceof HTMLElement)){var u=Error("Wrong element!");return console.error(u.stack),void i(u)}setTimeout((function(){for(var n=o;n<t.particles.length;n++)(function(t){var n=this;t++,setTimeout((function(){n.element.textContent=r.a.assemble(n.particles.slice(0,t)),t===n.particles.length&&(n.running=!1,e(n.source))}),this.speed*t)}).bind(t)(parseInt(n))}),n)}));return s}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(""!==e){var n=this.value;this.setValue(this.value+e),this.runFrom(n,t)}else console.warn("Value for typing can't be empty string!")}},{key:"reverse",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"==typeof e&&(e=this.value.slice(0,e)),-1===r.a.search(this.value,e)){var i=Error("Can't reverse from ".concat(this.value," to ").concat(e));return console.error(i.stack),void reject(i)}var o=r.a.disassemble(e).length,s=new Promise((function(i,s){if(t.running){var u=Error("Typing is already in progress");return console.error(u.stack),void s(u)}if(t.running=!0,!(t.element instanceof HTMLElement)){var a=Error("Wrong element!");return console.error(a.stack),void s(a)}setTimeout((function(){for(var n=t.particles.length-1;n>=o;n--)(function(t){var n=this;setTimeout((function(){var s=t;n.element.textContent=r.a.assemble(n.particles.slice(0,s)),t===o&&(n.running=!1,n.setValue(r.a.assemble(n.particles.slice(0,s))),i(e))}),this.speed*(this.particles.length-t))}).bind(t)(parseInt(n))}),n)}));return s}}])&&o(t.prototype,n),s&&o(t,s),e}();s._instances=[],s._speed=100,s.setStaticSpeed=function(e){s._instances.forEach((function(t){t.speed===s._speed&&t.setSpeed(e)})),s._speed=e},HTMLElement.prototype.geul=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s._speed;"_g"in this?this._g.setValue(e):this._g=new s(e,this,n);var r=this._g.run(t);return r},HTMLElement.prototype.add=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s._speed;"_g"in this||(this._g=new s(this.textContent,this,n));var r=this._g.add(e,t);return r},HTMLElement.prototype.reverse=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s._speed,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.textContent;"_g"in this||(this._g=new s(r,this,n));var i=this._g.reverse(e,t);return i},HTMLElement.prototype.setTypingValue=function(e){"_g"in this?this._g.setValue(e):this._g=new s(e,this,0)},HTMLElement.prototype.setTypingSpeed=function(e){"_g"in this?this._g.setSpeed(e):this._g=new s("",this,e)},HTMLElement.prototype.getGeulInstance=function(){return this._g},window.Geul=s,e.exports=s}.call(this,n(2)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);