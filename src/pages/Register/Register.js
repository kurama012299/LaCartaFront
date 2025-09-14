import { useLocation } from "react-router-dom";
import React from "react";
import Header from "../../components/Header";
import "./Register.css";
import { Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "antd/es/radio";
import { FaArrowRight } from "react-icons/fa";
import { RiRestaurantLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register=()=>{
    
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
      <body className="registerBody">
        <Header />
        <div className="boxRegister">
          <div className="content">
            <h2 className="labelRegisterTop1">Registrar</h2>
            <p className="parhagraphRegister">
              Reserva tu experiencia gastronómica
            </p>
            <Input
              className="InputUsername"
              prefix={<AiOutlineUser color="#ff6600" />}
              placeholder="Nombre de Usuario"
            ></Input>
            <Input
              className="InputEmail"
              prefix={<MdEmail color="#ff6600" />}
              placeholder="Correo electrónico"
            ></Input>
            <Input.Password
              className="InputPassword"
              placeholder="Contraseña"
              prefix={<FaLock color="#ff6600" />}
              iconRender={(visible) =>
                visible ? (
                  <FaEye color="#ff6600" style={{ cursor: "pointer" }} />
                ) : (
                  <FaEyeSlash style={{ cursor: "pointer" }} />
                )
              }
            />
            <Button type="primary" className="buttonInit">
              Entrar
            </Button>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                margin: "5px auto",
              }}
            >
              <span style={{ fontSize: "small" }}>¿Tienes una cuenta?</span>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <span className="labelRegister">Inicia sesión aquí</span>
              </Link>
              
            </div>
          </div>
          <div className="boxRegisterFooter">
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                margin: "5px auto",
              }}
            >
              <span className="iconRestaurantRegister">
                <RiRestaurantLine />
              </span>
              <span className="labelRestauantRegister">LaCarta</span>
            </div>
          </div>
        </div>
      </body>
    );
}

export default Register;
