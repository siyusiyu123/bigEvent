$(function () {
    var form = layui.form;
    var layer = layui.layer;
    initEditor();
    QingQiu('GET', '/my/article/cates', function (res) {
        console.log(res);
        var strHtml = template('xiala', res);
        console.log(strHtml);
        console.log($('#lalala'));
        $('#lalala').html(strHtml);
        form.render('select', 'gengxin');
    })
    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options)

    $('#xuan').on('click', function () {
        $('#wenjian').click();

    })
    $('#wenjian').on('change', function (e) {
        var file = e.target.files[0]
        console.log(file);
        var newImgURL = URL.createObjectURL(file)
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)
    })
    var State = '已发布';
    $('#caogao').click(function () {
        var State = '草稿';
    })
    $('#form_fabiao').on('submit', function (e) {
        e.preventDefault();
        console.log(666);
        var fd = new FormData(this)
        console.log(555);
        fd.append('state', State);
        $('#image')
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) {       // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                fd.append('cover_img', blob)
                $.ajax({
                    type: 'POST',
                    url: '/my/article/add',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success(res) {
                        layer.msg(res.message)
                        $('#form_fabiao')[0].reset();
                        location.href = './article_liebiao.html';
                    }
                })
            })
    })
})