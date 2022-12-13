export default class StorageManager {
    static isExist = (data, cell) => {
        const array = [];

        for (var s in data) {
            Object.keys(data[s]).map(i => array.push(i))
        }

        if (array.indexOf(cell) === -1) { return false; }
        else { return true; }
    }

    static pushItem = (data, cell, number) => {
        for (var s in data) {
            for (var j in data[s]) {
                if (j === cell) {
                    var m = data[s][j]
                    m.push(number)
                }
            }
        }

        console.log(data)

        return data
    }
}