$(document).ready(function(){
  $("#quote").on('click',function(){
    //API call to get text as JSON object
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(returned){
      //console.log(returned);
      var quotetext = returned['quoteText'];
      var quoteauthor = returned['quoteAuthor'];
      //console.log(quotetext + "  " + quoteauthor);
      //console.log(typeof quotetext);
      $("#quotebox").html("<p>"+quotetext+"</p> <p>" + quoteauthor + "</p>");
    });
  });


});
