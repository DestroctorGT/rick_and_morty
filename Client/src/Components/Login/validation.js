export default function validateInputs(userData) {
  const regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  let error = {};

  if (userData.name === "email") {
    if (!regexEmail.test(userData.value)) {
      error.email = "Email invalido";
    } else if (userData.value.length > 35) {
      error.email = "Usuario debe tener menos de 35 caracteres";
    }
  }

  if (userData.name === "password") {
    if (!regexPassword.test(userData.value)) {
      error.password = "Contraseña invalida";
    }
  }

  return error;
}
