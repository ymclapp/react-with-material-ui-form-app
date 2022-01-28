import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//partials
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//admin dashboard
import Demo from './components/dashboard/Demographics';
import Users from './components/dashboard/Users';
import Sessions from './components/dashboard/Sessions';


//public pages
import Home from './components/pages/Home';
import Registration from './components/user/Registration';

//user pages
import Login from './components/user/Login';

//conference
import Form from './components/conference/Form';

function App() {
    return (
        <>
<Router>
                <div className="App">
                    <NavMenu />
                    <Header />

                    <Switch>

                        <Route exact path={['/', '/home']}>
                            <Home />
                        </Route>

                        <Route path='/form'>
                            <Form />
                        </Route>

                        <Route path='/registration'>
                            <Registration />
                        </Route>

                        <Route exact path='/login'>
                            <Login />
                        </Route>

                        <Route path='/dashboard'>
                            <Users />
                            <Demo />
                            <Sessions />
                        </Route>

                    </Switch>

                    <Footer />
                </div>
            </Router>

        </>
    );
}

export default App;
