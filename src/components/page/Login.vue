<template>
    <div class="login-wrap">
        <div class="ms-title">商务营销管理平台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username" lazy></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" lazy></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>

    import api from '../../api/api'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    console.log(self.ruleForm);
                    if (valid) {
                        self.toLogin(self.ruleForm);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            toLogin(userInfo){
                var self = this;
                api.requestLogin(userInfo).then((res) => {
                    if(res.ret==0){
                        localStorage.setItem('yn_username',self.ruleForm.username);
                        localStorage.setItem('yn_password',self.ruleForm.password);
                        self.$router.push('/readme');
                    }else{
                        self.$alert(res.msg, {
                            confirmButtonText: '确定',
                            callback: action => {
                                self.$router.push('/login');
                            }
                        });

                    }
                }).catch(e => {
                    self.$alert('登录失败请稍后重试',{
                        confirmButtonText: '确定'
                    });
                })
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
