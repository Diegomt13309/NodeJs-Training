const http = require('http');
const url = require('url');

const { Http2ServerRequest } = require('http2');

const server = http.createServer((req,res) => {
    console.log(req.url);
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW');
    }else if(pathName === '/product'){
        res.end('This is the PRODUCT');
    }else{
        res.writeHead(404, {
            //header piece of information about the response we are sending back
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>This page could not be found</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});