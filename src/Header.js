import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import HeaderOption from "./HeaderOption";
import SupervisorIcon from "@mui/icons-material/SupervisorAccountOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
          alt="Linkedin Icon"
        />
        <div className="header__search">
          <SearchOutlinedIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterOutlinedIcon} />
        <HeaderOption title="Messaging" Icon={MailOutlineOutlinedIcon} />
        <HeaderOption
          title="Notifications"
          Icon={NotificationsNoneOutlinedIcon}
        />
        <HeaderOption onClick={logoutApp} title="Me" avatar={true} />
      </div>
    </header>
  );
}

export default Header;
