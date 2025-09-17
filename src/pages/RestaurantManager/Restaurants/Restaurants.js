import "./Restaurants.css";
import RestaurantMexican from "../../../assets/imgs/restaurant-mexican.png";
import Header from "../../../components/Header";
import { Input, Select, Button } from "antd";
import ButtonPopAsync from "../../../components/ButtonPopAsync";
import SelectTag from "../../../components/SelectTag";
import { HiOutlinePhotograph } from "react-icons/hi";
import React, { useRef, useState } from "react";
import { BiImport } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { useFetch } from "../../../services/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const getImageUrl = (imagePath) => {
  if (!imagePath) return "https://via.placeholder.com/410x280";

  const path = String(imagePath).replace(/\\/g, "/");

  if (/^https?:\/\//i.test(path)) return path;

  const base = "http://localhost:8080";

  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

const { TextArea } = Input;

const Restaurants = () => {
  const [imageSrc, setImageSrc] = useState(RestaurantMexican);
  const fileInputRef = useRef(null);
  const { id } = useParams();

  const url = `http://localhost:8080/restaurants/${id}`;

  const { data: restaurant, loading, error, refetch } = useFetch(url);
  const image = restaurant?.image;

  const restaurantId=restaurant?.id;

  const imageUrl = getImageUrl(image);

  const cuisines = [
    { name: "Italiana", id: 4 },
    { name: "Japonesa", id: 1 },
    { name: "Mexicana", id: 0 },
    { name: "Criolla", id: 2 },
    { name: "Americana", id: 5 },
    { name: "China", id: 6 },
    { name: "Koreana", id: 3 },
  ];

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

  const foundCuisine = cuisines.find((c) => c.name === restaurant?.cuisineType);
  const initialId = foundCuisine ? foundCuisine.id : null;

  useEffect(() => {
    if (restaurant?.cuisineType) {
      const found = cuisines.find((c) => c.name === restaurant.cuisineType);
      setSelectedCuisine(found ? found.id : null);
    }
  }, [restaurant?.cuisineType]);

   const [selectedTags, setSelectedTags] = useState([]);

   const handleTagsChange = (tags) => {
    console.log("Etiquetas actualizadas:", tags);
    // Aquí podrías guardarlas en la API, etc.
  };


  const [selectedCuisine, setSelectedCuisine] = useState(initialId);
  const handleChange = (value) => {
    setSelectedCuisine(value);
    console.log("ID seleccionado:", value);
    // Si necesitas el nombre:
    const selected = cuisines.find((c) => c.id === value);
    console.log("Nombre:", selected?.name);
  };

  return (
    <div className="restaurants-container">
      <Header />
      <div className="page-header-left">
        <h1 className="labelTop">Configuración del restaurante</h1>
        <h3 className="labelSubConfig">
          Actualiza la información de tu restaurante
        </h3>
      </div>
      <div className="main-content">
        {/* Columna izquierda */}
        <div className="form-column">
          <div className="card-form">
            <h2 className="section-title">Información general</h2>
            <p className="section-subtitle">Datos básicos de tu restaurante</p>

            <div className="form-group">
              <label>Nombre de tu restaurante</label>
              <Input className="input-field" value={restaurant?.name} />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <TextArea
                placeholder="Ej: Auténtica cocina italiana con ingredientes frescos y recetas tradicionales"
                rows={3}
                showCount
                maxLength={400}
                className="input-field"
                value={restaurant?.description}
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Tipo de Cocina</label>
                <Select
                  placeholder="Ej: Italiana"
                  className="input-field"
                  value={selectedCuisine}
                  onChange={(value) => setSelectedCuisine(value)}
                >
                  <option value="">-- Selecciona --</option>
                  {cuisines.map((cuisine) => (
                    <option key={cuisine.id} value={cuisine.id}>
                      {cuisine.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="form-group half">
                <label>Teléfono</label>
                <Input
                  value={restaurant?.phoneNumber}
                  className="input-field"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Dirección</label>
              <Input
                value={restaurant?.municipalityName}
                className="input-field"
              />
            </div>

            <ButtonPopAsync />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="sidebar-column">
          <div className="card-image">
            <h2 className="section-title">Imagen del Restaurante</h2>
            <p className="section-subtitle">Foto principal de tu restaurante</p>
            <img src={imageUrl} alt="Restaurante" className="photo" />
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
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div className="cards-bottom">
            <div className="card-tags">
              <h3 className="section-title">Etiquetas</h3>
              <SelectTag
                restaurantId={restaurantId} 
                onChange={handleTagsChange}
              />
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
        <div className="card-dishes">
          <h3 className="labelDishes">Platos de su Restaurante</h3>
          <div className="card-dish">
            <image className="imageDish"></image>
            <div className="card-info">
              <h3 className="labelname-dish">Spaghetti Carbonara</h3>
              <h3 className="labelprice-dish">€14.90</h3>
              <h3 className="labeldescription-dish">
                Pasta cremosa con huevo, queso parmesano, panceta crujiente y
                pimienta negra, especialidad de la casa.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
