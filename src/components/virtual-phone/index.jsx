import React from 'react';
import CardsSlider from '../cards-slider';
import './index.css';

const VirtualPhone = () => (
  <div className="virtual-phone">
    <div className="task-text"><span>Задача:</span> Сделать крутилку
        карточек а-ля строиз в
        инстаграм</div>
    <CardsSlider/>
  </div>
);

export default VirtualPhone;
