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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_block_js__ = __webpack_require__(/*! ./swiper/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9zd2lwZXIvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/swiper/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_swiper_slide__ = __webpack_require__(/*! ./components/swiper-slide */ 4);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: mt-swiper-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Component = wp.element.Component;\nvar _wp$blockEditor = wp.blockEditor,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    ToggleControl = _wp$components.ToggleControl;\n\n\nregisterBlockType('cgb/block-mt-swiper-block', {\n\ttitle: __('mt-swiper-block - CGB Block'),\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('mt-swiper-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\timages: {\n\t\t\ttype: Array,\n\t\t\tdefault: []\n\t\t},\n\t\tshowImageTitles: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: true\n\t\t}\n\t},\n\n\tedit: function (_Component) {\n\t\t_inherits(edit, _Component);\n\n\t\tfunction edit() {\n\t\t\tvar _ref;\n\n\t\t\t_classCallCheck(this, edit);\n\n\t\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\t\targs[_key] = arguments[_key];\n\t\t\t}\n\n\t\t\tvar _this = _possibleConstructorReturn(this, (_ref = edit.__proto__ || Object.getPrototypeOf(edit)).call.apply(_ref, [this].concat(args)));\n\n\t\t\t_this.addSlide = _this.addSlide.bind(_this);\n\t\t\t_this.removeSlide = _this.removeSlide.bind(_this);\n\t\t\t_this.toggleImageTitles = _this.toggleImageTitles.bind(_this);\n\t\t\t_this.sliderRef = React.createRef();\n\t\t\treturn _this;\n\t\t}\n\n\t\t_createClass(edit, [{\n\t\t\tkey: 'initSwipers',\n\t\t\tvalue: function initSwipers() {\n\t\t\t\tif (window.Swiper === undefined || Swiper === undefined) {\n\t\t\t\t\tconsole.error('MT Swiper Block error: Swiper is not defined');\n\t\t\t\t} else {\n\t\t\t\t\tvar mtSwiperBlock = new Swiper(this.sliderRef.current, {\n\t\t\t\t\t\tloop: false,\n\t\t\t\t\t\tautoplay: false,\n\t\t\t\t\t\tobserver: true,\n\t\t\t\t\t\tobserveSlideChildren: true\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'componentDidMount',\n\t\t\tvalue: function componentDidMount() {\n\t\t\t\tthis.initSwipers();\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'addSlide',\n\t\t\tvalue: function addSlide(media) {\n\t\t\t\tthis.props.setAttributes({ images: [].concat(_toConsumableArray(this.props.attributes.images), [media]) });\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'removeSlide',\n\t\t\tvalue: function removeSlide(mediaId) {\n\t\t\t\tvar _props = this.props,\n\t\t\t\t    setAttributes = _props.setAttributes,\n\t\t\t\t    images = _props.attributes.images;\n\n\t\t\t\tvar filteredImages = images.filter(function (image) {\n\t\t\t\t\treturn image.id !== mediaId;\n\t\t\t\t});\n\t\t\t\tsetAttributes({ images: filteredImages });\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'toggleImageTitles',\n\t\t\tvalue: function toggleImageTitles(bool) {\n\t\t\t\tthis.props.setAttributes({ showImageTitles: bool });\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'render',\n\t\t\tvalue: function render() {\n\t\t\t\tvar _this2 = this;\n\n\t\t\t\tvar _props$attributes = this.props.attributes,\n\t\t\t\t    showImageTitles = _props$attributes.showImageTitles,\n\t\t\t\t    images = _props$attributes.images;\n\n\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tInspectorControls,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t\t{ title: __('Carousel slides') + ' (total: ' + images.length + ')' },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\tMediaUploadCheck,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\t\t\t\t\tonSelect: this.addSlide,\n\t\t\t\t\t\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'mt-inspectorcontrols-btn', onClick: open },\n\t\t\t\t\t\t\t\t\t\t\t\t__('Add a slide')\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t\t{ title: __('Carousel options') },\n\t\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\t\tlabel: 'Show slide images\\' titles?',\n\t\t\t\t\t\t\t\tchecked: showImageTitles,\n\t\t\t\t\t\t\t\tonChange: this.toggleImageTitles\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'swiper-container js-mt-swiper-block c-mt-swiper-block', ref: this.sliderRef },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'swiper-wrapper' },\n\t\t\t\t\t\t\timages.length > 0 ? images.map(function (_ref3) {\n\t\t\t\t\t\t\t\tvar title = _ref3.title,\n\t\t\t\t\t\t\t\t    id = _ref3.id,\n\t\t\t\t\t\t\t\t    url = _ref3.url;\n\t\t\t\t\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_swiper_slide__[\"a\" /* default */], {\n\t\t\t\t\t\t\t\t\tkey: id,\n\t\t\t\t\t\t\t\t\tisAdmin: true,\n\t\t\t\t\t\t\t\t\timgUrl: url,\n\t\t\t\t\t\t\t\t\timgId: id,\n\t\t\t\t\t\t\t\t\timgCaption: title,\n\t\t\t\t\t\t\t\t\tshowCaptions: showImageTitles,\n\t\t\t\t\t\t\t\t\tremoveSlide: _this2.removeSlide\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}) : __('Please edit this block and add some images first!')\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t}]);\n\n\t\treturn edit;\n\t}(Component),\n\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    images = _props$attributes2.images,\n\t\t    showImageTitles = _props$attributes2.showImageTitles;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'swiper-container js-mt-swiper-block mt-slider' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'swiper-wrapper mt-slider__wrapper' },\n\t\t\t\timages.length > 0 ? images.map(function (_ref4) {\n\t\t\t\t\tvar url = _ref4.url,\n\t\t\t\t\t    title = _ref4.title;\n\t\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_swiper_slide__[\"a\" /* default */], {\n\t\t\t\t\t\tisAdmin: false,\n\t\t\t\t\t\timgUrl: url,\n\t\t\t\t\t\timgCaption: title,\n\t\t\t\t\t\tshowCaptions: showImageTitles\n\t\t\t\t\t});\n\t\t\t\t}) : __('Please edit this block and add some images first!')\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zd2lwZXIvYmxvY2suanM/ZTNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEJMT0NLOiBtdC1zd2lwZXItYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IFN3aXBlclNsaWRlIGZyb20gJy4vY29tcG9uZW50cy9zd2lwZXItc2xpZGUnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50O1xudmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWRDaGVjayxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRibG9ja0VkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stbXQtc3dpcGVyLWJsb2NrJywge1xuXHR0aXRsZTogX18oJ210LXN3aXBlci1ibG9jayAtIENHQiBCbG9jaycpLFxuXHRpY29uOiAnc2hpZWxkJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdtdC1zd2lwZXItYmxvY2sg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdGltYWdlczoge1xuXHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH0sXG5cdFx0c2hvd0ltYWdlVGl0bGVzOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRcdF9pbmhlcml0cyhlZGl0LCBfQ29tcG9uZW50KTtcblxuXHRcdGZ1bmN0aW9uIGVkaXQoKSB7XG5cdFx0XHR2YXIgX3JlZjtcblxuXHRcdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIGVkaXQpO1xuXG5cdFx0XHRmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHRcdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IGVkaXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihlZGl0KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cblx0XHRcdF90aGlzLmFkZFNsaWRlID0gX3RoaXMuYWRkU2xpZGUuYmluZChfdGhpcyk7XG5cdFx0XHRfdGhpcy5yZW1vdmVTbGlkZSA9IF90aGlzLnJlbW92ZVNsaWRlLmJpbmQoX3RoaXMpO1xuXHRcdFx0X3RoaXMudG9nZ2xlSW1hZ2VUaXRsZXMgPSBfdGhpcy50b2dnbGVJbWFnZVRpdGxlcy5iaW5kKF90aGlzKTtcblx0XHRcdF90aGlzLnNsaWRlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXHRcdFx0cmV0dXJuIF90aGlzO1xuXHRcdH1cblxuXHRcdF9jcmVhdGVDbGFzcyhlZGl0LCBbe1xuXHRcdFx0a2V5OiAnaW5pdFN3aXBlcnMnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIGluaXRTd2lwZXJzKCkge1xuXHRcdFx0XHRpZiAod2luZG93LlN3aXBlciA9PT0gdW5kZWZpbmVkIHx8IFN3aXBlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignTVQgU3dpcGVyIEJsb2NrIGVycm9yOiBTd2lwZXIgaXMgbm90IGRlZmluZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbXRTd2lwZXJCbG9jayA9IG5ldyBTd2lwZXIodGhpcy5zbGlkZXJSZWYuY3VycmVudCwge1xuXHRcdFx0XHRcdFx0bG9vcDogZmFsc2UsXG5cdFx0XHRcdFx0XHRhdXRvcGxheTogZmFsc2UsXG5cdFx0XHRcdFx0XHRvYnNlcnZlcjogdHJ1ZSxcblx0XHRcdFx0XHRcdG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHRcdHRoaXMuaW5pdFN3aXBlcnMoKTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdhZGRTbGlkZScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gYWRkU2xpZGUobWVkaWEpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaW1hZ2VzOiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMucHJvcHMuYXR0cmlidXRlcy5pbWFnZXMpLCBbbWVkaWFdKSB9KTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdyZW1vdmVTbGlkZScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlU2xpZGUobWVkaWFJZCkge1xuXHRcdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHRcdFx0ICAgIGltYWdlcyA9IF9wcm9wcy5hdHRyaWJ1dGVzLmltYWdlcztcblxuXHRcdFx0XHR2YXIgZmlsdGVyZWRJbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0XHRcdHJldHVybiBpbWFnZS5pZCAhPT0gbWVkaWFJZDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBpbWFnZXM6IGZpbHRlcmVkSW1hZ2VzIH0pO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ3RvZ2dsZUltYWdlVGl0bGVzJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVJbWFnZVRpdGxlcyhib29sKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7IHNob3dJbWFnZVRpdGxlczogYm9vbCB9KTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHQgICAgc2hvd0ltYWdlVGl0bGVzID0gX3Byb3BzJGF0dHJpYnV0ZXMuc2hvd0ltYWdlVGl0bGVzLFxuXHRcdFx0XHQgICAgaW1hZ2VzID0gX3Byb3BzJGF0dHJpYnV0ZXMuaW1hZ2VzO1xuXG5cblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHRcdFx0XHR7IHRpdGxlOiBfXygnQ2Fyb3VzZWwgc2xpZGVzJykgKyAnICh0b3RhbDogJyArIGltYWdlcy5sZW5ndGggKyAnKScgfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0TWVkaWFVcGxvYWRDaGVjayxcblx0XHRcdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q6IHRoaXMuYWRkU2xpZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ210LWluc3BlY3RvcmNvbnRyb2xzLWJ0bicsIG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBZGQgYSBzbGlkZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRcdFx0eyB0aXRsZTogX18oJ0Nhcm91c2VsIG9wdGlvbnMnKSB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnU2hvdyBzbGlkZSBpbWFnZXNcXCcgdGl0bGVzPycsXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZDogc2hvd0ltYWdlVGl0bGVzLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLnRvZ2dsZUltYWdlVGl0bGVzXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnc3dpcGVyLWNvbnRhaW5lciBqcy1tdC1zd2lwZXItYmxvY2sgYy1tdC1zd2lwZXItYmxvY2snLCByZWY6IHRoaXMuc2xpZGVyUmVmIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N3aXBlci13cmFwcGVyJyB9LFxuXHRcdFx0XHRcdFx0XHRpbWFnZXMubGVuZ3RoID4gMCA/IGltYWdlcy5tYXAoZnVuY3Rpb24gKF9yZWYzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRpdGxlID0gX3JlZjMudGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGlkID0gX3JlZjMuaWQsXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHVybCA9IF9yZWYzLnVybDtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk6IGlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNBZG1pbjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdGltZ1VybDogdXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nSWQ6IGlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nQ2FwdGlvbjogdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FwdGlvbnM6IHNob3dJbWFnZVRpdGxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZVNsaWRlOiBfdGhpczIucmVtb3ZlU2xpZGVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSkgOiBfXygnUGxlYXNlIGVkaXQgdGhpcyBibG9jayBhbmQgYWRkIHNvbWUgaW1hZ2VzIGZpcnN0IScpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1dKTtcblxuXHRcdHJldHVybiBlZGl0O1xuXHR9KENvbXBvbmVudCksXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlczIgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBpbWFnZXMgPSBfcHJvcHMkYXR0cmlidXRlczIuaW1hZ2VzLFxuXHRcdCAgICBzaG93SW1hZ2VUaXRsZXMgPSBfcHJvcHMkYXR0cmlidXRlczIuc2hvd0ltYWdlVGl0bGVzO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3N3aXBlci1jb250YWluZXIganMtbXQtc3dpcGVyLWJsb2NrIG10LXNsaWRlcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc3dpcGVyLXdyYXBwZXIgbXQtc2xpZGVyX193cmFwcGVyJyB9LFxuXHRcdFx0XHRpbWFnZXMubGVuZ3RoID4gMCA/IGltYWdlcy5tYXAoZnVuY3Rpb24gKF9yZWY0KSB7XG5cdFx0XHRcdFx0dmFyIHVybCA9IF9yZWY0LnVybCxcblx0XHRcdFx0XHQgICAgdGl0bGUgPSBfcmVmNC50aXRsZTtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCB7XG5cdFx0XHRcdFx0XHRpc0FkbWluOiBmYWxzZSxcblx0XHRcdFx0XHRcdGltZ1VybDogdXJsLFxuXHRcdFx0XHRcdFx0aW1nQ2FwdGlvbjogdGl0bGUsXG5cdFx0XHRcdFx0XHRzaG93Q2FwdGlvbnM6IHNob3dJbWFnZVRpdGxlc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSA6IF9fKCdQbGVhc2UgZWRpdCB0aGlzIGJsb2NrIGFuZCBhZGQgc29tZSBpbWFnZXMgZmlyc3QhJylcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zd2lwZXIvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/swiper/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zd2lwZXIvZWRpdG9yLnNjc3M/MGNkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N3aXBlci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/swiper/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zd2lwZXIvc3R5bGUuc2Nzcz9lMzJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3dpcGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** ./src/swiper/components/swiper-slide.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var __ = wp.i18n.__;\n\n\nvar SwiperSlide = function SwiperSlide(props) {\n\treturn wp.element.createElement(\n\t\t\"figure\",\n\t\t{ className: \"swiper-slide mt-slider__slide\" },\n\t\tprops.isAdmin ? wp.element.createElement(\n\t\t\t\"button\",\n\t\t\t{ className: \"mt-slider__delete\", onClick: function onClick() {\n\t\t\t\t\treturn props.removeSlide(props.imgId);\n\t\t\t\t} },\n\t\t\t__('❌')\n\t\t) : '',\n\t\twp.element.createElement(\"img\", { src: props.imgUrl, className: \"mt-slider__img\" }),\n\t\tprops.showCaptions ? wp.element.createElement(\n\t\t\t\"figcaption\",\n\t\t\t{ className: \"mt-slider__caption\" },\n\t\t\tprops.imgCaption\n\t\t) : ''\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SwiperSlide);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zd2lwZXIvY29tcG9uZW50cy9zd2lwZXItc2xpZGUuanM/YmI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xuXG5cbnZhciBTd2lwZXJTbGlkZSA9IGZ1bmN0aW9uIFN3aXBlclNsaWRlKHByb3BzKSB7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJmaWd1cmVcIixcblx0XHR7IGNsYXNzTmFtZTogXCJzd2lwZXItc2xpZGUgbXQtc2xpZGVyX19zbGlkZVwiIH0sXG5cdFx0cHJvcHMuaXNBZG1pbiA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJtdC1zbGlkZXJfX2RlbGV0ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9wcy5yZW1vdmVTbGlkZShwcm9wcy5pbWdJZCk7XG5cdFx0XHRcdH0gfSxcblx0XHRcdF9fKCfinYwnKVxuXHRcdCkgOiAnJyxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHByb3BzLmltZ1VybCwgY2xhc3NOYW1lOiBcIm10LXNsaWRlcl9faW1nXCIgfSksXG5cdFx0cHJvcHMuc2hvd0NhcHRpb25zID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJmaWdjYXB0aW9uXCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJtdC1zbGlkZXJfX2NhcHRpb25cIiB9LFxuXHRcdFx0cHJvcHMuaW1nQ2FwdGlvblxuXHRcdCkgOiAnJ1xuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVyU2xpZGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3dpcGVyL2NvbXBvbmVudHMvc3dpcGVyLXNsaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);