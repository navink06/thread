import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Form1 from './Form1';
import Data from './Data';

function App() {
  return (
    <div>
      <div>
      
       
<BrowserRouter>
       <Routes>
        <Route path='/' element={<Form1></Form1>}></Route>
        <Route path='Form' element={<Form></Form>}></Route>
        <Route path='Data' element={<Data></Data>}></Route>
       </Routes>
</BrowserRouter>
      
     
      </div>
      
    
    </div>
  );
}

export default App;
