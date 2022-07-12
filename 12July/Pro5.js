// Function 
function hello(ob){
    console.log("Good Evening !")
    ob()
}

function fun1(){
    console.log("Hello Everyone !")
}

hello(fun1)

hello(function(){
    console.log("Good Morning !")
})

// Arrow Function
hello(()=>console.log('Hi How r u?'))


