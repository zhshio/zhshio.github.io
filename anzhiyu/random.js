var posts=["posts/3.html","posts/6.html","posts/3.html","posts/3.html","posts/2.html","posts/4.html","posts/3.html","posts/4.html","posts/3.html","posts/3.html","posts/1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };