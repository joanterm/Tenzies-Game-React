import './App.css';
import Die from './Components/Die';

function App() {

  const allNewDice = () => {
    const randomNumber = Math.floor(Math.random() * (7-1) + 1)
    const randomArray = randomNumber.split('')
    console.log(randomArray)
  }


  return (
    <div>
      <h1>Tenzies game</h1>
      <main>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <button onClick={allNewDice}>TEST</button>
      </main>
    </div>
  )
}

export default App;
