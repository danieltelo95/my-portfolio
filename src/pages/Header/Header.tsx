// Header.tsx
import React from "react";
import { FormattedMessage } from 'react-intl';
import docu from '../../my_cv/daniel.pdf';


interface HeaderProps {
  switchLanguage: () => void;
  currentLanguage: string;
}

const Header: React.FC<HeaderProps> = ({ switchLanguage, currentLanguage }) => {  
  return(
    <div>   
      <button onClick={switchLanguage}>
        {currentLanguage === 'es' ? 'English' : 'Español'}
      </button>
      <a href={docu} target="_blank" rel="noopener noreferrer">
        <FormattedMessage id="about.downloadCV" defaultMessage="Download CV" />
      </a>
    </div>
  );
}

export default Header;
