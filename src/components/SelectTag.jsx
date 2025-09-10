import React from 'react';
import { Select, Tag } from 'antd';
import "./SelectTag.css";

const options = [
  { value: 'vegetariano', label: 'Vegetariano', color: 'green' },
  { value: 'artesanal', label: 'Artesanal', color: 'blue' },
  { value: 'criolla', label: 'Criolla', color: 'orange' },
  { value: 'gourmet', label: 'Gourmet', color: 'gold' },
  { value: 'rapida', label: 'Rapida', color: 'red' },
];

const colorMap = {
  vegetariano: 'green',
  artesanal: 'blue',
  criolla: 'orange',
  gourmet: 'gold',
  rapida: 'red',
};

const tagRender = props => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={colorMap[value]}  
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 10 }}
    >
      {label}
    </Tag>
  );
};

const SelectTag = () => (
  <div className="selectTypeFoodContainer">
    <Select
      className="selectTypeFood"
      mode="multiple"
      tagRender={tagRender}
      defaultValue={['artesanal', 'criolla']} 
      style={{ width: '250px' }}
      options={options}
      
    />
  </div>
);

export default SelectTag;