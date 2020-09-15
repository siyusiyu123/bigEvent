$(function () {
    var form = layui.form;
    var layer = layui.layer;
    var index1 = null;
    var index2 = null;
    initTable();
    // 渲染表格函数
    function initTable() {
        QingQiu('GET', '/my/article/cates', function (res) {
            console.log(res);
            var htmlStr = template('hehe', res);
            $('#table_body').html(htmlStr);
        })
    }
    // 添加类别
    $('.tianjia').on('click', function () {
        index1 = layer.open({
            title: '添加文章分类',
            type: 1,
            content: template('tanchu', {}),
            area: ['500px', '250px']
        });
    })
    // 添加类别提交监听
    $('body').on('submit', '#form_tanchu', function (e) {
        e.preventDefault();
        // $('#form_tanchu')
        var data = {
            name: $('#form_tanchu [name=title]').val(),
            alias: $('#form_tanchu [name=retitle]').val()
        }
        QingQiu('POST', '/my/article/addcates', function (res) {
            console.log(res);
            layer.close(index1);
            initTable();
        }, data)
    })
    // 编辑功能
    $('#table_body').on('click', '#bianji', function (e) {
        let targetID = $(e.target).attr('data-id');
        QingQiu('GET', `/my/article/cates/${targetID}`, function (res) {
            console.log(res);
            index2 = layer.open({
                title: '修改文章分类',
                type: 1,
                content: template('temp_bianji', res.data),
                area: ['500px', '250px']
            });
            $('body').on('submit', '#form_bianji', function (e) {
                e.preventDefault();
                var data = {
                    Id: res.data.Id,
                    name: $('#form_bianji [name=title]').val(),
                    alias: $('#form_bianji [name=retitle]').val()
                }
                QingQiu('POST', '/my/article/updatecate', function (res) {
                    initTable();
                    layer.close(index2)
                }, data)
            })
        })


    })


    //删除功能
    $('#table_body').on('click', '#shanchu', function (e) {
        var targetID = $(e.target).attr('data-id');
        layer.confirm('是否删除?', { icon: 3, title: '提示' }, function (index) {
            QingQiu('GET', `/my/article/deletecate/${targetID}`, function (res) {
                initTable();
            })
            layer.close(index)
        })
    })
})