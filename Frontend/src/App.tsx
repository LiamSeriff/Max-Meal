import { useState } from "react";
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
import UserHome from "./pages/UserHome/UserHome";
import GroceryList from "./pages/GroceryList/GroceryList";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  //const [alertVisible, setAlertVisibility] = useState(false)
  //<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>

  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/user-home" element={<UserHome />}></Route>
          <Route path="/grocery-list" element={<GroceryList />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
