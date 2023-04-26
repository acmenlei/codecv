export const toolbarConfig = [
  {
    icon: 'bold',
    command: 'bold',
    tip: '加粗文本'
  },
  {
    icon: 'italic',
    command: 'italic',
    tip: '斜体文本'
  },
  {
    icon: 'unorderedlist',
    command: 'insertUnorderedList',
    tip: '无序列表'
  },
  {
    icon: 'orderedlist',
    command: 'insertOrderedList',
    tip: '有序列表'
  },
  {
    icon: 'emoji',
    command: 'insertIcon',
    tip: '插入图标'
  },
  {
    icon: 'info-circle-fill',
    command: 'insertUserInfo',
    tip: '插入个人信息布局'
  },
  {
    icon: 'columns',
    command: 'multiColumns',
    tip: '插入多列布局'
  },
  {
    icon: 'table',
    command: 'insertTable',
    tip: '插入表格'
  },
  {
    icon: 'code1',
    command: 'insertCode',
    tip: '插入技能点'
  },
  {
    icon: 'goto',
    command: 'insertToTail',
    tip: '跳出当前所在布局容器'
  }
]

export const headings = [
  { label: '正文', value: '' },
  { label: '一级标题', value: 'h1' },
  { label: '二级标题', value: 'h2' },
  { label: '三级标题', value: 'h3' },
  { label: '四级标记', value: 'h4' },
  { label: '五级标题', value: 'h5' },
  { label: '六级标题', value: 'h6' }
]
