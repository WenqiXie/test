// 2017/02/26
//
// ============
// 作业 5
//
// 本次作业主要是 string 和 DOM API 练习
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// 注意, 如果觉得题目有问题就直接在群里问
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//
// *** 注意, 在本文件的最后, 会有题目的提示
// 多看提示, 并且有问题要及时在群里发问, 不要做无谓的卡壳


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// ======
// 资料
// ======
//
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数, 不要弄错大小写
//
// includes 函数可以检查一个字符串是否包含另一个字符串
// 例如 'good'.includes('o') 返回 true
// var name = 'gua'
// name.includes(1) // 返回 false



// 作业 1
// 10 分钟做不出就看提示
//
var zfill = function(n, width) {
    /*
    n 是 int 类型
    width 是 int 类型

    把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
    具体请看测试, 注意, 返回的是 string 类型

    返回 string 类型
    */
    var result = "";
    n = n.toString();
    var l = width -n.length;
    if (l >= 0) {
      for (var i = 0; i < l; i++) {
        result += 0;
      }
      result += n;
      return result;
    } else {
       l = -l;
      result += n.slice(l-1);
      return result;
    }
}

zfill(123456789 , 12)
zfill(123456789 , 7)

// 测试函数
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

// 调用测试函数
//test_zfill()


// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样
var ljust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
    否则, 原样返回, 不做额外处理

    返回 string 类型
    */
    var result = "";
    result += s;
    var length = width - s.length;
    if (length >= 0) {
      for (var i = 0; i < length; i++) {
        result += fillchar;
      }
      return result;
    } else {
      return result;
    }
}

ljust("abcd" , 6 )
ljust("abcd" , 6 , "@")
ljust("abcd" , 3 )

// 测试函数
var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}


// 作业 3
// 10 分钟做不出就看提示
//
var rjust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

    返回 string 类型
    */
    var result = "";
    var length = width - s.length;
    if (length >= 0) {
      for (var i = 0; i < length; i++) {
        result += fillchar;
      }
      result += s;
      return result;
    } else {
      return s;
    }
}

rjust("abcd" , 6 )
rjust("abcd" , 6 , "@")
rjust("abcd" , 3 )

// 测试函数
var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}

// 作业 4
// 10 分钟做不出就看提示
//
var center = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
    如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
    这种情况下, 让左边的 fillchar 数量小于右边

    返回 string 类型
    */
    var result = "";
    var length = width - s.length;
    if (length >= 0) {
      if (length % 2 == 0) {
        let length1 = length / 2;
        let result1 = "";
        for (var i = 0; i < length1; i++) {
          result1 += fillchar;
        }
        result += result1 + s + result1;
      } else {
        let length2 = (length -1)  / 2
        let result2 = "";
        for (var i = 0; i < length2; i++) {
          result2 += fillchar;
        }
        result += result2 + s + result2 + fillchar;
      }
      return result;
    } else {
      return s;
    }
}

center("abcd" , 8 , "@")
center("abcd" , 7 , "@")
center("abcd" , 8 )
center("abcd" , 7 )

// 测试函数
var test_center = function() {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}



// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//
var is_space = function(s) {
    /*
    s 是 string
    检查 s 中是否只包含空格

    返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
    */
    for (var i = 0; i < s.length; i++) {
      if (s[i] != " ") {
        return  false;
      }
    }
    return true;
}

is_space("  abc")
is_space("    ")


// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
}

// 作业 6
// 10 分钟做不出就看提示
//
var num = "0123456789"
var is_digit = function(s) {
    /*
    s 是字符串
    检查 s 中是否只包含数字
    返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
    */
    for (var i = 0; i < s.length; i++) {
      let index = find(num , s[i]);
      if (index < 0) {
        return false;
      }
    }
    return true;
}

function find(num , s) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] == s) {
      return 1;
    }
  }
  return -1;
}

is_digit("0123ab")
is_digit("012345")

// 测试函数
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
}


// 作业 7
// 10 分钟做不出就看提示
//
var strip_left = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串开始的所有空格」的字符串

    返回 string
    */
    result = "";
    for (var i = 0; i < s.length; i++) {
      if (s[i] == " ") {
        result += "";
      } else {
        return result += s.slice(i);
        break;
      }
    }
}

strip_left("   abc   ")
strip_left("      ");

// 测试函数
var test_strip_left = function() {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}


