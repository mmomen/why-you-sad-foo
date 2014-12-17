

$.get('/stats/all', function(data){
  var p = Raphael("paper");
  var textattr = {"font-size": "35px"}

  //graph 1 divs
  p.rect(0,0,500,500) // whole div
  p.rect(0,0,500,50) // title div
  p.text(250, 25, "Frequency of duration").attr(textattr)
  p.path("m 50, 100 l 0, 350, 400, 0")





  var sortedData = []; 

  var frequency = function(data){
    var freqCount = 0;
    //finding the value to count occurances of
    for (var i = 0; i < data.length; i++) {
      while (data[i] === data[i-1]) {
        i++
      }
      //counting the number of occurances
      for (var x = 0; x < data.length; x++) {
        if (data[i] === data[x]) {
          freqCount += 1;
        }
      };
      sortedData.push(freqCount);
      freqCount = 0;
    };
    
  };
  frequency(data);

  var xLabel = $.unique(data);
  console.log(xLabel)

  var length = Math.floor(400/xLabel.length)
  
  //increments the x-axis
  for (var v =50; v<452; v = v + length){  
    p.path("m" + v + ",450 l 0, -5")
  }







  // total distance of 400 from (50, 450)
  //going to divide this by length and get f
  //every f distance from origin 50, we're going to plot a line
  //that line is going to be the length of x=15

  // xLabel = xLabel.map(function(x){
  //   return x.toString();
  // })

  var frequencyChart = p.barchart(50, 100, 450, 350, sortedData, {});

  
})


