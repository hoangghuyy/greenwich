//defaut port của NodeJS
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) console.log(err);
      else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/hello') {
    fs.readFile('hello.html', (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/greenwich') {
    fs.readFile('greenwich.html', (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write('<h1>$)$ - Not Found</h1>');
    res.end();
  }
});
//listen port cho web server
server.listen(port, () => {
  console.log('server is running at http://localhost:' + port);
});
