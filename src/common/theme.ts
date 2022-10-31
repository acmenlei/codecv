import front_end from "./examples/front_end";
import operation from "./examples/operation";

export const themes = [
  {
    type: 'operation',
    id: Date.now(),
    img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28fda011e375476e9be99200fabf656c~tplv-k3u1fbpfcp-watermark.image?",
    content: operation,
    name: '运营'
  },
  {
    type: 'front_end',
    id: Date.now() - 10,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cbae36d47d4ed7ab9c79dca959f3fa~tplv-k3u1fbpfcp-watermark.image?',
    content: front_end,
    name: '互联网IT'
  },
  // {
  //   type: 'test',
  //   id: Date.now() - 20,
  //   img: 'https://s3.mdedit.online/blog/image-20210927025451038.png?imageView2/0/format/webp/q/75/w/400',
  //   content: resume1,
  //   name: '测试'
  // },
];

export type themeType = typeof themes[0];