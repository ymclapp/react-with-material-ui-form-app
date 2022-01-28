import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import RequireAuth from './components/user/RequireAuth';
import { Routes, Route } from 'react-router-dom';

//partials
import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';

//public pages
import Home from './components/pages/Home';
import Registration from './components/user/Registration';

//user pages
import Login from './components/user/Login';

function App() {
    return (
        <>
        <div>
            <NavMenu />
            <Header />

            <main>

        <Routes>
            {/* <Route path='*' element={<Layout />}></Route> */}
            <Route path='/login' element={<Login />}></Route>
            <Route Path='/registration' element={<Registration />}></Route>
            <Route Path='/home' element={<Home />}></Route>
        </Routes>
        </main>
        </div>
        </>
    );
}

function Layout() {
    return (
        <>
            <div>
                <NavMenu />
                <Header />

                <main>
                    {/* <Outlet /> */}
                </main>
            </div>
        </>
    );
}

export default App;