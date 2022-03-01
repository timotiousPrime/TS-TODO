/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import '~font-awesome/css/font-awesome.css'; */\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Roboto Mono', monospace;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    /* overflow: hidden; */\n    background-color: rgba(34, 34, 34, 0.528);\n    color: #fff;\n}\n\nh1,\nh2,\nh3,\nh4 {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n}\n\nh1 {\n    font-size: 2.4rem;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 1.2rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 0.5rem;\n    background-color: #fff;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    height: 2.4rem;\n}\n\nheader {\n    background: #333;\n    color: #fff;\n    padding: 5px;\n    text-align: center;\n}\n\n#main-section {\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n}\n\n#todo-item-input,\n#list-creator-input {\n    height: 2.6rem;\n    flex: 1;\n    padding: 5px;\n    width: 75%;\n}\n\n#list-creator-btn,\n#add-todo-item-btn {\n    padding: 5px;\n    width: 20%;\n}\n\n#side-panel {\n    width: 35%;\n    height: 100%;\n    background-color: rgba(34, 34, 34, 0.768);\n    /* background: rgba(80, 79, 79, 0.288); */\n    opacity: 0.9;\n    padding: 10px;\n    text-align: center;\n}\n\n#side-panel-header {\n    font-size: 1.2rem;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n\n.todo-list-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.list-header {\n    font-size: large;\n    position: sticky;\n    padding: 5px;\n    width: 100%;\n    padding: 0.8rem;\n    /* height: 10rem; */\n}\n\n.list-header > form {\n    margin: 0.4rem;\n    height: 1.8rem;\n    width: 100%;\n}\n\n.list-header > form > button {\n    margin: 0.4rem;\n    height: 2.2rem;\n    width: 12%;\n}\n\n.list-header > form > input {\n    margin: 0.4rem;\n    width: 80%;\n    height: 2.2rem;\n}\n\n.list {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0.4rem;\n    height: 2.4rem;\n    background-color: #aaaaaa33;\n    border-radius: 0.5rem;\n}\n\n.list:hover {\n    background-color: rgba(51, 51, 51, 0.2);\n    transform: scale(1.05);\n}\n\n.active {\n    border: rgb(27, 27, 27) solid 2px;\n    background-color: rgba(34, 34, 34, 0.234);\n}\n\n#main {\n    width: 65%;\n    height: 100%;\n    background: #fff;\n    padding: 0;\n    text-align: center;\n    background-color: rgb(34, 34, 34);\n}\n\n.items-list {\n    display: flex;\n    flex-direction: column;\n    overflow-x: scroll;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n}\n\n.itemCardHoverOptions {\n    position: absolute;\n    right: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-self: flex-end;\n    align-items: center;\n    height: 3rem;\n    width: max-content;\n}\n\n.listHoverOptions {\n    position: absolute;\n    right: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-self: flex-end;\n    align-items: center;\n    height: 1.8rem;\n    width: max-content;\n    background: rgba(201, 201, 201, 0.9);\n}\n\n.itemCard {\n    margin: 0.4rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: 0.5rem;\n    background: rgba(187, 187, 187, 0.117);\n    width: 90%;\n    height: 3rem;\n    list-style: none;\n}\n\n.itemCard > h3 {\n    color: #222;\n    font-family: 'Roboto Mono', monospace;\n}\n\n.urgent {\n    color: #ff0000;\n    background-color: rgba(255, 0, 0, 0.89);\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #aaa;\n    background-color: rgba(0, 168, 0, 0.507);\n}\n\n.optionsBtn {\n    margin: 0.4rem;\n    height: 1.2rem;\n    fill: #f00;\n}\n\n#delete-btn > img:hover {\n    fill: #f00;\n    color: #f00;\n}\n\n.optionsBtn:hover {\n    transform: scale(1.4);\n}\n\n.itemCard-hover,\n.listCard-hover {\n    background: rgba(18, 113, 182, 0.3);\n    transform: scale(1.02);\n}\n\n.page-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 10;\n    /* display: none; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.editor-card {\n    z-index: 21;\n    background-color: #eee;\n    width: 30rem;\n    display: flex;\n    border-radius: 0.5rem;\n    flex-direction: column;\n    align-items: center;\n}\n\n#item-header,\n#list-header {\n    font-size: 2rem;\n    padding: 0.4rem;\n}\n\n#item-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nlabel {\n    margin: 0.4rem;\n    width: 60%;\n    height: 2.6rem;\n    /* border: 1px solid #aaa; */\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#item-submit {\n    margin: 0.4rem;\n    width: 80%;\n    height: 2.6rem;\n    border: 1px solid #aaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(18, 113, 182);\n    border-radius: 0.5rem;\n}\n\n#item-title,\n#item-due-date,\n#item-priority {\n    height: 1.6rem;\n    margin: 0.4rem;\n}\n\nfooter {\n    bottom: 0;\n    width: 100%;\n    background: #333;\n    color: #fff;\n    padding: 5px;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kDAAkD;;AAGlD;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,yCAAyC;IACzC,WAAW;AACf;;AAEA;;;;IAII,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,OAAO;IACP,YAAY;IACZ,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yCAAyC;IACzC,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,cAAc;IACd,UAAU;AACd;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,uCAAuC;IACvC,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;IACtC,UAAU;IACV,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,qCAAqC;AACzC;;AAEA;IACI,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,cAAc;IACd,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;IACd,4BAA4B;IAC5B,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;IACd,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;;;IAGI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["/* @import '~font-awesome/css/font-awesome.css'; */\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Roboto Mono', monospace;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    /* overflow: hidden; */\n    background-color: rgba(34, 34, 34, 0.528);\n    color: #fff;\n}\n\nh1,\nh2,\nh3,\nh4 {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n}\n\nh1 {\n    font-size: 2.4rem;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 1.2rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 0.5rem;\n    background-color: #fff;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    height: 2.4rem;\n}\n\nheader {\n    background: #333;\n    color: #fff;\n    padding: 5px;\n    text-align: center;\n}\n\n#main-section {\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n}\n\n#todo-item-input,\n#list-creator-input {\n    height: 2.6rem;\n    flex: 1;\n    padding: 5px;\n    width: 75%;\n}\n\n#list-creator-btn,\n#add-todo-item-btn {\n    padding: 5px;\n    width: 20%;\n}\n\n#side-panel {\n    width: 35%;\n    height: 100%;\n    background-color: rgba(34, 34, 34, 0.768);\n    /* background: rgba(80, 79, 79, 0.288); */\n    opacity: 0.9;\n    padding: 10px;\n    text-align: center;\n}\n\n#side-panel-header {\n    font-size: 1.2rem;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n\n.todo-list-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.list-header {\n    font-size: large;\n    position: sticky;\n    padding: 5px;\n    width: 100%;\n    padding: 0.8rem;\n    /* height: 10rem; */\n}\n\n.list-header > form {\n    margin: 0.4rem;\n    height: 1.8rem;\n    width: 100%;\n}\n\n.list-header > form > button {\n    margin: 0.4rem;\n    height: 2.2rem;\n    width: 12%;\n}\n\n.list-header > form > input {\n    margin: 0.4rem;\n    width: 80%;\n    height: 2.2rem;\n}\n\n.list {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0.4rem;\n    height: 2.4rem;\n    background-color: #aaaaaa33;\n    border-radius: 0.5rem;\n}\n\n.list:hover {\n    background-color: rgba(51, 51, 51, 0.2);\n    transform: scale(1.05);\n}\n\n.active {\n    border: rgb(27, 27, 27) solid 2px;\n    background-color: rgba(34, 34, 34, 0.234);\n}\n\n#main {\n    width: 65%;\n    height: 100%;\n    background: #fff;\n    padding: 0;\n    text-align: center;\n    background-color: rgb(34, 34, 34);\n}\n\n.items-list {\n    display: flex;\n    flex-direction: column;\n    overflow-x: scroll;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n}\n\n.itemCardHoverOptions {\n    position: absolute;\n    right: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-self: flex-end;\n    align-items: center;\n    height: 3rem;\n    width: max-content;\n}\n\n.listHoverOptions {\n    position: absolute;\n    right: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-self: flex-end;\n    align-items: center;\n    height: 1.8rem;\n    width: max-content;\n    background: rgba(201, 201, 201, 0.9);\n}\n\n.itemCard {\n    margin: 0.4rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: 0.5rem;\n    background: rgba(187, 187, 187, 0.117);\n    width: 90%;\n    height: 3rem;\n    list-style: none;\n}\n\n.itemCard > h3 {\n    color: #222;\n    font-family: 'Roboto Mono', monospace;\n}\n\n.urgent {\n    color: #ff0000;\n    background-color: rgba(255, 0, 0, 0.89);\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #aaa;\n    background-color: rgba(0, 168, 0, 0.507);\n}\n\n.optionsBtn {\n    margin: 0.4rem;\n    height: 1.2rem;\n    fill: #f00;\n}\n\n#delete-btn > img:hover {\n    fill: #f00;\n    color: #f00;\n}\n\n.optionsBtn:hover {\n    transform: scale(1.4);\n}\n\n.itemCard-hover,\n.listCard-hover {\n    background: rgba(18, 113, 182, 0.3);\n    transform: scale(1.02);\n}\n\n.page-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 10;\n    /* display: none; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.editor-card {\n    z-index: 21;\n    background-color: #eee;\n    width: 30rem;\n    display: flex;\n    border-radius: 0.5rem;\n    flex-direction: column;\n    align-items: center;\n}\n\n#item-header,\n#list-header {\n    font-size: 2rem;\n    padding: 0.4rem;\n}\n\n#item-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nlabel {\n    margin: 0.4rem;\n    width: 60%;\n    height: 2.6rem;\n    /* border: 1px solid #aaa; */\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#item-submit {\n    margin: 0.4rem;\n    width: 80%;\n    height: 2.6rem;\n    border: 1px solid #aaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(18, 113, 182);\n    border-radius: 0.5rem;\n}\n\n#item-title,\n#item-due-date,\n#item-priority {\n    height: 1.6rem;\n    margin: 0.4rem;\n}\n\nfooter {\n    bottom: 0;\n    width: 100%;\n    background: #333;\n    color: #fff;\n    padding: 5px;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPageLayout": () => (/* binding */ displayPageLayout),
/* harmony export */   "displayLists": () => (/* binding */ displayLists),
/* harmony export */   "clearPageContents": () => (/* binding */ clearPageContents),
/* harmony export */   "displayActiveList": () => (/* binding */ displayActiveList),
/* harmony export */   "setActiveList": () => (/* binding */ setActiveList)
/* harmony export */ });
/* harmony import */ var _models_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/State */ "./src/models/State.js");
/* harmony import */ var _components_todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todoItem */ "./src/components/todoItem.js");
/* harmony import */ var _components_pageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pageLayout */ "./src/components/pageLayout.js");
/* harmony import */ var _components_ListElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ListElement */ "./src/components/ListElement.js");
/* harmony import */ var _components_todoListComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todoListComponent */ "./src/components/todoListComponent.js");






