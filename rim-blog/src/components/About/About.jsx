import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container col-xxl-8 px-4 py-5">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>
        <div className="container row flex-lg-row align-items-center g-5 py-5">
          {/* <h2 class="section-title display-5 fw-bold text-body-emphasis" id="">
            About Me
          </h2> */}

          <div className=" col-10 col-sm-8 col-lg-6 justify-content-center about-img animate__animated animate__slideInLeft animate__delay-1s">
            <img
              id="rimty"
              src="./images/Rimty.jpg"
              className="about-img d-block mx-lg-auto img-fluid"
              alt="Rimty"
              loading="lazy"
            />
          </div>
          <div className="col-10 col-sm-8 col-lg-6 detail  animate__animated animate__slideInRight animate__delay-1s">
            <p className="lead mx-auto" id="about-desc">
              Hello! I’m <strong>Lamia Jabin Rimty.</strong> I am a{" "}
              <em>UI/UX and Front End Developer.</em> Beautiful{" "}
              <em>Bangladesh</em> is a small country in the South Asia & that’s
              where I am from 💁🏻‍♀️
              <br />
              <br />I like traveling a lo ! Trekking and hiking with friends are
              one of my favorite hobbies.I love to know about new
              people,culture.I used to capture every beautiful moment of my
              life.This is my diary where share my life experience😍
            </p>
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="pdf/Rimty-CV.pdf"
                class="btn btn-outline-secondary btn-lg px-4 button button-flex cv"
              >
                Download CV
                <i className="uil uil-download-alt button-icon"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>
    </section>
  );
}
export default About;
