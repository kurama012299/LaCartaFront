import React from 'react';
import { useEffect ,useState} from 'react';
import './LoadingScreen.css'; 

const LoadingScreen = () => {

  const loadingPhrases = [
    "Estamos sazonando tu experiencia...",
    "Preparando el menú digital de tu restaurante...",
    "Conectando sabores, historias y clientes... ¡tu restaurante merece brillar! ",
    "Estamos mezclando ingredientes: pasión + tecnología + tu menú ",
    "Aliñando los detalles de tu restaurante..."
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingPhrases.length);
    setCurrentPhrase(loadingPhrases[randomIndex]);
  }, []);


  return (
    <div className="loading-screen">
      <span className="loader-6">
            <div className="loading-content">
              <div className="liquid"></div>
              <div className="liquid"></div>
              <div className="liquid"></div>
              <div className="liquid"></div>
            </div>
            <svg className="svg">
              <filter id="gooey">
                <feGaussianBlur
                  stdDeviation="10"
                  in="SourceGraphic"
                ></feGaussianBlur>
                <feColorMatrix
                  values="1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10"
                ></feColorMatrix>
              </filter>
            </svg>
          </span>
          <div className="loading-text">{currentPhrase}</div>
    </div>
    
  );
};

export default LoadingScreen;