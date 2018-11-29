import Element from './utilities/elementManager';
import State from './utilities/elementState';

import {setOffline, setLoading} from './utilities/loader';
import socket from './utilities/socket';

export default function registerBtn(){

    const btn = Element.get('startstop');

    btn.removeEventListener('click',onClick);
    btn.addEventListener('click',onClick);
    
    function onClick(){
        const status = State.get('status');
        if(status == 'online'){ 
            socket.emit('stop-server');
        } else if(status == 'offline'){
            socket.emit('start-server');
        }
    }

}
