function addToList(item) {
    $('#items').append('<li>' + item + '</li>');
  }

$(document).on('click', addToList, function() {
  addToList($('#item').val());
});
