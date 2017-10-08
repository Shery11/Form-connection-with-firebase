const express = require('express');


const app = express();



// Point static path to dist
app.use(express.static(__dirname + '/public'));




app.listen(3000,function(){
	console.log('Server listening at port 3000');
})