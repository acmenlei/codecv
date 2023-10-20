import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import './popover.scss'
import { getLocalStorage, setLocalStorage } from '@/common/localstorage'

const driverObj = driver({
  popoverClass: 'popover-container',
  showProgress: true,
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  doneBtnText: '开始使用',
  steps: [
    {
      element: '.editor-toolbar',
      popover: {
        title: '创作工具栏',
        description: '你可以使用该工具栏快速编写简历排版'
      }
    },
    {
      element: '.icon-write',
      popover: {
        title: '编辑模式切换',
        description:
          '现支持两种模式，你可以使用 <strong style="color: var(--strong-color)">markdown</strong> 或 <strong style="color: var(--strong-color)">富文本</strong> 的方式来编写，不用担心切换后数据丢失，因为它们之间的数据是同步的～'
      }
    },
    {
      element: '.operator-level2',
      popover: {
        title: '简历工具栏',
        description:
          '你可以通过这些工具来调整你想要看到的简历效果，接下来我将给你介绍一下每一个工具的使用'
      }
    },
    {
      element: '.icon-adjust',
      popover: {
        title: '调节元素边距',
        description:
          '如果你对简历中某个元素的排版并不满意，你可以通过该功能对指定元素的上下边距进行调整'
      }
    },
    {
      element: '.icon-zhengjian',
      popover: {
        title: '证件照',
        description: '此功能为上传证件照'
      }
    },

    {
      element: '.icon-diy',
      popover: {
        title: '自定义CSS',
        description:
          '如果你有能力编写CSS，那么你可以在此处编辑CSS来调整简历效果，注意，CSS都需要写在.jufe类下确保生效'
      }
    },
    {
      element: '.font-color-picker',
      popover: { title: '自定义字体颜色', description: '简历的颜色可以由你自己自由控制' }
    },
    {
      element: '.main-color-picker',
      popover: { title: '自定义主色调', description: '同样，主色调也可以自由调整' }
    },
    {
      element: '.icon-refresh',
      popover: {
        title: '重置内容',
        description: '如果你想清空所有改动回到最初的样子，请使用该功能，该操作不可逆！'
      }
    },
    {
      element: '.follow-roll',
      popover: {
        title: '跟随滚动',
        description: '同时要滚动左右两个容器太麻烦了？把这个打开吧！'
      }
    },
    {
      element: '.font-select',
      popover: {
        title: '设置字体',
        description: '你可以根据自己喜好选择字体效果～'
      }
    },
    {
      element: '.el-dropdown-link',
      popover: {
        title: '导出简历内容',
        description:
          '如果你想保存你的简历内容，请在此处<strong style="color: var(--strong-color)">导出MD</strong>文件，想继续编写时导入即可'
      }
    },
    {
      element: '.use-guide',
      popover: {
        title: '使用引导',
        description: '如果你想再次查看使用指引，请点击这里'
      }
    }
  ]
})

export const startGuide = function () {
  const guideStatus = getLocalStorage('resume-make-guide')
  if (guideStatus) return
  setTimeout(driverObj.drive)
  setLocalStorage('resume-make-guide', true, 1000 * 3600 * 24 * 180)
}
export const refreshGuide = driverObj.drive