function displayPageLayout() {
  const page = _components_pageLayout__WEBPACK_IMPORTED_MODULE_2__.pageLayout.template;
  return (document.body.innerHTML = page);
}

function displayLists() {
  removeListsDomElements();
  _models_State__WEBPACK_IMPORTED_MODULE_0__.state.todoLists.forEach((list) => {
    const listElement = (0,_components_ListElement__WEBPACK_IMPORTED_MODULE_3__.listElementComponent)(list);
    document.getElementById("lists").appendChild(listElement);
  });
}

function removeListsDomElements() {
  const todoLists = document.getElementById("lists");
  while (todoLists.firstElementChild) {
    todoLists.firstElementChild.remove();
  }
}

function clearPageContents() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

function displayActiveList() {
  const activeListDomElement = document.getElementById(
    `${_models_State__WEBPACK_IMPORTED_MODULE_0__.state.activeList.listId}`
  );
  const main = document.getElementById("main");

  removeActiveClass();
  activeListDomElement.classList.add("active");

  main.appendChild((0,_components_todoListComponent__WEBPACK_IMPORTED_MODULE_4__.todoListComponent)(_models_State__WEBPACK_IMPORTED_MODULE_0__.state.activeList));

  _models_State__WEBPACK_IMPORTED_MODULE_0__.state.todoItems.forEach((item) => {
    if (item.listId === _models_State__WEBPACK_IMPORTED_MODULE_0__.state.activeList.listId) {
      (0,_components_todoItem__WEBPACK_IMPORTED_MODULE_1__.todoItemComponent)(item);
    }
  });
}

