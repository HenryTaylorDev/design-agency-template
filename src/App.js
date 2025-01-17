import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import "./styles/main.scss";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
