<template>
    <div class="async">
        <h4>{{ name }}</h4>
        <h4>{{ age }}</h4>
        <button @click="getName">获取姓名</button>
        <button @click="getAge">获取年龄</button>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            name:'',
            age: null
        }
    },
    methods:{
        getName() {
            axios.get('/name')
            .then(res => {
                this.name = res.data.name;
            })
            .catch(err => {
                console.log(err)
            })
        },
        getAge() {
            axios.get('/age')
            .then(res => {
                this.age = res.data.age;
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>