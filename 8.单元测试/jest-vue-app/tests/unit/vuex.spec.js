import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import config from '@/store/index.js';
import { cloneDeep } from 'lodash'

describe("count.vue -> vuex", () =>{
    it("mutations",() =>{
        let localVue = createLocalVue();
        localVue.use(Vuex);
        let store = new Vuex.Store(cloneDeep(config)); //拿到store中的定义对象，而不是整个实例，需要在store index函数中仅导出配置，并只引用配置
        expect(store.state.count).toBe(1); //函数执行前的值
        store.commit('changeCount',10); // 执行函数
        expect(store.state.count).toBe(11);
    })

    it("actions",() =>{
        let localVue = createLocalVue();
        localVue.use(Vuex);
        let store = new Vuex.Store(cloneDeep(config)); //拿到store中的定义对象，而不是整个实例，需要在store index函数中仅导出配置，并只引用配置
        expect(store.state.count).toBe(1); //函数执行前的值
        jest.useFakeTimers();// jest中提供的一个模拟定时器
        store.dispatch('changeCount',10); // 执行函数
        jest.runAllTimers();//函数执行完之后，快进时间，直接跳过剩下的时间
        expect(store.state.count).toBe(11);
    })
})