import logo from "./logo.svg";
import "./App.css";
import "./components/Sidebar"; //1
import "./components/Reviews"; //2
import "./components/Average"; //3
import "./components/Sentiment"; //4
import "./components/Website"; //5
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Average from "./components/Average";
import Sentiment from "./components/Sentiment";
import Website from "./components/Website";

function App() {
  return (
    <>
      <Sidebar />
      <Reviews />
      <Average />
      <Sentiment />
      <Website />
    </>
  );
}

export default App;
