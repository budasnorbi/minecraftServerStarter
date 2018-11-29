import Element from './utilities/elementManager';

export default function createElement(){
    Element.create(
        ['container','div',{className:'container'}],
        ['status-container','div',{className:'status'}],
        ['status-indicator','div',{className:'status__indicator'}],
        ['status-heading','h1',{className:'status__heading'}],
        ['startstop','button',{className:'start-stop'}]
    );
}