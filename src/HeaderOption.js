import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ title, Icon, onClick, avatar }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoURL} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <span className="headerOption__title">{title}</span>
    </div>
  );
}

export default HeaderOption;
