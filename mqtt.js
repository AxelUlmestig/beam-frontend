var host = "broker.mqttdashboard.com";
var port = 8000;

var outputTopic = "topic1";
var inputTopic = "topic2";

// Create a client instance
client = new Paho.MQTT.Client(host, Number(port), "clientId");

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
        message = new Paho.MQTT.Message(x + " " + y);
        message.destinationName = outputTopic;
        client.send(message);
}

// connect the client
client.connect({onSuccess:onConnect});
