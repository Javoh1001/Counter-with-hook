import './App.css';
import React, {useState} from 'react';


function App() {
  const [count,setCount] = useState(0)
  
  function Incr(){
    setCount(count + 1)
  }
  function Decr(){
    setCount(count === 0 ? 0: count - 1)
  }
  return (
    <div className="counter">
      <div>
        <h3>Count: {count} </h3>
      </div>
      <div className="button">
      <button onClick={Incr} className="btn btn-success me-4">Increment +</button>
      <button onClick={Decr} className="btn btn-danger">Decrement -</button>
      </div>

    </div>
  );
}

export default App;