function removeActiveClass() {
  const lists = document.getElementById("lists");
  lists.childNodes.forEach((child) => child.classList.remove("active"));
}

function setActiveList(listId) {
  const activeList = document.getElementById(listId);
  activeList.classList.add("active");
}


/***/ }),

/***/ "./src/components/ItemHoverOptions.js":
/*!********************************************!*\
  !*** ./src/components/ItemHoverOptions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemCardHoverOptionsComponent": () => (/* binding */ itemCardHoverOptionsComponent),
/* harmony export */   "ICON": () => (/* binding */ ICON)
/* harmony export */ });
function itemCardHoverOptionsComponent() {
    const itemCardHoverOptions = document.createElement('div')
    const editBtn = document.createElement('img')
    const deleteBtn = document.createElement('img')
    const completeBtn = document.createElement('img')

    editBtn.setAttribute('id', 'edit-btn')
    editBtn.setAttribute('src', ICON.edit)
    editBtn.classList.add('optionsBtn')
    editBtn.innerText = 'Edit'
    deleteBtn.setAttribute('id', 'delete-btn')
    deleteBtn.setAttribute('src', ICON.delete)
    deleteBtn.setAttribute('style', 'fill: red')
    deleteBtn.classList.add('optionsBtn')
    completeBtn.setAttribute('id', 'complete-btn')
    completeBtn.setAttribute('src', ICON.complete)
    completeBtn.classList.add('optionsBtn')
    completeBtn.innerText = 'Complete'

    itemCardHoverOptions.appendChild(editBtn)
    itemCardHoverOptions.appendChild(deleteBtn)
    itemCardHoverOptions.appendChild(completeBtn)
    itemCardHoverOptions.classList.add('itemCardHoverOptions')
    itemCardHoverOptions.setAttribute('id', 'itemCardHoverOptions')

    return itemCardHoverOptions
}

