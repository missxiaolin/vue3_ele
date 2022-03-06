const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../components')
const outputDir = path.resolve(__dirname, '../../vue3_ele')

/**
 * 全量构建
 */
const buildAll = async () => {

}

/**
 * 打包
 */
const buildLib = async () => {
    await buildAll()
}


buildLib()