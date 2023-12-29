// eslint-disable-next-line
import "./Blogs.css";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <section id="blogs">
      <div className="album py-5 bg-body-">
        <h2 className="section-title">My Thought</h2>
        <span className="section-subtitle">
          I love nature 🌿 I like to capture every moment wherever I
          go.Throughout this blog, I'll share my experience of life.🚶🏻‍♀️
        </span>
        <div className="container">
          {/* Album card codes */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {blogs.map((blog) => (
              <div className="col">
                <div className="card cardItems shadow-sm " key={blog.id}>
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={blog.image}
                    alt="blog-img"
                  ></img>
                  <div className="card-body">
                    <Link to={`/blog/${blog.id}`} className="link">
                      <h3 className="card-title">{blog.title}</h3>
                    </Link>

                    <p className="card-qoute">{blog.qoute}</p>
                    <small className="card-time">
                      {" "}
                      <AiOutlineClockCircle className="clock-icon" />{" "}
                      {blog.time}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 
  postData card code */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
