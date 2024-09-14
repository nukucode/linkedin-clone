import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("Gojo is Back", "Gege Akutami Confirm Official")}
      {newArticle("Jujutsu Kaisen", "All records are break by jjk")}
      {newArticle("Black Clover", "Now black clover official return ")}
      {newArticle("Saturo Gojo", "Gojo with new anime called strongest")}
      {newArticle("Demon Slayer", "Demon slayer author famous")}
      {newArticle("Solo leveling", "Season 2 coming on 30 oct")}
    </div>
  );
}

export default Widgets;
