import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import InputShortener from "./components/InputShortener";
import LinkResult from "./components/LinkResult";

function App() {
const [inputValue, setInputValue] = useState(""); 

  return (
    <div>
      <div className="container h-screen flex flex-col 
      items-center justify-center"> 
        <InputShortener setInputValue={setInputValue}/>
        <BackgroundAnimation />
        <LinkResult inputValue={inputValue}/>
      </div>
    </div>
  );
}

export default App;
