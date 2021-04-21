const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;
const baseUrl = 'http://' + hostname + ':' + 8000; 

function start(route) {
    function onRequest(req, res){
        let sBody = 'Hello, world! <br> I am in the cloud class.';

        console.log('Request receive.');
        pathname = new url.URL(req.url, baseUrl).pathname;
        route(pathname);
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname)
    console.log('server is running at' + baseUrl);
}

exports.start = start;