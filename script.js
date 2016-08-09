$(function() {

  // declaring variables for DOM elements.
var $ytextinput = $('#ytextinput');
var $submitbtn = $('#submitbtn');
var $ytextoutput = $('#ytextoutput');
var $loader  = $('.loader');

$submitbtn.on('click', function(e) {
    // prevent refresh
  e.preventDefault();
  // ajax specifications
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=",
    type: 'GET',
    // getting text within ytextinput
    data: {
      sentence: $ytextinput.val()
    },
    datatype: 'json',
    beforeSend: function(xhr) {
      $loader.show();
      // api specifications
      xhr.setRequestHeader('X-Mashape-Key', 'Df2BCDlbldmsho3fNxVf13Tm85RPp1WtTxBjsn6BOf2T6hexVF');
    },
  }).done(function(data) {
    $loader.hide();
    // outcome of successful request.
    $ytextoutput.html("Master Yoda will say: " + data);
    $ytextoutput.css('color', '#ACC473');
    $ytextoutput.css('font-weight', 'bold');
    $ytextoutput.css('padding', '2%');
    $ytextoutput.css('border-color', 'green');
  })
  .fail(function(request, textStatus, errorThrown) {
    $loader.hide();
    // outcome of failed request.
    $ytextoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
    $ytextoutput.css('color', '#ACC473');
    $ytextoutput.css('font-weight', 'bold');
    $ytextoutput.css('padding', '2%');
    $ytextoutput.css('border-color', 'green');
  });
});
});
