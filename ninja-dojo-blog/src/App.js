import logo from "./logo.svg";
import Sample from "./components/Sample";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Sample />
    </div>
  );
}

export default App;
