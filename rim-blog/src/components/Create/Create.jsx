import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [qoute, setQoute] = useState("");
  const [description, setDescription] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`http://localhost:8800/upload`, formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    upload();
    // try {
    //   // await axios.post("http://localhost:8800/blogs", blog);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // console.log(blog);
  return (
    <>
      <section id="createBlog">
        <div className="container-compose">
          <div className="container">
            {file && (
              <img
                className="composeImg"
                src={URL.createObjectURL(file)}
                alt="composeImg"
              />
            )}
          </div>
          <form className="composeForm">
            <div className="composeFormGroup flexCenter">
              <label className="file" htmlFor="file">
                Upload Image
              </label>
              <input
                id="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setTime(e.target.value)}
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
                onChange={(e) => setQoute(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
