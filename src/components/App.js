import React, {useState} from "react";
import "./style.css"


const App = () =>{
    let [calculate, setCalculate] = useState("")

    function handlecalculations(e){
        setCalculate(calculate + e.target.innerText)
        console.log(e.target.innerText)
    }

    function result (){
        try{
        setCalculate(eval(calculate))
    }
    catch(err){
        setCalculate("Invalid Input")
    }
    }

    function clear(){
        setCalculate("")
    }
    

    return(
        <div>
            <div className="calculatorDiv">
            <input className="inputDiv" type="text" value={calculate}/>
            
            <table>
                <tr>
                    <td className="btn" onClick={clear}>C</td>
                    <td className="btn" onClick={handlecalculations}>/</td>
                    <td className="btn" onClick={handlecalculations}>*</td>
                    <td className="btn" onClick={handlecalculations}>-</td>
                </tr>
                <tr>
                    <td className="btn" onClick={handlecalculations}>7</td>
                    <td className="btn" onClick={handlecalculations}>8</td>
                    <td className="btn" onClick={handlecalculations}>9</td>
                    <td rowSpan={2} className="btn" onClick={handlecalculations}>+</td>
                </tr>
                <tr>
                    <td className="btn" onClick={handlecalculations}>4</td>
                    <td className="btn" onClick={handlecalculations}>5</td>
                    <td className="btn" onClick={handlecalculations}>6</td>
                </tr>
                <tr>
                    <td className="btn" onClick={handlecalculations}>1</td>
                    <td className="btn" onClick={handlecalculations}>2</td>
                    <td className="btn" onClick={handlecalculations}>3</td>
                    <td rowSpan={2} className="btn" onClick={result}>=</td>
                </tr>
                <tr>
                    <td className="btn" onClick={handlecalculations}>0</td>
                    <td className="btn" onClick={handlecalculations}>.</td>
                    <td className="btn"></td>
                </tr>
            </table>
            
        </div>

        </div>
    )
}

export default App;