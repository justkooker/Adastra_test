!(function (e) {
  function t(t) {
    for (var n, i, o = t[0], s = t[1], a = 0, u = []; a < o.length; a++)
      (i = o[a]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
        (r[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (l && l(t); u.length; ) u.shift()();
  }
  var n = {},
    r = { 3: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, i) {
          n = r[e] = [t, i];
        });
        t.push((n[2] = o));
        var s,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          i.nc && a.setAttribute("nonce", i.nc),
          (a.src = (function (e) {
            return (
              i.p +
              "" +
              ({
                4: "rainews-local-choose-dropdown",
                6: "rainews-local-choose-popover",
              }[e] || e) +
              ".js"
            );
          })(e));
        var l = new Error();
        s = function (t) {
          (a.onerror = a.onload = null), clearTimeout(u);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = i),
                (l.request = o),
                n[1](l);
            }
            r[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          s({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = s), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/assets/js/webcomponents/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var o = (window.rnJsonpCompLoader = window.rnJsonpCompLoader || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var a = 0; a < o.length; a++) t(o[a]);
  var l = s;
  i((i.s = 61));
})({
  0: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return w.b;
      }),
      n.d(t, "e", function () {
        return w.e;
      }),
      n.d(t, "a", function () {
        return A;
      });
    const r =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      i = Symbol(),
      o = new Map();
    class s {
      constructor(e, t) {
        if (((this._$cssResult$ = !0), t !== i))
          throw Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = e;
      }
      get styleSheet() {
        let e = o.get(this.cssText);
        return (
          r &&
            void 0 === e &&
            (o.set(this.cssText, (e = new CSSStyleSheet())),
            e.replaceSync(this.cssText)),
          e
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const a = (e) => new s("string" == typeof e ? e : e + "", i),
      l = (e, ...t) => {
        const n =
          1 === e.length
            ? e[0]
            : t.reduce(
                (t, n, r) =>
                  t +
                  ((e) => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error(
                      "Value passed to 'css' function must be a 'css' function result: " +
                        e +
                        ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                    );
                  })(n) +
                  e[r + 1],
                e[0]
              );
        return new s(n, i);
      },
      u = (e, t) => {
        r
          ? (e.adoptedStyleSheets = t.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet
            ))
          : t.forEach((t) => {
              const n = document.createElement("style"),
                r = window.litNonce;
              void 0 !== r && n.setAttribute("nonce", r),
                (n.textContent = t.cssText),
                e.appendChild(n);
            });
      },
      c = r
        ? (e) => e
        : (e) =>
            e instanceof CSSStyleSheet
              ? ((e) => {
                  let t = "";
                  for (const n of e.cssRules) t += n.cssText;
                  return a(t);
                })(e)
              : e;
    function d() {}
    function f(e, t, n) {
      return n
        ? t
          ? t(e)
          : e
        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
    }
    var p;
    const h = window.reactiveElementPolyfillSupport,
      v = {
        toAttribute(e, t) {
          switch (t) {
            case Boolean:
              e = e ? "" : null;
              break;
            case Object:
            case Array:
              e = null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute(e, t) {
          let n = e;
          switch (t) {
            case Boolean:
              n = null !== e;
              break;
            case Number:
              n = null === e ? null : Number(e);
              break;
            case Object:
            case Array:
              try {
                n = JSON.parse(e);
              } catch (e) {
                n = null;
              }
          }
          return n;
        },
      },
      g = (e, t) => t !== e && (t == t || e == e),
      m = {
        attribute: !0,
        type: String,
        converter: v,
        reflect: !1,
        hasChanged: g,
      };
    class y extends HTMLElement {
      constructor() {
        super(),
          (this._$Et = new Map()),
          (this.isUpdatePending = !1),
          (this.hasUpdated = !1),
          (this._$Ei = null),
          this.o();
      }
      static addInitializer(e) {
        var t;
        (null !== (t = this.l) && void 0 !== t) || (this.l = []),
          this.l.push(e);
      }
      static get observedAttributes() {
        this.finalize();
        const e = [];
        return (
          this.elementProperties.forEach((t, n) => {
            const r = this._$Eh(n, t);
            void 0 !== r && (this._$Eu.set(r, n), e.push(r));
          }),
          e
        );
      }
      static createProperty(e, t = m) {
        if (
          (t.state && (t.attribute = !1),
          this.finalize(),
          this.elementProperties.set(e, t),
          !t.noAccessor && !this.prototype.hasOwnProperty(e))
        ) {
          const n = "symbol" == typeof e ? Symbol() : "__" + e,
            r = this.getPropertyDescriptor(e, n, t);
          void 0 !== r && Object.defineProperty(this.prototype, e, r);
        }
      }
      static getPropertyDescriptor(e, t, n) {
        return {
          get() {
            return this[t];
          },
          set(r) {
            const i = this[e];
            (this[t] = r), this.requestUpdate(e, i, n);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(e) {
        return this.elementProperties.get(e) || m;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const e = Object.getPrototypeOf(this);
        if (
          (e.finalize(),
          (this.elementProperties = new Map(e.elementProperties)),
          (this._$Eu = new Map()),
          this.hasOwnProperty("properties"))
        ) {
          const e = this.properties,
            t = [
              ...Object.getOwnPropertyNames(e),
              ...Object.getOwnPropertySymbols(e),
            ];
          for (const n of t) this.createProperty(n, e[n]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
      }
      static finalizeStyles(e) {
        const t = [];
        if (Array.isArray(e)) {
          const n = new Set(e.flat(1 / 0).reverse());
          for (const e of n) t.unshift(c(e));
        } else void 0 !== e && t.push(c(e));
        return t;
      }
      static _$Eh(e, t) {
        const n = t.attribute;
        return !1 === n
          ? void 0
          : "string" == typeof n
          ? n
          : "string" == typeof e
          ? e.toLowerCase()
          : void 0;
      }
      o() {
        var e;
        (this._$Ev = new Promise((e) => (this.enableUpdating = e))),
          (this._$AL = new Map()),
          this._$Ep(),
          this.requestUpdate(),
          null === (e = this.constructor.l) ||
            void 0 === e ||
            e.forEach((e) => e(this));
      }
      addController(e) {
        var t, n;
        (null !== (t = this._$Em) && void 0 !== t ? t : (this._$Em = [])).push(
          e
        ),
          void 0 !== this.renderRoot &&
            this.isConnected &&
            (null === (n = e.hostConnected) || void 0 === n || n.call(e));
      }
      removeController(e) {
        var t;
        null === (t = this._$Em) ||
          void 0 === t ||
          t.splice(this._$Em.indexOf(e) >>> 0, 1);
      }
      _$Ep() {
        this.constructor.elementProperties.forEach((e, t) => {
          this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
        });
      }
      createRenderRoot() {
        var e;
        const t =
          null !== (e = this.shadowRoot) && void 0 !== e
            ? e
            : this.attachShadow(this.constructor.shadowRootOptions);
        return u(t, this.constructor.elementStyles), t;
      }
      connectedCallback() {
        var e;
        void 0 === this.renderRoot &&
          (this.renderRoot = this.createRenderRoot()),
          this.enableUpdating(!0),
          null === (e = this._$Em) ||
            void 0 === e ||
            e.forEach((e) => {
              var t;
              return null === (t = e.hostConnected) || void 0 === t
                ? void 0
                : t.call(e);
            });
      }
      enableUpdating(e) {}
      disconnectedCallback() {
        var e;
        null === (e = this._$Em) ||
          void 0 === e ||
          e.forEach((e) => {
            var t;
            return null === (t = e.hostDisconnected) || void 0 === t
              ? void 0
              : t.call(e);
          });
      }
      attributeChangedCallback(e, t, n) {
        this._$AK(e, n);
      }
      _$Eg(e, t, n = m) {
        var r, i;
        const o = this.constructor._$Eh(e, n);
        if (void 0 !== o && !0 === n.reflect) {
          const s = (
            null !==
              (i =
                null === (r = n.converter) || void 0 === r
                  ? void 0
                  : r.toAttribute) && void 0 !== i
              ? i
              : v.toAttribute
          )(t, n.type);
          (this._$Ei = e),
            null == s ? this.removeAttribute(o) : this.setAttribute(o, s),
            (this._$Ei = null);
        }
      }
      _$AK(e, t) {
        var n, r, i;
        const o = this.constructor,
          s = o._$Eu.get(e);
        if (void 0 !== s && this._$Ei !== s) {
          const e = o.getPropertyOptions(s),
            a = e.converter,
            l =
              null !==
                (i =
                  null !==
                    (r =
                      null === (n = a) || void 0 === n
                        ? void 0
                        : n.fromAttribute) && void 0 !== r
                    ? r
                    : "function" == typeof a
                    ? a
                    : null) && void 0 !== i
                ? i
                : v.fromAttribute;
          (this._$Ei = s), (this[s] = l(t, e.type)), (this._$Ei = null);
        }
      }
      requestUpdate(e, t, n) {
        let r = !0;
        void 0 !== e &&
          (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || g)(
            this[e],
            t
          )
            ? (this._$AL.has(e) || this._$AL.set(e, t),
              !0 === n.reflect &&
                this._$Ei !== e &&
                (void 0 === this._$ES && (this._$ES = new Map()),
                this._$ES.set(e, n)))
            : (r = !1)),
          !this.isUpdatePending && r && (this._$Ev = this._$EC());
      }
      _$EC() {
        const e = this;
        return (function (e, t, n) {
          if (n) return t ? t(e()) : e();
          try {
            var r = Promise.resolve(e());
            return t ? r.then(t) : r;
          } catch (e) {
            return Promise.reject(e);
          }
        })(function () {
          return (
            (e.isUpdatePending = !0),
            f(
              ((t = (function (e, t) {
                try {
                  var n = e();
                } catch (e) {
                  return t(e);
                }
                return n && n.then ? n.then(void 0, t) : n;
              })(
                function () {
                  return (function (e, t) {
                    if (!t) return e && e.then ? e.then(d) : Promise.resolve();
                  })(e._$Ev);
                },
                function (e) {
                  Promise.reject(e);
                }
              )),
              (n = function () {
                const t = e.scheduleUpdate();
                return f(
                  null != t && t,
                  function (t) {
                    return !e.isUpdatePending;
                  },
                  !(null != t)
                );
              }),
              t && t.then ? t.then(n) : n(t))
            )
          );
          var t, n;
        });
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var e;
        if (!this.isUpdatePending) return;
        this.hasUpdated,
          this._$Et &&
            (this._$Et.forEach((e, t) => (this[t] = e)), (this._$Et = void 0));
        let t = !1;
        const n = this._$AL;
        try {
          (t = this.shouldUpdate(n)),
            t
              ? (this.willUpdate(n),
                null === (e = this._$Em) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var t;
                    return null === (t = e.hostUpdate) || void 0 === t
                      ? void 0
                      : t.call(e);
                  }),
                this.update(n))
              : this._$EU();
        } catch (e) {
          throw ((t = !1), this._$EU(), e);
        }
        t && this._$AE(n);
      }
      willUpdate(e) {}
      _$AE(e) {
        var t;
        null === (t = this._$Em) ||
          void 0 === t ||
          t.forEach((e) => {
            var t;
            return null === (t = e.hostUpdated) || void 0 === t
              ? void 0
              : t.call(e);
          }),
          this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
          this.updated(e);
      }
      _$EU() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$Ev;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        void 0 !== this._$ES &&
          (this._$ES.forEach((e, t) => this._$Eg(t, this[t], e)),
          (this._$ES = void 0)),
          this._$EU();
      }
      updated(e) {}
      firstUpdated(e) {}
    }
    (y.finalized = !0),
      (y.elementProperties = new Map()),
      (y.elementStyles = []),
      (y.shadowRootOptions = { mode: "open" }),
      null == h || h({ ReactiveElement: y }),
      (null !== (p = globalThis.reactiveElementVersions) && void 0 !== p
        ? p
        : (globalThis.reactiveElementVersions = [])
      ).push("1.0.1");
    var b,
      x,
      w = n(4);
    class A extends y {
      constructor() {
        super(...arguments),
          (this.renderOptions = { host: this }),
          (this._$Dt = void 0);
      }
      createRenderRoot() {
        var e, t;
        const n = super.createRenderRoot();
        return (
          (null !== (e = (t = this.renderOptions).renderBefore) &&
            void 0 !== e) ||
            (t.renderBefore = n.firstChild),
          n
        );
      }
      update(e) {
        const t = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
          super.update(e),
          (this._$Dt = Object(w.e)(t, this.renderRoot, this.renderOptions));
      }
      connectedCallback() {
        var e;
        super.connectedCallback(),
          null === (e = this._$Dt) || void 0 === e || e.setConnected(!0);
      }
      disconnectedCallback() {
        var e;
        super.disconnectedCallback(),
          null === (e = this._$Dt) || void 0 === e || e.setConnected(!1);
      }
      render() {
        return w.c;
      }
    }
    (A.finalized = !0),
      (A._$litElement$ = !0),
      null === (b = globalThis.litElementHydrateSupport) ||
        void 0 === b ||
        b.call(globalThis, { LitElement: A });
    const C = globalThis.litElementPolyfillSupport;
    null == C || C({ LitElement: A });
    (null !== (x = globalThis.litElementVersions) && void 0 !== x
      ? x
      : (globalThis.litElementVersions = [])
    ).push("3.0.1");
  },
  11: function (e, t, n) {
    var r;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        u = o.push,
        c = o.indexOf,
        d = {},
        f = d.toString,
        p = d.hasOwnProperty,
        h = p.toString,
        v = h.call(Object),
        g = {},
        m = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || b).createElement("script");
        if (((o.text = e), t))
          for (r in x)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function A(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[f.call(e)] || "object"
          : typeof e;
      }
      var C = function e(t, n) {
        return new e.fn.init(t, n);
      };
      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = A(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (C.fn = C.prototype =
        {
          jquery: "3.6.0",
          constructor: C,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: o.sort,
          splice: o.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              u = !1;
            for (
              "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || m(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      s !== r &&
                      (u && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = s[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || C.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (s[t] = C.extend(u, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        C.extend({
          expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== f.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === v))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (T(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (T(Object(e))
                  ? C.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              s = [];
            if (T(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return l(s);
          },
          guid: 1,
          support: g,
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var $ = (function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          p,
          h,
          v,
          g,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          A = 0,
          C = 0,
          T = le(),
          $ = le(),
          E = le(),
          S = le(),
          _ = function (e, t) {
            return e === t && (d = !0), 0;
          },
          k = {}.hasOwnProperty,
          N = [],
          j = N.pop,
          D = N.push,
          O = N.push,
          L = N.slice,
          P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          q =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          M =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            H +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          R =
            "\\[" +
            H +
            "*(" +
            M +
            ")(?:" +
            H +
            "*([*^$|!~]?=)" +
            H +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            M +
            "))|)" +
            H +
            "*\\]",
          I =
            ":(" +
            M +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            R +
            ")*)|.*)\\)|)",
          U = new RegExp(H + "+", "g"),
          B = new RegExp(
            "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
            "g"
          ),
          z = new RegExp("^" + H + "*," + H + "*"),
          W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          F = new RegExp(H + "|>"),
          V = new RegExp(I),
          X = new RegExp("^" + M + "$"),
          Q = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                H +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                H +
                "*(?:([+-]|)" +
                H +
                "*(\\d+)|))" +
                H +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + q + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                H +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                H +
                "*((?:-\\d)?\\d*)" +
                H +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          J = /HTML$/i,
          Y = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          oe = function () {
            f();
          },
          se = xe(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          O.apply((N = L.call(w.childNodes)), w.childNodes),
            N[w.childNodes.length].nodeType;
        } catch (e) {
          O = {
            apply: N.length
              ? function (e, t) {
                  D.apply(e, L.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        function ae(e, t, r, i) {
          var o,
            a,
            u,
            c,
            d,
            h,
            m,
            y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;
          if (
            ((r = r || []),
            "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
          )
            return r;
          if (!i && (f(t), (t = t || p), v)) {
            if (11 !== w && (d = Z.exec(e)))
              if ((o = d[1])) {
                if (9 === w) {
                  if (!(u = t.getElementById(o))) return r;
                  if (u.id === o) return r.push(u), r;
                } else if (
                  y &&
                  (u = y.getElementById(o)) &&
                  b(t, u) &&
                  u.id === o
                )
                  return r.push(u), r;
              } else {
                if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                if (
                  (o = d[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return O.apply(r, t.getElementsByClassName(o)), r;
              }
            if (
              n.qsa &&
              !S[e + " "] &&
              (!g || !g.test(e)) &&
              (1 !== w || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((m = e), (y = t), 1 === w && (F.test(e) || W.test(e)))) {
                for (
                  ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                    n.scope) ||
                    ((c = t.getAttribute("id"))
                      ? (c = c.replace(re, ie))
                      : t.setAttribute("id", (c = x))),
                    a = (h = s(e)).length;
                  a--;

                )
                  h[a] = (c ? "#" + c : ":scope") + " " + be(h[a]);
                m = h.join(",");
              }
              try {
                return O.apply(r, y.querySelectorAll(m)), r;
              } catch (t) {
                S(e, !0);
              } finally {
                c === x && t.removeAttribute("id");
              }
            }
          }
          return l(e.replace(B, "$1"), t, r, i);
        }
        function le() {
          var e = [];
          return function t(n, i) {
            return (
              e.push(n + " ") > r.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          };
        }
        function ue(e) {
          return (e[x] = !0), e;
        }
        function ce(e) {
          var t = p.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function de(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            r.attrHandle[n[i]] = t;
        }
        function fe(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function pe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function ve(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function ge(e) {
          return ue(function (t) {
            return (
              (t = +t),
              ue(function (n, r) {
                for (var i, o = e([], n.length, t), s = o.length; s--; )
                  n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (o = ae.isXML =
          function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !J.test(t || (n && n.nodeName) || "HTML");
          }),
        (f = ae.setDocument =
          function (e) {
            var t,
              i,
              s = e ? e.ownerDocument || e : w;
            return s != p && 9 === s.nodeType && s.documentElement
              ? ((h = (p = s).documentElement),
                (v = !o(p)),
                w != p &&
                  (i = p.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", oe, !1)
                    : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.scope = ce(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !p.getElementsByName || !p.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && v)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (g = []),
                (n.qsa = K.test(p.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + H + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + H + "*(?:value|" + q + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        g.push("~="),
                      (t = p.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        g.push(
                          "\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        g.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      g.push("[\\r\\n\\f]");
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + H + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      m.push("!=", I);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (b =
                  t || K.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (_ = t
                  ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == p || (t.ownerDocument == w && b(w, t))
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!i || !o)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : c
                          ? P(c, e) - P(c, t)
                          : 0;
                      if (i === o) return fe(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[r] === a[r]; ) r++;
                      return r
                        ? fe(s[r], a[r])
                        : s[r] == w
                        ? -1
                        : a[r] == w
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
        (ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
          if (
            (f(e),
            n.matchesSelector &&
              v &&
              !S[t + " "] &&
              (!m || !m.test(t)) &&
              (!g || !g.test(t)))
          )
            try {
              var r = y.call(e, t);
              if (
                r ||
                n.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return r;
            } catch (e) {
              S(t, !0);
            }
          return ae(t, p, null, [e]).length > 0;
        }),
        (ae.contains = function (e, t) {
          return (e.ownerDocument || e) != p && f(e), b(e, t);
        }),
        (ae.attr = function (e, t) {
          (e.ownerDocument || e) != p && f(e);
          var i = r.attrHandle[t.toLowerCase()],
            o =
              i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !v
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
        }),
        (ae.escape = function (e) {
          return (e + "").replace(re, ie);
        }),
        (ae.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ae.uniqueSort = function (e) {
          var t,
            r = [],
            i = 0,
            o = 0;
          if (
            ((d = !n.detectDuplicates),
            (c = !n.sortStable && e.slice(0)),
            e.sort(_),
            d)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
            for (; i--; ) e.splice(r[i], 1);
          }
          return (c = null), e;
        }),
        (i = ae.getText =
          function (e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
        ((r = ae.selectors =
          {
            cacheLength: 50,
            createPseudo: ue,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || ae.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && ae.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return Q.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        V.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = T[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                    T(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = ae.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === r && 0 === i
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        d,
                        f,
                        p,
                        h,
                        v = o !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; v; ) {
                            for (f = t; (f = f[v]); )
                              if (
                                a
                                  ? f.nodeName.toLowerCase() === m
                                  : 1 === f.nodeType
                              )
                                return !1;
                            h = v = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                          for (
                            b =
                              (p =
                                (u =
                                  (c =
                                    (d = (f = g)[x] || (f[x] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  A && u[1]) && u[2],
                              f = p && g.childNodes[p];
                            (f = (++p && f && f[v]) || (b = p = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++b && f === t) {
                              c[e] = [A, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (u =
                                (c =
                                  (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] || [])[0] === A &&
                              u[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (f =
                              (++p && f && f[v]) || (b = p = 0) || h.pop()) &&
                            ((a
                              ? f.nodeName.toLowerCase() !== m
                              : 1 !== f.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (d = f[x] || (f[x] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] = [A, b]),
                              f !== t));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    ae.error("unsupported pseudo: " + e);
                return i[x]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ue(function (e, n) {
                          for (var r, o = i(e, t), s = o.length; s--; )
                            e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                        })
                      : function (e) {
                          return i(e, 0, n);
                        })
                  : i;
              },
            },
            pseudos: {
              not: ue(function (e) {
                var t = [],
                  n = [],
                  r = a(e.replace(B, "$1"));
                return r[x]
                  ? ue(function (e, t, n, i) {
                      for (var o, s = r(e, null, i, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ue(function (e) {
                return function (t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ue(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ue(function (e) {
                return (
                  X.test(e || "") || ae.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = v
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ve(!1),
              disabled: ve(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return G.test(e.nodeName);
              },
              input: function (e) {
                return Y.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ge(function () {
                return [0];
              }),
              last: ge(function (e, t) {
                return [t - 1];
              }),
              eq: ge(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ge(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = pe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
        }
        function xe(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && "parentNode" === o,
            a = C++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
              }
            : function (t, n, l) {
                var u,
                  c,
                  d,
                  f = [A, a];
                if (l) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((c =
                          (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                          (d[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((u = c[o]) && u[0] === A && u[1] === a)
                          return (f[2] = u[2]);
                        if (((c[o] = f), (f[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function we(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function Ae(e, t, n, r, i) {
          for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
          return s;
        }
        function Ce(e, t, n, r, i, o) {
          return (
            r && !r[x] && (r = Ce(r)),
            i && !i[x] && (i = Ce(i, o)),
            ue(function (o, s, a, l) {
              var u,
                c,
                d,
                f = [],
                p = [],
                h = s.length,
                v =
                  o ||
                  (function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                    return n;
                  })(t || "*", a.nodeType ? [a] : a, []),
                g = !e || (!o && t) ? v : Ae(v, f, e, a, l),
                m = n ? (i || (o ? e : h || r) ? [] : s) : g;
              if ((n && n(g, m, a, l), r))
                for (u = Ae(m, p), r(u, [], a, l), c = u.length; c--; )
                  (d = u[c]) && (m[p[c]] = !(g[p[c]] = d));
              if (o) {
                if (i || e) {
                  if (i) {
                    for (u = [], c = m.length; c--; )
                      (d = m[c]) && u.push((g[c] = d));
                    i(null, (m = []), u, l);
                  }
                  for (c = m.length; c--; )
                    (d = m[c]) &&
                      (u = i ? P(o, d) : f[c]) > -1 &&
                      (o[u] = !(s[u] = d));
                }
              } else (m = Ae(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, l) : O.apply(s, m);
            })
          );
        }
        function Te(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              s = r.relative[e[0].type],
              a = s || r.relative[" "],
              l = s ? 1 : 0,
              c = xe(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = xe(
                function (e) {
                  return P(t, e) > -1;
                },
                a,
                !0
              ),
              f = [
                function (e, n, r) {
                  var i =
                    (!s && (r || n !== u)) ||
                    ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                  return (t = null), i;
                },
              ];
            l < o;
            l++
          )
            if ((n = r.relative[e[l].type])) f = [xe(we(f), n)];
            else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                return Ce(
                  l > 1 && we(f),
                  l > 1 &&
                    be(
                      e
                        .slice(0, l - 1)
                        .concat({ value: " " === e[l - 2].type ? "*" : "" })
                    ).replace(B, "$1"),
                  n,
                  l < i && Te(e.slice(l, i)),
                  i < o && Te((e = e.slice(i))),
                  i < o && be(e)
                );
              }
              f.push(n);
            }
          return we(f);
        }
        return (
          (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (s = ae.tokenize =
            function (e, t) {
              var n,
                i,
                o,
                s,
                a,
                l,
                u,
                c = $[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, l = [], u = r.preFilter; a; ) {
                for (s in ((n && !(i = z.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                (n = !1),
                (i = W.exec(a)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, " ") }),
                  (a = a.slice(n.length))),
                r.filter))
                  !(i = Q[s].exec(a)) ||
                    (u[s] && !(i = u[s](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: s, matches: i }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : $(e, l).slice(0);
            }),
          (a = ae.compile =
            function (e, t) {
              var n,
                i = [],
                o = [],
                a = E[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Te(t[n]))[x] ? i.push(a) : o.push(a);
                (a = E(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, s, a, l, c) {
                        var d,
                          h,
                          g,
                          m = 0,
                          y = "0",
                          b = o && [],
                          x = [],
                          w = u,
                          C = o || (i && r.find.TAG("*", c)),
                          T = (A += null == w ? 1 : Math.random() || 0.1),
                          $ = C.length;
                        for (
                          c && (u = s == p || s || c);
                          y !== $ && null != (d = C[y]);
                          y++
                        ) {
                          if (i && d) {
                            for (
                              h = 0,
                                s || d.ownerDocument == p || (f(d), (a = !v));
                              (g = e[h++]);

                            )
                              if (g(d, s || p, a)) {
                                l.push(d);
                                break;
                              }
                            c && (A = T);
                          }
                          n && ((d = !g && d) && m--, o && b.push(d));
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (g = t[h++]); ) g(b, x, s, a);
                          if (o) {
                            if (m > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = j.call(l));
                            x = Ae(x);
                          }
                          O.apply(l, x),
                            c &&
                              !o &&
                              x.length > 0 &&
                              m + t.length > 1 &&
                              ae.uniqueSort(l);
                        }
                        return c && ((A = T), (u = w)), b;
                      };
                    return n ? ue(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return a;
            }),
          (l = ae.select =
            function (e, t, n, i) {
              var o,
                l,
                u,
                c,
                d,
                f = "function" == typeof e && e,
                p = !i && s((e = f.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (u = l[0]).type &&
                  9 === t.nodeType &&
                  v &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  f && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  o = Q.needsContext.test(e) ? 0 : l.length;
                  o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                )
                  if (
                    (d = r.find[c]) &&
                    (i = d(
                      u.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(o, 1), !(e = i.length && be(l))))
                      return O.apply(n, i), n;
                    break;
                  }
              }
              return (
                (f || a(e, p))(
                  i,
                  t,
                  !v,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
          (n.sortStable = x.split("").sort(_).join("") === x),
          (n.detectDuplicates = !!d),
          f(),
          (n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
          })),
          ce(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            ce(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          ce(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            de(q, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          ae
        );
      })(n);
      (C.find = $),
        ((C.expr = $.selectors)[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = $.uniqueSort),
        (C.text = $.getText),
        (C.isXMLDoc = $.isXML),
        (C.contains = $.contains),
        (C.escapeSelector = $.escape);
      var E = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && C(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        S = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        _ = C.expr.match.needsContext;
      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function j(e, t, n) {
        return m(t)
          ? C.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? C.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
            return r > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(j(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(j(this, e || [], !0));
          },
          is: function (e) {
            return !!j(
              this,
              "string" == typeof e && _.test(e) ? C(e) : e || [],
              !1
            ).length;
          },
        });
      var D,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(
                this,
                C.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              N.test(r[1]) && C.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this);
      }).prototype = C.fn),
        (D = C(b));
      var L = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && C(e);
          if (!_.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(C(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return q(e, "nextSibling");
            },
            prev: function (e) {
              return q(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return S(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (k(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            },
          },
          function (e, t) {
            C.fn[e] = function (n, r) {
              var i = C.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = C.filter(r, i)),
                this.length > 1 &&
                  (P[e] || C.uniqueSort(i), L.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var H = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function I(e, t, n, r) {
        var i;
        try {
          e && m((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && m((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  C.each(e.match(H) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : C.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (i = i || e.once, r = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    C.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && u.has(r)) || o.push(r)
                        : r && r.length && "string" !== A(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; (n = C.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return C.Deferred(function (n) {
                    C.each(t, function (t, r) {
                      var i = m(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function s(e, t, r, i) {
                    return function () {
                      var a = this,
                        l = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < o)) {
                            if ((n = r.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(u)
                                ? i
                                  ? u.call(n, s(o, t, M, i), s(o, t, R, i))
                                  : (o++,
                                    u.call(
                                      n,
                                      s(o, t, M, i),
                                      s(o, t, R, i),
                                      s(o, t, M, t.notifyWith)
                                    ))
                                : (r !== M && ((a = void 0), (l = [n])),
                                  (i || t.resolveWith)(a, l));
                          }
                        },
                        c = i
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== R && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(s(0, n, m(i) ? i : M, n.notifyWith)),
                      t[1][3].add(s(0, n, m(e) ? e : M)),
                      t[2][3].add(s(0, n, m(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, i) : i;
                },
              },
              o = {};
            return (
              C.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (i[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = a.call(arguments),
              o = C.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (I(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) I(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          U.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var B = C.Deferred();
      function z() {
        b.removeEventListener("DOMContentLoaded", z),
          n.removeEventListener("load", z),
          C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          B.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || B.resolveWith(b, [C]));
          },
        }),
        (C.ready.then = B.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (b.addEventListener("DOMContentLoaded", z),
            n.addEventListener("load", z));
      var W = function e(t, n, r, i, o, s, a) {
          var l = 0,
            u = t.length,
            c = null == r;
          if ("object" === A(r))
            for (l in ((o = !0), r)) e(t, n, l, r[l], !0, s, a);
          else if (
            void 0 !== i &&
            ((o = !0),
            m(i) || (a = !0),
            c &&
              (a
                ? (n.call(t, i), (n = null))
                : ((c = n),
                  (n = function (e, t, n) {
                    return c.call(C(e), n);
                  }))),
            n)
          )
            for (; l < u; l++) n(t[l], r, a ? i : i.call(t[l], l, n(t[l], r)));
          return o ? t : c ? n.call(t) : u ? n(t[0], r) : s;
        },
        F = /^-ms-/,
        V = /-([a-z])/g;
      function X(e, t) {
        return t.toUpperCase();
      }
      function Q(e) {
        return e.replace(F, "ms-").replace(V, X);
      }
      var J = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Y() {
        this.expando = C.expando + Y.uid++;
      }
      (Y.uid = 1),
        (Y.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                J(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[Q(t)] = n;
            else for (r in t) i[Q(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Q(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Q)
                  : (t = Q(t)) in r
                  ? [t]
                  : t.match(H) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          },
        });
      var G = new Y(),
        K = new Y(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return K.hasData(e) || G.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return G.access(e, t, n);
        },
        _removeData: function (e, t) {
          G.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf("data-") &&
                    ((r = Q(r.slice(5))), te(o, r, i[r]));
                G.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : W(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = K.get(o, e)) ||
                        void 0 !== (n = te(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = G.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = G.access(e, t, C.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            var n = C.queue(e, (t = t || "fx")),
              r = n.length,
              i = n.shift(),
              o = C._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    C.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              G.get(e, n) ||
              G.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                  G.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = C.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = G.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = b.documentElement,
        se = function (e) {
          return C.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      oe.getRootNode &&
        (se = function (e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(ae) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && se(e) && "none" === C.css(e, "display"))
        );
      };
      function ue(e, t, n, r) {
        var i,
          o,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return C.css(e, t, "");
              },
          l = a(),
          u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (C.cssNumber[t] || ("px" !== u && +l)) &&
            re.exec(C.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            C.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= o);
          C.style(e, t, (c *= 2) + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = i))),
          i
        );
      }
      var ce = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = C.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (ce[r] = i),
          i)
        );
      }
      function fe(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = G.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && le(r) && (i[o] = de(r)))
              : "none" !== n && ((i[o] = "none"), G.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return fe(this, !0);
        },
        hide: function () {
          return fe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var pe,
        he,
        ve = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        (g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (g.option = !!pe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && k(e, t)) ? C.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        g.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Ae(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            d = t.createDocumentFragment(),
            f = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ("object" === A(o)) C.merge(f, o.nodeType ? [o] : o);
            else if (we.test(o)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  a = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              C.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
            } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; (o = f[p++]); )
          if (r && C.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = se(o)), (s = be(d.appendChild(o), "script")), u && xe(s), n)
          )
            for (c = 0; (o = s[c++]); ) me.test(o.type || "") && n.push(o);
        return d;
      }
      var Ce = /^([^.]*)(?:\.(.+)|)/;
      function Te() {
        return !0;
      }
      function $e() {
        return !1;
      }
      function Ee(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Se(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Se(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = $e;
        else if (!i) return e;
        return (
          1 === o &&
            ((s = i),
            ((i = function (e) {
              return C().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, i, r, n);
          })
        );
      }
      function _e(e, t, n) {
        n
          ? (G.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (C.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = a.call(arguments)),
                    G.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = G.get(this, t)) || r
                      ? G.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      i && i.value
                    );
                } else
                  o.length &&
                    (G.set(this, t, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === G.get(e, t) && C.event.add(e, t, Te);
      }
      (C.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            v,
            g = G.get(e);
          if (J(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && C.find.matchesSelector(oe, i),
                n.guid || (n.guid = C.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (s = g.handle) ||
                  (s = g.handle =
                    function (t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                u = (t = (t || "").match(H) || [""]).length;
              u--;

            )
              (p = v = (a = Ce.exec(t[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                p &&
                  ((d = C.event.special[p] || {}),
                  (p = (i ? d.delegateType : d.bindType) || p),
                  (d = C.event.special[p] || {}),
                  (c = C.extend(
                    {
                      type: p,
                      origType: v,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && C.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (f = l[p]) ||
                    (((f = l[p] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(p, s))),
                  d.add &&
                    (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                  (C.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            v,
            g = G.hasData(e) && G.get(e);
          if (g && (l = g.events)) {
            for (u = (t = (t || "").match(H) || [""]).length; u--; )
              if (
                ((p = v = (a = Ce.exec(t[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = C.event.special[p] || {},
                    f = l[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = f.length;
                  o--;

                )
                  (c = f[o]),
                    (!i && v !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (f.splice(o, 1),
                      c.selector && f.delegateCount--,
                      d.remove && d.remove.call(e, c));
                s &&
                  !f.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                    C.removeEvent(e, p, g.handle),
                  delete l[p]);
              } else for (p in l) C.event.remove(e, p + t[u], n, r, !0);
            C.isEmptyObject(l) && G.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = new Array(arguments.length),
            l = C.event.fix(e),
            u = (G.get(this, "events") || Object.create(null))[l.type] || [],
            c = C.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, l))
          ) {
            for (
              s = C.event.handlers.call(this, l, u), t = 0;
              (i = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (r = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, a)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = (r = t[n]).selector + " ")] &&
                    (s[i] = r.needsContext
                      ? C(i, this).index(u) > -1
                      : C.find(i, this, null, [u]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  _e(t, "click", Te),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) && t.click && k(t, "input") && _e(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ve.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  G.get(t, "click")) ||
                k(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        ((C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Te
                  : $e),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }).prototype = {
          constructor: C.Event,
          isDefaultPrevented: $e,
          isPropagationStopped: $e,
          isImmediatePropagationStopped: $e,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Te),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Te),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Te),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          C.event.special[e] = {
            setup: function () {
              return _e(this, e, Ee), !1;
            },
            trigger: function () {
              return _e(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || C.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (e, t, n, r) {
            return Se(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Se(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = $e),
              this.each(function () {
                C.event.remove(this, e, n, t);
              })
            );
          },
        });
      var ke = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function De(e, t) {
        return (
          (k(e, "table") &&
            k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function Oe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Le(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Pe(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
          if (G.hasData(e) && (a = G.get(e).events))
            for (i in (G.remove(t, "handle events"), a))
              for (n = 0, r = a[i].length; n < r; n++)
                C.event.add(t, i, a[i][n]);
          K.hasData(e) &&
            ((o = K.access(e)), (s = C.extend({}, o)), K.set(t, s));
        }
      }
      function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ve.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function He(e, t, n, r) {
        t = l(t);
        var i,
          o,
          s,
          a,
          u,
          c,
          d = 0,
          f = e.length,
          p = f - 1,
          h = t[0],
          v = m(h);
        if (v || (f > 1 && "string" == typeof h && !g.checkClone && Ne.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = h.call(this, i, o.html())), He(o, t, n, r);
          });
        if (
          f &&
          ((o = (i = Ae(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = (s = C.map(be(i, "script"), Oe)).length; d < f; d++)
            (u = i),
              d !== p &&
                ((u = C.clone(u, !0, !0)), a && C.merge(s, be(u, "script"))),
              n.call(e[d], u, d);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, C.map(s, Le), d = 0;
              d < a;
              d++
            )
              (u = s[d]),
                me.test(u.type || "") &&
                  !G.access(u, "globalEval") &&
                  C.contains(c, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !u.noModule &&
                      C._evalUrl(
                        u.src,
                        { nonce: u.nonce || u.getAttribute("nonce") },
                        c
                      )
                    : w(u.textContent.replace(je, ""), u, c));
        }
        return e;
      }
      function Me(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || C.cleanData(be(r)),
            r.parentNode &&
              (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            l = se(e);
          if (
            !(
              g.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++)
              qe(o[r], s[r]);
          if (t)
            if (n)
              for (
                o = o || be(e), s = s || be(a), r = 0, i = o.length;
                r < i;
                r++
              )
                Pe(o[r], s[r]);
            else Pe(e, a);
          return (
            (s = be(a, "script")).length > 0 && xe(s, !l && be(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (J(n)) {
              if ((t = n[G.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                n[G.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return Me(this, e, !0);
          },
          remove: function (e) {
            return Me(this, e);
          },
          text: function (e) {
            return W(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return He(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                De(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return He(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = De(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return He(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return He(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return W(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !ke.test(e) &&
                  !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return He(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 &&
                  (C.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (
                var n, r = [], i = C(e), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  C(i[s])[t](n),
                  u.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ue = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        Be = new RegExp(ie.join("|"), "i");
      function ze(e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.style;
        return (
          (n = n || Ie(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (s = C.style(e, t)),
            !g.pixelBoxStyles() &&
              Re.test(s) &&
              Be.test(t) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function We(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              oe.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 12 === t(c.offsetWidth / 3)),
              oe.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          a,
          l,
          u = b.createElement("div"),
          c = b.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
          C.extend(g, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == a &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  (r.style.display = "block"),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (a =
                    parseInt(i.height, 10) +
                      parseInt(i.borderTopWidth, 10) +
                      parseInt(i.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  oe.removeChild(e)),
                a
              );
            },
          }));
      })();
      var Fe = ["Webkit", "Moz", "ms"],
        Ve = b.createElement("div").style,
        Xe = {};
      function Qe(e) {
        var t = C.cssProps[e] || Xe[e];
        return (
          t ||
          (e in Ve
            ? e
            : (Xe[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Fe.length;
                    n--;

                  )
                    if ((e = Fe[n] + t) in Ve) return e;
                })(e) || e))
        );
      }
      var Je = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ge = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };
      function Ze(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function et(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += C.css(e, n + ie[s], !0, i)),
            r
              ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, i)),
                "margin" !== n &&
                  (l -= C.css(e, "border" + ie[s] + "Width", !0, i)))
              : ((l += C.css(e, "padding" + ie[s], !0, i)),
                "padding" !== n
                  ? (l += C.css(e, "border" + ie[s] + "Width", !0, i))
                  : (a += C.css(e, "border" + ie[s] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function tt(e, t, n) {
        var r = Ie(e),
          i =
            (!g.boxSizingReliable() || n) &&
            "border-box" === C.css(e, "boxSizing", !1, r),
          o = i,
          s = ze(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!g.boxSizingReliable() && i) ||
            (!g.reliableTrDimensions() && k(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === C.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            et(e, t, n || (i ? "border" : "content"), o, r, s) +
            "px"
        );
      }
      function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = ze(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              s,
              a = Q(t),
              l = Ye.test(t),
              u = e.style;
            if (
              (l || (t = Qe(a)),
              (s = C.cssHooks[t] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : u[t];
            "string" === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = ue(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (i && i[3]) || (C.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            s,
            a = Q(t);
          return (
            Ye.test(t) || (t = Qe(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) &&
              "get" in s &&
              (i = s.get(e, !0, n)),
            void 0 === i && (i = ze(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        C.each(["height", "width"], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Je.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? tt(e, t, r)
                  : Ue(e, Ge, function () {
                      return tt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Ie(e),
                s = !g.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                l = r ? et(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      et(e, t, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (i = re.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                Ze(0, n, l)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = We(g.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(ze(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Ue(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (C.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (C.cssHooks[e + t].set = Ze);
        }),
        C.fn.extend({
          css: function (e, t) {
            return W(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Ie(e), i = t.length; s < i; s++)
                    o[t[s]] = C.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = nt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : nt.propHooks._default.set(this),
              this
            );
          },
        }),
        (nt.prototype.init.prototype = nt.prototype),
        (nt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        ((C.fx = nt.prototype.init).step = {});
      var rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function at() {
        it &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(at)
            : n.setTimeout(at, C.fx.interval),
          C.fx.tick());
      }
      function lt() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function ut(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ct(e, t, n) {
        for (
          var r,
            i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function dt(e, t, n) {
        var r,
          i,
          o = 0,
          s = dt.prefilters.length,
          a = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (i) return !1;
            for (
              var t = rt || lt(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = 1 - (n / u.duration || 0),
                o = 0,
                s = u.tweens.length;
              o < s;
              o++
            )
              u.tweens[o].run(r);
            return (
              a.notifyWith(e, [u, r, n]),
              r < 1 && s
                ? n
                : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            );
          },
          u = a.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = C.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) u.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                  : a.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = Q(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = C.cssHooks[r]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = dt.prefilters[o].call(u, e, c, u.opts)))
            return (
              m(r.stop) &&
                (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          C.map(c, ct, u),
          m(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          C.fx.timer(C.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (C.Animation = C.extend(dt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (dt.tweeners[n] = dt.tweeners[n] || []),
              dt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              u,
              c,
              d = "width" in t || "height" in t,
              f = this,
              p = {},
              h = e.style,
              v = e.nodeType && le(e),
              g = G.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (s = C._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              f.always(function () {
                f.always(function () {
                  s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ot.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (v ? "hide" : "show"))
                ) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  v = !0;
                }
                p[r] = (g && g[r]) || C.style(e, r);
              }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
              for (r in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = g && g.display) && (u = G.get(e, "display")),
                "none" === (c = C.css(e, "display")) &&
                  (u
                    ? (c = u)
                    : (fe([e], !0),
                      (u = e.style.display || u),
                      (c = C.css(e, "display")),
                      fe([e]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === C.css(e, "float") &&
                  (l ||
                    (f.done(function () {
                      h.display = u;
                    }),
                    null == u &&
                      ((c = h.display), (u = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                f.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (g
                    ? "hidden" in g && (v = g.hidden)
                    : (g = G.access(e, "fxshow", { display: u })),
                  o && (g.hidden = !v),
                  v && fe([e], !0),
                  f.done(function () {
                    for (r in (v || fe([e]), G.remove(e, "fxshow"), p))
                      C.style(e, r, p[r]);
                  })),
                  (l = ct(v ? g[r] : 0, r, f)),
                  r in g ||
                    ((g[r] = l.start), v && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            C.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
            }),
            r
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = C.isEmptyObject(e),
              o = C.speed(t, n, r),
              s = function () {
                var t = dt(this, C.extend({}, e), o);
                (i || G.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = C.timers,
                  s = G.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = G.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = C.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (e, t) {
          var n = C.fn[t];
          C.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ut(t, !0), e, r, i);
          };
        }),
        C.each(
          {
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            C.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (rt = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          it || ((it = !0), at());
        }),
        (C.fx.stop = function () {
          it = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (g.checkOn = "" !== e.value),
            (g.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (g.radioValue = "t" === e.value);
        })();
      var ft,
        pt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return W(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (i =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = C.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!g.radioValue && "radio" === t && k(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(H);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (ft = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = pt[t] || C.find.attr;
          pt[t] = function (e, t, r) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              r ||
                ((o = pt[s]),
                (pt[s] = i),
                (i = null != n(e, t, r) ? s : null),
                (pt[s] = o)),
              i
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function gt(e) {
        return (e.match(H) || []).join(" ");
      }
      function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function yt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(H)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return W(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).addClass(e.call(this, t, mt(this)));
              });
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (a = gt(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).removeClass(e.call(this, t, mt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (a = gt(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, mt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, s;
                  if (r)
                    for (i = 0, o = C(this), s = yt(e); (t = s[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = mt(this)) && G.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : G.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var bt = /\r/g;
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, C(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = C.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(bt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : gt(C.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : i.length;
                for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                  ) {
                    if (((t = C(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = C.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1);
            },
          }),
            g.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (g.focusin = "onfocusin" in n);
      var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (e, t, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            d,
            f,
            h = [r || b],
            v = p.call(e, "type") ? e.type : e,
            g = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = f = a = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !xt.test(v + C.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((g = v.split(".")), (v = g.shift()), g.sort()),
              (u = v.indexOf(":") < 0 && "on" + v),
              ((e = e[C.expando]
                ? e
                : new C.Event(v, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = g.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (d = C.event.special[v] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !y(r)) {
              for (
                l = d.delegateType || v, xt.test(l + v) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (r.ownerDocument || b) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
              (f = s),
                (e.type = o > 1 ? l : d.bindType || v),
                (c =
                  (G.get(s, "events") || Object.create(null))[e.type] &&
                  G.get(s, "handle")) && c.apply(s, t),
                (c = u && s[u]) &&
                  c.apply &&
                  J(s) &&
                  ((e.result = c.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = v),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !J(r) ||
                (u &&
                  m(r[v]) &&
                  !y(r) &&
                  ((a = r[u]) && (r[u] = null),
                  (C.event.triggered = v),
                  e.isPropagationStopped() && f.addEventListener(v, wt),
                  r[v](),
                  e.isPropagationStopped() && f.removeEventListener(v, wt),
                  (C.event.triggered = void 0),
                  a && (r[u] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(r, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        }),
        g.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              C.event.simulate(t, e.target, C.event.fix(e));
            };
            C.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t);
                i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t) - 1;
                i
                  ? G.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), G.remove(r, t));
              },
            };
          });
      var At = n.location,
        Ct = { guid: Date.now() },
        Tt = /\?/;
      C.parseXML = function (e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName("parsererror")[0]),
          (t && !r) ||
            C.error(
              "Invalid XML: " +
                (r
                  ? C.map(r.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      };
      var $t = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
      function kt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          C.each(t, function (t, i) {
            n || $t.test(e)
              ? r(e, i)
              : kt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== A(t)) r(e, t);
        else for (i in t) kt(e + "[" + i + "]", t[i], n, r);
      }
      (C.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) kt(n, e[n], t, i);
        return r.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  _t.test(this.nodeName) &&
                  !St.test(e) &&
                  (this.checked || !ve.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(Et, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Et, "\r\n") };
              })
              .get();
          },
        });
      var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        qt = {},
        Ht = {},
        Mt = "*/".concat("*"),
        Rt = b.createElement("a");
      function It(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(H) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ut(e, t, n, r) {
        var i = {},
          o = e === Ht;
        function s(a) {
          var l;
          return (
            (i[a] = !0),
            C.each(e[a] || [], function (e, a) {
              var u = a(t, n, r);
              return "string" != typeof u || o || i[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
      }
      function Bt(e, t) {
        var n,
          r,
          i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r), e;
      }
      (Rt.href = At.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                At.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Mt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e);
          },
          ajaxPrefilter: It(qt),
          ajaxTransport: It(Ht),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0));
            var r,
              i,
              o,
              s,
              a,
              l,
              u,
              c,
              d,
              f,
              p = C.ajaxSetup({}, (t = t || {})),
              h = p.context || p,
              v = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
              g = C.Deferred(),
              m = C.Callbacks("once memory"),
              y = p.statusCode || {},
              x = {},
              w = {},
              A = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!s)
                      for (s = {}; (t = Ot.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) T.always(e[T.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || A;
                  return r && r.abort(t), $(0, t), this;
                },
              };
            if (
              (g.promise(T),
              (p.url = ((e || p.url || At.href) + "").replace(
                Pt,
                At.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = p.url),
                  (l.href = l.href),
                  (p.crossDomain =
                    Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = C.param(p.data, p.traditional)),
              Ut(qt, p, t, T),
              u)
            )
              return T;
            for (d in ((c = C.event && p.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Lt.test(p.type)),
            (i = p.url.replace(jt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Nt, "+"))
              : ((f = p.url.slice(i.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((i += (Tt.test(i) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((i = i.replace(Dt, "$1")),
                  (f = (Tt.test(i) ? "&" : "?") + "_=" + Ct.guid++ + f)),
                (p.url = i + f)),
            p.ifModified &&
              (C.lastModified[i] &&
                T.setRequestHeader("If-Modified-Since", C.lastModified[i]),
              C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              T.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || u))
              return T.abort();
            if (
              ((A = "abort"),
              m.add(p.complete),
              T.done(p.success),
              T.fail(p.error),
              (r = Ut(Ht, p, t, T)))
            ) {
              if (((T.readyState = 1), c && v.trigger("ajaxSend", [T, p]), u))
                return T;
              p.async &&
                p.timeout > 0 &&
                (a = n.setTimeout(function () {
                  T.abort("timeout");
                }, p.timeout));
              try {
                (u = !1), r.send(x, $);
              } catch (e) {
                if (u) throw e;
                $(-1, e);
              }
            } else $(-1, "No Transport");
            function $(e, t, s, l) {
              var d,
                f,
                b,
                x,
                w,
                A = t;
              u ||
                ((u = !0),
                a && n.clearTimeout(a),
                (r = void 0),
                (o = l || ""),
                (T.readyState = e > 0 ? 4 : 0),
                (d = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (x = (function (e, t, n) {
                    for (
                      var r, i, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          l.unshift(i);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                          o = i;
                          break;
                        }
                        s || (s = i);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, T, s)),
                !d &&
                  C.inArray("script", p.dataTypes) > -1 &&
                  C.inArray("json", p.dataTypes) < 0 &&
                  (p.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                          for (i in u)
                            if (
                              (a = i.split(" "))[1] === o &&
                              (s = u[l + " " + a[0]] || u["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = u[i])
                                : !0 !== u[i] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, x, T, d)),
                d
                  ? (p.ifModified &&
                      ((w = T.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[i] = w),
                      (w = T.getResponseHeader("etag")) && (C.etag[i] = w)),
                    204 === e || "HEAD" === p.type
                      ? (A = "nocontent")
                      : 304 === e
                      ? (A = "notmodified")
                      : ((A = x.state), (f = x.data), (d = !(b = x.error))))
                  : ((b = A), (!e && A) || ((A = "error"), e < 0 && (e = 0))),
                (T.status = e),
                (T.statusText = (t || A) + ""),
                d ? g.resolveWith(h, [f, A, T]) : g.rejectWith(h, [T, A, b]),
                T.statusCode(y),
                (y = void 0),
                c &&
                  v.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : b]),
                m.fireWith(h, [T, A]),
                c &&
                  (v.trigger("ajaxComplete", [T, p]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, "script");
          },
        }),
        C.each(["get", "post"], function (e, t) {
          C[t] = function (e, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var zt = { 0: 200, 1223: 204 },
        Wt = C.ajaxSettings.xhr();
      (g.cors = !!Wt && "withCredentials" in Wt),
        (g.ajax = Wt = !!Wt),
        C.ajaxTransport(function (e) {
          var t, r;
          if (g.cors || (Wt && !e.crossDomain))
            return {
              send: function (i, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  a.setRequestHeader(s, i[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            zt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (r = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = C("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Ft,
        Vt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || C.expando + "_" + Ct.guid++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (Xt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Xt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Xt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || C.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  s && m(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument =
          (((Ft = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ft.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (g.createHTMLDocument
                  ? (((r = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (o = !n && []),
              (i = N.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ae([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], i.childNodes)));
          var r, i, o;
        }),
        (C.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((r = gt(e.slice(a))), (e = e.slice(0, a))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
              C.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              u = C.css(e, "position"),
              c = C(e),
              d = {};
            "static" === u && (e.style.position = "relative"),
              (a = c.offset()),
              (o = C.css(e, "top")),
              (l = C.css(e, "left")),
              ("absolute" === u || "fixed" === u) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (r = c.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, C.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + i),
              "using" in t ? t.using.call(e, d) : c.css(d);
          },
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === C.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                  (i.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - C.css(r, "marginTop", !0),
                left: t.left - i.left - C.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === C.css(e, "position");

              )
                e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (r) {
              return W(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (e, t) {
          C.cssHooks[t] = We(g.pixelPosition, function (e, n) {
            if (n)
              return (n = ze(e, t)), Re.test(n) ? C(e).position()[t] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (e, t) {
          C.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              C.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                  a = n || (!0 === i || !0 === o ? "margin" : "border");
                return W(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? C.css(t, n, a)
                      : C.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = a.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            i
          );
      }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = k),
        (C.isFunction = m),
        (C.isWindow = y),
        (C.camelCase = Q),
        (C.type = A),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (C.trim = function (e) {
          return null == e ? "" : (e + "").replace(Qt, "");
        }),
        void 0 ===
          (r = function () {
            return C;
          }.apply(t, [])) || (e.exports = r);
      var Jt = n.jQuery,
        Yt = n.$;
      return (
        (C.noConflict = function (e) {
          return (
            n.$ === C && (n.$ = Yt), e && n.jQuery === C && (n.jQuery = Jt), C
          );
        }),
        void 0 === i && (n.jQuery = n.$ = C),
        C
      );
    });
  },
  12: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return i;
      });
    var r = n(4);
    const i = (e) => ({ _$litStatic$: e }),
      o = (e, ...t) => ({
        _$litStatic$: t.reduce(
          (t, n, r) =>
            t +
            ((e) => {
              if (void 0 !== e._$litStatic$) return e._$litStatic$;
              throw Error(
                `Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`
              );
            })(n) +
            e[r + 1],
          e[0]
        ),
      }),
      s = new Map(),
      a =
        (e) =>
        (t, ...n) => {
          var r;
          const i = n.length;
          let o, a;
          const l = [],
            u = [];
          let c,
            d = 0,
            f = !1;
          for (; d < i; ) {
            for (
              c = t[d];
              d < i &&
              void 0 !==
                ((a = n[d]),
                (o =
                  null === (r = a) || void 0 === r ? void 0 : r._$litStatic$));

            )
              (c += o + t[++d]), (f = !0);
            u.push(a), l.push(c), d++;
          }
          if ((d === i && l.push(t[i]), f)) {
            const e = l.join("$$lit$$");
            void 0 === (t = s.get(e)) && s.set(e, (t = l)), (n = u);
          }
          return e(t, ...n);
        },
      l = a(r.b);
    a(r.f);
  },
  17: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(11),
      i = n.n(r);
    window.matchMedia ||
      (window.matchMedia = (function () {
        var e = window.styleMedia || window.media;
        if (!e) {
          var t,
            n = document.createElement("style"),
            r = document.getElementsByTagName("script")[0];
          (n.type = "text/css"),
            (n.id = "matchmediajs-test"),
            r ? r.parentNode.insertBefore(n, r) : document.head.appendChild(n),
            (t =
              ("getComputedStyle" in window &&
                window.getComputedStyle(n, null)) ||
              n.currentStyle),
            (e = {
              matchMedium: function (e) {
                var r =
                  "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return (
                  n.styleSheet
                    ? (n.styleSheet.cssText = r)
                    : (n.textContent = r),
                  "1px" === t.width
                );
              },
            });
        }
        return function (t) {
          return { matches: e.matchMedium(t || "all"), media: t || "all" };
        };
      })());
    var o = {
      queries: [],
      current: "",
      _init() {
        if (!0 !== this.isInitialized) {
          this.isInitialized = !0;
          i()("meta.foundation-mq").length ||
            i()(
              '<meta class="foundation-mq" name="foundation-mq" content>'
            ).appendTo(document.head);
          var e,
            t = i()(".foundation-mq").css("font-family");
          for (var n in ((e = (function (e) {
            var t = {};
            if ("string" != typeof e) return t;
            if (!(e = e.trim().slice(1, -1))) return t;
            return (t = e.split("&").reduce(function (e, t) {
              var n = t.replace(/\+/g, " ").split("="),
                r = n[0],
                i = n[1];
              return (
                (r = decodeURIComponent(r)),
                (i = void 0 === i ? null : decodeURIComponent(i)),
                e.hasOwnProperty(r)
                  ? Array.isArray(e[r])
                    ? e[r].push(i)
                    : (e[r] = [e[r], i])
                  : (e[r] = i),
                e
              );
            }, {}));
          })(t)),
          (this.queries = []),
          e))
            e.hasOwnProperty(n) &&
              this.queries.push({
                name: n,
                value: `only screen and (min-width: ${e[n]})`,
              });
          (this.current = this._getCurrentSize()), this._watcher();
        }
      },
      _reInit() {
        (this.isInitialized = !1), this._init();
      },
      atLeast(e) {
        var t = this.get(e);
        return !!t && window.matchMedia(t).matches;
      },
      only(e) {
        return e === this._getCurrentSize();
      },
      upTo(e) {
        const t = this.next(e);
        return !t || !this.atLeast(t);
      },
      is(e) {
        const t = e
            .trim()
            .split(" ")
            .filter((e) => !!e.length),
          [n, r = ""] = t;
        if ("only" === r) return this.only(n);
        if (!r || "up" === r) return this.atLeast(n);
        if ("down" === r) return this.upTo(n);
        throw new Error(
          `\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "${e}".\n    `
        );
      },
      get(e) {
        for (var t in this.queries)
          if (this.queries.hasOwnProperty(t)) {
            var n = this.queries[t];
            if (e === n.name) return n.value;
          }
        return null;
      },
      next(e) {
        const t = this.queries.findIndex((t) => this._getQueryName(t) === e);
        if (-1 === t)
          throw new Error(
            `\n        Unknown breakpoint "${e}" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      `
          );
        const n = this.queries[t + 1];
        return n ? n.name : null;
      },
      _getQueryName(e) {
        if ("string" == typeof e) return e;
        if ("object" == typeof e) return e.name;
        throw new TypeError(
          `\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "${e}" (${typeof e})\n    `
        );
      },
      _getCurrentSize() {
        for (var e, t = 0; t < this.queries.length; t++) {
          var n = this.queries[t];
          window.matchMedia(n.value).matches && (e = n);
        }
        return e && this._getQueryName(e);
      },
      _watcher() {
        i()(window)
          .off("resize.zf.mediaquery")
          .on("resize.zf.mediaquery", () => {
            var e = this._getCurrentSize(),
              t = this.current;
            e !== t &&
              ((this.current = e),
              i()(window).trigger("changed.zf.mediaquery", [e, t]));
          });
      },
    };
  },
  19: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "c", function () {
        return i;
      });
    const r = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6,
      },
      i =
        (e) =>
        (...t) => ({ _$litDirective$: e, values: t });
    class o {
      constructor(e) {}
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(e, t, n) {
        (this._$Ct = e), (this._$AM = t), (this._$Ci = n);
      }
      _$AS(e, t) {
        return this.update(e, t);
      }
      update(e, t) {
        return this.render(...t);
      }
    }
  },
  31: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var r = n(0),
      i = n(12);
    class o {
      constructor() {
        (this.container = document.body),
          (this.data = null),
          (this.disableClose = !1),
          (this.hasBackdrop = !0);
      }
    }
    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              l(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function l(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    class u {
      static open(e, t) {
        var n;
        const s = a(a({}, new o()), t),
          l = document.createElement("div"),
          u = i.b`${Object(i.c)(e)}`;
        Object(r.e)(i.a`<${u} .config=${s}></${u}>`, l);
        const c = l.firstElementChild;
        if (
          (null != s &&
            s.hasBackdrop &&
            (document.body.style.overflow = "hidden"),
          null == s || !s.container)
        )
          throw Error("No container found to attach the dialog component.");
        return (
          null == s ||
            null === (n = s.container) ||
            void 0 === n ||
            n.appendChild(c),
          c.afterClosed.subscribe(() => {
            null != s &&
              s.hasBackdrop &&
              (document.body.style.overflow = "auto"),
              null == s || s.container.removeChild(c);
          }),
          c
        );
      }
    }
  },
  38: function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!e) return "";
      if (!window.i18n) return e;
      const n = t && "string" == typeof t ? t.split(".") : [];
      let r = window.i18n;
      return (
        n.forEach(function (e) {
          r = r[e];
        }),
        r[e] || e
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  4: function (e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function () {
      return R;
    }),
      n.d(t, "b", function () {
        return A;
      }),
      n.d(t, "c", function () {
        return T;
      }),
      n.d(t, "d", function () {
        return $;
      }),
      n.d(t, "e", function () {
        return S;
      }),
      n.d(t, "f", function () {
        return C;
      });
    const i = globalThis.trustedTypes,
      o = i ? i.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
      s = `lit$${(Math.random() + "").slice(9)}$`,
      a = "?" + s,
      l = `<${a}>`,
      u = document,
      c = (e = "") => u.createComment(e),
      d = (e) => null === e || ("object" != typeof e && "function" != typeof e),
      f = Array.isArray,
      p = (e) => {
        var t;
        return (
          f(e) ||
          "function" ==
            typeof (null === (t = e) || void 0 === t
              ? void 0
              : t[Symbol.iterator])
        );
      },
      h = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      v = /-->/g,
      g = />/g,
      m =
        />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      y = /'/g,
      b = /"/g,
      x = /^(?:script|style|textarea)$/i,
      w =
        (e) =>
        (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
      A = w(1),
      C = w(2),
      T = Symbol.for("lit-noChange"),
      $ = Symbol.for("lit-nothing"),
      E = new WeakMap(),
      S = (e, t, n) => {
        var r, i;
        const o =
          null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r
            ? r
            : t;
        let s = o._$litPart$;
        if (void 0 === s) {
          const e =
            null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i
              ? i
              : null;
          o._$litPart$ = s = new O(
            t.insertBefore(c(), e),
            e,
            void 0,
            null != n ? n : {}
          );
        }
        return s._$AI(e), s;
      },
      _ = u.createTreeWalker(u, 129, null, !1),
      k = (e, t) => {
        const n = e.length - 1,
          r = [];
        let i,
          a = 2 === t ? "<svg>" : "",
          u = h;
        for (let t = 0; t < n; t++) {
          const n = e[t];
          let o,
            c,
            d = -1,
            f = 0;
          for (
            ;
            f < n.length && ((u.lastIndex = f), (c = u.exec(n)), null !== c);

          )
            (f = u.lastIndex),
              u === h
                ? "!--" === c[1]
                  ? (u = v)
                  : void 0 !== c[1]
                  ? (u = g)
                  : void 0 !== c[2]
                  ? (x.test(c[2]) && (i = RegExp("</" + c[2], "g")), (u = m))
                  : void 0 !== c[3] && (u = m)
                : u === m
                ? ">" === c[0]
                  ? ((u = null != i ? i : h), (d = -1))
                  : void 0 === c[1]
                  ? (d = -2)
                  : ((d = u.lastIndex - c[2].length),
                    (o = c[1]),
                    (u = void 0 === c[3] ? m : '"' === c[3] ? b : y))
                : u === b || u === y
                ? (u = m)
                : u === v || u === g
                ? (u = h)
                : ((u = m), (i = void 0));
          const p = u === m && e[t + 1].startsWith("/>") ? " " : "";
          a +=
            u === h
              ? n + l
              : d >= 0
              ? (r.push(o), n.slice(0, d) + "$lit$" + n.slice(d) + s + p)
              : n + s + (-2 === d ? (r.push(void 0), t) : p);
        }
        const c = a + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
        return [void 0 !== o ? o.createHTML(c) : c, r];
      };
    class N {
      constructor({ strings: e, _$litType$: t }, n) {
        let r;
        this.parts = [];
        let o = 0,
          l = 0;
        const u = e.length - 1,
          d = this.parts,
          [f, p] = k(e, t);
        if (
          ((this.el = N.createElement(f, n)),
          (_.currentNode = this.el.content),
          2 === t)
        ) {
          const e = this.el.content,
            t = e.firstChild;
          t.remove(), e.append(...t.childNodes);
        }
        for (; null !== (r = _.nextNode()) && d.length < u; ) {
          if (1 === r.nodeType) {
            if (r.hasAttributes()) {
              const e = [];
              for (const t of r.getAttributeNames())
                if (t.endsWith("$lit$") || t.startsWith(s)) {
                  const n = p[l++];
                  if ((e.push(t), void 0 !== n)) {
                    const e = r
                        .getAttribute(n.toLowerCase() + "$lit$")
                        .split(s),
                      t = /([.?@])?(.*)/.exec(n);
                    d.push({
                      type: 1,
                      index: o,
                      name: t[2],
                      strings: e,
                      ctor:
                        "." === t[1]
                          ? P
                          : "?" === t[1]
                          ? q
                          : "@" === t[1]
                          ? H
                          : L,
                    });
                  } else d.push({ type: 6, index: o });
                }
              for (const t of e) r.removeAttribute(t);
            }
            if (x.test(r.tagName)) {
              const e = r.textContent.split(s),
                t = e.length - 1;
              if (t > 0) {
                r.textContent = i ? i.emptyScript : "";
                for (let n = 0; n < t; n++)
                  r.append(e[n], c()),
                    _.nextNode(),
                    d.push({ type: 2, index: ++o });
                r.append(e[t], c());
              }
            }
          } else if (8 === r.nodeType)
            if (r.data === a) d.push({ type: 2, index: o });
            else {
              let e = -1;
              for (; -1 !== (e = r.data.indexOf(s, e + 1)); )
                d.push({ type: 7, index: o }), (e += s.length - 1);
            }
          o++;
        }
      }
      static createElement(e, t) {
        const n = u.createElement("template");
        return (n.innerHTML = e), n;
      }
    }
    function j(e, t, n = e, r) {
      var i, o, s, a;
      if (t === T) return t;
      let l =
        void 0 !== r
          ? null === (i = n._$Cl) || void 0 === i
            ? void 0
            : i[r]
          : n._$Cu;
      const u = d(t) ? void 0 : t._$litDirective$;
      return (
        (null == l ? void 0 : l.constructor) !== u &&
          (null === (o = null == l ? void 0 : l._$AO) ||
            void 0 === o ||
            o.call(l, !1),
          void 0 === u ? (l = void 0) : ((l = new u(e)), l._$AT(e, n, r)),
          void 0 !== r
            ? ((null !== (s = (a = n)._$Cl) && void 0 !== s
                ? s
                : (a._$Cl = []))[r] = l)
            : (n._$Cu = l)),
        void 0 !== l && (t = j(e, l._$AS(e, t.values), l, r)),
        t
      );
    }
    class D {
      constructor(e, t) {
        (this.v = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(e) {
        var t;
        const {
            el: { content: n },
            parts: r,
          } = this._$AD,
          i = (
            null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t
              ? t
              : u
          ).importNode(n, !0);
        _.currentNode = i;
        let o = _.nextNode(),
          s = 0,
          a = 0,
          l = r[0];
        for (; void 0 !== l; ) {
          if (s === l.index) {
            let t;
            2 === l.type
              ? (t = new O(o, o.nextSibling, this, e))
              : 1 === l.type
              ? (t = new l.ctor(o, l.name, l.strings, this, e))
              : 6 === l.type && (t = new M(o, this, e)),
              this.v.push(t),
              (l = r[++a]);
          }
          s !== (null == l ? void 0 : l.index) && ((o = _.nextNode()), s++);
        }
        return i;
      }
      m(e) {
        let t = 0;
        for (const n of this.v)
          void 0 !== n &&
            (void 0 !== n.strings
              ? (n._$AI(e, n, t), (t += n.strings.length - 2))
              : n._$AI(e[t])),
            t++;
      }
    }
    class O {
      constructor(e, t, n, r) {
        var i;
        (this.type = 2),
          (this._$AH = $),
          (this._$AN = void 0),
          (this._$AA = e),
          (this._$AB = t),
          (this._$AM = n),
          (this.options = r),
          (this._$Cg =
            null === (i = null == r ? void 0 : r.isConnected) ||
            void 0 === i ||
            i);
      }
      get _$AU() {
        var e, t;
        return null !==
          (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
          void 0 !== t
          ? t
          : this._$Cg;
      }
      get parentNode() {
        let e = this._$AA.parentNode;
        const t = this._$AM;
        return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(e, t = this) {
        (e = j(this, e, t)),
          d(e)
            ? e === $ || null == e || "" === e
              ? (this._$AH !== $ && this._$AR(), (this._$AH = $))
              : e !== this._$AH && e !== T && this.$(e)
            : void 0 !== e._$litType$
            ? this.T(e)
            : void 0 !== e.nodeType
            ? this.S(e)
            : p(e)
            ? this.M(e)
            : this.$(e);
      }
      A(e, t = this._$AB) {
        return this._$AA.parentNode.insertBefore(e, t);
      }
      S(e) {
        this._$AH !== e && (this._$AR(), (this._$AH = this.A(e)));
      }
      $(e) {
        this._$AH !== $ && d(this._$AH)
          ? (this._$AA.nextSibling.data = e)
          : this.S(u.createTextNode(e)),
          (this._$AH = e);
      }
      T(e) {
        var t;
        const { values: n, _$litType$: r } = e,
          i =
            "number" == typeof r
              ? this._$AC(e)
              : (void 0 === r.el && (r.el = N.createElement(r.h, this.options)),
                r);
        if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i)
          this._$AH.m(n);
        else {
          const e = new D(i, this),
            t = e.p(this.options);
          e.m(n), this.S(t), (this._$AH = e);
        }
      }
      _$AC(e) {
        let t = E.get(e.strings);
        return void 0 === t && E.set(e.strings, (t = new N(e))), t;
      }
      M(e) {
        f(this._$AH) || ((this._$AH = []), this._$AR());
        const t = this._$AH;
        let n,
          r = 0;
        for (const i of e)
          r === t.length
            ? t.push((n = new O(this.A(c()), this.A(c()), this, this.options)))
            : (n = t[r]),
            n._$AI(i),
            r++;
        r < t.length && (this._$AR(n && n._$AB.nextSibling, r), (t.length = r));
      }
      _$AR(e = this._$AA.nextSibling, t) {
        var n;
        for (
          null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t);
          e && e !== this._$AB;

        ) {
          const t = e.nextSibling;
          e.remove(), (e = t);
        }
      }
      setConnected(e) {
        var t;
        void 0 === this._$AM &&
          ((this._$Cg = e),
          null === (t = this._$AP) || void 0 === t || t.call(this, e));
      }
    }
    class L {
      constructor(e, t, n, r, i) {
        (this.type = 1),
          (this._$AH = $),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = t),
          (this._$AM = r),
          (this.options = i),
          n.length > 2 || "" !== n[0] || "" !== n[1]
            ? ((this._$AH = Array(n.length - 1).fill(new String())),
              (this.strings = n))
            : (this._$AH = $);
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(e, t = this, n, r) {
        const i = this.strings;
        let o = !1;
        if (void 0 === i)
          (e = j(this, e, t, 0)),
            (o = !d(e) || (e !== this._$AH && e !== T)),
            o && (this._$AH = e);
        else {
          const r = e;
          let s, a;
          for (e = i[0], s = 0; s < i.length - 1; s++)
            (a = j(this, r[n + s], t, s)),
              a === T && (a = this._$AH[s]),
              o || (o = !d(a) || a !== this._$AH[s]),
              a === $
                ? (e = $)
                : e !== $ && (e += (null != a ? a : "") + i[s + 1]),
              (this._$AH[s] = a);
        }
        o && !r && this.k(e);
      }
      k(e) {
        e === $
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null != e ? e : "");
      }
    }
    class P extends L {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      k(e) {
        this.element[this.name] = e === $ ? void 0 : e;
      }
    }
    class q extends L {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      k(e) {
        e && e !== $
          ? this.element.setAttribute(this.name, "")
          : this.element.removeAttribute(this.name);
      }
    }
    class H extends L {
      constructor(e, t, n, r, i) {
        super(e, t, n, r, i), (this.type = 5);
      }
      _$AI(e, t = this) {
        var n;
        if ((e = null !== (n = j(this, e, t, 0)) && void 0 !== n ? n : $) === T)
          return;
        const r = this._$AH,
          i =
            (e === $ && r !== $) ||
            e.capture !== r.capture ||
            e.once !== r.once ||
            e.passive !== r.passive,
          o = e !== $ && (r === $ || i);
        i && this.element.removeEventListener(this.name, this, r),
          o && this.element.addEventListener(this.name, this, e),
          (this._$AH = e);
      }
      handleEvent(e) {
        var t, n;
        "function" == typeof this._$AH
          ? this._$AH.call(
              null !==
                (n =
                  null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.host) && void 0 !== n
                ? n
                : this.element,
              e
            )
          : this._$AH.handleEvent(e);
      }
    }
    class M {
      constructor(e, t, n) {
        (this.element = e),
          (this.type = 6),
          (this._$AN = void 0),
          (this._$AM = t),
          (this.options = n);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(e) {
        j(this, e);
      }
    }
    const R = {
        P: "$lit$",
        V: s,
        L: a,
        I: 1,
        N: k,
        R: D,
        D: p,
        j: j,
        H: O,
        O: L,
        F: q,
        B: H,
        W: P,
        Z: M,
      },
      I = window.litHtmlPolyfillSupport;
    null == I || I(N, O),
      (null !== (r = globalThis.litHtmlVersions) && void 0 !== r
        ? r
        : (globalThis.litHtmlVersions = [])
      ).push("2.0.1");
  },
  53: function (e, t, n) {
    var r = n(6),
      i = n(65);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var o,
      s = 0,
      a = {
        injectType: "lazySingletonStyleTag",
        insert: "head",
        singleton: !0,
      },
      l = {};
    (l.locals = i.locals || {}),
      (l.use = function () {
        return s++ || (o = r(i, a)), l;
      }),
      (l.unuse = function () {
        s > 0 && !--s && (o(), (o = null));
      }),
      (e.exports = l);
  },
  6: function (e, t, n) {
    "use strict";
    var r,
      i = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      s = [];
    function a(e) {
      for (var t = -1, n = 0; n < s.length; n++)
        if (s[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var n = {}, r = [], i = 0; i < e.length; i++) {
        var o = e[i],
          l = t.base ? o[0] + t.base : o[0],
          u = n[l] || 0,
          c = "".concat(l, " ").concat(u);
        n[l] = u + 1;
        var d = a(c),
          f = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== d
          ? (s[d].references++, s[d].updater(f))
          : s.push({ identifier: c, updater: g(f, t), references: 1 }),
          r.push(c);
      }
      return r;
    }
    function u(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var i = n.nc;
        i && (r.nonce = i);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var s = o(e.insert || "head");
        if (!s)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        s.appendChild(t);
      }
      return t;
    }
    var c,
      d =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function f(e, t, n, r) {
      var i = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, i);
      else {
        var o = document.createTextNode(i),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        i = n.media,
        o = n.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        o &&
          "undefined" != typeof btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      v = 0;
    function g(e, t) {
      var n, r, i;
      if (t.singleton) {
        var o = v++;
        (n = h || (h = u(t))),
          (r = f.bind(null, n, o, !1)),
          (i = f.bind(null, n, o, !0));
      } else
        (n = u(t)),
          (r = p.bind(null, n, t)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else i();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = i());
      var n = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var i = a(n[r]);
            s[i].references--;
          }
          for (var o = l(e, t), u = 0; u < n.length; u++) {
            var c = a(n[u]);
            0 === s[c].references && (s[c].updater(), s.splice(c, 1));
          }
          n = o;
        }
      };
    };
  },
  61: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "LocalChoose", function () {
        return T;
      });
    var r = n(0),
      i = n(4);
    const { H: o } = i.a;
    var s = n(19);
    const a = (e, t) => {
        var n, r;
        const i = e._$AN;
        if (void 0 === i) return !1;
        for (const e of i)
          null === (r = (n = e)._$AO) || void 0 === r || r.call(n, t, !1),
            a(e, t);
        return !0;
      },
      l = (e) => {
        let t, n;
        do {
          if (void 0 === (t = e._$AM)) break;
          (n = t._$AN), n.delete(e), (e = t);
        } while (0 === (null == n ? void 0 : n.size));
      },
      u = (e) => {
        for (let t; (t = e._$AM); e = t) {
          let n = t._$AN;
          if (void 0 === n) t._$AN = n = new Set();
          else if (n.has(e)) break;
          n.add(e), f(t);
        }
      };
    function c(e) {
      void 0 !== this._$AN
        ? (l(this), (this._$AM = e), u(this))
        : (this._$AM = e);
    }
    function d(e, t = !1, n = 0) {
      const r = this._$AH,
        i = this._$AN;
      if (void 0 !== i && 0 !== i.size)
        if (t)
          if (Array.isArray(r))
            for (let e = n; e < r.length; e++) a(r[e], !1), l(r[e]);
          else null != r && (a(r, !1), l(r));
        else a(this, e);
    }
    const f = (e) => {
      var t, n, r, i;
      e.type == s.b.CHILD &&
        ((null !== (t = (r = e)._$AP) && void 0 !== t) || (r._$AP = d),
        (null !== (n = (i = e)._$AQ) && void 0 !== n) || (i._$AQ = c));
    };
    class p extends s.a {
      constructor() {
        super(...arguments), (this._$AN = void 0);
      }
      _$AT(e, t, n) {
        super._$AT(e, t, n), u(this), (this.isConnected = e._$AU);
      }
      _$AO(e, t = !0) {
        var n, r;
        e !== this.isConnected &&
          ((this.isConnected = e),
          e
            ? null === (n = this.reconnected) || void 0 === n || n.call(this)
            : null === (r = this.disconnected) || void 0 === r || r.call(this)),
          t && (a(this, e), l(this));
      }
      setValue(e) {
        if (void 0 === this._$Ct.strings) this._$Ct._$AI(e, this);
        else {
          const t = [...this._$Ct._$AH];
          (t[this._$Ci] = e), this._$Ct._$AI(t, this, 0);
        }
      }
      disconnected() {}
      reconnected() {}
    }
    class h {}
    const v = new WeakMap(),
      g = Object(s.c)(
        class extends p {
          render(e) {
            return i.d;
          }
          update(e, [t]) {
            var n;
            const r = t !== this.U;
            return (
              r && void 0 !== this.U && this.nt(void 0),
              (r || this.rt !== this.lt) &&
                ((this.U = t),
                (this.ht =
                  null === (n = e.options) || void 0 === n ? void 0 : n.host),
                this.nt((this.lt = e.element))),
              i.d
            );
          }
          nt(e) {
            "function" == typeof this.U
              ? (void 0 !== v.get(this.U) && this.U.call(this.ht, void 0),
                v.set(this.U, e),
                void 0 !== e && this.U.call(this.ht, e))
              : (this.U.value = e);
          }
          get rt() {
            var e;
            return "function" == typeof this.U
              ? v.get(this.U)
              : null === (e = this.U) || void 0 === e
              ? void 0
              : e.value;
          }
          disconnected() {
            this.rt === this.lt && this.nt(void 0);
          }
          reconnected() {
            this.nt(this.lt);
          }
        }
      );
    var m = n(17),
      y = n(38),
      b = n(31),
      x = n(53),
      w = n.n(x);
    function A(e, t, n) {
      return n
        ? t
          ? t(e)
          : e
        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
    }
    function C(e, t, n) {
      if (n) return t ? t(e()) : e();
      try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r;
      } catch (e) {
        return Promise.reject(e);
      }
    }
    m.a._init();
    class T extends r.a {
      static get properties() {
        return {
          regions: { type: Array },
          context: { type: String },
          region_name: { type: String },
          region_title: { type: String },
        };
      }
      constructor() {
        super(),
          (this.region_name = null),
          (this.region_title = null),
          (this.regions = []),
          (this.context = ""),
          (this.localChooseDropDown = null),
          (this.wrapper = new h()),
          (this.onOutsideClick = this.onOutsideClick.bind(this)),
          w.a.use();
      }
      createRenderRoot() {
        return this;
      }
      connectedCallback() {
        super.connectedCallback(),
          window.addEventListener("click", this.onOutsideClick);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          window.removeEventListener("click", this.onOutsideClick);
      }
      _getRegions() {
        return C(function () {
          return A(
            fetch("/regioni.json")
              .then((e) => e.json())
              .then((e) => (null == e ? void 0 : e.regioni) || [])
          );
        });
      }
      onOutsideClick(e) {
        var t;
        this.contains(e.target) ||
          (null === (t = this.localChooseDropDown) ||
            void 0 === t ||
            t.close(e, null),
          document
            .querySelector(".local-choose-button")
            .setAttribute("aria-expanded", "false"));
      }
      toggleMenu(e) {
        const t = this;
        return C(function () {
          return A(
            ((e = function () {
              if (t.localChooseDropDown)
                return (
                  t.localChooseDropDown.close(),
                  void document
                    .querySelector(".local-choose-button")
                    .setAttribute("aria-expanded", "false")
                );
              t.openMenu();
            }),
            (n = (function () {
              if (!t.regions.length)
                return A(t._getRegions(), function (e) {
                  t.regions = e;
                });
            })()) && n.then
              ? n.then(e)
              : e(n))
          );
          var e, n;
        });
      }
      openMenu() {
        m.a.is("small only")
          ? n
              .e(6)
              .then(n.bind(null, 394))
              .then(() => {
                b.a
                  .open("rainews-local-choose-popover", {
                    data: {
                      regions: this.regions,
                      regionName: this.region_name,
                    },
                  })
                  .afterClosed.subscribe((e) => this.manageClick(e));
              })
          : n
              .e(4)
              .then(n.bind(null, 395))
              .then(() => {
                var e, t;
                (this.localChooseDropDown = b.a.open(
                  "rainews-local-choose-dropdown",
                  {
                    data: { regions: this.regions, context: this.context },
                    container:
                      null === (e = this.wrapper) || void 0 === e
                        ? void 0
                        : e.value,
                    hasBackdrop: !1,
                  }
                )),
                  null === (t = this.localChooseDropDown) ||
                    void 0 === t ||
                    t.afterClosed.subscribe((e) => {
                      this.manageClick(e), (this.localChooseDropDown = null);
                    });
              }),
          document
            .querySelector(".local-choose-button")
            .setAttribute("aria-expanded", "true");
      }
      manageClick(e) {}
      renderButton() {
        return r.d`
      <button class="button local-choose-button" aria-haspopup="listbox" aria-expanded="false" @click="${
        this.toggleMenu
      }">
        <span>${Object(y.a)("TgRegioni", "editorial_board")}</span>
      </button>
    `;
      }
      render() {
        return r.d`
      <div ${g(this.wrapper)} class="wrapper-local-choose ${
          this.context ? "wrapper-local-choose--" + this.context : ""
        }">
        ${this.renderButton()}
      </div>
    `;
      }
    }
    customElements.get("rainews-local-choose") ||
      customElements.define("rainews-local-choose", T);
  },
  65: function (e, t, n) {
    (t = n(7)(!1)).push([
      e.i,
      '.wrapper-local-choose{display:inline-block}.wrapper-local-choose--notiziari{display:block}.wrapper-local-choose--notiziari .local-choose-button{border:0 none;background:none;font-family:"Source Sans Pro",Arial,Helvetica,sans-serif;font-weight:700;display:block;height:40px;line-height:25px;color:#fff;padding:5px 0;margin-bottom:0}@media only screen and (min-width: 1024px){.wrapper-local-choose--notiziari .local-choose-button:hover{color:#009}}.wrapper-local-choose--notiziari .local-choose-button span{font-size:0}.wrapper-local-choose--notiziari .local-choose-button span:after{content:"TgR";font-size:20px}@media only screen and (min-width: 1024px){.wrapper-local-choose--notiziari{display:inline-block}.wrapper-local-choose--notiziari .local-choose-button{width:90px;text-align:center;height:24px;line-height:24px;display:inline-block;vertical-align:top;color:#191929;padding:0}.wrapper-local-choose--notiziari .local-choose-button span:after{height:24px;line-height:24px}}@media only screen and (min-width: 1296px){.wrapper-local-choose--notiziari .local-choose-button{margin-left:30px}}.wrapper-local-choose--lcn .local-choose-button{float:left;font-family:var(--font01, "Source Sans Pro",Arial,Helvetica,sans-serif);font-size:16px;font-weight:600;line-height:20px;padding:7px 0 4px 0;color:var(--wrapper__header-linkcolor, #212335);height:40px;vertical-align:top;background:none;border:0 none;margin:0}.wrapper-local-choose--lcn .local-choose-button:hover{color:var(--launch__label-color, #009)}.wrapper-local-choose--lcn .local-choose-button span{font-size:16px;display:inline-block;vertical-align:middle;line-height:inherit;font-style:normal;padding-right:5px}@media only screen and (max-width: 767px){.wrapper-local-choose--lcn .local-choose-button span{color:#3D5EFF;order:2}}.wrapper-local-choose--lcn .local-choose-button .icon-chevron-right{display:inline-block;font-size:10px;padding:0 2px;color:#b1b6b8;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.wrapper-local-choose--lcn .local-choose-button .icon-location{display:none;font-size:20px;vertical-align:middle;line-height:inherit;color:var(--launch__label-color, #3D5EFF)}@media only screen and (max-width: 767px){.wrapper-local-choose--lcn .local-choose-button{position:absolute;top:33px;padding:9px 0;left:20px;display:flex;align-items:center;order:1}.wrapper-local-choose--lcn .local-choose-button .icon-chevron-right{display:none;position:static;top:auto}.wrapper-local-choose--lcn .local-choose-button .icon-location{display:inline-block;float:left;order:1}}@media only screen and (min-width: 768px){.wrapper-local-choose--lcn .local-choose-button{float:none;position:relative;padding-right:20px}.wrapper-local-choose--lcn .local-choose-button .icon-chevron-right{display:none;position:static;top:auto}.wrapper-local-choose--lcn .local-choose-button .icon-location{display:inline-block}}\n',
      "",
    ]),
      (e.exports = t);
  },
  7: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var i =
                    ((s = r),
                    (a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
                    (l =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        a
                      )),
                    "/*# ".concat(l, " */")),
                  o = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(o).concat([i]).join("\n");
              }
              var s, a, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (r)
            for (var o = 0; o < this.length; o++) {
              var s = this[o][0];
              null != s && (i[s] = !0);
            }
          for (var a = 0; a < e.length; a++) {
            var l = [].concat(e[a]);
            (r && i[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              t.push(l));
          }
        }),
        t
      );
    };
  },
});
//# sourceMappingURL=rainews-local-choose.js.map
