import React from 'react';
import { Select, Tag } from 'antd';
import "./SelectTag.css";

const options = [
  { value: 'vegetariano', label: 'Vegetariano', color: 'green' },
  { value: 'artesanal', label: 'Artesanal', color: 'blue' },
  { value: 'familiar', label: 'Familiar', color: 'orange' },
  { value: 'gourmet', label: 'Gourmet', color: 'gold' },
  { value: 'rapida', label: 'Rapida', color: 'red' },
];

const colorMap = {
  vegetariano: 'green',
  artesanal: 'blue',
  familiar: 'orange',
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
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};

const SelectTag = () => (
  <Select
    className="selectType"
    mode="multiple"
    tagRender={tagRender}
    defaultValue={['artesanal', 'familiar']} 
    style={{ width: '250px' }}
    options={options}
  />
);

export default SelectTag;