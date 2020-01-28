<template>
    <div class="addStudent">
        <div>添加学生:{{ newPerson }}</div>
        <div>
            姓名：<input type="text" v-model="name">
        </div>
        <div>
            年龄：<input type="text" v-model="age">
        </div>
        <div>
            <button @click="handleClick">添加</button>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
            name: '',
            age: null,
        }
    },
    methods:{
        // ...mapMutations(['changeStudentList']),//mutation方法2
         ...mapActions(['changeStudentList']),//action方法2
        handleClick() {
            let tempObj ={
                name: this.name,
                age: this.age,
                id: +new Date()
            }
            // this.$store.state.studentList.push(tempObj);
            // this.$store.commit('changeStudentList',{tempObj,name:'mutation'});//mutation方法1
            // this.changeStudentList({tempObj,name:'mutation'});//mutation方法2
            // this.$store.dispatch('changeStudentList',{tempObj,name:'mutation'}); //action方法1
            this.changeStudentList({tempObj,name:'mutation'}) //action方法2
        },
    },
    computed:{
        ...mapGetters({
            newPerson: 'person'
        })
    }
}
</script>

<style scoped>
div {
    margin-bottom: 15px;
}
</style>