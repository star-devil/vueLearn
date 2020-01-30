# 分类
1. TDD： 测试驱动开发（代码通过测试用例）--- 代码实现
2. BDD： 行为驱动开发（通过需求进行开发）--- 自然语言

# 测试工具
1. macha & chai 
    - macha 测试框架 
    - chai 断言库

    ## macha & chai 
    1. 测试文件都放在tests\unit文件下

    2. 文件名规范
    - XXX.spec.js
    - XXX.test.js

    3. 对写好的代码进行测试
    - 将代码进行export
    - 创建测试文件，最好个代码文件同名
    - 在测试文件中import代码文件
    - 使用测试用例`it('测试用例的名字',() => {'断言代码'})`，it函数不用导入
    - 写断言代码需要import chai库
    `import {expect} from 'chai'`  expect 是一种chai代码的书写风格，是最接近自然语言的一种，一共有3种，可查chaijs官网

    4. 监听每一次代码改动并自动测试
    - package.json中：
    ` "test:unit": "vue-cli-service test:unit --watch"`

    5. 断言代码
    `expect(abs(1)).to.be.equal(1);`
    - equal只能测试基本数据类型，对引用值无法测试
    `expect({}).to.be.deep.equal({});`  `expect({}).to.be.eql({});`
    - 可以测试对象键值对

    6. 将不同功能的测试用例放在对应的套件"describe"中
    ```js
    describe("add函数",() => {
        it("测试add求和",() => {
            expect(add(1,2,3,4)).to.be.equal(10);
        })
    })
    ```
    
    ### chai的基本用法

    * 判断相等
    > 判断基本类型 expect(1).to.be.equal(1); 

    > 判断引用类型：expect({a: 1}).to.be.deep.equal({a: 1})   /   expect({a: 1}).to.be.eql({a: 1}) 

    > deep标记：该标记可以让其后的断言不是比较对象本身，而是递归比较对象的键值对

    * 判断不等
    > expect(2).to.be.not.equal(1);

    * 判断大于
    > expect(10).to.be.above(5);

    > expect(10).to.be.greaterThan(5);


    * 判断小于
    > expect(5).to.be.below(10);

    > expect(5).to.be.lessThan(10);

    * 判断大于等于
    > expect(10).to.be.at.least(10);

    > expect(10).to.be.not.lessThan(10);

    * 判断小于等于
    > expect(5).to.be.at.most(5);

    > expect(5).to.be.not.greaterThan(5);

    * 判断长度
    > expect([1, 2, 3]).to.be.lengthOf(3);

    * 判断为truthy，(除了false、undefined、null、正负0、NaN、""的值)
    > expect(1).to.be.ok;

    * 判断为true、false、null、undefined、NaN
    > expect(true).to.be.true;

    > expect(false).to.be.false;

    > expect(null).to.be.null;

    > expect(undefined).to.be.undefined;

    > expect(NaN).to.be.NaN;

    * 判断包含
    > expect('shanshan').to.be.include('s'); 包含

    > expect('shanshan').to.be.contain('s'); 包含

    > expect('shanshan').to.be.match(/s/); 匹配

    * 断言元素存在
    > expect(wrapper.find('.fatherInfo').exists()).to.be.true; 存在

    > expect(wrapper.find('.fatherInfo').exists()).to.be.false; 不存在

    ### 测试组件
    - import组件，import Vue实例,import chai expect
    - 用vue实例上的extend方法拿到实例的构造器
    `const Constructor = Vue.extend(HelloWord);`
    - 将构造器挂载到实例上，用变量接收住返回的实例
    `const vm = new Constructor().$mount();`
    - 获取构造器上的dom并进行相应的判断
        1. 用原生
        ```js
        const msg = "hello World";
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor({
            propsData:{ //构造器上绑定数据的一个方法
                msg
            }
        }).$mount();
        let domInner = vm.$el.getElementByTagName('h1')[0].innerHTML; //获取标签上的值
        ```
        2. 用text-unit的mount方法
        > 官方文档 vue-test-utils
        > shallowMount 只渲染当前组件内，不渲染其子孙组件
        - 测试数据
        ```js
        import { mount } from "@vue/test-utils";
        it('测试helloWorld的msg信息是否能显示--test unit', () => {
            const msg = "hello World";
            const wrapper = mount(HelloWorld,{
                propsData:{
                    msg
                }
            });
            //赋值的语句也可以写成
            //const wrapper = mount(HelloWorld);
            //wrapper.setProps({msg});
            let domInner = wrapper.find('h1').text();
            // find不仅可以查找元素，还可以查找子组件,通过子组件可以调用组件实例上的方法
            // wrapper.find(Son).vm.$emit('show');
            // find是找一个h1,findAll可以找到所有的h1元素并放在一个数组里面
            expect(domInner).to.be.include(msg);
        })
        ```

        - 测试组件中的事件
        ```js
        import { mount } from "@vue/test-utils";
        it('测试mask是否随input框中的值改变', () => {
            const wrapper = mount(toDoList);
            let oInput = wrapper.find('input');
            //oInput.setValue('测试内容');//此句等同于一下两句话
            oInput.element.value = '测试内容'; //给dom元素赋值必须要加.element才能赋值成功
            oInput.trigger('input'); //赋值之后需要去触发点击事件才能使逻辑进行
            expect(wrapper.vm.mask).to.be.equal('测试内容');
        })
        ```

        - **sinon**测试组件中的事件执行情况，比如返回值以及执行次数
            > 安装：npm install sinon -D
            > 引入：import sinon from 'sinon';
            - 使用
            ```js
            const spy = sinon.spy(); //使用间谍函数
            wrapper.setProps({fn: spy}); //将间谍函数设置在wrapper中被测试的函数上
            wrapper.findAll('button').at(1).trigger('click'); //触发间谍函数
            expect(spy.called).to.be.true; //spy.called是表示间谍函数被执行(true),未执行(false)
            ```
            > 语法：

            - 使用方法
            > spy.called; 表示函数是否被调用,返回布尔值

            > spy.callCount; 函数被调用的次数

            > spy.calledOnce; 函数只被调用了一次，返回布尔值

            > spy.calledTwice; 函数被连续调用了两次，返回布尔值

            > spy.calledThrice; 函数被连续调用了三次，返回布尔值

            > spy.firstCall; 函数第一次被调用。返回布尔值

            > spy.secondCall; 函数第二次被调用。返回布尔值

            > spy.thirdCall; 函数第三次被调用。返回布尔值

            > spy.lastCall; 函数最后一次被调用。返回布尔值

            > spy.calledOn('xxx');  调用函数时，函数的this至少有一次是xxx，返回布尔值。

            > spy.alwaysCalledOn('xxx');  调用函数时，函数的this始终是xxx，返回布尔值。

            > spy.calledWidth(1, 2, 3); 函数至少被调用一次，且参数包含1, 2, 3,返回布尔值。

            > spy.calledOnceWith(1, 2, 3); 函数只被调用一次，且参数包含1, 2, 3,返回布尔值。

            > spy.alwaysCalledWith(1, 2, 3); 函数被调用时传的参数始终包括1,2,3，返回布尔值。

            > spy.calledWithExactly(1, 2, 3); 函数至少被调用一次，且参数只为1,2,3，返回布尔值。

            > spy.alwaysCalledWithExactly(1, 2, 3); 函数被调用时传的参数始终只为1,2,3，返回布尔值。

            > spy.calledWithNew(); 函数被作为构造函数new,返回布尔值。

            > spy.neverCalledWith(1, 2, 3); 函数执行时，参数从不为1, 2, 3。返回布尔值。

            > spy.threw(); 函数执行时，抛出一个异常。返回布尔值。

            > spy.threw("TypeError"); 函数执行时，至少抛出一次TypeError异常。返回布尔值。

            > spy.threw('xxx'); 函数执行时，至少抛出一次xxx异常。返回布尔值。

            > spy.alwaysThrew(); 函数执行时，始终抛出异常。返回布尔值。

            > spy.alwaysThrew("TypeError"); 函数执行时，始终抛出TypeError异常。返回布尔值。

            > spy.alwaysThrew('xxx'); 函数执行时，始终抛出xxx异常。返回布尔值。

            > spy.returned('xxx'); 函数执行时，至少返回一次xxx。返回布尔值。

            > spy.alwaysReturned('xxx'); 函数执行时，始终返回'xxx'。返回布尔值。

            > spy.getCall(n); 返回函数被第n次调用。

            > spy.getCalls(); 返回一个函数被调用的数组。

            > spy.thisValues; 返回函数被调用时this指向的集合, 值类型为数组。

            > spy.args; 返回函数被调用时参数，值类型为数组。

            > spy.exceptions; 返回函数被调用时抛出的异常集合. 值类型为数组。

            > spy.returnValues; 返回函数被调用时返回的值，值类型为数组。


2. jest
- 测试框架（主推）
## jest
