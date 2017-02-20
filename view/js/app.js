$(function(){
	// toggle="selecter: class"
	$(document.body).on('click', '[toggle]', function () {
		var attrValue = $(this).attr('toggle');
		var s_c = attrValue.split(':');
		$(s_c[0]).toggleClass(s_c[1]);
	});
});