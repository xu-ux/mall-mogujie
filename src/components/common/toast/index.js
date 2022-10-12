import Toast from './Toast'
const obj = {}

/**
 * Vue.use的时候，vue就传递过来了
 * @param {*} Vue 
 */
obj.install = (Vue) => {
  // 1.通过构造器获取组件构造
  const toastContrustor = Vue.extend(Toast)
  // 2.new的方法，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj