import "./App.css";
import Header from "./components/Header";
import SubTract from "./components/Subtract";
import Add from "./components/Add";
import Result from "./components/Result";
import Reset from "./components/Reset";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="counter">
          <SubTract counter={counter} setCounter={setCounter} />
          <Result counter={counter} />
          <Add counter={counter} setCounter={setCounter} />
        </div>
        <div>
          <Reset setCounter={setCounter} />
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
