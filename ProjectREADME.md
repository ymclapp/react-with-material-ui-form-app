
##  Dependencies:
1.  React
    -  React-Dom will load with it
2.  React-Bootstrap
3.  Bootstrap
4.  React-Router-Dom - used 5.3.0 - had to load because pages wouldn't change from home page
5.  Material UI via npm install --save --legacy-peer-deps @material-ui/core - this did not work


##  Referenced:
1.  https://www.youtube.com/watch?v=wOxP4k9f5rk
2.  Add login and registration and authroutes
3.  Email Regex:  https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute/65442112#65442112

###  1)  index.js:
1. import { BrowserRouter  } from 'react-router-dom';
2. Add <BrowserRouter> around <App />

###  2)  Nodemon - proof of life

###  3)  app.js:
1.  import React from 'react';
2.  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
3.  import 'bootstrap/dist/css/bootstrap.min.css';

###  4)  Create the components folder in src

###  5)  Create Home page

###  6)  app.js:
1.  import Home from './components/Home';
2.  Add Switch and Route in the return area
3.  Add <Route exact path={['/', '/home']}> and </Route> after the home route below
3.  Add <Home /> as a route

###  7)  Created NavMenu and Footer and put in a partials folder within components

###  8)  Added sticky to the navbar and also created an offcanvas navbar

##  Strapi:
1.  For the initial state for the data that you will "get", you have to use setState({data: []}); to be able to get the .map to work in the return
2.  For the initial state when "get"ting users, you use ('') to be able to get the .map to work in the return

##  Usage info:
-  Form.js is the parent form/wrapper for the rest of the forms elements that we will call
