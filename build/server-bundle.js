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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.dev.js":
/*!*******************************!*\
  !*** ./config/webpack.dev.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar HTMLWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = function (env) {\n\treturn {\n\t\tentry: {\n\t\t\tmain: ['babel-runtime/regenerator', 'babel-register', 'webpack-hot-middleware/client?reload=true', './src/main.js']\n\t\t},\n\t\tmode: 'development',\n\t\toutput: {\n\t\t\tfilename: '[name]-bundle.js',\n\t\t\tpath: path.resolve(__dirname, '../dist'),\n\t\t\tpublicPath: '/'\n\t\t},\n\t\tdevServer: {\n\t\t\tcontentBase: 'dist',\n\t\t\toverlay: true,\n\t\t\tstats: {\n\t\t\t\tcolors: true\n\t\t\t}\n\t\t},\n\t\toptimization: {\n\t\t\tsplitChunks: {\n\t\t\t\tchunks: 'all',\n\t\t\t\tcacheGroups: {\n\t\t\t\t\tvendor: {\n\t\t\t\t\t\tname: 'vender',\n\t\t\t\t\t\tchunks: 'initial',\n\t\t\t\t\t\tminChunks: 2\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\tdevtool: 'source-map',\n\t\tmodule: {\n\t\t\trules: [{\n\t\t\t\ttest: /\\.js$/,\n\t\t\t\texclude: /node_modules/,\n\t\t\t\tuse: [{\n\t\t\t\t\tloader: 'babel-loader'\n\t\t\t\t}]\n\t\t\t}, {\n\t\t\t\ttest: /\\.s?css$/,\n\t\t\t\tinclude: /global\\.s?css$/,\n\t\t\t\tuse: [{\n\t\t\t\t\tloader: 'style-loader'\n\t\t\t\t}, {\n\t\t\t\t\tloader: 'css-loader',\n\t\t\t\t\toptions: {\n\t\t\t\t\t\tmodules: false,\n\t\t\t\t\t\tlocalIdentName: '[name]__[local]--[hash:8]'\n\t\t\t\t\t}\n\t\t\t\t}, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]\n\t\t\t}, {\n\t\t\t\ttest: /\\.s?css$/,\n\t\t\t\texclude: /global\\.s?css$/,\n\t\t\t\tuse: [{\n\t\t\t\t\tloader: 'style-loader'\n\t\t\t\t}, {\n\t\t\t\t\tloader: 'css-loader',\n\t\t\t\t\toptions: {\n\t\t\t\t\t\tmodules: true,\n\t\t\t\t\t\tlocalIdentName: '[name]__[local]--[hash:8]'\n\t\t\t\t\t}\n\t\t\t\t}, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]\n\t\t\t}, {\n\t\t\t\ttest: /\\.(jpg|jpeg|png|gif)$/,\n\t\t\t\tuse: [{\n\t\t\t\t\tloader: 'file-loader',\n\t\t\t\t\toptions: {\n\t\t\t\t\t\tname: 'images/[name].[ext]'\n\t\t\t\t\t}\n\t\t\t\t}]\n\t\t\t}, {\n\t\t\t\ttest: /\\.html$/,\n\t\t\t\tuse: [{\n\t\t\t\t\tloader: 'html-loader'\n\t\t\t\t}]\n\t\t\t}]\n\t\t},\n\t\tplugins: [new webpack.HotModuleReplacementPlugin(), new HTMLWebpackPlugin({\n\t\t\ttemplate: './src/index.html'\n\t\t}), new webpack.DefinePlugin({\n\t\t\t'process.env': {\n\t\t\t\tNODE_ENV: (0, _stringify2.default)(env.NODE_ENV)\n\t\t\t}\n\t\t})]\n\t};\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./config/webpack.dev.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/server/express.js":
/*!*******************************!*\
  !*** ./src/server/express.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {\n\n(function () {\n\tvar enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n\tenterModule && enterModule(module);\n})();\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({ path: __dirname + '/../../.env' });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar server = express();\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\n/** --------------- WEBPACK --------------- */\n\nvar isProd = \"development\".trim() === 'production';\n\nif (!isProd) {\n\tvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\tvar config = __webpack_require__(/*! ../../config/webpack.dev.js */ \"./config/webpack.dev.js\")({\n\t\tNODE_ENV: \"development\".trim()\n\t});\n\tvar compiler = webpack(config);\n\n\tvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, config.devServer);\n\n\tvar webpackHotMiddlware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler, config.devServer);\n\n\tserver.use(webpackDevMiddleware);\n\tserver.use(webpackHotMiddlware);\n\tconsole.log('Webpack hot reload enabled');\n}\n\n/** --------------- Routes --------------- */\n\n// const staticMiddleware = express.static('dist');\n// server.use(staticMiddleware);\n\nvar staticGzip = __webpack_require__(/*! express-static-gzip */ \"express-static-gzip\");\nserver.use(staticGzip('dist'));\n\nserver.get('/*', function (req, res) {\n\tvar html = ReactDOMServer.renderToString('../html.js');\n\tres.setHeader('content-type', 'text/html');\n\tres.status(200).send(html);\n});\n\n/** --------------- --------------- */\n\nvar PORT = process.env.PORT || 8080;\nserver.listen(PORT, function () {\n\tconsole.log(\"development\".toUpperCase() + ' server listening on http://localhost:' + PORT);\n});\n;\n\n(function () {\n\tvar reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n\tvar leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n\tif (!reactHotLoader) {\n\t\treturn;\n\t}\n\n\treactHotLoader.register(server, 'server', 'C:/Users/agustin_martinez/Desktop/webpack2/webpack-course/src/server/express.js');\n\treactHotLoader.register(isProd, 'isProd', 'C:/Users/agustin_martinez/Desktop/webpack2/webpack-course/src/server/express.js');\n\treactHotLoader.register(PORT, 'PORT', 'C:/Users/agustin_martinez/Desktop/webpack2/webpack-course/src/server/express.js');\n\tleaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), \"/\"))\n\n//# sourceURL=webpack:///./src/server/express.js?");

/***/ }),

/***/ "./src/server/main.js":
/*!****************************!*\
  !*** ./src/server/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-register */ \"babel-register\");\n__webpack_require__(/*! ./express */ \"./src/server/express.js\");\n\n//# sourceURL=webpack:///./src/server/main.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/server/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/main.js */\"./src/server/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/main.js?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack:///external_%22babel-register%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-static-gzip":
/*!**************************************!*\
  !*** external "express-static-gzip" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-static-gzip\");\n\n//# sourceURL=webpack:///external_%22express-static-gzip%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });