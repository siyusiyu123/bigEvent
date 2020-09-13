$(function () {
    var form = layui.form;
    var layer = layui.layer;
    var xiu = window.parent;
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            var pwd = $('#form_change_pwd [name=newPwd]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })
    $('#form_change_pwd').on('submit', function (e) {
        e.preventDefault();
        xiu.QingQiu('POST', '/my/updatepwd', function (res) {
            layer.msg(res.message);
            $('#form_change_pwd')[0].reset();
        }, $(this).serialize());
    })



















})