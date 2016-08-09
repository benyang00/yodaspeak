$(function() {
var $ytextinput = $('#ytextinput');
var $submitbtn = $('#submitbtn');
var $ytextoutput = $('#ytextoutput');

$submitbtn.on('click', function(e) {
  e.preventDefault();
  console.log("button clicked");
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=",
    type: 'GET',
    data: {
      sentence: $ytextinput.val()
    },
    datatype: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Df2BCDlbldmsho3fNxVf13Tm85RPp1WtTxBjsn6BOf2T6hexVF');
    },
  }).done(function(data) {
      console.log("done");
    $ytextoutput.html(data);
    $ytextoutput.css('color', '#ACC473');
    $ytextoutput.css('font-weight', 'bold');
    $ytextoutput.css('text-align', 'center');
    $ytextoutput.css('padding', '7%');
  })
  .fail(function(request, textStatus, errorThrown) {
    console.log("fail");
    $ytextoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
    $ytextoutput.css('color', '#ACC473');
    $ytextoutput.css('font-weight', 'bold');
    $ytextoutput.css('text-align', 'center');
    $ytextoutput.css('padding', '7%');
  });
});
});
