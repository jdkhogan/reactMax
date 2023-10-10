import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Results from './components/Results';

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const buildResults = calculatedData => setYearlyData(calculatedData);
  const resetForm = () => setYearlyData([]);

  return (
    <div>
      <Calculator yearlyData={yearlyData} onCalculate={buildResults} onReset={resetForm}/>

      {yearlyData.length === 0 ? 
        <p style={{textAlign: "center"}}>No investment data available.</p> : 
        <Results yearlyData={yearlyData} />
      }
    </div>
  );
}

export default App;
