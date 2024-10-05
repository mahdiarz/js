let input = document.getElementById("age");
let para = document.getElementById("demo");
function check() {
  let userage = parseInt(input.value);

  if (  userage < 18){
    para.innerText="!سن شما برای خرید بلیط مناسب نمیباشد"
  }
  else{
    para.innerText="خوش آمدید!"
  };

}