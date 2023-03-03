import React, { useState } from "react";
import Media from "../media/media";
import { Link } from "react-router-dom";
import "./styles.css";
export default function SidebarAdmin(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const getNavLinkClass = path => {
    return props.location.pathname === path ? "active" : "";
  }

  const logout = () => {
    localStorage.clear();
    window.location = "/login";
  };
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <Media value image="icon-dashboard.svg" alt="icon-dashboard.svg" />,
    },
    {
      path: "/receptionist",
      name: "Receptionist",
      icon: (
        <Media value image="icon-receptionist.svg" alt="icon-receptionist.svg" />
      ),
    },
    {
      path: "/customer",
      name: "Customer",
      icon: <Media value image="icon-customer.svg" alt="icon-customer.svg" />,
    },
    {
      path: "/room-type",
      name: "Room Type",
      icon: <Media value image="icon-roomType.svg" alt="icon-roomType.svg" />,
    },
    {
      path: "/room",
      name: "Room",
      icon: <Media value image="icon-room.svg" alt="icon-room.svg" />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: (
        <Media value image="icon-transaction.svg" alt="icon-transaction.svg" />
      ),
    },
  ];

  return (
    <div className="sidebar" style={{ width: isOpen ? "240px" : "80px" }}>
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
          <Media value image="logo-hotel-white.svg" alt="logo-hotel-white.svg" />
        </div>
        <div className="bars" onClick={toggle}>
          <Media value image="icon-menu.svg" alt="icon-menu.svg" />
        </div>
      </div>
      <div className="sidebar-content">
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`link d-flex align-items-center`}
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        .logout
      </div>
    </div>
  );
}
