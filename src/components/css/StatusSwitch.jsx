// src/components/StatusSwitch.jsx
import { Switch } from 'antd';
import { useState } from 'react';
import { notification } from 'antd';
import './StatusSwitch.css';

function StatusSwitch() {
  const [isActive, setIsActive] = useState(true);

  const handleChange = (checked) => {
    setIsActive(checked);
    console.log(checked ? 'Restaurante ACTIVADO' : 'Restaurante DESACTIVADO');
    if(!isActive)
       notification.success({
      message: 'Restaurante activado',
      description: 'El restaurante fue activado correctamente.',
      duration: 3,
    });
    else{
      notification.warning({
      message: 'Restaurante desactivado',
      description: 'Se desactivo el restaurante mexicano con exito',
      duration: 4,
    });
  };
}
  return (
    <div>
      <Switch
        defaultChecked={true}
        className="custom-switch"
        checkedChildren="Activado"
        unCheckedChildren="Desactivado"
        onChange={handleChange}
      />
    </div>
  );
}

export default StatusSwitch;