import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/login/login"
import Register from './components/register/register';
import Mainpage from './components/common/mainpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/todo' element={<Mainpage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
