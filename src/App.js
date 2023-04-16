import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
      </main>
    </>
  );
}

export default App;
