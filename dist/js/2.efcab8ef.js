webpackJsonp([2],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_phoneVerify__ = __webpack_require__(210);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__util_phoneVerify__["a" /* default */], {
  number: '434'
});

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx('div', {
        style: { border: '1px solid #ccc', margin: '10px' }
      }, void 0, _ref));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);




;(function register() {
  /* react-hot-loader/webpack */if (false) {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/phoneVerify/index.jsx");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/phoneVerify/index.jsx");
    }
  }
})();

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_verify_phone_number_png__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_verify_phone_number_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_verify_phone_number_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_verify_phone_code_png__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_verify_phone_code_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_verify_phone_code_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__validate__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__webpack_require__(214);
/*
* 手机验证
* */

var _ref = _jsx('p', {
    className: 'icon-box'
}, void 0, _jsx('img', {
    src: __WEBPACK_IMPORTED_MODULE_3__images_verify_phone_number_png___default.a,
    alt: ''
}));

var _ref2 = _jsx('p', {
    className: 'icon-box'
}, void 0, _jsx('img', {
    src: __WEBPACK_IMPORTED_MODULE_4__images_verify_phone_code_png___default.a,
    alt: ''
}));

var Comp = function (_React$Component) {
    _inherits(Comp, _React$Component);

    function Comp() {
        _classCallCheck(this, Comp);

        var _this = _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).call(this));

        _this.state = {
            verifyIng: false,
            time: 61
        };
        return _this;
    }

    _createClass(Comp, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                number = _props.number,
                url = _props.url;

            return _jsx('div', {
                className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('xl-phone-verify', className)
            }, void 0, _jsx('div', {
                className: 'xl-phone-verify-item'
            }, void 0, _ref, _jsx('p', {
                className: 'input-box'
            }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { disabled: true, ref: 'phone', defaultValue: number, type: 'number', placeholder: '\u8F93\u5165\u624B\u673A\u53F7\u7801' }))), _jsx('div', {
                className: 'xl-phone-verify-item'
            }, void 0, _jsx('div', {
                className: 'code-box'
            }, void 0, _ref2, _jsx('p', {
                className: 'input-box'
            }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { ref: 'code', type: 'number', placeholder: '\u8F93\u5165\u9A8C\u8BC1\u7801' }))), _jsx('p', {
                onClick: this.sendVerify.bind(this),
                style: { color: this.state.time < 61 ? '#ccc' : '#3B7ED1' },
                className: 'get-verify-btn'
            }, void 0, this.state.time < 61 ? this.state.time + '后重新获取' : '获取验证码')));
        }
    }, {
        key: 'sendVerify',
        value: function sendVerify() {
            var _this2 = this;

            if (this.state.time < 61) return;
            var phone = this.refs.phone.value;
            if (!__WEBPACK_IMPORTED_MODULE_5__validate___default.a.isMobile(phone) || phone.length < 1) {
                StaticToast.error('请输入正确的手机号！');
                return;
            }
            this.setState({ time: this.state.time - 1 });
            var loop = setInterval(function () {
                _this2.setState({ time: _this2.state.time - 1 });
                if (_this2.state.time < 1) {
                    clearInterval(loop);
                    _this2.setState({ time: 61 });
                };
            }, 1000);
            this.props.sendCode(phone);
        }
    }]);

    return Comp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Comp);(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/phoneVerify/index.jsx");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/phoneVerify/index.jsx");
        }
    }
})();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/verify-phone-number.13a1cc5b.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/verify-phone-code.f7dcdcef.png";

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var MOBILE_REG = /^1[3|4|5|8|7|9][0-9]\d{8}$/,
    EMAIL_REG = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/,
    MONEY_REG = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/,
    NAME_REG = /^([\u4e00-\u9fa5]+|[a-zA-Z0-9]+)$/,
    CH_NAME_REG = /[\u4e00-\u9fa5][\u4e00-\u9fa5]+/,
    PWD_REG = /(\d(?!\d{5})|[A-Za-z](?![A-Za-z]{5})){6}/,
    HKMACAO_REG = /^[CHMhm]{1}([0-9]{10}|[0-9]{8})$/,
    TAIWAN_REG = /^[0-9]{8,10}$/,
    BIRTH_REG = /^[A-Z]{1}\d{9}$/,
    PASSPORT_REG = /^[a-zA-Z0-9]{5,17}$/,
    UA = window.navigator.userAgent.toLowerCase();

function isRule(regText, value) {
    if (!value || value.length == 0) return true;

    var reg = new RegExp(regText);
    if (!reg.test(value)) {
        return false;
    }
    return true;
}

