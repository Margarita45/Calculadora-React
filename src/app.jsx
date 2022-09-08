
import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [container, container2] = useState(false)
  const [result, setResult] = useState("")
  const [body, body2] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, - 1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error")
    }

  }

  return (
    <main className={container ? 'white':'black' }>
      {/* <div className="container"> */}
      <div className={container ? 'container' : 'container2'}>
        <div className="switch-checkbox">
          <span style={{ color: container ? ' yellow' : 'white' }}>☀</span>
          <label className="switch">
            <input type="checkbox" onChange={() => container2(!container) + body(!body2)} />
            <span className="slider round"></span>
          </label>
          <span style={{ color: container ? 'black' : '#c95dfd' }}>☽</span>
        </div>

        <form>
          <input type="text" value={result} />
        </form>




        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="borrar">C</button>
          <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
          <button className={container ? 'white':'black' } name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="highlight" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="highlight" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="highlight" onClick={calculate} id="result">=</button>


        </div>

      </div>

    </main>
  )
}

export default App
