import Count from '@/components/Count';
import { mount,createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Count.vue",() => {
    let state;
    let store;
    let getters;
    let mutations;
    let actions;
    beforeEach(() => {
        state = { count: 1 };

        getters = {
            dbCount: () => state.count * 2
        };

        mutations = {
            changeCount: jest.fn()
        };

        actions = {
            changeCount: jest.fn()
        }
        store = new Vuex.Store({
            state,
            getters,
            mutations,
            actions
        })
    })
    it('测试store',() =>{
        const wrapper = mount(Count,{
            localVue,
            store
        });
        expect(wrapper.findAll('h4').at(0).text()).toContain(1);
    })
    it('测试getters',() =>{
        const wrapper = mount(Count,{
            localVue,
            store
        });
        expect(wrapper.findAll('h4').at(1).text()).toContain(getters.dbCount());
    })
    it('测试mutations',() =>{
        const wrapper = mount(Count,{
            localVue,
            store
        });
        wrapper.findAll('button').at(0).trigger('click')
        // expect(mutations.changeCount.mock.calls.length).toBe(1);
        expect(mutations.changeCount).toHaveBeenCalled();
    })

    it('测试actions',() =>{
        const wrapper = mount(Count,{
            localVue,
            store
        });
        wrapper.findAll('button').at(1).trigger('click')
        // expect(mutations.changeCount.mock.calls.length).toBe(1);
        expect(actions.changeCount).toHaveBeenCalled();
    })
})