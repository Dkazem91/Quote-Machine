$(document).ready(function() {
  var itemnumber = 7;
  var randomactive = Math.floor(Math.random() * ($('.item').length) - 1);
  var color = ['#F98866', '#FF420E', '#80BD9E', '#89DA59', '#90AFC5', '#336B87', '#2A3132', '#763626'];
  var randomcolor = color[Math.floor(Math.random() * color.length)];
  $('body, .container, p').fadeIn('slow');
  $('body').css('background-color', randomcolor);
  $('footer').css('color', randomcolor);
  $('#myCarousel').css('color', randomcolor);
  $('button').css('background-color', randomcolor);
  $("p").prepend("<i class='fa fa-quote-left' style='font-size:30px' aria-hidden='true'></i>      ");

  $('.carousel .item').eq(randomactive).addClass('active tweetthis');
  $('.random').on('click', function() {
    $('.item').removeClass('tweetthis');
    randomcolor = color[Math.floor(Math.random() * color.length)];
    $('.item').animate({
      opacity: 0
    }, 500);

    $('body').css('background-color', randomcolor);
    $('footer').css('color', randomcolor);
    $('#myCarousel').css('color', randomcolor);
    $('button').css('background-color', randomcolor);
  });

  $('.random').on('click', function(event) {
    var duration = 700;
    setTimeout(function() {
      $('#myCarousel').carousel(itemnumber);
      $('.carousel .item').eq(itemnumber).addClass('tweetthis');
      var keeprandom = Math.floor(Math.random() * ($('.item').length) - 1);
      itemnumber = (keeprandom === itemnumber) ? itemnumber + 1 : keeprandom;
      
      $('.item').animate({
        opacity: 1
      }, 500);
    }, duration);

  });
    $('.tweet').on('click',function(){
    $(this).attr("href","http://twitter.com/home/?status="+ $('.tweetthis').text());
 
    
  });
});
