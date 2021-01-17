import Header from "./components/header/header";
import Intro from "./components/introduction/intro";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
