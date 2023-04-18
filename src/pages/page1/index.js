import { Inter } from 'next/font/google'
import Text from '@components/title/message'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
    <p class="result" style={{fontSize:'100px', textAlign:'center'}}>{result}</p>
    <div>
      
      <input style={{ textAlign:'center', margin:'auto', display:'block'}} type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class="calc" onClick={() => buttonClick("7")}>7</button>
        <button class="calc" onClick={() => buttonClick("8")}>8</button>
        <button class="calc" onClick={() => buttonClick("9")}>9</button>
        <button class="calc" onClick={() => buttonClick("/")}>/</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class="calc" onClick={() => buttonClick("4")}>4</button>
        <button class="calc" onClick={() => buttonClick("5")}>5</button>
        <button class="calc" onClick={() => buttonClick("6")}>6</button>
        <button class="calc" onClick={() => buttonClick("*")}>*</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class="calc" onClick={() => buttonClick("1")}>1</button>
        <button class="calc" onClick={() => buttonClick("2")}>2</button>
        <button class="calc" onClick={() => buttonClick("3")}>3</button>
        <button class="calc" onClick={() => buttonClick("-")}>-</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class="calc" onClick={() => buttonClick("0")}>0</button>
        <button class="calc" onClick={() => buttonClick(".")}>.</button>
        <button class="calc" onClick={() => buttonClick("=")}>=</button>
        <button class="calc" onClick={() => buttonClick("+")}>+</button>
      </div>
      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class="calc" onClick={() => buttonClick("C`")}>Clear</button>
      </div>
      <div>

      </div>
      <br /><br />

      
    </div >
    <a href="../../../page2">Next</a>
    </>
    
  );





}
