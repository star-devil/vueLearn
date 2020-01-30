<template>
    <div class="info">
        <son
            :name="name"
            :age="age"
            :fn="changeAge"
            @show="showInfo"
        ></son>
        <div
            class="fatherInfo"
            v-if="show"
            :style="{
                fontWeight:600,
                margin: '20px 0',
                padding: '10px 0',
                border: '1px solid red'
                }"
        >
            姓名：父子测试<br>
            年龄：{{ age }}<br>
            性别：女<br>
            爱好：男<br>
            长相：秀色可餐<br>
        </div>
    </div>
</template>

<script>
import Son from './Son';
export default {
    components: {
        Son
    },
    data () {
        return {
            name: "父子测试",
            age: 18,
            show: false
        }
    },
    methods:{
        showInfo() {
            this.show = true;
        },
        changeAge() {
            this.age = 16;
        }
    }
}
</script>