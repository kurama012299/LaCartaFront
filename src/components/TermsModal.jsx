import React, { useState, useRef } from 'react';
import { Modal, Checkbox, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./TermsModal.css";

const { Title, Text } = Typography;

const TermsModal = ({ isOpen, onClose, termsContent, onSuccess }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Detectar si el usuario llegó al final del scroll
  const handleScroll = () => {
    const container = contentRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    // Si la posición de scroll + altura visible es casi igual a la altura total → llegó al final
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setScrolledToBottom(true);
      setIsChecked(true); // Habilita el checkbox automáticamente
    } else {
      setScrolledToBottom(false);
      setIsChecked(false); // Si baja, deshabilita
    }
  };

  // Manejar aceptación
  const handleAccept = () => {
    if (isChecked) {
      onSuccess?.(); // Llama a la función de éxito (redirección)
      onClose();     // Cierra el modal
    }
  };

  // Redirigir a otra página
  const redirectToNextPage = () => {
    navigate('/register');
  };

  return (
    <Modal
      title={<Title level={4}>Términos y Condiciones <br></br>Empresa prestadora del servicio: <b>LaCarta</b></Title>}
      open={isOpen}
      onCancel={onClose}
      footer={null} // Personalizamos el footer abajo
      width={800}
      centered
      bodyStyle={{ maxHeight: '60vh', overflowY: 'auto', padding: '20px' }}
    >
      {/* Contenedor de texto con scroll */}
      <div
        ref={contentRef}
        onScroll={handleScroll}
        style={{
          height: '400px', // Altura fija para activar scroll
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#fafafa',
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#333',
        }}
        dangerouslySetInnerHTML={{ __html: termsContent }}
      />

      {/* Checkbox condicional */}
      <Checkbox className='checkBoxTerms'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        disabled={!scrolledToBottom} // Solo activable si llegó al final
      >
        Acepto los Términos y Condiciones
      </Checkbox>

      {/* Botón de aceptación */}
      <div style={{ textAlign: 'right' }}>
        <Button
          type="primary"
          onClick={handleAccept}
          disabled={!isChecked}
          size="large"
          className="buttonOk"
        >
          Aceptar
        </Button>
      </div>

      {/* Nota informativa */}
      {!scrolledToBottom && (
        <Text type="secondary" style={{ display: 'block', marginTop: '10px', fontSize: '12px' }}>
          📜 Desplázate hasta el final para aceptar.
        </Text>
      )}
    </Modal>
  );
};

export default TermsModal;