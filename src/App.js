import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MoleContainer from "./components/MoleContainer";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHills = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div className='hills'>{hills}</div>;
  };

  return (
    <div className="App">
      <h1>Wack-A-Mole!</h1>
      {score}
      {createMoleHills()}
    </div>
  );
}

export default App;
