import "./Restaurants.css";
import RestaurantMexican from "../../../assets/imgs/restaurant-mexican.png";
import Header from "../../../components/Header";
import { Input, Select, Button ,Modal} from "antd";
import ButtonPopAsync from "../../../components/ButtonPopAsync";
import SelectTag from "../../../components/SelectTag";
import { HiOutlinePhotograph } from "react-icons/hi";
import React, { useRef, useState } from "react";
import { BiImport } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { useFetch } from "../../../services/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import  useForm  from "../../../hooks/useForm";

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
  const [errorsname, setErrorsName] = useState({});

 

      

  const url = `http://localhost:8080/restaurants/${id}`;

  const { data: restaurant, loading, error, refetch } = useFetch(url);
  const image = restaurant?.image;

  
  const restaurantId=restaurant?.id;
  const restaurantName=restaurant?.name;

  const initialValue={
  name: restaurantName,
  description:"",
  phoneNumber:"",
  municipalityName:"",
  cuisineType: null
}

      

      const validateValue = (form)=>{
        let errors = {};
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let direccionRegex =
          /^(?! )(?!.*\s{2})(?!.*[*!@#$%^&+=<>?;:`~|\\])[a-zA-Z0-9ÑñÁÉÍÓÚÜáéíóúü.,#\-()\s]{1,50}(?<! )$/;
        let nombreRegex =
          /^(?=.{1,20}$)[a-zA-ZÀ-ÿ\u00f1\u00d1]+(?: [a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/;
        let descripcionRegex =
          /^(?! )(?!.*\d)[a-zA-ZÀ-ÿ\u00f1\u00d1\s.,!?;:()\-'"¡¿\n]{1,300}(?<! )$/;
        let phoneRegex = /^\d{8}$/;

        if (!form.name.trim()) {
          errors.name = "El campo 'Nombre del restaurante' es requerido";
        } else if (!nombreRegex.test(form.name.trim())) {
          errors.name =
            "El campo 'Nombre del restaurante no debe exceder 20 letras, solo acepta letras, espacios en blanco, y un solo espacio entre letras '";
        }
        if (!form.description.trim()) {
          errors.description = "El campo 'Descripcion' es requerido";
        } else if (!descripcionRegex.test(form.description.trim())) {
          errors.description =
            "El campo 'Descripcion' solo acepta letras, espacios en blanco, y un solo espacio entre letras,máximo de letras 300 ";
        }
        if (!form.municipalityName.trim()) {
          errors.direction = "El campo 'Direccion' es requerido";
        } else if (!direccionRegex.test(form.municipalityName.trim())) {
          errors.direction =
            "El campo 'Direccion' solo acepta letras, espacios en blanco, y un solo espacio entre letras ,máximo de letras 50";
        }
        if (!form.phoneNumber.trim()) {
          errors.phoneNumber = "El campo 'Telefono' es requerido";
        } else if (!phoneRegex.test(form.phoneNumber.trim())) {
          errors.phoneNumber =
            "El campo 'Telefono' es requerido solo acepta 8 numeros validos";
        }
        if (form.cuisineType == null || !form.cuisineType.trim()) {
          errors.cuisineType = "El campo 'Tipo de Cocina' es requerido";
          console.log("pepe"+form.cuisineType);
        }
         console.log("Errores generados:", errors);

        return errors;
      }

       const {form, 
        setForm,
    loadingName,
    errors,
    response,
     handleChangeName,
     handleBlur,
      handleSubmit}=useForm(initialValue,validateValue);

      useEffect(() => {
  if (restaurant) {
    setForm({
      name: restaurant?.name || "",
      description: restaurant?.description || "",
      phoneNumber: restaurant?.phoneNumber || "",
      municipalityName: restaurant?.municipalityName || "",
      cuisineType: restaurant?.cuisineType || "" 
    });
  }
}, [restaurant, setForm]);

       const handleSave = async () => {
         await new Promise((resolve) => setTimeout(resolve, 1000));
         console.log("Guardado con éxito:", form);
       };

      const handleSubmitForm = () => {
      const newErrors = validateValue();
      setErrorsName(newErrors);
      };


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



   const [selectedTags, setSelectedTags] = useState([]);

   const handleTagsChange = (tags) => {
    console.log("Etiquetas actualizadas:", tags);
    // Aquí podrías guardarlas en la API, etc.
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
              <Input
                className="input-field"
                type="text"
                name="name"
                value={form?.name}
                onChange={handleChangeName}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <TextArea
                name="description"
                placeholder="Ej: Auténtica cocina italiana con ingredientes frescos y recetas tradicionales"
                rows={3}
                showCount
                maxLength={400}
                className="input-field"
                value={form?.description}
                onChange={handleChangeName}
                onBlur={handleBlur}
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Tipo de Cocina</label>
                <Select 
                  name="cuisineType"
                  placeholder="Ej: Italiana"
                  className="input-field"
                  value={form?.cuisineType} 
                  onSelect={(value) => {
                    handleChangeName({
                      target: {
                        name: "cuisineType",
                        value: value,
                      },
                    });
                  }}
                >
                  <option value="">-- Selecciona --</option>
                  {cuisines.map((cuisine) => (
                    <option key={cuisine.id} value={cuisine.name}>
                      {cuisine.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="form-group half">
                <label>Teléfono</label>
                <Input name="phoneNumber" value={form?.phoneNumber} className="input-field"   onChange={handleChangeName}
                onBlur={handleBlur} />
              </div>
            </div>

            <div className="form-group">
              <label>Dirección</label>
              <Input name="municipalityName"   onChange={handleChangeName}
                onBlur={handleBlur} value={form?.municipalityName} className="input-field" />
            </div>

            <ButtonPopAsync
              errors={errors}
              onClick={handleSubmitForm}
              onConfirm={handleSave}
            />
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
