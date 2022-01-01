import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import About from "./pages/About";
import Form from "./pages/Form";
import Home from "./pages/Home";
import ShowForm from "./pages/ShowForm";
import dogApi from "./pages/DogApi";
import { TableStyled } from "./styles/Table.styled";

function App() {
  return (
    <TableStyled className="App">
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/showform">Show Form</Link>
              </li>
              <li>
                <Link to="/dogapi">Dog Api</Link>
              </li>
              
            </ul>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/form" component={Form} />
              <Route path="/showform" component={ShowForm} />
              <Route path="/dogapi" component={dogApi} />
            </Switch>
          </nav>
        </Router>
      </div>
    </TableStyled>
  );
}

export default App;
