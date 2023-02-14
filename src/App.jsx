import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { plusN } from './redux/modules/counter';
import { minusOne } from './redux/modules/counter';

function App() {
    const [number, setNumber] = useState(0);

    const counter = useSelector((state) => {
        return state.counter;
    });

    // useEffect(() => {
    //     console.log('number -> ' + number);
    // }, [number]);

    // dispatch를 가져오자
    const dispatch = useDispatch();

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(event) => {
                        setNumber(event.target.value);
                    }}
                />
            </div>
            <button
                onClick={() => {
                    ///  dispatch(plusOne());
                    dispatch(plusN(number));
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