// Font Awesome Icons
const ICON = {
    edit: 'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath d="M18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z" %2F%3E%3Cpath d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" %2F%3E%3C%2Fsvg%3E',
    delete: 'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"%3E%3Cpath d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" %2F%3E%3C%2Fsvg%3E',
    complete:
        'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"%3E%3Cg fill="none"%3E%3Cpath d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14z" stroke="currentColor"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
}


/***/ }),

/***/ "./src/components/ListElement.js":
/*!***************************************!*\
  !*** ./src/components/ListElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listElementComponent": () => (/* binding */ listElementComponent)
/* harmony export */ });
function listElementComponent(list) {
    if (list) {
        // console.log(list.listId)
        const listElement = document.createElement('li')
        listElement.setAttribute('id', list.listId)
        listElement.setAttribute('class', 'list')
        listElement.textContent = list.title
        return listElement
    } else {
        return console.error(`list is ${list}`)
    }
}


/***/ }),

/***/ "./src/components/ListHoverOptions.js":
/*!********************************************!*\
  !*** ./src/components/ListHoverOptions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listHoverOptionsComponent": () => (/* binding */ listHoverOptionsComponent)
/* harmony export */ });
/* harmony import */ var _ItemHoverOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemHoverOptions */ "./src/components/ItemHoverOptions.js");


function listHoverOptionsComponent() {
    const listHoverOptions = document.createElement('div')
    const editBtn = document.createElement('img')
    const deleteBtn = document.createElement('img')
    const completeBtn = document.createElement('img')

    editBtn.setAttribute('id', 'edit-btn')
    editBtn.setAttribute('src', _ItemHoverOptions__WEBPACK_IMPORTED_MODULE_0__.ICON.edit)
    editBtn.classList.add('optionsBtn')
    editBtn.innerText = 'Edit'
    deleteBtn.setAttribute('id', 'delete-btn')
    deleteBtn.setAttribute('src', _ItemHoverOptions__WEBPACK_IMPORTED_MODULE_0__.ICON["delete"])
    deleteBtn.setAttribute('style', 'fill: red')
    deleteBtn.classList.add('optionsBtn')

    listHoverOptions.appendChild(editBtn)
    listHoverOptions.appendChild(deleteBtn)
    listHoverOptions.classList.add('listHoverOptions')
    listHoverOptions.setAttribute('id', 'listHoverOptions')

    return listHoverOptions
}


/***/ }),

/***/ "./src/components/editItem.js":
/*!************************************!*\
  !*** ./src/components/editItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemEditor": () => (/* binding */ itemEditor)
/* harmony export */ });
function itemEditor(item) {
    const pageOverlay = document.createElement('div')
    pageOverlay.classList.add('page-overlay')
    pageOverlay.id = 'page-overlay'
    document.body.appendChild(pageOverlay)

    const itemEditor = document.createElement('div')
    itemEditor.classList.add('editor-card')
    itemEditor.id = 'editor-card'
    pageOverlay.appendChild(itemEditor)

    const itemHeader = document.createElement('h2')
    itemHeader.id = 'item-header'
    itemHeader.innerText = `Edit "${item.title}"`
    itemEditor.appendChild(itemHeader)

    const itemForm = document.createElement('form')
    itemForm.id = 'item-form'
    itemEditor.appendChild(itemForm)

    const titleLabel = document.createElement('label')
    titleLabel.id = 'title-label'
    titleLabel.innerText = 'Title: '
    itemForm.appendChild(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.id = 'item-title'
    titleInput.type = 'text'
    titleInput.value = item.title
    titleLabel.appendChild(titleInput)

    const dueDateLabel = document.createElement('label')
    dueDateLabel.id = 'due-date-label'
    dueDateLabel.innerText = 'Due Date: '
    itemForm.appendChild(dueDateLabel)

    const itemDueDate = document.createElement('input')
    itemDueDate.id = 'item-due-date'
    itemDueDate.type = 'date'
    itemDueDate.placeholder = 'Item Due Date'
    dueDateLabel.appendChild(itemDueDate)

    const priorityLabel = document.createElement('label')
    priorityLabel.id = 'priority-label'
    priorityLabel.innerText = 'Urgent: '
    itemForm.appendChild(priorityLabel)

    const itemPriority = document.createElement('input')
    itemPriority.id = 'item-priority'
    itemPriority.type = 'checkbox'
    itemPriority.setAttribute = item.isUrgent ? (itemPriority.checked = true) : (itemPriority.checked = false)
    priorityLabel.appendChild(itemPriority)

    const itemSubmit = document.createElement('button')
    itemSubmit.id = 'item-submit'
    itemSubmit.type = 'button'
    itemSubmit.innerText = 'Update item'
    itemForm.appendChild(itemSubmit)
}


/***/ }),

