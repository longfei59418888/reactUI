webpackJsonp([5],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _ref = _jsx('h1', {}, void 0, 'Scroller\u5C5E\u6027\uFF1A');

var _ref2 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'init '), ': ', '{x,y}', ',\u4F20\u5165\u521D\u59CB\u4F4D\u7F6E\u3002');

var _ref3 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'leaveBefor '), ': ', '(Scroller[当前Scroller组件]', '\uFF0C\u79BB\u5F00\u9875\u9762\u6216\u8005\u6CE8\u9500\u5F53\u524DScroller\u7EC4\u4EF6\uFF0C\u8BBE\u7F6E\u5F53\u671F\u6EDA\u52A8\u7684\u4F4D\u7F6E');

var _ref4 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'onRefresh '), ': ', '(Scroller,bak[刷新完成函数,true为结束])', ',\u4E0B\u62C9\u5237\u65B0');

var _ref5 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'onLoadMore '), ': ', '(Scroller,bak[当前加载完成函数,true为结束])', ',\u4E0A\u62C9\u52A0\u8F7D');

var ComContainer = function (_React$Component) {
    _inherits(ComContainer, _React$Component);

    function ComContainer() {
        _classCallCheck(this, ComContainer);

        var _this = _possibleConstructorReturn(this, (ComContainer.__proto__ || Object.getPrototypeOf(ComContainer)).call(this));

        _this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
            index: 0
        };
        return _this;
    }

    _createClass(ComContainer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min___default.a,
                {
                    ref: 'scroller',
                    init: { x: 0, y: 0 },
                    leaveBefor: function leaveBefor(scroller) {
                        console.log(scroller);
                    },
                    onRefresh: function onRefresh(scroller, bak) {
                        alert('开始刷新');
                        setTimeout(function () {
                            alert('刷新完成');
                            bak(false);
                        }, 3000);
                    },
                    onLoadMore: function onLoadMore(scroller, bak) {
                        alert('开始加载');
                        setTimeout(function () {
                            alert('加载完成');
                            bak(true);
                        }, 3000);
                    }
                },
                _jsx('div', {}, void 0, _jsx('div', {
                    className: 'show-info'
                }, void 0, _jsx('div', {
                    style: { height: 1 }
                }), _ref, _ref2, _ref3, _ref4, _ref5, _jsx('img', {
                    src: __webpack_require__(221),
                    alt: ''
                })), _jsx('ul', {}, void 0, this.state.list.map(function (item) {
                    return _jsx('li', {}, void 0, item);
                })))
            );
        }
    }]);

    return ComContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ComContainer);(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/iscroll/index.jsx");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/iscroll/index.jsx");
        }
    }
})();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/test.e9f44292.png";

/***/ })

});