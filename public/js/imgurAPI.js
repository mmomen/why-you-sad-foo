var imageLinks = new Array;
var imageObjects = new Array;

var getImages = function(){
  $.ajax({
      type: "GET",
      url: "https://api.imgur.com/3/gallery/r/aww.json",
      dataType: "json",
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Client-ID '+ apiKey);
      },
      success: function(data) {
        imageObjects = data.data
      }
    });
};

var filterLinks = function(){
  for (var i = 0; i < imageObjects.length; i++) {
    var image = imageObjects[i].link
    if (imageObjects[i].animated === false) {
      imageLinks.push(image)
    }
  };
};