/***/ "./src/components/editList.js":
/*!************************************!*\
  !*** ./src/components/editList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listEditor": () => (/* binding */ listEditor)
/* harmony export */ });
function listEditor(list) {
    console.log('this has been called')
    const pageOverlay = document.createElement('div')
    pageOverlay.classList.add('page-overlay')
    pageOverlay.id = 'page-overlay'
    document.body.appendChild(pageOverlay)
    console.log(pageOverlay)

    const listEditor = document.createElement('div')
    listEditor.classList.add('editor-card')
    listEditor.id = 'editor-card'
    pageOverlay.appendChild(listEditor)

    const listHeader = document.createElement('h2')
    listHeader.id = 'list-header'
    listHeader.innerText = `Edit "${list.title}" list`
    listEditor.appendChild(listHeader)

    const listForm = document.createElement('form')
    listForm.id = 'list-form'
    listEditor.appendChild(listForm)

    const titleLabel = document.createElement('label')
    titleLabel.id = 'title-label'
    titleLabel.innerText = 'Title: '
    listForm.appendChild(titleLabel)

    const listTitle = document.createElement('input')
    listTitle.id = 'list-title'
    listTitle.type = 'text'
    listTitle.placeholder = 'List Title'
    titleLabel.appendChild(listTitle)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.id = 'list-description'
    descriptionLabel.innerText = 'Description'
    listForm.appendChild(descriptionLabel)

    const listDescription = document.createElement('input')
    listDescription.id = 'list-description'
    listDescription.type = 'text'
    listDescription.placeholder = 'List Descriptio;n'
    descriptionLabel.appendChild(listDescription)

    const listSubmit = document.createElement('button')
    listSubmit.id = 'list-submit'
    listSubmit.type = 'button'
    listSubmit.innerText = 'Update List'
    listForm.appendChild(listSubmit)

    return pageOverlay
}

// export const listEditCard = {
//     title: '',
//     template: `
//     <div id="editListOverLay">
//         <div id="editListCard">
//             <h2>Editing ${list.title}</h2>
//             <form action="">
//                 <label for="list-title-input">
//                     <input id="list-title-input" type="text">
//                 </label>
//             </form>
//         </div>
//     </div>
//     `,
// }

// export function listEditor(list) {
//     const editListOverlay = document.createElement('div')
//     editListOverlay.id = 'editListOverlay'
//     editListOverlay.innerHTML = `
//         <div id="editListCard">
//             <h2>Editing ${list.title}</h2>
//             <form action="">
//                 <label for="list-title-input">
//                     <input id="list-title-input" type="text">
//                 </label>
//             </form>
//         </div>
//     `
//     return editListOverlay
// }


/***/ }),

/***/ "./src/components/pageLayout.js":
/*!**************************************!*\
  !*** ./src/components/pageLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLayout": () => (/* binding */ pageLayout)
/* harmony export */ });
const pageLayout = {
    template: `
    <header>
        <h1>Todo List</h1>
    </header>
    <section id="main-section">
        <section id="side-panel">
            <div id="side-panel-header">
                <h1>My Todo Lists</h1>
                <form action="" id="list-creator">
                <input type="text" id="list-creator-input" placeholder="Create a new list...">
                <button type="submit" id="list-creator-btn">Create</button>
                </form action="">
                </div>
                <div id="side-panel-lists">
                <ul id="lists"></ul>
            </div>
        </section>
    <section id="main">
    </section>
    </section>
    <footer>
    <p> Copyright &copy; 2022 TimotiousPrime</p>
  </footer>`,
}


/***/ }),

/***/ "./src/components/todoItem.js":
/*!************************************!*\
  !*** ./src/components/todoItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItemComponent": () => (/* binding */ todoItemComponent)
/* harmony export */ });
function todoItemComponent(item) {
    const itemCard = document.createElement('li')
    const title = document.createElement('h3')

    title.innerText = `${item.title}`
    itemCard.appendChild(title)
    itemCard.setAttribute('id', `${item.itemId}`)
    itemCard.classList.add('itemCard')
    item.isCompleted ? itemCard.classList.add('completed') : itemCard.classList.remove('completed')
    item.isUrgent ? itemCard.classList.add('urgent') : itemCard.classList.remove('urgent')
    // console.log(item.completed, itemCard, item)

    const itemContainer = document.getElementById('items-list')
    itemContainer.appendChild(itemCard)
}


