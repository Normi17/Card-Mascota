import React, { useState } from "react";
import styled from "styled-components";
import Verde from '../assets/verde.jpg';
import Pig from '../assets/pig.jpg';
// import Gallina from '../assets/gallina.png';

const ModalContainer = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 3;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 40%;
  background-image: url(${Verde}); 
  background-size: cover; 
  
  
`;

const CloseButton = styled.span`
  position: absolute;
    top: 7px;
    right: 19px;
    cursor: pointer;
    font-size: 26px;
    font-weight: bold;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color:  rgb(0, 0, 0);;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;


  img {
    display: block;
    margin: 0 auto;
    border-radius: 9px;
    width: 20%;
    transform: scale(3.5);
    padding: 38px;
}

`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -35px;
  padding: 5px 0px 0px 41px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: rgb(34, 99, 194);;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid rgb(34, 99, 194);;
  border-radius: 0; 
  outline: none;
  width: 70%;
`;

const Button = styled.button`
  /* background-color: #007bff; */
  background-color: rgb(118, 211, 28);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 89px;
  margin: 10px auto;
  margin-left: 32%;
  border-radius: 3px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    talla: "",
    peso: "",
    edad: "",
    sexo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar o procesar los datos del formulario.
    console.log(formData);
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <Title>Formulario</Title>
      <Form onSubmit={handleSubmit}>
      <img src={Pig} alt='' />   
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="talla">Talla</Label>
            <Input
              type="text"
              id="talla"
              name="talla"
              value={formData.talla}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="peso">Peso</Label>
            <Input
              type="text"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="edad">Edad</Label>
            <Input
              type="text"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sexo">Sexo</Label>
            <Input
              type="text"
              id="sexo"
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <Button type="submit">Enviar</Button>
      </Form>
    </ModalContainer>
  );
}


export default Modal;
