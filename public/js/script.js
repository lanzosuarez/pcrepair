$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startChange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".rheader").css({ 'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.26)', 'height': '6em', 'background-color': '#25a2c3' });
            } else {
                $('.rheader').css({ 'box-shadow': 'none', 'height': '7em', 'background-color': 'rgba(255, 255, 255, 0.03)' });
            }
        });
    }
});
$(document).ready(function () {
    var $toggle = $('.nav-toggle');
    var $menu = $('.nav-menu');

    $toggle.click(function() {
      $(this).toggleClass('is-active');
      $menu.toggleClass('is-active');
    });
});
