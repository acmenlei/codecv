import front_end from "./examples/front_end";
import operation from "./examples/operation";
import internet from "./examples/internet";

export const themes = [
  {
    type: 'operation',
    id: Date.now(),
    img: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da4c963a203e4007b09408a08f80a846~tplv-k3u1fbpfcp-watermark.image?",
    content: operation,
    name: '运营类'
  },
  {
    type: 'front_end',
    id: Date.now() - 10,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cbae36d47d4ed7ab9c79dca959f3fa~tplv-k3u1fbpfcp-watermark.image?',
    content: front_end,
    name: '互联网IT通用'
  },
  {
    type: 'internet',
    id: Date.now() - 20,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7f4750d40d4459486b1c9f77918ea50~tplv-k3u1fbpfcp-watermark.image?',
    content: internet,
    name: '互联网IT通用'
  },
];

export type themeType = typeof themes[0];