$(function () {
    var Id;
    var xiu = window.parent;
    QingQiu('GET', '/my/userinfo', function (res) {
        $('#form_change [name=username]').val(res.data.username);
        $('#form_change [name=nickname]').val(res.data.nickname);
        $('#form_change [name=email]').val(res.data.email);
        Id = res.data.id;
    })
    $('#form_change').on('submit', function () {
        var data = {
            id: Id,
            nickname: $('#form_change [name=nickname]').val(),
            email: $('#form_change [name=email]').val()
        }
        xiu.QingQiu('POST', '/my/userinfo', function (res) { console.log(777); }, data);
        xiu.QingQiu('GET', '/my/userinfo', xiu.huanying);
    })





























})