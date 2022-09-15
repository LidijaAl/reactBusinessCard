import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./style.css";

export default function App() {
  return (
    <div className="body-container">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
