import Flashcard from "../components/Cards/Flashcard"
import { useState } from "react"

const Home = ({ numbers }) => {
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')

  const random = Math.floor(Math.random() * (numbers.length))
  const random2 = Math.floor(Math.random() * (numbers.length))

  return (
    <div>
      <h1 className="text-center text-4xl pt-7">Dev Jam Flashcards</h1>
      <Flashcard random={random} random2={random2} numbers={numbers}/>
    </div>
  )
}

export default Home