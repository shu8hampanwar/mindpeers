import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Happy from "./assets/Happy.svg";
import Sad from "./assets/Sad.svg";
import Angry from "./assets/Angry.svg";
import Nav from "./components/Nav";

const moodsArray = [
  "Serene",
  "Fulfilled",
  "Relieved",
  "Grateful",
  "Content",
  "In Grief",
  "Compassionate",
];

const iconsArray = [
  { id: 1, image: Happy, title: "Joyful" },
  { id: 2, image: Sad, title: "Sad" },
  { id: 3, image: Angry, title: "Angry" },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <Main iconsArray={iconsArray} />

      <Footer moodsArray={moodsArray} />
    </div>
  );
}

export default App;
