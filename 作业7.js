// 2017/03/03
//
// ============
// 作业 7
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


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


// 作业 1
// 实现函数
// 多看提示多讨论
var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    var result = "";
    for (var i = 0; i < array.length - 1; i++) {
      result += array[i] + delimiter;
    }
    if (array[array.length - 1] != "") {
      result += array[array.length - 1];
    }
    return result;
}

join('#', ['hello', 'gua' ,'abd' , 'dce'])

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}

// '1  2  3' , "  "
var find = function(s, s1) {
  // console.log("find 执行");
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    let s_1 = s.slice(i, i + s1.length)
    // console.log('s_1', s_1);
    if (s_1 == s1) {
      arr.push(i)
    }
  }
  return arr
}

// 作业 2
// 实现函数
var split = function(s, delimiter=' ') {
    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑
    */
    // var index = find(s, delimiter)
    // console.log('index', index);
    // // 0 index[0]     index[0] + delimiter.length index[1]
    // for (var i = 0; i < s.length; i++) {
    //
    //   // s.slice(i, )
    // }

    var sp = new Array;
    var step = 0;
    for (var i = 0; i <= s.length - delimiter.length ; i++) {
      let s1 = s.slice(i , i + delimiter.length)
      if (s1 == delimiter) {
        let s2 = s.slice(step , i)
        step = i + delimiter.length;
        sp.push(s2);
      }
    }
    sp.push(s.slice(step));
    return sp;
}

// split('1  2  3' , "  ")
// split('a=b&c=d', '&')

// 作业 3
// 实现函数
var replaceAll = function(s, old, newString) {
    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */

    var array = split(s , old);
    var s = join(newString , array);
    // console.log('s', s);
    return s;
}

// replaceAll("abcdabefab" , "ab" , "123")
// replaceAll("abcdabef" , "ab" , "123")

// 作业 4
// 实现函数
var str1 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'
    */
    // let n1 = String(n)
    // for (var i = 1; i < n; i++) {
    //   n1 = (n - i) + n1 + (n - i)
    // }
    // console.log('n1', n1);

    var s = new Array;
    for (var k = 0; k < n; k++) {
      s[k] = k + 1;
    }

    for (var i = 0; i < n; i++) {
      var string = "";
      for (var j = 0; j <= i; j++) {
        string += s[j];
      }
      for (var m = i - 1; 0 <= m; m--) {
        string += s[m];
      }
    }
    console.log(string);
    return string

    // for (var i = 1; i <= n; i++) {
    //   let string = "";
    //   for (var j = 1; j <= i; j++) {
    //     string += j;
    //   }
    //   for (var m = i - 1; 1 <= m; m--) {
    //     string += m;
    //   }
    //   console.log(string);
    // }
}

// str1(5)
// str1(7)

// 作业 5
// 实现函数
var str2 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i < n; i++) {
      var string = "";
      for (var j = 0; j <= i; j++) {
        string += s[j];
      }
      for (var m = i - 1; 0 <= m; m--) {
        string += s[m];
      }
    }
    // console.log(string);
    return string
}

str2(5)

// 作业 6
// 实现加法口诀表
var addTable = function() {
    /*
    返回这样格式的加法口诀表(没写全, 但是要返回完整的)
    注意, 这只是我输入的内容
    实际上你普通 log 出来是不会有回车的
    [
        '1 + 1 = 2',
        '2 + 1 = 3  2 + 2 = 4',
        '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
    ]
    */
    for (var i = 1; i <= 9; i++) {
      for (var j = i; j <= 9; j++) {
        let sum = "";
        sum += i + "+" + j;
        // console.log(sum);
      }
    }
}

addTable()


// 作业 7
// 实现函数
var range1 = function(start, end) {
    /*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */
    var array = new Array;
    for (var i = start; i < end; i++) {
      array.push(i);
    }
    return array;
}

range1(1 , 5)

// 作业 8
// 实现函数
var range2 = function(start, end, step=1) {
    /*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
    */
    var array = new Array;
    for (var i = start; i < end ; ) {
      array.push(i);
      i += step;
    }
    return array;
}

range2(0 , 6 , 2)
range2(1 , 5 , 1)

// 作业 9
// 实现函数
var range3 = function(start, end, step=1) {
    /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]

    */
    var array = new Array;
    while (start < end || start > end) {
      array.push(start);
      start += step
    }
    return array;
}

range3(1 , 5 , 1)
range3(6 , 0 , -1)
range3(0 , 6 , 2)

// 作业 10
// 实现函数
var random01 = function() {
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */
    if (Math.random() < 0.5) {
      return 0;
    } else {
      return 1;
    }
}

random01()

// 作业 11
// 实现函数
var randomLine01 = function(n) {
    /*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
    */
    var array = new Array;
    for (var i = 0; i < n; i++) {
      array[i] = random01();
    }
    // range2(0 , n , random01())
    return array;
}

randomLine01(5)

// 作业 12
var randomSquare01 = function(n) {
    /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
    */
    var array = new Array;
    for (var i = 0; i < n; i++) {
      array[i] = randomLine01(n);
    }
    return array;
}

randomSquare01(3)

// 作业 13
var randomLine09 = function(n) {
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]
    */
    var array = new Array;
    for (var i = 0; i < n; i++) {
      array[i] = random01() * 9;
    }
    return array;
}

randomLine09(5)

// 作业 14
var markedLine = function(array) {
    /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
    */
    var newArray = array.slice(0);
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i] == 0) {
        if (newArray[i - 1]  == 9) {
          newArray[i] += 1;
        }
        if (newArray[i + 1]  == 9) {
          newArray[i] += 1;
        }
      }
    }
    return newArray;
}

markedLine([0, 0, 9, 0, 9])

// 作业 15
// 注意, 这道题比较麻烦, 你要是不会, 就暂时放弃
var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */

    var l = array.length;
    for (var i = 0; i < l; i++) {
      markedLine(array[i])
    }

    // [1, 9, 1, 0],
    // [0, 1, 9, 1],
    // [9, 2, 9, 1],
    // [1, 9, 1, 0],


}


// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine
*/
