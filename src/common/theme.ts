import front_end from "./examples/front_end";
import operation from "./examples/operation";
import internet from "./examples/internet";
import internet_avatar from "./examples/internet_avatar";
import general from "./examples/general";

export const themes = [
  {
    type: 'operation',
    id: 1,
    img: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da4c963a203e4007b09408a08f80a846~tplv-k3u1fbpfcp-watermark.image?",
    content: operation,
    name: '运营类'
  },
  {
    type: 'front_end',
    id: 2,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cbae36d47d4ed7ab9c79dca959f3fa~tplv-k3u1fbpfcp-watermark.image?',
    content: front_end,
    name: '互联网IT通用'
  },
  {
    type: 'internet',
    id: 3,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7f4750d40d4459486b1c9f77918ea50~tplv-k3u1fbpfcp-watermark.image?',
    content: internet,
    name: '互联网IT通用'
  },
  {
    type: 'internet_avatar',
    id: 4,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c02c66e3f2346d4bd7b81268775c406~tplv-k3u1fbpfcp-watermark.image?',
    content: internet_avatar,
    name: '互联网IT模板-带头像'
  },
  {
    type: 'general',
    id: 5,
    img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e76e4375f8443a48aaaaaf83968854f~tplv-k3u1fbpfcp-watermark.image?',
    content: general,
    name: '通用模板'
  },
];

export type themeType = typeof themes[0];