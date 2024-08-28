// Declare Command
declare var require:any;

// require library
const http = require('http');
const url = require('url');

let Student = {
    user : "a",
    age : '10',
    url : null
}

const server = http.createServer((req,res)=>{
    let result = apiService(req,res);
    console.log('Create Server : ');
    res.end(result); 
});





function apiService(req,res){
    if(req.method === 'GET'){
        if(req.url.indexOf('?') === 1){
            let param = req.url.split('?');
            Student.url = param;
            console.log('url : ',param[param.length-1]);
            return JSON.stringify(Student);
        }
      
    }
    return JSON.stringify({ User : 'Bun' });
}

server.listen(3000);

