function middleware(req, res) {
    const body = 'hello world';
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
    })
    res.write(body)
    res.end(() => {
        console.log('响应流已结束')
    })
}