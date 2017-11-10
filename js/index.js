$('document').ready(function () {

  var append = function (event) {
    if ($('#screen')["0"].innerText != 'ERROR') {
      $('#screen').append(event.target.innerText);
    }
  }

  var equals = function (event) {
    var exp = $('#screen')["0"].innerText;
    var ops = replace(exp).match(/[\+\-\*\/]/g);
    if (ops.length > 1) {
      $('#screen').empty().append('ERROR');
    } else {
      $('#screen').empty().append(eval(replace(exp)));
    }
  }

  var replace = function (str) {
    return str.replace('÷', '/').replace('x', '*').replace('=', '');
  }

  var clear = function (event) {
    $('#screen').empty();
  }

  $('span').click(append);
  $('#equals').click(equals);
  $('#clear').click(clear)


}) // end dr

// still to do:
// make negative numbers work - may be tricky?
// add tests
