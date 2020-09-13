var xiu = window.parent;
var layer = layui.layer;
// 1.1 获取裁剪区域的 DOM 元素
var $image = $('#image')
var dataURL;
// 1.2 配置选项 
const options = {
    // 纵横比 
    aspectRatio: 1,
    // 指定预览区域 
    preview: '.img-preview'
}
// 1.3 创建裁剪区域 
$image.cropper(options);
$('.row2 [name=file]').on('click', function () {
    $('.row2 [name=file]').on('change', function (e) {
        var file = e.target.files[0];
        console.log(file);
        var newImgURL = URL.createObjectURL(file)
        $image.cropper('destroy')
            // 销毁旧的裁剪区域 
            .attr('src', newImgURL)
            // 重新设置图片路径 
            .cropper(options)

    })
})
$('#shangchuan').on('click', function () {
    $('.row2 [name=file]').click();
})
$('#queding').on('click', function () {
    dataURL = $image
        .cropper('getCroppedCanvas', {
            // 创建一个 Canvas 画布 
            width: 100,
            height: 100
        })
        .toDataURL('image/png')
    var data = {
        avatar: dataURL
    }
    xiu.QingQiu('POST', '/my/update/avatar', function (res) {
        console.log(666);
        console.log(res);
        xiu.QingQiu('GET', '/my/userinfo', xiu.huanying);
        layer.msg(res.message);
    }, data);

})
