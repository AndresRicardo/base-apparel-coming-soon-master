const emailInput = document.getElementById("emailInput");
const validateMessage = document.getElementById("validateMessage");
const submit = document.getElementById("submit");

const regExpEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

submit.addEventListener("click", (e) => {
    e.preventDefault(); // al tener esta opcion, el navegador no ejecuta las validaciones establecidas en el html
    // e.stopPropagation();
    if (!regExpEmail.test(emailInput.value.toLowerCase())) {
        validateMessage.textContent = "Please provide a valid email";
        validateMessage.style.color = "hsl(0, 93%, 68%)";
        validateMessage.style.display = "block";
        return;
    }

    validateMessage.textContent = "Email sent";
    validateMessage.style.color = "#20c997";
    validateMessage.style.display = "block";
});
