const addEvent = function(getElements, foo, event){
    let elements = getElements();
    for(let elem of elements){
        elem.addEventListener(event, foo);
    }
}

const removeEvent = function(getElements, foo,event){
    let elements = getElements();
    for(let elem of elements){
        elem.removeEventListener(event, foo);
    }
}

export default {
    addEvent,
    removeEvent
};