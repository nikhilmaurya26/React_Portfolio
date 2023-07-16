import "./topbar.scss";
//  import {Mail} from "@material-ui/core"
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo fw-400">
            Nikhil
          </a>
          {/* <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>43345582</span>
          </div> */}
          <div className="itemContainer fw-400">
            <EmailIcon className="icon" />
            <span>nikhilmaurya0926@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
