import e from "express"
import { useState } from "react"

const Flashcard = ({ random, random2, numbers }) => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const handleNum1 = () => {
    e.preventDefault()
    setNum1(Math.floor(Math.random() * (numbers.length)))
  }
  const handleNum2 = () => {
    e.preventDefault()
    setNum2(Math.floor(Math.random() * (numbers.length)))
  }

  return (
    <div className="container mx-auto bg-orange-200 h-96 w-1/5 mt-12 rounded-2xl shadow-lg">
      <p>{num1}</p>
      <p>+</p>
      <p>{num2}</p>
      <p></p>
    </div>
  )
}

export default Flashcard