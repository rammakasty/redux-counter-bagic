// action value
export const PLUS_ONE = 'PLUS_ONE';
export const MINUS_ONE = 'counter/MINUS_ONE';

// action creator : action value를 return하는 함수
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
};

export default counter;
