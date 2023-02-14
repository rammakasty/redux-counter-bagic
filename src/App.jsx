import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    console.log('counter -> ', counter.number);

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <button>+</button>
        </>
    );
}

export default App;
