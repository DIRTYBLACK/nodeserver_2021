const myServer = require('./MyServer');
const myRouter = require('./MyRouter');
const myHandeler = require('./MyHandler');

let handel = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;

myServer.start(myRouter.route, handle);