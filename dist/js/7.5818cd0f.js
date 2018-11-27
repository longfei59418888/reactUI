webpackJsonp([7],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lazy_route__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lazy_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lazy_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__util_iscroll_index_min___default.a, {}, void 0, _jsx("div", {
    className: "home"
}, void 0, _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/phoneverify"
}, void 0, "\u624B\u673A\u9A8C\u8BC1\u7801")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/modal"
}, void 0, "\u5F39\u51FA\u5C42")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/switchtabs"
}, void 0, "switchtabs,\u5207\u6362\u663E\u793A")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/switchtabs"
}, void 0, "switchtabs,\u5207\u6362\u663E\u793A")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/iscroll"
}, void 0, "iscroll")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/queue"
}, void 0, "Queue")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/form"
}, void 0, "form")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/decorator"
}, void 0, "decorator")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/charts"
}, void 0, "charts")), _jsx("div", {
    className: "home-item"
}, void 0, _jsx("a", {
    href: "/test"
}, void 0, "test"))));

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return _jsx("div", {
                style: { position: 'absolute', width: '100%', height: '100%' }
            }, void 0, _ref);
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/home.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/home.js");
        }
    }
})();

/***/ })

});