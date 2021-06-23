import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello from "./components/hello";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Route path="/" component={Hello} />
      </main>
    </Router>
  );
}

export default App;
