$(document).ready(function(){

  $("#quote").on('click',function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(returned){
      console.log(returned);
    });
  });

  // $("#quote").on('click',function(){
  //   $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(data){
  //     console.log(data);
  //   });
  // });

});
