import { Fragment } from "react";
import Navigator from "./components/Navigator";
import Offers from "./components/Offers";
import Investment from "./components/Investment";
import Distribution from "./components/Distribution";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Footer from "./components/Footer/footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigator />
        <Routes>
          <Route exact path = "/Offers" element = {<Offers/>}/>
          <Route exact path = "/Investment" element = {<Investment/>}/>
          <Route exact path = "/Distribution" element = {<Distribution/>}/>
          <Route exact path = "/" element = {<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Fragment>
  );
}

const Home = () => {
  return (
    <Fragment>
      <Homepage/>
    </Fragment>
  );

};

export default App;
