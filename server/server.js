var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

// Express Server Config
app.set('port', process.env.PORT || 5005);

app.listen(app.get('port'), function () {
  var meta = module.exports = require('./../package.json');
    meta.banner  = '\n> ExpressJSBoilerplate : ' + meta.version;
    meta.banner += '\n> -------------------------------------------------- ';
    meta.banner += '\n> ' + meta.description;
    meta.banner += '\n> Running on localhost:' + app.get('port') + '\n';
    
  console.log(meta.banner);
});