import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React ,{useEffect} from 'react';
import Home from './Components/Home';

import Header from './Components/Elements/Header';
import Footer from './Components/Elements/Footer';
import About from './Components/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route>
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
