let submitBtn = document.getElementById("fileUploadBtn");

submitBtn.addEventListener("click", (e) => {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  db.collection("Submit-blog-details")
    .add({
      email: email,
      message: message,
      file: "This has been Stored in storage",
    })
    .then(() => {
      alert(
        "You have submitted Details Successfully ! We will get back to you shortly"
      );
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("file").value = "";
    })
    .catch((err) => {
      alert(err);
    });
});

// let files = [];
document.getElementById("file").addEventListener("change", (e) => {
  files = e.target.files[0];
  var storage = firebase.storage().ref("blog_posts/" + files.name);
  var upload = storage.put(files);
});
