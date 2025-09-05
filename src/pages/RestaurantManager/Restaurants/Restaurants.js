import './Restaurants.css';
import Header from "../../../components/Header";
import { Input } from "antd";

const { TextArea } = Input;

const Restaurants =()=>{
    return(
        <body className="body">
            <section>
                <Header/>
                <h1 className="labelTop">Configuracion del restaurante</h1>
                <h3 className="labelSub">Actualiza la información de tu restaurante</h3>
                <div className="boxInfo">
                    <h3 className="labelH3">Información general</h3>
                    <h4 className="labelH4">Datos basicos de tu restaurante</h4>
                    <h3 className="labelH31">Nombre del restaurante</h3>
                    <Input className="inputName" placeholder="Ej: La Bella Italia" />
                    <h3 className="labelH32">Descripcion</h3>
                    <TextArea className="inputDescription" showCount maxLength={100} placeholder="Ej:Auténtica cocina italiana con ingredientes frescos y recetas tradicionales" />
                </div>
            </section>
            
        </body>
    );
}
export default Restaurants;
