function addToList(item) {
  $("#items").append('<li>' + item + '</li>');

}
$("#add-to-list").click(function() {
  alert("Handler for .click() called.");

});
function additem(){
  $("#items").append('<li id="todo">' + $("#item").val() + "<span class='label pending'>Pending</span>" + '</li>');
$( "#item" ).focus();
$("#item").val("");
}
function updatetotal(){
  var pending = $('.pending').length;
  var completed = $('.completed').length;
  $('.total').text('Pending: ' + pending + 'Completed: ' + completed);
}

$(document).on('click', '#add-to-list', function() {
console.log ($("#item").val());
additem();
updatetotal();
});

$(document).on ('keypress', '#item', function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
  additem();
  updatetotal();
  }
});
$(document).on ('click', '.pending', function(){
  var li_node = $(this).parent();
  li_node.append("<span class='label success'> Done!</span>");
  $(this).remove();
  li_node.addClass('completed');
  updatetotal();

});
$(document).on ('click', '#todo', function(){
  $(this).addClass('completed');
  $(this).find("span").remove();
  $(this).append("<span class='label success'> Done!</span>");
})
