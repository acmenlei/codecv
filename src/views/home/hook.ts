import { templates } from '@/templates/config'
import TypeNet from 'typenet'
import { onMounted, onUnmounted, reactive, ref } from 'vue'

export function useTypeNet() {
  onMounted(() => {
    const content = document.querySelector('.typenet-text')
    if (content?.querySelector('.type-container') != null) return
    new TypeNet('.typenet-text', { speed: 10, style: 'font-weight: bold; line-height: 28px' })
      // .type('5分钟', { style: 'font-size: 40px; line-height: 60px; color: #ff7449' })
      .type(' 使用', { style: 'font-size: 40px;line-height: 60px' })
      .type(' CodeCV ', {
        style: 'color: #ff7449; font-size: 40px;line-height: 60px'
      })
      .type('快速生成你的金牌简历', {
        style: 'font-size: 40px;line-height: 60px'
      })
      .line()
      .line()
      .type('CodeCV 支持你使用 Markdown 语法来编写你的简历，可扩展性极高。且支持双编辑模式，')
      .type('Markdown模式 ', { style: 'color: #ff7449' })
      .type('以及')
      .type(' 内容模式 ', { style: 'color: #ff7449' })
      .type('无缝切换，多种模板适配，编写一套简历内容可适配多个简历模板，你想要的这里都有～')
      .start()
  })
}

export function usePresentation() {
  const GAP = 110,
    init = -30
  let timer: number

  const presentationData = reactive(templates.slice(2, 7))
  const presentationIndex = ref(0)
  const styleConfig = [
    {
      transform: `translateX(${init}px) scale(${0.7})`,
      zIndex: 0
    },
    {
      transform: `translateX(${GAP + init}px) scale(${0.8})`,
      zIndex: 1
    },
    {
      transform: `translateX(${GAP * 2 + init}px) scale(${1})`,
      zIndex: 2
    },
    {
      transform: `translateX(${GAP * 3 + init}px) scale(${0.8})`,
      zIndex: 1
    },
    {
      transform: `translateX(${GAP * 4 + init}px) scale(${0.7})`,
      zIndex: 0
    }
  ]

  onMounted(() => {
    timer = setInterval(() => {
      presentationIndex.value = (presentationIndex.value + 1) % styleConfig.length
      presentationData.unshift(presentationData.pop() as (typeof presentationData)[0])
    }, 3000)
  })
  onUnmounted(() => clearInterval(timer))

  return {
    styleConfig,
    presentationData,
    presentationIndex
  }
}
