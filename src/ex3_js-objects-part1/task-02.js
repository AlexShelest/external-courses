function returnObj(obj) {
    for (key in obj ) {
        console.log (key + " " + obj[key]);
    }
}

module.exports = returnObj;