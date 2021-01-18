import './App.css';

import React,{useState,useEffect} from 'react';

import DataTable from './Components/DataTable';
import FilterFields from './Components/FilterFields';
import InputFields from './Components/InputFields';

function App() {
 

  return (
    <div className="App">
      <InputFields/>
      <DataTable/>
    </div>
  );
}

export default App;
