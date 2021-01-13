var signUp = document.getElementById('sign-up').addEventListener('click',afterClick)

function afterClick(){
    var x =document.getElementById('email')
    var y =document.getElementById('usrname')
    var z =document.getElementById('pssword')
    var zz =document.getElementById('confirmPasswaor')
   
    if(x.value == null || x.value ==""){
        alert("ENTER  EMAIL ID")
    }
    else if(y.value == null || y.value ==""){
        alert("ENTER USERNAME ")
    }
    else if(z.value == null || z.value ==""){
        alert("ENTER PASSWORD")
    }
    else if( zz.value !==z.value){
        alert("THE PASSWORDS DON'T MATCH")
    }
    else{
        alert("SIGN UP SUCCESSFULLY")
        x.value =''
        y.value=''
        z.value=''
        zz.value=''
    }
    
    
}   

var reset = document.getElementById('reset').addEventListener('click',clear)

function clear(){
    var x =document.getElementById('email').value =''
    var y =document.getElementById('usrname').value =''
    var z =document.getElementById('pssword').value =''
    var zz =document.getElementById('confirmPasswaor').value=''
}