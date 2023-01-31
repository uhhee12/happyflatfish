 $(document).ready(function () {
     $('#chk-toggle').click(function () {
         if ($(this).is(':checked') == true) {
             $('.black').removeClass('show');
         } else {
             $('.black').addClass('show');
         }
     });
 });
