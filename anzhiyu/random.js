var posts=["posts/48171.html","posts/58090.html","posts/28357.html","posts/24862.html","posts/14978.html","posts/45076.html","posts/22915.html","posts/16107.html","posts/41949.html","posts/55676.html","posts/32684.html","posts/8301.html","posts/24234.html","posts/46760.html","posts/63476.html","posts/20686.html","posts/8379.html","posts/43471.html","posts/57963.html","posts/11407.html","posts/18431.html","posts/369.html","posts/3109.html","posts/28778.html","posts/57352.html","posts/11414.html","posts/6842.html","posts/6841.html","posts/63197.html","posts/40777.html","posts/63198.html","posts/40992.html","posts/33708.html","posts/39826.html","posts/43255.html","posts/33830.html","posts/53015.html","posts/28769.html","posts/28847.html","posts/60354.html","posts/2193.html","posts/65361.html","posts/1358.html","posts/16070.html","posts/44500.html","posts/36851.html","posts/56524.html","posts/36030.html","posts/44501.html","posts/55187.html","posts/34753.html","posts/9299.html","posts/9364.html","posts/20519.html","posts/17520.html","posts/34586.html","posts/41483.html","posts/56152.html","posts/42555.html","posts/3749.html","posts/38502.html","posts/37248.html","posts/42761.html","posts/19505.html","posts/64908.html","posts/30751.html","posts/64793.html","posts/5236.html","posts/7065.html","posts/41284.html","posts/17880.html","posts/43963.html","posts/37545.html","posts/49870.html","posts/53645.html","posts/23808.html","posts/47236.html","posts/49633.html","posts/8899.html","posts/undefined.html","posts/16107.html","posts/13796.html","posts/26365.html","posts/43428.html","posts/31851.html","posts/39998.html","posts/31848.html","posts/39628.html","posts/26877.html","posts/40882.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };