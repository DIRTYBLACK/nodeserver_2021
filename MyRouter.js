function route(pathname) {
    console.log('Routing request for' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }
    else{
        console.log('404 Not found' + pathname);
        let Body = '404 Not Found'
        res.writeHead(404, {'content-Type': 'text/html'});
        res.write(Body);
        res.end();
    }
}

exports.route = route;