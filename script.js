$(document).ready(function(){

  // $("#quote").on('click',function(){
  //   $.getJSON("http://api.forismatic.com/api/1.0/", function(data){
  //     console.log(data);
  //   });
  // });

  $("#quote").on('click',function(){
    $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(data){
      console.log(data);
    });
  });
  
});
