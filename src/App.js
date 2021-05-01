import './App.css';
import Home from './components/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
