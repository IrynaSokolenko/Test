var express = require('express');
var path = require('path');
var app = express();
var response = [{
	"day":"Monday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]

},{
	"day":"Tuesday",
	"purchases": [{
		"productName":"Dress",
		"storeName": "Zara",
		"description": "Long black",
		"price": "1999.99"
	}]
}, {
	"day":"Wednesday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]
}, {
	"day":"Thursday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]
}, {
	"day":"Friday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]
},{
	"day":"Saturday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]
}, {
	"day":"Sunday",
	"purchases": [{
		"productName":"Batteries",
		"storeName": "Wellmart",
		"description": "Duracell",
		"price": "9.99"
	}]
}
];

app.use(express.static(path.join(__dirname, "data"))); 

app.get('/', function (req, res) {
  res.send(response);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})