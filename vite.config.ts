import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import eslint from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
import externalGlobals from 'rollup-plugin-external-globals'
import viteImagemin from 'vite-plugin-imagemin'

const globals = externalGlobals({
  jspdf: 'jspdf',
  // '@textbus/editor': 'textbus.editor',
  axios: 'axios',
  html2canvas: 'html2canvas'
})

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      eslint({ lintOnStart: true, cache: false }), // 打包开启检查
      visualizer({ open: true })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    esbuild: {
      drop: env?.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : []
    },
    base: './',
    build: {
      rollupOptions: {
        external: ['jspdf', /*'@textbus/editor',*/ 'axios', 'html2canvas'],
        plugins: [
          globals,
          viteCompression({
            disable: false,
            threshold: 10240 // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
          }),
          viteImagemin({
            gifsicle: {
              optimizationLevel: 7,
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            mozjpeg: {
              quality: 20
            },
            pngquant: {
              quality: [0.8, 0.9],
              speed: 4
            },
            svgo: {
              plugins: [
                {
                  name: 'removeViewBox'
                },
                {
                  name: 'removeEmptyAttrs',
                  active: false
                }
              ]
            }
          })
        ],
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  })
}
