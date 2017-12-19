

var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);
};

var btns = document.querySelectorAll('button');
for (var i=btns.length-1;i>=0;i--) {
  btns[i].addEventListener('click',loading);
}




const uploadingMemes = ()=>{
  var link = prompt("Insert a meme direct link (URL).");
  if(link){var tags = prompt("Insert space seperated tags for your meme.");
    if (tags.trim() != ""){
      var url = "/insertMeme";
      var link = link.trim();
      var tags = tags.trim().toLowerCase();
      var xhr = new XMLHttpRequest();
      var response;
      var info;
      info = [link, tags];
      xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState == 4){

          alert("Meme added to our database, Thanks for sharing!");

        }else{
          console.log("error" + xhr.responseType);
        }

      }
      xhr.open("POST", url);

      xhr.send(JSON.stringify(info));
    }
    else {alert("Please insert space seperated tags.");
          return;}
}
  else{alert("Please insert a proper image url.");
        return;}
}

function getMeme(){
  document.getElementById("memes-container").innerHTML = "";
  var url = "/getMeme"
  var tag = document.getElementsByClassName("search-box")[0].value.toLowerCase();
  var xhr = new XMLHttpRequest();
  var response
  xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState == 4){
      response = JSON.parse(xhr.responseText);


    }else{
      console.log("error" + xhr.responseType);
    }
    for (var j in response){
        var meme = document.createElement("img");
        meme.src = response[j];
        var cont = document.getElementById("memes-container");
        cont.appendChild(meme);
        cont.appendChild(document.createElement("br"))
  }
}
  xhr.open("POST", url);
  xhr.send(tag);
}
