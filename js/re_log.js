document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a las secciones y botones
    var registrationSection = document.getElementById("registrationSection");
    var loginSection = document.getElementById("loginSection");
    var registrationButton = document.getElementById("registrationButton");
    var loginButton = document.getElementById("loginButton");

    // Mostrar la sección de registro al cargar la página
    registrationSection.style.display = "block";
    loginSection.style.display = "none";

    // Función para cambiar a la sección de registro
    registrationButton.addEventListener("click", function () {
        registrationSection.style.display = "block";
        loginSection.style.display = "none";
    });

    // Función para cambiar a la sección de inicio de sesión
    loginButton.addEventListener("click", function () {
        registrationSection.style.display = "none";
        loginSection.style.display = "block";
    });
});
