function createStudent(roll,name,age)
{
    var ob = {
        roll : roll,
        name : name,
        age : age,
        show : function(){
            console.log(this.roll,this.name,this.age)
        }
    }
    return ob;
}

var student1 = createStudent(101,"Vikas",34)
var student2 = createStudent(102,"Mohan",21)
student1.show()
student2.show()