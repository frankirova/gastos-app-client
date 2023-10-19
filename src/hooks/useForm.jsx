import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);
  const [hasError, setHasError] = useState({});

  const validateForm = (formState) => {
    let hasError = {};
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!formState.email) {
      hasError.email = "El campo email es requerido";
    } else if (!regexEmail.test(formState.email.trim())) {
      hasError.email = "Formato incorrecto";
    }
    if (!formState.direction) {
      hasError.direction = "La direccion es requerida";
    }
    if (!formState.formaDePago) {
      hasError.formaDePago = "El metodo de pago es requerido";
    }
    return hasError;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setHasError(validateForm(formState));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasError(validateForm(formState));
    if (Object.keys(hasError).length === 0) {
      alert("enviando formulario");
    }
  };

  const handleReset = () => {
    setFormState(initialValue);
  };

  const updateFormState = (newValue) => {
    setFormState(newValue);
  };

  return {
    formState,
    ...formState,
    handleChange,
    handleSubmit,
    handleReset,
    updateFormState,
    hasError,
    handleBlur,
  };
};
