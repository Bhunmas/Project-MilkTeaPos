declare var require:any;

const url = new require('url');

export class ApiService{
   
    Student = {
        user : "a",
        age : '10',
        url : null
    }
    apiService(req:any,res:any){
        if(req.method === 'GET'){
            if(req.url.indexOf('?') === 1){
                let param = req.url.split('?');
                this.Student.url = param;
                console.log('urlfasf : ',param[param.length-1]);
                return JSON.stringify(this.Student);
            }
        
        }
        return JSON.stringify({ User : 'Bun' });
    }
}