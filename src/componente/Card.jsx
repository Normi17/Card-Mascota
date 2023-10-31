import React, { useState } from "react";
import { AiFillEdit } from 'react-icons/ai';
import styled from "styled-components";
import Modal from "../componente/Modal";
import Cerdo from "../assets/Cerdo.png";
import gallina from "../assets/gallina.png";
import vaquita from "../assets/vaquita.png";
import perros from "../assets/perros.png";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  padding: 20px;
  background-color: #f2f2f2;
`;

const CardContainer = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 240px;
  transition: transform 0.2s ease-in-out;
  margin-top: 50px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
max-width: 400px;
max-height: 150px;
    position: relative;
    align-items: center;


  }
`;

const CardImage = styled.img`
  width: 50%;
  max-height: 100%;
  object-fit: cover;
  border-top-right-radius: 5px; 
  position: absolute;
  top: 0;
  right: 0; 
  transform: translateY(-50%);
  @media (max-width: 768px) {
  margin-right: 157px;
  width: 160px;
  height: 160px;
  transform: translateY(-5px);
  transform: scale(0.7);
  }
`;

const Cajas = styled.div`
  padding: 69px; 
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin: 20px 0;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 10px 0;
  }

  a {
    /* rgb(34, 99, 194); */
    /* background-color: #007bff; */
    background-color: rgb(118, 211, 28);
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    margin: 20px 0;
    border-radius: 5px;
  }

  .action-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin-right: 0;
      margin-top: 10px;
    }
  }

  .edits {
    display: flex;
    align-items: center;
    cursor: pointer;

    .edit-button {
      font-size: 24px; 
      cursor: pointer;
      padding: 10px;
      color: rgb(34, 99, 194);
    }
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    padding: 10px;
    text-align: left;
    margin-top: -10px;
    margin-left: 127px;

  }
  
`;



const cardData = [
  {
    imagen: Cerdo,
    tittle: "Producto 1",
    categoria: "Porcino",
    link: "#",
  },
  {
    imagen: gallina,
    tittle: "Producto 2",
    categoria: "Avicultura",
    link: "#",
  },
  {
    imagen: vaquita,
    tittle: "Producto 3",
    categoria: "Rumiantes",
    link: "#",
  },
  {
    imagen: perros,
    tittle: "Producto 4",
    categoria: "Canino",
    link: "",
  },
  {
    imagen: perros,
    tittle: "Producto 4",
    categoria: "Canino",
    link: "#",
  },
  {
    imagen: perros,
    tittle: "Producto 4",
    categoria: "Canino",
    link: "#",
  },
  {
    imagen: perros,
    tittle: "Producto 4",
    categoria: "Canino",
    link: "#",
  },
  {
    imagen: perros,
    tittle: "Producto 4",
    categoria: "Canino",
    link: "#",
  },
];

function CardNuevo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <CardsContainer>
        {cardData.map((cardData, index) => (
          <CardContainer className="carta" key={index}>
            <CardImage src={cardData.imagen} alt={cardData.tittle} />
            <Cajas>
              <h2>{cardData.tittle}</h2>
              <p>{cardData.categoria}</p>
              <div className="action-container">
                <div className="edits">
                  <a href={cardData.link} target="_blank" rel="noopener noreferrer">
                    Ver más
                  </a>
                  <AiFillEdit onClick={openModal} className="edit-button" />
                </div>
              </div>
            </Cajas>
          </CardContainer>
        ))}
      </CardsContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default CardNuevo;
