import React, { useState } from "react";
import styled from "styled-components";
import Verde from '../assets/verde.jpg';
import { IoMdAlert, IoMdCheckmarkCircle } from 'react-icons/io';


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
  width: 35%;
  background-image: url(${Verde});
  background-size: cover;
  padding: 20px;
  .file{
    margin-left: 14%;
    padding:20px;
  }
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
  color: rgb(0, 0, 0);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 33px 0 48px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: rgb(34, 99, 194);
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid rgb(34, 99, 194);
  border-radius: 0;
  outline: none;
  width: 70%;
`;

const ImagePreview = styled.img`
  max-width: 30%;
  max-height: auto; 
  margin: 10px auto; 
  display: block; 
`;

const Button = styled.button`
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

// ... (importaciones y estilos)

function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    talla: "",
    peso: "",
    edad: "",
    sexo: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (field) => {
    // Aquí verificamos si el campo está lleno y actualizamos el estado.
    if (formData[field] !== "") {
      setFormData({
        ...formData,
        [field]: formData[field],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario.
    console.log(formData);
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setFormData({ ...formData, image: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setFormData({ // Reiniciar el estado del formulario al cerrar el modal
      name: "",
      color: "",
      talla: "",
      peso: "",
      edad: "",
      sexo: "",
      image: "",
    });
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
      <Title>Formulario</Title>
      <div className="file">
        {formData.image && <ImagePreview src={formData.image} alt="Vista previa de la imagen" />}
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.name && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.color && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                onBlur={() => handleBlur("color")}
              />
            </div>
          </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="talla">Talla</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.talla && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="talla"
                name="talla"
                value={formData.talla}
                onChange={handleChange}
                onBlur={() => handleBlur("talla")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="peso">Peso</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.peso && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="peso"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                onBlur={() => handleBlur("peso")}
              />
            </div>
          </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label htmlFor="edad">Edad</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.edad && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                onBlur={() => handleBlur("edad")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sexo">Sexo</Label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formData.sexo && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
              <Input
                type="text"
                id="sexo"
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                onBlur={() => handleBlur("sexo")}
              />
            </div>
          </FormGroup>
        </div>
        <Button type="submit">Enviar</Button>
      </Form>
    </ModalContainer>
  );
}

export default Modal;
