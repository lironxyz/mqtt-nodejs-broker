var mosca = require('mosca');
var settings  = { port:1883 }

var server = new mosca.Server(settings);

server.on("ready", function () {
    console.log("server is ready");

    server.subscribe('myTopic', function(){}, function () {
        console.log('done');
    })
})

server.subscribe('echo', function(topic, message) {

    var messageString = message.toString()
    console.log(messageString)

});


