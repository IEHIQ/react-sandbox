import './App.css';
import DateSelector from './test-comps/DateSelector/DateSelector';
import RadioSelector from './test-comps/RadioSelector/RadioSelector';
import Todo from './todo/Todo';

function App() {
    return (
        <div className="App">
            <div className='component-container'>
                <RadioSelector />
            </div>
        </div>
    );
}

export default App;
