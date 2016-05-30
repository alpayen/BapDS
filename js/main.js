(function ($) {
    $(document).ready(function(){

        $(".unslider-nav").hide();
        console.log( $(window).width());



        if( $(window).width() < 800){
            console.log('hey');
            $(".wrapper-anime").hide();
            $(".overlay").hide();
            $(".unslider").hide();
            $(window).off('scroll');
        }




        // hide .navbar first
        $(".navbar").hide();
        $('.logo-nav').hide();

        if ($(window).scrollTop()>5){
            $(window).off('scroll');
        }
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 5) {
                    $(this).scrollTop(0);
                    $('.navbar').fadeIn();
                    $('.overlay').fadeOut();

                    $('.logo-big').animate({
                       height :  60
                    }, 1000);

                    $( "#span-overlay" ).animate({
                        bottom: 420,
                        left: -380


                    }, 1000, function() {
                        $('.logo-big').hide();
                        $('.logo-nav').fadeIn();
                        $(window).off('scroll');
                    });




                }

            });
        });

    });
}(jQuery));