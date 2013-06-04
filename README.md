Youtube Parser
==============

This is a node.js script for extracting the video links from a webpage in YouTube.


Why did I create this?
----------------------

It all started with the Korean drama - [Full House](http://www.youtube.com/watch?v=uYWoUJ_f4r4).

I was watching the TV drama on YouTube, where all the episodes can be found on [this channel](http://www.youtube.com/user/ianrose36/videos?view=0). Each episode is chunked into 4 to 8 parts. It wasn't much of a problem since a YouTube video is played quite instanly.

However, the problem comes when I wanted to download ALL the videos. There are 100+ videos!

I use [JDownloader](http://jdownloader.org/) which can parse a YouTube video link, and generate all the MP4,FLV, etc links. I will then download only the MP4 videos.

I wrote this script to extract the 100+ YouTube video links.

Without this script, I would be manually copying each video link on the webpage..



How to use?
-----------

You need to install [NodeJS](http://nodejs.org/).

Then install the [jsdom library](https://github.com/tmpvar/jsdom):

	sudo npm install jsdom -g

I have hard coded the HTML webpage to parse, which is `Cindy Ortiz - YouTube.html`. 

I have also set the filter to `FULL HOUSE`. You might want to change these for your own purpose.

Then run this:

	node parse.js

The output will be a list of YouTube video links. 

The list below is for Full House fans :)

```
http://www.youtube.com/watch?v=0dTULMI6x9Y
http://www.youtube.com/watch?v=BmWwD1AyTmI
http://www.youtube.com/watch?v=xQYxrN3R7Mw
http://www.youtube.com/watch?v=WfQVJvOnHmY
http://www.youtube.com/watch?v=bgsHVENN5DE
http://www.youtube.com/watch?v=4YM6XdIv3rI
http://www.youtube.com/watch?v=Ilrkgp3VuUc
http://www.youtube.com/watch?v=tGqdwMJTPG8
http://www.youtube.com/watch?v=z9sW3mdkmSs
http://www.youtube.com/watch?v=4owOolva45k
http://www.youtube.com/watch?v=uloehI9P8G8
http://www.youtube.com/watch?v=N0zzytTYvHM
http://www.youtube.com/watch?v=yRdkh1BwOWw
http://www.youtube.com/watch?v=3L90E3gxz2g
http://www.youtube.com/watch?v=Bn--3iLa3R4
http://www.youtube.com/watch?v=RPQ4-lisOAc
http://www.youtube.com/watch?v=IYAxgNJ8v6Q
http://www.youtube.com/watch?v=HbjHBsbliPw
http://www.youtube.com/watch?v=yvxDpOXiDcU
http://www.youtube.com/watch?v=yTlMP1z6DwI
http://www.youtube.com/watch?v=6rqCRBDGDwc
http://www.youtube.com/watch?v=Oz6cOE8xzyk
http://www.youtube.com/watch?v=UNyNU7L_xV0
http://www.youtube.com/watch?v=_nX44WZ6Cr8
http://www.youtube.com/watch?v=QnnrRDZHmMg
http://www.youtube.com/watch?v=-5NQwtsecaI
http://www.youtube.com/watch?v=rVYm6EdySrI
http://www.youtube.com/watch?v=q1cbsfG_9tU
http://www.youtube.com/watch?v=nwM7rC0MtcM
http://www.youtube.com/watch?v=HjF3YoAQ1t8
http://www.youtube.com/watch?v=8kPgguMyZbo
http://www.youtube.com/watch?v=DQ32tDyuUKc
http://www.youtube.com/watch?v=iU0ob9wDA_k
http://www.youtube.com/watch?v=_4X3qoEr8Rc
http://www.youtube.com/watch?v=23ERUn4AULo
http://www.youtube.com/watch?v=bSWuXr-srS4
http://www.youtube.com/watch?v=pCyCxltpDjs
http://www.youtube.com/watch?v=tzCCfroGjMg
http://www.youtube.com/watch?v=PCHoDxySBF0
http://www.youtube.com/watch?v=FnKxOAmgsno
http://www.youtube.com/watch?v=sHb39JvKICM
http://www.youtube.com/watch?v=JOWnGa_Vmak
http://www.youtube.com/watch?v=B4QrcOpsf3A
http://www.youtube.com/watch?v=K9qkTGJ8xcQ
http://www.youtube.com/watch?v=vS3AirhFBuQ
http://www.youtube.com/watch?v=FGuc6dGywUs
http://www.youtube.com/watch?v=i4GBYRYbhwQ
http://www.youtube.com/watch?v=Q3QsrGzjklw
http://www.youtube.com/watch?v=0aaYhLZcOUU
http://www.youtube.com/watch?v=SdxceQXChzg
http://www.youtube.com/watch?v=VfaTl_pL1Mw
http://www.youtube.com/watch?v=HI09nCIWjWQ
http://www.youtube.com/watch?v=hP3EYKMCWSs
http://www.youtube.com/watch?v=dNDPI7JEtDA
http://www.youtube.com/watch?v=ScYKkHSLF2U
http://www.youtube.com/watch?v=X0ZvucP7KnQ
http://www.youtube.com/watch?v=55jUi-oOaBQ
http://www.youtube.com/watch?v=9vKnGEmJJ1o
http://www.youtube.com/watch?v=NeEtrZK8tQo
http://www.youtube.com/watch?v=1iOMd0KD1nY
http://www.youtube.com/watch?v=8hhgLhEx2zg
http://www.youtube.com/watch?v=vrziZ5cnWq0
http://www.youtube.com/watch?v=q8q80vWrUXE
http://www.youtube.com/watch?v=2um8cqx9dWE
http://www.youtube.com/watch?v=sZ2beELvRl0
http://www.youtube.com/watch?v=EUEanypwz9s
http://www.youtube.com/watch?v=VdkCO921aEs
http://www.youtube.com/watch?v=9adfF-baG8o
http://www.youtube.com/watch?v=swlUMswkqUw
http://www.youtube.com/watch?v=J72Mss_m2qk
http://www.youtube.com/watch?v=S_PWC9qYf0U
http://www.youtube.com/watch?v=KYWfDo-Ny0g
http://www.youtube.com/watch?v=nkA8WHDucAg
http://www.youtube.com/watch?v=JM9zq3N6AB4
http://www.youtube.com/watch?v=IgNzze7QoLg
http://www.youtube.com/watch?v=_Lwtd9wKpe8
http://www.youtube.com/watch?v=dEAuqfasOaM
http://www.youtube.com/watch?v=_AnLv686FVQ
http://www.youtube.com/watch?v=Ty5QuT8v-x0
http://www.youtube.com/watch?v=KuYlXFlTO6g
http://www.youtube.com/watch?v=WNYtXBjZ0TU
http://www.youtube.com/watch?v=hX6PgOhHxQY
http://www.youtube.com/watch?v=QXx2ZAh9o60
http://www.youtube.com/watch?v=c8hM8Is9ia8
http://www.youtube.com/watch?v=wsJymu9gzwM
http://www.youtube.com/watch?v=5BDA3KsCLak
http://www.youtube.com/watch?v=0Go63TzLSiA
http://www.youtube.com/watch?v=_eNT3iqrhsI
http://www.youtube.com/watch?v=o-mxqSk48iw
http://www.youtube.com/watch?v=cizBHtDjwoE
http://www.youtube.com/watch?v=rPsiPvuM5mY
http://www.youtube.com/watch?v=VSsqubo61KQ
http://www.youtube.com/watch?v=F-pJunv7a38
http://www.youtube.com/watch?v=0N-A93fk2q0
http://www.youtube.com/watch?v=niBZPhWqZt0
http://www.youtube.com/watch?v=owzCkisWAzQ
http://www.youtube.com/watch?v=OgpsgtxXzDk
http://www.youtube.com/watch?v=q-3mvVbJOdk
http://www.youtube.com/watch?v=m-m-N7bWsHQ
http://www.youtube.com/watch?v=efvnL9z7AB4
http://www.youtube.com/watch?v=hB_yZ-e2lMA
http://www.youtube.com/watch?v=pcdcZ8ebpzY
http://www.youtube.com/watch?v=hHb2XMx9c7A
http://www.youtube.com/watch?v=8Vh2hXoijmY
http://www.youtube.com/watch?v=w13K2GoejQo
http://www.youtube.com/watch?v=1s156Z8JDEU
http://www.youtube.com/watch?v=xyU_Jtt7D34
http://www.youtube.com/watch?v=2NvgNERy0K0
http://www.youtube.com/watch?v=-hL3tE9YlEo
http://www.youtube.com/watch?v=AO85KtUrxfU
http://www.youtube.com/watch?v=B0yA5T8eXOA
```

You can copy and paste into JDownloader for it to download!

