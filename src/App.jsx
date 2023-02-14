import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { plusOne } from './redux/modules/counter';
import { minusOne } from './redux/modules/counter';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    // dispatch를 가져오자
    const dispatch = useDispatch();

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <button
                onClick={() => {
                    // +1을 해주는 로직을 써주면 된다.
                    // dispatch({
                    //     type: PLUS_ONE,
                    // });
                    dispatch(plusOne());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    //     dispatch({
                    //         type: MINUS_ONE,
                    //     });
                    dispatch(minusOne());
                }}
            >
                -
            </button>
        </>
    );
}

export default App;
