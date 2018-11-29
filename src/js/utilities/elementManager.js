const Element = () => {
    const _elementStorage = new Map();
    const remove = (tagIds) => {
        const storage = _elementStorage;

        const removeChild = child => {
            
            if(storage.get(child) !== undefined){
                const parent = storage.get(child).parentNode;
                parent != null ? parent.removeChild(storage.get(child)) : null;
            }

        };

        if (typeof tagIds === "string") {
            const tagId = tagIds;
            removeChild(tagId);
        }

        if (typeof tagIds === "object") {
            tagIds.forEach(el => {removeChild(el)});
        }
    };

    return {
        get:tagId => {

            function getElement(elementId){
                if(_elementStorage.has(elementId)){
                    return _elementStorage.get(elementId);
                } else {
                    throw `[${elementId}] is not in the storage!`;
                }
            }

            return tagId instanceof Array ?  tagId.map(x => getElement(x)) : getElement(tagId)
        },
        create: (...elementArr) => {
            const storage = _elementStorage;

            const generateElement = (tagId, tagName, props) => {
                if (storage.has(tagId) === false) {
                    const element = document.createElement(tagName);
                    for (var prop in props) element[prop] = props[prop];
                    storage.set(tagId, element);
                } else {
                    throw `[${tagId}] is exist in storage!`;
                }
            }

            elementArr.forEach((el) => {
                generateElement(el[0], el[1], el[2]);
            });

        },

        remove: tagIds => {
            remove(tagIds);
        },

        append: (elementTree) => {
            return function loop(obj) {
                const 
                    childrens = obj.children.map(x => x instanceof Object ? loop(x) : _elementStorage.get(x)),
                    parent = _elementStorage.get(obj.parent);

                parent.append(...childrens);
                return parent;
            }(elementTree)
        },

        fetch: () => {
            console.log(_elementStorage);
        }
    }
}


export default Element();
