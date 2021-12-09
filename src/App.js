import { useState } from 'react';
import './App.css';
import Die from './Components/Die';

function App() {

  const allNewDice = () => {
    //CREATES AN ARRAY OF 10 RANDOM NUMBERS B/N 1-6
    const randomArray = Array.from({length: 10}, () => {
      return Math.floor(Math.random() * 6 + 1)
    }) 
    return randomArray
  }

  const [die, setDie] = useState(allNewDice)

  //WILL DISPLAY EACH VALUE FROM THE ARRAY IN EACH DIE COMPONENT (VALUE PASSED DOWN AS PROPS)
  const dieElement = die.map((e) => {
    return <Die value={e} />
  })

  // const allNewDice = () => {
  //   const randomArray = []
  //   for (let i=0; i<10; i++) {
  //     randomArray.push(Math.floor(Math.random() * (7-1) + 1))
  //   }
  //   return randomArray
  // }
  // console.log(allNewDice())

  return (
    <div>
      <h1>Tenzies game</h1>
      <main>
        {dieElement}
      </main>
    </div>
  )
}

export default App;
