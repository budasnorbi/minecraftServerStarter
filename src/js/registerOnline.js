import Element from './utilities/elementManager';
import {setOnline, setOffline, setLoading} from './utilities/loader';
import registerBtn from './registerBtn';

export default function registerOnline(status){
    Element.append({
        parent:'container',
        children:[
            {parent:'status-container', children:['status-indicator','status-heading']},
            'startstop'
        ]
    });

    if(status == 'online'){
        setOnline()
    } else if(status == 'offline'){
        setOffline();
    } else {
        setLoading();
    }

    registerBtn();
          
    document.body.append(Element.get('container'));
}