// 作业 8
// 10 分钟做不出就看提示
//
var strip_right = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串末尾的所有空格」的字符串

    返回 string
    */
    result = "";
    for (var i = s.length - 1; 0 <= i < s.length; i--) {
      if (s[i] == " ") {
        result += "";
      } else {
        return result += s.slice(0 , i+1);
        break;
      }
    }
}

strip_right("   abc   ");

// 测试函数
var test_strip_right = function() {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
}


// 作业 9
// 10 分钟做不出就看提示
//
var strip = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串首尾的所有空格」的字符串

    返回 string
    */
    var result = strip_left(s);
    result = strip_right(result);
    return result;
}

strip("  abc   ")

// 测试函数
var test_strip = function() {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}


// 作业 10
// 10 分钟做不出就看提示
//
var replace = function(s, old, newString) {
    /*
    3 个参数 s old newString 都是字符串
    返回一个「将 s 中的 old 字符串替换为 newString 字符串」的字符串
    假设 old 存在并且只出现一次

    返回 string
    */
    var length = old.length;
    var result = "";
    var result1 = "";
    for (var i = 0; i < s.length; i++) {
      result1 = s.slice(i , i + length + 1);
      if (result1 = old) {
        result += s.slice(0 , i+1) + newString + s.slice(i + length + 1);
      }
      return result;
    }
}

replace("abcde" , "bc" ,"123")


// 测试函数
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}



// 作业 11
/*
注意, 本题的提示在文件的末尾, 做不出就看提示步骤

实现一个登录页, 页面中有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，最小长度2

如果符合规则, log '检查合格'
如果不符合, log '用户名错误'

需要补全的代码自行解决
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var checkName = function(e) {
  var str = document.getElementById('name');
  s = str.value;
  s = lowercase1(s);
  var index = find(lower , s[0]);
  if (s.length >= 2 && index > 0) {
    console.log('检查合格');
  } else {
    console.log('用户名错误');
  }

}

var lowercase1 = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var index = find (upper,s[i]);
    if (index >= 0) {
      result += lower[index];
    } else {
      result += s[i];
    }
  }
  return result;
}


// 作业 12
/*
注意, 本题的提示在文件的末尾, 做不出就看提示步骤

在上个作业的基础上
额外再检查用户名是否符合如下规则
1，只能字母或数字结尾
2，最大长度10
3，只能包含字母、数字、下划线


在上个作业的登录页最后增加一个 <h3></h3> 标签
如果符合规则 设置标签的内容为 '检查合格'
如果不符合, 设置标签的内容为 '用户名错误'

需要补全的代码自行解决
*/
var char = 'abcdefghijklmnopqrstuvwxyz0123456789_'

var checkName1 = function(e) {
  var str = document.getElementById('name');
  s = str.value;
  s = lowercase1(s);
  var index = find(lower , s[0]);
  var index1 = find(num , s[s.length-1]);
  var index2 = find(lower ,s[s.length-1]);
  var index3 = Boolean(index1 > 0 || index2 > 0);
  var index4 = Boolean(10 >= s.length && s.length >= 2);
  if (index4 > 0 && index > 0 && index3 > 0) {
    for (var i = 1; i < s.length-1; i++) {
      let index5 = find(char , s[i]);
      if (index5 < 0) {
        console.log('用户名错误');
      }
    }
    if (i == s.length-1) {
      console.log('检查合格');
    }
  } else {
    console.log('用户名错误');
  }
}


// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1
zfill
    字符串拼接


2
ljust
    字符串拼接


3
rjust
    字符串拼接


4
center
    算好头尾再拼接


5
is_space
    循环检测


6
is_digit
    预定义数字
    再循环检测


7
strip_left
    循环查找到第一个不为空格的字符的下标然后切片返回


8
strip_left
    和 7 类似, 注意好切片的下标


9
strip
    利用 7 8


10
replace
    查找切片 2 次再拼接


11
带检查的登录页面
    写出页面
    在页面 </body> 结束之前写 script 标签
    在 script 标签中写代码
    查找按钮, 按照上课代码绑定一个事件处理函数
    在函数中查找输入框并获取用户输入值 input.value(input 是引用输入框的变量)
    判断是否合乎规则并 log


12
进阶版
    检查的时候额外带几个条件
    第 3 个条件可以先创建一个包含合法字符的字符串
        然后用循环判断要检查的字符串中的字符看看是否都在合法字符串中
    给增加的 h3 标签加一个 id 属性方便查找
    在检查后设置 h3 的 innerHTML 属性即可
*/
