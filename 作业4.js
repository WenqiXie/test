// 2017/02/24
//
// ============
// 作业 4
//
// 本次作用用到了 string, 主要是...
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}




// ======
// 测试
// 本次作业起, 我们开始使用自动测试的方法来验证结果
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}

// 例子
// 测试的使用
//
// 注意看, 我们使用了上文定义的 ensure 来进行测试
var test_sample = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 True 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}

// test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败


// 作业 1
// 10 分钟做不出就看提示
//
var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    indexOf
    提示:
        循环比较, 如果发现就返回
        注意处理 s2 不存在的情况
    */
    var pos = new Array();
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] == s2){
        pos.push(i);
      }
    }
    if (pos.length > 0) {
      return pos;
    } else {
      return -1;
    }
}
find("abc","c")

// 测试函数, 自行实现
var test_find = function() {
}


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}


/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数

提示:
    参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑
*/
var uppercase = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var index = find (lower,s[i]);
    result += upper[index];
  }
  return result;
}

// function find (s1,s2) {
//   for (var j = 0; j < s1.length; j++) {
//     if (s1[j] == s2) {
//       return j;
//     }
//   }
// }
uppercase("abczf");

/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串

提示:
    因为可能字符串中带小写字符, 那么就要判断一下才能处理
*/
// var lowercase1 = function(s) {
//   var result = "";
//   for (var i = 0; i < s.length; i++) {
//     if (s.charCodeAt(i) >= 97) {
//       result += s[i];
//     } else {
//       var index = find (upper,s[i]);
//       result += lower[index];
//     }
//   }
//   return result;
// }

var lowercase1 = function(s) {
  var result = ''
  for (var i = 0; i < s.length; i++) {
    let index = find(upper, s[i])
    if (index >= 0) {
      result += lower[index]
    } else {
      result += s[i]
    }
  }
  return result
}

lowercase1("ABCdef");



/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
提示:
    同作业 3 一样
*/
var uppercase1 = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 95) {
      result += s[i];
    } else {
      var index = find (lower,s[i]);
      result += upper[index];
    }
  }
  return result;
}

uppercase1("ABCdef");


/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位

注意:
    s 是一个只包含小写字母的字符串

提示:
    对于 s 中的每个元素, 找到下标
    下标 +1 就能得到加密后的字符的下标
    需要注意的是 'z' 会变成 'a'
*/
var encode1 = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] != "z") {
      var index = find(lower,s[i])
      index = Number(index) // index 必须是 Number
      result += lower[index + 1];
    } else {
      result += "a";
    }
  }
  return result;
}

encode1("abcz");
// bcda

/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回

注意:
    s 是一个只包含小写字母的字符串

提示:
    解密 s 就是把 s 左移 1 位
    其他同作业 5
*/
var decode1 = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] != "a") {
      var index = find (lower,s[i]);
      result += lower[index - 1];
    } else {
      result += "z";
    }
  }
  return result;
}

decode1("bcda");

/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数

注意:
    s 是一个只包含小写字母的字符串

提示:
    和作业 5 一样, 只是位移数由 shift 提供
    需要处理一下下标超过 25 的情况
*/
var encode2 = function(s, shift) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var index = find (lower,s[i]);
    index = Number(index)
    shift = shift % 25;
      if (index + shift <=25) {
        result += lower[index + shift];
      } else {
        shift = (index + shift) % 25;
        result += lower[shift - 1];
      }
  }
  return result;
}

encode2("abcz" , 1);
encode2("abcz" , 2);
encode2("abcz" , 23);
encode2("abcz" , 27);


/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数

注意:
    s 是一个只包含小写字母的字符串

提示:
    同上
*/
var decode2 = function(s, shift) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var index = find (lower,s[i]);
    shift = shift % 25;
      if (index - shift >=0) {
        result += lower[index - shift];
      } else {
        shift = index - shift + 26;
        result += lower[shift];
      }
  }
  return result;
}

decode2("bcda" , 1);
decode2("xyzw" , 23);

/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样

注意:
    s 是一个只包含小写字母和不是字母的字符的字符串

提示:
    在处理的时候, 判断字符是否是字母
*/
var encode3 = function(s, shift) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var index = find(lower,s[i]);
    index = Number(index)
    shift = shift % 25;
    if (index >= 0) {
      if (index + shift <=25) {
        result += lower[index + shift];
      } else {
        shift = (index + shift) % 25;
        result += lower[shift - 1];
      }
    } else {
      result += s[i];
    }
  }
  return result;
}

encode3("abcz " , 23);


/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样

注意:
    s 是一个只包含小写字母和不是字母的字符的字符串

提示:
    同作业 9
*/
var decode3 = function(s, shift) {
  var result = "";
  shift = shift % 25;
  for (var i = 0; i < s.length; i++) {
    var index = find (lower,s[i]);
    index = Number(index)
    if (index >= 0) {
      if (index - shift >=0) {
        result += lower[index - shift];
      } else {
        let shift1 = index - shift + 26;
        // console.log('shift', shift1);
        result += lower[shift1];
      }
    } else {
      result += s[i];
    }
  }
  return result;
}
// console.log(decode3('abcd=/', 5));


// vwxy=/
// var lower = 'abcdefghijklmnopqrstuvwxyz'
/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文

提示:
    因为不知道加密的位移, 所以考虑把所有加密的可能都打印出来人肉挑选
    code 是大写字母和空格组成, 我们之前的函数只能处理小写字母
    所以先转换为小写字母再处理
    本题用到的函数都是本次作业写过的
*/
var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

var decode4 = function(s) {
  code = lowercase1(code)
  // console.log('code', code);
  for (var i = 0; i < 26; i++) {
    let c1 = decode3(code, i)
    // console.log('c1', c1);
  }
}
decode4(code)
// sometimes i want to chat with you,but i have no reason to chat with you
