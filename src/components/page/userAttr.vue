<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 用户列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动报名用户</el-breadcrumb-item>
                <el-breadcrumb-item>用户属性</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--内容-->
        <ul class="wrap">
            <li>
                <div class="float_l">性别:</div>
                <div class="float_r">男</div>
            </li>
            <li>
                <div class="float_l">网络归属地区:</div>
                <div class="float_r">湖北  武汉</div>
            </li>
            <li>
                <div class="float_l">手机归属地区:</div>
                <div class="float_r">广东  深圳</div>
            </li>
            <li>
                <div class="float_l">近期使用记录:</div>
                <div class="float_r">
                    <span class="useTime">2018-05-06 10:36:28</span>
                    <span class="useTime">2018-05-06 10:36:28</span>
                    <span class="useTime">2018-05-06 10:36:28</span>
                    <span class="useTime">2018-05-06 10:36:28</span>
                    <span class="useTime">2018-05-06 10:36:28</span>
                    <span class="useTime">2018-05-06 10:36:28</span>
                </div>
            </li>
            <li>
                <div class="float_l">用户自选股票:</div>
                <div class="float_r">暂不支持</div>
            </li>
            <li>
                <div class="float_l">近期搜索股票:</div>
                <div class="float_r">暂不支持</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import NProgress from 'nprogress'
    import api from '../../api/api'
    import  util  from '../../common/util'
    import xlsx from 'xlsx'

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                listLoading: false,
            }
        },
        methods: {
            changePage(values) {
                this.information.pagination.per_page = values.perpage;
                this.information.data = this.information.data;
            },
            onSearch(searchQuery) {
                this.query = searchQuery;
            },
            timeFormatter(row, column) {
                let time = util.formatDate.format(new Date(row.createTime),'yyyy-MM-dd hh:mm:ss');
                return time;
            },
            //获取用户列表
            activeUser() {
                var userName = localStorage.yn_username;
                if(userName == undefined){
                    alert("登陆已经过期！");
                    return;
                }

                this.listLoading = true;
                NProgress.start();

            },
        },
        mounted() {
            this.activeUser();
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>