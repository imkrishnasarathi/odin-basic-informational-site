const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const html = fs.readFileSync('index.html');
        res.end(html);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const html = fs.readFileSync('about.html');
        res.end(html);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const html = fs.readFileSync('contact-me.html');
        res.end(html);
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        const html = fs.readFileSync('404.html');
        res.end(html);
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});