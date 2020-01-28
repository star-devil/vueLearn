export default {
    namespaced: true,
    state:{
        coursename: 'vuex-Moudle学习',
        price: 10,
    },
    getters:{
        coursePrice(state) {
            return "¥" + state.price;
        }
    },
    mutations:{
        changePrice(state,{price}) {
            state.price = price;
        }
    },
    action:{}
  }