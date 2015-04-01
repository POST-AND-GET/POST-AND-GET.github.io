var createNonceStr = function () {
    return Math.random().toString(36).substr(2, 15);
};
var createTimestamp = function () {
    return parseInt(new Date().getTime() / 1000) + '';
};
var raw = function (args) {
    var keys = Object.keys(args);
    keys = keys.sort()
    var newArgs = {};
    keys.forEach(function (key) {
        newArgs[key.toLowerCase()] = args[key];
    });
    var string = '';
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    return string;
};
var sign = function (jsapi_ticket, url) {
    var ret = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimestamp(),
        url: url
    };
    var string = raw(ret);
    shaObj = new jsSHA(string, 'TEXT');
    ret.signature = shaObj.getHash('SHA-1', 'HEX');
    return ret;
};
var request = function (url) {
    var xhp;
    if (window.ActiveXObject) {
        xhp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xhp = new XMLHttpRequest();
    }
    xhp.onreadystatechange = fn;
    xhp.open('GET', url, true);
    xhp.send();
    return fn;
}
var runfun = function (fun) {
    setTimeout(fun, 2000);
}
var ajax = function (src) {
    this.s = null;
    this.s = document.createElement("script");
    this.s.type = "text/javascript";
    this.s.src = src;
    document.getElementsByTagName("head")[0].appendChild(this.s);
}
var ticket = "";
var url = 'http://ama.adwo.com/advmessage/advthird/accessWxJsonP.action';
var runajax = function () {
    var src = url + '?submitinfo={"url":"https://api.weixin.qq.com/cgi-bin/token","data":{grant_type:"client_credential"}}&submittype=get&rettype=json&callback=get_access_token';
    var aj = new ajax(src);
}
var get_access_token=function(data) {
    if (data.access_token && data.access_token != "") {
        var src = url + '?submitinfo={"url":"https://api.weixin.qq.com/cgi-bin/ticket/getticket","data":{access_token:"' + data.access_token + '",type:"jsapi"}}&submittype=get&rettype=json&callback=get_ticket';
        var aj = new ajax(src);
    }
}
var get_ticket = function (data) {
    localStorage.setItem("ticket", data.ticket)
    window.location.reload();
}