// toggle="selecter: class"
$(function() {
    $(document.body).on('click', '[toggle]', function() {
        var attrValue = $(this).attr('toggle');
        var s_c = attrValue.split(':');
        $(s_c[0]).toggleClass(s_c[1]);
    });
});

// sidebar
$(function() {
    // toggle sidebar
    var $sidebarToggle = $('.sidebar-toggle');
    var $sidebarToggleClassEl = $('html');
    var sClass = 'sidebar-open';
    $sidebarToggle.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $sidebarToggleClassEl.toggleClass(sClass);
    });
    // 点击非 .sidebar 时关闭
    var $html = $('html');
    var $sidebar = $('.sidebar');
    $html.click(function(e) {
        if ($(e.target).closest($sidebar).length) return;
        $sidebarToggleClassEl.removeClass(sClass);
    });
    // menu
    // active and open
    $sidebar.find('a').each(function(i, el) {
        if (el.href === location.href && $(el).attr('href') !== '') {
            $(this).addClass('active');
        }
        if ($(this).hasClass('active')) {
            $(this).closest('ul').closest('li').addClass('open');
        }
    });
    // sidebar menu toggle
    var mClass = 'open';
    var $mToggle = $('ul.sidebar-menu ul').closest('li');
    $mToggle.click(function(e) {
        if ($(e.target).closest($('ul.sidebar-menu ul')).length) return;
        e.preventDefault();
        e.stopPropagation();
        var $toggleClassEl = $(this).closest('li');
        $toggleClassEl.children('ul').slideToggle('fast');
        $toggleClassEl.toggleClass(mClass);
    });
});
