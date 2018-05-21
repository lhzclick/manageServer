<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-form :inline="true">
                <el-form-item>
                    <el-button type="primary" v-on:click="excelDownLoad">导出数据</el-button>
                </el-form-item>
            </el-form>
             <el-date-picker class="dateChoice" v-on:change="dateChoice"
                  format="yyyy/MM/dd HH:mm:ss"
                  v-model="value7"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00', '08:00:00']">
             </el-date-picker>
        </el-col>


        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="id" width="200">
            </el-table-column>
            <el-table-column prop="phonenum" label="电话号码" width="200">
            </el-table-column>
            <el-table-column prop="isRepeatAct" label="本次报名状态" width="200">
             </el-table-column>
             <el-table-column prop="isRepeatOther" label="历史报名状态" width="200">
             </el-table-column>
             <!--<el-table-column label="报名状态" width="200">
                <template scope="scope">
                    <span>{{ scope.row.isRepeat}}</span>
                </template>
            </el-table-column> -->
            <el-table-column prop="createtime" label="创建时间" width="240"></el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10,30,100,500,1000, 5000, 10000]"
                    :page-size="pageNumb"
                    layout="sizes, prev, pager, next"
                    :total="totalNum">
            </el-pagination>
        </div>
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
                currentPage: 1,
                pageNumb:10,
                totalNum:0,
                eventname:'gift',
                listLoading: false,
                tableData: [],
                value7: '',
                time1:'',
                time2:''
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
            excelDownLoad(){
                 try {
                     var jsono = util.xlsx.getGridDataToJson();
                     util.xlsx.downloadExl(jsono,xlsx,"用户数据");

                 }catch (e){console.log(e.message)}
            },
            dateChoice(a){
               var time1 = a.split('-')[0].replace(/\//g,'-');
               var time2 = a.split('-')[1].replace(/\//g,'-');
               this.time1 = time1;
               this.time2 = time2;
               this.get2018newactivities();
            },
            timeFormatter(row, column) {
                let time = util.formatDate.format(new Date(row.createTime),'yyyy-MM-dd hh:mm:ss');
                return time;
            },
            handleSizeChange(val) {
                this.pageNumb = val;
                this.get2018newactivities();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.get2018newactivities();
            },
            //获取用户列表
            get2018newactivities() {
                var userName = localStorage.yn_username;
                if(userName == undefined){
                    alert("登陆已经过期！");
                    return;
                }
                let para = {
                    currentPage: this.currentPage - 1,
                    pageNumb: this.pageNumb,
                    eventname: this.eventname,
                    time1:this.time1,
                    time2:this.time2
                };
                this.listLoading = true;
                NProgress.start();
                api.get2018newactivities(para).then((res) => {
                    this.totalNum = res.totleNumb;
                    this.tableData = res.dataList;
                    this.listLoading = false;
                    NProgress.done();
                }).catch((error) => {
                    NProgress.done();
                    console.log(error);
                    this.$message({
                        type: 'error',
                        message: '获取股票列表失败，请刷新重试'
                    });
                });
            },
        },
        mounted() {
            this.get2018newactivities();
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>