import axios from 'axios';
//
// let base = 'http://localhost:55571';

let base = '';

// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
//
// export const getUserList = params => { return axios.get(`${base}/manageApi/getUserList`, { params: params }); };
//
// export const delUser = para
export default {
    requestLogin:function (params) {
        return axios.post(`${base}/manageApi/checkLoginStatus`, params).then(res => res.data).catch(e => e);
    },
    activeUser:function (params) {
        return axios.post(`${base}/manageApi/activeUser`, params).then(res => res.data).catch(e => e);
    },

}