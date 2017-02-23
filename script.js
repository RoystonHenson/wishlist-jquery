function addToList(item) {
    $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span></li>');
  }

$(document).on('click', '#add-to-list', function() {
  addToList($('#item').val());
  $('#item').focus();
});

$(document).on('click', '.pending', function() {

  $(this).parent().append('<span class=\'label success\'>Completed!</span>');
  $('.pending').remove();
});
