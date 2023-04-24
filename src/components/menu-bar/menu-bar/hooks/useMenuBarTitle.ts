import { nextTick, onActivated, ref } from 'vue'
import { IMenuBarItem } from '../../type'

// let levels = { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1,h6: 1}
export default function useMenuBarTitleConfigura(root: string) {
  const oMenuBarTitleData = ref<Array<IMenuBarItem>>([])

  nextTick(() => {
    oMenuBarTitleData.value = genMenuBarData(root)
  })
  onActivated(() => {
    oMenuBarTitleData.value = genMenuBarData(root)
  })

  return oMenuBarTitleData
}

function genMenuBarData(root: string): Array<IMenuBarItem> {
  const oMenuBarTitleData: Array<IMenuBarItem> = []
  dfs(oMenuBarTitleData, document.querySelector(root) as HTMLElement, 1)
  genMenunItemGap(oMenuBarTitleData)
  return oMenuBarTitleData
}

function dfs(menus: Array<IMenuBarItem>, node: HTMLElement, level: number) {
  // 是一个标题节点
  const tagName = node?.tagName.toLowerCase()
  if (node?.nodeType == 1 && tagName[0] === 'h') {
    const oMenuItem = { offsetMax: 0 } as IMenuBarItem
    //创建子元素
    oMenuItem.title = node.textContent + ''
    oMenuItem.level = +tagName[1]
    oMenuItem.offset = getMenuItemOffset(node)
    oMenuItem.target = node

    menus.push(oMenuItem)
  } else {
    if (!node || node.nodeType != 1) {
      return
    }
    const childrens = Array.from(node.children)

    for (const child of childrens) {
      dfs(menus, child as HTMLElement, level + 1)
    }
  }
}

function getMenuItemOffset(node: HTMLElement) {
  let height = node?.offsetTop,
    parent = node.offsetParent as HTMLElement
  while (parent !== null) {
    height += parent.offsetTop
    parent = parent.offsetParent as HTMLElement
  }
  return height
}

function genMenunItemGap(data: Array<IMenuBarItem>) {
  for (let i = 0, n = data.length; i < n; i++) {
    if (i + 1 < n) {
      data[i].offsetMax = data[i + 1].offset
    } else {
      data[i].offsetMax = Infinity
    }
  }
}
