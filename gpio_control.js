
exports.setLed = function(status) {
	console.log("[setLed] status:" + status);
	const spawn = require("child_process").spawn;
	const pythonProcess = spawn('python',["/home/pi/Desktop/SimpleNodeJSServer/led.py", status]);
}

exports.setMotor = function(position) {
	console.log("[setMotor] position: " + position)
}