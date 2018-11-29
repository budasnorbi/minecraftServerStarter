import createElement from './createElement';
import registerOnline from './registerOnline';
import registerOffline from './registerOffline';


import socket from './utilities/socket';
import {setOnline, setOffline, setLoading} from './utilities/loader';

const css = require('../css/main.scss');

(function(){   
    createElement();

    socket.on('connect',()=>{
        // R E Q U E S T
        socket.on('connectApp', serverState =>{ registerOnline(serverState) }); 
        socket.on('disconnectApp', ()=>{ registerOffline() });

        // R E S P O N S E

        // Server response after the server is finished to load
        socket.on('serverIsLoaded', ()=>{ setOnline() })

        // Server response after the server is launched
        socket.on('serverIsLoading', ()=>{ setLoading()});

        // Server response after stop the server
        socket.on('stop-server', ()=>{ setOffline()} )
    });

})();
