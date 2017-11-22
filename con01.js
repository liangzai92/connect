const http = require('http');
const connect = require('connect');


const app = connect();


// respond to all requests
app.use(function(req, res) {
    res.end('Hello from Connect!\n');
});


// regular middleware
app.use(function(req, res, next) {
    // i had an error
    next(new Error('boom!'));
});


// error middleware for errors that occurred in middleware
// declared before this
app.use(function onerror(err, req, res, next) {
    // an error occurred!
});


//create node.js http server and listen on port
http.createServer(app).listen(4001);