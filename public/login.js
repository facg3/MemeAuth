
// function getRequest(url, cb) {
  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4){
  //     if (xhr.status == 200) {
  //         cb(JSON.parse(xhr.responseText));
  //     } else {
  //       alert("Error Occured!!, on: "+url+" with response: ");
  //     }
  //   }
  // }
  // xhr.open("GET", url);
  // xhr.send();
// }
//
//
// document.getElementById('button').addEventListener("submit", function(e) {
//   e.preventDefault();
//   document.getElementById('email').textContent = "";
//   var username = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//
//
//   if (username.trim() == "") {
//     validate("Please enter an E-mail address")
//
//   }
//
// const valid = username.match('/^[A-z]+$/')
//   else if (!valid) {
//     validate("Please enter a valid user name")
//   }else {
//     getRequest("/getLogIn", (err, res) => {
//       if(err){
//         console.log(err);
//       } else {
//
//       }
//     })
//   }
//
//   if (password != confirmPassword) {
//     validate("The passwords don't match")
//   }
// })
//
// function validate(message) {
//   var msg = document.createElement("h3");
//   msg.textContent = message;
//   document.getElementsByClassName('cont')[0].appendChild(msg);
// }
function errorThrower(message){
  document.getElementsByClassName('error-cont')[0].innerHTML = "";
  var msg = document.createElement("h3");
  msg.textContent = message;
  document.getElementsByClassName('error-cont')[0].appendChild(msg);
}

function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username.trim() == "" || password.trim() == ""){
    errorThrower("Please fill in the required fields")
}
  else{
  var information = JSON.stringify([username, password]);
  var url = "/logmein"
  var xhr = new XMLHttpRequest();
  var response
  xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState == 4){
      if(xhr.responseText.length < 2){
      window.location.pathname = xhr.responseText}
      else{
        errorThrower(xhr.responseText);
      }

    }else{
      console.log("error" + xhr.responseType);
    }

}
  xhr.open("POST", url);
  xhr.send(information);
}}
