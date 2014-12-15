$(document).ready(function() { 
  $('.word').each(function(i) {
    $(this).delay(i * 500).fadeIn(1000);
  });
});