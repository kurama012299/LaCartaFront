import './Restaurants.css';
import Header from "../../../components/Header";
import { Input, Select, Button, Popconfirm} from "antd";
import { LuSave } from 'react-icons/lu';
import ButtonPopAsync from '../../../components/ButtonPopAsync';

const { TextArea } = Input;
const handleChange = (value: String)=> {
    console.log('selected ${value}');
};

const Restaurants =()=>{
    return(
        <body className="body1">
            <section>
                <Header/>
                <h1 className="labelTop">Configuracion del restaurante</h1>
                <h3 className="labelSubConfig">Actualiza la información de tu restaurante</h3>
                <div className="boxInfo">
                    <h3 className="labelInfo">Información general</h3>
                    <h4 className="labelData">Datos basicos de tu restaurante</h4>
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
            </section>
            
        </body>
    );
}
export default Restaurants;
