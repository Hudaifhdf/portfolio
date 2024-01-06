// function sendMail() {
//   console.log("hi");

//     if(document.getElementById("name").value.length>0&&document.getElementById("email").value.length>0&&document.getElementById("email").value.includes("@")&&document.getElementById("message").value.length>0){
//       var params = {
//         name: document.getElementById("inputname").value,
//         email: document.getElementById("inputemail").value,
//         subject:document.getElementById("inputsub").value,
//         message: document.getElementById("inputmsg").value
//       };
//       const serviceID = "service_nk73iw9";
//       const templateID = "template_qc5hvio";
    
   
//     emailjs
//       .send(serviceID, templateID, params)
//       .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value="";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message send successfully..!"); 
        
//       })
//       .catch((err) => console.log(err));
//     }
//     else{
//       alert("Please fill the field..")

//     }
//     }
function sendmail() {
    if(document.getElementById('name').value.length>0
    &&document.getElementById('email').value.length>0
    &&document.getElementById('message').value.length>0
    &&document.getElementById('email').value.includes("@")){
  
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
  
    }
    const serviceId="service_nk73iw9"
  const templateId="template_qc5hvio"
  emailjs.send(serviceId,templateId,params)
  .then(
    res => {
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";
        console.log(res);
        alert('message send succesfully');
    })
  .catch(err=>{console.log(err);})
  }else{
    alert("please fill the form correctly")
  }
  }