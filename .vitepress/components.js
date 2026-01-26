// 同步获取 examples 目录下的所有组件信息
const moduleFiles = import.meta.glob('../examples/*/*.vue', { eager: true })

const modules = {}

// 循环组件信息，
// key 是文件路径，value 是模块对象
for (const [key, value] of Object.entries(moduleFiles)) {
  const keys = key.split('/')
  const name = keys.slice(1).join('/')
  // value.default 是组件对象
  modules[name] = value.default
}

export default modules
