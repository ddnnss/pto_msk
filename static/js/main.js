! function () {
	var t, e, n;
	
	! function (r) {
		function i(t, e) {
			return b.call(t, e)
		}

		function o(t, e) {
			var n, r, i, o, s, a, u, l, c, f, d, h = e && e.split("/"),
				p = y.map,
				g = p && p["*"] || {};
			if (t && "." === t.charAt(0))
				if (e) {
					for (t = t.split("/"), s = t.length - 1, y.nodeIdCompat && E.test(t[s]) && (t[s] = t[s].replace(E, "")), t = h.slice(0, h.length - 1).concat(t), c = 0; c < t.length; c += 1)
						if (d = t[c], "." === d) t.splice(c, 1), c -= 1;
						else if (".." === d) {
						if (1 === c && (".." === t[2] || ".." === t[0])) break;
						c > 0 && (t.splice(c - 1, 2), c -= 2)
					}
					t = t.join("/")
				} else 0 === t.indexOf("./") && (t = t.substring(2));
			if ((h || g) && p) {
				for (n = t.split("/"), c = n.length; c > 0; c -= 1) {
					if (r = n.slice(0, c).join("/"), h)
						for (f = h.length; f > 0; f -= 1)
							if (i = p[h.slice(0, f).join("/")], i && (i = i[r])) {
								o = i, a = c;
								break
							}
					if (o) break;
					!u && g && g[r] && (u = g[r], l = c)
				}!o && u && (o = u, a = l), o && (n.splice(0, a, o), t = n.join("/"))
			}
			return t
		}

		function s(t, e) {
			return function () {
				var n = x.call(arguments, 0);
				return "string" != typeof n[0] && 1 === n.length && n.push(null), h.apply(r, n.concat([t, e]))
			}
		}

		function a(t) {
			return function (e) {
				return o(e, t)
			}
		}

		function u(t) {
			return function (e) {
				m[t] = e
			}
		}

		function l(t) {
			if (i(v, t)) {
				var e = v[t];
				delete v[t], _[t] = !0, d.apply(r, e)
			}
			if (!i(m, t) && !i(_, t)) throw new Error("No " + t);
			return m[t]
		}

		function c(t) {
			var e, n = t ? t.indexOf("!") : -1;
			return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
		}

		function f(t) {
			return function () {
				return y && y.config && y.config[t] || {}
			}
		}
		var d, h, p, g, m = {},
			v = {},
			y = {},
			_ = {},
			b = Object.prototype.hasOwnProperty,
			x = [].slice,
			E = /\.js$/;
		p = function (t, e) {
			var n, r = c(t),
				i = r[0];
			return t = r[1], i && (i = o(i, e), n = l(i)), i ? t = n && n.normalize ? n.normalize(t, a(e)) : o(t, e) : (t = o(t, e), r = c(t), i = r[0], t = r[1], i && (n = l(i))), {
				f: i ? i + "!" + t : t,
				n: t,
				pr: i,
				p: n
			}
		}, g = {
			require: function (t) {
				return s(t)
			},
			exports: function (t) {
				var e = m[t];
				return "undefined" != typeof e ? e : m[t] = {}
			},
			module: function (t) {
				return {
					id: t,
					uri: "",
					exports: m[t],
					config: f(t)
				}
			}
		}, d = function (t, e, n, o) {
			var a, c, f, d, h, y, b = [],
				x = typeof n;
			if (o = o || t, "undefined" === x || "function" === x) {
				for (e = !e.length && n.length ? ["require", "exports", "module"] : e, h = 0; h < e.length; h += 1)
					if (d = p(e[h], o), c = d.f, "require" === c) b[h] = g.require(t);
					else if ("exports" === c) b[h] = g.exports(t), y = !0;
				else if ("module" === c) a = b[h] = g.module(t);
				else if (i(m, c) || i(v, c) || i(_, c)) b[h] = l(c);
				else {
					if (!d.p) throw new Error(t + " missing " + c);
					d.p.load(d.n, s(o, !0), u(c), {}), b[h] = m[c]
				}
				f = n ? n.apply(m[t], b) : void 0, t && (a && a.exports !== r && a.exports !== m[t] ? m[t] = a.exports : f === r && y || (m[t] = f))
			} else t && (m[t] = n)
		}, t = e = h = function (t, e, n, i, o) {
			if ("string" == typeof t) return g[t] ? g[t](e) : l(p(t, e).f);
			if (!t.splice) {
				if (y = t, y.deps && h(y.deps, y.callback), !e) return;
				e.splice ? (t = e, e = n, n = null) : t = r
			}
			return e = e || function () {}, "function" == typeof n && (n = i, i = o), i ? d(r, t, e, n) : setTimeout(function () {
				d(r, t, e, n)
			}, 4), h
		}, h.config = function (t) {
			return h(t)
		}, t._defined = m, n = function (t, e, n) {
			if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
			e.splice || (n = e, e = []), i(m, t) || i(v, t) || (v[t] = [t, e, n])
		}, n.amd = {
			jQuery: !0
		}
	}(), n("bower_components/almond/almond", function () {}), n("jquery", [], function () {
			"use strict";
			return jQuery
		}), n("underscore", [], function () {
			"use strict";
			return _
		}),
		function (t, e) {
			"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof n && n.amd ? n("stampit", e) : "object" == typeof exports ? exports.stampit = e() : t.stampit = e()
		}(this, function () {
			return function (t) {
				function e(r) {
					if (n[r]) return n[r].exports;
					var i = n[r] = {
						exports: {},
						id: r,
						loaded: !1
					};
					return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
				}
				var n = {};
				return e.m = t, e.c = n, e.p = "", e(0)
			}([function (t, e, n) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}

				function i(t) {
					return t && _["default"](t.then)
				}

				function o() {
					for (var t = [], e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
					return _["default"](n[0]) ? v["default"](n, function (e) {
						_["default"](e) && t.push(e)
					}) : x["default"](n[0]) && v["default"](n, function (e) {
						v["default"](e, function (e) {
							_["default"](e) && t.push(e)
						})
					}), t
				}

				function s(t) {
					for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
					return E.mixinFunctions.apply(void 0, [t.methods].concat(n))
				}

				function a(t) {
					for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
					return t.refs = t.state = E.mixin.apply(void 0, [t.refs].concat(n)), t.refs
				}

				function u(t) {
					for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
					var i = o.apply(void 0, n);
					return t.init = t.enclose = t.init.concat(i), t.init
				}

				function l(t) {
					for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
					return E.merge.apply(void 0, [t.props].concat(n))
				}

				function c(t) {
					for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
					return E.mixin.apply(void 0, [t["static"]].concat(n))
				}

				function f(t, e) {
					for (var n = w(t), r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; r > o; o++) i[o - 2] = arguments[o];
					return e.apply(void 0, [n.fixed].concat(i)), n
				}

				function d() {
					for (var t = w(), e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
					return v["default"](n, function (e) {
						e && e.fixed && (s(t.fixed, e.fixed.methods), a(t.fixed, e.fixed.refs || e.fixed.state), u(t.fixed, e.fixed.init || e.fixed.enclose), l(t.fixed, e.fixed.props), c(t.fixed, e.fixed["static"]))
					}), E.mixin(t, t.fixed["static"])
				}

				function h(t) {
					return _["default"](t) && _["default"](t.methods) && (_["default"](t.refs) || _["default"](t.state)) && (_["default"](t.init) || _["default"](t.enclose)) && _["default"](t.props) && _["default"](t["static"]) && x["default"](t.fixed)
				}

				function p(t) {
					var e = w();
					return e.fixed.refs = e.fixed.state = E.mergeChainNonFunctions(e.fixed.refs, t.prototype), E.mixin(e, E.mixin(e.fixed["static"], t)), E.mixinChainFunctions(e.fixed.methods, t.prototype), u(e.fixed, function (e) {
						var n = e.instance,
							r = e.args;
						return t.apply(n, r)
					}), e
				}

				function g(t) {
					for (var e = w(), n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) r[i - 1] = arguments[i];
					return t.apply(void 0, [e.fixed].concat(r)), e
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var m = n(1),
					v = r(m),
					y = n(12),
					_ = r(y),
					b = n(8),
					x = r(b),
					E = n(27),
					A = Object.create,
					w = function (t) {
						var e = {
							methods: {},
							refs: {},
							init: [],
							props: {},
							"static": {}
						};
						e.state = e.refs, e.enclose = e.init, t && (s(e, t.methods), a(e, t.refs), u(e, t.init), l(e, t.props), c(e, t["static"]));
						var n = function (t) {
								for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), s = 1; r > s; s++) o[s - 1] = arguments[s];
								var a = E.mixin(A(e.methods), e.refs, t);
								E.mergeUnique(a, e.props);
								var u = null;
								return e.init.length > 0 && v["default"](e.init, function (t) {
									if (_["default"](t))
										if (u) u = u.then(function (e) {
											a = e || a;
											var r = t.call(a, {
												args: o,
												instance: a,
												stamp: n
											});
											return r ? i(r) ? r : a = r : a
										});
										else {
											var e = t.call(a, {
												args: o,
												instance: a,
												stamp: n
											});
											if (!e) return;
											if (!i(e)) return void(a = e);
											u = e
										}
								}), u ? u.then(function (t) {
									return t || a
								}) : a
							},
							r = f.bind(null, e, a),
							o = f.bind(null, e, u);
						return E.mixin(n, {
							create: n,
							fixed: e,
							methods: f.bind(null, e, s),
							refs: r,
							state: r,
							init: o,
							enclose: o,
							props: f.bind(null, e, l),
							"static": function () {
								for (var t = arguments.length, e = Array(t), r = 0; t > r; r++) e[r] = arguments[r];
								var i = f.apply(void 0, [n.fixed, c].concat(e));
								return E.mixin(i, i.fixed["static"])
							},
							compose: function () {
								for (var t = arguments.length, e = Array(t), r = 0; t > r; r++) e[r] = arguments[r];
								return d.apply(void 0, [n].concat(e))
							}
						}, e["static"])
					};
				e["default"] = E.mixin(w, {
					methods: g.bind(null, s),
					refs: g.bind(null, a),
					init: g.bind(null, u),
					props: g.bind(null, l),
					"static": function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = g.apply(void 0, [c].concat(e));
						return E.mixin(r, r.fixed["static"])
					},
					compose: d,
					mixin: E.mixin,
					extend: E.mixin,
					mixIn: E.mixin,
					assign: E.mixin,
					isStamp: h,
					convertConstructor: p
				}), t.exports = e["default"]
			}, function (t, e, n) {
				var r = n(2),
					i = n(3),
					o = n(24),
					s = o(r, i);
				t.exports = s
			}, function (t, e) {
				function n(t, e) {
					for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
					return t
				}
				t.exports = n
			}, function (t, e, n) {
				var r = n(4),
					i = n(23),
					o = i(r);
				t.exports = o
			}, function (t, e, n) {
				function r(t, e) {
					return i(t, e, o)
				}
				var i = n(5),
					o = n(9);
				t.exports = r
			}, function (t, e, n) {
				var r = n(6),
					i = r();
				t.exports = i
			}, function (t, e, n) {
				function r(t) {
					return function (e, n, r) {
						for (var o = i(e), s = r(e), a = s.length, u = t ? a : -1; t ? u-- : ++u < a;) {
							var l = s[u];
							if (n(o[l], l, o) === !1) break
						}
						return e
					}
				}
				var i = n(7);
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return i(t) ? t : Object(t)
				}
				var i = n(8);
				t.exports = r
			}, function (t, e) {
				function n(t) {
					var e = typeof t;
					return !!t && ("object" == e || "function" == e)
				}
				t.exports = n
			}, function (t, e, n) {
				var r = n(10),
					i = n(14),
					o = n(8),
					s = n(18),
					a = r(Object, "keys"),
					u = a ? function (t) {
						var e = null == t ? void 0 : t.constructor;
						return "function" == typeof e && e.prototype === t || "function" != typeof t && i(t) ? s(t) : o(t) ? a(t) : []
					} : s;
				t.exports = u
			}, function (t, e, n) {
				function r(t, e) {
					var n = null == t ? void 0 : t[e];
					return i(n) ? n : void 0
				}
				var i = n(11);
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return null == t ? !1 : i(t) ? c.test(u.call(t)) : o(t) && s.test(t)
				}
				var i = n(12),
					o = n(13),
					s = /^\[object .+?Constructor\]$/,
					a = Object.prototype,
					u = Function.prototype.toString,
					l = a.hasOwnProperty,
					c = RegExp("^" + u.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return i(t) && a.call(t) == o
				}
				var i = n(8),
					o = "[object Function]",
					s = Object.prototype,
					a = s.toString;
				t.exports = r
			}, function (t, e) {
				function n(t) {
					return !!t && "object" == typeof t
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					return null != t && o(i(t))
				}
				var i = n(15),
					o = n(17);
				t.exports = r
			}, function (t, e, n) {
				var r = n(16),
					i = r("length");
				t.exports = i
			}, function (t, e) {
				function n(t) {
					return function (e) {
						return null == e ? void 0 : e[t]
					}
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					return "number" == typeof t && t > -1 && t % 1 == 0 && r >= t
				}
				var r = 9007199254740991;
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					for (var e = u(t), n = e.length, r = n && t.length, l = !!r && a(r) && (o(t) || i(t)), f = -1, d = []; ++f < n;) {
						var h = e[f];
						(l && s(h, r) || c.call(t, h)) && d.push(h)
					}
					return d
				}
				var i = n(19),
					o = n(20),
					s = n(21),
					a = n(17),
					u = n(22),
					l = Object.prototype,
					c = l.hasOwnProperty;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return o(t) && i(t) && a.call(t, "callee") && !u.call(t, "callee")
				}
				var i = n(14),
					o = n(13),
					s = Object.prototype,
					a = s.hasOwnProperty,
					u = s.propertyIsEnumerable;
				t.exports = r
			}, function (t, e, n) {
				var r = n(10),
					i = n(17),
					o = n(13),
					s = "[object Array]",
					a = Object.prototype,
					u = a.toString,
					l = r(Array, "isArray"),
					c = l || function (t) {
						return o(t) && i(t.length) && u.call(t) == s
					};
				t.exports = c
			}, function (t, e) {
				function n(t, e) {
					return t = "number" == typeof t || r.test(t) ? +t : -1, e = null == e ? i : e, t > -1 && t % 1 == 0 && e > t
				}
				var r = /^\d+$/,
					i = 9007199254740991;
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					if (null == t) return [];
					u(t) || (t = Object(t));
					var e = t.length;
					e = e && a(e) && (o(t) || i(t)) && e || 0;
					for (var n = t.constructor, r = -1, l = "function" == typeof n && n.prototype === t, f = Array(e), d = e > 0; ++r < e;) f[r] = r + "";
					for (var h in t) d && s(h, e) || "constructor" == h && (l || !c.call(t, h)) || f.push(h);
					return f
				}
				var i = n(19),
					o = n(20),
					s = n(21),
					a = n(17),
					u = n(8),
					l = Object.prototype,
					c = l.hasOwnProperty;
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					return function (n, r) {
						var a = n ? i(n) : 0;
						if (!o(a)) return t(n, r);
						for (var u = e ? a : -1, l = s(n);
							(e ? u-- : ++u < a) && r(l[u], u, l) !== !1;);
						return n
					}
				}
				var i = n(15),
					o = n(17),
					s = n(7);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					return function (n, r, s) {
						return "function" == typeof r && void 0 === s && o(n) ? t(n, r) : e(n, i(r, s, 3))
					}
				}
				var i = n(25),
					o = n(20);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n) {
					if ("function" != typeof t) return i;
					if (void 0 === e) return t;
					switch (n) {
					case 1:
						return function (n) {
							return t.call(e, n)
						};
					case 3:
						return function (n, r, i) {
							return t.call(e, n, r, i)
						};
					case 4:
						return function (n, r, i, o) {
							return t.call(e, n, r, i, o)
						};
					case 5:
						return function (n, r, i, o, s) {
							return t.call(e, n, r, i, o, s)
						}
					}
					return function () {
						return t.apply(e, arguments)
					}
				}
				var i = n(26);
				t.exports = r
			}, function (t, e) {
				function n(t) {
					return t
				}
				t.exports = n
			}, function (t, e, n) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = n(28),
					o = r(i),
					s = n(12),
					a = r(s),
					u = function (t) {
						return !a["default"](t)
					},
					l = o["default"](),
					c = o["default"]({
						filter: a["default"]
					}),
					f = o["default"]({
						filter: a["default"],
						chain: !0
					}),
					d = o["default"]({
						deep: !0
					}),
					h = o["default"]({
						deep: !0,
						noOverwrite: !0
					}),
					p = o["default"]({
						filter: u,
						deep: !0,
						chain: !0
					});
				e["default"] = o["default"], e.mixin = l, e.mixinFunctions = c, e.mixinChainFunctions = f, e.merge = d, e.mergeUnique = h, e.mergeChainNonFunctions = p
			}, function (t, e, n) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}

				function i() {
					var t = void 0 === arguments[0] ? {} : arguments[0];
					return t.deep && !t._innerMixer && (t._innerMixer = !0, t._innerMixer = i(t)),
						function (e) {
							function n(n, r) {
								var i = e[r];
								if (!t.filter || t.filter(n, i, r)) {
									var o = t.deep ? t._innerMixer(i, n) : n;
									e[r] = t.transform ? t.transform(o, i, r) : o
								}
							}
							for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; r > o; o++) i[o - 1] = arguments[o];
							if (p["default"](e) || !t.noOverwrite && !d["default"](e)) return i.length > 1 ? t._innerMixer.apply(t, [{}].concat(i)) : c["default"](i[0]);
							if (t.noOverwrite && (!d["default"](e) || !d["default"](i[0]))) return e;
							var a = t.chain ? u["default"] : s["default"];
							return i.forEach(function (t) {
								a(t, n)
							}), e
						}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e["default"] = i;
				var o = n(29),
					s = r(o),
					a = n(31),
					u = r(a),
					l = n(33),
					c = r(l),
					f = n(8),
					d = r(f),
					h = n(42),
					p = r(h);
				t.exports = e["default"]
			}, function (t, e, n) {
				var r = n(4),
					i = n(30),
					o = i(r);
				t.exports = o
			}, function (t, e, n) {
				function r(t) {
					return function (e, n, r) {
						return ("function" != typeof n || void 0 !== r) && (n = i(n, r, 3)), t(e, n)
					}
				}
				var i = n(25);
				t.exports = r
			}, function (t, e, n) {
				var r = n(5),
					i = n(32),
					o = i(r);
				t.exports = o
			}, function (t, e, n) {
				function r(t) {
					return function (e, n, r) {
						return ("function" != typeof n || void 0 !== r) && (n = i(n, r, 3)), t(e, n, o)
					}
				}
				var i = n(25),
					o = n(22);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n) {
					return "function" == typeof e ? i(t, !0, o(e, n, 1)) : i(t, !0)
				}
				var i = n(34),
					o = n(25);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n, p, g, m, v) {
					var _;
					if (n && (_ = g ? n(t, p, g) : n(t)), void 0 !== _) return _;
					if (!d(t)) return t;
					var b = f(t);
					if (b) {
						if (_ = u(t), !e) return i(t, _)
					} else {
						var E = $.call(t),
							A = E == y;
						if (E != x && E != h && (!A || g)) return P[E] ? l(t, E, e) : g ? t : {};
						if (_ = c(A ? {} : t), !e) return s(_, t)
					}
					m || (m = []), v || (v = []);
					for (var w = m.length; w--;)
						if (m[w] == t) return v[w];
					return m.push(t), v.push(_), (b ? o : a)(t, function (i, o) {
						_[o] = r(i, e, n, o, t, m, v)
					}), _
				}
				var i = n(35),
					o = n(2),
					s = n(36),
					a = n(4),
					u = n(38),
					l = n(39),
					c = n(41),
					f = n(20),
					d = n(8),
					h = "[object Arguments]",
					p = "[object Array]",
					g = "[object Boolean]",
					m = "[object Date]",
					v = "[object Error]",
					y = "[object Function]",
					_ = "[object Map]",
					b = "[object Number]",
					x = "[object Object]",
					E = "[object RegExp]",
					A = "[object Set]",
					w = "[object String]",
					I = "[object WeakMap]",
					C = "[object ArrayBuffer]",
					j = "[object Float32Array]",
					T = "[object Float64Array]",
					S = "[object Int8Array]",
					O = "[object Int16Array]",
					N = "[object Int32Array]",
					D = "[object Uint8Array]",
					k = "[object Uint8ClampedArray]",
					L = "[object Uint16Array]",
					H = "[object Uint32Array]",
					P = {};
				P[h] = P[p] = P[C] = P[g] = P[m] = P[j] = P[T] = P[S] = P[O] = P[N] = P[b] = P[x] = P[E] = P[w] = P[D] = P[k] = P[L] = P[H] = !0, P[v] = P[y] = P[_] = P[A] = P[I] = !1;
				var V = Object.prototype,
					$ = V.toString;
				t.exports = r
			}, function (t, e) {
				function n(t, e) {
					var n = -1,
						r = t.length;
					for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
					return e
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t, e) {
					return null == e ? t : i(e, o(e), t)
				}
				var i = n(37),
					o = n(9);
				t.exports = r
			}, function (t, e) {
				function n(t, e, n) {
					n || (n = {});
					for (var r = -1, i = e.length; ++r < i;) {
						var o = e[r];
						n[o] = t[o]
					}
					return n
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					var e = t.length,
						n = new t.constructor(e);
					return e && "string" == typeof t[0] && i.call(t, "index") && (n.index = t.index, n.input = t.input), n
				}
				var r = Object.prototype,
					i = r.hasOwnProperty;
				t.exports = n
			}, function (t, e, n) {
				function r(t, e, n) {
					var r = t.constructor;
					switch (e) {
					case c:
						return i(t);
					case o:
					case s:
						return new r(+t);
					case f:
					case d:
					case h:
					case p:
					case g:
					case m:
					case v:
					case y:
					case _:
						var x = t.buffer;
						return new r(n ? i(x) : x, t.byteOffset, t.length);
					case a:
					case l:
						return new r(t);
					case u:
						var E = new r(t.source, b.exec(t));
						E.lastIndex = t.lastIndex
					}
					return E
				}
				var i = n(40),
					o = "[object Boolean]",
					s = "[object Date]",
					a = "[object Number]",
					u = "[object RegExp]",
					l = "[object String]",
					c = "[object ArrayBuffer]",
					f = "[object Float32Array]",
					d = "[object Float64Array]",
					h = "[object Int8Array]",
					p = "[object Int16Array]",
					g = "[object Int32Array]",
					m = "[object Uint8Array]",
					v = "[object Uint8ClampedArray]",
					y = "[object Uint16Array]",
					_ = "[object Uint32Array]",
					b = /\w*$/;
				t.exports = r
			}, function (t, e) {
				(function (e) {
					function n(t) {
						var e = new r(t.byteLength),
							n = new i(e);
						return n.set(new i(t)), e
					}
					var r = e.ArrayBuffer,
						i = e.Uint8Array;
					t.exports = n
				}).call(e, function () {
					return this
				}())
			}, function (t, e) {
				function n(t) {
					var e = t.constructor;
					return "function" == typeof e && e instanceof e || (e = Object), new e
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					return void 0 === t
				}
				t.exports = n
			}])
		}), n("assets/js/portfolio-grid-filter/nav", ["jquery", "underscore", "stampit"], function (t, e, n) {
			return n({
				methods: {
					onCategoryClick: function (e) {
						e.preventDefault(), t(e.currentTarget).parent().hasClass("is-active") || (this.filterItems(e), this.updateActiveBtn(e), this.updateUrlHash(e), this.isDesktopLayout() || this.toggleNavHolderState())
					},
					toggleNavHolderState: function (t) {
						return t && t.preventDefault && t.preventDefault(), this.mobileNavOpened ? this.closeFilterMenu() : this.openFilterMenu(), this.toggleNavHolderStateProp(), this
					},
					openFilterMenu: function () {
						var t = this.heightOfAllElmChildren(this.$navHolder);
						return this.animateNavHolderHeightTo(t), this
					},
					closeFilterMenu: function () {
						var t = this.heightOfActiveChild(this.$navHolder);
						return this.animateNavHolderHeightTo(t), this
					},
					animateNavHolderHeightTo: function (t) {
						return this.$navHolder.animate({
							height: t
						}), this
					},
					heightOfAllElmChildren: function (n) {
						return e.reduce(n.children().get(), function (e, n) {
							return e + t(n).outerHeight(!0)
						}, 0)
					},
					heightOfActiveChild: function (t) {
						return t.children(".is-active").first().outerHeight(!0)
					},
					filterItems: function (e) {
						e && e.preventDefault();
						var n = t(e.target).data("category");
						return this.render(this.getItemsByCategoryName(n)), this
					},
					updateActiveBtn: function (e) {
						t(e.target).parent().addClass("is-active").siblings(".is-active").removeClass("is-active")
					},
					toggleNavHolderStateProp: function () {
						return this.mobileNavOpened = !this.mobileNavOpened, this
					},
					recalcNavHolderStyle: function () {
						return this.isDesktopLayout() ? (this.$navHolder.removeAttr("style"), this.mobileNavOpened = !1) : this.initNavHolderHeight(), this
					},
					initNavHolderHeight: function () {
						var t = this.heightOfActiveChild(this.$navHolder);
						return this.$navHolder.outerHeight(t), this.$navHolder.css("padding-top", t), this
					},
					isDesktopLayout: function () {
						return Modernizr.mq("(min-width: " + this.mobileBreakpoint + "px)")
					},
					updateUrlHash: function (t) {
						window.location.hash = t.currentTarget.hash.replace("#", "#" + this.hashPrefix)
					}
				},
				init: function () {
					return this.$container.find(this.itemSel).each(e.bind(function (e, n) {
						this.addItem(t(n))
					}, this)), this.$navHolder = this.$container.find(this.navHolder), this.$container.on("click.wpg", this.navElmSel, e.bind(this.onCategoryClick, this)), this.$container.on("click.wpg", this.navMobileFilter, e.bind(this.toggleNavHolderState, this)), t(window).on("resize", e.debounce(e.bind(this.recalcNavHolderStyle, this), 50)), this.recalcNavHolderStyle(), this
				},
				props: {
					mobileNavOpened: !1,
					mobileBreakpoint: 992
				}
			})
		}), n("assets/js/portfolio-grid-filter/items", ["jquery", "underscore", "stampit"], function (t, e, n) {
			return n({
				methods: {
					addItem: function (t) {
						return this.$items.push({
							categories: this.getItemCagories(t),
							$elm: t
						}), this
					},
					getItemsByCategoryName: function (t) {
						return "*" === t ? this.getItems() : e.chain(this.$items).filter(function (n) {
							return e.contains(n.categories, t)
						}).pluck("$elm").value()
					},
					getItemCagories: function (t) {
						return t.data("categories").split(",")
					},
					getItems: function () {
						return e.pluck(this.$items, "$elm")
					}
				},
				props: {
					$items: []
				}
			})
		}), n("assets/js/portfolio-grid-filter/generalView", ["jquery", "underscore", "stampit"], function (t, e, n) {
			return n({
				init: function () {
					return this.$itemsContainer = this.$container.find(this.itemsContainerSel), this
				},
				methods: {
					groupArrayItems: function (t, n) {
						return e.chain(n).groupBy(function (e, n) {
							return Math.floor(n / t)
						}).values().value()
					},
					render: function (t) {
						this.$container.trigger(this.eventsNS + "before_render", {
							items: t
						});
						var n = this.$itemsContainer.children();
						e.forEach(this.getItems(), function (t) {
							t.find(this.cardSel).addClass("is-fadeout")
						}, this);
						var r = this.groupArrayItems(this.itemsPerRow, t);
						return setTimeout(e.bind(function () {
							e.forEach(r, function (t) {
								this.createNewRow(t).appendTo(this.$itemsContainer)
							}, this), n.remove(), this.afterRendered && this.afterRendered(), this.$container.trigger(this.eventsNS + "on_elements_switch", {
								items: t
							})
						}, this), 200), this
					},
					createNewRow: function (n) {
						var r = t(this.rowHTML);
						return n.forEach(function (t) {
							var n = t.find(this.cardSel);
							n.removeClass("is-fadeout").addClass("is-fadein"), setTimeout(e.bind(function (t) {
								this.removeClass("is-fadein")
							}, n), 200), e.isString(this.appendItemsInside) ? t.appendTo(r.find(this.appendItemsInside)) : t.appendTo(r)
						}.bind(this)), r
					}
				},
				props: {
					itemsPerRow: 4
				}
			})
		}), n("assets/js/portfolio-grid-filter/gridView", ["stampit", "assets/js/portfolio-grid-filter/generalView"], function (t, e) {
			return t().refs({
				rowHTML: '<div class="row"></div>'
			}).compose(e)
		}), n("assets/js/portfolio-grid-filter/selectors", ["stampit"], function (t) {
			return t().props({
				navElmSel: ".js-wpg-nav",
				navHolder: ".js-wpg-nav-holder",
				navMobileFilter: ".js-filter",
				itemsContainerSel: ".js-wpg-items",
				itemSel: ".js-wpg-item",
				cardSel: ".js-wpg-card",
				eventsNS: "wpge_",
				hashPrefix: "projects_"
			})
		}), n("assets/js/portfolio-grid-filter/gridFilter", ["stampit", "assets/js/portfolio-grid-filter/nav", "assets/js/portfolio-grid-filter/items", "assets/js/portfolio-grid-filter/gridView", "assets/js/portfolio-grid-filter/selectors"], function (t, e, n, r, i) {
			return t().compose(e, n, r, i)
		}), n("assets/js/portfolio-grid-filter/navSlider", ["jquery", "underscore", "stampit", "assets/js/portfolio-grid-filter/nav"], function (t, e, n, r) {
			return r.compose(n({
				methods: {
					toggleArrowsVisibility: function (t, e) {
						return this.$container.toggleClass("is-nav-arrows-hidden", this.arrowsHidden(e.items.length)), this
					},
					arrowsHidden: function (t) {
						return t <= this.itemsPerRow
					}
				},
				init: function () {
					return this.$container.on(this.eventsNS + "before_render", e.bind(this.toggleArrowsVisibility, this)), this
				}
			}))
		}), n("assets/js/portfolio-grid-filter/sliderView", ["jquery", "stampit", "assets/js/portfolio-grid-filter/generalView"], function (t, e, n) {
			return e({
				props: {
					rowHTML: '<div class = "carousel-item"><div class="row"></div></div>',
					appendItemsInside: ".row",
					arrowsSel: ".js-wpg-arrows"
				},
				methods: {
					afterRendered: function () {
						return this.$itemsContainer.children().first().addClass("active"), this
					}
				}
			}).compose(n)
		}), n("assets/js/portfolio-grid-filter/sliderFilter", ["stampit", "assets/js/portfolio-grid-filter/navSlider", "assets/js/portfolio-grid-filter/items", "assets/js/portfolio-grid-filter/sliderView", "assets/js/portfolio-grid-filter/selectors"], function (t, e, n, r, i) {
			return t().compose(e, n, r, i)
		}), n("assets/js/utils/isElementInView", ["jquery"], function (t) {
			return function (e) {
				var n = t(window),
					r = n.scrollTop(),
					i = r + n.height(),
					o = e.offset().top,
					s = o + e.height();
				return s > r && i > o
			}
		}), n("vendor/proteusthemes/proteuswidgets/assets/js/NumberCounter", ["jquery", "underscore"], function (t, e) {
			"use strict";
			var n = {
					eventNS: "widgetCounter",
					numberContainerClass: ".js-number"
				},
				r = function (r) {
					return this.$widgetElement = r, this.uniqueNS = e.uniqueId(n.eventNS), this.registerListeners(), t(window).trigger("scroll." + this.uniqueNS), this
				},
				i = function (t, e) {
					for (var n = "" + t; n.length < e;) n = "0" + n;
					return n
				};
			return e.extend(r.prototype, {
				registerListeners: function () {
					return t(window).on("scroll." + this.uniqueNS, e.throttle(e.bind(function () {
						this.widgetScrolledIntoView() && this.triggerCounting()
					}, this), 500)), this
				},
				destroyListeners: function () {
					return t(window).off("scroll." + this.uniqueNS), this
				},
				triggerCounting: function () {
					e.each(this.getSingleNumbersInWidget(), function (t) {
						this.animateValue(t, 0, t.data("to"), this.$widgetElement.data("speed"))
					}, this), this.destroyListeners()
				},
				getSingleNumbersInWidget: function () {
					var e = [];
					return this.$widgetElement.find(n.numberContainerClass).each(function () {
						e.push(t(this))
					}), e
				},
				animateValue: function (e, n, r, o) {
					t({
						Counter: n
					}).animate({
						Counter: r
					}, {
						duration: o,
						easing: "easeInOutQuad",
						step: function () {
							e.text(i(Math.ceil(this.Counter), r.toString().length))
						}
					})
				},
				widgetScrolledIntoView: function () {
					var e = t(window).scrollTop(),
						n = e + t(window).height(),
						r = this.$widgetElement.children(".number-counter").first().offset().top,
						i = r + this.$widgetElement.children(".number-counter").first().height();
					return n >= i && r >= e
				}
			}), r
		}),
		function (t, e) {
			if ("function" == typeof n && n.amd) n("util", ["exports", "module"], e);
			else if ("undefined" != typeof exports && "undefined" != typeof module) e(exports, module);
			else {
				var r = {
					exports: {}
				};
				e(r.exports, r), t.util = r.exports
			}
		}(this, function (t, e) {
			"use strict";
			var n = function (t) {
				function e(t) {
					return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
				}

				function n(t) {
					return (t[0] || t).nodeType
				}

				function r() {
					return {
						bindType: a.end,
						delegateType: a.end,
						handle: function (e) {
							return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
						}
					}
				}

				function i() {
					if (window.QUnit) return !1;
					var t = document.createElement("bootstrap");
					for (var e in u)
						if (void 0 !== t.style[e]) return {
							end: u[e]
						};
					return !1
				}

				function o(e) {
					var n = this,
						r = !1;
					return t(this).one(l.TRANSITION_END, function () {
						r = !0
					}), setTimeout(function () {
						r || l.triggerTransitionEnd(n)
					}, e), this
				}

				function s() {
					a = i(), t.fn.emulateTransitionEnd = o, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = r())
				}
				var a = !1,
					u = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					},
					l = {
						TRANSITION_END: "bsTransitionEnd",
						getUID: function (t) {
							do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
							return t
						},
						getSelectorFromElement: function (t) {
							var e = t.getAttribute("data-target");
							return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
						},
						reflow: function (t) {
							new Function("bs", "return bs")(t.offsetHeight)
						},
						triggerTransitionEnd: function (e) {
							t(e).trigger(a.end)
						},
						supportsTransitionEnd: function () {
							return Boolean(a)
						},
						typeCheckConfig: function (t, r, i) {
							for (var o in i)
								if (i.hasOwnProperty(o)) {
									var s = i[o],
										a = r[o],
										u = void 0;
									if (u = a && n(a) ? "element" : e(a), !new RegExp(s).test(u)) throw new Error(t.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + u + '" ') + ('but expected type "' + s + '".'))
								}
						}
					};
				return s(), l
			}(jQuery);
			e.exports = n
		}),
		function (t, r) {
			if ("function" == typeof n && n.amd) n("carousel", ["exports", "module", "./util"], r);
			else if ("undefined" != typeof exports && "undefined" != typeof module) r(exports, module, e("./util"));
			else {
				var i = {
					exports: {}
				};
				r(i.exports, i, t.Util), t.carousel = i.exports
			}
		}(this, function (t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var o = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				s = r(n),
				a = function (t) {
					var e = "carousel",
						n = "4.0.0",
						r = "bs.carousel",
						a = "." + r,
						u = ".data-api",
						l = t.fn[e],
						c = 600,
						f = {
							interval: 5e3,
							keyboard: !0,
							slide: !1,
							pause: "hover",
							wrap: !0
						},
						d = {
							interval: "(number|boolean)",
							keyboard: "boolean",
							slide: "(boolean|string)",
							pause: "(string|boolean)",
							wrap: "boolean"
						},
						h = {
							NEXT: "next",
							PREVIOUS: "prev"
						},
						p = {
							SLIDE: "slide" + a,
							SLID: "slid" + a,
							KEYDOWN: "keydown" + a,
							MOUSEENTER: "mouseenter" + a,
							MOUSELEAVE: "mouseleave" + a,
							LOAD_DATA_API: "load" + a + u,
							CLICK_DATA_API: "click" + a + u
						},
						g = {
							CAROUSEL: "carousel",
							ACTIVE: "active",
							SLIDE: "slide",
							RIGHT: "right",
							LEFT: "left",
							ITEM: "carousel-item"
						},
						m = {
							ACTIVE: ".active",
							ACTIVE_ITEM: ".active.carousel-item",
							ITEM: ".carousel-item",
							NEXT_PREV: ".next, .prev",
							INDICATORS: ".carousel-indicators",
							DATA_SLIDE: "[data-slide], [data-slide-to]",
							DATA_RIDE: '[data-ride="carousel"]'
						},
						v = function () {
							function u(e, n) {
								i(this, u), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(m.INDICATORS)[0], this._addEventListeners()
							}
							return o(u, [{
								key: "next",
								value: function () {
									this._isSliding || this._slide(h.NEXT)
								}
							}, {
								key: "nextWhenVisible",
								value: function () {
									document.hidden || this.next()
								}
							}, {
								key: "prev",
								value: function () {
									this._isSliding || this._slide(h.PREVIOUS)
								}
							}, {
								key: "pause",
								value: function (e) {
									e || (this._isPaused = !0), t(this._element).find(m.NEXT_PREV)[0] && s["default"].supportsTransitionEnd() && (s["default"].triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
								}
							}, {
								key: "cycle",
								value: function (e) {
									e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(t.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
								}
							}, {
								key: "to",
								value: function (e) {
									var n = this;
									this._activeElement = t(this._element).find(m.ACTIVE_ITEM)[0];
									var r = this._getItemIndex(this._activeElement);
									if (!(e > this._items.length - 1 || 0 > e)) {
										if (this._isSliding) return void t(this._element).one(p.SLID, function () {
											return n.to(e)
										});
										if (r === e) return this.pause(), void this.cycle();
										var i = e > r ? h.NEXT : h.PREVIOUS;
										this._slide(i, this._items[e])
									}
								}
							}, {
								key: "dispose",
								value: function () {
									t(this._element).off(a), t.removeData(this._element, r), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
								}
							}, {
								key: "_getConfig",
								value: function (n) {
									return n = t.extend({}, f, n), s["default"].typeCheckConfig(e, n, d), n
								}
							}, {
								key: "_addEventListeners",
								value: function () {
									this._config.keyboard && t(this._element).on(p.KEYDOWN, t.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(p.MOUSEENTER, t.proxy(this.pause, this)).on(p.MOUSELEAVE, t.proxy(this.cycle, this))
								}
							}, {
								key: "_keydown",
								value: function (t) {
									if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName)) switch (t.which) {
									case 37:
										this.prev();
										break;
									case 39:
										this.next();
										break;
									default:
										return
									}
								}
							}, {
								key: "_getItemIndex",
								value: function (e) {
									return this._items = t.makeArray(t(e).parent().find(m.ITEM)), this._items.indexOf(e)
								}
							}, {
								key: "_getItemByDirection",
								value: function (t, e) {
									var n = t === h.NEXT,
										r = t === h.PREVIOUS,
										i = this._getItemIndex(e),
										o = this._items.length - 1,
										s = r && 0 === i || n && i === o;
									if (s && !this._config.wrap) return e;
									var a = t === h.PREVIOUS ? -1 : 1,
										u = (i + a) % this._items.length;
									return -1 === u ? this._items[this._items.length - 1] : this._items[u]
								}
							}, {
								key: "_triggerSlideEvent",
								value: function (e, n) {
									var r = t.Event(p.SLIDE, {
										relatedTarget: e,
										direction: n
									});
									return t(this._element).trigger(r), r
								}
							}, {
								key: "_setActiveIndicatorElement",
								value: function (e) {
									if (this._indicatorsElement) {
										t(this._indicatorsElement).find(m.ACTIVE).removeClass(g.ACTIVE);
										var n = this._indicatorsElement.children[this._getItemIndex(e)];
										n && t(n).addClass(g.ACTIVE)
									}
								}
							}, {
								key: "_slide",
								value: function (e, n) {
									var r = this,
										i = t(this._element).find(m.ACTIVE_ITEM)[0],
										o = n || i && this._getItemByDirection(e, i),
										a = Boolean(this._interval),
										u = e === h.NEXT ? g.LEFT : g.RIGHT;
									if (o && t(o).hasClass(g.ACTIVE)) return void(this._isSliding = !1);
									var l = this._triggerSlideEvent(o, u);
									if (!l.isDefaultPrevented() && i && o) {
										this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o);
										var f = t.Event(p.SLID, {
											relatedTarget: o,
											direction: u
										});
										s["default"].supportsTransitionEnd() && t(this._element).hasClass(g.SLIDE) ? (t(o).addClass(e), s["default"].reflow(o), t(i).addClass(u), t(o).addClass(u), t(i).one(s["default"].TRANSITION_END, function () {
											t(o).removeClass(u).removeClass(e), t(o).addClass(g.ACTIVE), t(i).removeClass(g.ACTIVE).removeClass(e).removeClass(u), r._isSliding = !1, setTimeout(function () {
												return t(r._element).trigger(f)
											}, 0)
										}).emulateTransitionEnd(c)) : (t(i).removeClass(g.ACTIVE), t(o).addClass(g.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
									}
								}
							}], [{
								key: "_jQueryInterface",
								value: function (e) {
									return this.each(function () {
										var n = t(this).data(r),
											i = t.extend({}, f, t(this).data());
										"object" == typeof e && t.extend(i, e);
										var o = "string" == typeof e ? e : i.slide;
										if (n || (n = new u(this, i), t(this).data(r, n)), "number" == typeof e) n.to(e);
										else if ("string" == typeof o) {
											if (void 0 === n[o]) throw new Error('No method named "' + o + '"');
											n[o]()
										} else i.interval && (n.pause(), n.cycle())
									})
								}
							}, {
								key: "_dataApiClickHandler",
								value: function (e) {
									var n = s["default"].getSelectorFromElement(this);
									if (n) {
										var i = t(n)[0];
										if (i && t(i).hasClass(g.CAROUSEL)) {
											var o = t.extend({}, t(i).data(), t(this).data()),
												a = this.getAttribute("data-slide-to");
											a && (o.interval = !1), u._jQueryInterface.call(t(i), o), a && t(i).data(r).to(a), e.preventDefault()
										}
									}
								}
							}, {
								key: "VERSION",
								get: function () {
									return n
								}
							}, {
								key: "Default",
								get: function () {
									return f
								}
							}]), u
						}();
					return t(document).on(p.CLICK_DATA_API, m.DATA_SLIDE, v._dataApiClickHandler), t(window).on(p.LOAD_DATA_API, function () {
						t(m.DATA_RIDE).each(function () {
							var e = t(this);
							v._jQueryInterface.call(e, e.data())
						})
					}), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
						return t.fn[e] = l, v._jQueryInterface
					}, v
				}(jQuery);
			e.exports = a
		}),
		function (t, r) {
			if ("function" == typeof n && n.amd) n("collapse", ["exports", "module", "./util"], r);
			else if ("undefined" != typeof exports && "undefined" != typeof module) r(exports, module, e("./util"));
			else {
				var i = {
					exports: {}
				};
				r(i.exports, i, t.Util), t.collapse = i.exports
			}
		}(this, function (t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var o = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				s = r(n),
				a = function (t) {
					var e = "collapse",
						n = "4.0.0",
						r = "bs.collapse",
						a = "." + r,
						u = ".data-api",
						l = t.fn[e],
						c = 600,
						f = {
							toggle: !0,
							parent: ""
						},
						d = {
							toggle: "boolean",
							parent: "string"
						},
						h = {
							SHOW: "show" + a,
							SHOWN: "shown" + a,
							HIDE: "hide" + a,
							HIDDEN: "hidden" + a,
							CLICK_DATA_API: "click" + a + u
						},
						p = {
							IN: "in",
							COLLAPSE: "collapse",
							COLLAPSING: "collapsing",
							COLLAPSED: "collapsed"
						},
						g = {
							WIDTH: "width",
							HEIGHT: "height"
						},
						m = {
							ACTIVES: ".panel > .in, .panel > .collapsing",
							DATA_TOGGLE: '[data-toggle="collapse"]'
						},
						v = function () {
							function a(e, n) {
								i(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
							}
							return o(a, [{
								key: "toggle",
								value: function () {
									t(this._element).hasClass(p.IN) ? this.hide() : this.show()
								}
							}, {
								key: "show",
								value: function () {
									var e = this;
									if (!this._isTransitioning && !t(this._element).hasClass(p.IN)) {
										var n = void 0,
											i = void 0;
										if (this._parent && (n = t.makeArray(t(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(r), i && i._isTransitioning))) {
											var o = t.Event(h.SHOW);
											if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
												n && (a._jQueryInterface.call(t(n), "hide"), i || t(n).data(r, null));
												var u = this._getDimension();
												t(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[u] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
												var l = function () {
													t(e._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), e._element.style[u] = "", e.setTransitioning(!1), t(e._element).trigger(h.SHOWN)
												};
												if (!s["default"].supportsTransitionEnd()) return void l();
												var f = u[0].toUpperCase() + u.slice(1),
													d = "scroll" + f;
												t(this._element).one(s["default"].TRANSITION_END, l).emulateTransitionEnd(c), this._element.style[u] = this._element[d] + "px"
											}
										}
									}
								}
							}, {
								key: "hide",
								value: function () {
									var e = this;
									if (!this._isTransitioning && t(this._element).hasClass(p.IN)) {
										var n = t.Event(h.HIDE);
										if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
											var r = this._getDimension(),
												i = r === g.WIDTH ? "offsetWidth" : "offsetHeight";
											this._element.style[r] = this._element[i] + "px", s["default"].reflow(this._element), t(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
											var o = function () {
												e.setTransitioning(!1), t(e._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(h.HIDDEN)
											};
											return this._element.style[r] = 0, s["default"].supportsTransitionEnd() ? void t(this._element).one(s["default"].TRANSITION_END, o).emulateTransitionEnd(c) : void o()
										}
									}
								}
							}, {
								key: "setTransitioning",
								value: function (t) {
									this._isTransitioning = t
								}
							}, {
								key: "dispose",
								value: function () {
									t.removeData(this._element, r), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
								}
							}, {
								key: "_getConfig",
								value: function (n) {
									return n = t.extend({}, f, n), n.toggle = Boolean(n.toggle), s["default"].typeCheckConfig(e, n, d), n
								}
							}, {
								key: "_getDimension",
								value: function () {
									var e = t(this._element).hasClass(g.WIDTH);
									return e ? g.WIDTH : g.HEIGHT
								}
							}, {
								key: "_getParent",
								value: function () {
									var e = this,
										n = t(this._config.parent)[0],
										r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
									return t(n).find(r).each(function (t, n) {
										e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
									}), n
								}
							}, {
								key: "_addAriaAndCollapsedClass",
								value: function (e, n) {
									if (e) {
										var r = t(e).hasClass(p.IN);
										e.setAttribute("aria-expanded", r), n.length && t(n).toggleClass(p.COLLAPSED, !r).attr("aria-expanded", r)
									}
								}
							}], [{
								key: "_getTargetFromElement",
								value: function (e) {
									var n = s["default"].getSelectorFromElement(e);
									return n ? t(n)[0] : null
								}
							}, {
								key: "_jQueryInterface",
								value: function (e) {
									return this.each(function () {
										var n = t(this),
											i = n.data(r),
											o = t.extend({}, f, n.data(), "object" == typeof e && e);
										if (!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || (i = new a(this, o), n.data(r, i)), "string" == typeof e) {
											if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
											i[e]()
										}
									})
								}
							}, {
								key: "VERSION",
								get: function () {
									return n
								}
							}, {
								key: "Default",
								get: function () {
									return f
								}
							}]), a
						}();
					return t(document).on(h.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
						e.preventDefault();
						var n = v._getTargetFromElement(this),
							i = t(n).data(r),
							o = i ? "toggle" : t(this).data();
						v._jQueryInterface.call(t(n), o)
					}), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
						return t.fn[e] = l, v._jQueryInterface
					}, v
				}(jQuery);
			e.exports = a
		}), e.config({
			paths: {
				jquery: "assets/js/fix.jquery",
				underscore: "assets/js/fix.underscore",
				util: "bower_components/bootstrap/dist/js/umd/util",
				alert: "bower_components/bootstrap/dist/js/umd/alert",
				button: "bower_components/bootstrap/dist/js/umd/button",
				carousel: "bower_components/bootstrap/dist/js/umd/carousel",
				collapse: "bower_components/bootstrap/dist/js/umd/collapse",
				dropdown: "bower_components/bootstrap/dist/js/umd/dropdown",
				modal: "bower_components/bootstrap/dist/js/umd/modal",
				scrollspy: "bower_components/bootstrap/dist/js/umd/scrollspy",
				tab: "bower_components/bootstrap/dist/js/umd/tab",
				tooltip: "bower_components/bootstrap/dist/js/umd/tooltip",
				popover: "bower_components/bootstrap/dist/js/umd/popover",
				stampit: "bower_components/stampit/stampit"
			}
		}), e(["jquery", "underscore", "assets/js/portfolio-grid-filter/gridFilter", "assets/js/portfolio-grid-filter/sliderFilter", "assets/js/utils/isElementInView", "vendor/proteusthemes/proteuswidgets/assets/js/NumberCounter", "carousel", "collapse"], function (t, e, n, r, i, o) {
			"use strict";
			t(".col-md-__col-num__").removeClass("col-md-__col-num__").addClass("col-md-3");
			var s = t(".number-counters");
			s.length && (t.extend(t.easing, {
					easeInOutQuad: function (t, e, n, r, i) {
						return (e /= i / 2) < 1 ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
					}
				}), s.each(function () {
					new o(t(this))
				})), t(".portfolio-grid").each(function () {
					var e, i = window.location.hash;
					e = "slider" === t(this).data("type") ? r({
						$container: t(this)
					}) : n({
						$container: t(this)
					}), new RegExp("^#" + e.hashPrefix).test(i) && t(this).find('a[href="' + i.replace(e.hashPrefix, "") + '"]').trigger("click")
				}),
				function () {
					var n = t(".js-newslider-slider");
					n.length && t(document).on("scroll", e.throttle(function () {
						i(n) ? n.carousel("cycle") : n.carousel("pause")
					}, 1e3, {
						leading: !1
					}))
				}()
		}), n("assets/js/main", function () {})
}();