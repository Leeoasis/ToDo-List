"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["index"],{

/***/ "./modules/add.js":
/*!************************!*\
  !*** ./modules/add.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n/* harmony import */ var _populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate.js */ \"./modules/populate.js\");\n\n\n\nconst addNewTask = (input) => {\n  const taskList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n  const task = {\n    index: taskList.length + 1,\n    completed: false,\n    description: input.value,\n  };\n  if (input.value === '') {\n    input.preventDefault();\n  }\n  taskList.push(task);\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.Storage)(taskList);\n  input.value = '';\n  (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__.populateList)(taskList);\n  return task;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);\n\n//# sourceURL=webpack://webpack-project/./modules/add.js?");

/***/ }),

/***/ "./modules/check.js":
/*!**************************!*\
  !*** ./modules/check.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst check = (checkbox, item) => {\n  if (checkbox.checked) {\n    checkbox.nextElementSibling.style.textDecoration = 'line-through';\n    item.completed = true;\n  } else {\n    checkbox.nextElementSibling.style.textDecoration = 'none';\n    item.completed = false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);\n\n//# sourceURL=webpack://webpack-project/./modules/check.js?");

/***/ }),

/***/ "./modules/iteration.js":
/*!******************************!*\
  !*** ./modules/iteration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst trashCompleted = () => {\n  const storedTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n\n  const uncompletedTask = storedTasks.filter(\n    (task) => task.completed === false,\n  );\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.Storage)(uncompletedTask);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trashCompleted);\n\n//# sourceURL=webpack://webpack-project/./modules/iteration.js?");

/***/ }),

/***/ "./modules/populate.js":
/*!*****************************!*\
  !*** ./modules/populate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList)\n/* harmony export */ });\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.js */ \"./modules/check.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./modules/remove.js\");\n\n\n\n\nconst populateList = () => {\n  const listContainer = document.querySelector('.to-do-list');\n\n  while (listContainer.lastChild) {\n    listContainer.removeChild(listContainer.lastChild);\n  }\n\n  const tasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getStorage)();\n\n  if (tasks != null) {\n    for (let i = 0; i < tasks.length; i += 1) {\n      const lists = document.createElement('li');\n      lists.classList.add('list');\n      lists.id = tasks[i].index;\n      lists.draggable = true;\n\n      const list1Child = document.createElement('div');\n      list1Child.classList.add('div');\n\n      const input = document.createElement('input');\n      input.classList.add('check');\n      input.type = 'checkbox';\n      input.name = 'check1';\n\n      if (tasks[i].completed) {\n        input.checked = true;\n      }\n\n      const label = document.createElement('label');\n      label.contentEditable = true;\n      label.classList.add('label');\n      label.innerHTML = tasks[i].description;\n      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';\n      label.style.color = '#000';\n\n      const trash = document.createElement('span');\n      trash.classList.add('bin');\n      trash.innerHTML = \"<i class='fas fa-trash-alt'></i>\";\n      trash.style.display = 'flex';\n      trash.style.cursor = 'pointer';\n      trash.id = tasks.indexOf(tasks[i]);\n\n      lists.appendChild(list1Child);\n      list1Child.appendChild(input);\n      list1Child.appendChild(label);\n      list1Child.appendChild(trash);\n      listContainer.appendChild(lists);\n\n      label.addEventListener('focus', () => {\n        trash.style.display = 'none';\n        trash.style.color = '#fff';\n        trash.style.cursor = 'pointer';\n        label.style.outline = 'none';\n      });\n\n      label.addEventListener('blur', (e) => {\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(e.target, tasks, tasks[i]);\n        populateList();\n      });\n\n      input.addEventListener('change', (e) => {\n        (0,_check_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target, tasks[i]);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.Storage)(tasks);\n      });\n\n      trash.addEventListener('mousedown', (e) => {\n        e.preventDefault();\n        (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(JSON.parse(trash.id));\n        populateList();\n      });\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateList);\n\n//# sourceURL=webpack://webpack-project/./modules/populate.js?");

/***/ }),

/***/ "./modules/remove.js":
/*!***************************!*\
  !*** ./modules/remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst trashTask = (taskIndex) => {\n  const storedTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n\n  const currentTasks = storedTasks.filter(\n    (index) => storedTasks.indexOf(index) !== taskIndex,\n  );\n\n  for (let i = 0; i < currentTasks.length; i += 1) {\n    currentTasks[i].index = currentTasks.indexOf(currentTasks[i]) + 1;\n  }\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.Storage)(currentTasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trashTask);\n\n//# sourceURL=webpack://webpack-project/./modules/remove.js?");

/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage)\n/* harmony export */ });\nconst Storage = (tasks) => {\n  localStorage.setItem('to-do-list', JSON.stringify(tasks));\n};\n\nconst getStorage = () => {\n  const lists = localStorage.getItem('to-do-list') ? JSON.parse(localStorage.getItem('to-do-list')) : [];\n  return lists;\n};\n\nconst editTask = (text, tasks, list) => {\n  const taskIndex = list.index;\n  const editTask = tasks[taskIndex - 1];\n\n  editTask.description = text.textContent;\n  Storage(tasks);\n  return editTask;\n};\n\n//# sourceURL=webpack://webpack-project/./modules/storage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.to-do {\\r\\n  max-width: 900px;\\r\\n  margin: 0 auto;\\r\\n  border: 1px solid rgba(128, 128, 128, 0.3);\\r\\n  margin-top: 100px;\\r\\n  box-shadow: 5px 5px 5px 5px #ece6e6;\\r\\n}\\r\\n\\r\\n.to-do .title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: 30px;\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.to-do .title h1 {\\r\\n  width: 300px;\\r\\n  padding: 10px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.title .fa-solid.fa-arrows-rotate {\\r\\n  margin-left: 160px;\\r\\n  padding: 10px;\\r\\n  margin-top: 3px;\\r\\n  color: rgba(128, 128, 128, 0.425);\\r\\n}\\r\\n\\r\\n.addbtn {\\r\\n  margin-left: 200px;\\r\\n}\\r\\n\\r\\n.to-do input {\\r\\n  border: 0;\\r\\n  height: 30px;\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.to-do input::placeholder {\\r\\n  font-style: italic;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.to-do input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.div {\\r\\n  padding: 1rem 1rem 0.5rem;\\r\\n  display: flex;\\r\\n  column-gap: 1rem;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n  background-color: blue;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  width: 270px;\\r\\n}\\r\\n\\r\\n.bin {\\r\\n  margin-left: 60px;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border: none;\\r\\n  height: 1px;\\r\\n  background-color: rgba(128, 128, 128, 0.3);\\r\\n}\\r\\n\\r\\nhr:last-child {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.to-do-list .delete-btn {\\r\\n  text-align: center;\\r\\n  padding: 10px 0;\\r\\n  background-color: rgba(128, 128, 128, 0.2);\\r\\n}\\r\\n\\r\\n.delete-btn span {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  color: rgba(128, 128, 128, 0.555);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/populate.js */ \"./modules/populate.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/add.js */ \"./modules/add.js\");\n/* harmony import */ var _modules_iteration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/iteration.js */ \"./modules/iteration.js\");\n\n\n\n\n\nconst addNewTaskInput = document.querySelector('#text');\nconst addTaskBtn = document.querySelector('.addbtn');\nconst removeCompletedTask = document.querySelector('.delete-btn');\n\naddTaskBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(addNewTaskInput);\n});\n\nremoveCompletedTask.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.populateList)();\n  (0,_modules_iteration_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\n  e.preventDefault();\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.populateList)();\n});\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);