$(function () {
    // 点击去注册
    localStorage.removeItem('token');
    $('#to_zhuce').on('click', function () {
        $('#form_zhuce').show();
        $('#form_denglu').hide();
    })
    // 点击去登陆
    $('#to_denglu').on('click', function () {
        $('#form_zhuce').hide();
        $('#form_denglu').show();
    })
    // 表单验证
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            var pwd = $('.zhuce [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        },
    })
    // 注册表单提交
    $('#form_zhuce').on('submit', function (e) {
        // 1. 阻止默认的提交行为
        e.preventDefault()
        // 2. 发起Ajax的POST请求
        var data = {
            username: $('.zhuce [name=username]').val(),
            password: $('.zhuce [name=password]').val(),
        }
        $.post('/api/reguser', data, function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')

            // 模拟人的点击行为
            $('#to_denglu').click()
            $('#form_zhuce')[0].reset();
        })
    })
    $('#form_denglu').on('submit', function (e) {
        e.preventDefault();
        var data = {
            username: $('.denglu [name=username]').val(),
            password: $('.denglu [name=password]').val(),
        }
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('用户名或密码错误')
                }
                // layer.msg(res.message);
                localStorage.setItem('token', res.token);
                location.href = '/index.html';
            }
        })
    })
})