/***/ }),

/***/ "./src/components/todoListComponent.js":
/*!*********************************************!*\
  !*** ./src/components/todoListComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListComponent": () => (/* binding */ todoListComponent)
/* harmony export */ });
function todoListComponent(list) {
    const listContainer = document.createElement('div')
    const header = document.createElement('div')
    const listTitle = document.createElement('h2')
    const listDesc = document.createElement('p')
    const inputForm = document.createElement('form')
    const inputText = document.createElement('input')
    const inputBtn = document.createElement('button')
    const listItemsList = document.createElement('ul')

    header.appendChild(listTitle)
    header.appendChild(listDesc)
    header.appendChild(inputForm)
    header.setAttribute('id', `-header`)
    header.classList.add('list-header')

    listTitle.textContent = `${list.title} Todo List`
    listDesc.textContent = `${list.description}`

    inputForm.appendChild(inputText)
    inputForm.appendChild(inputBtn)
    inputForm.setAttribute('id', `${list.listId}-item-input-form`)
    inputForm.setAttribute('action', '')
    inputForm.classList.add('inputForm')

    inputText.setAttribute('type', 'text')
    inputText.setAttribute('name', 'todo-item-input')
    inputText.setAttribute('id', 'todo-item-input')
    inputText.setAttribute('placeholder', 'think of something to do')

    inputBtn.setAttribute('type', 'submit')
    inputBtn.setAttribute('name', 'todo-item-submit')
    inputBtn.setAttribute('id', 'todo-item-submit')
    inputBtn.innerText = 'Add'

    listItemsList.setAttribute('id', `items-list`)
    listItemsList.classList.add('items-list')

    listContainer.appendChild(header)
    listContainer.appendChild(listItemsList)
    listContainer.classList.add('todo-list-container')
    return listContainer
}


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleEvents": () => (/* binding */ handleEvents)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _components_ListHoverOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ListHoverOptions */ "./src/components/ListHoverOptions.js");
/* harmony import */ var _components_ItemHoverOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ItemHoverOptions */ "./src/components/ItemHoverOptions.js");
/* harmony import */ var _models_State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/State */ "./src/models/State.js");
/* harmony import */ var _models_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/TodoList */ "./src/models/TodoList.js");
/* harmony import */ var _models_TodoItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/TodoItem */ "./src/models/TodoItem.js");
/* harmony import */ var _components_editItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/editItem */ "./src/components/editItem.js");
/* harmony import */ var _components_editList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editList */ "./src/components/editList.js");









function handleEvents() {
  // Add list
  const addListBtn = document.getElementById("list-creator-btn");
  addListBtn.onclick = () => addNewList();

  // Add item
  const addItemBtn = document.getElementById("todo-item-submit");
  addItemBtn.onclick = (e) => addNewItem(e);

  // set active list
  const listElements = Array.from(document.querySelectorAll(".list"));
  listElements.forEach((list) => {
    list.onclick = () => makeActiveList(list.id);
  });

  // item hover option
  const itemsCards = Array.from(document.querySelectorAll(".itemCard"));
  itemsCards.forEach((item) => {
    item.onmouseenter = (e) => {
      item.classList.add("itemCard-hover");
      addItemOptions(e);
    };
    item.onmouseleave = () => {
      item.classList.remove("itemCard-hover");
      removeHoverOptions();
    };
  });

  //  List hover options
  const listCards = Array.from(document.querySelectorAll(".list"));
  listCards.forEach((list) => {
    list.onmouseenter = (e) => {
      list.classList.add("listCard-hover");
      addListOptions(e);
    };
    list.onmouseleave = () => {
      list.classList.remove("listCard-hover");
      removeListHoverOptions();
    };
  });
}

function makeActiveList(listId) {
  console.log(listId);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.clearActive();
  console.log(_models_State__WEBPACK_IMPORTED_MODULE_3__.state.activeList);
  // state.activeList ? (state.findList(listId).isActive = true) : state.todoLists[0].isActive
  // state.findList(listId).isActive = true || state.todoLists[0].isActive
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.findList(listId)
    ? (_models_State__WEBPACK_IMPORTED_MODULE_3__.state.findList(listId).isActive = true)
    : (_models_State__WEBPACK_IMPORTED_MODULE_3__.state.todoLists[0].isActive = true);
  // if (state.findList(listId)) {
  //     state.findList(listId).isActive = true
  // }
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();

  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();

  console.log("active list set");
}

