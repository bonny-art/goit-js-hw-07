const form = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;

  const emailText = email.value.trim();
  const passwordText = password.value.trim();

  if (!emailText || !passwordText) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailText,
    password: passwordText,
  };

  console.table(formData);

  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
