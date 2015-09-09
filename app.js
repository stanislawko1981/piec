var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
 });

/* Bartku  , jak  wstawic ponizszy kod w cala funkcje ?? Bez tego kodu  wszystko  dziala, 
a powstawieniu tego kodu wszystko szlak trafia :) */
$('.article')click(function(){
    $('.description').hide();
          $(this).children('description').show();
  });
};


$(document).ready(main);