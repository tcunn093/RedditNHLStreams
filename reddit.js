
var http = require("http");

var options = {
  host: 'www.reddit.com',
  port: 80,
  path: '/r/NHLStreams'
};

var request = http.request(options, function (res) {

    var data = '';
    
    res.on('data', function (chunk) {
        data += chunk;
    });

    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();