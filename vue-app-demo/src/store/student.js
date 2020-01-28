export default {
    state: {
        name: '默认',
        age: 0,
        studentList: []
      },
      getters:{
        person(state){
          return `姓名：${state.name} 年龄：${state.age}`;
        },
        newStudentList(state){
          return state.studentList.map(student => `姓名：${student.name} 年龄：${student.age}`)
        }
      },
      mutations: {
        changeStudentList(state,{tempObj,name}) {
          state.studentList.push(tempObj);
          state.name = name;//修改state中的默认值
        }
      },
      actions: {
        changeStudentList({commit},payload) {
          setTimeout(() => {
            commit('changeStudentList',payload) //异步函数 ，触发mutation中的方法去改变state
          }, 1000);
        }
      },
}