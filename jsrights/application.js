$.fn.tableOfContents = function(header) {

  var backToTop = "<a href='#top'>Back to Top</a>";
  $(this).append(backToTop);

  var tableOfContents = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
  $(header).after(tableOfContents);

  var unorderedList = "<ul name='toc'></ul>";
  $(header).after(unorderedList);

  var h2 = $(this).find("h2");

  h2.css('background', '#CCF');
  // $("h2", this).css('background', '#CCF');

  h2.each(function(){
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
};

$(function (){
    $("div.article").tableOfContents($('h1'));
});
