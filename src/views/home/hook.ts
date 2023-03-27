import TypeIt from "typeit";
import { onMounted } from "vue";

export function useTypeIt() {
  onMounted(() => {
    new (TypeIt as any)(".typeit-text", {
      speed: 80,
      startDelay: 900
    })
      .type('<strong style="color: #fd79a8">Resume Board</strong> 是', { speed: 100 })
      .pause(1000)
      .type('一款完全免费的 <strong style="color: #fd79a8">Markdown</strong> 简历编写工具.<br/>', { speed: 100 })
      .pause(900)
      .type('可以将你编写的 <strong style="color: #fd79a8">Markdnow</strong>', { speed: 50 })
      .pause(500)
      .delete(3)
      .pause(500)
      .type('<strong style="color: #fd79a8">own</strong> 内容', { speed: 80 })
      .pause(900)
      .type('转为 <strong style="color: #fd79a8">PDF</strong> 格式的文件.<br/>', { speed: 100 })
      .pause(1000)
      // .type('<br/>', { speed: 100 })
      .type('如果你有不错的想法，<strong style="color: var(--theme)">欢迎为项目贡献出你的daima</strong>', { speed: 80 })
      .delete(5)
      .pause(500)
      .type('<strong style="color: var(--theme)">代码.</strong>', { speed: 80 })
      .go();
  })
}