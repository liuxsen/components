/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/template-dialog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/template-dialog.html":
/*!****************************************!*\
  !*** ./src/pages/template-dialog.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=\\\"clickMe\\\"> 点我 </div>\\n\";\n\n//# sourceURL=webpack:///./src/pages/template-dialog.html?");

/***/ }),

/***/ "./src/pages/template-dialog.js":
/*!**************************************!*\
  !*** ./src/pages/template-dialog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_dialog_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-dialog.html */ \"./src/pages/template-dialog.html\");\n/* harmony import */ var _template_dialog_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_dialog_html__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * @Author: gaoqiming\n * 弹窗实现\n * @Date: 2020-03-05 20:17:12\n * @Last Modified by: jianhui\n * @Last Modified time: 2020-03-06 15:36:41\n */\n\n\nconsole.log(_template_dialog_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n\nconst Dialog = class {\n  constructor(option = {}) {\n    // 节点类型\n    this.elem = option.elem;\n    this.dialog = option.dialog;\n    this.cancel = option.cancelBtn;\n    this.confirmBtn = option.confirmBtn;\n    // 动画函数数组\n    this.animaArr = ['fadeIn', 'fadeOut'], ['slideDown', 'slideUp'], ['scaleIn', 'scaleOut'];\n    // 当前动画类型\n    this.currAnimation = option.currAnimation;\n  }\n  /**\n   * @method getNeedElement 获取所需要的节点\n   */\n  getNeedElement() {\n    // 一家人最重要是整整齐齐\n    this.elem = document.querySelector('.dialog-wrapper');\n    this.dialog = elem.querySelector('.dialog');\n    this.cancelBtn = elem.querySelector('.cancel-btn');\n    this.confirmBtn = elem.querySelector('.confirm-btn');\n  }\n  /**\n   * @method show 显示dialog组件\n   * @param {Object} options 一系列参数\n   * @returns {Object} 当前dialog节点\n   */\n  // show(options = {}) {\n  //   // 默认参数\n  //   let { title = '', content = 'content', skin = '', btns = ['确定'], confirm = null, cancel = null, shadeClose = true, animation = 1 } = options;\n  //   // 皮肤类名\n  //   let skinClass = skin ? ` ${skin}` : '';\n\n  //   // 给当前动画类型赋值\n  //   currAnimation = animation;\n\n  //   // 生成按钮\n  //   let btnTemp = '';\n  //   btns.forEach((item, index) => {\n  //     if (index == 2) return;\n  //     let btnClass = index === 0 ? 'confirm-btn' : 'cancel-btn';\n  //     let temp = `<div class=\"btn ${btnClass}\">${item}</div>`;\n  //     btnTemp += temp;\n  //   });\n\n  //   // 最终生成的HTML\n  //   let html = `\n  //     <div class=\"dialog-wrapper fadeIn\">\n  //       <!-- 居中主要层 -->\n  //       <div class=\"dialog${skinClass} ${animaArr[currAnimation][0]}\">\n  //         <!-- 标题 -->\n  //         <div class=\"title\">\n  //           <div>${title}</div>\n  //           <span class=\"close\"></span>\n  //         </div>\n  //         <!--输入框 -->\n  //         <div class=\"search\">\n  //           <span>名称：</span>\n  //           <div class=\"input-box\">\n  //             <input type=\"text\" placeholder=\"请输入模版名称\" />\n  //           </div>\n  //         </div>\n  //         <!-- 筛选区 -->\n  //         <div class=\"select-group\">\n  //           <div class=\"select-option\">\n  //             <select>\n  //               <option value=\"volvo\">Volvo</option>\n  //               <option value=\"saab\">Saab</option>\n  //               <option value=\"opel\">Opel</option>\n  //               <option value=\"audi\">Audi</option>\n  //             </select>\n  //           </div>\n  //           <div class=\"select-option\">\n  //             <select>\n  //               <option value=\"volvo\">Volvo</option>\n  //               <option value=\"saab\">Saab</option>\n  //               <option value=\"opel\">Opel</option>\n  //               <option value=\"audi\">Audi</option>\n  //             </select>\n  //           </div>\n  //           <div class=\"select-option\">\n  //             <select>\n  //               <option value=\"volvo\">Volvo</option>\n  //               <option value=\"saab\">Saab</option>\n  //               <option value=\"opel\">Opel</option>\n  //               <option value=\"audi\">Audi</option>\n  //             </select>\n  //           </div>\n  //         </div>\n  //         <!-- 主要内容 -->\n  //         <div class=\"content\">\n  //           <div style=\"height:500px;background:red\"></div>\n  //         </div>\n  //         <!-- 按钮组 -->\n  //         <div class=\"buttons\">${btnTemp}</div>\n  //       </div>\n  //     </div>\n  //   `;\n\n  //   // 添加到Body\n  //   document.body.innerHTML += html;\n  //   // 获取所需要的节点\n  //   this.getNeedElement();\n  //   // 绑定事件\n  //   this.bindEvent(confirm, cancel, shadeClose);\n  //   return elem;\n  // }\n\n  hide() {\n    // 最外层执行显示动画(固定)\n    this.elem.classList.add('fadeOut');\n    // 内容层执行关闭动画\n    this.dialog.classList.add(`${animaArr[currAnimation][1]}`);\n    // // 最终移除\n    // let elems = document.querySelector('.dialog-wrapper');\n    // elems.remove();\n  }\n\n  /**\n   * @method bindEvent 给dialog绑定事件\n   * @param {Object} confirm 确认回调\n   * @param {Object} cancel 取消回调\n   * @param {Boolean} shadeClose shade 关闭\n   */\n  bindEvent(confirm, cancel, shadeClose) {\n    // confirm按钮的回调\n    this.confirmBtn &&\n      this.confirmBtn.addEventListener('click', e => {\n        this.hide();\n        confirm && confirm();\n      });\n\n    // cancel按钮的回调\n    this.cancelBtn &&\n      this.cancelBtn.addEventListener('click', e => {\n        this.hide();\n        cancel && cancel();\n      });\n\n    // 是否开启点击遮罩关闭\n    if (shadeClose) {\n      this.elem.addEventListener('click', e => {\n        let target = e.target || e.srcElement;\n        if (/dialog-wrapper/.test(target.className)) {\n          this.hide();\n        }\n      });\n    }\n  }\n}\ndebugger\nvar dialog = new Dialog();\nvar clickMe = document.getElementById('clickMe');\nclickMe.addEventListener('click', e => {\n  dialog.show({\n    title: '新建 Book',\n    content: [], // 展示内容\n    option: {}, // 搜索条件 {title: '',select_option: []}\n    btns: ['下一步', '取消']\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialog);\n\n//# sourceURL=webpack:///./src/pages/template-dialog.js?");

/***/ })

/******/ });