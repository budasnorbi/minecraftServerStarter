import Element from './utilities/elementManager';

export default function registerOffline(){
    Element.append({
        parent:'container',
        children:[
            {parent:'status-container', children:['status-indicator','status-heading']}
        ]
    });

    Element.remove('startstop');

    Element.get('status-indicator').classList.add('status__indicator--offline');
    Element.get('status-heading').classList.add('status__heading--offline');
    Element.get('status-heading').textContent = 'Offline';
      
    document.body.append(Element.get('container'));
}