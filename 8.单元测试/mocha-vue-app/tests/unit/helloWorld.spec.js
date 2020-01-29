import HelloWorld from "@/components/HelloWorld";
import Vue from "vue";
import { expect } from 'chai';
import { mount } from "@vue/test-utils";

describe("HelloWorld.vue",() => {
    it('测试helloWorld的msg信息是否能显示--原生', () => {
        const msg = "hello World";
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor({
            propsData:{
                msg
            }
        }).$mount();
        let domInner = vm.$el.getElementsByTagName('h1')[0].innerHTML;
        expect(domInner).to.be.include(msg);
    });

    it('测试helloWorld的msg信息是否能显示--test unit', () => {
        const msg = "hello World";
        // const wrapper = mount(HelloWorld,{
        //     propsData:{
        //         msg
        //     }
        // });
        const wrapper = mount(HelloWorld);
        wrapper.setProps({msg});
        let domInner = wrapper.find('h1').text();
        expect(domInner).to.be.include(msg);
    })
})