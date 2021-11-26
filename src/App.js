import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import UserLogin from "./Pages/UserLoginPage/UserLogin";
import { createContext, useEffect, useState } from "react";
import CartPage from "./Pages/CartPage/CartPage";
import AdminPage from "./Pages/AdminPage/AdminPage";

export const UserContext = createContext();
export const url = `http://localhost:4000/api/product/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    !loading && (
      <UserContext.Provider
        value={{
          cart: [cartData, setCartData],
          products: [allProducts, setAllProducts],
          user: [loggedInUser, setLoggedInUser],
        }}
      >
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/shop/product/:id">
                <SingleProductPage></SingleProductPage>
              </Route>
              <Route exact path="/shop/:id">
                <Shop></Shop>
              </Route>
              <Route exact path="/login">
                <UserLogin></UserLogin>
              </Route>
              <Route exact path="/cart">
                <CartPage></CartPage>
              </Route>
              <Route exact path="/admin">
                <AdminPage></AdminPage>
              </Route>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
    )
  );
}

export default App;
