const http = require('http');
const fs = require('fs')
const port = 8080;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader = ('Content-Type','Text/HTML');
    let path = 'NBAD/AssignmentNodeJS/views/'

    if(req.url === '/'){
        path = path + 'index.html'
    }
    else if(req.url === '/about'){
        path = path + 'about.html'
    }
    else if(req.url === '/contact'){
        path = path + 'contact.html'
    }
    else{
        path = path + '404.html'
    };

    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    });
});


server.listen(port,hostname, ()=>{
    console.log('The server is running on the port', port);
});