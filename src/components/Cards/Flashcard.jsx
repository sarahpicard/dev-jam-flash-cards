const Flashcard = ({ random, random2, numbers }) => {
  return (
    <div className="container mx-auto bg-orange-200 h-96 w-1/5 mt-12 rounded-2xl shadow-lg">
      <p>{numbers[random]}</p>
      <p>{numbers[random2]}</p>
    </div>
  )
}

export default Flashcard