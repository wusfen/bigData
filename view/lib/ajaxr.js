;
(function() {


    // raw xx : this.resposeText = can't;
    var _send = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.send = function() {
        _send.apply(this, arguments);
        // console.log(this, arguments);

        // 注入
        var _onreadystatechange = this.onreadystatechange;
        this.onreadystatechange = function() {
            // console.log('==================')
            // for(var i in this){
            //  console.info(i, this[i])
            // }


            if (this.readyState == 4) {
                // this.response = 'ooooo'
                // this.responseText = 'ooooo'

                // console.log(this)
                // console.log(this.response)
                // console.log(this.responseText)
            }


            _onreadystatechange();
        }

    }

    // jquery
    if (typeof $ != 'undefined' && $) {
        var ajax = $.ajax;
        $.ajax = function(options) {

            // storage
            if (location.href.match(/(^|\?|&)ajaxr/)) {
                localStorage.ajaxr = true;
                // del
                if (location.href.match('ajaxr=false')) {
                    delete localStorage.ajaxr;
                }
            }

            // ajaxr ?
            if (window.localStorage && localStorage.ajaxr) {
                console.info('ajaxr', options.url, options.url2);
                document.title = '★ajaxr★';

                // url2
                if (options.url2) {
                    ajax($.extend({}, options, { url: options.url2 }));
                }
            } else {
                ajax(options);
            }
        }
    }


}());
