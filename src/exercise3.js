exports.run = function(input) {
  var result = 1;
  for(var i = 0; i<input.length; i++){
    if(input[i].multiply === true){result = result * input[i].value}
  }
  console.log(result);
};
