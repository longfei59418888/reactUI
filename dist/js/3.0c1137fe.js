webpackJsonp([3],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_queue__ = __webpack_require__(224);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Comp = function (_React$Component) {
    _inherits(Comp, _React$Component);

    function Comp() {
        _classCallCheck(this, Comp);

        return _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).call(this));
    }

    _createClass(Comp, [{
        key: 'render',
        value: function render() {

            return _jsx(__WEBPACK_IMPORTED_MODULE_3__util_queue__["a" /* default */], {
                style: { height: 50 }
            }, void 0, _jsx('div', {
                style: { height: 40 }
            }, void 0, 'asdfas'), _jsx('div', {
                style: { height: 40 }
            }, void 0, 'asadsfasdffas'), _jsx('div', {
                style: { height: 40 }
            }, void 0, 'asdadsfasdffas'));
        }
    }]);

    return Comp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Comp);(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/queue/index.jsx");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/queue/index.jsx");
        }
    }
})();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(195)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-2!../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--4-2!../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes am_queue_frame {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); } }\n\n@keyframes am_queue_frame {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); } }\n\n.am_queue_common_box {\n  position: relative;\n  overflow: hidden; }\n  .am_queue_common_box.init {\n    height: 0; }\n  .am_queue_common_box .am_queue_content.action {\n    -webkit-animation: am_queue_frame 5s linear infinite;\n            animation: am_queue_frame 5s linear infinite; }\n", ""]);

// exports


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Comp = function (_React$Component) {
    _inherits(Comp, _React$Component);

    function Comp() {
        _classCallCheck(this, Comp);

        var _this = _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).call(this));

        _this.state = {
            isActive: false,
            init: true
        };
        _this.updateState = true;
        return _this;
    }

    _createClass(Comp, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            setTimeout(function () {
                _this2.queue();
            }, 100);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, state) {
            if (this.props.children == nextProps.children) this.updateState = false;else {
                this.updateState = true;
            }
            return true;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.boxHeight = 0;
            this.box = this.refs['am_queue_common_box'];
            this.contentBox = this.refs['am_queue_content'];
            setTimeout(function () {
                _this3.queue();
            }, 100);
        }
    }, {
        key: 'queue',
        value: function queue() {
            var contentHeight = this.contentBox.offsetHeight;
            var boxHeight = this.box.offsetHeight;
            if (!this.updateState && this.boxHeight != 0 && this.boxHeight == this.box.offsetHeight) return;
            this.boxHeight = boxHeight;
            if (contentHeight < 1) {
                this.setState({
                    init: true
                });
                return;
            } else {
                this.setState({
                    init: false
                });
            }
            console.log(boxHeight, contentHeight);

            if (contentHeight < boxHeight + 5) {
                this.setState({
                    isActive: false
                });
            } else {
                this.setState({
                    isActive: true
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { ref: 'am_queue_common_box', style: this.props.style, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('am_queue_common_box', this.props.className, { 'init': this.state.init }) },
                _jsx('div', {
                    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('am_queue_content', { 'action': this.state.isActive })
                }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { ref: 'am_queue_content' },
                    this.props.children
                ), _jsx('div', {}, void 0, this.props.children))
            );
        }
    }]);

    return Comp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Comp);(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/queue/index.jsx");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/queue/index.jsx");
        }
    }
})();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(195)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--4-2!../../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--4-2!../../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes am_queue_frame {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); } }\n\n@keyframes am_queue_frame {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); } }\n\n.am_queue_common_box {\n  position: relative;\n  overflow: hidden; }\n  .am_queue_common_box.init {\n    height: 0; }\n  .am_queue_common_box .am_queue_content.action {\n    -webkit-animation: am_queue_frame 5s linear infinite;\n            animation: am_queue_frame 5s linear infinite; }\n", ""]);

// exports


/***/ })

});