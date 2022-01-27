import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RequireAuth from './components/user/RequireAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

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
//import Form from './components/conference/Form';

function App() {
  return (
    // <>
    //    <div className="App"></div>

    //   <Router>
    //     <NavMenu />
    //     <Header />

    //     <Switch>

    //       <Route exact path={['/', '/home']}>
    //         <Home />
    //       </Route>

    //       <Route path='/form'>
    //         <Form />
    //       </Route>

    //       <Route path='/registration'>
    //         <Registration />
    //       </Route>

    //       <Route exact path='/login'>
    //         <Login />
    //       </Route>

    //       <Route path='/dashboard'>
    //         <Users />
    //         <Demo />
    //         <Sessions />

    //       </Route>

    //     </Switch>

    //     <Footer />

    //   </Router>

    // </>

    <Routes>

      <Route exact path='/' element={<Layout />}></Route>
      
        

      {/* public Routes */}
      <Route exact path='/home' element={<Home />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/registration' element={<Registration />}></Route>
      <Route exact path='/dashboard' element={[<Users />, <Demo />, <Sessions />]}></Route>
      {/* <Route exact path='/linkpage' element={<LinkPage />}></Route> */}

      {/* we want to protect these Routes */}
      <Route element={<RequireAuth />}>
        {/* <Route exact path='/dashboard' element={<Users />}></Route> */}
      </Route>

      {/* catch all */}


    </Routes >
  );
}

export default App;
