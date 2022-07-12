function hello(){
    console.log("Good Evening !")
}

var intervalObj = setInterval(hello,1000)

setTimeout(()=>{
    clearInterval(intervalObj)
},5000)