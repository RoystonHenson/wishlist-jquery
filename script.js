function addToList(item) {
    $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span></li>');
  }

function updateTotal() {
  var pending = $('.pending').length;
  var purchased = $('.completed').length;
  $('#total').text('Purchased: ' + purchased + ' | ' + 'Pending: ' + pending);
}

$(document).on('click', '#add-to-list', function() {
  addToList($('#item').val());
  $('#item').focus();
  updateTotal();
});

$(document).on('click', '.pending', function() {
  $(this).parent().addClass('completed');
  $(this).remove();
  updateTotal();
});
