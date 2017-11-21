exports.run = function(input) {
  var separation = input.split("");
  var test = 0;
  for( var i = 0; i < separation.length; i++){
    if(parseInt(separation[i])>test){
      console.log(parseInt(separation[i])) 
      test = parseInt(separation[i])};
  }
  console.log(test);
};
