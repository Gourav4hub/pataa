function hello(){
    console.log("Good Evening !")
}

var timeOutObj = setTimeout(hello,10000)

setTimeout(()=>{
    clearTimeout(timeOutObj)
},5000)