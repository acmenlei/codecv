import { templates } from '@/templates/config'
import TypeNet from 'typenet'
import { onActivated, onMounted, onUnmounted, reactive, ref } from 'vue'
import avatar1 from '@/assets/svg/avataaars1.svg'
import avatar2 from '@/assets/svg/avataaars2.svg'
import avatar3 from '@/assets/svg/avataaars3.svg'
import avatar4 from '@/assets/svg/avataaars4.svg'
import avatar5 from '@/assets/svg/avataaars5.svg'
import { getTemplateCondition, queryGiteeRepoStars } from '@/api/modules/resume'

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
      .type('快速生成你的优质简历', {
        style: 'font-size: 40px;line-height: 60px'
      })
      .line()
      .line()
      .type('CodeCV 支持你使用 Markdown 语法来编写你的简历，可扩展性极高。且支持双编辑模式，')
      .type('Markdown模式 ', { style: 'color: #ff7449' })
      .type('以及')
      .type(' 富文本模式 ', { style: 'color: #ff7449' })
      .type('无缝切换，多种模板适配，编写一套简历内容可适配多个简历模板，你想要的这里都有～')
      .start()
  })
}

export function usePresentation() {
  const GAP = 110,
    init = -30
  let timer: number

  const presentationData = reactive(templates.value.slice(7, 12))
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

export function useUserComments() {
  const comments = [
    {
      avatar: avatar1,
      profession: '阿里巴巴-前端技术专家',
      content: '使用体验还不错呀，UI 做的确实也蛮好的，小伙子继续加油！'
    },
    {
      avatar: avatar2,
      profession: '嵌入式开发工程师',
      content:
        '在nk推荐中看到了这个工具，非常感谢作者大大的开发，虽然我不是前后端开发，但是直观感觉这玩意真好～'
    },
    {
      avatar: avatar3,
      profession: 'Java开发工程师',
      content:
        '这个简历工具实在是泰库辣！真的节省了我很多时间，简历模板也很实用，发现了宝藏工具！！'
    },
    {
      avatar: avatar4,
      profession: '用户运营',
      content:
        '简历写起来真的非常方便，因为我不懂UP说的markdown，所以我使用富文本方式编写，感觉就和写word一样简单，墙裂推荐～'
    },

    {
      avatar: avatar5,
      profession: '产品经理',
      content:
        '周末在家搞网站发现的这个宝藏资源，写简历就跟写笔记一样简单了，所见即所得，以后写简历就在这上面了～'
    }
  ]
  return {
    comments
  }
}

export function useRecentTemplate() {
  onMounted(() => {
    // 处理数据
    ;(async () => {
      const _templateData = await getTemplateCondition()
      if (!_templateData.result) {
        return
      }
      const templateData = JSON.parse(_templateData.result)
      templates.value.forEach(template => (template.hot = templateData[`t${template.type}`]))
    })()
  })
}

export function useGiteeRepoStars() {
  interface GiteeRepoStars {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    html_url: string
    id: number
    login: string
    member_role: string
    name: string
    organizations_url: string
    received_events_url: string
    remark: string
    repos_url: string
    star_at: string
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
  }
  const repoStars = ref<GiteeRepoStars[]>([])
  const animate = ['fade-right', 'fade-up', 'fade-down', 'zoom-in', 'zoom-out', 'fade-left']
  async function query() {
    repoStars.value = (await queryGiteeRepoStars()) as GiteeRepoStars[]
  }

  function createAnimateEffect() {
    return animate[Math.floor(Math.random() * 10) % animate.length]
  }
  onActivated(query)
  return {
    repoStars,
    createAnimateEffect
  }
}
