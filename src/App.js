import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./screen/Login";
import Api from "./screen/Api";
import Register from "./screen/Register";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={Login} exact />
          <Route path="/api" component={Api} />
          <Route path="/" component={Register} exact />
          <Route path="/about" component={About} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
