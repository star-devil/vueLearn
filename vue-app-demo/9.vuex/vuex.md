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
- store.js-->数据仓库-->所有数据放在其中的state:{}中
- 在组件中用computed对数据进行修改
- 导出store中state的所有数据(可以在用到的组件中进行导入)
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

# 初级使用
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
