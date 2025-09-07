import React from "react";
import "./DiscoverView.css";
import Header from "../../../components/Header";
import { Button } from "antd";
import Icon from "../../../components/Icon";
import EspaghettiIcon from "../../../assets/icons/icon-espaghetti.png.png";
import Tacos from "../../../assets/icons/icon-tacos.png";
import Sushi from "../../../assets/icons/icon-sushi.png";

const DiscoverView=()=>{
    return(
        <body >
            <section className="bodyDiscover">
                <Header/>
                <h1 style={{textAlign:"center",marginTop:"30px",fontSize:"3rem",marginBottom:"5px"}}>Descubre Restaurantes Increíbles</h1>
                <h3 className="labelSubDiscover" style={{textAlign:"center"}}>Explora menús digitales de restaurantes locales y encuentra tu próxima comida favorita</h3>
            </section>
            <section style={{backgroundColor:" rgb(255, 251, 248)"}}>
                <div className="boxFilter">
                    <h3 className="labelCategory">¿Qué estás buscando hoy?</h3>
                    <Button className="buttonType" icon={<Icon
                        src={EspaghettiIcon}
                        size={23}
                    />} type="primary" size="middle"> Italiana</Button>
                    <Button className="buttonTypeMexican" icon={<Icon
                        src={Tacos}
                        size={23}
                    />} type="primary" size="middle"> Mexicana</Button>
                    <Button className="buttonTypeAsian" icon={<Icon
                        src={Sushi}
                        size={23}
                    />} type="primary" size="middle"> Japonesa</Button>


                </div>
            </section>
            
        </body>
    );
}
export default DiscoverView;