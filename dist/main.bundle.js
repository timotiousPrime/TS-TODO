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
___CSS_LOADER_EXPORT___.push([module.id, "/* @import '~font-awesome/css/font-awesome.css'; */\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto Mono', monospace;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    justify-content: space-between;\r\n    /* overflow: hidden; */\r\n    background-color: rgba(34, 34, 34, 0.528);\r\n    color: #fff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\nh1 {\r\n    font-size: 2.4rem;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 1.2rem;\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    background-color: #fff;\r\n    cursor: pointer;\r\n    transition: all 0.2s ease-in-out;\r\n    height: 2.4rem;\r\n}\r\n\r\nheader {\r\n    background: #333;\r\n    color: #fff;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n#main-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100vh;\r\n}\r\n\r\n#todo-item-input,\r\n#list-creator-input {\r\n    height: 2.6rem;\r\n    flex: 1;\r\n    padding: 5px;\r\n    width: 75%;\r\n}\r\n\r\n#list-creator-btn,\r\n#add-todo-item-btn {\r\n    padding: 5px;\r\n    width: 20%;\r\n}\r\n\r\n#side-panel {\r\n    width: 35%;\r\n    height: 100%;\r\n    background-color: rgba(34, 34, 34, 0.768);\r\n    /* background: rgba(80, 79, 79, 0.288); */\r\n    opacity: 0.9;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n#side-panel-header {\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.todo-list-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.list-header {\r\n    font-size: large;\r\n    position: sticky;\r\n    padding: 5px;\r\n    width: 100%;\r\n    padding: 0.8rem;\r\n    /* height: 10rem; */\r\n}\r\n\r\n.list-header > form {\r\n    margin: 0.4rem;\r\n    height: 1.8rem;\r\n    width: 100%;\r\n}\r\n\r\n.list-header > form > button {\r\n    margin: 0.4rem;\r\n    height: 2.2rem;\r\n    width: 12%;\r\n}\r\n\r\n.list-header > form > input {\r\n    margin: 0.4rem;\r\n    width: 80%;\r\n    height: 2.2rem;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.4rem;\r\n    height: 2.4rem;\r\n    background-color: #aaaaaa33;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.list:hover {\r\n    background-color: rgba(51, 51, 51, 0.2);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.active {\r\n    border: rgb(27, 27, 27) solid 2px;\r\n    background-color: rgba(34, 34, 34, 0.234);\r\n}\r\n\r\n#main {\r\n    width: 65%;\r\n    height: 100%;\r\n    background: #fff;\r\n    padding: 0;\r\n    text-align: center;\r\n    background-color: rgb(34, 34, 34);\r\n}\r\n\r\n.items-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-x: scroll;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.itemCardHoverOptions {\r\n    position: absolute;\r\n    right: 2%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-self: flex-end;\r\n    align-items: center;\r\n    height: 3rem;\r\n    width: max-content;\r\n}\r\n\r\n.listHoverOptions {\r\n    position: absolute;\r\n    right: 2%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-self: flex-end;\r\n    align-items: center;\r\n    height: 1.8rem;\r\n    width: max-content;\r\n    background: rgba(201, 201, 201, 0.9);\r\n}\r\n\r\n.itemCard {\r\n    margin: 0.4rem 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    border-radius: 0.5rem;\r\n    background: rgba(187, 187, 187, 0.117);\r\n    width: 90%;\r\n    height: 3rem;\r\n    list-style: none;\r\n}\r\n\r\n.itemCard > h3 {\r\n    color: #222;\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.urgent {\r\n    color: #ff0000;\r\n    background-color: rgba(255, 0, 0, 0.89);\r\n}\r\n\r\n.completed {\r\n    text-decoration: line-through;\r\n    color: #aaa;\r\n    background-color: rgba(0, 168, 0, 0.507);\r\n}\r\n\r\n.optionsBtn {\r\n    margin: 0.4rem;\r\n    height: 1.2rem;\r\n    fill: #f00;\r\n}\r\n\r\n#delete-btn > img:hover {\r\n    fill: #f00;\r\n    color: #f00;\r\n}\r\n\r\n.optionsBtn:hover {\r\n    transform: scale(1.4);\r\n}\r\n\r\n.itemCard-hover,\r\n.listCard-hover {\r\n    background: rgba(18, 113, 182, 0.3);\r\n    transform: scale(1.02);\r\n}\r\n\r\n.page-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 10;\r\n    /* display: none; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.editor-card {\r\n    z-index: 21;\r\n    background-color: #eee;\r\n    width: 30rem;\r\n    display: flex;\r\n    border-radius: 0.5rem;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#item-header,\r\n#list-header {\r\n    font-size: 2rem;\r\n    padding: 0.4rem;\r\n}\r\n\r\n#item-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nlabel {\r\n    margin: 0.4rem;\r\n    width: 60%;\r\n    height: 2.6rem;\r\n    /* border: 1px solid #aaa; */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n#item-submit {\r\n    margin: 0.4rem;\r\n    width: 80%;\r\n    height: 2.6rem;\r\n    border: 1px solid #aaa;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(18, 113, 182);\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n#item-title,\r\n#item-due-date,\r\n#item-priority {\r\n    height: 1.6rem;\r\n    margin: 0.4rem;\r\n}\r\n\r\nfooter {\r\n    bottom: 0;\r\n    width: 100%;\r\n    background: #333;\r\n    color: #fff;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kDAAkD;;AAGlD;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,yCAAyC;IACzC,WAAW;AACf;;AAEA;;;;IAII,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,OAAO;IACP,YAAY;IACZ,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yCAAyC;IACzC,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,cAAc;IACd,UAAU;AACd;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,uCAAuC;IACvC,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;IACtC,UAAU;IACV,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,qCAAqC;AACzC;;AAEA;IACI,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,cAAc;IACd,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;IACd,4BAA4B;IAC5B,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;IACd,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;;;IAGI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["/* @import '~font-awesome/css/font-awesome.css'; */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto Mono', monospace;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    justify-content: space-between;\r\n    /* overflow: hidden; */\r\n    background-color: rgba(34, 34, 34, 0.528);\r\n    color: #fff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\nh1 {\r\n    font-size: 2.4rem;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 1.2rem;\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    background-color: #fff;\r\n    cursor: pointer;\r\n    transition: all 0.2s ease-in-out;\r\n    height: 2.4rem;\r\n}\r\n\r\nheader {\r\n    background: #333;\r\n    color: #fff;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n#main-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100vh;\r\n}\r\n\r\n#todo-item-input,\r\n#list-creator-input {\r\n    height: 2.6rem;\r\n    flex: 1;\r\n    padding: 5px;\r\n    width: 75%;\r\n}\r\n\r\n#list-creator-btn,\r\n#add-todo-item-btn {\r\n    padding: 5px;\r\n    width: 20%;\r\n}\r\n\r\n#side-panel {\r\n    width: 35%;\r\n    height: 100%;\r\n    background-color: rgba(34, 34, 34, 0.768);\r\n    /* background: rgba(80, 79, 79, 0.288); */\r\n    opacity: 0.9;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n#side-panel-header {\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.todo-list-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.list-header {\r\n    font-size: large;\r\n    position: sticky;\r\n    padding: 5px;\r\n    width: 100%;\r\n    padding: 0.8rem;\r\n    /* height: 10rem; */\r\n}\r\n\r\n.list-header > form {\r\n    margin: 0.4rem;\r\n    height: 1.8rem;\r\n    width: 100%;\r\n}\r\n\r\n.list-header > form > button {\r\n    margin: 0.4rem;\r\n    height: 2.2rem;\r\n    width: 12%;\r\n}\r\n\r\n.list-header > form > input {\r\n    margin: 0.4rem;\r\n    width: 80%;\r\n    height: 2.2rem;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.4rem;\r\n    height: 2.4rem;\r\n    background-color: #aaaaaa33;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.list:hover {\r\n    background-color: rgba(51, 51, 51, 0.2);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.active {\r\n    border: rgb(27, 27, 27) solid 2px;\r\n    background-color: rgba(34, 34, 34, 0.234);\r\n}\r\n\r\n#main {\r\n    width: 65%;\r\n    height: 100%;\r\n    background: #fff;\r\n    padding: 0;\r\n    text-align: center;\r\n    background-color: rgb(34, 34, 34);\r\n}\r\n\r\n.items-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-x: scroll;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.itemCardHoverOptions {\r\n    position: absolute;\r\n    right: 2%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-self: flex-end;\r\n    align-items: center;\r\n    height: 3rem;\r\n    width: max-content;\r\n}\r\n\r\n.listHoverOptions {\r\n    position: absolute;\r\n    right: 2%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-self: flex-end;\r\n    align-items: center;\r\n    height: 1.8rem;\r\n    width: max-content;\r\n    background: rgba(201, 201, 201, 0.9);\r\n}\r\n\r\n.itemCard {\r\n    margin: 0.4rem 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    border-radius: 0.5rem;\r\n    background: rgba(187, 187, 187, 0.117);\r\n    width: 90%;\r\n    height: 3rem;\r\n    list-style: none;\r\n}\r\n\r\n.itemCard > h3 {\r\n    color: #222;\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.urgent {\r\n    color: #ff0000;\r\n    background-color: rgba(255, 0, 0, 0.89);\r\n}\r\n\r\n.completed {\r\n    text-decoration: line-through;\r\n    color: #aaa;\r\n    background-color: rgba(0, 168, 0, 0.507);\r\n}\r\n\r\n.optionsBtn {\r\n    margin: 0.4rem;\r\n    height: 1.2rem;\r\n    fill: #f00;\r\n}\r\n\r\n#delete-btn > img:hover {\r\n    fill: #f00;\r\n    color: #f00;\r\n}\r\n\r\n.optionsBtn:hover {\r\n    transform: scale(1.4);\r\n}\r\n\r\n.itemCard-hover,\r\n.listCard-hover {\r\n    background: rgba(18, 113, 182, 0.3);\r\n    transform: scale(1.02);\r\n}\r\n\r\n.page-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 10;\r\n    /* display: none; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.editor-card {\r\n    z-index: 21;\r\n    background-color: #eee;\r\n    width: 30rem;\r\n    display: flex;\r\n    border-radius: 0.5rem;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#item-header,\r\n#list-header {\r\n    font-size: 2rem;\r\n    padding: 0.4rem;\r\n}\r\n\r\n#item-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nlabel {\r\n    margin: 0.4rem;\r\n    width: 60%;\r\n    height: 2.6rem;\r\n    /* border: 1px solid #aaa; */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n#item-submit {\r\n    margin: 0.4rem;\r\n    width: 80%;\r\n    height: 2.6rem;\r\n    border: 1px solid #aaa;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(18, 113, 182);\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n#item-title,\r\n#item-due-date,\r\n#item-priority {\r\n    height: 1.6rem;\r\n    margin: 0.4rem;\r\n}\r\n\r\nfooter {\r\n    bottom: 0;\r\n    width: 100%;\r\n    background: #333;\r\n    color: #fff;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _models_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/State */ "./src/models/State.ts");
/* harmony import */ var _models_State__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_State__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "./src/eventListeners.ts":
/*!*******************************!*\
  !*** ./src/eventListeners.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleEvents = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
var ListHoverOptions_1 = __webpack_require__(/*! ./components/ListHoverOptions */ "./src/components/ListHoverOptions.js");
var ItemHoverOptions_1 = __webpack_require__(/*! ./components/ItemHoverOptions */ "./src/components/ItemHoverOptions.js");
var State_1 = __webpack_require__(/*! ./models/State */ "./src/models/State.ts");
var TodoList_1 = __webpack_require__(/*! ./models/TodoList */ "./src/models/TodoList.ts");
var TodoItem_1 = __webpack_require__(/*! ./models/TodoItem */ "./src/models/TodoItem.ts");
var editItem_1 = __webpack_require__(/*! ./components/editItem */ "./src/components/editItem.js");
var editList_1 = __webpack_require__(/*! ./components/editList */ "./src/components/editList.js");
function handleEvents() {
    // Add list
    var addListBtn = document.getElementById("list-creator-btn");
    addListBtn.onclick = function () { return addNewList(); };
    // Add item
    var addItemBtn = document.getElementById("todo-item-submit");
    addItemBtn.onclick = function () { return addNewItem(); };
    // set active list
    var listElements = Array.from(document.querySelectorAll(".list"));
    listElements.forEach(function (list) {
        list.onclick = function () { return makeActiveList(list.id); };
    });
    // item hover option
    var itemsCards = Array.from(document.querySelectorAll(".itemCard"));
    itemsCards.forEach(function (item) {
        item.onmouseenter = function (e) {
            item.classList.add("itemCard-hover");
            addItemOptions(e);
        };
        item.onmouseleave = function () {
            item.classList.remove("itemCard-hover");
            removeHoverOptions();
        };
    });
    //  List hover options
    var listCards = Array.from(document.querySelectorAll(".list"));
    listCards.forEach(function (list) {
        list.onmouseenter = function (e) {
            list.classList.add("listCard-hover");
            addListOptions(e);
        };
        list.onmouseleave = function () {
            list.classList.remove("listCard-hover");
            removeListHoverOptions();
        };
    });
}
exports.handleEvents = handleEvents;
function makeActiveList(listId) {
    State_1.state.clearActive();
    State_1.state.findList(listId)
        ? (State_1.state.findList(listId).isActive = true)
        : (State_1.state.todoLists[0].isActive = true);
    State_1.state.save();
    (0, index_1.displayState)();
}
function addNewList() {
    var listInput = document.getElementById("list-creator-input").value;
    var todoList = new TodoList_1.TodoList(listInput);
    State_1.state.clearActive();
    State_1.state.addTodoLists = todoList;
    State_1.state.save();
    (0, index_1.displayState)();
}
function addNewItem() {
    var input = document.getElementById("todo-item-input").value;
    var listId = State_1.state.activeList.listId;
    var item = new TodoItem_1.TodoItem(listId, input);
    State_1.state.addItem = item;
    State_1.state.save();
    (0, index_1.displayState)();
}
function handleEditList(e) {
    var listId = e.target.parentElement.parentElement.id;
    var list = State_1.state.findList(listId);
    document.body.appendChild((0, editList_1.listEditor)(list));
    var pageOverlay = document.getElementById("page-overlay");
    pageOverlay.addEventListener("click", function (e) {
        var target = e.target;
        if (target.id === "page-overlay") {
            pageOverlay.remove();
        }
    });
    var submitBtn = document.getElementById("list-submit");
    submitBtn.onclick = function (e) {
        e.preventDefault();
        list.title = document.getElementById("list-title").value;
        State_1.state.save();
        (0, index_1.displayState)();
    };
}
function handleDeleteList(e) {
    var target = e.target;
    var listId = target.parentElement.parentElement.id;
    State_1.state.removeListItems(listId);
    State_1.state.removeList(listId);
    makeActiveList(State_1.state.todoLists[0].listId);
    State_1.state.save();
    (0, index_1.displayState)();
}
function handleDeleteItem(e) {
    var itemId = e.target.parentElement.parentElement.id;
    State_1.state.removeItem(itemId);
    State_1.state.save();
    (0, index_1.displayState)();
}
function handleCompleteItem(e) {
    var itemId = e.target.parentElement.parentElement.id;
    var item = State_1.state.findItem(itemId);
    var DOMelement = document.getElementById(itemId);
    item.isCompleted === true
        ? (item.isCompleted = false)
        : (item.isCompleted = true);
    State_1.state.save();
    (0, index_1.displayState)();
}
function handleEditItem(e) {
    var item = State_1.state.findItem(e.target.parentElement.parentElement.id);
    (0, editItem_1.itemEditor)(item);
    // pageOverlay.style.display = 'block'
    var pageOverlay = document.getElementById("page-overlay");
    pageOverlay.addEventListener("click", function (e) {
        var target = e.target;
        if (target.id === "page-overlay") {
            pageOverlay.remove();
            console.log("clicked outside of form");
        }
    });
    var submitBtn = document.getElementById("item-submit");
    submitBtn.onclick = function (e) {
        e.preventDefault();
        item.title = document.getElementById("item-title").value;
        item.dueDate = document.getElementById("item-due-date").value;
        item.isUrgent = document.getElementById("item-priority").checked
            ? true
            : false;
        console.log(item);
        State_1.state.save();
        (0, index_1.displayState)();
    };
    console.log("Edit Item");
}
function addItemOptions(e) {
    var itemId = e.target.id;
    var itemElement = e.target;
    var options = (0, ItemHoverOptions_1.itemCardHoverOptionsComponent)();
    itemElement.appendChild(options);
    listenForOptionClick();
}
function addListOptions(e) {
    var listId = e.target.id;
    var listElement = e.target;
    var options = (0, ListHoverOptions_1.listHoverOptionsComponent)();
    listElement.appendChild(options);
    listenForOptionClick();
}
function removeHoverOptions() {
    var hoverOptions = document.getElementById("itemCardHoverOptions");
    hoverOptions.remove();
}
function removeListHoverOptions() {
    var hoverOptions = document.getElementById("listHoverOptions");
    hoverOptions.remove();
}
function listenForOptionClick() {
    // const id = e.target.parentElement.id
    var deleteBtn = document.getElementById("delete-btn");
    var editBtn = document.getElementById("edit-btn");
    var completeBtn = document.getElementById("complete-btn") || null;
    deleteBtn.onclick = function (e) {
        var target = e.target;
        target.parentElement.id === "listHoverOptions"
            ? handleDeleteList(e)
            : handleDeleteItem(e);
    };
    editBtn.onclick = function (e) {
        var target = e.target;
        e.preventDefault();
        e.stopPropagation();
        target.parentElement.id === "listHoverOptions"
            ? handleEditList(e)
            : handleEditItem(e);
    };
    if (completeBtn)
        completeBtn.onclick = function (e) { return handleCompleteItem(e); };
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayState = void 0;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var eventListeners_1 = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.ts");
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


/***/ }),

