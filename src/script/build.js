const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../components')
const outputDir = path.resolve(__dirname, '../../l-ui')

const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})


const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

/**
 * 全量构建
 */
const buildAll = async () => {
    await build({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                name: 'index',
                fileName: 'index',
                formats: ['es', 'umd']
            },
            outDir: outputDir
        }
    })
}

/**
 * 打包
 */
const buildLib = async () => {
    await buildAll()
}


buildLib()