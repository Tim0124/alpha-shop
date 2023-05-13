
import './App.css';
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1)

  function handleNextStep() {
    setStep(step + 1)
  }

  function handlePreviousStep () {
    setStep(step - 1)
  }

  return (
    <div className="App">
      <Header />
      <Main step={step} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep}/>
      <Footer />
    </div>
  );
}

export default App;
