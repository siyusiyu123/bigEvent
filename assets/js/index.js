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
    QingQiu('GET', '/my/userinfo', huanying);
    // layui-nav-itemed
    $('#wenzhang').on('click', function () {
        if ($(this).attr('class').indexOf('layui-nav-itemed') !== -1) {
            $('#geren').removeClass('layui-nav-itemed');
        }
    })
    $('#geren').on('click', function () {
        if ($(this).attr('class').indexOf('layui-nav-itemed') !== -1) {
            $('#wenzhang').removeClass('layui-nav-itemed');
        }
    })
    $('#tuichu').on('click', () => {
        layer.confirm('是否退出?', { icon: 3, title: '提示' }, function (index) {
            location.href = '/login.html';
            localStorage.removeItem('token');
            layer.close(index);
        })
    })
})
function huanying(res) {
    // console.log(555, res);
    var hehe = res.data.nickname || res.data.username;
    $('#welcome').html(`欢迎您&nbsp;${hehe}`)
    if (res.data.user_pic) {
        $('.touxiang').hide();
        // console.log(res.data.user_pic);
        $('.layui-nav-img.tu').prop('src', res.data.user_pic)
    } else {
        $('.layui-nav-img.tu').hide()
        $('.touxiang').html(res.data.username[0].toUpperCase()).show();
    }
}
// function postQingQiu(fangshi, address, callback, datas) {
//     $.ajax({
//         type: fangshi,
//         url: address,
//         data: datas || '',
//         success: function (res) {
//             if (res.status !== 0) {
//                 return layer.msg(res.message)
//             }
//             callback(res);
//         }
//     })
// }