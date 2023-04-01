import TypeNet from "typenet";
import { onMounted } from "vue";

export function useTypeNet() {
  onMounted(() => {
    new TypeNet(".typenet-text", { speed: 80 })
      .type('Resume Board ', { style: 'color: #fd79a8' })
      .type('是')
      .sleep(300)
      .type('一款完全免费的 ')
      .type('Markdown', { style: 'color: #fd79a8' })
      .type(' 简历编写工具')
      .line()
      .sleep(300)
      .type('可以将你编写的 ', { speed: 50 })
      .type('Markdnow', { speed: 50, style: 'color: #fd79a8' })
      .sleep(300)
      .remove(3)
      .sleep(300)
      .type('own', { speed: 80, style: 'color: #fd79a8' })
      .type(' 内容')
      .sleep(300)
      .type('转为 ')
      .type('PDF', { style: 'color: var(--theme)' })
      .type(' 格式的文件.')
      .line()
      .sleep(300)
      .type('如果你有不错的想法，')
      .type('欢迎为项目贡献出你的daima', { style: 'color: var(--theme)' })
      .sleep(300)
      .remove(5)
      .sleep(300)
      .type('代码.', { speed: 80, style: "color: var(--theme)" })
      .start();
  })
}