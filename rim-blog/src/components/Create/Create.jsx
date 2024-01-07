import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [blog, setBlog] = useState({
    image: null,
    title: "",
    time: "",
    qoute: "",
    desc: "",
  });

  const navigate = useNavigate();

  // const handleFileChange = (e) => {
  //   setBlog({ ...blog, image: e.target.files[0] });
  // };
  const handleInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // const handleCreateBlog = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", blog.image);
  //     formData.append("title", blog.title);
  //     formData.append("time", blog.time);
  //     formData.append("qoute", blog.qoute);
  //     formData.append("desc", blog.desc);
  //     await axios.post("http://localhost:8800/blogs", formData);
  //     navigate("/");
  //   } catch (error) {
  //     console.log("Error creating blog:", error);
  //   }
  // };

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
          <form className="composeForm" action="/submit" method="post">
            <div className="composeFormGroup flexCenter">
              <label>Cover Photo</label>
              <input
                id="fileInput"
                onChange={handleFileChange}
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
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                name="title"
                placeholder="title"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Time</label>
              <input
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                placeholder="time"
                autoFocus={true}
                name="time"
              />
            </div>

            <div className="composeFormGroup">
              <label>Qoute</label>
              <input
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                placeholder="qoute"
                autoFocus={true}
                name="qoute"
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                onChange={handleInputChange}
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
              onClick={handleCreateBlog}
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
