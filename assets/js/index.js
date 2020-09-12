$(function () {
    var form = layui.form;
    var layer = layui.layer;

    // $.ajax({
    //     type: 'GET',
    //     url: '/my/userinfo',
    //     success: function (res) {
    //         console.log(res.data.username[0]);
    //         $('#welcome').html(`欢迎您&nbsp;${res.data.username}`)
    //         if (res.data.user_pic) {
    //             $('.touxiang').hide();
    //             $('.layui-nav-img.tu').attr('src', res.data.user_pic)
    //         } else {
    //             $('.layui-nav-img.tu').hide()
    //             $('.touxiang').html(res.data.username[0].toUpperCase()).show();
    //         }
    //     }
    // })
    getQingQiu(huanying);














})
function huanying(res) {
    // console.log(res);
    var hehe = res.data.nickname || res.data.username;
    $('#welcome').html(`欢迎您&nbsp;${hehe}`)
    if (res.data.user_pic) {
        $('.touxiang').hide();
        $('.layui-nav-img.tu').attr('src', res.data.user_pic)
    } else {
        $('.layui-nav-img.tu').hide()
        $('.touxiang').html(res.data.username[0].toUpperCase()).show();
    }
}
function getQingQiu(callback, datas) {
    $.ajax({
        type: 'GET',
        url: '/my/userinfo',
        data: datas || '',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            callback(res);
        }
    })
}
function postQingQiu(callback, datas) {
    $.ajax({
        type: 'POST',
        url: '/my/userinfo',
        data: datas || '',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            callback(res);
        }
    })
    console.log(111);
}