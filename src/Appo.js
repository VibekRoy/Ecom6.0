import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import CreateArea from "./CreateArea";
import Login from "./Login";
import Register from "./Register";
import LoginAd from "./LoginAd";
import Cart from "./Cart";
// import Loc from "./Loc";
// import Login from "./Login";

function Appo(){
    return(
<Router>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
            <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Routes>
            <Route path="/Register" element={<Register />} />
        </Routes>
        <Routes>
            <Route path="/Home" element={<App />} />
        </Routes>
        <Routes>
            <Route path="/Admin" element={<LoginAd />} />
        </Routes> 
        <Routes>
            <Route path="/Adminz" element={<CreateArea />} />
        </Routes>
      </Router>
    );}
export default Appo;
