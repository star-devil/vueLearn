<template>
    <div class="count">
        <div>jest测试vuex</div>
        <h4>store: {{ count }}</h4>
        <h4>getters: {{ dbCount }}</h4>
        <button @click="changeCount(10)">点击增加1</button>
        <button @click="addCount(10)">点击增加2</button>

    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['dbCount'])
    },
    methods: {
        ...mapMutations(['changeCount']),
        ...mapActions({
            addCount: 'changeCount'
        })
    }
}
</script>