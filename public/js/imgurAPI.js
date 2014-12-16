var API = (function(){

  var getImages = function(callback){
    $.ajax({
        type: "GET",
        url: "https://api.imgur.com/3/gallery/r/aww.json",
        dataType: "json",
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Client-ID '+ apiKey);
        },
        success: callback
      });
  };

  return {
    getImages: getImages,
  }
})();