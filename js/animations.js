$(document).ready(function() {
    
  $('.tweet-compose').click(function() {
      $('#new-tweet-textarea').css('height', '5em');
      $('#tweet-controls').css('display', 'block');
  });  
   
  $('#new-tweet-textarea').keyup(function() {
      var tweetLength = $(this).val().length;
        $('#char-count').text(140 - tweetLength);
        
        if(tweetLength >= 130) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', '#999');
        }
        
        if(tweetLength > 140) {
            $('#tweet-submit').attr('disabled', 'disabled');
        } else {
            $('#tweet-submit').removeAttr('disabled', 'disabled');
        } 
  });
    
    $('#tweet-submit').click(function() {
        var tweet = $('#new-tweet-textarea').val();
        if(!tweet.length) return;
        
        var userName = 'Linda Mercado';
        
        var tweetHTML = '<div class="tweet">' +
                        '<div class="content">' +
                            '<img class="avatar" src="img/alagoon.jpg" />' +
                            '<strong class="fullname">' + userName + '</strong>' +
                            '<span class="username"> @lmercado</span>' +
                           '<p class="tweet-text">' + tweet + '</p>' +
                            '<div class="tweet-actions">' +
                                '<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
                            + '</div>'
                    + '</div>';
                    
         $('#stream').prepend(tweetHTML);
         
         $('#new-tweet-textarea').val(' ');
         $('#char-count').text(140);
    });
    
    $('.tweet').click(function() {
        $(this).find('.stats, .reply').slideDown('fast');
    });
    
});