/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue3-emoji-picker' {
  import picker from 'vue3-emoji-picker'
  export default picker
}