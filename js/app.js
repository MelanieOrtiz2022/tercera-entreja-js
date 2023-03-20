// Array de usuarios
const users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" }
];

// Función para verificar credenciales
function login(event) {
    event.preventDefault(); // Prevenir la acción por defecto del submit

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Buscar usuario en el array
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Guardar el usuario en el Local Storage
        localStorage.setItem("user", JSON.stringify(user));

        // Redireccionar a la página de inicio
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

// Event listener para el submit del formulario
const form = document.querySelector("form");
form.addEventListener("submit", login);
