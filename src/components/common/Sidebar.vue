<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>用户列表</template>
                <el-menu-item index="activeUser">活动报名用户</el-menu-item>
                <el-menu-item index="onlineUser">线上付费用户</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        mounted(){
             if(localStorage.getItem('yn_username')=='dengta'){

             }
        }
    }


</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
