import './App.css';
import React, { useState } from "react";
import DatePicker from 'react-multi-date-pickerJay';

function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="App">
      <DatePicker value={value} onChange={setValue} range numberOfMonths={2} />
    </div>
  );
}

export default App;
