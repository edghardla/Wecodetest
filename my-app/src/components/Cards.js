import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Banner-home-departamento-1.png"
              label="Departamento 1"
              path="/"
            />
            <CardItem
              src="images/Banner-home-departamento-2.png"
              label="Departamento 2"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Banner-home-departamento-3.png"
              label="Departamento 3"
              path="/"
            />
            <CardItem
              src="images/Banner-home-departamento-4.png"
              label="Departamento 4"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Banner-home-departamento-5.png"
              label="Departamento 5"
              path="/"
            />
            <CardItem
              src="images/Banner-home-departamento-6.png"
              label="Departamento 6"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
