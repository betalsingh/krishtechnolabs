! function() {
    var requirejs, require, define;
    ! function(t) {
        function e(t, e) {
            return v.call(t, e)
        }

        function i(t, e) {
            var i, n, s, o, r, a, l, h, c, u, d, p = e && e.split("/"),
                f = g.map,
                m = f && f["*"] || {};
            if (t && "." === t.charAt(0))
                if (e) {
                    for (p = p.slice(0, p.length - 1), t = t.split("/"), r = t.length - 1, g.nodeIdCompat && y.test(t[r]) && (t[r] = t[r].replace(y, "")), t = p.concat(t), c = 0; c < t.length; c += 1)
                        if (d = t[c], "." === d) t.splice(c, 1), c -= 1;
                        else if (".." === d) {
                        if (1 === c && (".." === t[2] || ".." === t[0])) break;
                        c > 0 && (t.splice(c - 1, 2), c -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((p || m) && f) {
                for (i = t.split("/"), c = i.length; c > 0; c -= 1) {
                    if (n = i.slice(0, c).join("/"), p)
                        for (u = p.length; u > 0; u -= 1)
                            if (s = f[p.slice(0, u).join("/")], s && (s = s[n])) {
                                o = s, a = c;
                                break
                            }
                    if (o) break;
                    !l && m && m[n] && (l = m[n], h = c)
                }!o && l && (o = l, a = h), o && (i.splice(0, a, o), t = i.join("/"))
            }
            return t
        }

        function n(e, i) {
            return function() {
                return c.apply(t, b.call(arguments, 0).concat([e, i]))
            }
        }

        function s(t) {
            return function(e) {
                return i(e, t)
            }
        }

        function o(t) {
            return function(e) {
                p[t] = e
            }
        }

        function r(i) {
            if (e(f, i)) {
                var n = f[i];
                delete f[i], m[i] = !0, h.apply(t, n)
            }
            if (!e(p, i) && !e(m, i)) throw new Error("No " + i);
            return p[i]
        }

        function a(t) {
            var e, i = t ? t.indexOf("!") : -1;
            return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
        }

        function l(t) {
            return function() {
                return g && g.config && g.config[t] || {}
            }
        }
        var h, c, u, d, p = {},
            f = {},
            g = {},
            m = {},
            v = Object.prototype.hasOwnProperty,
            b = [].slice,
            y = /\.js$/;
        u = function(t, e) {
            var n, o = a(t),
                l = o[0];
            return t = o[1], l && (l = i(l, e), n = r(l)), l ? t = n && n.normalize ? n.normalize(t, s(e)) : i(t, e) : (t = i(t, e), o = a(t), l = o[0], t = o[1], l && (n = r(l))), {
                f: l ? l + "!" + t : t,
                n: t,
                pr: l,
                p: n
            }
        }, d = {
            require: function(t) {
                return n(t)
            },
            exports: function(t) {
                var e = p[t];
                return "undefined" != typeof e ? e : p[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: p[t],
                    config: l(t)
                }
            }
        }, h = function(i, s, a, l) {
            var h, c, g, v, b, y, w = [],
                _ = typeof a;
            if (l = l || i, "undefined" === _ || "function" === _) {
                for (s = !s.length && a.length ? ["require", "exports", "module"] : s, b = 0; b < s.length; b += 1)
                    if (v = u(s[b], l), c = v.f, "require" === c) w[b] = d.require(i);
                    else if ("exports" === c) w[b] = d.exports(i), y = !0;
                else if ("module" === c) h = w[b] = d.module(i);
                else if (e(p, c) || e(f, c) || e(m, c)) w[b] = r(c);
                else {
                    if (!v.p) throw new Error(i + " missing " + c);
                    v.p.load(v.n, n(l, !0), o(c), {}), w[b] = p[c]
                }
                g = a ? a.apply(p[i], w) : void 0, i && (h && h.exports !== t && h.exports !== p[i] ? p[i] = h.exports : g === t && y || (p[i] = g))
            } else i && (p[i] = a)
        }, requirejs = require = c = function(e, i, n, s, o) {
            if ("string" == typeof e) return d[e] ? d[e](i) : r(u(e, i).f);
            if (!e.splice) {
                if (g = e, g.deps && c(g.deps, g.callback), !i) return;
                i.splice ? (e = i, i = n, n = null) : e = t
            }
            return i = i || function() {}, "function" == typeof n && (n = s, s = o), s ? h(t, e, i, n) : setTimeout(function() {
                h(t, e, i, n)
            }, 4), c
        }, c.config = function(t) {
            return c(t)
        }, requirejs._defined = p, define = function(t, i, n) {
            i.splice || (n = i, i = []), e(p, t) || e(f, t) || (f[t] = [t, i, n])
        }, define.amd = {
            jQuery: !0
        }
    }(), define("../lib/almond", function() {}),
        function() {
            var t = this,
                e = t._,
                i = {},
                n = Array.prototype,
                s = Object.prototype,
                o = Function.prototype,
                r = n.push,
                a = n.slice,
                l = n.concat,
                h = s.toString,
                c = s.hasOwnProperty,
                u = n.forEach,
                d = n.map,
                p = n.reduce,
                f = n.reduceRight,
                g = n.filter,
                m = n.every,
                v = n.some,
                b = n.indexOf,
                y = n.lastIndexOf,
                w = Array.isArray,
                _ = Object.keys,
                k = o.bind,
                x = function(t) {
                    return t instanceof x ? t : this instanceof x ? void(this._wrapped = t) : new x(t)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.6.0";
            var C = x.each = x.forEach = function(t, e, n) {
                if (null == t) return t;
                if (u && t.forEach === u) t.forEach(e, n);
                else if (t.length === +t.length) {
                    for (var s = 0, o = t.length; o > s; s++)
                        if (e.call(n, t[s], s, t) === i) return
                } else
                    for (var r = x.keys(t), s = 0, o = r.length; o > s; s++)
                        if (e.call(n, t[r[s]], r[s], t) === i) return;
                return t
            };
            x.map = x.collect = function(t, e, i) {
                var n = [];
                return null == t ? n : d && t.map === d ? t.map(e, i) : (C(t, function(t, s, o) {
                    n.push(e.call(i, t, s, o))
                }), n)
            };
            var T = "Reduce of empty array with no initial value";
            x.reduce = x.foldl = x.inject = function(t, e, i, n) {
                var s = arguments.length > 2;
                if (null == t && (t = []), p && t.reduce === p) return n && (e = x.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
                if (C(t, function(t, o, r) {
                        s ? i = e.call(n, i, t, o, r) : (i = t, s = !0)
                    }), !s) throw new TypeError(T);
                return i
            }, x.reduceRight = x.foldr = function(t, e, i, n) {
                var s = arguments.length > 2;
                if (null == t && (t = []), f && t.reduceRight === f) return n && (e = x.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
                var o = t.length;
                if (o !== +o) {
                    var r = x.keys(t);
                    o = r.length
                }
                if (C(t, function(a, l, h) {
                        l = r ? r[--o] : --o, s ? i = e.call(n, i, t[l], l, h) : (i = t[l], s = !0)
                    }), !s) throw new TypeError(T);
                return i
            }, x.find = x.detect = function(t, e, i) {
                var n;
                return D(t, function(t, s, o) {
                    return e.call(i, t, s, o) ? (n = t, !0) : void 0
                }), n
            }, x.filter = x.select = function(t, e, i) {
                var n = [];
                return null == t ? n : g && t.filter === g ? t.filter(e, i) : (C(t, function(t, s, o) {
                    e.call(i, t, s, o) && n.push(t)
                }), n)
            }, x.reject = function(t, e, i) {
                return x.filter(t, function(t, n, s) {
                    return !e.call(i, t, n, s)
                }, i)
            }, x.every = x.all = function(t, e, n) {
                e || (e = x.identity);
                var s = !0;
                return null == t ? s : m && t.every === m ? t.every(e, n) : (C(t, function(t, o, r) {
                    return (s = s && e.call(n, t, o, r)) ? void 0 : i
                }), !!s)
            };
            var D = x.some = x.any = function(t, e, n) {
                e || (e = x.identity);
                var s = !1;
                return null == t ? s : v && t.some === v ? t.some(e, n) : (C(t, function(t, o, r) {
                    return s || (s = e.call(n, t, o, r)) ? i : void 0
                }), !!s)
            };
            x.contains = x.include = function(t, e) {
                return null == t ? !1 : b && t.indexOf === b ? -1 != t.indexOf(e) : D(t, function(t) {
                    return t === e
                })
            }, x.invoke = function(t, e) {
                var i = a.call(arguments, 2),
                    n = x.isFunction(e);
                return x.map(t, function(t) {
                    return (n ? e : t[e]).apply(t, i)
                })
            }, x.pluck = function(t, e) {
                return x.map(t, x.property(e))
            }, x.where = function(t, e) {
                return x.filter(t, x.matches(e))
            }, x.findWhere = function(t, e) {
                return x.find(t, x.matches(e))
            }, x.max = function(t, e, i) {
                if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                var n = -(1 / 0),
                    s = -(1 / 0);
                return C(t, function(t, o, r) {
                    var a = e ? e.call(i, t, o, r) : t;
                    a > s && (n = t, s = a)
                }), n
            }, x.min = function(t, e, i) {
                if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
                var n = 1 / 0,
                    s = 1 / 0;
                return C(t, function(t, o, r) {
                    var a = e ? e.call(i, t, o, r) : t;
                    s > a && (n = t, s = a)
                }), n
            }, x.shuffle = function(t) {
                var e, i = 0,
                    n = [];
                return C(t, function(t) {
                    e = x.random(i++), n[i - 1] = n[e], n[e] = t
                }), n
            }, x.sample = function(t, e, i) {
                return null == e || i ? (t.length !== +t.length && (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
            };
            var E = function(t) {
                return null == t ? x.identity : x.isFunction(t) ? t : x.property(t)
            };
            x.sortBy = function(t, e, i) {
                return e = E(e), x.pluck(x.map(t, function(t, n, s) {
                    return {
                        value: t,
                        index: n,
                        criteria: e.call(i, t, n, s)
                    }
                }).sort(function(t, e) {
                    var i = t.criteria,
                        n = e.criteria;
                    if (i !== n) {
                        if (i > n || void 0 === i) return 1;
                        if (n > i || void 0 === n) return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var $ = function(t) {
                return function(e, i, n) {
                    var s = {};
                    return i = E(i), C(e, function(o, r) {
                        var a = i.call(n, o, r, e);
                        t(s, a, o)
                    }), s
                }
            };
            x.groupBy = $(function(t, e, i) {
                x.has(t, e) ? t[e].push(i) : t[e] = [i]
            }), x.indexBy = $(function(t, e, i) {
                t[e] = i
            }), x.countBy = $(function(t, e) {
                x.has(t, e) ? t[e]++ : t[e] = 1
            }), x.sortedIndex = function(t, e, i, n) {
                i = E(i);
                for (var s = i.call(n, e), o = 0, r = t.length; r > o;) {
                    var a = o + r >>> 1;
                    i.call(n, t[a]) < s ? o = a + 1 : r = a
                }
                return o
            }, x.toArray = function(t) {
                return t ? x.isArray(t) ? a.call(t) : t.length === +t.length ? x.map(t, x.identity) : x.values(t) : []
            }, x.size = function(t) {
                return null == t ? 0 : t.length === +t.length ? t.length : x.keys(t).length
            }, x.first = x.head = x.take = function(t, e, i) {
                return null != t ? null == e || i ? t[0] : 0 > e ? [] : a.call(t, 0, e) : void 0
            }, x.initial = function(t, e, i) {
                return a.call(t, 0, t.length - (null == e || i ? 1 : e))
            }, x.last = function(t, e, i) {
                return null != t ? null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0)) : void 0
            }, x.rest = x.tail = x.drop = function(t, e, i) {
                return a.call(t, null == e || i ? 1 : e)
            }, x.compact = function(t) {
                return x.filter(t, x.identity)
            };
            var I = function(t, e, i) {
                return e && x.every(t, x.isArray) ? l.apply(i, t) : (C(t, function(t) {
                    x.isArray(t) || x.isArguments(t) ? e ? r.apply(i, t) : I(t, e, i) : i.push(t)
                }), i)
            };
            x.flatten = function(t, e) {
                return I(t, e, [])
            }, x.without = function(t) {
                return x.difference(t, a.call(arguments, 1))
            }, x.partition = function(t, e, i) {
                e = E(e);
                var n = [],
                    s = [];
                return C(t, function(t) {
                    (e.call(i, t) ? n : s).push(t)
                }), [n, s]
            }, x.uniq = x.unique = function(t, e, i, n) {
                x.isFunction(e) && (n = i, i = e, e = !1);
                var s = i ? x.map(t, i, n) : t,
                    o = [],
                    r = [];
                return C(s, function(i, n) {
                    (e ? n && r[r.length - 1] === i : x.contains(r, i)) || (r.push(i), o.push(t[n]))
                }), o
            }, x.union = function() {
                return x.uniq(x.flatten(arguments, !0))
            }, x.intersection = function(t) {
                var e = a.call(arguments, 1);
                return x.filter(x.uniq(t), function(t) {
                    return x.every(e, function(e) {
                        return x.contains(e, t)
                    })
                })
            }, x.difference = function(t) {
                var e = l.apply(n, a.call(arguments, 1));
                return x.filter(t, function(t) {
                    return !x.contains(e, t)
                })
            }, x.zip = function() {
                for (var t = x.max(x.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = x.pluck(arguments, "" + i);
                return e
            }, x.object = function(t, e) {
                if (null == t) return {};
                for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
                return i
            }, x.indexOf = function(t, e, i) {
                if (null == t) return -1;
                var n = 0,
                    s = t.length;
                if (i) {
                    if ("number" != typeof i) return n = x.sortedIndex(t, e), t[n] === e ? n : -1;
                    n = 0 > i ? Math.max(0, s + i) : i
                }
                if (b && t.indexOf === b) return t.indexOf(e, i);
                for (; s > n; n++)
                    if (t[n] === e) return n;
                return -1
            }, x.lastIndexOf = function(t, e, i) {
                if (null == t) return -1;
                var n = null != i;
                if (y && t.lastIndexOf === y) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
                for (var s = n ? i : t.length; s--;)
                    if (t[s] === e) return s;
                return -1
            }, x.range = function(t, e, i) {
                arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
                for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, o = new Array(n); n > s;) o[s++] = t, t += i;
                return o
            };
            var M = function() {};
            x.bind = function(t, e) {
                var i, n;
                if (k && t.bind === k) return k.apply(t, a.call(arguments, 1));
                if (!x.isFunction(t)) throw new TypeError;
                return i = a.call(arguments, 2), n = function() {
                    if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
                    M.prototype = t.prototype;
                    var s = new M;
                    M.prototype = null;
                    var o = t.apply(s, i.concat(a.call(arguments)));
                    return Object(o) === o ? o : s
                }
            }, x.partial = function(t) {
                var e = a.call(arguments, 1);
                return function() {
                    for (var i = 0, n = e.slice(), s = 0, o = n.length; o > s; s++) n[s] === x && (n[s] = arguments[i++]);
                    for (; i < arguments.length;) n.push(arguments[i++]);
                    return t.apply(this, n)
                }
            }, x.bindAll = function(t) {
                var e = a.call(arguments, 1);
                if (0 === e.length) throw new Error("bindAll must be passed function names");
                return C(e, function(e) {
                    t[e] = x.bind(t[e], t)
                }), t
            }, x.memoize = function(t, e) {
                var i = {};
                return e || (e = x.identity),
                    function() {
                        var n = e.apply(this, arguments);
                        return x.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
                    }
            }, x.delay = function(t, e) {
                var i = a.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, i)
                }, e)
            }, x.defer = function(t) {
                return x.delay.apply(x, [t, 1].concat(a.call(arguments, 1)))
            }, x.throttle = function(t, e, i) {
                var n, s, o, r = null,
                    a = 0;
                i || (i = {});
                var l = function() {
                    a = i.leading === !1 ? 0 : x.now(), r = null, o = t.apply(n, s), n = s = null
                };
                return function() {
                    var h = x.now();
                    a || i.leading !== !1 || (a = h);
                    var c = e - (h - a);
                    return n = this, s = arguments, 0 >= c ? (clearTimeout(r), r = null, a = h, o = t.apply(n, s), n = s = null) : r || i.trailing === !1 || (r = setTimeout(l, c)), o
                }
            }, x.debounce = function(t, e, i) {
                var n, s, o, r, a, l = function() {
                    var h = x.now() - r;
                    e > h ? n = setTimeout(l, e - h) : (n = null, i || (a = t.apply(o, s), o = s = null))
                };
                return function() {
                    o = this, s = arguments, r = x.now();
                    var h = i && !n;
                    return n || (n = setTimeout(l, e)), h && (a = t.apply(o, s), o = s = null), a
                }
            }, x.once = function(t) {
                var e, i = !1;
                return function() {
                    return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
                }
            }, x.wrap = function(t, e) {
                return x.partial(e, t)
            }, x.compose = function() {
                var t = arguments;
                return function() {
                    for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
                    return e[0]
                }
            }, x.after = function(t, e) {
                return function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
            }, x.keys = function(t) {
                if (!x.isObject(t)) return [];
                if (_) return _(t);
                var e = [];
                for (var i in t) x.has(t, i) && e.push(i);
                return e
            }, x.values = function(t) {
                for (var e = x.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = t[e[s]];
                return n
            }, x.pairs = function(t) {
                for (var e = x.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = [e[s], t[e[s]]];
                return n
            }, x.invert = function(t) {
                for (var e = {}, i = x.keys(t), n = 0, s = i.length; s > n; n++) e[t[i[n]]] = i[n];
                return e
            }, x.functions = x.methods = function(t) {
                var e = [];
                for (var i in t) x.isFunction(t[i]) && e.push(i);
                return e.sort()
            }, x.extend = function(t) {
                return C(a.call(arguments, 1), function(e) {
                    if (e)
                        for (var i in e) t[i] = e[i]
                }), t
            }, x.pick = function(t) {
                var e = {},
                    i = l.apply(n, a.call(arguments, 1));
                return C(i, function(i) {
                    i in t && (e[i] = t[i])
                }), e
            }, x.omit = function(t) {
                var e = {},
                    i = l.apply(n, a.call(arguments, 1));
                for (var s in t) x.contains(i, s) || (e[s] = t[s]);
                return e
            }, x.defaults = function(t) {
                return C(a.call(arguments, 1), function(e) {
                    if (e)
                        for (var i in e) void 0 === t[i] && (t[i] = e[i])
                }), t
            }, x.clone = function(t) {
                return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
            }, x.tap = function(t, e) {
                return e(t), t
            };
            var P = function(t, e, i, n) {
                if (t === e) return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
                var s = h.call(t);
                if (s != h.call(e)) return !1;
                switch (s) {
                    case "[object String]":
                        return t == String(e);
                    case "[object Number]":
                        return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e;
                    case "[object RegExp]":
                        return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
                }
                if ("object" != typeof t || "object" != typeof e) return !1;
                for (var o = i.length; o--;)
                    if (i[o] == t) return n[o] == e;
                var r = t.constructor,
                    a = e.constructor;
                if (r !== a && !(x.isFunction(r) && r instanceof r && x.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
                i.push(t), n.push(e);
                var l = 0,
                    c = !0;
                if ("[object Array]" == s) {
                    if (l = t.length, c = l == e.length)
                        for (; l-- && (c = P(t[l], e[l], i, n)););
                } else {
                    for (var u in t)
                        if (x.has(t, u) && (l++, !(c = x.has(e, u) && P(t[u], e[u], i, n)))) break;
                    if (c) {
                        for (u in e)
                            if (x.has(e, u) && !l--) break;
                        c = !l
                    }
                }
                return i.pop(), n.pop(), c
            };
            x.isEqual = function(t, e) {
                return P(t, e, [], [])
            }, x.isEmpty = function(t) {
                if (null == t) return !0;
                if (x.isArray(t) || x.isString(t)) return 0 === t.length;
                for (var e in t)
                    if (x.has(t, e)) return !1;
                return !0
            }, x.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, x.isArray = w || function(t) {
                return "[object Array]" == h.call(t)
            }, x.isObject = function(t) {
                return t === Object(t)
            }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
                x["is" + t] = function(e) {
                    return h.call(e) == "[object " + t + "]"
                }
            }), x.isArguments(arguments) || (x.isArguments = function(t) {
                return !(!t || !x.has(t, "callee"))
            }), "function" != typeof /./ && (x.isFunction = function(t) {
                return "function" == typeof t
            }), x.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, x.isNaN = function(t) {
                return x.isNumber(t) && t != +t
            }, x.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" == h.call(t)
            }, x.isNull = function(t) {
                return null === t
            }, x.isUndefined = function(t) {
                return void 0 === t
            }, x.has = function(t, e) {
                return c.call(t, e)
            }, x.noConflict = function() {
                return t._ = e, this
            }, x.identity = function(t) {
                return t
            }, x.constant = function(t) {
                return function() {
                    return t
                }
            }, x.property = function(t) {
                return function(e) {
                    return e[t]
                }
            }, x.matches = function(t) {
                return function(e) {
                    if (e === t) return !0;
                    for (var i in t)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }
            }, x.times = function(t, e, i) {
                for (var n = Array(Math.max(0, t)), s = 0; t > s; s++) n[s] = e.call(i, s);
                return n
            }, x.random = function(t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, x.now = Date.now || function() {
                return (new Date).getTime()
            };
            var S = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                }
            };
            S.unescape = x.invert(S.escape);
            var j = {
                escape: new RegExp("[" + x.keys(S.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + x.keys(S.unescape).join("|") + ")", "g")
            };
            x.each(["escape", "unescape"], function(t) {
                x[t] = function(e) {
                    return null == e ? "" : ("" + e).replace(j[t], function(e) {
                        return S[t][e]
                    })
                }
            }), x.result = function(t, e) {
                if (null != t) {
                    var i = t[e];
                    return x.isFunction(i) ? i.call(t) : i
                }
            }, x.mixin = function(t) {
                C(x.functions(t), function(e) {
                    var i = x[e] = t[e];
                    x.prototype[e] = function() {
                        var t = [this._wrapped];
                        return r.apply(t, arguments), H.call(this, i.apply(x, t))
                    }
                })
            };
            var z = 0;
            x.uniqueId = function(t) {
                var e = ++z + "";
                return t ? t + e : e
            }, x.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var N = /(.)^/,
                A = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            x.template = function(t, e, i) {
                var n;
                i = x.defaults({}, i, x.templateSettings);
                var s = new RegExp([(i.escape || N).source, (i.interpolate || N).source, (i.evaluate || N).source].join("|") + "|$", "g"),
                    o = 0,
                    r = "__p+='";
                t.replace(s, function(e, i, n, s, a) {
                    return r += t.slice(o, a).replace(O, function(t) {
                        return "\\" + A[t]
                    }), i && (r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (r += "';\n" + s + "\n__p+='"), o = a + e.length, e
                }), r += "';\n", i.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                try {
                    n = new Function(i.variable || "obj", "_", r)
                } catch (a) {
                    throw a.source = r, a
                }
                if (e) return n(e, x);
                var l = function(t) {
                    return n.call(this, t, x)
                };
                return l.source = "function(" + (i.variable || "obj") + "){\n" + r + "}", l
            }, x.chain = function(t) {
                return x(t).chain()
            };
            var H = function(t) {
                return this._chain ? x(t).chain() : t
            };
            x.mixin(x), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = n[t];
                x.prototype[t] = function() {
                    var i = this._wrapped;
                    return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], H.call(this, i)
                }
            }), C(["concat", "join", "slice"], function(t) {
                var e = n[t];
                x.prototype[t] = function() {
                    return H.call(this, e.apply(this._wrapped, arguments))
                }
            }), x.extend(x.prototype, {
                chain: function() {
                    return this._chain = !0, this
                },
                value: function() {
                    return this._wrapped
                }
            }), "function" == typeof define && define.amd && define("underscore", [], function() {
                return x
            })
        }.call(this), define("jquery", [], function() {
            return window.jQuery
        }),
        function(t, e) {
            if ("function" == typeof define && define.amd) define("backbone", ["underscore", "jquery", "exports"], function(i, n, s) {
                t.Backbone = e(t, s, i, n)
            });
            else if ("undefined" != typeof exports) {
                var i = require("underscore");
                e(t, exports, i)
            } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
        }(this, function(t, e, i, n) {
            var s = t.Backbone,
                o = [],
                r = (o.push, o.slice);
            o.splice;
            e.VERSION = "1.1.2", e.$ = n, e.noConflict = function() {
                return t.Backbone = s, this
            }, e.emulateHTTP = !1, e.emulateJSON = !1;
            var a = e.Events = {
                    on: function(t, e, i) {
                        if (!h(this, "on", t, [e, i]) || !e) return this;
                        this._events || (this._events = {});
                        var n = this._events[t] || (this._events[t] = []);
                        return n.push({
                            callback: e,
                            context: i,
                            ctx: i || this
                        }), this
                    },
                    once: function(t, e, n) {
                        if (!h(this, "once", t, [e, n]) || !e) return this;
                        var s = this,
                            o = i.once(function() {
                                s.off(t, o), e.apply(this, arguments)
                            });
                        return o._callback = e, this.on(t, o, n)
                    },
                    off: function(t, e, n) {
                        var s, o, r, a, l, c, u, d;
                        if (!this._events || !h(this, "off", t, [e, n])) return this;
                        if (!t && !e && !n) return this._events = void 0, this;
                        for (a = t ? [t] : i.keys(this._events), l = 0, c = a.length; c > l; l++)
                            if (t = a[l], r = this._events[t]) {
                                if (this._events[t] = s = [], e || n)
                                    for (u = 0, d = r.length; d > u; u++) o = r[u], (e && e !== o.callback && e !== o.callback._callback || n && n !== o.context) && s.push(o);
                                s.length || delete this._events[t]
                            }
                        return this
                    },
                    trigger: function(t) {
                        if (!this._events) return this;
                        var e = r.call(arguments, 1);
                        if (!h(this, "trigger", t, e)) return this;
                        var i = this._events[t],
                            n = this._events.all;
                        return i && c(i, e), n && c(n, arguments), this
                    },
                    stopListening: function(t, e, n) {
                        var s = this._listeningTo;
                        if (!s) return this;
                        var o = !e && !n;
                        n || "object" != typeof e || (n = this), t && ((s = {})[t._listenId] = t);
                        for (var r in s) t = s[r], t.off(e, n, this), (o || i.isEmpty(t._events)) && delete this._listeningTo[r];
                        return this
                    }
                },
                l = /\s+/,
                h = function(t, e, i, n) {
                    if (!i) return !0;
                    if ("object" == typeof i) {
                        for (var s in i) t[e].apply(t, [s, i[s]].concat(n));
                        return !1
                    }
                    if (l.test(i)) {
                        for (var o = i.split(l), r = 0, a = o.length; a > r; r++) t[e].apply(t, [o[r]].concat(n));
                        return !1
                    }
                    return !0
                },
                c = function(t, e) {
                    var i, n = -1,
                        s = t.length,
                        o = e[0],
                        r = e[1],
                        a = e[2];
                    switch (e.length) {
                        case 0:
                            for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
                            return;
                        case 1:
                            for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o);
                            return;
                        case 2:
                            for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o, r);
                            return;
                        case 3:
                            for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o, r, a);
                            return;
                        default:
                            for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e);
                            return
                    }
                },
                u = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            i.each(u, function(t, e) {
                a[e] = function(e, n, s) {
                    var o = this._listeningTo || (this._listeningTo = {}),
                        r = e._listenId || (e._listenId = i.uniqueId("l"));
                    return o[r] = e, s || "object" != typeof n || (s = this), e[t](n, s, this), this
                }
            }), a.bind = a.on, a.unbind = a.off, i.extend(e, a);
            var d = e.Model = function(t, e) {
                var n = t || {};
                e || (e = {}), this.cid = i.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (n = this.parse(n, e) || {}), n = i.defaults({}, n, i.result(this, "defaults")), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments)
            };
            i.extend(d.prototype, a, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(t) {
                    return i.clone(this.attributes)
                },
                sync: function() {
                    return e.sync.apply(this, arguments)
                },
                get: function(t) {
                    return this.attributes[t]
                },
                escape: function(t) {
                    return i.escape(this.get(t))
                },
                has: function(t) {
                    return null != this.get(t)
                },
                set: function(t, e, n) {
                    var s, o, r, a, l, h, c, u;
                    if (null == t) return this;
                    if ("object" == typeof t ? (o = t, n = e) : (o = {})[t] = e, n || (n = {}), !this._validate(o, n)) return !1;
                    r = n.unset, l = n.silent, a = [], h = this._changing, this._changing = !0, h || (this._previousAttributes = i.clone(this.attributes), this.changed = {}), u = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                    for (s in o) e = o[s], i.isEqual(u[s], e) || a.push(s), i.isEqual(c[s], e) ? delete this.changed[s] : this.changed[s] = e, r ? delete u[s] : u[s] = e;
                    if (!l) {
                        a.length && (this._pending = n);
                        for (var d = 0, p = a.length; p > d; d++) this.trigger("change:" + a[d], this, u[a[d]], n)
                    }
                    if (h) return this;
                    if (!l)
                        for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(t, e) {
                    return this.set(t, void 0, i.extend({}, e, {
                        unset: !0
                    }))
                },
                clear: function(t) {
                    var e = {};
                    for (var n in this.attributes) e[n] = void 0;
                    return this.set(e, i.extend({}, t, {
                        unset: !0
                    }))
                },
                hasChanged: function(t) {
                    return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
                },
                changedAttributes: function(t) {
                    if (!t) return this.hasChanged() ? i.clone(this.changed) : !1;
                    var e, n = !1,
                        s = this._changing ? this._previousAttributes : this.attributes;
                    for (var o in t) i.isEqual(s[o], e = t[o]) || ((n || (n = {}))[o] = e);
                    return n
                },
                previous: function(t) {
                    return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                },
                previousAttributes: function() {
                    return i.clone(this._previousAttributes)
                },
                fetch: function(t) {
                    t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                    var e = this,
                        n = t.success;
                    return t.success = function(i) {
                        return e.set(e.parse(i, t), t) ? (n && n(e, i, t), void e.trigger("sync", e, i, t)) : !1
                    }, O(this, t), this.sync("read", this, t)
                },
                save: function(t, e, n) {
                    var s, o, r, a = this.attributes;
                    if (null == t || "object" == typeof t ? (s = t, n = e) : (s = {})[t] = e, n = i.extend({
                            validate: !0
                        }, n), s && !n.wait) {
                        if (!this.set(s, n)) return !1
                    } else if (!this._validate(s, n)) return !1;
                    s && n.wait && (this.attributes = i.extend({}, a, s)), void 0 === n.parse && (n.parse = !0);
                    var l = this,
                        h = n.success;
                    return n.success = function(t) {
                        l.attributes = a;
                        var e = l.parse(t, n);
                        return n.wait && (e = i.extend(s || {}, e)), i.isObject(e) && !l.set(e, n) ? !1 : (h && h(l, t, n), void l.trigger("sync", l, t, n))
                    }, O(this, n), o = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === o && (n.attrs = s), r = this.sync(o, this, n), s && n.wait && (this.attributes = a), r
                },
                destroy: function(t) {
                    t = t ? i.clone(t) : {};
                    var e = this,
                        n = t.success,
                        s = function() {
                            e.trigger("destroy", e, e.collection, t)
                        };
                    if (t.success = function(i) {
                            (t.wait || e.isNew()) && s(), n && n(e, i, t), e.isNew() || e.trigger("sync", e, i, t)
                        }, this.isNew()) return t.success(), !1;
                    O(this, t);
                    var o = this.sync("delete", this, t);
                    return t.wait || s(), o
                },
                url: function() {
                    var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || A();
                    return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                },
                parse: function(t, e) {
                    return t
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return !this.has(this.idAttribute)
                },
                isValid: function(t) {
                    return this._validate({}, i.extend(t || {}, {
                        validate: !0
                    }))
                },
                _validate: function(t, e) {
                    if (!e.validate || !this.validate) return !0;
                    t = i.extend({}, this.attributes, t);
                    var n = this.validationError = this.validate(t, e) || null;
                    return n ? (this.trigger("invalid", this, n, i.extend(e, {
                        validationError: n
                    })), !1) : !0
                }
            });
            var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
            i.each(p, function(t) {
                d.prototype[t] = function() {
                    var e = r.call(arguments);
                    return e.unshift(this.attributes), i[t].apply(i, e)
                }
            });
            var f = e.Collection = function(t, e) {
                    e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, i.extend({
                        silent: !0
                    }, e))
                },
                g = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                m = {
                    add: !0,
                    remove: !1
                };
            i.extend(f.prototype, a, {
                model: d,
                initialize: function() {},
                toJSON: function(t) {
                    return this.map(function(e) {
                        return e.toJSON(t)
                    })
                },
                sync: function() {
                    return e.sync.apply(this, arguments)
                },
                add: function(t, e) {
                    return this.set(t, i.extend({
                        merge: !1
                    }, e, m))
                },
                remove: function(t, e) {
                    var n = !i.isArray(t);
                    t = n ? [t] : i.clone(t), e || (e = {});
                    var s, o, r, a;
                    for (s = 0, o = t.length; o > s; s++) a = t[s] = this.get(t[s]), a && (delete this._byId[a.id], delete this._byId[a.cid], r = this.indexOf(a), this.models.splice(r, 1), this.length--, e.silent || (e.index = r, a.trigger("remove", a, this, e)), this._removeReference(a, e));
                    return n ? t[0] : t
                },
                set: function(t, e) {
                    e = i.defaults({}, e, g), e.parse && (t = this.parse(t, e));
                    var n = !i.isArray(t);
                    t = n ? t ? [t] : [] : i.clone(t);
                    var s, o, r, a, l, h, c, u = e.at,
                        p = this.model,
                        f = this.comparator && null == u && e.sort !== !1,
                        m = i.isString(this.comparator) ? this.comparator : null,
                        v = [],
                        b = [],
                        y = {},
                        w = e.add,
                        _ = e.merge,
                        k = e.remove,
                        x = !f && w && k ? [] : !1;
                    for (s = 0, o = t.length; o > s; s++) {
                        if (l = t[s] || {}, r = l instanceof d ? a = l : l[p.prototype.idAttribute || "id"], h = this.get(r)) k && (y[h.cid] = !0), _ && (l = l === a ? a.attributes : l, e.parse && (l = h.parse(l, e)), h.set(l, e), f && !c && h.hasChanged(m) && (c = !0)), t[s] = h;
                        else if (w) {
                            if (a = t[s] = this._prepareModel(l, e), !a) continue;
                            v.push(a), this._addReference(a, e)
                        }
                        a = h || a, !x || !a.isNew() && y[a.id] || x.push(a), y[a.id] = !0
                    }
                    if (k) {
                        for (s = 0, o = this.length; o > s; ++s) y[(a = this.models[s]).cid] || b.push(a);
                        b.length && this.remove(b, e)
                    }
                    if (v.length || x && x.length)
                        if (f && (c = !0), this.length += v.length, null != u)
                            for (s = 0, o = v.length; o > s; s++) this.models.splice(u + s, 0, v[s]);
                        else {
                            x && (this.models.length = 0);
                            var C = x || v;
                            for (s = 0, o = C.length; o > s; s++) this.models.push(C[s])
                        }
                    if (c && this.sort({
                            silent: !0
                        }), !e.silent) {
                        for (s = 0, o = v.length; o > s; s++)(a = v[s]).trigger("add", a, this, e);
                        (c || x && x.length) && this.trigger("sort", this, e)
                    }
                    return n ? t[0] : t
                },
                reset: function(t, e) {
                    e || (e = {});
                    for (var n = 0, s = this.models.length; s > n; n++) this._removeReference(this.models[n], e);
                    return e.previousModels = this.models, this._reset(), t = this.add(t, i.extend({
                        silent: !0
                    }, e)), e.silent || this.trigger("reset", this, e), t
                },
                push: function(t, e) {
                    return this.add(t, i.extend({
                        at: this.length
                    }, e))
                },
                pop: function(t) {
                    var e = this.at(this.length - 1);
                    return this.remove(e, t), e
                },
                unshift: function(t, e) {
                    return this.add(t, i.extend({
                        at: 0
                    }, e))
                },
                shift: function(t) {
                    var e = this.at(0);
                    return this.remove(e, t), e
                },
                slice: function() {
                    return r.apply(this.models, arguments)
                },
                get: function(t) {
                    return null != t ? this._byId[t] || this._byId[t.id] || this._byId[t.cid] : void 0
                },
                at: function(t) {
                    return this.models[t]
                },
                where: function(t, e) {
                    return i.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                        for (var i in t)
                            if (t[i] !== e.get(i)) return !1;
                        return !0
                    })
                },
                findWhere: function(t) {
                    return this.where(t, !0)
                },
                sort: function(t) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return t || (t = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
                },
                pluck: function(t) {
                    return i.invoke(this.models, "get", t)
                },
                fetch: function(t) {
                    t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                    var e = t.success,
                        n = this;
                    return t.success = function(i) {
                        var s = t.reset ? "reset" : "set";
                        n[s](i, t), e && e(n, i, t), n.trigger("sync", n, i, t)
                    }, O(this, t), this.sync("read", this, t)
                },
                create: function(t, e) {
                    if (e = e ? i.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                    e.wait || this.add(t, e);
                    var n = this,
                        s = e.success;
                    return e.success = function(t, i) {
                        e.wait && n.add(t, e), s && s(t, i, e)
                    }, t.save(null, e), t
                },
                parse: function(t, e) {
                    return t
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(t, e) {
                    if (t instanceof d) return t;
                    e = e ? i.clone(e) : {}, e.collection = this;
                    var n = new this.model(t, e);
                    return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
                },
                _addReference: function(t, e) {
                    this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
                },
                _removeReference: function(t, e) {
                    this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(t, e, i, n) {
                    ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
                }
            });
            var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            i.each(v, function(t) {
                f.prototype[t] = function() {
                    var e = r.call(arguments);
                    return e.unshift(this.models), i[t].apply(i, e)
                }
            });
            var b = ["groupBy", "countBy", "sortBy", "indexBy"];
            i.each(b, function(t) {
                f.prototype[t] = function(e, n) {
                    var s = i.isFunction(e) ? e : function(t) {
                        return t.get(e)
                    };
                    return i[t](this.models, s, n)
                }
            });
            var y = e.View = function(t) {
                    this.cid = i.uniqueId("view"), t || (t = {}), i.extend(this, i.pick(t, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                w = /^(\S+)\s*(.*)$/,
                _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            i.extend(y.prototype, a, {
                tagName: "div",
                $: function(t) {
                    return this.$el.find(t)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(t, i) {
                    return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], i !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(t) {
                    if (!t && !(t = i.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var n = t[e];
                        if (i.isFunction(n) || (n = this[t[e]]), n) {
                            var s = e.match(w),
                                o = s[1],
                                r = s[2];
                            n = i.bind(n, this), o += ".delegateEvents" + this.cid, "" === r ? this.$el.on(o, n) : this.$el.on(o, r, n)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(i.result(this, "el"), !1);
                    else {
                        var t = i.extend({}, i.result(this, "attributes"));
                        this.id && (t.id = i.result(this, "id")), this.className && (t["class"] = i.result(this, "className"));
                        var n = e.$("<" + i.result(this, "tagName") + ">").attr(t);
                        this.setElement(n, !1)
                    }
                }
            }), e.sync = function(t, n, s) {
                var o = x[t];
                i.defaults(s || (s = {}), {
                    emulateHTTP: e.emulateHTTP,
                    emulateJSON: e.emulateJSON
                });
                var r = {
                    type: o,
                    dataType: "json"
                };
                if (s.url || (r.url = i.result(n, "url") || A()), null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (r.contentType = "application/json", r.data = JSON.stringify(s.attrs || n.toJSON(s))), s.emulateJSON && (r.contentType = "application/x-www-form-urlencoded", r.data = r.data ? {
                        model: r.data
                    } : {}), s.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                    r.type = "POST", s.emulateJSON && (r.data._method = o);
                    var a = s.beforeSend;
                    s.beforeSend = function(t) {
                        return t.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
                    }
                }
                "GET" === r.type || s.emulateJSON || (r.processData = !1), "PATCH" === r.type && k && (r.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var l = s.xhr = e.ajax(i.extend(r, s));
                return n.trigger("request", n, l, s), l
            };
            var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
                x = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
            e.ajax = function() {
                return e.$.ajax.apply(e.$, arguments)
            };
            var C = e.Router = function(t) {
                    t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                T = /\((.*?)\)/g,
                D = /(\(\?)?:\w+/g,
                E = /\*\w+/g,
                $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            i.extend(C.prototype, a, {
                initialize: function() {},
                route: function(t, n, s) {
                    i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(n) && (s = n, n = ""), s || (s = this[n]);
                    var o = this;
                    return e.history.route(t, function(i) {
                        var r = o._extractParameters(t, i);
                        o.execute(s, r), o.trigger.apply(o, ["route:" + n].concat(r)), o.trigger("route", n, r),
                            e.history.trigger("route", o, n, r)
                    }), this
                },
                execute: function(t, e) {
                    t && t.apply(this, e)
                },
                navigate: function(t, i) {
                    return e.history.navigate(t, i), this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = i.result(this, "routes");
                        for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                    }
                },
                _routeToRegExp: function(t) {
                    return t = t.replace($, "\\$&").replace(T, "(?:$1)?").replace(D, function(t, e) {
                        return e ? t : "([^/?]+)"
                    }).replace(E, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(t, e) {
                    var n = t.exec(e).slice(1);
                    return i.map(n, function(t, e) {
                        return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                    })
                }
            });
            var I = e.History = function() {
                    this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                M = /^[#\/]|\s+$/g,
                P = /^\/+|\/+$/g,
                S = /msie [\w.]+/,
                j = /\/$/,
                z = /#.*$/;
            I.started = !1, i.extend(I.prototype, a, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                },
                getHash: function(t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : ""
                },
                getFragment: function(t, e) {
                    if (null == t)
                        if (this._hasPushState || !this._wantsHashChange || e) {
                            t = decodeURI(this.location.pathname + this.location.search);
                            var i = this.root.replace(j, "");
                            t.indexOf(i) || (t = t.slice(i.length))
                        } else t = this.getHash();
                    return t.replace(M, "")
                },
                start: function(t) {
                    if (I.started) throw new Error("Backbone.history has already been started");
                    I.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var n = this.getFragment(),
                        s = document.documentMode,
                        o = S.exec(navigator.userAgent.toLowerCase()) && (!s || 7 >= s);
                    if (this.root = ("/" + this.root + "/").replace(P, "/"), o && this._wantsHashChange) {
                        var r = e.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = r.hide().appendTo("body")[0].contentWindow, this.navigate(n)
                    }
                    this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                    var a = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    return this.options.silent ? void 0 : this.loadUrl()
                },
                stop: function() {
                    e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), I.started = !1
                },
                route: function(t, e) {
                    this.handlers.unshift({
                        route: t,
                        callback: e
                    })
                },
                checkUrl: function(t) {
                    var e = this.getFragment();
                    return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
                },
                loadUrl: function(t) {
                    return t = this.fragment = this.getFragment(t), i.any(this.handlers, function(e) {
                        return e.route.test(t) ? (e.callback(t), !0) : void 0
                    })
                },
                navigate: function(t, e) {
                    if (!I.started) return !1;
                    e && e !== !0 || (e = {
                        trigger: !!e
                    });
                    var i = this.root + (t = this.getFragment(t || ""));
                    if (t = t.replace(z, ""), this.fragment !== t) {
                        if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(i);
                            this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                        }
                        return e.trigger ? this.loadUrl(t) : void 0
                    }
                },
                _updateHash: function(t, e, i) {
                    if (i) {
                        var n = t.href.replace(/(javascript:|#).*$/, "");
                        t.replace(n + "#" + e)
                    } else t.hash = "#" + e
                }
            }), e.history = new I;
            var N = function(t, e) {
                var n, s = this;
                n = t && i.has(t, "constructor") ? t.constructor : function() {
                    return s.apply(this, arguments)
                }, i.extend(n, s, e);
                var o = function() {
                    this.constructor = n
                };
                return o.prototype = s.prototype, n.prototype = new o, t && i.extend(n.prototype, t), n.__super__ = s.prototype, n
            };
            d.extend = f.extend = C.extend = y.extend = I.extend = N;
            var A = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                O = function(t, e) {
                    var i = e.error;
                    e.error = function(n) {
                        i && i(t, n, e), t.trigger("error", t, n, e)
                    }
                };
            return e
        }),
        function(t, e, i) {
            t.fn.backstretch = function(n, s) {
                return (n === i || 0 === n.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function() {
                    var e = t(this),
                        i = e.data("backstretch");
                    if (i) {
                        if ("string" == typeof n && "function" == typeof i[n]) return void i[n](s);
                        s = t.extend(i.options, s), i.destroy(!0)
                    }
                    i = new o(this, n, s), e.data("backstretch", i)
                })
            }, t.backstretch = function(e, i) {
                return t("body").backstretch(e, i).data("backstretch")
            }, t.expr[":"].backstretch = function(e) {
                return t(e).data("backstretch") !== i
            }, t.fn.backstretch.defaults = {
                centeredX: !0,
                centeredY: !0,
                duration: 5e3,
                fade: 0
            };
            var n = {
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: -999999
                },
                s = {
                    position: "absolute",
                    display: "none",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    width: "auto",
                    height: "auto",
                    maxHeight: "none",
                    maxWidth: "none",
                    zIndex: -999999
                },
                o = function(i, s, o) {
                    this.options = t.extend({}, t.fn.backstretch.defaults, o || {}), this.images = t.isArray(s) ? s : [s], t.each(this.images, function() {
                        t("<img />")[0].src = this
                    }), this.isBody = i === document.body, this.$container = t(i), this.$root = this.isBody ? t(r ? e : document) : this.$container, i = this.$container.children(".backstretch").first(), this.$wrap = i.length ? i : t('<div class="backstretch"></div>').css(n).appendTo(this.$container), this.isBody || (i = this.$container.css("position"), s = this.$container.css("zIndex"), this.$container.css({
                        position: "static" === i ? "relative" : i,
                        zIndex: "auto" === s ? 0 : s,
                        background: "none"
                    }), this.$wrap.css({
                        zIndex: -999998
                    })), this.$wrap.css({
                        position: this.isBody && r ? "fixed" : "absolute"
                    }), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function() {
                        this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize())
                    }, this))
                };
            o.prototype = {
                resize: function() {
                    try {
                        var t, i = {
                                left: 0,
                                top: 0
                            },
                            n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                            s = n,
                            o = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight(),
                            r = s / this.$img.data("ratio");
                        r >= o ? (t = (r - o) / 2, this.options.centeredY && (i.top = "-" + t + "px")) : (r = o, s = r * this.$img.data("ratio"), t = (s - n) / 2, this.options.centeredX && (i.left = "-" + t + "px")), this.$wrap.css({
                            width: n,
                            height: o
                        }).find("img:not(.deleteable)").css({
                            width: s,
                            height: r
                        }).css(i)
                    } catch (a) {}
                    return this
                },
                show: function(e) {
                    if (!(Math.abs(e) > this.images.length - 1)) {
                        var i = this,
                            n = i.$wrap.find("img").addClass("deleteable"),
                            o = {
                                relatedTarget: i.$container[0]
                            };
                        return i.$container.trigger(t.Event("backstretch.before", o), [i, e]), this.index = e, clearInterval(i.interval), i.$img = t("<img />").css(s).bind("load", function(s) {
                            var r = this.width || t(s.target).width();
                            s = this.height || t(s.target).height(), t(this).data("ratio", r / s), t(this).fadeIn(i.options.speed || i.options.fade, function() {
                                n.remove(), i.paused || i.cycle(), t(["after", "show"]).each(function() {
                                    i.$container.trigger(t.Event("backstretch." + this, o), [i, e])
                                })
                            }), i.resize()
                        }).appendTo(i.$wrap), i.$img.attr("src", i.images[e]), i
                    }
                },
                next: function() {
                    return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
                },
                prev: function() {
                    return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
                },
                pause: function() {
                    return this.paused = !0, this
                },
                resume: function() {
                    return this.paused = !1, this.next(), this
                },
                cycle: function() {
                    return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function() {
                        this.paused || this.next()
                    }, this), this.options.duration)), this
                },
                destroy: function(i) {
                    t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), i || this.$wrap.remove(), this.$container.removeData("backstretch")
                }
            };
            var r, a = navigator.userAgent,
                l = navigator.platform,
                h = a.match(/AppleWebKit\/([0-9]+)/),
                h = !!h && h[1],
                c = a.match(/Fennec\/([0-9]+)/),
                c = !!c && c[1],
                u = a.match(/Opera Mobi\/([0-9]+)/),
                d = !!u && u[1],
                p = a.match(/MSIE ([0-9]+)/),
                p = !!p && p[1];
            r = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && h && 534 > h || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || u && 7458 > d || -1 < a.indexOf("Android") && h && 533 > h || c && 6 > c || "palmGetResource" in e && h && 534 > h || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p)
        }(jQuery, window), define("jquery.backstretch", ["jquery"], function() {}),
        function(t) {
            "function" == typeof define && define.amd ? define("jquery.cookie", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
        }(function(t) {
            function e(t) {
                return a.raw ? t : encodeURIComponent(t)
            }

            function i(t) {
                return a.raw ? t : decodeURIComponent(t)
            }

            function n(t) {
                return e(a.json ? JSON.stringify(t) : String(t))
            }

            function s(t) {
                0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
                } catch (e) {}
            }

            function o(e, i) {
                var n = a.raw ? e : s(e);
                return t.isFunction(i) ? i(n) : n
            }
            var r = /\+/g,
                a = t.cookie = function(s, r, l) {
                    if (void 0 !== r && !t.isFunction(r)) {
                        if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                            var h = l.expires,
                                c = l.expires = new Date;
                            c.setTime(+c + 864e5 * h)
                        }
                        return document.cookie = [e(s), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                    }
                    for (var u = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; f > p; p++) {
                        var g = d[p].split("="),
                            m = i(g.shift()),
                            v = g.join("=");
                        if (s && s === m) {
                            u = o(v, r);
                            break
                        }
                        s || void 0 === (v = o(v)) || (u[m] = v)
                    }
                    return u
                };
            a.defaults = {}, t.removeCookie = function(e, i) {
                return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, i, {
                    expires: -1
                })), !t.cookie(e))
            }
        }),
        function() {
            function t() {}

            function e(t, e) {
                for (var i = t.length; i--;)
                    if (t[i].listener === e) return i;
                return -1
            }

            function i(t) {
                return function() {
                    return this[t].apply(this, arguments)
                }
            }
            var n = t.prototype,
                s = this,
                o = s.EventEmitter;
            n.getListeners = function(t) {
                var e, i, n = this._getEvents();
                if ("object" == typeof t) {
                    e = {};
                    for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
                } else e = n[t] || (n[t] = []);
                return e
            }, n.flattenListeners = function(t) {
                var e, i = [];
                for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
                return i
            }, n.getListenersAsObject = function(t) {
                var e, i = this.getListeners(t);
                return i instanceof Array && (e = {}, e[t] = i), e || i
            }, n.addListener = function(t, i) {
                var n, s = this.getListenersAsObject(t),
                    o = "object" == typeof i;
                for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(o ? i : {
                    listener: i,
                    once: !1
                });
                return this
            }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
                return this.addListener(t, {
                    listener: e,
                    once: !0
                })
            }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
                return this.getListeners(t), this
            }, n.defineEvents = function(t) {
                for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
                return this
            }, n.removeListener = function(t, i) {
                var n, s, o = this.getListenersAsObject(t);
                for (s in o) o.hasOwnProperty(s) && (n = e(o[s], i), -1 !== n && o[s].splice(n, 1));
                return this
            }, n.off = i("removeListener"), n.addListeners = function(t, e) {
                return this.manipulateListeners(!1, t, e)
            }, n.removeListeners = function(t, e) {
                return this.manipulateListeners(!0, t, e)
            }, n.manipulateListeners = function(t, e, i) {
                var n, s, o = t ? this.removeListener : this.addListener,
                    r = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp)
                    for (n = i.length; n--;) o.call(this, e, i[n]);
                else
                    for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? o.call(this, n, s) : r.call(this, n, s));
                return this
            }, n.removeEvent = function(t) {
                var e, i = typeof t,
                    n = this._getEvents();
                if ("string" === i) delete n[t];
                else if ("object" === i)
                    for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
                else delete this._events;
                return this
            }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
                var i, n, s, o, r = this.getListenersAsObject(t);
                for (s in r)
                    if (r.hasOwnProperty(s))
                        for (n = r[s].length; n--;) i = r[s][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
                return this
            }, n.trigger = i("emitEvent"), n.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e)
            }, n.setOnceReturnValue = function(t) {
                return this._onceReturnValue = t, this
            }, n._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }, n._getEvents = function() {
                return this._events || (this._events = {})
            }, t.noConflict = function() {
                return s.EventEmitter = o, t
            }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
                return t
            }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
        }.call(this),
        function(t) {
            function e(e) {
                var i = t.event;
                return i.target = i.target || i.srcElement || e, i
            }
            var i = document.documentElement,
                n = function() {};
            i.addEventListener ? n = function(t, e, i) {
                t.addEventListener(e, i, !1)
            } : i.attachEvent && (n = function(t, i, n) {
                t[i + n] = n.handleEvent ? function() {
                    var i = e(t);
                    n.handleEvent.call(n, i)
                } : function() {
                    var i = e(t);
                    n.call(t, i)
                }, t.attachEvent("on" + i, t[i + n])
            });
            var s = function() {};
            i.removeEventListener ? s = function(t, e, i) {
                t.removeEventListener(e, i, !1)
            } : i.detachEvent && (s = function(t, e, i) {
                t.detachEvent("on" + e, t[e + i]);
                try {
                    delete t[e + i]
                } catch (n) {
                    t[e + i] = void 0
                }
            });
            var o = {
                bind: n,
                unbind: s
            };
            "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
        }(this),
        function(t, e) {
            "function" == typeof define && define.amd ? define("imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
                return e(t, i, n)
            }) : "object" == typeof exports ? module.exports = e(t, require("eventEmitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
        }(window, function(t, e, i) {
            function n(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }

            function s(t) {
                return "[object Array]" === d.call(t)
            }

            function o(t) {
                var e = [];
                if (s(t)) e = t;
                else if ("number" == typeof t.length)
                    for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
                else e.push(t);
                return e
            }

            function r(t, e, i) {
                if (!(this instanceof r)) return new r(t, e);
                "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
                var s = this;
                setTimeout(function() {
                    s.check()
                })
            }

            function a(t) {
                this.img = t
            }

            function l(t) {
                this.src = t, p[t] = this
            }
            var h = t.jQuery,
                c = t.console,
                u = void 0 !== c,
                d = Object.prototype.toString;
            r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
                this.images = [];
                for (var t = 0, e = this.elements.length; e > t; t++) {
                    var i = this.elements[t];
                    "IMG" === i.nodeName && this.addImage(i);
                    var n = i.nodeType;
                    if (n && (1 === n || 9 === n || 11 === n))
                        for (var s = i.querySelectorAll("img"), o = 0, r = s.length; r > o; o++) {
                            var a = s[o];
                            this.addImage(a)
                        }
                }
            }, r.prototype.addImage = function(t) {
                var e = new a(t);
                this.images.push(e)
            }, r.prototype.check = function() {
                function t(t, s) {
                    return e.options.debug && u && c.log("confirm", t, s), e.progress(t), i++, i === n && e.complete(), !0
                }
                var e = this,
                    i = 0,
                    n = this.images.length;
                if (this.hasAnyBroken = !1, !n) return void this.complete();
                for (var s = 0; n > s; s++) {
                    var o = this.images[s];
                    o.on("confirm", t), o.check()
                }
            }, r.prototype.progress = function(t) {
                this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
                var e = this;
                setTimeout(function() {
                    e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
                })
            }, r.prototype.complete = function() {
                var t = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var e = this;
                setTimeout(function() {
                    if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                        var i = e.hasAnyBroken ? "reject" : "resolve";
                        e.jqDeferred[i](e)
                    }
                })
            }, h && (h.fn.imagesLoaded = function(t, e) {
                var i = new r(this, t, e);
                return i.jqDeferred.promise(h(this))
            }), a.prototype = new e, a.prototype.check = function() {
                var t = p[this.img.src] || new l(this.img.src);
                if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var e = this;
                t.on("confirm", function(t, i) {
                    return e.confirm(t.isLoaded, i), !0
                }), t.check()
            }, a.prototype.confirm = function(t, e) {
                this.isLoaded = t, this.emit("confirm", this, e)
            };
            var p = {};
            return l.prototype = new e, l.prototype.check = function() {
                if (!this.isChecked) {
                    var t = new Image;
                    i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
                }
            }, l.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.prototype.onload = function(t) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(t)
            }, l.prototype.onerror = function(t) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
            }, l.prototype.confirm = function(t, e) {
                this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
            }, l.prototype.unbindProxyEvents = function(t) {
                i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
            }, r
        }),
        function(t) {
            "function" == typeof define && define.amd ? define("jquery-ui", ["jquery"], t) : t(jQuery)
        }(function(t) {
            function e(e, n) {
                var s, o, r, a = e.nodeName.toLowerCase();
                return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap='#" + o + "']")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
            }

            function i(e) {
                return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                    return "hidden" === t.css(this, "visibility")
                }).length
            }

            function n(t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }

            function s() {
                this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                }, this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = o(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }

            function o(e) {
                var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return e.delegate(i, "mouseout", function() {
                    t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
                }).delegate(i, "mouseover", r)
            }

            function r() {
                t.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
            }

            function a(e, i) {
                t.extend(e, i);
                for (var n in i) null == i[n] && (e[n] = i[n]);
                return e
            }

            function l(t) {
                return function() {
                    var e = this.element.val();
                    t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
                }
            }
            t.ui = t.ui || {}, t.extend(t.ui, {
                version: "1.11.2",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }), t.fn.extend({
                scrollParent: function(e) {
                    var i = this.css("position"),
                        n = "absolute" === i,
                        s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        o = this.parents().filter(function() {
                            var e = t(this);
                            return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                        }).eq(0);
                    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
                },
                uniqueId: function() {
                    var t = 0;
                    return function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++t)
                        })
                    }
                }(),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            }), t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, n) {
                    return !!t.data(e, n[3])
                },
                focusable: function(i) {
                    return e(i, !isNaN(t.attr(i, "tabindex")))
                },
                tabbable: function(i) {
                    var n = t.attr(i, "tabindex"),
                        s = isNaN(n);
                    return (s || n >= 0) && e(i, !s)
                }
            }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
                function n(e, i, n, o) {
                    return t.each(s, function() {
                        i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                    }), i
                }
                var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    o = i.toLowerCase(),
                    r = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                t.fn["inner" + i] = function(e) {
                    return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
                        t(this).css(o, n(this, e) + "px")
                    })
                }, t.fn["outer" + i] = function(e, s) {
                    return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
                        t(this).css(o, n(this, e, !0, s) + "px")
                    })
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
                return function(i) {
                    return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
                }
            }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
                focus: function(e) {
                    return function(i, n) {
                        return "number" == typeof i ? this.each(function() {
                            var e = this;
                            setTimeout(function() {
                                t(e).focus(), n && n.call(e)
                            }, i)
                        }) : e.apply(this, arguments)
                    }
                }(t.fn.focus),
                disableSelection: function() {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.bind(t + ".ui-disableSelection", function(t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(e) {
                    if (void 0 !== e) return this.css("zIndex", e);
                    if (this.length)
                        for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
                            if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                            s = s.parent()
                        }
                    return 0
                }
            }), t.ui.plugin = {
                add: function(e, i, n) {
                    var s, o = t.ui[e].prototype;
                    for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
                },
                call: function(t, e, i, n) {
                    var s, o = t.plugins[e];
                    if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
                }
            };
            var h = 0,
                c = Array.prototype.slice;
            t.cleanData = function(e) {
                return function(i) {
                    var n, s, o;
                    for (o = 0; null != (s = i[o]); o++) try {
                        n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                    } catch (r) {}
                    e(i)
                }
            }(t.cleanData), t.widget = function(e, i, n) {
                var s, o, r, a, l = {},
                    h = e.split(".")[0];
                return e = e.split(".")[1], s = h + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
                    return !!t.data(e, s)
                }, t[h] = t[h] || {}, o = t[h][e], r = t[h][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
                }, t.extend(r, o, {
                    version: n.version,
                    _proto: t.extend({}, n),
                    _childConstructors: []
                }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                    return t.isFunction(n) ? void(l[e] = function() {
                        var t = function() {
                                return i.prototype[e].apply(this, arguments)
                            },
                            s = function(t) {
                                return i.prototype[e].apply(this, t)
                            };
                        return function() {
                            var e, i = this._super,
                                o = this._superApply;
                            return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                        }
                    }()) : void(l[e] = n)
                }), r.prototype = t.widget.extend(a, {
                    widgetEventPrefix: o ? a.widgetEventPrefix || e : e
                }, l, {
                    constructor: r,
                    namespace: h,
                    widgetName: e,
                    widgetFullName: s
                }), o ? (t.each(o._childConstructors, function(e, i) {
                    var n = i.prototype;
                    t.widget(n.namespace + "." + n.widgetName, r, i._proto)
                }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
            }, t.widget.extend = function(e) {
                for (var i, n, s = c.call(arguments, 1), o = 0, r = s.length; r > o; o++)
                    for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
                return e
            }, t.widget.bridge = function(e, i) {
                var n = i.prototype.widgetFullName || e;
                t.fn[e] = function(s) {
                    var o = "string" == typeof s,
                        r = c.call(arguments, 1),
                        a = this;
                    return s = !o && r.length ? t.widget.extend.apply(null, [s].concat(r)) : s, o ? this.each(function() {
                        var i, o = t.data(this, n);
                        return "instance" === s ? (a = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                    }) : this.each(function() {
                        var e = t.data(this, n);
                        e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                    }), a
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: t.noop,
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var n, s, o, r = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                            for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                            if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                            s[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            r[e] = i
                        }
                    return this._setOptions(r), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(e, i, n) {
                    var s, o = this;
                    "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                        function a() {
                            return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                            h = l[1] + o.eventNamespace,
                            c = l[2];
                        c ? s.delegate(c, h, a) : i.bind(h, a)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    function i() {
                        return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                    }
                    var n = this;
                    return setTimeout(i, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            t(e.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(e) {
                            t(e.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            t(e.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(e) {
                            t(e.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, n) {
                    var s, o, r = this.options[e];
                    if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                        for (s in o) s in i || (i[s] = o[s]);
                    return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(n, s, o) {
                    "string" == typeof s && (s = {
                        effect: s
                    });
                    var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                    s = s || {}, "number" == typeof s && (s = {
                        duration: s
                    }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                        t(this)[e](), o && o.call(n[0]), i()
                    })
                }
            });
            var u = (t.widget, !1);
            t(document).mouseup(function() {
                u = !1
            });
            t.widget("ui.mouse", {
                version: "1.11.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.bind("mousedown." + this.widgetName, function(t) {
                        return e._mouseDown(t)
                    }).bind("click." + this.widgetName, function(i) {
                        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(e) {
                    if (!u) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                        var i = this,
                            n = 1 === e.which,
                            s = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                        return n && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return i._mouseMove(t)
                            }, this._mouseUpDelegate = function(t) {
                                return i._mouseUp(t)
                            }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                            e.preventDefault(), u = !0, !0)) : !0
                    }
                },
                _mouseMove: function(e) {
                    if (this._mouseMoved) {
                        if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                        if (!e.which) return this._mouseUp(e)
                    }
                    return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                },
                _mouseUp: function(e) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), u = !1, !1
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            });
            ! function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }

                function n(e) {
                    var i = e[0];
                    return 9 === i.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(i) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }
                t.ui = t.ui || {};
                var s, o, r = Math.max,
                    a = Math.abs,
                    l = Math.round,
                    h = /left|center|right/,
                    c = /top|center|bottom/,
                    u = /[\+\-]\d+(\.[\d]+)?%?/,
                    d = /^\w+/,
                    p = /%$/,
                    f = t.fn.position;
                t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== s) return s;
                            var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                o = n.children()[0];
                            return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                                o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                            return {
                                width: o ? t.position.scrollbarWidth() : 0,
                                height: s ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window),
                                n = t.isWindow(i[0]),
                                s = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: s,
                                offset: i.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: n || s ? i.width() : i.outerWidth(),
                                height: n || s ? i.height() : i.outerHeight()
                            }
                        }
                    }, t.fn.position = function(s) {
                        if (!s || !s.of) return f.apply(this, arguments);
                        s = t.extend({}, s);
                        var p, g, m, v, b, y, w = t(s.of),
                            _ = t.position.getWithinInfo(s.within),
                            k = t.position.getScrollInfo(_),
                            x = (s.collision || "flip").split(" "),
                            C = {};
                        return y = n(w), w[0].preventDefault && (s.at = "left top"), g = y.width, m = y.height, v = y.offset, b = t.extend({}, v), t.each(["my", "at"], function() {
                            var t, e, i = (s[this] || "").split(" ");
                            1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = h.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                        }), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? b.left += g : "center" === s.at[0] && (b.left += g / 2), "bottom" === s.at[1] ? b.top += m : "center" === s.at[1] && (b.top += m / 2), p = e(C.at, g, m), b.left += p[0], b.top += p[1], this.each(function() {
                            var n, h, c = t(this),
                                u = c.outerWidth(),
                                d = c.outerHeight(),
                                f = i(this, "marginLeft"),
                                y = i(this, "marginTop"),
                                T = u + f + i(this, "marginRight") + k.width,
                                D = d + y + i(this, "marginBottom") + k.height,
                                E = t.extend({}, b),
                                $ = e(C.my, c.outerWidth(), c.outerHeight());
                            "right" === s.my[0] ? E.left -= u : "center" === s.my[0] && (E.left -= u / 2), "bottom" === s.my[1] ? E.top -= d : "center" === s.my[1] && (E.top -= d / 2), E.left += $[0], E.top += $[1], o || (E.left = l(E.left), E.top = l(E.top)), n = {
                                marginLeft: f,
                                marginTop: y
                            }, t.each(["left", "top"], function(e, i) {
                                t.ui.position[x[e]] && t.ui.position[x[e]][i](E, {
                                    targetWidth: g,
                                    targetHeight: m,
                                    elemWidth: u,
                                    elemHeight: d,
                                    collisionPosition: n,
                                    collisionWidth: T,
                                    collisionHeight: D,
                                    offset: [p[0] + $[0], p[1] + $[1]],
                                    my: s.my,
                                    at: s.at,
                                    within: _,
                                    elem: c
                                })
                            }), s.using && (h = function(t) {
                                var e = v.left - E.left,
                                    i = e + g - u,
                                    n = v.top - E.top,
                                    o = n + m - d,
                                    l = {
                                        target: {
                                            element: w,
                                            left: v.left,
                                            top: v.top,
                                            width: g,
                                            height: m
                                        },
                                        element: {
                                            element: c,
                                            left: E.left,
                                            top: E.top,
                                            width: u,
                                            height: d
                                        },
                                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                        vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                                    };
                                u > g && a(e + i) < g && (l.horizontal = "center"), d > m && a(n + o) < m && (l.vertical = "middle"), r(a(e), a(i)) > r(a(n), a(o)) ? l.important = "horizontal" : l.important = "vertical", s.using.call(this, t, l)
                            }), c.offset(t.extend(E, {
                                using: h
                            }))
                        })
                    }, t.ui.position = {
                        fit: {
                            left: function(t, e) {
                                var i, n = e.within,
                                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                                    o = n.width,
                                    a = t.left - e.collisionPosition.marginLeft,
                                    l = s - a,
                                    h = a + e.collisionWidth - o - s;
                                e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : h > 0 && 0 >= l ? t.left = s : l > h ? t.left = s + o - e.collisionWidth : t.left = s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = r(t.left - a, t.left)
                            },
                            top: function(t, e) {
                                var i, n = e.within,
                                    s = n.isWindow ? n.scrollTop : n.offset.top,
                                    o = e.within.height,
                                    a = t.top - e.collisionPosition.marginTop,
                                    l = s - a,
                                    h = a + e.collisionHeight - o - s;
                                e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : h > 0 && 0 >= l ? t.top = s : l > h ? t.top = s + o - e.collisionHeight : t.top = s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = r(t.top - a, t.top)
                            }
                        },
                        flip: {
                            left: function(t, e) {
                                var i, n, s = e.within,
                                    o = s.offset.left + s.scrollLeft,
                                    r = s.width,
                                    l = s.isWindow ? s.scrollLeft : s.offset.left,
                                    h = t.left - e.collisionPosition.marginLeft,
                                    c = h - l,
                                    u = h + e.collisionWidth - r - l,
                                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    f = -2 * e.offset[0];
                                0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || i < a(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < u) && (t.left += d + p + f))
                            },
                            top: function(t, e) {
                                var i, n, s = e.within,
                                    o = s.offset.top + s.scrollTop,
                                    r = s.height,
                                    l = s.isWindow ? s.scrollTop : s.offset.top,
                                    h = t.top - e.collisionPosition.marginTop,
                                    c = h - l,
                                    u = h + e.collisionHeight - r - l,
                                    d = "top" === e.my[1],
                                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    g = -2 * e.offset[1];
                                0 > c ? (n = t.top + p + f + g + e.collisionHeight - r - o, t.top + p + f + g > c && (0 > n || n < a(c)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || a(i) < u) && (t.top += p + f + g))
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var e, i, n, s, r, a = document.getElementsByTagName("body")[0],
                            l = document.createElement("div");
                        e = document.createElement(a ? "div" : "body"), n = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, a && t.extend(n, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (r in n) e.style[r] = n[r];
                        e.appendChild(l), i = a || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", s = t(l).offset().left, o = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
                    }()
            }();
            t.ui.position, t.widget("ui.accordion", {
                version: "1.11.2",
                options: {
                    active: 0,
                    animate: {},
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child,> :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                hideProps: {
                    borderTopWidth: "hide",
                    borderBottomWidth: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide",
                    height: "hide"
                },
                showProps: {
                    borderTopWidth: "show",
                    borderBottomWidth: "show",
                    paddingTop: "show",
                    paddingBottom: "show",
                    height: "show"
                },
                _create: function() {
                    var e = this.options;
                    this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : t()
                    }
                },
                _createIcons: function() {
                    var e = this.options.icons;
                    e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var t;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
                },
                _keydown: function(e) {
                    if (!e.altKey && !e.ctrlKey) {
                        var i = t.ui.keyCode,
                            n = this.headers.length,
                            s = this.headers.index(e.target),
                            o = !1;
                        switch (e.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                o = this.headers[(s + 1) % n];
                                break;
                            case i.LEFT:
                            case i.UP:
                                o = this.headers[(s - 1 + n) % n];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(e);
                                break;
                            case i.HOME:
                                o = this.headers[0];
                                break;
                            case i.END:
                                o = this.headers[n - 1]
                        }
                        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
                    }
                },
                _panelKeyDown: function(e) {
                    e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
                },
                refresh: function() {
                    var e = this.options;
                    this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                },
                _processPanels: function() {
                    var t = this.headers,
                        e = this.panels;
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
                },
                _refresh: function() {
                    var e, i = this.options,
                        n = i.heightStyle,
                        s = this.element.parent();
                    this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                        var e = t(this),
                            i = e.uniqueId().attr("id"),
                            n = e.next(),
                            s = n.uniqueId().attr("id");
                        e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-hidden": "true"
                    }).hide(), this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                        var i = t(this),
                            n = i.css("position");
                        "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                    }), this.headers.each(function() {
                        e -= t(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                        e = Math.max(e, t(this).css("height", "").height())
                    }).height(e))
                },
                _activate: function(e) {
                    var i = this._findActive(e)[0];
                    i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: t.noop
                    }))
                },
                _findActive: function(e) {
                    return "number" == typeof e ? this.headers.eq(e) : t()
                },
                _setupEvents: function(e) {
                    var i = {
                        keydown: "_keydown"
                    };
                    e && t.each(e.split(" "), function(t, e) {
                        i[e] = "_eventHandler"
                    }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    }), this._hoverable(this.headers), this._focusable(this.headers)
                },
                _eventHandler: function(e) {
                    var i = this.options,
                        n = this.active,
                        s = t(e.currentTarget),
                        o = s[0] === n[0],
                        r = o && i.collapsible,
                        a = r ? t() : s.next(),
                        l = n.next(),
                        h = {
                            oldHeader: n,
                            oldPanel: l,
                            newHeader: r ? t() : s,
                            newPanel: a
                        };
                    e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(e) {
                    var i = e.newPanel,
                        n = this.prevShow.length ? this.prevShow : e.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                        "aria-hidden": "true"
                    }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr({
                        tabIndex: -1,
                        "aria-expanded": "false"
                    }) : i.length && this.headers.filter(function() {
                        return 0 === t(this).attr("tabIndex")
                    }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                        "aria-selected": "true",
                        tabIndex: 0,
                        "aria-expanded": "true"
                    })
                },
                _animate: function(t, e, i) {
                    var n, s, o, r = this,
                        a = 0,
                        l = t.length && (!e.length || t.index() < e.index()),
                        h = this.options.animate || {},
                        c = l && h.down || h,
                        u = function() {
                            r._toggleComplete(i)
                        };
                    return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || h.easing, o = o || c.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                        duration: o,
                        easing: s,
                        step: function(t, e) {
                            e.now = Math.round(t)
                        }
                    }), void t.hide().animate(this.showProps, {
                        duration: o,
                        easing: s,
                        complete: u,
                        step: function(t, i) {
                            i.now = Math.round(t), "height" !== i.prop ? a += i.now : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
                        }
                    })) : e.animate(this.hideProps, o, s, u) : t.animate(this.showProps, o, s, u)
                },
                _toggleComplete: function(t) {
                    var e = t.oldPanel;
                    e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
                }
            }), t.widget("ui.menu", {
                version: "1.11.2",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left-1 top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                        "mousedown .ui-menu-item": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-menu-item": function(e) {
                            var i = t(e.target);
                            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(e) {
                            if (!this.previousFilter) {
                                var i = t(e.currentTarget);
                                i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(e) {
                            this._delay(function() {
                                t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(t) {
                            this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var e = t(this);
                        e.data("ui-menu-submenu-carat") && e.remove()
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(e) {
                    var i, n, s, o, r = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case t.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case t.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case t.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case t.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case t.ui.keyCode.ENTER:
                        case t.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case t.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            r = !1, n = this.previousFilter || "", s = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    r && e.preventDefault()
                },
                _activate: function(t) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
                },
                refresh: function() {
                    var e, i, n = this,
                        s = this.options.icons.submenu,
                        o = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var e = t(this),
                            i = e.parent(),
                            n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                        i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                    }), e = o.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                        var e = t(this);
                        n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                    }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(t, e) {
                    "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                },
                focus: function(t, e) {
                    var i, n;
                    this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                        item: e
                    })
                },
                _scrollIntoView: function(e) {
                    var i, n, s, o, r, a;
                    this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
                },
                blur: function(t, e) {
                    e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                        item: this.active
                    }))
                },
                _startOpening: function(t) {
                    clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(t)
                    }, this.delay))
                },
                _open: function(e) {
                    var i = t.extend({ of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                },
                collapseAll: function(e, i) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                        n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
                    }, this.delay)
                },
                _close: function(t) {
                    t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                },
                _closeOnDocumentClick: function(e) {
                    return !t(e.target).closest(".ui-menu").length
                },
                _isDivider: function(t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function(t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e))
                },
                expand: function(t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()), this._delay(function() {
                        this.focus(t, e)
                    }))
                },
                next: function(t) {
                    this._move("next", "first", t)
                },
                previous: function(t) {
                    this._move("prev", "last", t)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(t, e, i) {
                    var n;
                    this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
                },
                nextPage: function(e) {
                    var i, n, s;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return i = t(this), i.offset().top - n - s < 0
                    }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
                },
                previousPage: function(e) {
                    var i, n, s;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return i = t(this), i.offset().top - n + s > 0
                    }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(e) {
                    this.active = this.active || t(e.target).closest(".ui-menu-item");
                    var i = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
                },
                _filterMenuItems: function(e) {
                    var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        n = new RegExp("^" + i, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return n.test(t.trim(t(this).text()))
                    })
                }
            });
            t.widget("ui.autocomplete", {
                version: "1.11.2",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                requestIndex: 0,
                pending: 0,
                _create: function() {
                    var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                        o = "textarea" === s,
                        r = "input" === s;
                    this.isMultiLine = o ? !0 : r ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                        keydown: function(s) {
                            if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                            e = !1, n = !1, i = !1;
                            var o = t.ui.keyCode;
                            switch (s.keyCode) {
                                case o.PAGE_UP:
                                    e = !0, this._move("previousPage", s);
                                    break;
                                case o.PAGE_DOWN:
                                    e = !0, this._move("nextPage", s);
                                    break;
                                case o.UP:
                                    e = !0, this._keyEvent("previous", s);
                                    break;
                                case o.DOWN:
                                    e = !0, this._keyEvent("next", s);
                                    break;
                                case o.ENTER:
                                    this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(s);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                    break;
                                default:
                                    i = !0, this._searchTimeout(s)
                            }
                        },
                        keypress: function(n) {
                            if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                            if (!i) {
                                var s = t.ui.keyCode;
                                switch (n.keyCode) {
                                    case s.PAGE_UP:
                                        this._move("previousPage", n);
                                        break;
                                    case s.PAGE_DOWN:
                                        this._move("nextPage", n);
                                        break;
                                    case s.UP:
                                        this._keyEvent("previous", n);
                                        break;
                                    case s.DOWN:
                                        this._keyEvent("next", n)
                                }
                            }
                        },
                        input: function(t) {
                            return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                        },
                        focus: function() {
                            this.selectedItem = null, this.previous = this._value()
                        },
                        blur: function(t) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                        }
                    }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().menu("instance"), this._on(this.menu.element, {
                        mousedown: function(e) {
                            e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                delete this.cancelBlur
                            });
                            var i = this.menu.element[0];
                            t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                                var e = this;
                                this.document.one("mousedown", function(n) {
                                    n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                                })
                            })
                        },
                        menufocus: function(e, i) {
                            var n, s;
                            return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                                t(e.target).trigger(e.originalEvent)
                            })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                                item: s
                            }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                        },
                        menuselect: function(t, e) {
                            var i = e.item.data("ui-autocomplete-item"),
                                n = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                                this.previous = n, this.selectedItem = i
                            })), !1 !== this._trigger("select", t, {
                                item: i
                            }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                        }
                    }), this.liveRegion = t("<span>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                },
                _setOption: function(t, e) {
                    this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
                },
                _appendTo: function() {
                    var e = this.options.appendTo;
                    return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
                },
                _initSource: function() {
                    var e, i, n = this;
                    t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                        n(t.ui.autocomplete.filter(e, i.term))
                    }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                        n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                            url: i,
                            data: e,
                            dataType: "json",
                            success: function(t) {
                                s(t)
                            },
                            error: function() {
                                s([])
                            }
                        })
                    }) : this.source = this.options.source
                },
                _searchTimeout: function(t) {
                    clearTimeout(this.searching), this.searching = this._delay(function() {
                        var e = this.term === this._value(),
                            i = this.menu.element.is(":visible"),
                            n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                    }, this.options.delay)
                },
                search: function(t, e) {
                    return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
                },
                _search: function(t) {
                    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                        term: t
                    }, this._response())
                },
                _response: function() {
                    var e = ++this.requestIndex;
                    return t.proxy(function(t) {
                        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                    }, this)
                },
                __response: function(t) {
                    t && (t = this._normalize(t)), this._trigger("response", null, {
                        content: t
                    }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
                },
                close: function(t) {
                    this.cancelSearch = !0, this._close(t)
                },
                _close: function(t) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
                },
                _change: function(t) {
                    this.previous !== this._value() && this._trigger("change", t, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(e) {
                    return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                        return "string" == typeof e ? {
                            label: e,
                            value: e
                        } : t.extend({}, e, {
                            label: e.label || e.value,
                            value: e.value || e.label
                        })
                    })
                },
                _suggest: function(e) {
                    var i = this.menu.element.empty();
                    this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
                    }, this.options.position)), this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var t = this.menu.element;
                    t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(e, i) {
                    var n = this;
                    t.each(i, function(t, i) {
                        n._renderItemData(e, i)
                    })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-autocomplete-item", e)
                },
                _renderItem: function(e, i) {
                    return t("<li>").text(i.label).appendTo(e)
                },
                _move: function(t, e) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(t, e) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
                }
            }), t.extend(t.ui.autocomplete, {
                escapeRegex: function(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(e, i) {
                    var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                    return t.grep(e, function(t) {
                        return n.test(t.label || t.value || t)
                    })
                }
            }), t.widget("ui.autocomplete", t.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(t) {
                            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(e) {
                    var i;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
                }
            });
            var d, p = (t.ui.autocomplete, "ui-button ui-widget ui-state-default ui-corner-all"),
                f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
                g = function() {
                    var e = t(this);
                    setTimeout(function() {
                        e.find(":ui-button").button("refresh")
                    }, 1)
                },
                m = function(e) {
                    var i = e.name,
                        n = e.form,
                        s = t([]);
                    return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
                        return !this.form
                    })), s
                };
            t.widget("ui.button", {
                version: "1.11.2",
                defaultElement: "<button>",
                options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, g), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var e = this,
                        i = this.options,
                        n = "checkbox" === this.type || "radio" === this.type,
                        s = n ? "" : "ui-state-active";
                    null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                        i.disabled || this === d && t(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function() {
                        i.disabled || t(this).removeClass(s)
                    }).bind("click" + this.eventNamespace, function(t) {
                        i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                    }), this._on({
                        focus: function() {
                            this.buttonElement.addClass("ui-state-focus")
                        },
                        blur: function() {
                            this.buttonElement.removeClass("ui-state-focus")
                        }
                    }), n && this.element.bind("change" + this.eventNamespace, function() {
                        e.refresh()
                    }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        return i.disabled ? !1 : void 0
                    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (i.disabled) return !1;
                        t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                        var n = e.element[0];
                        m(n).not(n).map(function() {
                            return t(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        return i.disabled ? !1 : (t(this).addClass("ui-state-active"), d = this, void e.document.one("mouseup", function() {
                            d = null
                        }))
                    }).bind("mouseup" + this.eventNamespace, function() {
                        return i.disabled ? !1 : void t(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(e) {
                        return i.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        t(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                    })), this._setOption("disabled", i.disabled), this._resetButton()
                },
                _determineButtonType: function() {
                    var t, e, i;
                    this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                },
                widget: function() {
                    return this.buttonElement
                },
                _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
                },
                _setOption: function(t, e) {
                    return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
                },
                refresh: function() {
                    var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? m(this.element[0]).each(function() {
                        t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                    var e = this.buttonElement.removeClass(f),
                        i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                        n = this.options.icons,
                        s = n.primary && n.secondary,
                        o = [];
                    n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
                }
            }), t.widget("ui.buttonset", {
                version: "1.11.2",
                options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                },
                _create: function() {
                    this.element.addClass("ui-buttonset")
                },
                _init: function() {
                    this.refresh()
                },
                _setOption: function(t, e) {
                    "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
                },
                refresh: function() {
                    var e = "rtl" === this.element.css("direction"),
                        i = this.element.find(this.options.items),
                        n = i.filter(":ui-button");
                    i.not(":ui-button").button(), n.button("refresh"), this.buttons = i.map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() {
                    this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            });
            t.ui.button;
            t.extend(t.ui, {
                datepicker: {
                    version: "1.11.2"
                }
            });
            var v;
            t.extend(s.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return a(this._defaults, t || {}), this
                },
                _attachDatepicker: function(e, i) {
                    var n, s, o;
                    n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
                },
                _newInst: function(e, i) {
                    var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                    return {
                        id: n,
                        input: e,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: i,
                        dpDiv: i ? o(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(e, i) {
                    var n = t(e);
                    i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
                },
                _attachments: function(e, i) {
                    var n, s, o, r = this._get(i, "appendText"),
                        a = this._get(i, "isRTL");
                    i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: s,
                        title: s
                    }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                        src: o,
                        alt: s,
                        title: s
                    }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function() {
                        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                    }))
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e, i, n, s, o = new Date(2009, 11, 20),
                            r = this._get(t, "dateFormat");
                        r.match(/[DM]/) && (e = function(t) {
                            for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                            return n
                        }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                    }
                },
                _inlineDatepicker: function(e, i) {
                    var n = t(e);
                    n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(e, i, n, s, o) {
                    var r, l, h, c, u, d = this._dialogInst;
                    return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
                },
                _destroyDatepicker: function(e) {
                    var i, n = t(e),
                        s = t.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
                },
                _enableDatepicker: function(e) {
                    var i, n, s = t(e),
                        o = t.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }))
                },
                _disableDatepicker: function(e) {
                    var i, n, s = t(e),
                        o = t.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }), this._disabledInputs[this._disabledInputs.length] = e)
                },
                _isDisabledDatepicker: function(t) {
                    if (!t) return !1;
                    for (var e = 0; e < this._disabledInputs.length; e++)
                        if (this._disabledInputs[e] === t) return !0;
                    return !1
                },
                _getInst: function(e) {
                    try {
                        return t.data(e, "datepicker")
                    } catch (i) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(e, i, n) {
                    var s, o, r, l, h = this._getInst(e);
                    return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), a(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h))))
                },
                _changeDatepicker: function(t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function(t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
                },
                _getDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
                },
                _doKeyDown: function(e) {
                    var i, n, s, o = t.datepicker._getInst(e.target),
                        r = !0,
                        a = o.dpDiv.is(".ui-datepicker-rtl");
                    if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                        case 9:
                            t.datepicker._hideDatepicker(), r = !1;
                            break;
                        case 13:
                            return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                        case 27:
                            t.datepicker._hideDatepicker();
                            break;
                        case 33:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 34:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 35:
                            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                            break;
                        case 36:
                            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                            break;
                        case 37:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 38:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                            break;
                        case 39:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 40:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                            break;
                        default:
                            r = !1
                    } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
                    r && (e.preventDefault(), e.stopPropagation())
                },
                _doKeyPress: function(e) {
                    var i, n, s = t.datepicker._getInst(e.target);
                    return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
                },
                _doKeyUp: function(e) {
                    var i, n = t.datepicker._getInst(e.target);
                    if (n.input.val() !== n.lastVal) try {
                        i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                    } catch (s) {}
                    return !0
                },
                _showDatepicker: function(e) {
                    if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                        var i, s, o, r, l, h, c;
                        i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), o = s ? s.apply(e, [e, i]) : {}, o !== !1 && (a(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                            return r |= "fixed" === t(this).css("position"), !r
                        }), l = {
                            left: t.datepicker._pos[0],
                            top: t.datepicker._pos[1]
                        }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), t.datepicker._updateDatepicker(i), l = t.datepicker._checkOffset(i, l, r), i.dpDiv.css({
                            position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                            display: "none",
                            left: l.left + "px",
                            top: l.top + "px"
                        }), i.inline || (h = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", n(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
                    }
                },
                _updateDatepicker: function(e) {
                    this.maxRows = 4, v = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                    var i, n = this._getNumberOfMonths(e),
                        s = n[1],
                        o = 17,
                        a = e.dpDiv.find("." + this._dayOverClass + " a");
                    a.length > 0 && r.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                    }, 0))
                },
                _shouldFocusInput: function(t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function(e, i, n) {
                    var s = e.dpDiv.outerWidth(),
                        o = e.dpDiv.outerHeight(),
                        r = e.input ? e.input.outerWidth() : 0,
                        a = e.input ? e.input.outerHeight() : 0,
                        l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                        h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                    return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
                },
                _findPos: function(e) {
                    for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                    return i = t(e).offset(), [i.left, i.top]
                },
                _hideDatepicker: function(e) {
                    var i, n, s, o, r = this._curInst;
                    !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() {
                        t.datepicker._tidyDialog(r)
                    }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(e) {
                    if (t.datepicker._curInst) {
                        var i = t(e.target),
                            n = t.datepicker._getInst(i[0]);
                        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(e, i, n) {
                    var s = t(e),
                        o = this._getInst(s[0]);
                    this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
                },
                _gotoToday: function(e) {
                    var i, n = t(e),
                        s = this._getInst(n[0]);
                    this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
                },
                _selectMonthYear: function(e, i, n) {
                    var s = t(e),
                        o = this._getInst(s[0]);
                    o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
                },
                _selectDay: function(e, i, n, s) {
                    var o, r = t(e);
                    t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
                },
                _clearDate: function(e) {
                    var i = t(e);
                    this._selectDate(i, "")
                },
                _selectDate: function(e, i) {
                    var n, s = t(e),
                        o = this._getInst(s[0]);
                    i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
                },
                _updateAlternate: function(e) {
                    var i, n, s, o = this._get(e, "altField");
                    o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
                        t(this).val(s)
                    }))
                },
                noWeekends: function(t) {
                    var e = t.getDay();
                    return [e > 0 && 6 > e, ""]
                },
                iso8601Week: function(t) {
                    var e, i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                },
                parseDate: function(e, i, n) {
                    if (null == e || null == i) throw "Invalid arguments";
                    if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                    var s, o, r, a, l = 0,
                        h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                        c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                        u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                        d = (n ? n.dayNames : null) || this._defaults.dayNames,
                        p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                        f = (n ? n.monthNames : null) || this._defaults.monthNames,
                        g = -1,
                        m = -1,
                        v = -1,
                        b = -1,
                        y = !1,
                        w = function(t) {
                            var i = s + 1 < e.length && e.charAt(s + 1) === t;
                            return i && s++, i
                        },
                        _ = function(t) {
                            var e = w(t),
                                n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                                s = "y" === t ? n : 1,
                                o = new RegExp("^\\d{" + s + "," + n + "}"),
                                r = i.substring(l).match(o);
                            if (!r) throw "Missing number at position " + l;
                            return l += r[0].length, parseInt(r[0], 10)
                        },
                        k = function(e, n, s) {
                            var o = -1,
                                r = t.map(w(e) ? s : n, function(t, e) {
                                    return [
                                        [e, t]
                                    ]
                                }).sort(function(t, e) {
                                    return -(t[1].length - e[1].length)
                                });
                            if (t.each(r, function(t, e) {
                                    var n = e[1];
                                    return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                                }), -1 !== o) return o + 1;
                            throw "Unknown name at position " + l
                        },
                        x = function() {
                            if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                            l++
                        };
                    for (s = 0; s < e.length; s++)
                        if (y) "'" !== e.charAt(s) || w("'") ? x() : y = !1;
                        else switch (e.charAt(s)) {
                            case "d":
                                v = _("d");
                                break;
                            case "D":
                                k("D", u, d);
                                break;
                            case "o":
                                b = _("o");
                                break;
                            case "m":
                                m = _("m");
                                break;
                            case "M":
                                m = k("M", p, f);
                                break;
                            case "y":
                                g = _("y");
                                break;
                            case "@":
                                a = new Date(_("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                                break;
                            case "!":
                                a = new Date((_("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                                break;
                            case "'":
                                w("'") ? x() : y = !0;
                                break;
                            default:
                                x()
                        }
                    if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
                    if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), b > -1)
                        for (m = 1, v = b;;) {
                            if (o = this._getDaysInMonth(g, m - 1), o >= v) break;
                            m++, v -= o
                        }
                    if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
                    return a
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                formatDate: function(t, e, i) {
                    if (!e) return "";
                    var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                        o = (i ? i.dayNames : null) || this._defaults.dayNames,
                        r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                        a = (i ? i.monthNames : null) || this._defaults.monthNames,
                        l = function(e) {
                            var i = n + 1 < t.length && t.charAt(n + 1) === e;
                            return i && n++, i
                        },
                        h = function(t, e, i) {
                            var n = "" + e;
                            if (l(t))
                                for (; n.length < i;) n = "0" + n;
                            return n
                        },
                        c = function(t, e, i, n) {
                            return l(t) ? n[e] : i[e]
                        },
                        u = "",
                        d = !1;
                    if (e)
                        for (n = 0; n < t.length; n++)
                            if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                            else switch (t.charAt(n)) {
                                case "d":
                                    u += h("d", e.getDate(), 2);
                                    break;
                                case "D":
                                    u += c("D", e.getDay(), s, o);
                                    break;
                                case "o":
                                    u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    u += h("m", e.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    u += c("M", e.getMonth(), r, a);
                                    break;
                                case "y":
                                    u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                    break;
                                case "@":
                                    u += e.getTime();
                                    break;
                                case "!":
                                    u += 1e4 * e.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    l("'") ? u += "'" : d = !0;
                                    break;
                                default:
                                    u += t.charAt(n)
                            }
                    return u
                },
                _possibleChars: function(t) {
                    var e, i = "",
                        n = !1,
                        s = function(i) {
                            var n = e + 1 < t.length && t.charAt(e + 1) === i;
                            return n && e++, n
                        };
                    for (e = 0; e < t.length; e++)
                        if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                        else switch (t.charAt(e)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                i += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                s("'") ? i += "'" : n = !0;
                                break;
                            default:
                                i += t.charAt(e)
                        }
                    return i
                },
                _get: function(t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat"),
                            n = t.lastVal = t.input ? t.input.val() : null,
                            s = this._getDefaultDate(t),
                            o = s,
                            r = this._getFormatConfig(t);
                        try {
                            o = this.parseDate(i, n, r) || s
                        } catch (a) {
                            n = e ? "" : n
                        }
                        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(e, i, n) {
                    var s = function(t) {
                            var e = new Date;
                            return e.setDate(e.getDate() + t), e
                        },
                        o = function(i) {
                            try {
                                return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                            } catch (n) {}
                            for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), r = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                                switch (h[2] || "d") {
                                    case "d":
                                    case "D":
                                        a += parseInt(h[1], 10);
                                        break;
                                    case "w":
                                    case "W":
                                        a += 7 * parseInt(h[1], 10);
                                        break;
                                    case "m":
                                    case "M":
                                        r += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r));
                                        break;
                                    case "y":
                                    case "Y":
                                        o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r))
                                }
                                h = l.exec(i)
                            }
                            return new Date(o, r, a)
                        },
                        r = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                    return r = r && "Invalid Date" === r.toString() ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
                },
                _setDate: function(t, e, i) {
                    var n = !e,
                        s = t.selectedMonth,
                        o = t.selectedYear,
                        r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return e
                },
                _attachHandlers: function(e) {
                    var i = this._get(e, "stepMonths"),
                        n = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                        var e = {
                            prev: function() {
                                t.datepicker._adjustDate(n, -i, "M")
                            },
                            next: function() {
                                t.datepicker._adjustDate(n, +i, "M")
                            },
                            hide: function() {
                                t.datepicker._hideDatepicker()
                            },
                            today: function() {
                                t.datepicker._gotoToday(n)
                            },
                            selectDay: function() {
                                return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            },
                            selectMonth: function() {
                                return t.datepicker._selectMonthYear(n, this, "M"), !1
                            },
                            selectYear: function() {
                                return t.datepicker._selectMonthYear(n, this, "Y"), !1
                            }
                        };
                        t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e, i, n, s, o, r, a, l, h, c, u, d, p, f, g, m, v, b, y, w, _, k, x, C, T, D, E, $, I, M, P, S, j, z, N, A, O, H, L, F = new Date,
                        R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                        B = this._get(t, "isRTL"),
                        W = this._get(t, "showButtonPanel"),
                        q = this._get(t, "hideIfNoPrevNext"),
                        V = this._get(t, "navigationAsDateFormat"),
                        Y = this._getNumberOfMonths(t),
                        U = this._get(t, "showCurrentAtPos"),
                        X = this._get(t, "stepMonths"),
                        K = 1 !== Y[0] || 1 !== Y[1],
                        G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                        J = this._getMinMaxDate(t, "min"),
                        Q = this._getMinMaxDate(t, "max"),
                        Z = t.drawMonth - U,
                        tt = t.drawYear;
                    if (0 > Z && (Z += 12, tt--), Q)
                        for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - Y[0] * Y[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
                    for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>",
                        s = this._get(t, "nextText"), s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : R, r = V ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = W ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), w = "", k = 0; k < Y[0]; k++) {
                        for (x = "", this.maxRows = 4, C = 0; C < Y[1]; C++) {
                            if (T = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", E = "", K) {
                                if (E += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                                    case 0:
                                        E += " ui-datepicker-group-first", D = " ui-corner-" + (B ? "right" : "left");
                                        break;
                                    case Y[1] - 1:
                                        E += " ui-datepicker-group-last", D = " ui-corner-" + (B ? "left" : "right");
                                        break;
                                    default:
                                        E += " ui-datepicker-group-middle", D = ""
                                }
                                E += "'>"
                            }
                            for (E += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === k ? B ? o : n : "") + (/all|right/.test(D) && 0 === k ? B ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, J, Q, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", $ = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) I = (_ + c) % 7, $ += "<th scope='col'" + ((_ + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I] + "'>" + p[I] + "</span></th>";
                            for (E += $ + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), P = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, S = Math.ceil((P + M) / 7), j = K && this.maxRows > S ? this.maxRows : S, this.maxRows = j, z = this._daylightSavingAdjust(new Date(tt, Z, 1 - P)), N = 0; j > N; N++) {
                                for (E += "<tr>", A = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", _ = 0; 7 > _; _++) O = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], H = z.getMonth() !== Z, L = H && !b || !O[0] || J && J > z || Q && z > Q, A += "<td class='" + ((_ + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (z.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === z.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (H && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                                E += A + "</tr>"
                            }
                            Z++, Z > 11 && (Z = 0, tt++), E += "</tbody></table>" + (K ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += E
                        }
                        w += x
                    }
                    return w += h, t._keyEvent = !1, w
                },
                _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
                    var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                        v = this._get(t, "changeYear"),
                        b = this._get(t, "showMonthAfterYear"),
                        y = "<div class='ui-datepicker-title'>",
                        w = "";
                    if (o || !m) w += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                    else {
                        for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (w += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                        w += "</select>"
                    }
                    if (b || (y += w + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                        if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                        else {
                            for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? d : e
                                }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                        }
                    return y += this._get(t, "yearSuffix"), b && (y += (!o && m && v ? "" : "&#xa0;") + w), y += "</div>"
                },
                _adjustInstDate: function(t, e, i) {
                    var n = t.drawYear + ("Y" === i ? e : 0),
                        s = t.drawMonth + ("M" === i ? e : 0),
                        o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                        r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                    t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
                },
                _restrictMinMax: function(t, e) {
                    var i = this._getMinMaxDate(t, "min"),
                        n = this._getMinMaxDate(t, "max"),
                        s = i && i > e ? i : e;
                    return n && s > n ? n : s
                },
                _notifyChange: function(t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function(t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function(t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
                },
                _getFirstDayOfMonth: function(t, e) {
                    return new Date(t, e, 1).getDay()
                },
                _canAdjustMonth: function(t, e, i, n) {
                    var s = this._getNumberOfMonths(t),
                        o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                    return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
                },
                _isInRange: function(t, e) {
                    var i, n, s = this._getMinMaxDate(t, "min"),
                        o = this._getMinMaxDate(t, "max"),
                        r = null,
                        a = null,
                        l = this._get(t, "yearRange");
                    return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
                },
                _getFormatConfig: function(t) {
                    var e = this._get(t, "shortYearCutoff");
                    return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                        shortYearCutoff: e,
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, e, i, n) {
                    e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                    var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
                }
            }), t.fn.datepicker = function(e) {
                if (!this.length) return this;
                t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
                var i = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                    "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
                }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
            }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.2";
            t.datepicker;
            t.widget("ui.draggable", t.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
                },
                _setOption: function(t, e) {
                    this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
                },
                _destroy: function() {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
                },
                _mouseCapture: function(e) {
                    var i = this.options;
                    return this._blurActiveElement(e), this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
                },
                _blockFrames: function(e) {
                    this.iframeBlocks = this.document.find(e).map(function() {
                        var e = t(this);
                        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _blurActiveElement: function(e) {
                    var i = this.document[0];
                    if (this.handleElement.is(e.target)) try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
                    } catch (n) {}
                },
                _mouseStart: function(e) {
                    var i = this.options;
                    return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return "fixed" === t(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
                },
                _refreshOffsets: function(t) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(e, i) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                        var n = this._uiHash();
                        if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                        this.position = n.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
                },
                _mouseStop: function(e) {
                    var i = this,
                        n = !1;
                    return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        i._trigger("stop", e) !== !1 && i._clear()
                    }) : this._trigger("stop", e) !== !1 && this._clear(), !1
                },
                _mouseUp: function(e) {
                    return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                },
                _getHandle: function(e) {
                    return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this.handleElement.removeClass("ui-draggable-handle")
                },
                _createHelper: function(e) {
                    var i = this.options,
                        n = t.isFunction(i.helper),
                        s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                    return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(e) {
                    "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                        left: +e[0],
                        top: +e[1] || 0
                    }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                },
                _isRootNode: function(t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0]
                },
                _getParentOffset: function() {
                    var e = this.offsetParent.offset(),
                        i = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                        top: 0,
                        left: 0
                    }), {
                        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" !== this.cssPosition) return {
                        top: 0,
                        left: 0
                    };
                    var t = this.element.position(),
                        e = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var e, i, n, s = this.options,
                        o = this.document[0];
                    return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
                },
                _convertPositionTo: function(t, e) {
                    e || (e = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        n = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function(t, e) {
                    var i, n, s, o, r = this.options,
                        a = this._isRootNode(this.scrollParent[0]),
                        l = t.pageX,
                        h = t.pageY;
                    return a && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                },
                _normalizeRightBottom: function() {
                    "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
                },
                _trigger: function(e, i, n) {
                    return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }), t.ui.plugin.add("draggable", "connectToSortable", {
                start: function(e, i, n) {
                    var s = t.extend({}, i, {
                        item: n.element
                    });
                    n.sortables = [], t(n.options.connectToSortable).each(function() {
                        var i = t(this).sortable("instance");
                        i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                    })
                },
                stop: function(e, i, n) {
                    var s = t.extend({}, i, {
                        item: n.element
                    });
                    n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                        var t = this;
                        t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                            position: t.placeholder.css("position"),
                            top: t.placeholder.css("top"),
                            left: t.placeholder.css("left")
                        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                    })
                },
                drag: function(e, i, n) {
                    t.each(n.sortables, function() {
                        var s = !1,
                            o = this;
                        o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                            return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                        })), s ? (o.isOver || (o.isOver = 1, o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                            return i.helper[0]
                        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                            this.refreshPositions()
                        }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }), t.ui.plugin.add("draggable", "cursor", {
                start: function(e, i, n) {
                    var s = t("body"),
                        o = n.options;
                    s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
                },
                stop: function(e, i, n) {
                    var s = n.options;
                    s._cursor && t("body").css("cursor", s._cursor)
                }
            }), t.ui.plugin.add("draggable", "opacity", {
                start: function(e, i, n) {
                    var s = t(i.helper),
                        o = n.options;
                    s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
                },
                stop: function(e, i, n) {
                    var s = n.options;
                    s._opacity && t(i.helper).css("opacity", s._opacity)
                }
            }), t.ui.plugin.add("draggable", "scroll", {
                start: function(t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                },
                drag: function(e, i, n) {
                    var s = n.options,
                        o = !1,
                        r = n.scrollParentNotHidden[0],
                        a = n.document[0];
                    r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
                }
            }), t.ui.plugin.add("draggable", "snap", {
                start: function(e, i, n) {
                    var s = n.options;
                    n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                        var e = t(this),
                            i = e.offset();
                        this !== n.element[0] && n.snapElements.push({
                            item: this,
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: i.top,
                            left: i.left
                        })
                    })
                },
                drag: function(e, i, n) {
                    var s, o, r, a, l, h, c, u, d, p, f = n.options,
                        g = f.snapTolerance,
                        m = i.offset.left,
                        v = m + n.helperProportions.width,
                        b = i.offset.top,
                        y = b + n.helperProportions.height;
                    for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, c = n.snapElements[d].top - n.margins.top, u = c + n.snapElements[d].height, l - g > v || m > h + g || c - g > y || b > u + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item
                    })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(c - y) <= g, o = Math.abs(u - b) <= g, r = Math.abs(l - v) <= g, a = Math.abs(h - m) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                        top: c - n.helperProportions.height,
                        left: 0
                    }).top), o && (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0
                    }).top), r && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width
                    }).left), a && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = Math.abs(c - b) <= g, o = Math.abs(u - y) <= g, r = Math.abs(l - m) <= g, a = Math.abs(h - v) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                        top: c,
                        left: 0
                    }).top), o && (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0
                    }).top), r && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left), a && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h - n.helperProportions.width
                    }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item
                    })), n.snapElements[d].snapping = s || o || r || a || p)
                }
            }), t.ui.plugin.add("draggable", "stack", {
                start: function(e, i, n) {
                    var s, o = n.options,
                        r = t.makeArray(t(o.stack)).sort(function(e, i) {
                            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                        });
                    r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function(e) {
                        t(this).css("zIndex", s + e)
                    }), this.css("zIndex", s + r.length))
                }
            }), t.ui.plugin.add("draggable", "zIndex", {
                start: function(e, i, n) {
                    var s = t(i.helper),
                        o = n.options;
                    s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
                },
                stop: function(e, i, n) {
                    var s = n.options;
                    s._zIndex && t(i.helper).css("zIndex", s._zIndex)
                }
            });
            t.ui.draggable;
            t.widget("ui.resizable", t.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(t) {
                    return parseInt(t, 10) || 0
                },
                _isNumber: function(t) {
                    return !isNaN(parseInt(t, 10))
                },
                _hasScroll: function(e, i) {
                    if ("hidden" === t(e).css("overflow")) return !1;
                    var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                        s = !1;
                    return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
                },
                _create: function() {
                    var e, i, n, s, o, r = this,
                        a = this.options;
                    if (this.element.addClass("ui-resizable"), t.extend(this, {
                            _aspectRatio: !!a.aspectRatio,
                            aspectRatio: a.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }), this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })), this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), o = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
                            zIndex: a.zIndex
                        }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
                    this._renderAxis = function(e) {
                        var i, n, s, o;
                        e = e || this.element;
                        for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[i]).length
                    }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                        r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
                    }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        a.disabled || (t(this).removeClass("ui-resizable-autohide"), r._handles.show())
                    }).mouseleave(function() {
                        a.disabled || r.resizing || (t(this).addClass("ui-resizable-autohide"), r._handles.hide())
                    })), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var e, i = function(e) {
                        t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                        position: e.css("position"),
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: e.css("top"),
                        left: e.css("left")
                    }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
                },
                _mouseCapture: function(e) {
                    var i, n, s = !1;
                    for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                    return !this.options.disabled && s
                },
                _mouseStart: function(e) {
                    var i, n, s, o = this.options,
                        r = this.element;
                    return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: i,
                        top: n
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: r.width(),
                        height: r.height()
                    }, this.originalSize = this._helper ? {
                        width: r.outerWidth(),
                        height: r.outerHeight()
                    } : {
                        width: r.width(),
                        height: r.height()
                    }, this.sizeDiff = {
                        width: r.outerWidth() - r.width(),
                        height: r.outerHeight() - r.height()
                    }, this.originalPosition = {
                        left: i,
                        top: n
                    }, this.originalMousePosition = {
                        left: e.pageX,
                        top: e.pageY
                    }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), r.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
                },
                _mouseDrag: function(e) {
                    var i, n, s = this.originalMousePosition,
                        o = this.axis,
                        r = e.pageX - s.left || 0,
                        a = e.pageY - s.top || 0,
                        l = this._change[o];
                    return this._updatePrevProperties(), l ? (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
                },
                _mouseStop: function(e) {
                    this.resizing = !1;
                    var i, n, s, o, r, a, l, h = this.options,
                        c = this;
                    return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, r = {
                        width: c.helper.width() - o,
                        height: c.helper.height() - s
                    }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                        top: l,
                        left: a
                    })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var t = {};
                    return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
                },
                _updateVirtualBoundaries: function(t) {
                    var e, i, n, s, o, r = this.options;
                    o = {
                        minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                        maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                        minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                        maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                    }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
                },
                _updateCache: function(t) {
                    this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
                },
                _updateRatio: function(t) {
                    var e = this.position,
                        i = this.size,
                        n = this.axis;
                    return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
                },
                _respectSize: function(t) {
                    var e = this._vBoundaries,
                        i = this.axis,
                        n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                        s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                        r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                        a = this.originalPosition.left + this.originalSize.width,
                        l = this.position.top + this.size.height,
                        h = /sw|nw|w/.test(i),
                        c = /nw|ne|n/.test(i);
                    return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
                },
                _getPaddingPlusBorderDimensions: function(t) {
                    for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                },
                _renderProxy: function() {
                    var e = this.element,
                        i = this.options;
                    this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++i.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(t, e) {
                        return {
                            width: this.originalSize.width + e
                        }
                    },
                    w: function(t, e) {
                        var i = this.originalSize,
                            n = this.originalPosition;
                        return {
                            left: n.left + e,
                            width: i.width - e
                        }
                    },
                    n: function(t, e, i) {
                        var n = this.originalSize,
                            s = this.originalPosition;
                        return {
                            top: s.top + i,
                            height: n.height - i
                        }
                    },
                    s: function(t, e, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function(e, i, n) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                    },
                    sw: function(e, i, n) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                    },
                    ne: function(e, i, n) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                    },
                    nw: function(e, i, n) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                    }
                },
                _propagate: function(e, i) {
                    t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }), t.ui.plugin.add("resizable", "animate", {
                stop: function(e) {
                    var i = t(this).resizable("instance"),
                        n = i.options,
                        s = i._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName),
                        r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        a = o ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - a,
                            height: i.size.height - r
                        },
                        h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                        c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(t.extend(l, c && h ? {
                        top: c,
                        left: h
                    } : {}), {
                        duration: n.animateDuration,
                        easing: n.animateEasing,
                        step: function() {
                            var n = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            s && s.length && t(s[0]).css({
                                width: n.width,
                                height: n.height
                            }), i._updateCache(n), i._propagate("resize", e)
                        }
                    })
                }
            }), t.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var e, i, n, s, o, r, a, l = t(this).resizable("instance"),
                        h = l.options,
                        c = l.element,
                        u = h.containment,
                        d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                    d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                        left: 0,
                        top: 0
                    }, l.containerPosition = {
                        left: 0,
                        top: 0
                    }, l.parentData = {
                        element: t(document),
                        left: 0,
                        top: 0,
                        width: t(document).width(),
                        height: t(document).height() || document.body.parentNode.scrollHeight
                    }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                        i[t] = l._num(e.css("padding" + n))
                    }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                        height: e.innerHeight() - i[3],
                        width: e.innerWidth() - i[1]
                    }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                        element: d,
                        left: n.left,
                        top: n.top,
                        width: r,
                        height: a
                    }))
                },
                resize: function(e) {
                    var i, n, s, o, r = t(this).resizable("instance"),
                        a = r.options,
                        l = r.containerOffset,
                        h = r.position,
                        c = r._aspectRatio || e.shiftKey,
                        u = {
                            top: 0,
                            left: 0
                        },
                        d = r.containerElement,
                        p = !0;
                    d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
                },
                stop: function() {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        n = e.containerOffset,
                        s = e.containerPosition,
                        o = e.containerElement,
                        r = t(e.helper),
                        a = r.offset(),
                        l = r.outerWidth() - e.sizeDiff.width,
                        h = r.outerHeight() - e.sizeDiff.height;
                    e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                        left: a.left - s.left - n.left,
                        width: l,
                        height: h
                    }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                        left: a.left - s.left - n.left,
                        width: l,
                        height: h
                    })
                }
            }), t.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        n = function(e) {
                            t(e).each(function() {
                                var e = t(this);
                                e.data("ui-resizable-alsoresize", {
                                    width: parseInt(e.width(), 10),
                                    height: parseInt(e.height(), 10),
                                    left: parseInt(e.css("left"), 10),
                                    top: parseInt(e.css("top"), 10)
                                })
                            })
                        };
                    "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                        n(t)
                    })
                },
                resize: function(e, i) {
                    var n = t(this).resizable("instance"),
                        s = n.options,
                        o = n.originalSize,
                        r = n.originalPosition,
                        a = {
                            height: n.size.height - o.height || 0,
                            width: n.size.width - o.width || 0,
                            top: n.position.top - r.top || 0,
                            left: n.position.left - r.left || 0
                        },
                        l = function(e, n) {
                            t(e).each(function() {
                                var e = t(this),
                                    s = t(this).data("ui-resizable-alsoresize"),
                                    o = {},
                                    r = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                t.each(r, function(t, e) {
                                    var i = (s[e] || 0) + (a[e] || 0);
                                    i && i >= 0 && (o[e] = i || null)
                                }), e.css(o)
                            })
                        };
                    "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                        l(t, e)
                    })
                },
                stop: function() {
                    t(this).removeData("resizable-alsoresize")
                }
            }), t.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        n = e.size;
                    e.ghost = e.originalElement.clone(), e.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: n.height,
                        width: n.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
                },
                resize: function() {
                    var e = t(this).resizable("instance");
                    e.ghost && e.ghost.css({
                        position: "relative",
                        height: e.size.height,
                        width: e.size.width
                    })
                },
                stop: function() {
                    var e = t(this).resizable("instance");
                    e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                }
            }), t.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var e, i = t(this).resizable("instance"),
                        n = i.options,
                        s = i.size,
                        o = i.originalSize,
                        r = i.originalPosition,
                        a = i.axis,
                        l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                        h = l[0] || 1,
                        c = l[1] || 1,
                        u = Math.round((s.width - o.width) / h) * h,
                        d = Math.round((s.height - o.height) / c) * c,
                        p = o.width + u,
                        f = o.height + d,
                        g = n.maxWidth && n.maxWidth < p,
                        m = n.maxHeight && n.maxHeight < f,
                        v = n.minWidth && n.minWidth > p,
                        b = n.minHeight && n.minHeight > f;
                    n.grid = l, v && (p += h), b && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = c - e.height, i.size.width = p, i.position.left = r.left + o.width - p))
                }
            });
            t.ui.resizable, t.widget("ui.dialog", {
                version: "1.11.2",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    closeOnEscape: !0,
                    closeText: "Close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(e) {
                            var i = t(this).css(e).offset().top;
                            0 > i && t(this).css("top", e.top - i)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: {
                    buttons: !0,
                    height: !0,
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0,
                    width: !0
                },
                resizableRelatedOptions: {
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0
                },
                _create: function() {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    }, this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function() {
                    var e = this.options.appendTo;
                    return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
                },
                _destroy: function() {
                    var t, e = this.originalPosition;
                    this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: t.noop,
                enable: t.noop,
                close: function(e) {
                    var i, n = this;
                    if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                            i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                        } catch (s) {}
                        this._hide(this.uiDialog, this.options.hide, function() {
                            n._trigger("close", e)
                        })
                    }
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() {
                    this._moveToTop()
                },
                _moveToTop: function(e, i) {
                    var n = !1,
                        s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +t(this).css("z-index")
                        }).get(),
                        o = Math.max.apply(null, s);
                    return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
                },
                open: function() {
                    var e = this;
                    return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                        e._focusTabbable(), e._trigger("focus")
                    }), this._makeFocusTarget(), void this._trigger("open"))
                },
                _focusTabbable: function() {
                    var t = this._focusedElement;
                    t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
                },
                _keepFocus: function(e) {
                    function i() {
                        var e = this.document[0].activeElement,
                            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                        i || this._focusTabbable()
                    }
                    e.preventDefault(), i.call(this), this._delay(i)
                },
                _createWrapper: function() {
                    this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                        keydown: function(e) {
                            if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                            if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                                var i = this.uiDialog.find(":tabbable"),
                                    n = i.filter(":first"),
                                    s = i.filter(":last");
                                e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                    s.focus()
                                }), e.preventDefault()) : (this._delay(function() {
                                    n.focus()
                                }), e.preventDefault())
                            }
                        },
                        mousedown: function(t) {
                            this._moveToTop(t) && this._focusTabbable()
                        }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                },
                _createTitlebar: function() {
                    var e;
                    this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                        mousedown: function(e) {
                            t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                        label: this.options.closeText,
                        icons: {
                            primary: "ui-icon-closethick"
                        },
                        text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                        click: function(t) {
                            t.preventDefault(), this.close(t)
                        }
                    }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                        "aria-labelledby": e.attr("id")
                    })
                },
                _title: function(t) {
                    this.options.title || t.html("&#160;"), t.text(this.options.title)
                },
                _createButtonPane: function() {
                    this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
                },
                _createButtons: function() {
                    var e = this,
                        i = this.options.buttons;
                    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                        var s, o;
                        n = t.isFunction(n) ? {
                            click: n,
                            text: i
                        } : n, n = t.extend({
                            type: "button"
                        }, n), s = n.click, n.click = function() {
                            s.apply(e.element[0], arguments)
                        }, o = {
                            icons: n.icons,
                            text: n.showText
                        }, delete n.icons, delete n.showText, t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
                    }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function() {
                    function e(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    var i = this,
                        n = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(n, s) {
                            t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                        },
                        drag: function(t, n) {
                            i._trigger("drag", t, e(n))
                        },
                        stop: function(s, o) {
                            var r = o.offset.left - i.document.scrollLeft(),
                                a = o.offset.top - i.document.scrollTop();
                            n.position = {
                                my: "left top",
                                at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                                of: i.window
                            }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                        }
                    })
                },
                _makeResizable: function() {
                    function e(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    var i = this,
                        n = this.options,
                        s = n.resizable,
                        o = this.uiDialog.css("position"),
                        r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: n.maxWidth,
                        maxHeight: n.maxHeight,
                        minWidth: n.minWidth,
                        minHeight: this._minHeight(),
                        handles: r,
                        start: function(n, s) {
                            t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                        },
                        resize: function(t, n) {
                            i._trigger("resize", t, e(n))
                        },
                        stop: function(s, o) {
                            var r = i.uiDialog.offset(),
                                a = r.left - i.document.scrollLeft(),
                                l = r.top - i.document.scrollTop();
                            n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                                my: "left top",
                                at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                                of: i.window
                            }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                        }
                    }).css("position", o)
                },
                _trackFocus: function() {
                    this._on(this.widget(), {
                        focusin: function(e) {
                            this._makeFocusTarget(), this._focusedElement = t(e.target)
                        }
                    })
                },
                _makeFocusTarget: function() {
                    this._untrackInstance(), this._trackingInstances().unshift(this)
                },
                _untrackInstance: function() {
                    var e = this._trackingInstances(),
                        i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
                },
                _trackingInstances: function() {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function() {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                },
                _setOptions: function(e) {
                    var i = this,
                        n = !1,
                        s = {};
                    t.each(e, function(t, e) {
                        i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                    }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
                },
                _setOption: function(t, e) {
                    var i, n, s = this.uiDialog;
                    "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                        label: "" + e
                    }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var t, e, i, n = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                        height: "auto",
                        width: n.width
                    }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                        minHeight: e,
                        maxHeight: i,
                        height: "auto"
                    }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var e = t(this);
                        return t("<div>").css({
                            position: "absolute",
                            width: e.outerWidth(),
                            height: e.outerHeight()
                        }).appendTo(e.parent()).offset(e.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _allowInteraction: function(e) {
                    return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var e = !0;
                        this._delay(function() {
                            e = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function(t) {
                                e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function() {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                    }
                }
            });
            t.widget("ui.droppable", {
                version: "1.11.2",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    activeClass: !1,
                    addClasses: !0,
                    greedy: !1,
                    hoverClass: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function() {
                    var e, i = this.options,
                        n = i.accept;
                    this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                        return t.is(n)
                    }, this.proportions = function() {
                        return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        }
                    }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
                },
                _addToManager: function(e) {
                    t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
                },
                _splice: function(t) {
                    for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
                },
                _destroy: function() {
                    var e = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(e, i) {
                    if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                        return t.is(i)
                    };
                    else if ("scope" === e) {
                        var n = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(n), this._addToManager(i)
                    }
                    this._super(e, i)
                },
                _activate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
                },
                _deactivate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
                },
                _over: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
                },
                _out: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
                },
                _drop: function(e, i) {
                    var n = i || t.ui.ddmanager.current,
                        s = !1;
                    return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                        var i = t(this).droppable("instance");
                        return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(i, {
                            offset: i.element.offset()
                        }), i.options.tolerance, e) ? (s = !0, !1) : void 0
                    }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
                },
                ui: function(t) {
                    return {
                        draggable: t.currentItem || t.element,
                        helper: t.helper,
                        position: t.position,
                        offset: t.positionAbs
                    }
                }
            }), t.ui.intersect = function() {
                function t(t, e, i) {
                    return t >= e && e + i > t
                }
                return function(e, i, n, s) {
                    if (!i.offset) return !1;
                    var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                        r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                        a = o + e.helperProportions.width,
                        l = r + e.helperProportions.height,
                        h = i.offset.left,
                        c = i.offset.top,
                        u = h + i.proportions().width,
                        d = c + i.proportions().height;
                    switch (n) {
                        case "fit":
                            return o >= h && u >= a && r >= c && d >= l;
                        case "intersect":
                            return h < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < u && c < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                        case "pointer":
                            return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                        case "touch":
                            return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= h && u >= o || a >= h && u >= a || h > o && a > u);
                        default:
                            return !1
                    }
                }
            }(), t.ui.ddmanager = {
                current: null,
                droppables: {
                    "default": []
                },
                prepareOffsets: function(e, i) {
                    var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                        r = i ? i.type : null,
                        a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                    t: for (n = 0; n < o.length; n++)
                        if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                            for (s = 0; s < a.length; s++)
                                if (a[s] === o[n].element[0]) {
                                    o[n].proportions().height = 0;
                                    continue t
                                }
                            o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                                width: o[n].element[0].offsetWidth,
                                height: o[n].element[0].offsetHeight
                            }))
                        }
                },
                drop: function(e, i) {
                    var n = !1;
                    return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                        this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                    }), n
                },
                dragStart: function(e, i) {
                    e.element.parentsUntil("body").bind("scroll.droppable", function() {
                        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                    })
                },
                drag: function(e, i) {
                    e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var n, s, o, r = t.ui.intersect(e, this, this.options.tolerance, i),
                                a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                            a && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                                return t(this).droppable("instance").options.scope === s
                            }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                        }
                    })
                },
                dragStop: function(e, i) {
                    e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                }
            };
            var b = (t.ui.droppable, "ui-effects-"),
                y = t;
            t.effects = {
                    effect: {}
                },
                function(t, e) {
                    function i(t, e, i) {
                        var n = u[e.type] || {};
                        return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                    }

                    function n(e) {
                        var i = h(),
                            n = i._rgba = [];
                        return e = e.toLowerCase(), f(l, function(t, s) {
                            var o, r = s.re.exec(e),
                                a = r && s.parse(r),
                                l = s.space || "rgba";
                            return a ? (o = i[l](a), i[c[l].cache] = o[c[l].cache], n = i._rgba = o._rgba, !1) : void 0
                        }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
                    }

                    function s(t, e, i) {
                        return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                        a = /^([\-+])=\s*(\d+\.?\d*)/,
                        l = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [t[1], t[2], t[3], t[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(t) {
                                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(t) {
                                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(t) {
                                return [t[1], t[2] / 100, t[3] / 100, t[4]]
                            }
                        }],
                        h = t.Color = function(e, i, n, s) {
                            return new t.Color.fn.parse(e, i, n, s)
                        },
                        c = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        u = {
                            "byte": {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        d = h.support = {},
                        p = t("<p>")[0],
                        f = t.each;
                    p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                        e.cache = "_" + t, e.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }), h.fn = t.extend(h.prototype, {
                        parse: function(s, r, a, l) {
                            if (s === e) return this._rgba = [null, null, null, null], this;
                            (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                            var u = this,
                                d = t.type(s),
                                p = this._rgba = [];
                            return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                                p[e.idx] = i(s[e.idx], e)
                            }), this) : "object" === d ? (s instanceof h ? f(c, function(t, e) {
                                s[e.cache] && (u[e.cache] = s[e.cache].slice())
                            }) : f(c, function(e, n) {
                                var o = n.cache;
                                f(n.props, function(t, e) {
                                    if (!u[o] && n.to) {
                                        if ("alpha" === t || null == s[t]) return;
                                        u[o] = n.to(u._rgba)
                                    }
                                    u[o][e.idx] = i(s[t], e, !0)
                                }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                            }), this) : void 0
                        },
                        is: function(t) {
                            var e = h(t),
                                i = !0,
                                n = this;
                            return f(c, function(t, s) {
                                var o, r = e[s.cache];
                                return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                                    return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                                })), i
                            }), i
                        },
                        _space: function() {
                            var t = [],
                                e = this;
                            return f(c, function(i, n) {
                                e[n.cache] && t.push(i)
                            }), t.pop()
                        },
                        transition: function(t, e) {
                            var n = h(t),
                                s = n._space(),
                                o = c[s],
                                r = 0 === this.alpha() ? h("transparent") : this,
                                a = r[o.cache] || o.to(r._rgba),
                                l = a.slice();
                            return n = n[o.cache], f(o.props, function(t, s) {
                                var o = s.idx,
                                    r = a[o],
                                    h = n[o],
                                    c = u[s.type] || {};
                                null !== h && (null === r ? l[o] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), l[o] = i((h - r) * e + r, s)))
                            }), this[s](l)
                        },
                        blend: function(e) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice(),
                                n = i.pop(),
                                s = h(e)._rgba;
                            return h(t.map(i, function(t, e) {
                                return (1 - n) * s[e] + n * t
                            }))
                        },
                        toRgbaString: function() {
                            var e = "rgba(",
                                i = t.map(this._rgba, function(t, e) {
                                    return null == t ? e > 2 ? 1 : 0 : t
                                });
                            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                        },
                        toHslaString: function() {
                            var e = "hsla(",
                                i = t.map(this.hsla(), function(t, e) {
                                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                                });
                            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                        },
                        toHexString: function(e) {
                            var i = this._rgba.slice(),
                                n = i.pop();
                            return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                                return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                            }).join("")
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e, i, n = t[0] / 255,
                            s = t[1] / 255,
                            o = t[2] / 255,
                            r = t[3],
                            a = Math.max(n, s, o),
                            l = Math.min(n, s, o),
                            h = a - l,
                            c = a + l,
                            u = .5 * c;
                        return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
                    }, c.hsla.from = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e = t[0] / 360,
                            i = t[1],
                            n = t[2],
                            o = t[3],
                            r = .5 >= n ? n * (1 + i) : n + i - n * i,
                            a = 2 * n - r;
                        return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                    }, f(c, function(n, s) {
                        var o = s.props,
                            r = s.cache,
                            l = s.to,
                            c = s.from;
                        h.fn[n] = function(n) {
                            if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                            var s, a = t.type(n),
                                u = "array" === a || "object" === a ? n : arguments,
                                d = this[r].slice();
                            return f(o, function(t, e) {
                                var n = u["object" === a ? t : e.idx];
                                null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                            }), c ? (s = h(c(d)), s[r] = d, s) : h(d)
                        }, f(o, function(e, i) {
                            h.fn[e] || (h.fn[e] = function(s) {
                                var o, r = t.type(s),
                                    l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                    h = this[l](),
                                    c = h[i.idx];
                                return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                            })
                        })
                    }), h.hook = function(e) {
                        var i = e.split(" ");
                        f(i, function(e, i) {
                            t.cssHooks[i] = {
                                set: function(e, s) {
                                    var o, r, a = "";
                                    if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                        if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                            for (r = "backgroundColor" === i ? e.parentNode : e;
                                                ("" === a || "transparent" === a) && r && r.style;) try {
                                                a = t.css(r, "backgroundColor"), r = r.parentNode
                                            } catch (l) {}
                                            s = s.blend(a && "transparent" !== a ? a : "_default")
                                        }
                                        s = s.toRgbaString()
                                    }
                                    try {
                                        e.style[i] = s
                                    } catch (l) {}
                                }
                            }, t.fx.step[i] = function(e) {
                                e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                            }
                        })
                    }, h.hook(r), t.cssHooks.borderColor = {
                        expand: function(t) {
                            var e = {};
                            return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                                e["border" + n + "Color"] = t
                            }), e
                        }
                    }, o = t.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(y),
                function() {
                    function e(e) {
                        var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                            o = {};
                        if (s && s.length && s[0] && s[s[0]])
                            for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                        else
                            for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                        return o
                    }

                    function i(e, i) {
                        var n, o, r = {};
                        for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o));
                        return r
                    }
                    var n = ["add", "remove", "toggle"],
                        s = {
                            border: 1,
                            borderBottom: 1,
                            borderColor: 1,
                            borderLeft: 1,
                            borderRight: 1,
                            borderTop: 1,
                            borderWidth: 1,
                            margin: 1,
                            padding: 1
                        };
                    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                        t.fx.step[i] = function(t) {
                            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (y.style(t.elem, i, t.end), t.setAttr = !0)
                        }
                    }), t.fn.addBack || (t.fn.addBack = function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }), t.effects.animateClass = function(s, o, r, a) {
                        var l = t.speed(o, r, a);
                        return this.queue(function() {
                            var o, r = t(this),
                                a = r.attr("class") || "",
                                h = l.children ? r.find("*").addBack() : r;
                            h = h.map(function() {
                                var i = t(this);
                                return {
                                    el: i,
                                    start: e(this)
                                }
                            }), o = function() {
                                t.each(n, function(t, e) {
                                    s[e] && r[e + "Class"](s[e])
                                })
                            }, o(), h = h.map(function() {
                                return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                            }), r.attr("class", a), h = h.map(function() {
                                var e = this,
                                    i = t.Deferred(),
                                    n = t.extend({}, l, {
                                        queue: !1,
                                        complete: function() {
                                            i.resolve(e)
                                        }
                                    });
                                return this.el.animate(this.diff, n), i.promise()
                            }), t.when.apply(t, h.get()).done(function() {
                                o(), t.each(arguments, function() {
                                    var e = this.el;
                                    t.each(this.diff, function(t) {
                                        e.css(t, "")
                                    })
                                }), l.complete.call(r[0])
                            })
                        })
                    }, t.fn.extend({
                        addClass: function(e) {
                            return function(i, n, s, o) {
                                return n ? t.effects.animateClass.call(this, {
                                    add: i
                                }, n, s, o) : e.apply(this, arguments)
                            }
                        }(t.fn.addClass),
                        removeClass: function(e) {
                            return function(i, n, s, o) {
                                return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                    remove: i
                                }, n, s, o) : e.apply(this, arguments)
                            }
                        }(t.fn.removeClass),
                        toggleClass: function(e) {
                            return function(i, n, s, o, r) {
                                return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                    add: i
                                } : {
                                    remove: i
                                }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                    toggle: i
                                }, n, s, o)
                            }
                        }(t.fn.toggleClass),
                        switchClass: function(e, i, n, s, o) {
                            return t.effects.animateClass.call(this, {
                                add: i,
                                remove: e
                            }, n, s, o)
                        }
                    })
                }(),
                function() {
                    function e(e, i, n, s) {
                        return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                            effect: e
                        }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                    }

                    function i(e) {
                        return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                    }
                    t.extend(t.effects, {
                        version: "1.11.2",
                        save: function(t, e) {
                            for (var i = 0; i < e.length; i++) null !== e[i] && t.data(b + e[i], t[0].style[e[i]])
                        },
                        restore: function(t, e) {
                            var i, n;
                            for (n = 0; n < e.length; n++) null !== e[n] && (i = t.data(b + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
                        },
                        setMode: function(t, e) {
                            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                        },
                        getBaseline: function(t, e) {
                            var i, n;
                            switch (t[0]) {
                                case "top":
                                    i = 0;
                                    break;
                                case "middle":
                                    i = .5;
                                    break;
                                case "bottom":
                                    i = 1;
                                    break;
                                default:
                                    i = t[0] / e.height
                            }
                            switch (t[1]) {
                                case "left":
                                    n = 0;
                                    break;
                                case "center":
                                    n = .5;
                                    break;
                                case "right":
                                    n = 1;
                                    break;
                                default:
                                    n = t[1] / e.width
                            }
                            return {
                                x: n,
                                y: i
                            }
                        },
                        createWrapper: function(e) {
                            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                            var i = {
                                    width: e.outerWidth(!0),
                                    height: e.outerHeight(!0),
                                    "float": e.css("float")
                                },
                                n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                s = {
                                    width: e.width(),
                                    height: e.height()
                                },
                                o = document.activeElement;
                            try {
                                o.id
                            } catch (r) {
                                o = document.body
                            }
                            return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                                position: "relative"
                            }), e.css({
                                position: "relative"
                            })) : (t.extend(i, {
                                position: e.css("position"),
                                zIndex: e.css("z-index")
                            }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                                i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                            }), e.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })), e.css(s), n.css(i).show()
                        },
                        removeWrapper: function(e) {
                            var i = document.activeElement;
                            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                        },
                        setTransition: function(e, i, n, s) {
                            return s = s || {}, t.each(i, function(t, i) {
                                var o = e.cssUnit(i);
                                o[0] > 0 && (s[i] = o[0] * n + o[1])
                            }), s
                        }
                    }), t.fn.extend({
                        effect: function() {
                            function i(e) {
                                function i() {
                                    t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e()
                                }
                                var s = t(this),
                                    o = n.complete,
                                    a = n.mode;
                                (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), i()) : r.call(s[0], n, i)
                            }
                            var n = e.apply(this, arguments),
                                s = n.mode,
                                o = n.queue,
                                r = t.effects.effect[n.effect];
                            return t.fx.off || !r ? s ? this[s](n.duration, n.complete) : this.each(function() {
                                n.complete && n.complete.call(this)
                            }) : o === !1 ? this.each(i) : this.queue(o || "fx", i)
                        },
                        show: function(t) {
                            return function(n) {
                                if (i(n)) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "show", this.effect.call(this, s)
                            }
                        }(t.fn.show),
                        hide: function(t) {
                            return function(n) {
                                if (i(n)) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "hide", this.effect.call(this, s)
                            }
                        }(t.fn.hide),
                        toggle: function(t) {
                            return function(n) {
                                if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return s.mode = "toggle", this.effect.call(this, s)
                            }
                        }(t.fn.toggle),
                        cssUnit: function(e) {
                            var i = this.css(e),
                                n = [];
                            return t.each(["em", "px", "%", "pt"], function(t, e) {
                                i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                            }), n
                        }
                    })
                }(),
                function() {
                    var e = {};
                    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                        e[i] = function(e) {
                            return Math.pow(e, t + 2)
                        }
                    }), t.extend(e, {
                        Sine: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Elastic: function(t) {
                            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2)
                        },
                        Bounce: function(t) {
                            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        }
                    }), t.each(e, function(e, i) {
                        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                            return 1 - i(1 - t)
                        }, t.easing["easeInOut" + e] = function(t) {
                            return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                        }
                    })
                }();
            t.effects, t.effects.effect.blind = function(e, i) {
                var n, s, o, r = t(this),
                    a = /up|down|vertical/,
                    l = /up|left|vertical|horizontal/,
                    h = ["position", "top", "bottom", "left", "right", "height", "width"],
                    c = t.effects.setMode(r, e.mode || "hide"),
                    u = e.direction || "up",
                    d = a.test(u),
                    p = d ? "height" : "width",
                    f = d ? "top" : "left",
                    g = l.test(u),
                    m = {},
                    v = "show" === c;
                r.parent().is(".ui-effects-wrapper") ? t.effects.save(r.parent(), h) : t.effects.save(r, h), r.show(), n = t.effects.createWrapper(r).css({
                    overflow: "hidden"
                }), s = n[p](), o = parseFloat(n.css(f)) || 0, m[p] = v ? s : 0, g || (r.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                    position: "absolute"
                }), m[f] = v ? o : s + o), v && (n.css(p, 0), g || n.css(f, o + s)), n.animate(m, {
                    duration: e.duration,
                    easing: e.easing,
                    queue: !1,
                    complete: function() {
                        "hide" === c && r.hide(), t.effects.restore(r, h), t.effects.removeWrapper(r), i()
                    }
                })
            }, t.effects.effect.bounce = function(e, i) {
                var n, s, o, r = t(this),
                    a = ["position", "top", "bottom", "left", "right", "height", "width"],
                    l = t.effects.setMode(r, e.mode || "effect"),
                    h = "hide" === l,
                    c = "show" === l,
                    u = e.direction || "up",
                    d = e.distance,
                    p = e.times || 5,
                    f = 2 * p + (c || h ? 1 : 0),
                    g = e.duration / f,
                    m = e.easing,
                    v = "up" === u || "down" === u ? "top" : "left",
                    b = "up" === u || "left" === u,
                    y = r.queue(),
                    w = y.length;
                for ((c || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
                        opacity: 1
                    }, o[v] = 0, r.css("opacity", 0).css(v, b ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (b ? "-=" : "+=") + d, r.animate(s, g, m).animate(o, g, m), d = h ? 2 * d : d / 2;
                h && (s = {
                    opacity: 0
                }, s[v] = (b ? "-=" : "+=") + d, r.animate(s, g, m)), r.queue(function() {
                    h && r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
                }), w > 1 && y.splice.apply(y, [1, 0].concat(y.splice(w, f + 1))), r.dequeue()
            }, t.effects.effect.clip = function(e, i) {
                var n, s, o, r = t(this),
                    a = ["position", "top", "bottom", "left", "right", "height", "width"],
                    l = t.effects.setMode(r, e.mode || "hide"),
                    h = "show" === l,
                    c = e.direction || "vertical",
                    u = "vertical" === c,
                    d = u ? "height" : "width",
                    p = u ? "top" : "left",
                    f = {};
                t.effects.save(r, a), r.show(), n = t.effects.createWrapper(r).css({
                    overflow: "hidden"
                }), s = "IMG" === r[0].tagName ? n : r, o = s[d](), h && (s.css(d, 0), s.css(p, o / 2)), f[d] = h ? o : 0, f[p] = h ? 0 : o / 2, s.animate(f, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        h || r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
                    }
                })
            }, t.effects.effect.drop = function(e, i) {
                var n, s = t(this),
                    o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                    r = t.effects.setMode(s, e.mode || "hide"),
                    a = "show" === r,
                    l = e.direction || "left",
                    h = "up" === l || "down" === l ? "top" : "left",
                    c = "up" === l || "left" === l ? "pos" : "neg",
                    u = {
                        opacity: a ? 1 : 0
                    };
                t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, a && s.css("opacity", 0).css(h, "pos" === c ? -n : n), u[h] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n, s.animate(u, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                    }
                })
            }, t.effects.effect.explode = function(e, i) {
                function n() {
                    y.push(this), y.length === u * d && s()
                }

                function s() {
                    p.css({
                        visibility: "visible"
                    }), t(y).remove(), g || p.hide(), i()
                }
                var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                    d = u,
                    p = t(this),
                    f = t.effects.setMode(p, e.mode || "hide"),
                    g = "show" === f,
                    m = p.show().css("visibility", "hidden").offset(),
                    v = Math.ceil(p.outerWidth() / d),
                    b = Math.ceil(p.outerHeight() / u),
                    y = [];
                for (o = 0; u > o; o++)
                    for (l = m.top + o * b, c = o - (u - 1) / 2, r = 0; d > r; r++) a = m.left + r * v, h = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -r * v,
                        top: -o * b
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: v,
                        height: b,
                        left: a + (g ? h * v : 0),
                        top: l + (g ? c * b : 0),
                        opacity: g ? 0 : 1
                    }).animate({
                        left: a + (g ? 0 : h * v),
                        top: l + (g ? 0 : c * b),
                        opacity: g ? 1 : 0
                    }, e.duration || 500, e.easing, n)
            }, t.effects.effect.fade = function(e, i) {
                var n = t(this),
                    s = t.effects.setMode(n, e.mode || "toggle");
                n.animate({
                    opacity: s
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: i
                })
            }, t.effects.effect.fold = function(e, i) {
                var n, s, o = t(this),
                    r = ["position", "top", "bottom", "left", "right", "height", "width"],
                    a = t.effects.setMode(o, e.mode || "hide"),
                    l = "show" === a,
                    h = "hide" === a,
                    c = e.size || 15,
                    u = /([0-9]+)%/.exec(c),
                    d = !!e.horizFirst,
                    p = l !== d,
                    f = p ? ["width", "height"] : ["height", "width"],
                    g = e.duration / 2,
                    m = {},
                    v = {};
                t.effects.save(o, r), o.show(), n = t.effects.createWrapper(o).css({
                    overflow: "hidden"
                }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]), l && n.css(d ? {
                    height: 0,
                    width: c
                } : {
                    height: c,
                    width: 0
                }), m[f[0]] = l ? s[0] : c, v[f[1]] = l ? s[1] : 0, n.animate(m, g, e.easing).animate(v, g, e.easing, function() {
                    h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
                })
            }, t.effects.effect.highlight = function(e, i) {
                var n = t(this),
                    s = ["backgroundImage", "backgroundColor", "opacity"],
                    o = t.effects.setMode(n, e.mode || "show"),
                    r = {
                        backgroundColor: n.css("backgroundColor")
                    };
                "hide" === o && (r.opacity = 0), t.effects.save(n, s), n.show().css({
                    backgroundImage: "none",
                    backgroundColor: e.color || "#ffff99"
                }).animate(r, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === o && n.hide(), t.effects.restore(n, s), i()
                    }
                })
            }, t.effects.effect.size = function(e, i) {
                var n, s, o, r = t(this),
                    a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    h = ["width", "height", "overflow"],
                    c = ["fontSize"],
                    u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    p = t.effects.setMode(r, e.mode || "effect"),
                    f = e.restore || "effect" !== p,
                    g = e.scale || "both",
                    m = e.origin || ["middle", "center"],
                    v = r.css("position"),
                    b = f ? a : l,
                    y = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                "show" === p && r.show(), n = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                }, "toggle" === e.mode && "show" === p ? (r.from = e.to || y, r.to = e.from || n) : (r.from = e.from || ("show" === p ? y : n), r.to = e.to || ("hide" === p ? y : n)), o = {
                    from: {
                        y: r.from.height / n.height,
                        x: r.from.width / n.width
                    },
                    to: {
                        y: r.to.height / n.height,
                        x: r.to.width / n.width
                    }
                }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (b = b.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (b = b.concat(d), r.from = t.effects.setTransition(r, d, o.from.x, r.from), r.to = t.effects.setTransition(r, d, o.to.x, r.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (b = b.concat(c).concat(h), r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)), t.effects.save(r, b), r.show(), t.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x), r.css(r.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = a.concat(u).concat(d), r.find("*[width]").each(function() {
                    var i = t(this),
                        n = {
                            height: i.height(),
                            width: i.width(),
                            outerHeight: i.outerHeight(),
                            outerWidth: i.outerWidth()
                        };
                    f && t.effects.save(i, h), i.from = {
                        height: n.height * o.from.y,
                        width: n.width * o.from.x,
                        outerHeight: n.outerHeight * o.from.y,
                        outerWidth: n.outerWidth * o.from.x
                    }, i.to = {
                        height: n.height * o.to.y,
                        width: n.width * o.to.x,
                        outerHeight: n.height * o.to.y,
                        outerWidth: n.width * o.to.x
                    }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                        f && t.effects.restore(i, h)
                    })
                })), r.animate(r.to, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === p && r.hide(), t.effects.restore(r, b), f || ("static" === v ? r.css({
                            position: "relative",
                            top: r.to.top,
                            left: r.to.left
                        }) : t.each(["top", "left"], function(t, e) {
                            r.css(e, function(e, i) {
                                var n = parseInt(i, 10),
                                    s = t ? r.to.left : r.to.top;
                                return "auto" === i ? s + "px" : n + s + "px"
                            })
                        })), t.effects.removeWrapper(r), i()
                    }
                })
            }, t.effects.effect.scale = function(e, i) {
                var n = t(this),
                    s = t.extend(!0, {}, e),
                    o = t.effects.setMode(n, e.mode || "effect"),
                    r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
                    a = e.direction || "both",
                    l = e.origin,
                    h = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    },
                    c = {
                        y: "horizontal" !== a ? r / 100 : 1,
                        x: "vertical" !== a ? r / 100 : 1
                    };
                s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = e.from || ("show" === o ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : h), s.to = {
                    height: h.height * c.y,
                    width: h.width * c.x,
                    outerHeight: h.outerHeight * c.y,
                    outerWidth: h.outerWidth * c.x
                }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
            }, t.effects.effect.puff = function(e, i) {
                var n = t(this),
                    s = t.effects.setMode(n, e.mode || "hide"),
                    o = "hide" === s,
                    r = parseInt(e.percent, 10) || 150,
                    a = r / 100,
                    l = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                t.extend(e, {
                    effect: "scale",
                    queue: !1,
                    fade: !0,
                    mode: s,
                    complete: i,
                    percent: o ? r : 100,
                    from: o ? l : {
                        height: l.height * a,
                        width: l.width * a,
                        outerHeight: l.outerHeight * a,
                        outerWidth: l.outerWidth * a
                    }
                }), n.effect(e)
            }, t.effects.effect.pulsate = function(e, i) {
                var n, s = t(this),
                    o = t.effects.setMode(s, e.mode || "show"),
                    r = "show" === o,
                    a = "hide" === o,
                    l = r || "hide" === o,
                    h = 2 * (e.times || 5) + (l ? 1 : 0),
                    c = e.duration / h,
                    u = 0,
                    d = s.queue(),
                    p = d.length;
                for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; h > n; n++) s.animate({
                    opacity: u
                }, c, e.easing), u = 1 - u;
                s.animate({
                    opacity: u
                }, c, e.easing), s.queue(function() {
                    a && s.hide(), i()
                }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), s.dequeue()
            }, t.effects.effect.shake = function(e, i) {
                var n, s = t(this),
                    o = ["position", "top", "bottom", "left", "right", "height", "width"],
                    r = t.effects.setMode(s, e.mode || "effect"),
                    a = e.direction || "left",
                    l = e.distance || 20,
                    h = e.times || 3,
                    c = 2 * h + 1,
                    u = Math.round(e.duration / c),
                    d = "up" === a || "down" === a ? "top" : "left",
                    p = "up" === a || "left" === a,
                    f = {},
                    g = {},
                    m = {},
                    v = s.queue(),
                    b = v.length;
                for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, e.easing), n = 1; h > n; n++) s.animate(g, u, e.easing).animate(m, u, e.easing);
                s.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
                    "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                }), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, c + 1))), s.dequeue()
            }, t.effects.effect.slide = function(e, i) {
                var n, s = t(this),
                    o = ["position", "top", "bottom", "left", "right", "width", "height"],
                    r = t.effects.setMode(s, e.mode || "show"),
                    a = "show" === r,
                    l = e.direction || "left",
                    h = "up" === l || "down" === l ? "top" : "left",
                    c = "up" === l || "left" === l,
                    u = {};
                t.effects.save(s, o), s.show(), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
                    overflow: "hidden"
                }), a && s.css(h, c ? isNaN(n) ? "-" + n : -n : n), u[h] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + n, s.animate(u, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                    }
                })
            }, t.effects.effect.transfer = function(e, i) {
                var n = t(this),
                    s = t(e.to),
                    o = "fixed" === s.css("position"),
                    r = t("body"),
                    a = o ? r.scrollTop() : 0,
                    l = o ? r.scrollLeft() : 0,
                    h = s.offset(),
                    c = {
                        top: h.top - a,
                        left: h.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth()
                    },
                    u = n.offset(),
                    d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                        top: u.top - a,
                        left: u.left - l,
                        height: n.innerHeight(),
                        width: n.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(c, e.duration, e.easing, function() {
                        d.remove(), i()
                    })
            }, t.widget("ui.progressbar", {
                version: "1.11.2",
                options: {
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function() {
                    this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min
                    }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                },
                value: function(t) {
                    return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
                },
                _constrainedValue: function(t) {
                    return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
                },
                _setOptions: function(t) {
                    var e = t.value;
                    delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
                },
                _setOption: function(t, e) {
                    "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var e = this.options.value,
                        i = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": e
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
                }
            }), t.widget("ui.selectable", t.ui.mouse, {
                version: "1.11.2",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null
                },
                _create: function() {
                    var e, i = this;
                    this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                        e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                            var e = t(this),
                                i = e.offset();
                            t.data(this, "selectable-item", {
                                element: this,
                                $element: e,
                                left: i.left,
                                top: i.top,
                                right: i.left + e.outerWidth(),
                                bottom: i.top + e.outerHeight(),
                                startselected: !1,
                                selected: e.hasClass("ui-selected"),
                                selecting: e.hasClass("ui-selecting"),
                                unselecting: e.hasClass("ui-unselecting")
                            })
                        })
                    }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                },
                _mouseStart: function(e) {
                    var i = this,
                        n = this.options;
                    this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                        left: e.pageX,
                        top: e.pageY,
                        width: 0,
                        height: 0
                    }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var n = t.data(this, "selectable-item");
                        n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: n.element
                        }))
                    }), t(e.target).parents().addBack().each(function() {
                        var n, s = t.data(this, "selectable-item");
                        return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }), !1) : void 0
                    }))
                },
                _mouseDrag: function(e) {
                    if (this.dragged = !0, !this.options.disabled) {
                        var i, n = this,
                            s = this.options,
                            o = this.opos[0],
                            r = this.opos[1],
                            a = e.pageX,
                            l = e.pageY;
                        return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                            left: o,
                            top: r,
                            width: a - o,
                            height: l - r
                        }), this.selectees.each(function() {
                            var i = t.data(this, "selectable-item"),
                                h = !1;
                            i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > a || i.right < o || i.top > l || i.bottom < r) : "fit" === s.tolerance && (h = i.left > o && i.right < a && i.top > r && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                                selecting: i.element
                            }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                                unselecting: i.element
                            }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                                unselecting: i.element
                            })))))
                        }), !1
                    }
                },
                _mouseStop: function(e) {
                    var i = this;
                    return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                        var n = t.data(this, "selectable-item");
                        n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                            unselected: n.element
                        })
                    }), t(".ui-selecting", this.element[0]).each(function() {
                        var n = t.data(this, "selectable-item");
                        n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                            selected: n.element
                        })
                    }), this._trigger("stop", e), this.helper.remove(), !1
                }
            }), t.widget("ui.selectmenu", {
                version: "1.11.2",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    disabled: null,
                    icons: {
                        button: "ui-icon-triangle-1-s"
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    width: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null
                },
                _create: function() {
                    var t = this.element.uniqueId().attr("id");
                    this.ids = {
                        element: t,
                        button: t + "-button",
                        menu: t + "-menu"
                    }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                },
                _drawButton: function() {
                    var e = this,
                        i = this.element.attr("tabindex");
                    this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                        click: function(t) {
                            this.button.focus(), t.preventDefault()
                        }
                    }), this.element.hide(), this.button = t("<span>", {
                        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                        tabindex: i || this.options.disabled ? -1 : 0,
                        id: this.ids.button,
                        role: "combobox",
                        "aria-expanded": "false",
                        "aria-autocomplete": "list",
                        "aria-owns": this.ids.menu,
                        "aria-haspopup": "true"
                    }).insertAfter(this.element), t("<span>", {
                        "class": "ui-icon " + this.options.icons.button
                    }).prependTo(this.button), this.buttonText = t("<span>", {
                        "class": "ui-selectmenu-text"
                    }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                        e.menuItems || e._refreshMenu()
                    }), this._hoverable(this.button), this._focusable(this.button)
                },
                _drawMenu: function() {
                    var e = this;
                    this.menu = t("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu
                    }), this.menuWrap = t("<div>", {
                        "class": "ui-selectmenu-menu ui-front"
                    }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                        role: "listbox",
                        select: function(t, i) {
                            t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                        },
                        focus: function(t, i) {
                            var n = i.item.data("ui-selectmenu-item");
                            null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                                item: n
                            }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                        }
                    }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                        return !1
                    }, this.menuInstance._isDivider = function() {
                        return !1
                    }
                },
                refresh: function() {
                    this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
                },
                _refreshMenu: function() {
                    this.menu.empty();
                    var t, e = this.element.find("option");
                    e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")),
                        this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function(t) {
                    this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
                },
                _position: function() {
                    this.menuWrap.position(t.extend({ of: this.button
                    }, this.options.position))
                },
                close: function(t) {
                    this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
                },
                widget: function() {
                    return this.button
                },
                menuWidget: function() {
                    return this.menu
                },
                _renderMenu: function(e, i) {
                    var n = this,
                        s = "";
                    t.each(i, function(i, o) {
                        o.optgroup !== s && (t("<li>", {
                            "class": "ui-selectmenu-optgroup ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                            text: o.optgroup
                        }).appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                    })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-selectmenu-item", e)
                },
                _renderItem: function(e, i) {
                    var n = t("<li>");
                    return i.disabled && n.addClass("ui-state-disabled"), this._setText(n, i.label), n.appendTo(e)
                },
                _setText: function(t, e) {
                    e ? t.text(e) : t.html("&#160;")
                },
                _move: function(t, e) {
                    var i, n, s = ".ui-menu-item";
                    this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
                },
                _getSelectedItem: function() {
                    return this.menuItems.eq(this.element[0].selectedIndex)
                },
                _toggle: function(t) {
                    this[this.isOpen ? "close" : "open"](t)
                },
                _setSelection: function() {
                    var t;
                    this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
                },
                _documentClick: {
                    mousedown: function(e) {
                        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
                    }
                },
                _buttonEvents: {
                    mousedown: function() {
                        var t;
                        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                    },
                    click: function(t) {
                        this._setSelection(), this._toggle(t)
                    },
                    keydown: function(e) {
                        var i = !0;
                        switch (e.keyCode) {
                            case t.ui.keyCode.TAB:
                            case t.ui.keyCode.ESCAPE:
                                this.close(e), i = !1;
                                break;
                            case t.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(e);
                                break;
                            case t.ui.keyCode.UP:
                                e.altKey ? this._toggle(e) : this._move("prev", e);
                                break;
                            case t.ui.keyCode.DOWN:
                                e.altKey ? this._toggle(e) : this._move("next", e);
                                break;
                            case t.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this._move("prev", e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this._move("next", e);
                                break;
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.PAGE_UP:
                                this._move("first", e);
                                break;
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_DOWN:
                                this._move("last", e);
                                break;
                            default:
                                this.menu.trigger(e), i = !1
                        }
                        i && e.preventDefault()
                    }
                },
                _selectFocusedItem: function(t) {
                    var e = this.menuItems.eq(this.focusIndex);
                    e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                },
                _select: function(t, e) {
                    var i = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                        item: t
                    }), t.index !== i && this._trigger("change", e, {
                        item: t
                    }), this.close(e)
                },
                _setAria: function(t) {
                    var e = this.menuItems.eq(t.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": e,
                        "aria-activedescendant": e
                    }), this.menu.attr("aria-activedescendant", e)
                },
                _setOption: function(t, e) {
                    "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
                },
                _appendTo: function() {
                    var e = this.options.appendTo;
                    return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
                },
                _toggleAttr: function() {
                    this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                },
                _resizeButton: function() {
                    var t = this.options.width;
                    t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
                },
                _resizeMenu: function() {
                    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                },
                _getCreateOptions: function() {
                    return {
                        disabled: this.element.prop("disabled")
                    }
                },
                _parseOptions: function(e) {
                    var i = [];
                    e.each(function(e, n) {
                        var s = t(n),
                            o = s.parent("optgroup");
                        i.push({
                            element: s,
                            index: e,
                            value: s.attr("value"),
                            label: s.text(),
                            optgroup: o.attr("label") || "",
                            disabled: o.prop("disabled") || s.prop("disabled")
                        })
                    }), this.items = i
                },
                _destroy: function() {
                    this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
                }
            }), t.widget("ui.slider", t.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                },
                _createHandles: function() {
                    var e, i, n = this.options,
                        s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                        r = [];
                    for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) r.push(o);
                    this.handles = s.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                        t(this).data("ui-slider-handle-index", e)
                    })
                },
                _createRange: function() {
                    var e = this.options,
                        i = "";
                    e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                },
                _mouseCapture: function(e) {
                    var i, n, s, o, r, a, l, h, c = this,
                        u = this.options;
                    return u.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), i = {
                        x: e.pageX,
                        y: e.pageY
                    }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                        var i = Math.abs(n - c.values(e));
                        (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), r = e)
                    }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                        left: 0,
                        top: 0
                    } : {
                        left: e.pageX - l.left - o.width() / 2,
                        top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(t) {
                    var e = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1
                },
                _mouseStop: function(t) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(t) {
                    var e, i, n, s, o;
                    return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
                },
                _start: function(t, e) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
                },
                _slide: function(t, e, i) {
                    var n, s, o;
                    this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: i,
                        values: s
                    }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: i
                    }), o !== !1 && this.value(i))
                },
                _stop: function(t, e) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
                },
                _change: function(t, e) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var i = {
                            handle: this.handles[e],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                    }
                },
                value: function(t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(e, i) {
                    var n, s, o;
                    if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                    if (!arguments.length) return this._values();
                    if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                    for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                    this._refreshValue()
                },
                _setOption: function(e, i) {
                    var n, s = 0;
                    switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _value: function() {
                    var t = this.options.value;
                    return t = this._trimAlignValue(t)
                },
                _values: function(t) {
                    var e, i, n;
                    if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                    if (this.options.values && this.options.values.length) {
                        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                        return i
                    }
                    return []
                },
                _trimAlignValue: function(t) {
                    if (t <= this._valueMin()) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1,
                        i = (t - this._valueMin()) % e,
                        n = t - i;
                    return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
                },
                _calculateNewMax: function() {
                    var t = (this.options.max - this._valueMin()) % this.options.step;
                    this.max = this.options.max - t
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshValue: function() {
                    var e, i, n, s, o, r = this.options.range,
                        a = this.options,
                        l = this,
                        h = this._animateOff ? !1 : a.animate,
                        c = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(n) {
                        i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                            left: i + "%"
                        }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                            width: i - e + "%"
                        }, {
                            queue: !1,
                            duration: a.animate
                        })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                            bottom: i + "%"
                        }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                            height: i - e + "%"
                        }, {
                            queue: !1,
                            duration: a.animate
                        }))), e = i
                    }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        width: i + "%"
                    }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                        width: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                        height: i + "%"
                    }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                        height: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(e) {
                        var i, n, s, o, r = t(e.target).data("ui-slider-handle-index");
                        switch (e.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, r), i === !1)) return
                        }
                        switch (o = this.options.step, n = s = this.options.values && this.options.values.length ? this.values(r) : this.value(), e.keyCode) {
                            case t.ui.keyCode.HOME:
                                s = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                s = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (n === this._valueMax()) return;
                                s = this._trimAlignValue(n + o);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (n === this._valueMin()) return;
                                s = this._trimAlignValue(n - o)
                        }
                        this._slide(e, r, s)
                    },
                    keyup: function(e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                    }
                }
            }), t.widget("ui.sortable", t.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(t, e, i) {
                    return t >= e && e + i > t
                },
                _isFloating: function(t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                },
                _create: function() {
                    var t = this.options;
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                },
                _setOption: function(t, e) {
                    this._super(t, e), "handle" === t && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                    for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(e, i) {
                    var n = null,
                        s = !1,
                        o = this;
                    return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                        return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
                    }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                        this === e.target && (s = !0)
                    }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
                },
                _mouseStart: function(e, i, n) {
                    var s, o, r = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, t.extend(this.offset, {
                            click: {
                                left: e.pageX - this.offset.left,
                                top: e.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                        for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                    return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
                },
                _mouseDrag: function(e) {
                    var i, n, s, o, r = this.options,
                        a = !1;
                    for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                        if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                            if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                            this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                            break
                        }
                    return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(e, i) {
                    if (e) {
                        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                            var n = this,
                                s = this.placeholder.offset(),
                                o = this.options.axis,
                                r = {};
                            o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                                n._clear(e)
                            })
                        } else this._clear(e, i);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(e) {
                    var i = this._getItemsAsjQuery(e && e.connected),
                        n = [];
                    return e = e || {}, t(i).each(function() {
                        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                        i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                    }), !n.length && e.key && n.push(e.key + "="), n.join("&")
                },
                toArray: function(e) {
                    var i = this._getItemsAsjQuery(e && e.connected),
                        n = [];
                    return e = e || {}, i.each(function() {
                        n.push(t(e.item || this).attr(e.attribute || "id") || "")
                    }), n
                },
                _intersectsWith: function(t) {
                    var e = this.positionAbs.left,
                        i = e + this.helperProportions.width,
                        n = this.positionAbs.top,
                        s = n + this.helperProportions.height,
                        o = t.left,
                        r = o + t.width,
                        a = t.top,
                        l = a + t.height,
                        h = this.offset.click.top,
                        c = this.offset.click.left,
                        u = "x" === this.options.axis || n + h > a && l > n + h,
                        d = "y" === this.options.axis || e + c > o && r > e + c,
                        p = u && d;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(t) {
                    var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                        n = e && i,
                        s = this._getDragVerticalDirection(),
                        o = this._getDragHorizontalDirection();
                    return n ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
                },
                _intersectsWithSides: function(t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        n = this._getDragVerticalDirection(),
                        s = this._getDragHorizontalDirection();
                    return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
                },
                _getDragVerticalDirection: function() {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== t && (t > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== t && (t > 0 ? "right" : "left")
                },
                refresh: function(t) {
                    return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                },
                _getItemsAsjQuery: function(e) {
                    function i() {
                        a.push(this)
                    }
                    var n, s, o, r, a = [],
                        l = [],
                        h = this._connectWith();
                    if (h && e)
                        for (n = h.length - 1; n >= 0; n--)
                            for (o = t(h[n]), s = o.length - 1; s >= 0; s--) r = t.data(o[s], this.widgetFullName), r && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
                    for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                    return t(a)
                },
                _removeCurrentsFromItems: function() {
                    var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = t.grep(this.items, function(t) {
                        for (var i = 0; i < e.length; i++)
                            if (e[i] === t.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(e) {
                    this.items = [], this.containers = [this];
                    var i, n, s, o, r, a, l, h, c = this.items,
                        u = [
                            [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                                item: this.currentItem
                            }) : t(this.options.items, this.element), this]
                        ],
                        d = this._connectWith();
                    if (d && this.ready)
                        for (i = d.length - 1; i >= 0; i--)
                            for (s = t(d[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                                item: this.currentItem
                            }) : t(o.options.items, o.element), o]), this.containers.push(o));
                    for (i = u.length - 1; i >= 0; i--)
                        for (r = u[i][1], a = u[i][0], n = 0, h = a.length; h > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), c.push({
                            item: l,
                            instance: r,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                },
                refreshPositions: function(e) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var i, n, s, o;
                    for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(e) {
                    e = e || this;
                    var i, n = e.options;
                    n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                        element: function() {
                            var n = e.currentItem[0].nodeName.toLowerCase(),
                                s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return "tr" === n ? e.currentItem.children().each(function() {
                                t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                            }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                        },
                        update: function(t, s) {
                            (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
                },
                _contactContainers: function(e) {
                    var i, n, s, o, r, a, l, h, c, u, d = null,
                        p = null;
                    for (i = this.containers.length - 1; i >= 0; i--)
                        if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                            if (this._intersectsWith(this.containers[i].containerCache)) {
                                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                                d = this.containers[i], p = i
                            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                    if (d)
                        if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                        else {
                            for (s = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), r = c ? "left" : "top", a = c ? "width" : "height", u = c ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = !1, e[u] - l > this.items[n][a] / 2 && (h = !0), Math.abs(e[u] - l) < s && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                            if (!o && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                            o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                        }
                },
                _createHelper: function(e) {
                    var i = this.options,
                        n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                    return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
                },
                _adjustOffsetFromHelper: function(e) {
                    "string" == typeof e && (e = e.split(" ")),
                        t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var e = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                        top: 0,
                        left: 0
                    }), {
                        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var t = this.currentItem.position();
                        return {
                            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var e, i, n, s = this.options;
                    "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(e, i) {
                    i || (i = this.position);
                    var n = "absolute" === e ? 1 : -1,
                        s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        o = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                    }
                },
                _generatePosition: function(e) {
                    var i, n, s = this.options,
                        o = e.pageX,
                        r = e.pageY,
                        a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        l = /(html|body)/i.test(a[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                    }
                },
                _rearrange: function(t, e, i, n) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var s = this.counter;
                    this._delay(function() {
                        s === this.counter && this.refreshPositions(!n)
                    })
                },
                _clear: function(t, e) {
                    function i(t, e, i) {
                        return function(n) {
                            i._trigger(t, n, e._uiHash(e))
                        }
                    }
                    this.reverting = !1;
                    var n, s = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !e && s.push(function(t) {
                            this._trigger("receive", t, this._uiHash(this.fromOutside))
                        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                            this._trigger("update", t, this._uiHash())
                        }), this !== this.currentContainer && (e || (s.push(function(t) {
                            this._trigger("remove", t, this._uiHash())
                        }), s.push(function(t) {
                            return function(e) {
                                t._trigger("receive", e, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)), s.push(function(t) {
                            return function(e) {
                                t._trigger("update", e, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                        for (n = 0; n < s.length; n++) s[n].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() {
                    t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(e) {
                    var i = e || this;
                    return {
                        helper: i.helper,
                        placeholder: i.placeholder || t([]),
                        position: i.position,
                        originalPosition: i.originalPosition,
                        offset: i.positionAbs,
                        item: i.currentItem,
                        sender: e ? e.element : null
                    }
                }
            }), t.widget("ui.spinner", {
                version: "1.11.2",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    culture: null,
                    icons: {
                        down: "ui-icon-triangle-1-s",
                        up: "ui-icon-triangle-1-n"
                    },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _getCreateOptions: function() {
                    var e = {},
                        i = this.element;
                    return t.each(["min", "max", "step"], function(t, n) {
                        var s = i.attr(n);
                        void 0 !== s && s.length && (e[n] = s)
                    }), e
                },
                _events: {
                    keydown: function(t) {
                        this._start(t) && this._keydown(t) && t.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function() {
                        this.previous = this.element.val()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                    },
                    mousewheel: function(t, e) {
                        if (e) {
                            if (!this.spinning && !this._start(t)) return !1;
                            this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                this.spinning && this._stop(t)
                            }, 100), t.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(e) {
                        function i() {
                            var t = this.element[0] === this.document[0].activeElement;
                            t || (this.element.focus(), this.previous = n, this._delay(function() {
                                this.previous = n
                            }))
                        }
                        var n;
                        n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, i.call(this)
                        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(e) {
                        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
                },
                _keydown: function(e) {
                    var i = this.options,
                        n = t.ui.keyCode;
                    switch (e.keyCode) {
                        case n.UP:
                            return this._repeat(null, 1, e), !0;
                        case n.DOWN:
                            return this._repeat(null, -1, e), !0;
                        case n.PAGE_UP:
                            return this._repeat(null, i.page, e), !0;
                        case n.PAGE_DOWN:
                            return this._repeat(null, -i.page, e), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                },
                _start: function(t) {
                    return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
                },
                _repeat: function(t, e, i) {
                    t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                        this._repeat(40, e, i)
                    }, t), this._spin(e * this.options.step, i)
                },
                _spin: function(t, e) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                        value: i
                    }) === !1 || (this._value(i), this.counter++)
                },
                _increment: function(e) {
                    var i = this.options.incremental;
                    return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
                },
                _precision: function() {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                },
                _precisionOf: function(t) {
                    var e = t.toString(),
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _adjustValue: function(t) {
                    var e, i, n = this.options;
                    return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
                },
                _stop: function(t) {
                    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
                },
                _setOption: function(t, e) {
                    if ("culture" === t || "numberFormat" === t) {
                        var i = this._parse(this.element.val());
                        return this.options[t] = e, void this.element.val(this._format(i))
                    }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
                },
                _setOptions: l(function(t) {
                    this._super(t)
                }),
                _parse: function(t) {
                    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
                },
                _format: function(t) {
                    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                },
                _refresh: function() {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                isValid: function() {
                    var t = this.value();
                    return null === t ? !1 : t === this._adjustValue(t)
                },
                _value: function(t, e) {
                    var i;
                    "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
                },
                _destroy: function() {
                    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                },
                stepUp: l(function(t) {
                    this._stepUp(t)
                }),
                _stepUp: function(t) {
                    this._start() && (this._spin((t || 1) * this.options.step), this._stop())
                },
                stepDown: l(function(t) {
                    this._stepDown(t)
                }),
                _stepDown: function(t) {
                    this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
                },
                pageUp: l(function(t) {
                    this._stepUp((t || 1) * this.options.page)
                }),
                pageDown: l(function(t) {
                    this._stepDown((t || 1) * this.options.page)
                }),
                value: function(t) {
                    return arguments.length ? void l(this._value).call(this, t) : this._parse(this.element.val())
                },
                widget: function() {
                    return this.uiSpinner
                }
            }), t.widget("ui.tabs", {
                version: "1.11.2",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _isLocal: function() {
                    var t = /#.*$/;
                    return function(e) {
                        var i, n;
                        e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                        try {
                            i = decodeURIComponent(i)
                        } catch (s) {}
                        try {
                            n = decodeURIComponent(n)
                        } catch (s) {}
                        return e.hash.length > 1 && i === n
                    }
                }(),
                _create: function() {
                    var e = this,
                        i = this.options;
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                        return e.tabs.index(t)
                    }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
                },
                _initialActive: function() {
                    var e = this.options.active,
                        i = this.options.collapsible,
                        n = location.hash.substring(1);
                    return null === e && (n && this.tabs.each(function(i, s) {
                        return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                    }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : t()
                    }
                },
                _tabKeydown: function(e) {
                    var i = t(this.document[0].activeElement).closest("li"),
                        n = this.tabs.index(i),
                        s = !0;
                    if (!this._handlePageNav(e)) {
                        switch (e.keyCode) {
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                                n++;
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.LEFT:
                                s = !1, n--;
                                break;
                            case t.ui.keyCode.END:
                                n = this.anchors.length - 1;
                                break;
                            case t.ui.keyCode.HOME:
                                n = 0;
                                break;
                            case t.ui.keyCode.SPACE:
                                return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                            case t.ui.keyCode.ENTER:
                                return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                            default:
                                return
                        }
                        e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                            this.option("active", n)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(e) {
                    this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(e) {
                    return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(e, i) {
                    function n() {
                        return e > s && (e = 0), 0 > e && (e = s), e
                    }
                    for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                    return e
                },
                _focusNextTab: function(t, e) {
                    return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
                },
                _sanitizeSelector: function(t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var e = this.options,
                        i = this.tablist.children(":has(a[href])");
                    e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                        return i.index(t)
                    }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var e = this,
                        i = this.tabs,
                        n = this.anchors,
                        s = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                        t(this).is(".ui-state-disabled") && e.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        t(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }), this.anchors = this.tabs.map(function() {
                        return t("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = t(), this.anchors.each(function(i, n) {
                        var s, o, r, a = t(n).uniqueId().attr("id"),
                            l = t(n).closest("li"),
                            h = l.attr("aria-controls");
                        e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, o = e.element.find(s), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                            "aria-controls": r,
                            "aria-labelledby": a
                        }), o.attr("aria-labelledby", a)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(e) {
                    return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(e) {
                    t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                    for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = e
                },
                _setupEvents: function(e) {
                    var i = {};
                    e && t.each(e.split(" "), function(t, e) {
                        i[e] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function(t) {
                            t.preventDefault()
                        }
                    }), this._on(this.anchors, i), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(e) {
                    var i, n = this.element.parent();
                    "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var e = t(this),
                            n = e.css("position");
                        "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        i -= t(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                        i = Math.max(i, t(this).height("").height())
                    }).height(i))
                },
                _eventHandler: function(e) {
                    var i = this.options,
                        n = this.active,
                        s = t(e.currentTarget),
                        o = s.closest("li"),
                        r = o[0] === n[0],
                        a = r && i.collapsible,
                        l = a ? t() : this._getPanelForTab(o),
                        h = n.length ? this._getPanelForTab(n) : t(),
                        c = {
                            oldTab: n,
                            oldPanel: h,
                            newTab: a ? t() : o,
                            newPanel: l
                        };
                    e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
                },
                _toggle: function(e, i) {
                    function n() {
                        o.running = !1, o._trigger("activate", e, i)
                    }

                    function s() {
                        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
                    }
                    var o = this,
                        r = i.newPanel,
                        a = i.oldPanel;
                    this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                    }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                        return 0 === t(this).attr("tabIndex")
                    }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(e) {
                    var i, n = this._findActive(e);
                    n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: t.noop
                    }))
                },
                _findActive: function(e) {
                    return e === !1 ? t() : this.tabs.eq(e)
                },
                _getIndex: function(t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    }), this.tabs.each(function() {
                        var e = t(this),
                            i = e.data("ui-tabs-aria-controls");
                        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(e) {
                    var i = this.options.disabled;
                    i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                        return t !== e ? t : null
                    }) : t.map(this.tabs, function(t, i) {
                        return i !== e ? i : null
                    })), this._setupDisabled(i))
                },
                disable: function(e) {
                    var i = this.options.disabled;
                    if (i !== !0) {
                        if (void 0 === e) i = !0;
                        else {
                            if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                            i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                        }
                        this._setupDisabled(i)
                    }
                },
                load: function(e, i) {
                    e = this._getIndex(e);
                    var n = this,
                        s = this.tabs.eq(e),
                        o = s.find(".ui-tabs-anchor"),
                        r = this._getPanelForTab(s),
                        a = {
                            tab: s,
                            panel: r
                        };
                    this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                        setTimeout(function() {
                            r.html(t), n._trigger("load", i, a)
                        }, 1)
                    }).complete(function(t, e) {
                        setTimeout(function() {
                            "abort" === e && n.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                        }, 1)
                    })))
                },
                _ajaxSettings: function(e, i, n) {
                    var s = this;
                    return {
                        url: e.attr("href"),
                        beforeSend: function(e, o) {
                            return s._trigger("beforeLoad", i, t.extend({
                                jqXHR: e,
                                ajaxSettings: o
                            }, n))
                        }
                    }
                },
                _getPanelForTab: function(e) {
                    var i = t(e).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + i))
                }
            }), t.widget("ui.tooltip", {
                version: "1.11.2",
                options: {
                    content: function() {
                        var e = t(this).attr("title") || "";
                        return t("<a>").text(e).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    tooltipClass: null,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function(e, i) {
                    var n = (e.attr("aria-describedby") || "").split(/\s+/);
                    n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
                },
                _removeDescribedBy: function(e) {
                    var i = e.data("ui-tooltip-id"),
                        n = (e.attr("aria-describedby") || "").split(/\s+/),
                        s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                },
                _setOption: function(e, i) {
                    var n = this;
                    return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                        n._updateContent(e.element)
                    })))
                },
                _disable: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var s = t.Event("blur");
                        s.target = s.currentTarget = n.element[0], e.close(s, !0)
                    }), this.element.find(this.options.items).addBack().each(function() {
                        var e = t(this);
                        e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var e = t(this);
                        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                    })
                },
                open: function(e) {
                    var i = this,
                        n = t(e ? e.target : this.element).closest(this.options.items);
                    n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                        var e, n = t(this);
                        n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                            element: this,
                            title: n.attr("title")
                        }, n.attr("title", ""))
                    }), this._updateContent(n, e))
                },
                _updateContent: function(t, e) {
                    var i, n = this.options.content,
                        s = this,
                        o = e ? e.type : null;
                    return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                        t.data("ui-tooltip-open") && s._delay(function() {
                            e && (e.type = o), this._open(e, t, i)
                        })
                    }), void(i && this._open(e, t, i)))
                },
                _open: function(e, i, n) {
                    function s(t) {
                        c.of = t, r.is(":hidden") || r.position(c)
                    }
                    var o, r, a, l, h, c = t.extend({}, this.options.position);
                    if (n) {
                        if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), n.clone ? (h = n.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = n, t("<div>").html(h).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                            mousemove: s
                        }), s(e)) : r.position(t.extend({ of: i
                        }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                            r.is(":visible") && (s(c.of), clearInterval(l))
                        }, t.fx.interval)), this._trigger("open", e, {
                            tooltip: r
                        }), a = {
                            keyup: function(e) {
                                if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                    var n = t.Event(e);
                                    n.currentTarget = i[0], this.close(n, !0)
                                }
                            }
                        }, i[0] !== this.element[0] && (a.remove = function() {
                            this._removeTooltip(r)
                        }), e && "mouseover" !== e.type || (a.mouseleave = "close"), e && "focusin" !== e.type || (a.focusout = "close"), this._on(!0, i, a)
                    }
                },
                close: function(e) {
                    var i, n = this,
                        s = t(e ? e.currentTarget : this.element),
                        o = this._find(s);
                    o && (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                        n._removeTooltip(t(this))
                    }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                        t(i.element).attr("title", i.title), delete n.parents[e]
                    }), o.closing = !0, this._trigger("close", e, {
                        tooltip: i
                    }), o.hiding || (o.closing = !1)))
                },
                _tooltip: function(e) {
                    var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        n = i.uniqueId().attr("id");
                    return t("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[n] = {
                        element: e,
                        tooltip: i
                    }
                },
                _find: function(t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function(t) {
                    t.remove(), delete this.tooltips[t.attr("id")]
                },
                _destroy: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var s = t.Event("blur"),
                            o = n.element;
                        s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            })
        }),
        function(t) {
            function e(e) {
                var i = t.event;
                return i.target = i.target || i.srcElement || e, i
            }
            var i = document.documentElement,
                n = function() {};
            i.addEventListener ? n = function(t, e, i) {
                t.addEventListener(e, i, !1)
            } : i.attachEvent && (n = function(t, i, n) {
                t[i + n] = n.handleEvent ? function() {
                    var i = e(t);
                    n.handleEvent.call(n, i)
                } : function() {
                    var i = e(t);
                    n.call(t, i)
                }, t.attachEvent("on" + i, t[i + n])
            });
            var s = function() {};
            i.removeEventListener ? s = function(t, e, i) {
                t.removeEventListener(e, i, !1)
            } : i.detachEvent && (s = function(t, e, i) {
                t.detachEvent("on" + e, t[e + i]);
                try {
                    delete t[e + i]
                } catch (n) {
                    t[e + i] = void 0
                }
            });
            var o = {
                bind: n,
                unbind: s
            };
            "function" == typeof define && define.amd ? define("eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o;
        }(this),
        function() {
            "use strict";

            function t() {}

            function e(t, e) {
                for (var i = t.length; i--;)
                    if (t[i].listener === e) return i;
                return -1
            }

            function i(t) {
                return function() {
                    return this[t].apply(this, arguments)
                }
            }
            var n = t.prototype,
                s = this,
                o = s.EventEmitter;
            n.getListeners = function(t) {
                var e, i, n = this._getEvents();
                if (t instanceof RegExp) {
                    e = {};
                    for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
                } else e = n[t] || (n[t] = []);
                return e
            }, n.flattenListeners = function(t) {
                var e, i = [];
                for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
                return i
            }, n.getListenersAsObject = function(t) {
                var e, i = this.getListeners(t);
                return i instanceof Array && (e = {}, e[t] = i), e || i
            }, n.addListener = function(t, i) {
                var n, s = this.getListenersAsObject(t),
                    o = "object" == typeof i;
                for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(o ? i : {
                    listener: i,
                    once: !1
                });
                return this
            }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
                return this.addListener(t, {
                    listener: e,
                    once: !0
                })
            }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
                return this.getListeners(t), this
            }, n.defineEvents = function(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this
            }, n.removeListener = function(t, i) {
                var n, s, o = this.getListenersAsObject(t);
                for (s in o) o.hasOwnProperty(s) && (n = e(o[s], i), -1 !== n && o[s].splice(n, 1));
                return this
            }, n.off = i("removeListener"), n.addListeners = function(t, e) {
                return this.manipulateListeners(!1, t, e)
            }, n.removeListeners = function(t, e) {
                return this.manipulateListeners(!0, t, e)
            }, n.manipulateListeners = function(t, e, i) {
                var n, s, o = t ? this.removeListener : this.addListener,
                    r = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp)
                    for (n = i.length; n--;) o.call(this, e, i[n]);
                else
                    for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? o.call(this, n, s) : r.call(this, n, s));
                return this
            }, n.removeEvent = function(t) {
                var e, i = typeof t,
                    n = this._getEvents();
                if ("string" === i) delete n[t];
                else if (t instanceof RegExp)
                    for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
                else delete this._events;
                return this
            }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
                var i, n, s, o, r = this.getListenersAsObject(t);
                for (s in r)
                    if (r.hasOwnProperty(s))
                        for (n = r[s].length; n--;) i = r[s][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
                return this
            }, n.trigger = i("emitEvent"), n.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e)
            }, n.setOnceReturnValue = function(t) {
                return this._onceReturnValue = t, this
            }, n._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }, n._getEvents = function() {
                return this._events || (this._events = {})
            }, t.noConflict = function() {
                return s.EventEmitter = o, t
            }, "function" == typeof define && define.amd ? define("eventEmitter", [], function() {
                return t
            }) : "object" == typeof module && module.exports ? module.exports = t : s.EventEmitter = t
        }.call(this),
        function() {
            function m() {
                return function() {}
            }

            function p(t) {
                return function() {
                    return this[t]
                }
            }

            function q(t) {
                return function() {
                    return t
                }
            }

            function t(e, i, n) {
                if ("string" == typeof e) {
                    if (0 === e.indexOf("#") && (e = e.slice(1)), t.Ba[e]) return t.Ba[e];
                    e = t.v(e)
                }
                if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                return e.player || new t.Player(e, i, n)
            }

            function u(e, i, n, s) {
                t.hc.forEach(n, function(t) {
                    e(i, t, s)
                })
            }

            function D(e, i) {
                var n, s;
                n = Array.prototype.slice.call(i), s = m(), s = window.console || {
                    log: s,
                    warn: s,
                    error: s
                }, e ? n.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(n), n.unshift("VIDEOJS:"), s[e].apply ? s[e].apply(s, n) : s[e](n.join(" "))
            }

            function E(t) {
                t.p("vjs-lock-showing")
            }

            function F(e, i, n, s) {
                return n !== b ? ((n === j || t.Bd(n)) && (n = 0), e.b.style[i] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n : "auto" === n ? "" : n + "px", s || e.k("resize"), e) : e.b ? (n = e.b.style[i], s = n.indexOf("px"), -1 !== s ? parseInt(n.slice(0, s), 10) : parseInt(e.b["offset" + t.ba(i)], 10)) : 0
            }

            function G(t) {
                var e, i, n, s, o, r, a, h;
                e = 0, i = j, t.d("touchstart", function(t) {
                    1 === t.touches.length && (i = t.touches[0], e = (new Date).getTime(), s = f)
                }), t.d("touchmove", function(t) {
                    1 < t.touches.length ? s = l : i && (r = t.touches[0].pageX - i.pageX, a = t.touches[0].pageY - i.pageY, h = Math.sqrt(r * r + a * a), h > 22 && (s = l))
                }), o = function() {
                    s = l
                }, t.d("touchleave", o), t.d("touchcancel", o), t.d("touchend", function(t) {
                    i = j, s === f && (n = (new Date).getTime() - e, 250 > n && (t.preventDefault(), this.k("tap")))
                })
            }

            function H(e, i) {
                var n, s, o, r;
                return n = e.b, s = t.vd(n), r = o = n.offsetWidth, n = e.handle, e.options().vertical ? (r = s.top, s = i.changedTouches ? i.changedTouches[0].pageY : i.pageY, n && (n = n.v().offsetHeight, r += n / 2, o -= n), Math.max(0, Math.min(1, (r - s + o) / o))) : (o = s.left, s = i.changedTouches ? i.changedTouches[0].pageX : i.pageX, n && (n = n.v().offsetWidth, o += n / 2, r -= n), Math.max(0, Math.min(1, (s - o) / r)))
            }

            function ca(e, i) {
                e.S(i), i.d("click", t.bind(e, function() {
                    E(this)
                }))
            }

            function J(t) {
                t.sa = f, t.Aa.m("vjs-lock-showing"), t.b.setAttribute("aria-pressed", f), t.P && 0 < t.P.length && t.P[0].v().focus()
            }

            function I(t) {
                t.sa = l, E(t.Aa), t.b.setAttribute("aria-pressed", l)
            }

            function da(e) {
                var i, n, s = {
                    sources: [],
                    tracks: []
                };
                if (i = t.za(e), n = i["data-setup"], n !== j && t.g.z(i, t.JSON.parse(n || "{}")), t.g.z(s, i), e.hasChildNodes()) {
                    var o, r;
                    for (e = e.childNodes, o = 0, r = e.length; r > o; o++) i = e[o], n = i.nodeName.toLowerCase(), "source" === n ? s.sources.push(t.za(i)) : "track" === n && s.tracks.push(t.za(i))
                }
                return s
            }

            function Q(e, i, n) {
                e.n && (e.la = l, e.n.dispose(), e.n = l), "Html5" !== i && e.L && (t.h.Bb(e.L), e.L = j), e.eb = i, e.la = l;
                var s = t.g.z({
                    source: n,
                    parentEl: e.b
                }, e.l[i.toLowerCase()]);
                n && (e.mc = n.type, n.src == e.G.src && 0 < e.G.currentTime && (s.startTime = e.G.currentTime), e.G.src = n.src), e.n = new window.videojs[i](e, s), e.n.J(function() {
                    this.c.Fa()
                })
            }

            function R(t, e) {
                e !== b && t.uc !== e && ((t.uc = e) ? (t.m("vjs-has-started"), t.k("firstplay")) : t.p("vjs-has-started"))
            }

            function T(e, i, n) {
                if (e.n && !e.n.la) e.n.J(function() {
                    this[i](n)
                });
                else try {
                    e.n[i](n)
                } catch (s) {
                    throw t.log(s), s
                }
            }

            function S(e, i) {
                if (e.n && e.n.la) try {
                    return e.n[i]()
                } catch (n) {
                    throw e.n[i] === b ? t.log("Video.js: " + i + " method not defined for " + e.eb + " playback technology.", n) : "TypeError" == n.name ? (t.log("Video.js: " + i + " unavailable on " + e.eb + " playback technology element.", n), e.n.la = l) : t.log(n), n
                }
            }

            function U(e, i) {
                var n, s = e.selectSource(i);
                s ? s.n === e.eb ? e.src(s.source) : Q(e, s.n, s.source) : (n = setTimeout(t.bind(e, function() {
                    this.error({
                        code: 4,
                        message: this.s(this.options().notSupportedMessage)
                    })
                }), 0), e.Fa(), e.d("dispose", function() {
                    clearTimeout(n)
                }))
            }

            function P(t, e) {
                return e !== b ? (t.wc = !!e, t) : t.wc
            }

            function ea(t) {
                return t.j().n && t.j().n.featuresPlaybackRate && t.j().options().playbackRates && 0 < t.j().options().playbackRates.length
            }

            function ga(t) {
                t.Kb = l, t.cb(), t.o("play", t.Qc), t.o("pause", t.cb)
            }

            function ja() {
                var t = W[X],
                    e = t.charAt(0).toUpperCase() + t.slice(1);
                ka["set" + e] = function(e) {
                    return this.b.vjs_setProperty(t, e)
                }
            }

            function la(t) {
                ka[t] = function() {
                    return this.b.vjs_getProperty(t)
                }
            }

            function na(e, i, n, s, o) {
                var r = e.Ea = e.Ea || [];
                o = o || {}, o.kind = i, o.label = n, o.language = s, i = t.ba(i || "subtitles");
                var a = new window.videojs[i + "Track"](e, o);
                r.push(a), a.Ab() && e.J(function() {
                    setTimeout(function() {
                        Y(a.j(), a.id())
                    }, 0)
                })
            }

            function Y(t, e, i) {
                for (var n, s, o = t.Ea, r = 0, a = o.length; a > r; r++) n = o[r], n.id() === e ? (n.show(), s = n) : i && n.K() == i && 0 < n.mode() && n.disable();
                (e = s ? s.K() : i ? i : l) && t.k(e + "trackchange")
            }

            function oa(e) {
                0 === e.na && e.load(), 0 === e.ma && (e.c.d("timeupdate", t.bind(e, e.update, e.U)), e.c.d("ended", t.bind(e, e.reset, e.U)), ("captions" === e.H || "subtitles" === e.H) && e.c.ka("textTrackDisplay").S(e))
            }

            function pa(t) {
                var e = t.split(":");
                t = 0;
                var i, n, s;
                return 3 == e.length ? (i = e[0], n = e[1], e = e[2]) : (i = 0, n = e[0], e = e[1]), e = e.split(/\s+/), e = e.splice(0, 1)[0], e = e.split(/\.|,/), s = parseFloat(e[1]), e = e[0], t += 3600 * parseFloat(i), t += 60 * parseFloat(n), t += parseFloat(e), s && (t += s / 1e3), t
            }

            function $(t, e) {
                var i = t.split("."),
                    n = qa;
                !(i[0] in n) && n.execScript && n.execScript("var " + i[0]);
                for (var s; i.length && (s = i.shift());) i.length || e === b ? n = n[s] ? n[s] : n[s] = {} : n[s] = e
            }
            var b = void 0,
                f = !0,
                j = null,
                l = !1,
                s;
            document.createElement("video"), document.createElement("audio"), document.createElement("track");
            var videojs = window.videojs = t;
            t.Ub = "4.9", t.Uc = "https:" == document.location.protocol ? "https://" : "http://", t.options = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                width: 300,
                height: 150,
                defaultVolume: 0,
                playbackRates: [],
                inactivityTimeout: 2e3,
                children: {
                    mediaLoader: {},
                    posterImage: {},
                    textTrackDisplay: {},
                    loadingSpinner: {},
                    bigPlayButton: {},
                    controlBar: {},
                    errorDisplay: {}
                },
                language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.we || navigator.language || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this video."
            }, "GENERATED_CDN_VSN" !== t.Ub && (videojs.options.flash.swf = t.Uc + "vjs.zencdn.net/" + t.Ub + "/video-js.swf"), t.fd = function(e, i) {
                return t.options.languages[e] = t.options.languages[e] !== b ? t.ga.Va(t.options.languages[e], i) : i, t.options.languages
            }, t.Ba = {}, "function" == typeof define && define.amd ? define("videojs", [], function() {
                return videojs
            }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.qa = t.CoreObject = m(), t.qa.extend = function(e) {
                var i, n;
                e = e || {}, i = e.init || e.i || this.prototype.init || this.prototype.i || m(), n = function() {
                    i.apply(this, arguments)
                }, n.prototype = t.g.create(this.prototype), n.prototype.constructor = n, n.extend = t.qa.extend, n.create = t.qa.create;
                for (var s in e) e.hasOwnProperty(s) && (n.prototype[s] = e[s]);
                return n
            }, t.qa.create = function() {
                var e = t.g.create(this.prototype);
                return this.apply(e, arguments), e
            }, t.d = function(e, i, n) {
                if (t.g.isArray(i)) return u(t.d, e, i, n);
                var s = t.getData(e);
                s.C || (s.C = {}), s.C[i] || (s.C[i] = []), n.w || (n.w = t.w++), s.C[i].push(n), s.X || (s.disabled = l, s.X = function(i) {
                    if (!s.disabled) {
                        i = t.qc(i);
                        var n = s.C[i.type];
                        if (n)
                            for (var n = n.slice(0), o = 0, r = n.length; r > o && !i.yc(); o++) n[o].call(e, i)
                    }
                }), 1 == s.C[i].length && (e.addEventListener ? e.addEventListener(i, s.X, l) : e.attachEvent && e.attachEvent("on" + i, s.X))
            }, t.o = function(e, i, n) {
                if (t.tc(e)) {
                    var s = t.getData(e);
                    if (s.C) {
                        if (t.g.isArray(i)) return u(t.o, e, i, n);
                        if (i) {
                            var o = s.C[i];
                            if (o) {
                                if (n) {
                                    if (n.w)
                                        for (s = 0; s < o.length; s++) o[s].w === n.w && o.splice(s--, 1)
                                } else s.C[i] = [];
                                t.jc(e, i)
                            }
                        } else
                            for (o in s.C) i = o, s.C[i] = [], t.jc(e, i)
                    }
                }
            }, t.jc = function(e, i) {
                var n = t.getData(e);
                0 === n.C[i].length && (delete n.C[i], e.removeEventListener ? e.removeEventListener(i, n.X, l) : e.detachEvent && e.detachEvent("on" + i, n.X)), t.Hb(n.C) && (delete n.C, delete n.X, delete n.disabled), t.Hb(n) && t.Hc(e)
            }, t.qc = function(t) {
                function e() {
                    return f
                }

                function i() {
                    return l
                }
                if (!t || !t.Ib) {
                    var n = t || window.event;
                    t = {};
                    for (var s in n) "layerX" !== s && "layerY" !== s && "keyboardEvent.keyLocation" !== s && ("returnValue" == s && n.preventDefault || (t[s] = n[s]));
                    if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
                            n.preventDefault && n.preventDefault(), t.returnValue = l, t.zd = e, t.defaultPrevented = f
                        }, t.zd = i, t.defaultPrevented = l, t.stopPropagation = function() {
                            n.stopPropagation && n.stopPropagation(), t.cancelBubble = f, t.Ib = e
                        }, t.Ib = i, t.stopImmediatePropagation = function() {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), t.yc = e, t.stopPropagation()
                        }, t.yc = i, t.clientX != j) {
                        s = document.documentElement;
                        var o = document.body;
                        t.pageX = t.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), t.pageY = t.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }
                return t
            }, t.k = function(e, i) {
                var n = t.tc(e) ? t.getData(e) : {},
                    s = e.parentNode || e.ownerDocument;
                return "string" == typeof i && (i = {
                    type: i,
                    target: e
                }), i = t.qc(i), n.X && n.X.call(e, i), s && !i.Ib() && i.bubbles !== l ? t.k(s, i) : s || i.defaultPrevented || (n = t.getData(i.target), !i.target[i.type]) || (n.disabled = f, "function" == typeof i.target[i.type] && i.target[i.type](), n.disabled = l), !i.defaultPrevented
            }, t.Q = function(e, i, n) {
                function s() {
                    t.o(e, i, s), n.apply(this, arguments)
                }
                return t.g.isArray(i) ? u(t.Q, e, i, n) : (s.w = n.w = n.w || t.w++, void t.d(e, i, s))
            };
            var v = Object.prototype.hasOwnProperty;
            t.e = function(e, i) {
                var n;
                return i = i || {}, n = document.createElement(e || "div"), t.g.Y(i, function(t, e) {
                    -1 !== t.indexOf("aria-") || "role" == t ? n.setAttribute(t, e) : n[t] = e
                }), n
            }, t.ba = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, t.g = {}, t.g.create = Object.create || function(t) {
                function e() {}
                return e.prototype = t, new e
            }, t.g.Y = function(t, e, i) {
                for (var n in t) v.call(t, n) && e.call(i || this, n, t[n])
            }, t.g.z = function(t, e) {
                if (!e) return t;
                for (var i in e) v.call(e, i) && (t[i] = e[i]);
                return t
            }, t.g.od = function(e, i) {
                var n, s, o;
                e = t.g.copy(e);
                for (n in i) v.call(i, n) && (s = e[n], o = i[n], e[n] = t.g.Ta(s) && t.g.Ta(o) ? t.g.od(s, o) : i[n]);
                return e
            }, t.g.copy = function(e) {
                return t.g.z({}, e)
            }, t.g.Ta = function(t) {
                return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
            }, t.g.isArray = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, t.Bd = function(t) {
                return t !== t
            }, t.bind = function(e, i, n) {
                function s() {
                    return i.apply(e, arguments)
                }
                return i.w || (i.w = t.w++), s.w = n ? n + "_" + i.w : i.w, s
            }, t.ua = {}, t.w = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function(e) {
                var i = e[t.expando];
                return i || (i = e[t.expando] = t.w++, t.ua[i] = {}), t.ua[i]
            }, t.tc = function(e) {
                return e = e[t.expando], !(!e || t.Hb(t.ua[e]))
            }, t.Hc = function(e) {
                var i = e[t.expando];
                if (i) {
                    delete t.ua[i];
                    try {
                        delete e[t.expando]
                    } catch (n) {
                        e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = j
                    }
                }
            }, t.Hb = function(t) {
                for (var e in t)
                    if (t[e] !== j) return l;
                return f
            }, t.Sa = function(t, e) {
                return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
            }, t.m = function(e, i) {
                t.Sa(e, i) || (e.className = "" === e.className ? i : e.className + " " + i)
            }, t.p = function(e, i) {
                var n, s;
                if (t.Sa(e, i)) {
                    for (n = e.className.split(" "), s = n.length - 1; s >= 0; s--) n[s] === i && n.splice(s, 1);
                    e.className = n.join(" ")
                }
            }, t.A = t.e("video"), t.N = navigator.userAgent, t.$c = /iPhone/i.test(t.N), t.Zc = /iPad/i.test(t.N), t.ad = /iPod/i.test(t.N), t.Yc = t.$c || t.Zc || t.ad;
            var aa = t,
                x, y = t.N.match(/OS (\d+)_/i);
            x = y && y[1] ? y[1] : b, aa.le = x, t.Wc = /Android/i.test(t.N);
            var ba = t,
                z, A = t.N.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
                B, C;
            A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : j) : z = j, ba.Tb = z, t.bd = t.Wc && /webkit/i.test(t.N) && 2.3 > t.Tb, t.Xc = /Firefox/i.test(t.N), t.me = /Chrome/i.test(t.N), t.dc = !!("ontouchstart" in window || window.Vc && document instanceof window.Vc), t.Jc = function(e, i) {
                t.g.Y(i, function(t, i) {
                    i === j || "undefined" == typeof i || i === l ? e.removeAttribute(t) : e.setAttribute(t, i === f ? "" : i)
                })
            }, t.za = function(t) {
                var e, i, n, s;
                if (e = {}, t && t.attributes && 0 < t.attributes.length) {
                    i = t.attributes;
                    for (var o = i.length - 1; o >= 0; o--) n = i[o].name, s = i[o].value, ("boolean" == typeof t[n] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + n + ",")) && (s = s !== j ? f : l), e[n] = s
                }
                return e
            }, t.se = function(t, e) {
                var i = "";
                return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (i = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), i
            }, t.Gb = function(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }, t.Oa = {}, t.v = function(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
            }, t.ya = function(t, e) {
                e = e || t;
                var i = Math.floor(t % 60),
                    n = Math.floor(t / 60 % 60),
                    s = Math.floor(t / 3600),
                    o = Math.floor(e / 60 % 60),
                    r = Math.floor(e / 3600);
                return (isNaN(t) || 1 / 0 === t) && (s = n = i = "-"), s = s > 0 || r > 0 ? s + ":" : "", s + (((s || o >= 10) && 10 > n ? "0" + n : n) + ":") + (10 > i ? "0" + i : i)
            }, t.hd = function() {
                document.body.focus(), document.onselectstart = q(l)
            }, t.he = function() {
                document.onselectstart = q(f)
            }, t.trim = function(t) {
                return (t + "").replace(/^\s+|\s+$/g, "")
            }, t.round = function(t, e) {
                return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
            }, t.zb = function(t, e) {
                return {
                    length: 1,
                    start: function() {
                        return t
                    },
                    end: function() {
                        return e
                    }
                }
            }, t.get = function(e, i, n, s) {
                var o, r, a, l;
                n = n || m(), "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (t) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP")
                    } catch (i) {}
                    throw Error("This browser does not support XMLHttpRequest.")
                }), r = new XMLHttpRequest, a = t.Ud(e), l = window.location, a.protocol + a.host === l.protocol + l.host || !window.XDomainRequest || "withCredentials" in r ? (o = "file:" == a.protocol || "file:" == l.protocol, r.onreadystatechange = function() {
                    4 === r.readyState && (200 === r.status || o && 0 === r.status ? i(r.responseText) : n(r.responseText))
                }) : (r = new window.XDomainRequest, r.onload = function() {
                    i(r.responseText)
                }, r.onerror = n, r.onprogress = m(), r.ontimeout = n);
                try {
                    r.open("GET", e, f), s && (r.withCredentials = f)
                } catch (h) {
                    return void n(h)
                }
                try {
                    r.send()
                } catch (c) {
                    n(c)
                }
            }, t.Yd = function(e) {
                try {
                    var i = window.localStorage || l;
                    i && (i.volume = e)
                } catch (n) {
                    22 == n.code || 1014 == n.code ? t.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? t.log("LocalStorage not allowed (VideoJS)", n) : t.log("LocalStorage Error (VideoJS)", n)
                }
            }, t.sc = function(e) {
                return e.match(/^https?:\/\//) || (e = t.e("div", {
                    innerHTML: '<a href="' + e + '">x</a>'
                }).firstChild.href), e
            }, t.Ud = function(e) {
                var i, n, s, o;
                o = "protocol hostname port pathname search hash host".split(" "), n = t.e("a", {
                    href: e
                }), (s = "" === n.host && "file:" !== n.protocol) && (i = t.e("div"), i.innerHTML = '<a href="' + e + '"></a>', n = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(i)), e = {};
                for (var r = 0; r < o.length; r++) e[o[r]] = n[o[r]];
                return s && document.body.removeChild(i), e
            }, t.log = function() {
                D(j, arguments)
            }, t.log.history = [], t.log.error = function() {
                D("error", arguments)
            }, t.log.warn = function() {
                D("warn", arguments)
            }, t.vd = function(e) {
                var i, n;
                return e.getBoundingClientRect && e.parentNode && (i = e.getBoundingClientRect()), i ? (e = document.documentElement, n = document.body, {
                    left: t.round(i.left + (window.pageXOffset || n.scrollLeft) - (e.clientLeft || n.clientLeft || 0)),
                    top: t.round(i.top + (window.pageYOffset || n.scrollTop) - (e.clientTop || n.clientTop || 0))
                }) : {
                    left: 0,
                    top: 0
                }
            }, t.hc = {}, t.hc.forEach = function(e, i, n) {
                if (t.g.isArray(e) && i instanceof Function)
                    for (var s = 0, o = e.length; o > s; ++s) i.call(n || t, e[s], s, e);
                return e
            }, t.ga = {}, t.ga.Va = function(e, i) {
                var n, s, o;
                e = t.g.copy(e);
                for (n in i) i.hasOwnProperty(n) && (s = e[n], o = i[n], e[n] = t.g.Ta(s) && t.g.Ta(o) ? t.ga.Va(s, o) : i[n]);
                return e
            }, t.a = t.qa.extend({
                i: function(e, i, n) {
                    if (this.c = e, this.l = t.g.copy(this.l), i = this.options(i), this.U = i.id || (i.el && i.el.id ? i.el.id : e.id() + "_component_" + t.w++), this.Hd = i.name || j, this.b = i.el || this.e(), this.O = [], this.Pa = {}, this.Qa = {}, this.vc(), this.J(n), i.Ic !== l) {
                        var s, o;
                        s = t.bind(this.j(), this.j().reportUserActivity), this.d("touchstart", function() {
                            s(), clearInterval(o), o = setInterval(s, 250)
                        }), e = function() {
                            s(), clearInterval(o)
                        }, this.d("touchmove", s), this.d("touchend", e), this.d("touchcancel", e)
                    }
                }
            }), s = t.a.prototype, s.dispose = function() {
                if (this.k({
                        type: "dispose",
                        bubbles: l
                    }), this.O)
                    for (var e = this.O.length - 1; e >= 0; e--) this.O[e].dispose && this.O[e].dispose();
                this.Qa = this.Pa = this.O = j, this.o(), this.b.parentNode && this.b.parentNode.removeChild(this.b), t.Hc(this.b), this.b = j
            }, s.c = f, s.j = p("c"), s.options = function(e) {
                return e === b ? this.l : this.l = t.ga.Va(this.l, e)
            }, s.e = function(e, i) {
                return t.e(e, i)
            }, s.s = function(t) {
                var e = this.c.language(),
                    i = this.c.languages();
                return i && i[e] && i[e][t] ? i[e][t] : t
            }, s.v = p("b"), s.ja = function() {
                return this.u || this.b
            }, s.id = p("U"), s.name = p("Hd"), s.children = p("O"), s.xd = function(t) {
                return this.Pa[t]
            }, s.ka = function(t) {
                return this.Qa[t]
            }, s.S = function(e, i) {
                var n, s;
                return "string" == typeof e ? (s = e, i = i || {}, n = i.componentClass || t.ba(s), i.name = s, n = new window.videojs[n](this.c || this, i)) : n = e, this.O.push(n), "function" == typeof n.id && (this.Pa[n.id()] = n), (s = s || n.name && n.name()) && (this.Qa[s] = n), "function" == typeof n.el && n.el() && this.ja().appendChild(n.el()), n
            }, s.removeChild = function(t) {
                if ("string" == typeof t && (t = this.ka(t)), t && this.O) {
                    for (var e = l, i = this.O.length - 1; i >= 0; i--)
                        if (this.O[i] === t) {
                            e = f, this.O.splice(i, 1);
                            break
                        }
                    e && (this.Pa[t.id] = j, this.Qa[t.name] = j, (e = t.v()) && e.parentNode === this.ja() && this.ja().removeChild(t.v()))
                }
            }, s.vc = function() {
                var e, i, n, s;
                if (e = this, i = this.options().children)
                    if (t.g.isArray(i))
                        for (var o = 0; o < i.length; o++) n = i[o], "string" == typeof n ? (s = n, n = {}) : s = n.name, e[s] = e.S(s, n);
                    else t.g.Y(i, function(t, i) {
                        i !== l && (e[t] = e.S(t, i))
                    })
            }, s.T = q(""), s.d = function(e, i) {
                return t.d(this.b, e, t.bind(this, i)), this
            }, s.o = function(e, i) {
                return t.o(this.b, e, i), this
            }, s.Q = function(e, i) {
                return t.Q(this.b, e, t.bind(this, i)), this
            }, s.k = function(e) {
                return t.k(this.b, e), this
            }, s.J = function(t) {
                return t && (this.la ? t.call(this) : (this.ab === b && (this.ab = []), this.ab.push(t))), this
            }, s.Fa = function() {
                this.la = f;
                var t = this.ab;
                if (t && 0 < t.length) {
                    for (var e = 0, i = t.length; i > e; e++) t[e].call(this);
                    this.ab = [], this.k("ready")
                }
            }, s.Sa = function(e) {
                return t.Sa(this.b, e)
            }, s.m = function(e) {
                return t.m(this.b, e), this
            }, s.p = function(e) {
                return t.p(this.b, e), this
            }, s.show = function() {
                return this.b.style.display = "block", this
            }, s.W = function() {
                return this.b.style.display = "none", this
            }, s.disable = function() {
                this.W(), this.show = m()
            }, s.width = function(t, e) {
                return F(this, "width", t, e)
            }, s.height = function(t, e) {
                return F(this, "height", t, e)
            }, s.rd = function(t, e) {
                return this.width(t, f).height(e)
            }, t.t = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), G(this), this.d("tap", this.r), this.d("click", this.r), this.d("focus", this.Ya), this.d("blur", this.Xa)
                }
            }), s = t.t.prototype, s.e = function(e, i) {
                var n;
                return i = t.g.z({
                    className: this.T(),
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                }, i), n = t.a.prototype.e.call(this, e, i), i.innerHTML || (this.u = t.e("div", {
                    className: "vjs-control-content"
                }), this.xb = t.e("span", {
                    className: "vjs-control-text",
                    innerHTML: this.s(this.ta) || "Need Text"
                }), this.u.appendChild(this.xb), n.appendChild(this.u)), n
            }, s.T = function() {
                return "vjs-control " + t.a.prototype.T.call(this)
            }, s.r = m(), s.Ya = function() {
                t.d(document, "keydown", t.bind(this, this.Z))
            }, s.Z = function(t) {
                (32 == t.which || 13 == t.which) && (t.preventDefault(), this.r())
            }, s.Xa = function() {
                t.o(document, "keydown", t.bind(this, this.Z))
            }, t.R = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), this.gd = this.ka(this.l.barName), this.handle = this.ka(this.l.handleName), this.d("mousedown", this.Za), this.d("touchstart", this.Za), this.d("focus", this.Ya), this.d("blur", this.Xa), this.d("click", this.r), this.c.d("controlsvisible", t.bind(this, this.update)), e.d(this.Dc, t.bind(this, this.update)), this.F = {}, this.F.move = t.bind(this, this.$a), this.F.end = t.bind(this, this.Lb)
                }
            }), s = t.R.prototype, s.dispose = function() {
                t.o(document, "mousemove", this.F.move, l), t.o(document, "mouseup", this.F.end, l), t.o(document, "touchmove", this.F.move, l), t.o(document, "touchend", this.F.end, l), t.o(document, "keyup", t.bind(this, this.Z)), t.a.prototype.dispose.call(this)
            }, s.e = function(e, i) {
                return i = i || {}, i.className += " vjs-slider", i = t.g.z({
                    role: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, i), t.a.prototype.e.call(this, e, i)
            }, s.Za = function(e) {
                e.preventDefault(), t.hd(), this.m("vjs-sliding"), t.d(document, "mousemove", this.F.move), t.d(document, "mouseup", this.F.end), t.d(document, "touchmove", this.F.move), t.d(document, "touchend", this.F.end), this.$a(e)
            }, s.$a = m(), s.Lb = function() {
                t.he(), this.p("vjs-sliding"), t.o(document, "mousemove", this.F.move, l), t.o(document, "mouseup", this.F.end, l), t.o(document, "touchmove", this.F.move, l), t.o(document, "touchend", this.F.end, l), this.update()
            }, s.update = function() {
                if (this.b) {
                    var e, i = this.Fb(),
                        n = this.handle,
                        s = this.gd;
                    if (isNaN(i) && (i = 0), e = i, n) {
                        e = this.b.offsetWidth;
                        var o = n.v().offsetWidth;
                        e = o ? o / e : 0, i *= 1 - e, e = i + e / 2, n.v().style.left = t.round(100 * i, 2) + "%"
                    }
                    s && (s.v().style.width = t.round(100 * e, 2) + "%")
                }
            }, s.Ya = function() {
                t.d(document, "keyup", t.bind(this, this.Z))
            }, s.Z = function(t) {
                37 == t.which || 40 == t.which ? (t.preventDefault(), this.Mc()) : (38 == t.which || 39 == t.which) && (t.preventDefault(), this.Nc())
            }, s.Xa = function() {
                t.o(document, "keyup", t.bind(this, this.Z))
            }, s.r = function(t) {
                t.stopImmediatePropagation(), t.preventDefault()
            }, t.$ = t.a.extend(), t.$.prototype.defaultValue = 0, t.$.prototype.e = function(e, i) {
                return i = i || {}, i.className += " vjs-slider-handle", i = t.g.z({
                    innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
                }, i), t.a.prototype.e.call(this, "div", i)
            }, t.ha = t.a.extend(), t.ha.prototype.e = function() {
                var e = this.options().kc || "ul";
                return this.u = t.e(e, {
                    className: "vjs-menu-content"
                }), e = t.a.prototype.e.call(this, "div", {
                    append: this.u,
                    className: "vjs-menu"
                }), e.appendChild(this.u), t.d(e, "click", function(t) {
                    t.preventDefault(), t.stopImmediatePropagation()
                }), e
            }, t.I = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i), this.selected(i.selected)
                }
            }), t.I.prototype.e = function(e, i) {
                return t.t.prototype.e.call(this, "li", t.g.z({
                    className: "vjs-menu-item",
                    innerHTML: this.l.label
                }, i))
            }, t.I.prototype.r = function() {
                this.selected(f)
            }, t.I.prototype.selected = function(t) {
                t ? (this.m("vjs-selected"), this.b.setAttribute("aria-selected", f)) : (this.p("vjs-selected"), this.b.setAttribute("aria-selected", l))
            }, t.M = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i), this.Aa = this.wa(), this.S(this.Aa), this.P && 0 === this.P.length && this.W(), this.d("keyup", this.Z), this.b.setAttribute("aria-haspopup", f), this.b.setAttribute("role", "button")
                }
            }), s = t.M.prototype, s.sa = l, s.wa = function() {
                var e = new t.ha(this.c);
                if (this.options().title && e.ja().appendChild(t.e("li", {
                        className: "vjs-menu-title",
                        innerHTML: t.ba(this.options().title),
                        ee: -1
                    })), this.P = this.createItems())
                    for (var i = 0; i < this.P.length; i++) ca(e, this.P[i]);
                return e
            }, s.va = m(), s.T = function() {
                return this.className + " vjs-menu-button " + t.t.prototype.T.call(this)
            }, s.Ya = m(), s.Xa = m(), s.r = function() {
                this.Q("mouseout", t.bind(this, function() {
                    E(this.Aa), this.b.blur()
                })), this.sa ? I(this) : J(this)
            }, s.Z = function(t) {
                t.preventDefault(), 32 == t.which || 13 == t.which ? this.sa ? I(this) : J(this) : 27 == t.which && this.sa && I(this)
            }, t.D = function(e) {
                "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.g.z(this, e), this.message || (this.message = t.D.pd[this.code] || "")
            }, t.D.prototype.code = 0, t.D.prototype.message = "", t.D.prototype.status = j, t.D.Ra = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "), t.D.pd = {
                1: "You aborted the video playback",
                2: "A network error caused the video download to fail part-way.",
                3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
                4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The video is encrypted and we do not have the keys to decrypt it."
            };
            for (var K = 0; K < t.D.Ra.length; K++) t.D[t.D.Ra[K]] = K, t.D.prototype[t.D.Ra[K]] = K;
            var L, M, N, O;
            for (L = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], M = L[0], O = 0; O < L.length; O++)
                if (L[O][1] in document) {
                    N = L[O];
                    break
                }
            if (N)
                for (t.Oa.Eb = {}, O = 0; O < N.length; O++) t.Oa.Eb[M[O]] = N[O];
            t.Player = t.a.extend({
                i: function(e, i, n) {
                    this.L = e, e.id = e.id || "vjs_video_" + t.w++, this.fe = e && t.za(e), i = t.g.z(da(e), i), this.Ua = i.language || t.options.language, this.Fd = i.languages || t.options.languages, this.G = {}, this.Ec = i.poster, this.yb = i.controls, e.controls = l, i.Ic = l, P(this, "audio" === this.L.nodeName.toLowerCase()), t.a.call(this, this, i, n), this.controls() ? this.m("vjs-controls-enabled") : this.m("vjs-controls-disabled"), P(this) && this.m("vjs-audio"), t.Ba[this.U] = this, i.plugins && t.g.Y(i.plugins, function(t, e) {
                        this[t](e)
                    }, this);
                    var s, o, r, a, h, c;
                    s = t.bind(this, this.reportUserActivity), this.d("mousedown", function() {
                        s(), clearInterval(o), o = setInterval(s, 250)
                    }), this.d("mousemove", function(t) {
                        (t.screenX != h || t.screenY != c) && (h = t.screenX, c = t.screenY, s())
                    }), this.d("mouseup", function() {
                        s(), clearInterval(o)
                    }), this.d("keydown", s), this.d("keyup", s), r = setInterval(t.bind(this, function() {
                        if (this.pa) {
                            this.pa = l, this.userActive(f), clearTimeout(a);
                            var e = this.options().inactivityTimeout;
                            e > 0 && (a = setTimeout(t.bind(this, function() {
                                this.pa || this.userActive(l)
                            }), e))
                        }
                    }), 250), this.d("dispose", function() {
                        clearInterval(r), clearTimeout(a)
                    })
                }
            }), s = t.Player.prototype, s.language = function(t) {
                return t === b ? this.Ua : (this.Ua = t, this)
            }, s.languages = p("Fd"), s.l = t.options, s.dispose = function() {
                this.k("dispose"), this.o("dispose"), t.Ba[this.U] = j, this.L && this.L.player && (this.L.player = j), this.b && this.b.player && (this.b.player = j), this.n && this.n.dispose(), t.a.prototype.dispose.call(this)
            }, s.e = function() {
                var e, i = this.b = t.a.prototype.e.call(this, "div"),
                    n = this.L;
                if (n.removeAttribute("width"), n.removeAttribute("height"), n.hasChildNodes()) {
                    var s, o, r, a, l;
                    for (s = n.childNodes, o = s.length, l = []; o--;) r = s[o], a = r.nodeName.toLowerCase(), "track" === a && l.push(r);
                    for (s = 0; s < l.length; s++) n.removeChild(l[s])
                }
                return e = t.za(n), t.g.Y(e, function(t) {
                    "class" == t ? i.className = e[t] : i.setAttribute(t, e[t])
                }), n.id += "_html5_api", n.className = "vjs-tech", n.player = i.player = this, this.m("vjs-paused"), this.width(this.l.width, f), this.height(this.l.height, f), n.parentNode && n.parentNode.insertBefore(i, n), t.Gb(n, i), this.b = i, this.d("loadstart", this.Md), this.d("waiting", this.Sd), this.d(["canplay", "canplaythrough", "playing", "ended"], this.Rd), this.d("seeking", this.Pd), this.d("seeked", this.Od), this.d("ended", this.Id), this.d("play", this.Nb), this.d("firstplay", this.Kd), this.d("pause", this.Mb), this.d("progress", this.Nd), this.d("durationchange", this.Bc), this.d("fullscreenchange", this.Ld), i
            }, s.Md = function() {
                this.error(j), this.paused() ? (R(this, l), this.Q("play", function() {
                    R(this, f)
                })) : this.k("firstplay")
            }, s.uc = l, s.Nb = function() {
                this.p("vjs-paused"), this.m("vjs-playing")
            }, s.Sd = function() {
                this.m("vjs-waiting")
            }, s.Rd = function() {
                this.p("vjs-waiting")
            }, s.Pd = function() {
                this.m("vjs-seeking")
            }, s.Od = function() {
                this.p("vjs-seeking")
            }, s.Kd = function() {
                this.l.starttime && this.currentTime(this.l.starttime), this.m("vjs-has-started")
            }, s.Mb = function() {
                this.p("vjs-playing"), this.m("vjs-paused")
            }, s.Nd = function() {
                1 == this.bufferedPercent() && this.k("loadedalldata")
            }, s.Id = function() {
                this.l.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
            }, s.Bc = function() {
                var t = S(this, "duration");
                t && (0 > t && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.m("vjs-live") : this.p("vjs-live"))
            }, s.Ld = function() {
                this.isFullscreen() ? this.m("vjs-fullscreen") : this.p("vjs-fullscreen")
            }, s.play = function() {
                return T(this, "play"), this
            }, s.pause = function() {
                return T(this, "pause"), this
            }, s.paused = function() {
                return S(this, "paused") === l ? l : f
            }, s.currentTime = function(t) {
                return t !== b ? (T(this, "setCurrentTime", t), this) : this.G.currentTime = S(this, "currentTime") || 0
            }, s.duration = function(t) {
                return t !== b ? (this.G.duration = parseFloat(t), this) : (this.G.duration === b && this.Bc(), this.G.duration || 0)
            }, s.remainingTime = function() {
                return this.duration() - this.currentTime()
            }, s.buffered = function() {
                var e = S(this, "buffered");
                return e && e.length || (e = t.zb(0, 0)), e
            }, s.bufferedPercent = function() {
                var t, e, i = this.duration(),
                    n = this.buffered(),
                    s = 0;
                if (!i) return 0;
                for (var o = 0; o < n.length; o++) t = n.start(o), e = n.end(o), e > i && (e = i), s += e - t;
                return s / i
            }, s.volume = function(e) {
                return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.G.volume = e, T(this, "setVolume", e), t.Yd(e), this) : (e = parseFloat(S(this, "volume")), isNaN(e) ? 1 : e)
            }, s.muted = function(t) {
                return t !== b ? (T(this, "setMuted", t), this) : S(this, "muted") || l
            }, s.Da = function() {
                return S(this, "supportsFullScreen") || l
            }, s.xc = l, s.isFullscreen = function(t) {
                return t !== b ? (this.xc = !!t, this) : this.xc
            }, s.isFullScreen = function(e) {
                return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
            }, s.requestFullscreen = function() {
                var e = t.Oa.Eb;
                return this.isFullscreen(f), e ? (t.d(document, e.fullscreenchange, t.bind(this, function(i) {
                    this.isFullscreen(document[e.fullscreenElement]), this.isFullscreen() === l && t.o(document, e.fullscreenchange, arguments.callee), this.k("fullscreenchange")
                })), this.b[e.requestFullscreen]()) : this.n.Da() ? T(this, "enterFullScreen") : (this.pc(), this.k("fullscreenchange")), this
            }, s.requestFullScreen = function() {
                return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'),
                    this.requestFullscreen()
            }, s.exitFullscreen = function() {
                var e = t.Oa.Eb;
                return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.n.Da() ? T(this, "exitFullScreen") : (this.Cb(), this.k("fullscreenchange")), this
            }, s.cancelFullScreen = function() {
                return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
            }, s.pc = function() {
                this.Ad = f, this.sd = document.documentElement.style.overflow, t.d(document, "keydown", t.bind(this, this.rc)), document.documentElement.style.overflow = "hidden", t.m(document.body, "vjs-full-window"), this.k("enterFullWindow")
            }, s.rc = function(t) {
                27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Cb())
            }, s.Cb = function() {
                this.Ad = l, t.o(document, "keydown", this.rc), document.documentElement.style.overflow = this.sd, t.p(document.body, "vjs-full-window"), this.k("exitFullWindow")
            }, s.selectSource = function(e) {
                for (var i = 0, n = this.l.techOrder; i < n.length; i++) {
                    var s = t.ba(n[i]),
                        o = window.videojs[s];
                    if (o) {
                        if (o.isSupported())
                            for (var r = 0, a = e; r < a.length; r++) {
                                var h = a[r];
                                if (o.canPlaySource(h)) return {
                                    source: h,
                                    n: s
                                }
                            }
                    } else t.log.error('The "' + s + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return l
            }, s.src = function(e) {
                return e === b ? S(this, "src") : (t.g.isArray(e) ? U(this, e) : "string" == typeof e ? this.src({
                    src: e
                }) : e instanceof Object && (e.type && !window.videojs[this.eb].canPlaySource(e) ? U(this, [e]) : (this.G.src = e.src, this.mc = e.type || "", this.J(function() {
                    T(this, "src", e.src), "auto" == this.l.preload && this.load(), this.l.autoplay && this.play()
                }))), this)
            }, s.load = function() {
                return T(this, "load"), this
            }, s.currentSrc = function() {
                return S(this, "currentSrc") || this.G.src || ""
            }, s.nd = function() {
                return this.mc || ""
            }, s.Ca = function(t) {
                return t !== b ? (T(this, "setPreload", t), this.l.preload = t, this) : S(this, "preload")
            }, s.autoplay = function(t) {
                return t !== b ? (T(this, "setAutoplay", t), this.l.autoplay = t, this) : S(this, "autoplay")
            }, s.loop = function(t) {
                return t !== b ? (T(this, "setLoop", t), this.l.loop = t, this) : S(this, "loop")
            }, s.poster = function(t) {
                return t === b ? this.Ec : (this.Ec = t, T(this, "setPoster", t), this.k("posterchange"), this)
            }, s.controls = function(t) {
                return t !== b ? (t = !!t, this.yb !== t && ((this.yb = t) ? (this.p("vjs-controls-disabled"), this.m("vjs-controls-enabled"), this.k("controlsenabled")) : (this.p("vjs-controls-enabled"), this.m("vjs-controls-disabled"), this.k("controlsdisabled"))), this) : this.yb
            }, t.Player.prototype.Sb, s = t.Player.prototype, s.usingNativeControls = function(t) {
                return t !== b ? (t = !!t, this.Sb !== t && ((this.Sb = t) ? (this.m("vjs-using-native-controls"), this.k("usingnativecontrols")) : (this.p("vjs-using-native-controls"), this.k("usingcustomcontrols"))), this) : this.Sb
            }, s.da = j, s.error = function(e) {
                return e === b ? this.da : e === j ? (this.da = e, this.p("vjs-error"), this) : (this.da = e instanceof t.D ? e : new t.D(e), this.k("error"), this.m("vjs-error"), t.log.error("(CODE:" + this.da.code + " " + t.D.Ra[this.da.code] + ")", this.da.message, this.da), this)
            }, s.ended = function() {
                return S(this, "ended")
            }, s.seeking = function() {
                return S(this, "seeking")
            }, s.pa = f, s.reportUserActivity = function() {
                this.pa = f
            }, s.Rb = f, s.userActive = function(t) {
                return t !== b ? (t = !!t, t !== this.Rb && ((this.Rb = t) ? (this.pa = f, this.p("vjs-user-inactive"), this.m("vjs-user-active"), this.k("useractive")) : (this.pa = l, this.n && this.n.Q("mousemove", function(t) {
                    t.stopPropagation(), t.preventDefault()
                }), this.p("vjs-user-active"), this.m("vjs-user-inactive"), this.k("userinactive"))), this) : this.Rb
            }, s.playbackRate = function(t) {
                return t !== b ? (T(this, "setPlaybackRate", t), this) : this.n && this.n.featuresPlaybackRate ? S(this, "playbackRate") : 1
            }, s.wc = l, t.Ia = t.a.extend(), t.Ia.prototype.l = {
                te: "play",
                children: {
                    playToggle: {},
                    currentTimeDisplay: {},
                    timeDivider: {},
                    durationDisplay: {},
                    remainingTimeDisplay: {},
                    liveDisplay: {},
                    progressControl: {},
                    fullscreenToggle: {},
                    volumeControl: {},
                    muteToggle: {},
                    playbackRateMenuButton: {}
                }
            }, t.Ia.prototype.e = function() {
                return t.e("div", {
                    className: "vjs-control-bar"
                })
            }, t.Xb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.Xb.prototype.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-live-controls vjs-control"
                });
                return this.u = t.e("div", {
                    className: "vjs-live-display",
                    innerHTML: '<span class="vjs-control-text">' + this.s("Stream Type") + "</span>" + this.s("LIVE"),
                    "aria-live": "off"
                }), e.appendChild(this.u), e
            }, t.$b = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i), e.d("play", t.bind(this, this.Nb)), e.d("pause", t.bind(this, this.Mb))
                }
            }), s = t.$b.prototype, s.ta = "Play", s.T = function() {
                return "vjs-play-control " + t.t.prototype.T.call(this)
            }, s.r = function() {
                this.c.paused() ? this.c.play() : this.c.pause()
            }, s.Nb = function() {
                t.p(this.b, "vjs-paused"), t.m(this.b, "vjs-playing"), this.b.children[0].children[0].innerHTML = this.s("Pause")
            }, s.Mb = function() {
                t.p(this.b, "vjs-playing"), t.m(this.b, "vjs-paused"), this.b.children[0].children[0].innerHTML = this.s("Play")
            }, t.hb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), e.d("timeupdate", t.bind(this, this.fa))
                }
            }), t.hb.prototype.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-current-time vjs-time-controls vjs-control"
                });
                return this.u = t.e("div", {
                    className: "vjs-current-time-display",
                    innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                    "aria-live": "off"
                }), e.appendChild(this.u), e
            }, t.hb.prototype.fa = function() {
                var e = this.c.bb ? this.c.G.currentTime : this.c.currentTime();
                this.u.innerHTML = '<span class="vjs-control-text">' + this.s("Current Time") + "</span> " + t.ya(e, this.c.duration())
            }, t.ib = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), e.d("timeupdate", t.bind(this, this.fa))
                }
            }), t.ib.prototype.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-duration vjs-time-controls vjs-control"
                });
                return this.u = t.e("div", {
                    className: "vjs-duration-display",
                    innerHTML: '<span class="vjs-control-text">' + this.s("Duration Time") + "</span> 0:00",
                    "aria-live": "off"
                }), e.appendChild(this.u), e
            }, t.ib.prototype.fa = function() {
                var e = this.c.duration();
                e && (this.u.innerHTML = '<span class="vjs-control-text">' + this.s("Duration Time") + "</span> " + t.ya(e))
            }, t.fc = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.fc.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-time-divider",
                    innerHTML: "<div><span>/</span></div>"
                })
            }, t.pb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), e.d("timeupdate", t.bind(this, this.fa))
                }
            }), t.pb.prototype.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-remaining-time vjs-time-controls vjs-control"
                });
                return this.u = t.e("div", {
                    className: "vjs-remaining-time-display",
                    innerHTML: '<span class="vjs-control-text">' + this.s("Remaining Time") + "</span> -0:00",
                    "aria-live": "off"
                }), e.appendChild(this.u), e
            }, t.pb.prototype.fa = function() {
                this.c.duration() && (this.u.innerHTML = '<span class="vjs-control-text">' + this.s("Remaining Time") + "</span> -" + t.ya(this.c.remainingTime()))
            }, t.Ja = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i)
                }
            }), t.Ja.prototype.ta = "Fullscreen", t.Ja.prototype.T = function() {
                return "vjs-fullscreen-control " + t.t.prototype.T.call(this)
            }, t.Ja.prototype.r = function() {
                this.c.isFullscreen() ? (this.c.exitFullscreen(), this.xb.innerHTML = this.s("Fullscreen")) : (this.c.requestFullscreen(), this.xb.innerHTML = this.s("Non-Fullscreen"))
            }, t.ob = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.ob.prototype.l = {
                children: {
                    seekBar: {}
                }
            }, t.ob.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-progress-control vjs-control"
                })
            }, t.bc = t.R.extend({
                i: function(e, i) {
                    t.R.call(this, e, i), e.d("timeupdate", t.bind(this, this.oa)), e.J(t.bind(this, this.oa))
                }
            }), s = t.bc.prototype, s.l = {
                children: {
                    loadProgressBar: {},
                    playProgressBar: {},
                    seekHandle: {}
                },
                barName: "playProgressBar",
                handleName: "seekHandle"
            }, s.Dc = "timeupdate", s.e = function() {
                return t.R.prototype.e.call(this, "div", {
                    className: "vjs-progress-holder",
                    "aria-label": "video progress bar"
                })
            }, s.oa = function() {
                var e = this.c.bb ? this.c.G.currentTime : this.c.currentTime();
                this.b.setAttribute("aria-valuenow", t.round(100 * this.Fb(), 2)), this.b.setAttribute("aria-valuetext", t.ya(e, this.c.duration()))
            }, s.Fb = function() {
                return this.c.currentTime() / this.c.duration()
            }, s.Za = function(e) {
                t.R.prototype.Za.call(this, e), this.c.bb = f, this.je = !this.c.paused(), this.c.pause()
            }, s.$a = function(t) {
                t = H(this, t) * this.c.duration(), t == this.c.duration() && (t -= .1), this.c.currentTime(t)
            }, s.Lb = function(e) {
                t.R.prototype.Lb.call(this, e), this.c.bb = l, this.je && this.c.play()
            }, s.Nc = function() {
                this.c.currentTime(this.c.currentTime() + 5)
            }, s.Mc = function() {
                this.c.currentTime(this.c.currentTime() - 5)
            }, t.lb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), e.d("progress", t.bind(this, this.update))
                }
            }), t.lb.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-load-progress",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.s("Loaded") + "</span>: 0%</span>"
                })
            }, t.lb.prototype.update = function() {
                var e, i, n, s, o = this.c.buffered();
                e = this.c.duration();
                var r, a = this.c;
                for (r = a.buffered(), a = a.duration(), r = r.end(r.length - 1), r > a && (r = a), a = this.b.children, this.b.style.width = 100 * (r / e || 0) + "%", e = 0; e < o.length; e++) i = o.start(e), n = o.end(e), (s = a[e]) || (s = this.b.appendChild(t.e())), s.style.left = 100 * (i / r || 0) + "%", s.style.width = 100 * ((n - i) / r || 0) + "%";
                for (e = a.length; e > o.length; e--) this.b.removeChild(a[e - 1])
            }, t.Zb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.Zb.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-play-progress",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.s("Progress") + "</span>: 0%</span>"
                })
            }, t.La = t.$.extend({
                i: function(e, i) {
                    t.$.call(this, e, i), e.d("timeupdate", t.bind(this, this.fa))
                }
            }), t.La.prototype.defaultValue = "00:00", t.La.prototype.e = function() {
                return t.$.prototype.e.call(this, "div", {
                    className: "vjs-seek-handle",
                    "aria-live": "off"
                })
            }, t.La.prototype.fa = function() {
                var e = this.c.bb ? this.c.G.currentTime : this.c.currentTime();
                this.b.innerHTML = '<span class="vjs-control-text">' + t.ya(e, this.c.duration()) + "</span>"
            }, t.rb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), e.n && e.n.featuresVolumeControl === l && this.m("vjs-hidden"), e.d("loadstart", t.bind(this, function() {
                        e.n.featuresVolumeControl === l ? this.m("vjs-hidden") : this.p("vjs-hidden")
                    }))
                }
            }), t.rb.prototype.l = {
                children: {
                    volumeBar: {}
                }
            }, t.rb.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-volume-control vjs-control"
                })
            }, t.qb = t.R.extend({
                i: function(e, i) {
                    t.R.call(this, e, i), e.d("volumechange", t.bind(this, this.oa)), e.J(t.bind(this, this.oa))
                }
            }), s = t.qb.prototype, s.oa = function() {
                this.b.setAttribute("aria-valuenow", t.round(100 * this.c.volume(), 2)), this.b.setAttribute("aria-valuetext", t.round(100 * this.c.volume(), 2) + "%")
            }, s.l = {
                children: {
                    volumeLevel: {},
                    volumeHandle: {}
                },
                barName: "volumeLevel",
                handleName: "volumeHandle"
            }, s.Dc = "volumechange", s.e = function() {
                return t.R.prototype.e.call(this, "div", {
                    className: "vjs-volume-bar",
                    "aria-label": "volume level"
                })
            }, s.$a = function(t) {
                this.c.muted() && this.c.muted(l), this.c.volume(H(this, t))
            }, s.Fb = function() {
                return this.c.muted() ? 0 : this.c.volume()
            }, s.Nc = function() {
                this.c.volume(this.c.volume() + .1)
            }, s.Mc = function() {
                this.c.volume(this.c.volume() - .1)
            }, t.gc = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.gc.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }, t.sb = t.$.extend(), t.sb.prototype.defaultValue = "00:00", t.sb.prototype.e = function() {
                return t.$.prototype.e.call(this, "div", {
                    className: "vjs-volume-handle"
                })
            }, t.ia = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i), e.d("volumechange", t.bind(this, this.update)), e.n && e.n.featuresVolumeControl === l && this.m("vjs-hidden"), e.d("loadstart", t.bind(this, function() {
                        e.n.featuresVolumeControl === l ? this.m("vjs-hidden") : this.p("vjs-hidden")
                    }))
                }
            }), t.ia.prototype.e = function() {
                return t.t.prototype.e.call(this, "div", {
                    className: "vjs-mute-control vjs-control",
                    innerHTML: '<div><span class="vjs-control-text">' + this.s("Mute") + "</span></div>"
                })
            }, t.ia.prototype.r = function() {
                this.c.muted(this.c.muted() ? l : f)
            }, t.ia.prototype.update = function() {
                var e = this.c.volume(),
                    i = 3;
                for (0 === e || this.c.muted() ? i = 0 : .33 > e ? i = 1 : .67 > e && (i = 2), this.c.muted() ? this.b.children[0].children[0].innerHTML != this.s("Unmute") && (this.b.children[0].children[0].innerHTML = this.s("Unmute")) : this.b.children[0].children[0].innerHTML != this.s("Mute") && (this.b.children[0].children[0].innerHTML = this.s("Mute")), e = 0; 4 > e; e++) t.p(this.b, "vjs-vol-" + e);
                t.m(this.b, "vjs-vol-" + i)
            }, t.ra = t.M.extend({
                i: function(e, i) {
                    t.M.call(this, e, i), e.d("volumechange", t.bind(this, this.update)), e.n && e.n.featuresVolumeControl === l && this.m("vjs-hidden"), e.d("loadstart", t.bind(this, function() {
                        e.n.featuresVolumeControl === l ? this.m("vjs-hidden") : this.p("vjs-hidden")
                    })), this.m("vjs-menu-button")
                }
            }), t.ra.prototype.wa = function() {
                var e = new t.ha(this.c, {
                        kc: "div"
                    }),
                    i = new t.qb(this.c, t.g.z({
                        vertical: f
                    }, this.l.xe));
                return i.d("focus", function() {
                    e.m("vjs-lock-showing")
                }), i.d("blur", function() {
                    E(e)
                }), e.S(i), e
            }, t.ra.prototype.r = function() {
                t.ia.prototype.r.call(this), t.M.prototype.r.call(this)
            }, t.ra.prototype.e = function() {
                return t.t.prototype.e.call(this, "div", {
                    className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                    innerHTML: '<div><span class="vjs-control-text">' + this.s("Mute") + "</span></div>"
                })
            }, t.ra.prototype.update = t.ia.prototype.update, t.ac = t.M.extend({
                i: function(e, i) {
                    t.M.call(this, e, i), this.Sc(), this.Rc(), e.d("loadstart", t.bind(this, this.Sc)), e.d("ratechange", t.bind(this, this.Rc))
                }
            }), s = t.ac.prototype, s.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-playback-rate vjs-menu-button vjs-control",
                    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + this.s("Playback Rate") + "</span></div>"
                });
                return this.zc = t.e("div", {
                    className: "vjs-playback-rate-value",
                    innerHTML: 1
                }), e.appendChild(this.zc), e
            }, s.wa = function() {
                var e = new t.ha(this.j()),
                    i = this.j().options().playbackRates;
                if (i)
                    for (var n = i.length - 1; n >= 0; n--) e.S(new t.nb(this.j(), {
                        rate: i[n] + "x"
                    }));
                return e
            }, s.oa = function() {
                this.v().setAttribute("aria-valuenow", this.j().playbackRate())
            }, s.r = function() {
                for (var t = this.j().playbackRate(), e = this.j().options().playbackRates, i = e[0], n = 0; n < e.length; n++)
                    if (e[n] > t) {
                        i = e[n];
                        break
                    }
                this.j().playbackRate(i)
            }, s.Sc = function() {
                ea(this) ? this.p("vjs-hidden") : this.m("vjs-hidden")
            }, s.Rc = function() {
                ea(this) && (this.zc.innerHTML = this.j().playbackRate() + "x")
            }, t.nb = t.I.extend({
                kc: "button",
                i: function(e, i) {
                    var n = this.label = i.rate,
                        s = this.Gc = parseFloat(n, 10);
                    i.label = n, i.selected = 1 === s, t.I.call(this, e, i), this.j().d("ratechange", t.bind(this, this.update))
                }
            }), t.nb.prototype.r = function() {
                t.I.prototype.r.call(this), this.j().playbackRate(this.Gc)
            }, t.nb.prototype.update = function() {
                this.selected(this.j().playbackRate() == this.Gc)
            }, t.Ka = t.t.extend({
                i: function(e, i) {
                    t.t.call(this, e, i), e.poster() && this.src(e.poster()), (!e.poster() || !e.controls()) && this.W(), e.d("posterchange", t.bind(this, function() {
                        this.src(e.poster())
                    })), P(e) || e.d("play", t.bind(this, this.W))
                }
            });
            var fa = "backgroundSize" in t.A.style;
            t.Ka.prototype.e = function() {
                var e = t.e("div", {
                    className: "vjs-poster",
                    tabIndex: -1
                });
                return fa || e.appendChild(t.e("img")), e
            }, t.Ka.prototype.src = function(t) {
                var e = this.v();
                t !== b && (fa ? e.style.backgroundImage = 'url("' + t + '")' : e.firstChild.src = t)
            }, t.Ka.prototype.r = function() {
                this.j().controls() && this.c.play()
            }, t.Yb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i)
                }
            }), t.Yb.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-loading-spinner"
                })
            }, t.fb = t.t.extend(), t.fb.prototype.e = function() {
                return t.t.prototype.e.call(this, "div", {
                    className: "vjs-big-play-button",
                    innerHTML: '<span aria-hidden="true"></span>',
                    "aria-label": "play video"
                })
            }, t.fb.prototype.r = function() {
                this.c.play()
            }, t.jb = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), this.update(), e.d("error", t.bind(this, this.update))
                }
            }), t.jb.prototype.e = function() {
                var e = t.a.prototype.e.call(this, "div", {
                    className: "vjs-error-display"
                });
                return this.u = t.e("div"), e.appendChild(this.u), e
            }, t.jb.prototype.update = function() {
                this.j().error() && (this.u.innerHTML = this.s(this.j().error().message))
            }, t.q = t.a.extend({
                i: function(e, i, n) {
                    i = i || {}, i.Ic = l, t.a.call(this, e, i, n), this.featuresProgressEvents || (this.Ac = f, this.Fc = setInterval(t.bind(this, function() {
                        var t = this.j().bufferedPercent();
                        this.jd != t && this.j().k("progress"), this.jd = t, 1 === t && clearInterval(this.Fc)
                    }), 500)), this.featuresTimeupdateEvents || (this.Kb = f, this.j().d("play", t.bind(this, this.Qc)), this.j().d("pause", t.bind(this, this.cb)), this.Q("timeupdate", function() {
                        this.featuresTimeupdateEvents = f, ga(this)
                    }));
                    var s, o;
                    o = this, s = this.j(), e = function() {
                        if (s.controls() && !s.usingNativeControls()) {
                            var t;
                            o.d("mousedown", o.r), o.d("touchstart", function() {
                                t = this.c.userActive()
                            }), o.d("touchmove", function() {
                                t && this.j().reportUserActivity()
                            }), o.d("touchend", function(t) {
                                t.preventDefault()
                            }), G(o), o.d("tap", o.Qd)
                        }
                    }, i = t.bind(o, o.Wd), this.J(e), s.d("controlsenabled", e), s.d("controlsdisabled", i), this.J(function() {
                        this.networkState && 0 < this.networkState() && this.j().k("loadstart")
                    })
                }
            }), s = t.q.prototype, s.Wd = function() {
                this.o("tap"), this.o("touchstart"), this.o("touchmove"), this.o("touchleave"), this.o("touchcancel"), this.o("touchend"), this.o("click"), this.o("mousedown")
            }, s.r = function(t) {
                0 === t.button && this.j().controls() && (this.j().paused() ? this.j().play() : this.j().pause())
            }, s.Qd = function() {
                this.j().userActive(!this.j().userActive())
            }, s.Qc = function() {
                this.lc && this.cb(), this.lc = setInterval(t.bind(this, function() {
                    this.j().k("timeupdate")
                }), 250)
            }, s.cb = function() {
                clearInterval(this.lc), this.j().k("timeupdate")
            }, s.dispose = function() {
                this.Ac && (this.Ac = l, clearInterval(this.Fc)), this.Kb && ga(this), t.a.prototype.dispose.call(this)
            }, s.Pb = function() {
                this.Kb && this.j().k("timeupdate")
            }, s.Kc = m(), t.q.prototype.featuresVolumeControl = f, t.q.prototype.featuresFullscreenResize = l, t.q.prototype.featuresPlaybackRate = l, t.q.prototype.featuresProgressEvents = l, t.q.prototype.featuresTimeupdateEvents = l, t.media = {}, t.h = t.q.extend({
                i: function(e, i, n) {
                    for (this.featuresVolumeControl = t.h.ld(), this.featuresPlaybackRate = t.h.kd(), this.movingMediaElementInDOM = !t.Yc, this.featuresProgressEvents = this.featuresFullscreenResize = f, t.q.call(this, e, i, n), n = t.h.kb.length - 1; n >= 0; n--) t.d(this.b, t.h.kb[n], t.bind(this, this.td));
                    if ((i = i.source) && this.b.currentSrc !== i.src && (this.b.src = i.src), t.dc && e.options().nativeControlsForTouch !== l) {
                        var s, o, r, a;
                        s = this, o = this.j(), i = o.controls(), s.b.controls = !!i, r = function() {
                            s.b.controls = f
                        }, a = function() {
                            s.b.controls = l
                        }, o.d("controlsenabled", r), o.d("controlsdisabled", a), i = function() {
                            o.o("controlsenabled", r), o.o("controlsdisabled", a)
                        }, s.d("dispose", i), o.d("usingcustomcontrols", i), o.usingNativeControls(f)
                    }
                    e.J(function() {
                        this.L && this.l.autoplay && this.paused() && (delete this.L.poster, this.play())
                    }), this.Fa()
                }
            }), s = t.h.prototype, s.dispose = function() {
                t.h.Bb(this.b), t.q.prototype.dispose.call(this)
            }, s.e = function() {
                var e, i = this.c,
                    n = i.L;
                n && this.movingMediaElementInDOM !== l || (n ? (e = n.cloneNode(l), t.h.Bb(n), n = e, i.L = j) : (n = t.e("video"), t.Jc(n, t.g.z(i.fe || {}, {
                    id: i.id() + "_html5_api",
                    "class": "vjs-tech"
                }))), n.player = i, t.Gb(n, i.v())), e = ["autoplay", "preload", "loop", "muted"];
                for (var s = e.length - 1; s >= 0; s--) {
                    var o = e[s],
                        r = {};
                    "undefined" != typeof i.l[o] && (r[o] = i.l[o]), t.Jc(n, r)
                }
                return n
            }, s.td = function(t) {
                "error" == t.type && this.error() ? this.j().error(this.error().code) : (t.bubbles = l, this.j().k(t))
            }, s.play = function() {
                this.b.play()
            }, s.pause = function() {
                this.b.pause()
            }, s.paused = function() {
                return this.b.paused
            }, s.currentTime = function() {
                return this.b.currentTime
            }, s.Pb = function(e) {
                try {
                    this.b.currentTime = e
                } catch (i) {
                    t.log(i, "Video is not ready. (Video.js)")
                }
            }, s.duration = function() {
                return this.b.duration || 0
            }, s.buffered = function() {
                return this.b.buffered
            }, s.volume = function() {
                return this.b.volume
            }, s.ce = function(t) {
                this.b.volume = t
            }, s.muted = function() {
                return this.b.muted
            }, s.$d = function(t) {
                this.b.muted = t
            }, s.width = function() {
                return this.b.offsetWidth
            }, s.height = function() {
                return this.b.offsetHeight
            }, s.Da = function() {
                return "function" != typeof this.b.webkitEnterFullScreen || !/Android/.test(t.N) && /Chrome|Mac OS X 10.5/.test(t.N) ? l : f
            }, s.oc = function() {
                var e = this.b;
                "webkitDisplayingFullscreen" in e && this.Q("webkitbeginfullscreen", t.bind(this, function() {
                    this.c.isFullscreen(f), this.Q("webkitendfullscreen", t.bind(this, function() {
                        this.c.isFullscreen(l), this.c.k("fullscreenchange")
                    })), this.c.k("fullscreenchange")
                })), e.paused && e.networkState <= e.ke ? (this.b.play(), setTimeout(function() {
                    e.pause(), e.webkitEnterFullScreen()
                }, 0)) : e.webkitEnterFullScreen()
            }, s.ud = function() {
                this.b.webkitExitFullScreen()
            }, s.src = function(t) {
                return t === b ? this.b.src : void(this.b.src = t)
            }, s.load = function() {
                this.b.load()
            }, s.currentSrc = function() {
                return this.b.currentSrc
            }, s.poster = function() {
                return this.b.poster
            }, s.Kc = function(t) {
                this.b.poster = t
            }, s.Ca = function() {
                return this.b.Ca
            }, s.be = function(t) {
                this.b.Ca = t
            }, s.autoplay = function() {
                return this.b.autoplay
            }, s.Xd = function(t) {
                this.b.autoplay = t
            }, s.controls = function() {
                return this.b.controls
            }, s.loop = function() {
                return this.b.loop
            }, s.Zd = function(t) {
                this.b.loop = t
            }, s.error = function() {
                return this.b.error
            }, s.seeking = function() {
                return this.b.seeking
            }, s.ended = function() {
                return this.b.ended
            }, s.playbackRate = function() {
                return this.b.playbackRate
            }, s.ae = function(t) {
                this.b.playbackRate = t
            }, s.networkState = function() {
                return this.b.networkState
            }, t.h.isSupported = function() {
                try {
                    t.A.volume = .5
                } catch (e) {
                    return l
                }
                return !!t.A.canPlayType
            }, t.h.vb = function(e) {
                try {
                    return !!t.A.canPlayType(e.type)
                } catch (i) {
                    return ""
                }
            }, t.h.ld = function() {
                var e = t.A.volume;
                return t.A.volume = e / 2 + .1, e !== t.A.volume
            }, t.h.kd = function() {
                var e = t.A.playbackRate;
                return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
            };
            var V, ha = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                ia = /^video\/mp4/i;
            t.h.Cc = function() {
                4 <= t.Tb && (V || (V = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                    return t && ha.test(t) ? "maybe" : V.call(this, t)
                }), t.bd && (V || (V = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                    return t && ia.test(t) ? "maybe" : V.call(this, t)
                })
            }, t.h.ie = function() {
                var e = t.A.constructor.prototype.canPlayType;
                return t.A.constructor.prototype.canPlayType = V, V = j, e
            }, t.h.Cc(), t.h.kb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.h.Bb = function(t) {
                if (t) {
                    for (t.player = j, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    if (t.removeAttribute("src"), "function" == typeof t.load) try {
                        t.load()
                    } catch (e) {}
                }
            }, t.f = t.q.extend({
                i: function(e, i, n) {
                    t.q.call(this, e, i, n);
                    var s = i.source;
                    n = i.parentEl;
                    var o = this.b = t.e("div", {
                            id: e.id() + "_temp_flash"
                        }),
                        r = e.id() + "_flash_api",
                        a = e.l,
                        a = t.g.z({
                            readyFunction: "videojs.Flash.onReady",
                            eventProxyFunction: "videojs.Flash.onEvent",
                            errorEventProxyFunction: "videojs.Flash.onError",
                            autoplay: a.autoplay,
                            preload: a.Ca,
                            loop: a.loop,
                            muted: a.muted
                        }, i.flashVars),
                        h = t.g.z({
                            wmode: "opaque",
                            bgcolor: "#000000"
                        }, i.params),
                        r = t.g.z({
                            id: r,
                            name: r,
                            "class": "vjs-tech"
                        }, i.attributes);
                    s && (s.type && t.f.Dd(s.type) ? (s = t.f.Oc(s.src), a.rtmpConnection = encodeURIComponent(s.wb), a.rtmpStream = encodeURIComponent(s.Qb)) : a.src = encodeURIComponent(t.sc(s.src))), t.Gb(o, n), i.startTime && this.J(function() {
                        this.load(), this.play(), this.currentTime(i.startTime)
                    }), t.Xc && this.J(function() {
                        t.d(this.v(), "mousemove", t.bind(this, function() {
                            this.j().k({
                                type: "mousemove",
                                bubbles: l
                            })
                        }))
                    }), e.d("stageclick", e.reportUserActivity), this.b = t.f.nc(i.swf, o, a, h, r)
                }
            }), t.f.prototype.dispose = function() {
                t.q.prototype.dispose.call(this)
            }, t.f.prototype.play = function() {
                this.b.vjs_play()
            }, t.f.prototype.pause = function() {
                this.b.vjs_pause()
            }, t.f.prototype.src = function(e) {
                if (e === b) return this.currentSrc();
                if (t.f.Cd(e) ? (e = t.f.Oc(e), this.ue(e.wb), this.ve(e.Qb)) : (e = t.sc(e), this.b.vjs_src(e)), this.c.autoplay()) {
                    var i = this;
                    setTimeout(function() {
                        i.play()
                    }, 0)
                }
            }, t.f.prototype.setCurrentTime = function(e) {
                this.Gd = e, this.b.vjs_setProperty("currentTime", e), t.q.prototype.Pb.call(this)
            }, t.f.prototype.currentTime = function() {
                return this.seeking() ? this.Gd || 0 : this.b.vjs_getProperty("currentTime")
            }, t.f.prototype.currentSrc = function() {
                var e = this.b.vjs_getProperty("currentSrc");
                if (e == j) {
                    var i = this.rtmpConnection(),
                        n = this.rtmpStream();
                    i && n && (e = t.f.de(i, n))
                }
                return e
            }, t.f.prototype.load = function() {
                this.b.vjs_load()
            }, t.f.prototype.poster = function() {
                this.b.vjs_getProperty("poster")
            }, t.f.prototype.setPoster = m(), t.f.prototype.buffered = function() {
                return t.zb(0, this.b.vjs_getProperty("buffered"))
            }, t.f.prototype.Da = q(l), t.f.prototype.oc = q(l);
            var ka = t.f.prototype,
                W = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
                ma = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
                X;
            for (X = 0; X < W.length; X++) la(W[X]), ja();
            for (X = 0; X < ma.length; X++) la(ma[X]);
            if (t.f.isSupported = function() {
                    return 10 <= t.f.version()[0]
                }, t.f.vb = function(e) {
                    return e.type ? (e = e.type.replace(/;.*/, "").toLowerCase(), e in t.f.wd || e in t.f.Pc ? "maybe" : void 0) : ""
                }, t.f.wd = {
                    "video/flv": "FLV",
                    "video/x-flv": "FLV",
                    "video/mp4": "MP4",
                    "video/m4v": "MP4"
                }, t.f.Pc = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, t.f.onReady = function(e) {
                    var i;
                    (i = (e = t.v(e)) && e.parentNode && e.parentNode.player) && (e.player = i, t.f.checkReady(i.n))
                }, t.f.checkReady = function(e) {
                    e.v() && (e.v().vjs_getProperty ? e.Fa() : setTimeout(function() {
                        t.f.checkReady(e)
                    }, 50))
                }, t.f.onEvent = function(e, i) {
                    t.v(e).player.k(i)
                }, t.f.onError = function(e, i) {
                    var n = t.v(e).player,
                        s = "FLASH: " + i;
                    "srcnotfound" == i ? n.error({
                        code: 4,
                        message: s
                    }) : n.error(s)
                }, t.f.version = function() {
                    var t = "0,0,0";
                    try {
                        t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                    } catch (e) {
                        try {
                            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                        } catch (i) {}
                    }
                    return t.split(",")
                }, t.f.nc = function(e, i, n, s, o) {
                    e = t.f.yd(e, n, s, o), e = t.e("div", {
                        innerHTML: e
                    }).childNodes[0], n = i.parentNode, i.parentNode.replaceChild(e, i);
                    var r = n.childNodes[0];
                    return setTimeout(function() {
                        r.style.display = "block"
                    }, 1e3), e
                }, t.f.yd = function(e, i, n, s) {
                    var o = "",
                        r = "",
                        a = "";
                    return i && t.g.Y(i, function(t, e) {
                        o += t + "=" + e + "&amp;"
                    }), n = t.g.z({
                        movie: e,
                        flashvars: o,
                        allowScriptAccess: "always",
                        allowNetworking: "all"
                    }, n), t.g.Y(n, function(t, e) {
                        r += '<param name="' + t + '" value="' + e + '" />'
                    }), s = t.g.z({
                        data: e,
                        width: "100%",
                        height: "100%"
                    }, s), t.g.Y(s, function(t, e) {
                        a += t + '="' + e + '" '
                    }), '<object type="application/x-shockwave-flash"' + a + ">" + r + "</object>"
                }, t.f.de = function(t, e) {
                    return t + "&" + e
                }, t.f.Oc = function(t) {
                    var e = {
                        wb: "",
                        Qb: ""
                    };
                    if (!t) return e;
                    var i, n = t.indexOf("&");
                    return -1 !== n ? i = n + 1 : (n = i = t.lastIndexOf("/") + 1, 0 === n && (n = i = t.length)), e.wb = t.substring(0, n), e.Qb = t.substring(i, t.length), e
                }, t.f.Dd = function(e) {
                    return e in t.f.Pc
                }, t.f.dd = /^rtmp[set]?:\/\//i, t.f.Cd = function(e) {
                    return t.f.dd.test(e)
                }, t.cd = t.a.extend({
                    i: function(e, i, n) {
                        if (t.a.call(this, e, i, n), e.l.sources && 0 !== e.l.sources.length) e.src(e.l.sources);
                        else
                            for (i = 0, n = e.l.techOrder; i < n.length; i++) {
                                var s = t.ba(n[i]),
                                    o = window.videojs[s];
                                if (o && o.isSupported()) {
                                    Q(e, s);
                                    break
                                }
                            }
                    }
                }), t.Player.prototype.textTracks = function() {
                    return this.Ea = this.Ea || []
                }, t.B = t.a.extend({
                    i: function(e, i) {
                        t.a.call(this, e, i), this.U = i.id || "vjs_" + i.kind + "_" + i.language + "_" + t.w++, this.Lc = i.src, this.qd = i["default"] || i.dflt, this.ge = i.title, this.Ua = i.srclang, this.Ed = i.label, this.ca = [], this.tb = [], this.ma = this.na = 0
                    }
                }), s = t.B.prototype, s.K = p("H"), s.src = p("Lc"), s.Ab = p("qd"), s.title = p("ge"), s.language = p("Ua"), s.label = p("Ed"), s.md = p("ca"), s.ed = p("tb"), s.readyState = p("na"), s.mode = p("ma"), s.e = function() {
                    return t.a.prototype.e.call(this, "div", {
                        className: "vjs-" + this.H + " vjs-text-track"
                    })
                }, s.show = function() {
                    oa(this), this.ma = 2, t.a.prototype.show.call(this)
                }, s.W = function() {
                    oa(this), this.ma = 1, t.a.prototype.W.call(this)
                }, s.disable = function() {
                    2 == this.ma && this.W(), this.c.o("timeupdate", t.bind(this, this.update, this.U)), this.c.o("ended", t.bind(this, this.reset, this.U)), this.reset(), this.c.ka("textTrackDisplay").removeChild(this), this.ma = 0
                }, s.load = function() {
                    0 === this.na && (this.na = 1, t.get(this.Lc, t.bind(this, this.Td), t.bind(this, this.Jd)))
                }, s.Jd = function(t) {
                    this.error = t, this.na = 3, this.k("error")
                }, s.Td = function(e) {
                    var i, n;
                    e = e.split("\n");
                    for (var s = "", o = 1, r = e.length; r > o; o++)
                        if (s = t.trim(e[o])) {
                            for (-1 == s.indexOf("-->") ? (i = s, s = t.trim(e[++o])) : i = this.ca.length, i = {
                                    id: i,
                                    index: this.ca.length
                                }, n = s.split(/[\t ]+/), i.startTime = pa(n[0]), i.xa = pa(n[2]), n = []; e[++o] && (s = t.trim(e[o]));) n.push(s);
                            i.text = n.join("<br/>"), this.ca.push(i)
                        }
                    this.na = 2, this.k("loaded")
                }, s.update = function() {
                    if (0 < this.ca.length) {
                        var t = this.c.options().trackTimeOffset || 0,
                            t = this.c.currentTime() + t;
                        if (this.Ob === b || t < this.Ob || this.Wa <= t) {
                            var e, i, n, s, o = this.ca,
                                r = this.c.duration(),
                                a = 0,
                                h = l,
                                c = [];
                            for (t >= this.Wa || this.Wa === b ? s = this.Db !== b ? this.Db : 0 : (h = f, s = this.Jb !== b ? this.Jb : o.length - 1);;) {
                                if (n = o[s], n.xa <= t) a = Math.max(a, n.xa), n.Na && (n.Na = l);
                                else if (t < n.startTime) {
                                    if (r = Math.min(r, n.startTime), n.Na && (n.Na = l), !h) break
                                } else h ? (c.splice(0, 0, n), i === b && (i = s), e = s) : (c.push(n), e === b && (e = s), i = s), r = Math.min(r, n.xa), a = Math.max(a, n.startTime), n.Na = f;
                                if (h) {
                                    if (0 === s) break;
                                    s--
                                } else {
                                    if (s === o.length - 1) break;
                                    s++
                                }
                            }
                            for (this.tb = c, this.Wa = r, this.Ob = a, this.Db = e, this.Jb = i, e = this.tb, i = "", t = 0, o = e.length; o > t; t++) i += '<span class="vjs-tt-cue">' + e[t].text + "</span>";
                            this.b.innerHTML = i, this.k("cuechange")
                        }
                    }
                }, s.reset = function() {
                    this.Wa = 0, this.Ob = this.c.duration(), this.Jb = this.Db = 0
                }, t.Vb = t.B.extend(), t.Vb.prototype.H = "captions", t.cc = t.B.extend(), t.cc.prototype.H = "subtitles", t.Wb = t.B.extend(), t.Wb.prototype.H = "chapters", t.ec = t.a.extend({
                    i: function(e, i, n) {
                        if (t.a.call(this, e, i, n), e.l.tracks && 0 < e.l.tracks.length) {
                            i = this.c, e = e.l.tracks;
                            for (var s = 0; s < e.length; s++) n = e[s], na(i, n.kind, n.label, n.language, n)
                        }
                    }
                }), t.ec.prototype.e = function() {
                    return t.a.prototype.e.call(this, "div", {
                        className: "vjs-text-track-display"
                    })
                }, t.aa = t.I.extend({
                    i: function(e, i) {
                        var n = this.ea = i.track;
                        i.label = n.label(), i.selected = n.Ab(), t.I.call(this, e, i), this.c.d(n.K() + "trackchange", t.bind(this, this.update))
                    }
                }), t.aa.prototype.r = function() {
                    t.I.prototype.r.call(this), Y(this.c, this.ea.U, this.ea.K())
                }, t.aa.prototype.update = function() {
                    this.selected(2 == this.ea.mode())
                }, t.mb = t.aa.extend({
                    i: function(e, i) {
                        i.track = {
                            K: function() {
                                return i.kind
                            },
                            j: e,
                            label: function() {
                                return i.kind + " off"
                            },
                            Ab: q(l),
                            mode: q(l)
                        }, t.aa.call(this, e, i), this.selected(f)
                    }
                }), t.mb.prototype.r = function() {
                    t.aa.prototype.r.call(this), Y(this.c, this.ea.U, this.ea.K())
                }, t.mb.prototype.update = function() {
                    for (var t, e = this.c.textTracks(), i = 0, n = e.length, s = f; n > i; i++) t = e[i], t.K() == this.ea.K() && 2 == t.mode() && (s = l);
                    this.selected(s)
                }, t.V = t.M.extend({
                    i: function(e, i) {
                        t.M.call(this, e, i), 1 >= this.P.length && this.W()
                    }
                }), t.V.prototype.va = function() {
                    var e, i = [];
                    i.push(new t.mb(this.c, {
                        kind: this.H
                    }));
                    for (var n = 0; n < this.c.textTracks().length; n++) e = this.c.textTracks()[n], e.K() === this.H && i.push(new t.aa(this.c, {
                        track: e
                    }));
                    return i
                }, t.Ga = t.V.extend({
                    i: function(e, i, n) {
                        t.V.call(this, e, i, n), this.b.setAttribute("aria-label", "Captions Menu")
                    }
                }), t.Ga.prototype.H = "captions", t.Ga.prototype.ta = "Captions", t.Ga.prototype.className = "vjs-captions-button", t.Ma = t.V.extend({
                    i: function(e, i, n) {
                        t.V.call(this, e, i, n), this.b.setAttribute("aria-label", "Subtitles Menu")
                    }
                }), t.Ma.prototype.H = "subtitles", t.Ma.prototype.ta = "Subtitles", t.Ma.prototype.className = "vjs-subtitles-button", t.Ha = t.V.extend({
                    i: function(e, i, n) {
                        t.V.call(this, e, i, n), this.b.setAttribute("aria-label", "Chapters Menu")
                    }
                }), s = t.Ha.prototype, s.H = "chapters", s.ta = "Chapters", s.className = "vjs-chapters-button", s.va = function() {
                    for (var e, i = [], n = 0; n < this.c.textTracks().length; n++) e = this.c.textTracks()[n], e.K() === this.H && i.push(new t.aa(this.c, {
                        track: e
                    }));
                    return i
                }, s.wa = function() {
                    for (var e, i, n = this.c.textTracks(), s = 0, o = n.length, r = this.P = []; o > s; s++)
                        if (e = n[s], e.K() == this.H) {
                            if (0 !== e.readyState()) {
                                i = e;
                                break
                            }
                            e.load(), e.d("loaded", t.bind(this, this.wa))
                        }
                    if (n = this.Aa, n === b && (n = new t.ha(this.c), n.ja().appendChild(t.e("li", {
                            className: "vjs-menu-title",
                            innerHTML: t.ba(this.H),
                            ee: -1
                        }))), i) {
                        e = i.ca;
                        for (var a, s = 0, o = e.length; o > s; s++) a = e[s], a = new t.gb(this.c, {
                            track: i,
                            cue: a
                        }), r.push(a), n.S(a);
                        this.S(n)
                    }
                    return 0 < this.P.length && this.show(), n
                }, t.gb = t.I.extend({
                    i: function(e, i) {
                        var n = this.ea = i.track,
                            s = this.cue = i.cue,
                            o = e.currentTime();
                        i.label = s.text, i.selected = s.startTime <= o && o < s.xa,
                            t.I.call(this, e, i), n.d("cuechange", t.bind(this, this.update))
                    }
                }), t.gb.prototype.r = function() {
                    t.I.prototype.r.call(this), this.c.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                }, t.gb.prototype.update = function() {
                    var t = this.cue,
                        e = this.c.currentTime();
                    this.selected(t.startTime <= e && e < t.xa)
                }, t.g.z(t.Ia.prototype.l.children, {
                    subtitlesButton: {},
                    captionsButton: {},
                    chaptersButton: {}
                }), "undefined" != typeof window.JSON && "function" === window.JSON.parse) t.JSON = window.JSON;
            else {
                t.JSON = {};
                var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                t.JSON.parse = function(a, c) {
                    function d(t, e) {
                        var i, n, s = t[e];
                        if (s && "object" == typeof s)
                            for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (n = d(s, i), n !== b ? s[i] = n : delete s[i]);
                        return c.call(t, e, s)
                    }
                    var e;
                    if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function(t) {
                            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                        "": e
                    }, "") : e;
                    throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
                }
            }
            t.ic = function() {
                var e, i, n, s;
                e = document.getElementsByTagName("video"), i = document.getElementsByTagName("audio");
                var o = [];
                if (e && 0 < e.length)
                    for (n = 0, s = e.length; s > n; n++) o.push(e[n]);
                if (i && 0 < i.length)
                    for (n = 0, s = i.length; s > n; n++) o.push(i[n]);
                if (o && 0 < o.length)
                    for (n = 0, s = o.length; s > n; n++) {
                        if (!(i = o[n]) || !i.getAttribute) {
                            t.ub();
                            break
                        }
                        i.player === b && (e = i.getAttribute("data-setup"), e !== j && videojs(i))
                    } else t.Tc || t.ub()
            }, t.ub = function() {
                setTimeout(t.ic, 1)
            }, "complete" === document.readyState ? t.Tc = f : t.Q(window, "load", function() {
                t.Tc = f
            }), t.ub(), t.Vd = function(e, i) {
                t.Player.prototype[e] = i
            };
            var qa = this;
            $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Ba), $("videojs.TOUCH_ENABLED", t.dc), $("videojs.cache", t.ua), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.j, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.i, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.e, t.a.prototype.contentEl = t.a.prototype.ja, t.a.prototype.el = t.a.prototype.v, t.a.prototype.addChild = t.a.prototype.S, t.a.prototype.getChild = t.a.prototype.ka, t.a.prototype.getChildById = t.a.prototype.xd, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.vc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.d, t.a.prototype.off = t.a.prototype.o, t.a.prototype.one = t.a.prototype.Q, t.a.prototype.trigger = t.a.prototype.k, t.a.prototype.triggerReady = t.a.prototype.Fa, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.W, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.rd, t.a.prototype.ready = t.a.prototype.J, t.a.prototype.addClass = t.a.prototype.m, t.a.prototype.removeClass = t.a.prototype.p, t.a.prototype.buildCSSClass = t.a.prototype.T, t.a.prototype.localize = t.a.prototype.s, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.pc, t.Player.prototype.exitFullWindow = t.Player.prototype.Cb, t.Player.prototype.preload = t.Player.prototype.Ca, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Da, t.Player.prototype.currentType = t.Player.prototype.nd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, $("videojs.MediaLoader", t.cd), $("videojs.TextTrackDisplay", t.ec), $("videojs.ControlBar", t.Ia), $("videojs.Button", t.t), $("videojs.PlayToggle", t.$b), $("videojs.FullscreenToggle", t.Ja), $("videojs.BigPlayButton", t.fb), $("videojs.LoadingSpinner", t.Yb), $("videojs.CurrentTimeDisplay", t.hb), $("videojs.DurationDisplay", t.ib), $("videojs.TimeDivider", t.fc), $("videojs.RemainingTimeDisplay", t.pb), $("videojs.LiveDisplay", t.Xb), $("videojs.ErrorDisplay", t.jb), $("videojs.Slider", t.R), $("videojs.ProgressControl", t.ob), $("videojs.SeekBar", t.bc), $("videojs.LoadProgressBar", t.lb), $("videojs.PlayProgressBar", t.Zb), $("videojs.SeekHandle", t.La), $("videojs.VolumeControl", t.rb), $("videojs.VolumeBar", t.qb), $("videojs.VolumeLevel", t.gc), $("videojs.VolumeMenuButton", t.ra), $("videojs.VolumeHandle", t.sb), $("videojs.MuteToggle", t.ia), $("videojs.PosterImage", t.Ka), $("videojs.Menu", t.ha), $("videojs.MenuItem", t.I), $("videojs.MenuButton", t.M), $("videojs.PlaybackRateMenuButton", t.ac), t.M.prototype.createItems = t.M.prototype.va, t.V.prototype.createItems = t.V.prototype.va, t.Ha.prototype.createItems = t.Ha.prototype.va, $("videojs.SubtitlesButton", t.Ma), $("videojs.CaptionsButton", t.Ga), $("videojs.ChaptersButton", t.Ha), $("videojs.MediaTechController", t.q), t.q.prototype.featuresVolumeControl = t.q.prototype.re, t.q.prototype.featuresFullscreenResize = t.q.prototype.ne, t.q.prototype.featuresPlaybackRate = t.q.prototype.oe, t.q.prototype.featuresProgressEvents = t.q.prototype.pe, t.q.prototype.featuresTimeupdateEvents = t.q.prototype.qe, t.q.prototype.setPoster = t.q.prototype.Kc, $("videojs.Html5", t.h), t.h.Events = t.h.kb, t.h.isSupported = t.h.isSupported, t.h.canPlaySource = t.h.vb, t.h.patchCanPlayType = t.h.Cc, t.h.unpatchCanPlayType = t.h.ie, t.h.prototype.setCurrentTime = t.h.prototype.Pb, t.h.prototype.setVolume = t.h.prototype.ce, t.h.prototype.setMuted = t.h.prototype.$d, t.h.prototype.setPreload = t.h.prototype.be, t.h.prototype.setAutoplay = t.h.prototype.Xd, t.h.prototype.setLoop = t.h.prototype.Zd, t.h.prototype.enterFullScreen = t.h.prototype.oc, t.h.prototype.exitFullScreen = t.h.prototype.ud, t.h.prototype.playbackRate = t.h.prototype.playbackRate, t.h.prototype.setPlaybackRate = t.h.prototype.ae, $("videojs.Flash", t.f), t.f.isSupported = t.f.isSupported, t.f.canPlaySource = t.f.vb, t.f.onReady = t.f.onReady, t.f.embed = t.f.nc, t.f.version = t.f.version, $("videojs.TextTrack", t.B), t.B.prototype.label = t.B.prototype.label, t.B.prototype.kind = t.B.prototype.K, t.B.prototype.mode = t.B.prototype.mode, t.B.prototype.cues = t.B.prototype.md, t.B.prototype.activeCues = t.B.prototype.ed, $("videojs.CaptionsTrack", t.Vb), $("videojs.SubtitlesTrack", t.cc), $("videojs.ChaptersTrack", t.Wb), $("videojs.autoSetup", t.ic), $("videojs.plugin", t.Vd), $("videojs.createTimeRange", t.zb), $("videojs.util", t.ga), t.ga.mergeOptions = t.ga.Va, t.addLanguage = t.fd
        }(),
        function(t) {
            "use strict";
            "function" == typeof define && define.amd ? define("bigvideo", ["jquery", "videojs", "imagesloaded", "jquery-ui"], t) : t(jQuery, videojs)
        }(function(t, e) {
            t.BigVideo = function(i) {
                function n() {
                    var e = D.container.outerWidth() < t(window).width() ? D.container.outerWidth() : t(window).width(),
                        i = D.container.outerHeight() < t(window).height() ? D.container.outerHeight() : t(window).height(),
                        n = e / i;
                    D.container.is(t("body")) && t("html,body").css("height", t(window).height() > t("body").css("height", "auto").height() ? "100%" : "auto"), v > n ? "video" == d ? (c.width(i * v).height(i), D.shrinkable ? t(g).css("top", -(e / v - i) / 2).css("left", 0).css("height", e / v) : t(g).css("top", 0).css("left", -(i * v - e) / 2).css("height", i), t(g + "_html5_api").css("width", i * v).css("height", i), t(g + "_flash_api").css("width", i * v).css("height", i)) : t("#big-video-image").css({
                        width: "auto",
                        height: i,
                        top: 0,
                        left: -(i * v - e) / 2
                    }) : "video" == d ? (c.width(e).height(e / v), t(g).css("top", -(e / v - i) / 2).css("left", 0).css("height", e / v), t(g + "_html5_api").css("width", t(g + "_html5_api").parent().width() + "px").css("height", "auto"), t(g + "_flash_api").css("width", e).css("height", e / v)) : t("#big-video-image").css({
                        width: e,
                        height: "auto",
                        top: -(e / v - i) / 2,
                        left: 0
                    })
                }

                function s() {
                    var e = '<div id="big-video-control-container"><div id="big-video-control"><a href="#" id="big-video-control-play"></a><div id="big-video-control-middle"><div id="big-video-control-bar"><div id="big-video-control-bound-left"></div><div id="big-video-control-progress"></div><div id="big-video-control-track"></div><div id="big-video-control-bound-right"></div></div></div>	<div id="big-video-control-timer"></div></div></div>';
                    D.container.append(e), t("#big-video-control-container").css("display", "none"), t("#big-video-control-timer").css("display", "none"), t("#big-video-control-track").slider({
                        animate: !0,
                        step: .01,
                        slide: function(e, i) {
                            _ = !0, t("#big-video-control-progress").css("width", i.value - .16 + "%"), c.currentTime(i.value / 100 * c.duration())
                        },
                        stop: function(t, e) {
                            _ = !1, c.currentTime(e.value / 100 * c.duration())
                        }
                    }), t("#big-video-control-bar").click(function(e) {
                        c.currentTime(e.offsetX / t(this).width() * c.duration())
                    }), t("#big-video-control-play").click(function(t) {
                        t.preventDefault(), o("toggle")
                    }), c.on("timeupdate", function() {
                        if (!_ && c.currentTime() / c.duration()) {
                            var e = c.currentTime(),
                                i = Math.floor(e / 60),
                                n = Math.floor(e) - 60 * i;
                            10 > n && (n = "0" + n);
                            var s = c.currentTime() / c.duration() * 100;
                            t("#big-video-control-track").slider("value", s), t("#big-video-control-progress").css("width", s - .16 + "%"), t("#big-video-control-timer").text(i + ":" + n + "/" + b)
                        }
                    })
                }

                function o(e) {
                    var i = e || "toggle";
                    "toggle" == i && (i = k ? "pause" : "play"), "pause" == i ? (c.pause(), t("#big-video-control-play").css("background-position", "-16px"), k = !1) : "play" == i ? (c.play(), t("#big-video-control-play").css("background-position", "0"), k = !0) : "skip" == i && a()
                }

                function r() {
                    c.play(), D.container.off("click", r)
                }

                function a() {
                    u++, u === T.length && (u = 0), l(T[u])
                }

                function l(e) {
                    t(g).css("display", "block"), d = "video", c.src(e), k = !0, C ? (t("#big-video-control-container").css("display", "none"), c.ready(function() {
                        c.volume(0)
                    }), doLoop = !0) : (t("#big-video-control-container").css("display", "block"), c.ready(function() {
                        c.volume(y)
                    }), doLoop = !1), t("#big-video-image").css("display", "none"), t(g).css("display", "block")
                }

                function h(e) {
                    t("#big-video-image").remove(), c.pause(), t(g).css("display", "none"), t("#big-video-control-container").css("display", "none"), d = "image";
                    var i = t('<img id="big-video-image" src=' + e + " />");
                    m.append(i), t("#big-video-image").imagesLoaded(function() {
                        v = t("#big-video-image").width() / t("#big-video-image").height(), n()
                    })
                }
                var c, u, d, p = {
                        useFlashForFirefox: !0,
                        forceAutoplay: !1,
                        controls: !1,
                        doLoop: !1,
                        container: t("body"),
                        shrinkable: !1
                    },
                    f = this,
                    g = "#big-video-vid",
                    m = t('<div id="big-video-wrap"></div>'),
                    v = (t(""), 16 / 9),
                    b = 0,
                    y = .8,
                    w = !1,
                    _ = !1,
                    k = !1,
                    x = !1,
                    C = !1,
                    T = [],
                    D = t.extend({}, p, i);
                f.init = function() {
                    if (!w) {
                        D.container.prepend(m);
                        var i = D.forceAutoplay ? "autoplay" : "";
                        c = t('<video id="' + g.substr(1) + '" class="video-js vjs-default-skin" preload="auto" data-setup="{}" ' + i + " webkit-playsinline></video>"), c.css("position", "absolute"), m.append(c);
                        var o = ["html5", "flash"],
                            l = navigator.userAgent.toLowerCase(),
                            h = -1 != l.indexOf("firefox");
                        D.useFlashForFirefox && h && (o = ["flash", "html5"]), c = e(g.substr(1), {
                            controls: !1,
                            autoplay: !0,
                            preload: "auto",
                            techOrder: o
                        }), D.controls && s(), n(), w = !0, k = !1, D.forceAutoplay && t("body").on("click", r), t("#big-video-vid_flash_api").attr("scale", "noborder").attr("width", "100%").attr("height", "100%"), t(window).on("resize.bigvideo", function() {
                            n()
                        }), c.on("loadedmetadata", function(e) {
                            v = document.getElementById("big-video-vid_flash_api") ? document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth") / document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight") : t("#big-video-vid_html5_api").prop("videoWidth") / t("#big-video-vid_html5_api").prop("videoHeight"), n();
                            var i = Math.round(c.duration()),
                                s = Math.floor(i / 60),
                                o = i - 60 * s;
                            10 > o && (o = "0" + o), b = s + ":" + o
                        }), c.on("ended", function() {
                            D.doLoop && (c.currentTime(0), c.play()), x && a()
                        })
                    }
                }, f.show = function(e, i) {
                    if (void 0 === i && (i = {}), C = i.ambient === !0, (C || i.doLoop) && (D.doLoop = !0), "string" == typeof e) {
                        var n = e.lastIndexOf("?") > 0 ? e.substring(e.lastIndexOf(".") + 1, e.lastIndexOf("?")) : e.substring(e.lastIndexOf(".") + 1);
                        "jpg" == n || "gif" == n || "png" == n ? h(e) : ("mp4" == n || "ogg" == n || "ogv" == n || "webm" == n) && (l(e), i.onShown && i.onShown(), x = !1)
                    } else if (t.isArray(e)) l(e);
                    else {
                        if ("object" != typeof e || !e.src || !e.type) throw "BigVideo.show received invalid input for parameter source";
                        l([e])
                    }
                }, f.showPlaylist = function(e, i) {
                    if (!t.isArray(e)) throw "BigVideo.showPlaylist parameter files accepts only arrays";
                    void 0 === i && (i = {}), C = i.ambient === !0, (C || i.doLoop) && (D.doLoop = !0), T = e, u = 0, this.show(T[u]), i.onShown && i.onShown(), x = !0
                }, f.getPlayer = function() {
                    return c
                }, f.remove = f.dispose = function() {
                    w = !1, m.remove(), t(window).off("resize.bigvideo"), c && (c.off("loadedmetadata"), c.off("ended"), c.dispose())
                }, f.triggerPlayer = function(t) {
                    o(t)
                }
            }
        }),
        function(t) {
            function e(e, i, n, s) {
                var o = e.text().split(i),
                    r = "";
                o.length && (t(o).each(function(t, e) {
                    r += '<span class="' + n + (t + 1) + '">' + e + "</span>" + s
                }), e.empty().append(r))
            }
            var i = {
                init: function() {
                    return this.each(function() {
                        e(t(this), "", "char", "")
                    })
                },
                words: function() {
                    return this.each(function() {
                        e(t(this), " ", "word", " ")
                    })
                },
                lines: function() {
                    return this.each(function() {
                        var i = "eefec303079ad17405c889e092e105b0";
                        e(t(this).children("br").replaceWith(i).end(), i, "line", "")
                    })
                }
            };
            t.fn.lettering = function(e) {
                return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
            }
        }(jQuery), define("lettering", ["jquery"], function() {}),
        function(t) {
            t.fn.fitText = function(e, i) {
                var n = e || 1,
                    s = t.extend({
                        minFontSize: Number.NEGATIVE_INFINITY,
                        maxFontSize: Number.POSITIVE_INFINITY
                    }, i);
                return this.each(function() {
                    var e = t(this),
                        i = function() {
                            e.css("font-size", Math.max(Math.min(e.width() / (10 * n), parseFloat(s.maxFontSize)), parseFloat(s.minFontSize)))
                        };
                    i(), t(window).on("resize.fittext orientationchange.fittext", i)
                })
            }
        }(jQuery), define("fittext", ["jquery", "lettering"], function() {}), $.fn.circleType = function(t) {
            var e = {
                dir: 1,
                position: "relative"
            };
            return "function" != typeof $.fn.lettering ? void console.log("Lettering.js is required") : this.each(function() {
                t && $.extend(e, t);
                var i, n, s = this,
                    o = 180 / Math.PI,
                    r = parseInt($(s).css("font-size"), 10),
                    a = parseInt($(s).css("line-height"), 10) || r,
                    l = s.innerHTML.replace(/^\s+|\s+$/g, "").replace(/\s/g, "&nbsp;");
                s.innerHTML = l, $(s).lettering(), s.style.position = e.position, i = s.getElementsByTagName("span"), n = Math.floor(i.length / 2);
                var h = function() {
                        var t, n, l, h, c, d, p, f, g = 0,
                            m = 0;
                        for (t = 0; t < i.length; t++) g += i[t].offsetWidth;
                        for (n = g / Math.PI / 2 + a, e.fluid && !e.fitText ? e.radius = Math.max(s.offsetWidth / 2, n) : e.radius || (e.radius = n), l = -1 === e.dir ? "center " + (-e.radius + a) / r + "em" : "center " + e.radius / r + "em", h = e.radius - a, t = 0; t < i.length; t++) c = i[t], m += c.offsetWidth / 2 / h * o, c.rot = m, m += c.offsetWidth / 2 / h * o;
                        for (t = 0; t < i.length; t++) c = i[t], d = c.style, p = -m * e.dir / 2 + c.rot * e.dir, f = "rotate(" + p + "deg)", d.position = "absolute", d.left = "50%", d.marginLeft = -(c.offsetWidth / 2) / r + "em", d.webkitTransform = f, d.MozTransform = f, d.OTransform = f, d.msTransform = f, d.transform = f, d.webkitTransformOrigin = l, d.MozTransformOrigin = l, d.OTransformOrigin = l, d.msTransformOrigin = l, d.transformOrigin = l, -1 === e.dir && (d.bottom = 0);
                        e.fitText && ("function" != typeof $.fn.fitText ? console.log("FitText.js is required when using the fitText option") : ($(s).fitText(), $(window).resize(function() {
                            u()
                        }))), u(), "function" == typeof e.callback && e.callback.apply(s)
                    },
                    c = function(t) {
                        var e = document.documentElement,
                            i = t.getBoundingClientRect();
                        return {
                            top: i.top + window.pageYOffset - e.clientTop,
                            left: i.left + window.pageXOffset - e.clientLeft,
                            height: i.height
                        }
                    },
                    u = function() {
                        var t, e = c(i[n]),
                            o = c(i[0]);
                        t = e.top < o.top ? o.top - e.top + o.height : e.top - o.top + o.height, s.style.height = t + "px"
                    };
                e.fluid && !e.fitText && $(window).resize(function() {
                    h()
                }), "complete" !== document.readyState ? (s.style.visibility = "hidden", $(window).load(function() {
                    s.style.visibility = "visible", h()
                })) : h()
            })
        }, define("circletype", ["lettering"], function() {});
    var Froogaloop = function() {
        function t(e) {
            return new t.fn.init(e)
        }

        function e(t, e, i) {
            if (!i.contentWindow.postMessage) return !1;
            var n = i.getAttribute("src").split("?")[0],
                t = JSON.stringify({
                    method: t,
                    value: e
                });
            "//" === n.substr(0, 2) && (n = window.location.protocol + n), i.contentWindow.postMessage(t, n)
        }

        function i(t) {
            var e, i;
            try {
                e = JSON.parse(t.data), i = e.event || e.method
            } catch (n) {}
            if ("ready" == i && !o && (o = !0), t.origin != r) return !1;
            var t = e.value,
                a = e.data,
                l = "" === l ? null : e.player_id;
            return e = l ? s[l][i] : s[i], i = [], e ? (void 0 !== t && i.push(t), a && i.push(a), l && i.push(l), 0 < i.length ? e.apply(null, i) : e.call()) : !1
        }

        function n(t, e, i) {
            i ? (s[i] || (s[i] = {}), s[i][t] = e) : s[t] = e
        }
        var s = {},
            o = !1,
            r = "";
        return t.fn = t.prototype = {
            element: null,
            init: function(t) {
                "string" == typeof t && (t = document.getElementById(t)), this.element = t, t = this.element.getAttribute("src"), "//" === t.substr(0, 2) && (t = window.location.protocol + t);
                for (var t = t.split("/"), e = "", i = 0, n = t.length; n > i && 3 > i; i++) e += t[i], 2 > i && (e += "/");
                return r = e, this
            },
            api: function(t, i) {
                if (!this.element || !t) return !1;
                var s = this.element,
                    o = "" !== s.id ? s.id : null,
                    r = i && i.constructor && i.call && i.apply ? null : i,
                    a = i && i.constructor && i.call && i.apply ? i : null;
                return a && n(t, a, o), e(t, r, s), this
            },
            addEvent: function(t, i) {
                if (!this.element) return !1;
                var s = this.element,
                    r = "" !== s.id ? s.id : null;
                return n(t, i, r), "ready" != t ? e("addEventListener", t, s) : "ready" == t && o && i.call(null, r), this
            },
            removeEvent: function(t) {
                if (!this.element) return !1;
                var i, n = this.element;
                t: {
                    if ((i = "" !== n.id ? n.id : null) && s[i]) {
                        if (!s[i][t]) {
                            i = !1;
                            break t
                        }
                        s[i][t] = null
                    } else {
                        if (!s[t]) {
                            i = !1;
                            break t
                        }
                        s[t] = null
                    }
                    i = !0
                }
                "ready" != t && i && e("removeEventListener", t, n)
            }
        }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i), window.Froogaloop = window.$f = t
    }();
    define("froogaloop", function() {}),
        function(t) {
            "use strict";

            function e(t) {
                var e, i = t ? t.keyCode : event.keyCode;
                if (!c[i]) {
                    c[i] = !0;
                    for (e in a) a[e].keydown(i)
                }
            }

            function i(t) {
                var e = t ? t.keyCode : event.keyCode;
                c[e] = !1
            }

            function n(t) {
                var e;
                for (e in c) c[e] = !1
            }

            function s(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && (t["e" + e + i] = i, t[e + i] = function() {
                    t["e" + e + i](window.event)
                }, t.attachEvent("on" + e, t[e + i]))
            }
            var o, r, a = {},
                l = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    "return": 13,
                    shift: 16,
                    "⇧": 16,
                    control: 17,
                    ctrl: 17,
                    "⌃": 17,
                    alt: 18,
                    option: 18,
                    "⌥": 18,
                    pause: 19,
                    capslock: 20,
                    esc: 27,
                    space: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    L: 37,
                    "←": 37,
                    up: 38,
                    U: 38,
                    "↑": 38,
                    right: 39,
                    R: 39,
                    "→": 39,
                    down: 40,
                    D: 40,
                    "↓": 40,
                    insert: 45,
                    "delete": 46,
                    0: 48,
                    1: 49,
                    2: 50,
                    3: 51,
                    4: 52,
                    5: 53,
                    6: 54,
                    7: 55,
                    8: 56,
                    9: 57,
                    a: 65,
                    b: 66,
                    c: 67,
                    d: 68,
                    e: 69,
                    f: 70,
                    g: 71,
                    h: 72,
                    i: 73,
                    j: 74,
                    k: 75,
                    l: 76,
                    m: 77,
                    n: 78,
                    o: 79,
                    p: 80,
                    q: 81,
                    r: 82,
                    s: 83,
                    t: 84,
                    u: 85,
                    v: 86,
                    w: 87,
                    x: 88,
                    y: 89,
                    z: 90,
                    "⌘": 91,
                    command: 91,
                    kp_0: 96,
                    kp_1: 97,
                    kp_2: 98,
                    kp_3: 99,
                    kp_4: 100,
                    kp_5: 101,
                    kp_6: 102,
                    kp_7: 103,
                    kp_8: 104,
                    kp_9: 105,
                    kp_multiply: 106,
                    kp_plus: 107,
                    kp_minus: 109,
                    kp_decimal: 110,
                    kp_divide: 111,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123,
                    equal: 187,
                    "=": 187,
                    comma: 188,
                    ",": 188,
                    minus: 189,
                    "-": 189,
                    period: 190,
                    ".": 190
                },
                h = function() {},
                c = {};
            r = function(t, e, i, n) {
                var s;
                for (this.str = t, this.next = e ? e : h, this.fail = i ? i : h, this.done = n ? n : h, this.seq = t.split(" "), this.keys = [], s = 0; s < this.seq.length; ++s) this.keys.push(l[this.seq[s]]);
                this.idx = 0
            }, r.prototype.keydown = function(t) {
                var e = this.idx;
                return t !== this.keys[e] ? void(e > 0 && (this.reset(), this.fail(this.str), o.__fail(this.str))) : (this.next(this.str, this.seq[e], e, this.seq), o.__next(this.str, this.seq[e], e, this.seq), void(++this.idx === this.keys.length && (this.done(this.str), o.__done(this.str), this.reset())))
            }, r.prototype.reset = function() {
                this.idx = 0
            }, o = function(t, e) {
                var i, n, s;
                "function" == typeof e ? s = e : null !== e && void 0 !== e && (i = e.next, n = e.fail, s = e.done), a[t] = new r(t, i, n, s)
            }, o.disable = function(t) {
                delete a[t]
            }, s(window, "keydown", e), s(window, "keyup", i), s(window, "blur", n), s(window, "focus", n), o.__next = h, o.next = function(t) {
                o.__next = null === t ? h : t
            }, o.__fail = h, o.fail = function(t) {
                o.__fail = null === t ? h : t
            }, o.__done = h, o.done = function(t) {
                o.__done = null === t ? h : t
            }, o.reset = function(t) {
                var e = a[t];
                return e instanceof r ? void e.reset() : void console.warn("cheet: Unknown sequence: " + t)
            }, t.cheet = o, "function" == typeof define && define.amd ? define("cheet", [], function() {
                return o
            }) : "undefined" != typeof module && null !== module && (module.exports = o)
        }(this),
        function(t, e) {
            "use strict";

            function i() {
                s.READY || (y.determineEventTypes(), b.each(s.gestures, function(t) {
                    _.register(t)
                }), y.onTouch(s.DOCUMENT, f, _.detect), y.onTouch(s.DOCUMENT, g, _.detect), s.READY = !0)
            }

            function n(t, i) {
                Date.now || (Date.now = function() {
                    return (new Date).getTime()
                }), t.utils.each(["on", "off"], function(n) {
                    t.utils[n] = function(t, s, o) {
                        i(t)[n](s, function(t) {
                            var n = i.extend({}, t.originalEvent, t);
                            n.button === e && (n.button = t.which - 1), o.call(this, n)
                        })
                    }
                }), t.Instance.prototype.trigger = function(t, e) {
                    var n = i(this.element);
                    return n.has(e.target).length && (n = i(e.target)), n.trigger({
                        type: t,
                        gesture: e
                    })
                }, i.fn.hammer = function(e) {
                    return this.each(function() {
                        var n = i(this),
                            s = n.data("hammer");
                        s ? s && e && t.utils.extend(s.options, e) : n.data("hammer", new t(this, e || {}))
                    })
                }
            }
            var s = function k(t, e) {
                return new k.Instance(t, e || {})
            };
            s.VERSION = "1.1.3", s.defaults = {
                behavior: {
                    userSelect: "none",
                    touchAction: "pan-y",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            }, s.DOCUMENT = document, s.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, s.HAS_TOUCHEVENTS = "ontouchstart" in t, s.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), s.NO_MOUSEEVENTS = s.HAS_TOUCHEVENTS && s.IS_MOBILE || s.HAS_POINTEREVENTS, s.CALCULATE_INTERVAL = 25;
            var o = {},
                r = s.DIRECTION_DOWN = "down",
                a = s.DIRECTION_LEFT = "left",
                l = s.DIRECTION_UP = "up",
                h = s.DIRECTION_RIGHT = "right",
                c = s.POINTER_MOUSE = "mouse",
                u = s.POINTER_TOUCH = "touch",
                d = s.POINTER_PEN = "pen",
                p = s.EVENT_START = "start",
                f = s.EVENT_MOVE = "move",
                g = s.EVENT_END = "end",
                m = s.EVENT_RELEASE = "release",
                v = s.EVENT_TOUCH = "touch";
            s.READY = !1, s.plugins = s.plugins || {}, s.gestures = s.gestures || {};
            var b = s.utils = {
                extend: function(t, i, n) {
                    for (var s in i) !i.hasOwnProperty(s) || t[s] !== e && n || (t[s] = i[s]);
                    return t
                },
                on: function(t, e, i) {
                    t.addEventListener(e, i, !1)
                },
                off: function(t, e, i) {
                    t.removeEventListener(e, i, !1)
                },
                each: function(t, i, n) {
                    var s, o;
                    if ("forEach" in t) t.forEach(i, n);
                    else if (t.length !== e) {
                        for (s = 0, o = t.length; o > s; s++)
                            if (i.call(n, t[s], s, t) === !1) return
                    } else
                        for (s in t)
                            if (t.hasOwnProperty(s) && i.call(n, t[s], s, t) === !1) return
                },
                inStr: function(t, e) {
                    return t.indexOf(e) > -1
                },
                inArray: function(t, e) {
                    if (t.indexOf) {
                        var i = t.indexOf(e);
                        return -1 === i ? !1 : i
                    }
                    for (var n = 0, s = t.length; s > n; n++)
                        if (t[n] === e) return n;
                    return !1
                },
                toArray: function(t) {
                    return Array.prototype.slice.call(t, 0)
                },
                hasParent: function(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                getCenter: function(t) {
                    var e = [],
                        i = [],
                        n = [],
                        s = [],
                        o = Math.min,
                        r = Math.max;
                    return 1 === t.length ? {
                        pageX: t[0].pageX,
                        pageY: t[0].pageY,
                        clientX: t[0].clientX,
                        clientY: t[0].clientY
                    } : (b.each(t, function(t) {
                        e.push(t.pageX), i.push(t.pageY), n.push(t.clientX), s.push(t.clientY)
                    }), {
                        pageX: (o.apply(Math, e) + r.apply(Math, e)) / 2,
                        pageY: (o.apply(Math, i) + r.apply(Math, i)) / 2,
                        clientX: (o.apply(Math, n) + r.apply(Math, n)) / 2,
                        clientY: (o.apply(Math, s) + r.apply(Math, s)) / 2
                    })
                },
                getVelocity: function(t, e, i) {
                    return {
                        x: Math.abs(e / t) || 0,
                        y: Math.abs(i / t) || 0
                    }
                },
                getAngle: function(t, e) {
                    var i = e.clientX - t.clientX,
                        n = e.clientY - t.clientY;
                    return 180 * Math.atan2(n, i) / Math.PI
                },
                getDirection: function(t, e) {
                    var i = Math.abs(t.clientX - e.clientX),
                        n = Math.abs(t.clientY - e.clientY);
                    return i >= n ? t.clientX - e.clientX > 0 ? a : h : t.clientY - e.clientY > 0 ? l : r
                },
                getDistance: function(t, e) {
                    var i = e.clientX - t.clientX,
                        n = e.clientY - t.clientY;
                    return Math.sqrt(i * i + n * n)
                },
                getScale: function(t, e) {
                    return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
                },
                getRotation: function(t, e) {
                    return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
                },
                isVertical: function(t) {
                    return t == l || t == r
                },
                setPrefixedCss: function(t, e, i, n) {
                    var s = ["", "Webkit", "Moz", "O", "ms"];
                    e = b.toCamelCase(e);
                    for (var o = 0; o < s.length; o++) {
                        var r = e;
                        if (s[o] && (r = s[o] + r.slice(0, 1).toUpperCase() + r.slice(1)), r in t.style) {
                            t.style[r] = (null == n || n) && i || "";
                            break
                        }
                    }
                },
                toggleBehavior: function(t, e, i) {
                    if (e && t && t.style) {
                        b.each(e, function(e, n) {
                            b.setPrefixedCss(t, n, e, i)
                        });
                        var n = i && function() {
                            return !1
                        };
                        "none" == e.userSelect && (t.onselectstart = n), "none" == e.userDrag && (t.ondragstart = n)
                    }
                },
                toCamelCase: function(t) {
                    return t.replace(/[_-]([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                }
            };
            s.Instance = function(t, e) {
                var n = this;
                i(), this.element = t, this.enabled = !0, b.each(e, function(t, i) {
                    delete e[i], e[b.toCamelCase(i)] = t
                }), this.options = b.extend(b.extend({}, s.defaults), e || {}), this.options.behavior && b.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = y.onTouch(t, p, function(t) {
                    n.enabled && t.eventType == p ? _.startDetect(n, t) : t.eventType == v && _.detect(t)
                }), this.eventHandlers = []
            }, s.Instance.prototype = {
                on: function(t, e) {
                    var i = this;
                    return y.on(i.element, t, e, function(t) {
                        i.eventHandlers.push({
                            gesture: t,
                            handler: e
                        })
                    }), i
                },
                off: function(t, e) {
                    var i = this;
                    return y.off(i.element, t, e, function(t) {
                        var n = b.inArray({
                            gesture: t,
                            handler: e
                        });
                        n !== !1 && i.eventHandlers.splice(n, 1)
                    }), i
                },
                trigger: function(t, e) {
                    e || (e = {});
                    var i = s.DOCUMENT.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e;
                    var n = this.element;
                    return b.hasParent(e.target, n) && (n = e.target), n.dispatchEvent(i), this
                },
                enable: function(t) {
                    return this.enabled = t, this
                },
                dispose: function() {
                    var t, e;
                    for (b.toggleBehavior(this.element, this.options.behavior, !1), t = -1; e = this.eventHandlers[++t];) b.off(this.element, e.gesture, e.handler);
                    return this.eventHandlers = [], y.off(this.element, o[p], this.eventStartHandler), null
                }
            };
            var y = s.event = {
                    preventMouseEvents: !1,
                    started: !1,
                    shouldDetect: !1,
                    on: function(t, e, i, n) {
                        var s = e.split(" ");
                        b.each(s, function(e) {
                            b.on(t, e, i), n && n(e)
                        })
                    },
                    off: function(t, e, i, n) {
                        var s = e.split(" ");
                        b.each(s, function(e) {
                            b.off(t, e, i), n && n(e)
                        })
                    },
                    onTouch: function(t, e, i) {
                        var n = this,
                            r = function(o) {
                                var r, a = o.type.toLowerCase(),
                                    l = s.HAS_POINTEREVENTS,
                                    h = b.inStr(a, "mouse");
                                h && n.preventMouseEvents || (h && e == p && 0 === o.button ? (n.preventMouseEvents = !1, n.shouldDetect = !0) : l && e == p ? n.shouldDetect = 1 === o.buttons || w.matchType(u, o) : h || e != p || (n.preventMouseEvents = !0, n.shouldDetect = !0), l && e != g && w.updatePointer(e, o), n.shouldDetect && (r = n.doDetect.call(n, o, e, t, i)), r == g && (n.preventMouseEvents = !1, n.shouldDetect = !1, w.reset()), l && e == g && w.updatePointer(e, o))
                            };
                        return this.on(t, o[e], r), r
                    },
                    doDetect: function(t, e, i, n) {
                        var s = this.getTouchList(t, e),
                            o = s.length,
                            r = e,
                            a = s.trigger,
                            l = o;
                        e == p ? a = v : e == g && (a = m, l = s.length - (t.changedTouches ? t.changedTouches.length : 1)), l > 0 && this.started && (r = f), this.started = !0;
                        var h = this.collectEventData(i, r, s, t);
                        return e != g && n.call(_, h), a && (h.changedLength = l, h.eventType = a, n.call(_, h), h.eventType = r, delete h.changedLength), r == g && (n.call(_, h), this.started = !1), r
                    },
                    determineEventTypes: function() {
                        var e;
                        return e = s.HAS_POINTEREVENTS ? t.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : s.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], o[p] = e[0], o[f] = e[1], o[g] = e[2], o
                    },
                    getTouchList: function(t, e) {
                        if (s.HAS_POINTEREVENTS) return w.getTouchList();
                        if (t.touches) {
                            if (e == f) return t.touches;
                            var i = [],
                                n = [].concat(b.toArray(t.touches), b.toArray(t.changedTouches)),
                                o = [];
                            return b.each(n, function(t) {
                                b.inArray(i, t.identifier) === !1 && o.push(t), i.push(t.identifier)
                            }), o
                        }
                        return t.identifier = 1, [t]
                    },
                    collectEventData: function(t, e, i, n) {
                        var s = u;
                        return b.inStr(n.type, "mouse") || w.matchType(c, n) ? s = c : w.matchType(d, n) && (s = d), {
                            center: b.getCenter(i),
                            timeStamp: Date.now(),
                            target: n.target,
                            touches: i,
                            eventType: e,
                            pointerType: s,
                            srcEvent: n,
                            preventDefault: function() {
                                var t = this.srcEvent;
                                t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault()
                            },
                            stopPropagation: function() {
                                this.srcEvent.stopPropagation()
                            },
                            stopDetect: function() {
                                return _.stopDetect()
                            }
                        }
                    }
                },
                w = s.PointerEvent = {
                    pointers: {},
                    getTouchList: function() {
                        var t = [];
                        return b.each(this.pointers, function(e) {
                            t.push(e)
                        }), t
                    },
                    updatePointer: function(t, e) {
                        t == g || t != g && 1 !== e.buttons ? delete this.pointers[e.pointerId] : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e)
                    },
                    matchType: function(t, e) {
                        if (!e.pointerType) return !1;
                        var i = e.pointerType,
                            n = {};
                        return n[c] = i === (e.MSPOINTER_TYPE_MOUSE || c), n[u] = i === (e.MSPOINTER_TYPE_TOUCH || u), n[d] = i === (e.MSPOINTER_TYPE_PEN || d), n[t]
                    },
                    reset: function() {
                        this.pointers = {}
                    }
                },
                _ = s.detection = {
                    gestures: [],
                    current: null,
                    previous: null,
                    stopped: !1,
                    startDetect: function(t, e) {
                        this.current || (this.stopped = !1, this.current = {
                            inst: t,
                            startEvent: b.extend({}, e),
                            lastEvent: !1,
                            lastCalcEvent: !1,
                            futureCalcEvent: !1,
                            lastCalcData: {},
                            name: ""
                        }, this.detect(e))
                    },
                    detect: function(t) {
                        if (this.current && !this.stopped) {
                            t = this.extendEventData(t);
                            var e = this.current.inst,
                                i = e.options;
                            return b.each(this.gestures, function(n) {
                                !this.stopped && e.enabled && i[n.name] && n.handler.call(n, t, e)
                            }, this), this.current && (this.current.lastEvent = t), t.eventType == g && this.stopDetect(), t
                        }
                    },
                    stopDetect: function() {
                        this.previous = b.extend({}, this.current), this.current = null, this.stopped = !0
                    },
                    getCalculatedData: function(t, e, i, n, o) {
                        var r = this.current,
                            a = !1,
                            l = r.lastCalcEvent,
                            h = r.lastCalcData;
                        l && t.timeStamp - l.timeStamp > s.CALCULATE_INTERVAL && (e = l.center, i = t.timeStamp - l.timeStamp, n = t.center.clientX - l.center.clientX, o = t.center.clientY - l.center.clientY, a = !0), (t.eventType == v || t.eventType == m) && (r.futureCalcEvent = t), (!r.lastCalcEvent || a) && (h.velocity = b.getVelocity(i, n, o), h.angle = b.getAngle(e, t.center), h.direction = b.getDirection(e, t.center), r.lastCalcEvent = r.futureCalcEvent || t, r.futureCalcEvent = t), t.velocityX = h.velocity.x, t.velocityY = h.velocity.y, t.interimAngle = h.angle, t.interimDirection = h.direction
                    },
                    extendEventData: function(t) {
                        var e = this.current,
                            i = e.startEvent,
                            n = e.lastEvent || i;
                        (t.eventType == v || t.eventType == m) && (i.touches = [], b.each(t.touches, function(t) {
                            i.touches.push({
                                clientX: t.clientX,
                                clientY: t.clientY
                            })
                        }));
                        var s = t.timeStamp - i.timeStamp,
                            o = t.center.clientX - i.center.clientX,
                            r = t.center.clientY - i.center.clientY;
                        return this.getCalculatedData(t, n.center, s, o, r), b.extend(t, {
                            startEvent: i,
                            deltaTime: s,
                            deltaX: o,
                            deltaY: r,
                            distance: b.getDistance(i.center, t.center),
                            angle: b.getAngle(i.center, t.center),
                            direction: b.getDirection(i.center, t.center),
                            scale: b.getScale(i.touches, t.touches),
                            rotation: b.getRotation(i.touches, t.touches)
                        }), t
                    },
                    register: function(t) {
                        var i = t.defaults || {};
                        return i[t.name] === e && (i[t.name] = !0), b.extend(s.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) {
                            return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
                        }), this.gestures
                    }
                };
            ! function(t) {
                function e(e, n) {
                    var s = _.current;
                    if (!(n.options.dragMaxTouches > 0 && e.touches.length > n.options.dragMaxTouches)) switch (e.eventType) {
                        case p:
                            i = !1;
                            break;
                        case f:
                            if (e.distance < n.options.dragMinDistance && s.name != t) return;
                            var o = s.startEvent.center;
                            if (s.name != t && (s.name = t, n.options.dragDistanceCorrection && e.distance > 0)) {
                                var c = Math.abs(n.options.dragMinDistance / e.distance);
                                o.pageX += e.deltaX * c, o.pageY += e.deltaY * c, o.clientX += e.deltaX * c, o.clientY += e.deltaY * c, e = _.extendEventData(e)
                            }(s.lastEvent.dragLockToAxis || n.options.dragLockToAxis && n.options.dragLockMinDistance <= e.distance) && (e.dragLockToAxis = !0);
                            var u = s.lastEvent.direction;
                            e.dragLockToAxis && u !== e.direction && (b.isVertical(u) ? e.direction = e.deltaY < 0 ? l : r : e.direction = e.deltaX < 0 ? a : h), i || (n.trigger(t + "start", e), i = !0), n.trigger(t, e), n.trigger(t + e.direction, e);
                            var d = b.isVertical(e.direction);
                            (n.options.dragBlockVertical && d || n.options.dragBlockHorizontal && !d) && e.preventDefault();
                            break;
                        case m:
                            i && e.changedLength <= n.options.dragMaxTouches && (n.trigger(t + "end", e), i = !1);
                            break;
                        case g:
                            i = !1
                    }
                }
                var i = !1;
                s.gestures.Drag = {
                    name: t,
                    index: 50,
                    handler: e,
                    defaults: {
                        dragMinDistance: 10,
                        dragDistanceCorrection: !0,
                        dragMaxTouches: 1,
                        dragBlockHorizontal: !1,
                        dragBlockVertical: !1,
                        dragLockToAxis: !1,
                        dragLockMinDistance: 25
                    }
                }
            }("drag"), s.gestures.Gesture = {
                    name: "gesture",
                    index: 1337,
                    handler: function(t, e) {
                        e.trigger(this.name, t)
                    }
                },
                function(t) {
                    function e(e, n) {
                        var s = n.options,
                            o = _.current;
                        switch (e.eventType) {
                            case p:
                                clearTimeout(i), o.name = t, i = setTimeout(function() {
                                    o && o.name == t && n.trigger(t, e)
                                }, s.holdTimeout);
                                break;
                            case f:
                                e.distance > s.holdThreshold && clearTimeout(i);
                                break;
                            case m:
                                clearTimeout(i)
                        }
                    }
                    var i;
                    s.gestures.Hold = {
                        name: t,
                        index: 10,
                        defaults: {
                            holdTimeout: 500,
                            holdThreshold: 2
                        },
                        handler: e
                    }
                }("hold"), s.gestures.Release = {
                    name: "release",
                    index: 1 / 0,
                    handler: function(t, e) {
                        t.eventType == m && e.trigger(this.name, t)
                    }
                }, s.gestures.Swipe = {
                    name: "swipe",
                    index: 40,
                    defaults: {
                        swipeMinTouches: 1,
                        swipeMaxTouches: 1,
                        swipeVelocityX: .1,
                        swipeVelocityY: .6
                    },
                    handler: function(t, e) {
                        if (t.eventType == m) {
                            var i = t.touches.length,
                                n = e.options;
                            if (i < n.swipeMinTouches || i > n.swipeMaxTouches) return;
                            (t.velocityX > n.swipeVelocityX || t.velocityY > n.swipeVelocityY) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
                        }
                    }
                },
                function(t) {
                    function e(e, n) {
                        var s, o, r = n.options,
                            a = _.current,
                            l = _.previous;
                        switch (e.eventType) {
                            case p:
                                i = !1;
                                break;
                            case f:
                                i = i || e.distance > r.tapMaxDistance;
                                break;
                            case g:
                                !b.inStr(e.srcEvent.type, "cancel") && e.deltaTime < r.tapMaxTime && !i && (s = l && l.lastEvent && e.timeStamp - l.lastEvent.timeStamp, o = !1, l && l.name == t && s && s < r.doubleTapInterval && e.distance < r.doubleTapDistance && (n.trigger("doubletap", e), o = !0), (!o || r.tapAlways) && (a.name = t, n.trigger(a.name, e)))
                        }
                    }
                    var i = !1;
                    s.gestures.Tap = {
                        name: t,
                        index: 100,
                        handler: e,
                        defaults: {
                            tapMaxTime: 250,
                            tapMaxDistance: 10,
                            tapAlways: !0,
                            doubleTapDistance: 20,
                            doubleTapInterval: 300
                        }
                    }
                }("tap"), s.gestures.Touch = {
                    name: "touch",
                    index: -(1 / 0),
                    defaults: {
                        preventDefault: !1,
                        preventMouse: !1
                    },
                    handler: function(t, e) {
                        return e.options.preventMouse && t.pointerType == c ? void t.stopDetect() : (e.options.preventDefault && t.preventDefault(), void(t.eventType == v && e.trigger("touch", t)))
                    }
                },
                function(t) {
                    function e(e, n) {
                        switch (e.eventType) {
                            case p:
                                i = !1;
                                break;
                            case f:
                                if (e.touches.length < 2) return;
                                var s = Math.abs(1 - e.scale),
                                    o = Math.abs(e.rotation);
                                if (s < n.options.transformMinScale && o < n.options.transformMinRotation) return;
                                _.current.name = t, i || (n.trigger(t + "start", e), i = !0), n.trigger(t, e), o > n.options.transformMinRotation && n.trigger("rotate", e), s > n.options.transformMinScale && (n.trigger("pinch", e), n.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
                                break;
                            case m:
                                i && e.changedLength < 2 && (n.trigger(t + "end", e), i = !1)
                        }
                    }
                    var i = !1;
                    s.gestures.Transform = {
                        name: t,
                        index: 45,
                        defaults: {
                            transformMinScale: .01,
                            transformMinRotation: 1
                        },
                        handler: e
                    }
                }("transform"), t.Hammer = s, "undefined" != typeof module && module.exports && (module.exports = s), "function" == typeof define && define.amd ? define("jquery.hammer", ["jquery"], function(e) {
                    return n(t.Hammer, e)
                }) : n(t.Hammer, t.jQuery || t.Zepto)
        }(window),
        function(t, e) {
            e(t._, t.Backbone)
        }(this, function(t, e) {
            var i = e.$;
            if (!i.fn.hammer) throw new Error("Hammer jQuery plugin not loaded.");
            var n = /^(\S+)\s*(.*)$/,
                s = ["hammerEvents", "hammerOptions"],
                o = e.View,
                r = o.prototype.delegateEvents,
                a = o.prototype.undelegateEvents;
            e.View = o.extend({
                constructor: function(e) {
                    return e = e || {}, t.extend(this, t.pick(e, s)), o.apply(this, arguments)
                },
                _hammered: !1,
                undelegateEvents: function() {
                    return this.undelegateHammerEvents(), a.apply(this, arguments)
                },
                undelegateHammerEvents: function() {
                    return this._hammered && this.hammer().off(".hammerEvents" + this.cid), this
                },
                delegateEvents: function() {
                    return r.apply(this, arguments), this.delegateHammerEvents(), this
                },
                delegateHammerEvents: function(i) {
                    var s = t.defaults(t.result(this, "hammerOptions") || {}, e.hammerOptions);
                    if (!i && !(i = t.result(this, "hammerEvents"))) return this;
                    for (var o in i) {
                        var r = i[o];
                        if (t.isFunction(r) || (r = this[i[o]]), r) {
                            var a = o.match(n),
                                l = a[1],
                                h = a[2];
                            l += ".hammerEvents" + this.cid, r = t.bind(r, this), "" === h ? this.hammer(s).on(l, r) : this.hammer(s).on(l, h, r)
                        }
                    }
                    return this
                },
                hammer: function(t) {
                    return this._hammered = !0, this.$el.hammer(t)
                }
            })
        }), define("backbone.hammer", ["jquery", "jquery.hammer", "backbone"], function() {}), require.config({
            baseUrl: "/wp-content/themes/born/js/app",
            paths: {
                underscore: "../lib/underscore",
                backbone: "../lib/backbone",
                jquery: "../lib/jquery",
                "jquery.backstretch": "../lib/jquery.backstretch",
                text: "../lib/text",
                imagesloaded: "../lib/imagesloaded.min",
                backgroundcheck: "../lib/backgroundcheck",
                videojs: "../lib/video.js/dist/video-js/video",
                "jquery-ui": "../lib/jquery-ui/jquery-ui",
                eventie: "../lib/eventie/eventie",
                eventEmitter: "../lib/eventEmitter/EventEmitter",
                bigvideo: "../lib/BigVideo.js/lib/bigvideo",
                fittext: "../lib/FitText.js/jquery.fittext",
                lettering: "../lib/letteringjs/jquery.lettering",
                circletype: "../lib/circletype.js/js/circletype.min",
                "jquery.cookie": "../lib/jquery.cookie/jquery.cookie",
                froogaloop: "../lib/froogaloop.min",
                cheet: "../lib/cheet",
                "jquery.hammer": "../lib/jquery.hammer",
                "backbone.hammer": "../lib/backbone.hammer"
            },
            shim: {
                underscore: {
                    exports: "_"
                },
                backbone: {
                    deps: ["jquery", "underscore"],
                    exports: "Backbone"
                },
                "jquery.backstretch": {
                    deps: ["jquery"]
                },
                imagesloaded: {
                    deps: ["jquery"]
                },
                bigvideo: {
                    deps: ["jquery", "jquery-ui", "imagesloaded", "eventie", "eventEmitter", "videojs"]
                },
                fittext: {
                    deps: ["jquery", "lettering"]
                },
                lettering: {
                    deps: ["jquery"]
                },
                circletype: {
                    deps: ["lettering"]
                },
                "jquery.cookie": {
                    deps: ["jquery"]
                },
                "jquery.hammer": {
                    deps: ["jquery"]
                },
                "backbone.hammer": {
                    deps: ["jquery", "jquery.hammer", "backbone"]
                }
            },
            urlArgs: "bust=" + (new Date).getTime(),
            waitSeconds: 0
        }), window.Born = {}, Born.guid = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }(), window.console = window.console || {
            log: function() {}
        }, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.Born.mobile = !0), Born.Breakpoints = {}, Born.Breakpoints.mobile = 650, Born.Breakpoints.tablet = 980, require(["underscore", "backbone", "jquery", "jquery.backstretch", "jquery.cookie", "imagesloaded", "bigvideo", "lettering", "fittext", "circletype", "froogaloop", "cheet", "jquery.hammer", "backbone.hammer"], function() {
            require(["app"], function() {})
        }), define("../main", function() {}), define("views/loader", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = ["#000"],
                s = i.View.extend({
                    initialize: function(i) {
                        this.parent = i.parent, this.$mask = t('<div class="mask">'), this.$ul = t("<ul>"), this.$mask.append(this.$ul), this.$el.append(this.$mask), t(window).on("resize.loadbar", e.bind(this.resize, this)), this.resize(), this.parent.$el.append(this.$el), this.loadInterval = setInterval(e.bind(this.updateLoader, this), 250), this.$el.addClass("active")
                    },
                    updateLoader: function() {
                        var t = parseInt(this.parent.$el.outerWidth(), 10),
                            e = parseInt(this.$mask.css("width"), 10) / t * 100;
                        e += Math.random() * Math.abs(99 - e), this.$mask.width(e + "%")
                    },
                    finishLoading: function() {
                        var t = this;
                        clearInterval(this.loadInterval), this.loadInterval = void 0, this.$mask.width("100%"), this.$el.removeClass("active"), setTimeout(function() {
                            t.destroy()
                        }, 800)
                    },
                    destroy: function() {
                        this.$el.remove(), t(window).off("resize.loadbar"), console.log("destroyed")
                    },
                    resize: function() {
                        var i = this,
                            s = t(window).width();
                        this.$ul.width(s), n = e.shuffle(n), e.each(n, function(e) {
                            var o = t("<li>");
                            o.css("background", e), o.width(s / n.length), i.$ul.append(o)
                        })
                    }
                }),
                o = i.View.extend({
                    initialize: function() {
                        console.log("initialized preloader view")
                    },
                    startLoading: function() {
                        this.lv ? (this.lv.destroy(), this.lv = new s({
                            parent: this,
                            className: "loader"
                        })) : this.lv = new s({
                            parent: this,
                            className: "loader"
                        })
                    },
                    finishLoading: function() {
                        this.lv.finishLoading()
                    }
                });
            return o
        }), define("helpers/data", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = {
                getPage: function() {
                    this.request && this.request.abort();
                    var e = "/" + i.history.getFragment();
                    return this.request = t.get(e), this.request
                }
            };
            return n
        }), define("views/abstract-header", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                    initialize: function(t) {
                        t = t || {}, this.toggle = t.toggle, this.parent = t.parent, this.$mask = this.$el.find(".mask"), this.$fg = this.$el.find(".fg"), this.$bg = this.$el.find(".bg")
                    },
                    update: function(t) {
                        (!this.parent.visible || this.parent.mobile) && this.checkForSaddle(t)
                    },
                    checkForSaddle: function(i) {
                        var n = t(window).scrollTop();
                        if (0 > n) return void(n = 0);
                        if (n + t(window).height() > t(document).height()) return void(n = t(document).height() - t(window).height());
                        var s = this.$el.offset().left;
                        0 > s && (s = 10);
                        var o = this.$el.offset().top - n;
                        0 > o && (o = 1);
                        var r = this.$el.offset().top - n + this.$el.height() - 2;
                        this.parent.$el.css({
                            "z-index": "-1"
                        });
                        var a = t(document.elementFromPoint(s, o)),
                            l = t(document.elementFromPoint(s, r));
                        this.parent.$el.css({
                            "z-index": ""
                        });
                        var h = this.getNavColorFromEl(a),
                            c = this.getNavColorFromEl(l);
                        a = h.$el, l = c.$el;
                        var u = h.color,
                            d = c.color;
                        if (this.c1 = u, this.c2 = d, u !== d) {
                            var p = a.offset().top - n + a.height(),
                                f = l.offset().top - n,
                                g = e.sortBy([p, f], function(t) {
                                    return Math.abs(t) - n
                                }),
                                m = g.shift();
                            this.toggle ? (this.$bg.find("em").css("background-color", u), this.$fg.find("em").css("background-color", d)) : (this.$bg.css("color", u), this.$fg.css("color", d)), this.saddle = m, this.transition()
                        } else this.setColor(d), this.saddle = void 0
                    },
                    setColor: function(t) {
                        this.toggle ? (this.$fg.find("em").css("background-color", t), this.$bg.find("em").css("background-color", t)) : (this.$bg.css("color", t), this.$fg.css("color", t))
                    },
                    transition: function(t) {
                        if (!t) var e = this.saddle - this.$el.position().top,
                            i = this.$el.height(),
                            t = e / i;
                        var n = 100 * t;
                        this.$mask.css("top", n + "%"), this.$fg.css("top", -n + "%"), t >= 1 && (this.$mask.css("top", "100%"), this.$fg.css("top", "100%"), this.setColor(this.c2))
                    },
                    getElementBehind: function(e, i) {
                        var n = t(document.elementFromPoint(e, i));
                        return n
                    },
                    getNavColorFromEl: function(t) {
                        var e, t;
                        return t.data("nav-color") ? e = t.data("nav-color") : (t = t.closest("[data-nav-color]"), e = t.data("nav-color")), {
                            color: e,
                            $el: t
                        }
                    },
                    saddleScroll: function(t) {
                        var e = t.data("started");
                        e || t.data("started", !0)
                    }
                }),
                s = i.View.extend({
                    initialize: function() {
                        this.$toggle = this.$el.find(".toggle"), this.$logo = this.$el.find(".logo-white"), this.$wrapper = this.$el.find(".wrapper").first(), this.$nav = this.$el.find("nav"), this.visible = !1, this.tpvs = [], this.tpvs.push(new n({
                            el: this.$toggle,
                            parent: this,
                            toggle: !0
                        })), this.tpvs.push(new n({
                            el: this.$logo,
                            parent: this
                        })), this.resize(), this.onScroll(), this.update()
                    },
                    onScroll: function(e) {
                        if (e ? this.e = e : e = this.e, this.lastScrollTop) {
                            var i = t(window).scrollTop(),
                                n = this.lastScrollTop - i;
                            "down" === this.dir && 2 > n || "up" === this.dir && 1 > n ? this.dir = "down" : this.dir = "up", this.lastScrollTop = i
                        } else this.lastScrollTop = t(window).scrollTop(), this.dir = "down";
                        this.updateTwoPanes(this.dir), this.shrinkOrExpand(e)
                    },
                    updateTwoPanes: function(t) {
                        e.each(this.tpvs, function(e) {
                            e.update(t)
                        })
                    },
                    toggleSectionHeader: function(e) {
                        if (this.$sectionHeader && this.$sectionHeader[0]) {
                            var i = t(window).scrollTop();
                            if (0 >= i) return void(this.$sectionHeader && (this.$sectionHeader.stop(!0).removeClass("fixed").show(), this.$sectionHeader.css("opacity", "1")));
                            if (!(i + t(window).height() >= t(document).height()))
                                if ("up" === e) {
                                    if (t("body").hasClass("video")) return;
                                    this.hasSectionHeader && !this.sectionHeaderVisible && this.showSectionHeader()
                                } else this.hasSectionHeader && this.sectionHeaderVisible && this.hideSectionHeader()
                        }
                    },
                    showSectionHeader: function() {
                        this.$sectionHeader.hide().addClass("fixed").stop(!0).fadeIn(150), this.sectionHeaderVisible = !0, e.delay(e.bind(this.updateTwoPanes, this, "up"), 200)
                    },
                    hideSectionHeader: function() {
                        this.$sectionHeader.stop(!0).fadeOut(150, function() {
                            t(this).removeClass("fixed").show()
                        }), this.sectionHeaderVisible = !1, e.delay(e.bind(this.updateTwoPanes, this, "down"), 200)
                    },
                    shrinkOrExpand: function(e) {
                        t(window).scrollTop()
                    },
                    changeToggleColor: function(t) {},
                    changeLogoColor: function(t) {},
                    resize: function(e) {
                        this.height = this.$logo.height(), e && t(window).scroll()
                    },
                    reset: function(i) {
                        this.$sectionHeader && (this.$sectionHeader = void 0);
                        var n = this;
                        e.defer(function() {
                            n.$el.removeClass("in-view")
                        }), this.visible && this.hide(), this.onScroll(i), t("nav li a.active").removeClass("active")
                    },
                    update: function() {
                        var i = this;
                        e.defer(function() {
                            i.$el.addClass("in-view")
                        }), this.$el.find("nav li a").each(function() {
                            var e = t(this),
                                i = e.attr("href").replace(/\//g, ""),
                                n = window.location.pathname.replace(/\//g, "");
                            i === n && e.addClass("active")
                        }), this.hasSectionHeader = t("header.section > div, header.section > ul").children().length, this.hasSectionHeader && (this.$sectionHeader = t("header.section"))
                    },
                    show: function() {
                        this.$el.addClass("active"), t("header.section")[0] && t("header.section").removeClass("active"), this.visible = !0
                    },
                    hide: function() {
                        this.$el.removeClass("active").addClass("out");
                        var e = this;
                        setTimeout(function() {
                            e.$el.removeClass("out"), e.visible = !1, t("header.section")[0] && t("header.section").addClass("active")
                        }, 900)
                    },
                    toggle: function(t) {
                        this.visible ? this.hide() : this.show()
                    },
                    destroy: function() {
                        this.visible && this.hide()
                    },
                    events: {
                        "click span.toggle": "toggle"
                    }
                });
            return s
        }), define("views/desktop-header", ["jquery", "underscore", "backbone", "views/abstract-header"], function(t, e, i, n) {
            var s = n.extend({
                initialize: function() {
                    n.prototype.initialize.call(this), t("header.section")[0] && t("header.section").addClass("active")
                }
            });
            return s
        }), define("views/mobile-header", ["jquery", "underscore", "backbone", "views/abstract-header"], function(t, e, i, n) {
            var s = n.extend({
                initialize: function() {
                    n.prototype.initialize.call(this);
                    var e = this;
                    this.mobile = !0, t("body").on("click", ".sub-nav a", function() {
                        e.hide()
                    })
                },
                resize: function() {
                    var e = t(window).height();
                    this.$nav.height(e)
                },
                appendSub: function() {
                    t("header.section").removeClass("active"), setTimeout(function() {
                        t("header.section").removeClass("active")
                    }, 500), t("header.mobile nav .sub-nav").remove();
                    var e = t("header.section > div.wrapper, header.section .mobile-nav-items").find("li").not(".desktop-only").clone(),
                        i = t(".global.mobile nav li a").filter(".active"),
                        n = i.text().toLowerCase();
                    e.addClass("sub-nav"), e.each(function() {
                        var e = t(this).find("a").attr("href");
                        "#" === e[0] && t(this).find("a").attr("href", "/contact/?city=" + e.slice(1))
                    }), i.closest("ul").addClass(n), i.parent().after(e)
                },
                show: function() {
                    this.$el.addClass("active"), t("body").addClass("menu-open"), this.visible = !0
                },
                hide: function() {
                    if (this.$el.hasClass("active")) {
                        this.$el.removeClass("active").addClass("out"), t("body").removeClass("menu-open");
                        var e = this;
                        setTimeout(function() {
                            e.visible = !1, e.$el.removeClass("out")
                        }, 900)
                    }
                },
                update: function() {
                    var i = this;
                    e.defer(function() {
                        i.$el.addClass("in-view")
                    }), this.$el.find("nav li a").each(function() {
                        var e = t(this),
                            i = e.attr("href").replace(/\//g, ""),
                            n = window.location.pathname.replace(/\//g, "");
                        i === n && e.addClass("active")
                    }), t("header.section")[0] && this.appendSub();
                    var i = this;
                    t("section#content").on("click", function() {
                        i.hide()
                    }), this.hasSectionHeader = t("header.section > div, header.section > ul").children().length, this.hasSectionHeader && (this.$sectionHeader = t("header.section"))
                }
            });
            return s
        }), define("views/header", ["jquery", "underscore", "backbone", "views/desktop-header", "views/mobile-header"], function(t, e, i, n, s) {
            var o = i.View.extend({
                initialize: function() {
                    console.log("initialized header view"), this.$desktop = this.$el.find("header.global.desktop"), this.$mobile = this.$el.find("header.global.mobile"), t(window).on("scroll.header", e.throttle(e.bind(this.onScroll, this), 15)), t(window).on("resize.header", e.throttle(e.bind(this.resize, this), 100)), window.Born.Events.on("page-rendered", e.bind(this.onScroll, this)), this.resize()
                },
                resize: function() {
                    var e = t(window).width(),
                        i = (void 0 === this.state, this);
                    e > Born.Breakpoints.tablet && ("desktop" !== this.state || this.first) ? (this.switchView(n, this.$desktop, "desktop"), setTimeout(function() {
                        i.$mobile.removeClass("show"), i.$desktop.addClass("show")
                    }, 1e3)) : e <= Born.Breakpoints.tablet && ("mobile" !== this.state || this.first) && (this.switchView(s, this.$mobile, "mobile"), setTimeout(function() {
                        i.$desktop.removeClass("show"), i.$mobile.addClass("show")
                    }, 1e3)), this.av && this.av.resize && this.av.resize()
                },
                onScroll: function(t) {
                    this.av && this.av.onScroll && this.av.onScroll(t)
                },
                update: function() {
                    this.av && this.av.update && this.av.update()
                },
                reset: function() {
                    this.av && this.av.reset && this.av.reset()
                },
                switchView: function(t, e, i) {
                    this.av && this.av.destroy(), this.state = i, this.av = new t({
                        el: e[0]
                    })
                },
                destroy: function() {
                    this.av.destroy()
                }
            });
            return o
        }), define("views/footer", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    console.log("initializing footer view");
                    var e = t("#content");
                    this.update(e)
                },
                update: function(t) {
                    var e = t.data("footer-class") || "",
                        i = this;
                    setTimeout(function() {
                        i.$el.find(".s").addClass("scroll-in-view")
                    }, 0), this.changeClass(e), this.$el.fadeIn(150)
                },
                reset: function() {
                    this.$el.fadeOut(150)
                },
                changeClass: function(t) {
                    t ? (this.$el.removeClass(this.className), this.className = t, this.$el.addClass(t)) : this.changeClass("black")
                },
                events: {
                    "click .address ul": function(e) {
                        var i = t(e.currentTarget).data("city");
                        console.log(i), Born.router.navigate("/contact?city=" + i, {
                            trigger: !0
                        })
                    }
                }
            });
            return n
        }), define("views/tweet", ["jquery", "underscore", "backbone"], function(t, e, i) {
            "use strict";
            var n = i.View.extend({
                initialize: function() {
                    console.log("initialized tweet view"), this.data = this.$el.data("tweet"), this.$content = this.$el.find(".tweet-content"), this.$user = this.$el.find(".user"), this.$logo = this.$el.find(".bird-link"), this.resizeEvent = "resize.tweet-" + window.Born.guid(), t(window).on(this.resizeEvent, e.bind(this.resize, this)), this.render(), this.resize()
                },
                resize: function() {
                    console.log("resizing");
                    var t;
                    if (t = this.$el.prev(), t[0] || (t = this.$el.next()), t[0]) {
                        var e = t.height();
                        this.$content.fitText(1.5, {
                            maxFontSize: "26px",
                            minFontSize: "16px"
                        }), this.$el.height(e)
                    }
                },
                render: function() {
                    if (this.data) {
                        this.$user.find("a").attr("href", "https://twitter.com/" + this.data.user.screen_name), this.$logo.attr("href", "https://twitter.com/" + this.data.user.screen_name);
                        var e = t("<div>").html(this.linkify_entities(this.data));
                        e.find("a").each(function() {
                            t(this).addClass("outside-link")
                        }), this.$el.find(".tweet-content").html(e.html())
                    }
                },
                destroy: function() {},
                escapeHTML: function(e) {
                    return e ? t("<div/>").text(e).html() : e
                },
                linkify_entities: function(i) {
                    if (!i.entities) return this.escapeHTML(i.text);
                    var n = {},
                        s = this;
                    t.each(i.entities.urls, function(t, e) {
                        n[e.indices[0]] = [e.indices[1], function(t) {
                            return "<a target='_blank' href='" + s.escapeHTML(e.url) + "'>" + s.escapeHTML(t) + "</a>"
                        }]
                    }), t.each(i.entities.hashtags, function(t, e) {
                        n[e.indices[0]] = [e.indices[1], function(t) {
                            return "<a target='_blank' href='http://twitter.com/search?q=" + escape("#" + e.text) + "'>" + s.escapeHTML(t) + "</a>"
                        }]
                    }), t.each(i.entities.user_mentions, function(t, e) {
                        n[e.indices[0]] = [e.indices[1], function(t) {
                            return "<a target='_blank' class='handle' title='" + s.escapeHTML(e.name) + "' href='http://twitter.com/" + s.escapeHTML(e.screen_name) + "'>" + s.escapeHTML(t) + "</a>"
                        }]
                    });
                    var o = "",
                        r = 0,
                        a = 0;
                    if (e.isEmpty(n)) return this.escapeHTML(i.text);
                    for (a = 0; a < i.text.length; ++a) {
                        var l = n[a];
                        if (l) {
                            var h = l[0],
                                c = l[1];
                            a > r && (o += this.escapeHTML(i.text.substring(r, a))), o += c(i.text.substring(a, h)), a = h - 1, r = h
                        }
                    }
                    return a > r && (o += this.escapeHTML(i.text.substring(r, a))), o
                }
            });
            return n
        }), define("views/tweet-slider", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    this.$tweets = this.$el.find(".tweet"), this.$nav = this.$el.find(".nav"), this.max = this.$tweets.length - 1, this.idx = 0, this.resize(), this.buildNav(), this["goto"](this.idx), this.startInterval(), this.resizeEvent = "resize.tweet-slide" + window.Born.guid(), t(window).on(this.resizeEvent, e.bind(this.resize, this))
                },
                resize: function() {
                    this.center()
                },
                center: function() {
                    this.$tweets.each(function() {
                        var e = t(this).height();
                        t(this).css({
                            "margin-top": -e / 2 - 500
                        })
                    })
                },
                "goto": function(t) {
                    t > this.max && (t = 0), 0 > t && (t = this.max), this.idx = t, this.$tweets.removeClass("active"), this.$nav.find("li").removeClass("active"), this.activate()
                },
                activate: function() {
                    t(this.$tweets[this.idx]).addClass("active"), t(this.$nav.find("li")[this.idx]).addClass("active")
                },
                buildNav: function() {
                    for (var t = 0; t < this.max + 1; t++) this.$nav.append("<li></li>")
                },
                destroy: function() {
                    t(window).off(this.resizeEvent)
                },
                startInterval: function() {
                    this.interval = setInterval(e.bind(function() {
                        this["goto"](this.idx + 1)
                    }, this), 1e4)
                },
                stopInterval: function() {
                    clearInterval(this.interval)
                },
                events: {
                    "click .nav li": function(e) {
                        var i = t(e.currentTarget).index();
                        this["goto"](i)
                    },
                    mouseenter: function(t) {
                        this.stopInterval()
                    },
                    mouseleave: function(t) {
                        this.startInterval()
                    }
                }
            });
            return n
        }), define("views/global", ["jquery", "underscore", "backbone", "views/tweet", "views/tweet-slider"], function(t, e, i, n, s) {
            var o = i.View.extend({
                    initialize: function(t) {
                        t = t || {}, this.guid = Born.guid(), this.disablePhone = t.disablePhone || !1
                    },
                    hoverOff: function(e) {
                        var i = this;
                        t(i.$el).removeClass("hover"), t("body").off("click." + i.guid)
                    },
                    hoverOn: function(i) {
                        t(i.currentTarget).addClass("hover"), t("body").trigger("click"), t("body").on("click." + this.guid, e.bind(this.hoverOff, this)), i.preventDefault(), i.stopPropagation()
                    },
                    events: {
                        click: function(e) {
                            this.disablePhone && t(window).width() < window.Born.Breakpoints.mobile || (t(e.currentTarget).hasClass("hover") ? this.hoverOff(e) : this.hoverOn(e))
                        }
                    }
                }),
                r = i.View.extend({
                    initialize: function() {
                        this.$title = this.$el.find(".content h4"), this.resizeEvent = "resize.project-" + window.Born.guid(), t(window).on(this.resizeEvent, e.bind(this.resize, this)), this.resize()
                    },
                    resize: function() {
                        this.$title.fitText(.85)
                    },
                    destroy: function() {
                        t(window).off(this.resizeEvent)
                    }
                }),
                a = i.View.extend({
                    initialize: function() {
                        this.guid = window.Born.guid(), console.log(this), t(window).on("resize.featured-" + this.guid, e.bind(this.resize, this)), this.toggleNews(), this.resize()
                    },
                    toggleNews: function() {
                        t(document).on("click", ".blog-click", function(e) {
                            t("#news-section").fadeOut(1e3), t("#blog-section").fadeIn(1400), t(".blog-click").addClass("active-section"), t(".news-click").removeClass("active-section"), t("#blog-section").resize()
                        }), t(document).on("click", ".news-click", function(e) {
                            t("#blog-section").fadeOut(1e3), t("#news-section").fadeIn(1400), t(".news-click").addClass("active-section"), t(".blog-click").removeClass("active-section"), t("#news-section").resize()
                        })
                    },
                    resize: function() {
                        this.$el.children().filter("li").each(function() {
                            var e = t(this);
                            e.css("height", ""), e.height(e.height())
                        })
                    },
                    destroy: function() {
                        t(window).off("resize.featured-" + this.guid)
                    }
                }),
                l = i.View.extend({
                    initialize: function() {
                        this.views = [], window.Born.Events.on("page-rendered", e.bind(this.onRender, this))
                    },
                    destroyViews: function() {
                        e.each(this.views, function(t) {
                            t.destroy && t.destroy()
                        })
                    },
                    onRender: function() {
                        var e = this;
                        this.destroyViews(), this.views = [], this.$el.find(".tweet").each(function() {
                            e.views.push(new n({
                                el: this
                            }))
                        }), this.$el.find(".tweet-slider").each(function() {
                            e.views.push(new s({
                                el: this
                            }))
                        }), window.Born.mobile && t(".two-state").each(function() {
                            t(this).hasClass("disable-phone") ? e.views.push(new o({
                                el: this,
                                disablePhone: !0
                            })) : e.views.push(new o({
                                el: this
                            }))
                        }), this.$el.find(".projects .project").each(function() {
                            e.views.push(new r({
                                el: this
                            }))
                        }), this.$el.find("ul.featured").each(function() {
                            e.views.push(new a({
                                el: this
                            }))
                        }), this.$el.find("ul.featureddd").each(function() {
                            e.views.push(new a({
                                el: this
                            }))
                        })
                    },
                    onScroll: function() {
                        var e = 0,
                            i = t(window).scrollTop();
                        this.$el.find(".scroll-in-view").each(function() {
                            var n = t(this);
                            n.offset().top + 11 < i + t(window).height() && setTimeout(function() {
                                n.addClass("visible"), setTimeout(function() {
                                    n.removeClass("visible").removeClass("scroll-in-view")
                                }, 500)
                            }, 150 + 50 * e++)
                        })
                    },
                    replaceImages: function() {
                        t("#content img").each(function() {
                            var e = t(this),
                                i = (e.attr("src"), e.data("hires"));
                            i && e.attr("src", i)
                        })
                    }
                });
            return l
        }), define("views/app", ["jquery", "underscore", "backbone", "views/header", "views/footer", "views/global", "views/loader"], function(t, e, i, n, s, o, r) {
            var a = {};
            a.route = function(t) {
                var e = this,
                    i = t.data("view");
                i && require(["views/" + i], function(i) {
                    e.cv = new i({
                        el: t
                    })
                })
            }, window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
            var l = i.View.extend({
                initialize: function() {
                    console.log("initialized app view"), t(window).on("scroll.app", e.throttle(e.bind(this.onScroll, this), 50)), window.Born.Events.on("page-rendered", e.bind(this.onRender, this)), this.router = a, this.router.route(this.$el.find("#content")), this.globalView = new o({
                        el: this.$el
                    }), this.hv = new n({
                        el: this.$el
                    }), this.fv = new s({
                        el: this.$el.find("footer.global")
                    }), this.loader = new r({
                        el: this.$el.find("#app-loader")
                    })
                },
                onScroll: function(t) {
                    this.globalView.onScroll()
                },
                onRender: function(i) {
                    var n = this;
                    e.defer(function() {
                        n.$el.removeClass("loading"), n.$el.removeClass("loadinggggg")
                    }), t(window).scroll(), setTimeout(function() {
                        t(window).scroll()
                    }, 500);
                    var s = t("#content").find("script");
                    s.each(function() {
                        var e = t(this);
                        (0, eval)(e.html())
                    })
                },
                changePage: function() {
                    var e = window.location.pathname.split("/");
                    console.log(e), console.log(e[1]), "work" == e[1] || "content-production" == e[1] || "creative-commerce" == e[1] ? this.$el.addClass("loadinggggg") : this.$el.addClass("loading"), this.hv.reset(), this.fv.reset(), t("html, body").animate({
                        scrollTop: 0
                    }, 1e3), this.loader.startLoading(), t(window).scroll(), t(window).trigger("modal-hide")
                },
                render: function(t) {
                    return t[0] ? (this.loader.finishLoading(), this.$el.find("#content").replaceWith(t), this.router.cv && this.router.cv.destroy(), this.router.route(t), this.hv.update(), void this.fv.update(t)) : void console.log("no content")
                },
                events: {
                    "click a:not(a.outside-link)": function(e) {
                        if ("_blank" !== t(e.currentTarget).attr("target")) {
                            var i = e.currentTarget.href.replace(window.location.origin, "").replace("https://" + window.location.host, "");
                            window.Born.router.navigate(i, {
                                trigger: !0
                            }), e.preventDefault()
                        }
                    }
                }
            });
            return l
        }), define("text", ["module"], function(t) {
            "use strict";
            var e, i, n, s, o, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
                a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
                l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
                h = "undefined" != typeof location && location.href,
                c = h && location.protocol && location.protocol.replace(/\:/, ""),
                u = h && location.hostname,
                d = h && (location.port || void 0),
                p = {},
                f = t.config && t.config() || {};
            return e = {
                version: "2.0.10",
                strip: function(t) {
                    if (t) {
                        t = t.replace(a, "");
                        var e = t.match(l);
                        e && (t = e[1])
                    } else t = "";
                    return t
                },
                jsEscape: function(t) {
                    return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
                },
                createXhr: f.createXhr || function() {
                    var t, e, i;
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                    if ("undefined" != typeof ActiveXObject)
                        for (e = 0; 3 > e; e += 1) {
                            i = r[e];
                            try {
                                t = new ActiveXObject(i)
                            } catch (n) {}
                            if (t) {
                                r = [i];
                                break
                            }
                        }
                    return t
                },
                parseName: function(t) {
                    var e, i, n, s = !1,
                        o = t.indexOf("."),
                        r = 0 === t.indexOf("./") || 0 === t.indexOf("../");
                    return -1 !== o && (!r || o > 1) ? (e = t.substring(0, o), i = t.substring(o + 1, t.length)) : e = t, n = i || e, o = n.indexOf("!"), -1 !== o && (s = "strip" === n.substring(o + 1), n = n.substring(0, o), i ? i = n : e = n), {
                        moduleName: e,
                        ext: i,
                        strip: s
                    }
                },
                xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
                useXhr: function(t, i, n, s) {
                    var o, r, a, l = e.xdRegExp.exec(t);
                    return l ? (o = l[2], r = l[3], r = r.split(":"), a = r[1], r = r[0], !(o && o !== i || r && r.toLowerCase() !== n.toLowerCase() || (a || r) && a !== s)) : !0
                },
                finishLoad: function(t, i, n, s) {
                    n = i ? e.strip(n) : n, f.isBuild && (p[t] = n), s(n)
                },
                load: function(t, i, n, s) {
                    if (s.isBuild && !s.inlineText) return void n();
                    f.isBuild = s.isBuild;
                    var o = e.parseName(t),
                        r = o.moduleName + (o.ext ? "." + o.ext : ""),
                        a = i.toUrl(r),
                        l = f.useXhr || e.useXhr;
                    return 0 === a.indexOf("empty:") ? void n() : void(!h || l(a, c, u, d) ? e.get(a, function(i) {
                        e.finishLoad(t, o.strip, i, n)
                    }, function(t) {
                        n.error && n.error(t)
                    }) : i([r], function(t) {
                        e.finishLoad(o.moduleName + "." + o.ext, o.strip, t, n)
                    }))
                },
                write: function(t, i, n, s) {
                    if (p.hasOwnProperty(i)) {
                        var o = e.jsEscape(p[i]);
                        n.asModule(t + "!" + i, "define(function () { return '" + o + "';});\n")
                    }
                },
                writeFile: function(t, i, n, s, o) {
                    var r = e.parseName(i),
                        a = r.ext ? "." + r.ext : "",
                        l = r.moduleName + a,
                        h = n.toUrl(r.moduleName + a) + ".js";
                    e.load(l, n, function(i) {
                        var n = function(t) {
                            return s(h, t)
                        };
                        n.asModule = function(t, e) {
                            return s.asModule(t, h, e)
                        }, e.write(t, l, n, o)
                    }, o)
                }
            }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (i = require.nodeRequire("fs"), e.get = function(t, e, n) {
                try {
                    var s = i.readFileSync(t, "utf8");
                    0 === s.indexOf("\ufeff") && (s = s.substring(1)), e(s)
                } catch (o) {
                    n(o)
                }
            }) : "xhr" === f.env || !f.env && e.createXhr() ? e.get = function(t, i, n, s) {
                var o, r = e.createXhr();
                if (r.open("GET", t, !0), s)
                    for (o in s) s.hasOwnProperty(o) && r.setRequestHeader(o.toLowerCase(), s[o]);
                f.onXhr && f.onXhr(r, t), r.onreadystatechange = function(e) {
                    var s, o;
                    4 === r.readyState && (s = r.status, s > 399 && 600 > s ? (o = new Error(t + " HTTP status: " + s), o.xhr = r, n(o)) : i(r.responseText), f.onXhrComplete && f.onXhrComplete(r, t))
                }, r.send(null)
            } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function(t, e) {
                var i, n, s = "utf-8",
                    o = new java.io.File(t),
                    r = java.lang.System.getProperty("line.separator"),
                    a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), s)),
                    l = "";
                try {
                    for (i = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && i.append(n); null !== (n = a.readLine());) i.append(r), i.append(n);
                    l = String(i.toString())
                } finally {
                    a.close()
                }
                e(l)
            } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (n = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in n, e.get = function(t, e) {
                var i, r, a, l = {};
                o && (t = t.replace(/\//g, "\\")), a = new FileUtils.File(t);
                try {
                    i = n["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), i.init(a, 1, 0, !1), r = n["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), r.init(i, "utf-8", i.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), r.readString(i.available(), l), r.close(), i.close(), e(l.value)
                } catch (h) {
                    throw new Error((a && a.path || "") + ": " + h)
                }
            }), e
        }), define("text!templates/modal/modal.html", [], function() {
            return '<div class="content">\r\n  <!-- Dynamically Insert Content Here -->\r\n  <%= data.content %>\r\n  <button class=\'close\'></button>\r\n</div>\r\n<div class="overlay"></div>'
        }), define("views/modal", ["jquery", "underscore", "backbone", "text!templates/modal/modal.html"], function(t, e, i, n) {
            var s = i.View.extend({
                className: "modal",
                initialize: function(i) {
                    i = i || {}, this.content = i.content, this.preloader = i.preloader, this.modalClass = i.modalClass || "", this.hideModalEvent = "modal-hide." + window.Born.guid(), this.keydownEvent = "keydown.modal-" + window.Born.guid(), this.resizeEvent = "resize.modal-" + window.Born.guid(), this.scrollTop = t(window).scrollTop();
                    var n = this;
                    t("body").on(this.keydownEvent, function(t) {
                        27 === t.keyCode && n.hide()
                    }), t(window).on(this.resizeEvent, e.bind(this.resize, this)), t(window).on(this.hideModalEvent, e.bind(this.hide, this))
                },
                resize: function() {
                    if (!this.preloader) {
                        var e = this.$el.find(".content").css({
                                height: "",
                                width: ""
                            }),
                            i = 10,
                            n = (e.height(), t(window).width());
                        n > Born.Breakpoints.mobile ? (i = 80, console.log(this.scrollTop), t("html, body").scrollTop(this.scrollTop)) : t("html, body").scrollTop(0);
                        var s = e.height(),
                            o = t(window).height();
                        s > o && e.css({
                            overflow: "scroll",
                            height: o - i
                        })
                    }
                },
                render: function() {
                    var i = e.template(n, {
                        data: {
                            content: this.content
                        }
                    });
                    return this.$el.append(i).hide().addClass(this.modalClass), t("body").append(this.$el), this.resize(), this
                },
                show: function(t) {
                    if (!this.busy) {
                        var i = this;
                        return this.busy = !0, this.$el.imagesLoaded().always(function() {
                            i.$el.fadeIn({
                                duration: 450,
                                complete: function() {
                                    i.busy = void 0, e.isFunction(t) && i.$el.imagesLoaded().always(t), i.resize(), i.settings || i.$el.find(".content").animate({
                                        opacity: 1
                                    })
                                }
                            })
                        }), this
                    }
                },
                hide: function(e, i) {
                    e && e.preventDefault(), this.preloader || t("html, body").scrollTop(this.scrollTop);
                    var n = this,
                        s = function() {
                            return i ? void 0 : (n.destroy(), void console.log("destroying"))
                        };
                    return this.$el.fadeOut({
                        duration: 450,
                        complete: s
                    }), n.$el.find(".content").css("opacity", "0"), t("#content-perspective")[0] && t("#content-perspective").show(), this
                },
                destroy: function() {
                    t("body").off(this.keydownEvent), t(window).off(this.resizeEvent), this.undelegateEvents(), this.$el.removeData().unbind().remove(), this.remove(), i.View.prototype.remove.call(this)
                },
                events: {
                    "click .overlay": "hide",
                    "click .close": "hide",
                    "click .close-born": "hide"
                },
                hammerEvents: {
                    "tap .overlay": "hide",
                    "tap .close": "hide"
                }
            });
            return s
        }), define("text!templates/modal/form-confirmation-template.html", [], function() {
            return '<div>\r\n	<div class="name"><%= data.name %></div>\r\n	<div><%= data.msgs[0] %></div>\r\n	<div><%= data.msgs[1] %></div>\r\n	<div class="social">\r\n	  <a href="https://twitter.com/ThisIsBorn" class="outside-link" target="_blank"><i class="fa tw fa-twitter scroll-in-view s"></i></a>\r\n	  <a href="https://www.facebook.com/ThisIsBorn" class="outside-link" target="_blank"><i class="fa fb fa-facebook scroll-in-view s"></i></a>\r\n	  <a href="https://www.linkedin.com/company/25962 " class="outside-link" target="_blank"><i class="fa li fa-linkedin scroll-in-view s"></i></a>\r\n	  <a href="http://instagram.com/ThisIsBorn" class="outside-link" target="_blank"><i class="fa in fa-instagram scroll-in-view s"></i></a>\r\n	  <a href="https://plus.google.com/+Borngroup/" class="outside-link" target="_blank"><i class="fa gp fa-google-plus scroll-in-view s"></i></a>\r\n	  <a href="http://www.pinterest.com/ThisIsBorn" class="outside-link" target="_blank"><i class="fa pin fa-pinterest scroll-in-view s"></i></a>\r\n	</div>\r\n</div>';
        }), define("views/form", ["jquery", "underscore", "backbone", "views/modal", "text!templates/modal/form-confirmation-template.html"], function(t, e, i, n, s) {
            var o = i.View.extend({
                initialize: function(e) {
                    if (this.$form = e.form, this.reveal = e.reveal, this.inquiry = e.inquiry, this.reveal && (this.$formFields = this.$form.find(".gform_fields")), this.$submit = this.$form.find("#gform_submit_button_3"), this.$inputs = this.$form.find('input[type="text"], textarea, select'), this.$inputs.each(function() {
                            var e = t(this).closest("li").find("label");
                            t(this).attr("placeholder", e.text()), e.prev().remove()
                        }), this.render(), this.inquiry) var i = this,
                        n = setInterval(function() {
                            t("body").hasClass("loading") || (i.select(), clearInterval(n))
                        }, 1e3)
                },
                render: function() {
                    this.$inputs.each(function() {
                        var e = t(this).closest("li").find("label");
                        t(this).is("textarea") || e.before('<span class="check"></span>')
                    }), this.$formFields && (this.$formFields.find('input[type="file"]').each(function() {
                        t(this).before(t('<div class="mask">Upload File</div>'))
                    }), e.defer(e.bind(function() {
                        this.$formFields.removeClass("active")
                    }, this)))
                },
                toggleForm: function() {
                    var e = this;
                    this.active ? (this.active = void 0, this.$formFields.removeClass("active"), setTimeout(function() {
                        e.$submit.removeClass("active")
                    }, 1e3), setTimeout(function() {
                        e.$form.slideUp("slow")
                    }, 1200)) : (this.active = !0, this.$form.slideDown(), t("html, body").animate({
                        scrollTop: t(".wrapper.apply").offset().top
                    }), setTimeout(function() {
                        e.$formFields.addClass("active"), e.$submit.addClass("active")
                    }, 500))
                },
                toggleLabel: function() {
                    this.$inputs.each(function() {
                        var e = t(this).parent().parent().find("label, .validation_message");
                        if ("" === t(this).val() || "Please enter a valid email address." === e.last().text()) e.removeClass("active");
                        else {
                            if (e.hasClass("active")) return;
                            e.addClass("active")
                        }
                    })
                },
                validateInput: function(e) {
                    var i = t(e.currentTarget),
                        n = t(e.currentTarget).val();
                    "field_3_2" === i.closest("li").attr("id") ? this.validateEmail(n) ? (i.closest("li").removeClass("error"), i.closest("li").addClass("validated")) : (i.closest("li").removeClass("validated"), i.closest("li").addClass("error")) : "" !== n ? (i.closest("li").removeClass("error"), i.closest("li").addClass("validated")) : (i.closest("li").removeClass("validated"), i.closest("li").addClass("error"))
                },
                select: function() {
                    var e = this,
                        i = t(".pane.active .inquiry-type select"),
                        n = i.offset().top - 200;
                    i.val(e.inquiry), i.trigger("change"), t("html, body").animate({
                        scrollTop: n
                    })
                },
                validateEmail: function(t) {
                    var e = /\S+@\S+\.\S+/;
                    return e.test(t)
                },
                destroy: function() {
                    console.log("destroying form view"), this.$inputs.each(function() {
                        var e = t(this).closest("li").find("label");
                        t(this).attr("placeholder", e.text()), e.prev().remove()
                    }), this.$formFields && this.$formFields.find('input[type="file"]').each(function() {
                        t(this).prev().remove()
                    })
                },
                events: {
                    "click .apply-button": "toggleForm",
                    "keyup .ginput_container input": "toggleLabel",
                    "keyup .ginput_container textarea": "toggleLabel",
                    "change select": function(e) {
                        t(".panes").css("max-height", "initial"), this.toggleLabel(e), this.validateInput(e)
                    },
                    "focusout input": function(t) {
                        this.validateInput(t), this.toggleLabel()
                    },
                    "click .cv .mask": function(e) {
                        e.preventDefault(), t("#input_3_7").click()
                    },
                    "click .portfolio .mask": function(e) {
                        e.preventDefault(), t("#input_3_6").click()
                    },
                    "change #input_3_6": function(e) {
                        t(e.currentTarget).closest(".form-right-col").addClass("hover")
                    },
                    "change #input_3_7": function(e) {
                        t(e.currentTarget).closest(".form-right-col").addClass("hover")
                    },
                    'click input.button, input[type="submit"]': function(e) {
                        t(e.currentTarget)
                    }
                }
            });
            return o
        }), define("text!templates/modal/overlay.html", [], function() {
            return '<div class="background" style="background-image: url(\'/overlay-bg.jpg\')">\r\n	<p><span>POD1</span> & <span>FMG</span> ARE NOW</p>\r\n	<a href="" class="logo"></a>\r\n\r\n	<p>Our name may have changed but <br> our commitment to work and clients never will.</p>\r\n\r\n	<a href="/about"><button>Find Out More</button></a>\r\n\r\n	<p class="close-born">x Close</p>\r\n</div>'
        }), define("app", ["jquery", "underscore", "backbone", "views/loader", "helpers/data", "views/app", "views/form", "views/modal", "text!templates/modal/overlay.html"], function(t, e, i, n, s, o, r, a, l) {
            window.ga = window.ga || {}, window.Born.landing = !0, window.Born.appView = void 0, window.Born.Events = {}, e.extend(window.Born.Events, i.Events), window.landing = !0;
            var h = i.Router.extend({
                initialize: function() {
                    console.log("initialized router"), this.bind("all", this._trackPageview), ga("create", "UA-56064167-1", "auto"), ga("require", "displayfeatures")
                },
                _trackPageView: function(t) {
                    var e = {};
                    e.page = i.history.getFragment(), e.location = window.location.pathname, t && (e.title = t), ga("send", "pageview", e)
                },
                routes: {
                    "*all": "render"
                },
                render: function() {
                    if (window.landing) return window.landing = !1, void this._trackPageView();
                    window.Born.appView.changePage();
                    var e = this;
                    s.getPage().done(function(i) {
                        var n = t("<div>").html(i),
                            s = n.find("#content"),
                            o = n.find("title").html(),
                            r = n.find('meta[name="description"]').attr("content"),
                            a = n.find('meta[name="keywords"]').attr("content");
                        t("title").html(o), t('meta[name="description"]').attr("content", r), t('meta[name="keywords"]').attr("content", a), window.Born.appView.render(s), e._trackPageView(o)
                    }).fail(function(i) {
                        if ("abort" !== i.statusText) {
                            var n = t("<div>").html(i.responseText),
                                s = n.find("#content"),
                                o = n.find("title").html(),
                                r = n.find('meta[name="description"]').attr("content"),
                                a = n.find('meta[name="keywords"]').attr("content");
                            t("title").html(o), t('meta[name="description"]').attr("content", r), t('meta[name="keywords"]').attr("content", a), window.Born.appView.render(s), e._trackPageView(o)
                        }
                    })
                }
            });
            window.located_ = t.Deferred(), t(document).ready(function() {
                if (window.Born.appView = new o({
                        el: t("body")
                    }), window.Born.router = new h, i.history.start({
                        pushState: !0
                    }), window.redirect && !t.cookie("seenModal")) {
                    var n = this;
                    setTimeout(function() {
                        n.mv = new a({
                            content: l
                        }).render().show(), t.cookie("seenModal", !0)
                    }, 3e3)
                }
                window.Born.mobile && t("body").addClass("mobile"), window.renderForm = function() {
                    e.delay(function() {
                        t(window).resize()
                    }, 500), "block" === t(".career #apply-box").css("display") && t(".apply-button").hide(), t("#content.career .gform_body .gform_fields").addClass("active")
                }, jQuery(document).on("gform_post_render", renderForm), t.ajax({
                    url: "https://freegeoip.net/json/",
                    type: "GET",
                    success: function(t) {
                        country_code = t.country_code, "GB" === country_code ? window.geolocation = "london" : "IN" === country_code ? window.geolocation = "chennai" : window.geolocation = "new-york", window.located_.resolve()
                    }
                });
                var s = "http://www.borngroup.com/wp-content/uploads/2014/11/Maggie.jpg";
                cheet("m a g g i e", function() {
                    console.log("here"), t("img").each(function() {
                        t(this).attr("src", s)
                    })
                })
            })
        }), define("views/page", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    window.Born.Events.trigger("page-rendered")
                },
                destroy: function() {
                    this.undelegateEvents(), this.$el.removeData().unbind(), i.View.prototype.remove.call(this)
                }
            });
            return n
        }), define("views/404", ["jquery", "underscore", "backbone", "views/page"], function(t, e, i, n) {
            var s = n.extend({
                initialize: function() {
                    n.prototype.initialize.call(this)
                }
            });
            return s
        }), define("text!templates/arrows.html", [], function() {
            return '<ul class="arrows">\r\n  <li class="next"></li>\r\n  <li class="prev"></li>  \r\n</ul>'
        }), define("views/slider", ["jquery", "underscore", "backbone", "text!templates/arrows.html"], function(t, e, i, n) {
            var s = {
                    mobile: {
                        "swipe .slide": function(t) {
                            var e = t.gesture.direction;
                            "left" === e ? this.next() : "right" === e && this.prev()
                        },
                        "touchstart .nav li": function(e) {
                            var i = t(e.currentTarget).index();
                            this["goto"](i), e.preventDefault()
                        }
                    },
                    desktop: {
                        "click .next": "next",
                        "click .prev": "prev",
                        "click .nav li": function(e) {
                            var i = t(e.currentTarget).index();
                            this["goto"](i), e.preventDefault()
                        }
                    }
                },
                o = i.View.extend({
                    initialize: function(i) {
                        i = i || {}, this.showArrows = void 0 !== i.showArrows ? i.showArrows : !0, this.showNav = void 0 !== i.showNav ? i.showArrows : !0, this.fadeIn = i.fadeIn || !1, this.start = 0, this.scroll = !0, console.log("initialized slider view"), this.$overflow = this.$el.find("ul.overflow"), this.$slides = this.$el.find("li.slide"), this.idx = 0, this.slideGroup = i.slideGroup || 1, this.max = Math.ceil(this.$slides.length / this.slideGroup) - 1, this.render(), t("body.mobile")[0] && this.$el.hammer({
                            prevent_mouseevents: !1
                        }), this.$el.imagesLoaded(e.bind(this.resize, this)), this.guid = "slider-" + window.Born.guid(), t(window).on("resize." + this.guid, e.debounce(e.bind(this.resize, this)))
                    },
                    resize: function() {
                        if (this.width = Math.ceil(this.$el.width() / this.slideGroup), this.$slides.width(this.width), this.setHeight(), !this.fadeIn) {
                            this.$overflow.css("left", -this.width * this.idx);
                            var e = 0;
                            this.$slides.each(function() {
                                e += t(this).width()
                            })
                        }
                        this.$overflow.css("width", e + 2)
                    },
                    setHeight: function() {
                        var e = -1e4;
                        this.$slides.each(function() {
                            var i = t(this).outerHeight();
                            i > e && (e = i)
                        }), this.$el.css("height", e)
                    },
                    buildNav: function() {
                        for (var e = t("<ul class='nav'>"), i = 0; i <= this.max; i++) {
                            var n = t("<li>");
                            e.append(n)
                        }
                        this.$el.append(e), this.$nav = e, this["goto"]()
                    },
                    render: function() {
                        this.setHeight(), this.showArrows && (this.$arrows = t(n).appendTo(this.$el)), this.showNav && this.buildNav(), this.fadeIn && this.initFadein(), this.$el.animate({
                            opacity: 1
                        })
                    },
                    initFadein: function() {
                        this.$el.find("li.slide").each(function() {
                            t(this).addClass("faded"), 0 === t(this).index() && t(this).removeClass("faded").addClass("visible")
                        })
                    },
                    next: function() {
                        this["goto"](this.idx + 1)
                    },
                    nextMobile: function() {
                        if (this.$overflow.css({
                                left: this.start
                            }), this.scroll) {
                            var t = this;
                            setTimeout(function() {
                                t.nextMobile()
                            }, 1), this.start -= 5
                        }
                    },
                    prev: function() {
                        this["goto"](this.idx - 1)
                    },
                    prevMobile: function() {},
                    stopScroll: function() {
                        this.scroll = !1, this.$overflow.css({
                            left: this.start
                        })
                    },
                    activate: function() {
                        if (this.$nav) {
                            var e = this.$nav.find("li");
                            e.removeClass("active"), t(e[this.idx]).addClass("active")
                        }
                    },
                    "goto": function(i) {
                        this.idx = e.isUndefined(i) ? this.idx : i, this.idx < 0 && (this.idx = 0), this.idx > this.max && (this.idx = this.max), "undefined" == typeof this.width && (this.width = t(this.$slides[this.idx]).width());
                        var n = this.width * this.slideGroup;
                        this.fadeIn ? (this.$el.find("li.slide").each(function() {
                            t(this).removeClass("visible").addClass("faded")
                        }), t(this.$el.find("li.slide")[this.idx]).removeClass("faded").addClass("visible")) : this.$overflow.css({
                            left: -this.idx * n
                        }, 750), this.$cur = t(this.$slides[this.idx]), this.$slides.removeClass("active"), this.$cur.addClass("active"), this.activate()
                    },
                    destroy: function() {
                        return console.log("destroying slider"), this.showArrows && this.$arrows.remove(), this.showNav && this.$nav.remove(), t(window).off("resize." + this.guid), this.undelegateEvents(), this.$el.removeData().unbind(), null
                    },
                    events: Born.mobile ? s.mobile : s.desktop
                });
            return o
        }), define("views/tile", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    this.$tabs = t(".tab");
                    var i = this;
                    this.render(), this.$tabs.find("li").imagesLoaded(function() {
                        i.resize(), e.defer(e.bind(i.resize, i)), e.delay(e.bind(i.resize, i), 500)
                    }), t(window).on("resize.tiles", e.bind(this.resize, this)), t("#content.careers")[0] && this.resize()
                },
                resize: function() {
                    t(window).width();
                    t(".bios.global, .tab.active").each(function() {
                        var e = t(this).height();
                        t(this).closest("div").css("min-height", e)
                    })
                },
                hide: function(t) {
                    t.removeClass("active")
                },
                show: function(e) {
                    var i = e.height();
                    e.closest("div").css("min-height", i), e.addClass("active").find("li").addClass("scroll-in-view"), t(window).trigger("scroll")
                },
                toggle: function(t) {
                    if (!t.hasClass("active")) {
                        var e = t.attr("id");
                        this.$tiles = this.$targetedTiles || this.$tabs.filter(".active"), this.$targetedTiles = this.$tabs.filter("." + e), this.hide(this.$tiles), this.show(this.$targetedTiles), this.$el.removeClass("active"), t.addClass("active")
                    }
                },
                events: {
                    click: function(e) {
                        var i = t(e.target);
                        this.toggle(i)
                    }
                }
            });
            return n
        }), define("views/anchor-nav", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    console.log("init anchor nav")
                },
                events: {
                    "click li a": function(e) {
                        var i = t(e.currentTarget),
                            n = t(i.attr("href"));
                        if (!n[0]) return void console.log("no anchor exists");
                        var s = n.offset().top;
                        t("html, body").animate({
                            scrollTop: s
                        })
                    }
                },
                destroy: function() {
                    this.undelegateEvents(), this.$el.removeData().unbind()
                }
            });
            return n
        }),
        function(t, e) {
            "function" == typeof define && define.amd ? define("backgroundcheck", e) : t.BackgroundCheck = e(t)
        }(this, function() {
            "use strict";

            function t(t) {
                if (void 0 === t || void 0 === t.targets) throw "Missing attributes";
                j.debug = n(t.debug, !1), j.debugOverlay = n(t.debugOverlay, !1), j.targets = r(t.targets), j.images = r(t.images || "img", !0), j.changeParent = n(t.changeParent, !1), j.threshold = n(t.threshold, 50), j.minComplexity = n(t.minComplexity, 30), j.minOverlap = n(t.minOverlap, 50), j.windowEvents = n(t.windowEvents, !0), j.maxDuration = n(t.maxDuration, 500), j.mask = n(t.mask, {
                    r: 0,
                    g: 255,
                    b: 0
                }), j.classes = n(t.classes, {
                    dark: "background--dark",
                    light: "background--light",
                    complex: "background--complex"
                }), (void 0 === E || null === E) && (a(), E && ($.style.position = "fixed", $.style.top = "0px", $.style.left = "0px", $.style.width = "100%", $.style.height = "100%", window.addEventListener(S + ".bc", x.bind(null, function() {
                    c(), k()
                })), window.addEventListener("scroll.bc", x.bind(null, k)), c(), k()))
            }

            function e() {
                E = null, $ = null, I = null, j = {}, M && clearTimeout(M), window.removeEventListener("scroll.bc", x.bind(null, k)), window.removeEventListener(S + ".bc", x.bind(null, k))
            }

            function i(t) {
                T("debug")
            }

            function n(t, e) {
                return s(t, typeof e), void 0 === t ? e : t
            }

            function s(t, e) {
                if (void 0 !== t && typeof t !== e) throw "Incorrect attribute type"
            }

            function o(t) {
                for (var e, n, s = [], o = 0; o < t.length; o++)
                    if (e = t[o], s.push(e), "IMG" !== e.tagName) {
                        if (n = window.getComputedStyle(e).backgroundImage, n.split(/,url|, url/).length > 1) throw "Multiple backgrounds are not supported";
                        if (!n || "none" === n) throw "Element is not an <img> but does not have a background-image";
                        s[o] = {
                            img: new Image,
                            el: s[o]
                        }, n = n.slice(4, -1), n = n.replace(/"/g, ""), s[o].img.src = n, i("CSS Image - " + n)
                    }
                return s
            }

            function r(t, e) {
                var i = t;
                if ("string" == typeof t ? i = document.querySelectorAll(t) : t && 1 === t.nodeType && (i = [t]), !i || 0 === i.length || void 0 === i.length) throw "Elements not found";
                return e && (i = o(i)), i = Array.prototype.slice.call(i)
            }

            function a() {
                $ = document.createElement("canvas"), $ && $.getContext ? (I = $.getContext("2d"), E = !0) : E = !1, l()
            }

            function l() {
                T("debugOverlay") ? ($.style.opacity = .5, $.style.pointerEvents = "none", document.body.appendChild($)) : $.parentNode && $.parentNode.removeChild($)
            }

            function h(t) {
                var n = (new Date).getTime() - t;
                i("Duration: " + n + "ms"), n > T("maxDuration") && (m(), e())
            }

            function c() {
                P = {
                    left: 0,
                    top: 0,
                    right: document.body.clientWidth,
                    bottom: window.innerHeight
                }, $.width = document.body.clientWidth, $.height = window.innerHeight
            }

            function u(t, e, i) {
                var n, s;
                return -1 !== t.indexOf("px") ? n = parseFloat(t) : -1 !== t.indexOf("%") ? (n = parseFloat(t), s = n / 100, n = s * e, i && (n -= i * s)) : n = e, n
            }

            function d(t) {
                var e = window.getComputedStyle(t.el);
                t.el.style.backgroundRepeat = "no-repeat", t.el.style.backgroundOrigin = "padding-box";
                var i = e.backgroundSize.split(" "),
                    n = i[0],
                    s = void 0 === i[1] ? "auto" : i[1],
                    o = t.el.clientWidth / t.el.clientHeight,
                    r = t.img.naturalWidth / t.img.naturalHeight;
                "cover" === n ? o >= r ? (n = "100%", s = "auto") : (n = "auto", i[0] = "auto", s = "100%") : "contain" === n && (1 / r > 1 / o ? (n = "auto", i[0] = "auto", s = "100%") : (n = "100%", s = "auto")), n = "auto" === n ? t.img.naturalWidth : u(n, t.el.clientWidth), s = "auto" === s ? n / t.img.naturalWidth * t.img.naturalHeight : u(s, t.el.clientHeight), "auto" === i[0] && "auto" !== i[1] && (n = s / t.img.naturalHeight * t.img.naturalWidth);
                var a = e.backgroundPosition;
                "top" === a ? a = "50% 0%" : "left" === a ? a = "0% 50%" : "right" === a ? a = "100% 50%" : "bottom" === a ? a = "50% 100%" : "center" === a && (a = "50% 50%"), a = a.split(" ");
                var l, h;
                return 4 === a.length ? (l = a[1], h = a[3]) : (l = a[0], h = a[1]), h = h || "50%", l = u(l, t.el.clientWidth, n), h = u(h, t.el.clientHeight, s), 4 === a.length && ("right" === a[0] && (l = t.el.clientWidth - t.img.naturalWidth - l), "bottom" === a[2] && (h = t.el.clientHeight - t.img.naturalHeight - h)), l += t.el.getBoundingClientRect().left, h += t.el.getBoundingClientRect().top, {
                    left: Math.floor(l),
                    right: Math.floor(l + n),
                    top: Math.floor(h),
                    bottom: Math.floor(h + s),
                    width: Math.floor(n),
                    height: Math.floor(s)
                }
            }

            function p(t) {
                var e, i, n;
                if (t.nodeType) {
                    var s = t.getBoundingClientRect();
                    e = {
                        left: s.left,
                        right: s.right,
                        top: s.top,
                        bottom: s.bottom,
                        width: s.width,
                        height: s.height
                    }, n = t.parentNode, i = t
                } else e = d(t), n = t.el, i = t.img;
                n = n.getBoundingClientRect(), e.imageTop = 0, e.imageLeft = 0, e.imageWidth = i.naturalWidth, e.imageHeight = i.naturalHeight;
                var o, r = e.imageHeight / e.height;
                return e.top < n.top && (o = n.top - e.top, e.imageTop = r * o, e.imageHeight -= r * o, e.top += o, e.height -= o), e.left < n.left && (o = n.left - e.left, e.imageLeft += r * o, e.imageWidth -= r * o, e.width -= o, e.left += o), e.bottom > n.bottom && (o = e.bottom - n.bottom, e.imageHeight -= r * o, e.height -= o), e.right > n.right && (o = e.right - n.right, e.imageWidth -= r * o, e.width -= o), e.imageTop = Math.floor(e.imageTop), e.imageLeft = Math.floor(e.imageLeft), e.imageHeight = Math.floor(e.imageHeight), e.imageWidth = Math.floor(e.imageWidth), e
            }

            function f(t) {
                var e = p(t);
                t = t.nodeType ? t : t.img, e.imageWidth > 0 && e.imageHeight > 0 && e.width > 0 && e.height > 0 ? I.drawImage(t, e.imageLeft, e.imageTop, e.imageWidth, e.imageHeight, e.left, e.top, e.width, e.height) : i("Skipping image - " + t.src + " - area too small")
            }

            function g(t, e, i) {
                var n = t.className;
                switch (i) {
                    case "add":
                        n += " " + e;
                        break;
                    case "remove":
                        var s = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
                        n = n.replace(s, "")
                }
                t.className = n.trim()
            }

            function m(t) {
                for (var e, i = t ? [t] : T("targets"), n = 0; n < i.length; n++) e = i[n], e = T("changeParent") ? e.parentNode : e, g(e, T("classes").light, "remove"), g(e, T("classes").dark, "remove"), g(e, T("classes").complex, "remove")
            }

            function v(t) {
                var e, n, s, o, r = t.getBoundingClientRect(),
                    a = 0,
                    l = 0,
                    h = 0,
                    c = 0,
                    u = T("mask");
                if (r.width > 0 && r.height > 0) {
                    m(t), t = T("changeParent") ? t.parentNode : t, n = I.getImageData(r.left, r.top, r.width, r.height).data;
                    for (var d = 0; d < n.length; d += 4) n[d] === u.r && n[d + 1] === u.g && n[d + 2] === u.b ? c++ : (a++, e = .2126 * n[d] + .7152 * n[d + 1] + .0722 * n[d + 2], s = e - h, l += s * s, h += s / a);
                    c <= n.length / 4 * (1 - T("minOverlap") / 100) && (o = Math.sqrt(l / a) / 255, h /= 255, i("Target: " + t.className + " lum: " + h + " var: " + o), g(t, h <= T("threshold") / 100 ? T("classes").dark : T("classes").light, "add"), o > T("minComplexity") / 100 && g(t, T("classes").complex, "add"))
                }
            }

            function b(t, e) {
                return t = (t.nodeType ? t : t.el).getBoundingClientRect(), e = e === P ? e : (e.nodeType ? e : e.el).getBoundingClientRect(), !(t.right < e.left || t.left > e.right || t.top > e.bottom || t.bottom < e.top)
            }

            function y(t) {
                for (var e, i = (new Date).getTime(), n = t && ("IMG" === t.tagName || t.img) ? "image" : "targets", s = t ? !1 : !0, o = T("targets").length, r = 0; o > r; r++) e = T("targets")[r], b(e, P) && ("targets" !== n || t && t !== e ? "image" === n && b(e, t) && v(e) : (s = !0, v(e)));
                if ("targets" === n && !s) throw t + " is not a target";
                h(i)
            }

            function w(t) {
                var e = function(t) {
                        var e = 0;
                        return "static" !== window.getComputedStyle(t).position && (e = parseInt(window.getComputedStyle(t).zIndex, 10) || 0, e >= 0 && e++), e
                    },
                    i = t.parentNode,
                    n = i ? e(i) : 0,
                    s = e(t);
                return 1e5 * n + s
            }

            function _(t) {
                var e = !1;
                return t.sort(function(t, i) {
                    t = t.nodeType ? t : t.el, i = i.nodeType ? i : i.el;
                    var n = t.compareDocumentPosition(i),
                        s = 0;
                    return t = w(t), i = w(i), t > i && (e = !0), t === i && 2 === n ? s = 1 : t === i && 4 === n && (s = -1), s || t - i
                }), i("Sorted: " + e), e && i(t), e
            }

            function k(t, e, n) {
                if (E) {
                    var s = T("mask");
                    i("--- BackgroundCheck ---"), i("onLoad event: " + (n && n.src)), e !== !0 && (I.clearRect(0, 0, $.width, $.height), I.fillStyle = "rgb(" + s.r + ", " + s.g + ", " + s.b + ")", I.fillRect(0, 0, $.width, $.height));
                    for (var o, r, a = n ? [n] : T("images"), l = _(a), h = !1, c = 0; c < a.length; c++) o = a[c], b(o, P) && (r = o.nodeType ? o : o.img, 0 === r.naturalWidth ? (h = !0, i("Loading... " + o.src), r.removeEventListener("load", k), l ? r.addEventListener("load", k.bind(null, null, !1, null)) : r.addEventListener("load", k.bind(null, t, !0, o))) : (i("Drawing: " + o.src), f(o)));
                    n || h ? n && y(n) : y(t)
                }
            }

            function x(t) {
                T("windowEvents") === !0 && (M && clearTimeout(M), M = setTimeout(t, 200))
            }

            function C(t, e) {
                if (void 0 === j[t]) throw "Unknown property - " + t;
                if (void 0 === e) throw "Missing value for " + t;
                if ("targets" === t || "images" === t) try {
                    e = r("images" !== t || e ? e : "img", "images" === t ? !0 : !1)
                } catch (i) {
                    throw e = [], i
                } else s(e, typeof j[t]);
                m(), j[t] = e, k(), "debugOverlay" === t && l()
            }

            function T(t) {
                if (void 0 === j[t]) throw "Unknown property - " + t;
                return j[t]
            }

            function D() {
                for (var t, e = T("images"), i = [], n = 0; n < e.length; n++) t = p(e[n]), i.push(t);
                return i
            }
            var E, $, I, M, P, S = void 0 !== window.orientation ? "orientationchange" : "resize",
                j = {};
            return {
                init: t,
                destroy: e,
                refresh: k,
                set: C,
                get: T,
                getImageData: D
            }
        }), define("views/hero-image", ["jquery", "underscore", "backbone", "backgroundcheck", "jquery.backstretch", "fittext", "imagesloaded"], function(t, e, i, n) {
            var s = i.View.extend({
                initialize: function(i) {
                    i = i || {}, this.onLoad = i.onLoad, this.textCompressor = i.textCompressor || 3.75, this.textParams = i.textParams || {
                        minFontSize: "50px"
                    }, this.offset = this.$el.offset().top, this.$titleText = this.$el.find(".title"), t.fn.fitText && this.$titleText.fitText(this.textCompressor, this.textParams);
                    var n = this.$el.data("image");
                    n = window.location.protocol + n.replace("http:", "").replace("https:", ""), this.$el.backstretch(n, {
                        centeredY: !1
                    }), this.$el.imagesLoaded(e.bind(this.imagesLoaded, this)), this.resizeEvent = "resize.parallax-" + window.Born.guid(), this.scrollEvent = "scroll.parallax-" + window.Born.guid(), t(window).on(this.resizeEvent, e.bind(this.resize, this)), window.Born.mobile || t(window).on(this.scrollEvent, e.bind(this.scroll, this))
                },
                imagesLoaded: function() {
                    var i = this.$el.find("img")[0];
                    this.ratio = i.naturalWidth / i.naturalHeight, t("#content.project-single").addClass("active");
                    var s = this;
                    e.delay(function() {
                        n.init({
                            targets: ".cover-image .title, .cover-mobile-image .title",
                            images: ".cover-image .backstretch img, .cover-mobile-image img",
                            debug: !0
                        }), n.refresh(), e.defer(function() {
                            var t = s.$el.find(".title");
                            t.hasClass("background--complex") ? s.$el.attr("data-nav-color", "#eee") : t.hasClass("background--dark") && s.$el.attr("data-nav-color", "#fff"), s.$el.addClass("active"), t.addClass("active"), e.isFunction(s.onLoad) && setTimeout(function() {
                                s.$el.backstretch("resize"), s.onLoad()
                            }, 500)
                        })
                    }, 250), this.resize(), this.scroll()
                },
                resize: function() {
                    this.offset = this.$el.offset().top;
                    var i = t(window),
                        n = (i.width(), i.height()),
                        s = n - 292 - 75;
                    this.$el.find(".backstretch").height(s);
                    var o = this;
                    e.defer(function() {
                        o.$el.height(s)
                    }), this.$titleText.fitText(this.textCompressor, this.textParams)
                },
                scroll: function() {
                    var e = t(window).scrollTop(),
                        i = t("header.section").outerHeight(),
                        n = e + i - this.offset,
                        s = n / this.$el.height(),
                        e = (this.$el.height() / this.ratio, 100 * s - this.$titleText.height() / 2);
                    if (this.$el.find(".title").css({
                            "margin-top": e
                        }), !(s > 1)) {
                        if (0 > s) return void(this.moved && this.$el.find(".backstretch img").css("top", 0));
                        var o = this.$el.find(".darken-smooth"),
                            r = this.$el.find(".backstretch img").first(),
                            a = r.height() - this.$el.height();
                        r.css({
                            top: -a * s,
                            transform: "translateZ(" + 20 * s + "px)",
                            "-webkit-transform": "translateZ(" + 20 * s + "px)"
                        }), o.css({
                            opacity: s
                        }), this.moved = !0
                    }
                },
                destroy: function() {
                    t(window).off(this.resizeEvent), t(window).off(this.scrollEvent), n.destroy(), this.undelegateEvents(), this.$el.removeData().unbind(), i.View.prototype.remove.call(this)
                }
            });
            return s
        }), define("views/stretch-video", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function(t) {
                    var i = this;
                    this.guid = Born.guid(), this.$video = this.$el.find("video"), this.stretchToFit = t.stretchToFit, console.log(this.el), this.$video[0].addEventListener("error", e.bind(this.onError, this), !0), videojs(this.$video.attr("id")).ready(function() {
                        i.videojs = this, i.onLoad(), this.on("loadeddata", e.bind(i.onLoad, i)), this.on("loadedalldata", e.bind(i.onLoad, i)), this.on("error", e.bind(i.onError, i))
                    })
                },
                onError: function(t) {
                    console.log("error occured " + t)
                },
                onLoad: function() {
                    this.active = !0, this.ovw = this.$video.prop("videoWidth"), this.ovh = this.$video.prop("videoHeight"), this.ovr = this.ovw / this.ovh, this.resize(), console.log(this.ovw), console.log(this.ovh), t(window).off("resize" + this.guid), t(window).on("resize." + this.guid, e.bind(this.resize, this)), e.defer(e.bind(this.resize, this)), this.$el.addClass("active")
                },
                resize: function() {
                    this.stretchToFit ? (this.getDimensions(), this.stretch(), this.center()) : (this.$el.css({
                        width: "",
                        height: ""
                    }), this.w = this.$el.width(), this.$el.width(this.w), this.$el.height(this.w / this.ovr))
                },
                getDimensions: function() {
                    this.w = this.$el.width() + 4, this.h = this.$el.height() + 4, this.r = this.w / this.h
                },
                stretch: function() {
                    this.r > this.ovr ? (this.vw = this.w, this.vh = this.w / this.r, this.$video.width(this.w), this.$video.height(this.w / this.ovr)) : (this.vh = this.h, this.vw = this.h * this.ovr, this.$video.height(this.vh), this.$video.width(this.vw))
                },
                center: function() {
                    var t = this.vw - this.w,
                        e = this.vh - this.h;
                    this.$video.css({
                        top: -e / 2,
                        left: -t / 2
                    })
                },
                destroy: function() {
                    t(window).off("resize." + this.guid)
                }
            });
            return n
        }), define("views/about", ["jquery", "underscore", "backbone", "views/page", "views/slider", "views/tile", "views/anchor-nav", "views/hero-image", "views/stretch-video"], function(t, e, i, n, s, o, r, a, l) {
            var h = i.View.extend({
                    initialize: function() {
                        console.log("hero view initialized"), t(window).on("resize.hero", e.bind(this.resize, this)), window.Born.mobile || t(window).on("scroll.hero", e.bind(this.scroll, this)), this.$title = this.$el.find(".title").fitText(2.75), this.$video = this.$el.find(".video-js"), window.Born.mobile ? window.Born.Events.trigger("page-rendered") : this.initVideo(), this.resize()
                    },
                    showFirstFrame: function() {
                        window.Born.Events.trigger("page-rendered")
                    },
                    initVideo: function() {
                        this.vv = new l({
                            el: this.el,
                            stretchToFit: !0
                        }), e.defer(function() {
                            window.Born.Events.trigger("page-rendered")
                        })
                    },
                    playVideo: function() {
                        this.BV.show([{
                            type: "video/mp4",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/BORN-About-Logo_1.mp4"
                        }, {
                            type: "video/webm",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/BORN-About-Logo_1.webm"
                        }, {
                            type: "video/ogg",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/BORN-About-Logo_1.ogg"
                        }])
                    },
                    scroll: function() {
                        var e = t(window).scrollTop(),
                            i = e / this.$el.height(),
                            e = (this.$title.height(), 100 * i);
                        if (t(window).width() < 600);
                        else {
                            this.$title.css({
                                "margin-top": -2 * e
                            });
                            var n = this.$el.height();
                            if (this.$video.css({
                                    "margin-top": -(n / 4) * i
                                }), .15 >= i && this.$el.hasClass("fade") ? this.$el.removeClass("fade") : i > .15 && !this.$el.hasClass("fade") && this.$el.addClass("fade"), i > 1) return
                        }
                    },
                    resize: function() {
                        this.offset = this.$el.offset().top;
                        var e = t(window).width() / (1280 / 430);
                        window.Born.mobile ? this.$el.height(e + 100) : this.$el.height(e + 75), this.$title.css("margin-top", -this.$title.height() / 2), t(window).trigger("scroll"), window.Born.mobile || this.$el.next().css("margin-top", e)
                    },
                    destroy: function() {
                        this.undelegateEvents(), this.$el.removeData().unbind(), i.View.prototype.remove.call(this)
                    }
                }),
                c = n.extend({
                    initialize: function() {
                        this.anv = new r({
                            el: this.$el.find("header.section ul.categories")
                        }), this.$anchors = this.$el.find(".anchors li"), t(".fade-in-info").each(function() {
                            var e = t(this).find("img").attr("src");
                            "" !== e && t(this).backstretch(e)
                        });
                        var i = [];
                        new o({
                            el: this.$anchors
                        }), window.located_.done(e.bind(function() {
                            this.$anchors.filter("#" + window.geolocation).trigger("click")
                        }, this)), this.$el.find(".slider").each(function() {
                            i.push(new s({
                                el: this
                            }))
                        }), this.sliders = i, t(".sub-nav a").on("click", function() {
                            var e = t(this).prop("class"),
                                i = t("header.section").find("nav a").filter("." + e);
                            i.click()
                        }), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && t("#big-video-wrap").show(), this.hero = new h({
                            el: this.$el.find(".cover-image")
                        })
                    },
                    destroy: function() {
                        this.anv.destroy(), e.each(this.sliders, function(t) {
                            t.destroy()
                        }), this.hero.destroy(), n.prototype.destroy.call(this)
                    },
                    events: {
                        "click .instagram": function(e) {
                            var i = t("footer.global #social .fa-instagram").parent().attr("href");
                            return window.open(i, "instagram"), console.log("here"), !1
                        }
                    }
                });
            return c
        }), define("views/sticky-block", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function(i) {
                    this.paddingTop = i.paddingTop || parseInt(this.$el.css("padding-top"), 10), this.$cutOff = i.$cutOff, t(window).on("scroll.sticky", e.throttle(e.bind(this.scroll, this), 10)), t(window).on("resize.sticky", e.debounce(e.bind(this.resize, this))), this.resize()
                },
                resize: function() {
                    this.$el.css("position", ""), this.cutOffPos = this.$cutOff.offset().top, this.initialOffset = this.$el.offset().top, this.h = this.$el.outerHeight(!0), this.ol = this.$el.offset().left, this.pl = this.$el.position().left, this.pt = this.$el.position().top, this.scroll()
                },
                scroll: function() {
                    var e = t(window).scrollTop() - this.initialOffset,
                        i = this.$el.outerHeight(!0),
                        n = t(window).scrollTop() + i > this.cutOffPos;
                    e + this.paddingTop > 0 && !n ? (this.$el.css("top", 0), this.$el.css("left", this.ol), this.$el.css("position", "fixed")) : n ? (this.$el.css("position", "absolute"), this.$el.css("top", this.cutOffPos - this.$el.offsetParent().offset().top - this.h), this.$el.css("left", this.pl)) : (this.$el.css("left", ""), this.$el.css("top", ""), this.$el.css("margin-top", ""), this.$el.css("position", ""))
                },
                destroy: function() {
                    t(window).off("scroll.sticky"), t(window).off("resize.sticky")
                }
            });
            return n
        }), define("views/social-media", ["jquery"], function(t) {
            var e = Backbone.View.extend({
                initialize: function(t) {
                    this.image = t.image, this.href = t.href ? t.href : window.location.href, console.log(this.href)
                },
                events: {
                    "click .fb": function(t) {
                        var e = encodeURI("http://www.facebook.com/sharer.php?u=" + this.href + "&p[images][0]=" + encodeURIComponent(this.image)),
                            i = window.open(e, "share", "height=375,width=650");
                        window.focus && i.focus(), t.preventDefault()
                    },
                    "click .tw": function(t) {
                        var e = encodeURI("https://twitter.com/share?url=" + this.href),
                            i = window.open(e, "share", "height=375,width=650");
                        window.focus && i.focus(), t.preventDefault()
                    },
                    "click .li": function(t) {
                        var e = encodeURI("http://www.linkedin.com/shareArticle?mini=true&url=" + this.href),
                            i = window.open(e, "share", "height=375,width=650");
                        window.focus && i.focus(), t.preventDefault()
                    },
                    "click .pn": function(e) {
                        var i = this.image || t(".main-image").find("img.fg").attr("src"),
                            n = encodeURI("http://pinterest.com/pin/create/button/?url=" + this.href + "&description=&media=" + i),
                            s = window.open(n, "share", "height=375,width=650");
                        window.focus && s.focus(), e.preventDefault()
                    },
                    "click .gp": function(e) {
                        var i = (this.image || t(".main-image").find("img.fg").attr("src"), encodeURI("https://plus.google.com/share?url=" + this.href)),
                            n = window.open(i, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        window.focus && n.focus(), e.preventDefault()
                    }
                }
            });
            return e
        }), define("views/career", ["jquery", "underscore", "backbone", "views/page", "views/form", "views/sticky-block", "views/social-media"], function(t, e, i, n, s, o, r) {
            var a = n.extend({
                initialize: function() {
                    var e = this.$el.find("#apply-box"),
                        i = e.data("location");
                    e.find(".career-location input").val(i), new s({
                        el: this.$el,
                        form: e,
                        reveal: !0
                    }), new r({
                        el: this.$el.find(".social")
                    });
                    var a = this;
                    this.$el.imagesLoaded(function() {
                        new o({
                            el: a.$el.find(".right"),
                            paddingTop: 45,
                            $cutOff: t(".wrapper.apply")
                        })
                    }), n.prototype.initialize.call(this)
                }
            });
            return a
        }), define("views/tab", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function() {
                    this.$anchors = this.$el.find(".controls li"), this.$tabs = this.$el.find(".tab")
                },
                destroy: function() {
                    console.log("destroying")
                },
                show: function(e) {
                    var i = t(e.currentTarget),
                        n = i.data("content");
                    this.activeClass !== n && (this.activeClass = n, this.$anchors.removeClass("active"), this.$tabs.removeClass("active"), i.addClass("active"), this.$tabs.filter("." + this.activeClass).addClass("active"))
                },
                events: {
                    "click .controls li": "show"
                }
            });
            return n
        }), define("views/careers", ["jquery", "underscore", "backbone", "views/page", "views/tab", "views/tile"], function(t, e, i, n, s, o) {
            var r = n.extend({
                initialize: function() {
                    console.log("initialize careers"), this.tv = new s({
                        el: this.$el.find(".openings")
                    }), this.tileView = new o({
                        el: t(".locations.controls")
                    }), window.located_.done(e.bind(function() {
                        t(".locations.controls li").filter("#" + window.geolocation).trigger("click")
                    }, this)), n.prototype.initialize.call(this)
                }
            });
            return r
        }), define("views/contact-form-modal", ["jquery", "underscore", "backbone", "views/modal", "views/form"], function(t, e, i, n, s) {
            var o = n.extend({
                className: "modal contact-form",
                initialize: function(i) {
                    this.$form = i.$form, this.$originalFormParent = this.$form.closest(".pane.active").find(".wrapper > div.contact-form"), this.parent = i.parent, n.prototype.initialize.call(this, i), this.render(), e.defer(e.bind(function() {
                        this.$el.find(".content").append(this.$form), this.fv = new s({
                            el: this.$el,
                            form: this.$el.find("form")
                        });
                        var e = this.$el.find("form"),
                            i = "careers" === e.find(".inquiry-type option:selected").attr("value");
                        i ? e.addClass("careers") : e.removeClass("careers"), Born.mobile && t("#content-perspective").hide(), window.gf_placeholder(), this.show()
                    }, this)), t(document).on("gform_post_render", e.bind(e.throttle(this.gotForm, 1e3, {
                        trailing: !1
                    }), this))
                },
                buildForm: function(e) {
                    var i = (t(e), t('<ul class="right">')),
                        n = t('<div class="border-container">'),
                        s = t(e).find("form"),
                        o = s.find(".gform_body"),
                        r = s.find(".float-right").filter(function() {
                            return "list-item" === t(this).css("display") || "" === t(this).css("display")
                        }),
                        a = "careers" === s.find("option:selected").attr("value");
                    a ? s.addClass("careers") : s.removeClass("careers");
                    var l = s.find(".resume-wrapper"),
                        h = s.find(".greeting");
                    o.prepend(h), o.append(i), i.append(r), i.append(n), n.append(l), o.find(">ul.gform_fields").addClass("left"), s.find("input, textarea, select").each(function() {
                        t(this).attr("tabindex", -1)
                    })
                },
                gotForm: function() {
                    e.delay(e.bind(function() {
                        var i = t(".pane.active .wrapper > div.contact-form");
                        i.find(".gform_confirmation_message")[0] ? this.success() : (this.parent.pv.duplicateSelect(), this.buildForm(i), window.gf_placeholder(), this.$form.replaceWith(i.find("form").first()), this.$form = this.$el.find(".content form"), this.fv && this.fv.destroy(), this.fv = new s({
                            el: this.$el,
                            form: this.$el.find("form")
                        }), e.delay(function() {
                            t(".modal .content").animate({
                                scrollTop: 0
                            })
                        }, 100))
                    }, this), 100)
                },
                success: function() {
                    var e = t(".pane.active .wrapper > div.contact-form .gforms_confirmation_message").html();
                    new n({
                        className: "modal contact-success",
                        content: e
                    }).render().show(), this.$originalFormParent.children().not("h3").hide(), this.$originalFormParent.children().filter("h3").html("Thanks for contacting us!"), this.destroy()
                },
                destroy: function() {
                    this.fv && this.fv.destroy(), this.parent.cfm = void 0, this.parent.pv.resetSelect(), t(document).off("gform_post_render"), this.$form.appendTo(this.$originalFormParent.children().filter("div.contact-form")), n.prototype.destroy.call(this)
                },
                events: function() {
                    return e.extend({}, n.prototype.events, {
                        "touchstart input": function(t) {
                            return !1
                        }
                    })
                }
            });
            return o
        }), define("views/contact", ["jquery", "underscore", "backbone", "views/page", "views/form", "views/hero-image", "views/modal", "views/contact-form-modal"], function(t, e, i, n, s, o, r, a) {
            var l;
            window.google || (window.google = {
                maps: {}
            }), window._map.done(function() {
                l = {
                    "new-york": new google.maps.LatLng(40.745294, -73.993928),
                    "san-francisco": new google.maps.LatLng(37.794, -122.3974),
                    montreal: new google.maps.LatLng(45.567611, -73.7571198),
                    london: new google.maps.LatLng(51.531828, -.110869),
                    chennai: new google.maps.LatLng(13.059705, 80.225228),
                    singapore: new google.maps.LatLng(1.284513, 103.850633)
                }
            });
            var h = ["Good morning", "Good afternoon", "Good evening"],
                c = function(t) {
                    var e = t % 24;
                    return 5 > e ? h[2] : 12 > e ? h[0] : 18 > e ? h[1] : h[2]
                },
                u = function(t) {
                    var e = new Date,
                        i = e.getTime() + 6e4 * e.getTimezoneOffset();
                    return new Date(i + 36e5 * t)
                },
                d = u(-5).getHours(),
                p = {
                    "new-york": 0,
                    montreal: 0,
                    "san-francisco": -3,
                    london: 5,
                    chennai: 10,
                    singapore: 12
                },
                f = function(t) {
                    var e = t.attr("id"),
                        i = p[e],
                        n = d + i,
                        s = c(n);
                    t.find(".salutation").html(s).addClass("active")
                },
                g = i.View.extend({
                    initialize: function(i) {
                        this.parent = i.parent;
                        var n;
                        window.location.search && "?city" === window.location.search.split("=")[0] ? (n = window.location.search.replace("?city=", ""), this.goTo(n)) : window.located_.done(e.bind(function() {
                            n = window.geolocation, this.goTo(n)
                        }, this)), this.$el.find(".pane").each(function() {
                            f(t(this))
                        }), e.delay(e.bind(this.resize, this), 1e3), t(window).on("resize.pane-view", e.bind(this.resize, this))
                    },
                    resize: function() {
                        var i, n = t(window),
                            s = this.$el.find(".panes"),
                            o = n.height() - 75,
                            r = n.width();
                        i = r < Born.Breakpoints.mobile ? s.find(".cover-image").height() + s.find(".wrapper").height() : o, setTimeout(e.bind(function() {
                            this.$el.find(".panes").height(i)
                        }, this), 0)
                    },
                    reset: function() {
                        this.$el.find("header.section nav li a.active").removeClass("active"), this.$el.find(".pane.active").removeClass("active"), this.$el.find(".cover-image").css("opacity", 1), this.parent.mv.hide(), this.$inquirySelect && (this.$inquirySelect.remove(), this.$inquirySelect = void 0), t(window).trigger("modal-hide")
                    },
                    goTo: function(i) {
                        this.reset(), this.$active = t("#" + i).addClass("active"), t("header.section nav li a." + i).addClass("active"), this.initializePane(), e.defer(e.bind(this.resize, this)), window.Born.router.navigate(window.location.pathname + "?city=" + i), window.Born.city = i
                    },
                    initializePane: function() {
                        this.$active.find("#gforms_confirmation_message")[0] || this.duplicateSelect()
                    },
                    duplicateSelect: function() {
                        this.$inquirySelect && (this.$inquirySelect.remove(), this.$inquirySelect = void 0);
                        var t = this.$active.find("form .inquiry-type").clone().addClass("fake");
                        t.find("select").attr("onchange", "undefined"), this.$form = this.$active.find("form"), this.$inquirySelect = t, this.$inquirySelect.insertAfter(this.$active.find(".contact-form h3"))
                    },
                    destroy: function() {
                        this.reset(), t(window).off("resize.pane-view"), t(document).off("gform_post_conditional_logic")
                    },
                    resetSelect: function() {
                        if (this.$inquirySelect && this.$inquirySelect[0]) {
                            var t = this.$inquirySelect.find("select option").first().attr("value");
                            this.$inquirySelect.find("select").val(t)
                        }
                    },
                    events: {
                        "change .inquiry-type.fake": function(e) {
                            var i = t(e.currentTarget),
                                n = i.find("select").val();
                            if ("none" === n) return !1;
                            var s = this.$form.find(".inquiry-type select option");
                            s.filter(function() {
                                return t(this).val() === n
                            }).prop("selected", !0), s.trigger("change")
                        },
                        "click .dropdowns li a": function(e) {
                            e.preventDefault();
                            var i = t(e.currentTarget);
                            if (!i.hasClass("active")) {
                                this.$el.find(".dropdowns li a.active").removeClass("active"), i.addClass("active");
                                var n = i.attr("href").slice(1);
                                this.reset(), this.goTo(n)
                            }
                        },
                        "click input + label": function(e) {
                            e.preventDefault();
                            var i = t(e.currentTarget),
                                n = i.prev();
                            n.prop("checked", !n.prop("checked"))
                        }
                    }
                }),
                m = i.View.extend({
                    initialize: function() {
                        if (window.Born.map) {
                            if (!window.Born.map || !window.Born.$map) return !1;
                            this.map = window.Born.map, this.$map = window.Born.$map
                        } else this.buildMap();
                        t(window).on("resize.google-map", e.bind(this.resize, this)), this.render(), this.resize()
                    },
                    render: function() {
                        this.$map.appendTo("#content").hide(), google.maps.event.trigger(map, "resize")
                    },
                    resize: function() {
                        var e = t(".pane.active .cover-image");
                        this.$map.css({
                            width: e.width(),
                            height: e.height()
                        }), google.maps.event.trigger(this.map, "resize")
                    },
                    panTo: function(t) {
                        this.map.panTo(t)
                    },
                    show: function() {
                        e.defer(e.bind(this.panTo, this, l[window.Born.city])), this.$map.fadeIn(), this.resize();
                        var i = this.$map.position().top;
                        t("html,body").animate({
                            scrollTop: i
                        })
                    },
                    hide: function() {
                        this.$map.fadeOut()
                    },
                    buildMap: function() {
                        this.$map = t('<div id="map">'), this.options = {
                            zoom: 16,
                            center: l["new-york"],
                            scrollwheel: !1,
                            panControl: !1,
                            zoomControlOptions: {
                                position: google.maps.ControlPosition.RIGHT_CENTER
                            }
                        }, this.map = new google.maps.Map(this.$map[0], this.options);
                        var i = [{
                                featureType: "all",
                                elementType: "all",
                                stylers: [{
                                    saturation: -100
                                }]
                            }],
                            n = new google.maps.StyledMapType(i, {
                                name: "grayscale"
                            });
                        this.map.mapTypes.set("grayscale", n), this.map.setMapTypeId("grayscale");
                        var s = this.map;
                        e.each(l, function(t, e) {
                            new google.maps.Marker({
                                position: t,
                                map: s
                            })
                        }), window.Born.map = this.map, window.Born.$map = this.$map
                    },
                    destroy: function() {
                        this.$map.fadeOut(500, function() {
                            t(this).remove()
                        }), t(window).off("resize.google-map")
                    }
                }),
                v = n.extend({
                    initialize: function() {
                        this.mv = {
                            show: function() {},
                            hide: function() {}
                        };
                        var e = this;
                        window._map.done(function() {
                            e.init()
                        }), t(document).on("click", "label", function(e) {
                            var i = t(e.currentTarget).attr("for");
                            t(".modal").find("#" + i).attr("checked", !0).prop("checked", !0)
                        })
                    },
                    init: function() {
                        var e;
                        e = "?inquiry" === window.location.search.split("=")[0] ? window.location.search.replace("?inquiry=", "") : void 0;
                        var i = this,
                            n = this.$el.find(".contact-form");
                        t(".sub-nav a").on("click", function() {
                            var e = t(this).prop("class"),
                                i = t("header.section").find("nav a").filter("." + e);
                            i.click()
                        });
                        var r = t(this).prop("class"),
                            a = t("header.section").find("nav a").filter("." + r);
                        a.click(), this.heroes = h, this.mv = new m, this.pv = new g({
                            el: this.el,
                            parent: this
                        }), this.fv = new s({
                            el: this.$el,
                            form: n,
                            reveal: !0,
                            inquiry: e
                        }), this.$el.find(".pane .wrapper > div.contact-form").each(function() {
                            i.buildForm(this)
                        });
                        var l, h = [],
                            c = this.$el.find(".cover-image").length - 1;
                        this.$el.find(".cover-image").each(function(t) {
                            l = {}, l.el = this, l.textCompressor = 1.5, t === c && (l.onLoad = function() {
                                i.pv.resize(), window.Born.Events.trigger("page-rendered"), i.$el.find(".cover-image").addClass("perm-fade")
                            }), h.push(new o(l))
                        })
                    },
                    destroy: function() {
                        this.pv.destroy(), this.fv.destroy(), this.mv.destroy(), e.each(this.heroes, function(t) {
                            t.destroy()
                        }), n.prototype.destroy.call(this)
                    },
                    showMap: function() {
                        this.pv.$active.find(".cover-image").addClass("inactive"), this.mv.show()
                    },
                    toggleMap: function(e) {
                        var i = t(e.currentTarget);
                        i.hasClass("active") ? (i.html("view on map"), i.removeClass("active"), this.$el.find(".cover-image").css("opacity", 1), this.mv.hide()) : (i.html("hide map"), i.addClass("active"), this.$el.find(".cover-image").css("opacity", 0), this.mv.show())
                    },
                    buildForm: function(e) {
                        var i = t('<ul class="right">'),
                            n = t('<div class="border-container">'),
                            s = t(e).find("form"),
                            o = s.find(".gform_body"),
                            r = s.find(".float-right").filter(function() {
                                return "list-item" === t(this).css("display") || "" === t(this).css("display")
                            }),
                            a = s.find(".resume-wrapper"),
                            l = s.find(".greeting");
                        o.prepend(l), o.append(i), i.append(r), i.append(n), n.append(a), o.find(">ul.gform_fields").addClass("left"), s.find("input, textarea, select").each(function() {
                            t(this).attr("tabindex", -1)
                        })
                    },
                    events: {
                        "click .map": function(t) {
                            this.toggleMap(t)
                        },
                        "click .transport": function(t) {
                            var e = this.$el.find(".pane.active .transport-info").clone().html();
                            new r({
                                className: "transport-info modal",
                                content: e
                            }).render().show()
                        },
                        "change form .inquiry-type select": function(e) {
                            var i = this;
                            t(document).off("gform_post_conditional_logic"), t(document).on("gform_post_conditional_logic", function() {
                                setTimeout(function() {
                                    if (!t(".modal.contact-form")[0] && !i.cfm) {
                                        var e = i.pv.$active.find(".contact-form form").first();
                                        i.cfm = new a({
                                            $form: e,
                                            parent: i
                                        })
                                    }
                                }, 0)
                            })
                        },
                        "mouseenter header.section nav > ul > li": function(e) {
                            var i = t(e.currentTarget),
                                n = i.index();
                            i.siblings().filter(".hover").removeClass("hover"), i.addClass("hover"), this.$el.find(".dropdowns .dropdown.active").removeClass("active"), t(this.$el.find(".dropdowns .dropdown")[n]).addClass("active")
                        },
                        "mouseleave header.section": function(t) {
                            this.$el.find("header.section nav > ul > li.hover").removeClass("hover"), this.$el.find(".dropdowns .dropdown.active").removeClass("active")
                        }
                    }
                });
            return v
        }), define("views/home", ["jquery", "underscore", "backbone", "views/page", "views/tab", "views/tile"], function(t, e, i, n, s, o) {
            var r = function(t, e, i) {
                    return Math.max(e, Math.min(i, t))
                },
                a = i.View.extend({
                    initialize: function() {
                        console.log("hero view initialized"), t(window).on("resize.hero", e.bind(this.resize, this)), t(window).on("scroll.hero", e.bind(this.scroll, this)), this.BV = new t.BigVideo({
                            doLoop: !0,
                            shrinkable: !1,
                            controls: !1,
                            container: this.$el
                        }), this.BV.init(this.$el), this.$title = this.$el.find("h4").last(), this.$title.fitText(1.1), this.$sub = this.$el.find(".sub"), this.$bigVideoWrap = this.$el.find("#big-video-wrap"), this.$changes = this.$el.find(".changes"), this.$circle = this.$el.find(".circle-draw"), this.$arrow = this.$el.find(".arrow-down"), window.Born.mobile ? window.Born.Events.trigger("page-rendered") : this.initVideo(), e.defer(e.bind(this.resize, this))
                    },
                    showFirstFrame: function() {
                        this.BV.show("http://www.borngroup.com/wp-content/uploads/2014/11/gorillaz-first-frame.png"), window.Born.Events.trigger("page-rendered")
                    },
                    initVideo: function() {
                        var i = this;
                        this.playVideo(), this.BV.getPlayer().ready(function() {
                            e.defer(function() {
                                window.Born.Events.trigger("page-rendered")
                            }), t.cookie("has-visited") ? (i.showVideo(), i.lastFrame()) : (i.introAnimation(), t.cookie("has-visited", !0, 365))
                        })
                    },
                    lock: function() {
                        t("body").css("overflow", "hidden")
                    },
                    unlock: function() {
                        t("body").css("overflow", "")
                    },
                    introAnimation: function() {
                        var i = this;
                        this.lock(), t("header.global").removeClass("in-view"), e.delay(function() {
                            e.defer(function() {
                                i.$changes.addClass("active"), i.stagger(i.$changes)
                            }), e.delay(function() {
                                i.showVideo(), i.$changes.removeClass("active"), e.delay(function() {
                                    i.$changes.hide(), t("header.global").addClass("in-view"), e.delay(function() {
                                        i.lastFrame(), i.unlock()
                                    }, 500)
                                }, 1e3)
                            }, 3e3)
                        }, 1e3)
                    },
                    lastFrame: function() {
                        var t = this;
                        this.$sub.addClass("active"), this.$title.addClass("active"), t.initialized = !0, e.delay(function() {
                            t.stagger(t.$title), t.$title.addClass("complete"), e.delay(function() {
                                t.$sub.show(), t.stagger(t.$sub.find("p")), t.$sub.addClass("complete"), e.delay(function() {
                                    t.$sub.find("a").css({
                                        opacity: 1
                                    }), e.delay(function() {
                                        t.$circle.addClass("active"), e.delay(function() {
                                            t.$circle.addClass("hide"), e.delay(function() {
                                                t.$arrow.addClass("active")
                                            }, 900)
                                        }, 1e3)
                                    }, 800)
                                }, 500), t.resize()
                            }, 1200)
                        }, 100)
                    },
                    stagger: function(i) {
                        i.lettering().children().each(function(i) {
                            var n, s = t(this);
                            n = i % 2 ? 700 * r(Math.random(), 0, .4) : 700 * r(Math.random(), .6, 1), e.delay(function() {
                                s.css({
                                    opacity: 1
                                })
                            }, n)
                        }), e.defer(function() {
                            i.show()
                        })
                    },
                    playVideo: function() {
                        this.BV.show([{
                            type: "video/mp4",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/Gorilla-master-vid_1_12_1_1.mp4"
                        }, {
                            type: "video/webm",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/Gorilla-master-vid_1_12_1_1.webm"
                        }, {
                            type: "video/ogg",
                            src: "http://www.borngroup.com/wp-content/uploads/2014/11/Gorilla-master-vid_1_12_1_1.ogg"
                        }], {
                            ambient: !0
                        })
                    },
                    showVideo: function() {
                        this.$bigVideoWrap.css({
                            opacity: 1
                        })
                    },
                    scroll: function() {
                        if (this.initialized) {
                            var e = t(window).scrollTop(),
                                i = t("header.section").outerHeight(),
                                n = e + i - this.offset,
                                s = n / this.$el.height(),
                                o = this.$title.height();
                            this.$el.find("h4").css({
                                opacity: 1 - 2 * s,
                                "margin-top": -(150 * s * 4 + o / 2)
                            }), this.$el.find(".sub").css({
                                opacity: 1 - 2 * s,
                                "margin-top": -(150 * s * 4) + 50
                            }), this.$arrow.filter(".active").css({
                                opacity: 1 - 2 * s,
                                bottom: 150 * s * 4 + 30
                            });
                            var r = this.$el.height();
                            this.$bigVideoWrap.css({
                                "margin-top": -(r / 4) * s
                            }), .15 >= s && this.$el.hasClass("fade") ? this.$el.removeClass("fade") : s > .15 && !this.$el.hasClass("fade") && this.$el.addClass("fade"), s > 1 || (this.move = !0)
                        }
                    },
                    resize: function() {
                        var e = t(window).height();
                        this.$el.height(e), this.offset = 0, t(window).trigger("scroll"), window.Born.mobile || this.$el.next().css("margin-top", e)
                    },
                    destroy: function() {
                        this.undelegateEvents(), this.$el.removeData().unbind();
                        var t = this,
                            e = this.BV.getPlayer();
                        e.pause(), setTimeout(function() {
                            t.BV.dispose()
                        }, 0), i.View.prototype.remove.call(this)
                    }
                }),
                l = n.extend({
                    initialize: function() {
                        console.log("initialized home"), this.hv = new a({
                            el: this.$el.find("#video-lead")
                        }), this.$el.addClass("active"), navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                    },
                    destroy: function() {
                        this.hv.destroy(), n.prototype.remove.call(this)
                    },
                    events: {
                        "click .arrow-down": function(e) {
                            var i = t(e.currentTarget),
                                n = i.parent().next().offset().top;
                            t("html, body").animate({
                                scrollTop: n
                            }, 550)
                        }
                    }
                });
            return l
        }), define("views/newsletter", ["jquery", "underscore", "backbone", "views/page"], function(t, e, i, n) {
            var s = n.extend({
                initialize: function() {
                    this.reset(), window.located_.done(e.bind(function() {
                        this.$el.find(".location input").val(window.geolocation)
                    }, this)), n.prototype.initialize.call(this)
                },
                reset: function() {
                    this.$form = this.$el.find("form"), this.$submit = this.$form.find("#gform_submit_button_3"), this.$inputs = this.$form.find('input[type="text"], textarea, select'), this.$newsletter = this.$el.find("#newsletter"), this.render(), this.delegateEvents()
                },
                render: function() {
                    this.$inputs.each(function() {
                        var e = t(this).closest("li").find("label");
                        t(this).attr("placeholder", e.text()), t(this).is("textarea") || e.before('<span class="check"></span>')
                    }), this.$formFields && this.$formFields.find('input[type="file"]').each(function() {
                        t(this).before(t('<div class="mask">Upload File</div>'))
                    })
                },
                toggleLabel: function(e) {
                    this.$inputs.each(function() {
                        var e = t(this).parent().parent().find("label");
                        if ("" === t(this).val()) e.removeClass("active");
                        else {
                            if (e.hasClass("active")) return;
                            e.addClass("active")
                        }
                    })
                },
                validateInput: function(e) {
                    var i = t(e.currentTarget) || e,
                        n = t(e.currentTarget).val(),
                        s = i.closest("li").attr("id");
                    "field_3_2" === s || "field_2_1" === s ? this.validateEmail(n) ? (i.closest("li").removeClass("error"), i.closest("li").addClass("validated")) : (i.closest("li").removeClass("validated"), i.closest("li").addClass("error")) : "" !== n ? (i.closest("li").removeClass("error"), i.closest("li").addClass("validated")) : (i.closest("li").removeClass("validated"), i.closest("li").addClass("error"))
                },
                validateEmail: function(t) {
                    var e = /\S+@\S+\.\S+/;
                    return e.test(t)
                },
                loading: function() {
                    this.$el.find("#gform_wrapper_2").addClass("loading"), this.$el.find("form#gform_2").addClass("loading")
                },
                events: {
                    "keyup .ginput_container input": "toggleLabel",
                    "keyup .ginput_container textarea": "toggleLabel",
                    "focusout input": function(t) {
                        this.validateInput(t)
                    },
                    "submit form": function(e) {
                        var i = t(e.currentTarget),
                            n = i.serializeArray(),
                            s = this;
                        this.validateEmail(t("#input_2_1").val()) ? (this.loading(), t.post("/subscribe", n, function(e) {
                            var i = t(e);
                            s.$newsletter.css("opacity", 0), s.$confirmation && s.$confirmation.remove(), s.$suggestions && s.$suggestions.remove(), s.$confirmation = s.$el.find(".confirmation").clone(), s.$suggestions = s.$el.find("#suggestions").clone(), setTimeout(function() {
                                s.$newsletter.html(""), s.$confirmation.show().find(".s").addClass("scroll-in-view"), s.$suggestions.show().find(".s").addClass("scroll-in-view"), i.find("#newsletter > *").appendTo(s.$newsletter), 0 === s.$el.find(".validation_error").length && (t("html, body").animate({
                                    scrollTop: 0
                                }), s.$confirmation.appendTo(s.$newsletter), s.$newsletter.closest(".wrapper").after(s.$suggestions.show()), t("#content.newsletter #newsletter").css("min-height", "0")), s.$newsletter.find(".sub-head").hide(), s.$newsletter.css("opacity", 1), s.reset(), t(window).scroll(), window.gf_submitting_2 = !1
                            }, 500)
                        })) : window.gf_submitting_2 = !1, e.preventDefault()
                    }
                }
            });
            return s
        }), define("text!templates/post.html", [], function() {
            return '<li class="<% if (post.alt) { %>alt<% } %> <% if (post.dark) { %>dark<% } %> <% if (!post.featured_image) { %>big-text<% } %>" <% if (post.dark) { %>data-nav-color="#fff"<% } %>>\r\n\r\n    <% if (post.featured_image) { %>\r\n    <a href="<%= post.link %>">\r\n        <div class="top scroll-in-view">\r\n            <div class=\'image\'>\r\n                <img src="<%= post.featured_image.source %>">\r\n            </div>\r\n            <!-- <div class="black-bg"></div> -->\r\n        </div>\r\n    </a>\r\n    <% } %>\r\n\r\n      <div class="content scroll-in-view">\r\n        <div>\r\n            <a href="<%= post.link %>"><h4 <% if (post.excerpt) { %> "class=\'big\'" <% } %> ><%= post.title %></h4></a>\r\n\r\n            <div class="meta">\r\n                <%= post.human_time %>\r\n                <% _.each(post.category, function (cat) { %>\r\n                    <a href="<%= cat.link %>"><%= cat.name %></a>\r\n                <% }) %>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</li>'
        }), define("views/page-blog", ["jquery", "underscore", "backbone", "views/page", "views/tweet", "text!templates/post.html"], function(t, e, i, n, s, o) {
            "use strict";
            var r = n.extend({
                initialize: function() {
                    console.log("initialized page blog view"), n.prototype.initialize.call(this), t(".sub-nav a").on("click", function() {
                        var e = t(this).prop("class"),
                            i = t("header.section").find("nav a").filter("." + e);
                        i.click()
                    }), this.$anchors = this.$el.find("#anchors a"), this.$posts = this.$el.find(".post-teasers"), this.page = 0, this.alt = !0;
                    var i = [];
                    t("#spare-tweets .tweet").each(function() {
                        i.push(t(this).clone().addClass("scroll-in-view"))
                    }), i.shift(), this.$spareTweets = i.reverse(), t(window).on("scroll.blog", e.bind(this.onScroll, this))
                },
                onScroll: function() {
                    console.log("scrolling");
                    var e = t(window),
                        i = this.pxFromBottom(e.height(), e.scrollTop());
                    2e3 > i && !this.loading && this.loadNextPage(!0)
                },
                loadNextPage: function(i) {
                    this.loading = !0, this.page++, this.$el.addClass("loading");
                    var n = t(this.$anchors[this.page]).attr("href");
                    t.get(n, e.bind(this.renderPosts, this)), i && this.loadNextPage()
                },
                renderPosts: function(i) {
                    var n = this,
                        s = Math.floor(6 * Math.random());
                    e.each(i, function(i, r) {
                        r % 2 === 0 && (n.alt = !n.alt), r % 2 === 0 && (n.dark = !0), i.alt = n.alt, i.dark = n.dark, n.dark = !1;
                        var a = t(e.template(o, {
                            post: i
                        }));
                        if (a.appendTo(n.$posts), r === s) {
                            var l = n.$spareTweets.pop();
                            console.log(n.$spareTweets), l && (l.appendTo(n.$posts), t(window).resize())
                        }
                    }), n.loading = !1
                },
                pxFromBottom: function(e, i) {
                    return t(document).height() - (e + i)
                },
                destroy: function() {
                    t(window).off("scroll.blog"), n.prototype.destroy.call(this)
                }
            });
            return r
        }), define("views/post-single", ["jquery", "underscore", "backbone", "views/page", "views/sticky-block", "views/social-media"], function(t, e, i, n, s, o) {
            var r = n.extend({
                initialize: function() {
                    console.log("initialized page blog single view");
                    var e = this;
                    n.prototype.initialize.call(this), t("h1").first().fitText(1.2, {
                        maxFontSize: "55px",
                        minFontSize: "26px"
                    }), this.$el.find(".post div").css("width", "auto"), this.$el.find(".post-teasers .image").each(function() {
                        var e = t(this).find("img").attr("src");
                        t(this).backstretch(e)
                    }), new o({
                        el: this.$el.find(".social")
                    }), this.$el.imagesLoaded(function() {
                        new s({
                            el: e.$el.find(".right"),
                            paddingTop: 90,
                            $cutOff: t(".divider")
                        })
                    })
                }
            });
            return r
        }), define("views/video-background", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function(i) {
                    this.parent = i.parent, this.resize();
                    var n = this;
                    n.$el.find(".toggle").css("z-index", "-10");
                    var s = function() {
                        e.delay(e.bind(n.resize, n), 100)
                    };
                    t(window).on("resize.vbg", e.debounce(s))
                },
                resize: function() {
                    this.$el.hasClass("active") && this.center()
                },
                center: function() {
                    var i = this,
                        n = t(window).height(),
                        s = this.parent.$el.height(),
                        o = this.parent.$el.offset().top,
                        r = (n - s) / 2,
                        a = o - r;
                    this.$el.hasClass("active") ? t.when(t("html, body").animate({
                        scrollTop: a
                    }, 150)).then(e.bind(i.build, i)) : (t("body").addClass("video"), t.when(t("html, body").animate({
                        scrollTop: a
                    }, 150)).then(e.bind(i.toggle, i)))
                },
                toggle: function() {
                    var e = this;
                    e.$el.find(".toggle").css("z-index", ""), this.$el.hasClass("active") ? (this.$el.removeClass("active"), setTimeout(function() {
                        e.$el.css({
                            height: "",
                            top: ""
                        }), setTimeout(function() {
                            e.$el.find(".toggle").removeClass("active"), e.$el.find(".toggle").hide(), t("body").removeClass("video")
                        }, 1e3)
                    }, 600)) : (t("body").addClass("video"), this.$el.addClass("active"), setTimeout(function() {
                        e.$el.find(".toggle").addClass("active"), e.$el.find(".toggle").show()
                    }, 1e3), t("header.section").fadeOut(), this.build())
                },
                build: function() {
                    var e = t(window).scrollTop(),
                        i = -(this.parent.$el.offset().top - e),
                        n = t(window).height();
                    console.log(this), this.$el.css({
                        height: n,
                        top: i
                    })
                },
                destroy: function() {
                    t(window).off(this.resize)
                }
            });
            return n
        }), define("views/video", ["jquery", "underscore", "backbone", "views/video-background"], function(t, e, i, n) {
            var s = i.View.extend({
                initialize: function() {
                    this.$iframe = this.$el.find("iframe"), this.vbg = new n({
                        el: this.$el.find(".video-background"),
                        parent: this
                    }), this.$iframe.attr("src", this.$iframe.attr("src") + "?api=1"), this.player = $f(this.$iframe[0]);
                    var e = this;
                    this.player.addEvent("ready", function() {
                        e.player.addEvent("pause", function() {
                            e.$el.removeClass("active"), e.vbg.toggle()
                        }), t(".video-background .toggle").on("click", function() {
                            e.$el.removeClass("active"), e.vbg.toggle(), e.player.api("pause")
                        })
                    }), this.playButton = document.getElementById("play-button"), this.playButton.addEventListener("click", function() {
                        e.player.api("play")
                    })
                },
                destroy: function() {},
                events: {
                    "click .image": function() {
                        window.Born.mobile || this.vbg.center(), this.$el.addClass("active")
                    }
                }
            });
            return s
        }), define("views/project-single", ["jquery", "underscore", "backbone", "views/page", "views/slider", "views/hero-image", "views/tweet", "views/social-media", "views/video"], function(t, e, i, n, s, o, r, a, l) {
            var h = function(t) {
                    return t.replace(/^url\(["']?/, "").replace(/["']?\)$/, "")
                },
                c = i.View.extend({
                    initialize: function() {
                        this.$widgets = this.$el.find("li"), this.$media = this.$widgets.filter(".media"), this.$media.each(function() {
                            var e = t(this).find("span").css("background-image");
                            e = h(e)
                        }), t(window).on("resize.widgets", e.bind(this.resize, this)), this.resize()
                    },
                    resize: function() {
                        Born.mobile && t(window).width() < 650 ? (t(".cover-image").hide(), t(".cover-mobile-image").show()) : (t(".cover-image").show(), t(".cover-mobile-image").hide());
                        var e, i = 350 / 450;
                        this.$media.each(function() {
                            var n = t(this);
                            e = n.width() / i
                        }), this.$widgets.height(e), console.log(this.$widgets.not(".tweet"))
                    },
                    destroy: function() {
                        t(window).off("resize.widgets")
                    }
                }),
                u = n.extend({
                    initialize: function() {
                        console.log("initialized page view");
                        var t = [];
                        this.$el.find(".slider").each(function() {
                            t.push(new s({
                                el: this,
                                fadeIn: !0
                            }))
                        }), this.sliders = t, this.tweet = new r({
                            el: this.$el.find(".tweet")
                        }), this.hero = new o({
                            el: this.$el.find(".cover-image"),
                            onLoad: function() {
                                window.Born.Events.trigger("page-rendered")
                            },
                            textParams: {
                                minFontSize: "10px"
                            }
                        });
                        var e = [];
                        this.$el.find("div.video:not(.image)").each(function() {
                            e.push(new l({
                                el: this
                            }))
                        }), this.videos = e;
                        var i = this.$el.find(".cover-image").data("image");
                        this.sv = new a({
                            el: this.$el.find(".social"),
                            image: i
                        }), this.wv = new c({
                            el: this.$el.find(".widgets")
                        })
                    },
                    destroy: function() {
                        e.each(this.sliders, function(t) {
                            t.destroy()
                        }), e.each(this.videos, function(t) {
                            t.destroy()
                        }), this.hero.destroy(), this.tweet.destroy(), this.wv.destroy(), n.prototype.destroy.call(this)
                    }
                });
            return u
        }), define("views/filter", ["jquery", "underscore", "backbone"], function(t, e, i) {
            var n = i.View.extend({
                initialize: function(e) {
                    this.parent = e.parent, this.$filters = this.$el.find("ul.filters");
                    var i = [];
                    this.$filters.each(function() {
                        t(this).data("filter") && i.push(t(this).data("filter"))
                    }), console.log(this.$filters), this.filters = i
                },
                show: function(t) {
                    return this.$filters.addClass("active"), this.parent.$el.find("#filter").addClass("hover"), !1
                },
                hide: function(t) {
                    return this.$filters.removeClass("active"), this.parent.$el.find("#filter").removeClass("hover"), !1
                },
                filter: function(e) {
                    var i = t(e.currentTarget),
                        n = i.data("filter");
                    i.hasClass("active") ? (i.removeClass("active"), this.parent.removeFilter(n)) : (i.addClass("active"), this.parent.addFilter(n))
                },
                events: {
                    "mouseenter li#filter": "show",
                    "mouseleave li#filter": "hide",
                    "mouseenter .filters.drop": "show",
                    "mouseleave .filters.drop": "hide",
                    "click li:not(#filter) a": "filter"
                }
            });
            return n
        }), define("views/projects-listing", ["jquery", "underscore", "backbone", "views/page", "views/filter"], function(t, e, i, n, s) {
            var o = (i.View.extend({
                initialize: function() {
                    var e = [];
                    this.$el.find("li").each(function() {
                        var i = t(this),
                            n = i.clone().addClass("copy");
                        n.insertAfter(i), i.css("opacity", 0), e.push({
                            $el: n,
                            $anchor: i
                        })
                    }), this.tiles = e, this.staticUpdate()
                },
                staticUpdate: function() {
                    e.each(this.tiles, function(e, i) {
                        var n = e.$anchor.position();
                        e.$el.css({
                            top: n.top - t("header.global").height(),
                            left: n.left
                        }).removeClass("disabled")
                    })
                },
                resize: function() {
                    e.each(this.tiles, function(e) {
                        var i = e.$anchor.position(),
                            n = e.$anchor.width(),
                            s = e.$anchor.height();
                        e.$el.css({
                            top: i.top - t("header.global").height(),
                            left: i.left,
                            width: n,
                            height: s
                        })
                    })
                },
                update: function() {
                    var i = this;
                    this.$el.addClass("updating");
                    var n = this.tiles.length - 1,
                        s = !0;
                    e.each(this.tiles, function(e, o) {
                        var r = e.$anchor.position();
                        0 === r.top && 0 === r.left ? (e.$el.addClass("disabled"), --n) : (s = !1, setTimeout(function() {
                            e.$el.css({
                                top: r.top - t("header.global").height(),
                                left: r.left
                            }).removeClass("disabled"), o >= n && i.$el.removeClass("updating")
                        }, 15 * o))
                    }), s && this.$el.removeClass("updating")
                }
            }), n.extend({
                initialize: function() {
                    console.log("initialized projects listing view"), this.$projects = this.$el.find(".projects"), n.prototype.initialize.call(this), this.fv = new s({
                        el: this.$el.find("header.section"),
                        parent: this
                    });
                    var i = {};
                    e.each(this.fv.filters, function(t) {
                        i[t] = !1
                    }), this.filters = i, t(".sub-nav a").on("click", function() {
                        var e = t(this).prop("class"),
                            i = t("header.section").find("nav a").filter("." + e);
                        i.click()
                    }), t(window).on("resize.listing", e.throttle(e.bind(this.resize, this), 250))
                },
                resize: function() {
                    console.log("resizing")
                },
                addFilter: function(t) {
                    this.filters[t] = !0, this.update()
                },
                removeFilter: function(t) {
                    this.filters[t] = !1, this.update()
                },
                update: function() {
                    var i = !0,
                        n = this.$projects,
                        s = this;
                    setTimeout(function() {
                        n.find(".active").removeClass("active").removeClass("scroll-in-view"), e.each(s.filters, function(t, e) {
                            t && (n.find("." + e).addClass("active").addClass("scroll-in-view"), i = !1)
                        }), i && n.find("li").addClass("active").addClass("scroll-in-view"), t(window).scroll()
                    }, 250)
                },
                destroy: function() {
                    t(window).off("resize.listing"), n.prototype.destroy.call(this)
                }
            }));
            return o
        }), define("views/offerings", ["jquery", "underscore", "backbone", "backgroundcheck"], function(t, e, i, n) {
            var s = i.View.extend({
                initialize: function(i) {
                    console.log("initialized OfferingsView"), i = i || {}, this.$offerings = this.$el.find(".offerings"), this.$chart = this.$el.find("#services-chart"), this.$toolbar = this.$el.find(".toolbar"), this.$mac = this.$el.find(".mac"), this.$active = this.$offerings.find(".active"), t(window).on("resize.offerings", e.bind(this.resize, this)), this.resize()
                },
                resize: function() {
                    var t = this.$mac.width() / 6,
                        i = this.$mac.find("img").height() / 2.2,
                        n = this.$active.find("h4").fitText(.7);
                    n.css({
                        "margin-top": i - .5 * n.height(),
                        "margin-left": t
                    });
                    var s = e.max([this.$mac.find("img").height(), this.$active.height()]);
                    console.log(s), this.$offerings.height(s)
                },
                next: function(t) {
                    var e = this.$active.next();
                    e[0] && this.gotoOffering(e)
                },
                prev: function(t) {
                    var e = this.$active.prev();
                    e[0] && this.gotoOffering(e)
                },
                viewAll: function(e) {
                    var i = this.$el.find("#services-chart").position().top;
                    t("html, body").animate({
                        scrollTop: i
                    })
                },
                gotoOffering: function(t) {
                    this.$active.removeClass("active"), this.$active = t.addClass("active"), this.updateToolbar(), this.scrollDown(), this.resize()
                },
                updateToolbar: function() {
                    this.$toolbar.find(".state").html(this.$active.data("name"))
                },
                scrollDown: function() {
                    var e = this.$toolbar.position().top - 50;
                    t("html, body").animate({
                        scrollTop: e
                    })
                },
                destroy: function() {
                    t(window).off("resize.offerings")
                },
                events: {
                    "click #services-chart > div": function(e) {
                        var i = t(e.currentTarget),
                            n = this.$offerings.find("." + i.data("offering"));
                        this.gotoOffering(n), console.log(offering)
                    },
                    "click #scroll-down": "scrollDown",
                    "click .toolbar .nav-prev": "prev",
                    "click .toolbar .nav-next": "next",
                    "click .toolbar .all": "viewAll"
                }
            });
            return s
        }), define("views/services", ["jquery", "underscore", "backbone", "views/page", "views/offerings"], function(t, e, i, n, s) {
            var o = n.extend({
                initialize: function() {
                    console.log("initialized page view"), this.setupChart(), this.offerings = new s({
                        el: this.$el
                    }), n.prototype.initialize.call(this)
                },
                setupChart: function() {
                    var i = t("#services-chart > div"),
                        n = i.length - 1;
                    i.each(function(i) {
                        if (i !== n) {
                            var s = t(this),
                                o = s.width();
                            s.find("h2").circleType({
                                radius: o / 2
                            }).css({
                                "margin-top": -o / 4 + 10
                            }), e.delay(function() {
                                s.find("h2").css("height", 0)
                            }, 500)
                        }
                    }), window.Born.mobile && i.hide();
                    var s = [];
                    i.each(function(e) {
                        e === n ? s.unshift(t(this)) : s.push(t(this))
                    }), e.each(s, function(t, i) {
                        ++i, i % 2 !== 0 && (i -= 1);
                        var n = Math.pow(300 + 10 * i, 1.2);
                        e.delay(function() {
                            t.addClass("active")
                        }, n)
                    })
                },
                destroy: function() {
                    this.offerings.destroy(), n.prototype.destroy.call(this)
                }
            });
            return o
        })
}();