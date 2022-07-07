console.log("Hello Everyone !")

// Object 

var ob1 = {
    name : "Vikas",
    age : 34,
    salary : 12000,
    phone : ["29834982234","9834728374"],
    address : {
        current : {
            street : "Raj Nager",
            city : "Indore",
            pincode : 458001
        },
        permanant : {
            street : "Vijay Nager",
            city : "Ujjain",
            pincode : 458002
        }
    },
    show : function(){
        console.log(this.name , this.age , this.salary)
        for(var ph of this.phone){
            console.log(ph)
        }
        var addr = this.address.current
        console.log(addr.street,addr.city,addr.pincode)
        var addr2 = this.address.permanant
        console.log(addr2.street,addr2.city,addr2.pincode)
    }
}

//console.log(ob1)
ob1.show()

// console.log(ob1.__proto__)

// console.log(ob1.phone.__proto__)


