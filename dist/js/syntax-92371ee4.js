import{s as y}from"./index-7f0890bb.js";import{h}from"./@vueuse-20644f96.js";import{r as c,b as f,J as k,E as p,o as t,c as l,a as i,W as F,M as C,u as r,n as M,ax as B,F as _,a7 as D,S as g,U as A,P as x}from"./@vue-08c382c3.js";import{_ as d,E as w}from"./index-83c13b0c.js";import"./config-6684159b.js";import"./markdown-transform-html-1da660b5.js";import"./element-plus-04c0a14f.js";import"./lodash-es-9d35530d.js";import"./async-validator-604317c1.js";import"./@element-plus-911ad01b.js";import"./dayjs-0e47d17d.js";import"./aos-80360ef4.js";import"./@ctrl-aa1b1e70.js";import"./pinia-e35c44d0.js";import"./vue-demi-3c8f99f1.js";import"./picture-verification-code-77c40e50.js";import"./vue-router-94a8b0e4.js";import"./nprogress-6c9d9548.js";function T(){const n=c(0),o=h(function(){n.value=(document.documentElement||document.body).scrollTop},50);return f(()=>{document.addEventListener("scroll",o)}),k(()=>{document.removeEventListener("scroll",o)}),n}const H=["level"],N=p({__name:"menuBarItem",props:{MenuItem:{}},setup(n){const o=T();return(a,u)=>(t(),l("div",{class:"o_menu-bar_title",level:a.MenuItem.level},[i("span",{class:C({o_active:r(o)>=a.MenuItem.offset&&r(o)<a.MenuItem.offsetMax})},F(a.MenuItem.title),3)],8,H))}});const I=d(N,[["__scopeId","data-v-ccdd5969"]]);function L(n){const o=c([]);return M(()=>{o.value=v(n)}),B(()=>{o.value=v(n)}),o}function v(n){const o=[];return E(o,document.querySelector(n)),S(o),o}function E(n,o,a){const u=o==null?void 0:o.tagName.toLowerCase();if((o==null?void 0:o.nodeType)==1&&u[0]==="h"){const s={offsetMax:0};s.title=o.textContent+"",s.level=+u[1],s.offset=Y(o),s.target=o,n.push(s)}else{if(!o||o.nodeType!=1)return;const s=Array.from(o.children);for(const e of s)E(n,e)}}function Y(n){let o=n==null?void 0:n.offsetTop,a=n.offsetParent;for(;a!==null;)o+=a.offsetTop,a=a.offsetParent;return o}function S(n){for(let o=0,a=n.length;o<a;o++)o+1<a?n[o].offsetMax=n[o+1].offset:n[o].offsetMax=1/0}const $={class:"o_menu_title"},P={key:0,class:"o_menu_bar_container"},z=p({__name:"MenuBar",props:{body:{},menuTitle:{},style:{}},emits:["MenuBarClick"],setup(n,{emit:o}){const u=L(n.body);function s(e){y(e.offset),o("MenuBarClick",e)}return(e,J)=>(t(),l("div",{class:"o_navigator_menu",style:A(e.style)},[i("h3",$,F(e.menuTitle||"\u76EE\u5F55"),1),r(u).length?(t(),l("div",P,[(t(!0),l(_,null,D(r(u),(b,m)=>(t(),g(I,{key:m,MenuItem:b,onClick:O=>s(b)},null,8,["MenuItem","onClick"]))),128))])):(t(),g(w,{key:1,title:"\u6682\u65E0\u6807\u9898"}))],4))}});const U=d(z,[["__scopeId","data-v-0f9a0dee"]]);const V=`<h2 style="background:var(--background); color: var(--font-color)">
<span style="color: var(--font-color); background:(--background)">\u524D\u8A00</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px; color: var(--font-color)"
  >\u5982\u679C\u4F60\u60F3\u7F16\u5199\u4E00\u6B3E<strong>\u6BD4\u8F83\u597D\u7684\u7B80\u5386\u6392\u7248</strong>\uFF0C\u90A3\u4F60\u53EF\u4EE5\u5B66\u4E60\u4E00\u4E0B\u4E0B\u9762\u8FD9\u4E9B\u8BED\u6CD5\uFF0C\u653E\u5FC3\uFF0C\u4E0D\u4F1A\u82B1\u8D39\u591A\u5C11\u65F6\u95F4.</span
>
</p>
<h2 style="background:var(--background); color: var(--font-color)">
<span style="color: var(--font-color); background:(--background)">\u5F39\u6027\u5E03\u5C40</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">\u5B83\u4F1A\u88AB\u6E32\u67D3\u4E3A\u5E26</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >flex-layout</code
  ><span style="color: var(--font-color); background:(--background)">\u7C7B\u540D\u7684\u5F39\u6027\u76D2\uFF0C\u800C\u5728</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >:::</code
  ><span style="color: var(--font-color); background:(--background)"
    >\u4E2D\u95F4\u7684\u5185\u5BB9\u5C06\u4F1A\u88AB\u6E32\u67D3\u4E3A\u4E00\u4E2A\u5F39\u6027\u5143\u7D20, \u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u6784\u9020\u591A\u5217\u5E03\u5C40\uFF0C\u5982\u4E0B.</span
  ></span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">::: start</div><div class="tb-code-line">content...</div><div class="tb-code-line">:::</div><div class="tb-code-line">content...</div><div class="tb-code-line">:::</div><div class="tb-code-line">content...</div><div class="tb-code-line">::: end</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">\u4E0A\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u8BED\u6CD5\u5C06\u4F1A\u88AB\u8F6C\u5316\u4E3A\u4E0B\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u4EE3\u7801.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout</span>"&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&lt;<span class="tb-hl-tag">div</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>
<h2 style="background:var(--background); color: var(--font-color)">
<span style="color: var(--font-color); background:(--background)">\u4E2A\u4EBA\u4FE1\u606F\u5E03\u5C40</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)"
    >\u5982\u679C\u4F60\u60F3\u5355\u72EC\u5BF9\u7B80\u5386\u5934\u90E8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u6392\u7248\uFF0C\u90A3\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Head</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;\u5E03\u5C40\uFF0C\u9488\u5BF9\u6027\u7684\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u6837\u5F0F\u8BBE\u7F6E\uFF0C\u548C\u5F39\u6027\u5E03\u5C40\u5DEE\u4E0D\u591A\uFF0C\u4F60\u9700\u8981\u4F7F\u7528&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >:::</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;\u8BED\u6CD5\u5BF9\u5176\u8FDB\u884C\u5206\u5272\uFF0C\u5E76\u7ED9\u51FA\u5F00\u59CB\u548C\u7ED3\u675F\u6807\u5FD7.</span
  ></span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">::: headStart</div><div class="tb-code-line">content....</div><div class="tb-code-line">::: headEnd</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">\u4E0A\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u8BED\u6CD5\u5C06\u4F1A\u88AB\u8F6C\u5316\u4E3A\u4E0B\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u4EE3\u7801.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">head-layout</span>"&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;content....</div><div class="tb-code-line">&lt;<span class="tb-hl-tag">div</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>
<h2 style="background:var(--background); color: var(--font-color)">
<span style="color: var(--font-color); background:(--background)">\u5185\u7F6E\u56FE\u6807</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px; color: var(--font-color)"
  >\u6211\u4E5F\u5185\u7F6E\u4E86\u4E00\u4E9B\u56FE\u6807\uFF0C\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u5B83\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8BED\u6CD5\u4F7F\u7528\uFF0C<strong>\u5EFA\u8BAE\u4F7F\u7528\u7A7A\u683C\u7ED3\u5C3E</strong>.</span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">icon:github&nbsp;</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">\u4E0A\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u8BED\u6CD5\u5C06\u4F1A\u88AB\u8F6C\u5316\u4E3A\u4E0B\u9762\u7684&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;\u4EE3\u7801.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">i&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">iconfont\xA0icon-github</span>"&gt;&lt;/<span class="tb-hl-tag">i</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>
<h2 style="background:var(--background); color: var(--font-color)">
<span style="color: var(--font-color); background:(--background)">over</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)"
    >\u4EE5\u4E0A\u5C31\u662F\u8BE5\u7B80\u5386\u6240\u652F\u6301\u7684\u4E00\u4E9B\u7279\u6B8A\u8BED\u6CD5\uFF0C\u5176\u4ED6\u7684\u8BED\u6CD5\u4E0E \u539F\u751F</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;\u540C\u6B65\uFF0C<strong>\u5982\u679C\u4F60\u6709\u4E0D\u9519\u7684\u60F3\u6CD5</strong>\uFF0C\u53EF\u4EE5\u5411\u6211\u63D0\u51FA\uFF0C</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >\u6B22\u8FCE\u7ED9\u8FD9\u4E2A\u9879\u76EE\u63D0\u4F9B\u4E0D\u540C\u7684\u7B80\u5386\u6A21\u677F</code
  ><span style="color: var(--font-color); background:(--background)"
    >\uFF0C\u611F\u8C22.&nbsp;<a target="null" href="https://github.com/acmenlei/markdown-resume-to-pdf"
      >\u4ED3\u5E93\u5730\u5740</a
    ></span
  ></span
>
</p>`,q={id:"syntax",class:"flex","data-aos":"fade-right"},G=p({__name:"syntax",setup(n){const o=c();return f(()=>{o.value.innerHTML=V}),(a,u)=>(t(),l("div",q,[i("div",{class:"syntax-helper",ref_key:"helper",ref:o},null,512),x(U,{class:"slider",body:".syntax-helper",style:{width:"300px"}})]))}});const io=d(G,[["__scopeId","data-v-834c2277"]]);export{io as default};
