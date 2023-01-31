$(document).ready(function () {
      $('.call').click(function() {
                $(this).parent().find('.sub1-subUl').slideToggle();
                $(this).children('.list3_img1').toggleClass('rotate');
            });

            $('.liTitleBox').click(function() {
                $(this).parent().find('.hide').slideToggle();
                $(this).children('img').toggleClass('rotate');
            });

            $('.suOrange').click(function() {
                $('.setpop').fadeIn();
            });

            $('.pop2Btn1').click(function() {
                $('.setpop').fadeOut();
            });
            
            $('#chk-toggle').click(function(){
               if($(this).is(':checked') == true){
                   $('.black').removeClass('show');
               }else{
                   $('.black').addClass('show');
               }
            });
     $('#chk-toggle').click(function () {
         if ($(this).is(':checked') == true) {
             $('.black').removeClass('show');
         } else {
             $('.black').addClass('show');
         }
     });
 });
