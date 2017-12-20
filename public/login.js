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
