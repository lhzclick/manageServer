<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 用户列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动报名用户</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--工具条-->


             <el-date-picker  class="dateChoice" v-on:change="dateChoice"
                  format="yyyy/MM/dd HH:mm:ss"
                  v-model="value7"
                  type="datetimerange"
                  align="left"
                  placeholder="请选择起始时间"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00', '08:00:00']">
             </el-date-picker>
            <el-select  class="select1" v-model="valueSelect1" placeholder="购买产品">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select  class="select1" v-model="valueSelect2" placeholder="服务时长">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select  class="select1" v-model="valueSelect3" placeholder="线下营销记录">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input class="userInput" v-model="userInput" placeholder="请输入用户手机号"></el-input>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">导出数据</el-button>


        <!--列表-->
        <el-table :data="tableData" border class="tableAll" style="width: 100%">
            <el-table-column prop="a1" label="编号" width="120">
            </el-table-column>
            <el-table-column prop="a2" label="报名时间" width="180">
            </el-table-column>
            <el-table-column prop="a3" label="手机号" width="180">
            </el-table-column>
            <el-table-column prop="a4" label="报名活动" width="180">
            </el-table-column>
            <el-table-column prop="a5" label="报名活动记录" width="180">
            </el-table-column>
            <el-table-column prop="a6" label="线上付费记录" width="180">
            </el-table-column>
            <el-table-column prop="a7" label="线下营销记录" width="180">
            </el-table-column>
            <el-table-column label="相关操作" width="372">
                  <template slot-scope="scope">
                      <el-button
                        size="small"
                        @click="userAttr">用户属性</el-button>
                      <el-button
                        size="small"
                        @click="onlineAttr">线上付费属性</el-button>
                         <el-button
                            size="small"
                            @click="underLineAttr">线下营销属性</el-button>
                 </template>
            </el-table-column>
             <!--<el-table-column label="报名状态" width="200">
                <template scope="scope">
                    <span>{{ scope.row.isRepeat}}</span>
                </template>
            </el-table-column> -->
        </el-table>

        <!-- 分页 -->
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
                totalNum:24,
                eventname:'wxDengTa',
                listLoading: false,
                tableData: [
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    },
                    {
                        a1:'test1',
                        a2:'test2',
                        a3:'test3',
                        a4:'test4',
                        a5:'test5',
                        a6:'test6',
                        a7:'test7'
                    }
                ],
                value7: '',
                time1:'',
                time2:'',

                //下拉列表数据
                options1: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                 options2: [{
                      value: '选项1',
                      label: '黄金糕'
                    }, {
                      value: '选项2',
                      label: '双皮奶'
                    }, {
                      value: '选项3',
                      label: '蚵仔煎'
                    }, {
                      value: '选项4',
                      label: '龙须面'
                    }, {
                      value: '选项5',
                      label: '北京烤鸭'
                 }],
                 options3: [{
                       value: '选项1',
                       label: '黄金糕'
                     }, {
                       value: '选项2',
                       label: '双皮奶'
                     }, {
                       value: '选项3',
                       label: '蚵仔煎'
                     }, {
                       value: '选项4',
                       label: '龙须面'
                     }, {
                       value: '选项5',
                       label: '北京烤鸭'
                 }],
                 valueSelect1: '',
                 valueSelect2: '',
                 valueSelect3: '',
                 userInput:''
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
               this.activeUser();
            },
            timeFormatter(row, column) {
                let time = util.formatDate.format(new Date(row.createTime),'yyyy-MM-dd hh:mm:ss');
                return time;
            },
            handleSizeChange(val) {
                this.pageNumb = val;
                this.activeUser();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.activeUser();
            },

            //用户属性跳转
            userAttr:function (){
                this.$router.push('/userAttr')
            },
            onlineAttr:function (){
                this.$router.push('/onlineAttr')
            },
             underLineAttr:function (){
                this.$router.push('/underLineAttr')
             },
            //获取用户列表
            activeUser() {
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
               /*this.$http({
                   url: 'https://act.wedengta.com/yuanning/add2018newactivities',
                       method: 'POST',
                       data: {
                           eventname:'wxDengTa',
                           phonenumber:13888888888
                       },
                       headers: {
                           "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                       }
                   }).then(function (res) {
                           console.log(res)
                   }, function () {
                });*/
            },
        },
        mounted() {
            this.activeUser();
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>