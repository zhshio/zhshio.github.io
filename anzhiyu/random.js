var posts=["2023/11/08/ArrayList源码/","2023/11/08/ACWing 排序和二分模板/","2023/01/31/Git使用指南/","2023/11/08/JavaNIO/","2023/11/08/MESI缓存一致性协议/","2023/11/08/双指针——学过就会/","2023/11/08/回溯暴搜-排列组合问题全解/","2023/11/08/设计原则与思想 面向对象/","2023/11/08/红蓝二分法——一种二分法的通用模板 - 副本/","2023/11/08/设计模式导学/","2023/11/08/学习强国懒人必备/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };