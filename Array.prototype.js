
Array.prototype.$have = Array.prototype.$have || function(element) {
    return this.indexOf(element) != -1
}

Array.prototype.$remove = Array.prototype.$remove || function(index) {
    return this.splice(index, 1)[0]
}

Object.defineProperty(Array.prototype, '$first', {
    get: function () {
        return this[0]
    }
})

Object.defineProperty(Array.prototype, '$last', {
    get: function () {
        return this[this.length - 1]
    }
})
