const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS_ONE':
            return {
                number: state.number + 1,
            };
        default:
            return state;
    }
};

export default counter;
