$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

$(document).ready(function () {
    $(".links").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
});