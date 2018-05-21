/**
 * Created by kevenfeng on 2017/2/23.
 */
'use strict';
var mysql = require('mysql');
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

var pool2 = mysql.createPool({
    host: 'rm-bp155q1rf31fr66cvo.mysql.rds.aliyuncs.com',
    user: 'root',
    password: 'dengtacj@2015',
    database: 'yuanning'
});

let getStockList = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);
    var createStockAndGetSql = 'SELECT * FROM ynstockuser where unix_timestamp(createTime)> 1502850617 and `stock`= 300222 order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';';
    var getStockTotlePagesSql = 'SELECT count(*) as totleNumb FROM ynstockuser where unix_timestamp(createTime)> 1502850617';


    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(getStockTotlePagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(createStockAndGetSql, [], function (error2, results2, fields) {
                        connection.release();
                        if (error2) {
                            reject(error2);
                        } else {
                            var results = {
                                results1: results1,
                                results2: results2
                            }
                            resolve(results);
                        }
                    })
                }
            });
        });
    })
}

let getActUserList = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);

    var createStockAndGetSql = 'SELECT * FROM act_user where 1' + ' order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';';
    var getStockTotlePagesSql = 'SELECT count(*) as totleNumb FROM act_user where 1;';


    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(getStockTotlePagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(createStockAndGetSql, [], function (error2, results2, fields) {
                        connection.release();
                        if (error2) {
                            reject(error2);
                        } else {
                            var results = {
                                results1: results1,
                                results2: results2
                            }
                            resolve(results);
                        }
                    })
                }
            });
        });
    })
}
let add2018TwoSessionUser = function (options) {
    let phonenumber = parseInt(options.phonenumber);
    let url = options.url;
    var addUserSQL = 'INSERT INTO `t_yuanning_2018twosession` (`phonenum`, `url`) VALUES (' + pool.escape(phonenumber) + ',' + pool.escape(url) + ');';
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(addUserSQL, [], function () {
                connection.release();
                resolve();
            });
        });
    })
}
let add2018Zhangtingban = function (options) {
    let phonenumber = parseInt(options.phonenumber);
    let url = options.url;
    var addUserSQL = 'INSERT INTO `t_yuanning_2018zhangtingban` (`phonenum`, `url`) VALUES (' + pool.escape(phonenumber) + ',' + pool.escape(url) + ');';
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(addUserSQL, [], function () {
                connection.release();
                resolve();
            });
        });
    })
}


