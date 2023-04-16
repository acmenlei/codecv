function ce(e) {
  let t = ''
  for (; me.test(e); ) {
    let r = e.indexOf('!['),
      n = e.slice(0, r)
    ;(t += n), (e = e.slice(r + 1))
    let s = e.indexOf(']('),
      a = e.slice(0, s)
    e = e.slice(s + 2)
    let l = e.indexOf(')'),
      i = e.slice(0, l)
    ;(e = e.slice(l + 1)), (t += `<p><img alt=${a} src=${i} /></p>`)
  }
  return t + e
}
function ue(e) {
  let t = ''
  for (; ge.test(e); ) {
    let r = e.indexOf('['),
      n = e.slice(0, r)
    ;(t += n), (e = e.slice(r + 1))
    let s = e.indexOf(']('),
      a = e.slice(0, s)
    e = e.slice(s + 2)
    let l = e.indexOf(')'),
      i = e.slice(0, l)
    ;(e = e.slice(l + 1)), (t += `<a href=${i}>${a}</a>`)
  }
  return t + e
}
function L(e, t = !1) {
  let r = pe(e)
  return (
    (r = oe(r)),
    (r = de(r)),
    (r = fe(r)),
    (r = ce(r)),
    (r = ue(r)),
    (r = $e(r)),
    t ? r : `<p>${r}</p>`
  )
}
function pe(e) {
  let t = '',
    r = -1
  for (; (r = e.indexOf('**')) != -1; ) {
    ;(t += e.slice(0, r)), (e = e.slice(r + 2))
    let n = e.indexOf('**')
    if (n == -1) {
      e = '**' + e
      break
    }
    ;(t += `<strong>${e.slice(0, n)}</strong>`), (e = e.slice(n + 2))
  }
  return e && (t += e), t
}
function oe(e) {
  let t = '',
    r = -1
  for (; (r = e.indexOf('*')) != -1; ) {
    ;(t += e.slice(0, r)), (e = e.slice(r + 1))
    let n = e.indexOf('*')
    if (n == -1) {
      e = '*' + e
      break
    }
    ;(t += `<i>${e.slice(0, n)}</i>`), (e = e.slice(n + 1))
  }
  return e && (t += e), t
}
function fe(e) {
  let t = '',
    r = -1
  for (; (r = e.indexOf('~~')) != -1; ) {
    ;(t += e.slice(0, r)), (e = e.slice(r + 2))
    let n = e.indexOf('~~')
    if (n == -1) {
      e = '~~' + e
      break
    }
    ;(t += `<del>${e.slice(0, n)}</del>`), (e = e.slice(n + 2))
  }
  return e && (t += e), t
}
function de(e) {
  let t = '',
    r = -1
  for (; (r = e.indexOf('`')) != -1; ) {
    ;(t += e.slice(0, r)), (e = e.slice(r + 1))
    let n = e.indexOf('`')
    if (n == -1) {
      e = '`' + e
      break
    }
    ;(t += `<code class=single-code>${e.slice(0, n)}</code>`), (e = e.slice(n + 1))
  }
  return e && (t += e), t
}
function $e(e) {
  return e.replace(/icon:(\w+)(\s|\b)/g, (t, r) => `<i class='iconfont icon-${r}'></i>`)
}
const he = /(#+)\s(.*)/g,
  E = /^\s*(\d)\./,
  ge = /\[(.*)\]\((.*)\)/,
  me = /!\[(.*)\]\((.*)\)/,
  g = /\/\*(.*)\*\//g,
  T = /(function)([\s\(&lt])/g
function U(e) {
  ;/^\s+/.test(e[0]) &&
    (e[0] = e[0].replace(
      /^(\s+)/g,
      t => `
`
    )),
    e[0].startsWith(`
`) ||
      (e[0] =
        `
` + e[0])
}
function N(e, t) {
  let r = ''
  for (let n of e) {
    let s = n.children.length ? N(n.children, t) : ''
    r += `<li>${L(n.value + s, !0)}</li>`
  }
  return `<${t ? 'ol' : 'ul'}>${r}</${t ? 'ol' : 'ul'}>`
}
function we(e) {
  return E.test(e)
}
function ye(e) {
  let t = e.indexOf('-')
  return t == 0 || (t != -1 && !e.slice(0, t).trim())
}
function Oe(e) {
  return e.indexOf('#') != -1
}
function be(e) {
  return e.startsWith('```')
}
function Se(e) {
  return e.startsWith('> ')
}
function m(e, t, r) {
  return e < t - 1 ? r : ''
}
function R(e) {
  return e.startsWith('//') || e.startsWith('/*') || e.startsWith('*') || e.startsWith('#')
}
function xe(e) {
  return e.trim() === '---'
}
function ve(e) {
  return e.trim()[0] === '|'
}
function W(e) {
  return g.test(e)
}
function X(e) {
  return T.test(e)
}
function w(e) {
  let t = '',
    r = -1
  for (; (r = e.indexOf('"')) != -1 || (r = e.indexOf("'")) != -1; ) {
    let n = !1
    e.indexOf('"') != -1 && (n = !0), (t += e.slice(0, r)), (e = e.slice(r + 1))
    let s = n ? e.indexOf('"') : e.indexOf("'")
    ;(t += `<q class=declare-string>${e.slice(0, s)}</q>`), (e = e.slice(s + 1))
  }
  return e && (t += e), t
}
function H(e) {
  return e.replace(
    /([^\w])(false|true)(?!\w)/g,
    (t, r, n) => `${r}<span class=declare-boolean>${n}</span>`
  )
}
function j(e) {
  return e.replace(
    /([^\w])(\d+)(?![\w\.])/g,
    (t, r, n) => `${r}<span class=declare-number>${n}</span>`
  )
}
function F(e) {
  return e.replace(/(\s*null)(?!\w)/g, (t, r) => `<span class=declare-operator-char>${r}</span>`)
}
function y(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function O(e, t) {
  return t ? `<span class=line-number>${e}</span>` : ''
}
function P(e) {
  return e.trim().startsWith('::: start')
}
function Ie(e) {
  return e.trim().startsWith('::: end')
}
function ke(e) {
  return e.trim().startsWith(':::')
}
function Y(e) {
  return e.trim().startsWith('::: headStart')
}
function Ce(e) {
  return e.trim().startsWith('::: headEnd')
}
function Le(e) {
  return `<blockquote>${e.slice(2)}</blockquote>`
}
function k(e, t, r) {
  let n = '',
    s = e.split(`
`)
  for (let a = 0; a < s.length; a++) {
    let l = s[a]
    n += Ee(y(l), t++, r)
  }
  return n
}
function Ee(e, t, r) {
  let n = [],
    s = '',
    a = 0,
    l = ''
  e = w(e)
  let i = e.length
  for (let u = 0; u < i; u++)
    if (e[u] == ')') {
      let b = ''
      for (; n.length && (b = n.pop()) != '('; ) s = b + s
      b != '(' ? n.push(p(s + ')', !1)) : (a--, n.push(p(s, !0))), (s = '')
    } else e[u] == '(' && a++, n.push(e[u])
  let c = 0
  for (; a--; )
    (c = n.lastIndexOf('(')), (l = '(' + p(n.slice(c + 1).join(''), !1) + l), (n = n.slice(0, c))
  return n.length && (l = p(n.join(''), !1) + l), `<p>${O(t, r.lineNumber)}<span>${l}</span></p>`
}
function p(e, t) {
  if (!e.trim()) return t ? `(${e})` : e
  if (R(e.trim())) return We(e)
  let r = e
  return (
    (r = re(r)),
    (r = w(r)),
    (r = _(r)),
    (r = Re(r)),
    (r = Te(r)),
    (r = Ne(r)),
    (r = ee(r)),
    (r = H(r)),
    (r = j(r)),
    (r = F(r)),
    t ? `(${r})` : r
  )
}
function _(e) {
  if (/^(const|int|string|var|let)/.test(e.trim())) {
    if (/(\w+\s+)(.*\s*)=(.*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)=(.*)/, (n, s, a, l) => `${B(s)}${S(a)}=${_(l)}`)
    if (/(\w+\s+)(.*\s*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)/, (n, s, a, l) => `${B(s)}${S(a)}`)
  }
  let t = '',
    r = e.split(',')
  for (let n = 0, s = r.length; n < s; n++) t += `${S(r[n])}${m(n, s, ',')}`
  return t
}
function S(e) {
  return /(\s*\w+\s*)?:(\s*\w+\s*)/.test(e)
    ? e.replace(/(\s*\w+\s*)?:(\s*\w+\s*)/, (t, r, n) =>
        r
          ? `<span class=declare-param>${r}</span>:<span class=declare-param-type>${n}</span>`
          : `:<span class=declare-param-type>${n}</span>`
      )
    : X(e)
    ? ee(e)
    : e
}
function ee(e) {
  return e.replace(T, (t, r, n) => `<span class=declare-function>${r}</span>${n}`)
}
function Te(e) {
  return e.includes('=>') ? e.replace(/=>/g, t => `<span class=declare-arrow-func>${t}</span>`) : e
}
function Ne(e) {
  return e.replace(
    /(\w+)(\s*)\(/g,
    (t, r, n) => `<span class=declare-func-execute>${r}</span>${n}(`
  )
}
function B(e) {
  return e.replace(
    /(const|let|var)(\s+)/gi,
    (t, r, n) =>
      `<span class=declare-keyword>${r}</span><span class=declare-constant-name>${n}</span>`
  )
}
function Re(e) {
  return W(e)
    ? re(e)
    : e.replace(
        /(class|await|in|of|typeof|module|async|this|as|super|module|export\s+default|export|import|from|while|extends|new|abstract|void|static|return|break|continue|switch|case|finally|try|catch|else|if|throw)(?=[\s+\(\.])/g,
        (t, r) => `<span class=declare-operator-char>${r}</span>`
      )
}
function We(e) {
  return `<span class=declare-comments>${e}</span>`
}
function re(e) {
  return e.replace(g, t => `<span class=declare-comments>${t}</span>`)
}
function He(e, t, r) {
  if (((e = e.replace(/&lt;/g, '<').replace(/&gt;/g, '>')), /(<!--.*-->)/g.test(e)))
    return `${f(t, r)}${je(RegExp.$1)}</p>`
  if (/(\s*)<(\!?\w+)(.*)>(.*)<\/\w+>/g.test(e)) {
    let n = RegExp.$3.trim().split(' '),
      s = M(n)
    return `${f(t, r)}${RegExp.$1}&lt${o(RegExp.$2)}${s && '&nbsp;' + s}&gt${RegExp.$4}&lt/${o(
      RegExp.$2
    )}&gt</p>`
  } else if (/(\s*)<(\!?\w+)(.*)>(.*)/g.test(e)) {
    let n = RegExp.$3.trim().split(' '),
      s = M(n)
    return `${f(t, r)}${RegExp.$1}&lt${o(RegExp.$2)}${s && '&nbsp;' + s}&gt${RegExp.$4}</p>`
  } else
    return /(.*)(\s*)<\/(\w+)>/g.test(e)
      ? `${f(t, r)}${RegExp.$2}${RegExp.$1}&lt/${o(RegExp.$2)}&gt</p>`
      : k(e, t++, r)
}
function o(e) {
  return `<span class=declare-html-tag>${e}</span>`
}
function je(e) {
  return `<span class=declare-comments>${y(e)}</span>`
}
function f(e, t) {
  return `<p class=line-code>${O(e, t.lineNumber)}`
}
function M(e) {
  let t = ''
  for (let r = 0, n = e.length; r < n; r++) {
    let s = e[r]
    if (!s.trim()) {
      t += s
      continue
    }
    let a = s.indexOf('=')
    if (a != -1) {
      let l = s.slice(0, a),
        i = s.slice(a + 1)
      t += `<span class=declare-attr-key>${l}</span>=<span class=declare-attr-value>${i}</span>${m(
        r,
        n,
        '&nbsp;'
      )}`
    } else {
      t += s
      continue
    }
  }
  return t
}
function x() {
  return ''
}
function Fe(e, t, r) {
  let n = '',
    s = e.split(`
`)
  for (let a = 0; a < s.length; a++) {
    let l = s[a]
    n += Pe(l, t++, r)
  }
  return n
}
function Pe(e, t, r) {
  let n = [],
    s = '',
    a = 0,
    l = ''
  for (let c = 0; c < e.length; c++)
    if (e[c] == ')') {
      let u = ''
      for (; n.length && (u = n.pop()) != '('; ) s = u + s
      u != '(' ? n.push(d(s + ')', !1)) : (a--, n.push(d(s, !0))), (s = '')
    } else e[c] == '(' && a++, n.push(e[c])
  let i = 0
  for (; a--; )
    (i = n.lastIndexOf('(')), (l = '(' + d(n.slice(i + 1).join(''), !1) + l), (n = n.slice(0, i))
  return n.length && (l = d(n.join(''), !1) + l), `<p>${O(t, r.lineNumber)}<span>${l}</span></p>`
}
function d(e, t) {
  if (!e.trim()) return t ? `(${e})` : e
  if (R(e.trim())) return Me(e)
  let r = e
  return (
    (r = ne(r)),
    (r = te(r)),
    (r = Be(r)),
    (r = w(r)),
    (r = De(r)),
    (r = H(r)),
    (r = j(r)),
    (r = F(r)),
    t ? `(${r})` : r
  )
}
function te(e) {
  if (/^(char|int|String|Byte\[?\]?|[A-Z]+)/.test(e.trim())) {
    if (/(\w+\s+)(.*\s*)=(.*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)=(.*)/, (n, s, a, l) => `${G(s)}${v(a)}=${te(l)}`)
    if (/(\w+\s+)(.*\s*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)/, (n, s, a, l) => `${G(s)}${v(a)}`)
  }
  let t = '',
    r = e.split(',')
  for (let n = 0, s = r.length; n < s; n++) t += `${v(r[n])}${m(n, s, ',')}`
  return t
}
const q = /(\s*\w+\s*)?:(\s*\w+\s*)/g,
  A = /(:\s*\w+\s*)?&lt;(\s*\/?\s*\w+\s*)&gt;/g
function v(e) {
  return A.test(e)
    ? e.replace(
        A,
        (t, r, n) =>
          `${
            r ? `<span class=declare-param-type>${r}</span>` : ''
          }&lt;<span class=declare-param-type>${n}</span>&gt;`
      )
    : q.test(e)
    ? e.replace(q, (t, r, n) =>
        r
          ? `<span class=declare-param>${r}</span>:<span class=declare-param-type>${n}</span>`
          : `:<span class=declare-param-type>${n}</span>`
      )
    : e
}
function De(e) {
  return e.replace(
    /(\w+)(\s*)\(/g,
    (t, r, n) => `<span class=declare-func-execute>${r}</span>${n}(`
  )
}
function G(e) {
  return e.replace(
    /(const|let|var|int|string|Byte\[?\]?|[A-Z]+)(\s+)/gi,
    (t, r, n) =>
      `<span class=declare-keyword>${r}</span><span class=declare-constant-name>${n}</span>`
  )
}
function Be(e) {
  return W(e)
    ? ne(e)
    : e.replace(
        /(class|in|of|this|super|interface|module|import|from|extends|new|abstract|void|static|return|break|continue|switch|case|finally|try|catch|else|if|throw)(?=[\s\(\.])/g,
        (t, r) => `<span class=declare-operator-char>${r}</span>`
      )
}
function Me(e) {
  return `<span class=declare-comments>${e}</span>`
}
function ne(e) {
  return e.replace(g, t => `<span class=declare-comments>${t}</span>`)
}
function z(e, t, r) {
  let n = '',
    s = e.split(`
`)
  for (let a = 0; a < s.length; a++) {
    let l = s[a]
    n += qe(y(l), t++, r)
  }
  return n
}
function qe(e, t, r) {
  let n = [],
    s = '',
    a = 0,
    l = ''
  for (let c = 0; c < e.length; c++)
    if (e[c] == ')') {
      let u = ''
      for (; n.length && (u = n.pop()) != '('; ) s = u + s
      u != '(' ? n.push($(s + ')', !1)) : (a--, n.push($(s, !0))), (s = '')
    } else e[c] == '(' && a++, n.push(e[c])
  let i = 0
  for (; a--; )
    (i = n.lastIndexOf('(')), (l = '(' + $(n.slice(i + 1).join(''), !1) + l), (n = n.slice(0, i))
  return n.length && (l = $(n.join(''), !1) + l), `<p>${O(t, r.lineNumber)}<span>${l}</span></p>`
}
function $(e, t) {
  if (!e.trim()) return t ? `(${e})` : e
  if (R(e.trim())) return Je(e)
  let r = e
  return (
    (r = ae(r)),
    (r = se(r)),
    (r = ze(r)),
    (r = w(r)),
    (r = Ae(r)),
    (r = Ge(r)),
    (r = le(r)),
    (r = H(r)),
    (r = j(r)),
    (r = F(r)),
    t ? `(${r})` : r
  )
}
function se(e) {
  if (/^(const|int|string|var|let)/.test(e.trim())) {
    if (/(\w+\s+)(.*\s*)=(.*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)=(.*)/, (n, s, a, l) => `${K(s)}${I(a)}=${se(l)}`)
    if (/(\w+\s+)(.*\s*)/.test(e))
      return e.replace(/(\s*\w+\s+)(.*\s*)/, (n, s, a, l) => `${K(s)}${I(a)}`)
  }
  let t = '',
    r = e.split(',')
  for (let n = 0, s = r.length; n < s; n++) t += `${I(r[n])}${m(n, s, ',')}`
  return t
}
const J = /(\s*\w+\s*)?:(\s*\w+\s*)/g,
  Z = /(:\s*\w+\s*)?&lt;(\s*\/?\s*\w+\s*)&gt;/g
function I(e) {
  return Z.test(e)
    ? e.replace(
        Z,
        (t, r, n) =>
          `${
            r ? `<span class=declare-param-type>${r}</span>` : ''
          }&lt;<span class=declare-param-type>${n}</span>&gt;`
      )
    : J.test(e)
    ? e.replace(J, (t, r, n) =>
        r
          ? `<span class=declare-param>${r}</span>:<span class=declare-param-type>${n}</span>`
          : `:<span class=declare-param-type>${n}</span>`
      )
    : X(e)
    ? le(e)
    : e
}
function le(e) {
  return e.replace(T, (t, r, n) => `<span class=declare-function>${r}</span>${n}`)
}
function Ae(e) {
  return e.includes('=>') ? e.replace(/=>/g, t => `<span class=declare-arrow-func>${t}</span>`) : e
}
function Ge(e) {
  return e.replace(
    /(\w+)(\s*)\(/g,
    (t, r, n) => `<span class=declare-func-execute>${r}</span>${n}(`
  )
}
function K(e) {
  return e.replace(
    /(const|let|var|int|string)(\s+)/gi,
    (t, r, n) =>
      `<span class=declare-keyword>${r}</span><span class=declare-constant-name>${n}</span>`
  )
}
function ze(e) {
  return W(e)
    ? ae(e)
    : e.replace(
        /(class|in|of|this|super|interface|typeof|module|declare|type|keyof|infer|export\s+default|export|import|from|extends|new|abstract|void|static|return|break|continue|switch|case|finally|try|catch|else|if|throw)(?=[\s\(\.])/g,
        (t, r) => `<span class=declare-operator-char>${r}</span>`
      )
}
function Je(e) {
  return `<span class=declare-comments>${e}</span>`
}
function ae(e) {
  return e.replace(g, t => `<span class=declare-comments>${t}</span>`)
}
const Ze = {
  java: Fe,
  c: x,
  ['c++']: x,
  ['c#']: x,
  js: k,
  javascript: k,
  ts: z,
  typescript: z,
  html: He
}
function Ke(e, t, r, n) {
  let s = '',
    a = e[t].slice(3).trim().toLowerCase(),
    l = 1
  for (++t; t < r && !e[t].startsWith('```'); )
    (s += n.highlight
      ? Ze[a](e[t], l++, n)
      : e[t] +
        `
`),
      t++
  return (
    (e[t] = ''),
    {
      startIdx: t,
      result: n.highlight
        ? `<pre><span class=language>${a}</span><code>${s}</code></pre>`
        : `<pre><code>${s}</code></pre>`
    }
  )
}
function Ve(e, t, r) {
  let n = ''
  for (; t < r; t++)
    if (!!e[t].trim())
      if (e[t].trim()[0] === '-' && e[t].indexOf('-') != -1)
        n +=
          e[t] +
          `
`
      else break
  return (n = Qe(n)), { startIdx: t, result: n }
}
function Qe(e) {
  const t = e.match(/(\s?)+-\s(.*)/g)
  if (!t) return e
  U(t)
  const r = Ue(t)
  return N(r, !1)
}
function Ue(e) {
  const t = [],
    r = [],
    n = e.length
  for (let s = 0; s < n; s++) {
    const a = e[s].indexOf('-'),
      l = { children: [], value: e[s].slice(a + 1), level: a, parent: null }
    if (!r.length) {
      t.push(l), r.push(l)
      continue
    }
    const i = r[r.length - 1].level,
      c = e[s].indexOf('-')
    let u
    if (i === c) u = r[r.length - 1].parent
    else if (i > c) {
      for (; r[r.length - 1].level > c; ) r.pop()
      u = r[r.length - 1].parent
    } else u = r[r.length - 1]
    ;(l.parent = u), u ? u.children.push(l) : t.push(l), r.push(l)
  }
  return t
}
function Xe(e, t, r) {
  let n = ''
  for (; t < r; t++)
    if (!!e[t].trim())
      if (E.test(e[t]))
        n +=
          e[t] +
          `
`
      else break
  return (n = Ye(n)), { startIdx: t, result: n }
}
function Ye(e) {
  const t = e.match(/\s*\d\.(.*)/g)
  if (!t) return e
  U(t)
  const r = _e(t)
  return N(r, !0)
}
function _e(e) {
  const t = [],
    r = [],
    n = e.length
  for (let s = 0; s < n; s++) {
    let a = 0
    E.test(e[s]) && (a = e[s].indexOf(String(RegExp.$1 + '.')))
    const l = { children: [], value: e[s].slice(a + 2), level: a, parent: null }
    if (!r.length) {
      t.push(l), r.push(l)
      continue
    }
    const i = r[r.length - 1].level,
      c = a
    let u
    if (i === c) u = r[r.length - 1].parent
    else if (i > c) {
      for (; r[r.length - 1].level > c; ) r.pop()
      u = r[r.length - 1].parent
    } else u = r[r.length - 1]
    ;(l.parent = u), u ? u.children.push(l) : t.push(l), r.push(l)
  }
  return t
}
function er(e) {
  return e.length !== 3 ? e : e === '---' ? '<hr/>' : e
}
function V(e) {
  return e.length > 6 ? 6 : e.length
}
function rr(e) {
  return e.trim().replace(he, (t, r, n) => `<h${V(r)}>${L(n, !0)}</h${V(r)}>`)
}
function tr(e, t, r) {
  let n = '<table>'
  for (n += nr(e[t]), n += '<tbody >', ++t; t < r && e[t].trim()[0] === '|'; t++) n += sr(e[t])
  return (n += '</tbody></table>'), { startIdx: t - 1, result: n }
}
function nr(e) {
  let t = -1,
    r = '<thead><tr>'
  for (let n = 0, s = e.length; n < s; n++)
    e[n] == '|' &&
      h(e, n - 1) &&
      h(e, n + 1) &&
      (t != -1 && (r += `<th>${e.slice(t + 1, n)}</th>`), (t = n))
  return r + '</tr></thead>'
}
function sr(e) {
  let t = -1,
    r = '<tr>'
  for (let n = 0, s = e.length; n < s; n++)
    if (e[n] == '|' && h(e, n - 1) && h(e, n + 1)) {
      if (t != -1) {
        let a = e.slice(t + 1, n)
        if (a.trim()[0] === '-') continue
        r += `<td>${a}</td>`
      }
      t = n
    }
  return r + '</tr>'
}
function h(e, t) {
  return e[t] === ' ' || e[t] == null
}
function ie(e, t, r, n) {
  let s = '<div class=head-layout>'
  for (++t; t < r && !Ce(e[t]); )
    if (P(e[t])) {
      const { startIdx: a, result: l } = D(e, t, r, n)
      ;(s += l), (t = a + 1)
    } else (s += e[t].trim() ? C(e[t], { ...n, xss: !1 }) : ''), t++
  return (s += '</div>'), { result: s, startIdx: t }
}
function D(e, t, r, n) {
  let s = '<div class=flex-layout>',
    a = ''
  for (++t; t < r && !Ie(e[t]); ) {
    if (P(e[t])) {
      const { result: l, startIdx: i } = D(e, t, r, n)
      ;(a += l), (t = i)
    } else if (Y(e[t])) {
      const { result: l, startIdx: i } = ie(e, t, r, n)
      ;(a += l), (t = i)
    } else
      ke(e[t])
        ? ((s += `<div class=flex-layout-item>${C(a, { ...n, xss: !1 })}</div>`), (a = ''))
        : (a += e[t].trim()
            ? `
` +
              e[t] +
              `
`
            : '')
    t++
  }
  return (
    (s += `<div class=flex-layout-item>${C(a, { ...n, xss: !1 })}</div>`),
    (s += '</div>'),
    { result: s, startIdx: t }
  )
}
const Q = { lineNumber: !1, highlight: !1, xss: !0 }
function C(e, t) {
  let r = t || Q,
    n = ''
  r = Object.assign({ ...Q }, r)
  let s = r.xss
      ? y(e).split(`
`)
      : e.split(`
`),
    a = (s == null ? void 0 : s.length) || 0
  for (let l = 0; l < a; ) {
    if (Oe(s[l])) n += rr(s[l])
    else if (Y(s[l])) {
      const { result: i, startIdx: c } = ie(s, l, a, r)
      ;(l = c), (n += i)
    } else if (P(s[l])) {
      const { result: i, startIdx: c } = D(s, l, a, r)
      ;(l = c), (n += i)
    } else if (xe(s[l])) (n += er(s[l])), ++l
    else if (ve(s[l])) {
      const { result: i, startIdx: c } = tr(s, l, a)
      ;(l = c), (n += i)
    } else if (ye(s[l])) {
      const { result: i, startIdx: c } = Ve(s, l, a)
      ;(l = c - 1), (n += i)
    } else if (we(s[l])) {
      const { result: i, startIdx: c } = Xe(s, l, a)
      ;(l = c - 1), (n += i)
    } else if (be(s[l])) {
      const { result: i, startIdx: c } = Ke(s, l, a, r)
      ;(l = c), (n += i)
    } else Se(s[l]) ? (n += Le(s[l])) : (s[l] = s[l].trim()) && (n += L(s[l]))
    l++
  }
  return n
}
export { C as m }
