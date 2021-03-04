export const validationRegisterInputs = ({
  username,
  passsword,
  email,
  confirmPassword,
}) => {
  let error = "";
  if (username.trim() === "") {
    error = "El nombre de usuario no debe ser vacío";
  }

  if (confirmPassword !== passsword) {
    error = "Las contraseñas no son iguales";
  }
  if (passsword.trim() === "") {
    error = "La contraseña no deberia estar vacío";
  }
  if (email.trim() === "") {
    error = "El email no debe ser vacío";
  } else {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email.match(regex)) {
      error = "Email no válido";
    }
  }
  return {
    error,
    hasErrors: error !== "",
  };
};

export const validateLoginInputs = ({ username, passsword }) => {
  let error = "";
  if (username.trim() === "") {
    error = "El nombre de usuario no debe ser vacío";
  }
  if (passsword.trim() === "") {
    error = "La contraseña no deberia estar vacío";
  }
  return {
    error,
    hasErrors: error !== "",
  };
};
