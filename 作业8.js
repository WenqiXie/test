// 2016/12/09
//
// 作业 8
// ========
//

var log = function() {
    console.log.apply(console, arguments)
}


// ====
// 测试
// 自行实现 ensureEqual, arrayEquals 等函数
// 按照上课所说, 最好把测试放在额外的文件中, 隔离测试和代码
// ====
//
var arrayEquals = function(a1, a2, s) {
  if (a1.length !== a2.length) {
    log(s + '测试错误')
    return false
  }
  for (var i = 0; i < a1.length; i++) {
    if(a1[i] !== a2[i]) {
      log(s + '测试错误')
      return false
    }
  }
  log(s + '测试正确')
}

// 作业 1
//
var unique = function(a) {
    /*
    a 是一个 array
    返回一个 array, 包含了 a 中所有元素, 且不包含重复元素
    例如 a 是 [1, 2, 3, 1, 3, 5]
    返回 [1, 2, 3, 5]
    */
  var array = new Array;
  for (var i = 0; i < a.length; i++) {
    if (array.includes(a[i]) == false) {
      array.push(a[i]);
    }
  }
  return array;
}

unique([1, 2, 3, 1, 3, 5])

// 注意, 要自行实现 arrayEquals 来判断两个数组是否相等
// arrayEquals(unique([1, 2, 3, 1, 3, 5]), [1, 2, 3, 5], 'test 1')
// arrayEquals(unique([1, 1, 3, 3, 1, 3]), [1, 3], 'test 2')


// 作业 2
//
var intersection = function(a, b) {
    /*
    a b 都是 array

    返回一个 array, 里面的元素是同时出现在 a b 中的元素
    这个 array 中不包含重复元素
    */
    var c = [];
    for (var i = 0; i < a.length; i++) {
      if (b.includes(a[i]) == true) {
        c.push(a[i]);
      }
    }
    return unique(c);
}

intersection([1, 2, 3, 1, 3, 5] , [1 , 2 , 3 , 1 , 3])


// 作业 3
//
var union = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是所有出现在 a b 中的元素
    这个 array 中不包含重复元素
    /*/

}


// 作业 4
//
var difference = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a 中有 b 中没有的元素
    这个 array 中不包含重复元素
    /*/
    var c = [];
    for (var i = 0; i < a.length; i++) {
      if (b.includes(a[i]) == false) {
        c.push(a[i]);
      }
    }
    return unique(c);
}

difference([1, 2, 3, 1, 3, 5] , [2 , 5])

// 作业 5
//
var differenceAll = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a b 中的非公共元素
    这个 array 中不包含重复元素
    /*/
    var c = intersection(a , b);
    var d = a.concat(b);
    var e = difference(d , c);
    return unique(e);
}

differenceAll([1, 2, 3, 1, 3, 5] , [2 , 5 , 4 , 7])

// 作业 6
//
var isSubset = function(a, b) {
    /*/
    a b 都是 array

    检查是否 a 中的每个元素都在 b 中出现
    返回 bool
    /*/
    for (var i = 0; i < a.length; i++) {
      if (b.includes(a[i]) == false) {
        return false;
      }
    }
    return true;
}

isSubset([2 , 5] , [2 , 5 , 4 , 7])
isSubset([2 , 5, 6] , [2 , 5 , 4 , 7])

// 下面的题目都是 DOM 操作题目
// =====
//
// 作业 7
//
var appendHtml = function(element, html) {
    /*
    element 是一个标签
    html 是一段 html 字符串
    把 html 作为子元素插入到 element 的末尾
    上课一直在用这个函数
    */
    var target = document.querySelector(element)
    target.append(html);
}

// appendHtml("p" , 123456)

// 作业 8
//
var bindEvent = function(element, eventName, callback) {
    /*
    element 是一个标签
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    用法如下, 假设 button 是一个标签
    bindEvent(button, 'click', function(){
        log('click 事件')
    })
    */
    var button = document.querySelector(element);
    button.addEventListener(eventName , callback);
}

// bindEvent('button', 'click', function(){
//     log('click 事件')
// })

// 作业 9
//
var bindEventDelegate = function(element, eventName, callback, responseClass) {
    /*
    element 是一个标签
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    responseClass 是一个字符串

    在 element 上绑定一个事件委托
    只会响应拥有 responseClass 类的元素
    */
    var es = document.querySelectorAll(element);
    for (var i = 0; i < es.length; i++) {
      if (es[i].classList.contains(responseClass)) {
        es[i].addEventListener(eventName , callback);
      }
    }
}

// bindEventDelegate('button', 'click', function(){
//     log('click 事件')} , "show")

// 作业 10
//
var append = function(selector, html) {
    /*
    selector 是一个 string, 选择器, 有如下三种取值
        1, 标签选择器, 如 'div'
        2, class 选择器, 如 '.red'
        3, id 选择器, 如 '#id-input-name'
    html 是一段 html 字符串
    把 html 作为子元素插入到 selector 选中的所有元素的末尾
    */
    // var text = document.createTextNode(html);
    var selectors = document.querySelectorAll(selector);
    for (var i = 0; i < selectors.length; i++) {
      selectors[i].append(html);
    }
}

// append("p" , 5544)

// 作业 11
//
var bindAll = function(selector, eventName, callback, responseClass) {
    /*
    selector 是一个 string, 选择器, 有如下三种取值
        1, 标签选择器, 如 'div'
        2, class 选择器, 如 '.red'
        3, id 选择器, 如 '#id-input-name'
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    responseClass 是一个字符串, 这个参数可以为空

    给 selector 选中的所有元素绑定 eventName 事件
    当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素
    当 responseClass 没有给的时候, callback 直接响应

    注意, 这题做不出来就放弃
    */
    var es = document.querySelectorAll(selector);
    var a =[];
    for (var i = 0; i < es.length; i++) {
      if (es[i].classList.contains(responseClass)) {
        a.push(i);
      }
    }

    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        es[a[i]].addEventListener(eventName , callback);
      }
    } else {
      for (var i = 0; i < es.length; i++) {
        es[i].addEventListener(eventName , callback);
      }
    }
}

bindAll('button', 'click', function(){
    log('click 事件')} , "show")


// =====
// 提示
// =====
/*/

1, unique
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在新数组中出现
如果没出现就 push


2, intersection
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在 b 中出现
如果出现就 push 到新数组


3, union
有问题单独提问


4, difference
有问题单独提问


5, differenceAll
对 a b 分别 difference 并 push 到新数组


6, isSubset
循环判断


7, appendHtml
上课用的函数的封装


8, bindEvent
上课用函数的简单封装


9, bindEventDelegate
事件委托的简单封装


10, append
选择, 然后循环 appendHtml


11, bindAll
这题做不出来就算了
/*/
