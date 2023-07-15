import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
