Youtube Parser
==============

This is a node.js script for extracting the video links from a webpage in YouTube.


Why did I create this?
----------------------

It all started with the Korean drama - Full House.

I was watching the TV drama on YouTube, where all the episodes can be found on [this channel](http://www.youtube.com/user/ianrose36/videos?view=0). Each episode is chunked into 4 to 8 parts. It wasn't much of a problem since a YouTube video is played quite instanly.

However, the problem comes when I wanted to download all the videos (there are 100+ videos!) and sync them into my iPhone.

I use [JDownloader](http://jdownloader.org/) which can parse a YouTube video link, and generate all the MP4,FLV, etc links. I will download only the MP4 videos.

I wrote this script to extract all the 100+ YouTube video links.

Without this script, I would be manually copying each video on the webpage..



How to use?
-----------

You need to install [NodeJS](http://nodejs.org/).

Then install the [jsdom library](https://github.com/tmpvar/jsdom):

	npm install jsdom -g

I have hard coded the HTML webpage to parse, which is `Cindy Ortiz - YouTube.html`. I have also set the filter to `FULL HOUSE`. You might want to change there for other videos.

Then run this:

	node parse.js

The output will be a list of YouTube video links. 

You can copy them, and paste into JDownloader for it to download!

