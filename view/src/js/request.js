// import $ from 'lib/jquery.js'

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
module.exports = function request(options) {
    var host = (window.localStorage && localStorage.host) || options.host || location.origin;
    var url = (!options.url.match('://') ? host : '') + options.url;
    var data = JSON.stringify(options.data || {});

    $.ajax({
        url: url,
        type: options.type || 'post',
        headers: options.headers || { 'Content-type': 'application/json;charset=UTF-8' },
        data: data,
        dataType: options.dataType || 'json',
        success: function(rsp) {
            // error
            if (!rsp || rsp.error || rsp.result) {
                wu.toast((rsp.error || rsp.result) + ':' + (rsp.msg || rsp.resultDesc));
                options.error && options.error(rsp);
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
            wu.toast('请求出错！');
            options.error && options.error(xhr);
        }
    });
}
