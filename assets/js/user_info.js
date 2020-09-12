$(function () {
    var Id;
    var xiu = window.parent;
    xiu.getQingQiu(function (res) {
        $('#form_change [name=username]').val(res.data.username);
        Id = res.data.id;
    })
    $('#form_change').on('submit', function () {
        var data = {
            id: Id,
            nickname: $('#form_change [name=nickname]').val(),
            email: $('#form_change [name=email]').val()
        }
        xiu.postQingQiu(function (res) { }, data);
        xiu.getQingQiu(window.parent.huanying);
    })





























})