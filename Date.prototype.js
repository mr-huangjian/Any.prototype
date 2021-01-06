
Date.prototype.$format = Date.prototype.$format || function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }

    return fmt
}

Date.$init = Date.$init || function (timestamp, formatter) {
    let msec = String(timestamp).length == 10 ? Number(timestamp) * 1000 : Number(timestamp)
    let date = new Date(msec)
    if (typeof formatter == 'string') {
        if (formatter) {
            return date.$format(formatter)
        } else {
            return date.toLocaleString()
        }
    }
    return date
}

Date.$time = Date.$time || function (type='s') {
    const value = new Date().getTime()
    return type == 's' ? parseInt(value / 1000) : value
}
