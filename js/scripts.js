// Business logic
function wordPuzzle(input) {
  var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  for (var index = 0; index < input.length; index++) {
    for (var j = 0; j < vowels.length; j++) {
      input = input.replace(vowels[j], "-");
    }
  };
  return input;
};


// UI logic
$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
    event.preventDefault();
    var input = $("input#userInput").val();
    var result = wordPuzzle(input);
    $("#result").text(result);
    $("#result").show();
  });
});
