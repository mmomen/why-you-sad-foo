var start = new Date();

var value = function() {
  var elapsed = new Date() - start;
  return elapsed;
};

var redirectURL = "/done";

var form = $('<form action="' + redirectURL + '" method="post">' + '<div class="submitting">' + '<input type="submit" id="theClick">' + '</div>');

$('body').append(form);

$("#theClick").on("click", function() {
  var hiddenAttr = $('<input type="hidden" name="elapsed_time" value="' + value() + '"></input>');
  $(".submitting").append(hiddenAttr);
});