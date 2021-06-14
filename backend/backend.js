const http = require('http');
let choices;
let name;
//headers to prevent CORS error
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": 'text/csv'
};

//creating the server for messages
http.createServer(function (req, res) {
    if (req.method === "OPTIONS") {
        res.writeHead(204, headers);
        res.end();
        return;
    }
    //if this is telling that data needs to be saved
    if (req.headers.authorization==='Choices'){
        res.writeHead(200, headers);
        name=req.headers.Name;
        choices=req.header.Choices;

        return;
    }

    //check the password hash
    if(req.headers.authorization==="Results"){
        res.writeHead(200, headers);
        let plainPassword=req.headers.password;
        bcrypt.compare(plainPassword, originalHash, function(err, result) {
            if(result===true){
                res.end("true");
                console.log("Authorized")
            }
            else{
                res.end("false")
            }
        });
        return;
    }

    console.log('nothing 8080')

}).listen(8080);