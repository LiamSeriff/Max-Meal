import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Button,
  Alert,
  ListGroup,
  TextInput,
  Navcolumn,
} from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserHome from "./pages/UserHome/UserHome";  // Imported here
import GroceryList from "./pages/GroceryList/GroceryList";
import Recipes from "./pages/Recipes/Recipes";
import MealPlanner from "./pages/MealPlanner/MealPlanner";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/user-home" element={<UserHome />}></Route>  {/* UserHome as a route */}
          <Route path="/grocery-list" element={<GroceryList />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/meal-planner" element={<MealPlanner />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
