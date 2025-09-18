import "./ButtonPopAsync.css";
import React, { useState } from 'react';
import { Button, Popconfirm,Modal } from 'antd';
import { LuSave } from 'react-icons/lu';

const ButtonPopAsync = ({errors={},onConfirm,confirmText = "Guardar Cambios", okText = "Sí", cancelText = "No"}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modal, contextHolder] = Modal.useModal(); // Para mostrar errores

  const hasErrors = Object.keys(errors).length > 0;

  const showPopconfirm = () => {
     if (hasErrors) {
      const firstError = Object.values(errors)[0];
      modal.error({
        title: 'Formulario inválido',
        content: firstError,
      });
      return;
    }

    setOpen(true);
  };

  const handleOk = async ()  => {
    setConfirmLoading(true);

    try {
      await onConfirm();
    } catch (error) {
      modal.error({
        title: 'Error al guardar',
        content: error.message || 'Ocurrió un error inesperado.',
      });
    } finally {
      setConfirmLoading(false);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
    <Popconfirm
      title="Confirmar Guardado"
        description="¿Desea guardar los cambios de su restaurante?"
        open={open}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
    >
      <Button onClick={showPopconfirm} className="buttonSave" type="primary" icon={<LuSave/>}> Guardar Cambios </Button>
    </Popconfirm>
    {contextHolder}
    </>
  );
};

export default ButtonPopAsync;