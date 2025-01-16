var encoding = 26;

var option;
for(var i = 27; i < 100; i++) {
  option = '<option value="' + i + '">' + i + '</option>';
  $('.encoding').append(option);
}


$('.encoding').on('change', function(e){
   encoding = parseInt($(this).val());
});
$('.encoding').trigger('change');


function charRange(start, stop) {
  var result = [];

  // get all chars from starting char
  // to ending char
  var i = start.charCodeAt(0),
      last = stop.charCodeAt(0) + 1;
  for (i; i < last; i++) {
    result.push(String.fromCharCode(i));
  }
  last = result.pop();
  result.unshift(last);

  return result;
}

function toString26(num) {
  var alpha = charRange('a', 'z');
  var result = '';

  // no letters for less than 0
  if (num < 0) {
    return result;
  } else if (num == 0){
    return 'z';
  } 

  var quotient = num,
      remainder;

  // until we have a 0 quotient
  while (quotient > 0) {
    // compensate for 0 based array
    var decremented = quotient;

    // divide by 26
    quotient = Math.floor(decremented / encoding);

    // get remainder
    remainder = decremented % encoding;

    // prepend the letter at index of remainder
    result = alpha[remainder] + result;
  }

  return result;
}

$('.clear-text').on('keyup', function(e){
  var encoded_letters = $(this).val().split(' ').map(function(word, i){
    var letters = word.toLowerCase().split('');
    var encoded_word =letters.map(function(letter, i){
      // placement in alphabet starting a 1
      var alpha_location = (letter.charCodeAt(0) - 96) % encoding;
      var word_location = (word.length - 1) - i;
      var encoded_letter = alpha_location * Math.pow(encoding, word_location);
      return encoded_letter
    });
    return encoded_word;
  });
  
  var encoded_words = encoded_letters.map(function(letters, i){
    var encoded_output = 0;
    $.each(letters, function(i, letter){
      encoded_output += letter;
    });
    return encoded_output;
  });
  encoded_words = encoded_words.filter(function (el) {
    return el != null;
  });
  $('.encoded-text').val(encoded_words.join(' '));
});


$('.encoded-text').on('keyup', function(e){
 
  var plain_text_words = $(this).val().split(' ').map(function(word, i){
    return toString26(parseInt(word));
    
  });
  plain_text_words = plain_text_words.filter(function (el) {
    return el != null;
  });
  $('.clear-text').val(plain_text_words.join(' '));
});

$('.spinner-stopper').on('click', function(e) {
  e.preventDefault();
  if($(this).text() == 'Stop spinning'){
    $(this).text('Start spinning');
    $('.note').css('animation-name', 'no-spin');
  } else {
    $(this).text('Stop spinning');
    $('.note').css('animation-name', 'spin');
  }
});

// Test Case:
// jude Anders
// 190065  18353211