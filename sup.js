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
    else if(z.value.length<4){
        alert( " you have to enter at least 4 digit password!")
        z.value = null
        zz.value = null
    }
    else if( zz.value !==z.value){
        alert("THE PASSWORDS DON'T MATCH")
        zz.value = null
    }
    else{
        alert("SIGN UP SUCCESSFULLY")
        x.value =null
        y.value=null
        z.value=null
        zz.value=null
    }
    
    
}

var password = document.getElementById('pssword').addEventListener('mouseenter',validation)

function validation(e){
    var temp = document.getElementById('temp')
    temp.style.display ='inline';
}

var reset = document.getElementById('reset').addEventListener('click',clear)

function clear(){
    var x =document.getElementById('email').value =''
    var y =document.getElementById('usrname').value =''
    var z =document.getElementById('pssword').value =''
    var zz =document.getElementById('confirmPasswaor').value=''
}