function addToList(item) {
    $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span></li>');
  }

$(document).on('click', addToList, function() {
  addToList($('#item').val());
  $('#item').focus();
});
