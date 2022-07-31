import { Routes, Route } from "react-router-dom";
import "./App.css";
import Top from "./components/top/Top";
import Rec from './components/top/Recommend/Rec.jsx'
import MV from './components/top/MV/MV.jsx'
import Col from './components/top/Collect/Col.jsx'
import HighTop from './components/top/HighTop/HighTop.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />}>
        <Route path="/recommend" element={<Rec/>}/>
        <Route path="/col" element={<Col/>}/>
        <Route path="/mv" element={<MV/>}/>
        <Route path="/high" element={<HighTop/>}/>
      </Route>    
    </Routes>
  );
}

export default App;
