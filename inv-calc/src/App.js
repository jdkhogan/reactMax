import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Results from './components/Results';

function App() {
  const [yearlyData,setYearlyData] = useState([]);

  return (
    <div>
      <Calculator yearlyData={yearlyData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Results yearlyData={yearlyData} />
    </div>
  );
}

export default App;
