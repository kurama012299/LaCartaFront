import "./Header.css";
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
          <div className="header">
                <div style={{position:'absolute',right:'85%',top:'1%',display:'flex',gap:'8px',alignItems:'center'}}>
                    <RiRestaurantLine className="iconRestaurant"></RiRestaurantLine>
                    <h3 className="labelMenu">La Carta</h3>
                </div>
            <div style={{position:'absolute',left:'50%',top:'1%',transform:'translateX(-50%)'}}>
                <Link to="/discoverview" style={{ textDecoration: 'none' }}>
                    <h4 className="labelHeader">Descubrir</h4>
                </Link>
            </div>
            <Button type="primary" className="buttonHover">Iniciar sesión</Button>
            <Button type="primary" className="button">Registrarse</Button>
        </div>
    );
}

export default Header;