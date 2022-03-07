const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../components')
const outputDir = path.resolve(__dirname, '../../l-ui')

/**
 * 基础配置
 */
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})

/**
 * 不打包vue vue-router
 */
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
    await build(defineConfig({
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
    }))
}

/**
 * 构建单个组件
 * @param {*} name 
 */
const buildSingle = async (name) => {
    console.log(name)
    await build(defineConfig({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, name),
                name: 'index',
                fileName: 'index',
                formats: ['es', 'umd']
            },
            outDir: path.resolve(outputDir, name)
        }
    }))
}

/**
 * 打包
 */
const buildLib = async () => {
    await buildAll()
    // 获取组件名称组成的数组
    const components = fs.readdirSync(entryDir).filter(name => {
        const componentDir = path.resolve(entryDir, name)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    // 循环一个一个组件构建
    for (const name of components) {
        await buildSingle(name)
    }
}


buildLib()