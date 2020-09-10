var form = layui.form;
var layer = layui.layer;
$('#to_zhuce').on('click', function () {
    $('#form_zhuce').show();
    $('#form_denglu').hide();
})
$('#to_denglu').on('click', function () {
    $('#form_zhuce').hide();
    $('#form_denglu').show();
})
$('#form_zhuce').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'http://ajax.frontend.itheima.net/api/reguser',
        data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                layer.msg(res.message);
                return;
            }
            layer.msg(res.message);
            $('#to_denglu').click();
        }

    })
})
