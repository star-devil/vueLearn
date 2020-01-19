<template>
    <div class="learn">
        <add-student />
        <hr />
        <student-list />
    </div>
</template>

<script>
//引入子组件
import AddStudent from '@/components/Learn/AddStudent'
import StudentList from '@/components/Learn/StudentList'
export default {
    components:{
        AddStudent,
        StudentList
    }
}
</script>