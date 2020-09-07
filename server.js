// Example call to another file
var gpio = require("./gpio_control.js");

var file_loader = require("fs");
var url_parser = require("url");

const server = require("http").createServer(requestListener);
server.listen(8080);

function requestListener(req, res) {
	
	function displayError() {
		res.setHeader("Content-Type", "application/json");
		res.writeHead(404);
		res.end("Error 404 - Page not found");
	}
	
	function loadPage(path) {
		file_loader.readFile(__dirname + path, function(err, data) {
			if (err) {
				displayError();
			} else{ 
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data); 
				return res.end();
			}
		});
	}
	
	var url = url_parser.parse(req.url, true);
	var parameters = url.query;
	
	// Switch by html page
    switch (url.pathname) {
        case "/led":
			loadPage("/led.html");
			
			if("status" in parameters){
				gpio.setLed(parameters["status"]);
			}
            break;
			
        case "/motor":
			loadPage("/motor.html");
			
			if("position" in parameters){
				gpio.setMotor(parameters["position"]);
			}
            break;
			
		default:
			displayError(res);
			break;
    }
}



