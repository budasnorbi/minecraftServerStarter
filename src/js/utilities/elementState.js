const elementState = (props) => {
    const _data = new Map();

    if (props !== undefined) {
        for (let arr of Object.entries(props)) {
            _data.set(arr[0], arr[1]);
        }
    }

    return {
        set: (props) => {
            for (let arr of Object.entries(props)) {
                _data.set(arr[0], arr[1]);
            }
        },
        get: propName => _data.get(propName),
        delete: (propName) => {
            _data.delete(propName)
        },
        has: propName => _data.has(propName),
        fetch: () => {
            console.log(_data)
        }
    };
}

export default elementState();