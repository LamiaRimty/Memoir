import "./Blogs.css";

const Blogs = () => {
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
