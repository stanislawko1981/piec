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

    $('.article').click(function () {
        $('.description').hide();
          $(this).children('.description').show();
    });

  $('.neon').click(function() {
    $('.neon').removeClass('aktywne');
      $(this).addClass('aktywne');
     
  });


  $('.dropdown-toggle').click(function(){  
    $('.dropdown-menu').show();
      
  });
}

$(document).ready(main);