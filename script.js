function logfrm(){
    var x2 = document.getElementById("fname").value;
    var atposition=x2.indexOf("@");  
    var dotposition=x2.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address");  
        return false
    }  
    else{
        var x1 = document.getElementById("fpass").value;
        alert(x1.length);
        if(x1.length < 8)
        {
            alert("Password should be more than 8 character!!!!");
            return false;
        }

        var x = document.getElementById("frem");
        if(x.checked == true)
        {
            document.getElementById("fname").value = x2;
            document.getElementById("fpass").value = x1;
            // document.forms["login"]["fname"].value = x2
            // document.forms["login"]["fpass"].value = x1
        }
        else{
            document.getElementById("fname").value = "";
            document.getElementById("fpass").value = "";
        }
    }
} 