import {
  u as R,
  g as D,
  b as L,
  r as h,
  w as g,
  d as W,
  e as B,
  f as k,
  n as M
} from './@vue.459e27cf.js'
var S
const I = typeof window < 'u',
  se = e => typeof e == 'boolean',
  ae = e => typeof e == 'number',
  $ = e => typeof e == 'string',
  v = () => {},
  z =
    I &&
    ((S = window == null ? void 0 : window.navigator) == null ? void 0 : S.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent)
function w(e) {
  return typeof e == 'function' ? e() : R(e)
}
function N(e, r) {
  function n(...t) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => r.apply(this, t), { fn: r, thisArg: this, args: t }))
        .then(o)
        .catch(a)
    })
  }
  return n
}
function U(e, r = {}) {
  let n,
    t,
    o = v
  const a = i => {
    clearTimeout(i), o(), (o = v)
  }
  return i => {
    const c = w(e),
      d = w(r.maxWait)
    return (
      n && a(n),
      c <= 0 || (d !== void 0 && d <= 0)
        ? (t && (a(t), (t = null)), Promise.resolve(i()))
        : new Promise((f, m) => {
            ;(o = r.rejectOnCancel ? m : f),
              d &&
                !t &&
                (t = setTimeout(() => {
                  n && a(n), (t = null), f(i())
                }, d)),
              (n = setTimeout(() => {
                t && a(t), (t = null), f(i())
              }, c))
          })
    )
  }
}
function G(e, r = !0, n = !0, t = !1) {
  let o = 0,
    a,
    l = !0,
    i = v,
    c
  const d = () => {
    a && (clearTimeout(a), (a = void 0), i(), (i = v))
  }
  return m => {
    const s = w(e),
      u = Date.now() - o,
      p = () => (c = m())
    return (
      d(),
      s <= 0
        ? ((o = Date.now()), p())
        : (u > s && (n || !l)
            ? ((o = Date.now()), p())
            : r &&
              (c = new Promise((T, Q) => {
                ;(i = t ? Q : T),
                  (a = setTimeout(() => {
                    ;(o = Date.now()), (l = !0), T(p()), d()
                  }, Math.max(0, s - u)))
              })),
          !n && !a && (a = setTimeout(() => (l = !0), s)),
          (l = !1),
          c)
    )
  }
}
function H(e) {
  return e
}
function P(e) {
  return D() ? (L(e), !0) : !1
}
function V(e, r = 200, n = {}) {
  return N(U(r, n), e)
}
function ie(e, r = 200, n = {}) {
  const t = h(e.value),
    o = V(
      () => {
        t.value = e.value
      },
      r,
      n
    )
  return g(e, () => o()), t
}
function ue(e, r = 200, n = !1, t = !0, o = !1) {
  return N(G(r, n, t, o), e)
}
function q(e, r = !0) {
  B() ? k(e) : r ? e() : M(e)
}
function le(e, r, n = {}) {
  const { immediate: t = !0 } = n,
    o = h(!1)
  let a = null
  function l() {
    a && (clearTimeout(a), (a = null))
  }
  function i() {
    ;(o.value = !1), l()
  }
  function c(...d) {
    l(),
      (o.value = !0),
      (a = setTimeout(() => {
        ;(o.value = !1), (a = null), e(...d)
      }, w(r)))
  }
  return t && ((o.value = !0), I && c()), P(i), { isPending: W(o), start: c, stop: i }
}
function O(e) {
  var r
  const n = w(e)
  return (r = n == null ? void 0 : n.$el) != null ? r : n
}
const E = I ? window : void 0
function y(...e) {
  let r, n, t, o
  if (($(e[0]) || Array.isArray(e[0]) ? (([n, t, o] = e), (r = E)) : ([r, n, t, o] = e), !r))
    return v
  Array.isArray(n) || (n = [n]), Array.isArray(t) || (t = [t])
  const a = [],
    l = () => {
      a.forEach(f => f()), (a.length = 0)
    },
    i = (f, m, s, u) => (f.addEventListener(m, s, u), () => f.removeEventListener(m, s, u)),
    c = g(
      () => [O(r), w(o)],
      ([f, m]) => {
        l(), f && a.push(...n.flatMap(s => t.map(u => i(f, s, u, m))))
      },
      { immediate: !0, flush: 'post' }
    ),
    d = () => {
      c(), l()
    }
  return P(d), d
}
let A = !1
function ce(e, r, n = {}) {
  const { window: t = E, ignore: o = [], capture: a = !0, detectIframe: l = !1 } = n
  if (!t) return
  z &&
    !A &&
    ((A = !0), Array.from(t.document.body.children).forEach(s => s.addEventListener('click', v)))
  let i = !0
  const c = s =>
      o.some(u => {
        if (typeof u == 'string')
          return Array.from(t.document.querySelectorAll(u)).some(
            p => p === s.target || s.composedPath().includes(p)
          )
        {
          const p = O(u)
          return p && (s.target === p || s.composedPath().includes(p))
        }
      }),
    f = [
      y(
        t,
        'click',
        s => {
          const u = O(e)
          if (!(!u || u === s.target || s.composedPath().includes(u))) {
            if ((s.detail === 0 && (i = !c(s)), !i)) {
              i = !0
              return
            }
            r(s)
          }
        },
        { passive: !0, capture: a }
      ),
      y(
        t,
        'pointerdown',
        s => {
          const u = O(e)
          u && (i = !s.composedPath().includes(u) && !c(s))
        },
        { passive: !0 }
      ),
      l &&
        y(t, 'blur', s => {
          var u
          const p = O(e)
          ;((u = t.document.activeElement) == null ? void 0 : u.tagName) === 'IFRAME' &&
            !(p != null && p.contains(t.document.activeElement)) &&
            r(s)
        })
    ].filter(Boolean)
  return () => f.forEach(s => s())
}
function K(e, r = !1) {
  const n = h(),
    t = () => (n.value = Boolean(e()))
  return t(), q(t, r), n
}
const b =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  _ = '__vueuse_ssr_handlers__'
b[_] = b[_] || {}
b[_]
var x = Object.getOwnPropertySymbols,
  J = Object.prototype.hasOwnProperty,
  X = Object.prototype.propertyIsEnumerable,
  Y = (e, r) => {
    var n = {}
    for (var t in e) J.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t])
    if (e != null && x) for (var t of x(e)) r.indexOf(t) < 0 && X.call(e, t) && (n[t] = e[t])
    return n
  }
