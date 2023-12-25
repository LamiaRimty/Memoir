import "./Blogs.css";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/blogs");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlogs();
  });

  return (
    <section id="Blogs">
      <article className="singleBlog">
        <div className="container container-blog-wrap">
          <div>
            <img alt="" />
          </div>
          <h3 className="blogTitle">My Blog </h3>
          <h7>Qoute</h7>
          <p className="time">time</p>
          <p className="blogDesc">desc</p>
        </div>
      </article>
    </section>
  );
};

export default Blogs;
