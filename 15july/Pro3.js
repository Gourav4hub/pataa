const {produce} = require('immer')

var ob = {
    name : "Vikas",
    age  : 32
}

console.log(ob)

var ob2 = produce(ob,dummy=>{
    dummy.email = "vikas@gmail.com"
})

console.log(ob)
console.log(ob2)