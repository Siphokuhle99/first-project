function sendEmail(){
    var params ={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    const serviceID = "service_9fq1ler";
    const templateID ="template_to2ew2j"
    
    emailjs.send(serviceID,templateID,params)
    .then(
       res =>{
        document.getElementById("fname").value ="";
        document.getElementById("lname").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message sent successfully")
    
       } )
       .catch((err)=> console.log(err));
}

