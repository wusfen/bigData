/**
 * 统一数据请求接口
 * @require
 *     $.ajax
 *     wu.toast
 * @example
 * request({
 *     url: '/path',
 *     data: {
 *         
 *     },
 *     success: function(rsp){
 *     }
 * })
 * @param  {Object} options 参数
 * @return {[type]}         [description]
 */
function request(options) {
    var host = 'http://117.131.17.93:8042';
    var url = options.url;
    if (!url.match('://')) {
        url = host + url;
    }
    var time = new Date().format('HH:mm:ss SSS');
    options.data._time_ = time;
    var data = JSON.stringify(options.data);

    $.ajax({
        url: url,
        url2: options.url2,
        type: options.type || 'post',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        data: data,
        dataType: 'json',
        success: function(rsp) {
            // error
            if (!rsp || rsp.result) {
                wu.toast(rsp.result + ':' + rsp.resultDesc);
                return;
            }

            // handle
            options.success(rsp);

            // debug
            if (location.search.match('debug')) {
                console.info(time + ' request:' + options.url);
                console.log(data);
                console.log(new Date().format('HH:mm:ss SSS') + ' rsp:');
                console.warn(rsp);
            }
        },
        error: function(xhr) {
            wu.toast('请求数据出错！');
            options.error && options.error(xhr);
        }
    });
}
