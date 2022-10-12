import Vue from 'vue'
import Vuex from 'vuex'
import { 
  ADD_CART, ADD_CART_ASYNC, 
  UPDATE_CART_NUM, 
  UPDATE_CART_CHECKED,
  UPDATE_CART_CHECKED_ALL,
  DELETE_CART
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车数据，放弃使用map结构(存在bug)
    carts: {},
  },
  getters: {
    cartsCount(state, getters) {
      return getters.cartsKeys.length
    },
    cartsValues(state) {
      return Object.values(state.carts)
    },
    cartsKeys(state) {
      return Object.keys(state.carts)
    },
    // 选中的商品
    cartsChose(state) {
       return Object.values(state.carts).filter(s => s.checked)
    },
    // 选中的商品iid
    cartsChoseIds(state,getters) {
      return getters.cartsChose.map(s => s.iid)
    },
    // 选中的商品数量
    cartsChoseCount(state,getters) {
      return getters.cartsChose.length
    },
    // 金额合计
    cartsChoseTotal(state,getters) {
      return getters.cartsChose.map(s => parseFloat(s.realPrice) * s.num ).reduce((a,b) => a + b,0)
    },
    // 判断该商品是否已经在购物车选中
    cartsIsChose: (state) => (iid) => {
      return state.carts[iid].checked
    },
    // 是否全部已经在购物车里选中
    cartIsAllChose(state,getters) {
      return getters.cartsChoseCount === getters.cartsCount
    } 

  },
  mutations: {
    /**
     * 添加商品基本信息到购物车
     * @param {*} state  状态
     * @param {Object} payload  载荷一般是对象
     */
    [ADD_CART](state, payload) {
      let iid = payload.iid
      if (state.carts[iid] !== undefined) {
        let product = state.carts[iid]
        product.num += 1

      } else {
        Vue.set(state.carts, payload.iid, payload)
      }
    },
    /**
     * 修改购物车中某个数值
     * @param {*} state 
     * @param {*} param1 载荷 
     */
    [UPDATE_CART_NUM](state,{num,iid} ) {
      if (state.carts[iid] !== undefined) {
        let product = state.carts[iid]
        product.num = num
      } else {
        console.error(`Not Found Product iid: ${iid}`)
      }
    },
    /**
     * 修改选中状态
     * @param {*} state 
     * @param {*} param1 
     */
    [UPDATE_CART_CHECKED](state,{checked,iid}) {
      if (state.carts[iid] !== undefined) {
        let product = state.carts[iid]
        product.checked = checked
      } else {
        console.error(`Not Found Product iid: ${iid}`)
      }
    },
    /**
     * 修改全部的状态
     * @param {*} state 
     * @param {*} checked 
     */
    [UPDATE_CART_CHECKED_ALL](state,checked) {
      Object.values(state.carts).forEach(s => s.checked = checked)
    },
    /**
     * 删除商品
     * @param {*} state 
     * @param {*} iidList 
     */
    [DELETE_CART](state,ids){
      console.log(ids)
      ids.forEach(iid => Vue.delete(state.carts, iid))
    }
  },
  actions: {
    /**
     * 添加商品基本信息到购物车，异步
     * @param {*} context 上下文
     * @param {Object} payload  载荷一般是对象
     */
    [ADD_CART_ASYNC](context, payload) {
      return new Promise((resolve, reject) => {
        try {
          context.commit(ADD_CART, payload)
          resolve()
        } catch (e) {
          reject(e)
        }
      }
      )
    }
  },
  modules: {
  }
})
