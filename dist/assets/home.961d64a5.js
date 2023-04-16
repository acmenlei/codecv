import { T as f } from './typenet.27b78ff3.js'
import {
  f as g,
  D as m,
  aa as y,
  o as t,
  c as e,
  S as h,
  a as u,
  M as i,
  a3 as n,
  P as F,
  Q as C,
  a4 as s,
  U as l,
  L as E,
  u as p,
  O as B,
  at as b,
  au as D,
  av as x
} from './@vue.459e27cf.js'
import { L as w } from './index.2356ee1f.js'
import { _ as v } from './vue-markdown-menu-bar.54882429.js'
import './aos.e37f4dc9.js'
import './jspdf.93f2685e.js'
import './@babel.2898e469.js'
import './fflate.fca59393.js'
import './element-plus.2a6d07e1.js'
import './@element-plus.52ff3d2f.js'
import './@vueuse.b3f314cf.js'
import './dayjs.6d6bf3b5.js'
import './lodash-es.2fa8789e.js'
import './@ctrl.82a509e0.js'
import './async-validator.fb49d0f5.js'
import './pinia.6bd7cd5d.js'
import './vue-demi.b3a9cad9.js'
import './picture-verification-code.e81ffd11.js'
import './axios.754b77ca.js'
import './form-data.2b153385.js'
import './vue-router.bfd1ba04.js'
import './nprogress.8e3ae131.js'
const A = '' + new URL('../resume-bg-one.svg', import.meta.url).href,
  k = '' + new URL('../resume-bg-two.svg', import.meta.url).href,
  N = '' + new URL('../resume-bg-three.svg', import.meta.url).href
function L() {
  g(() => {
    new f('.typenet-text', { speed: 80 })
      .type('Resume Board ', { style: 'color: #fd79a8' })
      .type('\u662F')
      .sleep(300)
      .type('\u4E00\u6B3E\u5B8C\u5168\u514D\u8D39\u7684 ')
      .type('Markdown', { style: 'color: #fd79a8' })
      .type(' \u7B80\u5386\u7F16\u5199\u5DE5\u5177')
      .line()
      .sleep(300)
      .type('\u53EF\u4EE5\u5C06\u4F60\u7F16\u5199\u7684 ', { speed: 50 })
      .type('Markdnow', { speed: 50, style: 'color: #fd79a8' })
      .sleep(300)
      .remove(3)
      .sleep(300)
      .type('own', { speed: 80, style: 'color: #fd79a8' })
      .type(' \u5185\u5BB9')
      .sleep(300)
      .type('\u8F6C\u4E3A ')
      .type('PDF', { style: 'color: var(--theme)' })
      .type(' \u683C\u5F0F\u7684\u6587\u4EF6.')
      .line()
      .sleep(300)
      .type('\u5982\u679C\u4F60\u6709\u4E0D\u9519\u7684\u60F3\u6CD5\uFF0C')
      .type('\u6B22\u8FCE\u4E3A\u9879\u76EE\u8D21\u732E\u51FA\u4F60\u7684daima', {
        style: 'color: var(--theme)'
      })
      .sleep(300)
      .remove(5)
      .sleep(300)
      .type('\u4EE3\u7801.', { speed: 80, style: 'color: var(--theme)' })
      .start()
  })
}
const S = [
    { name: '\u7B80\u5386\u5236\u4F5C', path: '/theme', tooltip: !1 },
    { name: '\u6C42\u804C\u793E\u533A', path: '/community', tooltip: !1 },
    { name: '\u8BED\u6CD5\u52A9\u624B', path: '/syntax/helper', tooltip: !1 },
    { name: '\u66F4\u65B0\u5185\u5BB9', path: '/update/line', tooltip: !1 }
  ],
  V = [
    {
      name: 'GitHub',
      path: 'https://github.com/acmenlei/markdown-resume-to-pdf',
      icon: 'iconfont icon-github'
    },
    {
      name: 'Gitee',
      path: 'https://gitee.com/codeleilei/markdown2pdf',
      icon: 'iconfont icon-gitee'
    }
  ],
  $ = o => (b('data-v-821d1b6d'), (o = o()), D(), o),
  M = { id: 'header' },
  R = { class: 'nav', 'data-aos': 'zoom-out-right' },
  T = ['onClick'],
  U = { class: 'operator', 'data-aos': 'zoom-out-left' },
  z = $(() => u('i', { class: 'iconfont icon-technology' }, null, -1)),
  O = m({
    __name: 'header',
    setup(o) {
      function r(d) {
        window.location.href = d
      }
      return (d, c) => {
        const _ = y('router-link')
        return (
          t(),
          e('div', M, [
            h(w),
            u('ul', R, [
              (t(!0),
              e(
                i,
                null,
                n(
                  p(S),
                  a => (
                    t(),
                    e('li', null, [
                      a.tooltip
                        ? E('', !0)
                        : (t(),
                          F(
                            _,
                            { key: 0, to: a.path || '' },
                            { default: C(() => [s(l(a.name), 1)]), _: 2 },
                            1032,
                            ['to']
                          ))
                    ])
                  )
                ),
                256
              )),
              (t(!0),
              e(
                i,
                null,
                n(
                  p(V),
                  a => (
                    t(),
                    e(
                      'li',
                      { onClick: P => r(a.path) },
                      [u('i', { class: B(a.icon) }, null, 2), s(' ' + l(a.name), 1)],
                      8,
                      T
                    )
                  )
                ),
                256
              ))
            ]),
            u('div', U, [
              u(
                'button',
                {
                  class: 'linear-color-btn',
                  onClick: c[0] || (c[0] = a => d.$router.push('/editor?type=front_end'))
                },
                [z, s(' \u5F00\u59CB\u521B\u4F5C')]
              )
            ])
          ])
        )
      }
    }
  })
const G = v(O, [['__scopeId', 'data-v-821d1b6d']]),
  H = x(
    '<div class="introduce odd flex flex-space-around flex-align-center" data-v-1c56670d><img src="' +
      A +
      '" data-aos="fade-right" data-v-1c56670d><div class="introduce-r typenet-text" data-aos="fade-left" data-v-1c56670d></div><div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000" data-v-1c56670d></div><div class="ball-top" data-aos="fade-up" data-aos-duration="1000" data-v-1c56670d></div></div><div class="mask" data-v-1c56670d></div><div class="introduce white-bg flex flex-space-around flex-align-center" data-v-1c56670d><img src="' +
      k +
      '" data-aos="fade-right" data-v-1c56670d><div class="introduce-r tac" data-aos="fade-left" data-v-1c56670d><h2 data-v-1c56670d>\u591A\u79CD\u6A21\u677F\u9002\u914D\uFF0C\u4F60\u60F3\u8981\u7684 <span class="highlight" data-v-1c56670d>\u8FD9\u91CC\u90FD\u6709</span></h2><h2 data-v-1c56670d>\u667A\u80FD<span class="highlight" data-v-1c56670d>\u81EA\u52A8\u4E00\u9875</span></h2><h2 data-v-1c56670d>\u89E3\u51B3\u7B80\u5386\u5185\u5BB9<span class="highlight" data-v-1c56670d>\u592A\u591A/\u592A\u5C11</span>\u5F15\u53D1\u7684\u5C34\u5C2C\u5883\u5730</h2></div><div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000" data-v-1c56670d></div><div class="ball-top" data-aos="fade-up" data-aos-duration="1000" data-v-1c56670d></div></div><div class="introduce white-bg flex odd flex-space-around flex-align-center" data-v-1c56670d><div class="introduce-r tac" data-aos="fade-right" data-v-1c56670d><h2 data-v-1c56670d>\u6839\u636E\u81EA\u8EAB\u559C\u597D <span class="highlight" data-v-1c56670d>DIY</span>\u7B80\u5386\u6837\u5F0F</h2><h2 data-v-1c56670d>\u7B80\u5386\u600E\u4E48\u914D\u8272<span class="highlight" data-v-1c56670d>\u7531\u4F60\u51B3\u5B9A</span>\uFF5E</h2></div><img src="' +
      N +
      '" data-aos="fade-left" data-v-1c56670d><div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000" data-v-1c56670d></div><div class="ball-top" data-aos="fade-up" data-aos-duration="1000" data-v-1c56670d></div></div>',
    4
  ),
  I = m({
    __name: 'home',
    setup(o) {
      return L(), (r, d) => (t(), e(i, null, [h(G), H], 64))
    }
  })
const ma = v(I, [['__scopeId', 'data-v-1c56670d']])
export { ma as default }
