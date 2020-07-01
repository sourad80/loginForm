function logfrm(){
    
    var x2 = document.forms["login"]["fname"].value;
    var atposition=x2.indexOf("@");  
    var dotposition=x2.lastIndexOf(".");  
    
    var x1 = document.forms["login"]["fpass"];
    var passLen = 8;

    // console.log(x1.value)

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x2.length){  
        alert("Please enter a valid e-mail address!!!!");  
        return false;
    }  

    if(x1.value.length < passLen)
    {
        alert("Password should be more than 8 character!!!!");
        return false;
    }
    
    console.log("No error upto here");

    var x = document.getElementById("frem").checked;
    
    console.log(x)

    if(x == true)
    {
        // document.getElementById("fname").value = x2;
        // document.getElementById("fpass").value = x1;
        document.getElementById("fname").value = x2
        document.getElementById("fpass").value = x1.value
        return false;
    }
    else{
        document.getElementById("fname").value = "";
        document.getElementById("fpass").value = "";
    }
} 