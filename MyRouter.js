function route(pathname, handle, res) {
    console.log('Routing request for' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res);
    }
    else{
        console.log('404 Not found');        
        res.writeHead(404, {'content-Type': 'text/html'});
        res.write(body);
        res.end();
    }
}

exports.route = route;