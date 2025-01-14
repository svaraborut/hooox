import { viteDefinePackageConfig } from '../../vite.config.mjs'
import pkg from './package.json'

export default viteDefinePackageConfig(__dirname, pkg)
