import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const [blogPost, setBlogPost] = useState({
    image: "",
    title: "",
    time: "",
    qoute: "",
    desc: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBlogPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(blogPost);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/blog/" + blogId, blogPost);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the Blog</h1>
      <input
        type="text"
        placeholder="image"
        onChange={handleChange}
        name="image"
      />
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="time"
        onChange={handleChange}
        name="time"
      />
      <input
        type="text"
        placeholder="qoute"
        onChange={handleChange}
        name="qoute"
      />

      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <button className="button form-btn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
