var http = require('http'); // Importing the http package
var fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url === '/') {
    fs.readFile('home.html', (err, data) => {
      res.end(data.toString());
    })
  }

  else if(req.url === '/login.html') {
    fs.readFile('login.html', (err, data) => {
        res.end(data.toString());
      })
    }
    else if(req.url === '/signup.html') {
        fs.readFile('signup.html', (err, data) => {
            res.end(data.toString());
          })
        }
        else if(req.url === '/contact.html') {
            fs.readFile('contact.html', (err, data) => {
                res.end(data.toString());
              })
            }
   else {
    res.end("<h1>Error 404 Page not Found</h1>")
  }
}).listen(process.env.PORT || 5000);