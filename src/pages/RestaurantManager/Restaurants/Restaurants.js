import './Restaurants.css';
import RestaurantMexican from "../../../assets/imgs/restaurant-mexican.png";
import Header from "../../../components/Header";
import { Input, Select, Button } from "antd";
import ButtonPopAsync from '../../../components/ButtonPopAsync';
import SelectTag from '../../../components/SelectTag';
import { HiOutlinePhotograph } from "react-icons/hi";
import React, { useRef, useState } from 'react';
import { BiImport } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";

const { TextArea } = Input;

const Restaurants = () => {
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

    return (
        <div className="restaurants-container">
            <Header />
            <div className="page-header-left">
            <h1 className="labelTop">Configuración del restaurante</h1>
            <h3 className="labelSubConfig">Actualiza la información de tu restaurante</h3>
        </div>
            <div className="main-content">
                 
                {/* Columna izquierda */}
                <div className="form-column">
                    <div className="card-form">
                        <h2 className="section-title">Información general</h2>
                        <p className="section-subtitle">Datos básicos de tu restaurante</p>

                        <div className="form-group">
                            <label>Nombre del restaurante</label>
                            <Input placeholder="Ej: La Bella Italia" className="input-field" />
                        </div>

                        <div className="form-group">
                            <label>Descripción</label>
                            <TextArea
                                placeholder="Ej: Auténtica cocina italiana con ingredientes frescos y recetas tradicionales"
                                rows={3}
                                showCount
                                maxLength={250}
                                className="input-field"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group half">
                                <label>Tipo de Cocina</label>
                                <Select
                                    placeholder="Ej: Italiana"
                                    options={[{ value: "Italiana", label: "Italiana" }]}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group half">
                                <label>Teléfono</label>
                                <Input placeholder="Ej: +53 58407752" className="input-field" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Dirección</label>
                            <Input placeholder="Ej: Calle Línea e/ 20 y 22" className="input-field" />
                        </div>

                        <ButtonPopAsync />
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="sidebar-column">
                    <div className="card-image">
                        <h2 className="section-title">Imagen del Restaurante</h2>
                        <p className="section-subtitle">Foto principal de tu restaurante</p>
                        <img src={imageSrc} alt="Restaurante" className="photo" />
                        <Button
                            className="button-change"
                            icon={<HiOutlinePhotograph />}
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

                    <div className="cards-bottom">
                        <div className="card-tags">
                            <h3 className="section-title">Etiquetas</h3>
                            <SelectTag />
                        </div>
                        <div className="card-qr">
                            <h3 className="section-title">QR del Restaurante</h3>
                            <BsQrCode className="icon-qr" />
                            <Button
                                className="button-download"
                                icon={<BiImport />}
                                onClick={handleButtonClick}
                            >
                                Descargar QR
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;