import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
     <Home />
       {/* <About />
      <Blogs />
      <Contact />*/}
      <Footer /> 
    </div>
  );
}

export default App;
