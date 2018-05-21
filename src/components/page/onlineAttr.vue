<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 用户列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动报名用户</el-breadcrumb-item>
                <el-breadcrumb-item>线上付费属性</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--内容-->
        <ul class="wrap">
            <li>
                <div class="float_l">用户付费总额:</div>
                <div class="float_r">8500.00</div>
            </li>
            <li>
                <div class="float_l">产品权限列表:</div>
                <div class="float_r">
                    <div>会员服务 2019-05-27</div>
                    <div>会员服务 2019-05-27</div>
                    <div>会员服务 2019-05-27</div>
                    <div>会员服务 2019-05-27</div>
                    <div>会员服务 2019-05-27</div>
                </div>
            </li>
            <li>
                <div class="float_l">线上付费记录:</div>
                <div class="float_r">
                    <div>2018-05-06 10:51:13  1000.00 会员服务 12个月 --</div>
                    <div>2018-05-06 10:51:13  1000.00 会员服务 12个月 张三丰</div>
                    <div>2018-05-06 10:51:13  1000.00 会员服务 12个月 张三丰</div>
                    <div>2018-05-06 10:51:13  1000.00 会员服务 12个月 张三丰</div>
                    <div>2018-05-06 10:51:13  1000.00 会员服务 12个月 张三丰</div>
                </div>
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