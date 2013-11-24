$(function(){
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var taskText = $('input#task_text').val ();
    console.log(taskText)
    var listItem = "<li>" + taskText + "</li>";
    $('#tasks ul').append(listItem);
  });
});
