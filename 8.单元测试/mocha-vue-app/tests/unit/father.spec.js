import Father from '@/components/Father';
import Son from '@/components/Son';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe ("Father.vue",() => {
    it("测试子组件show方法，显示信息",() => {
        const wrapper = shallowMount(Father);
        expect(wrapper.find('.fatherInfo').exists()).to.be.false;
        wrapper.find(Son).vm.$emit('show');
        expect(wrapper.find('.fatherInfo').exists()).to.be.true;
    })
    it("测试changeAge函数，年龄改变",() => {
        const wrapper = shallowMount(Father);
        wrapper.vm.changeAge();
        expect(wrapper.vm.age).to.be.equal(16);
    })
})
