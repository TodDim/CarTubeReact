import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Logout from './components/Auth/Logout';
import HomePage from './components/HomePage/HomePage';
// import DiscoverPage from './components/DiscoverPage/DiscoverPage';
// import FollowUser from './components/UserFeed/FollowUser';
// import UnfollowUser from './components/UserFeed/UnfollowUser';
// import PersonalFeed from './components/UserFeed/PersonalFeed';
// import OtherUserFeed from './components/UserFeed/OtherUserFeed';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateCarForm from './components/common/CreateCarForm';
import SearchParent from './components/common/SearchParent';
import EditCar from './components/common/EditCar';
import MyCarsList from './components/common/MyCarsList';
import DeleteCar from './components/common/DeleteCar';
import CarDetails from './components/common/CarDetails';
import DeleteUser from './components/common/DeleteUser';
import MainAdminPage from './components/Admin/MainAdminPage';
// import NotFound from './components/common/NotFound';

class App extends Component {
    render() {
        return (
            <div id="main">                
                <Header />

                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={WelcomePage} />
                        <Route path="/index.html" component={WelcomePage} />
                        
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/logout" component={Logout} />

                        <Route exact path="/cars/all" component={HomePage} />
                        <Route exact path="/cars/search" component={SearchParent} />
                        <Route exact path="/cars/my" component={MyCarsList} />
                        <Route exact path="/cars/create" component={CreateCarForm} />
                        <Route path="/cars/editCar/:id" component={EditCar}/>
                        <Route path="/cars/deleteCar/:id" component={DeleteCar} />
                        <Route path="/cars/details/:id" component={CarDetails} />
                        <Route exact path="/admin" component={MainAdminPage} />
                        <Route path="/deleteUser/:id" component={DeleteUser} />
                        {/* <Route path="/discover" component={DiscoverPage} />

                        <Route exact path="/profile" component={PersonalFeed} />
                        <Route path="/feed/:username" component={OtherUserFeed} />

                        <Route path="/follow/:username" component={FollowUser} />
                        <Route path="/unfollow/:username" component={UnfollowUser} />

                        */}

                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </HashRouter>

                <ToastContainer autoClose={2500}/>

                <Footer />
            </div>
        )
    }
}

export default withRouter(App)
