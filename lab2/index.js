var
express = require(
'express'
);
var
app = express();
app.get('/',function(req,res){res.send('Its over 9000!');
});
app.post('/',function(req,res){res.sendStatus(staus.MEHTOD_NOT_ALLOWED); };
var
port = 9001;
app.listen(port,
function
(){
console.log(
'Listening on port ' 
+ port);
});
