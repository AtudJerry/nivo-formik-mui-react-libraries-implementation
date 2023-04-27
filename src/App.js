import logo from './logo.svg';
import './App.css';
import Datagrid from './Components/Datagrid';
import Signup from './Signup';

import BarChart from './BarChart';
import GeographyChart from './GeographyChart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br><br></br>
        <BarChart/>
        <br></br> <br></br>
        <GeographyChart/>
        <br></br> <br></br>
      <Signup/>
      <br></br><br></br>
      <Datagrid/> 
      <br></br><br></br>
      
      </header>
    </div>
  );
}

export default App;
