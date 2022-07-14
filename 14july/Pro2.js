var ob = new Map([
    ["abc",100],
    [123,200]
])

console.log(ob)

ob.set("xyz",321)

console.log(ob)

var a = ob.get(123)
console.log(a)

ob.delete("xyz")
console.log(ob)

ob.forEach((value,key)=>{
  console.log(key,value)  
})