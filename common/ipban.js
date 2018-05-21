/**
 * Created by 39253 on 2018/5/9.
 */
// list of banned IPs
var banned = [
    '58.48.177.106',     //灯塔15
    '61.183.195.146',   //商务
    '59.172.78.33', //邓佳雯
];
var get_ip = function(req) {
    var ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || ''
        req.ip ||
        (req.socket && (req.socket.remoteAddress || (req.socket.socket && req.socket.socket.remoteAddress))) ||
        ''
    if(ip.split(',').length>0){
        ip = ip.split(',')[0];
    }
    //ip = ip.match(IP_REG)
    return ip;
};
//const IP_REG = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/


module.exports = function () {
        return function(req, res, next) {
            //console.log(getClientIp(req))
            console.log(get_ip(req))
            var bannedIp = false;
            for(var i=0,j=banned.length;i<j;i++){
                if (req.connection.remoteAddress.indexOf(banned[i]) > -1) {
                    bannedIp = true;
                    res.end('you are Banned');
                }
            }
            if(!bannedIp){
                next();
            }
        }
};