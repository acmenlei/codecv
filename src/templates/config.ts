import front_end from './front_end'
import operation from './operation'
import internet from './internet'
import internet_avatar from './internet_avatar'
import general from './general/index'
import operation_avatar from './operation_avatar'
import business from './business'
import internet_social from './internet_social'
import concise from './concise'
import simple_avatar from './simple_avatar'
import graduation_reexam from './graduation_reexam'
import fresh from './fresh'
import geek from './geek'
import heading from './heading'
import simple_versatile from './simple_versatile'

export const themes = [
  {
    type: 'simple_versatile',
    id: 15,
    img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c6a6b934f9947a1a9c942558b80fd88~tplv-k3u1fbpfcp-watermark.image?',
    content: simple_versatile,
    name: '简约万能模板'
  },
  {
    type: 'heading',
    id: 14,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3d4a135f118420c93c62ac503d44fe8~tplv-k3u1fbpfcp-watermark.image?',
    content: heading,
    name: '简约风头部用色'
  },
  {
    type: 'geek',
    id: 13,
    img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b816951383e4809b09eeef985afe87b~tplv-k3u1fbpfcp-watermark.image?',
    content: geek,
    name: '暗黑极客风'
  },
  {
    type: 'fresh',
    id: 12,
    img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/274659ec6a294c2cb4f0d289bee3ba4f~tplv-k3u1fbpfcp-watermark.image?',
    content: fresh,
    name: '简约风(小鲨鱼)'
  },
  {
    type: 'graduation_reexam',
    id: 11,
    img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ce5f9d8c876420bbac1a5b0b35ad9f0~tplv-k3u1fbpfcp-watermark.image?',
    content: graduation_reexam,
    name: '研究生复试简历模板'
  },
  {
    type: 'simple_avatar',
    id: 10,
    img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30ca71caa4bb42adb9a7b37b7412460d~tplv-k3u1fbpfcp-watermark.image?',
    content: simple_avatar,
    name: '简约通用简历模板'
  },
  {
    type: 'concise',
    id: 9,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca4dab18c36043658d4cf4f8bb64e052~tplv-k3u1fbpfcp-watermark.image?',
    content: concise,
    name: '社招/校招简洁模版'
  },
  {
    type: 'internet_social',
    id: 8,
    img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee8318e9ad2542ab8b340a1d21a96e9e~tplv-k3u1fbpfcp-watermark.image?',
    content: internet_social,
    name: '互联网社招类(适合经验丰富)'
  },
  {
    type: 'business',
    id: 7,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6554138f3682438ba26038d0a2cae194~tplv-k3u1fbpfcp-watermark.image?',
    content: business,
    name: '商务类(一页)'
  },
  {
    type: 'operation_avatar',
    id: 6,
    img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5560f15292d4f629f6a2fe560165987~tplv-k3u1fbpfcp-watermark.image?',
    content: operation_avatar,
    name: '运营大类'
  },
  {
    type: 'general',
    id: 5,
    img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e76e4375f8443a48aaaaaf83968854f~tplv-k3u1fbpfcp-watermark.image?',
    content: general,
    name: '通用模板'
  },
  {
    type: 'internet_avatar',
    id: 4,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c02c66e3f2346d4bd7b81268775c406~tplv-k3u1fbpfcp-watermark.image?',
    content: internet_avatar,
    name: '互联网IT模板-带头像'
  },
  {
    type: 'internet',
    id: 3,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7f4750d40d4459486b1c9f77918ea50~tplv-k3u1fbpfcp-watermark.image?',
    content: internet,
    name: '互联网IT通用'
  },
  {
    type: 'front_end',
    id: 2,
    img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cbae36d47d4ed7ab9c79dca959f3fa~tplv-k3u1fbpfcp-watermark.image?',
    content: front_end,
    name: '互联网IT通用'
  },
  {
    type: 'operation',
    id: 1,
    img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31d7efc95b1b4532b2fb88b9249e591c~tplv-k3u1fbpfcp-watermark.image?',
    content: operation,
    name: '运营类'
  }
]

const primaryColorMap = {
  business: ['#111', '#297370'],
  front_end: ['#333', '#333'],
  general: ['#333', '#719ba5'],
  internet: ['#333', '#333'],
  internet_avatar: ['#333', '#333'],
  concise: ['#555', '#333'],
  internet_social: ['#333', '#9ad4eb'],
  operation: ['#333', '#333'],
  operation_avatar: ['#333', '#1a85f0'],
  simple_avatar: ['#2A2D2D', '#F98C07'],
  graduation_reexam: ['#3A3939', '#2186D2'],
  create: ['#000', '#000'], // 新建模版的默认配色
  fresh: ['#555', '#790FAE'],
  geek: ['#d1d1d1', '#17A00B'],
  heading: ['#363434', '#ffdc63'],
  simple_versatile: ['#333', '#C42F76']
}
interface IPrimaryColorMap {
  business: Array<string>
  front_end: Array<string>
  general: Array<string>
  internet: Array<string>
  internet_avatar: Array<string>
  internet_social: Array<string>
  operation: Array<string>
  operation_avatar: Array<string>
  simple_avatar: Array<string>
  graduation_reexam: Array<string>
}

export function getPrimaryBGColor(type: string) {
  return primaryColorMap[type as keyof IPrimaryColorMap][1]
}
export function getPrimaryColor(type: string) {
  return primaryColorMap[type as keyof IPrimaryColorMap][0]
}

export type themeType = (typeof themes)[0]
