console.log("Hello Everyone !")

// Object 

var ob1 = new Object();

ob1.name = "Vikas"
ob1.age = 34
ob1.salary = 12000
ob1.show = function(){
    console.log(this.name , this.age , this.salary)
}

console.log(ob1)
ob1.show()


