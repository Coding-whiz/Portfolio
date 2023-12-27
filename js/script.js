//typing animation
var typed = new Typed(".typing", {
    strings:["", "Graphic Designer", "Web Developer", "Software Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function sendEmail()
{
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message:document.getElementById("message").value, 
    };
    const serviceID = "service_gjtbkq4";
    const templateID = "template_y4ajh4n";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
           document.getElementById("name").value = "";
           document.getElementById("email").value = "";
           document.getElementById("message").value = "";
           console.log(res);
           alert("Message sent successfully <3");
       })
    .catch(err => console.log(err)
    );
}
