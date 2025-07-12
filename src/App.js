import logo from './logo.svg';
import './App.css';
import Bar from "./Components/NavBar";
import Button from "./Components/button";
import surfDevin from "./Assests/surfDevin.jpg"

function App() {
  return (
    <div>
      <Bar/>
      <backgroundImg/>
      <img className='background' src={surfDevin}/>
    </div>
  );
}

export default App;
