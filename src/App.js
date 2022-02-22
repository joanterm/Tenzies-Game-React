import { useEffect, useState } from 'react';
import './App.css';
import Die from './Components/Die';
//NANOID -> NPM PACKAGE TO GENERATE RANDOM ID FOR KEY PROPERTY PURPOSES
import { nanoid } from 'nanoid'
//CONFETTI -> NPM PACKAGE
import Confetti from 'react-confetti'

function App() {

  // CREATES AN ARRAY OF OBJECTS OF 10 RANDOM NUMBERS B/N 1-6
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
  const [tenzies, setTenzies] = useState(false)

  const rollDice = () => {
    // IF THE DIE IS ROLLED AND ISHELD STATUS IS TRUE, IT WILL HOLD THAT DIE OR ELSE RETURN RANDOM DIE
    setDie((prev) => {
      return prev.map((e) => {
        return e.isHeld ? e : {
          value: Math.floor(Math.random() * 6 + 1),
          isHeld: false,
          id: nanoid()
        }
      })
    })
  }
    //WILL DISPLAY EACH VALUE FROM THE ARRAY IN EACH DIE COMPONENT (VALUE PASSED DOWN AS PROPS)
    const dieElement = die.map((e) => {
    return <Die value={e.value} isHeld={e.isHeld} key={e.id} holdDice={() => holdDice(e.id)}/>
  })

  const holdDice = (diceId) => {
    //IF THE DIE IS PRESSED, NOW ITS STATUS WILL CHANGE TO OPPOSITE OF ISHELD
    setDie((prev) => {
      return prev.map((e) => {
        // console.log(e.id === diceId ? {...e, isHeld: !e.isHeld} : e)
        return e.id === diceId ? {...e, isHeld: !e.isHeld} : e
      })
    })
  }

  const newGame = () => {
    setTenzies(false)
    setDie(allNewDice)
  }

    //IF ALL DICE ARE ROLLED AND ISHELD IS TRUE FOR EVERY AND VALUES ARE THE SAME, IT WILL END GAME
    useEffect(() => {
      const allHeld = die.every((e) => {
        return e.isHeld 
      })
      const firstValue = die[0].value
      const allSameValue = die.every((e) => {
        return e.value === firstValue
      })
      if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("won")
      }
    }, [die])

  return (
    <div className="content">
      <h1>Tenzies game</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <main>
        {dieElement}
      </main>
      {tenzies ? <button className="roll--btn" onClick={newGame}>New Game</button> : <button className="roll--btn" onClick={rollDice}>Roll</button>} 
      {/* OR:
      <button className="roll--btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button> */}
      {tenzies ? <Confetti /> : ""}
    </div>
  )
}

export default App;
