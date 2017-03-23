var express = require('express');
var app = express();
app.get('/', function(req, res) {
   res.sendfile('./index.html');
});
app.use('/dist', express.static('dist'));
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});