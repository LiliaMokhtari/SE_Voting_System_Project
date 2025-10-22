const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 5173;

const mime = {
  '.html':'text/html',
  '.js':'application/javascript',
  '.css':'text/css',
  '.svg':'image/svg+xml',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg',
  '.json':'application/json',
  '.txt':'text/plain'
};

http.createServer((req,res)=>{
  let safePath = req.url.split('?')[0];
  if(safePath === '/') safePath = '/index.html';
  const filePath = path.join(__dirname,'..',decodeURIComponent(safePath));
  const ext = path.extname(filePath).toLowerCase();
  fs.readFile(filePath,(err,data)=>{
    if(err){
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.end('Not found');
      return;
    }
    res.writeHead(200,{'Content-Type':mime[ext] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(port,()=>console.log(`Serving on http://localhost:${port}`));
