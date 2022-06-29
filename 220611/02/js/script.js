
	// メニュー用
    (function($) {
        $(function() {
            var $header = $('#top-head');
            // Nav Toggle Button
            $('#nav-toggle').click(function(){
                $header.toggleClass('open');
            });
        });
    })(jQuery);

	// トップ画像のブラー
    // 参考：https://9-bb.com/jquery-scroll-blur-filter/
    $(window).on('scroll load',function(e) {
        var top = $('.top').height();
        var scrollnow = $(window).scrollTop();
        var scrollblur = (top+15*scrollnow)/top-1;
        var blur = Math.floor(scrollblur);
        $('.top').css('-webkit-filter','blur('+blur+'px)');
        $('.top').css('filter','blur('+blur+'px)');
    });

	// スライダーの設定
    $('.bxslider').bxSlider({
    auto: true,
    speed: 500,
    infiniteLoop: false,
    touchEnabled: false,
    hideControlOnEnd: true,
    pagerCustom: '.bxslider_thumbnail'
    });