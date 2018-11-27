webpackJsonp([0],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function a(b, c) {
    for (var e, d = 0; d < c.length; d++) {
      e = c[d], e.enumerable = e.enumerable || !1, e.configurable = !0, 'value' in e && (e.writable = !0), Object.defineProperty(b, e.key, e);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}(),
    _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(23),
    _reactDom2 = _interopRequireDefault(_reactDom),
    _styleModule = __webpack_require__(207),
    _styleModule2 = _interopRequireDefault(_styleModule),
    _iscrollProbe = __webpack_require__(209),
    _iscrollProbe2 = _interopRequireDefault(_iscrollProbe);Object.defineProperty(exports, '__esModule', { value: !0 });function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b && ('object' == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || 'function' == typeof b) ? b : a;
}function _inherits(a, b) {
  if ('function' != typeof b && null !== b) throw new TypeError('Super expression must either be null or a function, not ' + (typeof b === 'undefined' ? 'undefined' : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}var AppComponent = function (a) {
  function b(c, d) {
    _classCallCheck(this, b);var e = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, c, d));return e.state = { refreshTip: 0, moreTip: '\u4E0A\u62C9\u52A0\u8F7D...' }, e.onRefresh = !!e.props.onRefresh && e.props.onRefresh, e.onLoadMore = !!e.props.onLoadMore && e.props.onLoadMore, e.canRefresh = !1, e.isRefreshIng = !1, e.canLoadMore = !1, e.loadMoreIng = !1, e.loadEnd = !1, e.doRefresh = !1, e;
  }return _inherits(b, a), _createClass(b, [{ key: 'render', value: function render() {
      return _react2.default.createElement('div', { style: { height: '100%', width: '100%', overflow: 'hidden', position: 'absolute' } }, _react2.default.createElement('div', { ref: 'boxScroll', style: { position: 'absolute', top: this.onRefresh ? -60 : 0, width: '100%', overflow: 'hidden', bottom: 0 } }, _react2.default.createElement('div', { ref: 'box' }, _react2.default.createElement('div', { ref: 'refresh', style: { height: 60, display: this.onRefresh ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' } }, '\u4E0B\u62C9\u5237\u65B0...'), this.props.children, _react2.default.createElement('div', { ref: 'loadMore', style: { height: 60, display: this.onLoadMore ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' } }, '\u6B63\u5728\u52A0\u8F7D...'))));
    } }, { key: 'componentDidMount', value: function componentDidMount() {
      var d = this,
          c = this;c.refs.box.style['min-height'] = c.refs.boxScroll.offsetHeight + 1 + 'px', c.iScrollInstance = new _iscrollProbe2.default(c.refs.boxScroll, { probeType: 3, mouseWheel: !0, disablePointer: !0, disableTouch: !1, disableMouse: !1, hasRefresh: c.onRefresh, preventDefault: !1 }), c.iScrollInstance.on('scrollStartEnd', function () {
        d.isRefreshIng || d.loadMoreIng || (c.canRefresh && (c.refs.refresh.innerHTML = '\u6B63\u5728\u5237\u65B0...', c.isRefreshIng = !0, setTimeout(function () {
          c.onRefresh(c, function (e) {
            c.refreshEnd(e);
          });
        }, 100)), c.canLoadMore && !c.loadEnd && (c.loadMoreIng = !0, setTimeout(function () {
          c.onLoadMore(c, function (e) {
            c.loadMoreEnd(e);
          });
        }, 100)));
      }), c.iScrollInstance.on('scroll', function () {
        d.isRefreshIng || d.loadMoreIng || (c.onRefresh && (60 < c.iScrollInstance.y && !c.canRefresh && (!c.canRefresh && (c.refs.refresh.innerHTML = '\u677E\u624B\u5237\u65B0...'), c.canRefresh = !0), 59 > c.iScrollInstance.y && c.canRefresh && (c.canRefresh && (c.refs.refresh.innerHTML = '\u4E0B\u62C9\u5237\u65B0...'), c.canRefresh = !1)), c.onLoadMore && !c.loadEnd && (c.iScrollInstance.y < c.iScrollInstance.maxScrollY + 80 && !c.canLoadMore && (c.canLoadMore = !0), c.iScrollInstance.y > c.iScrollInstance.maxScrollY + 80 && c.canLoadMore && (c.canLoadMore = !1)));
      }), c.props.init && 0 != c.props.init.x + c.props.init.y ? c.iScrollInstance.scrollTo(c.props.init.x, c.props.init.y, 0) : -1 == c.iScrollInstance.maxScrollY && setTimeout(function () {
        c.init();
      }, 100);
    } }, { key: 'shouldComponentUpdate', value: function shouldComponentUpdate(c) {
      return c.children != this.props.children && (this.doRefresh = !0), !0;
    } }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
      this.doRefresh && this.refresh(), this.doRefresh = !1;
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
      -1 == this.iScrollInstance.maxScrollY || this.props.leaveBefor && this.props.leaveBefor(this.iScrollInstance);
    } }, { key: 'loadMoreEnd', value: function loadMoreEnd(c) {
      var d = this;d.canLoadMore = !1, setTimeout(function () {
        c && d.setEnd(), d.iScrollInstance.refresh(), d.loadMoreIng = !1;
      }, 100);
    } }, { key: 'setEnd', value: function setEnd() {
      var c = this;c.refs.loadMore.innerHTML = '\u52A0\u8F7D\u5B8C\u6BD5...', c.loadEnd = !0;
    } }, { key: 'refresh', value: function refresh() {
      var c = this;setTimeout(function () {
        c.iScrollInstance.refresh();
      }, 100);
    } }, { key: 'refreshEnd', value: function refreshEnd(c) {
      var d = this;d.refs.refresh.innerHTML = '\u4E0B\u62C9\u5237\u65B0...', d.iScrollInstance.refreshEnd(), d.canRefresh = !1, setTimeout(function () {
        d.refs.loadMore.innerHTML = '\u6B63\u5728\u52A0\u8F7D...', d.loadEnd = !1, c && d.setEnd(), d.iScrollInstance.refresh(), d.isRefreshIng = !1;
      }, 100);
    } }, { key: 'init', value: function init() {
      var c = this;!c.loadEnd && c.onLoadMore && (c.loadMoreIng = !0, setTimeout(function () {
        c.onLoadMore(c, function (d) {
          c.loadMoreEnd(d);
        });
      }, 100));
    } }]), b;
}(_react2.default.Component);AppComponent.defaultProps = {}, exports.default = AppComponent;

