// App.tsx
import React, { useState } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import Home from './pages/Home/Home';
import messagesEn from './cv/cv_en.json';
import messagesEs from './cv/cv_es.json';

function App() {
  const [userLanguage, setUserLanguage] = useState('es');
  const messages = userLanguage === 'es' ? messagesEs : messagesEn;

  const switchLanguage = () => {
    setUserLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  }

  return (
    <IntlProvider locale={userLanguage}>
      <div className="App">
        <Home switchLanguage={switchLanguage} currentLanguage={userLanguage} />
      </div>
    </IntlProvider>
  );
}

export default App;
