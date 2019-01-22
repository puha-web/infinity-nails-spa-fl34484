import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import Header from './views/Components/Header.jsx';
import Footer from './views/Components/Footer.jsx';


import LandingPage from "views/LandingPage/LandingPage.jsx";
import LocationPage from "views/LocationPage/LocationPage.jsx";
import Coupon from "views/Coupon/Coupon.jsx";
import GiftCard from "views/GiftCard/GiftCard.jsx";
import Promotion from "views/Promotion/Promotion.jsx";
import Gallery from "views/Gallery/Gallery.jsx";
import Services from 'views/Services/Services.jsx';

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
// import SocialMedia from "./views/Components/SocialMedia.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about-us' component={LandingPage} />
      <Route exact path='/location' component={LocationPage} />
      <Route exact path='/coupon' component={Coupon} />
      <Route exact path='/gift-card' component={GiftCard} />
      <Route exact path='/promotion' component={Promotion} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/service' component={Services} />
    </Switch>
    {/* <SocialMedia /> */}
    <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
