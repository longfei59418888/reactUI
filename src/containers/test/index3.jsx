!function(e) {
    var t = {};
    function a(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, a),
            r.l = !0,
            r.exports
    }
    a.m = e,
        a.c = t,
        a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        a.t = function(e, t) {
            if (1 & t && (e = a(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (a.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    a.d(n, r, function(t) {
                        return e[t]
                    }
                        .bind(null, r));
            return n
        }
        ,
        a.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return a.d(t, "a", t),
                t
        }
        ,
        a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        a.p = "",
        a(a.s = 0)
}([function(e, t, a) {
    var n, r, i;
    function o(e, t) {
        return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
        )(e)
    }
    function c(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && s(e, t)
    }
    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            }
        )(e, t)
    }
    function u(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function p(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1,
                n.configurable = !0,
            "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
    }
    function d(e, t, a) {
        return t && p(e.prototype, t),
        a && p(e, a),
            e
    }
    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        )(e)
    }
    window,
        i = function() {
            "use strict";
            var e = function() {
                function e() {
                    u(this, e),
                        this._events = null,
                        this._eveSplit = /\s+/,
                        this._nsSplit = /[.:]/
                }
                return d(e, [{
                    key: "_isMatchEve",
                    value: function(e, t) {
                        var a = this._split(e, this._nsSplit)
                            , n = this._split(t, this._nsSplit);
                        return 1 === a.length ? a[0] === n[0] : 2 === a.length ? a[0] ? e === t : a[1] === n[1] : a.length === n.length && e === t
                    }
                }, {
                    key: "_split",
                    value: function(e, t) {
                        return e.trim().split(t)
                    }
                }, {
                    key: "on",
                    value: function(e, t, a) {
                        var n = this;
                        return this._events || (this._events = {}),
                            this._split(e, this._eveSplit).forEach(function(e) {
                                (n._events[e] || (n._events[e] = [])).push({
                                    callback: t,
                                    ctx: a || n
                                })
                            }),
                            this
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        var t = this;
                        if (!this._events)
                            return this;
                        var a = []
                            , n = [].slice.call(arguments, 1);
                        return this._split(e, this._eveSplit).forEach(function(e) {
                            for (var n in t._events)
                                t._events.hasOwnProperty(n) && t._isMatchEve(e, n) && (a = a.concat(t._events[n]))
                        }),
                            a.forEach(function(e) {
                                e.callback.apply(e.ctx, n)
                            }),
                            this
                    }
                }, {
                    key: "once",
                    value: function(e, t, a) {
                        var n = this
                            , r = arguments
                            , i = function a() {
                            n.off(e, a),
                                t.apply(n, r)
                        };
                        return this._split(e, this._eveSplit).forEach(function(e) {
                            n.on(e, i, a)
                        }),
                            this
                    }
                }, {
                    key: "off",
                    value: function(e, t, a) {
                        var n = this;
                        if (!this._events)
                            return this;
                        if (!e && !t && !a)
                            return this._events = {},
                                this;
                        "object" === f(t) && (a = t);
                        var r, i = arguments, o = function(e, n, r) {
                            var o = 2 === i.length && (e.callback === t || e.ctx === a)
                                , l = 3 === i.length && e.callback === t && e.ctx === a;
                            return (o || l) && r.splice(n, 1),
                            0 === r.length
                        };
                        return this._split(e, this._eveSplit).forEach(function(e) {
                            for (r in n._events)
                                n._events.hasOwnProperty(r) && n._isMatchEve(e, r) && (1 === i.length ? delete n._events[r] : n._events[r].some(o) && delete n._events[r])
                        }),
                            this
                    }
                }]),
                    e
            }()
                , t = function(t) {
                function a() {
                    var e;
                    return u(this, a),
                        (e = o(this, l(a).call(this))).businessName = "360loan",
                        e.ua = navigator.userAgent.toUpperCase(),
                        e.IS_ANDROID = -1 !== e.ua.indexOf("ANDROID"),
                        e.IS_IOS = -1 !== e.ua.indexOf("IPHONE OS"),
                        e.IS_IPHONE_X = e.IS_IOS && (812 === window.screen.height && 375 === window.screen.width || 896 === window.screen.height && 414 === window.screen.width),
                        e.IS_WP = -1 !== e.ua.indexOf("WINDOWS") && -1 !== e.ua.indexOf("PHONE"),
                        e.IS_LOCAL = "localhost" === location.hostname || "127.0.0.1" === location.hostname,
                        e._count = 0,
                        e._handlers = {},
                        e
                }
                return c(a, e),
                    d(a, [{
                        key: "extend",
                        value: function(e, t) {
                            for (var a in t)
                                t.hasOwnProperty(a) && (e[a] = t[a])
                        }
                    }, {
                        key: "_errorHandle",
                        value: function(e) {
                            switch (e.code) {
                                case "001":
                                    return {
                                        flag: "F",
                                        code: "native_001_应用错误",
                                        msg: "应用错误",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    };
                                case "002":
                                    return {
                                        flag: "F",
                                        code: "native_002_没有连接网络",
                                        msg: "您的网络不通畅，请检查您的网络或重试",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    };
                                case "003":
                                    return {
                                        flag: "F",
                                        code: "native_003_网络超时",
                                        msg: "您的网络不通畅，请检查您的网络或重试",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    };
                                case "004":
                                    return {
                                        flag: "F",
                                        code: "native_004_服务器发生异常",
                                        msg: "您的网络不通畅，请检查您的网络或重试",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    };
                                case "005":
                                    return {
                                        flag: "F",
                                        code: "native_005",
                                        msg: e.msg || "您的网络不通畅，请检查您的网络或重试",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    };
                                default:
                                    return {
                                        flag: "F",
                                        code: "native_other_未知错误",
                                        msg: "未知错误",
                                        data: {},
                                        realMsg: e.msg || "",
                                        realCode: e.realCode || "",
                                        httpStatusCode: e.httpStatusCode || ""
                                    }
                            }
                        }
                    }, {
                        key: "_params",
                        value: function(e, t, a) {
                            if ("function" == typeof e)
                                return e = this._createFnKey(e, t);
                            for (var n in e) {
                                var r = e[n];
                                if (!(e instanceof Array || Object.prototype.hasOwnProperty.call(e, n)))
                                    return;
                                "function" == typeof r && (e[n] = r = this._createFnKey(r, t)),
                                "[object Boolean]" === String(r) && (e[n] = r = String(r)),
                                    "[object Object]" !== String(r) && "string" != typeof r ? e[n] = r = a ? r : JSON.stringify(r) : "[object Object]" === String(r) && (e[n] = r = a ? this._params(r, t, !0) : JSON.stringify(this._params(r, t, !0))),
                                !a && this.IS_ANDROID && (e[n] = r = ["", String(e[n]).replace(/\|/g, "||"), ""].join('"'))
                            }
                            return e
                        }
                    }, {
                        key: "_createFnKey",
                        value: function(e, t) {
                            this._count++;
                            var a = [t || "__", this._count].join("_");
                            return this._handlers[a] = this._handlersErrorCallback(e),
                                a
                        }
                    }, {
                        key: "_handlersErrorCallback",
                        value: function(e) {
                            var t = this._errorHandle;
                            return function(a) {
                                a ? e.apply(window, [t(a)]) : e.apply(window, [].slice.call(arguments, 1))
                            }
                        }
                    }, {
                        key: "callback",
                        value: function(e) {
                            var t = [].slice.call(arguments, 1)
                                , a = this._handlers[e];
                            if (t[1] && "string" == typeof t[1] && "" !== t[1]) {
                                var n = t[1];
                                try {
                                    if (0 === n.indexOf("{"))
                                        n = JSON.parse(n);
                                    else
                                        try {
                                            n = JSON.parse(decodeURIComponent(n.replace(/\+/g, " ")))
                                        } catch (e) {
                                            n = JSON.parse(decodeURIComponent(decodeURIComponent(n).replace(/\+/g, " ")))
                                        }
                                    t[1] = n
                                } catch (e) {
                                    try {
                                        t[1] = t[1].replace(/\r\n/g, "");
                                        try {
                                            t[1] = JSON.parse(decodeURIComponent(t[1]))
                                        } catch (e) {
                                            t[1] = JSON.parse(decodeURIComponent(decodeURIComponent(t[1])))
                                        }
                                    } catch (e) {
                                        try {
                                            t[1] = JSON.parse(decodeURI(t[1]))
                                        } catch (e) {
                                            try {
                                                t[1] = JSON.parse(decodeURI(decodeURI(t[1])))
                                            } catch (e) {}
                                        }
                                    }
                                }
                            }
                            a && "[object Function]" === Object.prototype.toString.call(a) && a.apply(window, t),
                            0 === e.indexOf("request_") && (this._handlers[e] = void 0)
                        }
                    }, {
                        key: "call",
                        value: function(e) {
                            var t = [].slice.call(arguments, 1)
                                , a = t[0] && t[0].data && "baseImage" === t[0].data.shareSource;
                            if (t = this._params(t, e),
                                this.IS_ANDROID) {
                                var n = "call://" + e + "(" + (t.join ? t.join("|") : t) + ")";
                                window.loan_android_js && window.loan_android_js.execute && "share" === e && a ? window.loan_android_js.execute(n) : prompt(n)
                            } else {
                                var r = window[this.businessName];
                                try {
                                    r && r[e] ? r[e].apply(r, t) : window.YDIOS[e].apply(window.YDIOS, t)
                                } catch (e) {
                                    this.IS_LOCAL
                                }
                            }
                        }
                    }]),
                    a
            }()
                , a = function(t) {
                function a() {
                    return u(this, a),
                        o(this, l(a).apply(this, arguments))
                }
                return c(a, e),
                    d(a, [{
                        key: "onBack",
                        value: function(e, t) {
                            var a = {};
                            if (a.url = e,
                            "string" == typeof t)
                                try {
                                    t = JSON.parse(t)
                                } catch (e) {}
                            a.byUser = void 0 === t || "" === t ? 1 : 0,
                                this.trigger("back", t, a),
                                this.trigger("_back", t, a)
                        }
                    }, {
                        key: "onRefresh",
                        value: function() {
                            var e = ["refresh"].concat([].slice.call(arguments));
                            this.trigger.apply(this, e)
                        }
                    }, {
                        key: "pageDidAppear",
                        value: function() {
                            var e = ["pagehide"].concat([].slice.call(arguments));
                            this.trigger.apply(this, e)
                        }
                    }, {
                        key: "pullRefresh",
                        value: function(e) {
                            var t = ["pullrefresh"].concat([].slice.call(arguments));
                            this.trigger.apply(this, t)
                        }
                    }, {
                        key: "interChangeAPP",
                        value: function() {
                            var e = ["interChangeAPP"].concat([].slice.call(arguments));
                            this.trigger.apply(this, e)
                        }
                    }, {
                        key: "dealTimeOut",
                        value: function() {
                            this.trigger.apply(this, ["dealTimeOut"].concat([].slice.call(arguments)))
                        }
                    }, {
                        key: "message",
                        value: function(e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(decodeURIComponent(e.replace(/\+/g, " ")))
                                } catch (e) {}
                            var t = ["message"].concat([e]);
                            this.trigger.apply(this, t)
                        }
                    }, {
                        key: "tabChange",
                        value: function(e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(decodeURIComponent(e.replace(/\+/g, " ")))
                                } catch (e) {}
                            if ("object" === f(e))
                                if (e.data) {
                                    if (!e.to) {
                                        var t = e.data;
                                        e.to = t.to,
                                            e.from = t.from
                                    }
                                } else
                                    e.data = {
                                        to: e.to,
                                        from: e.from
                                    };
                            var a = ["tabChange"].concat(e);
                            this.trigger.apply(this, a)
                        }
                    }, {
                        key: "onBackPressed",
                        value: function(e) {
                            this.trigger.apply(this, ["onBackPressed"].concat([].slice.call(arguments)))
                        }
                    }]),
                    a
            }()
                , n = {
                data: function(e, t, a) {
                    var n = localStorage;
                    if (a && "1" === a && (n = sessionStorage),
                    e && void 0 === t)
                        return function() {
                            var t = n.getItem(e);
                            try {
                                t = JSON.parse(t)
                            } catch (e) {}
                            return t
                        }();
                    e && null === t ? n.removeItem(e) : n.setItem(e, JSON.stringify(t))
                },
                getParameter: function(e, t) {
                    var a = new RegExp("[&,?]" + e + "=([^\\&]*)","i").exec(t || location.search);
                    return a ? a[1] : ""
                },
                getQueryMap: function(e) {
                    var t, a, n = {}, r = /[?&]([^=?]+)=([^?&#]+)/;
                    if (!(t = (e = e || location.href).match(/[?&][^?&]+=[^?&#]+/g)))
                        return n;
                    for (var i = 0, o = t.length; i < o; i++)
                        null !== (a = t[i].match(r)) && (n[a[1]] = decodeURIComponent(a[2]),
                        /(%[0-9A-Z]{2})/.test(n[a[1]]) && (n[a[1]] = decodeURIComponent(n[a[1]]),
                        /(%[0-9A-Z]{2})/.test(n[a[1]]) && (n[a[1]] = decodeURIComponent(n[a[1]]))));
                    return n
                },
                param: function(e) {
                    var t, a, n = [];
                    for (var r in e)
                        t = r,
                        (a = e[r]) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(a || "Not Support"));
                    return n.join("&")
                },
                throttle: function(e, t, a) {
                    var n, r, i, o, l = 0;
                    a || (a = {});
                    var c = function() {
                        l = !1 === a.leading ? 0 : (new Date).getTime(),
                            n = null,
                            o = e.apply(r, i),
                        n || (r = i = null)
                    }
                        , s = function() {
                        var s = (new Date).getTime();
                        l || !1 !== a.leading || (l = s);
                        var u = t - (s - l);
                        return r = this,
                            i = arguments,
                            u <= 0 || u > t ? (n && (clearTimeout(n),
                                n = null),
                                l = s,
                                o = e.apply(r, i),
                            n || (r = i = null)) : n || !1 === a.trailing || (n = setTimeout(c, u)),
                            o
                    };
                    return s.cancel = function() {
                        clearTimeout(n),
                            l = 0,
                            n = r = i = null
                    }
                        ,
                        s
                }
            }
                , r = n.getParameter("serverEnv")
                , i = {
                STG: "http://36.110.234.247/api/element.do",
                STG1: "http://36.110.234.247/api/element.do",
                STG2: "http://stg2-ele-web.daikuan.360.cn/api/element.do",
                STG3: "http://106.120.164.158/api/element.do",
                PRD: "https://ele.daikuan.360.cn/api/element.do"
            }
                , s = {
                StoreKey: "TABBAR__RED_POINT_DATA",
                Config: {
                    eleType: "tabRedPoint",
                    supportType: ["financing", "ensure", "shop"]
                },
                removeRedPointByType: function(e, t) {
                    if (!e || -1 === s.Config.supportType.indexOf(e))
                        return !1;
                    p.getData(s.StoreKey, function(a) {
                        for (var n = (a[s.StoreKey] || {}).list || [], r = [], i = !1, o = 0, l = n.length; o < l; o++)
                            n[o].tabType === e ? (p.updateTabbarItems({
                                items: [{
                                    badgeValue: "",
                                    index: String(n[o].tabIndex)
                                }]
                            }),
                                s.reportRemoveRedPoint(n[o], t),
                                i = !0) : r.push(n[o]);
                        i && p.setData(s.StoreKey, {
                            list: r
                        })
                    })
                },
                reportRemoveRedPoint: function(e, t) {
                    p.request({
                        url: t ? i[t] || i.PRD : i[r] || i.PRD,
                        type: "post",
                        data: {
                            method: "qihoo.sdk.ele.elements.commonClick",
                            bizContent: JSON.stringify({
                                eleType: s.Config.eleType,
                                elementCode: e.elementNo
                            })
                        },
                        success: function(e) {},
                        error: function(e) {}
                    })
                }
            }
                , p = new (function(e) {
                function a() {
                    var e;
                    return u(this, a),
                        (e = o(this, l(a).call(this)))._STORE = {},
                        e._SUPPORT_VERSION = {
                            getVolumeState: {
                                iOS: "1.6.2",
                                android: null
                            },
                            getFileWithId: {
                                android: "1.6.0"
                            }
                        },
                        e._NOT_SUPPORT_FLAG = "F",
                        e._NOT_SUPPORT_MSG = "当前APP版本不支持，请升级至更新版本APP",
                        e.URL = {
                            STG: "http://36.110.234.238/api/gateway.do",
                            STG2: "http://36.110.234.225/api/gateway.do",
                            STG3: "http://36.110.233.229/api/gateway.do",
                            UAT: "http://36.110.213.55/api/gateway.do",
                            PRD: "https://daikuan.360.cn/api/gateway.do"
                        },
                        e.tip = n.throttle(e.tip, 2e3, {
                            trailing: !1
                        }),
                        e.showCustomerTip = n.throttle(e.showCustomerTip, 2e3, {
                            trailing: !1
                        }),
                        e.back = n.throttle(e.back, 2e3, {
                            trailing: !1
                        }),
                        e
                }
                return c(a, t),
                    d(a, [{
                        key: "invokeNativeMethod",
                        value: function(e, t) {
                            var a, n = this, r = t.callback || null, i = this._SUPPORT_VERSION, o = this.IS_IOS, l = this._NOT_SUPPORT_FLAG, c = this._NOT_SUPPORT_MSG, s = o ? "iOS" : "android";
                            i[e] && i[e][s] && (a = i[e][s]);
                            var u = function(a) {
                                if (a) {
                                    var i = {
                                        data: t.data || {},
                                        callback: t.callback
                                    };
                                    n.call(e, i)
                                } else
                                    o = {
                                        flag: l,
                                        msg: c,
                                        data: {}
                                    },
                                    r && r(o);
                                var o
                            };
                            a ? this.compareVersion(a, function(e) {
                                u(e > -1)
                            }) : u(void 0 === a)
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            var t = e.data || {}
                                , a = []
                                , n = e.timeout || 3e4
                                , r = e.type || "get";
                            if (/^get|post$/.test(r) || (r = "get"),
                            t && "object" === f(t)) {
                                for (var i in t)
                                    try {
                                        a.push(i + "=" + encodeURIComponent(decodeURIComponent(t[i])))
                                    } catch (e) {
                                        try {
                                            a.push(i + "=" + encodeURIComponent(t[i]))
                                        } catch (e) {
                                            a.push(i + "=" + encodeURIComponent(escape(t[i])))
                                        }
                                    }
                                t = a.join("&")
                            }
                            var o = {
                                data: {
                                    url: e.url,
                                    type: r,
                                    headers: e.headers,
                                    params: t,
                                    timeout: n
                                },
                                successCallback: function() {
                                    e.success && e.success.apply(this, arguments),
                                    e.complete && e.complete.apply(this, arguments)
                                },
                                failCallback: function() {
                                    e.error && e.error.apply(this, arguments),
                                    e.complete && e.complete.apply(this, arguments)
                                }
                            };
                            e.fileId && (o.data.fileId = e.fileId),
                            e.fileKey && (o.data.fileKey = e.fileKey),
                            e.fileMap && (o.data.fileMap = e.fileMap),
                            e.fileId && !e.fileMap && (o.data.fileMap = [{
                                fileId: e.fileId,
                                fileKey: e.fileKey
                            }]),
                                this.call("request", o)
                        }
                    }, {
                        key: "_paramsUrl",
                        value: function(e, t) {
                            var a = t.split("?")
                                , r = a[0]
                                , i = a[1] || ""
                                , o = {}
                                , l = i && i.length > 0 ? n.getQueryMap(t) : {};
                            return o && ["e_source", "gestureAble", "nativeStyle", "navStyle", "redirectURL", "redirectForced", "leftCallback"].forEach(function(e, t) {
                                delete o[e]
                            }),
                            o && o.sourceFrom && "TabBar" === o.sourceFrom && delete o.sourceFrom,
                                this.extend(o, l),
                                this.extend(o, e),
                            o && (t = r + "?" + n.param(o)),
                                t
                        }
                    }, {
                        key: "_mergeUrl",
                        value: function(e, t) {
                            return this.extend(n.getQueryMap(e), t),
                            e + (e.indexOf("?") > -1 ? "&" : "?") + n.param(t)
                        }
                    }, {
                        key: "forward",
                        value: function(e, t) {
                            var a = this;
                            e = e || {
                                data: {}
                            };
                            var r = location.pathname.split("/").pop();
                            !e.data && (e.data = {}),
                                e.data.Referer = r;
                            var i = "";
                            e.url.indexOf("#") > 0 && (i = e.url.split("#").pop());
                            var o = r.split(".")[0] || ""
                                , l = decodeURIComponent(n.getParameter("e_track"))
                                , c = e.url ? decodeURIComponent(n.getParameter("e_source", e.url)) : null
                                , s = c || e.data.e_source || o.toUpperCase();
                            e.data.e_track = l ? [l, s].join("/") : s;
                            var u = arguments
                                , p = e.data || {}
                                , d = this._paramsUrl(p, e.url);
                            if (i && (d += "#" + i),
                                document.activeElement.blur(),
                                this.IS_LOCAL)
                                return /^http/.test(d) || (d = "/" + d),
                                    void window.open(d, "_blank");
                            var f = function() {
                                var t = {
                                    data: {
                                        url: d,
                                        title: e.title || ""
                                    },
                                    callback: e.callback || ""
                                };
                                e.direction && (t.data.direction = e.direction),
                                    a.call("forward", t)
                            };
                            this.verson ? this.verson < 103 && "360PLUGIN" === String(p.appChannel).toUpperCase() ? f() : this.reachability(function(e) {
                                if (!e || "F" === String(e.flag).toUpperCase() || !e.data || "NONE" === String(e.data.state).toUpperCase())
                                    return a.tip("您的网络不通畅，请检查您的网络或重试");
                                f()
                            }) : this.getAppVersion(function(e) {
                                a.verson = String(e.data.version).replace(/\./g, ""),
                                    a.verson = isNaN(a.verson) ? 102 : Number(a.verson),
                                    a.forward.apply(a, u)
                            })
                        }
                    }, {
                        key: "back",
                        value: function(e) {
                            document.activeElement.blur();
                            var t = ""
                                , a = "";
                            if ((e = e || {}) && e.url && (t = (t = e.url).substring(0, t.lastIndexOf("?") > -1 ? t.lastIndexOf("?") : t.length)),
                            e && e.data && (a = e.data),
                                this.IS_LOCAL)
                                window.open(t, "_blank");
                            else {
                                var n = {
                                    data: {
                                        url: t,
                                        data: a
                                    },
                                    callback: e.callback
                                };
                                this.call("back", n)
                            }
                        }
                    }, {
                        key: "setHeader",
                        value: function(e) {
                            void 0 === e.isBack && (e.isBack = !0),
                            "not" === e.isBack && delete e.isBack,
                            e.title && (e.title = decodeURIComponent(e.title));
                            var t = {
                                data: e
                            };
                            this.call("setHeader", t)
                        }
                    }, {
                        key: "setNavLeftBars",
                        value: function(e) {
                            var t = {
                                data: e
                            };
                            this.call("setNavLeftBars", t)
                        }
                    }, {
                        key: "setNavRightBars",
                        value: function(e) {
                            var t = {
                                data: e
                            };
                            this.call("setNavRightBars", t)
                        }
                    }, {
                        key: "updateNavLeftBar",
                        value: function(e) {
                            var t = {
                                data: e
                            };
                            this.call("updateNavLeftBar", t)
                        }
                    }, {
                        key: "updateTabbarItems",
                        value: function(e) {
                            var t = {
                                data: e
                            };
                            this.call("updateTabbarItems", t)
                        }
                    }, {
                        key: "getFileWithId",
                        value: function(e, t) {
                            var a = {
                                data: e,
                                callback: t
                            };
                            this.invokeNativeMethod("getFileWithId", a)
                        }
                    }, {
                        key: "updateNavRightBar",
                        value: function(e) {
                            var t = {
                                data: e
                            };
                            this.call("updateNavRightBar", t)
                        }
                    }, {
                        key: "gestureAble",
                        value: function(e) {
                            var t = {
                                data: e,
                                callback: function(e) {}
                            };
                            this.call("gestureAble", t)
                        }
                    }, {
                        key: "loadingBegin",
                        value: function(e) {
                            var t = ""
                                , a = "false";
                            e && (t = e.msg,
                                a = e.isCancelable || a);
                            var n = {
                                data: {
                                    msg: t,
                                    isCancelable: a
                                }
                            };
                            this.call("loadingBegin", n)
                        }
                    }, {
                        key: "loadingFinish",
                        value: function() {
                            this.call("loadingFinish", {
                                data: {}
                            })
                        }
                    }, {
                        key: "tip",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if ("" === e)
                                return !1;
                            var t = {
                                data: {
                                    msg: e
                                }
                            };
                            this.call("tip", t)
                        }
                    }, {
                        key: "showCustomerTip",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                , t = {
                                data: {
                                    message: e.message || e.text || "",
                                    time: e.time || 0
                                }
                            };
                            if ("" === t.data.message)
                                return !1;
                            this.call("showCustomerTip", t)
                        }
                    }, {
                        key: "_getInfo",
                        value: function(e) {
                            this.call("getUserInfo", e)
                        }
                    }, {
                        key: "getAppVersion",
                        value: function(e) {
                            var t = this;
                            if (this._STORE.appVersion)
                                return e && e(this._STORE.appVersion);
                            var a = {
                                data: {},
                                callback: function(a) {
                                    "S" === a.flag && (t._STORE.appVersion = a),
                                    e && e(a)
                                }
                            };
                            this.call("getAppVersion", a),
                            this.IS_LOCAL && "function" == typeof e && e({
                                flag: "S",
                                msg: "",
                                data: {
                                    version: "1.12.0"
                                }
                            })
                        }
                    }, {
                        key: "setPullAble",
                        value: function(e, t) {
                            var a = {
                                data: {
                                    able: e.able || "Y"
                                },
                                callback: t || ""
                            };
                            this.IS_IOS && this.call("setPullAble", a)
                        }
                    }, {
                        key: "reachability",
                        value: function(e) {
                            var t = {
                                data: {},
                                callback: e || ""
                            };
                            if (this.call("reachability", t),
                                this.IS_LOCAL)
                                return e && e({
                                    flag: "S",
                                    data: {
                                        state: "3G"
                                    },
                                    msg: ""
                                })
                        }
                    }, {
                        key: "openURL",
                        value: function(e, t) {
                            if (this.IS_ANDROID)
                                return !1;
                            var a = {
                                url: e
                            };
                            t && (a.action = t);
                            var n = {
                                data: a,
                                callback: ""
                            };
                            this.call("openURL", n)
                        }
                    }, {
                        key: "callSystemSupport",
                        value: function(e, t) {
                            var a = {
                                data: e || {},
                                callback: t || ""
                            };
                            this.call("callSystemSupport", a)
                        }
                    }, {
                        key: "compareVersion",
                        value: function(e, t) {
                            this.getAppVersion(function(a) {
                                for (var n = a.data.version.split("."), r = e.split("."), i = function(e) {
                                    t && t(e)
                                }, o = 0, l = n.length; o < l; o++) {
                                    if (parseInt(n[o]) > parseInt(r[o]))
                                        return i(1),
                                            1;
                                    if (parseInt(n[o]) < parseInt(r[o]))
                                        return i(-1),
                                            -1
                                }
                                return i(0),
                                    0
                            })
                        }
                    }, {
                        key: "share",
                        value: function(e) {
                            var t = {
                                data: {
                                    title: e.data.title || "",
                                    image: e.data.image || "",
                                    href: e.data.href || "",
                                    type: e.data.type || "",
                                    description: e.data.description || "",
                                    shareSource: e.data.shareSource || "web",
                                    sourceHref: e.data.sourceHref || "",
                                    userName: e.data.userName || "",
                                    miniPath: e.data.miniPath || "",
                                    weiboText: e.data.weiboText || "",
                                    baseImage: e.data.baseImage || "",
                                    miniProgramType: e.data.miniProgramType || "0"
                                },
                                callback: e.callback || ""
                            };
                            this.call("share", t),
                            this.IS_LOCAL && e.callback && e.callback({
                                flag: "S",
                                data: {
                                    status: "end",
                                    result: "S"
                                }
                            })
                        }
                    }, {
                        key: "openSafeWindow",
                        value: function(e) {
                            var t = {
                                data: {
                                    url: e.url || "",
                                    params: e.params || "",
                                    type: e.type || "",
                                    isSDK: e.isSDK || "",
                                    channel: e.channel || ""
                                },
                                callback: e.callback || ""
                            };
                            this.call("openSafeWindow", t)
                        }
                    }, {
                        key: "setSelectedTabBar",
                        value: function(e) {
                            var t = {
                                data: e.data || {},
                                callback: e.callback || ""
                            };
                            this.call("setSelectedTabBar", t)
                        }
                    }, {
                        key: "updateStatusBarStyle",
                        value: function(e) {
                            var t = {
                                data: e.data || {},
                                callback: e.callback || ""
                            };
                            this.call("updateStatusBarStyle", t)
                        }
                    }, {
                        key: "setCoverState",
                        value: function(e) {
                            var t = {
                                data: e.data || {},
                                callback: e.callback || ""
                            };
                            this.call("setCoverState", t)
                        }
                    }, {
                        key: "activeKeyboardOnAutoFocus",
                        value: function(e) {
                            var t = {
                                data: e.data || {},
                                callback: e.callback || ""
                            };
                            this.call("activeKeyboardOnAutoFocus", t)
                        }
                    }, {
                        key: "authorization",
                        value: function(e, t, a) {
                            var n = this;
                            this._getInfo(function(r) {
                                if (r && r.userNo) {
                                    var i = {
                                        isLogin: !0,
                                        userNo: r.userNo
                                    }
                                        , o = a && n.URL[a] || n.URL.PRD;
                                    n.request({
                                        url: o,
                                        type: "post",
                                        data: {
                                            method: "qihoo.sdk.user.authorize.commit",
                                            bizContent: JSON.stringify({
                                                commitType: "ADD",
                                                authPartner: e,
                                                authType: "PERSONALINFO"
                                            })
                                        },
                                        success: function(e) {
                                            return e && "F" === e.flag && "BLPS0004" === e.code ? t({
                                                isLogin: !1,
                                                userNo: ""
                                            }) : t(i, e)
                                        },
                                        error: function(e) {
                                            return t(i, e)
                                        }
                                    })
                                } else
                                    t({
                                        isLogin: !1,
                                        userNo: ""
                                    })
                            })
                        }
                    }, {
                        key: "accountStatus",
                        value: function(e) {
                            var t = {
                                isLogin: !1,
                                userNo: ""
                            };
                            this._getInfo(function(a) {
                                a && a.userNo && (t.isLogin = !0,
                                    t.userNo = a.userNo),
                                    e(t)
                            })
                        }
                    }, {
                        key: "systemAuthorization",
                        value: function(e) {
                            if (this.IS_IOS) {
                                var t = {
                                    data: {
                                        authType: e.authType
                                    },
                                    callback: e.callback || ""
                                };
                                this.call("authorization", t)
                            } else
                                e.callback && e.callback({
                                    flag: this._NOT_SUPPORT_FLAG,
                                    msg: this._NOT_SUPPORT_MSG
                                })
                        }
                    }, {
                        key: "faceRecognition",
                        value: function(e) {
                            var t = {
                                data: {
                                    sdkType: e.sdkType
                                },
                                callback: e.callback || ""
                            };
                            this.call("faceRecognition", t)
                        }
                    }, {
                        key: "choiceImage",
                        value: function(e) {
                            var t = e.data || {}
                                , a = {
                                data: {
                                    limitSize: t.limitSize || "",
                                    maxWidth: t.maxWidth || "",
                                    imageSourceType: t.imageSourceType || ""
                                },
                                callback: e.callback || ""
                            };
                            this.call("choiceImage", a)
                        }
                    }, {
                        key: "getIDPhoto",
                        value: function(e) {
                            var t = {
                                data: e.data,
                                callback: e.callback
                            };
                            this.call("getIDPhoto", t)
                        }
                    }, {
                        key: "setData",
                        value: function(e, t) {
                            if ("object" !== f(t))
                                return !1;
                            var a = {};
                            a[e] = t,
                                this.call("setLocalData", {
                                    data: a
                                })
                        }
                    }, {
                        key: "getData",
                        value: function(e, t) {
                            if ("string" == typeof e && (e = [e]),
                                this.IS_ANDROID) {
                                for (var a = {}, n = 0, r = e.length; n < r; n++)
                                    a[e[n]] = "";
                                e = a
                            }
                            var i = {
                                data: {
                                    keys: e
                                },
                                callback: function(e) {
                                    if ("S" === e.flag && e.data)
                                        for (var a in e.data)
                                            if (e.data.hasOwnProperty(a)) {
                                                var n = e.data[a];
                                                if (n && "string" == typeof n)
                                                    try {
                                                        e.data[a] = JSON.parse(n)
                                                    } catch (e) {}
                                            }
                                    t && t(e.data || {})
                                }
                            };
                            this.call("getLocalData", i)
                        }
                    }]),
                    a
            }());
            return window.$$ = window.$$ || {},
                window.$$.platformAdapter = window.App = p,
                window.$$.EventListener = new a,
                p.removeRedPoint = s.removeRedPointByType,
                p
        }
        ,
        "object" === f(t) && void 0 !== e ? e.exports = i() : void 0 === (r = "function" == typeof (n = i) ? n.call(t, a, t, e) : n) || (e.exports = r)
}
]);
