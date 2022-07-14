function add(a,b)
{
    var pr = new Promise((resolve,reject)=>
    {
        var c = a + b
        if(c>50)
            resolve(c)
        else
            reject("Not Done")    
    });   
    return pr;
}

//Pending : Resolve : Reject 
var pr = add(3,21)
pr.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


console.log("End ..... ")
console.log("Thanks ..... ")