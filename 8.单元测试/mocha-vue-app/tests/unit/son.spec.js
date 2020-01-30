import Son from '@/components/Son';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import sinon from 'sinon';

describe('son.vue',() => {
    it("测试子组件中的name、age是否正确显示",() =>{
        const name = '父子测试';
        const age = 18;
        const wrapper = mount(Son);
        wrapper.setProps({name,age});
        expect(wrapper.findAll('div').at(1).text()).to.be.include(name);
        expect(wrapper.findAll('div').at(2).text()).to.be.include(age);
    })
    it("测试点击button,有没有正确执行传递的函数属性", () => {
        const wrapper = mount(Son);
        const spy = sinon.spy();
        wrapper.setProps({fn: spy});
        wrapper.findAll('button').at(1).trigger('click');
        expect(spy.called).to.be.true;
    })
})