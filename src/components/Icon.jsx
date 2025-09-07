
import React from 'react';

function Icon({ src, alt, size = 24, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ verticalAlign: 'middle', cursor: 'pointer' }}
      {...props}
    />
  );
}

export default Icon;