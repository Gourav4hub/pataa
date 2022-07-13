function Student(roll,name,age)
{
    this.roll = roll
    this.name = name
    this.age = age
    this.show = function(){
        console.log(this.roll,this.name,this.age)
    }
}


var student1 = new Student(101,"Vikas",32)

// Object.defineProperty(student1,"roll",{
//     writable : false
// })
Object.defineProperties(student1,{
    roll : {
        writable:false
    },
    name : {
        configurable:true
    }
})

student1.show()

student1.roll=232

student1.show()

delete student1.name

student1.show()

