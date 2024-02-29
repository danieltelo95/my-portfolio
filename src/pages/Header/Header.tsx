// Header.tsx
import React from "react";
import { FormattedMessage } from 'react-intl';
import docu from '../../my_cv/daniel.pdf';
import './Header.scss';

interface HeaderProps {
  switchLanguage: () => void;
  currentLanguage: string;
}

const Header: React.FC<HeaderProps> = ({ switchLanguage, currentLanguage }) => {  
  return(
    <div className="header-container">   
      <button className="language-button" onClick={switchLanguage}>
        {currentLanguage === 'es' ? 'English' : 'Español'}
      </button>
      <button className="language-button" onClick={() => window.open(docu, '_blank')} type="button">
      {currentLanguage === "en" ? "Download CV" : "Descargar CV"}
      </button>
    </div>
  );
}

export default Header;
