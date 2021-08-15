import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { DeckContextProvider } from "./contexts/DeckContext";
import Nav from "./components/Nav";
import Decks from "./pages/Decks";
import DeckView from "./pages/DeckView";
import StudyMode from "./pages/StudyMode";

function App() {
  return (
    <Router>
      <DeckContextProvider>
        <Nav />
        <div className="">
          <Route exact path="/" component={Decks} />
          <Route exact path="/deck-view" component={DeckView} />
          <Route path="/deck-view/:id" component={DeckView} />
          <Route exact path="/study-mode" component={StudyMode} />
          <Route path="/study-mode/:id" component={StudyMode} />
        </div>
      </DeckContextProvider>
    </Router>
  );
}

export default App;
