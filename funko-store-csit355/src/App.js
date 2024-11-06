import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/index'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>  
        <Route />
        <Route />
        <Route />
      </Route>
    </Routes>
    
  );
}

export default App;
