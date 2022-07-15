const {List} = require('immutable')

var l1 = List([33,44,55,66])

var l2 = l1.insert(2,11)

l1.forEach(ob=>console.log(ob))

l2.forEach(ob=>console.log(ob))