import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = (props) =>{
return <h1>{props.number}</h1>
}

const App = (props)=>{
  const [contador, setContador] = useState(13);
  
  console.log("render");
  const handleClick = () => {
    setContador(contador + 1);
  };
  const handleClickReset = () => {
    setContador(0);
  };
  const isEven = contador % 2 === 0;

  return (
      <div>
        <Counter number={contador} />
        <p> {isEven ? "es par" : "es impar"}</p>
        <button 
        onClick = {handleClick}
          
        >
          incrementar
          </button>
          <button 
        onClick = {handleClickReset}>
          incrementar
           </button>
      </div>
  );
  
};

  ReactDOM.render( <App />,  rootElement);