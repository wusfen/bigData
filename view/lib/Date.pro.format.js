/**
 * date format
 *
 * @author wushufen
 * @example
 * 
 * console.log(new Date(2017,11-1,30, 12,30,40).format('yyyy-MM-dd HH:mm:ss'))
 * 
 * @param  {String} format 'yyy-MM-dd HH:mm:ss E'
 * @return {String}
 */
Date.prototype.format = function(format) {
    var date = this;
    var map = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        H: date.getHours(),
        h: function() {
            var h = date.getHours();
            return h > 12 ? h - 12 : h
        }(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        S: date.getMilliseconds()
    };
    for (var key in map) {
        format = format.replace(RegExp(key + '+', 'g'), function(s) {
            return (Array(s.length).join(0) + map[key]).slice(-s.length)
        })
    }

    return format.replace(/E+/g, function() {
        return '星期' + '日一二三四五六'.charAt(date.getDay());
    })
}

