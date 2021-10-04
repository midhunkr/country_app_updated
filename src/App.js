import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SignUp from './Pages/SignUp/SignUp';
import Routes from './Routes/routes';
import { useSelector } from 'react-redux';
import CountryCard from './Components/CountryCard';
import CountryDetails from './Components/CountryDetails';
import { useHistory, useLocation } from 'react-router';
function App() {

  const state = useSelector((state) => state.fetchData);
  const location=useLocation();
  const history=useHistory();
  const logOut=()=>history.replace('/register');
  const goToFavourites=()=>history.push('/favourites');
  const goToProfile=()=>history.push('/profile')
  console.log(location.pathname);
  console.log(state.isLoggedIn);
  return (
    <div>
      <Navbar bg="light">
      <Navbar.Brand className="ps-5">Country App</Navbar.Brand>
        <Container className="d-flex  justify-content-end">
         
          {(state.isLoggedIn&&location.pathname=='/home')&&<>
          <Nav.Link onClick={goToProfile}>Profile</Nav.Link>
          <Nav.Link onClick={goToFavourites}>Favourites</Nav.Link>
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </>}
        </Container>
      </Navbar>
      <Routes />

    </div>
  );
}

export default App;
