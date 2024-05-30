import React from 'react';
import './styles/App.css';
import Menu from './components/MenuContainers';

function App() {
  return (
    <div className='main-container'>
      <h1>Редактор меню</h1>
      <Menu />
    </div>
  );
}

export default App;
