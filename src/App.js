
import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [container, container2] = useState(false)
  const [result, setResult] = useState("")

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
    <main className={container ? 'black' : 'white'}>
      <div>
        <div className={container ? 'container2' : 'container'}>
          <div className="switch-checkbox">
            <span style={{ color: container ? ' white' : 'yellow' }}>☀</span>
            <label className="switch">
              <input type="checkbox" onChange={() => container2(!container)} />
              <span className="slider round"></span>
            </label>
            <span style={{ color: container ? '#c95dfd' : 'black' }}>☽</span>
          </div>

          <form>
            <input type="text" value={result} />
          </form>

          <div className="keypad">

            <button className={
              container ? "highlight" : container ? 'black' : 'cambio'
            } onClick={clear} id="clear"></button>
            <button className={
              container ? "highlight" : container ? 'black' : 'red'
            } onClick={backspace} id="borrar"></button>
            <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
            <button id="btn7" name="7" onClick={handleClick}></button>
            <button id="btn8" name="8" onClick={handleClick}></button>
            <button id="btn9" name="9" onClick={handleClick}></button>
            <button className="highlight" name="*" onClick={handleClick}>&times;</button>
            <button id="btn4" name="4" onClick={handleClick}></button>
            <button id="btn5" name="5" onClick={handleClick}></button>
            <button id="btn6" name="6" onClick={handleClick}></button>
            <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
            <button id="btn1" name="1" onClick={handleClick}></button>
            <button id="btn2" name="2" onClick={handleClick}></button>
            <button id="btn3" name="3" onClick={handleClick}></button>
            <button className="highlight" name="+" onClick={handleClick}>+</button>
            <button id="btn0" name="0" onClick={handleClick}></button>
            <button id="btnP" name="." onClick={handleClick}></button>
            <button className="highlight" onClick={calculate} id="result">=</button>
          </div>
        </div>

      </div>

    </main>
  )
}

export default App
