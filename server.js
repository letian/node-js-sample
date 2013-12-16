var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Mzeiya!');
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
