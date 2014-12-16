$(window).load(function() {
  $(".wrapper").delay(2000).animate({
    opacity:0
  }, 1000);
});

setTimeout(function(){
  $(".wrapper").remove();
}, 3400)

$(document).ready(function() { 
  $('.word').each(function(i) {
    $(this).delay(i * 450).fadeIn(700);
  });
});

$(document).ready(function(){
  $('.kerrigan').delay(3250).fadeIn(800);
})
