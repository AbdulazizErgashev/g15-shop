import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaShopify, FaHeart, FaShoppingBasket } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <main className="bg-red-700 text-white fixed top-0 right-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between w-full max-w-[1000px] mx-auto py-3 px-6 md:px-0 md:py-8">
        <h1
          onClick={() => navigate("/")}
          className="text-lg font-bold tracking-widest md:text-2xl"
        >
          AnorMarket
        </h1>
        <ul className="hidden font-semibold text-lg md:flex gap-x-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>

        <div className="flex items-center text-lg gap-x-8 md:hidden">
          <FaHome onClick={() => navigate("/")} className="icons" />
          <FaShopify onClick={() => navigate("/shop")} className="icons" />
          <FaHeart onClick={() => navigate("/favorites")} className="icons" />
          <FaShoppingBasket
            onClick={() => navigate("/cart")}
            className="icons"
          />
        </div>
      </nav>
    </main>
  );
}
