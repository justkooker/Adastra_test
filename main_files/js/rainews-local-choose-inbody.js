!(function (e) {
  function t(t) {
    for (var n, i, o = t[0], s = t[1], a = 0, c = []; a < o.length; a++)
      (i = o[a]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && c.push(r[i][0]),
        (r[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (l && l(t); c.length; ) c.shift()();
  }
  var n = {},
    r = { 5: 0, 3: 0 };
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
          (a.onerror = a.onload = null), clearTimeout(c);
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
        var c = setTimeout(function () {
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
  i((i.s = 135));
})({
  0: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
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
        return C;
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
      c = (e, t) => {
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
      u = r
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
    function p(e, t, n) {
      return n
        ? t
          ? t(e)
          : e
        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
    }
    var f;
    const h = window.reactiveElementPolyfillSupport,
      g = {
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
      v = (e, t) => t !== e && (t == t || e == e),
      m = {
        attribute: !0,
        type: String,
        converter: g,
        reflect: !1,
        hasChanged: v,
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
          for (const e of n) t.unshift(u(e));
        } else void 0 !== e && t.push(u(e));
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
        return c(t, this.constructor.elementStyles), t;
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
              : g.toAttribute
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
                : g.fromAttribute;
          (this._$Ei = s), (this[s] = l(t, e.type)), (this._$Ei = null);
        }
      }
      requestUpdate(e, t, n) {
        let r = !0;
        void 0 !== e &&
          (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || v)(
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
            p(
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
                return p(
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
      (null !== (f = globalThis.reactiveElementVersions) && void 0 !== f
        ? f
        : (globalThis.reactiveElementVersions = [])
      ).push("1.0.1");
    var b,
      x,
      w = n(4);
    class C extends y {
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
    (C.finalized = !0),
      (C._$litElement$ = !0),
      null === (b = globalThis.litElementHydrateSupport) ||
        void 0 === b ||
        b.call(globalThis, { LitElement: C });
    const A = globalThis.litElementPolyfillSupport;
    null == A || A({ LitElement: C });
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
        c = o.push,
        u = o.indexOf,
        d = {},
        p = d.toString,
        f = d.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        v = {},
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
      function C(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var A = function e(t, n) {
        return new e.fn.init(t, n);
      };
      function _(e) {
        var t = !!e && "length" in e && e.length,
          n = C(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (A.fn = A.prototype =
        {
          jquery: "3.6.0",
          constructor: A,
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
            var t = A.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return A.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              A.map(this, function (t, n) {
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
              A.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              A.grep(this, function (e, t) {
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
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
        (A.extend = A.fn.extend =
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
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
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
                      (c && r && (A.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = s[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || A.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (s[t] = A.extend(c, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        A.extend({
          expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = f.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
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
            if (_(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (_(Object(e))
                  ? A.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
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
            if (_(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return l(s);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (A.fn[Symbol.iterator] = o[Symbol.iterator]),
        A.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var T = (function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          C = 0,
          A = 0,
          _ = le(),
          T = le(),
          $ = le(),
          E = le(),
          S = function (e, t) {
            return e === t && (d = !0), 0;
          },
          k = {}.hasOwnProperty,
          j = [],
          N = j.pop,
          D = j.push,
          O = j.push,
          P = j.slice,
          L = function (e, t) {
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
          U =
            ":(" +
            M +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            R +
            ")*)|.*)\\)|)",
          I = new RegExp(H + "+", "g"),
          B = new RegExp(
            "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
            "g"
          ),
          z = new RegExp("^" + H + "*," + H + "*"),
          W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          F = new RegExp(H + "|>"),
          V = new RegExp(U),
          X = new RegExp("^" + M + "$"),
          Q = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + U),
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
            p();
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
          O.apply((j = P.call(w.childNodes)), w.childNodes),
            j[w.childNodes.length].nodeType;
        } catch (e) {
          O = {
            apply: j.length
              ? function (e, t) {
                  D.apply(e, P.call(t));
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
            c,
            u,
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
          if (!i && (p(t), (t = t || f), g)) {
            if (11 !== w && (d = Z.exec(e)))
              if ((o = d[1])) {
                if (9 === w) {
                  if (!(c = t.getElementById(o))) return r;
                  if (c.id === o) return r.push(c), r;
                } else if (
                  y &&
                  (c = y.getElementById(o)) &&
                  b(t, c) &&
                  c.id === o
                )
                  return r.push(c), r;
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
              !E[e + " "] &&
              (!v || !v.test(e)) &&
              (1 !== w || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((m = e), (y = t), 1 === w && (F.test(e) || W.test(e)))) {
                for (
                  ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                    n.scope) ||
                    ((u = t.getAttribute("id"))
                      ? (u = u.replace(re, ie))
                      : t.setAttribute("id", (u = x))),
                    a = (h = s(e)).length;
                  a--;

                )
                  h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                m = h.join(",");
              }
              try {
                return O.apply(r, y.querySelectorAll(m)), r;
              } catch (t) {
                E(e, !0);
              } finally {
                u === x && t.removeAttribute("id");
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
        function ce(e) {
          return (e[x] = !0), e;
        }
        function ue(e) {
          var t = f.createElement("fieldset");
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
        function pe(e, t) {
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
        function fe(e) {
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
        function ge(e) {
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
        function ve(e) {
          return ce(function (t) {
            return (
              (t = +t),
              ce(function (n, r) {
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
        (p = ae.setDocument =
          function (e) {
            var t,
              i,
              s = e ? e.ownerDocument || e : w;
            return s != f && 9 === s.nodeType && s.documentElement
              ? ((h = (f = s).documentElement),
                (g = !o(f)),
                w != f &&
                  (i = f.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", oe, !1)
                    : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.scope = ue(function (e) {
                  return (
                    h.appendChild(e).appendChild(f.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ue(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ue(function (e) {
                  return (
                    e.appendChild(f.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                (n.getById = ue(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !f.getElementsByName || !f.getElementsByName(x).length
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
                      if (void 0 !== t.getElementById && g) {
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
                      if (void 0 !== t.getElementById && g) {
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
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (v = []),
                (n.qsa = K.test(f.querySelectorAll)) &&
                  (ue(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push("[*^$]=" + H + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        v.push("\\[" + H + "*(?:value|" + q + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        v.push("~="),
                      (t = f.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        v.push(
                          "\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        v.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      v.push("[\\r\\n\\f]");
                  }),
                  ue(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        v.push("name" + H + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        v.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ue(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      m.push("!=", U);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
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
                (S = t
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
                          ? e == f || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == f || (t.ownerDocument == w && b(w, t))
                            ? 1
                            : u
                            ? L(u, e) - L(u, t)
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
                        return e == f
                          ? -1
                          : t == f
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : u
                          ? L(u, e) - L(u, t)
                          : 0;
                      if (i === o) return pe(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[r] === a[r]; ) r++;
                      return r
                        ? pe(s[r], a[r])
                        : s[r] == w
                        ? -1
                        : a[r] == w
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
        (ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
          if (
            (p(e),
            n.matchesSelector &&
              g &&
              !E[t + " "] &&
              (!m || !m.test(t)) &&
              (!v || !v.test(t)))
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
              E(t, !0);
            }
          return ae(t, f, null, [e]).length > 0;
        }),
        (ae.contains = function (e, t) {
          return (e.ownerDocument || e) != f && p(e), b(e, t);
        }),
        (ae.attr = function (e, t) {
          (e.ownerDocument || e) != f && p(e);
          var i = r.attrHandle[t.toLowerCase()],
            o =
              i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !g
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
            (u = !n.sortStable && e.slice(0)),
            e.sort(S),
            d)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
            for (; i--; ) e.splice(r[i], 1);
          }
          return (u = null), e;
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
            createPseudo: ce,
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
                var t = _[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                    _(e, function (e) {
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
                          ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1
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
                      var c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g = o !== s ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (v) {
                        if (o) {
                          for (; g; ) {
                            for (p = t; (p = p[g]); )
                              if (
                                a
                                  ? p.nodeName.toLowerCase() === m
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                          for (
                            b =
                              (f =
                                (c =
                                  (u =
                                    (d = (p = v)[x] || (p[x] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                  C && c[1]) && c[2],
                              p = f && v.childNodes[f];
                            (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++b && p === t) {
                              u[e] = [C, f, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = f =
                              (c =
                                (u =
                                  (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] || [])[0] === C &&
                              c[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                            ((a
                              ? p.nodeName.toLowerCase() !== m
                              : 1 !== p.nodeType) ||
                              !++b ||
                              (y &&
                                ((u =
                                  (d = p[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] = [C, b]),
                              p !== t));

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
                      ? ce(function (e, n) {
                          for (var r, o = i(e, t), s = o.length; s--; )
                            e[(r = L(e, o[s]))] = !(n[r] = o[s]);
                        })
                      : function (e) {
                          return i(e, 0, n);
                        })
                  : i;
              },
            },
            pseudos: {
              not: ce(function (e) {
                var t = [],
                  n = [],
                  r = a(e.replace(B, "$1"));
                return r[x]
                  ? ce(function (e, t, n, i) {
                      for (var o, s = r(e, null, i, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ce(function (e) {
                return function (t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ce(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ce(function (e) {
                return (
                  X.test(e || "") || ae.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = g
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
                  e === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
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
              first: ve(function () {
                return [0];
              }),
              last: ve(function (e, t) {
                return [t - 1];
              }),
              eq: ve(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = fe(t);
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
            a = A++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
              }
            : function (t, n, l) {
                var c,
                  u,
                  d,
                  p = [C, a];
                if (l) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((u =
                          (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                          (d[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((c = u[o]) && c[0] === C && c[1] === a)
                          return (p[2] = c[2]);
                        if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
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
        function Ce(e, t, n, r, i) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
          return s;
        }
        function Ae(e, t, n, r, i, o) {
          return (
            r && !r[x] && (r = Ae(r)),
            i && !i[x] && (i = Ae(i, o)),
            ce(function (o, s, a, l) {
              var c,
                u,
                d,
                p = [],
                f = [],
                h = s.length,
                g =
                  o ||
                  (function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                    return n;
                  })(t || "*", a.nodeType ? [a] : a, []),
                v = !e || (!o && t) ? g : Ce(g, p, e, a, l),
                m = n ? (i || (o ? e : h || r) ? [] : s) : v;
              if ((n && n(v, m, a, l), r))
                for (c = Ce(m, f), r(c, [], a, l), u = c.length; u--; )
                  (d = c[u]) && (m[f[u]] = !(v[f[u]] = d));
              if (o) {
                if (i || e) {
                  if (i) {
                    for (c = [], u = m.length; u--; )
                      (d = m[u]) && c.push((v[u] = d));
                    i(null, (m = []), c, l);
                  }
                  for (u = m.length; u--; )
                    (d = m[u]) &&
                      (c = i ? L(o, d) : p[u]) > -1 &&
                      (o[c] = !(s[c] = d));
                }
              } else (m = Ce(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, l) : O.apply(s, m);
            })
          );
        }
        function _e(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              s = r.relative[e[0].type],
              a = s || r.relative[" "],
              l = s ? 1 : 0,
              u = xe(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = xe(
                function (e) {
                  return L(t, e) > -1;
                },
                a,
                !0
              ),
              p = [
                function (e, n, r) {
                  var i =
                    (!s && (r || n !== c)) ||
                    ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                  return (t = null), i;
                },
              ];
            l < o;
            l++
          )
            if ((n = r.relative[e[l].type])) p = [xe(we(p), n)];
            else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                return Ae(
                  l > 1 && we(p),
                  l > 1 &&
                    be(
                      e
                        .slice(0, l - 1)
                        .concat({ value: " " === e[l - 2].type ? "*" : "" })
                    ).replace(B, "$1"),
                  n,
                  l < i && _e(e.slice(l, i)),
                  i < o && _e((e = e.slice(i))),
                  i < o && be(e)
                );
              }
              p.push(n);
            }
          return we(p);
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
                c,
                u = T[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, l = [], c = r.preFilter; a; ) {
                for (s in ((n && !(i = z.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                (n = !1),
                (i = W.exec(a)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, " ") }),
                  (a = a.slice(n.length))),
                r.filter))
                  !(i = Q[s].exec(a)) ||
                    (c[s] && !(i = c[s](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: s, matches: i }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
            }),
          (a = ae.compile =
            function (e, t) {
              var n,
                i = [],
                o = [],
                a = $[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = _e(t[n]))[x] ? i.push(a) : o.push(a);
                (a = $(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, s, a, l, u) {
                        var d,
                          h,
                          v,
                          m = 0,
                          y = "0",
                          b = o && [],
                          x = [],
                          w = c,
                          A = o || (i && r.find.TAG("*", u)),
                          _ = (C += null == w ? 1 : Math.random() || 0.1),
                          T = A.length;
                        for (
                          u && (c = s == f || s || u);
                          y !== T && null != (d = A[y]);
                          y++
                        ) {
                          if (i && d) {
                            for (
                              h = 0,
                                s || d.ownerDocument == f || (p(d), (a = !g));
                              (v = e[h++]);

                            )
                              if (v(d, s || f, a)) {
                                l.push(d);
                                break;
                              }
                            u && (C = _);
                          }
                          n && ((d = !v && d) && m--, o && b.push(d));
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (v = t[h++]); ) v(b, x, s, a);
                          if (o) {
                            if (m > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = N.call(l));
                            x = Ce(x);
                          }
                          O.apply(l, x),
                            u &&
                              !o &&
                              x.length > 0 &&
                              m + t.length > 1 &&
                              ae.uniqueSort(l);
                        }
                        return u && ((C = _), (c = w)), b;
                      };
                    return n ? ce(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return a;
            }),
          (l = ae.select =
            function (e, t, n, i) {
              var o,
                l,
                c,
                u,
                d,
                p = "function" == typeof e && e,
                f = !i && s((e = p.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if (
                  (l = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (c = l[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  p && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  o = Q.needsContext.test(e) ? 0 : l.length;
                  o-- && ((c = l[o]), !r.relative[(u = c.type)]);

                )
                  if (
                    (d = r.find[u]) &&
                    (i = d(
                      c.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(o, 1), !(e = i.length && be(l))))
                      return O.apply(n, i), n;
                    break;
                  }
              }
              return (
                (p || a(e, f))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
          (n.sortStable = x.split("").sort(S).join("") === x),
          (n.detectDuplicates = !!d),
          p(),
          (n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
          })),
          ue(function (e) {
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
            ue(function (e) {
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
          ue(function (e) {
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
      (A.find = T),
        ((A.expr = T.selectors)[":"] = A.expr.pseudos),
        (A.uniqueSort = A.unique = T.uniqueSort),
        (A.text = T.getText),
        (A.isXMLDoc = T.isXML),
        (A.contains = T.contains),
        (A.escapeSelector = T.escape);
      var $ = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && A(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        E = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        S = A.expr.match.needsContext;
      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(e, t, n) {
        return m(t)
          ? A.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? A.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? A.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : A.filter(t, e, n);
      }
      (A.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? A.find.matchesSelector(r, e)
              ? [r]
              : []
            : A.find.matches(
                e,
                A.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        A.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                A(e).filter(function () {
                  for (t = 0; t < r; t++) if (A.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
            return r > 1 ? A.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(N(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(N(this, e || [], !0));
          },
          is: function (e) {
            return !!N(
              this,
              "string" == typeof e && S.test(e) ? A(e) : e || [],
              !1
            ).length;
          },
        });
      var D,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((A.fn.init = function (e, t, n) {
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
              ((t = t instanceof A ? t[0] : t),
              A.merge(
                this,
                A.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              j.test(r[1]) && A.isPlainObject(t))
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
            : e(A)
          : A.makeArray(e, this);
      }).prototype = A.fn),
        (D = A(b));
      var P = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      A.fn.extend({
        has: function (e) {
          var t = A(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (A.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && A(e);
          if (!S.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && A.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? A.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(A(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        A.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return $(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return $(e, "parentNode", n);
            },
            next: function (e) {
              return q(e, "nextSibling");
            },
            prev: function (e) {
              return q(e, "previousSibling");
            },
            nextAll: function (e) {
              return $(e, "nextSibling");
            },
            prevAll: function (e) {
              return $(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return $(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return $(e, "previousSibling", n);
            },
            siblings: function (e) {
              return E((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return E(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (k(e, "template") && (e = e.content || e),
                  A.merge([], e.childNodes));
            },
          },
          function (e, t) {
            A.fn[e] = function (n, r) {
              var i = A.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = A.filter(r, i)),
                this.length > 1 &&
                  (L[e] || A.uniqueSort(i), P.test(e) && i.reverse()),
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
      function U(e, t, n, r) {
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
      (A.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  A.each(e.match(H) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : A.extend({}, e);
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
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    A.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && c.has(r)) || o.push(r)
                        : r && r.length && "string" !== C(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                A.each(arguments, function (e, t) {
                  for (var n; (n = A.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? A.inArray(e, o) > -1 : o.length > 0;
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
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return c;
      }),
        A.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  A.Callbacks("memory"),
                  A.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  A.Callbacks("once memory"),
                  A.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  A.Callbacks("once memory"),
                  A.Callbacks("once memory"),
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
                  return A.Deferred(function (n) {
                    A.each(t, function (t, r) {
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
                        c = function () {
                          var n, c;
                          if (!(e < o)) {
                            if ((n = r.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(c)
                                ? i
                                  ? c.call(n, s(o, t, M, i), s(o, t, R, i))
                                  : (o++,
                                    c.call(
                                      n,
                                      s(o, t, M, i),
                                      s(o, t, R, i),
                                      s(o, t, M, t.notifyWith)
                                    ))
                                : (r !== M && ((a = void 0), (l = [n])),
                                  (i || t.resolveWith)(a, l));
                          }
                        },
                        u = i
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                A.Deferred.exceptionHook &&
                                  A.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= o &&
                                    (r !== R && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (A.Deferred.getStackHook &&
                            (u.stackTrace = A.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return A.Deferred(function (n) {
                    t[0][3].add(s(0, n, m(i) ? i : M, n.notifyWith)),
                      t[1][3].add(s(0, n, m(e) ? e : M)),
                      t[2][3].add(s(0, n, m(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? A.extend(e, i) : i;
                },
              },
              o = {};
            return (
              A.each(t, function (e, n) {
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
              o = A.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (U(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) U(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (A.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          I.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (A.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var B = A.Deferred();
      function z() {
        b.removeEventListener("DOMContentLoaded", z),
          n.removeEventListener("load", z),
          A.ready();
      }
      (A.fn.ready = function (e) {
        return (
          B.then(e).catch(function (e) {
            A.readyException(e);
          }),
          this
        );
      }),
        A.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --A.readyWait : A.isReady) ||
              ((A.isReady = !0),
              (!0 !== e && --A.readyWait > 0) || B.resolveWith(b, [A]));
          },
        }),
        (A.ready.then = B.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(A.ready)
          : (b.addEventListener("DOMContentLoaded", z),
            n.addEventListener("load", z));
      var W = function e(t, n, r, i, o, s, a) {
          var l = 0,
            c = t.length,
            u = null == r;
          if ("object" === C(r))
            for (l in ((o = !0), r)) e(t, n, l, r[l], !0, s, a);
          else if (
            void 0 !== i &&
            ((o = !0),
            m(i) || (a = !0),
            u &&
              (a
                ? (n.call(t, i), (n = null))
                : ((u = n),
                  (n = function (e, t, n) {
                    return u.call(A(e), n);
                  }))),
            n)
          )
            for (; l < c; l++) n(t[l], r, a ? i : i.call(t[l], l, n(t[l], r)));
          return o ? t : u ? n.call(t) : c ? n(t[0], r) : s;
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
        this.expando = A.expando + Y.uid++;
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
              (void 0 === t || A.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !A.isEmptyObject(t);
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
      A.extend({
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
        A.fn.extend({
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
        A.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = G.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = G.access(e, t, A.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            var n = A.queue(e, (t = t || "fx")),
              r = n.length,
              i = n.shift(),
              o = A._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    A.dequeue(e, t);
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
                empty: A.Callbacks("once memory").add(function () {
                  G.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        A.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? A.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = A.queue(this, e, t);
                    A._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && A.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              A.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = A.Deferred(),
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
          return A.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      oe.getRootNode &&
        (se = function (e) {
          return (
            A.contains(e.ownerDocument, e) ||
            e.getRootNode(ae) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && se(e) && "none" === A.css(e, "display"))
        );
      };
      function ce(e, t, n, r) {
        var i,
          o,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return A.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (A.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (A.cssNumber[t] || ("px" !== c && +l)) &&
            re.exec(A.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            A.style(e, t, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          A.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = u), (r.end = i))),
          i
        );
      }
      var ue = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ue[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = A.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (ue[r] = i),
          i)
        );
      }
      function pe(e, t) {
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
      A.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? A(this).show() : A(this).hide();
              });
        },
      });
      var fe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        (v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
        (fe.innerHTML = "<option></option>"),
        (v.option = !!fe.lastChild);
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
          void 0 === t || (t && k(e, t)) ? A.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Ce(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            d = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === C(o)) A.merge(p, o.nodeType ? [o] : o);
            else if (we.test(o)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + A.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              A.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; (o = p[f++]); )
          if (r && A.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((c = se(o)), (s = be(d.appendChild(o), "script")), c && xe(s), n)
          )
            for (u = 0; (o = s[u++]); ) me.test(o.type || "") && n.push(o);
        return d;
      }
      var Ae = /^([^.]*)(?:\.(.+)|)/;
      function _e() {
        return !0;
      }
      function Te() {
        return !1;
      }
      function $e(e, t) {
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
      function Ee(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ee(e, a, n, r, t[a], o);
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
          i = Te;
        else if (!i) return e;
        return (
          1 === o &&
            ((s = i),
            ((i = function (e) {
              return A().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = A.guid++))),
          e.each(function () {
            A.event.add(this, t, i, r, n);
          })
        );
      }
      function Se(e, t, n) {
        n
          ? (G.set(e, t, !1),
            A.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (A.event.special[t] || {}).delegateType &&
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
                      value: A.event.trigger(
                        A.extend(o[0], A.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === G.get(e, t) && A.event.add(e, t, _e);
      }
      (A.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = G.get(e);
          if (J(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && A.find.matchesSelector(oe, i),
                n.guid || (n.guid = A.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (s = v.handle) ||
                  (s = v.handle =
                    function (t) {
                      return void 0 !== A && A.event.triggered !== t.type
                        ? A.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(H) || [""]).length;
              c--;

            )
              (f = g = (a = Ae.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                  ((d = A.event.special[f] || {}),
                  (f = (i ? d.delegateType : d.bindType) || f),
                  (d = A.event.special[f] || {}),
                  (u = A.extend(
                    {
                      type: f,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && A.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  (A.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = G.hasData(e) && G.get(e);
          if (v && (l = v.events)) {
            for (c = (t = (t || "").match(H) || [""]).length; c--; )
              if (
                ((f = g = (a = Ae.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  d = A.event.special[f] || {},
                    p = l[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = p.length;
                  o--;

                )
                  (u = p[o]),
                    (!i && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (p.splice(o, 1),
                      u.selector && p.delegateCount--,
                      d.remove && d.remove.call(e, u));
                s &&
                  !p.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                    A.removeEvent(e, f, v.handle),
                  delete l[f]);
              } else for (f in l) A.event.remove(e, f + t[c], n, r, !0);
            A.isEmptyObject(l) && G.remove(e, "handle events");
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
            l = A.event.fix(e),
            c = (G.get(this, "events") || Object.create(null))[l.type] || [],
            u = A.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = A.event.handlers.call(this, l, c), t = 0;
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
                      (A.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, a)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
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
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = (r = t[n]).selector + " ")] &&
                    (s[i] = r.needsContext
                      ? A(i, this).index(c) > -1
                      : A.find(i, this, null, [c]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(A.Event.prototype, e, {
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
          return e[A.expando] ? e : new A.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  Se(t, "click", _e),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && k(t, "input") && Se(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
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
        (A.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        ((A.Event = function (e, t) {
          if (!(this instanceof A.Event)) return new A.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? _e
                  : Te),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && A.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[A.expando] = !0);
        }).prototype = {
          constructor: A.Event,
          isDefaultPrevented: Te,
          isPropagationStopped: Te,
          isImmediatePropagationStopped: Te,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = _e),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = _e),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = _e),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        A.each(
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
          A.event.addProp
        ),
        A.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          A.event.special[e] = {
            setup: function () {
              return Se(this, e, $e), !1;
            },
            trigger: function () {
              return Se(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        A.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            A.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || A.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        A.fn.extend({
          on: function (e, t, n, r) {
            return Ee(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                A(e.delegateTarget).off(
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
              !1 === n && (n = Te),
              this.each(function () {
                A.event.remove(this, e, n, t);
              })
            );
          },
        });
      var ke = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function De(e, t) {
        return (
          (k(e, "table") &&
            k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            A(e).children("tbody")[0]) ||
          e
        );
      }
      function Oe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Pe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Le(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
          if (G.hasData(e) && (a = G.get(e).events))
            for (i in (G.remove(t, "handle events"), a))
              for (n = 0, r = a[i].length; n < r; n++)
                A.event.add(t, i, a[i][n]);
          K.hasData(e) &&
            ((o = K.access(e)), (s = A.extend({}, o)), K.set(t, s));
        }
      }
      function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
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
          c,
          u,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !v.checkClone && je.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), He(o, t, n, r);
          });
        if (
          p &&
          ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = (s = A.map(be(i, "script"), Oe)).length; d < p; d++)
            (c = i),
              d !== f &&
                ((c = A.clone(c, !0, !0)), a && A.merge(s, be(c, "script"))),
              n.call(e[d], c, d);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, A.map(s, Pe), d = 0;
              d < a;
              d++
            )
              (c = s[d]),
                me.test(c.type || "") &&
                  !G.access(c, "globalEval") &&
                  A.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? A._evalUrl &&
                      !c.noModule &&
                      A._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : w(c.textContent.replace(Ne, ""), c, u));
        }
        return e;
      }
      function Me(e, t, n) {
        for (var r, i = t ? A.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || A.cleanData(be(r)),
            r.parentNode &&
              (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      A.extend({
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
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              A.isXMLDoc(e)
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
                Le(o[r], s[r]);
            else Le(e, a);
          return (
            (s = be(a, "script")).length > 0 && xe(s, !l && be(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = A.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (J(n)) {
              if ((t = n[G.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
                n[G.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        A.fn.extend({
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
                  ? A.text(this)
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
                (A.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return A.clone(this, e, t);
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
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = A.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (A.cleanData(be(t, !1)), (t.innerHTML = e));
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
                A.inArray(this, e) < 0 &&
                  (A.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        A.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            A.fn[e] = function (e) {
              for (
                var n, r = [], i = A(e), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  A(i[s])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Ue = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ie = function (e, t, n) {
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
          (n = n || Ue(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (s = A.style(e, t)),
            !v.pixelBoxStyles() &&
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
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              oe.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (o = 12 === t(u.offsetWidth / 3)),
              oe.removeChild(c),
              (u = null);
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
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
          A.extend(v, {
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
        var t = A.cssProps[e] || Xe[e];
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
          "margin" === n && (l += A.css(e, n + ie[s], !0, i)),
            r
              ? ("content" === n && (l -= A.css(e, "padding" + ie[s], !0, i)),
                "margin" !== n &&
                  (l -= A.css(e, "border" + ie[s] + "Width", !0, i)))
              : ((l += A.css(e, "padding" + ie[s], !0, i)),
                "padding" !== n
                  ? (l += A.css(e, "border" + ie[s] + "Width", !0, i))
                  : (a += A.css(e, "border" + ie[s] + "Width", !0, i)));
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
        var r = Ue(e),
          i =
            (!v.boxSizingReliable() || n) &&
            "border-box" === A.css(e, "boxSizing", !1, r),
          o = i,
          s = ze(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            (!v.reliableTrDimensions() && k(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === A.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === A.css(e, "boxSizing", !1, r)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            et(e, t, n || (i ? "border" : "content"), o, r, s) +
            "px"
        );
      }
      function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
      }
      A.extend({
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
              c = e.style;
            if (
              (l || (t = Qe(a)),
              (s = A.cssHooks[t] || A.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : c[t];
            "string" === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = ce(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (i && i[3]) || (A.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            s,
            a = Q(t);
          return (
            Ye.test(t) || (t = Qe(a)),
            (s = A.cssHooks[t] || A.cssHooks[a]) &&
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
        A.each(["height", "width"], function (e, t) {
          A.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Je.test(A.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? tt(e, t, r)
                  : Ie(e, Ge, function () {
                      return tt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Ue(e),
                s = !v.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === A.css(e, "boxSizing", !1, o),
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
                  ((e.style[t] = n), (n = A.css(e, t))),
                Ze(0, n, l)
              );
            },
          };
        }),
        (A.cssHooks.marginLeft = We(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(ze(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Ie(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        A.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (A.cssHooks[e + t] = {
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
            "margin" !== e && (A.cssHooks[e + t].set = Ze);
        }),
        A.fn.extend({
          css: function (e, t) {
            return W(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Ue(e), i = t.length; s < i; s++)
                    o[t[s]] = A.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? A.style(e, t, n) : A.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (A.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || A.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (A.cssNumber[n] ? "" : "px"));
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
                    A.easing[this.easing](
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
                : (t = A.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              A.fx.step[e.prop]
                ? A.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!A.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : A.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (A.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        ((A.fx = nt.prototype.init).step = {});
      var rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function at() {
        it &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(at)
            : n.setTimeout(at, A.fx.interval),
          A.fx.tick());
      }
      function lt() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function ct(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ut(e, t, n) {
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
          a = A.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (i) return !1;
            for (
              var t = rt || lt(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                o = 0,
                s = c.tweens.length;
              o < s;
              o++
            )
              c.tweens[o].run(r);
            return (
              a.notifyWith(e, [c, r, n]),
              r < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: A.extend({}, t),
            opts: A.extend(
              !0,
              { specialEasing: {}, easing: A.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = A.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = Q(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = A.cssHooks[r]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(u, c.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = dt.prefilters[o].call(c, e, u, c.opts)))
            return (
              m(r.stop) &&
                (A._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          A.map(u, ut, c),
          m(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          A.fx.timer(A.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (A.Animation = A.extend(dt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, re.exec(t), n), n;
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
              c,
              u,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && le(e),
              v = G.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (s = A._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, A.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ot.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                f[r] = (v && v[r]) || A.style(e, r);
              }
            if ((l = !A.isEmptyObject(t)) || !A.isEmptyObject(f))
              for (r in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = v && v.display) && (c = G.get(e, "display")),
                "none" === (u = A.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (pe([e], !0),
                      (c = e.style.display || c),
                      (u = A.css(e, "display")),
                      pe([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === A.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = G.access(e, "fxshow", { display: c })),
                  o && (v.hidden = !g),
                  g && pe([e], !0),
                  p.done(function () {
                    for (r in (g || pe([e]), G.remove(e, "fxshow"), f))
                      A.style(e, r, f[r]);
                  })),
                  (l = ut(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
      })),
        (A.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? A.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            A.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in A.fx.speeds
                  ? (r.duration = A.fx.speeds[r.duration])
                  : (r.duration = A.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && A.dequeue(this, r.queue);
            }),
            r
          );
        }),
        A.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = A.isEmptyObject(e),
              o = A.speed(t, n, r),
              s = function () {
                var t = dt(this, A.extend({}, e), o);
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
                  o = A.timers,
                  s = G.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || A.dequeue(this, e);
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
                  o = A.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    A.queue(this, e, []),
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
        A.each(["toggle", "show", "hide"], function (e, t) {
          var n = A.fn[t];
          A.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ct(t, !0), e, r, i);
          };
        }),
        A.each(
          {
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            A.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (A.timers = []),
        (A.fx.tick = function () {
          var e,
            t = 0,
            n = A.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || A.fx.stop(), (rt = void 0);
        }),
        (A.fx.timer = function (e) {
          A.timers.push(e), A.fx.start();
        }),
        (A.fx.interval = 13),
        (A.fx.start = function () {
          it || ((it = !0), at());
        }),
        (A.fx.stop = function () {
          it = null;
        }),
        (A.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (A.fn.delay = function (e, t) {
          return (
            (e = (A.fx && A.fx.speeds[e]) || e),
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
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var pt,
        ft = A.expr.attrHandle;
      A.fn.extend({
        attr: function (e, t) {
          return W(this, A.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            A.removeAttr(this, e);
          });
        },
      }),
        A.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? A.prop(e, t, n)
                : ((1 === o && A.isXMLDoc(e)) ||
                    (i =
                      A.attrHooks[t.toLowerCase()] ||
                      (A.expr.match.bool.test(t) ? pt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void A.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = A.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && k(e, "input")) {
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
        (pt = {
          set: function (e, t, n) {
            return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        A.each(A.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ft[t] || A.find.attr;
          ft[t] = function (e, t, r) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              r ||
                ((o = ft[s]),
                (ft[s] = i),
                (i = null != n(e, t, r) ? s : null),
                (ft[s] = o)),
              i
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
      function vt(e) {
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
      A.fn.extend({
        prop: function (e, t) {
          return W(this, A.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[A.propFix[e] || e];
          });
        },
      }),
        A.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && A.isXMLDoc(e)) ||
                  ((t = A.propFix[t] || t), (i = A.propHooks[t])),
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
                var t = A.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (A.propHooks.selected = {
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
        A.each(
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
            A.propFix[this.toLowerCase()] = this;
          }
        ),
        A.fn.extend({
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
                A(this).addClass(e.call(this, t, mt(this)));
              });
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (a = vt(r)) && n.setAttribute("class", a);
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
                A(this).removeClass(e.call(this, t, mt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (a = vt(r)) && n.setAttribute("class", a);
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
                  A(this).toggleClass(e.call(this, n, mt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, s;
                  if (r)
                    for (i = 0, o = A(this), s = yt(e); (t = s[i++]); )
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
              if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var bt = /\r/g;
      A.fn.extend({
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
                  (null == (i = r ? e.call(this, n, A(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = A.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    A.valHooks[this.type] ||
                    A.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                A.valHooks[i.type] || A.valHooks[i.nodeName.toLowerCase()]) &&
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
        A.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = A.find.attr(e, "value");
                return null != t ? t : vt(A.text(e));
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
                    if (((t = A(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = A.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    A.inArray(A.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        A.each(["radio", "checkbox"], function () {
          (A.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = A.inArray(A(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (A.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
          e.stopPropagation();
        };
      A.extend(A.event, {
        trigger: function (e, t, r, i) {
          var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = [r || b],
            g = f.call(e, "type") ? e.type : e,
            v = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = a = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !xt.test(g + A.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((v = g.split(".")), (g = v.shift()), v.sort()),
              (c = g.indexOf(":") < 0 && "on" + g),
              ((e = e[A.expando]
                ? e
                : new A.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : A.makeArray(t, [e])),
              (d = A.event.special[g] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !y(r)) {
              for (
                l = d.delegateType || g, xt.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (r.ownerDocument || b) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = o > 1 ? l : d.bindType || g),
                (u =
                  (G.get(s, "events") || Object.create(null))[e.type] &&
                  G.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  J(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !J(r) ||
                (c &&
                  m(r[g]) &&
                  !y(r) &&
                  ((a = r[c]) && (r[c] = null),
                  (A.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, wt),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, wt),
                  (A.event.triggered = void 0),
                  a && (r[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = A.extend(new A.Event(), n, { type: e, isSimulated: !0 });
          A.event.trigger(r, null, t);
        },
      }),
        A.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              A.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return A.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          A.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              A.event.simulate(t, e.target, A.event.fix(e));
            };
            A.event.special[t] = {
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
      var Ct = n.location,
        At = { guid: Date.now() },
        _t = /\?/;
      A.parseXML = function (e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName("parsererror")[0]),
          (t && !r) ||
            A.error(
              "Invalid XML: " +
                (r
                  ? A.map(r.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      };
      var Tt = /\[\]$/,
        $t = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
      function kt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          A.each(t, function (t, i) {
            n || Tt.test(e)
              ? r(e, i)
              : kt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== C(t)) r(e, t);
        else for (i in t) kt(e + "[" + i + "]", t[i], n, r);
      }
      (A.param = function (e, t) {
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
        if (Array.isArray(e) || (e.jquery && !A.isPlainObject(e)))
          A.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) kt(n, e[n], t, i);
        return r.join("&");
      }),
        A.fn.extend({
          serialize: function () {
            return A.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = A.prop(this, "elements");
              return e ? A.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !A(this).is(":disabled") &&
                  St.test(this.nodeName) &&
                  !Et.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = A(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? A.map(n, function (e) {
                      return { name: t.name, value: e.replace($t, "\r\n") };
                    })
                  : { name: t.name, value: n.replace($t, "\r\n") };
              })
              .get();
          },
        });
      var jt = /%20/g,
        Nt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        qt = {},
        Ht = {},
        Mt = "*/".concat("*"),
        Rt = b.createElement("a");
      function Ut(e) {
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
      function It(e, t, n, r) {
        var i = {},
          o = e === Ht;
        function s(a) {
          var l;
          return (
            (i[a] = !0),
            A.each(e[a] || [], function (e, a) {
              var c = a(t, n, r);
              return "string" != typeof c || o || i[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
      }
      function Bt(e, t) {
        var n,
          r,
          i = A.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && A.extend(!0, e, r), e;
      }
      (Rt.href = Ct.href),
        A.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Ct.protocol
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
              "text xml": A.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, A.ajaxSettings), t) : Bt(A.ajaxSettings, e);
          },
          ajaxPrefilter: Ut(qt),
          ajaxTransport: Ut(Ht),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0));
            var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f = A.ajaxSetup({}, (t = t || {})),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? A(h) : A.event,
              v = A.Deferred(),
              m = A.Callbacks("once memory"),
              y = f.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              _ = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
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
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) _.always(e[_.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || C;
                  return r && r.abort(t), T(0, t), this;
                },
              };
            if (
              (v.promise(_),
              (f.url = ((e || f.url || Ct.href) + "").replace(
                Lt,
                Ct.protocol + "//"
              )),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = A.param(f.data, f.traditional)),
              It(qt, f, t, _),
              c)
            )
              return _;
            for (d in ((u = A.event && f.global) &&
              0 == A.active++ &&
              A.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Pt.test(f.type)),
            (i = f.url.replace(Nt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(jt, "+"))
              : ((p = f.url.slice(i.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((i += (_t.test(i) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((i = i.replace(Dt, "$1")),
                  (p = (_t.test(i) ? "&" : "?") + "_=" + At.guid++ + p)),
                (f.url = i + p)),
            f.ifModified &&
              (A.lastModified[i] &&
                _.setRequestHeader("If-Modified-Since", A.lastModified[i]),
              A.etag[i] && _.setRequestHeader("If-None-Match", A.etag[i])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              _.setRequestHeader("Content-Type", f.contentType),
            _.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              _.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, _, f) || c))
              return _.abort();
            if (
              ((C = "abort"),
              m.add(f.complete),
              _.done(f.success),
              _.fail(f.error),
              (r = It(Ht, f, t, _)))
            ) {
              if (((_.readyState = 1), u && g.trigger("ajaxSend", [_, f]), c))
                return _;
              f.async &&
                f.timeout > 0 &&
                (a = n.setTimeout(function () {
                  _.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), r.send(x, T);
              } catch (e) {
                if (c) throw e;
                T(-1, e);
              }
            } else T(-1, "No Transport");
            function T(e, t, s, l) {
              var d,
                p,
                b,
                x,
                w,
                C = t;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (r = void 0),
                (o = l || ""),
                (_.readyState = e > 0 ? 4 : 0),
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
                  })(f, _, s)),
                !d &&
                  A.inArray("script", f.dataTypes) > -1 &&
                  A.inArray("json", f.dataTypes) < 0 &&
                  (f.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                          for (i in c)
                            if (
                              (a = i.split(" "))[1] === o &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[i])
                                : !0 !== c[i] && ((o = a[0]), u.unshift(a[1]));
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
                })(f, x, _, d)),
                d
                  ? (f.ifModified &&
                      ((w = _.getResponseHeader("Last-Modified")) &&
                        (A.lastModified[i] = w),
                      (w = _.getResponseHeader("etag")) && (A.etag[i] = w)),
                    204 === e || "HEAD" === f.type
                      ? (C = "nocontent")
                      : 304 === e
                      ? (C = "notmodified")
                      : ((C = x.state), (p = x.data), (d = !(b = x.error))))
                  : ((b = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                (_.status = e),
                (_.statusText = (t || C) + ""),
                d ? v.resolveWith(h, [p, C, _]) : v.rejectWith(h, [_, C, b]),
                _.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(d ? "ajaxSuccess" : "ajaxError", [_, f, d ? p : b]),
                m.fireWith(h, [_, C]),
                u &&
                  (g.trigger("ajaxComplete", [_, f]),
                  --A.active || A.event.trigger("ajaxStop")));
            }
            return _;
          },
          getJSON: function (e, t, n) {
            return A.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return A.get(e, void 0, t, "script");
          },
        }),
        A.each(["get", "post"], function (e, t) {
          A[t] = function (e, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              A.ajax(
                A.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  A.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        A.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (A._evalUrl = function (e, t, n) {
          return A.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              A.globalEval(e, t, n);
            },
          });
        }),
        A.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = A(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                  A(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = A(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              A(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  A(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (A.expr.pseudos.hidden = function (e) {
          return !A.expr.pseudos.visible(e);
        }),
        (A.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (A.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var zt = { 0: 200, 1223: 204 },
        Wt = A.ajaxSettings.xhr();
      (v.cors = !!Wt && "withCredentials" in Wt),
        (v.ajax = Wt = !!Wt),
        A.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Wt && !e.crossDomain))
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
        A.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        A.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return A.globalEval(e), e;
            },
          },
        }),
        A.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        A.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = A("<script>")
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
      A.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || A.expando + "_" + At.guid++;
          return (this[e] = !0), e;
        },
      }),
        A.ajaxPrefilter("json jsonp", function (e, t, r) {
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
                  (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || A.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === o ? A(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  s && m(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Ft = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ft.childNodes.length)),
        (A.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (o = !n && []),
              (i = j.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ce([e], t, o)),
                  o && o.length && A(o).remove(),
                  A.merge([], i.childNodes)));
          var r, i, o;
        }),
        (A.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((r = vt(e.slice(a))), (e = e.slice(0, a))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
              A.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e);
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
        (A.expr.pseudos.animated = function (e) {
          return A.grep(A.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (A.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              c = A.css(e, "position"),
              u = A(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (o = A.css(e, "top")),
              (l = A.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (r = u.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, A.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + i),
              "using" in t ? t.using.call(e, d) : u.css(d);
          },
        }),
        A.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    A.offset.setOffset(this, e, t);
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
              if ("fixed" === A.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === A.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0)),
                  (i.left += A.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - A.css(r, "marginTop", !0),
                left: t.left - i.left - A.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === A.css(e, "position");

              )
                e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        A.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            A.fn[e] = function (r) {
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
        A.each(["top", "left"], function (e, t) {
          A.cssHooks[t] = We(v.pixelPosition, function (e, n) {
            if (n)
              return (n = ze(e, t)), Re.test(n) ? A(e).position()[t] + "px" : n;
          });
        }),
        A.each({ Height: "height", Width: "width" }, function (e, t) {
          A.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              A.fn[r] = function (i, o) {
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
                      ? A.css(t, n, a)
                      : A.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        A.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            A.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        A.fn.extend({
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
        A.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            A.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (A.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = a.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || A.guid++),
            i
          );
      }),
        (A.holdReady = function (e) {
          e ? A.readyWait++ : A.ready(!0);
        }),
        (A.isArray = Array.isArray),
        (A.parseJSON = JSON.parse),
        (A.nodeName = k),
        (A.isFunction = m),
        (A.isWindow = y),
        (A.camelCase = Q),
        (A.type = C),
        (A.now = Date.now),
        (A.isNumeric = function (e) {
          var t = A.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (A.trim = function (e) {
          return null == e ? "" : (e + "").replace(Qt, "");
        }),
        void 0 ===
          (r = function () {
            return A;
          }.apply(t, [])) || (e.exports = r);
      var Jt = n.jQuery,
        Yt = n.$;
      return (
        (A.noConflict = function (e) {
          return (
            n.$ === A && (n.$ = Yt), e && n.jQuery === A && (n.jQuery = Jt), A
          );
        }),
        void 0 === i && (n.jQuery = n.$ = A),
        A
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
            c = [];
          let u,
            d = 0,
            p = !1;
          for (; d < i; ) {
            for (
              u = t[d];
              d < i &&
              void 0 !==
                ((a = n[d]),
                (o =
                  null === (r = a) || void 0 === r ? void 0 : r._$litStatic$));

            )
              (u += o + t[++d]), (p = !0);
            c.push(a), l.push(u), d++;
          }
          if ((d === i && l.push(t[i]), p)) {
            const e = l.join("$$lit$$");
            void 0 === (t = s.get(e)) && s.set(e, (t = l)), (n = c);
          }
          return e(t, ...n);
        },
      l = a(r.b);
    a(r.f);
  },
  135: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "LocalChooseInbody", function () {
        return u;
      });
    var r = n(0),
      i = n(54),
      o = n(38),
      s = n(61);
    function a(e, t, n) {
      return n
        ? t
          ? t(e)
          : e
        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
    }
    function l(e, t) {
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
    function c(e, t, n) {
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
    class u extends s.LocalChoose {
      constructor() {
        super(),
          (this.tmp_region_name = null),
          (this.tmp_region_title = null),
          (this.region_name = "lazio"),
          (this.region_title = "Lazio");
      }
      firstUpdated() {
        (this.region_name = Object(i.get)("lcn-region") || this.region_name),
          (this.region_title =
            Object(i.get)("lcn-region-name") || this.region_title),
          (this.tmp_region_name = this.region_name),
          (this.tmp_region_title = this.region_title),
          this._changeData();
      }
      manageClick(e) {
        if (!e) return;
        const { event: t, region: n } = e;
        n &&
          (t.preventDefault(),
          t.stopPropagation(),
          (this.tmp_region_name = n.data),
          (this.tmp_region_title = n.name),
          this._changeData());
      }
      _changeData() {
        const e = [
          this.getLocalJson(`/tgr/${this.tmp_region_name}/localnews.json`),
          this.getLocalJson(`/tgr/${this.tmp_region_name}/ultimeedizioni.json`),
        ];
        Promise.allSettled(e).then((e) => {
          const t = "rejected" === e[0].status && "rejected" === e[1].status,
            n = "rejected" === e[0].status && "fulfilled" === e[1].status,
            r = "fulfilled" === e[0].status && "fulfilled" === e[1].status;
          t
            ? this.handleExternalLink()
            : n || (r && !e[0].value)
            ? this.handleMissingLocal(e[1].value)
            : this.handleLocalNews(e);
        });
      }
      handleLocalNews(e) {
        let t = this.closest("rainews-wrapper");
        const n = e[0].value,
          r = e[1].value;
        (t.data = n),
          (t.data.header.title = this.tmp_region_title),
          (t.data.header.link = {
            external_target: !0,
            href: "/tgr/" + this.tmp_region_name,
            text: Object(o.a)("vai_alla_pagina", "goto"),
          }),
          this.getUltimeEdizioni("notstandalone", r);
      }
      handleMissingLocal(e) {
        (this.closest("rainews-wrapper").data.header.link = {
          external_target: !0,
          href: "/tgr/" + this.tmp_region_name,
          text: Object(o.a)("vai_alla_pagina", "goto"),
        }),
          this.getUltimeEdizioni("standalone", e);
      }
      getUltimeEdizioni(e, t) {
        (t.component = "rainews-telecomando"),
          (t.broadcastDataRegion = this.tmp_region_name);
        let n = this.closest("rainews-wrapper");
        (n.data.header.title = this.tmp_region_title),
          "standalone" == e && (delete t.title, (n.data.sets = []));
        let r = n.data;
        (r.broadcastData = t),
          (n.data = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(n), !0).forEach(function (t) {
                    c(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, r)),
          (this.region_name = this.tmp_region_name),
          (this.region_title = this.tmp_region_title),
          Object(i.set)("lcn-region", this.region_name),
          Object(i.set)("lcn-region-name", this.region_title);
      }
      handleExternalLink() {
        let e = (navigator && navigator.userAgent) || "";
        const t = (e.includes("Rai24") && e.includes("iOS")) || !1,
          n = e.includes("iPhone") || e.includes("iPad") || !1;
        let r = document.createElement("a");
        (r.href = "/tgr/" + this.tmp_region_name),
          t || n || r.setAttribute("target", "_blank"),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r);
      }
      getLocalJson(e) {
        return (function (e, t, n) {
          if (n) return t ? t(e()) : e();
          try {
            var r = Promise.resolve(e());
            return t ? r.then(t) : r;
          } catch (e) {
            return Promise.reject(e);
          }
        })(function () {
          return a(fetch(e), function (e) {
            let t = !1;
            return (
              (n = function (e) {
                return t ? e : Promise.reject("No data");
              }),
              (r = (function () {
                if (e.ok)
                  return a(e.json(), function (e) {
                    if (void 0 !== e)
                      return (e.isNazionale = !1), (t = !0), Promise.resolve(e);
                  });
              })()) && r.then
                ? r.then(n)
                : n(r)
            );
            var n, r;
          });
        });
      }
      renderButton() {
        return r.d`
      <button class="button local-choose-button" @click="${this.toggleMenu}">
        <span>${Object(o.a)("cambiaregione", "editorial_board")}</span>
        <i class="icon-chevron-right" aria-label="${Object(o.a)(
          "cambiaregione",
          "editorial_board"
        )}"></i>
        <i class="icon-location"></i>
      </button>
    `;
      }
    }
    customElements.get("rainews-local-choose-inbody") ||
      customElements.define("rainews-local-choose-inbody", u);
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
      return c;
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
    class c {
      static open(e, t) {
        var n;
        const s = a(a({}, new o()), t),
          l = document.createElement("div"),
          c = i.b`${Object(i.c)(e)}`;
        Object(r.e)(i.a`<${c} .config=${s}></${c}>`, l);
        const u = l.firstElementChild;
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
            n.appendChild(u),
          u.afterClosed.subscribe(() => {
            null != s &&
              s.hasBackdrop &&
              (document.body.style.overflow = "auto"),
              null == s || s.container.removeChild(u);
          }),
          u
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
        return C;
      }),
      n.d(t, "c", function () {
        return _;
      }),
      n.d(t, "d", function () {
        return T;
      }),
      n.d(t, "e", function () {
        return E;
      }),
      n.d(t, "f", function () {
        return A;
      });
    const i = globalThis.trustedTypes,
      o = i ? i.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
      s = `lit$${(Math.random() + "").slice(9)}$`,
      a = "?" + s,
      l = `<${a}>`,
      c = document,
      u = (e = "") => c.createComment(e),
      d = (e) => null === e || ("object" != typeof e && "function" != typeof e),
      p = Array.isArray,
      f = (e) => {
        var t;
        return (
          p(e) ||
          "function" ==
            typeof (null === (t = e) || void 0 === t
              ? void 0
              : t[Symbol.iterator])
        );
      },
      h = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      g = /-->/g,
      v = />/g,
      m =
        />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      y = /'/g,
      b = /"/g,
      x = /^(?:script|style|textarea)$/i,
      w =
        (e) =>
        (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
      C = w(1),
      A = w(2),
      _ = Symbol.for("lit-noChange"),
      T = Symbol.for("lit-nothing"),
      $ = new WeakMap(),
      E = (e, t, n) => {
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
            t.insertBefore(u(), e),
            e,
            void 0,
            null != n ? n : {}
          );
        }
        return s._$AI(e), s;
      },
      S = c.createTreeWalker(c, 129, null, !1),
      k = (e, t) => {
        const n = e.length - 1,
          r = [];
        let i,
          a = 2 === t ? "<svg>" : "",
          c = h;
        for (let t = 0; t < n; t++) {
          const n = e[t];
          let o,
            u,
            d = -1,
            p = 0;
          for (
            ;
            p < n.length && ((c.lastIndex = p), (u = c.exec(n)), null !== u);

          )
            (p = c.lastIndex),
              c === h
                ? "!--" === u[1]
                  ? (c = g)
                  : void 0 !== u[1]
                  ? (c = v)
                  : void 0 !== u[2]
                  ? (x.test(u[2]) && (i = RegExp("</" + u[2], "g")), (c = m))
                  : void 0 !== u[3] && (c = m)
                : c === m
                ? ">" === u[0]
                  ? ((c = null != i ? i : h), (d = -1))
                  : void 0 === u[1]
                  ? (d = -2)
                  : ((d = c.lastIndex - u[2].length),
                    (o = u[1]),
                    (c = void 0 === u[3] ? m : '"' === u[3] ? b : y))
                : c === b || c === y
                ? (c = m)
                : c === g || c === v
                ? (c = h)
                : ((c = m), (i = void 0));
          const f = c === m && e[t + 1].startsWith("/>") ? " " : "";
          a +=
            c === h
              ? n + l
              : d >= 0
              ? (r.push(o), n.slice(0, d) + "$lit$" + n.slice(d) + s + f)
              : n + s + (-2 === d ? (r.push(void 0), t) : f);
        }
        const u = a + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
        return [void 0 !== o ? o.createHTML(u) : u, r];
      };
    class j {
      constructor({ strings: e, _$litType$: t }, n) {
        let r;
        this.parts = [];
        let o = 0,
          l = 0;
        const c = e.length - 1,
          d = this.parts,
          [p, f] = k(e, t);
        if (
          ((this.el = j.createElement(p, n)),
          (S.currentNode = this.el.content),
          2 === t)
        ) {
          const e = this.el.content,
            t = e.firstChild;
          t.remove(), e.append(...t.childNodes);
        }
        for (; null !== (r = S.nextNode()) && d.length < c; ) {
          if (1 === r.nodeType) {
            if (r.hasAttributes()) {
              const e = [];
              for (const t of r.getAttributeNames())
                if (t.endsWith("$lit$") || t.startsWith(s)) {
                  const n = f[l++];
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
                          ? L
                          : "?" === t[1]
                          ? q
                          : "@" === t[1]
                          ? H
                          : P,
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
                  r.append(e[n], u()),
                    S.nextNode(),
                    d.push({ type: 2, index: ++o });
                r.append(e[t], u());
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
        const n = c.createElement("template");
        return (n.innerHTML = e), n;
      }
    }
    function N(e, t, n = e, r) {
      var i, o, s, a;
      if (t === _) return t;
      let l =
        void 0 !== r
          ? null === (i = n._$Cl) || void 0 === i
            ? void 0
            : i[r]
          : n._$Cu;
      const c = d(t) ? void 0 : t._$litDirective$;
      return (
        (null == l ? void 0 : l.constructor) !== c &&
          (null === (o = null == l ? void 0 : l._$AO) ||
            void 0 === o ||
            o.call(l, !1),
          void 0 === c ? (l = void 0) : ((l = new c(e)), l._$AT(e, n, r)),
          void 0 !== r
            ? ((null !== (s = (a = n)._$Cl) && void 0 !== s
                ? s
                : (a._$Cl = []))[r] = l)
            : (n._$Cu = l)),
        void 0 !== l && (t = N(e, l._$AS(e, t.values), l, r)),
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
              : c
          ).importNode(n, !0);
        S.currentNode = i;
        let o = S.nextNode(),
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
          s !== (null == l ? void 0 : l.index) && ((o = S.nextNode()), s++);
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
          (this._$AH = T),
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
        (e = N(this, e, t)),
          d(e)
            ? e === T || null == e || "" === e
              ? (this._$AH !== T && this._$AR(), (this._$AH = T))
              : e !== this._$AH && e !== _ && this.$(e)
            : void 0 !== e._$litType$
            ? this.T(e)
            : void 0 !== e.nodeType
            ? this.S(e)
            : f(e)
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
        this._$AH !== T && d(this._$AH)
          ? (this._$AA.nextSibling.data = e)
          : this.S(c.createTextNode(e)),
          (this._$AH = e);
      }
      T(e) {
        var t;
        const { values: n, _$litType$: r } = e,
          i =
            "number" == typeof r
              ? this._$AC(e)
              : (void 0 === r.el && (r.el = j.createElement(r.h, this.options)),
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
        let t = $.get(e.strings);
        return void 0 === t && $.set(e.strings, (t = new j(e))), t;
      }
      M(e) {
        p(this._$AH) || ((this._$AH = []), this._$AR());
        const t = this._$AH;
        let n,
          r = 0;
        for (const i of e)
          r === t.length
            ? t.push((n = new O(this.A(u()), this.A(u()), this, this.options)))
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
    class P {
      constructor(e, t, n, r, i) {
        (this.type = 1),
          (this._$AH = T),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = t),
          (this._$AM = r),
          (this.options = i),
          n.length > 2 || "" !== n[0] || "" !== n[1]
            ? ((this._$AH = Array(n.length - 1).fill(new String())),
              (this.strings = n))
            : (this._$AH = T);
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
          (e = N(this, e, t, 0)),
            (o = !d(e) || (e !== this._$AH && e !== _)),
            o && (this._$AH = e);
        else {
          const r = e;
          let s, a;
          for (e = i[0], s = 0; s < i.length - 1; s++)
            (a = N(this, r[n + s], t, s)),
              a === _ && (a = this._$AH[s]),
              o || (o = !d(a) || a !== this._$AH[s]),
              a === T
                ? (e = T)
                : e !== T && (e += (null != a ? a : "") + i[s + 1]),
              (this._$AH[s] = a);
        }
        o && !r && this.k(e);
      }
      k(e) {
        e === T
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null != e ? e : "");
      }
    }
    class L extends P {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      k(e) {
        this.element[this.name] = e === T ? void 0 : e;
      }
    }
    class q extends P {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      k(e) {
        e && e !== T
          ? this.element.setAttribute(this.name, "")
          : this.element.removeAttribute(this.name);
      }
    }
    class H extends P {
      constructor(e, t, n, r, i) {
        super(e, t, n, r, i), (this.type = 5);
      }
      _$AI(e, t = this) {
        var n;
        if ((e = null !== (n = N(this, e, t, 0)) && void 0 !== n ? n : T) === _)
          return;
        const r = this._$AH,
          i =
            (e === T && r !== T) ||
            e.capture !== r.capture ||
            e.once !== r.once ||
            e.passive !== r.passive,
          o = e !== T && (r === T || i);
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
        N(this, e);
      }
    }
    const R = {
        P: "$lit$",
        V: s,
        L: a,
        I: 1,
        N: k,
        R: D,
        D: f,
        j: N,
        H: O,
        O: P,
        F: q,
        B: H,
        W: L,
        Z: M,
      },
      U = window.litHtmlPolyfillSupport;
    null == U || U(j, O),
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
  54: function (e, t, n) {
    "use strict";
    var r =
      (this && this.__assign) ||
      function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
    function i(e, t) {
      if (!t) return "";
      var n = "; " + e;
      return !0 === t ? n : n + "=" + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29") +
        "=" +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ("number" == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            i("Expires", e.expires ? e.expires.toUTCString() : "") +
            i("Domain", e.domain) +
            i("Path", e.path) +
            i("Secure", e.secure) +
            i("SameSite", e.sameSite)
          );
        })(n)
      );
    }
    function s(e) {
      for (
        var t = {}, n = e ? e.split("; ") : [], r = /(%[\dA-F]{2})+/gi, i = 0;
        i < n.length;
        i++
      ) {
        var o = n[i].split("="),
          s = o.slice(1).join("=");
        '"' === s.charAt(0) && (s = s.slice(1, -1));
        try {
          t[o[0].replace(r, decodeURIComponent)] = s.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function a() {
      return s(document.cookie);
    }
    function l(e, t, n) {
      document.cookie = o(e, t, r({ path: "/" }, n));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = s),
      (t.getAll = a),
      (t.get = function (e) {
        return a()[e];
      }),
      (t.set = l),
      (t.remove = function (e, t) {
        l(e, "", r(r({}, t), { expires: -1 }));
      });
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
          c = n[l] || 0,
          u = "".concat(l, " ").concat(c);
        n[l] = c + 1;
        var d = a(u),
          p = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== d
          ? (s[d].references++, s[d].updater(p))
          : s.push({ identifier: u, updater: v(p, t), references: 1 }),
          r.push(u);
      }
      return r;
    }
    function c(e) {
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
    var u,
      d =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function p(e, t, n, r) {
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
    function f(e, t, n) {
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
      g = 0;
    function v(e, t) {
      var n, r, i;
      if (t.singleton) {
        var o = g++;
        (n = h || (h = c(t))),
          (r = p.bind(null, n, o, !1)),
          (i = p.bind(null, n, o, !0));
      } else
        (n = c(t)),
          (r = f.bind(null, n, t)),
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
          for (var o = l(e, t), c = 0; c < n.length; c++) {
            var u = a(n[c]);
            0 === s[u].references && (s[u].updater(), s.splice(u, 1));
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
        return _;
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
      c = (e) => {
        for (let t; (t = e._$AM); e = t) {
          let n = t._$AN;
          if (void 0 === n) t._$AN = n = new Set();
          else if (n.has(e)) break;
          n.add(e), p(t);
        }
      };
    function u(e) {
      void 0 !== this._$AN
        ? (l(this), (this._$AM = e), c(this))
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
    const p = (e) => {
      var t, n, r, i;
      e.type == s.b.CHILD &&
        ((null !== (t = (r = e)._$AP) && void 0 !== t) || (r._$AP = d),
        (null !== (n = (i = e)._$AQ) && void 0 !== n) || (i._$AQ = u));
    };
    class f extends s.a {
      constructor() {
        super(...arguments), (this._$AN = void 0);
      }
      _$AT(e, t, n) {
        super._$AT(e, t, n), c(this), (this.isConnected = e._$AU);
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
    const g = new WeakMap(),
      v = Object(s.c)(
        class extends f {
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
              ? (void 0 !== g.get(this.U) && this.U.call(this.ht, void 0),
                g.set(this.U, e),
                void 0 !== e && this.U.call(this.ht, e))
              : (this.U.value = e);
          }
          get rt() {
            var e;
            return "function" == typeof this.U
              ? g.get(this.U)
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
    function C(e, t, n) {
      return n
        ? t
          ? t(e)
          : e
        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
    }
    function A(e, t, n) {
      if (n) return t ? t(e()) : e();
      try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r;
      } catch (e) {
        return Promise.reject(e);
      }
    }
    m.a._init();
    class _ extends r.a {
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
        return A(function () {
          return C(
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
        return A(function () {
          return C(
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
                return C(t._getRegions(), function (e) {
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
        <span>${Object(y.a)("Redazioni Tgr", "editorial_board")}</span>
      </button>
    `;
      }
      render() {
        return r.d`
      <div ${v(this.wrapper)} class="wrapper-local-choose ${
          this.context ? "wrapper-local-choose--" + this.context : ""
        }">
        ${this.renderButton()}
      </div>
    `;
      }
    }
    customElements.get("rainews-local-choose") ||
      customElements.define("rainews-local-choose", _);
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
//# sourceMappingURL=rainews-local-choose-inbody.js.map
