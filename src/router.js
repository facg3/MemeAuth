const handlers = require("./handlers.js");
const router = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    if (!request.headers.cookie) {
      handlers.loginPages(request, response);
    } else {
      console.log(request.headers.cookie)
      handlers.homepage(request, response);
      };
    }
   else if (url.startsWith("/public")) {

    handlers.handler(request, response);
  } else if (url === "/getMeme") {
    handlers.memeTag(request, response);
  } else if (url === "/insertMeme") {
    handlers.uploadMeme(request, response);
  } else if (url === "/logmein") {
    handlers.loginMeme(request, response);
  } else if (url === "/logmeout") {
    handlers.logmeout(request, response);
  } else {
    response.writeHead(404);
    response.end("SORRY, PAGE NOT FOUND!");
  }
}
module.exports = router;
