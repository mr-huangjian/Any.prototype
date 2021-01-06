# Any.prototype

这是一个 JavaScript 变量的属性和方法拓展库。为防止代码入侵，在每个属性和方法的名字前加上一个 $ 符号。
<br/>

## 安装

```shell
yarn add Any.prototype
```
or
```shell
npm install Any.prototype
```
<br/>

## 导入

你可以全部导入
```js
import 'Any.prototype'
```

也可以单个类型导入
```js
import 'Any.prototype/String.prototype'
```
<br/>

## Array

判断数组中是否包含该元素
```js
array.$have(element)
```
```js
const array = [1, 2, 3]
const value = array.$have(0)
console.log(value) // false
```

删除数组中指定索引的元素，返回被删除的元素值
```js
array.$remove(index)
```
```js
const array = [1, 2, 3]
const value = array.$remove(0)
console.log(value) // 1
console.log(array) // [2, 3]
```

获取数组中第一个元素
```js
array.$first
```
```js
const array = [1, 2, 3]
const value = array.$first
console.log(value) // 1
```

获取数组中最后一个元素
```js
array.$last
```
```js
const array = [1, 2, 3]
const value = array.$last
console.log(value) // 3
```
<br/>

## Date

时间格式化，返回字符串
```js
date.$format(formatter)
```
```js
const date = new Date()
const value = date.$format('yyyy-MM-dd HH:mm:ss S')
console.log(value) // 2021-01-06 13:52:10 675
```

根据时间戳时间格式化
```js
// 无论时间戳是秒还是毫秒，内部都会转换为毫秒，所以外部不用再去做转换
const timestamp = '1609900369647'

// 只传时间戳，返回的是 Date 类型的变量
const date = Date.$init(timestamp)

// 传时间戳和格式，返回的是对应格式的字符串数据
const date = Date.$init(timestamp, 'HH:mm:ss')

// 传时间戳和空格式，返回的是对应标准格式的字符串数据
const date = Date.$init(timestamp, '')
```

获取当前的时间戳
```js
// 不传参数或传 's'，返回的是以秒为单位的时间戳
Date.$time()
Date.$time('s')

// 传 'ms'，返回的是以毫秒为单位的时间戳
Date.$time('ms')
```
<br/>

## Promise

多个 Promise 同时一起进行，最先成功的返回 `resolve`，都失败了返回 `reject`，可以参考 `Promise.race()`
```js
Promise.$stack(array)
```
```js
const api1 = _ => new Promise()
const api2 = _ => new Promise()
const api3 = _ => new Promise()
const array = [api1, api2, api3]
Promise.$stack(array)
```

多个 Promise 依次进行，若有一个成功的返回 `resolve`，最后一个也失败了返回 `reject`，可以参考 `Promise.race()`
```js
Promise.$queue(array)
```
```js
const api1 = _ => new Promise()
const api2 = _ => new new Promise()
const api3 = _ => new new Promise()
const array = [api1, api2, api3]
Promise.$queue(array)
```
<br/>

## String

字符串格式化
```js
'{} {}!'.format('Hello', 'World') // 'Hello World!'
```

字符串格式化，也可以在最后一个参数传递被函数包裹的自定义格式符
```js
'%@ %@!'.format('Hello', 'World', _ => '%@') // 'Hello World!'
```

字符串转换HTML转义符, 防代码注入
```js
'<p>hello<p>'.$replaceHTMLChar() // '&lt;p&gt;hello&lt;p&gt;'
```

字符串前后加上单引号，在使用数据库增删改查时可能用到
```js
'hello'.$quote // "'hello'"
```

字符串去除前后的空白字符
```js
' hel lo  '.trimm // 'hel lo'
```

<br/>

---
