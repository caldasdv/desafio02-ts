import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={ <Home/>}/>
        <Route path = '/conta' element={
          <h1>Conta</h1>
        }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
