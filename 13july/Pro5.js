function Student(roll,name,age)
{
    this.roll = roll
    this.name = name
    this.age = age
    this.show = function(){
        console.log(this.roll,this.name,this.age)
    }
}
function CSStudent(roll,name,age,subjects)
{
    Student.call(this,roll,name,age)
    this.subjects = subjects
    this.show = function(){
        CSStudent.prototype.show.call(this)
        console.log(this.subjects)       
    }
}
CSStudent.prototype = new Student()

var s1 = new CSStudent(101,"Vikas",23,["OOPS","Compiler"])

s1.show()
