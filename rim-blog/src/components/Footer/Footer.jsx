import "./Footer.css";

function Footer() {
  return (
    // <section>

    <footer class="new_footer_area bg_color  " id="footer">
      <div class="container container col-xxl-8 px-4 py-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 my-3">
            <div>
              <a
                className="navbar-brand d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                href="/#"
              >
                <img
                  className="foorterImg"
                  height="30"
                  src="images/rimty-logo.png"
                  alt="rimty"
                />
              </a>
              <p className="footer-intro">UI/UX & Frontend Developer</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 ">
            {/* <p class="f-title f_600 t_color f_size_18">Get in touch</p> */}
            <div className="container d-flex justify-content-end my-2">
              <div class="f_social_icon">
                <a
                  href="https://github.com/LamiaRimty"
                  class="fab fa-github footer-icon"
                >
                  {" "}
                </a>
                <a
                  href="https://www.facebook.com/L.J.Rimty"
                  class="fab fa-facebook footer-icon"
                >
                  {" "}
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQ2ahPn5cdvouccPDnT3oGg"
                  class="fab fa-youtube footer-icon"
                >
                  {" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/"
                  class="fab fa-linkedin footer-icon"
                >
                  {" "}
                </a>
                <a
                  href="https://www.instagram.com/ik_rimty?fbclid=IwAR16dk9evu7OMdz1STbLtI2xAwTaPAo6KdBDXHD9kek9bcdvgtgEK9f7qIw"
                  class="fab fa-instagram footer-icon"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new_footer_top">
        <div class="footer_bg">
          <div class="footer_bg_one"></div>
          <div class="footer_bg_two"></div>
        </div>
      </div>
      <div class="footer_bottom animate__animated animate__fadeInUp">
        <p className="text-center">Made with ❤️ By Rimty &copy; 2023</p>
      </div>
    </footer>
    // </section>
  );
}
export default Footer;
