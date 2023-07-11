# 岗位添加方式

## 悉知

> `warning`: 岗位需要是真实在招人的，刷`KPI`的被发现将加入黑名单册

> `info`: 需要新增岗位的可以按照如下格式在 `recruit.ts` 文件中进行添加后提交 `PR` 或者联系作者本人添加

- `logo`: 公司 logo（不是必须的，有的话可以加上，增加辨识度）
- `type`: 招聘面向哪些人群
- `job`: 招聘的岗位
- `corporation`: 招聘公司名称
- `tags`: 岗位或公司相关标签
- `endTime`: 截止时间
- `educational_required`: 学历要求
- `remark`: 其他信息
- `external_link`: 投递方式（可以给官方链接也可以提供微信联系方式）

## 岗位例子

```js
{
    logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0175GaEE1WFD2QbMmw2_!!6000000002758-2-tps-200-53.png',
    type: ['应届生', '1-3年经验'],
    job: '前端开发工程师',
    corporation: '飞猪旅行',
    tags: ['福利待遇好', '面试简单'],
    endTime: '尽快投递',
    educational_required: ['统招本科', '不强制要求92', '优秀可特批'],
    remark: '领导很好，本人亲试。',
    external_link: 'https://alibaba.com/feizhu'
}
```
