import "./navbar.scss";
import trademark from './logo/trademark.png';
import {Person,Mail} from "@material-ui/icons";


export default function Navbar ({menuOpen, setMenuOpen}) {
    return (
        <div className = {"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <img src={trademark} width="50" height="50"/>
                    <a href="#intro" className="logo">rtanimations.</a> 
                        <div className="itemContainer">
                        <Person className="icon"/>
                        <span>
                            +347-909-6258
                        </span>
                        </div>
                        <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>
                            rt.animate@gmail.com
                        </span>
                        </div>
                </div>
                <div className="right">
                  
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
