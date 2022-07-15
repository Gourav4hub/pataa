// primitive / reference : Mutable

var ob = {
    name : "Vikas",
    age  : 32
}

console.log(ob)

var ob2 = {...ob,email:"vikas@gmail.com"}

console.log(ob)
console.log(ob2)