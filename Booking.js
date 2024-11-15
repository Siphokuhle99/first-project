function validation(){
    if(document.Book.fname.value==""){
      document.getElementById("results").innerHTML="Enter first name";
      return false;
    }
    else if (document.Book.fname.value.length<5){
        document.getElementById("result").innerHTML="At least five letter";
        return false
    }
    else if (document.Book.Surname.value==""){
        document.getElementById("result").innerHTML="Enter Surname";
        return false
    }
    else if (document.Book.Surname.value.length<5){
        document.getElementById("result").innerHTML="At least five letter";
        return false
}
else if (document.Book.PhoneNumber.value==""){
    document.getElementById("result").innerHTML="Enter number";
    return false
}
else if (document.Book.PhoneNumber.value.length>11){
    document.getElementById("result").innerHTML="Enter ten digits";
    return false
}
else if (document.Book.PhoneNumber.value.length<10){
    document.getElementById("result").innerHTML="Enter ten digits";
    return false
}
if (document.Book.date.value== ""){
    document.getElementById("result").innerHTML="select date please";
    return false
}
if (document.Book.timeslots.value== ""){
    document.getElementById("result").innerHTML="select time slot please";
    return false
}
if (document.Book.ServiceType.value== ""){
    document.getElementById("result").innerHTML="select service type please";
    return false
}  
}  

let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
    setTimeout(closePopup, 5000);
}
 function closePopup(){
    popup.classList.remove("open-popup");
} 