let addTel = function (options) {
    let phonenumber = parseInt(options.phonenumber);
    let url = options.url;
    var addUserSQL = 'INSERT INTO `telephone` (`phonenum`) VALUES (' + pool2.escape(mobile) + ');';
    return new Promise(function (resolve, reject) {
        pool2.getConnection(function (err, connection) {
            connection.query(addUserSQL, [], function () {
                connection.release();
                resolve();
            });
        });
    })
}
let get2018TwoSessionsUserList = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);
    let url = options.url;
    var createUserAndGetSql = 'SELECT id,phonenum,url,DATE_FORMAT(createtime,\'%Y-%m-%d %H:%i:%S\')as createtime FROM t_yuanning_2018twosession where url=' + pool.escape(url) + ' order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';';
    var getUserTotalPagesSql = 'SELECT count(*) as totleNumb FROM t_yuanning_2018twosession where url=' + pool.escape(url) + ';';


    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(getUserTotalPagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(createUserAndGetSql, [], function (error2, results2, fields) {
                        connection.release();
                        if (error2) {
                            reject(error2);
                        } else {
                            var results = {
                                results1: results1,
                                results2: results2
                            }
                            resolve(results);
                        }
                    })
                }
            });
        });
    })
}
let get2018Zhangtingban = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);
    let url = options.url;
    var createUserAndGetSql = 'SELECT id,phonenum,url,DATE_FORMAT(createtime,\'%Y-%m-%d %H:%i:%S\')as createtime FROM t_yuanning_2018zhangtingban where url=' + pool.escape(url) + ' order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';';
    var getUserTotalPagesSql = 'SELECT count(*) as totleNumb FROM t_yuanning_2018zhangtingban where url=' + pool.escape(url) + ';';


    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(getUserTotalPagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(createUserAndGetSql, [], function (error2, results2, fields) {
                        connection.release();
                        if (error2) {
                            reject(error2);
                        } else {
                            var results = {
                                results1: results1,
                                results2: results2
                            }
                            resolve(results);
                        }
                    })
                }
            });
        });
    })
}
let getTel = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);
    let url = options.url;
    var createUserAndGetSql = 'SELECT id,mobile,createtime FROM telephone'  + ' order by createtime desc limit ' + pool2.escape(pageNumb) + ',' + pool2.escape(everyPageNumb) + ';';
        var getUserTotalPagesSql = 'SELECT count(*) as totleNumb FROM telephone' + ';';


    return new Promise(function (resolve, reject) {
        pool2.getConnection(function (err, connection) {
            connection.query(getUserTotalPagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(createUserAndGetSql, [], function (error2, results2, fields) {
                        connection.release();
                        if (error2) {
                            reject(error2);
                        } else {
                            var results = {
                                results1: results1,
                                results2: results2
                            }
                            resolve(results);
                        }
                    })
                }
            });
        });
    })
}
let addevent = function (options) {
    let dtid = parseInt(options.dtid);
    let activityname = options.activityname;
    let url = options.url;
    let entry = options.entry;
    let event = options.event;
    var addUserSQL = 'INSERT INTO `t_individuation_event` (`dtid`, `activityname`, `url`, `entry`, `event`) VALUES (' +
        pool.escape(dtid) +
        ',' + pool.escape(activityname) +
        ',' + pool.escape(url) +
        ',' + pool.escape(entry) +
        ',' + pool.escape(event) +
        ');';
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(addUserSQL, [], function () {
                connection.release();
                resolve();
            });
        });
    })
}
let addstopduration = function (options) {
    let dtid = parseInt(options.dtid);
    let activityname = options.activityname;
    let url = options.url;
    let entry = options.entry;
    let stopduration = options.stopduration;
    var addUserSQL = 'INSERT INTO `t_individuation_stopduration` (`dtid`, `activityname`, `url`, `entry`, `stopduration`) VALUES (' +
        pool.escape(dtid) +
        ',' + pool.escape(activityname) +
        ',' + pool.escape(url) +
        ',' + pool.escape(entry) +
        ',' + pool.escape(stopduration) +
        ');';
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(addUserSQL, [], function () {
                connection.release();
                resolve();
            });
        });
    })
}
let add2018newactivities = function (options) {
    let phonenumber = parseInt(options.phonenumber);
    let url = options.url;
    let eventname = options.eventname;
    var addUserSQL = 'INSERT INTO `t_yuanning_2018newactivities` (`phonenum`, `url`, `eventname`) VALUES (' + pool.escape(phonenumber) + ',' + pool.escape(url) + ',' + pool.escape(eventname) + ');';
    var isReapeat = 'SELECT count(phonenum) AS repeatNum FROM t_yuanning_2018newactivities WHERE phonenum='+ pool.escape(phonenumber) + ' AND eventname=' +  pool.escape(eventname);

    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            //connection.query(isReapeat, [], function (error1, results1, fields) {
            //    if(error1){
            //        connection.release();
            //        reject(error1);
            //    }else{
            //        var repeatNum = results1[0].repeatNum;
            //        if(repeatNum<1){
                        connection.query(addUserSQL, [], function () {
                            connection.query(isReapeat,[], function (error1, results1, fields) {
                                connection.release();
                                if(error1){
                                    reject(error1);
                                 }else{
                                    var results = {
                                        results1: results1
                                    }
                                    resolve(results);
                                }
                            });
                        });
                    //}else{
                    //    connection.release();
                    //    resolve(results1);
                    //}
            //    }
            //})

        });
    });

}
let get2018newactivities = function (options) {
    let pageNumb = parseInt(options.limit);
    let everyPageNumb = parseInt(options.offset);
    let eventname = options.eventname;
    let time1 = options.time1;
    let time2 = options.time2;
    let createUserAndGetSql,getUserTotalPagesSql;
    if(time1.length&&time2.length){
        createUserAndGetSql = 'SELECT id,phonenum,DATE_FORMAT(createtime,\'%Y-%m-%d %H:%i:%S\')as createtime FROM t_yuanning_2018newactivities where eventname=' + pool.escape(eventname) +'AND createTime>='+pool.escape(time1)+'AND createTime<='+pool.escape(time2) +' order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';'
        getUserTotalPagesSql = 'SELECT count(*) as totleNumb FROM t_yuanning_2018newactivities where eventname=' + pool.escape(eventname)+'AND createTime>='+pool.escape(time1)+'AND createTime<='+pool.escape(time2) + ';'
    }else{
        createUserAndGetSql = 'SELECT id,phonenum,DATE_FORMAT(createtime,\'%Y-%m-%d %H:%i:%S\')as createtime FROM t_yuanning_2018newactivities where eventname=' + pool.escape(eventname) + ' order by createTime desc limit ' + pool.escape(pageNumb) + ',' + pool.escape(everyPageNumb) + ';'
        getUserTotalPagesSql = 'SELECT count(*) as totleNumb FROM t_yuanning_2018newactivities where eventname=' + pool.escape(eventname) + ';'
    }
    var getThisPhone = 'SELECT * FROM t_yuanning_2018newactivities';

    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            connection.query(getUserTotalPagesSql, [], function (error1, results1, fields) {
                if (error1) {
                    connection.release();
                    reject(error1);
                } else {
                    connection.query(getThisPhone, [], function (error3, results3, fields) {
                        if (error3) {
                            connection.release();
                            reject(error1);
                        }else{
                            connection.query(createUserAndGetSql, [], function (error2, results2, fields) {
                                //for ( var i = 0 ; i < results2.length; i ++ ){
                                //    results2[i].isRepeat = '本次活动报名重复'
                                //}
                                var arrOther = [],arrThisAct = [],arrThis = [];
                                for(var i = 0 ; i < results3.length; i ++  ){
                                    if(results3[i].eventname==eventname){
                                        arrThisAct.push(results3[i].phonenum)
                                    }else{
                                        arrOther.push(results3[i].phonenum)
                                    }
                                }
                                for ( var i = 0 ; i < results2.length; i ++ ){
                                    arrThis.push(results2[i].phonenum)
                                }
                                for(var i = 0 ; i < arrThis.length; i ++ ){
                                    if(arrThisAct.indexOf(arrThis[i],arrThisAct.indexOf(arrThis[i])+1)!=-1){
                                        //本次报名重复项
                                        results2[i].isRepeatAct = '本次活动报名重复'
                                    }else{
                                        //本次报名非重复项
                                        results2[i].isRepeatAct = ''
                                    }
                                    if(arrOther.indexOf(arrThis[i],arrOther.indexOf(arrThis[i])+1)!=-1){
                                        //本次报名重复项
                                        results2[i].isRepeatOther = '历史活动报名重复'
                                    }else{
                                        //本次报名非重复项
                                        results2[i].isRepeatOther = ''
                                    }
                                }

                                connection.release();
                                if (error2) {
                                    connection.release();
                                    reject(error2);
                                } else {
                                    var results = {
                                        results1: results1,
                                        results2: results2
                                    }
                                    resolve(results);
                                }
                            })
                        }
                    })

                }
            });
        });
    })
}
module.exports = {
    getStockList: getStockList,
    add2018Zhangtingban: add2018Zhangtingban,
    addTel:addTel,
    getTel:getTel,
    add2018newactivities: add2018newactivities,
    add2018TwoSessionUser: add2018TwoSessionUser,
    get2018TwoSessionsUserList: get2018TwoSessionsUserList,
    addevent: addevent,
    addstopduration: addstopduration,
    getActUserList: getActUserList,
    get2018newactivities: get2018newactivities,
    get2018Zhangtingban:get2018Zhangtingban
}