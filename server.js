var http = require("http");


var PORTA = 7000;
var PORTB = 7500;


function goodRequest(request, response) {
  response.end("You are beautiful!");
}

function badRequest(request, response) {
  response.end("You should go for a run today after eating that cake.");
}

var server = http.createServer(goodRequest);

server.listen(PORTA, function() {
  console.log("Server listening on: http://localhost:%s", PORTA);
});

var server2 = http.createServer(badRequest);

server2.listen(PORTB, function() {
  console.log("Server2 listening on: http://localhost:%s", PORTB);
});
