import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footersectionA">
        <div className="logoBox">
          <div>
            <h1 className="headerTitleA">
              Swiz
              <span className="headerTitleB">Cuts</span>
            </h1>
            <div className="footersmalltext">
              <p> 106 Adeniyi Jones, Ikeja, Lagos</p>
              <p>Email: swizcuts@gmail.com</p>
              <p> Phone: 0707467281</p>
            </div>
            <div className="sociallinks">
              <div className="footericonwrap">
                <img src="../assets/facebook.svg" alt="img" />
              </div>
              <div className="footericonwrap">
                <img src="../assets/instagram.svg" alt="img" />
              </div>
              <div className="footericonwrap">
                <img src="../assets/twitter.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerlinkswrap">
          <div>
            <p className="footertitle">FEATURES</p>
            <div className="footersmalltext">
              <p> Workforce Management</p>
              <p>Exit Management </p>
              <p>Leave Management</p>
            </div>
          </div>
          <div>
            <p className="footertitle">QUICK LINKS</p>
            <div className="footersmalltext">
              <p>Pricing</p>
              <p> Blog</p>
              <p> Contact Us</p>
              <p>Request a Demo </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footersectionB">
        <p>© 2024 Swiz Cuts | All rights reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
