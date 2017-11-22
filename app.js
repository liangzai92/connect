const http = require('http')

const Connect = require('./Connect')


const app = new Connect();


var logger = function(req, res, next) {
    console.log(`${req.method} ${req.url}`)
    next()
}


var hello = function(req, res, next) {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    res.write('<h1>hello world</h1>')
        // res.end()
}


app.use(logger)
app.use(hello)


// server
const hostname = '127.0.0.1';
const port = 4001;
const server = http.createServer(app.handle);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});