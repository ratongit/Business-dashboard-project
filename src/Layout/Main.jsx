import { Outlet } from "react-router-dom";
import './Main.css'

const Main = () => {
    return (
        <div style={{backgroundColor:'hsla(219, 34%, 18%,1)'}} className="dkm">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;