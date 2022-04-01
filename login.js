 var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");

  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

  }
  function signIn() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

  }
  document.querySelector("#register1").addEventListener("click", addItem);
  function addItem(event) {
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    
    localStorage.setItem("Fname", fname);
    localStorage.setItem("Lname", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Pass", pass);
  }
  
  document.querySelector("#login1").addEventListener("click", myFun);
  function myFun(e) {
    e.preventDefault()
    var email = document.querySelector("#Email").value;
    var pass = document.querySelector("#Pass").value;


    var email1 = localStorage.getItem("Email");
    var pass1 = localStorage.getItem("Pass");
    console.log(email,email1);
    console.log(pass,pass1);

        
    if (email == "") {
     alert("** Please Fill the Data First **")
    }
     
   else{
    if (email == email1 && pass == pass1) {
      alert("Successful");
      var loginedUser = localStorage.getItem("Fname");
      localStorage.setItem("LoginedUser", loginedUser);

      


      window.location.href = "Home.html";
    } else {
      alert("You are enter wrong data");
    }
}
  }