import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import TodoStatus from './components/TodoStatus/TodoStatus';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route exact path="/home">
                 <Home></Home>
              </Route>
              <Route exact path ={"/home/:statusId"}>
                  <TodoStatus></TodoStatus>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
