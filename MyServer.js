const http = require('http');
const hostname = 'localhost';
const port = 8000;
const baseUrl = 'httl://' + hostname + ':' + 8000; 

function start() {
    function onRequest(req, res){
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write('Hello world!');
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname)
    console.log('server is running at' + baseUrl);
}

exports.start = start;