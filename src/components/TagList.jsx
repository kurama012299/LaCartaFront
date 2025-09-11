import React from 'react';
import { Tag } from 'antd';

const tagStyles = {
  "Sushi": { bg: "#4ECDC4", text: "#fff", border: "#3bb9b0" },
  "Italiano": { bg: "#FF6B35", text: "#fff", border: "#e55a2b" },
  "Vegano": { bg: "#96CEB4", text: "#fff", border: "#7fb89e" },
  "Artesanal": { bg: "#FF7675", text: "#fff", border: "#e56665" },
  "Postres": { bg: "#FFEAA7", text: "#333", border: "#ffd54f" },
  "Mariscos": { bg: "#5D9CEC", text: "#fff", border: "#4a89dc" },
  "Criolla": { bg: "#E74C3C", text: "#fff", border: "#c0392b" },
  "Vegetariana": { bg: "#8BC34A", text: "#fff", border: "#7cb342" },
  "Gourmet": { bg: "#B39DDB", text: "#fff", border: "#9575cd" },
  "Rapida": { bg: "#FFB3BA", text: "#333", border: "#ff8a80" },
};

//tags sin valor en la bd
const defaultStyle = {
  bg: "#f0f0f0",
  text: "#666",
  border: "#d9d9d9"
};

const TagList = ({ tags = [] }) => {
  if (!Array.isArray(tags) || tags.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
      {tags.map((tagName, index) => {
        // Obtiene el estilo predefinido o usa el por defecto
        const style = tagStyles[tagName] || defaultStyle;

        return (
          <Tag
            key={index}
            style={{
              backgroundColor: style.bg,
              color: style.text,
              borderColor: style.border,
              borderRadius: '16px',
              padding: '4px 12px',
              fontWeight: 600,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              cursor: 'default',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 3px 6px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            {tagName}
          </Tag>
        );
      })}
    </div>
  );
};

export default TagList;