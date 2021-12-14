import { useState } from 'react';
import './App.css';
import Die from './Components/Die';
//NANOID -> NPM PACKAGE TO GENERATE RANDOM ID FOR KEY PROPERTY PURPOSES
import { nanoid } from 'nanoid'

function App() {

  //CREATES AN ARRAY OF OBJECTS OF 10 RANDOM NUMBERS B/N 1-6
  const allNewDice = () => {
    const randomArray = [];
    for (let i=0; i<10; i++) {
      randomArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid()
      })
    }
    return randomArray
  }
  console.log(allNewDice())

  const [die, setDie] = useState(allNewDice)

  const rollDice = () => {
    setDie(allNewDice())
  }

  const holdDice = (diceId) => {
    //IF THE DIE IS PRESSED, NOW ITS STATUS WILL CHANGE TO OPPOSITE OF ISHELD
    setDie((prev) => {
      return prev.map((e) => {
        console.log(e.id === diceId ? {...e, isHeld: !e.isHeld} : e)
        return e.id === diceId ? {...e, isHeld: !e.isHeld} : e
      })
    })
  }

    //WILL DISPLAY EACH VALUE FROM THE ARRAY IN EACH DIE COMPONENT (VALUE PASSED DOWN AS PROPS)
    const dieElement = die.map((e) => {
      return <Die value={e.value} isHeld={e.isHeld} key={e.id} holdDice={() => holdDice(e.id)}/>
    })

  return (
    <div>
      <h1>Tenzies game</h1>
      <main>
        {dieElement}
      </main>
      <button className="roll--btn" onClick={rollDice}>Roll</button>
    </div>
  )
}

export default App;
