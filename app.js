/**
 * Created by cc on 16/7/4.
 */




$(window).scroll(function () {
    if ($(window).scrollTop() > $('#core-business').offset().top - $('#MainNavbar').height()) {
        $('.navbar-default').css({
            'background': '#ffffff',
            'transition-duration': '0.5s', 'border-color': '#e5e5e5'


        });
        $('.nav-text').css({
            'color': '#333333'
        });
        $('.tooth-logo').css('background-image',
            'url("http://cdn.yichicloud.com/assets/tooth-logo-blue-0ef9ffff7123c9efc3305ca51bea398963dab9b8da6ef0639150bacbf4b9aa69.svg")'
        );
        $('.navbar-brand').css({
            'color': '#06B4EF'
        });
        $('.btn-register').css({
            'border-color': '#999999',
            'color':'#999999'
        });
        $('.btn-login').css({
            'color': '#ffffff'
        });

        $(".btn-login").hover(function(){
            $(".btn-login").css({"background-color":"white",'color':'#06B4EF','transition-duration':'0.5s'});
        },function(){
            $(".btn-login").css({"background-color":"#06B4EF",'color':'white','transition-duration':'0.5s'});
        });
    } else {


        $('.navbar-default').css({
            'background': '#06B4EF',
            'transition-duration': '0.5s',
            'border-color': 'transparent'

        });

        $('.tooth-logo').css('background-image',
            'url("http://cdn.yichicloud.com/assets/tooth-logo-white-3b287e52eda30d07363e87afe004b7f774b07c7370f16613e539765477bf1b19.svg")'
        );
        $('.nav-text').css({
            'color': '#ffffff'
        });
        $('.navbar-brand').css({
            'color': '#ffffff'
        });
        $('.btn-register').css({
            'border-color': '#FFFFFF',
            'color':'white'
        });
        $(".btn-login").hover(function(){
            $(".btn-login").css({"border-color":"white",'color':'white','background':'#06B4EF','transition-duration':'0.5s'});
        },function(){
            $(".btn-login").css({"border-color":"#06B4EF",'color':'white','transition-duration':'1s'});
        });

    }
});
