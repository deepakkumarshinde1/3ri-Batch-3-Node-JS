// native
const http = require("http");

///          request
/// server <========= client
/// server =========> client
///          response

let server = http.createServer(function (request, response) {
  if (request.url !== "/favicon.ico") {
    switch (request.url) {
      case "/":
        response.write("Home Page");
        break;

      case "/about":
        response.write("About Us");
        break;

      case "/contact-us":
        response.write("Contact Us");
        break;

      default:
        response.write("Page Not Found");
        break;
    }
    response.end();
  }
});

// port number
server.listen(3002, function () {
  console.log("server is started on port 3002");
});
