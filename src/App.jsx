import React from 'react';
import Login from './components/login';
import Principal from './components/principal.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Principal/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