function addNewList() {
  const listInput = document.getElementById("list-creator-input").value;
  const todoList = new _models_TodoList__WEBPACK_IMPORTED_MODULE_4__.TodoList(listInput);

  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.clearActive();
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.addTodoLists = todoList;
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();

  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();

  console.log("new list added");
}

function addNewItem() {
  const input = document.getElementById("todo-item-input").value;
  const listId = _models_State__WEBPACK_IMPORTED_MODULE_3__.state.activeList.listId;
  console.log(listId);
  const item = new _models_TodoItem__WEBPACK_IMPORTED_MODULE_5__.TodoItem(listId, input);

  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.addItem = item;
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
}

function handleEditList(e) {
  const list = _models_State__WEBPACK_IMPORTED_MODULE_3__.state.findList(e.target.parentElement.parentElement.id);
  console.log("Edit list", list);

  document.body.appendChild((0,_components_editList__WEBPACK_IMPORTED_MODULE_7__.listEditor)(list));
  console.log(document.body);

  const editPageOverlay = document.getElementById("page-overlay");
  editPageOverlay.addEventListener("click", (e) => {
    if (e.target.id === "page-overlay") {
      editPageOverlay.remove();
    }
  });

  const submitBtn = document.getElementById("list-submit");
  submitBtn.onclick = (e) => {
    e.preventDefault();
    list.title = document.getElementById("list-title").value;
    //     list.description = document.getElementById('list-description').value

    _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
  };
}

function handleDeleteList(e) {
  const listId = e.target.parentElement.parentElement.id;
  // const list = state.activeList

  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.removeListItems(listId);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.removeList(listId);
  makeActiveList(_models_State__WEBPACK_IMPORTED_MODULE_3__.state.todoLists[0].listId);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
}

function handleDeleteItem(e) {
  console.log("delete item");
  const itemId = e.target.parentElement.parentElement.id;
  // const list = state.activeList
  console.log(itemId);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.removeItem(itemId);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
}

function handleCompleteItem(e) {
  const itemId = e.target.parentElement.parentElement.id;
  const item = _models_State__WEBPACK_IMPORTED_MODULE_3__.state.findItem(itemId);
  const DOMelement = document.getElementById(itemId);

  item.isCompleted === true
    ? (item.isCompleted = false)
    : (item.isCompleted = true);
  _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
}

function handleEditItem(e) {
  const item = _models_State__WEBPACK_IMPORTED_MODULE_3__.state.findItem(e.target.parentElement.parentElement.id);

  (0,_components_editItem__WEBPACK_IMPORTED_MODULE_6__.itemEditor)(item);
  // pageOverlay.style.display = 'block'

  const pageOverlay = document.getElementById("page-overlay");
  pageOverlay.addEventListener("click", (e) => {
    if (e.target.id === "page-overlay") {
      pageOverlay.remove();

      console.log("clicked outside of form");
    }
  });

  const submitBtn = document.getElementById("item-submit");
  submitBtn.onclick = (e) => {
    e.preventDefault();
    item.title = document.getElementById("item-title").value;
    item.dueDate = document.getElementById("item-due-date").value;
    item.isUrgent = document.getElementById("item-priority").checked
      ? true
      : false;

    console.log(item);

    _models_State__WEBPACK_IMPORTED_MODULE_3__.state.save();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayState)();
  };

  console.log("Edit Item");
}

function addItemOptions(e) {
  const itemId = e.target.id;
  const itemElement = e.target;
  const options = (0,_components_ItemHoverOptions__WEBPACK_IMPORTED_MODULE_2__.itemCardHoverOptionsComponent)(itemId);

  itemElement.appendChild(options);
  listenForOptionClick();
}

function addListOptions(e) {
  const listId = e.target.id;
  const listElement = e.target;
  const options = (0,_components_ListHoverOptions__WEBPACK_IMPORTED_MODULE_1__.listHoverOptionsComponent)(listId);

  listElement.appendChild(options);
  listenForOptionClick();
}

function removeHoverOptions() {
  const hoverOptions = document.getElementById("itemCardHoverOptions");
  hoverOptions.remove();
}

function removeListHoverOptions() {
  const hoverOptions = document.getElementById("listHoverOptions");
  hoverOptions.remove();
}

function listenForOptionClick() {
  // const id = e.target.parentElement.id
  const deleteBtn = document.getElementById("delete-btn");
  const editBtn = document.getElementById("edit-btn");
  const completeBtn = document.getElementById("complete-btn") || null;

  deleteBtn.onclick = (e) => {
    e.target.parentElement.id === "listHoverOptions"
      ? handleDeleteList(e)
      : handleDeleteItem(e);
  };

  editBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.parentElement.id);
    e.target.parentElement.id === "listHoverOptions"
      ? handleEditList(e)
      : handleEditItem(e);
  };

  if (completeBtn) completeBtn.onclick = (e) => handleCompleteItem(e);
}


