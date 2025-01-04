import Home from "../Home";
import Shop from "../Shop";
import Cart from "../Cart";
import Favorites from "../Favorites";

const pages = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/shop",
    component: Shop,
    name: "Shop",
  },
  {
    path: "/cart",
    component: Cart,
    name: "Cart",
  },
  {
    path: "/favorites",
    component: Favorites,
    name: "Favorites",
  },
];

export default pages;
