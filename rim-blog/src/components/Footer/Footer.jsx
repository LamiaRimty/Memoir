import "./Footer.css";

function Footer() {
  return (
    <section id="footer">
      <div className="container col-xxl-8 px-4 py-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-bottom">
          <div className="col mb-3">
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

          <div className="nav col-md-4 justify-content-end">
            <ul className="list-unstyled d-flex footer-links" id="footer-links">
              <li className="ms-3">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.facebook.com/L.J.Rimty"
                >
                  <i className="fa-brands fa-facebook footer-icon"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.instagram.com/ik_rimty?fbclid=IwAR16dk9evu7OMdz1STbLtI2xAwTaPAo6KdBDXHD9kek9bcdvgtgEK9f7qIw"
                >
                  <i className="fa-brands fa-instagram footer-icon"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.youtube.com/channel/UCQ2ahPn5cdvouccPDnT3oGg"
                >
                  <i className="fa-brands fa-youtube footer-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div className="animate__animated animate__fadeInUp">
          <p className="text-center footer-copy">
            Made with ❤️ By Rimty &copy; 2023
          </p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
