/*------------------------------------------------------------/
 功能：设置列表中表项获取鼠标焦点时的背景色
 参数：li_col【可选】 鼠标所在表项行的背景色
 返回：原调用对象
 示例：$("ul").focusColor("red");
 /------------------------------------------------------------*/
;(function ($) {
    $.fn.extend({
        'focusColor': function (li_color) {
            var def_color = '#ccc';
            var old_color = $(this).find('li').css('background-color');
            li_color = (li_color == undefined) ? def_color : li_color;
            $(this).find('li').each(function () {
                $(this).mouseover(function () {
                    $(this).css('background-color', li_color);
                }).mouseout(function () {
                    $(this).css('background-color', old_color);
                });
            });
            return $(this);
        }
    });
})(jQuery);