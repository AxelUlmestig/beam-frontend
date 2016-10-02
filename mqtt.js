var host = Constants.HOST;
var port = Constants.PORT;
var outputTopic = Constants.OUTPUT_TOPIC;
var inputTopic = Constants.INPUT_TOPIC;

// Create a client instance
var id = Math.random() * Math.pow(10, 17);
client = new Paho.MQTT.Client(host, Number(port), id.toString());

// set callback handlers
client.onConnectionLost = onConnectionLost;
//client.onMessageArrived = onMessageArrived;

function onConnect() {
        client.subscribe(inputTopic);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:"+responseObject.errorMessage);
        }
        client.connect({onSuccess:onConnect});
}

// called when a message arrives
function onMessageArrived(message) {
        console.log(message.payloadString);
}

function sendCoordsMqtt(x, y) {
        var message = JSON.stringify({
                lat: x,
                lon: y
        });
        message = new Paho.MQTT.Message(message);
        //message = new Paho.MQTT.Message(x + " " + y);
        message.destinationName = outputTopic;
        client.send(message);
}

// connect the client
client.connect({onSuccess:onConnect});