function fe(e, r, n = {}) {
  const t = n,
    { window: o = E } = t,
    a = Y(t, ['window'])
  let l
  const i = K(() => o && 'ResizeObserver' in o),
    c = () => {
      l && (l.disconnect(), (l = void 0))
    },
    d = g(
      () => O(e),
      m => {
        c(), i.value && o && m && ((l = new ResizeObserver(r)), l.observe(m, a))
      },
      { immediate: !0, flush: 'post' }
    ),
    f = () => {
      c(), d()
    }
  return P(f), { isSupported: i, stop: f }
}
var C
;(function (e) {
  ;(e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE')
})(C || (C = {}))
var Z = Object.defineProperty,
  j = Object.getOwnPropertySymbols,
  ee = Object.prototype.hasOwnProperty,
  te = Object.prototype.propertyIsEnumerable,
  F = (e, r, n) =>
    r in e ? Z(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[r] = n),
  ne = (e, r) => {
    for (var n in r || (r = {})) ee.call(r, n) && F(e, n, r[n])
    if (j) for (var n of j(r)) te.call(r, n) && F(e, n, r[n])
    return e
  }
const re = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
}
ne({ linear: H }, re)
export {
  ae as a,
  se as b,
  y as c,
  O as d,
  ue as e,
  le as f,
  I as i,
  ce as o,
  ie as r,
  P as t,
  fe as u
}
