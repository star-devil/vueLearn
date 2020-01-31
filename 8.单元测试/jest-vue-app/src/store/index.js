import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
  state: {
    count: 1
  },
  getters: {
    dbCount: state => state.count * 2,
  },
  mutations: {
    changeCount(state,count) {
      state.count += count;
    }
  },
  actions: {
    changeCount({ commit },count) {
      setTimeout(() => {
        commit('changeCount',count)
      }, 1000);
    }
  },
  modules: {
  }
})
