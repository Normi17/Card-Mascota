import React, { useState } from "react";
import styled from "styled-components";
import { IoMdAlert, IoMdCheckmarkCircle } from "react-icons/io";
import Verde from "../assets/verde.jpg";

const AlertContainer = styled.div`
  background: #000e29;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: ${(props) => (props.showAlerts ? "block" : "none")};
`;

const Alert = styled.div`
  margin: 10px auto;
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  box-shadow: 0px 0px 2px #00040a;
  transition: 0.5s;
  cursor: pointer;

  &.alert-success {
    background: rgba(7, 149, 66, 0.12156862745098039);
    box-shadow: 0px 0px 2px #259c08;
    color: #0ad406;
  }

  &.alert-info {
    background: rgba(7, 73, 149, 0.12156862745098039);
    box-shadow: 0px 0px 2px #0396ff;
    color: #0396ff;
  }

  &.alert-warning {
    background: rgba(220, 128, 1, 0.16);
    box-shadow: 0px 0px 2px #ffb103;
    color: #ffb103;
  }

  &.alert-danger {
    background: rgba(220, 17, 1, 0.16);
    box-shadow: 0px 0px 2px #ff0303;
    color: #ff0303;
  }

  & .close {
    font-size: 18px;
    color: #0bd2ff;
    text-shadow: none;
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
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

  const [tallaIsValid, setTallaIsValid] = useState(true);
  const [pesoIsValid, setPesoIsValid] = useState(true);
  const [edadIsValid, setEdadIsValid] = useState(true);

  const [alerts, setAlerts] = useState([]);

  const addAlert = (type, message) => {
    const newAlerts = [...alerts, { type, message }];
    setAlerts(newAlerts);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "talla") {
      if (!isNaN(value)) {
        setTallaIsValid(true);
      } else {
        setTallaIsValid(false);
      }
    } else if (name === "peso") {
      if (!isNaN(value)) {
        setPesoIsValid(true);
      } else {
        setPesoIsValid(false);
      }
    } else if (name === "edad") {
      if (!isNaN(value)) {
        setEdadIsValid(true);
      } else {
        setEdadIsValid(false);
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (field) => {
    if (formData[field] !== "") {
      setFormData({
        ...formData,
        [field]: formData[field],
      });
    }
  };

  const handleCloseAlert = (index) => {
    const updatedAlerts = [...alerts];
    updatedAlerts.splice(index, 1);
    setAlerts(updatedAlerts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      formData.name !== "" &&
      formData.color !== "" &&
      formData.talla !== "" &&
      formData.peso !== "" &&
      formData.edad !== "" &&
      formData.sexo !== "" &&
      tallaIsValid &&
      pesoIsValid &&
      edadIsValid;

    if (isFormValid) {
      console.log(formData);
      onClose();
    } else {
      addAlert("danger", "Rellene todos los campos correctamente");
    }
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
    setFormData({
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
        {formData.image && (
          <ImagePreview src={formData.image} alt="Vista previa de la imagen" />
        )}
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                onBlur={() => handleBlur("color")}
              />
              {formData.color && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
            </div>
          </FormGroup>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormGroup>
            <Label htmlFor="talla">Talla</Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              {formData.talla && (
                tallaIsValid ? (
                  <IoMdCheckmarkCircle color="green" size={20} />
                ) : (
                  <IoMdAlert color="red" size="20" />
                )
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                type="text"
                id="peso"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                onBlur={() => handleBlur("peso")}
              />
              {formData.peso && (
                pesoIsValid ? (
                  <IoMdCheckmarkCircle color="green" size={20} />
                ) : (
                  <IoMdAlert color="red" size="20" />
                )
              )}
            </div>
          </FormGroup>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormGroup>
            <Label htmlFor="edad">Edad</Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              {formData.edad && (
                edadIsValid ? (
                  <IoMdCheckmarkCircle color="green" size={20} />
                ) : (
                  <IoMdAlert color="red" size="20" />
                )
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                type="text"
                id="sexo"
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                onBlur={() => handleBlur("sexo")}
              />
              {formData.sexo && (
                <IoMdCheckmarkCircle color="green" size={20} />
              )}
            </div>
          </FormGroup>
        </div>
        <Button type="submit">Enviar</Button>
      </Form>
    </ModalContainer>
  );
}

export default Modal;
