!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Dialog=t():n.Dialog=t()}(window,(function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t){n.exports='<div id="clickMe" class="dialog-wrapper"> \n  <div class="dialog"></div>\n  点我\n</div>'},function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var o=e(0),r=e.n(o);e(2);console.log(r.a);var i=document.createElement("div");i.innerHTML=r.a,document.getElementsByTagName("body")[0].appendChild(i);var a=function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}},function(n,t,e){var o=e(3),r=e(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});n.exports=a},function(n,t,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},o=[],r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],l=e[s]||0,d="".concat(s," ").concat(l);e[s]=l+1;var p=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function l(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,p=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function f(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function u(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,b=0;function h(n,t){var e,o,r;if(t.singleton){var i=b++;e=g||(g=l(t)),o=f.bind(null,e,i,!1),r=f.bind(null,e,i,!0)}else e=l(t),o=u.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=c(e[o]);a[r].references--}for(var i=s(n,t),l=0;l<e.length;l++){var d=c(e[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=i}}}},function(n,t,e){(t=e(5)(!1)).push([n.i,"div {\n\tbox-sizing: border-box;\n}\nselect::-ms-expand{ display: none; }\n\n/* --火狐、谷歌清除--*/\n\noption{\n\tappearance:none;  \n\t-moz-appearance:none;  \n\t-webkit-appearance:none;\n}\noption::-ms-expand{ display: none; }\n\n.dialog-wrapper {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(49, 49, 49, 0.5);\n  color: #313131;\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.dialog-wrapper.fadeIn {\n  animation: fadeIn .2s ease;\n}\n\n.dialog-wrapper.fadeOut {\n  animation: fadeOut .2s ease forwards;\n}\n\n.dialog-wrapper .dialog {\n  position: relative;\n  width: 85vw;\n  border-radius: 1px;\n  background-color: #fff;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n}\n\n.dialog-wrapper .dialog.slideDown {\n  animation: slideDown .2s ease;\n}\n\n.dialog-wrapper .dialog.slideUp {\n  animation: slideUp .2s ease forwards;\n}\n\n.dialog-wrapper .dialog.scaleIn {\n  animation: scaleIn 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4);\n}\n\n.dialog-wrapper .dialog.scaleOut {\n  animation: scaleOut 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4) forwards;\n}\n\n.dialog-wrapper .dialog .btn {\n  cursor: pointer;\n}\n\n.dialog-wrapper .dialog .btn:active {\n  background-color: #f4f4f4;\n}\n\n.dialog-wrapper .dialog .title {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tline-height: 20px;\n\tpadding: 12px;\n\tbox-sizing: border-box;\n  text-align: left;\n  border-bottom: 1px solid #eee; \n\tbackground-color: #fff;\n\tposition: relative;\n}\n.search {\n\tpadding: 10px 15px 0;\n\theight: 48px;\n\tfont-size: 0px;\n\tcolor:#333;\n\tbox-sizing: border-box;\n}\n.search span {\n\twidth: 8%;\n\tfont-size: 14px;\n\tdisplay: inline-block;\n}\n.input-box {\n\twidth: 92%;\n\tdisplay: inline-block;\n}\n.search input {\n\toutline:none;\n\tborder: 1px solid #eee;\n\twidth: 100%;\n\theight:30px;\n\tline-height: 30px;\n\tborder-radius: 4px;\n\tpadding-left: 10px;\n\tbox-sizing: border-box;\n}\n.select-group {\n\tbackground: #dcdcdc;\n\tpadding:10px 12px 0;\n\theight:56px;\n\tbox-sizing: border-box;\n}\n.select-option {\n\tmargin-right: 12px;\n\tbackground: white;\n\theight: 36px;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\twidth: 80px\n}\n.select-option select {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tpadding-left: 5px;\n\tfont-size: 12px;\n\tcolor: #999;\n\tborder: 1px solid #999;\n\toutline: none;\n}\n.select-option option {\n\tfont-size: 12px;\n\tpadding: 0 20px;\n\tposition: relative;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tcolor: #606266;\n\theight: 34px;\n\tline-height: 34px;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n}\n.close {\n\tposition: absolute;\n\twidth: 20px;\n\tright: 10px;\n\ttop: 20px;\n\tbackground: #333;\n\ttransform: rotate(45deg);\n}\n.close::after {\n\tcontent: '';\n\tdisplay: block;\n\twidth: 20px;\n\theight: 1px;\n\tbackground: #333;\n\ttransform: rotate(-90deg);\n}\n.dialog-wrapper .dialog .title:empty {\n  display: none;\n}\n.content {\n\toverflow: hidden;\n\ttext-align: center;\n\theight: 300px;\n\tpadding: 10px 12px 0;\n\toverflow-y: scroll;\n}\n.buttons {\n\toverflow: hidden;\n\ttext-align: right;\n\theight:50px;\n\tpadding-top: 10px;\n\tpadding-right: 20px;\n}\n\n.confirm-btn, .cancel-btn {\n\tpadding: 9px 15px;\n\tfont-size: 12px;\n\tborder-radius: 3px;\n\tdisplay: inline-block;\n\tline-height: 1;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\tbackground: #fff;\n\tborder: 1px solid #dcdfe6;\n\tcolor: #606266;\n\t-webkit-appearance: none;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\toutline: none;\n\tmargin: 0;\n\ttransition: .1s;\n\tfont-weight: 500;\n}\n\n.confirm-btn {\n\tbackground: #409eff;\n\tcolor:white;\n\tborder: 1px solid #409eff;\n\tmargin-right: 20px;\n}\n\n@keyframes slideDown {\n  from {\n    transform: translateY(-275);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-275);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: .5;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes scaleIn {\n  from {\n    transform: scale(0.8);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes scaleOut {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0.8);\n  }\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}var a,c,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}}])}));