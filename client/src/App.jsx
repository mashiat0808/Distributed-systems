import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Signup from "./pages/signup";
import Login from "./pages/login";


function App() {
  return (
    <div className="App">
     <Router>
      <Link to="/"> Homepage</Link>
      <Link to="/createpost"> Create A post</Link>
      <Link to="/signup"> Signup</Link>
      <Link to='/login'> Login</Link>
     
      
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      

      </Routes>
     </Router>
    </div>
  );
}

export default App;