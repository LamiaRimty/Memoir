import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [blog, setBlog] = useState({
    image: "",
    title: "",
    time: "",
    qoute: "",
    desc: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/blogs", blog);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(blog);
  return (
    <>
      <section id="createBlog">
        <div className="container-compose">
          <div className="container">
            {/* {file && (
              <img
                className="composeImg"
                src={URL.createObjectURL(file)}
                alt="composeImg"
              />
            )} */}
          </div>
          <form className="composeForm">
            <div className="composeFormGroup flexCenter">
              <label>Cover Photo</label>
              <input
                id="fileInput"
                onChange={handleChange}
                accept="image/*"
                className="composeBlog"
                type="file"
                autoFocus={true}
                name="image"
              />
            </div>
            <div className="composeFormGroup">
              <label>Title</label>
              <input
                onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Title"
                autoFocus={true}
                name="title"
              />
            </div>
            <div className="composeFormGroup">
              <label>Time</label>
              <input
                onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Time"
                autoFocus={true}
                name="time"
              />
            </div>

            <div className="composeFormGroup">
              <label>Qoute</label>
              <input
                onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Qoute"
                autoFocus={true}
                name="qoute"
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Write a blog..."
                cols="59"
                rows="10"
                name="desc"
              ></textarea>
            </div>

            <button
              className="button composeBlogBtn"
              type="submit"
              autoComplete="off"
              onClick={handleClick}
            >
              Publish
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Create;
