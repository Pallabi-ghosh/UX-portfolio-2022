import React from "react";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Works from "./pages/works";
import KonsusApp from "./pages/konsusapp";
import JoynApp from "./pages/joynapp";
import TetonApp from "./pages/tetonapp";
import NikeDailyUI from "./pages/nikedailyui";
import FitnessApp from "./pages/fitnessapp";
import Illustration from "./pages/illustration";
import About from "./pages/about";
import MobileApps from "./pages/mobileApps";
import Navbar from "./components/navbar";
import Design from "./pages/design";
import DailyUI from "./pages/dailyUI";
import FreelancingWork from "./pages/freelancingWork";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/konsusapp" component={KonsusApp} />
          <Route path="/joynapp" component={JoynApp} />
          <Route path="/tetonapp" component={TetonApp} />
          <Route path="/nikedailyui" component={NikeDailyUI} />
          <Route path="/fitnessapp" component={FitnessApp} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/mobileApp" component={MobileApps} />
          <Route path="/design" component={Design} />
          <Route path="/dailyUI" component={DailyUI} />
          <Route path="/freelancingWork" component={FreelancingWork} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
