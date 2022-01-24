import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//public pages
import Home from './components/pages/Home';

//conference
import Form from './components/conference/Form';

function App() {
  return (
    <>
      {/* <div className="App"></div> */}

      <Router>

        <Switch>

          <Route exact path={['/', '/form']}>
            <Form />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
