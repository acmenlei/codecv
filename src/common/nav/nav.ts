const nav = [
  {
    name: '导入/导出',
    multiple: true,
    children: ['导入MD', '导出MD'],
    icon: 'iconfont icon-book nav-icon'
  },
  {
    name: '简历模板',
    path: '/theme',
    icon: 'iconfont icon-template nav-icon',
    tooltip: false
  },
  {
    name: '内置图标',
    icon: 'iconfont icon-application nav-icon',
    tooltip: true
  },
  {
    name: '语法助手',
    path: '/syntax/helper',
    icon: 'iconfont icon-problem nav-icon',
    tooltip: false
  },
]

export default nav;