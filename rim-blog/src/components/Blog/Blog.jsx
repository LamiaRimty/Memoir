import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Blog.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function Blog() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const fetchBlogDetails = async () => {
    const res = await axios.get(`http://localhost:8800/blog/${id}`);
    setBlogPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  useEffect(() => {
    fetchBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/blog/${id}`, id);
      // window.location.reload();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(1);
    try {
      await axios.put(`http://localhost:8800/blog/${id}`, {
        title,
        desc,
      });
      console.log(2);
      setUpdateMode(false);
      console.log(3);
    } catch (error) {
      console.log(4);
      console.log(error);
      console.log(5);
    }
    console.log(6);
  };
  return (
    <>
      <section id="blog">
        {blogPost ? (
          <article className="singleBlog">
            <div className="container" key={blogPost.id}>
              <div>
                <img src={blogPost.image} alt="" />
              </div>
              {updateMode ? (
                <input
                  type="text"
                  value={title}
                  className="blogTitleInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <>
                  <h1 className="blogTitle">
                    {title}
                    <div className="buttons blogEdit">
                      <button
                        className="button"
                        onClick={() => setUpdateMode(true)}
                      >
                        <BsPencilSquare />
                      </button>

                      <button className="button" onClick={handleDelete}>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </h1>
                </>
              )}

              <p className="time">{blogPost.time}</p>

              {updateMode ? (
                <textarea
                  className="blogDescInput"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                <p className="blogDesc">{desc}</p>
              )}
              {/* <p className="desc">{blogPost.desc}</p> */}
              {updateMode && (
                <button className="blogEditButton" onClick={handleUpdate}>
                  Update
                </button>
              )}
            </div>
          </article>
        ) : null}
      </section>
    </>
  );
}

export default Blog;
