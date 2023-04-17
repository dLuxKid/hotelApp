import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/navbar.css";

const Navbar = () => {
  const navItems = [
    { name: "Home", url: "/home", icon: <Icon icon="ic:round-home" /> },
    {
      name: "Rooms & Suites",
      url: "/rooms",
      icon: <Icon icon="material-symbols:airline-seat-individual-suite" />,
    },
    { name: "Booking", url: "/booking", icon: <Icon icon="mdi:book-alert" /> },
    {
      name: "Gallery",
      url: "/gallery",
      icon: <Icon icon="mdi:view-gallery" />,
    },
    {
      name: "Dining",
      url: "/dining",
      icon: <Icon icon="material-symbols:dining" />,
    },
    { name: "About", url: "/about", icon: <Icon icon="mdi:about" /> },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <p>
              <NavLink
                to={item.url}
                className={`${({ isActive }) => {
                  isActive ? "active" : "";
                }} navlink`}
              >
                <span>{item.icon}</span>
                {item.name}
              </NavLink>
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
