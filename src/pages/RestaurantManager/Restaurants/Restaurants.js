import './Restaurants.css';
import RestaurantMexican from"../../../assets/imgs/restaurant-mexican.png";
import Header from "../../../components/Header";
import { Input, Select, Button, Popconfirm} from "antd";
import ButtonPopAsync from '../../../components/ButtonPopAsync';
import SelectTag from '../../../components/SelectTag';


const { TextArea } = Input;
const handleChange = (value: String)=> {
    console.log('selected ${value}');
};


const Restaurants =()=>{
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
                    <img className="photo" src={RestaurantMexican} alt="Restaurante mexicano" ></img>
                    <button className="buttonChange" size="large" type="primary">Cambiar Imagen </button>
                </div>

                
                    <div  className="boxType">
                        <SelectTag onChange={handleChange} options={[{value: "Italiana", label:"Italiana"}]} className="selectType"></SelectTag>
                        </div>
                

            </section>
            
        </body>
    );
}
export default Restaurants;
