import "./ButtonPopAsync.css";
import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { LuSave } from 'react-icons/lu';

const ButtonPopAsync = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Popconfirm
      title="Guardar"
      description="Desea guardar los cambios de su restaurante?"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button onClick={showPopconfirm} className="buttonSave" type="primary" icon={<LuSave/>}> Guardar Cambios </Button>
    </Popconfirm>
  );
};

export default ButtonPopAsync;