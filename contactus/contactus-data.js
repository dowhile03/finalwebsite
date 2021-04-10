let Mybtn = document.getElementById("submit_btn");

Mybtn.addEventListener("click",() => {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let email = document.getElementById("email").value;

    db.collection("contact-us-data").add({
        Name:name,
        message:message,
        email:email
    }).then(()=> {
         alert("We have recorded your response! We will Get back to you very soon");
         document.getElementById("name").value = "";
         document.getElementById("message").value = "";
         document.getElementById("email").value = "";
    }).catch((err) => {
         alert(err);
    })
})