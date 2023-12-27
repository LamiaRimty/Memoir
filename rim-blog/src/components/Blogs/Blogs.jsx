// eslint-disable-next-line
import "./Blogs.css";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
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
    // <section id="Blogs">
    //   <h1>Rimty's Blogs📚</h1>
    //   <div className="container container-blogs col-xxl-8 px-4 py-4 ">
    //     {blogs.map((blog) => (
    //       <div className="blog" key={blog.id}>
    //         <article className="blogItems">
    //           {blog.image && <img src={blog.image} alt="blog-img" />}
    //           <h2 className="title">{blog.title} </h2>
    //           <h7 className="qoute">{blog.qoute}?</h7>
    //           <p className="time">⏱️ {blog.time}</p>
    //         </article>
    //       </div>
    //     ))}
    //   </div>
    // </section>
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
            {blogs.map((item) => (
              <div className="col">
                <div className="card cardItems shadow-sm " key={item.id}>
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={item.cover}
                    alt=""
                  ></img>
                  <div className="card-body">
                    <Link to={`details/${item.id}`} className="link">
                      <h3 className="title">{item.title}</h3>
                    </Link>
                    <span className="location">
                      <IoLocation />
                      {item.location}
                    </span>
                    <h5 className="qoute">{item.qoute}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div class="btn-group">
                          <Link to="/blogId">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              More
                            </button>
                          </Link>
  
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div> */}
                      <small className="text-body-secondary">
                        {" "}
                        <AiOutlineClockCircle className="clock-icon" />{" "}
                        {item.time}
                      </small>
                    </div>
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
