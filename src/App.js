import './App.css';
import Introduction from './component/Introduction';
import Navber from './component/Navber';
import Projects from './component/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navber title="PortFolio" main="Introduction" tab="Projects"/>
    <Routes>
      <Route path='/' element={<Introduction/>} />
      <Route path='Projects' element={<Projects/>}/>
    </Routes>
  
    

    </>
  );
}

export default App;
