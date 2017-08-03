$(document).ready(function(){
  function getQuote(){
    $.get("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?", function(returned){
      //console.log(returned);
      //returned = $.parseJSON(returned);
      var quotetext = returned['quoteText'];
      var quoteauthor = "-" + returned['quoteAuthor'];
      //console.log(quotetext + "  " + quoteauthor);
      //console.log(typeof quotetext);
      var tweettext = quotetext.split("")
      var tweetlong = tweettext.splice(120);
      tweettext[-1] = "...";
      tweettext = tweettext.join("");
      $("#quotebox").html("<p>"+quotetext+"</p> <p>" + quoteauthor + "</p>");
      $("#tweetButton").parent().attr("href","https://twitter.com/intent/tweet?text=" + tweettext)
    });
  }

  getQuote();

  $("#quote").on('click',getQuote);

});
