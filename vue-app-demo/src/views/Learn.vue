<template>
    <div class="learn">
        <add-student />
        <hr />
        <student-list />
        <hr />
        {{ coursename }}
        {{ coursePrice }}
        <button @click="handleClick">change</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
//引入子组件
import AddStudent from '@/components/Learn/AddStudent'
import StudentList from '@/components/Learn/StudentList'
export default {
    components: {
        AddStudent,
        StudentList
    },
    computed: {
        ...mapGetters('learn','[coursePrice]'),
        ...mapState('learn','[courseName]')
    },
    methods: {
        handleClick() {
           this.$store.commit('learn/changePrice',{price:20})
        }
    }
}
</script>