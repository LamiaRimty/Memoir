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
      <div className="album bg-body-">
        <p className="memoir-caption animate__animated animate__backInLeft">
          💁🏻‍♀️ Memoir is my thought of words that need to be written...🖌️
        </p>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} className="link" key={blog.id}>
                <div className="col">
                  {/* Code before experiment */}
                  {/* <div className="card cardItems shadow-sm ">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      src={`http://localhost:8800/uploads/${blog.image}`}
                      alt="blog-img"
                    />
                    <div className="card-body">
                      <h3 className="card-title">{blog.title}</h3>
                      <p className="card-qoute">{blog.qoute}</p>
                      <small className="card-time">
                        {" "}
                        <AiOutlineClockCircle className="clock-icon" />{" "}
                        {blog.time} 🥐 ☕️
                      </small>
                    </div>
                  </div>
                */}

                  <div className="main animate__animated animate__zoomInUp">
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image">
                            <img
                              src={`http://localhost:8800/uploads/${blog.image}`}
                              alt="card-img"
                            />
                          </div>
                          <div className="card_content">
                            <h2 className="card-title">{blog.title}</h2>
                            <p className="card-qoute">{blog.qoute}</p>
                            <small className="card-time">
                              {" "}
                              <AiOutlineClockCircle className="clock-icon" />{" "}
                              {blog.time} 🥐 ☕️
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Code before experiment */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
