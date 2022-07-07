function showData(value){
    console.log(this.name , this.age , this.salary)
    for(var ph of this.phone){
        console.log(ph)
    }
    var addr = this.address
    console.log(addr.street,addr.city,addr.pincode)
    console.log(value)
}

var ob1 = {
    name : "Vikas",
    age : 34,
    salary : 12000,
    phone : ["29834982234","9834728374"],
    address : {
        street : "Raj Nager",
        city : "Indore",
        pincode : 458001
    }
}
var ob2 = {
    name : "Gopal",
    age : 31,
    salary : 16000,
    phone : ["29834982234","9834728374"],
    address : {
        street : "Raj Nager",
        city : "ujjain",
        pincode : 458001
    }
}

// ob1.show()
// ob2.show()

//var fun1 = showData.bind(ob1,100)
// fun1()
showData.apply(ob1,[100])
