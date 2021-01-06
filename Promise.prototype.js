
Promise.$stack = Promise.$stack || function(array) {
    let index = 0
    return new Promise((resolve, reject) => {
        array.forEach(item => {
            item().then(resolve).catch(error => {
                if (++index == array.length) {
                    reject(error)
                }
            })
        })
    })
}

Promise.$queue = Promise.$queue || function(array) {
    let index = 0
    return new Promise(function next(resolve, reject) {
        array[index]().then(resolve).catch(error => {
            if (++index == array.length) {
                reject(error)
            } else {
                next(resolve, reject)
            }
        })
    })
}
