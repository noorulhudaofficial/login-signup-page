// SIGNUP
function signup(){
  let name = signupName.value;
  let email = signupEmail.value;
  let pass = signupPass.value;

  if(name === "" || email === "" || pass.length < 5){
    alert("Please fill all fields (password 5+ chars)");
    return;
  }

  let user = {
    name: name,
    email: email,
    password: pass
  };

  localStorage.setItem("userData", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

// LOGIN
function login(){
  let email = loginEmail.value;
  let pass = loginPass.value;

  let savedUser = JSON.parse(localStorage.getItem("userData"));

  if(!savedUser){
    alert("No account found. Please signup first.");
    return;
  }

  if(email === savedUser.email && pass === savedUser.password){
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  }else{
    alert("Invalid email or password");
  }
}

// DASHBOARD
if(window.location.pathname.includes("dashboard")){
  let savedUser = JSON.parse(localStorage.getItem("userData"));
  let loggedIn = localStorage.getItem("loggedIn");

  if(loggedIn !== "true"){
    window.location.href = "login.html";
  }else{
    document.getElementById("welcome").innerText =
      `Welcome ${savedUser.name} 🎉`;
  }
}

// LOGOUT
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
