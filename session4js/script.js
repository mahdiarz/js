let input = document.getElementById("password");
let para = document.getElementById("demo");
let user = document.getElementById("username");
function login() {
  let userpass = input.value;
  let username = user.value;
  if (username == 'mahdiar') {
    if ( userpass == "m2034") {
        para.innerText = "درسته";
    }else{
      para.innerText = "غلطه";

    }
  
  }
  else {
    para.innerText = "غلطه";
  }

}