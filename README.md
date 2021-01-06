# Any.prototype



This is an extended library of properties and methods of JavaScript variables. To prevent code intrusion, add a $sign before the name of each property and method.

<br/>



## Installation



```shell
yarn add Any.prototype
```

Or

```shell
npm install Any.prototype
```
<br/>

## Import

You can import all of them
```js
import 'Any.prototype'
```

You can also import a single type
```js
import 'Any.prototype/String.prototype'
```
<br/>

## Array

Determine whether the element is included in the array
```js
array.$have(element)
```

```js
const array = [1, 2, 3]
const value = array.$have(0)
console.log (value) // false
```

Delete the elements with the specified index in the array and return the value of the deleted elements
```js
array.$remove(index)
```

```js
const array = [1, 2, 3]
const value = array.$remove(0)
console.log (value) // 1
console.log (array) // [2, 3]
```

Gets the first element in the array
```js
array.$first
```

```js
const array = [1, 2, 3]
const value = array.$first
console.log (value) // 1
```

Gets the last element in the array
```js
array.$last
```

```js
const array = [1, 2, 3]
const value = array.$last
console.log (value) // 3
```
<br/>

## Date

Time format, return string
```js
date.$format(formatter)
```

```js
const date = new Date()
const value = date.$format('yyyy-MM-dd HH:mm:ss')
console.log (value)
```

Format based on timestamp time
```js
// Whether the timestamp is seconds or milliseconds, the internal will be converted to milliseconds, so there is no need for external conversion
const timestamp = '1609900369647'

// Only the timestamp is passed, and the variable of date type is returned
const date = Date.$init(timestamp)

// The format and timestamp of the corresponding data are returned
const date = Date.$init(timestamp, 'HH:mm:ss')

// timestamp and empty format, return the corresponding standard format string data
const date = Date.$init(timestamp, '')
```


Gets the current timestamp
```js
// The time stamp in seconds is returned instead of parameters or's'
Date.$time()
Date.$time('s')

// The time stamp in milliseconds is returned by passing 'MS'
Date.$time('ms')
```
<br/>


## Promise

Multiple projects are performed at the same time. The first successful project returns `resolve`. If it fails, it returns `reject`. Please refer to `Promise.race`

```js
Promise.$stack(array)
```
```js
const api1 = new new Promise()
const api2 = new new Promise()
const api3 = new new Promise()
const array = [api1, api2, api3]
Promise.$lead(array)
```

Multiple projects are performed in turn. If one of them successfully returns "resolve" and the last one fails to return "reject", please refer to` Promise.race ())
```js
Promise.$queue(array)
```

```js
const api1 = new new Promise()
const api2 = new new Promise()
const api3 = new new Promise()
const array = [api1, api2, api3]
Promise.$scan(array)
```
<br/>


## String
String formatting
```js
'{0} {1}!'.format('Hello', 'World') // 'Hello World!'
```

String formatting, you can also pass the custom formant wrapped by the function in the last parameter
```js
'%@ %@!'.format('Hello', 'World', _ => '%@') // 'Hello World!'
```

String conversion HTML escape character to prevent code injection
```js
'<p>hello<p>'.$replaceHTMLChar() // '<hello>'
```

String before and after a single quotation mark, in the use of database additions, deletions and changes may be used
```js
'hello'.$quote // "'hello'"
```

White space characters before and after string removal

```js
' hel lo '.trimm // 'hel lo'
```

---
