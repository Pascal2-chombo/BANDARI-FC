// <!-- Its used to callback the icons in order for them to appear in the frontend -->
lucide.createIcons();

// To show and hide the password
const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.onclick = function(){
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "assets/images/eye-open.png"
  }
  else{
    password.type = "password"
    eyeicon.src = "assets/images/eye-close.png"
  }
};

// To show sidebar

