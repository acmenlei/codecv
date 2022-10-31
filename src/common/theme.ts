import resume1 from "./examples/resume1";
import operation from "./examples/operation";

export const themes = [
  {
    type: 'operation',
    id: Date.now(),
    img: 'https://s3.mdedit.online/blog/image-20210927025451038.png?imageView2/0/format/webp/q/75/w/400',
    content: operation,
    name: '运营'
  },
  {
    type: 'front_end',
    id: Date.now() - 10,
    img: 'https://s3.mdedit.online/blog/image-20210927025451038.png?imageView2/0/format/webp/q/75/w/400',
    content: resume1,
    name: '前端'
  },
  {
    type: 'test',
    id: Date.now() - 20,
    img: 'https://s3.mdedit.online/blog/image-20210927025451038.png?imageView2/0/format/webp/q/75/w/400',
    content: resume1,
    name: '测试'
  },
];

export type themeType = typeof themes[0];