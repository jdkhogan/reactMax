import React, { useState } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Results from './components/Results';

import logo from './assets/investment-calculator-logo.png';


function App() {
    const [yearlyData, setYearlyData] = useState([]);
    const buildResults = calculatedData => setYearlyData(calculatedData);
    const resetForm = () => setYearlyData([]);

    return (
        <div>
            <Header />

            <Calculator yearlyData={yearlyData} onCalculate={buildResults} onReset={resetForm}/>

            {yearlyData.length === 0 ? 
                <p style={{textAlign: "center"}}>No investment data available.</p> : 
                <Results data={yearlyData} />
            }
        </div>
    );
}

export default App;
