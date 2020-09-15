$.ajaxPrefilter(function (options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    options.complete = function (res) {
        if (res.responseJSON.status == 1 && res.responseJSON.message === '身份认证失败！') {
            location.href = '/login.html';
            localStorage.removeItem('token');
        }
    }
})
// ajax 请求函数 第一个参数为请求方式, 第二个为地址, 第三个为响应数据的处理函数, 第四个为传参
function QingQiu(fangshi, address, callback, datas) {
    $.ajax({
        type: fangshi,
        url: address,
        data: datas || '',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            callback(res);
        }
    })
}