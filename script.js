function logfrm(){
    var x2 = document.forms["login"]["fname"].value;
    var atposition=x2.indexOf("@");  
    var dotposition=x2.lastIndexOf(".");  
    var x1 = document.forms["login"]["fpass"].value;
    var passLen = 8;
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address!!!!");  
        return false;
    }  
    if(x1.length < passLen)
    {
        alert("Password should be more than 8 character!!!!");
        return false;
    }

    var x = document.forms["login"]["frem"];
    if(x.checked == true)
    {
        // document.getElementById("fname").value = x2;
        // document.getElementById("fpass").value = x1;
        document.forms["login"]["fname"].value = x2
        document.forms["login"]["fpass"].value = x1
        return false;
    }
    else{
        document.getElementById("fname").value = "";
        document.getElementById("fpass").value = "";
    }
} 