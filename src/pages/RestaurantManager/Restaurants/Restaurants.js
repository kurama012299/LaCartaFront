import './Restaurants.css';
import RestaurantMexican from"../../../assets/imgs/restaurant-mexican.png";
import Header from "../../../components/Header";
import { Input, Select, Button, Popconfirm} from "antd";
import ButtonPopAsync from '../../../components/ButtonPopAsync';
import SelectTag from '../../../components/SelectTag';
import { HiOutlinePhotograph } from "react-icons/hi";
import React, { useRef, useState } from 'react';
import Tabss from '../../../components/Tabs';



const { TextArea } = Input;
const handleChange = (value: String)=> {
    console.log('selected ${value}');
};


const Restaurants =()=>{
    const [imageSrc, setImageSrc] = useState(RestaurantMexican);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <body >
            <section className="bodyRestaurants">
                <Header/>
                <h1 className="labelTop">Configuración del restaurante</h1>
                <h3 className="labelSubConfig">Actualiza la información de tu restaurante</h3>

                <div className="boxInfo">
                    <h3 className="labelInfo">Información general</h3>
                    <h4 className="labelData">Datos básicos de tu restaurante</h4>
                    <h3 className="labelName">Nombre del restaurante</h3>
                    <Input className="inputName" placeholder="Ej: La Bella Italia" />
                    <h3 className="labelDescription">Descripcion</h3>
                    <TextArea className="inputDescription" showCount maxLength={100} placeholder="Ej:Auténtica cocina italiana con ingredientes frescos y recetas tradicionales" />
                    <h3 className="labelType">Tipo de Cocina</h3>
                    <Select onChange={handleChange} placeholder="Ej: Italiana" options={[{value: "Italiana", label:"Italiana"}]} className="selectType"></Select>
                    <h3 className="labelPhone">Teléfono</h3>
                    <Input className="inputPhone" placeholder="Ej: +53 58407752"></Input>
                    <h3 className="labelAdress">Dirección</h3>
                    <Input className="inputAdress" placeholder="Ej: Calle Línea e/ 20 y 22" />
                    <ButtonPopAsync></ButtonPopAsync>
                </div>

                <div className="boxPhoto">
                    <h3 className="labelPhoto">Imagen del Restaurante</h3>
                    <h4 className="labelMainPhoto">Foto principal de tu restaurante</h4>
                    <img className="photo" src={imageSrc} alt="Restaurante" />
                    <Button
                        className="buttonChange"
                        icon={<HiOutlinePhotograph />}
                        size="large"
                        type="primary"
                        onClick={handleButtonClick}
                    >
                        Cambiar Imagen
                    </Button>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
                
                <div  className="boxType">
                    <h3 className="labelTypeFood">Etiquetas</h3>
                    <SelectTag></SelectTag>
                </div>

                
               {/* <div className="boxMenu">
                    <h3 className="labelMenu">Su Menú</h3>
                    <Tabss></Tabss>

                </div>*/}
                

            </section>
            
        </body>
    );
}
export default Restaurants;
