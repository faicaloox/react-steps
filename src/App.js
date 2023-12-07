import React, { useState } from 'react'
import Counter from './Counter';

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income"
]

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 1 ) {
      setStep((step) => step - 1)
    }
  }

  const handleNext = () => {
    if (step < 3 ) {
      setStep((step) => step + 1)
    }
  }

  const handleOpen = () => {
    setIsOpen((isOpen) => isOpen = !isOpen);
  }

  return (
    <>
    
      <Counter />

      <button onClick={handleOpen} className="close">&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Step {step} : {messages[step - 1]}</p>
          <div className="buttons">
            <button onClick={handlePrev} style={{backgroundColor: "#7950f2", color: "#fff"}}>Previous</button>
            <button onClick={handleNext} style={{backgroundColor: "#7950f2", color: "#fff"}}>Next</button>
          </div>
        </div>
        )
      }
    </>
  )
}

export default App