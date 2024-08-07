import { useNavigate } from "react-router-dom";
import "./style.css";
import { navLinks } from "../../db/headerData";

function Header() {
  const navigate = useNavigate();

  //creating function to navigate
  const handleNavigate = (pathName) => {
    navigate(pathName);
  };

  return (
    <header>
      <div className="headercontainer">
        <div className="headerTitle">
          <p>Swiz Cuts</p>
        </div>
        <nav>
          <ul className="navlist">
            {navLinks.map((item, index) => (
              <li key={index} onClick={() => handleNavigate(item.link)}>
                {item.text}
              </li>
            ))}

            {/* <li onClick={() => handleNavigate("/")}>Home</li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li> */}
          </ul>
        </nav>
        <div>
          <button className="btn">MAKE AN APPOINTMENT</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
