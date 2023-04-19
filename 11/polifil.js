arr = [6, 5, 8, 7]

Object.prototype.max = function (a, b) {
    return arr.reduce((a, b) => a > b ? a : b);
}

console.log(arr.max())


// короткая запись если а больше б то вовзвращаю а, если нет то вовзвращаю б


