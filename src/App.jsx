import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    console.log('counter', counter);

    return <div>redux</div>;
}

export default App;
