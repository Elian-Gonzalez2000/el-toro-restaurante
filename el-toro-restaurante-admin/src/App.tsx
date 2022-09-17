import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Login from "./pages/Login";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
