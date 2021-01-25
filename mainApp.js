
let btn = document.getElementById("submitNewsletter");

btn.addEventListener('click', () => {
let newsletterValue = document.getElementById("newsletter").value;


    db.collection("newsletter-Emails").add({
        Email: newsletterValue,
    })
    .then(function() {
        console.log("Document successfully written!");
        alert("ThankYou for Subscribing to our newsletter. We will be in touch with you very soon!!");
        document.getElementById("newsletter").innerHTML = "";
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
});

