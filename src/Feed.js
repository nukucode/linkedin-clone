import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(posts);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // clear Input field
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's happening?"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={VideoIcon} color="#E7AE3E" />
          <InputOption title="Event" Icon={EventIcon} color="#C0CBCD" />
          <InputOption
            title="Write Article"
            Icon={CalendarIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts &&
          posts.map(
            ({ id, data: { name, description, message, photoURL } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
              />
            )
          )}
      </FlipMove>
    </div>
  );
}

export default Feed;
