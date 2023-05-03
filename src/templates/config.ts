const primaryColorMap: Map<string, string[]> = new Map()

// 创作模板的默认配色
primaryColorMap.set('create', ['#333', '#333'])

type Module = {
  default: SubModule
}

type SubModule = {
  type: string
  id: number
  name: string
  content: string
  primaryColor: string
  primaryBackground: string
  img: string
}
export type themeType = SubModule

export const themes: SubModule[] = []

const moduleEntries = Object.entries(import.meta.glob('./modules/*/index.ts'))

for (const [path, getModule] of moduleEntries) {
  try {
    const curModule = (await getModule()) as Module
    const content = curModule.default
    content.id = Math.ceil(Math.random() * 1000000000)
    content.type = path.split('/')[2]
    themes.push(content)
    primaryColorMap.set(content.type, [content.primaryColor, content.primaryBackground])
  } catch (e) {
    console.error(e)
  }
}
const match = (module: SubModule) => +(module.type.match(/^\d+/) as RegExpMatchArray)[0]
themes.sort((a, b) => match(b) - match(a))

export function getPrimaryBGColor(type: string) {
  return (primaryColorMap.get(type) as string[])[1]
}
export function getPrimaryColor(type: string) {
  return (primaryColorMap.get(type) as string[])[0]
}
