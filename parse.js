var jsdom = require('jsdom');
// Not using url with jsdom as it will not trigger the "load more" of the webpage
// Instead, manually trigger "load more" as much as you want, then save the web page as a file
// This URL is for a channel with FULL HOUSE - an awesome korean drama!
// var url = 'http://www.youtube.com/user/ianrose36/videos?view=0';
var filename = 'Cindy Ortiz - YouTube.html';
var filter = "FULL HOUSE";

fs = require('fs')
fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  jsdom.env(
    data,
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
      var $ = window.$;
      var i = 0;
      $("a.content-item-title").each(function() {
        if ($(this).text().indexOf(filter) !== -1) {
          console.log("http://www.youtube.com" + $(this).attr('href'));
          i++;
        }
      });
      console.log(">> There are", i, "youtube video links!!");
    }
  );
  
});


