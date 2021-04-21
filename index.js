const myServer = require('./MyServer');
const myRouter = require('./MyRouter');
const myHandeler = require('./MyHandeler');

let handel = {};
handel['/'] = myHandeler.start;
handel['/hello'] = myHandeler.hello;

myServer.start(myRouter.route, handel);