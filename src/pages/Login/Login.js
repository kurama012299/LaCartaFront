import { useLocation } from "react-router-dom";
import React from "react";
import Header from "../../components/Header";
import "./Login.css";
import { Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "antd/es/radio";
import { FaArrowRight } from "react-icons/fa";
import { RiRestaurantLine } from "react-icons/ri";

const Login=()=>{
    
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
      <body className="loginBody">
        <Header />
        <div className="boxLogin">
          <div className="content">
            <h2 className="labelLogin"> Iniciar sesión</h2>
            <p className="parhagraphLogin">
              Reserva tu experiencia gastronómica
            </p>
            <Input
              className="InputUsername"
              prefix={<AiOutlineUser color="#ff6600" />}
              placeholder="Usuario"
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
            <div style={{ display: "flex", gap: 8, alignItems: "center" ,margin:"5px auto"}}>
              <span style={{fontSize:"small"}}>¿No tienes una cuenta?</span>
              <span className="labelRegister">
                Regístrate aquí
              </span>
            </div>
          </div>
          <div className="boxLoginFooter">
              <div style={{ display: "flex", gap: 8, alignItems: "center" ,margin:"5px auto"}}>
                <span className="iconRestaurantLogin"><RiRestaurantLine /></span>
                <span className="labelRestauantLogin">LaCarta</span>
              </div>
          </div>
        </div>
      </body>
    );
}

export default Login;
