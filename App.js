import logo from './logo.svg';
import './App.css';
import Lab from './Practice/MidLab';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import RightSide from './Practice/RightSide';
import { Route,Routes } from 'react-router-dom';
import LiveScore from './Practice/LiveScore';
import QEA from './Practice/QEA';
import Ios from './Practice/Ios';

function App() {
  return (
    <div className="App">
     <Lab/>
     <RightSide/>
     <Routes>

     <Route path='/' element={<LiveScore/>}/>
     <Route path='/QEA' element={<QEA/>}/>
     <Route path='/Ios' element={<Ios/>}/>


     </Routes>
    </div>
  );
}

export default App;
