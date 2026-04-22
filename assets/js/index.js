// <!-- Its used to callback the icons in order for them to appear in the frontend -->
lucide.createIcons();

// To show and hide the password
const eyeicon = document.getElementById("eyeicon");
const eyeicon2 = document.getElementById("eyeicon2");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

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
eyeicon2.onclick = function(){
  if (password2.type == "password") {
    password2.type = "text";
    eyeicon2.src = "assets/images/eye-open.png"
  }
  else{
    password2.type = "password"
    eyeicon2.src = "assets/images/eye-close.png"
  }
};

// To show sidebar

