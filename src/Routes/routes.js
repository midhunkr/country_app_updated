import { Route, Switch, Redirect} from "react-router";
import Favourites from "../Pages/Favourites/Favourites";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

function Routes() {
    return (

        <Switch>
             <Route path='/register' exact>
                <SignUp></SignUp>
            </Route>
            <Route path='/home' exact>
                <Home></Home>
            </Route>
            <Route path='/login' exact>
                <SignIn></SignIn>
            </Route>
            <Route path='/profile' exact>
                <Profile></Profile>
            </Route>
            <Route path='/favourites' exact>
               <Favourites></Favourites>
            </Route>
            <Redirect exact from="/" to="/register" push />
        </Switch>
    )

}

export default Routes