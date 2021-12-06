import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Users from './Components/Users'
import Reviews from './Components/Reviews'
import Add_New_user from './Components/Add_New_user'
import Update_User from './Components/Update_User'
import Add_Reviews from './Components/Add_Reviews'
import Products from './Components/Products'
import Orders from './Components/Orders';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/products">Products</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="users">Users</a>
        <a className="nav-link text-white" href="reviews">Reviews</a>
        <a className="nav-link text-white" href="#">Cart</a>
        <a className="nav-link text-white" href="orders" tabIndex="-1" aria-disabled="true">Orders</a>
        <a className="nav-link text-white" href="#" tabIndex="-1" aria-disabled="true">Favorite</a>
      </div>
    </div>
  </div>
</nav>

      <Routes>
      
          <Route path="/users"  element={<Users />} />
          <Route path="/reviews"  element={<Reviews />} />
          <Route path="/add_user"  element={<Add_New_user />} />
          <Route path="/update_user/:id"  element={<Update_User />} />
          <Route path="/add_reviews"  element={<Add_Reviews />} />
          <Route path="/products"  element={<Products />} />
          <Route path="/orders"  element={<Orders />} />
          <Route path="/cart"  element={<Cart />} />
        

      </Routes>

    </BrowserRouter>

  );
}

export default App;
