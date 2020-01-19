<template>
    <div class="addStudent">
        <div>添加学生</div>
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
export default {
    data() {
        return {
            name: '',
            age: null,
        }
    },
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
}
</script>

<style scoped>
div {
    margin-bottom: 15px;
}
</style>