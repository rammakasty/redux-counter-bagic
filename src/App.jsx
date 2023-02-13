import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const data = useSelector((state) => {
        return state;
    });

    console.log('data', data);

    return <div>redux</div>;
}

export default App;
