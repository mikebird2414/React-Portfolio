import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import GraphicDesign from "./pages/GraphicDesign";
import IndigoBall from "./pages/IndigoBall";
import HyperMock from "./pages/HyperMock";
import OtherLogos from "./pages/OtherLogos";
import OtherPrints from "./pages/OtherPrints";
import ScrollToTop from "./components/ScrollToTop";
import GDNav from "./components/GDNav";
import Posts from "./pages/Posts";
import MobileNav from "./components/MobileNav";
import NotFound from './pages/NotFound';
import TopScrollBar from './components/TopScrollBar';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/graphic-design">
            <GraphicDesign />
          </Route>
          <Route exact path="/graphic-design/indigo-ball">
            <IndigoBall />
            <GDNav />
            <TopScrollBar />
          </Route>
          <Route exact path="/graphic-design/hypermock">
            <HyperMock />
            <GDNav />
            <TopScrollBar />
          </Route>
          <Route exact path="/graphic-design/other-logos">
            <OtherLogos />
            <GDNav />
            <TopScrollBar />
          </Route>
          <Route exact path="/graphic-design/other-prints">
            <OtherPrints />
            <GDNav />
            <TopScrollBar />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
      <MobileNav />
    </Router>
  );
}

export default App;
