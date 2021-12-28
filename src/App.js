import React, { useEffect, useState } from "react";
import Results from "./Results";

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState()

  

const inputHandler = e => {
  setInput(e.target.value)
}

const submitHandler = e => {
  e.preventDefault()
  fetch(`https://api.datamuse.com/words?rel_trg=${input}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
}

  return (
    <div className="App">
      <header>
      <h1>Words</h1>
      <form onSubmit={submitHandler}>
      <input type="text" onChange={inputHandler} placeholder="Type and search anything.."/>
      <button type="submit">Search</button>
      </form>
      </header>
      <Results data={data}/>
    </div>
  );
}

export default App;
