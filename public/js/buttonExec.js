var start = new Date();

var value = function() {
  var elapsed = new Date() - start;
  return elapsed;
};

var redirectURL = "/done";

var form = $('<form action="' + redirectURL + '" method="post">' + '<div class="submitting">' + '<input type="submit" id="theClick" value="I ain\'t sad no mo" class="button radius">' + '</div>');

$('.button').append(form);

$("#theClick").on("click", function() {
  var hiddenAttr = $('<input type="hidden" name="elapsed_time" value="' + value() + '"></input>');
  var hiddenImageCount = $('<input type="hidden" name="image_count" value="' + imageCount + '"></input>');
  $(".submitting").append(hiddenAttr);
  $(".submitting").append(hiddenImageCount);
});