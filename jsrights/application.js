$(function (){
  var backToTop = "<a href='#top'>Back to Top</a>";
  $("div.article").append(backToTop);

  var tableOfContents = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
  $("h1:first").after(tableOfContents);

  var unorderedList = "<ul name='toc'></ul>";
  $("#header").after(unorderedList);

  $("div.article h2").css('background', '#CCF');
  $("div.article h2").each(function(){
    var title = $(this).text();
    console.log(title);
    var url = title.trim().toLowerCase().replace(" ","_");
    var targetAnchor = "<a name='" + url + "'>";
    $(this).before(targetAnchor);
    var listItem = "<li>" + "<a href='#" + url + "'>" + title + "</a>"+"</li>";
    $("#toc").append(listItem);
    var toggleLink = $("<a href='#'>(hide)</a>");
    toggleLink.on('click', function(event){
      $(this).siblings('p').toggle();
      var oldText = $(this).text();
      var newText = (oldText === '(hide)') ? '(show)' : '(hide)';
      $(this).text(newText);
      event.preventDefault();
    });
    $(this).after(toggleLink);
  });

});
