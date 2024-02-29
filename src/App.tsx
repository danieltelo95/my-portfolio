// App.tsx
import React, { useState } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import Home from './pages/Home/Home';
import messagesEn from './cv/cv_en.json';
import messagesEs from './cv/cv_es.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  const [userLanguage, setUserLanguage] = useState('es');
  const messages = userLanguage === 'es' ? messagesEs : messagesEn;

  const switchLanguage = () => {
    setUserLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  }

  return (
    <Router>
      <IntlProvider locale={userLanguage}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home switchLanguage={switchLanguage} currentLanguage={userLanguage} />} />
          </Routes>
        </div>
      </IntlProvider>
    </Router>
  );
}

export default App;
