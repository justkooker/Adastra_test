addEventListener('DOMContentLoaded', ()=> {
    !(function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var i = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var i in e)
                n.d(
                  r,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = "/assets/js/webcomponents/"),
          n((n.s = 282));
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
              return x.b;
            }),
            n.d(t, "e", function () {
              return x.e;
            }),
            n.d(t, "a", function () {
              return _;
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
          function h(e, t, n) {
            return n
              ? t
                ? t(e)
                : e
              : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
          }
          var f;
          const p = window.reactiveElementPolyfillSupport,
            m = {
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
            g = {
              attribute: !0,
              type: String,
              converter: m,
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
            static createProperty(e, t = g) {
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
              return this.elementProperties.get(e) || g;
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
            _$Eg(e, t, n = g) {
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
                    : m.toAttribute
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
                      : m.fromAttribute;
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
                  h(
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
                      return h(
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
            null == p || p({ ReactiveElement: y }),
            (null !== (f = globalThis.reactiveElementVersions) && void 0 !== f
              ? f
              : (globalThis.reactiveElementVersions = [])
            ).push("1.0.1");
          var b,
            w,
            x = n(4);
          class _ extends y {
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
                (this._$Dt = Object(x.e)(t, this.renderRoot, this.renderOptions));
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
              return x.c;
            }
          }
          (_.finalized = !0),
            (_._$litElement$ = !0),
            null === (b = globalThis.litElementHydrateSupport) ||
              void 0 === b ||
              b.call(globalThis, { LitElement: _ });
          const S = globalThis.litElementPolyfillSupport;
          null == S || S({ LitElement: _ });
          (null !== (w = globalThis.litElementVersions) && void 0 !== w
            ? w
            : (globalThis.litElementVersions = [])
          ).push("3.0.1");
        },
        10: function (e, t, n) {
          "use strict";
          n.d(t, "e", function () {
            return i;
          }),
            n.d(t, "d", function () {
              return o;
            }),
            n.d(t, "f", function () {
              return s;
            }),
            n.d(t, "i", function () {
              return a;
            }),
            n.d(t, "g", function () {
              return l;
            }),
            n.d(t, "h", function () {
              return c;
            }),
            n.d(t, "c", function () {
              return u;
            }),
            n.d(t, "a", function () {
              return d;
            }),
            n.d(t, "b", function () {
              return h;
            });
          var r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          };
          function i(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " + String(t) + " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }
          function o(e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              l((r = r.apply(e, t || [])).next());
            });
          }
          function s(e, t) {
            var n,
              r,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          }
          Object.create;
          function a(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              n = t && e[t],
              r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && r >= e.length && (e = void 0),
                    { value: e && e[r++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          }
          function l(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
              i,
              o = n.call(e),
              s = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                s.push(r.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return s;
          }
          function c(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e;
          }
          function u(e) {
            return this instanceof u ? ((this.v = e), this) : new u(e);
          }
          function d(e, t, n) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var r,
              i = n.apply(e, t || []),
              o = [];
            return (
              (r = {}),
              s("next"),
              s("throw"),
              s("return"),
              (r[Symbol.asyncIterator] = function () {
                return this;
              }),
              r
            );
            function s(e) {
              i[e] &&
                (r[e] = function (t) {
                  return new Promise(function (n, r) {
                    o.push([e, t, n, r]) > 1 || a(e, t);
                  });
                });
            }
            function a(e, t) {
              try {
                (n = i[e](t)).value instanceof u
                  ? Promise.resolve(n.value.v).then(l, c)
                  : d(o[0][2], n);
              } catch (e) {
                d(o[0][3], e);
              }
              var n;
            }
            function l(e) {
              a("next", e);
            }
            function c(e) {
              a("throw", e);
            }
            function d(e, t) {
              e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
            }
          }
          function h(e) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var t,
              n = e[Symbol.asyncIterator];
            return n
              ? n.call(e)
              : ((e = a(e)),
                (t = {}),
                r("next"),
                r("throw"),
                r("return"),
                (t[Symbol.asyncIterator] = function () {
                  return this;
                }),
                t);
            function r(n) {
              t[n] =
                e[n] &&
                function (t) {
                  return new Promise(function (r, i) {
                    (function (e, t, n, r) {
                      Promise.resolve(r).then(function (t) {
                        e({ value: t, done: n });
                      }, t);
                    })(r, i, (t = e[n](t)).done, t.value);
                  });
                };
            }
          }
          Object.create;
        },
        12: function (e, t, n) {
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
                h = { css: o[1], media: o[2], sourceMap: o[3] };
              -1 !== d
                ? (s[d].references++, s[d].updater(h))
                : s.push({ identifier: u, updater: v(h, t), references: 1 }),
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
          function h(e, t, n, r) {
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
          var p = null,
            m = 0;
          function v(e, t) {
            var n, r, i;
            if (t.singleton) {
              var o = m++;
              (n = p || (p = c(t))),
                (r = h.bind(null, n, o, !1)),
                (i = h.bind(null, n, o, !0));
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
        13: function (e, t, n) {
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
        136: function (e, t, n) {
          var r = n(56),
            i = n(164),
            o = n(165),
            s = Math.max,
            a = Math.min;
          e.exports = function (e, t, n) {
            var l,
              c,
              u,
              d,
              h,
              f,
              p = 0,
              m = !1,
              v = !1,
              g = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            function y(t) {
              var n = l,
                r = c;
              return (l = c = void 0), (p = t), (d = e.apply(r, n));
            }
            function b(e) {
              return (p = e), (h = setTimeout(x, t)), m ? y(e) : d;
            }
            function w(e) {
              var n = e - f;
              return void 0 === f || n >= t || n < 0 || (v && e - p >= u);
            }
            function x() {
              var e = i();
              if (w(e)) return _(e);
              h = setTimeout(
                x,
                (function (e) {
                  var n = t - (e - f);
                  return v ? a(n, u - (e - p)) : n;
                })(e)
              );
            }
            function _(e) {
              return (h = void 0), g && l ? y(e) : ((l = c = void 0), d);
            }
            function S() {
              var e = i(),
                n = w(e);
              if (((l = arguments), (c = this), (f = e), n)) {
                if (void 0 === h) return b(f);
                if (v) return clearTimeout(h), (h = setTimeout(x, t)), y(f);
              }
              return void 0 === h && (h = setTimeout(x, t)), d;
            }
            return (
              (t = o(t) || 0),
              r(n) &&
                ((m = !!n.leading),
                (u = (v = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : u),
                (g = "trailing" in n ? !!n.trailing : g)),
              (S.cancel = function () {
                void 0 !== h && clearTimeout(h), (p = 0), (l = f = c = h = void 0);
              }),
              (S.flush = function () {
                return void 0 === h ? d : _(i());
              }),
              S
            );
          };
        },
        137: function (e, t, n) {
          var r = n(12),
            i = n(169);
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
        138: function (e, t, n) {
          var r = n(12),
            i = n(170);
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
        152: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return u;
          });
          var r = n(10),
            i = n(22),
            o = n(27),
            s = n(50),
            a = Object(s.a)(function (e) {
              return function () {
                e(this),
                  (this.name = "ObjectUnsubscribedError"),
                  (this.message = "object unsubscribed");
              };
            }),
            l = n(47),
            c = n(32),
            u = (function (e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t.closed = !1),
                  (t.currentObservers = null),
                  (t.observers = []),
                  (t.isStopped = !1),
                  (t.hasError = !1),
                  (t.thrownError = null),
                  t
                );
              }
              return (
                Object(r.e)(t, e),
                (t.prototype.lift = function (e) {
                  var t = new d(this, this);
                  return (t.operator = e), t;
                }),
                (t.prototype._throwIfClosed = function () {
                  if (this.closed) throw new a();
                }),
                (t.prototype.next = function (e) {
                  var t = this;
                  Object(c.b)(function () {
                    var n, i;
                    if ((t._throwIfClosed(), !t.isStopped)) {
                      t.currentObservers ||
                        (t.currentObservers = Array.from(t.observers));
                      try {
                        for (
                          var o = Object(r.i)(t.currentObservers), s = o.next();
                          !s.done;
                          s = o.next()
                        ) {
                          s.value.next(e);
                        }
                      } catch (e) {
                        n = { error: e };
                      } finally {
                        try {
                          s && !s.done && (i = o.return) && i.call(o);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    }
                  });
                }),
                (t.prototype.error = function (e) {
                  var t = this;
                  Object(c.b)(function () {
                    if ((t._throwIfClosed(), !t.isStopped)) {
                      (t.hasError = t.isStopped = !0), (t.thrownError = e);
                      for (var n = t.observers; n.length; ) n.shift().error(e);
                    }
                  });
                }),
                (t.prototype.complete = function () {
                  var e = this;
                  Object(c.b)(function () {
                    if ((e._throwIfClosed(), !e.isStopped)) {
                      e.isStopped = !0;
                      for (var t = e.observers; t.length; ) t.shift().complete();
                    }
                  });
                }),
                (t.prototype.unsubscribe = function () {
                  (this.isStopped = this.closed = !0),
                    (this.observers = this.currentObservers = null);
                }),
                Object.defineProperty(t.prototype, "observed", {
                  get: function () {
                    var e;
                    return (
                      (null === (e = this.observers) || void 0 === e
                        ? void 0
                        : e.length) > 0
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (t.prototype._trySubscribe = function (t) {
                  return (
                    this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
                  );
                }),
                (t.prototype._subscribe = function (e) {
                  return (
                    this._throwIfClosed(),
                    this._checkFinalizedStatuses(e),
                    this._innerSubscribe(e)
                  );
                }),
                (t.prototype._innerSubscribe = function (e) {
                  var t = this,
                    n = this.hasError,
                    r = this.isStopped,
                    i = this.observers;
                  return n || r
                    ? o.a
                    : ((this.currentObservers = null),
                      i.push(e),
                      new o.b(function () {
                        (t.currentObservers = null), Object(l.a)(i, e);
                      }));
                }),
                (t.prototype._checkFinalizedStatuses = function (e) {
                  var t = this.hasError,
                    n = this.thrownError,
                    r = this.isStopped;
                  t ? e.error(n) : r && e.complete();
                }),
                (t.prototype.asObservable = function () {
                  var e = new i.a();
                  return (e.source = this), e;
                }),
                (t.create = function (e, t) {
                  return new d(e, t);
                }),
                t
              );
            })(i.a),
            d = (function (e) {
              function t(t, n) {
                var r = e.call(this) || this;
                return (r.destination = t), (r.source = n), r;
              }
              return (
                Object(r.e)(t, e),
                (t.prototype.next = function (e) {
                  var t, n;
                  null ===
                    (n =
                      null === (t = this.destination) || void 0 === t
                        ? void 0
                        : t.next) ||
                    void 0 === n ||
                    n.call(t, e);
                }),
                (t.prototype.error = function (e) {
                  var t, n;
                  null ===
                    (n =
                      null === (t = this.destination) || void 0 === t
                        ? void 0
                        : t.error) ||
                    void 0 === n ||
                    n.call(t, e);
                }),
                (t.prototype.complete = function () {
                  var e, t;
                  null ===
                    (t =
                      null === (e = this.destination) || void 0 === e
                        ? void 0
                        : e.complete) ||
                    void 0 === t ||
                    t.call(e);
                }),
                (t.prototype._subscribe = function (e) {
                  var t, n;
                  return null !==
                    (n =
                      null === (t = this.source) || void 0 === t
                        ? void 0
                        : t.subscribe(e)) && void 0 !== n
                    ? n
                    : o.a;
                }),
                t
              );
            })(u);
        },
        16: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return o;
          });
          var r = n(2),
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
        164: function (e, t, n) {
          var r = n(44);
          e.exports = function () {
            return r.Date.now();
          };
        },
        165: function (e, t, n) {
          var r = n(166),
            i = n(56),
            o = n(168),
            s = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            c = parseInt;
          e.exports = function (e) {
            if ("number" == typeof e) return e;
            if (o(e)) return NaN;
            if (i(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = i(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = r(e);
            var n = a.test(e);
            return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
          };
        },
        166: function (e, t, n) {
          var r = n(167),
            i = /^\s+/;
          e.exports = function (e) {
            return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
          };
        },
        167: function (e, t) {
          var n = /\s/;
          e.exports = function (e) {
            for (var t = e.length; t-- && n.test(e.charAt(t)); );
            return t;
          };
        },
        168: function (e, t, n) {
          var r = n(64),
            i = n(59);
          e.exports = function (e) {
            return "symbol" == typeof e || (i(e) && "[object Symbol]" == r(e));
          };
        },
        169: function (e, t, n) {
          (t = n(13)(!1)).push([
            e.i,
            '#WTwrapper .locations__dropdown{top:30px !important;left:calc(50% - 80px) !important}@media only screen and (min-width: 1024px){#WTwrapper .locations__dropdown{left:calc(50% - 115px) !important}}#WTwrapper{display:none;padding:0;position:relative}#WTwrapper .weather{text-align:center}#WTwrapper .weather__img-wrapper{position:relative;display:inline-block;vertical-align:middle}#WTwrapper .weather__img-wrapper img{display:block}#WTwrapper .weather__temperatures{position:relative;display:inline-block;vertical-align:middle;text-align:right}#WTwrapper .weather__temperatures .max{font-weight:700;color:#DC5138}#WTwrapper .weather__temperatures .min{font-weight:700;color:var(--launch__label-color, #3D5EFF)}#WTwrapper .locations{position:relative;line-height:14px}#WTwrapper .locations__toggler{padding:0 0 15px 0;margin:0;font-size:11px;color:#5e5e6e;border:0 none}#WTwrapper .locations__toggler:after{display:none}#WTwrapper .locations__toggler:hover{color:var(--launch__label-color, #009)}#WTwrapper .locations__toggler .icon-chevron-right{color:#9192a1;font-size:8px;padding:0 2px;display:inline-block;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}#WTwrapper .locations__toggler[aria-expanded="true"]{color:var(--launch__label-color, #009)}#WTwrapper .locations__toggler[aria-expanded="true"] .icon-chevron-right{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}#WTwrapper .locations__dropdown{position:absolute;border:0 none;box-shadow:0px 0px 2px 2px rgba(141,141,141,0.3);background-color:var(--sharebox-background, #fff);-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;border-radius:2px;width:160px;z-index:15}#WTwrapper .locations__dropdown:before,#WTwrapper .locations__dropdown:after{content:" ";display:block;position:absolute;top:0;right:50%;left:auto;width:0;height:0;border-style:solid}#WTwrapper .locations__dropdown:before{margin:-12px -15px 0 0;border-width:0 15px 12px 15px;border-color:transparent transparent rgba(141,141,141,0.3) transparent}#WTwrapper .locations__dropdown:after{margin:-10px -13px 0 0;border-width:0 13px 10px 13px;border-color:transparent transparent #fff transparent}#WTwrapper .locations__form{color:#40404e}#WTwrapper .locations__form .locations__form__input-wrapper{position:relative}#WTwrapper .locations__form input[type="text"]{width:100%;padding-right:20px;border:0 none;border-bottom:1px solid var(--launch__label-color, #009);font-family:"Source Sans Pro",Arial,Helvetica,sans-serif;font-size:16px;line-height:40px;color:#5e5e6e}#WTwrapper .locations__form [type="submit"]{border:0 none;background:none;padding:0;position:absolute;right:3px;bottom:0;font-size:16px;line-height:40px;color:#5e5e6e}#WTwrapper .locations__form [type="submit"]:hover{color:var(--launch__label-color, #009)}#WTwrapper .locations__list-wrapper .menu{text-align:left;padding-top:10px}#WTwrapper .locations__list-wrapper .menu li{cursor:pointer;font-size:16px;line-height:40px;color:#5e5e6e}@media only screen and (min-width: 768px){#WTwrapper{display:inline-block;position:absolute;right:60px}#WTwrapper .weather{height:20px}#WTwrapper .weather__img-wrapper{top:-7px}#WTwrapper .weather__img-wrapper img{width:20px;position:relative;top:-2px}#WTwrapper .weather__temperatures{top:-9px}#WTwrapper .weather__temperatures .max{font-size:12px;line-height:12px}#WTwrapper .weather__temperatures .min{font-size:10px;line-height:10px}#WTwrapper .locations{height:10px}}@media only screen and (min-width: 1024px){#WTwrapper{right:84px}#WTwrapper .weather{height:25px}#WTwrapper .weather__img-wrapper img{width:28px;position:static}#WTwrapper .locations__toggler{padding-top:5px}#WTwrapper .locations__dropdown{width:230px}}@media only screen and (min-width: 1296px){#WTwrapper .weather{height:35px}#WTwrapper .weather__img-wrapper{top:0}#WTwrapper .weather__img-wrapper img{width:auto}#WTwrapper .weather__temperatures{top:-2px}#WTwrapper .weather__temperatures .max{font-size:16px;line-height:16px}#WTwrapper .weather__temperatures .min{font-size:13px;line-height:13px}#WTwrapper .locations__toggler{font-size:12px}#WTwrapper .locations__toggler .icon-chevron-right{font-size:10px}}\n',
            "",
          ]),
            (e.exports = t);
        },
        170: function (e, t, n) {
          (t = n(13)(!1)).push([
            e.i,
            '.search__modal{position:fixed;top:0;left:0;width:100%;height:100%;background:transparent;z-index:100;display:none}@media only screen and (max-width: 767px){.search__modal{padding-left:20px;padding-right:20px}}.search__modal__form{border-bottom:2px solid #cdcdd6;display:block;font-size:0;margin-top:135px}.search__modal__form>*{border:0;padding:0;margin:0;background:transparent}.search__modal__form input[type="search"]{width:calc(100% - 48px);height:48px;font-weight:900;font-size:24px;line-height:32px;font-family:"Merriweather",serif;color:#9192a1}@media only screen and (min-width: 1024px){.search__modal__form input[type="search"]{font-size:28px;line-height:36px}}.search__modal__form input[type="search"]::placeholder{text-transform:capitalize;color:#9192a1;opacity:1}.search__modal__form input[type="search"]:-ms-input-placeholder{text-transform:capitalize;color:#9192a1}.search__modal__form input[type="search"]::-ms-input-placeholder{text-transform:capitalize;color:#9192a1}.search__modal__form button[type="submit"]{display:block;float:right;text-align:center;color:#212335;-webkit-transition:color 500ms ease;-moz-transition:color 500ms ease;-ms-transition:color 500ms ease;transition:color 500ms ease}.search__modal__form button[type="submit"]:hover{color:var(--launch__label-color, #009)}.search__modal__form .icon-search{color:#3D5EFF;width:48px;height:48px;font-size:20px;line-height:56px}.search__modal .close-button .icon-close{font-size:16px}.search__quick-results__list{margin-top:20px;margin-left:0;list-style-type:none}.search__quick-results__list__item{margin-top:10px;margin-bottom:10px}.search__quick-results__list__item a{color:#212335;-webkit-transition:color 500ms ease;-moz-transition:color 500ms ease;-ms-transition:color 500ms ease;transition:color 500ms ease}.search__quick-results__list__item a:hover{color:var(--launch__label-color, #009)}\n',
            "",
          ]),
            (e.exports = t);
        },
        2: function (e, t, n) {
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
              h = d.toString,
              f = d.hasOwnProperty,
              p = f.toString,
              m = p.call(Object),
              v = {},
              g = function (e) {
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
              w = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function x(e, t, n) {
              var r,
                i,
                o = (n = n || b).createElement("script");
              if (((o.text = e), t))
                for (r in w)
                  (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
              n.head.appendChild(o).parentNode.removeChild(o);
            }
            function _(e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? d[h.call(e)] || "object"
                : typeof e;
            }
            var S = function e(t, n) {
              return new e.fn.init(t, n);
            };
            function T(e) {
              var t = !!e && "length" in e && e.length,
                n = _(e);
              return (
                !g(e) &&
                !y(e) &&
                ("array" === n ||
                  0 === t ||
                  ("number" == typeof t && t > 0 && t - 1 in e))
              );
            }
            (S.fn = S.prototype =
              {
                jquery: "3.6.0",
                constructor: S,
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
                  var t = S.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
                },
                each: function (e) {
                  return S.each(this, e);
                },
                map: function (e) {
                  return this.pushStack(
                    S.map(this, function (t, n) {
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
                    S.grep(this, function (e, t) {
                      return (t + 1) % 2;
                    })
                  );
                },
                odd: function () {
                  return this.pushStack(
                    S.grep(this, function (e, t) {
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
              (S.extend = S.fn.extend =
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
                      "object" == typeof s || g(s) || (s = {}),
                      a === l && ((s = this), a--);
                    a < l;
                    a++
                  )
                    if (null != (e = arguments[a]))
                      for (t in e)
                        (r = e[t]),
                          "__proto__" !== t &&
                            s !== r &&
                            (c && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                              ? ((n = s[t]),
                                (o =
                                  i && !Array.isArray(n)
                                    ? []
                                    : i || S.isPlainObject(n)
                                    ? n
                                    : {}),
                                (i = !1),
                                (s[t] = S.extend(c, o, r)))
                              : void 0 !== r && (s[t] = r));
                  return s;
                }),
              S.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                  var t, n;
                  return (
                    !(!e || "[object Object]" !== h.call(e)) &&
                    (!(t = s(e)) ||
                      ("function" ==
                        typeof (n = f.call(t, "constructor") && t.constructor) &&
                        p.call(n) === m))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                globalEval: function (e, t, n) {
                  x(e, { nonce: t && t.nonce }, n);
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
                        ? S.merge(n, "string" == typeof e ? [e] : e)
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
                  if (T(e))
                    for (r = e.length; o < r; o++)
                      null != (i = t(e[o], o, n)) && s.push(i);
                  else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                  return l(s);
                },
                guid: 1,
                support: v,
              }),
              "function" == typeof Symbol &&
                (S.fn[Symbol.iterator] = o[Symbol.iterator]),
              S.each(
                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                  " "
                ),
                function (e, t) {
                  d["[object " + t + "]"] = t.toLowerCase();
                }
              );
            var E = (function (e) {
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
                h,
                f,
                p,
                m,
                v,
                g,
                y,
                b,
                w = "sizzle" + 1 * new Date(),
                x = e.document,
                _ = 0,
                S = 0,
                T = le(),
                E = le(),
                A = le(),
                C = le(),
                k = function (e, t) {
                  return e === t && (d = !0), 0;
                },
                $ = {}.hasOwnProperty,
                O = [],
                L = O.pop,
                j = O.push,
                M = O.push,
                N = O.slice,
                z = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                  return -1;
                },
                P =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                D = "[\\x20\\t\\r\\n\\f]",
                q =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  D +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                F =
                  "\\[" +
                  D +
                  "*(" +
                  q +
                  ")(?:" +
                  D +
                  "*([*^$|!~]?=)" +
                  D +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  q +
                  "))|)" +
                  D +
                  "*\\]",
                B =
                  ":(" +
                  q +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  F +
                  ")*)|.*)\\)|)",
                R = new RegExp(D + "+", "g"),
                H = new RegExp(
                  "^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$",
                  "g"
                ),
                I = new RegExp("^" + D + "*," + D + "*"),
                W = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
                U = new RegExp(D + "|>"),
                V = new RegExp(B),
                G = new RegExp("^" + q + "$"),
                X = {
                  ID: new RegExp("^#(" + q + ")"),
                  CLASS: new RegExp("^\\.(" + q + ")"),
                  TAG: new RegExp("^(" + q + "|[*])"),
                  ATTR: new RegExp("^" + F),
                  PSEUDO: new RegExp("^" + B),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      D +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      D +
                      "*(?:([+-]|)" +
                      D +
                      "*(\\d+)|))" +
                      D +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + P + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      D +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      D +
                      "*((?:-\\d)?\\d*)" +
                      D +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                Q = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])",
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
                  h();
                },
                se = we(
                  function (e) {
                    return (
                      !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                M.apply((O = N.call(x.childNodes)), x.childNodes),
                  O[x.childNodes.length].nodeType;
              } catch (e) {
                M = {
                  apply: O.length
                    ? function (e, t) {
                        j.apply(e, N.call(t));
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
                  p,
                  g,
                  y = t && t.ownerDocument,
                  x = t ? t.nodeType : 9;
                if (
                  ((r = r || []),
                  "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
                )
                  return r;
                if (!i && (h(t), (t = t || f), m)) {
                  if (11 !== x && (d = Z.exec(e)))
                    if ((o = d[1])) {
                      if (9 === x) {
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
                      if (d[2]) return M.apply(r, t.getElementsByTagName(e)), r;
                      if (
                        (o = d[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return M.apply(r, t.getElementsByClassName(o)), r;
                    }
                  if (
                    n.qsa &&
                    !C[e + " "] &&
                    (!v || !v.test(e)) &&
                    (1 !== x || "object" !== t.nodeName.toLowerCase())
                  ) {
                    if (((g = e), (y = t), 1 === x && (U.test(e) || W.test(e)))) {
                      for (
                        ((y = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                          n.scope) ||
                          ((u = t.getAttribute("id"))
                            ? (u = u.replace(re, ie))
                            : t.setAttribute("id", (u = w))),
                          a = (p = s(e)).length;
                        a--;
      
                      )
                        p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                      g = p.join(",");
                    }
                    try {
                      return M.apply(r, y.querySelectorAll(g)), r;
                    } catch (t) {
                      C(e, !0);
                    } finally {
                      u === w && t.removeAttribute("id");
                    }
                  }
                }
                return l(e.replace(H, "$1"), t, r, i);
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
                return (e[w] = !0), e;
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
              function he(e, t) {
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
              function pe(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function me(e) {
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
              function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (o = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !Q.test(t || (n && n.nodeName) || "HTML");
                }),
              (h = ae.setDocument =
                function (e) {
                  var t,
                    i,
                    s = e ? e.ownerDocument || e : x;
                  return s != f && 9 === s.nodeType && s.documentElement
                    ? ((p = (f = s).documentElement),
                      (m = !o(f)),
                      x != f &&
                        (i = f.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener
                          ? i.addEventListener("unload", oe, !1)
                          : i.attachEvent && i.attachEvent("onunload", oe)),
                      (n.scope = ue(function (e) {
                        return (
                          p.appendChild(e).appendChild(f.createElement("div")),
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
                      (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                        return (
                          (p.appendChild(e).id = w),
                          !f.getElementsByName || !f.getElementsByName(w).length
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
                            if (void 0 !== t.getElementById && m) {
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
                            if (void 0 !== t.getElementById && m) {
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
                          if (void 0 !== t.getElementsByClassName && m)
                            return t.getElementsByClassName(e);
                        }),
                      (g = []),
                      (v = []),
                      (n.qsa = J.test(f.querySelectorAll)) &&
                        (ue(function (e) {
                          var t;
                          (p.appendChild(e).innerHTML =
                            "<a id='" +
                            w +
                            "'></a><select id='" +
                            w +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              v.push("[*^$]=" + D + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              v.push("\\[" + D + "*(?:value|" + P + ")"),
                            e.querySelectorAll("[id~=" + w + "-]").length ||
                              v.push("~="),
                            (t = f.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              v.push(
                                "\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")"
                              ),
                            e.querySelectorAll(":checked").length ||
                              v.push(":checked"),
                            e.querySelectorAll("a#" + w + "+*").length ||
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
                              v.push("name" + D + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length &&
                              v.push(":enabled", ":disabled"),
                            (p.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length &&
                              v.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            v.push(",.*:");
                        })),
                      (n.matchesSelector = J.test(
                        (y =
                          p.matches ||
                          p.webkitMatchesSelector ||
                          p.mozMatchesSelector ||
                          p.oMatchesSelector ||
                          p.msMatchesSelector)
                      )) &&
                        ue(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")),
                            y.call(e, "[s!='']:x"),
                            g.push("!=", B);
                        }),
                      (v = v.length && new RegExp(v.join("|"))),
                      (g = g.length && new RegExp(g.join("|"))),
                      (t = J.test(p.compareDocumentPosition)),
                      (b =
                        t || J.test(p.contains)
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
                      (k = t
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
                                ? e == f || (e.ownerDocument == x && b(x, e))
                                  ? -1
                                  : t == f || (t.ownerDocument == x && b(x, t))
                                  ? 1
                                  : u
                                  ? z(u, e) - z(u, t)
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
                                ? z(u, e) - z(u, t)
                                : 0;
                            if (i === o) return he(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[r] === a[r]; ) r++;
                            return r
                              ? he(s[r], a[r])
                              : s[r] == x
                              ? -1
                              : a[r] == x
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
                  (h(e),
                  n.matchesSelector &&
                    m &&
                    !C[t + " "] &&
                    (!g || !g.test(t)) &&
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
                    C(t, !0);
                  }
                return ae(t, f, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != f && h(e), b(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != f && h(e);
                var i = r.attrHandle[t.toLowerCase()],
                  o =
                    i && $.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !m
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
                  e.sort(k),
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
                  match: X,
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
                      return X.CHILD.test(e[0])
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
                        ((t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) &&
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
                                ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1
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
                              h,
                              f,
                              p,
                              m = o !== s ? "nextSibling" : "previousSibling",
                              v = t.parentNode,
                              g = a && t.nodeName.toLowerCase(),
                              y = !l && !a,
                              b = !1;
                            if (v) {
                              if (o) {
                                for (; m; ) {
                                  for (h = t; (h = h[m]); )
                                    if (
                                      a
                                        ? h.nodeName.toLowerCase() === g
                                        : 1 === h.nodeType
                                    )
                                      return !1;
                                  p = m = "only" === e && !p && "nextSibling";
                                }
                                return !0;
                              }
                              if (((p = [s ? v.firstChild : v.lastChild]), s && y)) {
                                for (
                                  b =
                                    (f =
                                      (c =
                                        (u =
                                          (d = (h = v)[w] || (h[w] = {}))[
                                            h.uniqueID
                                          ] || (d[h.uniqueID] = {}))[e] || [])[0] ===
                                        _ && c[1]) && c[2],
                                    h = f && v.childNodes[f];
                                  (h = (++f && h && h[m]) || (b = f = 0) || p.pop());
      
                                )
                                  if (1 === h.nodeType && ++b && h === t) {
                                    u[e] = [_, f, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = f =
                                    (c =
                                      (u =
                                        (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] ||
                                        (d[h.uniqueID] = {}))[e] || [])[0] === _ &&
                                    c[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (h =
                                    (++f && h && h[m]) || (b = f = 0) || p.pop()) &&
                                  ((a
                                    ? h.nodeName.toLowerCase() !== g
                                    : 1 !== h.nodeType) ||
                                    !++b ||
                                    (y &&
                                      ((u =
                                        (d = h[w] || (h[w] = {}))[h.uniqueID] ||
                                        (d[h.uniqueID] = {}))[e] = [_, b]),
                                    h !== t));
      
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
                      return i[w]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ce(function (e, n) {
                                for (var r, o = i(e, t), s = o.length; s--; )
                                  e[(r = z(e, o[s]))] = !(n[r] = o[s]);
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
                        r = a(e.replace(H, "$1"));
                      return r[w]
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
                        G.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = m
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
                      return e === p;
                    },
                    focus: function (e) {
                      return (
                        e === f.activeElement &&
                        (!f.hasFocus || f.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: me(!1),
                    disabled: me(!0),
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
                      return K.test(e.nodeName);
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
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
              function ye() {}
              function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r;
              }
              function we(e, t, n) {
                var r = t.dir,
                  i = t.next,
                  o = i || r,
                  s = n && "parentNode" === o,
                  a = S++;
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
                        h = [_, a];
                      if (l) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || s)
                            if (
                              ((u =
                                (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                                (d[t.uniqueID] = {})),
                              i && i === t.nodeName.toLowerCase())
                            )
                              t = t[r] || t;
                            else {
                              if ((c = u[o]) && c[0] === _ && c[1] === a)
                                return (h[2] = c[2]);
                              if (((u[o] = h), (h[2] = e(t, n, l)))) return !0;
                            }
                      return !1;
                    };
              }
              function xe(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function _e(e, t, n, r, i) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                  (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
                return s;
              }
              function Se(e, t, n, r, i, o) {
                return (
                  r && !r[w] && (r = Se(r)),
                  i && !i[w] && (i = Se(i, o)),
                  ce(function (o, s, a, l) {
                    var c,
                      u,
                      d,
                      h = [],
                      f = [],
                      p = s.length,
                      m =
                        o ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      v = !e || (!o && t) ? m : _e(m, h, e, a, l),
                      g = n ? (i || (o ? e : p || r) ? [] : s) : v;
                    if ((n && n(v, g, a, l), r))
                      for (c = _e(g, f), r(c, [], a, l), u = c.length; u--; )
                        (d = c[u]) && (g[f[u]] = !(v[f[u]] = d));
                    if (o) {
                      if (i || e) {
                        if (i) {
                          for (c = [], u = g.length; u--; )
                            (d = g[u]) && c.push((v[u] = d));
                          i(null, (g = []), c, l);
                        }
                        for (u = g.length; u--; )
                          (d = g[u]) &&
                            (c = i ? z(o, d) : h[u]) > -1 &&
                            (o[c] = !(s[c] = d));
                      }
                    } else (g = _e(g === s ? g.splice(p, g.length) : g)), i ? i(null, s, g, l) : M.apply(s, g);
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
                    u = we(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    d = we(
                      function (e) {
                        return z(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    h = [
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
                  if ((n = r.relative[e[l].type])) h = [we(xe(h), n)];
                  else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                      for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                      return Se(
                        l > 1 && xe(h),
                        l > 1 &&
                          be(
                            e
                              .slice(0, l - 1)
                              .concat({ value: " " === e[l - 2].type ? "*" : "" })
                          ).replace(H, "$1"),
                        n,
                        l < i && Te(e.slice(l, i)),
                        i < o && Te((e = e.slice(i))),
                        i < o && be(e)
                      );
                    }
                    h.push(n);
                  }
                return xe(h);
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
                      u = E[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = r.preFilter; a; ) {
                      for (s in ((n && !(i = I.exec(a))) ||
                        (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                      (n = !1),
                      (i = W.exec(a)) &&
                        ((n = i.shift()),
                        o.push({ value: n, type: i[0].replace(H, " ") }),
                        (a = a.slice(n.length))),
                      r.filter))
                        !(i = X[s].exec(a)) ||
                          (c[s] && !(i = c[s](i))) ||
                          ((n = i.shift()),
                          o.push({ value: n, type: s, matches: i }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      i = [],
                      o = [],
                      a = A[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; )
                        (a = Te(t[n]))[w] ? i.push(a) : o.push(a);
                      (a = A(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            i = e.length > 0,
                            o = function (o, s, a, l, u) {
                              var d,
                                p,
                                v,
                                g = 0,
                                y = "0",
                                b = o && [],
                                w = [],
                                x = c,
                                S = o || (i && r.find.TAG("*", u)),
                                T = (_ += null == x ? 1 : Math.random() || 0.1),
                                E = S.length;
                              for (
                                u && (c = s == f || s || u);
                                y !== E && null != (d = S[y]);
                                y++
                              ) {
                                if (i && d) {
                                  for (
                                    p = 0,
                                      s || d.ownerDocument == f || (h(d), (a = !m));
                                    (v = e[p++]);
      
                                  )
                                    if (v(d, s || f, a)) {
                                      l.push(d);
                                      break;
                                    }
                                  u && (_ = T);
                                }
                                n && ((d = !v && d) && g--, o && b.push(d));
                              }
                              if (((g += y), n && y !== g)) {
                                for (p = 0; (v = t[p++]); ) v(b, w, s, a);
                                if (o) {
                                  if (g > 0)
                                    for (; y--; ) b[y] || w[y] || (w[y] = L.call(l));
                                  w = _e(w);
                                }
                                M.apply(l, w),
                                  u &&
                                    !o &&
                                    w.length > 0 &&
                                    g + t.length > 1 &&
                                    ae.uniqueSort(l);
                              }
                              return u && ((_ = T), (c = x)), b;
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
                      h = "function" == typeof e && e,
                      f = !i && s((e = h.selector || e));
                    if (((n = n || []), 1 === f.length)) {
                      if (
                        (l = f[0] = f[0].slice(0)).length > 2 &&
                        "ID" === (c = l[0]).type &&
                        9 === t.nodeType &&
                        m &&
                        r.relative[l[1].type]
                      ) {
                        if (
                          !(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                        )
                          return n;
                        h && (t = t.parentNode),
                          (e = e.slice(l.shift().value.length));
                      }
                      for (
                        o = X.needsContext.test(e) ? 0 : l.length;
                        o-- && ((c = l[o]), !r.relative[(u = c.type)]);
      
                      )
                        if (
                          (d = r.find[u]) &&
                          (i = d(
                            c.matches[0].replace(te, ne),
                            (ee.test(l[0].type) && ge(t.parentNode)) || t
                          ))
                        ) {
                          if ((l.splice(o, 1), !(e = i.length && be(l))))
                            return M.apply(n, i), n;
                          break;
                        }
                    }
                    return (
                      (h || a(e, f))(
                        i,
                        t,
                        !m,
                        n,
                        !t || (ee.test(e) && ge(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (n.sortStable = w.split("").sort(k).join("") === w),
                (n.detectDuplicates = !!d),
                h(),
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
                  de(P, function (e, t, n) {
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
            (S.find = E),
              ((S.expr = E.selectors)[":"] = S.expr.pseudos),
              (S.uniqueSort = S.unique = E.uniqueSort),
              (S.text = E.getText),
              (S.isXMLDoc = E.isXML),
              (S.contains = E.contains),
              (S.escapeSelector = E.escape);
            var A = function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                  if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                  }
                return r;
              },
              C = function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
              k = S.expr.match.needsContext;
            function $(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function L(e, t, n) {
              return g(t)
                ? S.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n;
                  })
                : t.nodeType
                ? S.grep(e, function (e) {
                    return (e === t) !== n;
                  })
                : "string" != typeof t
                ? S.grep(e, function (e) {
                    return u.call(t, e) > -1 !== n;
                  })
                : S.filter(t, e, n);
            }
            (S.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              S.fn.extend({
                find: function (e) {
                  var t,
                    n,
                    r = this.length,
                    i = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      S(e).filter(function () {
                        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                      })
                    );
                  for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                  return r > 1 ? S.uniqueSort(n) : n;
                },
                filter: function (e) {
                  return this.pushStack(L(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(L(this, e || [], !0));
                },
                is: function (e) {
                  return !!L(
                    this,
                    "string" == typeof e && k.test(e) ? S(e) : e || [],
                    !1
                  ).length;
                },
              });
            var j,
              M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((S.fn.init = function (e, t, n) {
              var r, i;
              if (!e) return this;
              if (((n = n || j), "string" == typeof e)) {
                if (
                  !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : M.exec(e)) ||
                  (!r[1] && t)
                )
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
                if (r[1]) {
                  if (
                    ((t = t instanceof S ? t[0] : t),
                    S.merge(
                      this,
                      S.parseHTML(
                        r[1],
                        t && t.nodeType ? t.ownerDocument || t : b,
                        !0
                      )
                    ),
                    O.test(r[1]) && S.isPlainObject(t))
                  )
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                  return this;
                }
                return (
                  (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
                  this
                );
              }
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : g(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(S)
                : S.makeArray(e, this);
            }).prototype = S.fn),
              (j = S(b));
            var N = /^(?:parents|prev(?:Until|All))/,
              z = { children: !0, contents: !0, next: !0, prev: !0 };
            function P(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            S.fn.extend({
              has: function (e) {
                var t = S(e, this),
                  n = t.length;
                return this.filter(function () {
                  for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
                });
              },
              closest: function (e, t) {
                var n,
                  r = 0,
                  i = this.length,
                  o = [],
                  s = "string" != typeof e && S(e);
                if (!k.test(e))
                  for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (s
                          ? s.index(n) > -1
                          : 1 === n.nodeType && S.find.matchesSelector(n, e))
                      ) {
                        o.push(n);
                        break;
                      }
                return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
              },
              index: function (e) {
                return e
                  ? "string" == typeof e
                    ? u.call(S(e), this[0])
                    : u.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
              },
              addBack: function (e) {
                return this.add(
                  null == e ? this.prevObject : this.prevObject.filter(e)
                );
              },
            }),
              S.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return A(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                    return A(e, "parentNode", n);
                  },
                  next: function (e) {
                    return P(e, "nextSibling");
                  },
                  prev: function (e) {
                    return P(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return A(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return A(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                    return A(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                    return A(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                    return C((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return C(e.firstChild);
                  },
                  contents: function (e) {
                    return null != e.contentDocument && s(e.contentDocument)
                      ? e.contentDocument
                      : ($(e, "template") && (e = e.content || e),
                        S.merge([], e.childNodes));
                  },
                },
                function (e, t) {
                  S.fn[e] = function (n, r) {
                    var i = S.map(this, t, n);
                    return (
                      "Until" !== e.slice(-5) && (r = n),
                      r && "string" == typeof r && (i = S.filter(r, i)),
                      this.length > 1 &&
                        (z[e] || S.uniqueSort(i), N.test(e) && i.reverse()),
                      this.pushStack(i)
                    );
                  };
                }
              );
            var D = /[^\x20\t\r\n\f]+/g;
            function q(e) {
              return e;
            }
            function F(e) {
              throw e;
            }
            function B(e, t, n, r) {
              var i;
              try {
                e && g((i = e.promise))
                  ? i.call(e).done(t).fail(n)
                  : e && g((i = e.then))
                  ? i.call(e, t, n)
                  : t.apply(void 0, [e].slice(r));
              } catch (e) {
                n.apply(void 0, [e]);
              }
            }
            (S.Callbacks = function (e) {
              e =
                "string" == typeof e
                  ? (function (e) {
                      var t = {};
                      return (
                        S.each(e.match(D) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : S.extend({}, e);
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
                          S.each(n, function (n, r) {
                            g(r)
                              ? (e.unique && c.has(r)) || o.push(r)
                              : r && r.length && "string" !== _(r) && t(r);
                          });
                        })(arguments),
                        n && !t && l()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      S.each(arguments, function (e, t) {
                        for (var n; (n = S.inArray(t, o, n)) > -1; )
                          o.splice(n, 1), n <= a && a--;
                      }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? S.inArray(e, o) > -1 : o.length > 0;
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
              S.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        "notify",
                        "progress",
                        S.Callbacks("memory"),
                        S.Callbacks("memory"),
                        2,
                      ],
                      [
                        "resolve",
                        "done",
                        S.Callbacks("once memory"),
                        S.Callbacks("once memory"),
                        0,
                        "resolved",
                      ],
                      [
                        "reject",
                        "fail",
                        S.Callbacks("once memory"),
                        S.Callbacks("once memory"),
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
                        return S.Deferred(function (n) {
                          S.each(t, function (t, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                              var e = i && i.apply(this, arguments);
                              e && g(e.promise)
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
                                    g(c)
                                      ? i
                                        ? c.call(n, s(o, t, q, i), s(o, t, F, i))
                                        : (o++,
                                          c.call(
                                            n,
                                            s(o, t, q, i),
                                            s(o, t, F, i),
                                            s(o, t, q, t.notifyWith)
                                          ))
                                      : (r !== q && ((a = void 0), (l = [n])),
                                        (i || t.resolveWith)(a, l));
                                }
                              },
                              u = i
                                ? c
                                : function () {
                                    try {
                                      c();
                                    } catch (n) {
                                      S.Deferred.exceptionHook &&
                                        S.Deferred.exceptionHook(n, u.stackTrace),
                                        e + 1 >= o &&
                                          (r !== F && ((a = void 0), (l = [n])),
                                          t.rejectWith(a, l));
                                    }
                                  };
                            e
                              ? u()
                              : (S.Deferred.getStackHook &&
                                  (u.stackTrace = S.Deferred.getStackHook()),
                                n.setTimeout(u));
                          };
                        }
                        return S.Deferred(function (n) {
                          t[0][3].add(s(0, n, g(i) ? i : q, n.notifyWith)),
                            t[1][3].add(s(0, n, g(e) ? e : q)),
                            t[2][3].add(s(0, n, g(r) ? r : F));
                        }).promise();
                      },
                      promise: function (e) {
                        return null != e ? S.extend(e, i) : i;
                      },
                    },
                    o = {};
                  return (
                    S.each(t, function (e, n) {
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
                    o = S.Deferred(),
                    s = function (e) {
                      return function (n) {
                        (r[e] = this),
                          (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                          --t || o.resolveWith(r, i);
                      };
                    };
                  if (
                    t <= 1 &&
                    (B(e, o.done(s(n)).resolve, o.reject, !t),
                    "pending" === o.state() || g(i[n] && i[n].then))
                  )
                    return o.then();
                  for (; n--; ) B(i[n], s(n), o.reject);
                  return o.promise();
                },
              });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (S.Deferred.exceptionHook = function (e, t) {
              n.console &&
                n.console.warn &&
                e &&
                R.test(e.name) &&
                n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
              (S.readyException = function (e) {
                n.setTimeout(function () {
                  throw e;
                });
              });
            var H = S.Deferred();
            function I() {
              b.removeEventListener("DOMContentLoaded", I),
                n.removeEventListener("load", I),
                S.ready();
            }
            (S.fn.ready = function (e) {
              return (
                H.then(e).catch(function (e) {
                  S.readyException(e);
                }),
                this
              );
            }),
              S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                  (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0),
                    (!0 !== e && --S.readyWait > 0) || H.resolveWith(b, [S]));
                },
              }),
              (S.ready.then = H.then),
              "complete" === b.readyState ||
              ("loading" !== b.readyState && !b.documentElement.doScroll)
                ? n.setTimeout(S.ready)
                : (b.addEventListener("DOMContentLoaded", I),
                  n.addEventListener("load", I));
            var W = function e(t, n, r, i, o, s, a) {
                var l = 0,
                  c = t.length,
                  u = null == r;
                if ("object" === _(r))
                  for (l in ((o = !0), r)) e(t, n, l, r[l], !0, s, a);
                else if (
                  void 0 !== i &&
                  ((o = !0),
                  g(i) || (a = !0),
                  u &&
                    (a
                      ? (n.call(t, i), (n = null))
                      : ((u = n),
                        (n = function (e, t, n) {
                          return u.call(S(e), n);
                        }))),
                  n)
                )
                  for (; l < c; l++) n(t[l], r, a ? i : i.call(t[l], l, n(t[l], r)));
                return o ? t : u ? n.call(t) : c ? n(t[0], r) : s;
              },
              U = /^-ms-/,
              V = /-([a-z])/g;
            function G(e, t) {
              return t.toUpperCase();
            }
            function X(e) {
              return e.replace(U, "ms-").replace(V, G);
            }
            var Q = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Y() {
              this.expando = S.expando + Y.uid++;
            }
            (Y.uid = 1),
              (Y.prototype = {
                cache: function (e) {
                  var t = e[this.expando];
                  return (
                    t ||
                      ((t = {}),
                      Q(e) &&
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
                  if ("string" == typeof t) i[X(t)] = n;
                  else for (r in t) i[X(r)] = t[r];
                  return i;
                },
                get: function (e, t) {
                  return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
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
                        ? t.map(X)
                        : (t = X(t)) in r
                        ? [t]
                        : t.match(D) || []).length;
                      for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                      (e.nodeType
                        ? (e[this.expando] = void 0)
                        : delete e[this.expando]);
                  }
                },
                hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !S.isEmptyObject(t);
                },
              });
            var K = new Y(),
              J = new Y(),
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
                  J.set(e, t, n);
                } else n = void 0;
              return n;
            }
            S.extend({
              hasData: function (e) {
                return J.hasData(e) || K.hasData(e);
              },
              data: function (e, t, n) {
                return J.access(e, t, n);
              },
              removeData: function (e, t) {
                J.remove(e, t);
              },
              _data: function (e, t, n) {
                return K.access(e, t, n);
              },
              _removeData: function (e, t) {
                K.remove(e, t);
              },
            }),
              S.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    i,
                    o = this[0],
                    s = o && o.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((i = J.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                    ) {
                      for (n = s.length; n--; )
                        s[n] &&
                          0 === (r = s[n].name).indexOf("data-") &&
                          ((r = X(r.slice(5))), te(o, r, i[r]));
                      K.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                  }
                  return "object" == typeof e
                    ? this.each(function () {
                        J.set(this, e);
                      })
                    : W(
                        this,
                        function (t) {
                          var n;
                          if (o && void 0 === t)
                            return void 0 !== (n = J.get(o, e)) ||
                              void 0 !== (n = te(o, e))
                              ? n
                              : void 0;
                          this.each(function () {
                            J.set(this, e, t);
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
                    J.remove(this, e);
                  });
                },
              }),
              S.extend({
                queue: function (e, t, n) {
                  var r;
                  if (e)
                    return (
                      (t = (t || "fx") + "queue"),
                      (r = K.get(e, t)),
                      n &&
                        (!r || Array.isArray(n)
                          ? (r = K.access(e, t, S.makeArray(n)))
                          : r.push(n)),
                      r || []
                    );
                },
                dequeue: function (e, t) {
                  var n = S.queue(e, (t = t || "fx")),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                  "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                      ("fx" === t && n.unshift("inprogress"),
                      delete o.stop,
                      i.call(
                        e,
                        function () {
                          S.dequeue(e, t);
                        },
                        o
                      )),
                    !r && o && o.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                    K.get(e, n) ||
                    K.access(e, n, {
                      empty: S.Callbacks("once memory").add(function () {
                        K.remove(e, [t + "queue", n]);
                      }),
                    })
                  );
                },
              }),
              S.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? S.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = S.queue(this, e, t);
                          S._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    S.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                      --r || i.resolveWith(o, [o]);
                    };
                  for (
                    "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                    s--;
      
                  )
                    (n = K.get(o[s], e + "queueHooks")) &&
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
                return S.contains(e.ownerDocument, e);
              },
              ae = { composed: !0 };
            oe.getRootNode &&
              (se = function (e) {
                return (
                  S.contains(e.ownerDocument, e) ||
                  e.getRootNode(ae) === e.ownerDocument
                );
              });
            var le = function (e, t) {
              return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display && se(e) && "none" === S.css(e, "display"))
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
                      return S.css(e, t, "");
                    },
                l = a(),
                c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
                u =
                  e.nodeType &&
                  (S.cssNumber[t] || ("px" !== c && +l)) &&
                  re.exec(S.css(e, t));
              if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                  S.style(e, t, u + c),
                    (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                    (u /= o);
                S.style(e, t, (u *= 2) + c), (n = n || []);
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
                (i = S.css(t, "display")),
                t.parentNode.removeChild(t),
                "none" === i && (i = "block"),
                (ue[r] = i),
                i)
              );
            }
            function he(e, t) {
              for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
                (r = e[o]).style &&
                  ((n = r.style.display),
                  t
                    ? ("none" === n &&
                        ((i[o] = K.get(r, "display") || null),
                        i[o] || (r.style.display = "")),
                      "" === r.style.display && le(r) && (i[o] = de(r)))
                    : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
              for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
              return e;
            }
            S.fn.extend({
              show: function () {
                return he(this, !0);
              },
              hide: function () {
                return he(this);
              },
              toggle: function (e) {
                return "boolean" == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      le(this) ? S(this).show() : S(this).hide();
                    });
              },
            });
            var fe,
              pe,
              me = /^(?:checkbox|radio)$/i,
              ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              ge = /^$|^module$|\/(?:java|ecma)script/i;
            (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
              (pe = b.createElement("input")).setAttribute("type", "radio"),
              pe.setAttribute("checked", "checked"),
              pe.setAttribute("name", "t"),
              fe.appendChild(pe),
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
                void 0 === t || (t && $(e, t)) ? S.merge([e], n) : n
              );
            }
            function we(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
            }
            (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
              (ye.th = ye.td),
              v.option ||
                (ye.optgroup = ye.option =
                  [1, "<select multiple='multiple'>", "</select>"]);
            var xe = /<|&#?\w+;/;
            function _e(e, t, n, r, i) {
              for (
                var o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = t.createDocumentFragment(),
                  h = [],
                  f = 0,
                  p = e.length;
                f < p;
                f++
              )
                if ((o = e[f]) || 0 === o)
                  if ("object" === _(o)) S.merge(h, o.nodeType ? [o] : o);
                  else if (xe.test(o)) {
                    for (
                      s = s || d.appendChild(t.createElement("div")),
                        a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                        l = ye[a] || ye._default,
                        s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2],
                        u = l[0];
                      u--;
      
                    )
                      s = s.lastChild;
                    S.merge(h, s.childNodes), ((s = d.firstChild).textContent = "");
                  } else h.push(t.createTextNode(o));
              for (d.textContent = "", f = 0; (o = h[f++]); )
                if (r && S.inArray(o, r) > -1) i && i.push(o);
                else if (
                  ((c = se(o)), (s = be(d.appendChild(o), "script")), c && we(s), n)
                )
                  for (u = 0; (o = s[u++]); ) ge.test(o.type || "") && n.push(o);
              return d;
            }
            var Se = /^([^.]*)(?:\.(.+)|)/;
            function Te() {
              return !0;
            }
            function Ee() {
              return !1;
            }
            function Ae(e, t) {
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
            function Ce(e, t, n, r, i, o) {
              var s, a;
              if ("object" == typeof t) {
                for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                  Ce(e, a, n, r, t[a], o);
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
                i = Ee;
              else if (!i) return e;
              return (
                1 === o &&
                  ((s = i),
                  ((i = function (e) {
                    return S().off(e), s.apply(this, arguments);
                  }).guid = s.guid || (s.guid = S.guid++))),
                e.each(function () {
                  S.event.add(this, t, i, r, n);
                })
              );
            }
            function ke(e, t, n) {
              n
                ? (K.set(e, t, !1),
                  S.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                      var r,
                        i,
                        o = K.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                        if (o.length)
                          (S.event.special[t] || {}).delegateType &&
                            e.stopPropagation();
                        else if (
                          ((o = a.call(arguments)),
                          K.set(this, t, o),
                          (r = n(this, t)),
                          this[t](),
                          o !== (i = K.get(this, t)) || r
                            ? K.set(this, t, !1)
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
                          (K.set(this, t, {
                            value: S.event.trigger(
                              S.extend(o[0], S.Event.prototype),
                              o.slice(1),
                              this
                            ),
                          }),
                          e.stopImmediatePropagation());
                    },
                  }))
                : void 0 === K.get(e, t) && S.event.add(e, t, Te);
            }
            (S.event = {
              global: {},
              add: function (e, t, n, r, i) {
                var o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  h,
                  f,
                  p,
                  m,
                  v = K.get(e);
                if (Q(e))
                  for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                      i && S.find.matchesSelector(oe, i),
                      n.guid || (n.guid = S.guid++),
                      (l = v.events) || (l = v.events = Object.create(null)),
                      (s = v.handle) ||
                        (s = v.handle =
                          function (t) {
                            return void 0 !== S && S.event.triggered !== t.type
                              ? S.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      c = (t = (t || "").match(D) || [""]).length;
                    c--;
      
                  )
                    (f = m = (a = Se.exec(t[c]) || [])[1]),
                      (p = (a[2] || "").split(".").sort()),
                      f &&
                        ((d = S.event.special[f] || {}),
                        (f = (i ? d.delegateType : d.bindType) || f),
                        (d = S.event.special[f] || {}),
                        (u = S.extend(
                          {
                            type: f,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && S.expr.match.needsContext.test(i),
                            namespace: p.join("."),
                          },
                          o
                        )),
                        (h = l[f]) ||
                          (((h = l[f] = []).delegateCount = 0),
                          (d.setup && !1 !== d.setup.call(e, r, p, s)) ||
                            (e.addEventListener && e.addEventListener(f, s))),
                        d.add &&
                          (d.add.call(e, u),
                          u.handler.guid || (u.handler.guid = n.guid)),
                        i ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                        (S.event.global[f] = !0));
              },
              remove: function (e, t, n, r, i) {
                var o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  h,
                  f,
                  p,
                  m,
                  v = K.hasData(e) && K.get(e);
                if (v && (l = v.events)) {
                  for (c = (t = (t || "").match(D) || [""]).length; c--; )
                    if (
                      ((f = m = (a = Se.exec(t[c]) || [])[1]),
                      (p = (a[2] || "").split(".").sort()),
                      f)
                    ) {
                      for (
                        d = S.event.special[f] || {},
                          h = l[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                          a =
                            a[2] &&
                            new RegExp(
                              "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            ),
                          s = o = h.length;
                        o--;
      
                      )
                        (u = h[o]),
                          (!i && m !== u.origType) ||
                            (n && n.guid !== u.guid) ||
                            (a && !a.test(u.namespace)) ||
                            (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                            (h.splice(o, 1),
                            u.selector && h.delegateCount--,
                            d.remove && d.remove.call(e, u));
                      s &&
                        !h.length &&
                        ((d.teardown && !1 !== d.teardown.call(e, p, v.handle)) ||
                          S.removeEvent(e, f, v.handle),
                        delete l[f]);
                    } else for (f in l) S.event.remove(e, f + t[c], n, r, !0);
                  S.isEmptyObject(l) && K.remove(e, "handle events");
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
                  l = S.event.fix(e),
                  c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                  u = S.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (
                  ((l.delegateTarget = this),
                  !u.preDispatch || !1 !== u.preDispatch.call(this, l))
                ) {
                  for (
                    s = S.event.handlers.call(this, l, c), t = 0;
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
                            (S.event.special[o.origType] || {}).handle || o.handler
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
                            ? S(i, this).index(c) > -1
                            : S.find(i, this, null, [c]).length),
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
                Object.defineProperty(S.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: g(t)
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
                return e[S.expando] ? e : new S.Event(e);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (e) {
                    var t = this || e;
                    return (
                      me.test(t.type) &&
                        t.click &&
                        $(t, "input") &&
                        ke(t, "click", Te),
                      !1
                    );
                  },
                  trigger: function (e) {
                    var t = this || e;
                    return (
                      me.test(t.type) && t.click && $(t, "input") && ke(t, "click"),
                      !0
                    );
                  },
                  _default: function (e) {
                    var t = e.target;
                    return (
                      (me.test(t.type) &&
                        t.click &&
                        $(t, "input") &&
                        K.get(t, "click")) ||
                      $(t, "a")
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
              (S.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
              }),
              ((S.Event = function (e, t) {
                if (!(this instanceof S.Event)) return new S.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? Te
                        : Ee),
                    (this.target =
                      e.target && 3 === e.target.nodeType
                        ? e.target.parentNode
                        : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && S.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[S.expando] = !0);
              }).prototype = {
                constructor: S.Event,
                isDefaultPrevented: Ee,
                isPropagationStopped: Ee,
                isImmediatePropagationStopped: Ee,
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
              S.each(
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
                S.event.addProp
              ),
              S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                S.event.special[e] = {
                  setup: function () {
                    return ke(this, e, Ae), !1;
                  },
                  trigger: function () {
                    return ke(this, e), !0;
                  },
                  _default: function () {
                    return !0;
                  },
                  delegateType: t,
                };
              }),
              S.each(
                {
                  mouseenter: "mouseover",
                  mouseleave: "mouseout",
                  pointerenter: "pointerover",
                  pointerleave: "pointerout",
                },
                function (e, t) {
                  S.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                      return (
                        (i && (i === r || S.contains(r, i))) ||
                          ((e.type = o.origType),
                          (n = o.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                }
              ),
              S.fn.extend({
                on: function (e, t, n, r) {
                  return Ce(this, e, t, n, r);
                },
                one: function (e, t, n, r) {
                  return Ce(this, e, t, n, r, 1);
                },
                off: function (e, t, n) {
                  var r, i;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (r = e.handleObj),
                      S(e.delegateTarget).off(
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
                    !1 === n && (n = Ee),
                    this.each(function () {
                      S.event.remove(this, e, n, t);
                    })
                  );
                },
              });
            var $e = /<script|<style|<link/i,
              Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function je(e, t) {
              return (
                ($(e, "table") &&
                  $(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                  S(e).children("tbody")[0]) ||
                e
              );
            }
            function Me(e) {
              return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function Ne(e) {
              return (
                "true/" === (e.type || "").slice(0, 5)
                  ? (e.type = e.type.slice(5))
                  : e.removeAttribute("type"),
                e
              );
            }
            function ze(e, t) {
              var n, r, i, o, s, a;
              if (1 === t.nodeType) {
                if (K.hasData(e) && (a = K.get(e).events))
                  for (i in (K.remove(t, "handle events"), a))
                    for (n = 0, r = a[i].length; n < r; n++)
                      S.event.add(t, i, a[i][n]);
                J.hasData(e) &&
                  ((o = J.access(e)), (s = S.extend({}, o)), J.set(t, s));
              }
            }
            function Pe(e, t) {
              var n = t.nodeName.toLowerCase();
              "input" === n && me.test(e.type)
                ? (t.checked = e.checked)
                : ("input" !== n && "textarea" !== n) ||
                  (t.defaultValue = e.defaultValue);
            }
            function De(e, t, n, r) {
              t = l(t);
              var i,
                o,
                s,
                a,
                c,
                u,
                d = 0,
                h = e.length,
                f = h - 1,
                p = t[0],
                m = g(p);
              if (m || (h > 1 && "string" == typeof p && !v.checkClone && Oe.test(p)))
                return e.each(function (i) {
                  var o = e.eq(i);
                  m && (t[0] = p.call(this, i, o.html())), De(o, t, n, r);
                });
              if (
                h &&
                ((o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild),
                1 === i.childNodes.length && (i = o),
                o || r)
              ) {
                for (a = (s = S.map(be(i, "script"), Me)).length; d < h; d++)
                  (c = i),
                    d !== f &&
                      ((c = S.clone(c, !0, !0)), a && S.merge(s, be(c, "script"))),
                    n.call(e[d], c, d);
                if (a)
                  for (
                    u = s[s.length - 1].ownerDocument, S.map(s, Ne), d = 0;
                    d < a;
                    d++
                  )
                    (c = s[d]),
                      ge.test(c.type || "") &&
                        !K.access(c, "globalEval") &&
                        S.contains(u, c) &&
                        (c.src && "module" !== (c.type || "").toLowerCase()
                          ? S._evalUrl &&
                            !c.noModule &&
                            S._evalUrl(
                              c.src,
                              { nonce: c.nonce || c.getAttribute("nonce") },
                              u
                            )
                          : x(c.textContent.replace(Le, ""), c, u));
              }
              return e;
            }
            function qe(e, t, n) {
              for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || S.cleanData(be(r)),
                  r.parentNode &&
                    (n && se(r) && we(be(r, "script")), r.parentNode.removeChild(r));
              return e;
            }
            S.extend({
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
                    S.isXMLDoc(e)
                  )
                )
                  for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++)
                    Pe(o[r], s[r]);
                if (t)
                  if (n)
                    for (
                      o = o || be(e), s = s || be(a), r = 0, i = o.length;
                      r < i;
                      r++
                    )
                      ze(o[r], s[r]);
                  else ze(e, a);
                return (
                  (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
                );
              },
              cleanData: function (e) {
                for (
                  var t, n, r, i = S.event.special, o = 0;
                  void 0 !== (n = e[o]);
                  o++
                )
                  if (Q(n)) {
                    if ((t = n[K.expando])) {
                      if (t.events)
                        for (r in t.events)
                          i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                      n[K.expando] = void 0;
                    }
                    n[J.expando] && (n[J.expando] = void 0);
                  }
              },
            }),
              S.fn.extend({
                detach: function (e) {
                  return qe(this, e, !0);
                },
                remove: function (e) {
                  return qe(this, e);
                },
                text: function (e) {
                  return W(
                    this,
                    function (e) {
                      return void 0 === e
                        ? S.text(this)
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
                  return De(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      je(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return De(this, arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = je(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return De(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return De(this, arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (S.cleanData(be(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return S.clone(this, e, t);
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
                        !$e.test(e) &&
                        !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                      ) {
                        e = S.htmlPrefilter(e);
                        try {
                          for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (S.cleanData(be(t, !1)), (t.innerHTML = e));
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
                  return De(
                    this,
                    arguments,
                    function (t) {
                      var n = this.parentNode;
                      S.inArray(this, e) < 0 &&
                        (S.cleanData(be(this)), n && n.replaceChild(t, this));
                    },
                    e
                  );
                },
              }),
              S.each(
                {
                  appendTo: "append",
                  prependTo: "prepend",
                  insertBefore: "before",
                  insertAfter: "after",
                  replaceAll: "replaceWith",
                },
                function (e, t) {
                  S.fn[e] = function (e) {
                    for (
                      var n, r = [], i = S(e), o = i.length - 1, s = 0;
                      s <= o;
                      s++
                    )
                      (n = s === o ? this : this.clone(!0)),
                        S(i[s])[t](n),
                        c.apply(r, n.get());
                    return this.pushStack(r);
                  };
                }
              );
            var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
              Be = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = n), t.getComputedStyle(e);
              },
              Re = function (e, t, n) {
                var r,
                  i,
                  o = {};
                for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                return r;
              },
              He = new RegExp(ie.join("|"), "i");
            function Ie(e, t, n) {
              var r,
                i,
                o,
                s,
                a = e.style;
              return (
                (n = n || Be(e)) &&
                  ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                    se(e) ||
                    (s = S.style(e, t)),
                  !v.pixelBoxStyles() &&
                    Fe.test(s) &&
                    He.test(t) &&
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
                S.extend(v, {
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
            var Ue = ["Webkit", "Moz", "ms"],
              Ve = b.createElement("div").style,
              Ge = {};
            function Xe(e) {
              var t = S.cssProps[e] || Ge[e];
              return (
                t ||
                (e in Ve
                  ? e
                  : (Ge[e] =
                      (function (e) {
                        for (
                          var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                          n--;
      
                        )
                          if ((e = Ue[n] + t) in Ve) return e;
                      })(e) || e))
              );
            }
            var Qe = /^(none|table(?!-c[ea]).+)/,
              Ye = /^--/,
              Ke = { position: "absolute", visibility: "hidden", display: "block" },
              Je = { letterSpacing: "0", fontWeight: "400" };
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
                "margin" === n && (l += S.css(e, n + ie[s], !0, i)),
                  r
                    ? ("content" === n && (l -= S.css(e, "padding" + ie[s], !0, i)),
                      "margin" !== n &&
                        (l -= S.css(e, "border" + ie[s] + "Width", !0, i)))
                    : ((l += S.css(e, "padding" + ie[s], !0, i)),
                      "padding" !== n
                        ? (l += S.css(e, "border" + ie[s] + "Width", !0, i))
                        : (a += S.css(e, "border" + ie[s] + "Width", !0, i)));
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
              var r = Be(e),
                i =
                  (!v.boxSizingReliable() || n) &&
                  "border-box" === S.css(e, "boxSizing", !1, r),
                o = i,
                s = Ie(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
              if (Fe.test(s)) {
                if (!n) return s;
                s = "auto";
              }
              return (
                ((!v.boxSizingReliable() && i) ||
                  (!v.reliableTrDimensions() && $(e, "tr")) ||
                  "auto" === s ||
                  (!parseFloat(s) && "inline" === S.css(e, "display", !1, r))) &&
                  e.getClientRects().length &&
                  ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
                  (o = a in e) && (s = e[a])),
                (s = parseFloat(s) || 0) +
                  et(e, t, n || (i ? "border" : "content"), o, r, s) +
                  "px"
              );
            }
            function nt(e, t, n, r, i) {
              return new nt.prototype.init(e, t, n, r, i);
            }
            S.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = Ie(e, "opacity");
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
                    a = X(t),
                    l = Ye.test(t),
                    c = e.style;
                  if (
                    (l || (t = Xe(a)),
                    (s = S.cssHooks[t] || S.cssHooks[a]),
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
                        (n += (i && i[3]) || (S.cssNumber[a] ? "" : "px")),
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
                  a = X(t);
                return (
                  Ye.test(t) || (t = Xe(a)),
                  (s = S.cssHooks[t] || S.cssHooks[a]) &&
                    "get" in s &&
                    (i = s.get(e, !0, n)),
                  void 0 === i && (i = Ie(e, t, r)),
                  "normal" === i && t in Je && (i = Je[t]),
                  "" === n || n
                    ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                    : i
                );
              },
            }),
              S.each(["height", "width"], function (e, t) {
                S.cssHooks[t] = {
                  get: function (e, n, r) {
                    if (n)
                      return !Qe.test(S.css(e, "display")) ||
                        (e.getClientRects().length && e.getBoundingClientRect().width)
                        ? tt(e, t, r)
                        : Re(e, Ke, function () {
                            return tt(e, t, r);
                          });
                  },
                  set: function (e, n, r) {
                    var i,
                      o = Be(e),
                      s = !v.scrollboxSize() && "absolute" === o.position,
                      a = (s || r) && "border-box" === S.css(e, "boxSizing", !1, o),
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
                        ((e.style[t] = n), (n = S.css(e, t))),
                      Ze(0, n, l)
                    );
                  },
                };
              }),
              (S.cssHooks.marginLeft = We(v.reliableMarginLeft, function (e, t) {
                if (t)
                  return (
                    (parseFloat(Ie(e, "marginLeft")) ||
                      e.getBoundingClientRect().left -
                        Re(e, { marginLeft: 0 }, function () {
                          return e.getBoundingClientRect().left;
                        })) + "px"
                  );
              })),
              S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                (S.cssHooks[e + t] = {
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
                  "margin" !== e && (S.cssHooks[e + t].set = Ze);
              }),
              S.fn.extend({
                css: function (e, t) {
                  return W(
                    this,
                    function (e, t, n) {
                      var r,
                        i,
                        o = {},
                        s = 0;
                      if (Array.isArray(t)) {
                        for (r = Be(e), i = t.length; s < i; s++)
                          o[t[s]] = S.css(e, t[s], !1, r);
                        return o;
                      }
                      return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                  );
                },
              }),
              (S.Tween = nt),
              (nt.prototype = {
                constructor: nt,
                init: function (e, t, n, r, i, o) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? "" : "px"));
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
                          S.easing[this.easing](
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
                      : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                      ? t
                      : 0;
                  },
                  set: function (e) {
                    S.fx.step[e.prop]
                      ? S.fx.step[e.prop](e)
                      : 1 !== e.elem.nodeType ||
                        (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : S.style(e.elem, e.prop, e.now + e.unit);
                  },
                },
              }),
              (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                  },
                }),
              (S.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
              }),
              ((S.fx = nt.prototype.init).step = {});
            var rt,
              it,
              ot = /^(?:toggle|show|hide)$/,
              st = /queueHooks$/;
            function at() {
              it &&
                (!1 === b.hidden && n.requestAnimationFrame
                  ? n.requestAnimationFrame(at)
                  : n.setTimeout(at, S.fx.interval),
                S.fx.tick());
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
                a = S.Deferred().always(function () {
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
                  props: S.extend({}, t),
                  opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    n
                  ),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: rt || lt(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = S.Tween(
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
                      ((i = t[(r = X(n))]),
                      (o = e[n]),
                      Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                      n !== r && ((e[r] = o), delete e[n]),
                      (s = S.cssHooks[r]) && ("expand" in s))
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
                    g(r.stop) &&
                      (S._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                    r
                  );
              return (
                S.map(u, ut, c),
                g(c.opts.start) && c.opts.start.call(e, c),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always),
                S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                c
              );
            }
            (S.Animation = S.extend(dt, {
              tweeners: {
                "*": [
                  function (e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, re.exec(t), n), n;
                  },
                ],
              },
              tweener: function (e, t) {
                g(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
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
                    h = this,
                    f = {},
                    p = e.style,
                    m = e.nodeType && le(e),
                    v = K.get(e, "fxshow");
                  for (r in (n.queue ||
                    (null == (s = S._queueHooks(e, "fx")).unqueued &&
                      ((s.unqueued = 0),
                      (a = s.empty.fire),
                      (s.empty.fire = function () {
                        s.unqueued || a();
                      })),
                    s.unqueued++,
                    h.always(function () {
                      h.always(function () {
                        s.unqueued--, S.queue(e, "fx").length || s.empty.fire();
                      });
                    })),
                  t))
                    if (((i = t[r]), ot.test(i))) {
                      if (
                        (delete t[r],
                        (o = o || "toggle" === i),
                        i === (m ? "hide" : "show"))
                      ) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        m = !0;
                      }
                      f[r] = (v && v[r]) || S.style(e, r);
                    }
                  if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                    for (r in (d &&
                      1 === e.nodeType &&
                      ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                      null == (c = v && v.display) && (c = K.get(e, "display")),
                      "none" === (u = S.css(e, "display")) &&
                        (c
                          ? (u = c)
                          : (he([e], !0),
                            (c = e.style.display || c),
                            (u = S.css(e, "display")),
                            he([e]))),
                      ("inline" === u || ("inline-block" === u && null != c)) &&
                        "none" === S.css(e, "float") &&
                        (l ||
                          (h.done(function () {
                            p.display = c;
                          }),
                          null == c &&
                            ((u = p.display), (c = "none" === u ? "" : u))),
                        (p.display = "inline-block"))),
                    n.overflow &&
                      ((p.overflow = "hidden"),
                      h.always(function () {
                        (p.overflow = n.overflow[0]),
                          (p.overflowX = n.overflow[1]),
                          (p.overflowY = n.overflow[2]);
                      })),
                    (l = !1),
                    f))
                      l ||
                        (v
                          ? "hidden" in v && (m = v.hidden)
                          : (v = K.access(e, "fxshow", { display: c })),
                        o && (v.hidden = !m),
                        m && he([e], !0),
                        h.done(function () {
                          for (r in (m || he([e]), K.remove(e, "fxshow"), f))
                            S.style(e, r, f[r]);
                        })),
                        (l = ut(m ? v[r] : 0, r, h)),
                        r in v ||
                          ((v[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
                },
              ],
              prefilter: function (e, t) {
                t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
              },
            })),
              (S.speed = function (e, t, n) {
                var r =
                  e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                        complete: n || (!n && t) || (g(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !g(t) && t),
                      };
                return (
                  S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in S.fx.speeds
                        ? (r.duration = S.fx.speeds[r.duration])
                        : (r.duration = S.fx.speeds._default)),
                  (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              S.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(le)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var i = S.isEmptyObject(e),
                    o = S.speed(t, n, r),
                    s = function () {
                      var t = dt(this, S.extend({}, e), o);
                      (i || K.get(this, "finish")) && t.stop(!0);
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
                        o = S.timers,
                        s = K.get(this);
                      if (i) s[i] && s[i].stop && r(s[i]);
                      else for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
                      for (i = o.length; i--; )
                        o[i].elem !== this ||
                          (null != e && o[i].queue !== e) ||
                          (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                      (!t && n) || S.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = K.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = S.timers,
                        s = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          S.queue(this, e, []),
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
              S.each(["toggle", "show", "hide"], function (e, t) {
                var n = S.fn[t];
                S.fn[t] = function (e, r, i) {
                  return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ct(t, !0), e, r, i);
                };
              }),
              S.each(
                {
                  slideDown: ct("show"),
                  slideUp: ct("hide"),
                  slideToggle: ct("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" },
                },
                function (e, t) {
                  S.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                }
              ),
              (S.timers = []),
              (S.fx.tick = function () {
                var e,
                  t = 0,
                  n = S.timers;
                for (rt = Date.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || S.fx.stop(), (rt = void 0);
              }),
              (S.fx.timer = function (e) {
                S.timers.push(e), S.fx.start();
              }),
              (S.fx.interval = 13),
              (S.fx.start = function () {
                it || ((it = !0), at());
              }),
              (S.fx.stop = function () {
                it = null;
              }),
              (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (S.fn.delay = function (e, t) {
                return (
                  (e = (S.fx && S.fx.speeds[e]) || e),
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
            var ht,
              ft = S.expr.attrHandle;
            S.fn.extend({
              attr: function (e, t) {
                return W(this, S.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  S.removeAttr(this, e);
                });
              },
            }),
              S.extend({
                attr: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                      ? S.prop(e, t, n)
                      : ((1 === o && S.isXMLDoc(e)) ||
                          (i =
                            S.attrHooks[t.toLowerCase()] ||
                            (S.expr.match.bool.test(t) ? ht : void 0)),
                        void 0 !== n
                          ? null === n
                            ? void S.removeAttr(e, t)
                            : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : (e.setAttribute(t, n + ""), n)
                          : i && "get" in i && null !== (r = i.get(e, t))
                          ? r
                          : null == (r = S.find.attr(e, t))
                          ? void 0
                          : r);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (!v.radioValue && "radio" === t && $(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                    },
                  },
                },
                removeAttr: function (e, t) {
                  var n,
                    r = 0,
                    i = t && t.match(D);
                  if (i && 1 === e.nodeType)
                    for (; (n = i[r++]); ) e.removeAttribute(n);
                },
              }),
              (ht = {
                set: function (e, t, n) {
                  return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
              }),
              S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = ft[t] || S.find.attr;
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
            var pt = /^(?:input|select|textarea|button)$/i,
              mt = /^(?:a|area)$/i;
            function vt(e) {
              return (e.match(D) || []).join(" ");
            }
            function gt(e) {
              return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function yt(e) {
              return Array.isArray(e)
                ? e
                : ("string" == typeof e && e.match(D)) || [];
            }
            S.fn.extend({
              prop: function (e, t) {
                return W(this, S.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[S.propFix[e] || e];
                });
              },
            }),
              S.extend({
                prop: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return (
                      (1 === o && S.isXMLDoc(e)) ||
                        ((t = S.propFix[t] || t), (i = S.propHooks[t])),
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
                      var t = S.find.attr(e, "tabindex");
                      return t
                        ? parseInt(t, 10)
                        : pt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                    },
                  },
                },
                propFix: { for: "htmlFor", class: "className" },
              }),
              v.optSelected ||
                (S.propHooks.selected = {
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
              S.each(
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
                  S.propFix[this.toLowerCase()] = this;
                }
              ),
              S.fn.extend({
                addClass: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    l = 0;
                  if (g(e))
                    return this.each(function (t) {
                      S(this).addClass(e.call(this, t, gt(this)));
                    });
                  if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                      if (
                        ((i = gt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))
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
                  if (g(e))
                    return this.each(function (t) {
                      S(this).removeClass(e.call(this, t, gt(this)));
                    });
                  if (!arguments.length) return this.attr("class", "");
                  if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                      if (
                        ((i = gt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))
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
                    : g(e)
                    ? this.each(function (n) {
                        S(this).toggleClass(e.call(this, n, gt(this), t), t);
                      })
                    : this.each(function () {
                        var t, i, o, s;
                        if (r)
                          for (i = 0, o = S(this), s = yt(e); (t = s[i++]); )
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                          (void 0 !== e && "boolean" !== n) ||
                            ((t = gt(this)) && K.set(this, "__className__", t),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                t || !1 === e
                                  ? ""
                                  : K.get(this, "__className__") || ""
                              ));
                      });
                },
                hasClass: function (e) {
                  var t,
                    n,
                    r = 0;
                  for (t = " " + e + " "; (n = this[r++]); )
                    if (1 === n.nodeType && (" " + vt(gt(n)) + " ").indexOf(t) > -1)
                      return !0;
                  return !1;
                },
              });
            var bt = /\r/g;
            S.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  i = this[0];
                return arguments.length
                  ? ((r = g(e)),
                    this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                        (null == (i = r ? e.call(this, n, S(this).val()) : e)
                          ? (i = "")
                          : "number" == typeof i
                          ? (i += "")
                          : Array.isArray(i) &&
                            (i = S.map(i, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t =
                          S.valHooks[this.type] ||
                          S.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, i, "value")) ||
                          (this.value = i));
                    }))
                  : i
                  ? (t =
                      S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
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
              S.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = S.find.attr(e, "value");
                      return null != t ? t : vt(S.text(e));
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
                          (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))
                        ) {
                          if (((t = S(n).val()), s)) return t;
                          a.push(t);
                        }
                      return a;
                    },
                    set: function (e, t) {
                      for (
                        var n, r, i = e.options, o = S.makeArray(t), s = i.length;
                        s--;
      
                      )
                        ((r = i[s]).selected =
                          S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                      return n || (e.selectedIndex = -1), o;
                    },
                  },
                },
              }),
              S.each(["radio", "checkbox"], function () {
                (S.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t))
                      return (e.checked = S.inArray(S(e).val(), t) > -1);
                  },
                }),
                  v.checkOn ||
                    (S.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              (v.focusin = "onfocusin" in n);
            var wt = /^(?:focusinfocus|focusoutblur)$/,
              xt = function (e) {
                e.stopPropagation();
              };
            S.extend(S.event, {
              trigger: function (e, t, r, i) {
                var o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  h,
                  p = [r || b],
                  m = f.call(e, "type") ? e.type : e,
                  v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((s = h = a = r = r || b),
                  3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !wt.test(m + S.event.triggered) &&
                    (m.indexOf(".") > -1 &&
                      ((v = m.split(".")), (m = v.shift()), v.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    ((e = e[S.expando]
                      ? e
                      : new S.Event(m, "object" == typeof e && e)).isTrigger = i
                      ? 2
                      : 3),
                    (e.namespace = v.join(".")),
                    (e.rnamespace = e.namespace
                      ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = r),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (d = S.event.special[m] || {}),
                    i || !d.trigger || !1 !== d.trigger.apply(r, t)))
                ) {
                  if (!i && !d.noBubble && !y(r)) {
                    for (
                      l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
                      s;
                      s = s.parentNode
                    )
                      p.push(s), (a = s);
                    a === (r.ownerDocument || b) &&
                      p.push(a.defaultView || a.parentWindow || n);
                  }
                  for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                    (h = s),
                      (e.type = o > 1 ? l : d.bindType || m),
                      (u =
                        (K.get(s, "events") || Object.create(null))[e.type] &&
                        K.get(s, "handle")) && u.apply(s, t),
                      (u = c && s[c]) &&
                        u.apply &&
                        Q(s) &&
                        ((e.result = u.apply(s, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = m),
                    i ||
                      e.isDefaultPrevented() ||
                      (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                      !Q(r) ||
                      (c &&
                        g(r[m]) &&
                        !y(r) &&
                        ((a = r[c]) && (r[c] = null),
                        (S.event.triggered = m),
                        e.isPropagationStopped() && h.addEventListener(m, xt),
                        r[m](),
                        e.isPropagationStopped() && h.removeEventListener(m, xt),
                        (S.event.triggered = void 0),
                        a && (r[c] = a))),
                    e.result
                  );
                }
              },
              simulate: function (e, t, n) {
                var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
                S.event.trigger(r, null, t);
              },
            }),
              S.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    S.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return S.event.trigger(e, t, n, !0);
                },
              }),
              v.focusin ||
                S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                    S.event.simulate(t, e.target, S.event.fix(e));
                  };
                  S.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this.document || this,
                        i = K.access(r, t);
                      i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this.document || this,
                        i = K.access(r, t) - 1;
                      i
                        ? K.access(r, t, i)
                        : (r.removeEventListener(e, n, !0), K.remove(r, t));
                    },
                  };
                });
            var _t = n.location,
              St = { guid: Date.now() },
              Tt = /\?/;
            S.parseXML = function (e) {
              var t, r;
              if (!e || "string" != typeof e) return null;
              try {
                t = new n.DOMParser().parseFromString(e, "text/xml");
              } catch (e) {}
              return (
                (r = t && t.getElementsByTagName("parsererror")[0]),
                (t && !r) ||
                  S.error(
                    "Invalid XML: " +
                      (r
                        ? S.map(r.childNodes, function (e) {
                            return e.textContent;
                          }).join("\n")
                        : e)
                  ),
                t
              );
            };
            var Et = /\[\]$/,
              At = /\r?\n/g,
              Ct = /^(?:submit|button|image|reset|file)$/i,
              kt = /^(?:input|select|textarea|keygen)/i;
            function $t(e, t, n, r) {
              var i;
              if (Array.isArray(t))
                S.each(t, function (t, i) {
                  n || Et.test(e)
                    ? r(e, i)
                    : $t(
                        e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                        i,
                        n,
                        r
                      );
                });
              else if (n || "object" !== _(t)) r(e, t);
              else for (i in t) $t(e + "[" + i + "]", t[i], n, r);
            }
            (S.param = function (e, t) {
              var n,
                r = [],
                i = function (e, t) {
                  var n = g(t) ? t() : t;
                  r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
                };
              if (null == e) return "";
              if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
                S.each(e, function () {
                  i(this.name, this.value);
                });
              else for (n in e) $t(n, e[n], t, i);
              return r.join("&");
            }),
              S.fn.extend({
                serialize: function () {
                  return S.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !S(this).is(":disabled") &&
                        kt.test(this.nodeName) &&
                        !Ct.test(e) &&
                        (this.checked || !me.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = S(this).val();
                      return null == n
                        ? null
                        : Array.isArray(n)
                        ? S.map(n, function (e) {
                            return { name: t.name, value: e.replace(At, "\r\n") };
                          })
                        : { name: t.name, value: n.replace(At, "\r\n") };
                    })
                    .get();
                },
              });
            var Ot = /%20/g,
              Lt = /#.*$/,
              jt = /([?&])_=[^&]*/,
              Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Nt = /^(?:GET|HEAD)$/,
              zt = /^\/\//,
              Pt = {},
              Dt = {},
              qt = "*/".concat("*"),
              Ft = b.createElement("a");
            function Bt(e) {
              return function (t, n) {
                "string" != typeof t && ((n = t), (t = "*"));
                var r,
                  i = 0,
                  o = t.toLowerCase().match(D) || [];
                if (g(n))
                  for (; (r = o[i++]); )
                    "+" === r[0]
                      ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function Rt(e, t, n, r) {
              var i = {},
                o = e === Dt;
              function s(a) {
                var l;
                return (
                  (i[a] = !0),
                  S.each(e[a] || [], function (e, a) {
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
            function Ht(e, t) {
              var n,
                r,
                i = S.ajaxSettings.flatOptions || {};
              for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
              return r && S.extend(!0, e, r), e;
            }
            (Ft.href = _t.href),
              S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: _t.href,
                  type: "GET",
                  isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                      _t.protocol
                    ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: {
                    "*": qt,
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
                    "text xml": S.parseXML,
                  },
                  flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                  return t ? Ht(Ht(e, S.ajaxSettings), t) : Ht(S.ajaxSettings, e);
                },
                ajaxPrefilter: Bt(Pt),
                ajaxTransport: Bt(Dt),
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
                    h,
                    f = S.ajaxSetup({}, (t = t || {})),
                    p = f.context || f,
                    m = f.context && (p.nodeType || p.jquery) ? S(p) : S.event,
                    v = S.Deferred(),
                    g = S.Callbacks("once memory"),
                    y = f.statusCode || {},
                    w = {},
                    x = {},
                    _ = "canceled",
                    T = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (c) {
                          if (!s)
                            for (s = {}; (t = Mt.exec(o)); )
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
                            ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                            (w[e] = t)),
                          this
                        );
                      },
                      overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (c) T.always(e[T.status]);
                          else for (t in e) y[t] = [y[t], e[t]];
                        return this;
                      },
                      abort: function (e) {
                        var t = e || _;
                        return r && r.abort(t), E(0, t), this;
                      },
                    };
                  if (
                    (v.promise(T),
                    (f.url = ((e || f.url || _t.href) + "").replace(
                      zt,
                      _t.protocol + "//"
                    )),
                    (f.type = t.method || t.type || f.method || f.type),
                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(D) || [
                      "",
                    ]),
                    null == f.crossDomain)
                  ) {
                    l = b.createElement("a");
                    try {
                      (l.href = f.url),
                        (l.href = l.href),
                        (f.crossDomain =
                          Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host);
                    } catch (e) {
                      f.crossDomain = !0;
                    }
                  }
                  if (
                    (f.data &&
                      f.processData &&
                      "string" != typeof f.data &&
                      (f.data = S.param(f.data, f.traditional)),
                    Rt(Pt, f, t, T),
                    c)
                  )
                    return T;
                  for (d in ((u = S.event && f.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                  (f.type = f.type.toUpperCase()),
                  (f.hasContent = !Nt.test(f.type)),
                  (i = f.url.replace(Lt, "")),
                  f.hasContent
                    ? f.data &&
                      f.processData &&
                      0 ===
                        (f.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      (f.data = f.data.replace(Ot, "+"))
                    : ((h = f.url.slice(i.length)),
                      f.data &&
                        (f.processData || "string" == typeof f.data) &&
                        ((i += (Tt.test(i) ? "&" : "?") + f.data), delete f.data),
                      !1 === f.cache &&
                        ((i = i.replace(jt, "$1")),
                        (h = (Tt.test(i) ? "&" : "?") + "_=" + St.guid++ + h)),
                      (f.url = i + h)),
                  f.ifModified &&
                    (S.lastModified[i] &&
                      T.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                    S.etag[i] && T.setRequestHeader("If-None-Match", S.etag[i])),
                  ((f.data && f.hasContent && !1 !== f.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader("Content-Type", f.contentType),
                  T.setRequestHeader(
                    "Accept",
                    f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                      ? f.accepts[f.dataTypes[0]] +
                          ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
                      : f.accepts["*"]
                  ),
                  f.headers))
                    T.setRequestHeader(d, f.headers[d]);
                  if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || c))
                    return T.abort();
                  if (
                    ((_ = "abort"),
                    g.add(f.complete),
                    T.done(f.success),
                    T.fail(f.error),
                    (r = Rt(Dt, f, t, T)))
                  ) {
                    if (((T.readyState = 1), u && m.trigger("ajaxSend", [T, f]), c))
                      return T;
                    f.async &&
                      f.timeout > 0 &&
                      (a = n.setTimeout(function () {
                        T.abort("timeout");
                      }, f.timeout));
                    try {
                      (c = !1), r.send(w, E);
                    } catch (e) {
                      if (c) throw e;
                      E(-1, e);
                    }
                  } else E(-1, "No Transport");
                  function E(e, t, s, l) {
                    var d,
                      h,
                      b,
                      w,
                      x,
                      _ = t;
                    c ||
                      ((c = !0),
                      a && n.clearTimeout(a),
                      (r = void 0),
                      (o = l || ""),
                      (T.readyState = e > 0 ? 4 : 0),
                      (d = (e >= 200 && e < 300) || 304 === e),
                      s &&
                        (w = (function (e, t, n) {
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
                        })(f, T, s)),
                      !d &&
                        S.inArray("script", f.dataTypes) > -1 &&
                        S.inArray("json", f.dataTypes) < 0 &&
                        (f.converters["text script"] = function () {}),
                      (w = (function (e, t, n, r) {
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
                      })(f, w, T, d)),
                      d
                        ? (f.ifModified &&
                            ((x = T.getResponseHeader("Last-Modified")) &&
                              (S.lastModified[i] = x),
                            (x = T.getResponseHeader("etag")) && (S.etag[i] = x)),
                          204 === e || "HEAD" === f.type
                            ? (_ = "nocontent")
                            : 304 === e
                            ? (_ = "notmodified")
                            : ((_ = w.state), (h = w.data), (d = !(b = w.error))))
                        : ((b = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                      (T.status = e),
                      (T.statusText = (t || _) + ""),
                      d ? v.resolveWith(p, [h, _, T]) : v.rejectWith(p, [T, _, b]),
                      T.statusCode(y),
                      (y = void 0),
                      u &&
                        m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? h : b]),
                      g.fireWith(p, [T, _]),
                      u &&
                        (m.trigger("ajaxComplete", [T, f]),
                        --S.active || S.event.trigger("ajaxStop")));
                  }
                  return T;
                },
                getJSON: function (e, t, n) {
                  return S.get(e, t, n, "json");
                },
                getScript: function (e, t) {
                  return S.get(e, void 0, t, "script");
                },
              }),
              S.each(["get", "post"], function (e, t) {
                S[t] = function (e, n, r, i) {
                  return (
                    g(n) && ((i = i || r), (r = n), (n = void 0)),
                    S.ajax(
                      S.extend(
                        { url: e, type: t, dataType: i, data: n, success: r },
                        S.isPlainObject(e) && e
                      )
                    )
                  );
                };
              }),
              S.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers)
                  "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
              }),
              (S._evalUrl = function (e, t, n) {
                return S.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { "text script": function () {} },
                  dataFilter: function (e) {
                    S.globalEval(e, t, n);
                  },
                });
              }),
              S.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return (
                    this[0] &&
                      (g(e) && (e = e.call(this[0])),
                      (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                  return g(e)
                    ? this.each(function (t) {
                        S(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = S(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = g(e);
                  return this.each(function (n) {
                    S(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function (e) {
                  return (
                    this.parent(e)
                      .not("body")
                      .each(function () {
                        S(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                },
              }),
              (S.expr.pseudos.hidden = function (e) {
                return !S.expr.pseudos.visible(e);
              }),
              (S.expr.pseudos.visible = function (e) {
                return !!(
                  e.offsetWidth ||
                  e.offsetHeight ||
                  e.getClientRects().length
                );
              }),
              (S.ajaxSettings.xhr = function () {
                try {
                  return new n.XMLHttpRequest();
                } catch (e) {}
              });
            var It = { 0: 200, 1223: 204 },
              Wt = S.ajaxSettings.xhr();
            (v.cors = !!Wt && "withCredentials" in Wt),
              (v.ajax = Wt = !!Wt),
              S.ajaxTransport(function (e) {
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
                                  It[a.status] || a.status,
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
              S.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              S.ajaxSetup({
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  "text script": function (e) {
                    return S.globalEval(e), e;
                  },
                },
              }),
              S.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = "GET");
              }),
              S.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs)
                  return {
                    send: function (r, i) {
                      (t = S("<script>")
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
            var Ut,
              Vt = [],
              Gt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = Vt.pop() || S.expando + "_" + St.guid++;
                return (this[e] = !0), e;
              },
            }),
              S.ajaxPrefilter("json jsonp", function (e, t, r) {
                var i,
                  o,
                  s,
                  a =
                    !1 !== e.jsonp &&
                    (Gt.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        0 ===
                          (e.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                          ) &&
                        Gt.test(e.data) &&
                        "data");
                if (a || "jsonp" === e.dataTypes[0])
                  return (
                    (i = e.jsonpCallback =
                      g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(Gt, "$1" + i))
                      : !1 !== e.jsonp &&
                        (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                      return s || S.error(i + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = n[i]),
                    (n[i] = function () {
                      s = arguments;
                    }),
                    r.always(function () {
                      void 0 === o ? S(n).removeProp(i) : (n[i] = o),
                        e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                        s && g(o) && o(s[0]),
                        (s = o = void 0);
                    }),
                    "script"
                  );
              }),
              (v.createHTMLDocument =
                (((Ut = b.implementation.createHTMLDocument("").body).innerHTML =
                  "<form></form><form></form>"),
                2 === Ut.childNodes.length)),
              (S.parseHTML = function (e, t, n) {
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
                    (i = O.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = _e([e], t, o)),
                        o && o.length && S(o).remove(),
                        S.merge([], i.childNodes)));
                var r, i, o;
              }),
              (S.fn.load = function (e, t, n) {
                var r,
                  i,
                  o,
                  s = this,
                  a = e.indexOf(" ");
                return (
                  a > -1 && ((r = vt(e.slice(a))), (e = e.slice(0, a))),
                  g(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                  s.length > 0 &&
                    S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                      .done(function (e) {
                        (o = arguments),
                          s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
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
              (S.expr.pseudos.animated = function (e) {
                return S.grep(S.timers, function (t) {
                  return e === t.elem;
                }).length;
              }),
              (S.offset = {
                setOffset: function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    l,
                    c = S.css(e, "position"),
                    u = S(e),
                    d = {};
                  "static" === c && (e.style.position = "relative"),
                    (a = u.offset()),
                    (o = S.css(e, "top")),
                    (l = S.css(e, "left")),
                    ("absolute" === c || "fixed" === c) &&
                    (o + l).indexOf("auto") > -1
                      ? ((s = (r = u.position()).top), (i = r.left))
                      : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                    g(t) && (t = t.call(e, n, S.extend({}, a))),
                    null != t.top && (d.top = t.top - a.top + s),
                    null != t.left && (d.left = t.left - a.left + i),
                    "using" in t ? t.using.call(e, d) : u.css(d);
                },
              }),
              S.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          S.offset.setOffset(this, e, t);
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
                    if ("fixed" === S.css(r, "position"))
                      t = r.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(),
                          n = r.ownerDocument,
                          e = r.offsetParent || n.documentElement;
                        e &&
                        (e === n.body || e === n.documentElement) &&
                        "static" === S.css(e, "position");
      
                      )
                        e = e.parentNode;
                      e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                        (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                      top: t.top - i.top - S.css(r, "marginTop", !0),
                      left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent;
                      e && "static" === S.css(e, "position");
      
                    )
                      e = e.offsetParent;
                    return e || oe;
                  });
                },
              }),
              S.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, t) {
                  var n = "pageYOffset" === t;
                  S.fn[e] = function (r) {
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
              S.each(["top", "left"], function (e, t) {
                S.cssHooks[t] = We(v.pixelPosition, function (e, n) {
                  if (n)
                    return (n = Ie(e, t)), Fe.test(n) ? S(e).position()[t] + "px" : n;
                });
              }),
              S.each({ Height: "height", Width: "width" }, function (e, t) {
                S.each(
                  { padding: "inner" + e, content: t, "": "outer" + e },
                  function (n, r) {
                    S.fn[r] = function (i, o) {
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
                            ? S.css(t, n, a)
                            : S.style(t, n, i, a);
                        },
                        t,
                        s ? i : void 0,
                        s
                      );
                    };
                  }
                );
              }),
              S.each(
                [
                  "ajaxStart",
                  "ajaxStop",
                  "ajaxComplete",
                  "ajaxError",
                  "ajaxSuccess",
                  "ajaxSend",
                ],
                function (e, t) {
                  S.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              S.fn.extend({
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
              S.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                  " "
                ),
                function (e, t) {
                  S.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                }
              );
            var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (S.proxy = function (e, t) {
              var n, r, i;
              if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                  (r = a.call(arguments, 2)),
                  ((i = function () {
                    return e.apply(t || this, r.concat(a.call(arguments)));
                  }).guid = e.guid =
                    e.guid || S.guid++),
                  i
                );
            }),
              (S.holdReady = function (e) {
                e ? S.readyWait++ : S.ready(!0);
              }),
              (S.isArray = Array.isArray),
              (S.parseJSON = JSON.parse),
              (S.nodeName = $),
              (S.isFunction = g),
              (S.isWindow = y),
              (S.camelCase = X),
              (S.type = _),
              (S.now = Date.now),
              (S.isNumeric = function (e) {
                var t = S.type(e);
                return (
                  ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                );
              }),
              (S.trim = function (e) {
                return null == e ? "" : (e + "").replace(Xt, "");
              }),
              void 0 ===
                (r = function () {
                  return S;
                }.apply(t, [])) || (e.exports = r);
            var Qt = n.jQuery,
              Yt = n.$;
            return (
              (S.noConflict = function (e) {
                return (
                  n.$ === S && (n.$ = Yt), e && n.jQuery === S && (n.jQuery = Qt), S
                );
              }),
              void 0 === i && (n.jQuery = n.$ = S),
              S
            );
          });
        },
        22: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return d;
          });
          var r = n(43),
            i = n(27),
            o = n(42),
            s = n(33);
          function a(e) {
            return 0 === e.length
              ? s.a
              : 1 === e.length
              ? e[0]
              : function (t) {
                  return e.reduce(function (e, t) {
                    return t(e);
                  }, t);
                };
          }
          var l = n(25),
            c = n(9),
            u = n(32),
            d = (function () {
              function e(e) {
                e && (this._subscribe = e);
              }
              return (
                (e.prototype.lift = function (t) {
                  var n = new e();
                  return (n.source = this), (n.operator = t), n;
                }),
                (e.prototype.subscribe = function (e, t, n) {
                  var o,
                    s = this,
                    a =
                      ((o = e) && o instanceof r.b) ||
                      ((function (e) {
                        return (
                          e &&
                          Object(c.a)(e.next) &&
                          Object(c.a)(e.error) &&
                          Object(c.a)(e.complete)
                        );
                      })(o) &&
                        Object(i.c)(o))
                        ? e
                        : new r.a(e, t, n);
                  return (
                    Object(u.b)(function () {
                      var e = s,
                        t = e.operator,
                        n = e.source;
                      a.add(
                        t ? t.call(a, n) : n ? s._subscribe(a) : s._trySubscribe(a)
                      );
                    }),
                    a
                  );
                }),
                (e.prototype._trySubscribe = function (e) {
                  try {
                    return this._subscribe(e);
                  } catch (t) {
                    e.error(t);
                  }
                }),
                (e.prototype.forEach = function (e, t) {
                  var n = this;
                  return new (t = h(t))(function (t, i) {
                    var o = new r.a({
                      next: function (t) {
                        try {
                          e(t);
                        } catch (e) {
                          i(e), o.unsubscribe();
                        }
                      },
                      error: i,
                      complete: t,
                    });
                    n.subscribe(o);
                  });
                }),
                (e.prototype._subscribe = function (e) {
                  var t;
                  return null === (t = this.source) || void 0 === t
                    ? void 0
                    : t.subscribe(e);
                }),
                (e.prototype[o.a] = function () {
                  return this;
                }),
                (e.prototype.pipe = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return a(e)(this);
                }),
                (e.prototype.toPromise = function (e) {
                  var t = this;
                  return new (e = h(e))(function (e, n) {
                    var r;
                    t.subscribe(
                      function (e) {
                        return (r = e);
                      },
                      function (e) {
                        return n(e);
                      },
                      function () {
                        return e(r);
                      }
                    );
                  });
                }),
                (e.create = function (t) {
                  return new e(t);
                }),
                e
              );
            })();
          function h(e) {
            var t;
            return null !== (t = null != e ? e : l.a.Promise) && void 0 !== t
              ? t
              : Promise;
          }
        },
        25: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return r;
          });
          var r = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
          };
        },
        27: function (e, t, n) {
          "use strict";
          n.d(t, "b", function () {
            return l;
          }),
            n.d(t, "a", function () {
              return c;
            }),
            n.d(t, "c", function () {
              return u;
            });
          var r = n(10),
            i = n(9),
            o = n(50),
            s = Object(o.a)(function (e) {
              return function (t) {
                e(this),
                  (this.message = t
                    ? t.length +
                      " errors occurred during unsubscription:\n" +
                      t
                        .map(function (e, t) {
                          return t + 1 + ") " + e.toString();
                        })
                        .join("\n  ")
                    : ""),
                  (this.name = "UnsubscriptionError"),
                  (this.errors = t);
              };
            }),
            a = n(47),
            l = (function () {
              function e(e) {
                (this.initialTeardown = e),
                  (this.closed = !1),
                  (this._parentage = null),
                  (this._finalizers = null);
              }
              var t;
              return (
                (e.prototype.unsubscribe = function () {
                  var e, t, n, o, a;
                  if (!this.closed) {
                    this.closed = !0;
                    var l = this._parentage;
                    if (l)
                      if (((this._parentage = null), Array.isArray(l)))
                        try {
                          for (
                            var c = Object(r.i)(l), u = c.next();
                            !u.done;
                            u = c.next()
                          ) {
                            u.value.remove(this);
                          }
                        } catch (t) {
                          e = { error: t };
                        } finally {
                          try {
                            u && !u.done && (t = c.return) && t.call(c);
                          } finally {
                            if (e) throw e.error;
                          }
                        }
                      else l.remove(this);
                    var h = this.initialTeardown;
                    if (Object(i.a)(h))
                      try {
                        h();
                      } catch (e) {
                        a = e instanceof s ? e.errors : [e];
                      }
                    var f = this._finalizers;
                    if (f) {
                      this._finalizers = null;
                      try {
                        for (
                          var p = Object(r.i)(f), m = p.next();
                          !m.done;
                          m = p.next()
                        ) {
                          var v = m.value;
                          try {
                            d(v);
                          } catch (e) {
                            (a = null != a ? a : []),
                              e instanceof s
                                ? (a = Object(r.h)(
                                    Object(r.h)([], Object(r.g)(a)),
                                    Object(r.g)(e.errors)
                                  ))
                                : a.push(e);
                          }
                        }
                      } catch (e) {
                        n = { error: e };
                      } finally {
                        try {
                          m && !m.done && (o = p.return) && o.call(p);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    }
                    if (a) throw new s(a);
                  }
                }),
                (e.prototype.add = function (t) {
                  var n;
                  if (t && t !== this)
                    if (this.closed) d(t);
                    else {
                      if (t instanceof e) {
                        if (t.closed || t._hasParent(this)) return;
                        t._addParent(this);
                      }
                      (this._finalizers =
                        null !== (n = this._finalizers) && void 0 !== n
                          ? n
                          : []).push(t);
                    }
                }),
                (e.prototype._hasParent = function (e) {
                  var t = this._parentage;
                  return t === e || (Array.isArray(t) && t.includes(e));
                }),
                (e.prototype._addParent = function (e) {
                  var t = this._parentage;
                  this._parentage = Array.isArray(t)
                    ? (t.push(e), t)
                    : t
                    ? [t, e]
                    : e;
                }),
                (e.prototype._removeParent = function (e) {
                  var t = this._parentage;
                  t === e
                    ? (this._parentage = null)
                    : Array.isArray(t) && Object(a.a)(t, e);
                }),
                (e.prototype.remove = function (t) {
                  var n = this._finalizers;
                  n && Object(a.a)(n, t), t instanceof e && t._removeParent(this);
                }),
                (e.EMPTY = (((t = new e()).closed = !0), t)),
                e
              );
            })(),
            c = l.EMPTY;
          function u(e) {
            return (
              e instanceof l ||
              (e &&
                "closed" in e &&
                Object(i.a)(e.remove) &&
                Object(i.a)(e.add) &&
                Object(i.a)(e.unsubscribe))
            );
          }
          function d(e) {
            Object(i.a)(e) ? e() : e.unsubscribe();
          }
        },
        282: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, "default", function () {
              return Se;
            });
          var r = n(0),
            i = n(16),
            o = n(62);
          class s extends r.a {
            firstUpdated() {
              const e = o.a.getParser(window.navigator.userAgent).parsedResult,
                t = document.getElementById("siteMenu"),
                n = document.getElementById("menu-open"),
                r = document.getElementById("site-menu__head__close"),
                i = document.querySelector("body"),
                s = document.querySelectorAll(
                  "#site-menu__head__close, .mask-overlay"
                ),
               
                a = document.querySelectorAll(
                  ".site-menu__list--first-level > .site-menu__list__item > .link"
                ),
                l = a[a.length - 1],
                c = r,
                u = [c, l];
              
              function d(e) {
                e.preventDefault(),
                  t.classList.contains("nav-visible") ||
                    (t.classList.add("nav-visible"),
                    setTimeout(function () {
                      t.setAttribute("aria-modal", "true"),
                        t.setAttribute("role", "dialog"),
                        t.setAttribute("aria-hidden", "false"),
                        r.focus();
                    }, 500),
                    i.classList.contains("nav-visible") ||
                      i.classList.add("nav-visible")),
                  u.forEach((e, t) => {
                    e.addEventListener("keydown", (t) => {
                      "Tab" === t.key &&
                        (t.shiftKey
                          ? e == c && (t.preventDefault(), l.focus())
                          : e == l && (t.preventDefault(), c.focus()));
                    });
                  });
              }
              n.addEventListener("click", function (e) {
                d(e);
              }),
                s.forEach(function (r) {
                  r.addEventListener("click", function (r) {
                    !(function (r) {
                      var o;
                      r.preventDefault(),
                        null === (o = document.querySelector(".temicaldi-menu")) ||
                          void 0 === o ||
                          o.classList.remove("temicaldi-opened"),
                        t.classList.remove("nav-visible"),
                        t.removeAttribute("aria-modal"),
                        t.removeAttribute("role"),
                        t.setAttribute("aria-hidden", "true"),
                        i.classList.remove("nav-visible"),
                        document
                          .querySelectorAll(".subnav-visible")
                          .forEach(function (e) {
                            e.classList.remove("subnav-visible");
                          }),
                        "Android" !== e.os.name && setTimeout(n.focus(), 300);
                    })(r);
                  });
                }),
                document
                  .querySelectorAll(
                    ".site-menu .site-menu__list__item--has-children > button.link"
                  )
                  .forEach(function (e) {
                    e.addEventListener("click", function (e) {
                      this.parentNode.classList.contains("subnav-visible")
                        ? (this.parentNode.classList.remove("subnav-visible"),
                          t.classList.remove("subnav-visible"),
                          this.setAttribute("aria-expanded", "false"))
                        : (document
                            .querySelectorAll(
                              ".site-menu .site-menu__list__item--has-children > button.link"
                            )
                            .forEach(function (e) {
                              e.parentNode.classList.remove("subnav-visible"),
                                e.setAttribute("aria-expanded", "false");
                            }),
                          t.classList.contains("subnav-visible") ||
                            t.classList.add("subnav-visible"),
                          this.parentNode.classList.add("subnav-visible"),
                          this.setAttribute("aria-expanded", "true"));
                    });
                  }),
                document
                  .querySelectorAll(".site-menu__list__item--back > button.link")
                  .forEach(function (e) {
                    e.addEventListener("click", function (e) {
                      e.preventDefault(),
                        t.classList.remove("subnav-visible"),
                        this.closest(
                          ".site-menu__list__item--has-children"
                        ).classList.remove("subnav-visible"),
                        this.closest(".site-menu__list__item--has-children")
                          .querySelectorAll(".link")
                          .forEach(function (e) {
                            e.setAttribute("tabindex", "-1");
                          });
                    });
                  }),
                window.addEventListener("resize", function () {
                  document.querySelector(".mask-overlay").click();
                }),
                document
                  .querySelectorAll(".site-menu__list__item--has-children")
                  .forEach((e) => {
                    e.addEventListener("mouseover", () => {
                      var e;
                      null === (e = document.querySelector(".temicaldi-menu")) ||
                        void 0 === e ||
                        e.classList.remove("temicaldi-opened");
                    });
                  }),
                document.addEventListener("openMenuEventFromDots", (e) => {
                  var t, n;
                  d(e);
                  const r = null === (t = e.detail) || void 0 === t ? void 0 : t.ref;
                  r &&
                    (null === (n = document.querySelector(r)) ||
                      void 0 === n ||
                      n.classList.add("temicaldi-opened"));
                });
            }
            render() {
              return r.d``;
            }
            createRenderRoot() {
              return this;
            }
          }
          customElements.get("rainews-menu") ||
            customElements.define("rainews-menu", s);
          var a = n(136),
            l = n.n(a),
            c = n(99),
            u = n(8),
            d = n(2),
            h = n.n(d);
          function f() {
            return "rtl" === h()("html").attr("dir");
          }
          function p(e = 6, t) {
            let n = "";
            const r = "0123456789abcdefghijklmnopqrstuvwxyz",
              i = r.length;
            for (let t = 0; t < e; t++) n += r[Math.floor(Math.random() * i)];
            return t ? `${n}-${t}` : n;
          }
          function m(e, t) {
            const n = "complete" === document.readyState,
              r = (n ? "_didLoad" : "load") + ".zf.util.onLoad",
              i = () => e.triggerHandler(r);
            return (
              e && (t && e.one(r, t), n ? setTimeout(i) : h()(window).one("load", i)),
              r
            );
          }
          function v(e, { ignoreLeaveWindow: t = !1, ignoreReappear: n = !1 } = {}) {
            return function (r, ...i) {
              const o = e.bind(this, r, ...i);
              if (null !== r.relatedTarget) return o();
              setTimeout(function () {
                if (!t && document.hasFocus && !document.hasFocus()) return o();
                n ||
                  h()(document).one("mouseenter", function (e) {
                    h()(r.currentTarget).has(e.target).length ||
                      ((r.relatedTarget = e.target), o());
                  });
              }, 0);
            };
          }
          var g = {
            version: "6.7.3",
            _plugins: {},
            _uuids: [],
            plugin: function (e, t) {
              var n = t || y(e),
                r = b(n);
              this._plugins[r] = this[n] = e;
            },
            registerPlugin: function (e, t) {
              var n = t ? b(t) : y(e.constructor).toLowerCase();
              (e.uuid = p(6, n)),
                e.$element.attr("data-" + n) || e.$element.attr("data-" + n, e.uuid),
                e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e),
                e.$element.trigger("init.zf." + n),
                this._uuids.push(e.uuid);
            },
            unregisterPlugin: function (e) {
              var t = b(y(e.$element.data("zfPlugin").constructor));
              for (var n in (this._uuids.splice(this._uuids.indexOf(e.uuid), 1),
              e.$element
                .removeAttr("data-" + t)
                .removeData("zfPlugin")
                .trigger("destroyed.zf." + t),
              e))
                e[n] = null;
            },
            reInit: function (e) {
              var t = e instanceof h.a;
              try {
                if (t)
                  e.each(function () {
                    h()(this).data("zfPlugin")._init();
                  });
                else {
                  var n = this;
                  ({
                    object: function (e) {
                      e.forEach(function (e) {
                        (e = b(e)), h()("[data-" + e + "]").foundation("_init");
                      });
                    },
                    string: function () {
                      (e = b(e)), h()("[data-" + e + "]").foundation("_init");
                    },
                    undefined: function () {
                      this.object(Object.keys(n._plugins));
                    },
                  })[typeof e](e);
                }
              } catch (e) {
                console.error(e);
              } finally {
                return e;
              }
            },
            reflow: function (e, t) {
              void 0 === t
                ? (t = Object.keys(this._plugins))
                : "string" == typeof t && (t = [t]);
              var n = this;
              h.a.each(t, function (t, r) {
                var i = n._plugins[r];
                h()(e)
                  .find("[data-" + r + "]")
                  .addBack("[data-" + r + "]")
                  .filter(function () {
                    return void 0 === h()(this).data("zfPlugin");
                  })
                  .each(function () {
                    var e = h()(this),
                      t = { reflow: !0 };
                    e.attr("data-options") &&
                      e
                        .attr("data-options")
                        .split(";")
                        .forEach(function (e, n) {
                          var r = e.split(":").map(function (e) {
                            return e.trim();
                          });
                          r[0] &&
                            (t[r[0]] = (function (e) {
                              if ("true" === e) return !0;
                              if ("false" === e) return !1;
                              if (!isNaN(1 * e)) return parseFloat(e);
                              return e;
                            })(r[1]));
                        });
                    try {
                      e.data("zfPlugin", new i(h()(this), t));
                    } catch (e) {
                      console.error(e);
                    } finally {
                      return;
                    }
                  });
              });
            },
            getFnName: y,
            addToJquery: function (e) {
              return (
                (e.fn.foundation = function (t) {
                  var n = typeof t,
                    r = e(".no-js");
                  if ((r.length && r.removeClass("no-js"), "undefined" === n))
                    i.a._init(), g.reflow(this);
                  else {
                    if ("string" !== n)
                      throw new TypeError(
                        `We're sorry, ${n} is not a valid parameter. You must use a string representing the method you wish to invoke.`
                      );
                    var o = Array.prototype.slice.call(arguments, 1),
                      s = this.data("zfPlugin");
                    if (void 0 === s || void 0 === s[t])
                      throw new ReferenceError(
                        "We're sorry, '" +
                          t +
                          "' is not an available method for " +
                          (s ? y(s) : "this element") +
                          "."
                      );
                    1 === this.length
                      ? s[t].apply(s, o)
                      : this.each(function (n, r) {
                          s[t].apply(e(r).data("zfPlugin"), o);
                        });
                  }
                  return this;
                }),
                e
              );
            },
          };
          function y(e) {
            if (void 0 === Function.prototype.name) {
              var t = /function\s([^(]{1,})\(/.exec(e.toString());
              return t && t.length > 1 ? t[1].trim() : "";
            }
            return void 0 === e.prototype
              ? e.constructor.name
              : e.prototype.constructor.name;
          }
          function b(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          }
          (g.util = {
            throttle: function (e, t) {
              var n = null;
              return function () {
                var r = this,
                  i = arguments;
                null === n &&
                  (n = setTimeout(function () {
                    e.apply(r, i), (n = null);
                  }, t));
              };
            },
          }),
            (window.Foundation = g),
            (function () {
              (Date.now && window.Date.now) ||
                (window.Date.now = Date.now =
                  function () {
                    return new Date().getTime();
                  });
              for (
                var e = ["webkit", "moz"], t = 0;
                t < e.length && !window.requestAnimationFrame;
                ++t
              ) {
                var n = e[t];
                (window.requestAnimationFrame = window[n + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[n + "CancelAnimationFrame"] ||
                    window[n + "CancelRequestAnimationFrame"]);
              }
              if (
                /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
                !window.requestAnimationFrame ||
                !window.cancelAnimationFrame
              ) {
                var r = 0;
                (window.requestAnimationFrame = function (e) {
                  var t = Date.now(),
                    n = Math.max(r + 16, t);
                  return setTimeout(function () {
                    e((r = n));
                  }, n - t);
                }),
                  (window.cancelAnimationFrame = clearTimeout);
              }
              (window.performance && window.performance.now) ||
                (window.performance = {
                  start: Date.now(),
                  now: function () {
                    return Date.now() - this.start;
                  },
                });
            })(),
            Function.prototype.bind ||
              (Function.prototype.bind = function (e) {
                if ("function" != typeof this)
                  throw new TypeError(
                    "Function.prototype.bind - what is trying to be bound is not callable"
                  );
                var t = Array.prototype.slice.call(arguments, 1),
                  n = this,
                  r = function () {},
                  i = function () {
                    return n.apply(
                      this instanceof r ? this : e,
                      t.concat(Array.prototype.slice.call(arguments))
                    );
                  };
                return (
                  this.prototype && (r.prototype = this.prototype),
                  (i.prototype = new r()),
                  i
                );
              });
          const w = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN",
          };
          var x = {};
          function _(e) {
            return (
              !!e &&
              e
                .find(
                  "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
                )
                .filter(function () {
                  return !(
                    !h()(this).is(":visible") || h()(this).attr("tabindex") < 0
                  );
                })
                .sort(function (e, t) {
                  if (h()(e).attr("tabindex") == h()(t).attr("tabindex")) return 0;
                  let n = parseInt(h()(e).attr("tabindex")),
                    r = parseInt(h()(t).attr("tabindex"));
                  return void 0 === h()(e).attr("tabindex") && r > 0
                    ? 1
                    : void 0 === h()(t).attr("tabindex") && n > 0
                    ? -1
                    : 0 == n && r > 0
                    ? 1
                    : (0 == r && n > 0) || n < r
                    ? -1
                    : n > r
                    ? 1
                    : void 0;
                })
            );
          }
          function S(e) {
            var t =
              w[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
            return (
              (t = t.replace(/\W+/, "")),
              e.shiftKey && (t = "SHIFT_" + t),
              e.ctrlKey && (t = "CTRL_" + t),
              e.altKey && (t = "ALT_" + t),
              (t = t.replace(/_$/, ""))
            );
          }
          var T = {
            keys: (function (e) {
              var t = {};
              for (var n in e) t[e[n]] = e[n];
              return t;
            })(w),
            parseKey: S,
            handleKey(e, t, n) {
              var r,
                i = x[t],
                o = this.parseKey(e);
              if (!i) return console.warn("Component not defined!");
              if (!0 !== e.zfIsKeyHandled)
                if (
                  (r =
                    n[
                      (void 0 === i.ltr
                        ? i
                        : f()
                        ? h.a.extend({}, i.ltr, i.rtl)
                        : h.a.extend({}, i.rtl, i.ltr))[o]
                    ]) &&
                  "function" == typeof r
                ) {
                  var s = r.apply();
                  (e.zfIsKeyHandled = !0),
                    (n.handled || "function" == typeof n.handled) && n.handled(s);
                } else
                  (n.unhandled || "function" == typeof n.unhandled) && n.unhandled();
            },
            findFocusable: _,
            register(e, t) {
              x[e] = t;
            },
            trapFocus(e) {
              var t = _(e),
                n = t.eq(0),
                r = t.eq(-1);
              e.on("keydown.zf.trapfocus", function (e) {
                e.target === r[0] && "TAB" === S(e)
                  ? (e.preventDefault(), n.focus())
                  : e.target === n[0] &&
                    "SHIFT_TAB" === S(e) &&
                    (e.preventDefault(), r.focus());
              });
            },
            releaseFocus(e) {
              e.off("keydown.zf.trapfocus");
            },
          };
          var E = {
            ImNotTouchingYou: function (e, t, n, r, i) {
              return 0 === A(e, t, n, r, i);
            },
            OverlapArea: A,
            GetDimensions: C,
            GetExplicitOffsets: function (e, t, n, r, i, o, s) {
              var a,
                l,
                c = C(e),
                u = t ? C(t) : null;
              if (null !== u) {
                switch (n) {
                  case "top":
                    a = u.offset.top - (c.height + i);
                    break;
                  case "bottom":
                    a = u.offset.top + u.height + i;
                    break;
                  case "left":
                    l = u.offset.left - (c.width + o);
                    break;
                  case "right":
                    l = u.offset.left + u.width + o;
                }
                switch (n) {
                  case "top":
                  case "bottom":
                    switch (r) {
                      case "left":
                        l = u.offset.left + o;
                        break;
                      case "right":
                        l = u.offset.left - c.width + u.width - o;
                        break;
                      case "center":
                        l = s ? o : u.offset.left + u.width / 2 - c.width / 2 + o;
                    }
                    break;
                  case "right":
                  case "left":
                    switch (r) {
                      case "bottom":
                        a = u.offset.top - i + u.height - c.height;
                        break;
                      case "top":
                        a = u.offset.top + i;
                        break;
                      case "center":
                        a = u.offset.top + i + u.height / 2 - c.height / 2;
                    }
                }
              }
              return { top: a, left: l };
            },
          };
          function A(e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c = C(e);
            if (t) {
              var u = C(t);
              (s = u.height + u.offset.top - (c.offset.top + c.height)),
                (o = c.offset.top - u.offset.top),
                (a = c.offset.left - u.offset.left),
                (l = u.width + u.offset.left - (c.offset.left + c.width));
            } else
              (s =
                c.windowDims.height +
                c.windowDims.offset.top -
                (c.offset.top + c.height)),
                (o = c.offset.top - c.windowDims.offset.top),
                (a = c.offset.left - c.windowDims.offset.left),
                (l = c.windowDims.width - (c.offset.left + c.width));
            return (
              (s = i ? 0 : Math.min(s, 0)),
              (o = Math.min(o, 0)),
              (a = Math.min(a, 0)),
              (l = Math.min(l, 0)),
              n ? a + l : r ? o + s : Math.sqrt(o * o + s * s + a * a + l * l)
            );
          }
          function C(e) {
            if ((e = e.length ? e[0] : e) === window || e === document)
              throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
            var t = e.getBoundingClientRect(),
              n = e.parentNode.getBoundingClientRect(),
              r = document.body.getBoundingClientRect(),
              i = window.pageYOffset,
              o = window.pageXOffset;
            return {
              width: t.width,
              height: t.height,
              offset: { top: t.top + i, left: t.left + o },
              parentDims: {
                width: n.width,
                height: n.height,
                offset: { top: n.top + i, left: n.left + o },
              },
              windowDims: {
                width: r.width,
                height: r.height,
                offset: { top: i, left: o },
              },
            };
          }
          class k {
            constructor(e, t) {
              this._setup(e, t);
              var n = $(this);
              (this.uuid = p(6, n)),
                this.$element.attr("data-" + n) ||
                  this.$element.attr("data-" + n, this.uuid),
                this.$element.data("zfPlugin") ||
                  this.$element.data("zfPlugin", this),
                this.$element.trigger("init.zf." + n);
            }
            destroy() {
              this._destroy();
              var e = $(this);
              for (var t in (this.$element
                .removeAttr("data-" + e)
                .removeData("zfPlugin")
                .trigger("destroyed.zf." + e),
              this))
                this[t] = null;
            }
          }
          function $(e) {
            return e.className.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          }
          const O = ["left", "right", "top", "bottom"],
            L = ["top", "bottom", "center"],
            j = ["left", "right", "center"],
            M = { left: L, right: L, top: j, bottom: j };
          function N(e, t) {
            var n = t.indexOf(e);
            return n === t.length - 1 ? t[0] : t[n + 1];
          }
          class z extends k {
            _init() {
              (this.triedPositions = {}),
                (this.position =
                  "auto" === this.options.position
                    ? this._getDefaultPosition()
                    : this.options.position),
                (this.alignment =
                  "auto" === this.options.alignment
                    ? this._getDefaultAlignment()
                    : this.options.alignment),
                (this.originalPosition = this.position),
                (this.originalAlignment = this.alignment);
            }
            _getDefaultPosition() {
              return "bottom";
            }
            _getDefaultAlignment() {
              switch (this.position) {
                case "bottom":
                case "top":
                  return f() ? "right" : "left";
                case "left":
                case "right":
                  return "bottom";
              }
            }
            _reposition() {
              this._alignmentsExhausted(this.position)
                ? ((this.position = N(this.position, O)),
                  (this.alignment = M[this.position][0]))
                : this._realign();
            }
            _realign() {
              this._addTriedPosition(this.position, this.alignment),
                (this.alignment = N(this.alignment, M[this.position]));
            }
            _addTriedPosition(e, t) {
              (this.triedPositions[e] = this.triedPositions[e] || []),
                this.triedPositions[e].push(t);
            }
            _positionsExhausted() {
              for (var e = !0, t = 0; t < O.length; t++)
                e = e && this._alignmentsExhausted(O[t]);
              return e;
            }
            _alignmentsExhausted(e) {
              return (
                this.triedPositions[e] && this.triedPositions[e].length == M[e].length
              );
            }
            _getVOffset() {
              return this.options.vOffset;
            }
            _getHOffset() {
              return this.options.hOffset;
            }
            _setPosition(e, t, n) {
              if ("false" === e.attr("aria-expanded")) return !1;
              if (
                (this.options.allowOverlap ||
                  ((this.position = this.originalPosition),
                  (this.alignment = this.originalAlignment)),
                t.offset(
                  E.GetExplicitOffsets(
                    t,
                    e,
                    this.position,
                    this.alignment,
                    this._getVOffset(),
                    this._getHOffset()
                  )
                ),
                !this.options.allowOverlap)
              ) {
                for (
                  var r = 1e8,
                    i = { position: this.position, alignment: this.alignment };
                  !this._positionsExhausted();
      
                ) {
                  let o = E.OverlapArea(
                    t,
                    n,
                    !1,
                    !1,
                    this.options.allowBottomOverlap
                  );
                  if (0 === o) return;
                  o < r &&
                    ((r = o),
                    (i = { position: this.position, alignment: this.alignment })),
                    this._reposition(),
                    t.offset(
                      E.GetExplicitOffsets(
                        t,
                        e,
                        this.position,
                        this.alignment,
                        this._getVOffset(),
                        this._getHOffset()
                      )
                    );
                }
                (this.position = i.position),
                  (this.alignment = i.alignment),
                  t.offset(
                    E.GetExplicitOffsets(
                      t,
                      e,
                      this.position,
                      this.alignment,
                      this._getVOffset(),
                      this._getHOffset()
                    )
                  );
              }
            }
          }
          z.defaults = {
            position: "auto",
            alignment: "auto",
            allowOverlap: !1,
            allowBottomOverlap: !0,
            vOffset: 0,
            hOffset: 0,
          };
          const P = ["mui-enter", "mui-leave"],
            D = ["mui-enter-active", "mui-leave-active"],
            q = function (e, t, n) {
              B(!0, e, t, n);
            },
            F = function (e, t, n) {
              B(!1, e, t, n);
            };
          function B(e, t, n, r) {
            if ((t = h()(t).eq(0)).length) {
              var i = e ? P[0] : P[1],
                o = e ? D[0] : D[1];
              s(),
                t.addClass(n).css("transition", "none"),
                requestAnimationFrame(() => {
                  t.addClass(i), e && t.show();
                }),
                requestAnimationFrame(() => {
                  t[0].offsetWidth, t.css("transition", "").addClass(o);
                }),
                t.one(
                  (function (e) {
                    var t,
                      n = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend",
                      },
                      r = document.createElement("div");
                    for (let e in n) void 0 !== r.style[e] && (t = n[e]);
                    return (
                      t ||
                      (setTimeout(function () {
                        e.triggerHandler("transitionend", [e]);
                      }, 1),
                      "transitionend")
                    );
                  })(t),
                  function () {
                    e || t.hide();
                    s(), r && r.apply(t);
                  }
                );
            }
            function s() {
              (t[0].style.transitionDuration = 0), t.removeClass(`${i} ${o} ${n}`);
            }
          }
          const R = (function () {
              for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                if (e[t] + "MutationObserver" in window)
                  return window[e[t] + "MutationObserver"];
              return !1;
            })(),
            H = (e, t) => {
              e.data(t)
                .split(" ")
                .forEach((n) => {
                  h()("#" + n)["close" === t ? "trigger" : "triggerHandler"](
                    t + ".zf.trigger",
                    [e]
                  );
                });
            };
          var I = { Listeners: { Basic: {}, Global: {} }, Initializers: {} };
          function W(e, t, n) {
            let r,
              i = Array.prototype.slice.call(arguments, 3);
            h()(window)
              .off(t)
              .on(t, function (t) {
                r && clearTimeout(r),
                  (r = setTimeout(function () {
                    n.apply(null, i);
                  }, e || 10));
              });
          }
          (I.Listeners.Basic = {
            openListener: function () {
              H(h()(this), "open");
            },
            closeListener: function () {
              h()(this).data("close")
                ? H(h()(this), "close")
                : h()(this).trigger("close.zf.trigger");
            },
            toggleListener: function () {
              h()(this).data("toggle")
                ? H(h()(this), "toggle")
                : h()(this).trigger("toggle.zf.trigger");
            },
            closeableListener: function (e) {
              let t = h()(this).data("closable");
              e.stopPropagation(),
                "" !== t
                  ? F(h()(this), t, function () {
                      h()(this).trigger("closed.zf");
                    })
                  : h()(this).fadeOut().trigger("closed.zf");
            },
            toggleFocusListener: function () {
              let e = h()(this).data("toggle-focus");
              h()("#" + e).triggerHandler("toggle.zf.trigger", [h()(this)]);
            },
          }),
            (I.Initializers.addOpenListener = (e) => {
              e.off("click.zf.trigger", I.Listeners.Basic.openListener),
                e.on(
                  "click.zf.trigger",
                  "[data-open]",
                  I.Listeners.Basic.openListener
                );
            }),
            (I.Initializers.addCloseListener = (e) => {
              e.off("click.zf.trigger", I.Listeners.Basic.closeListener),
                e.on(
                  "click.zf.trigger",
                  "[data-close]",
                  I.Listeners.Basic.closeListener
                );
            }),
            (I.Initializers.addToggleListener = (e) => {
              e.off("click.zf.trigger", I.Listeners.Basic.toggleListener),
                e.on(
                  "click.zf.trigger",
                  "[data-toggle]",
                  I.Listeners.Basic.toggleListener
                );
            }),
            (I.Initializers.addCloseableListener = (e) => {
              e.off("close.zf.trigger", I.Listeners.Basic.closeableListener),
                e.on(
                  "close.zf.trigger",
                  "[data-closeable], [data-closable]",
                  I.Listeners.Basic.closeableListener
                );
            }),
            (I.Initializers.addToggleFocusListener = (e) => {
              e.off(
                "focus.zf.trigger blur.zf.trigger",
                I.Listeners.Basic.toggleFocusListener
              ),
                e.on(
                  "focus.zf.trigger blur.zf.trigger",
                  "[data-toggle-focus]",
                  I.Listeners.Basic.toggleFocusListener
                );
            }),
            (I.Listeners.Global = {
              resizeListener: function (e) {
                R ||
                  e.each(function () {
                    h()(this).triggerHandler("resizeme.zf.trigger");
                  }),
                  e.attr("data-events", "resize");
              },
              scrollListener: function (e) {
                R ||
                  e.each(function () {
                    h()(this).triggerHandler("scrollme.zf.trigger");
                  }),
                  e.attr("data-events", "scroll");
              },
              closeMeListener: function (e, t) {
                let n = e.namespace.split(".")[0];
                h()(`[data-${n}]`)
                  .not(`[data-yeti-box="${t}"]`)
                  .each(function () {
                    let e = h()(this);
                    e.triggerHandler("close.zf.trigger", [e]);
                  });
              },
            }),
            (I.Initializers.addClosemeListener = function (e) {
              var t = h()("[data-yeti-box]"),
                n = ["dropdown", "tooltip", "reveal"];
              if (
                (e &&
                  ("string" == typeof e
                    ? n.push(e)
                    : "object" == typeof e && "string" == typeof e[0]
                    ? (n = n.concat(e))
                    : console.error("Plugin names must be strings")),
                t.length)
              ) {
                let e = n.map((e) => "closeme.zf." + e).join(" ");
                h()(window).off(e).on(e, I.Listeners.Global.closeMeListener);
              }
            }),
            (I.Initializers.addResizeListener = function (e) {
              let t = h()("[data-resize]");
              t.length &&
                W(e, "resize.zf.trigger", I.Listeners.Global.resizeListener, t);
            }),
            (I.Initializers.addScrollListener = function (e) {
              let t = h()("[data-scroll]");
              t.length &&
                W(e, "scroll.zf.trigger", I.Listeners.Global.scrollListener, t);
            }),
            (I.Initializers.addMutationEventsListener = function (e) {
              if (!R) return !1;
              let t = e.find("[data-resize], [data-scroll], [data-mutate]");
              var n = function (e) {
                var t = h()(e[0].target);
                switch (e[0].type) {
                  case "attributes":
                    "scroll" === t.attr("data-events") &&
                      "data-events" === e[0].attributeName &&
                      t.triggerHandler("scrollme.zf.trigger", [
                        t,
                        window.pageYOffset,
                      ]),
                      "resize" === t.attr("data-events") &&
                        "data-events" === e[0].attributeName &&
                        t.triggerHandler("resizeme.zf.trigger", [t]),
                      "style" === e[0].attributeName &&
                        (t.closest("[data-mutate]").attr("data-events", "mutate"),
                        t
                          .closest("[data-mutate]")
                          .triggerHandler("mutateme.zf.trigger", [
                            t.closest("[data-mutate]"),
                          ]));
                    break;
                  case "childList":
                    t.closest("[data-mutate]").attr("data-events", "mutate"),
                      t
                        .closest("[data-mutate]")
                        .triggerHandler("mutateme.zf.trigger", [
                          t.closest("[data-mutate]"),
                        ]);
                    break;
                  default:
                    return !1;
                }
              };
              if (t.length)
                for (var r = 0; r <= t.length - 1; r++) {
                  new R(n).observe(t[r], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"],
                  });
                }
            }),
            (I.Initializers.addSimpleListeners = function () {
              let e = h()(document);
              I.Initializers.addOpenListener(e),
                I.Initializers.addCloseListener(e),
                I.Initializers.addToggleListener(e),
                I.Initializers.addCloseableListener(e),
                I.Initializers.addToggleFocusListener(e);
            }),
            (I.Initializers.addGlobalListeners = function () {
              let e = h()(document);
              I.Initializers.addMutationEventsListener(e),
                I.Initializers.addResizeListener(),
                I.Initializers.addScrollListener(),
                I.Initializers.addClosemeListener();
            }),
            (I.init = function (e, t) {
              m(e(window), function () {
                !0 !== e.triggersInitialized &&
                  (I.Initializers.addSimpleListeners(),
                  I.Initializers.addGlobalListeners(),
                  (e.triggersInitialized = !0));
              }),
                t &&
                  ((t.Triggers = I),
                  (t.IHearYou = I.Initializers.addGlobalListeners));
            });
          var U,
            V,
            G,
            X,
            Q = {},
            Y = !1,
            K = !1;
          function J(e) {
            if (
              (this.removeEventListener("touchmove", Z),
              this.removeEventListener("touchend", J),
              !K)
            ) {
              var t = h.a.Event("tap", X || e);
              h()(this).trigger(t);
            }
            (X = null), (Y = !1), (K = !1);
          }
          function Z(e) {
            if ((!0 === h.a.spotSwipe.preventDefault && e.preventDefault(), Y)) {
              var t,
                n = e.touches[0].pageX,
                r = U - n;
              (K = !0),
                (G = new Date().getTime() - V),
                Math.abs(r) >= h.a.spotSwipe.moveThreshold &&
                  G <= h.a.spotSwipe.timeThreshold &&
                  (t = r > 0 ? "left" : "right"),
                t &&
                  (e.preventDefault(),
                  J.apply(this, arguments),
                  h()(this)
                    .trigger(h.a.Event("swipe", Object.assign({}, e)), t)
                    .trigger(h.a.Event("swipe" + t, Object.assign({}, e))));
            }
          }
          function ee(e) {
            1 === e.touches.length &&
              ((U = e.touches[0].pageX),
              e.touches[0].pageY,
              (X = e),
              (Y = !0),
              (K = !1),
              (V = new Date().getTime()),
              this.addEventListener("touchmove", Z, {
                passive: !0 === h.a.spotSwipe.preventDefault,
              }),
              this.addEventListener("touchend", J, !1));
          }
          function te() {
            this.addEventListener &&
              this.addEventListener("touchstart", ee, { passive: !0 });
          }
          class ne {
            constructor(e) {
              (this.version = "1.0.0"),
                (this.enabled = "ontouchstart" in document.documentElement),
                (this.preventDefault = !1),
                (this.moveThreshold = 75),
                (this.timeThreshold = 200),
                (this.$ = e),
                this._init();
            }
            _init() {
              var e = this.$;
              (e.event.special.swipe = { setup: te }),
                (e.event.special.tap = { setup: te }),
                e.each(["left", "up", "down", "right"], function () {
                  e.event.special["swipe" + this] = {
                    setup: function () {
                      e(this).on("swipe", e.noop);
                    },
                  };
                });
            }
          }
          (Q.setupSpotSwipe = function (e) {
            e.spotSwipe = new ne(e);
          }),
            (Q.setupTouchHandler = function (e) {
              e.fn.addTouch = function () {
                this.each(function (n, r) {
                  e(r).bind(
                    "touchstart touchmove touchend touchcancel",
                    function (e) {
                      t(e);
                    }
                  );
                });
                var t = function (e) {
                  var t,
                    n = e.changedTouches[0],
                    r = {
                      touchstart: "mousedown",
                      touchmove: "mousemove",
                      touchend: "mouseup",
                    }[e.type];
                  "MouseEvent" in window && "function" == typeof window.MouseEvent
                    ? (t = new window.MouseEvent(r, {
                        bubbles: !0,
                        cancelable: !0,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        clientX: n.clientX,
                        clientY: n.clientY,
                      }))
                    : (t = document.createEvent("MouseEvent")).initMouseEvent(
                        r,
                        !0,
                        !0,
                        window,
                        1,
                        n.screenX,
                        n.screenY,
                        n.clientX,
                        n.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                    n.target.dispatchEvent(t);
                };
              };
            }),
            (Q.init = function (e) {
              void 0 === e.spotSwipe && (Q.setupSpotSwipe(e), Q.setupTouchHandler(e));
            });
          class re extends z {
            _setup(e, t) {
              (this.$element = e),
                (this.options = h.a.extend({}, re.defaults, this.$element.data(), t)),
                (this.className = "Dropdown"),
                Q.init(h.a),
                I.init(h.a),
                this._init(),
                T.register("Dropdown", {
                  ENTER: "toggle",
                  SPACE: "toggle",
                  ESCAPE: "close",
                });
            }
            _init() {
              var e = this.$element.attr("id");
              (this.$anchors = h()(`[data-toggle="${e}"]`).length
                ? h()(`[data-toggle="${e}"]`)
                : h()(`[data-open="${e}"]`)),
                this.$anchors.attr({
                  "aria-controls": e,
                  "data-is-focus": !1,
                  "data-yeti-box": e,
                  "aria-haspopup": !0,
                  "aria-expanded": !1,
                }),
                this._setCurrentAnchor(this.$anchors.first()),
                this.options.parentClass
                  ? (this.$parent = this.$element.parents(
                      "." + this.options.parentClass
                    ))
                  : (this.$parent = null),
                void 0 === this.$element.attr("aria-labelledby") &&
                  (void 0 === this.$currentAnchor.attr("id") &&
                    this.$currentAnchor.attr("id", p(6, "dd-anchor")),
                  this.$element.attr(
                    "aria-labelledby",
                    this.$currentAnchor.attr("id")
                  )),
                this.$element.attr({
                  "aria-hidden": "true",
                  "data-yeti-box": e,
                  "data-resize": e,
                }),
                super._init(),
                this._events();
            }
            _getDefaultPosition() {
              var e = this.$element[0].className.match(/(top|left|right|bottom)/g);
              return e ? e[0] : "bottom";
            }
            _getDefaultAlignment() {
              var e = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
              return e ? e[1] : super._getDefaultAlignment();
            }
            _setPosition() {
              this.$element.removeClass(
                `has-position-${this.position} has-alignment-${this.alignment}`
              ),
                super._setPosition(this.$currentAnchor, this.$element, this.$parent),
                this.$element.addClass(
                  `has-position-${this.position} has-alignment-${this.alignment}`
                );
            }
            _setCurrentAnchor(e) {
              this.$currentAnchor = h()(e);
            }
            _events() {
              var e = this,
                t = "ontouchstart" in window || void 0 !== window.ontouchstart;
              this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": this.close.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": this._setPosition.bind(this),
              }),
                this.$anchors
                  .off("click.zf.trigger")
                  .on("click.zf.trigger", function (n) {
                    e._setCurrentAnchor(this),
                      (!1 === e.options.forceFollow ||
                        (t &&
                          e.options.hover &&
                          !1 === e.$element.hasClass("is-open"))) &&
                        n.preventDefault();
                  }),
                this.options.hover &&
                  (this.$anchors
                    .off("mouseenter.zf.dropdown mouseleave.zf.dropdown")
                    .on("mouseenter.zf.dropdown", function () {
                      e._setCurrentAnchor(this);
                      var t = h()("body").data();
                      (void 0 !== t.whatinput && "mouse" !== t.whatinput) ||
                        (clearTimeout(e.timeout),
                        (e.timeout = setTimeout(function () {
                          e.open(), e.$anchors.data("hover", !0);
                        }, e.options.hoverDelay)));
                    })
                    .on(
                      "mouseleave.zf.dropdown",
                      v(function () {
                        clearTimeout(e.timeout),
                          (e.timeout = setTimeout(function () {
                            e.close(), e.$anchors.data("hover", !1);
                          }, e.options.hoverDelay));
                      })
                    ),
                  this.options.hoverPane &&
                    this.$element
                      .off("mouseenter.zf.dropdown mouseleave.zf.dropdown")
                      .on("mouseenter.zf.dropdown", function () {
                        clearTimeout(e.timeout);
                      })
                      .on(
                        "mouseleave.zf.dropdown",
                        v(function () {
                          clearTimeout(e.timeout),
                            (e.timeout = setTimeout(function () {
                              e.close(), e.$anchors.data("hover", !1);
                            }, e.options.hoverDelay));
                        })
                      )),
                this.$anchors
                  .add(this.$element)
                  .on("keydown.zf.dropdown", function (t) {
                    var n = h()(this);
                    T.findFocusable(e.$element);
                    T.handleKey(t, "Dropdown", {
                      open: function () {
                        n.is(e.$anchors) &&
                          !n.is("input, textarea") &&
                          (e.open(),
                          e.$element.attr("tabindex", -1).focus(),
                          t.preventDefault());
                      },
                      close: function () {
                        e.close(), e.$anchors.focus();
                      },
                    });
                  });
            }
            _addBodyHandler() {
              var e = h()(document.body).not(this.$element),
                t = this;
              e.off("click.zf.dropdown tap.zf.dropdown").on(
                "click.zf.dropdown tap.zf.dropdown",
                function (n) {
                  t.$anchors.is(n.target) ||
                    t.$anchors.find(n.target).length ||
                    t.$element.is(n.target) ||
                    t.$element.find(n.target).length ||
                    (t.close(), e.off("click.zf.dropdown tap.zf.dropdown"));
                }
              );
            }
            open() {
              if (
                (this.$element.trigger(
                  "closeme.zf.dropdown",
                  this.$element.attr("id")
                ),
                this.$anchors.addClass("hover").attr({ "aria-expanded": !0 }),
                this.$element.addClass("is-opening"),
                this._setPosition(),
                this.$element
                  .removeClass("is-opening")
                  .addClass("is-open")
                  .attr({ "aria-hidden": !1 }),
                this.options.autoFocus)
              ) {
                var e = T.findFocusable(this.$element);
                e.length && e.eq(0).focus();
              }
              this.options.closeOnClick && this._addBodyHandler(),
                this.options.trapFocus && T.trapFocus(this.$element),
                this.$element.trigger("show.zf.dropdown", [this.$element]);
            }
            close() {
              if (!this.$element.hasClass("is-open")) return !1;
              this.$element.removeClass("is-open").attr({ "aria-hidden": !0 }),
                this.$anchors.removeClass("hover").attr("aria-expanded", !1),
                this.$element.trigger("hide.zf.dropdown", [this.$element]),
                this.options.trapFocus && T.releaseFocus(this.$element);
            }
            toggle() {
              if (this.$element.hasClass("is-open")) {
                if (this.$anchors.data("hover")) return;
                this.close();
              } else this.open();
            }
            _destroy() {
              this.$element.off(".zf.trigger").hide(),
                this.$anchors.off(".zf.dropdown"),
                h()(document.body).off("click.zf.dropdown tap.zf.dropdown");
            }
          }
          re.defaults = {
            parentClass: null,
            hoverDelay: 250,
            hover: !1,
            hoverPane: !1,
            vOffset: 0,
            hOffset: 0,
            position: "auto",
            alignment: "auto",
            allowOverlap: !1,
            allowBottomOverlap: !0,
            trapFocus: !1,
            autoFocus: !1,
            closeOnClick: !1,
            forceFollow: !0,
          };
          var ie = n(137),
            oe = n.n(ie);
          function se(e, t, n) {
            return n
              ? t
                ? t(e)
                : e
              : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
          }
          let ae = n(2);
          function le(e, t, n) {
            if (n) return t ? t(e()) : e();
            try {
              var r = Promise.resolve(e());
              return t ? r.then(t) : r;
            } catch (e) {
              return Promise.reject(e);
            }
          }
          function ce() {}
          g.addToJquery(ae), g.plugin(re, "Dropdown");
          const ue =
              "https://www.rainews.it/atomatic/memo-weather-api/v1/searchProvincia/",
            de =
              "https://www.rainews.it/atomatic/memo-weather-api/v1/getWeatherNews/",
            he = Object(c.get)("rn-weather-prov") || "roma",
            fe = {
              Abruzzo: "abruzzo",
              Basilicata: "basilicata",
              Calabria: "calabria",
              Campania: "campania",
              "Emilia-Romagna": "emiliaromagna",
              Lazio: "lazio",
              Liguria: "liguria",
              Lombardia: "lombardia",
              Marche: "marche",
              Piemonte: "piemonte",
              Sardegna: "sardegna",
              Umbria: "umbria",
              "Valle d'Aosta": "vda",
              "Friuli Venezia Giulia": "fvg",
              Molise: "molise",
              Puglia: "puglia",
              Sicilia: "sicilia",
              Toscana: "toscana",
              "Trentino-Alto Adige": "trento",
              Veneto: "veneto",
            };
          class pe extends r.a {
            static get properties() {
              return { weather: { type: Object } };
            }
            constructor() {
              super(),
                (this.handleSuggestions = l()(this.handleSuggestions, 300)),
                oe.a.use();
            }
            createRenderRoot() {
              return this;
            }
            // connectedCallback() {
            //   super.connectedCallback(),
            //     this.searchProvince(he)
            //       .then((e) => {
            //         let t = fe[e[0].state];
            //         this.selectProvince(e[0].name, e[0].locationId, t);
            //       })
            //       .catch((e) => {
            //         console.error(e);
            //       });
            // }
            shouldUpdate(e) {
              return !!this.weather;
            }
            render() {
              return r.d`
                  <div id="WTwrapper">
                      <!--<a href="/tgr/${this.region}/meteo" title="${Object(u.a)(
                "vai_al_meteo",
                "goto"
              )}">-->
                      <div class="weather">
                          <div class="weather__img-wrapper">
                              <img width="32" height="32" src="//www.rai.it${this.weather.iconUrl.replace(
                                "[RESOLUTION]",
                                ""
                              )}" alt="icona meteo"/>
                          </div>
                          <div class="weather__temperatures">
                              <div class="max">${this.weather.maxTemperature}</div>
                              <div class="min">${this.weather.minTemperature}</div>
                          </div>
                      </div>
                      <!--</a>-->
                      <div class="locations">
                          <button class="locations__toggler dropdown clear button" type="button" data-toggle="province-dropdown">
                              ${this.selectedProvince}
                              <i class="icon-chevron-right"></i>
                          </button>
                          <div class="locations__dropdown dropdown-pane" id="province-dropdown" data-dropdown data-alignment="center" data-auto-focus="true">
                              <form class="locations__form">
                                  <div class="locations__form__input-wrapper">
                                      <input type="text" @input="${
                                        this.handleSuggestions
                                      }" placeholder="Cerca provincia" typw="text" />
                                      <button type="submit"><i class="icon-search"></i></button>
                                  </div>
                              </form>
                              <div class="locations__list-wrapper">
                                  <ul class="vertical menu"></ul>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
            }
            firstUpdated() {
              let e = document.querySelector("#province-dropdown"),
                t = document.querySelector("form");
              (this.input = this.querySelector("input")),
                (this.provList = this.querySelector("ul")),
                t.addEventListener("submit", (e) => {
                  e.preventDefault();
                }),
                new g.Dropdown(ae(e), {
                  clickOpen: !0,
                  disableHover: !0,
                  closeOnClick: !0,
                }),
                this.provList.addEventListener("click", (t) => {
                  let n = t.target,
                    r = n.getAttribute("name"),
                    i = n.getAttribute("locationId"),
                    o = n.getAttribute("region");
                  r && i && this.selectProvince(r, i, o),
                    (this.input.value = null),
                    (this.provList.innerHTML = null),
                    ae(e).foundation("close");
                }),
                ae(document).on("hide.zf.dropdown", () => {
                  (this.input.value = null), (this.provList.innerHTML = null);
                });
            }
            searchProvince(e) {
              return le(function () {
                return se(fetch(ue + e), function (e) {
                  let t = !1;
                  return (
                    (n = function (e) {
                      return t ? e : Promise.reject("Weather service down");
                    }),
                    (r = (function () {
                      if (e.ok)
                        return se(e.json(), function (e) {
                          return e.elements.length
                            ? ((t = !0), Promise.resolve(e.elements))
                            : ((t = !0), Promise.reject("No Province Found"));
                        });
                    })()) && r.then
                      ? r.then(n)
                      : n(r)
                  );
                  var n, r;
                });
              });
            }
            selectProvince(e, t, n) {
              const r = this;
              return le(function () {
                return se(fetch(de + t), function (t) {
                  return (function (e) {
                    var t = e();
                    if (t && t.then) return t.then(ce);
                  })(function () {
                    if (t.ok)
                      return se(t.json(), function (t) {
                        t.lastUpdate &&
                          (new Date(t.lastUpdate).getTime() - new Date().getTime()) /
                            1e3 <
                            86400 &&
                          ((r.selectedProvince = e),
                          (r.region = n),
                          (r.weather = t.weather),
                          Object(c.set)("rn-weather-prov", e));
                      });
                  });
                });
              });
            }
            handleSuggestions() {
              let e = this.input.value || "";
              e.length < 2
                ? (this.provList.innerHTML = null)
                : this.searchProvince(e)
                    .then((e) => {
                      (this.provList.innerHTML = null),
                        e.forEach((e) => {
                          let t = document.createElement("li");
                          t.setAttribute("name", e.name),
                            t.setAttribute("region", fe[e.state]),
                            t.setAttribute("locationId", e.locationId),
                            t.appendChild(document.createTextNode(e.name)),
                            this.provList.appendChild(t);
                        });
                    })
                    .catch(() => {
                      this.provList.innerHTML = null;
                    });
            }
          }
          customElements.get("rainews-weather") ||
            customElements.define("rainews-weather", pe);
          class me extends k {
            _setup(e, t) {
              (this.$element = e),
                (this.options = h.a.extend({}, me.defaults, this.$element.data(), t)),
                (this.className = "Reveal"),
                this._init(),
                Q.init(h.a),
                I.init(h.a),
                T.register("Reveal", { ESCAPE: "close" });
            }
            _init() {
              i.a._init(),
                (this.id = this.$element.attr("id")),
                (this.isActive = !1),
                (this.cached = { mq: i.a.current }),
                (this.$anchor = h()(`[data-open="${this.id}"]`).length
                  ? h()(`[data-open="${this.id}"]`)
                  : h()(`[data-toggle="${this.id}"]`)),
                this.$anchor.attr({
                  "aria-controls": this.id,
                  "aria-haspopup": "dialog",
                  tabindex: 0,
                }),
                (this.options.fullScreen || this.$element.hasClass("full")) &&
                  ((this.options.fullScreen = !0), (this.options.overlay = !1)),
                this.options.overlay &&
                  !this.$overlay &&
                  (this.$overlay = this._makeOverlay(this.id)),
                this.$element.attr({
                  role: "dialog",
                  "aria-hidden": !0,
                  "data-yeti-box": this.id,
                  "data-resize": this.id,
                }),
                this.$overlay
                  ? this.$element.detach().appendTo(this.$overlay)
                  : (this.$element.detach().appendTo(h()(this.options.appendTo)),
                    this.$element.addClass("without-overlay")),
                this._events(),
                this.options.deepLink &&
                  window.location.hash === "#" + this.id &&
                  (this.onLoadListener = m(h()(window), () => this.open()));
            }
            _makeOverlay() {
              var e = "";
              return (
                this.options.additionalOverlayClasses &&
                  (e = " " + this.options.additionalOverlayClasses),
                h()("<div></div>")
                  .addClass("reveal-overlay" + e)
                  .appendTo(this.options.appendTo)
              );
            }
            _updatePosition() {
              var e,
                t = this.$element.outerWidth(),
                n = h()(window).width(),
                r = this.$element.outerHeight(),
                i = h()(window).height(),
                o = null;
              (e =
                "auto" === this.options.hOffset
                  ? parseInt((n - t) / 2, 10)
                  : parseInt(this.options.hOffset, 10)),
                "auto" === this.options.vOffset
                  ? (o =
                      r > i
                        ? parseInt(Math.min(100, i / 10), 10)
                        : parseInt((i - r) / 4, 10))
                  : null !== this.options.vOffset &&
                    (o = parseInt(this.options.vOffset, 10)),
                null !== o && this.$element.css({ top: o + "px" }),
                (this.$overlay && "auto" === this.options.hOffset) ||
                  (this.$element.css({ left: e + "px" }),
                  this.$element.css({ margin: "0px" }));
            }
            _events() {
              var e = this;
              this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": (t, n) => {
                  if (
                    t.target === e.$element[0] ||
                    h()(t.target).parents("[data-closable]")[0] === n
                  )
                    return this.close.apply(this);
                },
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": function () {
                  e._updatePosition();
                },
              }),
                this.options.closeOnClick &&
                  this.options.overlay &&
                  this.$overlay
                    .off(".zf.reveal")
                    .on("click.zf.dropdown tap.zf.dropdown", function (t) {
                      t.target !== e.$element[0] &&
                        !h.a.contains(e.$element[0], t.target) &&
                        h.a.contains(document, t.target) &&
                        e.close();
                    }),
                this.options.deepLink &&
                  h()(window).on(
                    "hashchange.zf.reveal:" + this.id,
                    this._handleState.bind(this)
                  );
            }
            _handleState(e) {
              window.location.hash !== "#" + this.id || this.isActive
                ? this.close()
                : this.open();
            }
            _disableScroll(e) {
              (e = e || h()(window).scrollTop()),
                h()(document).height() > h()(window).height() &&
                  h()("html").css("top", -e);
            }
            _enableScroll(e) {
              (e = e || parseInt(h()("html").css("top"))),
                h()(document).height() > h()(window).height() &&
                  (h()("html").css("top", ""), h()(window).scrollTop(-e));
            }
            open() {
              const e = "#" + this.id;
              this.options.deepLink &&
                window.location.hash !== e &&
                (window.history.pushState
                  ? this.options.updateHistory
                    ? window.history.pushState({}, "", e)
                    : window.history.replaceState({}, "", e)
                  : (window.location.hash = e)),
                (this.$activeAnchor = h()(document.activeElement).is(this.$anchor)
                  ? h()(document.activeElement)
                  : this.$anchor),
                (this.isActive = !0),
                this.$element.css({ visibility: "hidden" }).show().scrollTop(0),
                this.options.overlay &&
                  this.$overlay.css({ visibility: "hidden" }).show(),
                this._updatePosition(),
                this.$element.hide().css({ visibility: "" }),
                this.$overlay &&
                  (this.$overlay.css({ visibility: "" }).hide(),
                  this.$element.hasClass("fast")
                    ? this.$overlay.addClass("fast")
                    : this.$element.hasClass("slow") &&
                      this.$overlay.addClass("slow")),
                this.options.multipleOpened ||
                  this.$element.trigger("closeme.zf.reveal", this.id),
                0 === h()(".reveal:visible").length && this._disableScroll();
              var t = this;
              if (this.options.animationIn) {
                this.options.overlay && q(this.$overlay, "fade-in"),
                  q(this.$element, this.options.animationIn, () => {
                    this.$element &&
                      ((this.focusableElements = T.findFocusable(this.$element)),
                      t.$element.attr({ "aria-hidden": !1, tabindex: -1 }).focus(),
                      t._addGlobalClasses(),
                      T.trapFocus(t.$element));
                  });
              } else
                this.options.overlay && this.$overlay.show(0),
                  this.$element.show(this.options.showDelay);
              this.$element.attr({ "aria-hidden": !1, tabindex: -1 }).focus(),
                T.trapFocus(this.$element),
                this._addGlobalClasses(),
                this._addGlobalListeners(),
                this.$element.trigger("open.zf.reveal");
            }
            _addGlobalClasses() {
              const e = () => {
                h()("html").toggleClass(
                  "zf-has-scroll",
                  !!(h()(document).height() > h()(window).height())
                );
              };
              this.$element.on("resizeme.zf.trigger.revealScrollbarListener", () =>
                e()
              ),
                e(),
                h()("html").addClass("is-reveal-open");
            }
            _removeGlobalClasses() {
              this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),
                h()("html").removeClass("is-reveal-open"),
                h()("html").removeClass("zf-has-scroll");
            }
            _addGlobalListeners() {
              var e = this;
              this.$element &&
                ((this.focusableElements = T.findFocusable(this.$element)),
                this.options.overlay ||
                  !this.options.closeOnClick ||
                  this.options.fullScreen ||
                  h()("body").on("click.zf.dropdown tap.zf.dropdown", function (t) {
                    t.target !== e.$element[0] &&
                      !h.a.contains(e.$element[0], t.target) &&
                      h.a.contains(document, t.target) &&
                      e.close();
                  }),
                this.options.closeOnEsc &&
                  h()(window).on("keydown.zf.reveal", function (t) {
                    T.handleKey(t, "Reveal", {
                      close: function () {
                        e.options.closeOnEsc && e.close();
                      },
                    });
                  }));
            }
            close() {
              if (!this.isActive || !this.$element.is(":visible")) return !1;
              var e = this;
              function t() {
                var t = parseInt(h()("html").css("top"));
                0 === h()(".reveal:visible").length && e._removeGlobalClasses(),
                  T.releaseFocus(e.$element),
                  e.$element.attr("aria-hidden", !0),
                  0 === h()(".reveal:visible").length && e._enableScroll(t),
                  e.$element.trigger("closed.zf.reveal");
              }
              if (
                (this.options.animationOut
                  ? (this.options.overlay && F(this.$overlay, "fade-out"),
                    F(this.$element, this.options.animationOut, t))
                  : (this.$element.hide(this.options.hideDelay),
                    this.options.overlay ? this.$overlay.hide(0, t) : t()),
                this.options.closeOnEsc && h()(window).off("keydown.zf.reveal"),
                !this.options.overlay &&
                  this.options.closeOnClick &&
                  h()("body").off("click.zf.dropdown tap.zf.dropdown"),
                this.$element.off("keydown.zf.reveal"),
                this.options.resetOnClose && this.$element.html(this.$element.html()),
                (this.isActive = !1),
                e.options.deepLink && window.location.hash === "#" + this.id)
              )
                if (window.history.replaceState) {
                  const e = window.location.pathname + window.location.search;
                  this.options.updateHistory
                    ? window.history.pushState({}, "", e)
                    : window.history.replaceState("", document.title, e);
                } else window.location.hash = "";
              this.$activeAnchor.focus();
            }
            toggle() {
              this.isActive ? this.close() : this.open();
            }
            _destroy() {
              this.options.overlay &&
                (this.$element.appendTo(h()(this.options.appendTo)),
                this.$overlay.hide().off().remove()),
                this.$element.hide().off(),
                this.$anchor.off(".zf"),
                h()(window).off(".zf.reveal:" + this.id),
                this.onLoadListener && h()(window).off(this.onLoadListener),
                0 === h()(".reveal:visible").length && this._removeGlobalClasses();
            }
          }
          me.defaults = {
            animationIn: "",
            animationOut: "",
            showDelay: 0,
            hideDelay: 0,
            closeOnClick: !0,
            closeOnEsc: !0,
            multipleOpened: !1,
            vOffset: "auto",
            hOffset: "auto",
            fullScreen: !1,
            overlay: !0,
            resetOnClose: !1,
            deepLink: !1,
            updateHistory: !1,
            appendTo: "body",
            additionalOverlayClasses: "",
          };
          var ve = n(138),
            ge = n.n(ve);
          let ye = n(2);
          g.addToJquery(ye), g.plugin(me, "Reveal");
          class be extends r.a {
            constructor() {
              super(), (this.basepath = ""), (this.q = null), ge.a.use();
            }
            static get properties() {
              return { basepath: { type: String } };
            }
            _keyup(e) {
              var t = ye("#quickResults");
              e.target.value.length > 2 ? t.removeClass("hide") : t.addClass("hide");
            }
            firstUpdated() {
              ye("body").foundation(),
                ye(
                  '\n      <button id="search-open" data-open="searchModal" type="button" class="button" aria-label="cerca nel sito" aria-haspopup="dialog">\n        <i class="icon-search"></i>\n      </button>\n    '
                ).insertAfter("#header-menu"),
                ye(document).on("open.zf.reveal", () => {
                  document
                    .querySelector(".search__modal")
                    .querySelector(".close-button")
                    .focus();
                }),
                ye(document).on("closed.zf.reveal", () => {
                  document.querySelector("#search-open").focus();
                });
            }
            render() {
              return r.d`
             <div class="search__modal reveal" id="searchModal" role="dialog" data-reveal >
                  <button class="close-button search__modal__hide" data-close aria-label="Chiudi la ricerca" type="button"><span class="icon-close"></span></button>
                  <div class="grid-container">
                      <div class="grid-x align-center">
                          <div class="cell small-12 medium-8">
                              <form class="search__modal__form" role="search" method="get" action="${
                                this.basepath
                              }/ricerca.html">
                                  <input type="search" name="q" placeholder="${Object(
                                    u.a
                                  )("cerca", "search")}..." @input="${
                this._keyup
              }" .value="${this.q || ""}" id="search-input">
                                  <button type="submit" aria-label="avvia ricerca"><i class="icon-search"></i></button>
                              </form>
                              <!-- <div id="quickResults" class="search__quick-results hide">
                                  <ul class="search__quick-results__list">
                                      <li class="search__quick-results__list__item">
                                          <a href="#">Esempio 1</a>
                                      </li>
                                      <li class="search__quick-results__list__item">
                                          <a href="#">Esempio 2</a>
                                      </li>
                                      <li class="search__quick-results__list__item">
                                          <a href="#">Esempio 3</a>
                                      </li>
                                      <li class="search__quick-results__list__item">
                                          <a href="#">Esempio 4</a>
                                      </li>
                                      <li class="search__quick-results__list__item">
                                          <a href="#">Esempio 5</a>
                                      </li>
                                  </ul>
                              </div> -->
                          </div>
                      </div>
                  </div>
              </div>
          `;
            }
            createRenderRoot() {
              return this;
            }
          }
          customElements.get("rainews-search-modal") ||
            customElements.define("rainews-search-modal", be);
          var we = n(63),
            xe = n(70);
          let _e = n(2);
          class Se extends r.a {
            constructor() {
              super(),
                (this.heightHeaderFixed = null),
                (this.heightSecondaryBar = null),
                (this.nav = this.querySelector(".header-menu__nav")),
                (this.vlinks = this.querySelector(
                  ".header-menu__nav__list.visible-list"
                )),
                (this.hlinks = this.querySelector(
                  ".header-menu__nav__list.hidden-list"
                )),
                (this.navBtn = this.querySelector(".header-menu__nav__button")),
                (this.navSecondaryBar = this.querySelector(".topics__nav")),
                (this.vlinksSecondaryBar = this.querySelector(
                  ".topics__nav__list.visible-list"
                )),
                (this.hlinksSecondaryBar = this.querySelector(
                  ".topics__nav__list.hidden-list"
                )),
                (this.btnSecondaryBar = this.querySelector(".topics__nav__button")),
                (this.placeholderTemiCaldiMenu = this.querySelector(
                  ".site-menu__list__item.temicaldi-menu"
                )),
                (this.inPagefocusables = document
                  .querySelector("main")
                  .querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                  )),
                this.nav && (this.nav.style.overflow = "visible"),
                this.navSecondaryBar &&
                  (this.navSecondaryBar.style.overflow = "visible"),
                (this.updateNav = this.updateNav.bind(this));
            }
            connectedCallback() {
              super.connectedCallback(),
                window.addEventListener("resize", this.updateNav),
                window.addEventListener("load", this.updateNav),
                this.navBtn &&
                  this.navBtn.addEventListener("click", (e) => this.openMenu(e)),
                this.btnSecondaryBar &&
                  this.btnSecondaryBar.addEventListener("click", (e) =>
                    this.openMenu(e, ".temicaldi-menu")
                  ),
                (this.actionTracker = new we.a(
                  this,
                  "click",
                  this._tracking.bind(this),
                  this._handlerEvent.bind(this),
                  this._filterEvent.bind(this)
                ));
            }
            disconnectedCallback() {
              super.disconnectedCallback(),
                window.removeEventListener("resize", this.updateNav),
                window.removeEventListener("load", this.updateNav),
                this.btnSecondaryBar.removeEventListener("click", this.openMenu),
                this.navBtn.addEventListener("click", this.openMenu);
            }
            createRenderRoot() {
              return this;
            }
            firstUpdated() {
              i.a._init(),
                i.a._watcher(),
                document.querySelector("body.tgr-layout") &&
                  (this.tgrHeaderMenu(),
                  _e(window).on("changed.zf.mediaquery", (e, t, n) => {
                    this.tgrHeaderMenu();
                  }));
              let e = this;
              (this.browser = o.a.getParser(window.navigator.userAgent).parsedResult),
                (this.userAgentIsIphone =
                  "Apple" === this.browser.platform.vendor &&
                  "mobile" === this.browser.platform.type),
                (this.heightHeaderFixed = _e(".header-fixed").height()),
                (this.heightSecondaryBar = _e(".secondary-bar").height()),
                _e(window).on("resize", () => {
                  _e(".secondary-bar, .header-fixed").removeAttr("style");
                  let e = _e(".secondary-bar")[0].style.transition;
                  (_e(".secondary-bar")[0].style.transition = "none"),
                    (_e(".header-fixed")[0].style.transition = "none"),
                    (this.heightHeaderFixed = _e(".header-fixed").height()),
                    (this.heightSecondaryBar = _e(".secondary-bar").height()),
                    (_e(".secondary-bar")[0].style.transition = e),
                    (_e(".header-fixed")[0].style.transition = e);
                }),
                _e(".header-fixed")
                  .on("mouseenter", function () {
                    document.documentElement.scrollTop >= 50 && e.showSecondaryBar();
                  })
                  .on("mouseleave", function () {
                    document.documentElement.scrollTop >= 50 && e.hideSecondaryBar();
                  }),
                _e(window).on("scroll", function () {
                  _e(this).scrollTop() >= 50
                    ? (_e(".header-fixed").is(":hover") || e.hideSecondaryBar(),
                      _e("body").hasClass("alpha") &&
                        _e("body").removeClass("alpha-active"))
                    : (_e("body").hasClass("alpha") &&
                        !_e("body").hasClass("alpha-active") &&
                        _e("body").addClass("alpha-active"),
                      e.showSecondaryBar());
                }),
                document
                  .querySelector(".overlay-corporate-mask")
                  .addEventListener("click", (e) => {
                    this.openCorporateMenu(e);
                  }),
                document.querySelector(".corporate-menu-toggler") &&
                  document
                    .querySelector(".corporate-menu-toggler")
                    .addEventListener("click", e.openCorporateMenu),
                this.userAgentIsIphone &&
                  window.addEventListener(
                    "player:rai:PRESENTATION_MODE_CHANGE",
                    (e) => {
                      e.detail.presentationMode &&
                        ("fullscreen" == e.detail.presentationMode
                          ? document
                              .querySelector(".header-fixed")
                              .classList.contains("hide") ||
                            document
                              .querySelector(".header-fixed")
                              .classList.add("hide")
                          : document
                              .querySelector(".header-fixed")
                              .classList.remove("hide"));
                    }
                  ),
                this.nav &&
                  this.vlinks &&
                  [...this.vlinks.children].forEach((e, t) => {
                    e.setAttribute("data-position", t);
                  }),
                this.navSecondaryBar &&
                  this.vlinksSecondaryBar &&
                  [...this.vlinksSecondaryBar.children].forEach((e, t) => {
                    e.setAttribute("data-position", t);
                  }),
                document
                  .querySelector("#skip-to-content")
                  .addEventListener("click", (t) => {
                    e.inPagefocusables[0].focus();
                  }),
                this.updateNav();
            }
            updated() {
              this.updateNav();
            }
            updateNav() {
              var e;
              (this.nav && this.setNav(this.nav, this.vlinks, this.hlinks),
              this.navSecondaryBar &&
                this.setNav(
                  this.navSecondaryBar,
                  this.vlinksSecondaryBar,
                  this.hlinksSecondaryBar,
                  100
                ),
              this.placeholderTemiCaldiMenu) &&
                (i.a.atLeast("medium")
                  ? (this.placeholderTemiCaldiMenu.style.display =
                      null !== (e = this.btnSecondaryBar) &&
                      void 0 !== e &&
                      e.parentElement.classList.contains("hide")
                        ? "none"
                        : "block")
                  : (this.placeholderTemiCaldiMenu.style.display = "block"));
            }
            showSecondaryBar() {
              _e(".header-fixed").height(this.heightHeaderFixed),
                _e(".secondary-bar").height(this.heightSecondaryBar);
            }
            hideSecondaryBar() {
              _e(".header-fixed").height(
                this.heightHeaderFixed - this.heightSecondaryBar
              ),
                _e(".secondary-bar").height(0);
            }
            openMenu(e, t) {
              e.preventDefault();
              const n = new CustomEvent("openMenuEventFromDots", {
                bubbles: !0,
                composed: !0,
                detail: { ref: t },
              });
              document.dispatchEvent(n);
            }
            openCorporateMenu(e) {
              e.preventDefault();
              const t = new CustomEvent("toggleCorporateMenu", {
                bubbles: !0,
                composed: !0,
              });
              document.body.classList.toggle("corporate-menu-open"),
                document
                  .querySelector(".corporate-menu-toggler")
                  .classList.toggle("open"),
                document.dispatchEvent(t);
            }
            setNav(e, t, n, r = 0) {
              const i = e.offsetWidth - r,
                o = t.children,
                s = n.children;
              if (!o.length) return;
              let a = !1;
              for (const e of o)
                if (t.clientWidth >= i) {
                  if (((a = !0), 1 === o.length)) break;
                  const e = o[o.length - 2];
                  e.remove(), n.prepend(e);
                } else {
                  if (a || !s.length) break;
                  const e = s.item(0);
                  e.remove(), o[o.length - 1].before(e);
                }
              o[o.length - 1].classList.toggle("hide", !s.length);
            }
            tgrHeaderMenu() {
              var e = i.a.atLeast("xlarge") ? 83 : 80,
                t = document.querySelector("#logo-rainews").clientWidth,
                n = document.querySelector("#header-menu");
              n.style.left = i.a.upTo("small")
                ? (n.style.left = 0)
                : (n.style.left = e + t + "px");
            }
            _handlerEvent(e) {}
            _filterEvent(e) {
              var t;
              const n = e.target;
              return (
                "homepage" === document.body.getAttribute("data-layout") &&
                ("menu-open" ===
                  (null === (t = n.closest("button")) || void 0 === t
                    ? void 0
                    : t.getAttribute("id")) ||
                  !!n.closest(".header-menu__nav__list.visible-list") ||
                  !!n.closest(".topics__nav__list.visible-list"))
              );
            }
            _tracking(e) {
              return new Promise((t) => {
                var n;
                const r = e.target,
                  i = document.body.getAttribute("data-layout"),
                  o =
                    "menu-open" ===
                    (null === (n = r.closest("button")) || void 0 === n
                      ? void 0
                      : n.getAttribute("id")),
                  s = !!r.closest(".header-menu__nav__list.visible-list"),
                  a = !!r.closest(".topics__nav__list.visible-list");
                let l = { ck1: i || "pagina", ck2: null, ck3: null, ck4: null };
                if (o) l = this.trackMenu(r, l);
                else if (s) l = this.trackTematiche(r, l);
                else {
                  if (!a) return t(e);
                  l = this.trackTemiCaldi(r, l);
                }
                if (null === l) return t(e);
                this.dispatchEvent(
                  Object(xe.a)({
                    pageInfo: {
                      mode: "action",
                      linkId: `Fascia: ${l.ck1} - Slider Index: ${l.ck2} - Link: ${l.ck3}`,
                      customClickParameter: {
                        1: l.ck1,
                        2: l.ck2.toString(),
                        3: l.ck3 || null,
                        4: l.ck4 || null,
                      },
                    },
                  })
                ),
                  setTimeout(() => t(e), 300);
              });
            }
            trackTematiche(e, t) {
              var n;
              const r = e.classList.contains("header-menu__nav__button");
              return {
                ck1: t.ck1 + " | tematiche",
                ck2:
                  null === (n = e.parentElement) || void 0 === n
                    ? void 0
                    : n.getAttribute("data-position"),
                ck3: r ? "#" : e.href,
                ck4: r ? "show menu" : e.innerText,
              };
            }
            trackTemiCaldi(e, t) {
              var n;
              const r = e.classList.contains("topics__nav__button");
              return {
                ck1: t.ck1 + " | temi caldi",
                ck2:
                  null === (n = e.parentElement) || void 0 === n
                    ? void 0
                    : n.getAttribute("data-position"),
                ck3: r ? "#" : e.href,
                ck4: r ? "show all" : e.innerText,
              };
            }
            trackMenu(e, t) {
              return { ck1: t.ck1 + " | menu", ck2: 0, ck3: "#", ck4: "show menu" };
            }
            render() {
              return r.d``;
            }
          }
          customElements.get("rainews-header") ||
            customElements.define("rainews-header", Se);
        },
        32: function (e, t, n) {
          "use strict";
          n.d(t, "b", function () {
            return o;
          }),
            n.d(t, "a", function () {
              return s;
            });
          var r = n(25),
            i = null;
          function o(e) {
            if (r.a.useDeprecatedSynchronousErrorHandling) {
              var t = !i;
              if ((t && (i = { errorThrown: !1, error: null }), e(), t)) {
                var n = i,
                  o = n.errorThrown,
                  s = n.error;
                if (((i = null), o)) throw s;
              }
            } else e();
          }
          function s(e) {
            r.a.useDeprecatedSynchronousErrorHandling &&
              i &&
              ((i.errorThrown = !0), (i.error = e));
          }
        },
        33: function (e, t, n) {
          "use strict";
          function r(e) {
            return e;
          }
          n.d(t, "a", function () {
            return r;
          });
        },
        36: function (e, t, n) {
          "use strict";
          function r() {}
          n.d(t, "a", function () {
            return r;
          });
        },
        4: function (e, t, n) {
          "use strict";
          var r;
          n.d(t, "a", function () {
            return F;
          }),
            n.d(t, "b", function () {
              return _;
            }),
            n.d(t, "c", function () {
              return T;
            }),
            n.d(t, "d", function () {
              return E;
            }),
            n.d(t, "e", function () {
              return C;
            }),
            n.d(t, "f", function () {
              return S;
            });
          const i = globalThis.trustedTypes,
            o = i ? i.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
            s = `lit$${(Math.random() + "").slice(9)}$`,
            a = "?" + s,
            l = `<${a}>`,
            c = document,
            u = (e = "") => c.createComment(e),
            d = (e) => null === e || ("object" != typeof e && "function" != typeof e),
            h = Array.isArray,
            f = (e) => {
              var t;
              return (
                h(e) ||
                "function" ==
                  typeof (null === (t = e) || void 0 === t
                    ? void 0
                    : t[Symbol.iterator])
              );
            },
            p = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            m = /-->/g,
            v = />/g,
            g =
              />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
            y = /'/g,
            b = /"/g,
            w = /^(?:script|style|textarea)$/i,
            x =
              (e) =>
              (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
            _ = x(1),
            S = x(2),
            T = Symbol.for("lit-noChange"),
            E = Symbol.for("lit-nothing"),
            A = new WeakMap(),
            C = (e, t, n) => {
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
                o._$litPart$ = s = new M(
                  t.insertBefore(u(), e),
                  e,
                  void 0,
                  null != n ? n : {}
                );
              }
              return s._$AI(e), s;
            },
            k = c.createTreeWalker(c, 129, null, !1),
            $ = (e, t) => {
              const n = e.length - 1,
                r = [];
              let i,
                a = 2 === t ? "<svg>" : "",
                c = p;
              for (let t = 0; t < n; t++) {
                const n = e[t];
                let o,
                  u,
                  d = -1,
                  h = 0;
                for (
                  ;
                  h < n.length && ((c.lastIndex = h), (u = c.exec(n)), null !== u);
      
                )
                  (h = c.lastIndex),
                    c === p
                      ? "!--" === u[1]
                        ? (c = m)
                        : void 0 !== u[1]
                        ? (c = v)
                        : void 0 !== u[2]
                        ? (w.test(u[2]) && (i = RegExp("</" + u[2], "g")), (c = g))
                        : void 0 !== u[3] && (c = g)
                      : c === g
                      ? ">" === u[0]
                        ? ((c = null != i ? i : p), (d = -1))
                        : void 0 === u[1]
                        ? (d = -2)
                        : ((d = c.lastIndex - u[2].length),
                          (o = u[1]),
                          (c = void 0 === u[3] ? g : '"' === u[3] ? b : y))
                      : c === b || c === y
                      ? (c = g)
                      : c === m || c === v
                      ? (c = p)
                      : ((c = g), (i = void 0));
                const f = c === g && e[t + 1].startsWith("/>") ? " " : "";
                a +=
                  c === p
                    ? n + l
                    : d >= 0
                    ? (r.push(o), n.slice(0, d) + "$lit$" + n.slice(d) + s + f)
                    : n + s + (-2 === d ? (r.push(void 0), t) : f);
              }
              const u = a + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
              return [void 0 !== o ? o.createHTML(u) : u, r];
            };
          class O {
            constructor({ strings: e, _$litType$: t }, n) {
              let r;
              this.parts = [];
              let o = 0,
                l = 0;
              const c = e.length - 1,
                d = this.parts,
                [h, f] = $(e, t);
              if (
                ((this.el = O.createElement(h, n)),
                (k.currentNode = this.el.content),
                2 === t)
              ) {
                const e = this.el.content,
                  t = e.firstChild;
                t.remove(), e.append(...t.childNodes);
              }
              for (; null !== (r = k.nextNode()) && d.length < c; ) {
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
                                ? z
                                : "?" === t[1]
                                ? P
                                : "@" === t[1]
                                ? D
                                : N,
                          });
                        } else d.push({ type: 6, index: o });
                      }
                    for (const t of e) r.removeAttribute(t);
                  }
                  if (w.test(r.tagName)) {
                    const e = r.textContent.split(s),
                      t = e.length - 1;
                    if (t > 0) {
                      r.textContent = i ? i.emptyScript : "";
                      for (let n = 0; n < t; n++)
                        r.append(e[n], u()),
                          k.nextNode(),
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
          function L(e, t, n = e, r) {
            var i, o, s, a;
            if (t === T) return t;
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
              void 0 !== l && (t = L(e, l._$AS(e, t.values), l, r)),
              t
            );
          }
          class j {
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
              k.currentNode = i;
              let o = k.nextNode(),
                s = 0,
                a = 0,
                l = r[0];
              for (; void 0 !== l; ) {
                if (s === l.index) {
                  let t;
                  2 === l.type
                    ? (t = new M(o, o.nextSibling, this, e))
                    : 1 === l.type
                    ? (t = new l.ctor(o, l.name, l.strings, this, e))
                    : 6 === l.type && (t = new q(o, this, e)),
                    this.v.push(t),
                    (l = r[++a]);
                }
                s !== (null == l ? void 0 : l.index) && ((o = k.nextNode()), s++);
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
          class M {
            constructor(e, t, n, r) {
              var i;
              (this.type = 2),
                (this._$AH = E),
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
              (e = L(this, e, t)),
                d(e)
                  ? e === E || null == e || "" === e
                    ? (this._$AH !== E && this._$AR(), (this._$AH = E))
                    : e !== this._$AH && e !== T && this.$(e)
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
              this._$AH !== E && d(this._$AH)
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
                    : (void 0 === r.el && (r.el = O.createElement(r.h, this.options)),
                      r);
              if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i)
                this._$AH.m(n);
              else {
                const e = new j(i, this),
                  t = e.p(this.options);
                e.m(n), this.S(t), (this._$AH = e);
              }
            }
            _$AC(e) {
              let t = A.get(e.strings);
              return void 0 === t && A.set(e.strings, (t = new O(e))), t;
            }
            M(e) {
              h(this._$AH) || ((this._$AH = []), this._$AR());
              const t = this._$AH;
              let n,
                r = 0;
              for (const i of e)
                r === t.length
                  ? t.push((n = new M(this.A(u()), this.A(u()), this, this.options)))
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
          class N {
            constructor(e, t, n, r, i) {
              (this.type = 1),
                (this._$AH = E),
                (this._$AN = void 0),
                (this.element = e),
                (this.name = t),
                (this._$AM = r),
                (this.options = i),
                n.length > 2 || "" !== n[0] || "" !== n[1]
                  ? ((this._$AH = Array(n.length - 1).fill(new String())),
                    (this.strings = n))
                  : (this._$AH = E);
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
                (e = L(this, e, t, 0)),
                  (o = !d(e) || (e !== this._$AH && e !== T)),
                  o && (this._$AH = e);
              else {
                const r = e;
                let s, a;
                for (e = i[0], s = 0; s < i.length - 1; s++)
                  (a = L(this, r[n + s], t, s)),
                    a === T && (a = this._$AH[s]),
                    o || (o = !d(a) || a !== this._$AH[s]),
                    a === E
                      ? (e = E)
                      : e !== E && (e += (null != a ? a : "") + i[s + 1]),
                    (this._$AH[s] = a);
              }
              o && !r && this.k(e);
            }
            k(e) {
              e === E
                ? this.element.removeAttribute(this.name)
                : this.element.setAttribute(this.name, null != e ? e : "");
            }
          }
          class z extends N {
            constructor() {
              super(...arguments), (this.type = 3);
            }
            k(e) {
              this.element[this.name] = e === E ? void 0 : e;
            }
          }
          class P extends N {
            constructor() {
              super(...arguments), (this.type = 4);
            }
            k(e) {
              e && e !== E
                ? this.element.setAttribute(this.name, "")
                : this.element.removeAttribute(this.name);
            }
          }
          class D extends N {
            constructor(e, t, n, r, i) {
              super(e, t, n, r, i), (this.type = 5);
            }
            _$AI(e, t = this) {
              var n;
              if ((e = null !== (n = L(this, e, t, 0)) && void 0 !== n ? n : E) === T)
                return;
              const r = this._$AH,
                i =
                  (e === E && r !== E) ||
                  e.capture !== r.capture ||
                  e.once !== r.once ||
                  e.passive !== r.passive,
                o = e !== E && (r === E || i);
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
          class q {
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
              L(this, e);
            }
          }
          const F = {
              P: "$lit$",
              V: s,
              L: a,
              I: 1,
              N: $,
              R: j,
              D: f,
              j: L,
              H: M,
              O: N,
              F: P,
              B: D,
              W: z,
              Z: q,
            },
            B = window.litHtmlPolyfillSupport;
          null == B || B(O, M),
            (null !== (r = globalThis.litHtmlVersions) && void 0 !== r
              ? r
              : (globalThis.litHtmlVersions = [])
            ).push("2.0.1");
        },
        42: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return r;
          });
          var r =
            ("function" == typeof Symbol && Symbol.observable) || "@@observable";
        },
        43: function (e, t, n) {
          "use strict";
          n.d(t, "b", function () {
            return f;
          }),
            n.d(t, "a", function () {
              return g;
            });
          var r = n(10),
            i = n(9),
            o = n(27),
            s = n(25),
            a = n(52),
            l = n(36),
            c = u("C", void 0, void 0);
          function u(e, t, n) {
            return { kind: e, value: t, error: n };
          }
          var d = n(51),
            h = n(32),
            f = (function (e) {
              function t(t) {
                var n = e.call(this) || this;
                return (
                  (n.isStopped = !1),
                  t
                    ? ((n.destination = t), Object(o.c)(t) && t.add(n))
                    : (n.destination = w),
                  n
                );
              }
              return (
                Object(r.e)(t, e),
                (t.create = function (e, t, n) {
                  return new g(e, t, n);
                }),
                (t.prototype.next = function (e) {
                  this.isStopped
                    ? b(
                        (function (e) {
                          return u("N", e, void 0);
                        })(e),
                        this
                      )
                    : this._next(e);
                }),
                (t.prototype.error = function (e) {
                  this.isStopped
                    ? b(u("E", void 0, e), this)
                    : ((this.isStopped = !0), this._error(e));
                }),
                (t.prototype.complete = function () {
                  this.isStopped
                    ? b(c, this)
                    : ((this.isStopped = !0), this._complete());
                }),
                (t.prototype.unsubscribe = function () {
                  this.closed ||
                    ((this.isStopped = !0),
                    e.prototype.unsubscribe.call(this),
                    (this.destination = null));
                }),
                (t.prototype._next = function (e) {
                  this.destination.next(e);
                }),
                (t.prototype._error = function (e) {
                  try {
                    this.destination.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }),
                (t.prototype._complete = function () {
                  try {
                    this.destination.complete();
                  } finally {
                    this.unsubscribe();
                  }
                }),
                t
              );
            })(o.b),
            p = Function.prototype.bind;
          function m(e, t) {
            return p.call(e, t);
          }
          var v = (function () {
              function e(e) {
                this.partialObserver = e;
              }
              return (
                (e.prototype.next = function (e) {
                  var t = this.partialObserver;
                  if (t.next)
                    try {
                      t.next(e);
                    } catch (e) {
                      y(e);
                    }
                }),
                (e.prototype.error = function (e) {
                  var t = this.partialObserver;
                  if (t.error)
                    try {
                      t.error(e);
                    } catch (e) {
                      y(e);
                    }
                  else y(e);
                }),
                (e.prototype.complete = function () {
                  var e = this.partialObserver;
                  if (e.complete)
                    try {
                      e.complete();
                    } catch (e) {
                      y(e);
                    }
                }),
                e
              );
            })(),
            g = (function (e) {
              function t(t, n, r) {
                var o,
                  a,
                  l = e.call(this) || this;
                Object(i.a)(t) || !t
                  ? (o = {
                      next: null != t ? t : void 0,
                      error: null != n ? n : void 0,
                      complete: null != r ? r : void 0,
                    })
                  : l && s.a.useDeprecatedNextContext
                  ? (((a = Object.create(t)).unsubscribe = function () {
                      return l.unsubscribe();
                    }),
                    (o = {
                      next: t.next && m(t.next, a),
                      error: t.error && m(t.error, a),
                      complete: t.complete && m(t.complete, a),
                    }))
                  : (o = t);
                return (l.destination = new v(o)), l;
              }
              return Object(r.e)(t, e), t;
            })(f);
          function y(e) {
            s.a.useDeprecatedSynchronousErrorHandling
              ? Object(h.a)(e)
              : Object(a.a)(e);
          }
          function b(e, t) {
            var n = s.a.onStoppedNotification;
            n &&
              d.a.setTimeout(function () {
                return n(e, t);
              });
          }
          var w = {
            closed: !0,
            next: l.a,
            error: function (e) {
              throw e;
            },
            complete: l.a,
          };
        },
        44: function (e, t, n) {
          var r = n(74),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
          e.exports = o;
        },
        47: function (e, t, n) {
          "use strict";
          function r(e, t) {
            if (e) {
              var n = e.indexOf(t);
              0 <= n && e.splice(n, 1);
            }
          }
          n.d(t, "a", function () {
            return r;
          });
        },
        50: function (e, t, n) {
          "use strict";
          function r(e) {
            var t = e(function (e) {
              Error.call(e), (e.stack = new Error().stack);
            });
            return (
              (t.prototype = Object.create(Error.prototype)),
              (t.prototype.constructor = t),
              t
            );
          }
          n.d(t, "a", function () {
            return r;
          });
        },
        51: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return i;
          });
          var r = n(10),
            i = {
              setTimeout: function (e, t) {
                for (var n = [], o = 2; o < arguments.length; o++)
                  n[o - 2] = arguments[o];
                var s = i.delegate;
                return (null == s ? void 0 : s.setTimeout)
                  ? s.setTimeout.apply(s, Object(r.h)([e, t], Object(r.g)(n)))
                  : setTimeout.apply(void 0, Object(r.h)([e, t], Object(r.g)(n)));
              },
              clearTimeout: function (e) {
                var t = i.delegate;
                return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
              },
              delegate: void 0,
            };
        },
        52: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return o;
          });
          var r = n(25),
            i = n(51);
          function o(e) {
            i.a.setTimeout(function () {
              var t = r.a.onUnhandledError;
              if (!t) throw e;
              t(e);
            });
          }
        },
        56: function (e, t) {
          e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          };
        },
        59: function (e, t) {
          e.exports = function (e) {
            return null != e && "object" == typeof e;
          };
        },
        62: function (e, t, n) {
          "use strict";
          const r = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku",
            },
            i = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser",
            },
            o = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
            s = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku",
            },
            a = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit",
            };
          class l {
            static getFirstMatch(e, t) {
              const n = t.match(e);
              return (n && n.length > 0 && n[1]) || "";
            }
            static getSecondMatch(e, t) {
              const n = t.match(e);
              return (n && n.length > 1 && n[2]) || "";
            }
            static matchAndReturnConst(e, t, n) {
              if (e.test(t)) return n;
            }
            static getWindowsVersionName(e) {
              switch (e) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            }
            static getMacOSVersionName(e) {
              const t = e
                .split(".")
                .splice(0, 2)
                .map((e) => parseInt(e, 10) || 0);
              if ((t.push(0), 10 === t[0]))
                switch (t[1]) {
                  case 5:
                    return "Leopard";
                  case 6:
                    return "Snow Leopard";
                  case 7:
                    return "Lion";
                  case 8:
                    return "Mountain Lion";
                  case 9:
                    return "Mavericks";
                  case 10:
                    return "Yosemite";
                  case 11:
                    return "El Capitan";
                  case 12:
                    return "Sierra";
                  case 13:
                    return "High Sierra";
                  case 14:
                    return "Mojave";
                  case 15:
                    return "Catalina";
                  default:
                    return;
                }
            }
            static getAndroidVersionName(e) {
              const t = e
                .split(".")
                .splice(0, 2)
                .map((e) => parseInt(e, 10) || 0);
              if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                return 1 === t[0] && t[1] < 6
                  ? "Cupcake"
                  : 1 === t[0] && t[1] >= 6
                  ? "Donut"
                  : 2 === t[0] && t[1] < 2
                  ? "Eclair"
                  : 2 === t[0] && 2 === t[1]
                  ? "Froyo"
                  : 2 === t[0] && t[1] > 2
                  ? "Gingerbread"
                  : 3 === t[0]
                  ? "Honeycomb"
                  : 4 === t[0] && t[1] < 1
                  ? "Ice Cream Sandwich"
                  : 4 === t[0] && t[1] < 4
                  ? "Jelly Bean"
                  : 4 === t[0] && t[1] >= 4
                  ? "KitKat"
                  : 5 === t[0]
                  ? "Lollipop"
                  : 6 === t[0]
                  ? "Marshmallow"
                  : 7 === t[0]
                  ? "Nougat"
                  : 8 === t[0]
                  ? "Oreo"
                  : 9 === t[0]
                  ? "Pie"
                  : void 0;
            }
            static getVersionPrecision(e) {
              return e.split(".").length;
            }
            static compareVersions(e, t, n = !1) {
              const r = l.getVersionPrecision(e),
                i = l.getVersionPrecision(t);
              let o = Math.max(r, i),
                s = 0;
              const a = l.map([e, t], (e) => {
                const t = o - l.getVersionPrecision(e),
                  n = e + new Array(t + 1).join(".0");
                return l
                  .map(n.split("."), (e) => new Array(20 - e.length).join("0") + e)
                  .reverse();
              });
              for (n && (s = o - Math.min(r, i)), o -= 1; o >= s; ) {
                if (a[0][o] > a[1][o]) return 1;
                if (a[0][o] === a[1][o]) {
                  if (o === s) return 0;
                  o -= 1;
                } else if (a[0][o] < a[1][o]) return -1;
              }
            }
            static map(e, t) {
              const n = [];
              let r;
              if (Array.prototype.map) return Array.prototype.map.call(e, t);
              for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
              return n;
            }
            static find(e, t) {
              let n, r;
              if (Array.prototype.find) return Array.prototype.find.call(e, t);
              for (n = 0, r = e.length; n < r; n += 1) {
                const r = e[n];
                if (t(r, n)) return r;
              }
            }
            static assign(e, ...t) {
              const n = e;
              let r, i;
              if (Object.assign) return Object.assign(e, ...t);
              for (r = 0, i = t.length; r < i; r += 1) {
                const e = t[r];
                if ("object" == typeof e && null !== e) {
                  Object.keys(e).forEach((t) => {
                    n[t] = e[t];
                  });
                }
              }
              return e;
            }
            static getBrowserAlias(e) {
              return r[e];
            }
            static getBrowserTypeByAlias(e) {
              return i[e] || "";
            }
          }
          const c = /version\/(\d+(\.?_?\d+)+)/i;
          var u = [
              {
                test: [/googlebot/i],
                describe(e) {
                  const t = { name: "Googlebot" },
                    n =
                      l.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/opera/i],
                describe(e) {
                  const t = { name: "Opera" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/opr\/|opios/i],
                describe(e) {
                  const t = { name: "Opera" },
                    n =
                      l.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/SamsungBrowser/i],
                describe(e) {
                  const t = { name: "Samsung Internet for Android" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/Whale/i],
                describe(e) {
                  const t = { name: "NAVER Whale Browser" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/MZBrowser/i],
                describe(e) {
                  const t = { name: "MZ Browser" },
                    n =
                      l.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/focus/i],
                describe(e) {
                  const t = { name: "Focus" },
                    n =
                      l.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/swing/i],
                describe(e) {
                  const t = { name: "Swing" },
                    n =
                      l.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/coast/i],
                describe(e) {
                  const t = { name: "Opera Coast" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe(e) {
                  const t = { name: "Opera Touch" },
                    n =
                      l.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/yabrowser/i],
                describe(e) {
                  const t = { name: "Yandex Browser" },
                    n =
                      l.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/ucbrowser/i],
                describe(e) {
                  const t = { name: "UC Browser" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/Maxthon|mxios/i],
                describe(e) {
                  const t = { name: "Maxthon" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/epiphany/i],
                describe(e) {
                  const t = { name: "Epiphany" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/puffin/i],
                describe(e) {
                  const t = { name: "Puffin" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/sleipnir/i],
                describe(e) {
                  const t = { name: "Sleipnir" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/k-meleon/i],
                describe(e) {
                  const t = { name: "K-Meleon" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/micromessenger/i],
                describe(e) {
                  const t = { name: "WeChat" },
                    n =
                      l.getFirstMatch(
                        /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/qqbrowser/i],
                describe(e) {
                  const t = {
                      name: /qqbrowserlite/i.test(e)
                        ? "QQ Browser Lite"
                        : "QQ Browser",
                    },
                    n =
                      l.getFirstMatch(
                        /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/msie|trident/i],
                describe(e) {
                  const t = { name: "Internet Explorer" },
                    n = l.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/\sedg\//i],
                describe(e) {
                  const t = { name: "Microsoft Edge" },
                    n = l.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/edg([ea]|ios)/i],
                describe(e) {
                  const t = { name: "Microsoft Edge" },
                    n = l.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/vivaldi/i],
                describe(e) {
                  const t = { name: "Vivaldi" },
                    n = l.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/seamonkey/i],
                describe(e) {
                  const t = { name: "SeaMonkey" },
                    n = l.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/sailfish/i],
                describe(e) {
                  const t = { name: "Sailfish" },
                    n = l.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/silk/i],
                describe(e) {
                  const t = { name: "Amazon Silk" },
                    n = l.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/phantom/i],
                describe(e) {
                  const t = { name: "PhantomJS" },
                    n = l.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/slimerjs/i],
                describe(e) {
                  const t = { name: "SlimerJS" },
                    n = l.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(e) {
                  const t = { name: "BlackBerry" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe(e) {
                  const t = { name: "WebOS Browser" },
                    n =
                      l.getFirstMatch(c, e) ||
                      l.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/bada/i],
                describe(e) {
                  const t = { name: "Bada" },
                    n = l.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/tizen/i],
                describe(e) {
                  const t = { name: "Tizen" },
                    n =
                      l.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/qupzilla/i],
                describe(e) {
                  const t = { name: "QupZilla" },
                    n =
                      l.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/firefox|iceweasel|fxios/i],
                describe(e) {
                  const t = { name: "Firefox" },
                    n = l.getFirstMatch(
                      /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/electron/i],
                describe(e) {
                  const t = { name: "Electron" },
                    n = l.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/MiuiBrowser/i],
                describe(e) {
                  const t = { name: "Miui" },
                    n = l.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/chromium/i],
                describe(e) {
                  const t = { name: "Chromium" },
                    n =
                      l.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                      l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/chrome|crios|crmo/i],
                describe(e) {
                  const t = { name: "Chrome" },
                    n = l.getFirstMatch(
                      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/GSA/i],
                describe(e) {
                  const t = { name: "Google Search" },
                    n = l.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test(e) {
                  const t = !e.test(/like android/i),
                    n = e.test(/android/i);
                  return t && n;
                },
                describe(e) {
                  const t = { name: "Android Browser" },
                    n = l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/playstation 4/i],
                describe(e) {
                  const t = { name: "PlayStation 4" },
                    n = l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/safari|applewebkit/i],
                describe(e) {
                  const t = { name: "Safari" },
                    n = l.getFirstMatch(c, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/.*/i],
                describe(e) {
                  const t =
                    -1 !== e.search("\\(")
                      ? /^(.*)\/(.*)[ \t]\((.*)/
                      : /^(.*)\/(.*) /;
                  return {
                    name: l.getFirstMatch(t, e),
                    version: l.getSecondMatch(t, e),
                  };
                },
              },
            ],
            d = [
              {
                test: [/Roku\/DVP/],
                describe(e) {
                  const t = l.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                  return { name: s.Roku, version: t };
                },
              },
              {
                test: [/windows phone/i],
                describe(e) {
                  const t = l.getFirstMatch(
                    /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: s.WindowsPhone, version: t };
                },
              },
              {
                test: [/windows /i],
                describe(e) {
                  const t = l.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                    n = l.getWindowsVersionName(t);
                  return { name: s.Windows, version: t, versionName: n };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe(e) {
                  const t = { name: s.iOS },
                    n = l.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/macintosh/i],
                describe(e) {
                  const t = l
                      .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                      .replace(/[_\s]/g, "."),
                    n = l.getMacOSVersionName(t),
                    r = { name: s.MacOS, version: t };
                  return n && (r.versionName = n), r;
                },
              },
              {
                test: [/(ipod|iphone|ipad)/i],
                describe(e) {
                  const t = l
                    .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                    .replace(/[_\s]/g, ".");
                  return { name: s.iOS, version: t };
                },
              },
              {
                test(e) {
                  const t = !e.test(/like android/i),
                    n = e.test(/android/i);
                  return t && n;
                },
                describe(e) {
                  const t = l.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                    n = l.getAndroidVersionName(t),
                    r = { name: s.Android, version: t };
                  return n && (r.versionName = n), r;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe(e) {
                  const t = l.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                    n = { name: s.WebOS };
                  return t && t.length && (n.version = t), n;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(e) {
                  const t =
                    l.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
                    l.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
                    l.getFirstMatch(/\bbb(\d+)/i, e);
                  return { name: s.BlackBerry, version: t };
                },
              },
              {
                test: [/bada/i],
                describe(e) {
                  const t = l.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                  return { name: s.Bada, version: t };
                },
              },
              {
                test: [/tizen/i],
                describe(e) {
                  const t = l.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                  return { name: s.Tizen, version: t };
                },
              },
              { test: [/linux/i], describe: () => ({ name: s.Linux }) },
              { test: [/CrOS/], describe: () => ({ name: s.ChromeOS }) },
              {
                test: [/PlayStation 4/],
                describe(e) {
                  const t = l.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                  return { name: s.PlayStation4, version: t };
                },
              },
            ],
            h = [
              {
                test: [/googlebot/i],
                describe: () => ({ type: "bot", vendor: "Google" }),
              },
              {
                test: [/huawei/i],
                describe(e) {
                  const t = l.getFirstMatch(/(can-l01)/i, e) && "Nova",
                    n = { type: o.mobile, vendor: "Huawei" };
                  return t && (n.model = t), n;
                },
              },
              {
                test: [/nexus\s*(?:7|8|9|10).*/i],
                describe: () => ({ type: o.tablet, vendor: "Nexus" }),
              },
              {
                test: [/ipad/i],
                describe: () => ({ type: o.tablet, vendor: "Apple", model: "iPad" }),
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: () => ({ type: o.tablet, vendor: "Apple", model: "iPad" }),
              },
              {
                test: [/kftt build/i],
                describe: () => ({
                  type: o.tablet,
                  vendor: "Amazon",
                  model: "Kindle Fire HD 7",
                }),
              },
              {
                test: [/silk/i],
                describe: () => ({ type: o.tablet, vendor: "Amazon" }),
              },
              { test: [/tablet(?! pc)/i], describe: () => ({ type: o.tablet }) },
              {
                test(e) {
                  const t = e.test(/ipod|iphone/i),
                    n = e.test(/like (ipod|iphone)/i);
                  return t && !n;
                },
                describe(e) {
                  const t = l.getFirstMatch(/(ipod|iphone)/i, e);
                  return { type: o.mobile, vendor: "Apple", model: t };
                },
              },
              {
                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                describe: () => ({ type: o.mobile, vendor: "Nexus" }),
              },
              { test: [/[^-]mobi/i], describe: () => ({ type: o.mobile }) },
              {
                test: (e) => "blackberry" === e.getBrowserName(!0),
                describe: () => ({ type: o.mobile, vendor: "BlackBerry" }),
              },
              {
                test: (e) => "bada" === e.getBrowserName(!0),
                describe: () => ({ type: o.mobile }),
              },
              {
                test: (e) => "windows phone" === e.getBrowserName(),
                describe: () => ({ type: o.mobile, vendor: "Microsoft" }),
              },
              {
                test(e) {
                  const t = Number(String(e.getOSVersion()).split(".")[0]);
                  return "android" === e.getOSName(!0) && t >= 3;
                },
                describe: () => ({ type: o.tablet }),
              },
              {
                test: (e) => "android" === e.getOSName(!0),
                describe: () => ({ type: o.mobile }),
              },
              {
                test: (e) => "macos" === e.getOSName(!0),
                describe: () => ({ type: o.desktop, vendor: "Apple" }),
              },
              {
                test: (e) => "windows" === e.getOSName(!0),
                describe: () => ({ type: o.desktop }),
              },
              {
                test: (e) => "linux" === e.getOSName(!0),
                describe: () => ({ type: o.desktop }),
              },
              {
                test: (e) => "playstation 4" === e.getOSName(!0),
                describe: () => ({ type: o.tv }),
              },
              {
                test: (e) => "roku" === e.getOSName(!0),
                describe: () => ({ type: o.tv }),
              },
            ],
            f = [
              {
                test: (e) => "microsoft edge" === e.getBrowserName(!0),
                describe(e) {
                  if (/\sedg\//i.test(e)) return { name: a.Blink };
                  const t = l.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                  return { name: a.EdgeHTML, version: t };
                },
              },
              {
                test: [/trident/i],
                describe(e) {
                  const t = { name: a.Trident },
                    n = l.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: (e) => e.test(/presto/i),
                describe(e) {
                  const t = { name: a.Presto },
                    n = l.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test(e) {
                  const t = e.test(/gecko/i),
                    n = e.test(/like gecko/i);
                  return t && !n;
                },
                describe(e) {
                  const t = { name: a.Gecko },
                    n = l.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/(apple)?webkit\/537\.36/i],
                describe: () => ({ name: a.Blink }),
              },
              {
                test: [/(apple)?webkit/i],
                describe(e) {
                  const t = { name: a.WebKit },
                    n = l.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
            ];
          var p = class {
            constructor(e, t = !1) {
              if (null == e || "" === e)
                throw new Error("UserAgent parameter can't be empty");
              (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
            }
            getUA() {
              return this._ua;
            }
            test(e) {
              return e.test(this._ua);
            }
            parseBrowser() {
              this.parsedResult.browser = {};
              const e = l.find(u, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
              });
              return (
                e && (this.parsedResult.browser = e.describe(this.getUA())),
                this.parsedResult.browser
              );
            }
            getBrowser() {
              return this.parsedResult.browser
                ? this.parsedResult.browser
                : this.parseBrowser();
            }
            getBrowserName(e) {
              return e
                ? String(this.getBrowser().name).toLowerCase() || ""
                : this.getBrowser().name || "";
            }
            getBrowserVersion() {
              return this.getBrowser().version;
            }
            getOS() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }
            parseOS() {
              this.parsedResult.os = {};
              const e = l.find(d, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
              });
              return (
                e && (this.parsedResult.os = e.describe(this.getUA())),
                this.parsedResult.os
              );
            }
            getOSName(e) {
              const { name: t } = this.getOS();
              return e ? String(t).toLowerCase() || "" : t || "";
            }
            getOSVersion() {
              return this.getOS().version;
            }
            getPlatform() {
              return this.parsedResult.platform
                ? this.parsedResult.platform
                : this.parsePlatform();
            }
            getPlatformType(e = !1) {
              const { type: t } = this.getPlatform();
              return e ? String(t).toLowerCase() || "" : t || "";
            }
            parsePlatform() {
              this.parsedResult.platform = {};
              const e = l.find(h, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
              });
              return (
                e && (this.parsedResult.platform = e.describe(this.getUA())),
                this.parsedResult.platform
              );
            }
            getEngine() {
              return this.parsedResult.engine
                ? this.parsedResult.engine
                : this.parseEngine();
            }
            getEngineName(e) {
              return e
                ? String(this.getEngine().name).toLowerCase() || ""
                : this.getEngine().name || "";
            }
            parseEngine() {
              this.parsedResult.engine = {};
              const e = l.find(f, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
              });
              return (
                e && (this.parsedResult.engine = e.describe(this.getUA())),
                this.parsedResult.engine
              );
            }
            parse() {
              return (
                this.parseBrowser(),
                this.parseOS(),
                this.parsePlatform(),
                this.parseEngine(),
                this
              );
            }
            getResult() {
              return l.assign({}, this.parsedResult);
            }
            satisfies(e) {
              const t = {};
              let n = 0;
              const r = {};
              let i = 0;
              if (
                (Object.keys(e).forEach((o) => {
                  const s = e[o];
                  "string" == typeof s
                    ? ((r[o] = s), (i += 1))
                    : "object" == typeof s && ((t[o] = s), (n += 1));
                }),
                n > 0)
              ) {
                const e = Object.keys(t),
                  n = l.find(e, (e) => this.isOS(e));
                if (n) {
                  const e = this.satisfies(t[n]);
                  if (void 0 !== e) return e;
                }
                const r = l.find(e, (e) => this.isPlatform(e));
                if (r) {
                  const e = this.satisfies(t[r]);
                  if (void 0 !== e) return e;
                }
              }
              if (i > 0) {
                const e = Object.keys(r),
                  t = l.find(e, (e) => this.isBrowser(e, !0));
                if (void 0 !== t) return this.compareVersion(r[t]);
              }
            }
            isBrowser(e, t = !1) {
              const n = this.getBrowserName().toLowerCase();
              let r = e.toLowerCase();
              const i = l.getBrowserTypeByAlias(r);
              return t && i && (r = i.toLowerCase()), r === n;
            }
            compareVersion(e) {
              let t = [0],
                n = e,
                r = !1;
              const i = this.getBrowserVersion();
              if ("string" == typeof i)
                return (
                  ">" === e[0] || "<" === e[0]
                    ? ((n = e.substr(1)),
                      "=" === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []),
                      ">" === e[0] ? t.push(1) : t.push(-1))
                    : "=" === e[0]
                    ? (n = e.substr(1))
                    : "~" === e[0] && ((r = !0), (n = e.substr(1))),
                  t.indexOf(l.compareVersions(i, n, r)) > -1
                );
            }
            isOS(e) {
              return this.getOSName(!0) === String(e).toLowerCase();
            }
            isPlatform(e) {
              return this.getPlatformType(!0) === String(e).toLowerCase();
            }
            isEngine(e) {
              return this.getEngineName(!0) === String(e).toLowerCase();
            }
            is(e, t = !1) {
              return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
            }
            some(e = []) {
              return e.some((e) => this.is(e));
            }
          };
          t.a = class {
            static getParser(e, t = !1) {
              if ("string" != typeof e)
                throw new Error("UserAgent should be a string");
              return new p(e, t);
            }
            static parse(e) {
              return new p(e).getResult();
            }
            static get BROWSER_MAP() {
              return i;
            }
            static get ENGINE_MAP() {
              return a;
            }
            static get OS_MAP() {
              return s;
            }
            static get PLATFORMS_MAP() {
              return o;
            }
          };
        },
        63: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return M;
          });
          var r = n(152),
            i = n(10),
            o = function (e) {
              return e && "number" == typeof e.length && "function" != typeof e;
            },
            s = n(9);
          var a = n(22),
            l = n(42);
          var c =
            "function" == typeof Symbol && Symbol.iterator
              ? Symbol.iterator
              : "@@iterator";
          var u = n(52);
          function d(e) {
            if (e instanceof a.a) return e;
            if (null != e) {
              if (
                (function (e) {
                  return Object(s.a)(e[l.a]);
                })(e)
              )
                return (
                  (f = e),
                  new a.a(function (e) {
                    var t = f[l.a]();
                    if (Object(s.a)(t.subscribe)) return t.subscribe(e);
                    throw new TypeError(
                      "Provided object does not correctly implement Symbol.observable"
                    );
                  })
                );
              if (o(e))
                return (
                  (d = e),
                  new a.a(function (e) {
                    for (var t = 0; t < d.length && !e.closed; t++) e.next(d[t]);
                    e.complete();
                  })
                );
              if (((r = e), Object(s.a)(null == r ? void 0 : r.then)))
                return (
                  (n = e),
                  new a.a(function (e) {
                    n.then(
                      function (t) {
                        e.closed || (e.next(t), e.complete());
                      },
                      function (t) {
                        return e.error(t);
                      }
                    ).then(null, u.a);
                  })
                );
              if (
                (function (e) {
                  return (
                    Symbol.asyncIterator &&
                    Object(s.a)(null == e ? void 0 : e[Symbol.asyncIterator])
                  );
                })(e)
              )
                return h(e);
              if (
                (function (e) {
                  return Object(s.a)(null == e ? void 0 : e[c]);
                })(e)
              )
                return (
                  (t = e),
                  new a.a(function (e) {
                    var n, r;
                    try {
                      for (
                        var o = Object(i.i)(t), s = o.next();
                        !s.done;
                        s = o.next()
                      ) {
                        var a = s.value;
                        if ((e.next(a), e.closed)) return;
                      }
                    } catch (e) {
                      n = { error: e };
                    } finally {
                      try {
                        s && !s.done && (r = o.return) && r.call(o);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                    e.complete();
                  })
                );
              if (
                (function (e) {
                  return Object(s.a)(null == e ? void 0 : e.getReader);
                })(e)
              )
                return h(
                  (function (e) {
                    return Object(i.a)(this, arguments, function () {
                      var t, n, r;
                      return Object(i.f)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            (t = e.getReader()), (o.label = 1);
                          case 1:
                            o.trys.push([1, , 9, 10]), (o.label = 2);
                          case 2:
                            return [4, Object(i.c)(t.read())];
                          case 3:
                            return (
                              (n = o.sent()),
                              (r = n.value),
                              n.done ? [4, Object(i.c)(void 0)] : [3, 5]
                            );
                          case 4:
                            return [2, o.sent()];
                          case 5:
                            return [4, Object(i.c)(r)];
                          case 6:
                            return [4, o.sent()];
                          case 7:
                            return o.sent(), [3, 2];
                          case 8:
                            return [3, 10];
                          case 9:
                            return t.releaseLock(), [7];
                          case 10:
                            return [2];
                        }
                      });
                    });
                  })(e)
                );
            }
            var t, n, r, d, f;
            throw (function (e) {
              return new TypeError(
                "You provided " +
                  (null !== e && "object" == typeof e
                    ? "an invalid object"
                    : "'" + e + "'") +
                  " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
              );
            })(e);
          }
          function h(e) {
            return new a.a(function (t) {
              (function (e, t) {
                var n, r, o, s;
                return Object(i.d)(this, void 0, void 0, function () {
                  var a, l;
                  return Object(i.f)(this, function (c) {
                    switch (c.label) {
                      case 0:
                        c.trys.push([0, 5, 6, 11]),
                          (n = Object(i.b)(e)),
                          (c.label = 1);
                      case 1:
                        return [4, n.next()];
                      case 2:
                        if ((r = c.sent()).done) return [3, 4];
                        if (((a = r.value), t.next(a), t.closed)) return [2];
                        c.label = 3;
                      case 3:
                        return [3, 1];
                      case 4:
                        return [3, 11];
                      case 5:
                        return (l = c.sent()), (o = { error: l }), [3, 11];
                      case 6:
                        return (
                          c.trys.push([6, , 9, 10]),
                          r && !r.done && (s = n.return) ? [4, s.call(n)] : [3, 8]
                        );
                      case 7:
                        c.sent(), (c.label = 8);
                      case 8:
                        return [3, 10];
                      case 9:
                        if (o) throw o.error;
                        return [7];
                      case 10:
                        return [7];
                      case 11:
                        return t.complete(), [2];
                    }
                  });
                });
              })(e, t).catch(function (e) {
                return t.error(e);
              });
            });
          }
          function f(e) {
            return function (t) {
              if (
                (function (e) {
                  return Object(s.a)(null == e ? void 0 : e.lift);
                })(t)
              )
                return t.lift(function (t) {
                  try {
                    return e(t, this);
                  } catch (e) {
                    this.error(e);
                  }
                });
              throw new TypeError("Unable to lift unknown Observable type");
            };
          }
          function p(e, t, n, r, i) {
            return new m(e, t, n, r, i);
          }
          var m = (function (e) {
            function t(t, n, r, i, o, s) {
              var a = e.call(this, t) || this;
              return (
                (a.onFinalize = o),
                (a.shouldUnsubscribe = s),
                (a._next = n
                  ? function (e) {
                      try {
                        n(e);
                      } catch (e) {
                        t.error(e);
                      }
                    }
                  : e.prototype._next),
                (a._error = i
                  ? function (e) {
                      try {
                        i(e);
                      } catch (e) {
                        t.error(e);
                      } finally {
                        this.unsubscribe();
                      }
                    }
                  : e.prototype._error),
                (a._complete = r
                  ? function () {
                      try {
                        r();
                      } catch (e) {
                        t.error(e);
                      } finally {
                        this.unsubscribe();
                      }
                    }
                  : e.prototype._complete),
                a
              );
            }
            return (
              Object(i.e)(t, e),
              (t.prototype.unsubscribe = function () {
                var t;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                  var n = this.closed;
                  e.prototype.unsubscribe.call(this),
                    !n &&
                      (null === (t = this.onFinalize) ||
                        void 0 === t ||
                        t.call(this));
                }
              }),
              t
            );
          })(n(43).b);
          function v(e, t) {
            return f(function (n, r) {
              var i = 0;
              n.subscribe(
                p(r, function (n) {
                  r.next(e.call(t, n, i++));
                })
              );
            });
          }
          function g(e, t, n) {
            return (
              void 0 === n && (n = 1 / 0),
              Object(s.a)(t)
                ? g(function (n, r) {
                    return v(function (e, i) {
                      return t(n, e, r, i);
                    })(d(e(n, r)));
                  }, n)
                : ("number" == typeof t && (n = t),
                  f(function (t, r) {
                    return (function (e, t, n, r, i, o, s, a) {
                      var l = [],
                        c = 0,
                        u = 0,
                        h = !1,
                        f = function () {
                          !h || l.length || c || t.complete();
                        },
                        m = function (e) {
                          return c < r ? v(e) : l.push(e);
                        },
                        v = function e(a) {
                          o && t.next(a), c++;
                          var h = !1;
                          d(n(a, u++)).subscribe(
                            p(
                              t,
                              function (e) {
                                null == i || i(e), o ? m(e) : t.next(e);
                              },
                              function () {
                                h = !0;
                              },
                              void 0,
                              function () {
                                if (h)
                                  try {
                                    c--;
                                    for (
                                      var n = function () {
                                        var n = l.shift();
                                        s
                                          ? (function (e, t, n, r, i) {
                                              void 0 === r && (r = 0),
                                                void 0 === i && (i = !1);
                                              var o = t.schedule(function () {
                                                n(),
                                                  i
                                                    ? e.add(this.schedule(null, r))
                                                    : this.unsubscribe();
                                              }, r);
                                              if ((e.add(o), !i));
                                            })(t, s, function () {
                                              return e(n);
                                            })
                                          : e(n);
                                      };
                                      l.length && c < r;
      
                                    )
                                      n();
                                    f();
                                  } catch (e) {
                                    t.error(e);
                                  }
                              }
                            )
                          );
                        };
                      return (
                        e.subscribe(
                          p(t, m, function () {
                            (h = !0), f();
                          })
                        ),
                        function () {
                          null == a || a();
                        }
                      );
                    })(t, r, e, n);
                  }))
            );
          }
          var y = Array.isArray;
          function b(e) {
            return v(function (t) {
              return (function (e, t) {
                return y(t) ? e.apply(void 0, Object(i.h)([], Object(i.g)(t))) : e(t);
              })(e, t);
            });
          }
          var w = ["addListener", "removeListener"],
            x = ["addEventListener", "removeEventListener"],
            _ = ["on", "off"];
          function S(e, t, n, r) {
            if ((Object(s.a)(n) && ((r = n), (n = void 0)), r))
              return S(e, t, n).pipe(b(r));
            var l = Object(i.g)(
                (function (e) {
                  return (
                    Object(s.a)(e.addEventListener) &&
                    Object(s.a)(e.removeEventListener)
                  );
                })(e)
                  ? x.map(function (r) {
                      return function (i) {
                        return e[r](t, i, n);
                      };
                    })
                  : (function (e) {
                      return (
                        Object(s.a)(e.addListener) && Object(s.a)(e.removeListener)
                      );
                    })(e)
                  ? w.map(T(e, t))
                  : (function (e) {
                      return Object(s.a)(e.on) && Object(s.a)(e.off);
                    })(e)
                  ? _.map(T(e, t))
                  : [],
                2
              ),
              c = l[0],
              u = l[1];
            if (!c && o(e))
              return g(function (e) {
                return S(e, t, n);
              })(d(e));
            if (!c) throw new TypeError("Invalid event target");
            return new a.a(function (e) {
              var t = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return e.next(1 < t.length ? t : t[0]);
              };
              return (
                c(t),
                function () {
                  return u(t);
                }
              );
            });
          }
          function T(e, t) {
            return function (n) {
              return function (r) {
                return e[n](t, r);
              };
            };
          }
          function E(e, t) {
            return function (n, r) {
              return !e.call(t, n, r);
            };
          }
          function A(e, t) {
            return f(function (n, r) {
              var i = 0;
              n.subscribe(
                p(r, function (n) {
                  return e.call(t, n, i++) && r.next(n);
                })
              );
            });
          }
          var C = n(33);
          function k(e, t) {
            return e === t;
          }
          var $ = n(36);
          function O(e) {
            return f(function (t, n) {
              d(e).subscribe(
                p(
                  n,
                  function () {
                    return n.complete();
                  },
                  $.a
                )
              ),
                !n.closed && t.subscribe(n);
            });
          }
          function L(e) {
            return e[e.length - 1];
          }
          function j(e) {
            return Object(s.a)(L(e)) ? e.pop() : void 0;
          }
          class M {
            constructor(e, t, n, i, o) {
              (this.el = e),
                (this.eventType = t),
                (this.filterFn = o),
                (this.trackerFn = n),
                (this.handlerFn = i),
                (this.unsubscribe$ = new r.a()),
                this.init();
            }
            init() {
              let e = S(this.el, this.eventType);
              this.filterFn && (e = e.pipe(A(this.filterFn)));
              const [t, n] =
                ((r = e), [A((o = (e) => e.tracked), a)(d(r)), A(E(o, a))(d(r))]);
              var r, o, a;
              const l = e.pipe(
                v((e) => e.target),
                (void 0 === u && (u = C.a),
                (c = null != c ? c : k),
                f(function (e, t) {
                  var n,
                    r = !0;
                  e.subscribe(
                    p(t, function (e) {
                      var i = u(e);
                      (!r && c(n, i)) || ((r = !1), (n = i), t.next(e));
                    })
                  );
                }))
              );
              var c, u;
              t.pipe(O(this.unsubscribe$)).subscribe((e) => {
                this.handlerFn(e);
              });
              var h, m, g, y, b, w;
              n.pipe(
                ((g = (e) => {
                  e.preventDefault(), e.stopImmediatePropagation();
                }),
                (w =
                  Object(s.a)(g) || y || b ? { next: g, error: y, complete: b } : g)
                  ? f(function (e, t) {
                      var n;
                      null === (n = w.subscribe) || void 0 === n || n.call(w);
                      var r = !0;
                      e.subscribe(
                        p(
                          t,
                          function (e) {
                            var n;
                            null === (n = w.next) || void 0 === n || n.call(w, e),
                              t.next(e);
                          },
                          function () {
                            var e;
                            (r = !1),
                              null === (e = w.complete) || void 0 === e || e.call(w),
                              t.complete();
                          },
                          function (e) {
                            var n;
                            (r = !1),
                              null === (n = w.error) || void 0 === n || n.call(w, e),
                              t.error(e);
                          },
                          function () {
                            var e, t;
                            r &&
                              (null === (e = w.unsubscribe) ||
                                void 0 === e ||
                                e.call(w)),
                              null === (t = w.finalize) || void 0 === t || t.call(w);
                          }
                        )
                      );
                    })
                  : C.a),
                ((h = this.trackerFn),
                f(function (e, t) {
                  var n = null,
                    r = 0,
                    i = !1,
                    o = function () {
                      return i && !n && t.complete();
                    };
                  e.subscribe(
                    p(
                      t,
                      function (e) {
                        null == n || n.unsubscribe();
                        var i = 0,
                          s = r++;
                        d(h(e, s)).subscribe(
                          (n = p(
                            t,
                            function (n) {
                              return t.next(m ? m(e, n, s, i++) : n);
                            },
                            function () {
                              (n = null), o();
                            }
                          ))
                        );
                      },
                      function () {
                        (i = !0), o();
                      }
                    )
                  );
                }))
              )
                .pipe(
                  (function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    var n = j(e);
                    return f(function (t, r) {
                      for (
                        var o = e.length,
                          s = new Array(o),
                          a = e.map(function () {
                            return !1;
                          }),
                          l = !1,
                          c = function (t) {
                            d(e[t]).subscribe(
                              p(
                                r,
                                function (e) {
                                  (s[t] = e),
                                    l ||
                                      a[t] ||
                                      ((a[t] = !0), (l = a.every(C.a)) && (a = null));
                                },
                                $.a
                              )
                            );
                          },
                          u = 0;
                        u < o;
                        u++
                      )
                        c(u);
                      t.subscribe(
                        p(r, function (e) {
                          if (l) {
                            var t = Object(i.h)([e], Object(i.g)(s));
                            r.next(
                              n ? n.apply(void 0, Object(i.h)([], Object(i.g)(t))) : t
                            );
                          }
                        })
                      );
                    });
                  })(l),
                  O(this.unsubscribe$)
                )
                .subscribe(([e, t]) => {
                  const n = new e.constructor(e.type, e);
                  for (let t of Object.getOwnPropertyNames(e)) {
                    const r = Object.getOwnPropertyDescriptor(e, t);
                    r && r.writable && (n[t] = e[t]);
                  }
                  (n.tracked = !0), t.dispatchEvent(n);
                });
            }
            dispose() {
              this.unsubscribe$.next(), this.unsubscribe$.complete();
            }
          }
        },
        64: function (e, t, n) {
          var r = n(65),
            i = n(85),
            o = n(86),
            s = r ? r.toStringTag : void 0;
          e.exports = function (e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : s && s in Object(e)
              ? i(e)
              : o(e);
          };
        },
        65: function (e, t, n) {
          var r = n(44).Symbol;
          e.exports = r;
        },
        70: function (e, t, n) {
          "use strict";
          n.d(t, "a", function () {
            return r;
          });
          function r(e) {
            return new CustomEvent("rai-tracker:tracking-page", {
              detail: e,
              bubbles: !0,
            });
          }
        },
        74: function (e, t) {
          var n =
            "object" == typeof global && global && global.Object === Object && global;
          e.exports = n;
        },
        8: function (e, t, n) {
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
        85: function (e, t, n) {
          var r = n(65),
            i = Object.prototype,
            o = i.hasOwnProperty,
            s = i.toString,
            a = r ? r.toStringTag : void 0;
          e.exports = function (e) {
            var t = o.call(e, a),
              n = e[a];
            try {
              e[a] = void 0;
              var r = !0;
            } catch (e) {}
            var i = s.call(e);
            return r && (t ? (e[a] = n) : delete e[a]), i;
          };
        },
        86: function (e, t) {
          var n = Object.prototype.toString;
          e.exports = function (e) {
            return n.call(e);
          };
        },
        9: function (e, t, n) {
          "use strict";
          function r(e) {
            return "function" == typeof e;
          }
          n.d(t, "a", function () {
            return r;
          });
        },
        99: function (e, t, n) {
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
      });
      //# sourceMappingURL=rainews-header.js.map
      
})
