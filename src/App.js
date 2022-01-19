import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      NCS
      <Header></Header>
      <Navigation></Navigation>
      {/* <Projects></Projects> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