;(function register() {
  /* react-hot-loader/webpack */if (false) {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/iscroll/index.min.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/iscroll/index.min.js");
    }
  }
})();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--5-2!../../../../node_modules/postcss-loader/lib/index.js??ref--5-3!../../../../node_modules/sass-loader/lib/loader.js!./style.module.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--5-2!../../../../node_modules/postcss-loader/lib/index.js??ref--5-3!../../../../node_modules/sass-loader/lib/loader.js!./style.module.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, ".style-module-comment_box-Npfe2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n  bottom: -60px; }\n", ""]);

// exports
exports.locals = {
	"comment_box": "style-module-comment_box-Npfe2"
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (a) {
  return typeof a === 'undefined' ? 'undefined' : _typeof2(a);
} : function (a) {
  return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a === 'undefined' ? 'undefined' : _typeof2(a);
};(function (a, d, g) {
  function h(s, t) {
    for (var u in this.wrapper = 'string' == typeof s ? d.querySelector(s) : s, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: 0.334, disablePointer: !q.hasPointer, disableTouch: q.hasPointer || !q.hasTouch, disableMouse: q.hasPointer || q.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: '', preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: 'undefined' == typeof a.onmousedown }, t) {
      this.options[u] = t[u];
    }this.translateZ = this.options.HWCompositing && q.hasPerspective ? ' translateZ(0)' : '', this.options.useTransition = q.hasTransition && this.options.useTransition, this.options.useTransform = q.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? 'vertical' : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = 'vertical' != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = 'horizontal' != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = 'string' == typeof this.options.bounceEasing ? q.ease[this.options.bounceEasing] || q.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = 'tap'), 'scale' == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }function j(s, t, u) {
    var v = d.createElement('div'),
        w = d.createElement('div');return !0 === u && (v.style.cssText = 'position:absolute;z-index:9999', w.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'), w.className = 'iScrollIndicator', 'h' == s ? (!0 === u && (v.style.cssText += ';height:7px;left:2px;right:2px;bottom:0', w.style.height = '100%'), v.className = 'iScrollHorizontalScrollbar') : (!0 === u && (v.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px', w.style.width = '100%'), v.className = 'iScrollVerticalScrollbar'), v.style.cssText += ';overflow:hidden', t || (v.style.pointerEvents = 'none'), v.appendChild(w), v;
  }function o(s, t) {
    for (var u in this.wrapper = 'string' == typeof t.el ? d.querySelector(t.el) : t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = s, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 }, t) {
      this.options[u] = t[u];
    }if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (!this.options.disableTouch && (q.addEvent(this.indicator, 'touchstart', this), q.addEvent(a, 'touchend', this)), !this.options.disablePointer && (q.addEvent(this.indicator, q.prefixPointerEvent('pointerdown'), this), q.addEvent(a, q.prefixPointerEvent('pointerup'), this)), !this.options.disableMouse && (q.addEvent(this.indicator, 'mousedown', this), q.addEvent(a, 'mouseup', this))), this.options.fade) {
      this.wrapperStyle[q.style.transform] = this.scroller.translateZ;var v = q.style.transitionDuration;this.wrapperStyle[v] = q.isBadAndroid ? '0.0001ms' : '0ms';var w = this;q.isBadAndroid && p(function () {
        '0.0001ms' === w.wrapperStyle[v] && (w.wrapperStyle[v] = '0s');
      }), this.wrapperStyle.opacity = '0';
    }
  }var p = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (s) {
    a.setTimeout(s, 1e3 / 60);
  },
      q = function () {
    function s(z) {
      return !1 !== v && ('' === v ? z : v + z.charAt(0).toUpperCase() + z.substr(1));
    }var t = {},
        u = d.createElement('div').style,
        v = function () {
      for (var A, z = ['t', 'webkitT', 'MozT', 'msT', 'OT'], B = 0, C = z.length; B < C; B++) {
        if (A = z[B] + 'ransform', A in u) return z[B].substr(0, z[B].length - 1);
      }return !1;
    }();t.getTime = Date.now || function () {
      return new Date().getTime();
    }, t.extend = function (z, A) {
      for (var B in A) {
        z[B] = A[B];
      }
    }, t.addEvent = function (z, A, B, C) {
      z.addEventListener(A, B, !!C);
    }, t.removeEvent = function (z, A, B, C) {
      z.removeEventListener(A, B, !!C);
    }, t.prefixPointerEvent = function (z) {
      return a.MSPointerEvent ? 'MSPointer' + z.charAt(7).toUpperCase() + z.substr(8) : z;
    }, t.momentum = function (z, A, B, C, D, E) {
      var H,
          I,
          F = z - A,
          G = g.abs(F) / B;return E = void 0 === E ? 6e-4 : E, H = z + G * G / (2 * E) * (0 > F ? -1 : 1), I = G / E, H < C ? (H = D ? C - D / 2.5 * (G / 8) : C, F = g.abs(H - z), I = F / G) : 0 < H && (H = D ? D / 2.5 * (G / 8) : 0, F = g.abs(z) + H, I = F / G), { destination: g.round(H), duration: I };
    };var w = s('transform');return t.extend(t, { hasTransform: !1 !== w, hasPerspective: s('perspective') in u, hasTouch: 'ontouchstart' in a, hasPointer: !!(a.PointerEvent || a.MSPointerEvent), hasTransition: s('transition') in u }), t.isBadAndroid = function () {
      var z = a.navigator.appVersion;if (/Android/.test(z) && !/Chrome\/\d/.test(z)) {
        var A = z.match(/Safari\/(\d+.\d)/);return A && 'object' === ('undefined' == typeof A ? 'undefined' : _typeof(A)) && 2 <= A.length ? 535.19 > parseFloat(A[1]) : !0;
      }return !1;
    }(), t.extend(t.style = {}, { transform: w, transitionTimingFunction: s('transitionTimingFunction'), transitionDuration: s('transitionDuration'), transitionDelay: s('transitionDelay'), transformOrigin: s('transformOrigin') }), t.hasClass = function (z, A) {
      var B = new RegExp('(^|\\s)' + A + '(\\s|$)');return B.test(z.className);
    }, t.addClass = function (z, A) {
      if (!t.hasClass(z, A)) {
        var B = z.className.split(' ');B.push(A), z.className = B.join(' ');
      }
    }, t.removeClass = function (z, A) {
      if (t.hasClass(z, A)) {
        var B = new RegExp('(^|\\s)' + A + '(\\s|$)', 'g');z.className = z.className.replace(B, ' ');
      }
    }, t.offset = function (z) {
      for (var A = -z.offsetLeft, B = -z.offsetTop; z = z.offsetParent;) {
        A -= z.offsetLeft, B -= z.offsetTop;
      }return { left: A, top: B };
    }, t.preventDefaultException = function (z, A) {
      for (var B in A) {
        if (A[B].test(z[B])) return !0;
      }return !1;
    }, t.extend(t.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), t.extend(t.ease = {}, { quadratic: { style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fn: function fn(z) {
          return z * (2 - z);
        } }, circular: { style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', fn: function fn(z) {
          return g.sqrt(1 - --z * z);
        } }, back: { style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', fn: function fn(z) {
          var A = 4;return --z * z * ((A + 1) * z + A) + 1;
        } }, bounce: { style: '', fn: function fn(z) {
          return (z /= 1) < 1 / 2.75 ? 7.5625 * z * z : z < 2 / 2.75 ? 7.5625 * (z -= 1.5 / 2.75) * z + 0.75 : z < 2.5 / 2.75 ? 7.5625 * (z -= 2.25 / 2.75) * z + 0.9375 : 7.5625 * (z -= 2.625 / 2.75) * z + 0.984375;
        } }, elastic: { style: '', fn: function fn(z) {
          var A = 0.22;return 0 === z ? 0 : 1 == z ? 1 : 0.4 * g.pow(2, -10 * z) * g.sin((z - A / 4) * (2 * g.PI) / A) + 1;
        } } }), t.tap = function (z, A) {
      var B = d.createEvent('Event');B.initEvent(A, !0, !0), B.pageX = z.pageX, B.pageY = z.pageY, z.target.dispatchEvent(B);
    }, t.click = function (z) {
      var B,
          A = z.target;/(SELECT|INPUT|TEXTAREA)/i.test(A.tagName) || (B = d.createEvent('MouseEvents'), B.initMouseEvent('click', !0, !0, z.view, 1, A.screenX, A.screenY, A.clientX, A.clientY, z.ctrlKey, z.altKey, z.shiftKey, z.metaKey, 0, null), B._constructed = !0, A.dispatchEvent(B));
    }, t;
  }();h.prototype = { version: '5.2.0', _init: function _init() {
      this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys();
    }, destroy: function destroy() {
      this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent('destroy');
    }, _transitionEnd: function _transitionEnd(s) {
      s.target == this.scroller && this.isInTransition && (this._transitionTime(), !this.resetPosition(this.options.bounceTime) && (this.isInTransition = !1, this._execEvent('scrollEnd')));
    }, _start: function _start(s) {
      if (1 != q.eventType[s.type]) {
        var t;if (t = s.which ? s.button : 2 > s.button ? 0 : 4 == s.button ? 1 : 2, 0 !== t) return;
      }if (this.enabled && (!this.initiated || q.eventType[s.type] === this.initiated)) {
        !this.options.preventDefault || q.isBadAndroid || q.preventDefaultException(s.target, this.options.preventDefaultException) || s.preventDefault();var v,
            u = s.touches ? s.touches[0] : s;this.initiated = q.eventType[s.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = q.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, v = this.getComputedPosition(), this._translate(g.round(v.x), g.round(v.y)), this._execEvent('scrollEnd')) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent('scrollEnd')), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = u.pageX, this.pointY = u.pageY, this._execEvent('beforeScrollStart');
      }
    }, _move: function _move(s) {
      if (this.enabled && q.eventType[s.type] === this.initiated) {
        this.options.preventDefault && s.preventDefault();var z,
            A,
            B,
            C,
            t = s.touches ? s.touches[0] : s,
            u = t.pageX - this.pointX,
            v = t.pageY - this.pointY,
            w = q.getTime();if (this.pointX = t.pageX, this.pointY = t.pageY, this.distX += u, this.distY += v, B = g.abs(this.distX), C = g.abs(this.distY), !(300 < w - this.endTime && 10 > B && 10 > C)) {
          if (this.directionLocked || this.options.freeScroll || (B > C + this.options.directionLockThreshold ? this.directionLocked = 'h' : C >= B + this.options.directionLockThreshold ? this.directionLocked = 'v' : this.directionLocked = 'n'), 'h' == this.directionLocked) {
            if ('vertical' == this.options.eventPassthrough) s.preventDefault();else if ('horizontal' == this.options.eventPassthrough) return void (this.initiated = !1);v = 0;
          } else if ('v' == this.directionLocked) {
            if ('horizontal' == this.options.eventPassthrough) s.preventDefault();else if ('vertical' == this.options.eventPassthrough) return void (this.initiated = !1);u = 0;
          }u = this.hasHorizontalScroll ? u : 0, v = this.hasVerticalScroll ? v : 0, z = this.x + u, A = this.y + v, (0 < z || z < this.maxScrollX) && (z = this.options.bounce ? this.x + u / 3 : 0 < z ? 0 : this.maxScrollX), (0 < A || A < this.maxScrollY) && (A = this.options.bounce ? this.y + v / 3 : 0 < A ? 0 : this.maxScrollY), this.directionX = 0 < u ? -1 : 0 > u ? 1 : 0, this.directionY = 0 < v ? -1 : 0 > v ? 1 : 0, this.moved || this._execEvent('scrollStart'), this.moved = !0, this._translate(z, A), 300 < w - this.startTime && (this.startTime = w, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent('scroll')), 1 < this.options.probeType && this._execEvent('scroll');
        }
      }
    }, _end: function _end(s) {
      if (this._execEvent('scrollStartEnd'), this.enabled && q.eventType[s.type] === this.initiated) {
        this.options.preventDefault && !q.preventDefaultException(s.target, this.options.preventDefaultException) && s.preventDefault();var u,
            v,
            t = s.changedTouches ? s.changedTouches[0] : s,
            w = q.getTime() - this.startTime,
            z = g.round(this.x),
            A = g.round(this.y),
            B = g.abs(z - this.startX),
            C = g.abs(A - this.startY),
            D = 0,
            E = '';if (this.isInTransition = 0, this.initiated = 0, this.endTime = q.getTime(), !this.resetPosition(this.options.bounceTime)) {
          if (this.scrollTo(z, A), !this.moved) return this.options.tap && q.tap(s, this.options.tap), this.options.click && q.click(s), void this._execEvent('scrollCancel');if (this._events.flick && 200 > w && 100 > B && 100 > C) return void this._execEvent('flick');if (this.options.momentum && 300 > w && (u = this.hasHorizontalScroll ? q.momentum(this.x, this.startX, w, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: z, duration: 0 }, v = this.hasVerticalScroll ? q.momentum(this.y, this.startY, w, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: A, duration: 0 }, z = u.destination, A = v.destination, D = g.max(u.duration, v.duration), this.isInTransition = 1), this.options.snap) {
            var F = this._nearestSnap(z, A);this.currentPage = F, D = this.options.snapSpeed || g.max(g.max(g.min(g.abs(z - F.x), 1e3), g.min(g.abs(A - F.y), 1e3)), 300), z = F.x, A = F.y, this.directionX = 0, this.directionY = 0, E = this.options.bounceEasing;
          }return z != this.x || A != this.y ? ((0 < z || z < this.maxScrollX || 0 < A || A < this.maxScrollY) && (E = q.ease.quadratic), void this.scrollTo(z, A, D, E)) : void this._execEvent('scrollEnd');
        }
      }
    }, _resize: function _resize() {
      var s = this;clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
        s.refresh();
      }, this.options.resizePolling);
    }, resetPosition: function resetPosition(s) {
      var t = this.x,
          u = this.y;return (s = s || 0, !this.hasHorizontalScroll || 0 < this.x ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? (u = 0, 59 < this.y && this.options.hasRefresh && (u = 60)) : this.y < this.maxScrollY && (u = this.maxScrollY), t != this.x || u != this.y) && (this.scrollTo(t, u, s, this.options.bounceEasing), !0);
    }, refreshEnd: function refreshEnd() {
      this.scrollTo(0, 0, 600, this.options.bounceEasing);
    }, disable: function disable() {
      this.enabled = !1;
    }, enable: function enable() {
      this.enabled = !0;
    }, refresh: function refresh() {
      this.wrapper.offsetHeight;this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && 0 > this.maxScrollX, this.hasVerticalScroll = this.options.scrollY && 0 > this.maxScrollY, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = q.offset(this.wrapper), this._execEvent('refresh'), this.resetPosition();
    }, on: function on(s, t) {
      this._events[s] || (this._events[s] = []), this._events[s].push(t);
    }, off: function off(s, t) {
      if (this._events[s]) {
        var u = this._events[s].indexOf(t);-1 < u && this._events[s].splice(u, 1);
      }
    }, _execEvent: function _execEvent(s) {
      if (this._events[s]) {
        var t = 0,
            u = this._events[s].length;if (u) for (; t < u; t++) {
          this._events[s][t].apply(this, [].slice.call(arguments, 1));
        }
      }
    }, scrollBy: function scrollBy(s, t, u, v) {
      s = this.x + s, t = this.y + t, u = u || 0, this.scrollTo(s, t, u, v);
    }, scrollTo: function scrollTo(s, t, u, v) {
      v = v || q.ease.circular, this.isInTransition = this.options.useTransition && 0 < u;var w = this.options.useTransition && v.style;!u || w ? (w && (this._transitionTimingFunction(v.style), this._transitionTime(u)), this._translate(s, t)) : this._animate(s, t, u, v.fn);
    }, scrollToElement: function scrollToElement(s, t, u, v, w) {
      if (s = s.nodeType ? s : this.scroller.querySelector(s), !!s) {
        var z = q.offset(s);z.left -= this.wrapperOffset.left, z.top -= this.wrapperOffset.top, !0 === u && (u = g.round(s.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === v && (v = g.round(s.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), z.left -= u || 0, z.top -= v || 0, z.left = 0 < z.left ? 0 : z.left < this.maxScrollX ? this.maxScrollX : z.left, z.top = 0 < z.top ? 0 : z.top < this.maxScrollY ? this.maxScrollY : z.top, t = void 0 === t || null === t || 'auto' === t ? g.max(g.abs(this.x - z.left), g.abs(this.y - z.top)) : t, this.scrollTo(z.left, z.top, t, w);
      }
    }, _transitionTime: function _transitionTime(s) {
      s = s || 0;var t = q.style.transitionDuration;if (this.scrollerStyle[t] = s + 'ms', !s && q.isBadAndroid) {
        this.scrollerStyle[t] = '0.0001ms';var u = this;p(function () {
          '0.0001ms' === u.scrollerStyle[t] && (u.scrollerStyle[t] = '0s');
        });
      }if (this.indicators) for (var v = this.indicators.length; v--;) {
        this.indicators[v].transitionTime(s);
      }
    }, _transitionTimingFunction: function _transitionTimingFunction(s) {
      if (this.scrollerStyle[q.style.transitionTimingFunction] = s, this.indicators) for (var t = this.indicators.length; t--;) {
        this.indicators[t].transitionTimingFunction(s);
      }
    }, _translate: function _translate(s, t) {
      if (this.options.useTransform ? this.scrollerStyle[q.style.transform] = 'translate(' + s + 'px,' + t + 'px)' + this.translateZ : (s = g.round(s), t = g.round(t), this.scrollerStyle.left = s + 'px', this.scrollerStyle.top = t + 'px'), this.x = s, this.y = t, this.indicators) for (var u = this.indicators.length; u--;) {
        this.indicators[u].updatePosition();
      }
    }, _initEvents: function _initEvents(s) {
      var t = s ? q.removeEvent : q.addEvent,
          u = this.options.bindToWrapper ? this.wrapper : a;t(a, 'orientationchange', this), t(a, 'resize', this), this.options.click && t(this.wrapper, 'click', this, !0), this.options.disableMouse || (t(this.wrapper, 'mousedown', this), t(u, 'mousemove', this), t(u, 'mousecancel', this), t(u, 'mouseup', this)), q.hasPointer && !this.options.disablePointer && (t(this.wrapper, q.prefixPointerEvent('pointerdown'), this), t(u, q.prefixPointerEvent('pointermove'), this), t(u, q.prefixPointerEvent('pointercancel'), this), t(u, q.prefixPointerEvent('pointerup'), this)), q.hasTouch && !this.options.disableTouch && (t(this.wrapper, 'touchstart', this), t(u, 'touchmove', this), t(u, 'touchcancel', this), t(u, 'touchend', this)), t(this.scroller, 'transitionend', this), t(this.scroller, 'webkitTransitionEnd', this), t(this.scroller, 'oTransitionEnd', this), t(this.scroller, 'MSTransitionEnd', this);
    }, getComputedPosition: function getComputedPosition() {
      var t,
          u,
          s = a.getComputedStyle(this.scroller, null);return this.options.useTransform ? (s = s[q.style.transform].split(')')[0].split(', '), t = +(s[12] || s[4]), u = +(s[13] || s[5])) : (t = +s.left.replace(/[^-\d.]/g, ''), u = +s.top.replace(/[^-\d.]/g, '')), { x: t, y: u };
    }, _initIndicators: function _initIndicators() {
      function s(B) {
        if (z.indicators) for (var C = z.indicators.length; C--;) {
          B.call(z.indicators[C]);
        }
      }var w,
          t = this.options.interactiveScrollbars,
          u = 'string' != typeof this.options.scrollbars,
          v = [],
          z = this;this.indicators = [], this.options.scrollbars && (this.options.scrollY && (w = { el: j('v', t, this.options.scrollbars), interactive: t, defaultScrollbars: !0, customStyle: u, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(w.el), v.push(w)), this.options.scrollX && (w = { el: j('h', t, this.options.scrollbars), interactive: t, defaultScrollbars: !0, customStyle: u, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(w.el), v.push(w))), this.options.indicators && (v = v.concat(this.options.indicators));for (var A = v.length; A--;) {
        this.indicators.push(new o(this, v[A]));
      }this.options.fadeScrollbars && (this.on('scrollEnd', function () {
        s(function () {
          this.fade();
        });
      }), this.on('scrollCancel', function () {
        s(function () {
          this.fade();
        });
      }), this.on('scrollStart', function () {
        s(function () {
          this.fade(1);
        });
      }), this.on('beforeScrollStart', function () {
        s(function () {
          this.fade(1, !0);
        });
      })), this.on('refresh', function () {
        s(function () {
          this.refresh();
        });
      }), this.on('destroy', function () {
        s(function () {
          this.destroy();
        }), delete this.indicators;
      });
    }, _initWheel: function _initWheel() {
      q.addEvent(this.wrapper, 'wheel', this), q.addEvent(this.wrapper, 'mousewheel', this), q.addEvent(this.wrapper, 'DOMMouseScroll', this), this.on('destroy', function () {
        clearTimeout(this.wheelTimeout), this.wheelTimeout = null, q.removeEvent(this.wrapper, 'wheel', this), q.removeEvent(this.wrapper, 'mousewheel', this), q.removeEvent(this.wrapper, 'DOMMouseScroll', this);
      });
    }, _wheel: function _wheel(s) {
      if (this.enabled) {
        s.preventDefault();var t,
            u,
            v,
            w,
            z = this;if (void 0 === this.wheelTimeout && z._execEvent('scrollStart'), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
          z.options.snap || z._execEvent('scrollEnd'), z.wheelTimeout = void 0;
        }, 400), 'deltaX' in s) 1 === s.deltaMode ? (t = -s.deltaX * this.options.mouseWheelSpeed, u = -s.deltaY * this.options.mouseWheelSpeed) : (t = -s.deltaX, u = -s.deltaY);else if ('wheelDeltaX' in s) t = s.wheelDeltaX / 120 * this.options.mouseWheelSpeed, u = s.wheelDeltaY / 120 * this.options.mouseWheelSpeed;else if ('wheelDelta' in s) t = u = s.wheelDelta / 120 * this.options.mouseWheelSpeed;else if ('detail' in s) t = u = -s.detail / 3 * this.options.mouseWheelSpeed;else return;return t *= this.options.invertWheelDirection, u *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = u, u = 0), this.options.snap ? (v = this.currentPage.pageX, w = this.currentPage.pageY, 0 < t ? v-- : 0 > t && v++, 0 < u ? w-- : 0 > u && w++, void this.goToPage(v, w)) : void (v = this.x + g.round(this.hasHorizontalScroll ? t : 0), w = this.y + g.round(this.hasVerticalScroll ? u : 0), this.directionX = 0 < t ? -1 : 0 > t ? 1 : 0, this.directionY = 0 < u ? -1 : 0 > u ? 1 : 0, 0 < v ? v = 0 : v < this.maxScrollX && (v = this.maxScrollX), 0 < w ? w = 0 : w < this.maxScrollY && (w = this.maxScrollY), this.scrollTo(v, w, 0), 1 < this.options.probeType && this._execEvent('scroll'));
      }
    }, _initSnap: function _initSnap() {
      this.currentPage = {}, 'string' == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on('refresh', function () {
        var t,
            v,
            w,
            z,
            B,
            E,
            s = 0,
            u = 0,
            A = 0,
            C = this.options.snapStepX || this.wrapperWidth,
            D = this.options.snapStepY || this.wrapperHeight;if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
          if (!0 === this.options.snap) for (w = g.round(C / 2), z = g.round(D / 2); A > -this.scrollerWidth;) {
            for (this.pages[s] = [], t = 0, B = 0; B > -this.scrollerHeight;) {
              this.pages[s][t] = { x: g.max(A, this.maxScrollX), y: g.max(B, this.maxScrollY), width: C, height: D, cx: A - w, cy: B - z }, B -= D, t++;
            }A -= C, s++;
          } else for (E = this.options.snap, t = E.length, v = -1; s < t; s++) {
            (0 == s || E[s].offsetLeft <= E[s - 1].offsetLeft) && (u = 0, v++), this.pages[u] || (this.pages[u] = []), A = g.max(-E[s].offsetLeft, this.maxScrollX), B = g.max(-E[s].offsetTop, this.maxScrollY), w = A - g.round(E[s].offsetWidth / 2), z = B - g.round(E[s].offsetHeight / 2), this.pages[u][v] = { x: A, y: B, width: E[s].offsetWidth, height: E[s].offsetHeight, cx: w, cy: z }, A > this.maxScrollX && u++;
          }this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 == this.options.snapThreshold % 1 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = g.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = g.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold));
        }
      }), this.on('flick', function () {
        var s = this.options.snapSpeed || g.max(g.max(g.min(g.abs(this.x - this.startX), 1e3), g.min(g.abs(this.y - this.startY), 1e3)), 300);this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, s);
      });
    }, _nearestSnap: function _nearestSnap(s, t) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };var u = 0,
          v = this.pages.length,
          w = 0;if (g.abs(s - this.absStartX) < this.snapThresholdX && g.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;for (0 < s ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX), 0 < t ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); u < v; u++) {
        if (s >= this.pages[u][0].cx) {
          s = this.pages[u][0].x;break;
        }
      }for (v = this.pages[u].length; w < v; w++) {
        if (t >= this.pages[0][w].cy) {
          t = this.pages[0][w].y;break;
        }
      }return u == this.currentPage.pageX && (u += this.directionX, 0 > u ? u = 0 : u >= this.pages.length && (u = this.pages.length - 1), s = this.pages[u][0].x), w == this.currentPage.pageY && (w += this.directionY, 0 > w ? w = 0 : w >= this.pages[0].length && (w = this.pages[0].length - 1), t = this.pages[0][w].y), { x: s, y: t, pageX: u, pageY: w };
    }, goToPage: function goToPage(s, t, u, v) {
      v = v || this.options.bounceEasing, s >= this.pages.length ? s = this.pages.length - 1 : 0 > s && (s = 0), t >= this.pages[s].length ? t = this.pages[s].length - 1 : 0 > t && (t = 0);var w = this.pages[s][t].x,
          z = this.pages[s][t].y;u = u === void 0 ? this.options.snapSpeed || g.max(g.max(g.min(g.abs(w - this.x), 1e3), g.min(g.abs(z - this.y), 1e3)), 300) : u, this.currentPage = { x: w, y: z, pageX: s, pageY: t }, this.scrollTo(w, z, u, v);
    }, next: function next(s, t) {
      var u = this.currentPage.pageX,
          v = this.currentPage.pageY;u++, u >= this.pages.length && this.hasVerticalScroll && (u = 0, v++), this.goToPage(u, v, s, t);
    }, prev: function prev(s, t) {
      var u = this.currentPage.pageX,
          v = this.currentPage.pageY;u--, 0 > u && this.hasVerticalScroll && (u = 0, v--), this.goToPage(u, v, s, t);
    }, _initKeys: function _initKeys() {
      var t = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 },
          u;if ('object' == _typeof(this.options.keyBindings)) for (u in this.options.keyBindings) {
        'string' == typeof this.options.keyBindings[u] && (this.options.keyBindings[u] = this.options.keyBindings[u].toUpperCase().charCodeAt(0));
      } else this.options.keyBindings = {};for (u in t) {
        this.options.keyBindings[u] = this.options.keyBindings[u] || t[u];
      }q.addEvent(a, 'keydown', this), this.on('destroy', function () {
        q.removeEvent(a, 'keydown', this);
      });
    }, _key: function _key(s) {
      if (this.enabled) {
        var B,
            t = this.options.snap,
            u = t ? this.currentPage.pageX : this.x,
            v = t ? this.currentPage.pageY : this.y,
            w = q.getTime(),
            z = this.keyTime || 0;switch (this.options.useTransition && this.isInTransition && (B = this.getComputedPosition(), this._translate(g.round(B.x), g.round(B.y)), this.isInTransition = !1), this.keyAcceleration = 200 > w - z ? g.min(this.keyAcceleration + 0.25, 50) : 0, s.keyCode) {case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll ? u += t ? 1 : this.wrapperWidth : v += t ? 1 : this.wrapperHeight;break;case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll ? u -= t ? 1 : this.wrapperWidth : v -= t ? 1 : this.wrapperHeight;break;case this.options.keyBindings.end:
            u = t ? this.pages.length - 1 : this.maxScrollX, v = t ? this.pages[0].length - 1 : this.maxScrollY;break;case this.options.keyBindings.home:
            u = 0, v = 0;break;case this.options.keyBindings.left:
            u += t ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.up:
            v += t ? 1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.right:
            u -= t ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.down:
            v -= t ? 1 : 5 + this.keyAcceleration >> 0;break;default:
            return;}return t ? void this.goToPage(u, v) : void (0 < u ? (u = 0, this.keyAcceleration = 0) : u < this.maxScrollX && (u = this.maxScrollX, this.keyAcceleration = 0), 0 < v ? (v = 0, this.keyAcceleration = 0) : v < this.maxScrollY && (v = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(u, v, 0), this.keyTime = w);
      }
    }, _animate: function _animate(s, t, u, v) {
      function w() {
        var F,
            G,
            H,
            E = q.getTime();return E >= C + u ? (z.isAnimating = !1, z._translate(s, t), void (z.resetPosition(z.options.bounceTime) || z._execEvent('scrollEnd'))) : void (E = (E - C) / u, H = v(E), F = (s - A) * H + A, G = (t - B) * H + B, z._translate(F, G), z.isAnimating && p(w), 3 == z.options.probeType && z._execEvent('scroll'));
      }var z = this,
          A = this.x,
          B = this.y,
          C = q.getTime();this.isAnimating = !0, w();
    }, handleEvent: function handleEvent(s) {
      switch (s.type) {case 'touchstart':case 'pointerdown':case 'MSPointerDown':case 'mousedown':
          this._start(s);break;case 'touchmove':case 'pointermove':case 'MSPointerMove':case 'mousemove':
          this._move(s);break;case 'touchend':case 'pointerup':case 'MSPointerUp':case 'mouseup':case 'touchcancel':case 'pointercancel':case 'MSPointerCancel':case 'mousecancel':
          this._end(s);break;case 'orientationchange':case 'resize':
          this._resize();break;case 'transitionend':case 'webkitTransitionEnd':case 'oTransitionEnd':case 'MSTransitionEnd':
          this._transitionEnd(s);break;case 'wheel':case 'DOMMouseScroll':case 'mousewheel':
          this._wheel(s);break;case 'keydown':
          this._key(s);break;case 'click':
          this.enabled && !s._constructed && (s.preventDefault(), s.stopPropagation());}
    } }, o.prototype = { handleEvent: function handleEvent(s) {
      switch (s.type) {case 'touchstart':case 'pointerdown':case 'MSPointerDown':case 'mousedown':
          this._start(s);break;case 'touchmove':case 'pointermove':case 'MSPointerMove':case 'mousemove':
          this._move(s);break;case 'touchend':case 'pointerup':case 'MSPointerUp':case 'mouseup':case 'touchcancel':case 'pointercancel':case 'MSPointerCancel':case 'mousecancel':
          this._end(s);}
    }, destroy: function destroy() {
      this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (q.removeEvent(this.indicator, 'touchstart', this), q.removeEvent(this.indicator, q.prefixPointerEvent('pointerdown'), this), q.removeEvent(this.indicator, 'mousedown', this), q.removeEvent(a, 'touchmove', this), q.removeEvent(a, q.prefixPointerEvent('pointermove'), this), q.removeEvent(a, 'mousemove', this), q.removeEvent(a, 'touchend', this), q.removeEvent(a, q.prefixPointerEvent('pointerup'), this), q.removeEvent(a, 'mouseup', this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
    }, _start: function _start(s) {
      var t = s.touches ? s.touches[0] : s;s.preventDefault(), s.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = q.getTime(), this.options.disableTouch || q.addEvent(a, 'touchmove', this), this.options.disablePointer || q.addEvent(a, q.prefixPointerEvent('pointermove'), this), this.options.disableMouse || q.addEvent(a, 'mousemove', this), this.scroller._execEvent('beforeScrollStart');
    }, _move: function _move(s) {
      var u,
          v,
          w,
          z,
          t = s.touches ? s.touches[0] : s,
          A = q.getTime();this.moved || this.scroller._execEvent('scrollStart'), this.moved = !0, u = t.pageX - this.lastPointX, this.lastPointX = t.pageX, v = t.pageY - this.lastPointY, this.lastPointY = t.pageY, w = this.x + u, z = this.y + v, this._pos(w, z), 1 == this.scroller.options.probeType && 300 < A - this.startTime ? (this.startTime = A, this.scroller._execEvent('scroll')) : 1 < this.scroller.options.probeType && this.scroller._execEvent('scroll'), s.preventDefault(), s.stopPropagation();
    }, _end: function _end(s) {
      if (this.initiated) {
        if (this.initiated = !1, s.preventDefault(), s.stopPropagation(), q.removeEvent(a, 'touchmove', this), q.removeEvent(a, q.prefixPointerEvent('pointermove'), this), q.removeEvent(a, 'mousemove', this), this.scroller.options.snap) {
          var t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
              u = this.options.snapSpeed || g.max(g.max(g.min(g.abs(this.scroller.x - t.x), 1e3), g.min(g.abs(this.scroller.y - t.y), 1e3)), 300);(this.scroller.x != t.x || this.scroller.y != t.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = t, this.scroller.scrollTo(t.x, t.y, u, this.scroller.options.bounceEasing));
        }this.moved && this.scroller._execEvent('scrollEnd');
      }
    }, transitionTime: function transitionTime(s) {
      s = s || 0;var t = q.style.transitionDuration;if (this.indicatorStyle[t] = s + 'ms', !s && q.isBadAndroid) {
        this.indicatorStyle[t] = '0.0001ms';var u = this;p(function () {
          '0.0001ms' === u.indicatorStyle[t] && (u.indicatorStyle[t] = '0s');
        });
      }
    }, transitionTimingFunction: function transitionTimingFunction(s) {
      this.indicatorStyle[q.style.transitionTimingFunction] = s;
    }, refresh: function refresh() {
      this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? 'block' : 'none' : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? 'block' : 'none' : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none', this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (q.addClass(this.wrapper, 'iScrollBothScrollbars'), q.removeClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '8px' : this.wrapper.style.bottom = '8px')) : (q.removeClass(this.wrapper, 'iScrollBothScrollbars'), q.addClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '2px' : this.wrapper.style.bottom = '2px'));this.wrapper.offsetHeight;this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = g.max(g.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + 'px') : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, 'clip' == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = g.max(g.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + 'px') : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, 'clip' == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition();
    }, updatePosition: function updatePosition() {
      var s = this.options.listenX && g.round(this.sizeRatioX * this.scroller.x) || 0,
          t = this.options.listenY && g.round(this.sizeRatioY * this.scroller.y) || 0;this.options.ignoreBoundaries || (s < this.minBoundaryX ? ('scale' == this.options.shrink && (this.width = g.max(this.indicatorWidth + s, 8), this.indicatorStyle.width = this.width + 'px'), s = this.minBoundaryX) : s > this.maxBoundaryX ? 'scale' == this.options.shrink ? (this.width = g.max(this.indicatorWidth - (s - this.maxPosX), 8), this.indicatorStyle.width = this.width + 'px', s = this.maxPosX + this.indicatorWidth - this.width) : s = this.maxBoundaryX : 'scale' == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + 'px'), t < this.minBoundaryY ? ('scale' == this.options.shrink && (this.height = g.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + 'px'), t = this.minBoundaryY) : t > this.maxBoundaryY ? 'scale' == this.options.shrink ? (this.height = g.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + 'px', t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : 'scale' == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + 'px')), this.x = s, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[q.style.transform] = 'translate(' + s + 'px,' + t + 'px)' + this.scroller.translateZ : (this.indicatorStyle.left = s + 'px', this.indicatorStyle.top = t + 'px');
    }, _pos: function _pos(s, t) {
      0 > s ? s = 0 : s > this.maxPosX && (s = this.maxPosX), 0 > t ? t = 0 : t > this.maxPosY && (t = this.maxPosY), s = this.options.listenX ? g.round(s / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? g.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(s, t);
    }, fade: function fade(s, t) {
      if (!t || this.visible) {
        clearTimeout(this.fadeTimeout), this.fadeTimeout = null;var u = s ? 250 : 500,
            v = s ? 0 : 300;s = s ? '1' : '0', this.wrapperStyle[q.style.transitionDuration] = u + 'ms', this.fadeTimeout = setTimeout(function (w) {
          this.wrapperStyle.opacity = w, this.visible = +w;
        }.bind(this, s), v);
      }
    } }, h.utils = q, 'undefined' != typeof module && module.exports ? module.exports = h :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return h;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.IScroll = h;
})(window, document, Math);

;(function register() {
  /* react-hot-loader/webpack */if (false) {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/iscroll/iscroll.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/study/reactUI/src/containers/util/iscroll/iscroll.js");
    }
  }
})();

/***/ })

});