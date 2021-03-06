const request = require('request');
module.exports = async ip => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://opendata.baidu.com/api.php?query=${ip}&co=&resource_id=6006&t=1433920989928&ie=utf8&oe=utf-8&format=json`,
            method: `GET`,
        }, function (error, response, body) {
            body = JSON.parse(body);
            if (body.data.length === 0) {
                resolve('本地局域网');
                return
            }
            const location = body.data[0].location.split(' ')[0];
            // 获取省份和市区
            const provinces = location.substring(0, 2), city = location.substring(3, 5);
            resolve(provinces === city ? provinces : provinces + city);
        });
    });
}