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

class CSStudent extends Student
{
    constructor(roll,name,age,subjects=["Java","DBMS"]){
        super(roll,name,age)
        this.subjects = subjects
    }

    show(){
        super.show()
        console.log(this.subjects)
    }

    // show(a){
    //     console.log(a)
    // }
}

var s1 = new CSStudent(101,"Vikas",23,["OOPS","Compiler"])
var s2 = new CSStudent()

s1.show()
s2.show()
