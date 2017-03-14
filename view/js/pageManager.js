/*

page('home').load()
page('home').show()
page('home').run();

*/

(function() {

    // class
    function Page(name) {}
    // methos
    Page.prototype = {
        load: function(fn) {
            var xhr = new XMLHttpRequest;
            xhr.open('home.html');
            xhr.onload = function() {
                var html = xhr.responseText;
            }
        }
    }

})();
