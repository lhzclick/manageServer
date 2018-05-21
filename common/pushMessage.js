/**
 * Created by 39253 on 2018/5/10.
 */

module.exports = function (eventName,title) {
    var mysql = require('mysql');
    var request = require('request');
    if (process.env.NODE_ENV === 'production') {
        let pool = mysql.createPool({
            host: 'operation.mysql.rds.aliyuncs.com',
            user: 'dengtacj',
            password: 'dengtacj2015',
            database: 'db_dengta_info'
        });
    } else {
        var pool = mysql.createPool({
            host: 'rds5o6p543rd9leq9tl7.mysql.rds.aliyuncs.com',
            user: 'dengtacj',
            password: 'dengtacj2015',
            database: 'db_dengta_info'
        });
    }

    var oldArr ;    //旧时间
    var newArr;    //新时间
    var isReapeat = 'SELECT phonenum  FROM t_yuanning_2018newactivities WHERE eventname='+pool.escape(eventName)
    setInterval(function(){
        var sendArr = [];   //需要发送短信
        var oldArr2 =[];    //oldArr变换
        //+ pool.escape(phonenumber) + ' AND eventname=' +  pool.escape(eventname);
        pool.getConnection(function (err, connection) {
            connection.query(isReapeat, [], function (error, results, fields) {
                if (error) {
                    connection.release();
                    console.log(error)
                } else {
                    newArr = results;
                    if(oldArr){
                        var numDif = newArr.length - oldArr.length;
                        //前后两次数据发生变化
                        if(numDif > 0){
                            //找出新增电话号码
                            for(var i = newArr.length-numDif ;i < newArr.length;i ++ ){
                                sendArr.push(newArr[i].phonenum)
                            }
                            //将老号码数组变形
                            for(var i = 0; i <  oldArr.length ; i ++ ){
                                oldArr2.push(oldArr[i].phonenum)
                            }
                            var sendTel = "";
                            for(var i = 0; i <  sendArr.length ; i ++){
                                //该活动中不存在该手机号码
                                if(oldArr2.indexOf(sendArr[i])==-1){
                                    sendTel =  unique(sendArr).join(';');
                                }
                            }
                            if(sendTel.length>0){
                                //发送邮件
                                var formData = JSON.stringify({
                                    sender:'liuhu@dengtacj.com',
                                    receiver:'liuhu@dengtacj.com;13098833347@163.com;djw228872164@163.com',
                                    subject:'灯塔活动报名提醒邮件',
                                    msg:'灯塔APP上的'+title+'活动有用户手机号为'+sendTel+'的用户已报名，请在5分钟内安排销售同事与用户联系',
                                    senderOptions:{
                                        address:'liuhu@dengtacj.com',
                                        password:'Liuh19941022'
                                    }
                                });
                                request({
                                    url: 'https://act.wedengta.com/yuanning/add2018newactivities',
                                    method: "POST",
                                    //json: true,
                                    headers: {
                                        "content-type": "application/json",
                                    },
                                    body: formData
                                }, function(error, response, body) {
                                    if (!error && response.statusCode == 200) {
                                        console.log(body)
                                    }
                                });
                            }
                        }
                    }
                    connection.release();
                }
            });
        });
        oldArr = newArr;
    },1000*60)

    //去重
    function unique(arr){
        var arr2 = arr.sort();
        var res = [arr2[0]];
        for(var i=1;i<arr2.length;i++){
            if(arr2[i] !== res[res.length-1]){
                res.push(arr2[i]);
            }
        }
        return res;
    }




}