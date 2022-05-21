import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Proposal from "./views/Proposal/Proposal";

function App() {
  return (
    <div className="App min-h-full bg-gray-200">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/proposal" element={<Proposal />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
