var posts=["posts/58090.html","posts/0.html","posts/28357.html","posts/22915.html","posts/16070.html","posts/49656.html","posts/43255.html","posts/45076.html","posts/33830.html","posts/53015.html","posts/28847.html","posts/65361.html","posts/1358.html","posts/undefined.html","posts/26365.html","posts/27274.html","posts/13799.html","posts/40882.html","posts/43428.html","posts/31851.html","posts/39998.html","posts/40992.html","posts/31848.html","posts/39628.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };