const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image()
        image.onload = resolve
        image.onerror = reject
        image.src = path
    })
}