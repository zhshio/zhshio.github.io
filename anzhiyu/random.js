var posts=["posts/16070.html","posts/undefined.html","posts/49656.html","posts/43255.html","posts/45076.html","posts/33830.html","posts/53015.html","posts/28847.html","posts/65361.html","posts/65361.html","posts/1358.html","posts/40882.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };