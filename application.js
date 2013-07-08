var commentBox = "<form id='new_comment'><textarea rows='2'></textarea><input type='text' id='authorName' placeholder='Your name'><input type='submit' value='create comment'></form>";
var commentTemplate = "<li><span class='comment'></span><span class='author'>asdf</span></li>";

function getCommentBox() {
  $('#new_comment').remove();
  $('#new_comment_button').hide();
  $('#comment_area').append(commentBox);
}



$( document ).ready(function() {
  $('body').on('click','#new_comment_button',getCommentBox);

  $('body').on('submit','#new_comment',function(e){
    e.preventDefault();
    var comment = $('#new_comment textarea').val();
    var name = $('#authorName').val();
    if (comment === "") {
      $('form')[0].reset();
    } else {
      $('#comment_list').append(commentTemplate);
      $('#comment_list li:last-child .author').html(name);
      $('#comment_list li:last-child .comment').html(comment);
      $('#new_comment').hide();
      $('#new_comment_button').show();
    }

  });
});