/***/ }),

/***/ "./src/models/State.js":
/*!*****************************!*\
  !*** ./src/models/State.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
class State {
    todoLists = []
    todoItems = []

    constructor(initialState) {
        this.todoLists = [...initialState.todoLists] || []
        this.todoItems = [...initialState.todoItems] || []
    }

    set addTodoLists(list) {
        this._todoLists = this.todoLists.push(list)
    }

    get todoLists() {
        return this._todoLists
    }

    removeList(listId) {
        this.todoLists = this.todoLists.filter((element) => element.listId !== listId)
        // this.save()
    }

    set addItem(item) {
        // this._todoItems = [...this.todoItems, item]
        this._todoItems = this.todoItems.push(item)
    }

    get todoItems() {
        return this._todoItems
    }

    removeItem(itemId) {
        this.todoItems = this.todoItems.filter((element) => element.itemId !== itemId)
    }

    removeListItems(listId){
        this.todoItems = this.todoItems.filter((item) => item.listId !== listId)
    }

    clearActive() {
        this.todoLists.forEach((list) => {
            list.isActive = false
        })
    }

    findList(listId) {
        return this.todoLists.find((list) => list.listId === listId)
    }

    findItem(itemId) {
        return this.todoItems.find((item) => item.itemId === itemId)
    }

    get activeList() {
        return this.todoLists.find((list) => list.isActive === true) || this.todoLists[0]
    }

    set activeList(list) {
        const listId = list.id
        this.todoLists.find((list) => list.listId === listId).isActive = true
    }

    save() {
        const stateJSON = JSON.stringify(this)
        localStorage.setItem('myAwesomeTodoState', stateJSON)
    }
}

// const initialState = JSON.parse(localStorage.getItem('myAwesomeTodoState'));
const data = localStorage.getItem('myAwesomeTodoState')

const defaultState = {
    todoLists: [
        {
            title: 'Default List',
            description: 'A list to help you get started',
            isActive: true,
            listId: 'list1',
        },
    ],
    todoItems: [
        {
            title: 'add a todo item',
            itemId: 'item1',
            listId: 'list1',
        },
        {
            title: 'edit an item',
            itemId: 'item2',
            listId: 'list1',
        },
        {
            title: 'edit urgency of ite',
            itemId: 'item3',
            listId: 'list1',
        },
        {
            title: 'delete an item',
            itemId: 'item4',
            listId: 'list1',
        },
        {
            title: 'add a list',
            itemId: 'item5',
            listId: 'list1',
        },
        {
            title: 'edit a list',
            itemId: 'item6',
            listId: 'list1',
        },
        {
            title: 'delete a list',
            itemId: 'item7',
            listId: 'list1',
        },
    ],
}

const initialState = data ? JSON.parse(data) : defaultState

const state = new State(initialState)


/***/ }),

/***/ "./src/models/TodoItem.js":
/*!********************************!*\
  !*** ./src/models/TodoItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
    title = ''
    dueDate = ''
    isUrgent = false
    isCompleted = false
    listId = ''
    itemId = `item${new Date().getTime()}`
    createdDate = new Date()

    constructor(listId, title, dueDate, isUrgent) {
        this.title = title
        this.listId = listId
        this.dueDate = dueDate
        this.isUrgent = isUrgent
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    set isCompleted(boolVal) {
        this._isCompleted = boolVal
    }

    get isCompleted() {
        return this._isCompleted
    }

    set id(value) {
        this._id = value
    }

    get id() {
        return this._id
    }

    get isUrgent(){
        return this._isUrgent
    }

    set isUrgent(value){
        this.isUrgent = value
    }
}

// I can be herre in the meantime :))))


/***/ }),

/***/ "./src/models/TodoList.js":
/*!********************************!*\
  !*** ./src/models/TodoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoList": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList {
    description = ''
    title = ''
    isActive = true
    listId = `list${new Date().getTime()}`
    dateCreated = new Date()

    constructor(title) {
        this.title = title
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get listId() {
        return this._listId
    }

    set listId(id) {
        this._listId = id
    }

    get isActive() {
        return this._isActive
    }

    set isActive(boolVal) {
        this._isActive = boolVal
    }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayState = void 0;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var eventListeners_1 = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
var DOM_1 = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
function displayState() {
    (0, DOM_1.clearPageContents)();
    (0, DOM_1.displayPageLayout)();
    (0, DOM_1.displayLists)();
    (0, DOM_1.displayActiveList)();
    (0, eventListeners_1.handleEvents)();
}
exports.displayState = displayState;
displayState();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map