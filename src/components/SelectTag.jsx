import React, { useState, useEffect } from 'react';
import { Select, Tag, Spin } from 'antd';
import { useFetch } from "../services/useFetch";
import "./SelectTag.css";

// Opciones fijas (o también podrían venir de API)
const options = [
  { value: 'Vegetariana', label: 'Vegetariana' },
  { value: 'Artesanal', label: 'Artesanal' },
  { value: 'Criolla', label: 'Criolla' },
  { value: 'Gourmet', label: 'Gourmet' },
  { value: 'Rapida', label: 'Rápida' },
];

const colorMap = {
  Vegetariana: 'green',
  Artesanal: 'blue',
  Criolla: 'orange',
  Gourmet: 'gold',
  Rapida: 'red',
};

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={colorMap[value] || 'blue'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 10 }}
    >
      {label}
    </Tag>
  );
};

const SelectTag = ({ restaurantId, onChange, placeholder = "Selecciona etiquetas" }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const displayTags = selectedTags.map(tag => 
  tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
);
  
  const {  data:restaurant, loading } = useFetch(
    restaurantId ? `http://localhost:8080/restaurants/${restaurantId}` : null
  );

 useEffect(() => {
  if (restaurant?.restaurantTags && Array.isArray(restaurant?.restaurantTags)) {
    const validTags = restaurant?.restaurantTags
      .map(tag => tag.trim().toLowerCase()) 
      .filter(normalizedTag =>
        options.some(option => option.value.toLowerCase() === normalizedTag)
      );
    setSelectedTags(validTags);
  }
}, [restaurant?.restaurantTags]);

  const handleChange = (values) => {
    setSelectedTags(values);
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <div className="selectTypeFoodContainer">
      <Select
        key={displayTags.join(',') || 'empty'} 
        className="selectTypeFood"
        mode="multiple"
        tagRender={tagRender}
        value={displayTags}
        onChange={handleChange}
        style={{ width: '250px' }}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectTag;