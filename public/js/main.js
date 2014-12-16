var imageObjects = [];
var imageLinks = [];

var filterLinks = function(array){
  for (var i = 0; i < array.length; i++) {
    var image = array[i];
    if ((array[i].animated === false)) {
      imageLinks.push(image);
    }
  }
};

var appendImages = function(array){
  var index = 0;
  array.forEach(function(item){
    $('.fadein').append('<div data-index="'+index+'"><p>'+item.title+'</p><img src="'+item.link+'" width="500"></div>')
    $('.fadein div').hide();
    index += 1;
  })
};

var revealImage = function(array){
  imageCount = 0;
  setInterval(function(){
    $('.fadein [data-index='+imageCount+']').hide();
    $('.fadein [data-index='+(imageCount+1)+']').fadeIn(300);
    imageCount += 1;
    if (imageCount === array.length){imageCount = 0};
  }, 2000)
};

API.getImages(function(data){
  imageObjects = data.data;
  filterLinks(imageObjects);
  appendImages(imageLinks);
  revealImage(imageLinks);
});
