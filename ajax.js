var r = new XMLHttpRequest();

r.onreadystatechange = function(){
  if(r.readyState == 4){
    // 从服务器的 response 获得数据
    // console.log(r.response);

    var response = JSON.parse(r.response)
    console.log('response', response);
    var imgSrc = response.image
    var img = `<img src=${imgSrc}>`
    document.body.insertAdjacentHTML('beforeend', img);

  }
}

// https://vip.cocode.cc/sandbox/todo/330425899/all/
var url = 'https://api.douban.com/v2/book/1220562'
r.open('GET', url,  true)
// open 的第三个参数表示是否异步

r.send()
