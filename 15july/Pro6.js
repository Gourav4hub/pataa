const {Map, List} = require('immutable')

var l1 = Map([
    ["abc",100],
    ["xyz",200]
])


var l2 = l1.set("pqr",300)

for(let value of l2.values())
    console.log(value)