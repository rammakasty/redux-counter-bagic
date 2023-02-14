// action value
const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';
const PLUS_N = 'counter/PLUS_N';

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

export const plusN = (payload) => {
    console.log('payload', payload);
    //   return {
    //      TYPE: PLUS_N,
    //     payload: payload,
    // };
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
        case PLUS_N:
            return {
                number: state.number + action.payload,
            };
        default:
            return state;
    }
};

export default counter;
