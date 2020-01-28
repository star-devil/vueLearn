# 安装
1.  vue add vuex
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)  //$store   this.$store.state

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```
## state
1. store.js-->数据仓库-->所有数据放在其中的state:{}中
2. 在组件中用computed对数据进行修改
3. 导出store中state的所有数据(可以在用到的组件中进行导入)
```javascript
import { mapState } from 'vuex'
```
- 如果组件中有与state重名的数据，则需要对state中的数据重命名
```javascript
computed:{
    ...mapState ({
        storeName: state=>state.name //将state.name改名为storeName
    })
}
```
- 不需要改名的直接用
```javascript
computed:{
    ...mapState(['age','look'])
}
```

### 初级使用
1. 定义数据
```javascript
state: {
    studentList: [],
},
```
2. 改变数据 `this.$store.state.studentList.push(tempObj)`
```javascript
methods:{
        handleClick() {
            let tempObj ={
                name: this.name,
                age: this.age,
                id: +new Date()
            }
            this.$store.state.studentList.push(tempObj)
        }
    }
```
3. 使用数据
```javascript
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['studentList'])
    }
}
```

## getters
1. 相当于vue实例中的计算属性component

### 使用
- 函数名就是新数据的名字，参数为state,可以取到state中的数据
```js
 state: {
    studentList: []
  },
  getters:{
    newStudentList(state){ //还有一个参数是getters,可以取到getters中的一些值
      return state.studentList.map(student => `姓名：${student.name} 年龄：${student.age}`)
    }
  },
```
- 获取数据需要引入mapGetters
   - `this.$store.getters.xxx`
   - `mapGetters()`
   ```js
    import { mapGetters } from "vuex";
    export default {
    computed: {
        ...mapGetters(['newStudentList'])
    }
    };
    ```
- 取别名
```javascript
computed:{
    ...mapGetters ({
        newPerson: 'person' //将getters的person改名为newPerson
    })
}
```

## 严格模式(mutations & actions)

1. `strict:true`是vuex的严格模式，不允许直接修改store中的值(像上述的写法)，否则会报错，因为vue始终遵循单向数据流状态
    - 严格模式一般只在开发时开启，上线时不用
    `process.env.NODE_ENV !== 'production'`
2. `mutations` 是改变单向数据流状态的方法
    - mutations是对象，对象内容为函数，通过函数去更改**state**
    - 函数的第一个参数是state,第二个参数为传进来的值
    - 不能放异步函数
    1. commit
        可在目标组件的函数中使用`this.$store.commit('mutations对象中定义的函数名',payload)`提交函数，触发更改数据的方法
        - `payload`为载荷，外部的参数传进来全部由它接住，可以是一个值，可以使一个对象，对象时应该把值分别放进这个对象中进行传参
    2. mapMutations
        可以使用vuex组件中内置的mapMutations方法，同样需要引入
        ```js
        import { mapMutations } from "vuex";
        ```
        - 返回值为一些函数，这些函数需要执行，所以需要把mapMutation方法放在目标组件的methods中
        ```js
        methods:{
            ...mapMutations(['mutations对象中定义的函数名']),
            //调用
            this.mutations对象中定义的函数名({参数})
        }
        ```
3. 异步函数放在`action`中
    - action是对象，内容也是函数，可以和mutation重名
    1. commit
        函数第一个参数是context，是一个对象，可以直接传`{commit}`执行mutations中的更改数据的方法，第二个参数是payload，可以直接全部接收mutations的第二个参数
        - 在目标组件中用`this.$store.dispatch('action对象中定义的函数名',需要传入state的参数对象)`,执行action中的方法
    2. mapActions
        可以使用vuex组件中内置的mapActions方法，同样需要引入
        ```js
        import { mapActions } from "vuex";
        ```
        - 返回值为一些函数，这些函数需要执行，所以需要把mapMutation方法放在目标组件的methods中
        ```js
        methods:{
            ...mapActions(['Actions对象中定义的函数名']),
            //调用
            this.Actions对象中定义的函数名({参数})
        }
        ``` 


## 模块化 (moudles)
1. 每个组件将独自拥有自己的state
- 将state中的代码单独抽离成一个js文件，通过导出进行使用
- 在store的index.js中导入state js文件，并在moudles中直接使用导入的文件
- 导入之后store中有每个导入的state,state中的数据属于每一个模块的，不再是store.state中，mutations、actions、getters依旧是全局的
- 可以通过`this.$store.getters.xxx`/`this.$store.commit()`/`this.$store.moudle(js).xxx`取
2. 可以给每个模块state一个单独的命名空间
-  `namespced: true`
- 通过`...mapXxx()`的方式获取时，第一个参数要放命名空间的名字，第二个参数才是方法名

### 获取vuex中的数据（无namespaced）
- 获取state : this.$store.state.moduleName.xxx
- 获取getters： this.$store.getters.xxx
- 获取mutations： this.$store.commit('xxx')
- 获取actions： this.$store.dispatch('xxx')
- 可以通过mapXXX 方式拿到getters、mutations、action，但是不能拿到state，如果想通过这种方式获取state，需要加命名空间：namespaced：true

### 获取vuex中的数据（有namespaced）
- 获取state : this.$store.state.moduleName.xxx
- 获取getters： this.$store['moduleName/getters'].xxx
- 获取mutations： this.$store.commit('moduleName/xxx')
- 获取actions： this.$store.dispatch('moduleName/xxx')
- 可以通过mapXXX: mapXXX('moduleName', ['xxx'])  mapXXX('moduleName', {})

## 发送请求需要下载axios