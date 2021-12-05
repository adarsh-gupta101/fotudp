import "./App.css";
import LoginPage from "./components/login";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Loginwithotp from "./components/LoginOtp";
import HomeScreen from "./components/HomeScreen";
import Contestdetail from "./components/contestdetail";
import SignUp from "./components/Signup";
import Signupotp from "./components/signupotp";

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' element={<LoginPage/>}>
      </Route>
      <Route path='/signin' element={<SignUp/>}>

      </Route>
      <Route path="/otps" element={<Signupotp />} />

      <Route path='/auth' element={ <Loginwithotp />}>
       
      </Route>
      <Route path="/fot/contest/:contestId" element={<Contestdetail />} />
      <Route path='/fot' element={ <HomeScreen />}>

       
       </Route>
    </Switch>
    </Router>
  );
}

export default App;
