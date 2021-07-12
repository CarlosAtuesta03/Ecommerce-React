import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Products from './components/products';

function App() {
    return (
        <Router>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                     <a className="navbar-brand" href="#">Navbar-Carlos</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page" >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" aria-current="page" >Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" aria-current="page" >Acerca de</Link>
                            </li>

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/**">
                    <Home />
                </Route>
            </Switch>
        </div>
        </Router>
    );
    
  }
  
  export default App;