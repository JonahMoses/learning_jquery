$(function (){
  var back_to_top = "<a href='#top'>Back to Top</a>";
  $("div.article").append(back_to_top);

  var tableOfContents = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
  $("").after(tableOfContents)

  var tocHTMl = "<ul id='toc'></ul>";
  $("h2:first").after(tocHTMl);

  var allHeadings = $('.article h2');
  allHeadings.each(function(index, object) {
    var heading     = $(object);
    var headingText = heading.text();
      anchorText = headingText.toLowerCase();
      anchorText = anchorText.trim();
      anchorText = anchorText.replace(" ", "_");
    var anchorHTML = "<a name='" + anchorText + "'></a>";
    heading.before(anchorHTML);
    var linkHTML = "<a href='#" + anchorText + "'>" + headingText + "</a>";
    var toc = $("ul#toc");
    var listItemHTML = "<li>" + linkHTML + "</li>";
    toc.append(listItemHTML);
  });

});
