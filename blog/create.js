firebase.auth().onAuthStateChanged(function(user){

    if(user){
  document.getElementById("logout_btn").style.display = "initial";
  document.getElementById("login_btn").style.display = "none";
  document.getElementById("helloUser").style.display = "initial";
  document.getElementById("fileUpload").style.display = "initial";
  document,getElementById("note").style.display = "none";
  
  // start
  
  var user = firebase.auth().currentUser;
  var  email ;
  
  if (user != null) {
    email = user.email;
  
    document.getElementById("helloUser").innerHTML = "Hello !  " + email ;
  
         }
  
    
  
         //ends
    }
  
    else{
  
      document.getElementById("logout_btn").style.display = "none";
  document.getElementById("login_btn").style.display = "initial";
  document.getElementById("helloUser").style.display = "none";
  document.getElementById("fileUpload").style.display = "none";
  document.getElementById("note").style.display = "initial";

  }
  
  });
  
  
  function loginMe() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result){
        console.log(result);
        
        console.log("successfull login");
  
    
        alert("your login is successfull ! Thanks For Joining the Community");
    
      }).catch(function(error){
    
        console.log(error);
        console.log("failed To login");
        alert("Login Failed Due to Some Technical Error ! please try Again")
      })
    
    }
  
  
    function logoutMe(){
      firebase.auth().signOut();
    }

    $("#file").on("change", function(event) {
        selectedFile = event.target.files[0];
    })

    function submitFile() {
        var filename = selectedFile.name;
        var storageRef = firebase.storage().ref("/blogFiles/" + filename);
        var uploadTask = storageRef.put(selectedFile);

        uploadTask.on("state_changed",function(snapshot){

        }, function(error) {

        }, function() {
             var downloadURL = uploadTask.snapshot.downloadURL;
             console.log(downloadURL);

        });

    }