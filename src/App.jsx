import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    // dispatch를 가져오자
    const dispatch = useDispatch((state) => {
        return state.counter;
    });

    console.log('counter -> ', counter.number);

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <button
                onClick={() => {
                    dispatch({
                        type: 'PLUS_ONE',
                    });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MINUS_ONE',
                    });
                }}
            >
                -
            </button>
        </>
    );
}

export default App;
