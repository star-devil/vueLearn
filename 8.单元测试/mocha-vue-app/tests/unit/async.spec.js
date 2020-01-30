import Async from '@/components/Async';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import moxios from 'moxios';

describe("Async.vue",() => {
    beforeEach(() =>{
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    it("测试异步函数获取name值",done => {  //done参数是等函数执行完再执行测试用例
        const wrapper = mount(Async);
        const name = "异步函数测试";
        wrapper.findAll('button').at(0).trigger('click');
        moxios.wait(() =>{
            let requests = moxios.requests.mostRecent();//拿到模拟数据发送的请求
            requests.respondWith({  //模拟返回结果
                status: 200,
                response: {
                    name
                }
            }).then(() =>{
                expect(wrapper.findAll('h4').at(0).text()).to.be.equal(name);
                done();
            })
        })
    })
    //拦截age请求
    it("获取age值", done => {
        const wrapper = mount(Async);
        const age = "18";
        wrapper.findAll('button').at(1).trigger('click');
        moxios.stubRequest('/age',{
            status: 200,
            response: {
                age
            }
        });//第一个参数是请求url,第二个是处理数据
        moxios.wait(() =>{
            expect(wrapper.findAll('h4').at(1).text()).to.be.equal(age);
            done();
        })
    })
})