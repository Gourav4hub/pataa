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

var arr = [45,45,23,23,34,34,11]

module.exports = {
    Student,arr
}




