import Vue from 'vue';
import Router from 'vue-router';
import api from '../api/api';
import  {MessageBox}  from 'element-ui';

Vue.use(Router);

function checkLogin(to,from,next){
    var userInfo = {
        username:localStorage.getItem('yn_username'),
        password:localStorage.getItem('yn_password')
    }
    api.requestLogin(userInfo).then((res) => {
        if(res.ret==0){
            next();
        }else{
            MessageBox.alert(res.msg, {
                confirmButtonText: '确定',
                callback: action => {
                    next('/login');
                }
            });

        }
    }).catch(e => {
        MessageBox.alert('登录失败请稍后重试',{
            confirmButtonText: '确定'
        });
    })
}

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/activeUser',
                        component: resolve => require(['../components/page/activeUser.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/userAttr',
                        component: resolve => require(['../components/page/userAttr.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                             var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/onlineAttr',
                        component: resolve => require(['../components/page/onlineAttr.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/underLineAttr',
                        component: resolve => require(['../components/page/underLineAttr.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/userAttr2',
                        component: resolve => require(['../components/page/userAttr2.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/onlineAttr2',
                        component: resolve => require(['../components/page/onlineAttr2.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/underLineAttr2',
                        component: resolve => require(['../components/page/underLineAttr2.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                },
                {
                    path: '/onlineUser',
                        component: resolve => require(['../components/page/onlineUser.vue'], resolve),
                        beforeEnter: (to, from, next) => {
                            var code = checkLogin(to, from, next);
                        }
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
