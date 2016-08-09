$(function() {

  'use strict';

  //cache DOM selectors
  var $btn = $('#btn');
  var $yoda_output = $('#yoda_output');
  var $your_input = $('#your_input');

  $btn.on('click', function(e) {
    console.log("button");

    e.preventDefault();

    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda?sentence=',
        headers: {
          'X-Mashape-Key': '4IyxRkjuxpmshfXiOBBZFLpjGckPp1vKR5pjsn0CiOtaSGxCjz'
        },
        data: {
          sentence: $your_input.val()
        },
        datatype: 'json',
        type: 'GET',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-Mashape-Key', 'Df2BCDlbldmsho3fNxVf13Tm85RPp1WtTxBjsn6BOf2T6hexVF');
        },
        // beforeSend: function() {
        //   $loader.show();
        // }

      }).done(doneFunction)
      .fail(failFunction);
  });

  function doneFunction(data) {
    console.log("great success!");
    $yoda_output.html(data);
  }

  function failFunction(request, textStatus, errorThrown) {
    console.log("failed");
    $yoda_output.html("An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown");
  }

});
