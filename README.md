# RSSX-app



## Example
![](https://github.com/FetcherX/docs/blob/master/public/example.png)
![](https://github.com/FetcherX/docs/blob/master/public/scan.png)

https://docs.fetcherx.com/example


RSSX is a format supported by FetcherX, which enables RSS to have more features.

Added some fields based on RSS

## feedOptions

### FetcherX:nav Navigation 

```
<FetcherX:nav>
  <name>News</name>
  <link>https://rssx.fetcherx.com/example/webpage</link>
  <type>application/rss+xml</type>
</FetcherX:nav>
<FetcherX:nav>
  <name>Videos</name>
  <link>https://rssx.fetcherx.com/example/videos</link>
  <type>application/rss+xml</type>
</FetcherX:nav>
<FetcherX:nav>
  <name>Photos</name>
  <link>https://rssx.fetcherx.com/example/photos</link>
  <type>application/rss+xml</type>
</FetcherX:nav>
```

When `type` is specified as `application/rss+xml` indicating `link` is rss format

Type can also specify the app type

```
<FetcherX:nav>
  <name>Apple</name>
  <link>apple</link>
  <type>app/instagram</type>
</FetcherX:nav>
```
Show images and videos of Instagram user https://www.instagram.com/apple

```
<FetcherX:nav>
  <name>Google Chrome Developers</name>
  <link>UCnUYZLuoy1rq1aVMwx4aTzw</link>
  <type>app/youtube</type>
</FetcherX:nav>
```

https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw

```
<FetcherX:nav>
  <name>Google Developers</name>
  <link>/user/GoogleDevelopers</link>
  <type>app/youtube</type>
</FetcherX:nav>
```

https://www.youtube.com/user/GoogleDevelopers


```
<FetcherX:nav>
  <name>Design</name>
  <link>desigin</link>
  <type>app/tumblr</type>
</FetcherX:nav>
```

https://design.tumblr.com

```
<FetcherX:nav>
  <name>Google</name>
  <link>google</link>
  <type>app/twitter</type>
</FetcherX:nav>
```

https://twitter.com/google

```
<FetcherX:nav>
  <name>My Bookmark</name>
  <link>FetcherX_bookmark_folder_id</link>
  <type>app/fetcherx_bookmark</type>
</FetcherX:nav>
```

You can add your folder in FetcherX

### FetcherX:search  Search

```
<FetcherX:search>
    https://https://your_rss_address.com/search
</FetcherX:search>
```

Send a GET request when the user searches

```
https://https://your_rss_address.com/search?s=${keyword}
```

### FetcherX:next_page  Page turning


```
<FetcherX:next_page>https://rssx.fetcherx.com/example/photos?page=2</FetcherX:next_page>
```

When the scroll bar reaches the bottom will load the contents of the next page


## Item

Setting the enclosure can support the following formats

RSS, images, videos, embed, and URL

```
<enclosure url="https://your_rss_address.com/news_rss" length="0" type="application/rss+xml"/>
<enclosure url="https://pbs.twimg.com/media/D0Rl-aSUUAA0KT_.jpg" length="0" type="image/jpeg"/>
<enclosure url="https://video.twimg.com/tweet_video/D0SCQXfWwAEe9Jf.mp4" length="0" type="video/mp4"/>
<enclosure url="https://www.youtube.com/embed/RwvVFG1UUUk" length="0" type="video/html"/>
<enclosure url="https://www.youtube.com/embed/RwvVFG1UUUk" length="0" type="text/html"/>

```

```
<enclosure url="google" length="0" type="app/twitter"/>
<enclosure url="apple" length="0" type="app/instagram"/>
<enclosure url="design" length="0" type="app/tumblr"/>
<enclosure url="UC3SyT4_WLHzN7JmHQwKQZww" length="0" type="app/youtube"/>
<enclosure url="/user/Google" length="0" type="app/youtube"/>
<enclosure url="FetcherX_bookmark_folder_id" length="0" type="app/fetcherx_bookmark"/>

```

### FetcherX:thumb Thumbnail
Add a thumbnail

```
<FetcherX:thumb>https://your_cdn.com/thumb.jpg</FetcherX:thumb>
```




