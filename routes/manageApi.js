/**
 * Created by kevenfeng on 2017/3/15.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var userDb = require('../model/userDb.js');


router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    next();
});
/* GET users listing. */
router.post('/checkLoginStatus', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var rightArray = [
        {
            userName: "dengta",
            password: "dengta"
        }
    ]
    var ifRight = false;
    for (var i = 0, j = rightArray.length; i < j; i++) {
        var userName = rightArray[i].userName;
        var password = rightArray[i].password;
        if (userName == req.body.username && password == req.body.password) {
            ifRight = true;

        }
    }

    if (ifRight) {
        res.json({
            ret: 0,
            msg: '登陆成功'
        })
    } else {
        res.json({
            ret: -1,
            msg: '登录失败'
        })
    }
});




//获取活动报名用户列表
router.post('/activeUser', function (req, res, next) {
    var phonenumber = req.body.phonenumber;
    var eventname = req.body.eventname;
    var options = {
        phonenumber: phonenumber,
        eventname: eventname
    };
});

module.exports = router;