/*
* 金额格式化
* @param {Number} n 保留小数个数
* */
Number.prototype.formatMoney=function (n) {
    let dot = n === 0
    n = n > 0 && n <= 20 ? n : 2;
    let formatMoney = parseFloat((this + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    let l = formatMoney.split(".")[0].split("").reverse(), r = formatMoney.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + (dot?'':("." + r));
}

/*
* 时间格式化
* */
Date.prototype.formatDate = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}