var posts=["posts/24862.html","posts/28357.html","posts/14978.html","posts/58090.html","posts/2023.html","posts/22915.html","posts/6841.html","posts/6842.html","posts/40777.html","posts/63197.html","posts/63198.html","posts/40777.html","posts/49656.html","posts/43255.html","posts/45076.html","posts/65361.html","posts/33830.html","posts/53015.html","posts/1358.html","posts/16070.html","posts/28847.html","posts/undefined.html","posts/13799.html","posts/27274.html","posts/26365.html","posts/43428.html","posts/40992.html","posts/39998.html","posts/31851.html","posts/31848.html","posts/39628.html","posts/26877.html","posts/26877.html","posts/40882.html","posts/44263.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };