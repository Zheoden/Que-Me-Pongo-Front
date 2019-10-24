var express = require('express');
var server = express();
var options = {
  index: 'index.html'
};

server.use('/', express.static('/home/site/wwwroot', options));
server.listen(parseInt(process.env.PORT), '0.0.0.0');