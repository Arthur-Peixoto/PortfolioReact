import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home></Home>
        <About></About>
      </main>
    </>
  );
}

export default App;
