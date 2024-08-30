// // Declare Command
declare var require:any;

// // require library
const http = new require('http');


// import module
import  { ApiService }   from './Service/api';
const apiService:ApiService = new ApiService();

function init(){
    const server = http.createServer((req:any,res:any)=>{
        const result = apiService.apiService(req,res);
        console.log('Create Server : ');
        res.end(result); 
    });
    server.listen(3000);
    
    console.log('show : ')
}

init();













