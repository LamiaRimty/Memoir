import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/> }/>
        
      </Routes>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
