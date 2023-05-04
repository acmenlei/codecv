import TypeNet from 'typenet'
import { onMounted } from 'vue'

export function useTypeNet() {
  onMounted(() => {
    const content = document.querySelector('.typenet-text')
    if (content?.querySelector('.type-container') != null) return
    new TypeNet('.typenet-text', { speed: 10, style: 'font-weight: bold; line-height: 28px' })
      .type('使用', { style: 'font-weight: bold; font-size: 40px;line-height: 60px' })
      .type(' CodeCV Resume ', {
        style: 'color: #ff7449;font-weight: bold; font-size: 40px;line-height: 60px'
      })
      .type('免费生成你的简历', {
        style: 'font-weight: bold; font-size: 40px;line-height: 60px'
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
