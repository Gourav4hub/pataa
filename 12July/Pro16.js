const x = 200;

function hello()
{
    var x = 100;
    let y = 100;
    console.log("X : ",x , " Y : " , y)

    {
        var x = 300;
        let y = 300;
        console.log(">>>> X : ",x," Y : " , y)
    }

    console.log("<<<< X : ",x," Y : " , y)
}

hello()
