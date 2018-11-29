import Element from './elementManager';
import State from './elementState';

const setOnline = () => {
    const [indicator, heading, btn] = Element.get(['status-indicator','status-heading','startstop']);

    indicator.classList.remove('status__indicator--offline');
    heading.classList.remove('status__heading--offline');

    indicator.classList.add('status__indicator--online');
    heading.classList.add('status__heading--online');

    heading.textContent = 'Server is online';

    btn.removeAttribute('disabled');
    btn.textContent = 'Stop Server';

    Element.append({parent:'container',children:['startstop']});

    document.body.style.cursor = 'default';

    State.set({status:'online'});
}

const setOffline = () => {
    const [indicator, heading, btn] = Element.get(['status-indicator','status-heading','startstop']);

    indicator.classList.remove('status__indicator--online');
    heading.classList.remove('status__heading--online');

    indicator.classList.add('status__indicator--offline');
    heading.classList.add('status__heading--offline');

    heading.textContent = 'Server is offline';

    btn.removeAttribute('disabled');
    btn.textContent = 'Start Server';

    Element.append({parent:'container',children:['startstop']});

    document.body.style.cursor = 'default';

    State.set({status:'offline'});
}

const setLoading = () => {
    const [indicator, heading, btn] = Element.get(['status-indicator','status-heading','startstop']);

    indicator.classList.remove('status__indicator--online');
    heading.classList.remove('status__heading--online');

    indicator.classList.add('status__indicator--offline');
    heading.classList.add('status__heading--offline');

    heading.textContent = 'Server is loading...';
    Element.remove('startstop');
/*     btn.textContent = 'Wait';
    btn.disabled = true; */

    document.body.style.cursor = 'wait';

    State.set({status:'loading'});
}


export {setOnline, setOffline, setLoading};