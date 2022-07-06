var namebox = undefined;
var mailbox = undefined;
var depbox = undefined;
var tbody = undefined;

var gender = "female";

function init(){
    namebox = document.getElementById('namebox')
    mailbox = document.getElementById('mailbox')
    depbox = document.getElementById('depbox')
    tbody = document.getElementById('tb')
    namebox.focus()
}

function handleGender(gen){
   gender = gen;
}

function add(){   
    var name = namebox.value;
    var email = mailbox.value;
    var department = depbox.value;
    var hobby = "";
    var hobbyBoxes = document.getElementsByClassName('hobby');
    
    for(var x in hobbyBoxes)
    {
        var box = hobbyBoxes[x];
        if(box.checked)
            hobby += box.value+" "
    }    
    addDataIntoTable(name,email,department,gender,hobby)
    clearBoxes()
    namebox.focus() // namebox.blur()
}

function addDataIntoTable(name,email,department,gender,hobby)
{
    var tr = document.createElement('tr');

    var nameTD = document.createElement('td');
    nameTD.innerText = name
    tr.appendChild(nameTD)

    var mailTD = document.createElement('td');
    mailTD.innerText = email
    tr.appendChild(mailTD)

    var depTD = document.createElement('td');
    depTD.innerText = department
    tr.appendChild(depTD)

    var genTD = document.createElement('td');
    genTD.innerText = gender
    tr.appendChild(genTD)

    var hobbyTD = document.createElement('td');
    hobbyTD.innerText = hobby
    tr.appendChild(hobbyTD)

    var btnTD = document.createElement('td');
    btnTD.setAttribute('class','text-center')

    var btn = document.createElement('button')
    btn.innerText = "Delete"
    btn.setAttribute('class','btn btn-warning')
    btn.setAttribute('data-name',name)
    btn.onclick = deleteRecord
    // btn.onclick = function(){
    //     var status = confirm("Are You Sure To Delete ?")
    //     if(status){
    //         tr.remove()
    //     }
    // }

    btnTD.appendChild(btn)
    tr.appendChild(btnTD);


    tbody.appendChild(tr)
}

function clearBoxes(){
    namebox.value = ""
    mailbox.value = ""
    depbox.value = ""
}

function deleteRecord(){
    var name = this.getAttribute('data-name')
    var status = confirm("Are You Sure To Delete "+name+" ? ")
   
    if(status)
        this.parentElement.parentElement.remove()
}
