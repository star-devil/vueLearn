<template>
    <div class="sonInfo">
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="showInfo">查看信息</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    props: ['name','age','fn'],
    methods: {
        showInfo() {
            this.$emit('show');
        },
        changeAge() {
            this.fn();
        }
    }
}
</script>