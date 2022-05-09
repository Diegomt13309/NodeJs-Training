const http = require('http');
const url = require('url');
const fs = require('fs');

//using /regex/g, to replace in all fields of the html
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

//it gests executed only once whne uou open the page
//load the teamplate first
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
//data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// PARSE from JSON to actual object
const dataObject = JSON.parse(data);




const server = http.createServer((req,res) => {

    const {query, pathname} = url.parse(req.url, true);

    //Overview Page
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const cards = dataObject.map(ele => replaceTemplate(tempCard, ele)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cards);
       res.end(output);
    }else if(pathname === '/product'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const product = dataObject[query.id];
        const output = replaceTemplate(tempProduct,product);
        res.end(output);
    
    }else if(pathname === '/api'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(data);
        //read the date, parse the json and send it to the client
        //we need to read the file once and not every time someone request or access to this route

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

//API: service form which we can request some data.