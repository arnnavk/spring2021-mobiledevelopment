let state = {
    squats: 0,
    pushups: 0
};

function reducer (state, action) {
    switch (action.type) {
        case 'increment1':
            return {squats: state.squats + 1, pushups: state.pushups};
        case 'increment2' :
            return {squats: state.squats, pushups: state.pushups + 1};
        case 'decrement1' :
            return {squats: state.squats - 1, pushups: state.pushups};
        case 'decrement2' :
            return {squats: state.squats, pushups: state.pushups - 1};
        default:
            throw new Error();
    }
}

export {state, reducer};