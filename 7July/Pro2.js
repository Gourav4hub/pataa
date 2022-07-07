console.log("Hello Everyone !")

// Object 

var ob1 = {
    name : "Vikas",
    age : 34,
    salary : 12000,
    phone : ["29834982234","9834728374"],
    address : {
        street : "Raj Nager",
        city : "Indore",
        pincode : 458001
    },
    show : function(){
        console.log(this.name , this.age , this.salary)
        for(var ph of this.phone){
            console.log(ph)
        }
        var addr = this.address
        console.log(addr.street,addr.city,addr.pincode)
    }
}

//console.log(ob1)
ob1.show()


