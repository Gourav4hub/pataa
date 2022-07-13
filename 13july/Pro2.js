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
var student2 = new Student(102,"Mohan",31)


student1.show()
student2.show()