class Student
{
    constructor(roll,name,age){
        this.roll = roll
        this.name = name
        this.age = age
    }
    show()
    {
        console.log(this.roll,this.name,this.age)
    }
}

var s1 = new Student(101,"Vikas",32)

s1.show()