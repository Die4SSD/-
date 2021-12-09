const http = require('http');
const { isAbsolute } = require('path/posix');
const url = require('url')

http.createServer(function(req,res) {
    let urlParts = url.parse(req.url)
    console.log(urlParts.pathname);
    if (req.method == 'GET') {
        switch (urlParts.pathname) {
            case '/':
                homepage(req,res)
                break;
            case '/about':
                about(req,res)
                break;
            default:
                page404(req,res)
                break;    
        }
    }
    else if (req.method == 'POST') {
        switch (urlParts.pathname) {
            case '/about':
                about2(req,res)
                break;
            default:
                    page404(req,res)
                    break; 
    }
}
else {
    page404(req,res)
}

}).listen(3000);
console.log('Server running');

function homepage(req,res) {
    res.end("homepage")
}
function about(req,res) {
    res.end('about')
}
function about2(req,res) {
    res.end('AboutPOST')
}
function page404(req,res) {
    res.end('404')
}