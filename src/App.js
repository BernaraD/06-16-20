import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"


function App() {

    const [count, setCount] = useState(5);

    const add = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }

    const add10 = () => {
        setCount(count + 10)
    }

    const minus10 = () => {
        setCount(count - 10)
    }
    const addRandom = () => {
        setCount(count + Math.ceil(Math.random(1, 10)))
    }
    const minusRandom = () => {
        setCount(count - Math.ceil(Math.random(1, 10)))
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="App">

            <h1>Counter</h1>
            <div><h3>{count}</h3></div>

            <button type="button" className="btn btn-outline-success" onClick={add}>+1</button>
            <button type="button" className="btn btn-outline-success" onClick={minus}>-1</button>
            <div>
                <button type="button" className="btn btn-outline-success" onClick={add10}>+ 10</button>
                <button type="button" className="btn btn-outline-success" onClick={minus10}>- 10</button>
            </div>

            <button type="button" className="btn btn-outline-success" onClick={addRandom}>+ random</button>
            <button type="button" className="btn btn-outline-success" onClick={minusRandom}>- random</button>
            <div>

                <button type="button" className="btn btn-outline-success" onClick={reset}>Reset</button>
            </div>



        </div>
    );
}

export default App;
