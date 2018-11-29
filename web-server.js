const 
    spawn = require('child_process').spawn,
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

var mcServerProcess, loadingCounter;

app.use(express.static(__dirname + '/dist'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/dist/index.html');
});

io.on('connection',(socket)=>{
    
    // After connecting the socket
    socket.emit('connectApp', mcServerProcess ? 'online' : 'offline');

    socket.on('start-server',()=>{
        runMcServer(socket);
    })

    socket.on('stop-server',()=>{
        stopMcServer(socket);
    });

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })

});

http.listen(3030,()=>{
    console.log('web server listening on *:3030');
});

function runMcServer(socket){
    mcServerProcess = spawn('sh',['./mc/ServerStart.sh']);

    socket.emit('serverIsLoading');
    socket.broadcast.emit('serverIsLoading');
    
    function log(data){
        var row = data.toString();
        process.stdout.write(row);

        if(row.includes('[Minecraft] Done')){
            //Server is online

            socket.emit('serverIsLoaded');
            socket.broadcast.emit('serverIsLoaded');
        }
    }
    
    mcServerProcess.stdout.on('data', log);
    mcServerProcess.stderr.on('data', log);
}

function stopMcServer(socket){
    mcServerProcess.stdin.write('stop'+'\n');

    socket.emit('stop-server');
    socket.broadcast.emit('stop-server');
}

