
String.prototype.$format = String.prototype.$format || function() {
    var args = Array.prototype.slice.call(arguments)

    var flag = '{}'

    var last = args[args.length - 1]
    if (typeof last == 'function') {
        flag = last()
        args.pop()
    }

    var count = 0
    return this.replace(new RegExp(flag, 'g'), function(s, i) {
        return args[count++]
    })
}

String.prototype.$replaceHTMLChar = String.prototype.$replaceHTMLChar || function() {
    return this.replace(/[<>&"\s\n]/g, function(char) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', ' ': '&nbsp;', '\n': '&nbsp;'}[char]
    })
}

Object.defineProperty(String.prototype, '$quote', {
    get: function () {
        return `'${this}'`
    }
})

Object.defineProperty(String.prototype, '$trim', {
    get: function () {
        return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    }
})
