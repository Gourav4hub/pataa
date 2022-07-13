function Student(roll,name,age)
{
    var roll = roll
    this.name = name
    this.age = age
    this.show = function(){
        console.log(roll,this.name,this.age)
    }
}

var student1 = new Student(101,"Vikas",32)
var student2 = new Student(102,"Gopal",31)

console.log(student1.roll)
student1.show()
student2.show()