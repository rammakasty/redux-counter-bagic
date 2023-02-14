import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PLUS_ONE } from './redux/modules/counter';
import { MINUS_ONE } from './redux/modules/counter';

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
                    dispatch({
                        type: PLUS_ONE,
                    });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: MINUS_ONE,
                    });
                }}
            >
                -
            </button>
        </>
    );
}

export default App;