/***/ "./src/models/State.ts":
/*!*****************************!*\
  !*** ./src/models/State.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.state = exports.State = void 0;
var State = /** @class */ (function () {
    function State(initialState) {
        this.lists = [];
        this.todoItems = [];
        this.lists = __spreadArray([], initialState.lists, true) || [];
        this.todoItems = __spreadArray([], initialState.todoItems, true) || [];
    }
    Object.defineProperty(State.prototype, "addTodoLists", {
        set: function (list) {
            this.lists = __spreadArray(__spreadArray([], this.lists, true), [list], false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "todoLists", {
        get: function () {
            return this.lists;
        },
        enumerable: false,
        configurable: true
    });
    State.prototype.removeList = function (listId) {
        this.lists = this.lists.filter(function (element) { return element.listId !== listId; });
    };
    Object.defineProperty(State.prototype, "addItem", {
        set: function (item) {
            this.todoItems = __spreadArray(__spreadArray([], this.todoItems, true), [item], false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "items", {
        get: function () {
            return this.todoItems;
        },
        enumerable: false,
        configurable: true
    });
    State.prototype.removeItem = function (itemId) {
        this.todoItems = this.todoItems.filter(function (element) { return element.id !== itemId; });
    };
    State.prototype.removeListItems = function (listId) {
        this.todoItems = this.todoItems.filter(function (item) { return item.listId !== listId; });
    };
    State.prototype.clearActive = function () {
        this.todoLists.forEach(function (list) {
            list.isActive = false;
        });
    };
    State.prototype.findList = function (listId) {
        return this.todoLists.find(function (list) { return list.listId === listId; });
    };
    State.prototype.findItem = function (itemId) {
        return this.todoItems.find(function (item) { return item.id === itemId; });
    };
    Object.defineProperty(State.prototype, "activeList", {
        get: function () {
            return (this.todoLists.find(function (list) { return list.isActive === true; }) || this.todoLists[0]);
        },
        set: function (list) {
            var listId = list.listId;
            this.todoLists.find(function (list) { return list.listId === listId; }).isActive = true;
        },
        enumerable: false,
        configurable: true
    });
    State.prototype.save = function () {
        var stateJSON = JSON.stringify(this);
        localStorage.setItem("myAwesomeTodoState", stateJSON);
    };
    return State;
}());
exports.State = State;
// const initialState = JSON.parse(localStorage.getItem('myAwesomeTodoState'));
var data = localStorage.getItem("myAwesomeTodoState");
var defaultState = {
    todoLists: [
        {
            title: "Default List",
            description: "A list to help you get started",
            isActive: true,
            listId: "list1",
        },
    ],
    todoItems: [
        {
            title: "add a todo item",
            itemId: "item1",
            listId: "list1",
        },
        {
            title: "edit an item",
            itemId: "item2",
            listId: "list1",
        },
        {
            title: "edit urgency of ite",
            itemId: "item3",
            listId: "list1",
        },
        {
            title: "delete an item",
            itemId: "item4",
            listId: "list1",
        },
        {
            title: "add a list",
            itemId: "item5",
            listId: "list1",
        },
        {
            title: "edit a list",
            itemId: "item6",
            listId: "list1",
        },
        {
            title: "delete a list",
            itemId: "item7",
            listId: "list1",
        },
    ],
};
var initialState = data ? JSON.parse(data) : defaultState;
exports.state = new State(initialState);


/***/ }),

/***/ "./src/models/TodoItem.ts":
/*!********************************!*\
  !*** ./src/models/TodoItem.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoItem = void 0;
var TodoItem = /** @class */ (function () {
    function TodoItem(listId, title, dueDate, isUrgent) {
        this.title = "";
        this.urgent = false;
        this.completed = false;
        this.itemId = "item".concat(new Date().getTime());
        this.createdDate = String(new Date());
        this.title = title;
        this.listId = listId;
        this.dueDate = dueDate;
        this.urgent = isUrgent;
    }
    Object.defineProperty(TodoItem.prototype, "itemTitle", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoItem.prototype, "isCompleted", {
        get: function () {
            return this.completed;
        },
        set: function (value) {
            this.completed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoItem.prototype, "id", {
        get: function () {
            return this.itemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoItem.prototype, "isUrgent", {
        get: function () {
            return this.urgent;
        },
        set: function (value) {
            this.urgent = value;
        },
        enumerable: false,
        configurable: true
    });
    return TodoItem;
}());
exports.TodoItem = TodoItem;


/***/ }),

/***/ "./src/models/TodoList.ts":
/*!********************************!*\
  !*** ./src/models/TodoList.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoList = void 0;
var TodoList = /** @class */ (function () {
    function TodoList(title) {
        this.title = "";
        this.description = "";
        this.active = true;
        this.listId = "list".concat(new Date().getTime());
        this.dateCreated = String(new Date());
        this.title = title;
    }
    Object.defineProperty(TodoList.prototype, "listTitle", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoList.prototype, "listDescription", {
        get: function () {
            return this.description;
        },
        set: function (value) {
            this.description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoList.prototype, "id", {
        get: function () {
            return this.listId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoList.prototype, "isActive", {
        get: function () {
            return this.isActive;
        },
        set: function (boolVal) {
            this.isActive = boolVal;
        },
        enumerable: false,
        configurable: true
    });
    return TodoList;
}());
exports.TodoList = TodoList;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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