module.exports = {
    isIos: function isIos() {
        var userAgent = navigator.userAgent;
        var IsiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return IsiOS;
    },
    isFromWeixin: function isFromWeixin() {
        return UA.match(/MicroMessenger/i);
    },

    isFromZA: function isFromZA() {
        return UA.match(/ZhongAnWebView/i);
    },

    isMobile: function isMobile(mobile) {
        return isRule(MOBILE_REG, mobile);
    },

    isEmail: function isEmail(email) {
        return isRule(EMAIL_REG, email);
    },

    isMoney: function isMoney(money) {
        return isRule(MONEY_REG, money);
    },
    isChName: function isChName(name) {
        return isRule(CH_NAME_REG, name);
    },
    isUsername: function isUsername(name) {
        return isRule(NAME_REG, name);
    },

    isEmpty: function isEmpty(data) {
        return !(data && data.length > 0);
    },

    isPwd: function isPwd(pwd) {
        return isRule(PWD_REG, pwd);
    },
    isSame: function isSame(data1, data2) {
        return data1 === data2;
    },
    isHKMacao: function isHKMacao(val) {
        return isRule(HKMACAO_REG, val);
    },
    isTaiwan: function isTaiwan(val) {
        return isRule(TAIWAN_REG, val);
    },
    isPassport: function isPassport(val) {
        return isRule(PASSPORT_REG, val);
    },
    isBirth: function isBirth(val) {
        return isRule(BIRTH_REG, val);
    },

    isIdCard: function isIdCard(card) {
        if (!card) return true;
        var num = card.toUpperCase();
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
        if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
            return false;
        }
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 下面分别分析出生日期和校验位
        var len, re;
        var birthday, sex;
        len = num.length;
        if (len == 15) {

            //获取出生日期
            birthday = '19' + card.substring(6, 8) + "-" + card.substring(8, 10) + "-" + card.substring(10, 12);
            //获取性别
            sex = parseInt(card.substr(14, 1)) % 2 == 1 ? 'M' : 'F';

            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
            var arrSplit = num.match(re);

            //检查生日日期是否正确
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
            var bGoodDay;
            bGoodDay = dtmBirth.getYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
            if (!bGoodDay) {
                return false;
            } else {
                //将15位身份证转成18位 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var valnum;
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var nTemp = 0,
                    i;

                num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
                for (i = 0; i < 17; i++) {
                    nTemp += num.substr(i, 1) * arrInt[i];
                }
                num += arrCh[nTemp % 11];
            }
        } else if (len == 18) {

            //获取出生日期
            birthday = card.substring(6, 10) + "-" + card.substring(10, 12) + "-" + card.substring(12, 14);
            //获取性别
            sex = parseInt(card.substr(16, 1)) % 2 == 1 ? 'M' : 'F';

            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
            var arrSplit = num.match(re);

            //检查生日日期是否正确
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
            var bGoodDay;
            bGoodDay = dtmBirth.getFullYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
            if (!bGoodDay) {
                return false;
            } else {
                //检验18位身份证的校验码是否正确。 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var valnum;
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var nTemp = 0,
                    i;
                for (i = 0; i < 17; i++) {
                    nTemp += num.substr(i, 1) * arrInt[i];
                }
                valnum = arrCh[nTemp % 11];
                if (valnum != num.substr(17, 1)) {
                    return false;
                }
            }
        }
        return { birthday: birthday, sex: sex };
    }

};(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/validate.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/validate.js");
        }
    }
})();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml, body, #app, .main-wrap {\n  height: 100%;\n  width: 100%; }\n\n#app > div, .main-wrap {\n  height: 100%; }\n\ndiv {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\na {\n  color: #3B7ED1;\n  text-decoration: none !important; }\n\nbody, button {\n  font-family: PingFangSC-Regular, Helvetica Neue, Hiragino Sans GB, Helvetica, Microsoft YaHei, Arial; }\n\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25; }\n  0.01% {\n    opacity: 0.25; }\n  0.02% {\n    opacity: 1; }\n  60.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25; }\n  0.01% {\n    opacity: 0.25; }\n  0.02% {\n    opacity: 1; }\n  60.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25; }\n  8.34333% {\n    opacity: 0.25; }\n  8.35333% {\n    opacity: 1; }\n  68.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25; }\n  8.34333% {\n    opacity: 0.25; }\n  8.35333% {\n    opacity: 1; }\n  68.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25; }\n  16.6767% {\n    opacity: 0.25; }\n  16.6867% {\n    opacity: 1; }\n  76.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25; }\n  16.6767% {\n    opacity: 0.25; }\n  16.6867% {\n    opacity: 1; }\n  76.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25; }\n  25.01% {\n    opacity: 0.25; }\n  25.02% {\n    opacity: 1; }\n  85.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25; }\n  25.01% {\n    opacity: 0.25; }\n  25.02% {\n    opacity: 1; }\n  85.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25; }\n  33.3433% {\n    opacity: 0.25; }\n  33.3533% {\n    opacity: 1; }\n  93.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25; }\n  33.3433% {\n    opacity: 0.25; }\n  33.3533% {\n    opacity: 1; }\n  93.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.25; } }\n\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333; }\n  41.6767% {\n    opacity: 0.25; }\n  41.6867% {\n    opacity: 1; }\n  1.67667% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.270958333333333; } }\n\n@keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333; }\n  41.6767% {\n    opacity: 0.25; }\n  41.6867% {\n    opacity: 1; }\n  1.67667% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.270958333333333; } }\n\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125; }\n  50.01% {\n    opacity: 0.25; }\n  50.02% {\n    opacity: 1; }\n  10.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.375125; } }\n\n@keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125; }\n  50.01% {\n    opacity: 0.25; }\n  50.02% {\n    opacity: 1; }\n  10.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.375125; } }\n\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667; }\n  58.3433% {\n    opacity: 0.25; }\n  58.3533% {\n    opacity: 1; }\n  18.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.479291666666667; } }\n\n@keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667; }\n  58.3433% {\n    opacity: 0.25; }\n  58.3533% {\n    opacity: 1; }\n  18.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.479291666666667; } }\n\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333; }\n  66.6767% {\n    opacity: 0.25; }\n  66.6867% {\n    opacity: 1; }\n  26.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.583458333333333; } }\n\n@keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333; }\n  66.6767% {\n    opacity: 0.25; }\n  66.6867% {\n    opacity: 1; }\n  26.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.583458333333333; } }\n\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625; }\n  75.01% {\n    opacity: 0.25; }\n  75.02% {\n    opacity: 1; }\n  35.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.687625; } }\n\n@keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625; }\n  75.01% {\n    opacity: 0.25; }\n  75.02% {\n    opacity: 1; }\n  35.01% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.687625; } }\n\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667; }\n  83.3433% {\n    opacity: 0.25; }\n  83.3533% {\n    opacity: 1; }\n  43.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.791791666666667; } }\n\n@keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667; }\n  83.3433% {\n    opacity: 0.25; }\n  83.3533% {\n    opacity: 1; }\n  43.3433% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.791791666666667; } }\n\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333; }\n  91.6767% {\n    opacity: 0.25; }\n  91.6867% {\n    opacity: 1; }\n  51.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.895958333333333; } }\n\n@keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333; }\n  91.6767% {\n    opacity: 0.25; }\n  91.6867% {\n    opacity: 1; }\n  51.6767% {\n    opacity: 0.25; }\n  100% {\n    opacity: 0.895958333333333; } }\n\n.xl-phone-verify {\n  background: #fff; }\n  .xl-phone-verify .xl-phone-verify-item {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent));\n    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%);\n    background-size: 100% 0px, 0px 100%, 100% 1px, 0px 100%;\n    background-repeat: no-repeat;\n    background-position: top, right top, bottom, left top;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n    .xl-phone-verify .xl-phone-verify-item .code-box {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex; }\n    .xl-phone-verify .xl-phone-verify-item p {\n      height: 1rem; }\n      .xl-phone-verify .xl-phone-verify-item p.icon-box {\n        width: 1.04rem;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .xl-phone-verify .xl-phone-verify-item p.icon-box img {\n          width: .38rem;\n          height: .38rem; }\n      .xl-phone-verify .xl-phone-verify-item p.input-box {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .xl-phone-verify .xl-phone-verify-item p.input-box input {\n          border: none;\n          font-size: .32rem;\n          width: 100%; }\n          .xl-phone-verify .xl-phone-verify-item p.input-box input:disabled {\n            background: none; }\n          .xl-phone-verify .xl-phone-verify-item p.input-box input::-webkit-input-placeholder {\n            color: #666;\n            color: rgba(0, 0, 0, 0.2); }\n      .xl-phone-verify .xl-phone-verify-item p.get-verify-btn {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: .32rem;\n        color: #3B7ED1;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 2.4rem;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(50%, transparent));\n        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 50%, transparent 50%);\n        background-size: 100% 0px, 0px 100%, 100% 0px, 1px 100%;\n        background-repeat: no-repeat;\n        background-position: top, right top, bottom, left top; }\n        .xl-phone-verify .xl-phone-verify-item p.get-verify-btn.action {\n          color: #B2B2B2; }\n", ""]);

// exports


/***/ })

});