const handlers = require("./handlers.js");
// const loginHandlers = require('../loginPage/loginHandlers.js');
const router = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/"){
    handlers.homepage(request, response);
  }
  else if (url.startsWith("/public")){

    handlers.handler(request, response);
  }
  else if (url === "/getMeme"){
    handlers.memeTag(request, response);
  }
  else if (url === "/insertMeme"){
    handlers.uploadMeme(request, response);
  } else if (url === "/login" && method == 'GET') {
    handlers.loginPages(request, response);
  }
  else {
    response.writeHead(404);
    response.end("PAGE NOT FOUND!!!!!!!!!!");
  }
}
module.exports = router;
