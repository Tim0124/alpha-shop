
import './App.css';
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import { useState } from 'react';


function App() {
  const [step, setStep] = useState(1)
  function handleNextChange() {
    if (step > 0) {
      setStep(prevStep => prevStep + 1)
    }
  }

  function handlePreviousChange () {
    if (step <= 3) {
      setStep(prevStep => prevStep - 1)
    }
  }

  return (
    <div className="App">
      <Header />
        <Main onStep={step} 
              onNext={handleNextChange} 
              onPrevious={handlePreviousChange}
        />
      <Footer />
    </div>
  );
}

export default App;
